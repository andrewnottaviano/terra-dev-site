/* eslint-disable no-param-reassign */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { DefinePlugin } = require('webpack');
const fs = require('fs');

const DirectorySwitcherPlugin = require('./resolve/DirectorySwitcherPlugin');
const LocalPackageAliasPlugin = require('./resolve/LocalPackageAliasPlugin');
const { babelLoader, mdxOptions, getMdxLoader } = require('./siteLoaderUtils');
const getNewRelicJS = require('../../scripts/new-relic/getNewRelicJS');

// Singletons
let oneTimeSetupComplete = false;
const siteRegistry = {};
const processPath = process.cwd();
const isLernaMonoRepo = fs.existsSync(path.join(processPath, 'lerna.json'));

/**
 * Updates the webpack options with defaults that terra-dev-site requires.
 */
class SitePlugin {
  constructor({
    entry,
    config,
    applyDefaults,
    contentDirectory,
  } = {}) {
    // Apply defaults to the config.
    this.config = applyDefaults(config);
    this.contentDirectory = contentDirectory;
    const { pathPrefix, titleConfig } = this.config;
    this.entry = entry;

    if (pathPrefix) {
      this.entryKey = `${pathPrefix}/index}`;
      this.resourceQuery = `?${pathPrefix}-terra-entry`;
      this.configResourceQuery = `?${pathPrefix}-terra-dev-site-config`;
      this.htmlFileName = `${pathPrefix}/index.html`;
      this.url = `/${pathPrefix}/`;
    } else {
      this.entryKey = 'index';
      this.resourceQuery = '?terra-entry';
      this.configResourceQuery = '?terra-dev-site-config';
      this.htmlFileName = 'index.html';
      this.url = '/';
    }

    if (siteRegistry[pathPrefix]) {
      throw Error('The PathPrefix must be unique per TerraDevSite Plugin');
    }
    // Register each application instance with the siteRegistry
    siteRegistry[pathPrefix] = {
      path: pathPrefix,
      url: this.url,
      title: titleConfig.title,
      entry: this.entryKey,
    };
  }

