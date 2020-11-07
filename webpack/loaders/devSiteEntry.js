const lodashTemplate = require('lodash.template');
const { getOptions } = require('loader-utils');

const generateNavigationConfig = require('../loaderUtils/generateNavigationConfig');

const imports = {};
let index = 0;

const addImport = (path) => {
  let ident = imports[path];
  if (ident) {
    return ident;
  }
  ident = `import${index}`;
  index += 1;
  imports[path] = ident;
  return ident;
};

/**
 * Generate the example with the supplied file.
 * Don't use an arrow function
 */
const loader = async function loader(template) {
  const callback = this.async();

  const {
    entryPath,
    siteConfig,
    basename,
    resolveExtensions,
    sites,
    contentDirectory,
    isLernaMonoRepo,
  } = getOptions(this);

  const extensionItems = (siteConfig.extensionItems || []).map((ext) => ({
    key: ext.key,
    text: ext.text,
    icon: addImport(ext.iconPath),
    modal: addImport(ext.modalPath),
  }));

  const {
    contentImports,
    navigationConfig,
    routesMap,
    pageConfig,
  } = generateNavigationConfig({
    siteConfig,
    resolveExtensions,
    mode: this.mode,
    verbose: false,
    contentDirectory,
    isLernaMonoRepo,
    addContextDependency: this.addContextDependency,
  });

  return callback(null, lodashTemplate(template)({
    entryPath,
    title: siteConfig.titleConfig.title,
    headline: siteConfig.titleConfig.headline,
    subline: siteConfig.titleConfig.subline,
    defaultTheme: siteConfig.defaultTheme,
    defaultLocale: siteConfig.defaultLocale,
    defaultDirection: siteConfig.defaultDirection,
    basename,
    contentImports,
    navigationConfig: JSON.stringify(navigationConfig),
    routesMap: JSON.stringify(routesMap),
    pageConfig: JSON.stringify(pageConfig),
    extensionItems,
    imports,
    sites: JSON.stringify(sites),
    sideEffectImportFilePaths: siteConfig.sideEffectImportFilePaths,
  }));
};

module.exports = loader;
