(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()}},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},2775:function(e,t,r){"use strict";var n=r(9713);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(o=r(3244))&&o.__esModule?o:{default:o},c=r(3398),u=r(1165),d=r(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var d=h[c];if(a.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?o=!1:r.add(d);else{var l=a.props[d],f=n[d]||new Set;"name"===d&&i||!f.has(l)?(f.add(l),n[d]=f):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,r=(0,i.useContext)(c.AmpStateContext),n=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,d.isInAmpMode)(r)},t)};t.default=v},3244:function(e,t,r){"use strict";var n=r(319),a=r(4575),o=r(3913),i=(r(1506),r(2205)),s=r(8585),c=r(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var d=r(7294),l=function(e){i(r,e);var t=u(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=l},1473:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(9008),o=r(7294),i=r(2974),s=r(1664);t.default=function(){var e=(0,o.useContext)(i.R),t=e.state,r=e.dispatch,c=t.users,u=t.auth;t.modal;return u.user?(0,n.jsxs)("div",{className:"table-responsive",children:[(0,n.jsx)(a.default,{children:(0,n.jsx)("title",{children:"Users"})}),(0,n.jsxs)("table",{className:"table w-100",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{}),(0,n.jsx)("th",{children:"ID"}),(0,n.jsx)("th",{children:"Pic"}),(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Email"}),(0,n.jsx)("th",{children:"Admin"}),(0,n.jsx)("th",{children:"Action"})]})}),(0,n.jsx)("tbody",{children:c.map((function(e,t){return(0,n.jsxs)("tr",{style:{cursor:"pointer"},children:[(0,n.jsx)("th",{children:t+1}),(0,n.jsx)("th",{children:e._id}),(0,n.jsx)("th",{children:(0,n.jsx)("img",{src:e.avatar,alt:e.avatar,style:{width:"30px",height:"30px",overflow:"hidden",objectFit:"cover"}})}),(0,n.jsx)("th",{children:e.name}),(0,n.jsx)("th",{children:e.email}),(0,n.jsx)("th",{children:"admin"===e.role?e.root?(0,n.jsx)("i",{className:"fas fa-check text-success",children:" Root"}):(0,n.jsx)("i",{className:"fas fa-check text-success"}):(0,n.jsx)("i",{className:"fas fa-times text-danger"})}),(0,n.jsxs)("th",{children:[(0,n.jsx)(s.default,{href:u.user.root&&u.user.email!==e.email?"/edit_user/".concat(e._id):"#!",children:(0,n.jsx)("a",{children:(0,n.jsx)("i",{className:"fas fa-edit text-info mr-2",title:"Edit"})})}),u.user.root&&u.user.email!==e.email?(0,n.jsx)("i",{className:"fas fa-trash-alt text-danger ml-2",title:"Remove","data-toggle":"modal","data-target":"#exampleModal",onClick:function(){return r({type:"ADD_MODAL",payload:[{data:c,id:e._id,title:e.name,type:"ADD_USERS"}]})}}):(0,n.jsx)("i",{className:"fas fa-trash-alt text-danger ml-2",title:"Remove"})]})]},e._id)}))})]})]}):null}},1556:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return r(1473)}])},9008:function(e,t,r){e.exports=r(2775)}},function(e){e.O(0,[774,888,179],(function(){return t=1556,e(e.s=t);var t}));var t=e.O();_N_E=t}]);