  static applyOneTimeSetup({
    compiler,
    sourceFolder,
    distributionFolder,
    basename,
  }) {
    if (oneTimeSetupComplete) {
      return;
    }
    oneTimeSetupComplete = true;

    // MODULE
    const mdxLoader = getMdxLoader(compiler.options.output.publicPath);
    compiler.options.module.rules = [{
      // Drop loaders in a 'one of' block to avoid the original loaders applying on top of the new loaders.
      // Only the first loader will apply and no others.
      oneOf: [{
        test: /\.mdx$/,
        use: [
          babelLoader,
          mdxLoader,
        ],
      }, {
        test: /\.md$/,
        oneOf: [
          {
            // Use MDX to import any md files imported from an mdx file.
            issuer: [
              /\.mdx?$/,
              /\.dev-site-config-template$/,
            ],
            use: [
              babelLoader,
              mdxLoader,
            ],
          },
          {
            use: 'raw-loader',
          },
        ],
      }, {
        resourceQuery: '?dev-site-codeblock',
        // this bypasses the default json loader
        type: 'javascript/auto',
        use: [
          babelLoader,
          mdxLoader,
          {
            loader: 'devSiteCodeblock',
            options: {
              resolveExtensions: compiler.options.resolve.extensions,
            },
          },
        ],
      }, {
        resourceQuery: '?dev-site-example',
        use: [
          babelLoader,
          'devSiteExample',
        ],
      }, {
        test: /\.json$/,
        // this bypasses the default json loader
        type: 'javascript/auto',
        resourceQuery: '?dev-site-package',
        use: [
          babelLoader,
          'devSitePackage',
        ],
      }, {
        resourceQuery: '?dev-site-props-table',
        use: [
          babelLoader,
          {
            loader: 'devSitePropsTable',
            options: {
              mdx: mdxOptions(compiler.options.output.publicPath),
              resolveExtensions: compiler.options.resolve.extensions,
            },
          },
        ],
      },
      // Spread the original loaders. These will be applied if all above loaders fail.
      ...compiler.options.module.rules,
      ],
    }];

    // RESOLVE
    // If plugins is not defined, define it.
    if (!compiler.options.resolve.plugins) {
      compiler.options.resolve.plugins = [];
    }

    // If a mono repo, update the rootDirectories to include all the packages.
    const rootDirectories = [
      ...isLernaMonoRepo ? [path.resolve(processPath, 'packages', '*')] : [processPath],
    ];

    // Switch between source and distribution files.
    compiler.options.resolve.plugins.push(
      new DirectorySwitcherPlugin({
        shouldSwitch: compiler.options.mode !== 'production',
        source: sourceFolder,
        distribution: distributionFolder,
        rootDirectories,
      }),
    );

    // Alias the local package to allow imports to reference the file as if it was imported from node modules.
    compiler.options.resolve.plugins.push(
      new LocalPackageAliasPlugin({
        rootDirectories,
      }),
    );

    // RESOLVE LOADER
    // add the path to search for dev site loaders
    compiler.options.resolveLoader.modules = [
      path.resolve(__dirname, '..', 'loaders'),
      'node_modules',
    ];

    // generate the 404 page.
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: path.join(__dirname, '..', '..', 'lib', '404.html'),
      inject: 'head',
      chunks: ['redirect'],
    }).apply(compiler);

    // WEBPACK DEV SERVER
    if (compiler.options.devServer) {
      // Setting this to enable browser routing
      compiler.options.devServer.historyApiFallback = true;
    }

    new DefinePlugin({
      // Base name is used to namespace terra-dev-site this is used in redirect.js which is only used in the 404 page.
      TERRA_DEV_SITE_BASENAME: JSON.stringify(basename),
    }).apply(compiler);
  }

  apply(compiler) {
    // Use default public path else the env else /
    let defaultPublicPath;
    if (compiler.options.output && compiler.options.output.publicPath) {
      defaultPublicPath = compiler.options.output.publicPath;
    }
    const publicPath = defaultPublicPath || process.env.TERRA_DEV_SITE_PUBLIC_PATH || '/';

    // OUTPUT
    compiler.options.output.publicPath = publicPath;

    const { sourceFolder, distributionFolder } = this.config;

    // Since there can be multiple dev site plugins this config we only want to do once for all of them.
    SitePlugin.applyOneTimeSetup({ compiler, sourceFolder, distributionFolder });

    // ENTRY
    compiler.options.entry = {
      ...compiler.options.entry,
      [this.entryKey]: `${path.join(__dirname, '..', '..', 'src', 'templates', 'entry.template')}${this.resourceQuery}`,
    };

    // Strip the trailing / from the public path.
    let basename = publicPath.slice(0, -1);

    // Get the list of apps excluding this current app.
    const filteredApps = Object.values(siteRegistry).filter(app => app.path !== this.config.pathPrefix);

    // Map to what we want to send to site config
    const otherApps = filteredApps.map((app) => ({
      path: app.path,
      title: app.title,
      url: `${basename}${app.url}`,
    }));

    // if there is a path prefix we want to update the react router basename to include the prefix.
    if (this.config.pathPrefix) {
      basename = [basename, this.config.pathPrefix].join('/');
    }

    // MODULE
    // we know there is a oneOf here because we just added it.
    compiler.options.module.rules[0].oneOf.unshift({
      // This loader generates the entrypoint and sets up the config template path and resource query.
      resourceQuery: this.resourceQuery,
      use: [
        babelLoader,
        {
          loader: 'devSiteEntry',
          options: {
            entryPath: this.entry,
            configTemplatePath: `${path.join(__dirname, '..', '..', 'src', 'templates', 'terra.dev-site-config-template')}${this.configResourceQuery}`,
          },
        },
      ],
    });

    compiler.options.module.rules[0].oneOf.unshift({
      // This loader generates the siteConfig for the site.
      resourceQuery: this.configResourceQuery,
      use: [
        babelLoader,
        {
          loader: 'devSiteConfig',
          options: {
            siteConfig: this.config,
            mode: compiler.options.mode,
            prefix: this.config.pathPrefix,
            apps: otherApps,
            basename,
            resolveExtensions: compiler.options.resolve.extensions,
            isLernaMonoRepo,
            contentDirectory: this.contentDirectory,
          },
        },
      ],
    });

    // Generate the index.html file for the site.
    new HtmlWebpackPlugin({
      title: this.config.titleConfig.title,
      direction: this.config.defaultDirection,
      filename: this.htmlFileName,
      template: path.join(__dirname, '..', '..', 'lib', 'index.html'),
      rootElementId: 'root',
      favicon: this.config.faviconFilePath,
      headHtml: [getNewRelicJS()].concat(this.config.headHtml),
      headChunks: ['rewriteHistory'],
      excludeChunks: ['redirect', ...Object.values(filteredApps).map(app => app.entry)],
      inject: false, // This turns off auto injection. We handle this ourselves in the template.
    }).apply(compiler);
  }
}

module.exports = SitePlugin;
