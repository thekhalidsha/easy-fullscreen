import r,{useState as e,useEffect as t}from"react";function n(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function o(r,e,t){return(e=function(r){var e=function(r,e){if("object"!=typeof r||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"==typeof e?e:e+""}(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function l(){return l=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},l.apply(null,arguments)}function a(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function c(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var n,o,l,a,i=[],c=!0,s=!1;try{if(l=(t=t.call(r)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=l.call(t)).done)&&(i.push(n.value),i.length!==e);c=!0);}catch(r){s=!0,o=r}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(r,e)||u(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(r){return function(r){if(Array.isArray(r))return n(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||u(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,e){if(r){if("string"==typeof r)return n(r,e);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}var d={container:"EasyFullScreen-module_container__vWixI",x_wrapper:"EasyFullScreen-module_x_wrapper__RKny2",y_wrapper:"EasyFullScreen-module_y_wrapper__IQUOn","nav-dots":"EasyFullScreen-module_nav-dots__EqnP2","dots-top":"EasyFullScreen-module_dots-top__JHNdM","dots-bottom":"EasyFullScreen-module_dots-bottom__UvBK0","dots-left":"EasyFullScreen-module_dots-left__b9dNO","dots-right":"EasyFullScreen-module_dots-right__N4eTU","nav-dot":"EasyFullScreen-module_nav-dot__Rdp4w",active:"EasyFullScreen-module_active__MItsE"};!function(r,e){void 0===e&&(e={});var t=e.insertAt;if(r&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r))}}("/* Container for the slides */\r\n.EasyFullScreen-module_container__vWixI {\r\n  position: relative;\r\n}\r\n\r\n/* Horizontal wrapper (for horizontal slides) */\r\n.EasyFullScreen-module_x_wrapper__RKny2 {\r\n  overflow-x: auto;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  scroll-snap-type: x mandatory;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n/* Vertical wrapper (for vertical slides) */\r\n.EasyFullScreen-module_y_wrapper__IQUOn {\r\n  overflow-y: auto;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  scroll-snap-type: y mandatory;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n/* Slide alignment for both horizontal and vertical */\r\n.EasyFullScreen-module_x_wrapper__RKny2 > *, .EasyFullScreen-module_y_wrapper__IQUOn > * {\r\n  scroll-snap-align: start;\r\n  scroll-snap-stop: always;\r\n}\r\n\r\n/* For horizontal slides */\r\n.EasyFullScreen-module_x_wrapper__RKny2 > * {\r\n  width: 100vw;\r\n  flex-shrink: 0;\r\n}\r\n\r\n/* For vertical slides */\r\n.EasyFullScreen-module_y_wrapper__IQUOn > * {\r\n  height: 100vh;\r\n}\r\n\r\n/* Navigation dots container positioning */\r\n.EasyFullScreen-module_nav-dots__EqnP2 {\r\n  position: fixed;\r\n  display: flex;\r\n  gap: 10px;\r\n  z-index: 10;\r\n  flex-direction: row;\r\n}\r\n\r\n.EasyFullScreen-module_dots-top__JHNdM,\r\n.EasyFullScreen-module_dots-bottom__UvBK0 {\r\n  flex-direction: row;\r\n}\r\n\r\n.EasyFullScreen-module_dots-left__b9dNO,\r\n.EasyFullScreen-module_dots-right__N4eTU {\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n/* Style for individual navigation dots */\r\n.EasyFullScreen-module_nav-dot__Rdp4w {\r\n  width: 12px;\r\n  height: 12px;\r\n  background-color: #c9d6de;\r\n  border-radius: 50%;\r\n  border: 2px solid #52616a;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s, transform 0.3s;\r\n}\r\n\r\n/* Active state for the navigation dot */\r\n.EasyFullScreen-module_nav-dot__Rdp4w.EasyFullScreen-module_active__MItsE {\r\n  background-color: #47b8e0; /* Active dot color */\r\n  transform: scale(1.5); /* Enlarges the active dot */\r\n}\r\n");var f=["children","SliderWidth","SliderHeight","SlideHeight","SlideWidth","direction","showDots","dotColor","activeDotColor","navPlacement","className"],p=function(n){var a=n.children,u=n.SliderWidth,p=void 0===u?"100vw":u,y=n.SliderHeight,v=void 0===y?"100vh":y,m=n.SlideHeight,h=void 0===m?"100vh":m,_=n.SlideWidth,b=void 0===_?"100%":_,g=n.direction,w=void 0===g?"vertical":g,S=n.showDots,E=void 0===S||S,O=n.dotColor,x=void 0===O?"gray":O,F=n.activeDotColor,j=void 0===F?"black":F,P=n.navPlacement,A=void 0===P?"bottom":P,N=n.className,C=void 0===N?"":N,I=function(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(r,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(n=0;n<l.length;n++)t=l[n],-1===e.indexOf(t)&&{}.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}(n,f),k=c(e(0),2),R=k[0],U=k[1],D="horizontal"===w,T=D?d.x_wrapper:d.y_wrapper,H=D?"inline":"block",q=function(){var r=Array.from(document.querySelectorAll(".".concat(T," > *"))),e=0,t=1/0;r.forEach((function(r,n){var o=D?r.getBoundingClientRect().left:r.getBoundingClientRect().top,l=Math.abs(o);l<t&&(t=l,e=n)})),U((function(r){return r!==e?e:r}))};t((function(){var r=document.querySelector(".".concat(T));if(r){var e=function(){window.requestAnimationFrame(q)};return r.addEventListener("scroll",e,{passive:!0}),function(){r.removeEventListener("scroll",e)}}}),[T]);var z=a.length,B={};return"left"===A||"right"===A?(B.top="calc(".concat(v," / 2)"),B.transform="translateY(-50%)","left"===A?B.left="20px":B.right="20px"):(B.left="calc(".concat(p," / 2)"),B.transform="translateX(-50%)","top"===A?B.top="20px":B.bottom="20px"),r.createElement("section",l({className:"".concat(d.container)},I),r.createElement("div",{className:"".concat(T," ").concat(C),style:{height:v,width:p}},r.Children.map(a,(function(e,t){return r.cloneElement(e,{style:i({height:h,width:b},e.props.style||{})})}))),E&&r.createElement("div",{className:"".concat(d["nav-dots"]," ").concat(d["dots-".concat(A)]),style:B},s(Array(z)).map((function(e,t){return r.createElement("div",{key:t,className:"".concat(d["nav-dot"]," ").concat(R===t?d.active:""),onClick:function(){return function(r){var e=document.querySelectorAll(".".concat(T," > *"))[r];e&&(e.scrollIntoView(o({behavior:"smooth"},H,"start")),U(r))}(t)},style:{backgroundColor:R===t?j:x}})}))))};export{p as EasyFullScreen};
