(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1045:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n(0),a=n.n(r),o=n(225),l=n(913),u=n(940),c=n.n(u);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m={};function d(e){var t=e.components,n=s(e,["components"]);return Object(o.mdx)("wrapper",i({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n\nconst TagComp = () => (\n  <h1>\n    I am a test\n  </h1>\n);\n\nexport default TagComp;\n\n")))}d.isMDXComponent=!0;var p=n(897),f=n.n(p),y=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Example 2",description:n,example:a.a.createElement(c.a,null),exampleSrc:a.a.createElement(d,null),isExpanded:r})};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function x(e){var t=e.components,n=_(e,["components"]);return Object(o.mdx)("wrapper",b({},v,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Example"}),Object(o.mdx)("h1",{id:"custom-title-and-description"},"Custom title and description"),Object(o.mdx)(l.a,{title:"Custom Title",description:"Custom description",mdxType:"Example"}),Object(o.mdx)("h1",{id:"expanded-by-default"},"Expanded by default"),Object(o.mdx)(l.a,{isExpanded:!0,mdxType:"Example"}),Object(o.mdx)("h1",{id:"no-imported-css-file"},"No Imported CSS File"),Object(o.mdx)(y,{mdxType:"ExampleTwo"}))}x.isMDXComponent=!0},897:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=d(n(1)),l=d(n(2)),u=n(63),c=d(n(906)),i=d(n(138)),s=n(13),m=d(n(907));function d(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=l.default.bind(m.default),_={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},O=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,o=e.title,l=e.description,m=e.isExpanded,d=f((0,a.useState)(m),2),p=d[0],y=d[1],_=f((0,a.useState)(!1),2),O=_[0],E=_[1],h=a.default.useContext(u.ThemeContext),g=void 0!==r,j=function(){E(!O),p&&y(!p)},w=function(){y(!p),O&&E(!O)},T=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return a.default.createElement("div",{className:b("template",h.className)},a.default.createElement("div",{className:b("header")},o&&a.default.createElement("h2",{className:b("title")},o)),a.default.createElement("div",{className:b("content")},l&&a.default.createElement("div",{className:b("description")},l),t),a.default.createElement("div",{className:b("footer")},n?a.default.createElement("div",{className:b("button-container")},g&&a.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":O}),onClick:j,onKeyDown:function(e){return T(e,j)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(c.default,{className:b("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(i.default,{className:b("chevron")})),a.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":p}),onClick:w,onKeyDown:function(e){return T(e,w)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(c.default,{className:b("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(i.default,{className:b("chevron")}))):null,a.default.createElement("div",null,O&&a.default.createElement("div",{className:b("css")},r),p&&a.default.createElement("div",{className:b("code")},n))))};O.propTypes=_,O.defaultProps={isExpanded:!1};var E=O;t.default=E},904:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n(0);var r=n(225);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={};function u(e){var t=e.components,n=o(e,["components"]);return Object(r.mdx)("wrapper",a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport classNames from 'classnames/bind';\nimport styles from './example.scss';\n\nconst cx = classNames.bind(styles);\n\nconst TagComp = () => (\n  <h1 className={cx('body')}>\n    I am a test\n  </h1>\n);\n\nexport default TagComp;\n\n")))}u.isMDXComponent=!0},906:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(10));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=u;t.default=c},907:function(e,t,n){e.exports={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1R4MU","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1M4Yw",template:"ExampleTemplate-module__template___3KR51",header:"ExampleTemplate-module__header___3liFm",content:"ExampleTemplate-module__content___U19d7",description:"ExampleTemplate-module__description___3eh1T",footer:"ExampleTemplate-module__footer___2gHXQ","button-container":"ExampleTemplate-module__button-container___XCXdE",css:"ExampleTemplate-module__css___yaH9y",code:"ExampleTemplate-module__code___2S6sj","css-toggle":"ExampleTemplate-module__css-toggle___3hTPi","code-toggle":"ExampleTemplate-module__code-toggle___1HG6b","is-selected":"ExampleTemplate-module__is-selected___hAxOI",item:"ExampleTemplate-module__item___17d1R",chevron:"ExampleTemplate-module__chevron___2b89F",title:"ExampleTemplate-module__title___3JA_X","dynamic-content":"ExampleTemplate-module__dynamic-content___3KBaY"}},908:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n(0);var r=n(225);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={};function u(e){var t=e.components,n=o(e,["components"]);return Object(r.mdx)("wrapper",a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",a({parentName:"pre"},{className:"language-scss"}),":global {\n  body,\n  #root {\n    height: 100%;\n  }\n}\n\n")))}u.isMDXComponent=!0},913:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(914),l=n.n(o),u=n(904),c=n(897),i=n.n(c),s=n(908);t.a=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(i.a,{title:t||"Example",description:n,example:a.a.createElement(l.a,null),exampleCssSrc:a.a.createElement(s.a,null),exampleSrc:a.a.createElement(u.a,null),isExpanded:r})}},914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(2)),o=l(n(915));function l(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(o.default),c=function(){return r.default.createElement("h1",{className:u("body")},"I am a test")};t.default=c},915:function(e,t,n){},940:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(0))&&r.__esModule?r:{default:r};var o=function(){return a.default.createElement("h1",null,"I am a test")};t.default=o}}]);