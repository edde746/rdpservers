(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[784],{3193:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var t=n(5893),o=n(1664);function a(){return(0,t.jsx)("footer",{className:"section-light",children:(0,t.jsxs)("div",{className:"footer-container",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"brand-logo",children:"RDPservers"}),(0,t.jsx)("p",{children:"\xa9 RDPservers 2021"})]}),(0,t.jsxs)("div",{className:"nav-links",children:[(0,t.jsx)(o.default,{href:"/terms",children:(0,t.jsx)("a",{className:"nav-link",children:"Terms of Service"})}),(0,t.jsx)(o.default,{href:"/privacy",children:(0,t.jsx)("a",{className:"nav-link",children:"Privacy Policy"})})]})]})})}},7673:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var t=n(5893),o=n(1664);function a(){return(0,t.jsxs)("nav",{children:[(0,t.jsx)(o.default,{href:"/",children:(0,t.jsx)("h1",{className:"brand-logo",children:"RDPservers"})}),(0,t.jsx)("div",{className:"sm-show",onClick:function(){document.getElementById("nav-links").classList.toggle("sm-hide")},children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"nav-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),(0,t.jsxs)("div",{className:"nav-links sm-hide",id:"nav-links",children:[(0,t.jsx)(o.default,{href:"/",children:(0,t.jsx)("a",{className:"nav-link",children:"Home"})}),(0,t.jsx)(o.default,{href:"/pricing",children:(0,t.jsx)("a",{className:"nav-link",children:"Pricing"})}),(0,t.jsx)(o.default,{href:"/panel",children:(0,t.jsx)("a",{className:"btn btn-primary",children:"Dashboard"})})]})]})}},8418:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,l=(a=n(7294))&&a.__esModule?a:{default:a},i=n(6273),c=n(387),s=n(7190);var u={};function f(e,r,n,t){if(e&&i.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[r+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,t=c.useRouter(),a=l.default.useMemo((function(){var r=o(i.resolveHref(t,e.href,!0),2),n=r[0],a=r[1];return{href:n,as:e.as?i.resolveHref(t,e.as):a||n}}),[t,e.href,e.as]),d=a.href,h=a.as,v=e.children,p=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=l.default.createElement("a",null,v));var g=(r=l.default.Children.only(v))&&"object"===typeof r&&r.ref,j=o(s.useIntersection({rootMargin:"200px"}),2),x=j[0],k=j[1],w=l.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);l.default.useEffect((function(){var e=k&&n&&i.isLocalURL(d),r="undefined"!==typeof b?b:t&&t.locale,o=u[d+"%"+h+(r?"%"+r:"")];e&&!o&&f(t,d,h,{locale:r})}),[h,d,k,b,n,t]);var M={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),r[o?"replace":"push"](n,t,{shallow:a,locale:c,scroll:l}))}(e,t,d,h,p,y,m,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&f(t,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var N="undefined"!==typeof b?b:t&&t.locale,E=t&&t.isLocaleDomain&&i.getDomainLocale(h,N,t&&t.locales,t&&t.domainLocales);M.href=E||i.addBasePath(i.addLocale(h,N,t&&t.defaultLocale))}return l.default.cloneElement(r,M)};r.default=d},7190:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,t=e.disabled||!i,s=a.useRef(),u=o(a.useState(!1),2),f=u[0],d=u[1],h=o(a.useState(r?r.current:null),2),v=h[0],p=h[1],y=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=c.get(r);if(n)return n;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return c.set(r,n={id:r,observer:o,elements:t}),n}(n),o=t.id,a=t.observer,l=t.elements;return l.set(e,r),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:n}))}),[t,v,n,f]);return a.useEffect((function(){if(!i&&!f){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){r&&p(r.current)}),[r]),[y,f]};var a=n(7294),l=n(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},1664:function(e,r,n){e.exports=n(8418)}}]);