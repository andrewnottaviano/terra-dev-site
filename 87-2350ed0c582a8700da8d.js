(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1051:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));n(0);var o=n(225);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r={};function s(e){var t=e.components,n=a(e,["components"]);return Object(o.mdx)("wrapper",i({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",i({parentName:"pre"},{className:"language-js"}),"const navConfig = {\n  navigation: {\n    /* The first page to route to for the site. */\n    index: '/home',\n    /** List of top level nav items.\n     *   Link config options:\n     *      path: Path to the link.\n     *      text: The text to display on the navigation link.\n     *      pageTypes: The page extension(s) that should be displayed under this link.\n     *      capabilities: an object describing the capabilities of all pages listed under the specified path.\n     *          devTools: display development tools to allow switching between locales and themes.\n     */\n    links: [{\n      path: '/home',\n      text: 'Home',\n      pageTypes: ['home'],\n    }, {\n      path: '/components',\n      text: 'Components',\n      pageTypes: ['doc'],\n      capabilities: {\n        devTools: true,\n      },\n    }, {\n      path: '/tests',\n      text: 'Tests',\n      pageTypes: ['test'],\n      capabilities: {\n        devTools: true,\n      },\n    }],\n  },\n};\n\nmodule.exports = navConfig;\n\n")))}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}s.isMDXComponent=!0;var c={};function d(e){var t=e.components,n=l(e,["components"]);return Object(o.mdx)("wrapper",p({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"navigation-config"},"Navigation Config"),Object(o.mdx)("p",null,"Terra-dev-site requires a navigation configuration to build the main menu navigation links, as well as the page types associated with those links. Terra-dev-site package provides a ",Object(o.mdx)("a",p({parentName:"p"},{href:"https://github.com/cerner/terra-dev-site/blob/main/config/site/navigation.config.js"}),"default navigation config")," that is easily customizable. By default home, components, and tests are specified with the home, doc and test page types respectively. Links may be hidden if it is not desired to show the link at the top of the page; we have done with the test link by default."),Object(o.mdx)(s,{mdxType:"Config"}))}d.isMDXComponent=!0}}]);