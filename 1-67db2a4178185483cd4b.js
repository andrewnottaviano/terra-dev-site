(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{906:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(10));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i=function(e){var n=l({},e);return r.default.createElement(a.default,n,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;n.default=c},920:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(n,"Placeholder",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(n,"Button",{enumerable:!0,get:function(){return o.default}});var r=l(t(931)),a=l(t(933)),o=l(t(935));function l(e){return e&&e.__esModule?e:{default:e}}},921:function(e,n,t){e.exports={"placeholder-wrapper":"ActionHeaderDocCommon__placeholder-wrapper___28QRm"}},922:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));t(0);var r=t(225);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={};function i(e){var n=e.components,t=o(e,["components"]);return Object(r.mdx)("wrapper",a({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",a({parentName:"pre"},{className:"language-scss"}),":local {\n  .placeholder-wrapper {\n    height: 30px !important;\n    padding: 0;\n  }\n}\n\n")))}i.isMDXComponent=!0},924:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(0),a=t.n(r),o=t(902),l=t.n(o),i=function(e){var n=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-action-header",name:"terra-action-header",version:"2.60.0",url:n})}},925:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(53));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(a.default,{title:"Default Action Header"}),r.default.createElement("br",null))};n.default=l},926:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(53));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(a.default,{title:"Back Action Header",onBack:function(){return alert("You clicked back!")}}),r.default.createElement("br",null))};n.default=l},927:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(53));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(a.default,{title:"Back Close Action Header",onClose:function(){return alert("You clicked close!")},onBack:function(){return alert("You clicked back!")}}),r.default.createElement("br",null))};n.default=l},928:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(53));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(a.default,{title:"Close Action Header",onClose:function(){return alert("You clicked close!")}}),r.default.createElement("br",null))};n.default=l},929:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(53));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(a.default,{title:"Maximize Close Action Header",onClose:function(){return alert("You clicked close!")},onMaximize:function(){return alert("You clicked maximize!")}}),r.default.createElement("br",null))};n.default=l},930:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(0)),a=c(t(2)),o=c(t(53)),l=t(920),i=c(t(921));function c(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(i.default),d=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(o.default,{title:"Minimize Custom Button Action Header",onMinimize:function(){return alert("You clicked minimize!")},onClose:function(){return alert("You clicked close!")}},r.default.createElement(l.Placeholder,{className:u("placeholder-wrapper"),title:"Collapsible Menu View"})),r.default.createElement("br",null))};n.default=d},931:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(0)),a=c(t(1)),o=c(t(2)),l=c(t(6)),i=c(t(932));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(i.default),d={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important"])},s=function(e){var n=e.ariaLevel,t=e.variant,a=e.children,o=r.default.useContext(l.default);return r.default.createElement("div",{className:u("notice",t,o.className)},r.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:u("title"),"aria-level":n},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"error"}(t))),r.default.createElement("div",{className:u("children")},r.default.Children.map(a,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};s.propTypes=d,s.defaultProps={ariaLevel:"2",variant:"important"};var p=s;n.default=p},932:function(e,n,t){e.exports={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___3OQbq","orion-fusion-theme":"Notice-module__orion-fusion-theme___1x8e_","ux-recommendation":"Notice-module__ux-recommendation___3P-7i",title:"Notice-module__title___haLYj",caution:"Notice-module__caution___31ARq",deprecation:"Notice-module__deprecation___3RiTJ",accessory:"Notice-module__accessory___2oBUg",maintenance:"Notice-module__maintenance___1mCy-",important:"Notice-module__important___10L2x",notice:"Notice-module__notice___4TF5S",children:"Notice-module__children___1u-S_"}},933:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t(0)),a=u(t(1)),o=u(t(8)),l=u(t(2)),i=u(t(6)),c=u(t(934));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.default.bind(c.default),m={title:a.default.string},f=function(e){var n=e.title,t=s(e,["title"]),a=r.default.useContext(i.default),l=(0,o.default)(p(["placeholder",a.className]),t.className),c=p(["inner"]);return r.default.createElement("div",d({},t,{className:l}),r.default.createElement("div",{className:c},r.default.createElement("p",null,n)))};f.propTypes=m,f.defaultProps={title:""};var b=f;n.default=b},934:function(e,n,t){e.exports={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___1mYPR","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___kbg7L",placeholder:"Placeholder-module__placeholder___sr8Mc",inner:"Placeholder-module__inner___1ZYax"}},935:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(0)),a=c(t(1)),o=c(t(2)),l=c(t(6)),i=c(t(936));function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},f={children:a.default.string},b=function(e){var n=e.children,t=d(e,["children"]),a=r.default.useContext(l.default),i=(0,o.default)(s(["button",a.className]),t.className);return r.default.createElement("button",u({},t,{type:"button",className:i,onBlur:p,onMouseDown:m,"data-focus-styles-enabled":!0}),n)};b.propTypes=f;var v=b;n.default=v},936:function(e,n,t){e.exports={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___2BcCA","orion-fusion-theme":"Button-module__orion-fusion-theme___2qY15",button:"Button-module__button___3hCfu","is-active":"Button-module__is-active___2CCMj"}},937:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(53));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(a.default,{title:"Back Close Previous Next Action Header",onClose:function(){return alert("You clicked close!")},onBack:function(){return alert("You clicked back!")},onPrevious:function(){return alert("You clicked previous!")},onNext:function(){return alert("You clicked next!")}}),r.default.createElement("br",null))};n.default=l},938:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(0)),a=c(t(2)),o=c(t(53)),l=t(920),i=c(t(921));function c(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(i.default),d=function(){return r.default.createElement("div",null,r.default.createElement("br",null),r.default.createElement(o.default,{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci dolor, dignissim vitae risus vel, tristique egestas sapien. Vivamus blandit augue justo, id tincidunt justo luctus et. Morbi lacinia porttitor lacus, ac fermentum mauris tempus dapibus. Donec fringilla est ut ullamcorper consequat. Aliquam ornare efficitur ornare. Curabitur facilisis urna a congue gravida. Nulla accumsan non nisl sed elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",onMinimize:function(){return alert("You clicked minimize!")},onClose:function(){return alert("You clicked close!")}},r.default.createElement(l.Placeholder,{className:u("placeholder-wrapper"),title:"Collapsible Menu View"})),r.default.createElement("br",null))};n.default=d},939:function(e,n,t){"use strict";t(0);var r=t(225),a=t(917),o=t.n(a);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.a=function(){return Object(r.mdx)(o.a,{rows:[{name:"children",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"element"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Displays a single terra ",Object(r.mdx)("inlineCode",{parentName:"p"},"Collapsible Menu View")," (",Object(r.mdx)("em",{parentName:"p"},"Not provided by ",Object(r.mdx)("inlineCode",{parentName:"em"},"Action Header")),") child element on the right end of the header."))}return n.isMDXComponent=!0,n({})}},{name:"level",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"enum"),Object(r.mdx)("pre",null,Object(r.mdx)("code",l({parentName:"pre"},{className:"language-json"}),'[\n "1",\n "2",\n "3",\n "4",\n "5",\n "6"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"1",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Optionally sets the heading level. One of ",Object(r.mdx)("inlineCode",{parentName:"p"},"1"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"2"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"3"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"4"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"5"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"6"),". Default ",Object(r.mdx)("inlineCode",{parentName:"p"},"level=1"),". This helps screen readers to announce appropriate heading levels.\nChanging 'level' will not visually change the style of the content."))}return n.isMDXComponent=!0,n({})}},{name:"onClose",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Callback function for when the close button is clicked.\nOn small viewports, this will be triggered by a back button if onBack is not set."))}return n.isMDXComponent=!0,n({})}},{name:"onBack",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Callback function for when the back button is clicked. The back button will not display if this is not set."))}return n.isMDXComponent=!0,n({})}},{name:"onMaximize",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Callback function for when the expand button is clicked.\nThe expand button will not display if this is not set or on small viewports.\nOnly the expand button will be rendered if onMaximize and onMinimize are set."),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Note: If ",Object(r.mdx)("inlineCode",{parentName:"em"},"onBack")," is set, the maximize button will not appear and a custom maximize button must be provided\nas a child inside a ",Object(r.mdx)("inlineCode",{parentName:"em"},"Collapsible Menu View"),".")))}return n.isMDXComponent=!0,n({})}},{name:"onMinimize",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Callback function for when the minimize button is clicked.\nThe minimize button will not display if this is not set or on small viewports.\nOnly the expand button will be rendered if both onMaximize and onMinimize are set."),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Note: If ",Object(r.mdx)("inlineCode",{parentName:"em"},"onBack")," is set, the minimize button will not appear and a custom minimize button must be provided\nas a child inside a ",Object(r.mdx)("inlineCode",{parentName:"em"},"Collapsible Menu View"),".")))}return n.isMDXComponent=!0,n({})}},{name:"onNext",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Callback function for when the next button is clicked. The previous-next button group will display if either this or onPrevious is set but the button for the one not set will be disabled."))}return n.isMDXComponent=!0,n({})}},{name:"onPrevious",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Callback function for when the previous button is clicked. The previous-next button group will display if either this or onNext is set but the button for the one not set will be disabled."))}return n.isMDXComponent=!0,n({})}},{name:"title",type:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,a=i(n,["components"]);return Object(r.mdx)("wrapper",l({},e,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Text to be displayed as the title in the header bar."))}return n.isMDXComponent=!0,n({})}}]})}},941:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(928),l=t.n(o),i=t(225);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Close Action Header\"\n      onClose={() => alert('You clicked close!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(897),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Close Action Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},942:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(926),l=t.n(o),i=t(225);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Back Action Header\"\n      onBack={() => alert('You clicked back!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(897),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Back Action Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},943:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(938),l=t.n(o),i=t(225);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport classNames from 'classnames/bind';\nimport ActionHeader from 'terra-action-header';\nimport { Placeholder } from '@cerner/terra-docs';\nimport styles from './ActionHeaderDocCommon.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci dolor, dignissim vitae risus vel, tristique egestas sapien.\n      Vivamus blandit augue justo, id tincidunt justo luctus et. Morbi lacinia porttitor lacus, ac fermentum mauris tempus dapibus. Donec fringilla est ut ullamcorper consequat.\n      Aliquam ornare efficitur ornare. Curabitur facilisis urna a congue gravida.\n      Nulla accumsan non nisl sed elementum.\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n      onMinimize={() => alert('You clicked minimize!')}\n      onClose={() => alert('You clicked close!')}\n    >\n      <Placeholder className={cx('placeholder-wrapper')} title=\"Collapsible Menu View\" />\n    </ActionHeader>\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(897),m=t.n(p),f=t(922);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Long Wrapping Text Header",description:t,example:a.a.createElement(l.a,null),exampleCssSrc:a.a.createElement(f.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},944:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(937),l=t.n(o),i=t(225);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Back Close Previous Next Action Header\"\n      onClose={() => alert('You clicked close!')}\n      onBack={() => alert('You clicked back!')}\n      onPrevious={() => alert('You clicked previous!')}\n      onNext={() => alert('You clicked next!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(897),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Back Previous Next Close Action Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},945:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(930),l=t.n(o),i=t(225);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport classNames from 'classnames/bind';\nimport ActionHeader from 'terra-action-header';\nimport { Placeholder } from '@cerner/terra-docs';\nimport styles from './ActionHeaderDocCommon.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader title=\"Minimize Custom Button Action Header\" onMinimize={() => alert('You clicked minimize!')} onClose={() => alert('You clicked close!')}>\n      <Placeholder className={cx('placeholder-wrapper')} title=\"Collapsible Menu View\" />\n    </ActionHeader>\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(897),m=t.n(p),f=t(922);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Minimize Custom Button Action Header",description:t,example:a.a.createElement(l.a,null),exampleCssSrc:a.a.createElement(f.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},946:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(929),l=t.n(o),i=t(225);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Maximize Close Action Header\"\n      onClose={() => alert('You clicked close!')}\n      onMaximize={() => alert('You clicked maximize!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(897),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Maximize Close Action Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},947:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(927),l=t.n(o),i=t(225);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Back Close Action Header\"\n      onClose={() => alert('You clicked close!')}\n      onBack={() => alert('You clicked back!')}\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n/* eslint-enable no-alert */\n\n")))}s.isMDXComponent=!0;var p=t(897),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Back Close Action Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}},948:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(925),l=t.n(o),i=t(225);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(i.mdx)("wrapper",c({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ActionHeader from 'terra-action-header';\n\nconst ActionHeaderExample = () => (\n  <div>\n    <br />\n    <ActionHeader\n      title=\"Default Action Header\"\n    />\n    <br />\n  </div>\n);\n\nexport default ActionHeaderExample;\n\n")))}s.isMDXComponent=!0;var p=t(897),m=t.n(p);n.a=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:n||"Default Action Header",description:t,example:a.a.createElement(l.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})}}}]);