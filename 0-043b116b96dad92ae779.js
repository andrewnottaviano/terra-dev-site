(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{917:function(e,n,t){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=l();if(n&&n.has(e))return n.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if(Object.prototype.hasOwnProperty.call(e,p)){var a=r?Object.getOwnPropertyDescriptor(e,p):null;a&&(a.get||a.set)?Object.defineProperty(t,p,a):t[p]=e[p]}t.default=e,n&&n.set(e,t);return t}(t(0)),p=m(t(1)),a=m(t(2)),u=t(63),c=m(t(918));function m(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}var s=a.default.bind(c.default),d={rows:p.default.arrayOf(p.default.shape({name:p.default.string,type:p.default.func,required:p.default.bool,defaultValue:p.default.string,description:p.default.func}))},i=function(e){var n=e.rows,t=(0,r.useContext)(u.ThemeContext);return r.default.createElement("table",{className:s("table",t.className)},r.default.createElement("thead",null,r.default.createElement("tr",{className:s("tr")},r.default.createElement("th",{className:s("th")},"Prop Name"),r.default.createElement("th",{className:s("th")},"Type"),r.default.createElement("th",{className:s("th")},"Is Required"),r.default.createElement("th",{className:s("th")},"Default Value"),r.default.createElement("th",{className:s("th")},"Description"))),r.default.createElement("tbody",null,n.map((function(e){return r.default.createElement("tr",{className:s("tr","props-tr"),key:e.name},r.default.createElement("td",{className:s(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:s(["td","props-td"])},e.type()),r.default.createElement("td",{className:s(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:s(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:s(["td","props-td"])},e.description()))}))))};i.propTypes=d;var f=i;n.default=f},918:function(e,n,t){e.exports={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___2lcRZ","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___Dk-mb",a:"PropsTable-module__a___3jmHr",blockquote:"PropsTable-module__blockquote___2_8KB",code:"PropsTable-module__code___2KKnm",dd:"PropsTable-module__dd___3-fnr",dl:"PropsTable-module__dl___1-aK-",dt:"PropsTable-module__dt___zsqRD",h1:"PropsTable-module__h1___3_J7C",h2:"PropsTable-module__h2___3kneX",h3:"PropsTable-module__h3___3tDXn",h4:"PropsTable-module__h4___3Smpq",h5:"PropsTable-module__h5___JbW-q",h6:"PropsTable-module__h6___15tXR","icon-link":"PropsTable-module__icon-link___3AieV",anchor:"PropsTable-module__anchor___gobp1",hr:"PropsTable-module__hr___2p3zc",img:"PropsTable-module__img___BKLT1",input:"PropsTable-module__input___7QjXj",kbd:"PropsTable-module__kbd___FQBlv",li:"PropsTable-module__li___2svn5",p:"PropsTable-module__p___14TgJ",ol:"PropsTable-module__ol___Nokj5",ul:"PropsTable-module__ul___3cngA",td:"PropsTable-module__td___19-Yf",pre:"PropsTable-module__pre___2vo2i",strong:"PropsTable-module__strong___1LrkK",table:"PropsTable-module__table___391ck",th:"PropsTable-module__th___2sgD9",tr:"PropsTable-module__tr___fGO-l",icon:"PropsTable-module__icon___3ftPX",required:"PropsTable-module__required___1p1FE","props-tr":"PropsTable-module__props-tr___Av7iJ","props-td":"PropsTable-module__props-td___1tG6V"}},919:function(e,n,t){"use strict";t(0);var o=t(225),r=t(917),p=t.n(r);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.a=function(){return Object(o.mdx)(p.a,{rows:[{name:"optionalArray",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"array"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An array"))}return n.isMDXComponent=!0,n({})}},{name:"optionalBool",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"true",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A boolean"))}return n.isMDXComponent=!0,n({})}},{name:"optionalFunc",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A function"))}return n.isMDXComponent=!0,n({})}},{name:"optionalNumber",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A number"))}return n.isMDXComponent=!0,n({})}},{name:"optionalObject",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An object"))}return n.isMDXComponent=!0,n({})}},{name:"optionalString",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A string"))}return n.isMDXComponent=!0,n({})}},{name:"optionalSymbol",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"symbol"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A symbol"))}return n.isMDXComponent=!0,n({})}},{name:"optionalNode",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types."))}return n.isMDXComponent=!0,n({})}},{name:"optionalElement",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"element"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A React element."))}return n.isMDXComponent=!0,n({})}},{name:"optionalElementType",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"elementType"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A React element type (ie. MyComponent)."))}return n.isMDXComponent=!0,n({})}},{name:"optionalMessage",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"instanceOf"),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-json"}),'"Message"\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"This uses JS's instanceof operator. Instance of should be described here. instanceOf(Message)"))}return n.isMDXComponent=!0,n({})}},{name:"optionalEnum",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-json"}),'[\n "News",\n "Photos"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An enum of values. Values should be described here. One of ",Object(o.mdx)("inlineCode",{parentName:"p"},"News")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"Photos")))}return n.isMDXComponent=!0,n({})}},{name:"optionalUnion",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"union"),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "instanceOf",\n  "value": "Message"\n }\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An object that could be one of many types. Supported types should be described here. Supports string, number, and instanceOf(Message)"))}return n.isMDXComponent=!0,n({})}},{name:"optionalArrayOf",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"arrayOf"),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-json"}),'{\n "name": "string"\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"['derp']",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An array of a certain type"))}return n.isMDXComponent=!0,n({})}},{name:"optionalObjectOf",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"objectOf"),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-json"}),'{\n "name": "number"\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An object with property values of a certain type. objectOf should be described here. objectOf(PropTypes.number)"))}return n.isMDXComponent=!0,n({})}},{name:"optionalObjectWithShape",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"shape"),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-json"}),'{\n "color": {\n  "name": "string",\n  "required": false\n },\n "fontSize": {\n  "name": "number",\n  "required": false\n }\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An object taking on a particular shape"))}return n.isMDXComponent=!0,n({})}},{name:"optionalObjectWithStrictShape",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"exact"),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-json"}),'{\n "name": {\n  "name": "string",\n  "required": false\n },\n "quantity": {\n  "name": "number",\n  "required": false\n }\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An object with warnings on extra properties"))}return n.isMDXComponent=!0,n({})}},{name:"requiredFunc",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Required prop"))}return n.isMDXComponent=!0,n({})}},{name:"requiredAny",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"any"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Another required prop"))}return n.isMDXComponent=!0,n({})}},{name:"intl",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"custom"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Internationalization object with translation APIs. Provided by ",Object(o.mdx)("inlineCode",{parentName:"p"},"injectIntl"),"."))}return n.isMDXComponent=!0,n({})}},{name:"mdx",type:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=u(n,["components"]);return Object(o.mdx)("wrapper",a({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An Example of fancypants markdown in the comment"),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-jsx"}),"<div>\n  <h1>\n   {intl.formatMessage({ id: 'Terra.devSite.themed.help' })}\n  </h1>\n</div>\n")))}return n.isMDXComponent=!0,n({})}}]})}}}]);