(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),s=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||s()}},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3398);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,s=void 0!==o&&o;return r||a&&s}},2775:function(e,t,r){"use strict";var n=r(9713);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),i=(o=r(3244))&&o.__esModule?o:{default:o},u=r(3398),c=r(1165),l=r(6393);function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=s.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,s=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){s=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=m.length;u<c;u++){var l=m[u];if(a.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?o=!1:r.add(l);else{var p=a.props[l],d=n[l]||new Set;"name"===l&&s||!d.has(p)?(d.add(p),n[l]=d):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,s.default.cloneElement(e,i)}return s.default.cloneElement(e,{key:o})}))}var y=function(e){var t=e.children,r=(0,s.useContext)(u.AmpStateContext),n=(0,s.useContext)(c.HeadManagerContext);return s.default.createElement(i.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)};t.default=y},3244:function(e,t,r){"use strict";var n=r(319),a=r(4575),o=r(3913),s=(r(1506),r(2205)),i=r(8585),u=r(9754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var a=u(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return i(this,r)}}t.__esModule=!0,t.default=void 0;var l=r(7294),p=function(e){s(r,e);var t=c(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=p},9249:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(7757),o=r.n(a),s=r(2137),i=r(6156),u=r(9008),c=r(1664),l=r(7294),p=r(5001),d=r(2974),f=r(8828),m=r(1163);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=(0,l.useState)({name:"",email:"",password:"",cf_password:""}),t=e[0],r=e[1],a=t.name,h=t.email,v=t.password,b=t.cf_password,g=(0,l.useContext)(d.R),x=g.state,w=g.dispatch,O=x.auth,j=(0,m.useRouter)(),P=function(e){var n=e.target,a=n.name,o=n.value;r(y(y({},t),{},(0,i.Z)({},a,o))),w({type:"NOTIFY",payload:{}})},_=function(){var e=(0,s.Z)(o().mark((function e(r){var n,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!(n=(0,p.Z)(a,h,v,b))){e.next=4;break}return e.abrupt("return",w({type:"NOTIFY",payload:{error:n}}));case 4:return w({type:"NOTIFY",payload:{loading:!0}}),e.next=7,(0,f.qC)("auth/register",t);case 7:if(!(s=e.sent).err){e.next=10;break}return e.abrupt("return",w({type:"NOTIFY",payload:{error:s.err}}));case 10:return e.abrupt("return",w({type:"NOTIFY",payload:{success:s.msg}}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){0!==Object.keys(O).length&&j.push("/")}),[O]),(0,n.jsxs)("div",{children:[(0,n.jsx)(u.default,{children:(0,n.jsx)("title",{children:"Register Page"})}),(0,n.jsxs)("form",{className:"mx-auto my-4",style:{maxWidth:"500px"},onSubmit:_,children:[(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"name",children:"Name"}),(0,n.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",value:a,onChange:P})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),(0,n.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"email",value:h,onChange:P}),(0,n.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),(0,n.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",name:"password",value:v,onChange:P})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"exampleInputPassword2",children:"Confirm Password"}),(0,n.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword2",name:"cf_password",value:b,onChange:P})]}),(0,n.jsx)("button",{type:"submit",className:"btn btn-dark w-100",children:"Register"}),(0,n.jsxs)("p",{className:"my-2",children:["Already have an account? ",(0,n.jsx)(c.default,{href:"/signin",children:(0,n.jsx)("a",{style:{color:"crimson"},children:"Login Now"})})]})]})]})}},5001:function(e,t){"use strict";t.Z=function(e,t,r,n){return e&&t&&r?function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(t)?r.length<6?"Password must be at least 6 characters.":r!==n?"Confirm password did not match.":void 0:"Invalid emails.":"Please add all fields."}},8740:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return r(9249)}])},9008:function(e,t,r){e.exports=r(2775)}},function(e){e.O(0,[774,888,179],(function(){return t=8740,e(e.s=t);var t}));var t=e.O();_N_E=t}]);