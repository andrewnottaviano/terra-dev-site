(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1e3:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));a(0);var n=a(225),r=a(916);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s={};function c(e){var t=e.components,a=d(e,["components"]);return Object(n.mdx)("wrapper",o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("h2",{id:"npm-badge"},"Npm Badge"),Object(n.mdx)(r.a,{mdxType:"Badge"}),Object(n.mdx)("h2",{id:"custom-badge"},"Custom Badge"),Object(n.mdx)(r.a,{url:"https://www.google.com",mdxType:"Badge"}))}c.isMDXComponent=!0},902:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(0)),r=s(a(1)),o=s(a(2)),d=s(a(903));function s(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(d.default),u={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},l=function(e){var t=e.src,a=e.name,r=e.url,o=e.version,d=n.default.createElement("a",{className:c("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},n.default.createElement("span",{className:c("badge-name")},r?"package":"npm"),n.default.createElement("span",{className:c("badge-version")},"v".concat(o))),s=t?n.default.createElement("a",{className:c("badge"),href:t},n.default.createElement("span",{className:c("badge-name")},"github"),n.default.createElement("span",{className:c("badge-version")},"source")):void 0;return n.default.createElement("div",{className:c("badge-container")},d,s)};l.propTypes=u;var i=l;t.default=i},903:function(e,t,a){e.exports={badge:"Badges-module__badge___3MvWj","badge-container":"Badges-module__badge-container___2N8Uj","badge-name":"Badges-module__badge-name___2yQFZ","badge-version":"Badges-module__badge-version___8krqj"}},916:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),o=a(902),d=a.n(o),s=function(e){var t=e.url;return r.a.createElement(d.a,{src:"https://github.com/cerner/terra-dev-site/tree/main/src/loader-components",name:"terra-dev-site",version:"6.2.0",url:t})}}}]);