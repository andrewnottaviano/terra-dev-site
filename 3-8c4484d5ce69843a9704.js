(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{897:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,t&&t.set(e,n);return n}(n(0)),l=s(n(1)),o=s(n(2)),c=n(63),u=s(n(906)),i=s(n(138)),d=n(13),m=s(n(907));function s(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var y=o.default.bind(m.default),x={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},O=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,o=e.description,m=e.isExpanded,s=f((0,r.useState)(m),2),p=s[0],b=s[1],x=f((0,r.useState)(!1),2),O=x[0],h=x[1],E=r.default.useContext(c.ThemeContext),g=void 0!==a,j=function(){h(!O),p&&b(!p)},N=function(){b(!p),O&&h(!O)},w=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:y("template",E.className)},r.default.createElement("div",{className:y("header")},l&&r.default.createElement("h2",{className:y("title")},l)),r.default.createElement("div",{className:y("content")},o&&r.default.createElement("div",{className:y("description")},o),t),r.default.createElement("div",{className:y("footer")},n?r.default.createElement("div",{className:y("button-container")},g&&r.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":O}),onClick:j,onKeyDown:function(e){return w(e,j)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:y("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(i.default,{className:y("chevron")})),r.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":p}),onClick:N,onKeyDown:function(e){return w(e,N)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:y("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(i.default,{className:y("chevron")}))):null,r.default.createElement("div",null,O&&r.default.createElement("div",{className:y("css")},a),p&&r.default.createElement("div",{className:y("code")},n))))};O.propTypes=x,O.defaultProps={isExpanded:!1};var h=O;t.default=h},904:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0);var a=n(225);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={};function c(e){var t=e.components,n=l(e,["components"]);return Object(a.mdx)("wrapper",r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",r({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport classNames from 'classnames/bind';\nimport styles from './example.scss';\n\nconst cx = classNames.bind(styles);\n\nconst TagComp = () => (\n  <h1 className={cx('body')}>\n    I am a test\n  </h1>\n);\n\nexport default TagComp;\n\n")))}c.isMDXComponent=!0},906:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(10));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=c;t.default=u},907:function(e,t,n){e.exports={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1R4MU","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1M4Yw",template:"ExampleTemplate-module__template___3KR51",header:"ExampleTemplate-module__header___3liFm",content:"ExampleTemplate-module__content___U19d7",description:"ExampleTemplate-module__description___3eh1T",footer:"ExampleTemplate-module__footer___2gHXQ","button-container":"ExampleTemplate-module__button-container___XCXdE",css:"ExampleTemplate-module__css___yaH9y",code:"ExampleTemplate-module__code___2S6sj","css-toggle":"ExampleTemplate-module__css-toggle___3hTPi","code-toggle":"ExampleTemplate-module__code-toggle___1HG6b","is-selected":"ExampleTemplate-module__is-selected___hAxOI",item:"ExampleTemplate-module__item___17d1R",chevron:"ExampleTemplate-module__chevron___2b89F",title:"ExampleTemplate-module__title___3JA_X","dynamic-content":"ExampleTemplate-module__dynamic-content___3KBaY"}},908:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0);var a=n(225);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={};function c(e){var t=e.components,n=l(e,["components"]);return Object(a.mdx)("wrapper",r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",r({parentName:"pre"},{className:"language-scss"}),":global {\n  body,\n  #root {\n    height: 100%;\n  }\n}\n\n")))}c.isMDXComponent=!0},913:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(914),o=n.n(l),c=n(904),u=n(897),i=n.n(u),d=n(908);t.a=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(i.a,{title:t||"Example",description:n,example:r.a.createElement(o.a,null),exampleCssSrc:r.a.createElement(d.a,null),exampleSrc:r.a.createElement(c.a,null),isExpanded:a})}},914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(2)),l=o(n(915));function o(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(l.default),u=function(){return a.default.createElement("h1",{className:c("body")},"I am a test")};t.default=u},915:function(e,t,n){},956:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));n(0);var a=n(225),r=n(913);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={};function u(e){var t=e.components,n=o(e,["components"]);return Object(a.mdx)("wrapper",l({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"example-loader"},"Example Loader"),Object(a.mdx)("p",null,"The Example loader will take the passed in file, add it to an example template then locate the source for the file in the src folder and render the example output.\nThe file must be a react component that requires no additional props to render. The Example loader will also look for the first css file import and also provide\nthe scss snippet."),Object(a.mdx)("h2",{id:"resource-query"},"Resource query"),Object(a.mdx)("p",null,Object(a.mdx)("inlineCode",{parentName:"p"},"?dev-site-example")),Object(a.mdx)("h2",{id:"props"},"Props"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Prop"),Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"type"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"title"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"string")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"description"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"string")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"isExpanded"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"bool")))),Object(a.mdx)("h2",{id:"example"},"Example"),Object(a.mdx)("pre",null,Object(a.mdx)("code",l({parentName:"pre"},{className:"language-jsx"}),'import Example from \'./example?dev-site-example\';\n\n<Example />\n\n// A custom title and description can be added.\n<Example title="Custom Title" description="Custom description" />\n\n// The code can be expanded by default\n<Example isExpanded />\n')),Object(a.mdx)("h2",{id:"rendered-example"},"Rendered Example"),Object(a.mdx)(r.a,{mdxType:"Example"}))}u.isMDXComponent=!0}}]);