(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1050:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(0),r=n.n(a),i=n(225),o=n(902),d=n.n(o),s=function(e){var t=e.url;return r.a.createElement(d.a,{src:"https://github.com/cerner/terra-dev-site",name:"terra-dev-site",version:"6.32.0",url:t})};function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function m(e){var t=e.components,n=c(e,["components"]);return Object(i.mdx)("wrapper",l({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(s,{mdxType:"Badge"}),Object(i.mdx)("h1",{id:"terra-dev-site"},"Terra Dev Site"),Object(i.mdx)("p",null,"Terra-dev-site offers a quick test site to host examples and documentation for your react components or markdown documentation. Terra dev site is intended for speed development of reusable node modules utilizing terra that are intended to be shared between applications."),Object(i.mdx)("h2",{id:"quick-start"},"Quick start"),Object(i.mdx)("h3",{id:"installation"},"Installation"),Object(i.mdx)("pre",null,Object(i.mdx)("code",l({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev terra-dev-site\n")),Object(i.mdx)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"README.md in the root project directory"),Object(i.mdx)("li",{parentName:"ul"},"Package.json in the root project directory"),Object(i.mdx)("li",{parentName:"ul"},"es6 code in src"),Object(i.mdx)("li",{parentName:"ul"},"transpiled code in lib"),Object(i.mdx)("li",{parentName:"ul"},"babel 7.5 is required to transpile the ",Object(i.mdx)("inlineCode",{parentName:"li"},"dev-site-config/build")," folder at webpack time.")),Object(i.mdx)("h3",{id:"running-terra-dev-site"},"Running terra-dev-site"),Object(i.mdx)("p",null,"Using the TerraDevSite webpack plugin, a static site will be built to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"dev-site-config/build")," directory and can be served using either ",Object(i.mdx)("inlineCode",{parentName:"p"},"webpack-dev-server"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"tt-serve")," or served statically using something like gh-pages. A simple example consuming the webpack plugin is shown below. Extending from terra-toolkit's webpack config is highly recommended."),Object(i.mdx)("pre",null,Object(i.mdx)("code",l({parentName:"pre"},{className:"language-javascript"}),"const toolkitWebpackConfig = require('terra-toolkit/config/webpack/webpack.config')\nconst merge = require('webpack-merge');\nconst { TerraDevSite, TerraDevSiteEntrypoints, DirectorySwitcherPlugin, LocalPackageAliasPlugin } = require('terra-dev-site');\n\n/**\n* Generates the file representing app name configuration.\n*/\nconst devSiteConfig = (env = {}, argv = {}) => {\n  const production = argv.p;\n\n  return {\n    entry: TerraDevSiteEntrypoints,\n    plugins: [\n      new TerraDevSite({ env }),\n    ],\n    resolve: {\n      plugins: [\n        new DirectorySwitcherPlugin({\n          shouldSwitch: !production,\n        }),\n        new LocalPackageAliasPlugin({}),\n      ],\n    },\n  };\n};\n\nconst webpackConfig = (env, argv) => (\n  merge(toolkitWebpackConfig(env, argv), devSiteConfig(env, argv))\n);\n\nmodule.exports = webpackConfig;\n")),Object(i.mdx)("p",null,"To serve using ",Object(i.mdx)("inlineCode",{parentName:"p"},"tt-serve"),", add the following terra-toolkit command to your package.json. See the ",Object(i.mdx)("a",l({parentName:"p"},{href:"https://github.com/cerner/terra-toolkit-boneyard/blob/main/scripts/serve/Serve.md#cli"}),"tt-serve docs")," for more information on the command options."),Object(i.mdx)("pre",null,Object(i.mdx)("code",l({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "start": "tt-serve\n  }\n}\n')),Object(i.mdx)("h3",{id:"quick-start-1"},"Quick Start"),Object(i.mdx)("p",null,"After adding the start command to your package.json, run it and navigate to http://localhost:8080/#/site to view the site in your browser:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",l({parentName:"pre"},{className:"language-bash"}),"npm run start\n")),Object(i.mdx)("p",null,"You will see your readme hosted on the site. Next lets add some pages."),Object(i.mdx)("p",null,"Terra-dev-site will auto discover files base on either the default search patterns in the site.config or the file structure and file extensions used."),Object(i.mdx)("p",null,"Add the following file to: ",Object(i.mdx)("inlineCode",{parentName:"p"},"<package>/src/terra-dev-site/my-first-page.doc.md")),Object(i.mdx)("pre",null,Object(i.mdx)("code",l({parentName:"pre"},{className:"language-md"}),"My first page!\n")),Object(i.mdx)("p",null,"Then re-run the site and navigate to it in your browser:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",l({parentName:"pre"},{className:"language-bash"}),"npm run start\n")),Object(i.mdx)("p",null,"Now you should be able to see your page under the components tab."),Object(i.mdx)("h2",{id:"auto-page-discovery"},"Auto Page Discovery"),Object(i.mdx)("p",null,"By default terra-dev-site will look for files in the ",Object(i.mdx)("inlineCode",{parentName:"p"},"./src/terra-dev-site")," folder in dev mode and ",Object(i.mdx)("inlineCode",{parentName:"p"},"./lib/terra-dev-site")," for prod mode. In an monorepo it will search for files in ",Object(i.mdx)("inlineCode",{parentName:"p"},"./packages/{src,lib}/terra-dev-site"),". The file directories and file names are used to build the menu navigation of the site."),Object(i.mdx)("h3",{id:"directories"},"Directories"),Object(i.mdx)("p",null,"The directories following the entry point folder (terra-dev-site by default) will be translated into part of the menu structure. The one exception is if you have a 'pageType' directory inside the entry point folder, it will be ignored. This lets you group page types together without impacting your site."),Object(i.mdx)("h3",{id:"file-naming"},"File Naming"),Object(i.mdx)("p",null,"Files need to be named using the correct 'pageType' indicator and file extension to be added to the site. This will allow you to add any additional files to support your examples and only have the specified files added as entries to the site. The file name pattern is:"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"<filename>.<group>.<pageType>.<extension>")),Object(i.mdx)("p",null,"The components of the file name pattern are:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"filename - This is the name that will be added to the side menu for the site. These are sorted alphabetically."),Object(i.mdx)("li",{parentName:"ul"},"group - (optional) This allows you to sort menu items. The group is sorted alphabetically."),Object(i.mdx)("li",{parentName:"ul"},"pageType - This indicates which primary navigation item the page will be rendered under. The default pageTypes are 'home', 'doc', and 'test'."),Object(i.mdx)("li",{parentName:"ul"},"extension - .md and .mdx extensions are supported by default. Other extensions can be added by updating the projects webpack config by adding additional extensions to the resolve field.")),Object(i.mdx)("h3",{id:"auto-discovery-example"},"Auto Discovery Example"),Object(i.mdx)("p",null,"Given a directory structure like this:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",l({parentName:"pre"},{}),"src/\n  terra-dev-site/\n    doc/\n      upgradeGuide.a.doc.md\n      examples.c/\n        supportingFile.js\n        myGreatExample.doc.jsx\n      example.b.doc.js\n    test/\n      testfile.test.js\n      docInTestFolder.doc.js\n")),Object(i.mdx)("p",null,"The menu navigation result will be:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",l({parentName:"pre"},{}),"-Components-\n  Upgrade Guide\n  Example\n  Examples >\n     My Great Example\n  Test >\n     Doc In Test Folder\n-Test-\n  Testfile\n")),Object(i.mdx)("h2",{id:"path-based-routing-deployments"},"Path based routing deployments"),Object(i.mdx)("p",null,"To support path based routing for gh-pages style deployments, you must supply an env variable, ",Object(i.mdx)("inlineCode",{parentName:"p"},"TERRA_DEV_SITE_PUBLIC_PATH"),", describing the path for assets to be served from."),Object(i.mdx)("p",null,"For example, for a page hosted on github pages with a url of: ",Object(i.mdx)("a",l({parentName:"p"},{href:"http://cerner.github.com/terra-dev-site"}),"http://cerner.github.com/terra-dev-site"),". The environment variable should be set as follows."),Object(i.mdx)("pre",null,Object(i.mdx)("code",l({parentName:"pre"},{className:"language-bash"}),"TERRA_DEV_SITE_PUBLIC_PATH='/terra-dev-site/'\n")),Object(i.mdx)("p",null,"Without the environment variable set assets will assume they are served from ",Object(i.mdx)("inlineCode",{parentName:"p"},"/")," when they should be served from ",Object(i.mdx)("inlineCode",{parentName:"p"},"/terra-dev-site/")),Object(i.mdx)("h2",{id:"how-terra-dev-site-works"},"How Terra-Dev-Site Works"),Object(i.mdx)("p",null,"The terra-dev-site's webpack plugin calls the pre-build tool ",Object(i.mdx)("inlineCode",{parentName:"p"},"generateAppConfig"),". The generateAppConfig script builds out static configuration to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"./dev-site-config/build")," folder. ",Object(i.mdx)("inlineCode",{parentName:"p"},"generateAppConfig")," also discovers pages based on its configuration. After the static config has been built, webpack continues to run, pulling in the static config and producing the webpack bundle."),Object(i.mdx)("h2",{id:"debug"},"Debug"),Object(i.mdx)("p",null,"To get verbose output, add ",Object(i.mdx)("inlineCode",{parentName:"p"},"--env.verboseGenerateAppConfig")," to your webpack command or run ",Object(i.mdx)("inlineCode",{parentName:"p"},"tds-generate-app-config -v"),"."),Object(i.mdx)("h2",{id:"further-customization"},"Further customization:"),Object(i.mdx)("p",null,"Check out our ",Object(i.mdx)("a",l({parentName:"p"},{href:"/terra-dev-site/dev_tools/terra-dev-site/terra-dev-site/site-config/site-config"}),"Customization docs"),"."))}m.isMDXComponent=!0},902:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),r=d(n(1)),i=d(n(2)),o=d(n(903));function d(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(o.default),l={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,i=e.version,o=a.default.createElement("a",{className:s("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},a.default.createElement("span",{className:s("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:s("badge-version")},"v".concat(i))),d=t?a.default.createElement("a",{className:s("badge"),href:t},a.default.createElement("span",{className:s("badge-name")},"github"),a.default.createElement("span",{className:s("badge-version")},"source")):void 0;return a.default.createElement("div",{className:s("badge-container")},o,d)};c.propTypes=l;var p=c;t.default=p},903:function(e,t,n){e.exports={badge:"Badges-module__badge___3MvWj","badge-container":"Badges-module__badge-container___2N8Uj","badge-name":"Badges-module__badge-name___2yQFZ","badge-version":"Badges-module__badge-version___8krqj"}}}]);