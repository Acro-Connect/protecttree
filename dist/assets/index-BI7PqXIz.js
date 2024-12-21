(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Ng={exports:{}},Zu={},Ug={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),Ny=Symbol.for("react.portal"),Uy=Symbol.for("react.fragment"),Iy=Symbol.for("react.strict_mode"),Oy=Symbol.for("react.profiler"),Fy=Symbol.for("react.provider"),ky=Symbol.for("react.context"),zy=Symbol.for("react.forward_ref"),By=Symbol.for("react.suspense"),Gy=Symbol.for("react.memo"),Hy=Symbol.for("react.lazy"),Ip=Symbol.iterator;function Vy(n){return n===null||typeof n!="object"?null:(n=Ip&&n[Ip]||n["@@iterator"],typeof n=="function"?n:null)}var Ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Og=Object.assign,Fg={};function Fo(n,e,t){this.props=n,this.context=e,this.refs=Fg,this.updater=t||Ig}Fo.prototype.isReactComponent={};Fo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Fo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function kg(){}kg.prototype=Fo.prototype;function sd(n,e,t){this.props=n,this.context=e,this.refs=Fg,this.updater=t||Ig}var od=sd.prototype=new kg;od.constructor=sd;Og(od,Fo.prototype);od.isPureReactComponent=!0;var Op=Array.isArray,zg=Object.prototype.hasOwnProperty,ad={current:null},Bg={key:!0,ref:!0,__self:!0,__source:!0};function Gg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)zg.call(e,i)&&!Bg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Qa,type:n,key:s,ref:o,props:r,_owner:ad.current}}function Wy(n,e){return{$$typeof:Qa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function ld(n){return typeof n=="object"&&n!==null&&n.$$typeof===Qa}function Xy(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Fp=/\/+/g;function Ac(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Xy(""+n.key):e.toString(36)}function Ql(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Qa:case Ny:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ac(o,0):i,Op(r)?(t="",n!=null&&(t=n.replace(Fp,"$&/")+"/"),Ql(r,e,t,"",function(u){return u})):r!=null&&(ld(r)&&(r=Wy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Fp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Op(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ac(s,a);o+=Ql(s,e,t,l,r)}else if(l=Vy(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ac(s,a++),o+=Ql(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(n,e,t){if(n==null)return n;var i=[],r=0;return Ql(n,i,"","",function(s){return e.call(t,s,r++)}),i}function jy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var fn={current:null},Jl={transition:null},Yy={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Jl,ReactCurrentOwner:ad};function Hg(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:fl,forEach:function(n,e,t){fl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return fl(n,function(){e++}),e},toArray:function(n){return fl(n,function(e){return e})||[]},only:function(n){if(!ld(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};He.Component=Fo;He.Fragment=Uy;He.Profiler=Oy;He.PureComponent=sd;He.StrictMode=Iy;He.Suspense=By;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yy;He.act=Hg;He.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Og({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ad.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)zg.call(e,l)&&!Bg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Qa,type:n.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(n){return n={$$typeof:ky,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Fy,_context:n},n.Consumer=n};He.createElement=Gg;He.createFactory=function(n){var e=Gg.bind(null,n);return e.type=n,e};He.createRef=function(){return{current:null}};He.forwardRef=function(n){return{$$typeof:zy,render:n}};He.isValidElement=ld;He.lazy=function(n){return{$$typeof:Hy,_payload:{_status:-1,_result:n},_init:jy}};He.memo=function(n,e){return{$$typeof:Gy,type:n,compare:e===void 0?null:e}};He.startTransition=function(n){var e=Jl.transition;Jl.transition={};try{n()}finally{Jl.transition=e}};He.unstable_act=Hg;He.useCallback=function(n,e){return fn.current.useCallback(n,e)};He.useContext=function(n){return fn.current.useContext(n)};He.useDebugValue=function(){};He.useDeferredValue=function(n){return fn.current.useDeferredValue(n)};He.useEffect=function(n,e){return fn.current.useEffect(n,e)};He.useId=function(){return fn.current.useId()};He.useImperativeHandle=function(n,e,t){return fn.current.useImperativeHandle(n,e,t)};He.useInsertionEffect=function(n,e){return fn.current.useInsertionEffect(n,e)};He.useLayoutEffect=function(n,e){return fn.current.useLayoutEffect(n,e)};He.useMemo=function(n,e){return fn.current.useMemo(n,e)};He.useReducer=function(n,e,t){return fn.current.useReducer(n,e,t)};He.useRef=function(n){return fn.current.useRef(n)};He.useState=function(n){return fn.current.useState(n)};He.useSyncExternalStore=function(n,e,t){return fn.current.useSyncExternalStore(n,e,t)};He.useTransition=function(){return fn.current.useTransition()};He.version="18.3.1";Ug.exports=He;var Qn=Ug.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy=Qn,$y=Symbol.for("react.element"),Ky=Symbol.for("react.fragment"),Zy=Object.prototype.hasOwnProperty,Qy=qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jy={key:!0,ref:!0,__self:!0,__source:!0};function Vg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Zy.call(e,i)&&!Jy.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$y,type:n,key:s,ref:o,props:r,_owner:Qy.current}}Zu.Fragment=Ky;Zu.jsx=Vg;Zu.jsxs=Vg;Ng.exports=Zu;var ie=Ng.exports,Wg={exports:{}},Bn={},Xg={exports:{}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,B){var H=N.length;N.push(B);e:for(;0<H;){var $=H-1>>>1,Z=N[$];if(0<r(Z,B))N[$]=B,N[H]=Z,H=$;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var B=N[0],H=N.pop();if(H!==B){N[0]=H;e:for(var $=0,Z=N.length,xe=Z>>>1;$<xe;){var G=2*($+1)-1,K=N[G],le=G+1,ge=N[le];if(0>r(K,H))le<Z&&0>r(ge,K)?(N[$]=ge,N[le]=H,$=le):(N[$]=K,N[G]=H,$=G);else if(le<Z&&0>r(ge,H))N[$]=ge,N[le]=H,$=le;else break e}}return B}function r(N,B){var H=N.sortIndex-B.sortIndex;return H!==0?H:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var B=t(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=N)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=t(u)}}function y(N){if(_=!1,x(N),!v)if(t(l)!==null)v=!0,I(w);else{var B=t(u);B!==null&&q(y,B.startTime-N)}}function w(N,B){v=!1,_&&(_=!1,f(b),b=-1),m=!0;var H=d;try{for(x(B),h=t(l);h!==null&&(!(h.expirationTime>B)||N&&!R());){var $=h.callback;if(typeof $=="function"){h.callback=null,d=h.priorityLevel;var Z=$(h.expirationTime<=B);B=n.unstable_now(),typeof Z=="function"?h.callback=Z:h===t(l)&&i(l),x(B)}else i(l);h=t(l)}if(h!==null)var xe=!0;else{var G=t(u);G!==null&&q(y,G.startTime-B),xe=!1}return xe}finally{h=null,d=H,m=!1}}var T=!1,M=null,b=-1,D=5,S=-1;function R(){return!(n.unstable_now()-S<D)}function F(){if(M!==null){var N=n.unstable_now();S=N;var B=!0;try{B=M(!0,N)}finally{B?Y():(T=!1,M=null)}}else T=!1}var Y;if(typeof g=="function")Y=function(){g(F)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,k=L.port2;L.port1.onmessage=F,Y=function(){k.postMessage(null)}}else Y=function(){p(F,0)};function I(N){M=N,T||(T=!0,Y())}function q(N,B){b=p(function(){N(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){v||m||(v=!0,I(w))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var H=d;d=B;try{return N()}finally{d=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var H=d;d=N;try{return B()}finally{d=H}},n.unstable_scheduleCallback=function(N,B,H){var $=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?$+H:$):H=$,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=H+Z,N={id:c++,callback:B,priorityLevel:N,startTime:H,expirationTime:Z,sortIndex:-1},H>$?(N.sortIndex=H,e(u,N),t(l)===null&&N===t(u)&&(_?(f(b),b=-1):_=!0,q(y,H-$))):(N.sortIndex=Z,e(l,N),v||m||(v=!0,I(w))),N},n.unstable_shouldYield=R,n.unstable_wrapCallback=function(N){var B=d;return function(){var H=d;d=B;try{return N.apply(this,arguments)}finally{d=H}}}})(jg);Xg.exports=jg;var eS=Xg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=Qn,kn=eS;function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yg=new Set,Aa={};function Ts(n,e){So(n,e),So(n+"Capture",e)}function So(n,e){for(Aa[n]=e,n=0;n<e.length;n++)Yg.add(e[n])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gf=Object.prototype.hasOwnProperty,nS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kp={},zp={};function iS(n){return Gf.call(zp,n)?!0:Gf.call(kp,n)?!1:nS.test(n)?zp[n]=!0:(kp[n]=!0,!1)}function rS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function sS(n,e,t,i){if(e===null||typeof e>"u"||rS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Wt[n]=new hn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Wt[e]=new hn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Wt[n]=new hn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Wt[n]=new hn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Wt[n]=new hn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Wt[n]=new hn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Wt[n]=new hn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Wt[n]=new hn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Wt[n]=new hn(n,5,!1,n.toLowerCase(),null,!1,!1)});var ud=/[\-:]([a-z])/g;function cd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(ud,cd);Wt[e]=new hn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(ud,cd);Wt[e]=new hn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(ud,cd);Wt[e]=new hn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Wt[n]=new hn(n,1,!1,n.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Wt[n]=new hn(n,1,!1,n.toLowerCase(),null,!0,!0)});function fd(n,e,t,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sS(e,t,r,i)&&(t=null),i||r===null?iS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var er=tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),js=Symbol.for("react.portal"),Ys=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),Hf=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),Vf=Symbol.for("react.suspense"),Wf=Symbol.for("react.suspense_list"),pd=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),Kg=Symbol.for("react.offscreen"),Bp=Symbol.iterator;function Wo(n){return n===null||typeof n!="object"?null:(n=Bp&&n[Bp]||n["@@iterator"],typeof n=="function"?n:null)}var _t=Object.assign,Cc;function sa(n){if(Cc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+n}var Rc=!1;function Pc(n,e){if(!n||Rc)return"";Rc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?sa(n):""}function oS(n){switch(n.tag){case 5:return sa(n.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return n=Pc(n.type,!1),n;case 11:return n=Pc(n.type.render,!1),n;case 1:return n=Pc(n.type,!0),n;default:return""}}function Xf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ys:return"Fragment";case js:return"Portal";case Hf:return"Profiler";case hd:return"StrictMode";case Vf:return"Suspense";case Wf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case $g:return(n.displayName||"Context")+".Consumer";case qg:return(n._context.displayName||"Context")+".Provider";case dd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pd:return e=n.displayName||null,e!==null?e:Xf(n.type)||"Memo";case lr:e=n._payload,n=n._init;try{return Xf(n(e))}catch{}}return null}function aS(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xf(e);case 8:return e===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Zg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lS(n){var e=Zg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function dl(n){n._valueTracker||(n._valueTracker=lS(n))}function Qg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Zg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function pu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function jf(n,e){var t=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Gp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Lr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jg(n,e){e=e.checked,e!=null&&fd(n,"checked",e,!1)}function Yf(n,e){Jg(n,e);var t=Lr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?qf(n,e.type,t):e.hasOwnProperty("defaultValue")&&qf(n,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Hp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function qf(n,e,t){(e!=="number"||pu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var oa=Array.isArray;function lo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Lr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function $f(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(oa(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Lr(t)}}function e0(n,e){var t=Lr(e.value),i=Lr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Wp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function t0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?t0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var pl,n0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(pl=pl||document.createElement("div"),pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ca(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uS=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(n){uS.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ha[e]=ha[n]})});function i0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ha.hasOwnProperty(n)&&ha[n]?(""+e).trim():e+"px"}function r0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=i0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var cS=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zf(n,e){if(e){if(cS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Qf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jf=null;function md(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var eh=null,uo=null,co=null;function Xp(n){if(n=tl(n)){if(typeof eh!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=nc(e),eh(n.stateNode,n.type,e))}}function s0(n){uo?co?co.push(n):co=[n]:uo=n}function o0(){if(uo){var n=uo,e=co;if(co=uo=null,Xp(n),e)for(n=0;n<e.length;n++)Xp(e[n])}}function a0(n,e){return n(e)}function l0(){}var bc=!1;function u0(n,e,t){if(bc)return n(e,t);bc=!0;try{return a0(n,e,t)}finally{bc=!1,(uo!==null||co!==null)&&(l0(),o0())}}function Ra(n,e){var t=n.stateNode;if(t===null)return null;var i=nc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var th=!1;if(Yi)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){th=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{th=!1}function fS(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var da=!1,mu=null,_u=!1,nh=null,hS={onError:function(n){da=!0,mu=n}};function dS(n,e,t,i,r,s,o,a,l){da=!1,mu=null,fS.apply(hS,arguments)}function pS(n,e,t,i,r,s,o,a,l){if(dS.apply(this,arguments),da){if(da){var u=mu;da=!1,mu=null}else throw Error(ee(198));_u||(_u=!0,nh=u)}}function ws(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function c0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function jp(n){if(ws(n)!==n)throw Error(ee(188))}function mS(n){var e=n.alternate;if(!e){if(e=ws(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return jp(r),n;if(s===i)return jp(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function f0(n){return n=mS(n),n!==null?h0(n):null}function h0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=h0(n);if(e!==null)return e;n=n.sibling}return null}var d0=kn.unstable_scheduleCallback,Yp=kn.unstable_cancelCallback,_S=kn.unstable_shouldYield,gS=kn.unstable_requestPaint,Mt=kn.unstable_now,vS=kn.unstable_getCurrentPriorityLevel,_d=kn.unstable_ImmediatePriority,p0=kn.unstable_UserBlockingPriority,gu=kn.unstable_NormalPriority,xS=kn.unstable_LowPriority,m0=kn.unstable_IdlePriority,Qu=null,wi=null;function yS(n){if(wi&&typeof wi.onCommitFiberRoot=="function")try{wi.onCommitFiberRoot(Qu,n,void 0,(n.current.flags&128)===128)}catch{}}var hi=Math.clz32?Math.clz32:ES,SS=Math.log,MS=Math.LN2;function ES(n){return n>>>=0,n===0?32:31-(SS(n)/MS|0)|0}var ml=64,_l=4194304;function aa(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=aa(a):(s&=o,s!==0&&(i=aa(s)))}else o=t&~r,o!==0?i=aa(o):s!==0&&(i=aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-hi(e),r=1<<t,i|=n[t],e&=~r;return i}function TS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-hi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=TS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ih(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function _0(){var n=ml;return ml<<=1,!(ml&4194240)&&(ml=64),n}function Lc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ja(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-hi(e),n[e]=t}function AS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-hi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function gd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-hi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var $e=0;function g0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var v0,vd,x0,y0,S0,rh=!1,gl=[],vr=null,xr=null,yr=null,Pa=new Map,ba=new Map,cr=[],CS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qp(n,e){switch(n){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function jo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=tl(e),e!==null&&vd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function RS(n,e,t,i,r){switch(e){case"focusin":return vr=jo(vr,n,e,t,i,r),!0;case"dragenter":return xr=jo(xr,n,e,t,i,r),!0;case"mouseover":return yr=jo(yr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Pa.set(s,jo(Pa.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ba.set(s,jo(ba.get(s)||null,n,e,t,i,r)),!0}return!1}function M0(n){var e=ns(n.target);if(e!==null){var t=ws(e);if(t!==null){if(e=t.tag,e===13){if(e=c0(t),e!==null){n.blockedOn=e,S0(n.priority,function(){x0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function eu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=sh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Jf=i,t.target.dispatchEvent(i),Jf=null}else return e=tl(t),e!==null&&vd(e),n.blockedOn=t,!1;e.shift()}return!0}function $p(n,e,t){eu(n)&&t.delete(e)}function PS(){rh=!1,vr!==null&&eu(vr)&&(vr=null),xr!==null&&eu(xr)&&(xr=null),yr!==null&&eu(yr)&&(yr=null),Pa.forEach($p),ba.forEach($p)}function Yo(n,e){n.blockedOn===e&&(n.blockedOn=null,rh||(rh=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,PS)))}function La(n){function e(r){return Yo(r,n)}if(0<gl.length){Yo(gl[0],n);for(var t=1;t<gl.length;t++){var i=gl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(vr!==null&&Yo(vr,n),xr!==null&&Yo(xr,n),yr!==null&&Yo(yr,n),Pa.forEach(e),ba.forEach(e),t=0;t<cr.length;t++)i=cr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<cr.length&&(t=cr[0],t.blockedOn===null);)M0(t),t.blockedOn===null&&cr.shift()}var fo=er.ReactCurrentBatchConfig,xu=!0;function bS(n,e,t,i){var r=$e,s=fo.transition;fo.transition=null;try{$e=1,xd(n,e,t,i)}finally{$e=r,fo.transition=s}}function LS(n,e,t,i){var r=$e,s=fo.transition;fo.transition=null;try{$e=4,xd(n,e,t,i)}finally{$e=r,fo.transition=s}}function xd(n,e,t,i){if(xu){var r=sh(n,e,t,i);if(r===null)Gc(n,e,i,yu,t),qp(n,i);else if(RS(r,n,e,t,i))i.stopPropagation();else if(qp(n,i),e&4&&-1<CS.indexOf(n)){for(;r!==null;){var s=tl(r);if(s!==null&&v0(s),s=sh(n,e,t,i),s===null&&Gc(n,e,i,yu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Gc(n,e,i,null,t)}}var yu=null;function sh(n,e,t,i){if(yu=null,n=md(i),n=ns(n),n!==null)if(e=ws(n),e===null)n=null;else if(t=e.tag,t===13){if(n=c0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return yu=n,null}function E0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vS()){case _d:return 1;case p0:return 4;case gu:case xS:return 16;case m0:return 536870912;default:return 16}default:return 16}}var hr=null,yd=null,tu=null;function T0(){if(tu)return tu;var n,e=yd,t=e.length,i,r="value"in hr?hr.value:hr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return tu=r.slice(n,1<i?1-i:void 0)}function nu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function vl(){return!0}function Kp(){return!1}function Gn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vl:Kp,this.isPropagationStopped=Kp,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=Gn(ko),el=_t({},ko,{view:0,detail:0}),DS=Gn(el),Dc,Nc,qo,Ju=_t({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qo&&(qo&&n.type==="mousemove"?(Dc=n.screenX-qo.screenX,Nc=n.screenY-qo.screenY):Nc=Dc=0,qo=n),Dc)},movementY:function(n){return"movementY"in n?n.movementY:Nc}}),Zp=Gn(Ju),NS=_t({},Ju,{dataTransfer:0}),US=Gn(NS),IS=_t({},el,{relatedTarget:0}),Uc=Gn(IS),OS=_t({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),FS=Gn(OS),kS=_t({},ko,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zS=Gn(kS),BS=_t({},ko,{data:0}),Qp=Gn(BS),GS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=VS[n])?!!e[n]:!1}function Md(){return WS}var XS=_t({},el,{key:function(n){if(n.key){var e=GS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=nu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?HS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(n){return n.type==="keypress"?nu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?nu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jS=Gn(XS),YS=_t({},Ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=Gn(YS),qS=_t({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),$S=Gn(qS),KS=_t({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZS=Gn(KS),QS=_t({},Ju,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),JS=Gn(QS),eM=[9,13,27,32],Ed=Yi&&"CompositionEvent"in window,pa=null;Yi&&"documentMode"in document&&(pa=document.documentMode);var tM=Yi&&"TextEvent"in window&&!pa,w0=Yi&&(!Ed||pa&&8<pa&&11>=pa),em=" ",tm=!1;function A0(n,e){switch(n){case"keyup":return eM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qs=!1;function nM(n,e){switch(n){case"compositionend":return C0(e);case"keypress":return e.which!==32?null:(tm=!0,em);case"textInput":return n=e.data,n===em&&tm?null:n;default:return null}}function iM(n,e){if(qs)return n==="compositionend"||!Ed&&A0(n,e)?(n=T0(),tu=yd=hr=null,qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w0&&e.locale!=="ko"?null:e.data;default:return null}}var rM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!rM[n.type]:e==="textarea"}function R0(n,e,t,i){s0(i),e=Su(e,"onChange"),0<e.length&&(t=new Sd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ma=null,Da=null;function sM(n){z0(n,0)}function ec(n){var e=Zs(n);if(Qg(e))return n}function oM(n,e){if(n==="change")return e}var P0=!1;if(Yi){var Ic;if(Yi){var Oc="oninput"in document;if(!Oc){var im=document.createElement("div");im.setAttribute("oninput","return;"),Oc=typeof im.oninput=="function"}Ic=Oc}else Ic=!1;P0=Ic&&(!document.documentMode||9<document.documentMode)}function rm(){ma&&(ma.detachEvent("onpropertychange",b0),Da=ma=null)}function b0(n){if(n.propertyName==="value"&&ec(Da)){var e=[];R0(e,Da,n,md(n)),u0(sM,e)}}function aM(n,e,t){n==="focusin"?(rm(),ma=e,Da=t,ma.attachEvent("onpropertychange",b0)):n==="focusout"&&rm()}function lM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ec(Da)}function uM(n,e){if(n==="click")return ec(e)}function cM(n,e){if(n==="input"||n==="change")return ec(e)}function fM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var pi=typeof Object.is=="function"?Object.is:fM;function Na(n,e){if(pi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Gf.call(e,r)||!pi(n[r],e[r]))return!1}return!0}function sm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function om(n,e){var t=sm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=sm(t)}}function L0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?L0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function D0(){for(var n=window,e=pu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=pu(n.document)}return e}function Td(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function hM(n){var e=D0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&L0(t.ownerDocument.documentElement,t)){if(i!==null&&Td(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=om(t,s);var o=om(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var dM=Yi&&"documentMode"in document&&11>=document.documentMode,$s=null,oh=null,_a=null,ah=!1;function am(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ah||$s==null||$s!==pu(i)||(i=$s,"selectionStart"in i&&Td(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_a&&Na(_a,i)||(_a=i,i=Su(oh,"onSelect"),0<i.length&&(e=new Sd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=$s)))}function xl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ks={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Fc={},N0={};Yi&&(N0=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function tc(n){if(Fc[n])return Fc[n];if(!Ks[n])return n;var e=Ks[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in N0)return Fc[n]=e[t];return n}var U0=tc("animationend"),I0=tc("animationiteration"),O0=tc("animationstart"),F0=tc("transitionend"),k0=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,e){k0.set(n,e),Ts(e,[n])}for(var kc=0;kc<lm.length;kc++){var zc=lm[kc],pM=zc.toLowerCase(),mM=zc[0].toUpperCase()+zc.slice(1);Fr(pM,"on"+mM)}Fr(U0,"onAnimationEnd");Fr(I0,"onAnimationIteration");Fr(O0,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(F0,"onTransitionEnd");So("onMouseEnter",["mouseout","mouseover"]);So("onMouseLeave",["mouseout","mouseover"]);So("onPointerEnter",["pointerout","pointerover"]);So("onPointerLeave",["pointerout","pointerover"]);Ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_M=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function um(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,pS(i,e,void 0,n),n.currentTarget=null}function z0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;um(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;um(r,a,u),s=l}}}if(_u)throw n=nh,_u=!1,nh=null,n}function st(n,e){var t=e[hh];t===void 0&&(t=e[hh]=new Set);var i=n+"__bubble";t.has(i)||(B0(e,n,2,!1),t.add(i))}function Bc(n,e,t){var i=0;e&&(i|=4),B0(t,n,i,e)}var yl="_reactListening"+Math.random().toString(36).slice(2);function Ua(n){if(!n[yl]){n[yl]=!0,Yg.forEach(function(t){t!=="selectionchange"&&(_M.has(t)||Bc(t,!1,n),Bc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[yl]||(e[yl]=!0,Bc("selectionchange",!1,e))}}function B0(n,e,t,i){switch(E0(e)){case 1:var r=bS;break;case 4:r=LS;break;default:r=xd}t=r.bind(null,e,t,n),r=void 0,!th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Gc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ns(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}u0(function(){var u=s,c=md(t),h=[];e:{var d=k0.get(n);if(d!==void 0){var m=Sd,v=n;switch(n){case"keypress":if(nu(t)===0)break e;case"keydown":case"keyup":m=jS;break;case"focusin":v="focus",m=Uc;break;case"focusout":v="blur",m=Uc;break;case"beforeblur":case"afterblur":m=Uc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=US;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=$S;break;case U0:case I0:case O0:m=FS;break;case F0:m=ZS;break;case"scroll":m=DS;break;case"wheel":m=JS;break;case"copy":case"cut":case"paste":m=zS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Jp}var _=(e&4)!==0,p=!_&&n==="scroll",f=_?d!==null?d+"Capture":null:d;_=[];for(var g=u,x;g!==null;){x=g;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,f!==null&&(y=Ra(g,f),y!=null&&_.push(Ia(g,y,x)))),p)break;g=g.return}0<_.length&&(d=new m(d,v,null,t,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",d&&t!==Jf&&(v=t.relatedTarget||t.fromElement)&&(ns(v)||v[qi]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=t.relatedTarget||t.toElement,m=u,v=v?ns(v):null,v!==null&&(p=ws(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=Zp,y="onMouseLeave",f="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(_=Jp,y="onPointerLeave",f="onPointerEnter",g="pointer"),p=m==null?d:Zs(m),x=v==null?d:Zs(v),d=new _(y,g+"leave",m,t,c),d.target=p,d.relatedTarget=x,y=null,ns(c)===u&&(_=new _(f,g+"enter",v,t,c),_.target=x,_.relatedTarget=p,y=_),p=y,m&&v)t:{for(_=m,f=v,g=0,x=_;x;x=Rs(x))g++;for(x=0,y=f;y;y=Rs(y))x++;for(;0<g-x;)_=Rs(_),g--;for(;0<x-g;)f=Rs(f),x--;for(;g--;){if(_===f||f!==null&&_===f.alternate)break t;_=Rs(_),f=Rs(f)}_=null}else _=null;m!==null&&cm(h,d,m,_,!1),v!==null&&p!==null&&cm(h,p,v,_,!0)}}e:{if(d=u?Zs(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var w=oM;else if(nm(d))if(P0)w=cM;else{w=lM;var T=aM}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=uM);if(w&&(w=w(n,u))){R0(h,w,t,c);break e}T&&T(n,d,u),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&qf(d,"number",d.value)}switch(T=u?Zs(u):window,n){case"focusin":(nm(T)||T.contentEditable==="true")&&($s=T,oh=u,_a=null);break;case"focusout":_a=oh=$s=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,am(h,t,c);break;case"selectionchange":if(dM)break;case"keydown":case"keyup":am(h,t,c)}var M;if(Ed)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else qs?A0(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(w0&&t.locale!=="ko"&&(qs||b!=="onCompositionStart"?b==="onCompositionEnd"&&qs&&(M=T0()):(hr=c,yd="value"in hr?hr.value:hr.textContent,qs=!0)),T=Su(u,b),0<T.length&&(b=new Qp(b,n,null,t,c),h.push({event:b,listeners:T}),M?b.data=M:(M=C0(t),M!==null&&(b.data=M)))),(M=tM?nM(n,t):iM(n,t))&&(u=Su(u,"onBeforeInput"),0<u.length&&(c=new Qp("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=M))}z0(h,e)})}function Ia(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Su(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ra(n,t),s!=null&&i.unshift(Ia(n,s,r)),s=Ra(n,e),s!=null&&i.push(Ia(n,s,r))),n=n.return}return i}function Rs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function cm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ra(t,s),l!=null&&o.unshift(Ia(t,l,a))):r||(l=Ra(t,s),l!=null&&o.push(Ia(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var gM=/\r\n?/g,vM=/\u0000|\uFFFD/g;function fm(n){return(typeof n=="string"?n:""+n).replace(gM,`
`).replace(vM,"")}function Sl(n,e,t){if(e=fm(e),fm(n)!==e&&t)throw Error(ee(425))}function Mu(){}var lh=null,uh=null;function ch(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,xM=typeof clearTimeout=="function"?clearTimeout:void 0,hm=typeof Promise=="function"?Promise:void 0,yM=typeof queueMicrotask=="function"?queueMicrotask:typeof hm<"u"?function(n){return hm.resolve(null).then(n).catch(SM)}:fh;function SM(n){setTimeout(function(){throw n})}function Hc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),La(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);La(e)}function Sr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function dm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var zo=Math.random().toString(36).slice(2),Si="__reactFiber$"+zo,Oa="__reactProps$"+zo,qi="__reactContainer$"+zo,hh="__reactEvents$"+zo,MM="__reactListeners$"+zo,EM="__reactHandles$"+zo;function ns(n){var e=n[Si];if(e)return e;for(var t=n.parentNode;t;){if(e=t[qi]||t[Si]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=dm(n);n!==null;){if(t=n[Si])return t;n=dm(n)}return e}n=t,t=n.parentNode}return null}function tl(n){return n=n[Si]||n[qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function nc(n){return n[Oa]||null}var dh=[],Qs=-1;function kr(n){return{current:n}}function at(n){0>Qs||(n.current=dh[Qs],dh[Qs]=null,Qs--)}function it(n,e){Qs++,dh[Qs]=n.current,n.current=e}var Dr={},en=kr(Dr),vn=kr(!1),_s=Dr;function Mo(n,e){var t=n.type.contextTypes;if(!t)return Dr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function xn(n){return n=n.childContextTypes,n!=null}function Eu(){at(vn),at(en)}function pm(n,e,t){if(en.current!==Dr)throw Error(ee(168));it(en,e),it(vn,t)}function G0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,aS(n)||"Unknown",r));return _t({},t,i)}function Tu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Dr,_s=en.current,it(en,n),it(vn,vn.current),!0}function mm(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=G0(n,e,_s),i.__reactInternalMemoizedMergedChildContext=n,at(vn),at(en),it(en,n)):at(vn),it(vn,t)}var zi=null,ic=!1,Vc=!1;function H0(n){zi===null?zi=[n]:zi.push(n)}function TM(n){ic=!0,H0(n)}function zr(){if(!Vc&&zi!==null){Vc=!0;var n=0,e=$e;try{var t=zi;for($e=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}zi=null,ic=!1}catch(r){throw zi!==null&&(zi=zi.slice(n+1)),d0(_d,zr),r}finally{$e=e,Vc=!1}}return null}var Js=[],eo=0,wu=null,Au=0,jn=[],Yn=0,gs=null,Vi=1,Wi="";function $r(n,e){Js[eo++]=Au,Js[eo++]=wu,wu=n,Au=e}function V0(n,e,t){jn[Yn++]=Vi,jn[Yn++]=Wi,jn[Yn++]=gs,gs=n;var i=Vi;n=Wi;var r=32-hi(i)-1;i&=~(1<<r),t+=1;var s=32-hi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Vi=1<<32-hi(e)+r|t<<r|i,Wi=s+n}else Vi=1<<s|t<<r|i,Wi=n}function wd(n){n.return!==null&&($r(n,1),V0(n,1,0))}function Ad(n){for(;n===wu;)wu=Js[--eo],Js[eo]=null,Au=Js[--eo],Js[eo]=null;for(;n===gs;)gs=jn[--Yn],jn[Yn]=null,Wi=jn[--Yn],jn[Yn]=null,Vi=jn[--Yn],jn[Yn]=null}var On=null,Un=null,lt=!1,ui=null;function W0(n,e){var t=$n(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function _m(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,On=n,Un=Sr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,On=n,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=gs!==null?{id:Vi,overflow:Wi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=$n(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,On=n,Un=null,!0):!1;default:return!1}}function ph(n){return(n.mode&1)!==0&&(n.flags&128)===0}function mh(n){if(lt){var e=Un;if(e){var t=e;if(!_m(n,e)){if(ph(n))throw Error(ee(418));e=Sr(t.nextSibling);var i=On;e&&_m(n,e)?W0(i,t):(n.flags=n.flags&-4097|2,lt=!1,On=n)}}else{if(ph(n))throw Error(ee(418));n.flags=n.flags&-4097|2,lt=!1,On=n}}}function gm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function Ml(n){if(n!==On)return!1;if(!lt)return gm(n),lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ch(n.type,n.memoizedProps)),e&&(e=Un)){if(ph(n))throw X0(),Error(ee(418));for(;e;)W0(n,e),e=Sr(e.nextSibling)}if(gm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Un=Sr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Un=null}}else Un=On?Sr(n.stateNode.nextSibling):null;return!0}function X0(){for(var n=Un;n;)n=Sr(n.nextSibling)}function Eo(){Un=On=null,lt=!1}function Cd(n){ui===null?ui=[n]:ui.push(n)}var wM=er.ReactCurrentBatchConfig;function $o(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function El(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function vm(n){var e=n._init;return e(n._payload)}function j0(n){function e(f,g){if(n){var x=f.deletions;x===null?(f.deletions=[g],f.flags|=16):x.push(g)}}function t(f,g){if(!n)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=wr(f,g),f.index=0,f.sibling=null,f}function s(f,g,x){return f.index=x,n?(x=f.alternate,x!==null?(x=x.index,x<g?(f.flags|=2,g):x):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,g,x,y){return g===null||g.tag!==6?(g=Kc(x,f.mode,y),g.return=f,g):(g=r(g,x),g.return=f,g)}function l(f,g,x,y){var w=x.type;return w===Ys?c(f,g,x.props.children,y,x.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===lr&&vm(w)===g.type)?(y=r(g,x.props),y.ref=$o(f,g,x),y.return=f,y):(y=uu(x.type,x.key,x.props,null,f.mode,y),y.ref=$o(f,g,x),y.return=f,y)}function u(f,g,x,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Zc(x,f.mode,y),g.return=f,g):(g=r(g,x.children||[]),g.return=f,g)}function c(f,g,x,y,w){return g===null||g.tag!==7?(g=ls(x,f.mode,y,w),g.return=f,g):(g=r(g,x),g.return=f,g)}function h(f,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Kc(""+g,f.mode,x),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case hl:return x=uu(g.type,g.key,g.props,null,f.mode,x),x.ref=$o(f,null,g),x.return=f,x;case js:return g=Zc(g,f.mode,x),g.return=f,g;case lr:var y=g._init;return h(f,y(g._payload),x)}if(oa(g)||Wo(g))return g=ls(g,f.mode,x,null),g.return=f,g;El(f,g)}return null}function d(f,g,x,y){var w=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(f,g,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hl:return x.key===w?l(f,g,x,y):null;case js:return x.key===w?u(f,g,x,y):null;case lr:return w=x._init,d(f,g,w(x._payload),y)}if(oa(x)||Wo(x))return w!==null?null:c(f,g,x,y,null);El(f,x)}return null}function m(f,g,x,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(x)||null,a(g,f,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hl:return f=f.get(y.key===null?x:y.key)||null,l(g,f,y,w);case js:return f=f.get(y.key===null?x:y.key)||null,u(g,f,y,w);case lr:var T=y._init;return m(f,g,x,T(y._payload),w)}if(oa(y)||Wo(y))return f=f.get(x)||null,c(g,f,y,w,null);El(g,y)}return null}function v(f,g,x,y){for(var w=null,T=null,M=g,b=g=0,D=null;M!==null&&b<x.length;b++){M.index>b?(D=M,M=null):D=M.sibling;var S=d(f,M,x[b],y);if(S===null){M===null&&(M=D);break}n&&M&&S.alternate===null&&e(f,M),g=s(S,g,b),T===null?w=S:T.sibling=S,T=S,M=D}if(b===x.length)return t(f,M),lt&&$r(f,b),w;if(M===null){for(;b<x.length;b++)M=h(f,x[b],y),M!==null&&(g=s(M,g,b),T===null?w=M:T.sibling=M,T=M);return lt&&$r(f,b),w}for(M=i(f,M);b<x.length;b++)D=m(M,f,b,x[b],y),D!==null&&(n&&D.alternate!==null&&M.delete(D.key===null?b:D.key),g=s(D,g,b),T===null?w=D:T.sibling=D,T=D);return n&&M.forEach(function(R){return e(f,R)}),lt&&$r(f,b),w}function _(f,g,x,y){var w=Wo(x);if(typeof w!="function")throw Error(ee(150));if(x=w.call(x),x==null)throw Error(ee(151));for(var T=w=null,M=g,b=g=0,D=null,S=x.next();M!==null&&!S.done;b++,S=x.next()){M.index>b?(D=M,M=null):D=M.sibling;var R=d(f,M,S.value,y);if(R===null){M===null&&(M=D);break}n&&M&&R.alternate===null&&e(f,M),g=s(R,g,b),T===null?w=R:T.sibling=R,T=R,M=D}if(S.done)return t(f,M),lt&&$r(f,b),w;if(M===null){for(;!S.done;b++,S=x.next())S=h(f,S.value,y),S!==null&&(g=s(S,g,b),T===null?w=S:T.sibling=S,T=S);return lt&&$r(f,b),w}for(M=i(f,M);!S.done;b++,S=x.next())S=m(M,f,b,S.value,y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?b:S.key),g=s(S,g,b),T===null?w=S:T.sibling=S,T=S);return n&&M.forEach(function(F){return e(f,F)}),lt&&$r(f,b),w}function p(f,g,x,y){if(typeof x=="object"&&x!==null&&x.type===Ys&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case hl:e:{for(var w=x.key,T=g;T!==null;){if(T.key===w){if(w=x.type,w===Ys){if(T.tag===7){t(f,T.sibling),g=r(T,x.props.children),g.return=f,f=g;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===lr&&vm(w)===T.type){t(f,T.sibling),g=r(T,x.props),g.ref=$o(f,T,x),g.return=f,f=g;break e}t(f,T);break}else e(f,T);T=T.sibling}x.type===Ys?(g=ls(x.props.children,f.mode,y,x.key),g.return=f,f=g):(y=uu(x.type,x.key,x.props,null,f.mode,y),y.ref=$o(f,g,x),y.return=f,f=y)}return o(f);case js:e:{for(T=x.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){t(f,g.sibling),g=r(g,x.children||[]),g.return=f,f=g;break e}else{t(f,g);break}else e(f,g);g=g.sibling}g=Zc(x,f.mode,y),g.return=f,f=g}return o(f);case lr:return T=x._init,p(f,g,T(x._payload),y)}if(oa(x))return v(f,g,x,y);if(Wo(x))return _(f,g,x,y);El(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(t(f,g.sibling),g=r(g,x),g.return=f,f=g):(t(f,g),g=Kc(x,f.mode,y),g.return=f,f=g),o(f)):t(f,g)}return p}var To=j0(!0),Y0=j0(!1),Cu=kr(null),Ru=null,to=null,Rd=null;function Pd(){Rd=to=Ru=null}function bd(n){var e=Cu.current;at(Cu),n._currentValue=e}function _h(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ho(n,e){Ru=n,Rd=to=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(gn=!0),n.firstContext=null)}function ei(n){var e=n._currentValue;if(Rd!==n)if(n={context:n,memoizedValue:e,next:null},to===null){if(Ru===null)throw Error(ee(308));to=n,Ru.dependencies={lanes:0,firstContext:n}}else to=to.next=n;return e}var is=null;function Ld(n){is===null?is=[n]:is.push(n)}function q0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Ld(e)):(t.next=r.next,r.next=t),e.interleaved=t,$i(n,i)}function $i(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ur=!1;function Dd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(n,t)}return r=i.interleaved,r===null?(e.next=e,Ld(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(n,t)}function iu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,gd(n,t)}}function xm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Pu(n,e,t,i){var r=n.updateQueue;ur=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,_=a;switch(d=e,m=t,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=_t({},h,d);break e;case 2:ur=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);xs|=o,n.lanes=o,n.memoizedState=h}}function ym(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var nl={},Ai=kr(nl),Fa=kr(nl),ka=kr(nl);function rs(n){if(n===nl)throw Error(ee(174));return n}function Nd(n,e){switch(it(ka,e),it(Fa,n),it(Ai,nl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Kf(e,n)}at(Ai),it(Ai,e)}function wo(){at(Ai),at(Fa),at(ka)}function K0(n){rs(ka.current);var e=rs(Ai.current),t=Kf(e,n.type);e!==t&&(it(Fa,n),it(Ai,t))}function Ud(n){Fa.current===n&&(at(Ai),at(Fa))}var ht=kr(0);function bu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function Id(){for(var n=0;n<Wc.length;n++)Wc[n]._workInProgressVersionPrimary=null;Wc.length=0}var ru=er.ReactCurrentDispatcher,Xc=er.ReactCurrentBatchConfig,vs=0,mt=null,Ct=null,Nt=null,Lu=!1,ga=!1,za=0,AM=0;function jt(){throw Error(ee(321))}function Od(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!pi(n[t],e[t]))return!1;return!0}function Fd(n,e,t,i,r,s){if(vs=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ru.current=n===null||n.memoizedState===null?bM:LM,n=t(i,r),ga){s=0;do{if(ga=!1,za=0,25<=s)throw Error(ee(301));s+=1,Nt=Ct=null,e.updateQueue=null,ru.current=DM,n=t(i,r)}while(ga)}if(ru.current=Du,e=Ct!==null&&Ct.next!==null,vs=0,Nt=Ct=mt=null,Lu=!1,e)throw Error(ee(300));return n}function kd(){var n=za!==0;return za=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?mt.memoizedState=Nt=n:Nt=Nt.next=n,Nt}function ti(){if(Ct===null){var n=mt.alternate;n=n!==null?n.memoizedState:null}else n=Ct.next;var e=Nt===null?mt.memoizedState:Nt.next;if(e!==null)Nt=e,Ct=n;else{if(n===null)throw Error(ee(310));Ct=n,n={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Nt===null?mt.memoizedState=Nt=n:Nt=Nt.next=n}return Nt}function Ba(n,e){return typeof e=="function"?e(n):e}function jc(n){var e=ti(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=Ct,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((vs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,mt.lanes|=c,xs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,pi(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,mt.lanes|=s,xs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Yc(n){var e=ti(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);pi(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Z0(){}function Q0(n,e){var t=mt,i=ti(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,zd(tv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(t.flags|=2048,Ga(9,ev.bind(null,t,i,r,e),void 0,null),Ot===null)throw Error(ee(349));vs&30||J0(t,e,r)}return r}function J0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ev(n,e,t,i){e.value=t,e.getSnapshot=i,nv(e)&&iv(n)}function tv(n,e,t){return t(function(){nv(e)&&iv(n)})}function nv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!pi(n,t)}catch{return!0}}function iv(n){var e=$i(n,1);e!==null&&di(e,n,1,-1)}function Sm(n){var e=vi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:n},e.queue=n,n=n.dispatch=PM.bind(null,mt,n),[e.memoizedState,n]}function Ga(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function rv(){return ti().memoizedState}function su(n,e,t,i){var r=vi();mt.flags|=n,r.memoizedState=Ga(1|e,t,void 0,i===void 0?null:i)}function rc(n,e,t,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Od(i,o.deps)){r.memoizedState=Ga(e,t,s,i);return}}mt.flags|=n,r.memoizedState=Ga(1|e,t,s,i)}function Mm(n,e){return su(8390656,8,n,e)}function zd(n,e){return rc(2048,8,n,e)}function sv(n,e){return rc(4,2,n,e)}function ov(n,e){return rc(4,4,n,e)}function av(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function lv(n,e,t){return t=t!=null?t.concat([n]):null,rc(4,4,av.bind(null,e,n),t)}function Bd(){}function uv(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Od(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function cv(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Od(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function fv(n,e,t){return vs&21?(pi(t,e)||(t=_0(),mt.lanes|=t,xs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,gn=!0),n.memoizedState=t)}function CM(n,e){var t=$e;$e=t!==0&&4>t?t:4,n(!0);var i=Xc.transition;Xc.transition={};try{n(!1),e()}finally{$e=t,Xc.transition=i}}function hv(){return ti().memoizedState}function RM(n,e,t){var i=Tr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},dv(n))pv(e,t);else if(t=q0(n,e,t,i),t!==null){var r=ln();di(t,n,i,r),mv(t,e,i)}}function PM(n,e,t){var i=Tr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(dv(n))pv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,pi(a,o)){var l=e.interleaved;l===null?(r.next=r,Ld(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=q0(n,e,r,i),t!==null&&(r=ln(),di(t,n,i,r),mv(t,e,i))}}function dv(n){var e=n.alternate;return n===mt||e!==null&&e===mt}function pv(n,e){ga=Lu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function mv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,gd(n,t)}}var Du={readContext:ei,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},bM={readContext:ei,useCallback:function(n,e){return vi().memoizedState=[n,e===void 0?null:e],n},useContext:ei,useEffect:Mm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,su(4194308,4,av.bind(null,e,n),t)},useLayoutEffect:function(n,e){return su(4194308,4,n,e)},useInsertionEffect:function(n,e){return su(4,2,n,e)},useMemo:function(n,e){var t=vi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=vi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=RM.bind(null,mt,n),[i.memoizedState,n]},useRef:function(n){var e=vi();return n={current:n},e.memoizedState=n},useState:Sm,useDebugValue:Bd,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Sm(!1),e=n[0];return n=CM.bind(null,n[1]),vi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=mt,r=vi();if(lt){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),Ot===null)throw Error(ee(349));vs&30||J0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Mm(tv.bind(null,i,s,n),[n]),i.flags|=2048,Ga(9,ev.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=vi(),e=Ot.identifierPrefix;if(lt){var t=Wi,i=Vi;t=(i&~(1<<32-hi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=za++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=AM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},LM={readContext:ei,useCallback:uv,useContext:ei,useEffect:zd,useImperativeHandle:lv,useInsertionEffect:sv,useLayoutEffect:ov,useMemo:cv,useReducer:jc,useRef:rv,useState:function(){return jc(Ba)},useDebugValue:Bd,useDeferredValue:function(n){var e=ti();return fv(e,Ct.memoizedState,n)},useTransition:function(){var n=jc(Ba)[0],e=ti().memoizedState;return[n,e]},useMutableSource:Z0,useSyncExternalStore:Q0,useId:hv,unstable_isNewReconciler:!1},DM={readContext:ei,useCallback:uv,useContext:ei,useEffect:zd,useImperativeHandle:lv,useInsertionEffect:sv,useLayoutEffect:ov,useMemo:cv,useReducer:Yc,useRef:rv,useState:function(){return Yc(Ba)},useDebugValue:Bd,useDeferredValue:function(n){var e=ti();return Ct===null?e.memoizedState=n:fv(e,Ct.memoizedState,n)},useTransition:function(){var n=Yc(Ba)[0],e=ti().memoizedState;return[n,e]},useMutableSource:Z0,useSyncExternalStore:Q0,useId:hv,unstable_isNewReconciler:!1};function ai(n,e){if(n&&n.defaultProps){e=_t({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function gh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:_t({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var sc={isMounted:function(n){return(n=n._reactInternals)?ws(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=ln(),r=Tr(n),s=ji(i,r);s.payload=e,t!=null&&(s.callback=t),e=Mr(n,s,r),e!==null&&(di(e,n,r,i),iu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=ln(),r=Tr(n),s=ji(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Mr(n,s,r),e!==null&&(di(e,n,r,i),iu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ln(),i=Tr(n),r=ji(t,i);r.tag=2,e!=null&&(r.callback=e),e=Mr(n,r,i),e!==null&&(di(e,n,i,t),iu(e,n,i))}};function Em(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Na(t,i)||!Na(r,s):!0}function _v(n,e,t){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=xn(e)?_s:en.current,i=e.contextTypes,s=(i=i!=null)?Mo(n,r):Dr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Tm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&sc.enqueueReplaceState(e,e.state,null)}function vh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Dd(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=xn(e)?_s:en.current,r.context=Mo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&sc.enqueueReplaceState(r,r.state,null),Pu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ao(n,e){try{var t="",i=e;do t+=oS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function qc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function xh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var NM=typeof WeakMap=="function"?WeakMap:Map;function gv(n,e,t){t=ji(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Uu||(Uu=!0,Ph=i),xh(n,e)},t}function vv(n,e,t){t=ji(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){xh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){xh(n,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function wm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new NM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=YM.bind(null,n,e,t),e.then(n,n))}function Am(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Cm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ji(-1,1),e.tag=2,Mr(t,e,1))),t.lanes|=1),n)}var UM=er.ReactCurrentOwner,gn=!1;function rn(n,e,t,i){e.child=n===null?Y0(e,null,t,i):To(e,n.child,t,i)}function Rm(n,e,t,i,r){t=t.render;var s=e.ref;return ho(e,r),i=Fd(n,e,t,i,s,r),t=kd(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ki(n,e,r)):(lt&&t&&wd(e),e.flags|=1,rn(n,e,i,r),e.child)}function Pm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!qd(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,xv(n,e,s,i,r)):(n=uu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Na,t(o,i)&&n.ref===e.ref)return Ki(n,e,r)}return e.flags|=1,n=wr(s,i),n.ref=e.ref,n.return=e,e.child=n}function xv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Na(s,i)&&n.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(gn=!0);else return e.lanes=n.lanes,Ki(n,e,r)}return yh(n,e,t,i,r)}function yv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(io,bn),bn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,it(io,bn),bn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,it(io,bn),bn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,it(io,bn),bn|=i;return rn(n,e,r,t),e.child}function Sv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function yh(n,e,t,i,r){var s=xn(t)?_s:en.current;return s=Mo(e,s),ho(e,r),t=Fd(n,e,t,i,s,r),i=kd(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ki(n,e,r)):(lt&&i&&wd(e),e.flags|=1,rn(n,e,t,r),e.child)}function bm(n,e,t,i,r){if(xn(t)){var s=!0;Tu(e)}else s=!1;if(ho(e,r),e.stateNode===null)ou(n,e),_v(e,t,i),vh(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ei(u):(u=xn(t)?_s:en.current,u=Mo(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Tm(e,o,i,u),ur=!1;var d=e.memoizedState;o.state=d,Pu(e,i,o,r),l=e.memoizedState,a!==i||d!==l||vn.current||ur?(typeof c=="function"&&(gh(e,t,c,i),l=e.memoizedState),(a=ur||Em(e,t,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,$0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:ai(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=xn(t)?_s:en.current,l=Mo(e,l));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Tm(e,o,i,l),ur=!1,d=e.memoizedState,o.state=d,Pu(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||vn.current||ur?(typeof m=="function"&&(gh(e,t,m,i),v=e.memoizedState),(u=ur||Em(e,t,u,i,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Sh(n,e,t,i,s,r)}function Sh(n,e,t,i,r,s){Sv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&mm(e,t,!1),Ki(n,e,s);i=e.stateNode,UM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=To(e,n.child,null,s),e.child=To(e,null,a,s)):rn(n,e,a,s),e.memoizedState=i.state,r&&mm(e,t,!0),e.child}function Mv(n){var e=n.stateNode;e.pendingContext?pm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&pm(n,e.context,!1),Nd(n,e.containerInfo)}function Lm(n,e,t,i,r){return Eo(),Cd(r),e.flags|=256,rn(n,e,t,i),e.child}var Mh={dehydrated:null,treeContext:null,retryLane:0};function Eh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ev(n,e,t){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),it(ht,r&1),n===null)return mh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lc(o,i,0,null),n=ls(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Eh(t),e.memoizedState=Mh,n):Gd(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return IM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=ls(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Eh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Mh,i}return s=n.child,n=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Gd(n,e){return e=lc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Tl(n,e,t,i){return i!==null&&Cd(i),To(e,n.child,null,t),n=Gd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function IM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=qc(Error(ee(422))),Tl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lc({mode:"visible",children:i.children},r,0,null),s=ls(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&To(e,n.child,null,o),e.child.memoizedState=Eh(o),e.memoizedState=Mh,s);if(!(e.mode&1))return Tl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=qc(s,i,void 0),Tl(n,e,o,i)}if(a=(o&n.childLanes)!==0,gn||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(n,r),di(i,n,r,-1))}return Yd(),i=qc(Error(ee(421))),Tl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=qM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Un=Sr(r.nextSibling),On=e,lt=!0,ui=null,n!==null&&(jn[Yn++]=Vi,jn[Yn++]=Wi,jn[Yn++]=gs,Vi=n.id,Wi=n.overflow,gs=e),e=Gd(e,i.children),e.flags|=4096,e)}function Dm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),_h(n.return,e,t)}function $c(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Tv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(n,e,i.children,t),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dm(n,t,e);else if(n.tag===19)Dm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(it(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&bu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),$c(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&bu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}$c(e,!0,t,null,s);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ou(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ki(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),xs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=wr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=wr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function OM(n,e,t){switch(e.tag){case 3:Mv(e),Eo();break;case 5:K0(e);break;case 1:xn(e.type)&&Tu(e);break;case 4:Nd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Cu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ht,ht.current&1),e.flags|=128,null):t&e.child.childLanes?Ev(n,e,t):(it(ht,ht.current&1),n=Ki(n,e,t),n!==null?n.sibling:null);it(ht,ht.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Tv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,yv(n,e,t)}return Ki(n,e,t)}var wv,Th,Av,Cv;wv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Th=function(){};Av=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,rs(Ai.current);var s=null;switch(t){case"input":r=jf(n,r),i=jf(n,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=$f(n,r),i=$f(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Mu)}Zf(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Aa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Cv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ko(n,e){if(!lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Yt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function FM(n,e,t){var i=e.pendingProps;switch(Ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return xn(e.type)&&Eu(),Yt(e),null;case 3:return i=e.stateNode,wo(),at(vn),at(en),Id(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ml(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ui!==null&&(Dh(ui),ui=null))),Th(n,e),Yt(e),null;case 5:Ud(e);var r=rs(ka.current);if(t=e.type,n!==null&&e.stateNode!=null)Av(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Yt(e),null}if(n=rs(Ai.current),Ml(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[Oa]=s,n=(e.mode&1)!==0,t){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<la.length;r++)st(la[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Gp(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":Vp(i,s),st("invalid",i)}Zf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,n),r=["children",""+a]):Aa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(t){case"input":dl(i),Hp(i,s,!0);break;case"textarea":dl(i),Wp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Mu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=t0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Si]=e,n[Oa]=i,wv(n,e,!1,!1),e.stateNode=n;e:{switch(o=Qf(t,i),t){case"dialog":st("cancel",n),st("close",n),r=i;break;case"iframe":case"object":case"embed":st("load",n),r=i;break;case"video":case"audio":for(r=0;r<la.length;r++)st(la[r],n);r=i;break;case"source":st("error",n),r=i;break;case"img":case"image":case"link":st("error",n),st("load",n),r=i;break;case"details":st("toggle",n),r=i;break;case"input":Gp(n,i),r=jf(n,i),st("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),st("invalid",n);break;case"textarea":Vp(n,i),r=$f(n,i),st("invalid",n);break;default:r=i}Zf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?r0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ca(n,l):typeof l=="number"&&Ca(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",n):l!=null&&fd(n,s,l,o))}switch(t){case"input":dl(n),Hp(n,i,!1);break;case"textarea":dl(n),Wp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Lr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?lo(n,!!i.multiple,s,!1):i.defaultValue!=null&&lo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Mu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(n&&e.stateNode!=null)Cv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=rs(ka.current),rs(Ai.current),Ml(e)){if(i=e.stateNode,t=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==t)&&(n=On,n!==null))switch(n.tag){case 3:Sl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return Yt(e),null;case 13:if(at(ht),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(lt&&Un!==null&&e.mode&1&&!(e.flags&128))X0(),Eo(),e.flags|=98560,s=!1;else if(s=Ml(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Si]=e}else Eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else ui!==null&&(Dh(ui),ui=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||ht.current&1?Rt===0&&(Rt=3):Yd())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return wo(),Th(n,e),n===null&&Ua(e.stateNode.containerInfo),Yt(e),null;case 10:return bd(e.type._context),Yt(e),null;case 17:return xn(e.type)&&Eu(),Yt(e),null;case 19:if(at(ht),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ko(s,!1);else{if(Rt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=bu(n),o!==null){for(e.flags|=128,Ko(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return it(ht,ht.current&1|2),e.child}n=n.sibling}s.tail!==null&&Mt()>Co&&(e.flags|=128,i=!0,Ko(s,!1),e.lanes=4194304)}else{if(!i)if(n=bu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Yt(e),null}else 2*Mt()-s.renderingStartTime>Co&&t!==1073741824&&(e.flags|=128,i=!0,Ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,t=ht.current,it(ht,i?t&1|2:t&1),e):(Yt(e),null);case 22:case 23:return jd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function kM(n,e){switch(Ad(e),e.tag){case 1:return xn(e.type)&&Eu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return wo(),at(vn),at(en),Id(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ud(e),null;case 13:if(at(ht),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Eo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return at(ht),null;case 4:return wo(),null;case 10:return bd(e.type._context),null;case 22:case 23:return jd(),null;case 24:return null;default:return null}}var wl=!1,Kt=!1,zM=typeof WeakSet=="function"?WeakSet:Set,ce=null;function no(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){vt(n,e,i)}else t.current=null}function wh(n,e,t){try{t()}catch(i){vt(n,e,i)}}var Nm=!1;function BM(n,e){if(lh=xu,n=D0(),Td(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,d=null;t:for(;;){for(var m;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(uh={focusedElem:n,selectionRange:t},xu=!1,ce=e;ce!==null;)if(e=ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ce=n;else for(;ce!==null;){e=ce;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,p=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:ai(e.type,_),p);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){vt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}return v=Nm,Nm=!1,v}function va(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&wh(e,t,s)}r=r.next}while(r!==i)}}function oc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ah(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Rv(n){var e=n.alternate;e!==null&&(n.alternate=null,Rv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Si],delete e[Oa],delete e[hh],delete e[MM],delete e[EM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Pv(n){return n.tag===5||n.tag===3||n.tag===4}function Um(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Pv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ch(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Mu));else if(i!==4&&(n=n.child,n!==null))for(Ch(n,e,t),n=n.sibling;n!==null;)Ch(n,e,t),n=n.sibling}function Rh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Rh(n,e,t),n=n.sibling;n!==null;)Rh(n,e,t),n=n.sibling}var Gt=null,li=!1;function tr(n,e,t){for(t=t.child;t!==null;)bv(n,e,t),t=t.sibling}function bv(n,e,t){if(wi&&typeof wi.onCommitFiberUnmount=="function")try{wi.onCommitFiberUnmount(Qu,t)}catch{}switch(t.tag){case 5:Kt||no(t,e);case 6:var i=Gt,r=li;Gt=null,tr(n,e,t),Gt=i,li=r,Gt!==null&&(li?(n=Gt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Gt.removeChild(t.stateNode));break;case 18:Gt!==null&&(li?(n=Gt,t=t.stateNode,n.nodeType===8?Hc(n.parentNode,t):n.nodeType===1&&Hc(n,t),La(n)):Hc(Gt,t.stateNode));break;case 4:i=Gt,r=li,Gt=t.stateNode.containerInfo,li=!0,tr(n,e,t),Gt=i,li=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wh(t,e,o),r=r.next}while(r!==i)}tr(n,e,t);break;case 1:if(!Kt&&(no(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){vt(t,e,a)}tr(n,e,t);break;case 21:tr(n,e,t);break;case 22:t.mode&1?(Kt=(i=Kt)||t.memoizedState!==null,tr(n,e,t),Kt=i):tr(n,e,t);break;default:tr(n,e,t)}}function Im(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new zM),e.forEach(function(i){var r=$M.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ii(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,li=!1;break e;case 3:Gt=a.stateNode.containerInfo,li=!0;break e;case 4:Gt=a.stateNode.containerInfo,li=!0;break e}a=a.return}if(Gt===null)throw Error(ee(160));bv(s,o,r),Gt=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lv(e,n),e=e.sibling}function Lv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(e,n),gi(n),i&4){try{va(3,n,n.return),oc(3,n)}catch(_){vt(n,n.return,_)}try{va(5,n,n.return)}catch(_){vt(n,n.return,_)}}break;case 1:ii(e,n),gi(n),i&512&&t!==null&&no(t,t.return);break;case 5:if(ii(e,n),gi(n),i&512&&t!==null&&no(t,t.return),n.flags&32){var r=n.stateNode;try{Ca(r,"")}catch(_){vt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Jg(r,s),Qf(a,o);var u=Qf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?r0(r,h):c==="dangerouslySetInnerHTML"?n0(r,h):c==="children"?Ca(r,h):fd(r,c,h,u)}switch(a){case"input":Yf(r,s);break;case"textarea":e0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?lo(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?lo(r,!!s.multiple,s.defaultValue,!0):lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Oa]=s}catch(_){vt(n,n.return,_)}}break;case 6:if(ii(e,n),gi(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){vt(n,n.return,_)}}break;case 3:if(ii(e,n),gi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(_){vt(n,n.return,_)}break;case 4:ii(e,n),gi(n);break;case 13:ii(e,n),gi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wd=Mt())),i&4&&Im(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Kt=(u=Kt)||c,ii(e,n),Kt=u):ii(e,n),gi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(ce=n,c=n.child;c!==null;){for(h=ce=c;ce!==null;){switch(d=ce,m=d.child,d.tag){case 0:case 11:case 14:case 15:va(4,d,d.return);break;case 1:no(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){vt(i,t,_)}}break;case 5:no(d,d.return);break;case 22:if(d.memoizedState!==null){Fm(h);continue}}m!==null?(m.return=d,ce=m):Fm(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=i0("display",o))}catch(_){vt(n,n.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){vt(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ii(e,n),gi(n),i&4&&Im(n);break;case 21:break;default:ii(e,n),gi(n)}}function gi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Pv(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ca(r,""),i.flags&=-33);var s=Um(n);Rh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Um(n);Ch(n,a,o);break;default:throw Error(ee(161))}}catch(l){vt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function GM(n,e,t){ce=n,Dv(n)}function Dv(n,e,t){for(var i=(n.mode&1)!==0;ce!==null;){var r=ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||wl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=wl;var u=Kt;if(wl=o,(Kt=l)&&!u)for(ce=r;ce!==null;)o=ce,l=o.child,o.tag===22&&o.memoizedState!==null?km(r):l!==null?(l.return=o,ce=l):km(r);for(;s!==null;)ce=s,Dv(s),s=s.sibling;ce=r,wl=a,Kt=u}Om(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ce=s):Om(n)}}function Om(n){for(;ce!==null;){var e=ce;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||oc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ai(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ym(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}ym(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&La(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Kt||e.flags&512&&Ah(e)}catch(d){vt(e,e.return,d)}}if(e===n){ce=null;break}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}}function Fm(n){for(;ce!==null;){var e=ce;if(e===n){ce=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ce=t;break}ce=e.return}}function km(n){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{oc(4,e)}catch(l){vt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{Ah(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{Ah(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===n){ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ce=a;break}ce=e.return}}var HM=Math.ceil,Nu=er.ReactCurrentDispatcher,Hd=er.ReactCurrentOwner,Jn=er.ReactCurrentBatchConfig,Xe=0,Ot=null,wt=null,Vt=0,bn=0,io=kr(0),Rt=0,Ha=null,xs=0,ac=0,Vd=0,xa=null,mn=null,Wd=0,Co=1/0,Fi=null,Uu=!1,Ph=null,Er=null,Al=!1,dr=null,Iu=0,ya=0,bh=null,au=-1,lu=0;function ln(){return Xe&6?Mt():au!==-1?au:au=Mt()}function Tr(n){return n.mode&1?Xe&2&&Vt!==0?Vt&-Vt:wM.transition!==null?(lu===0&&(lu=_0()),lu):(n=$e,n!==0||(n=window.event,n=n===void 0?16:E0(n.type)),n):1}function di(n,e,t,i){if(50<ya)throw ya=0,bh=null,Error(ee(185));Ja(n,t,i),(!(Xe&2)||n!==Ot)&&(n===Ot&&(!(Xe&2)&&(ac|=t),Rt===4&&fr(n,Vt)),yn(n,i),t===1&&Xe===0&&!(e.mode&1)&&(Co=Mt()+500,ic&&zr()))}function yn(n,e){var t=n.callbackNode;wS(n,e);var i=vu(n,n===Ot?Vt:0);if(i===0)t!==null&&Yp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Yp(t),e===1)n.tag===0?TM(zm.bind(null,n)):H0(zm.bind(null,n)),yM(function(){!(Xe&6)&&zr()}),t=null;else{switch(g0(i)){case 1:t=_d;break;case 4:t=p0;break;case 16:t=gu;break;case 536870912:t=m0;break;default:t=gu}t=Bv(t,Nv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Nv(n,e){if(au=-1,lu=0,Xe&6)throw Error(ee(327));var t=n.callbackNode;if(po()&&n.callbackNode!==t)return null;var i=vu(n,n===Ot?Vt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Ou(n,i);else{e=i;var r=Xe;Xe|=2;var s=Iv();(Ot!==n||Vt!==e)&&(Fi=null,Co=Mt()+500,as(n,e));do try{XM();break}catch(a){Uv(n,a)}while(!0);Pd(),Nu.current=s,Xe=r,wt!==null?e=0:(Ot=null,Vt=0,e=Rt)}if(e!==0){if(e===2&&(r=ih(n),r!==0&&(i=r,e=Lh(n,r))),e===1)throw t=Ha,as(n,0),fr(n,i),yn(n,Mt()),t;if(e===6)fr(n,i);else{if(r=n.current.alternate,!(i&30)&&!VM(r)&&(e=Ou(n,i),e===2&&(s=ih(n),s!==0&&(i=s,e=Lh(n,s))),e===1))throw t=Ha,as(n,0),fr(n,i),yn(n,Mt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:Kr(n,mn,Fi);break;case 3:if(fr(n,i),(i&130023424)===i&&(e=Wd+500-Mt(),10<e)){if(vu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){ln(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=fh(Kr.bind(null,n,mn,Fi),e);break}Kr(n,mn,Fi);break;case 4:if(fr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-hi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*HM(i/1960))-i,10<i){n.timeoutHandle=fh(Kr.bind(null,n,mn,Fi),i);break}Kr(n,mn,Fi);break;case 5:Kr(n,mn,Fi);break;default:throw Error(ee(329))}}}return yn(n,Mt()),n.callbackNode===t?Nv.bind(null,n):null}function Lh(n,e){var t=xa;return n.current.memoizedState.isDehydrated&&(as(n,e).flags|=256),n=Ou(n,e),n!==2&&(e=mn,mn=t,e!==null&&Dh(e)),n}function Dh(n){mn===null?mn=n:mn.push.apply(mn,n)}function VM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(n,e){for(e&=~Vd,e&=~ac,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-hi(e),i=1<<t;n[t]=-1,e&=~i}}function zm(n){if(Xe&6)throw Error(ee(327));po();var e=vu(n,0);if(!(e&1))return yn(n,Mt()),null;var t=Ou(n,e);if(n.tag!==0&&t===2){var i=ih(n);i!==0&&(e=i,t=Lh(n,i))}if(t===1)throw t=Ha,as(n,0),fr(n,e),yn(n,Mt()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Kr(n,mn,Fi),yn(n,Mt()),null}function Xd(n,e){var t=Xe;Xe|=1;try{return n(e)}finally{Xe=t,Xe===0&&(Co=Mt()+500,ic&&zr())}}function ys(n){dr!==null&&dr.tag===0&&!(Xe&6)&&po();var e=Xe;Xe|=1;var t=Jn.transition,i=$e;try{if(Jn.transition=null,$e=1,n)return n()}finally{$e=i,Jn.transition=t,Xe=e,!(Xe&6)&&zr()}}function jd(){bn=io.current,at(io)}function as(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,xM(t)),wt!==null)for(t=wt.return;t!==null;){var i=t;switch(Ad(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Eu();break;case 3:wo(),at(vn),at(en),Id();break;case 5:Ud(i);break;case 4:wo();break;case 13:at(ht);break;case 19:at(ht);break;case 10:bd(i.type._context);break;case 22:case 23:jd()}t=t.return}if(Ot=n,wt=n=wr(n.current,null),Vt=bn=e,Rt=0,Ha=null,Vd=ac=xs=0,mn=xa=null,is!==null){for(e=0;e<is.length;e++)if(t=is[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}is=null}return n}function Uv(n,e){do{var t=wt;try{if(Pd(),ru.current=Du,Lu){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Lu=!1}if(vs=0,Nt=Ct=mt=null,ga=!1,za=0,Hd.current=null,t===null||t.return===null){Rt=1,Ha=e,wt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Am(o);if(m!==null){m.flags&=-257,Cm(m,o,a,s,e),m.mode&1&&wm(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){wm(s,u,e),Yd();break e}l=Error(ee(426))}}else if(lt&&a.mode&1){var p=Am(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Cm(p,o,a,s,e),Cd(Ao(l,a));break e}}s=l=Ao(l,a),Rt!==4&&(Rt=2),xa===null?xa=[s]:xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=gv(s,l,e);xm(s,f);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Er===null||!Er.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=vv(s,a,e);xm(s,y);break e}}s=s.return}while(s!==null)}Fv(t)}catch(w){e=w,wt===t&&t!==null&&(wt=t=t.return);continue}break}while(!0)}function Iv(){var n=Nu.current;return Nu.current=Du,n===null?Du:n}function Yd(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ot===null||!(xs&268435455)&&!(ac&268435455)||fr(Ot,Vt)}function Ou(n,e){var t=Xe;Xe|=2;var i=Iv();(Ot!==n||Vt!==e)&&(Fi=null,as(n,e));do try{WM();break}catch(r){Uv(n,r)}while(!0);if(Pd(),Xe=t,Nu.current=i,wt!==null)throw Error(ee(261));return Ot=null,Vt=0,Rt}function WM(){for(;wt!==null;)Ov(wt)}function XM(){for(;wt!==null&&!_S();)Ov(wt)}function Ov(n){var e=zv(n.alternate,n,bn);n.memoizedProps=n.pendingProps,e===null?Fv(n):wt=e,Hd.current=null}function Fv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=kM(t,e),t!==null){t.flags&=32767,wt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Rt=6,wt=null;return}}else if(t=FM(t,e,bn),t!==null){wt=t;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=n}while(e!==null);Rt===0&&(Rt=5)}function Kr(n,e,t){var i=$e,r=Jn.transition;try{Jn.transition=null,$e=1,jM(n,e,t,i)}finally{Jn.transition=r,$e=i}return null}function jM(n,e,t,i){do po();while(dr!==null);if(Xe&6)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(AS(n,s),n===Ot&&(wt=Ot=null,Vt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Al||(Al=!0,Bv(gu,function(){return po(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Jn.transition,Jn.transition=null;var o=$e;$e=1;var a=Xe;Xe|=4,Hd.current=null,BM(n,t),Lv(t,n),hM(uh),xu=!!lh,uh=lh=null,n.current=t,GM(t),gS(),Xe=a,$e=o,Jn.transition=s}else n.current=t;if(Al&&(Al=!1,dr=n,Iu=r),s=n.pendingLanes,s===0&&(Er=null),yS(t.stateNode),yn(n,Mt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Uu)throw Uu=!1,n=Ph,Ph=null,n;return Iu&1&&n.tag!==0&&po(),s=n.pendingLanes,s&1?n===bh?ya++:(ya=0,bh=n):ya=0,zr(),null}function po(){if(dr!==null){var n=g0(Iu),e=Jn.transition,t=$e;try{if(Jn.transition=null,$e=16>n?16:n,dr===null)var i=!1;else{if(n=dr,dr=null,Iu=0,Xe&6)throw Error(ee(331));var r=Xe;for(Xe|=4,ce=n.current;ce!==null;){var s=ce,o=s.child;if(ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ce=u;ce!==null;){var c=ce;switch(c.tag){case 0:case 11:case 15:va(8,c,s)}var h=c.child;if(h!==null)h.return=c,ce=h;else for(;ce!==null;){c=ce;var d=c.sibling,m=c.return;if(Rv(c),c===u){ce=null;break}if(d!==null){d.return=m,ce=d;break}ce=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ce=o;else e:for(;ce!==null;){if(s=ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ce=f;break e}ce=s.return}}var g=n.current;for(ce=g;ce!==null;){o=ce;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ce=x;else e:for(o=g;ce!==null;){if(a=ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:oc(9,a)}}catch(w){vt(a,a.return,w)}if(a===o){ce=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ce=y;break e}ce=a.return}}if(Xe=r,zr(),wi&&typeof wi.onPostCommitFiberRoot=="function")try{wi.onPostCommitFiberRoot(Qu,n)}catch{}i=!0}return i}finally{$e=t,Jn.transition=e}}return!1}function Bm(n,e,t){e=Ao(t,e),e=gv(n,e,1),n=Mr(n,e,1),e=ln(),n!==null&&(Ja(n,1,e),yn(n,e))}function vt(n,e,t){if(n.tag===3)Bm(n,n,t);else for(;e!==null;){if(e.tag===3){Bm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){n=Ao(t,n),n=vv(e,n,1),e=Mr(e,n,1),n=ln(),e!==null&&(Ja(e,1,n),yn(e,n));break}}e=e.return}}function YM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=ln(),n.pingedLanes|=n.suspendedLanes&t,Ot===n&&(Vt&t)===t&&(Rt===4||Rt===3&&(Vt&130023424)===Vt&&500>Mt()-Wd?as(n,0):Vd|=t),yn(n,e)}function kv(n,e){e===0&&(n.mode&1?(e=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):e=1);var t=ln();n=$i(n,e),n!==null&&(Ja(n,e,t),yn(n,t))}function qM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),kv(n,t)}function $M(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),kv(n,t)}var zv;zv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return gn=!1,OM(n,e,t);gn=!!(n.flags&131072)}else gn=!1,lt&&e.flags&1048576&&V0(e,Au,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ou(n,e),n=e.pendingProps;var r=Mo(e,en.current);ho(e,t),r=Fd(null,e,i,n,r,t);var s=kd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,Tu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Dd(e),r.updater=sc,e.stateNode=r,r._reactInternals=e,vh(e,i,n,t),e=Sh(null,e,i,!0,s,t)):(e.tag=0,lt&&s&&wd(e),rn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ou(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ZM(i),n=ai(i,n),r){case 0:e=yh(null,e,i,n,t);break e;case 1:e=bm(null,e,i,n,t);break e;case 11:e=Rm(null,e,i,n,t);break e;case 14:e=Pm(null,e,i,ai(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),yh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),bm(n,e,i,r,t);case 3:e:{if(Mv(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,$0(n,e),Pu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ao(Error(ee(423)),e),e=Lm(n,e,i,t,r);break e}else if(i!==r){r=Ao(Error(ee(424)),e),e=Lm(n,e,i,t,r);break e}else for(Un=Sr(e.stateNode.containerInfo.firstChild),On=e,lt=!0,ui=null,t=Y0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Eo(),i===r){e=Ki(n,e,t);break e}rn(n,e,i,t)}e=e.child}return e;case 5:return K0(e),n===null&&mh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,ch(i,r)?o=null:s!==null&&ch(i,s)&&(e.flags|=32),Sv(n,e),rn(n,e,o,t),e.child;case 6:return n===null&&mh(e),null;case 13:return Ev(n,e,t);case 4:return Nd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=To(e,null,i,t):rn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Rm(n,e,i,r,t);case 7:return rn(n,e,e.pendingProps,t),e.child;case 8:return rn(n,e,e.pendingProps.children,t),e.child;case 12:return rn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(Cu,i._currentValue),i._currentValue=o,s!==null)if(pi(s.value,o)){if(s.children===r.children&&!vn.current){e=Ki(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ji(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),_h(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),_h(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,t),r=ei(r),i=i(r),e.flags|=1,rn(n,e,i,t),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),Pm(n,e,i,r,t);case 15:return xv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),ou(n,e),e.tag=1,xn(i)?(n=!0,Tu(e)):n=!1,ho(e,t),_v(e,i,r),vh(e,i,r,t),Sh(null,e,i,!0,n,t);case 19:return Tv(n,e,t);case 22:return yv(n,e,t)}throw Error(ee(156,e.tag))};function Bv(n,e){return d0(n,e)}function KM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,e,t,i){return new KM(n,e,t,i)}function qd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ZM(n){if(typeof n=="function")return qd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===dd)return 11;if(n===pd)return 14}return 2}function wr(n,e){var t=n.alternate;return t===null?(t=$n(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function uu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")qd(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ys:return ls(t.children,r,s,e);case hd:o=8,r|=8;break;case Hf:return n=$n(12,t,e,r|2),n.elementType=Hf,n.lanes=s,n;case Vf:return n=$n(13,t,e,r),n.elementType=Vf,n.lanes=s,n;case Wf:return n=$n(19,t,e,r),n.elementType=Wf,n.lanes=s,n;case Kg:return lc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case qg:o=10;break e;case $g:o=9;break e;case dd:o=11;break e;case pd:o=14;break e;case lr:o=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=$n(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ls(n,e,t,i){return n=$n(7,n,i,e),n.lanes=t,n}function lc(n,e,t,i){return n=$n(22,n,i,e),n.elementType=Kg,n.lanes=t,n.stateNode={isHidden:!1},n}function Kc(n,e,t){return n=$n(6,n,null,e),n.lanes=t,n}function Zc(n,e,t){return e=$n(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function QM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $d(n,e,t,i,r,s,o,a,l){return n=new QM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dd(s),n}function JM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Gv(n){if(!n)return Dr;n=n._reactInternals;e:{if(ws(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(xn(t))return G0(n,t,e)}return e}function Hv(n,e,t,i,r,s,o,a,l){return n=$d(t,i,!0,n,r,s,o,a,l),n.context=Gv(null),t=n.current,i=ln(),r=Tr(t),s=ji(i,r),s.callback=e??null,Mr(t,s,r),n.current.lanes=r,Ja(n,r,i),yn(n,i),n}function uc(n,e,t,i){var r=e.current,s=ln(),o=Tr(r);return t=Gv(t),e.context===null?e.context=t:e.pendingContext=t,e=ji(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Mr(r,e,o),n!==null&&(di(n,r,o,s),iu(n,r,o)),o}function Fu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Kd(n,e){Gm(n,e),(n=n.alternate)&&Gm(n,e)}function eE(){return null}var Vv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Zd(n){this._internalRoot=n}cc.prototype.render=Zd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));uc(n,e,null,null)};cc.prototype.unmount=Zd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ys(function(){uc(null,n,null,null)}),e[qi]=null}};function cc(n){this._internalRoot=n}cc.prototype.unstable_scheduleHydration=function(n){if(n){var e=y0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<cr.length&&e!==0&&e<cr[t].priority;t++);cr.splice(t,0,n),t===0&&M0(n)}};function Qd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function fc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Hm(){}function tE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Fu(o);s.call(u)}}var o=Hv(e,i,n,0,null,!1,!1,"",Hm);return n._reactRootContainer=o,n[qi]=o.current,Ua(n.nodeType===8?n.parentNode:n),ys(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Fu(l);a.call(u)}}var l=$d(n,0,!1,null,null,!1,!1,"",Hm);return n._reactRootContainer=l,n[qi]=l.current,Ua(n.nodeType===8?n.parentNode:n),ys(function(){uc(e,l,t,i)}),l}function hc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Fu(o);a.call(l)}}uc(e,o,n,r)}else o=tE(t,e,n,r,i);return Fu(o)}v0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=aa(e.pendingLanes);t!==0&&(gd(e,t|1),yn(e,Mt()),!(Xe&6)&&(Co=Mt()+500,zr()))}break;case 13:ys(function(){var i=$i(n,1);if(i!==null){var r=ln();di(i,n,1,r)}}),Kd(n,1)}};vd=function(n){if(n.tag===13){var e=$i(n,134217728);if(e!==null){var t=ln();di(e,n,134217728,t)}Kd(n,134217728)}};x0=function(n){if(n.tag===13){var e=Tr(n),t=$i(n,e);if(t!==null){var i=ln();di(t,n,e,i)}Kd(n,e)}};y0=function(){return $e};S0=function(n,e){var t=$e;try{return $e=n,e()}finally{$e=t}};eh=function(n,e,t){switch(e){case"input":if(Yf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=nc(i);if(!r)throw Error(ee(90));Qg(i),Yf(i,r)}}}break;case"textarea":e0(n,t);break;case"select":e=t.value,e!=null&&lo(n,!!t.multiple,e,!1)}};a0=Xd;l0=ys;var nE={usingClientEntryPoint:!1,Events:[tl,Zs,nc,s0,o0,Xd]},Zo={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iE={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=f0(n),n===null?null:n.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||eE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Qu=Cl.inject(iE),wi=Cl}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nE;Bn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(e))throw Error(ee(200));return JM(n,e,null,t)};Bn.createRoot=function(n,e){if(!Qd(n))throw Error(ee(299));var t=!1,i="",r=Vv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$d(n,1,!1,null,null,t,!1,i,r),n[qi]=e.current,Ua(n.nodeType===8?n.parentNode:n),new Zd(e)};Bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=f0(e),n=n===null?null:n.stateNode,n};Bn.flushSync=function(n){return ys(n)};Bn.hydrate=function(n,e,t){if(!fc(e))throw Error(ee(200));return hc(null,n,e,!0,t)};Bn.hydrateRoot=function(n,e,t){if(!Qd(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Vv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Hv(e,null,n,1,t??null,r,!1,s,o),n[qi]=e.current,Ua(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new cc(e)};Bn.render=function(n,e,t){if(!fc(e))throw Error(ee(200));return hc(null,n,e,!1,t)};Bn.unmountComponentAtNode=function(n){if(!fc(n))throw Error(ee(40));return n._reactRootContainer?(ys(function(){hc(null,null,n,!1,function(){n._reactRootContainer=null,n[qi]=null})}),!0):!1};Bn.unstable_batchedUpdates=Xd;Bn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!fc(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return hc(n,e,t,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function Wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wv)}catch(n){console.error(n)}}Wv(),Wg.exports=Bn;var rE=Wg.exports,Xv,Vm=rE;Xv=Vm.createRoot,Vm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="161",sE=0,Wm=1,oE=2,jv=1,aE=2,Oi=3,Nr=0,un=1,Gi=2,Ar=0,mo=1,Xm=2,jm=3,Ym=4,lE=5,es=100,uE=101,cE=102,qm=103,$m=104,fE=200,hE=201,dE=202,pE=203,Nh=204,Uh=205,mE=206,_E=207,gE=208,vE=209,xE=210,yE=211,SE=212,ME=213,EE=214,TE=0,wE=1,AE=2,ku=3,CE=4,RE=5,PE=6,bE=7,ep=0,LE=1,DE=2,Cr=0,NE=1,UE=2,IE=3,Yv=4,OE=5,FE=6,qv=300,Ro=301,Po=302,Ih=303,Oh=304,dc=306,Fh=1e3,ci=1001,kh=1002,sn=1003,Km=1004,Qo=1005,pn=1006,Qc=1007,ss=1008,Rr=1009,kE=1010,zE=1011,tp=1012,$v=1013,pr=1014,Hi=1015,Va=1016,Kv=1017,Zv=1018,us=1020,BE=1021,fi=1023,GE=1024,HE=1025,cs=1026,bo=1027,VE=1028,Qv=1029,WE=1030,Jv=1031,ex=1033,Jc=33776,ef=33777,tf=33778,nf=33779,Zm=35840,Qm=35841,Jm=35842,e_=35843,tx=36196,t_=37492,n_=37496,i_=37808,r_=37809,s_=37810,o_=37811,a_=37812,l_=37813,u_=37814,c_=37815,f_=37816,h_=37817,d_=37818,p_=37819,m_=37820,__=37821,rf=36492,g_=36494,v_=36495,XE=36283,x_=36284,y_=36285,S_=36286,nx=3e3,fs=3001,jE=3200,YE=3201,np=0,qE=1,qn="",Ht="srgb",Zi="srgb-linear",ip="display-p3",pc="display-p3-linear",zu="linear",ot="srgb",Bu="rec709",Gu="p3",Ps=7680,M_=519,$E=512,KE=513,ZE=514,ix=515,QE=516,JE=517,e1=518,t1=519,E_=35044,T_="300 es",zh=1035,Xi=2e3,Hu=2001;class Bo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=Math.PI/180,Bh=180/Math.PI;function il(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function _n(n,e,t){return Math.max(e,Math.min(t,n))}function n1(n,e){return(n%e+e)%e}function of(n,e,t){return(1-t)*n+t*e}function w_(n){return(n&n-1)===0&&n!==0}function Gh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,o,a,l,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],m=i[5],v=i[8],_=r[0],p=r[3],f=r[6],g=r[1],x=r[4],y=r[7],w=r[2],T=r[5],M=r[8];return s[0]=o*_+a*g+l*w,s[3]=o*p+a*x+l*T,s[6]=o*f+a*y+l*M,s[1]=u*_+c*g+h*w,s[4]=u*p+c*x+h*T,s[7]=u*f+c*y+h*M,s[2]=d*_+m*g+v*w,s[5]=d*p+m*x+v*T,s[8]=d*f+m*y+v*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,m=u*s-o*l,v=t*h+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=h*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(af.makeScale(e,t)),this}rotate(e){return this.premultiply(af.makeRotation(-e)),this}translate(e,t){return this.premultiply(af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const af=new ke;function rx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function i1(){const n=Wa("canvas");return n.style.display="block",n}const A_={};function _o(n){n in A_||(A_[n]=!0,console.warn(n))}const C_=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),R_=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rl={[Zi]:{transfer:zu,primaries:Bu,toReference:n=>n,fromReference:n=>n},[Ht]:{transfer:ot,primaries:Bu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[pc]:{transfer:zu,primaries:Gu,toReference:n=>n.applyMatrix3(R_),fromReference:n=>n.applyMatrix3(C_)},[ip]:{transfer:ot,primaries:Gu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(R_),fromReference:n=>n.applyMatrix3(C_).convertLinearToSRGB()}},r1=new Set([Zi,pc]),Ze={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!r1.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Rl[e].toReference,r=Rl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Rl[n].primaries},getTransfer:function(n){return n===qn?zu:Rl[n].transfer}};function go(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bs;class sx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=Wa("canvas")),bs.width=e.width,bs.height=e.height;const i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=go(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(go(t[i]/255)*255):t[i]=go(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s1=0;class ox{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=il(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(uf(r[o].image)):s.push(uf(r[o]))}else s=uf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function uf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let o1=0;class cn extends Bo{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=ci,r=ci,s=pn,o=ss,a=fi,l=Rr,u=cn.DEFAULT_ANISOTROPY,c=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=il(),this.name="",this.source=new ox(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===fs?Ht:qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fh:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fh:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ht?fs:nx}set encoding(e){_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fs?Ht:qn}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=qv;cn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],m=l[5],v=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+_)<.1&&Math.abs(v+p)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(m+1)/2,w=(f+1)/2,T=(c+d)/4,M=(h+_)/4,b=(v+p)/4;return x>y&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=M/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=b/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=M/s,r=b/s),this.set(i,r,s,t),this}let g=Math.sqrt((p-v)*(p-v)+(h-_)*(h-_)+(d-c)*(d-c));return Math.abs(g)<.001&&(g=1),this.x=(p-v)/g,this.y=(h-_)/g,this.z=(d-c)/g,this.w=Math.acos((u+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a1 extends Bo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(_o("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fs?Ht:qn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ox(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends a1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ax extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class l1 extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(h!==_||l!==d||u!==m||c!==v){let p=1-a;const f=l*d+u*m+c*v+h*_,g=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const w=Math.sqrt(x),T=Math.atan2(w,f*g);p=Math.sin(p*T)/w,a=Math.sin(a*T)/w}const y=a*g;if(l=l*p+d*y,u=u*p+m*y,c=c*p+v*y,h=h*p+_*y,p===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=w,u*=w,c*=w,h*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+c*h+l*m-u*d,e[t+1]=l*v+c*d+u*h-a*m,e[t+2]=u*v+c*m+a*d-l*h,e[t+3]=c*v-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*m*v,this._y=u*m*h-d*c*v,this._z=u*c*v+d*m*h,this._w=u*c*h-d*m*v;break;case"YXZ":this._x=d*c*h+u*m*v,this._y=u*m*h-d*c*v,this._z=u*c*v-d*m*h,this._w=u*c*h+d*m*v;break;case"ZXY":this._x=d*c*h-u*m*v,this._y=u*m*h+d*c*v,this._z=u*c*v+d*m*h,this._w=u*c*h-d*m*v;break;case"ZYX":this._x=d*c*h-u*m*v,this._y=u*m*h+d*c*v,this._z=u*c*v-d*m*h,this._w=u*c*h+d*m*v;break;case"YZX":this._x=d*c*h+u*m*v,this._y=u*m*h+d*c*v,this._z=u*c*v-d*m*h,this._w=u*c*h-d*m*v;break;case"XZY":this._x=d*c*h-u*m*v,this._y=u*m*h-d*c*v,this._z=u*c*v+d*m*h,this._w=u*c*h+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(P_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(P_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cf.copy(this).projectOnVector(e),this.sub(cf)}reflect(e){return this.sub(cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cf=new z,P_=new rl;class sl{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pl.copy(i.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),bl.subVectors(this.max,ea),Ls.subVectors(e.a,ea),Ds.subVectors(e.b,ea),Ns.subVectors(e.c,ea),nr.subVectors(Ds,Ls),ir.subVectors(Ns,Ds),Vr.subVectors(Ls,Ns);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Vr.z,Vr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Vr.z,0,-Vr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Vr.y,Vr.x,0];return!ff(t,Ls,Ds,Ns,bl)||(t=[1,0,0,0,1,0,0,0,1],!ff(t,Ls,Ds,Ns,bl))?!1:(Ll.crossVectors(nr,ir),t=[Ll.x,Ll.y,Ll.z],ff(t,Ls,Ds,Ns,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new z,new z,new z,new z,new z,new z,new z,new z],ri=new z,Pl=new sl,Ls=new z,Ds=new z,Ns=new z,nr=new z,ir=new z,Vr=new z,ea=new z,bl=new z,Ll=new z,Wr=new z;function ff(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Wr.fromArray(n,s);const a=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),l=e.dot(Wr),u=t.dot(Wr),c=i.dot(Wr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const u1=new sl,ta=new z,hf=new z;class mc{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):u1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const t=ta.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(hf)),this.expandByPoint(ta.copy(e.center).sub(hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new z,df=new z,Dl=new z,rr=new z,pf=new z,Nl=new z,mf=new z;class lx{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){df.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(df);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Dl),a=rr.dot(this.direction),l=-rr.dot(Dl),u=rr.lengthSq(),c=Math.abs(1-o*o);let h,d,m,v;if(c>0)if(h=o*l-a,d=o*a-l,v=s*c,h>=0)if(d>=-v)if(d<=v){const _=1/c;h*=_,d*=_,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(df).addScaledVector(Dl,d),m}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),r=Di.dot(Di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,r,s){pf.subVectors(t,e),Nl.subVectors(i,e),mf.crossVectors(pf,Nl);let o=this.direction.dot(mf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rr.subVectors(this.origin,e);const l=a*this.direction.dot(Nl.crossVectors(rr,Nl));if(l<0)return null;const u=a*this.direction.dot(pf.cross(rr));if(u<0||l+u>o)return null;const c=-a*rr.dot(mf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,i,r,s,o,a,l,u,c,h,d,m,v,_,p){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,d,m,v,_,p)}set(e,t,i,r,s,o,a,l,u,c,h,d,m,v,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=m,f[7]=v,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,m=o*h,v=a*c,_=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=m+v*u,t[5]=d-_*u,t[9]=-a*l,t[2]=_-d*u,t[6]=v+m*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,m=l*h,v=u*c,_=u*h;t[0]=d+_*a,t[4]=v*a-m,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=m*a-v,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,m=l*h,v=u*c,_=u*h;t[0]=d-_*a,t[4]=-o*h,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*c,t[9]=_-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,m=o*h,v=a*c,_=a*h;t[0]=l*c,t[4]=v*u-m,t[8]=d*u+_,t[1]=l*h,t[5]=_*u+d,t[9]=m*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,v=a*l,_=a*u;t[0]=l*c,t[4]=_-d*h,t[8]=v*h+m,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*h+v,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,m=o*u,v=a*l,_=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=d*h+_,t[5]=o*c,t[9]=m*h-v,t[2]=v*h-m,t[6]=a*c,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c1,e,f1)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),sr.crossVectors(i,Rn),sr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),sr.crossVectors(i,Rn)),sr.normalize(),Ul.crossVectors(Rn,sr),r[0]=sr.x,r[4]=Ul.x,r[8]=Rn.x,r[1]=sr.y,r[5]=Ul.y,r[9]=Rn.y,r[2]=sr.z,r[6]=Ul.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],m=i[13],v=i[2],_=i[6],p=i[10],f=i[14],g=i[3],x=i[7],y=i[11],w=i[15],T=r[0],M=r[4],b=r[8],D=r[12],S=r[1],R=r[5],F=r[9],Y=r[13],L=r[2],k=r[6],I=r[10],q=r[14],N=r[3],B=r[7],H=r[11],$=r[15];return s[0]=o*T+a*S+l*L+u*N,s[4]=o*M+a*R+l*k+u*B,s[8]=o*b+a*F+l*I+u*H,s[12]=o*D+a*Y+l*q+u*$,s[1]=c*T+h*S+d*L+m*N,s[5]=c*M+h*R+d*k+m*B,s[9]=c*b+h*F+d*I+m*H,s[13]=c*D+h*Y+d*q+m*$,s[2]=v*T+_*S+p*L+f*N,s[6]=v*M+_*R+p*k+f*B,s[10]=v*b+_*F+p*I+f*H,s[14]=v*D+_*Y+p*q+f*$,s[3]=g*T+x*S+y*L+w*N,s[7]=g*M+x*R+y*k+w*B,s[11]=g*b+x*F+y*I+w*H,s[15]=g*D+x*Y+y*q+w*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],m=e[14],v=e[3],_=e[7],p=e[11],f=e[15];return v*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*m-i*l*m)+_*(+t*l*m-t*u*d+s*o*d-r*o*m+r*u*c-s*l*c)+p*(+t*u*h-t*a*m-s*o*h+i*o*m+s*a*c-i*u*c)+f*(-r*a*c-t*l*h+t*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],m=e[11],v=e[12],_=e[13],p=e[14],f=e[15],g=h*p*u-_*d*u+_*l*m-a*p*m-h*l*f+a*d*f,x=v*d*u-c*p*u-v*l*m+o*p*m+c*l*f-o*d*f,y=c*_*u-v*h*u+v*a*m-o*_*m-c*a*f+o*h*f,w=v*h*l-c*_*l-v*a*d+o*_*d+c*a*p-o*h*p,T=t*g+i*x+r*y+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=g*M,e[1]=(_*d*s-h*p*s-_*r*m+i*p*m+h*r*f-i*d*f)*M,e[2]=(a*p*s-_*l*s+_*r*u-i*p*u-a*r*f+i*l*f)*M,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*m-i*l*m)*M,e[4]=x*M,e[5]=(c*p*s-v*d*s+v*r*m-t*p*m-c*r*f+t*d*f)*M,e[6]=(v*l*s-o*p*s-v*r*u+t*p*u+o*r*f-t*l*f)*M,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*m+t*l*m)*M,e[8]=y*M,e[9]=(v*h*s-c*_*s-v*i*m+t*_*m+c*i*f-t*h*f)*M,e[10]=(o*_*s-v*a*s+v*i*u-t*_*u-o*i*f+t*a*f)*M,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*m-t*a*m)*M,e[12]=w*M,e[13]=(c*_*r-v*h*r+v*i*d-t*_*d-c*i*p+t*h*p)*M,e[14]=(v*a*r-o*_*r-v*i*l+t*_*l+o*i*p-t*a*p)*M,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*d+t*a*d)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,d=s*u,m=s*c,v=s*h,_=o*c,p=o*h,f=a*h,g=l*u,x=l*c,y=l*h,w=i.x,T=i.y,M=i.z;return r[0]=(1-(_+f))*w,r[1]=(m+y)*w,r[2]=(v-x)*w,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(d+f))*T,r[6]=(p+g)*T,r[7]=0,r[8]=(v+x)*M,r[9]=(p-g)*M,r[10]=(1-(d+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Us.set(r[0],r[1],r[2]).length();const o=Us.set(r[4],r[5],r[6]).length(),a=Us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const u=1/s,c=1/o,h=1/a;return si.elements[0]*=u,si.elements[1]*=u,si.elements[2]*=u,si.elements[4]*=c,si.elements[5]*=c,si.elements[6]*=c,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,t.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Xi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let m,v;if(a===Xi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Hu)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Xi){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),d=(t+e)*u,m=(i+r)*c;let v,_;if(a===Xi)v=(o+s)*h,_=-2*h;else if(a===Hu)v=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Us=new z,si=new At,c1=new z(0,0,0),f1=new z(1,1,1),sr=new z,Ul=new z,Rn=new z,b_=new At,L_=new rl;class _c{constructor(e=0,t=0,i=0,r=_c.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_n(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_n(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return b_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(b_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return L_.setFromEuler(this),this.setFromQuaternion(L_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_c.DEFAULT_ORDER="XYZ";class ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h1=0;const D_=new z,Is=new rl,Ni=new At,Il=new z,na=new z,d1=new z,p1=new rl,N_=new z(1,0,0),U_=new z(0,1,0),I_=new z(0,0,1),m1={type:"added"},_1={type:"removed"};class Ft extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new z,t=new _c,i=new rl,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new ke}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(N_,e)}rotateY(e){return this.rotateOnAxis(U_,e)}rotateZ(e){return this.rotateOnAxis(I_,e)}translateOnAxis(e,t){return D_.copy(e).applyQuaternion(this.quaternion),this.position.add(D_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(N_,e)}translateY(e){return this.translateOnAxis(U_,e)}translateZ(e){return this.translateOnAxis(I_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Il.copy(e):Il.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(na,Il,this.up):Ni.lookAt(Il,na,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),Is.setFromRotationMatrix(Ni),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(m1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,d1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,p1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new z(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new z,Ui=new z,_f=new z,Ii=new z,Os=new z,Fs=new z,O_=new z,gf=new z,vf=new z,xf=new z;class Mi{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),oi.subVectors(e,t),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){oi.subVectors(r,t),Ui.subVectors(i,t),_f.subVectors(e,t);const o=oi.dot(oi),a=oi.dot(Ui),l=oi.dot(_f),u=Ui.dot(Ui),c=Ui.dot(_f),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(u*l-a*c)*d,v=(o*c-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static isFrontFacing(e,t,i,r){return oi.subVectors(i,t),Ui.subVectors(e,t),oi.cross(Ui).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),oi.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Mi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Os.subVectors(r,i),Fs.subVectors(s,i),gf.subVectors(e,i);const l=Os.dot(gf),u=Fs.dot(gf);if(l<=0&&u<=0)return t.copy(i);vf.subVectors(e,r);const c=Os.dot(vf),h=Fs.dot(vf);if(c>=0&&h<=c)return t.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Os,o);xf.subVectors(e,s);const m=Os.dot(xf),v=Fs.dot(xf);if(v>=0&&m<=v)return t.copy(s);const _=m*u-l*v;if(_<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(i).addScaledVector(Fs,a);const p=c*v-m*h;if(p<=0&&h-c>=0&&m-v>=0)return O_.subVectors(s,r),a=(h-c)/(h-c+(m-v)),t.copy(r).addScaledVector(O_,a);const f=1/(p+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(Os,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function yf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=n1(e,1),t=_n(t,0,1),i=_n(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=yf(o,s,e+1/3),this.g=yf(o,s,e),this.b=yf(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Ht){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const i=cx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}copyLinearToSRGB(e){return this.r=lf(e.r),this.g=lf(e.g),this.b=lf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return Ze.fromWorkingColorSpace($t.copy(this),e),Math.round(_n($t.r*255,0,255))*65536+Math.round(_n($t.g*255,0,255))*256+Math.round(_n($t.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace($t.copy(this),t);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Ht){Ze.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,r=$t.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(Ol);const i=of(or.h,Ol.h,t),r=of(or.s,Ol.s,t),s=of(or.l,Ol.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new ze;ze.NAMES=cx;let g1=0;class As extends Bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=il(),this.name="",this.type="Material",this.blending=mo,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Uh,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ku,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nh&&(i.blendSrc=this.blendSrc),this.blendDst!==Uh&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ku&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fx extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new z,Fl=new Be;class Ci{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=E_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _o("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Jo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jo(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jo(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jo(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==E_&&(e.usage=this.usage),e}}class hx extends Ci{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dx extends Ci{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Sn extends Ci{constructor(e,t,i){super(new Float32Array(e),t,i)}}let v1=0;const Wn=new At,Sf=new Ft,ks=new z,Pn=new sl,ia=new sl,Dt=new z;class mi extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rx(e)?dx:hx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return Sf.lookAt(e),Sf.updateMatrix(),this.applyMatrix4(Sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ia.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(Pn.min,ia.min),Pn.expandByPoint(Dt),Dt.addVectors(Pn.max,ia.max),Pn.expandByPoint(Dt)):(Pn.expandByPoint(ia.min),Pn.expandByPoint(ia.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Dt.fromBufferAttribute(a,u),l&&(ks.fromBufferAttribute(e,u),Dt.add(ks)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let S=0;S<a;S++)u[S]=new z,c[S]=new z;const h=new z,d=new z,m=new z,v=new Be,_=new Be,p=new Be,f=new z,g=new z;function x(S,R,F){h.fromArray(r,S*3),d.fromArray(r,R*3),m.fromArray(r,F*3),v.fromArray(o,S*2),_.fromArray(o,R*2),p.fromArray(o,F*2),d.sub(h),m.sub(h),_.sub(v),p.sub(v);const Y=1/(_.x*p.y-p.x*_.y);isFinite(Y)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Y),g.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(Y),u[S].add(f),u[R].add(f),u[F].add(f),c[S].add(g),c[R].add(g),c[F].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let S=0,R=y.length;S<R;++S){const F=y[S],Y=F.start,L=F.count;for(let k=Y,I=Y+L;k<I;k+=3)x(i[k+0],i[k+1],i[k+2])}const w=new z,T=new z,M=new z,b=new z;function D(S){M.fromArray(s,S*3),b.copy(M);const R=u[S];w.copy(R),w.sub(M.multiplyScalar(M.dot(R))).normalize(),T.crossVectors(b,R);const Y=T.dot(c[S])<0?-1:1;l[S*4]=w.x,l[S*4+1]=w.y,l[S*4+2]=w.z,l[S*4+3]=Y}for(let S=0,R=y.length;S<R;++S){const F=y[S],Y=F.start,L=F.count;for(let k=Y,I=Y+L;k<I;k+=3)D(i[k+0]),D(i[k+1]),D(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ci(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,c=new z,h=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*c;for(let f=0;f<c;f++)d[v++]=u[m++]}return new Ci(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,m=h.length;d<m;d++)c.push(h[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const F_=new At,Xr=new lx,kl=new mc,k_=new z,zs=new z,Bs=new z,Gs=new z,Mf=new z,zl=new z,Bl=new Be,Gl=new Be,Hl=new Be,z_=new z,B_=new z,G_=new z,Vl=new z,Wl=new z;class an extends Ft{constructor(e=new mi,t=new fx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){zl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Mf.fromBufferAttribute(h,e),o?zl.addScaledVector(Mf,c):zl.addScaledVector(Mf.sub(t),c))}t.add(zl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(s),Xr.copy(e.ray).recast(e.near),!(kl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(kl,k_)===null||Xr.origin.distanceToSquared(k_)>(e.far-e.near)**2))&&(F_.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(F_),!(i.boundingBox!==null&&Xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const p=d[v],f=o[p.materialIndex],g=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=g,w=x;y<w;y+=3){const T=a.getX(y),M=a.getX(y+1),b=a.getX(y+2);r=Xl(this,f,e,i,u,c,h,T,M,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=v,f=_;p<f;p+=3){const g=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);r=Xl(this,o,e,i,u,c,h,g,x,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const p=d[v],f=o[p.materialIndex],g=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=g,w=x;y<w;y+=3){const T=y,M=y+1,b=y+2;r=Xl(this,f,e,i,u,c,h,T,M,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,f=_;p<f;p+=3){const g=p,x=p+1,y=p+2;r=Xl(this,o,e,i,u,c,h,g,x,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function x1(n,e,t,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Nr,a),l===null)return null;Wl.copy(a),Wl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Wl);return u<t.near||u>t.far?null:{distance:u,point:Wl.clone(),object:n}}function Xl(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,zs),n.getVertexPosition(l,Bs),n.getVertexPosition(u,Gs);const c=x1(n,e,t,i,zs,Bs,Gs,Vl);if(c){r&&(Bl.fromBufferAttribute(r,a),Gl.fromBufferAttribute(r,l),Hl.fromBufferAttribute(r,u),c.uv=Mi.getInterpolation(Vl,zs,Bs,Gs,Bl,Gl,Hl,new Be)),s&&(Bl.fromBufferAttribute(s,a),Gl.fromBufferAttribute(s,l),Hl.fromBufferAttribute(s,u),c.uv1=Mi.getInterpolation(Vl,zs,Bs,Gs,Bl,Gl,Hl,new Be),c.uv2=c.uv1),o&&(z_.fromBufferAttribute(o,a),B_.fromBufferAttribute(o,l),G_.fromBufferAttribute(o,u),c.normal=Mi.getInterpolation(Vl,zs,Bs,Gs,z_,B_,G_,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new z,materialIndex:0};Mi.getNormal(zs,Bs,Gs,h.normal),c.face=h}return c}class ol extends mi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(u,3)),this.setAttribute("normal",new Sn(c,3)),this.setAttribute("uv",new Sn(h,2));function v(_,p,f,g,x,y,w,T,M,b,D){const S=y/M,R=w/b,F=y/2,Y=w/2,L=T/2,k=M+1,I=b+1;let q=0,N=0;const B=new z;for(let H=0;H<I;H++){const $=H*R-Y;for(let Z=0;Z<k;Z++){const xe=Z*S-F;B[_]=xe*g,B[p]=$*x,B[f]=L,u.push(B.x,B.y,B.z),B[_]=0,B[p]=0,B[f]=T>0?1:-1,c.push(B.x,B.y,B.z),h.push(Z/M),h.push(1-H/b),q+=1}}for(let H=0;H<b;H++)for(let $=0;$<M;$++){const Z=d+$+k*H,xe=d+$+k*(H+1),G=d+($+1)+k*(H+1),K=d+($+1)+k*H;l.push(Z,xe,K),l.push(xe,G,K),N+=6}a.addGroup(m,N,D),m+=N,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=Lo(n[t]);for(const r in i)e[r]=i[r]}return e}function y1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function px(n){return n.getRenderTarget()===null?n.outputColorSpace:Ze.workingColorSpace}const S1={clone:Lo,merge:nn};var M1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M1,this.fragmentShader=E1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=y1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mx extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new z,H_=new Be,V_=new Be;class Dn extends mx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bh*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,H_,V_),t.subVectors(V_,H_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Vs=1;class T1 extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(Hs,Vs,e,t);r.layers=this.layers,this.add(r);const s=new Dn(Hs,Vs,e,t);s.layers=this.layers,this.add(s);const o=new Dn(Hs,Vs,e,t);o.layers=this.layers,this.add(o);const a=new Dn(Hs,Vs,e,t);a.layers=this.layers,this.add(a);const l=new Dn(Hs,Vs,e,t);l.layers=this.layers,this.add(l);const u=new Dn(Hs,Vs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class _x extends cn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Ro,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class w1 extends Ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(_o("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fs?Ht:qn),this.texture=new _x(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ol(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:Lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ar});s.uniforms.tEquirect.value=t;const o=new an(r,s),a=t.minFilter;return t.minFilter===ss&&(t.minFilter=pn),new T1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ef=new z,A1=new z,C1=new ke;class Zr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ef.subVectors(i,t).cross(A1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ef),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||C1.getNormalMatrix(e),r=this.coplanarPoint(Ef).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new mc,jl=new z;class rp{constructor(e=new Zr,t=new Zr,i=new Zr,r=new Zr,s=new Zr,o=new Zr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],m=r[8],v=r[9],_=r[10],p=r[11],f=r[12],g=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,p-m,y-f).normalize(),i[1].setComponents(l+s,d+u,p+m,y+f).normalize(),i[2].setComponents(l+o,d+c,p+v,y+g).normalize(),i[3].setComponents(l-o,d-c,p-v,y-g).normalize(),i[4].setComponents(l-a,d-h,p-_,y-x).normalize(),t===Xi)i[5].setComponents(l+a,d+h,p+_,y+x).normalize();else if(t===Hu)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(jl.x=r.normal.x>0?e.max.x:e.min.x,jl.y=r.normal.y>0?e.max.y:e.min.y,jl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function R1(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,d=u.usage,m=h.byteLength,v=n.createBuffer();n.bindBuffer(c,v),n.bufferData(c,h,d),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,c,h){const d=c.array,m=c._updateRange,v=c.updateRanges;if(n.bindBuffer(h,u),m.count===-1&&v.length===0&&n.bufferSubData(h,0,d),v.length!==0){for(let _=0,p=v.length;_<p;_++){const f=v[_];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,c));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,c),h.version=u.version}}return{get:o,remove:a,update:l}}class al extends mi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=t/l,m=[],v=[],_=[],p=[];for(let f=0;f<c;f++){const g=f*d-o;for(let x=0;x<u;x++){const y=x*h-s;v.push(y,-g,0),_.push(0,0,1),p.push(x/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const x=g+u*f,y=g+u*(f+1),w=g+1+u*(f+1),T=g+1+u*f;m.push(x,y,T),m.push(y,w,T)}this.setIndex(m),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.widthSegments,e.heightSegments)}}var P1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,L1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,k1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,z1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Q1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,J1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sT="gl_FragColor = linearToOutputTexel( gl_FragColor );",oT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,aT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_T=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ST=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ET=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,PT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,IT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,OT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,WT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,XT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ew=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ow=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_w=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ew=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Iw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ow=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$w=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:P1,alphahash_pars_fragment:b1,alphamap_fragment:L1,alphamap_pars_fragment:D1,alphatest_fragment:N1,alphatest_pars_fragment:U1,aomap_fragment:I1,aomap_pars_fragment:O1,batching_pars_vertex:F1,batching_vertex:k1,begin_vertex:z1,beginnormal_vertex:B1,bsdfs:G1,iridescence_fragment:H1,bumpmap_pars_fragment:V1,clipping_planes_fragment:W1,clipping_planes_pars_fragment:X1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:Y1,color_fragment:q1,color_pars_fragment:$1,color_pars_vertex:K1,color_vertex:Z1,common:Q1,cube_uv_reflection_fragment:J1,defaultnormal_vertex:eT,displacementmap_pars_vertex:tT,displacementmap_vertex:nT,emissivemap_fragment:iT,emissivemap_pars_fragment:rT,colorspace_fragment:sT,colorspace_pars_fragment:oT,envmap_fragment:aT,envmap_common_pars_fragment:lT,envmap_pars_fragment:uT,envmap_pars_vertex:cT,envmap_physical_pars_fragment:MT,envmap_vertex:fT,fog_vertex:hT,fog_pars_vertex:dT,fog_fragment:pT,fog_pars_fragment:mT,gradientmap_pars_fragment:_T,lightmap_fragment:gT,lightmap_pars_fragment:vT,lights_lambert_fragment:xT,lights_lambert_pars_fragment:yT,lights_pars_begin:ST,lights_toon_fragment:ET,lights_toon_pars_fragment:TT,lights_phong_fragment:wT,lights_phong_pars_fragment:AT,lights_physical_fragment:CT,lights_physical_pars_fragment:RT,lights_fragment_begin:PT,lights_fragment_maps:bT,lights_fragment_end:LT,logdepthbuf_fragment:DT,logdepthbuf_pars_fragment:NT,logdepthbuf_pars_vertex:UT,logdepthbuf_vertex:IT,map_fragment:OT,map_pars_fragment:FT,map_particle_fragment:kT,map_particle_pars_fragment:zT,metalnessmap_fragment:BT,metalnessmap_pars_fragment:GT,morphcolor_vertex:HT,morphnormal_vertex:VT,morphtarget_pars_vertex:WT,morphtarget_vertex:XT,normal_fragment_begin:jT,normal_fragment_maps:YT,normal_pars_fragment:qT,normal_pars_vertex:$T,normal_vertex:KT,normalmap_pars_fragment:ZT,clearcoat_normal_fragment_begin:QT,clearcoat_normal_fragment_maps:JT,clearcoat_pars_fragment:ew,iridescence_pars_fragment:tw,opaque_fragment:nw,packing:iw,premultiplied_alpha_fragment:rw,project_vertex:sw,dithering_fragment:ow,dithering_pars_fragment:aw,roughnessmap_fragment:lw,roughnessmap_pars_fragment:uw,shadowmap_pars_fragment:cw,shadowmap_pars_vertex:fw,shadowmap_vertex:hw,shadowmask_pars_fragment:dw,skinbase_vertex:pw,skinning_pars_vertex:mw,skinning_vertex:_w,skinnormal_vertex:gw,specularmap_fragment:vw,specularmap_pars_fragment:xw,tonemapping_fragment:yw,tonemapping_pars_fragment:Sw,transmission_fragment:Mw,transmission_pars_fragment:Ew,uv_pars_fragment:Tw,uv_pars_vertex:ww,uv_vertex:Aw,worldpos_vertex:Cw,background_vert:Rw,background_frag:Pw,backgroundCube_vert:bw,backgroundCube_frag:Lw,cube_vert:Dw,cube_frag:Nw,depth_vert:Uw,depth_frag:Iw,distanceRGBA_vert:Ow,distanceRGBA_frag:Fw,equirect_vert:kw,equirect_frag:zw,linedashed_vert:Bw,linedashed_frag:Gw,meshbasic_vert:Hw,meshbasic_frag:Vw,meshlambert_vert:Ww,meshlambert_frag:Xw,meshmatcap_vert:jw,meshmatcap_frag:Yw,meshnormal_vert:qw,meshnormal_frag:$w,meshphong_vert:Kw,meshphong_frag:Zw,meshphysical_vert:Qw,meshphysical_frag:Jw,meshtoon_vert:eA,meshtoon_frag:tA,points_vert:nA,points_frag:iA,shadow_vert:rA,shadow_frag:sA,sprite_vert:oA,sprite_frag:aA},oe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},yi={basic:{uniforms:nn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:nn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:nn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:nn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:nn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:nn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:nn([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:nn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:nn([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:nn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:nn([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:nn([oe.common,oe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:nn([oe.lights,oe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};yi.physical={uniforms:nn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Yl={r:0,b:0,g:0};function lA(n,e,t,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,u,c,h=null,d=0,m=null;function v(p,f){let g=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),g=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===dc)?(c===void 0&&(c=new an(new ol(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:Lo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(x.colorSpace)!==ot,(h!==x||d!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new an(new al(2,2),new Ur({name:"BackgroundMaterial",uniforms:Lo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function _(p,f){p.getRGB(Yl,px(n)),i.buffers.color.setClear(Yl.r,Yl.g,Yl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:v}}function uA(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function h(L,k,I,q,N){let B=!1;if(o){const H=_(q,I,k);u!==H&&(u=H,m(u.object)),B=f(L,q,I,N),B&&g(L,q,I,N)}else{const H=k.wireframe===!0;(u.geometry!==q.id||u.program!==I.id||u.wireframe!==H)&&(u.geometry=q.id,u.program=I.id,u.wireframe=H,B=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,b(L,k,I,q),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,k,I){const q=I.wireframe===!0;let N=a[L.id];N===void 0&&(N={},a[L.id]=N);let B=N[k.id];B===void 0&&(B={},N[k.id]=B);let H=B[q];return H===void 0&&(H=p(d()),B[q]=H),H}function p(L){const k=[],I=[],q=[];for(let N=0;N<r;N++)k[N]=0,I[N]=0,q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:I,attributeDivisors:q,object:L,attributes:{},index:null}}function f(L,k,I,q){const N=u.attributes,B=k.attributes;let H=0;const $=I.getAttributes();for(const Z in $)if($[Z].location>=0){const G=N[Z];let K=B[Z];if(K===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),G===void 0||G.attribute!==K||K&&G.data!==K.data)return!0;H++}return u.attributesNum!==H||u.index!==q}function g(L,k,I,q){const N={},B=k.attributes;let H=0;const $=I.getAttributes();for(const Z in $)if($[Z].location>=0){let G=B[Z];G===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(G=L.instanceColor));const K={};K.attribute=G,G&&G.data&&(K.data=G.data),N[Z]=K,H++}u.attributes=N,u.attributesNum=H,u.index=q}function x(){const L=u.newAttributes;for(let k=0,I=L.length;k<I;k++)L[k]=0}function y(L){w(L,0)}function w(L,k){const I=u.newAttributes,q=u.enabledAttributes,N=u.attributeDivisors;I[L]=1,q[L]===0&&(n.enableVertexAttribArray(L),q[L]=1),N[L]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),N[L]=k)}function T(){const L=u.newAttributes,k=u.enabledAttributes;for(let I=0,q=k.length;I<q;I++)k[I]!==L[I]&&(n.disableVertexAttribArray(I),k[I]=0)}function M(L,k,I,q,N,B,H){H===!0?n.vertexAttribIPointer(L,k,I,N,B):n.vertexAttribPointer(L,k,I,q,N,B)}function b(L,k,I,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const N=q.attributes,B=I.getAttributes(),H=k.defaultAttributeValues;for(const $ in B){const Z=B[$];if(Z.location>=0){let xe=N[$];if(xe===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor)),xe!==void 0){const G=xe.normalized,K=xe.itemSize,le=t.get(xe);if(le===void 0)continue;const ge=le.buffer,Ee=le.type,pe=le.bytesPerElement,je=i.isWebGL2===!0&&(Ee===n.INT||Ee===n.UNSIGNED_INT||xe.gpuType===$v);if(xe.isInterleavedBufferAttribute){const be=xe.data,O=be.stride,zt=xe.offset;if(be.isInstancedInterleavedBuffer){for(let Se=0;Se<Z.locationSize;Se++)w(Z.location+Se,be.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Se=0;Se<Z.locationSize;Se++)y(Z.location+Se);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Se=0;Se<Z.locationSize;Se++)M(Z.location+Se,K/Z.locationSize,Ee,G,O*pe,(zt+K/Z.locationSize*Se)*pe,je)}else{if(xe.isInstancedBufferAttribute){for(let be=0;be<Z.locationSize;be++)w(Z.location+be,xe.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let be=0;be<Z.locationSize;be++)y(Z.location+be);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let be=0;be<Z.locationSize;be++)M(Z.location+be,K/Z.locationSize,Ee,G,K*pe,K/Z.locationSize*be*pe,je)}}else if(H!==void 0){const G=H[$];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(Z.location,G);break;case 3:n.vertexAttrib3fv(Z.location,G);break;case 4:n.vertexAttrib4fv(Z.location,G);break;default:n.vertexAttrib1fv(Z.location,G)}}}}T()}function D(){F();for(const L in a){const k=a[L];for(const I in k){const q=k[I];for(const N in q)v(q[N].object),delete q[N];delete k[I]}delete a[L]}}function S(L){if(a[L.id]===void 0)return;const k=a[L.id];for(const I in k){const q=k[I];for(const N in q)v(q[N].object),delete q[N];delete k[I]}delete a[L.id]}function R(L){for(const k in a){const I=a[k];if(I[L.id]===void 0)continue;const q=I[L.id];for(const N in q)v(q[N].object),delete q[N];delete I[L.id]}}function F(){Y(),c=!0,u!==l&&(u=l,m(u.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:F,resetDefaultState:Y,dispose:D,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:y,disableUnusedAttributes:T}}function cA(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,h){n.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let m,v;if(r)m=n,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,c,h,d),t.update(h,s,d)}function u(c,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<d;v++)this.render(c[v],h[v]);else{m.multiDrawArraysWEBGL(s,c,0,h,0,d);let v=0;for(let _=0;_<d;_++)v+=h[_];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function fA(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=o||e.has("OES_texture_float"),w=x&&y,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:T}}function hA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Zr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!r||v===null||v.length===0||s&&!p)s?c(null):u();else{const g=s?0:i,x=g*4;let y=f.clippingState||null;l.value=y,y=c(v,d,x,m);for(let w=0;w!==x;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,m,v){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const f=m+_*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,y=m;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(g,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function dA(n){let e=new WeakMap;function t(o,a){return a===Ih?o.mapping=Ro:a===Oh&&(o.mapping=Po),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ih||a===Oh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new w1(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class vx extends mx{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ro=4,W_=[.125,.215,.35,.446,.526,.582],ts=20,Tf=new vx,X_=new ze;let wf=null,Af=0,Cf=0;const Qr=(1+Math.sqrt(5))/2,Ws=1/Qr,j_=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Qr,Ws),new z(0,Qr,-Ws),new z(Ws,0,Qr),new z(-Ws,0,Qr),new z(Qr,Ws,0),new z(-Qr,Ws,0)];class Y_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){wf=this._renderer.getRenderTarget(),Af=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wf,Af,Cf),e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ro||e.mapping===Po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wf=this._renderer.getRenderTarget(),Af=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Va,format:fi,colorSpace:Zi,depthBuffer:!1},r=q_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pA(s)),this._blurMaterial=mA(s,e,t)}return r}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,Tf)}_sceneToCubeUV(e,t,i,r){const a=new Dn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(X_),c.toneMapping=Cr,c.autoClear=!1;const m=new fx({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new an(new ol,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(X_),_=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;ql(r,g*x,f>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ro||e.mapping===Po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=K_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new an(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ql(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Tf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=j_[(r-1)%j_.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new an(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ts-1),_=s/v,p=isFinite(s)?1+Math.floor(c*_):ts;p>ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ts}`);const f=[];let g=0;for(let M=0;M<ts;++M){const b=M/_,D=Math.exp(-b*b/2);f.push(D),M===0?g+=D:M<p&&(g+=2*D)}for(let M=0;M<f.length;M++)f[M]=f[M]/g;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-i;const y=this._sizeLods[r],w=3*y*(r>x-ro?r-x+ro:0),T=4*(this._cubeSize-y);ql(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(h,Tf)}}function pA(n){const e=[],t=[],i=[];let r=n;const s=n-ro+1+W_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ro?l=W_[o-n+ro-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,v=6,_=3,p=2,f=1,g=new Float32Array(_*v*m),x=new Float32Array(p*v*m),y=new Float32Array(f*v*m);for(let T=0;T<m;T++){const M=T%3*2/3-1,b=T>2?0:-1,D=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];g.set(D,_*v*T),x.set(d,p*v*T);const S=[T,T,T,T,T,T];y.set(S,f*v*T)}const w=new mi;w.setAttribute("position",new Ci(g,_)),w.setAttribute("uv",new Ci(x,p)),w.setAttribute("faceIndex",new Ci(y,f)),e.push(w),r>ro&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function q_(n,e,t){const i=new Ss(n,e,t);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ql(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mA(n,e,t){const i=new Float32Array(ts),r=new z(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function $_(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function K_(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function sp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _A(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ih||l===Oh,c=l===Ro||l===Po;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Y_(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){t===null&&(t=new Y_(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vA(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const _=m[v];for(let p=0,f=_.length;p<f;p++)e.update(_[p],n.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,v=h.attributes.position;let _=0;if(m!==null){const g=m.array;_=m.version;for(let x=0,y=g.length;x<y;x+=3){const w=g[x+0],T=g[x+1],M=g[x+2];d.push(w,T,T,M,M,w)}}else if(v!==void 0){const g=v.array;_=v.version;for(let x=0,y=g.length/3-1;x<y;x+=3){const w=x+0,T=x+1,M=x+2;d.push(w,T,T,M,M,w)}}else return;const p=new(rx(d)?dx:hx)(d,1);p.version=_;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function c(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function xA(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function u(m){a=m.type,l=m.bytesPerElement}function c(m,v){n.drawElements(s,v,a,m*l),t.update(v,s,1)}function h(m,v,_){if(_===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,v,a,m*l,_),t.update(v,s,_)}function d(m,v,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/l,v[f]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,_);let f=0;for(let g=0;g<_;g++)f+=v[g];t.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function yA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function SA(n,e){return n[0]-e[0]}function MA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function EA(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=v!==void 0?v.length:0;let p=s.get(c);if(p===void 0||p.count!==_){let k=function(){Y.dispose(),s.delete(c),c.removeEventListener("dispose",k)};var m=k;p!==void 0&&p.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let D=0;x===!0&&(D=1),y===!0&&(D=2),w===!0&&(D=3);let S=c.attributes.position.count*D,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const F=new Float32Array(S*R*4*_),Y=new ax(F,S,R,_);Y.type=Hi,Y.needsUpdate=!0;const L=D*4;for(let I=0;I<_;I++){const q=T[I],N=M[I],B=b[I],H=S*R*4*I;for(let $=0;$<q.count;$++){const Z=$*L;x===!0&&(o.fromBufferAttribute(q,$),F[H+Z+0]=o.x,F[H+Z+1]=o.y,F[H+Z+2]=o.z,F[H+Z+3]=0),y===!0&&(o.fromBufferAttribute(N,$),F[H+Z+4]=o.x,F[H+Z+5]=o.y,F[H+Z+6]=o.z,F[H+Z+7]=0),w===!0&&(o.fromBufferAttribute(B,$),F[H+Z+8]=o.x,F[H+Z+9]=o.y,F[H+Z+10]=o.z,F[H+Z+11]=B.itemSize===4?o.w:1)}}p={count:_,texture:Y,size:new Be(S,R)},s.set(c,p),c.addEventListener("dispose",k)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const g=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",g),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let _=i[c.id];if(_===void 0||_.length!==v){_=[];for(let y=0;y<v;y++)_[y]=[y,0];i[c.id]=_}for(let y=0;y<v;y++){const w=_[y];w[0]=y,w[1]=d[y]}_.sort(MA);for(let y=0;y<8;y++)y<v&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(SA);const p=c.morphAttributes.position,f=c.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const w=a[y],T=w[0],M=w[1];T!==Number.MAX_SAFE_INTEGER&&M?(p&&c.getAttribute("morphTarget"+y)!==p[T]&&c.setAttribute("morphTarget"+y,p[T]),f&&c.getAttribute("morphNormal"+y)!==f[T]&&c.setAttribute("morphNormal"+y,f[T]),r[y]=M,g+=M):(p&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function TA(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class xx extends cn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:cs,c!==cs&&c!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===cs&&(i=pr),i===void 0&&c===bo&&(i=us),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yx=new cn,Sx=new xx(1,1);Sx.compareFunction=ix;const Mx=new ax,Ex=new l1,Tx=new _x,Z_=[],Q_=[],J_=new Float32Array(16),eg=new Float32Array(9),tg=new Float32Array(4);function Go(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Z_[r];if(s===void 0&&(s=new Float32Array(r),Z_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gc(n,e){let t=Q_[e];t===void 0&&(t=new Int32Array(e),Q_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function AA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function CA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function RA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function PA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Pt(t,i))return;tg.set(i),n.uniformMatrix2fv(this.addr,!1,tg),bt(t,i)}}function bA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Pt(t,i))return;eg.set(i),n.uniformMatrix3fv(this.addr,!1,eg),bt(t,i)}}function LA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Pt(t,i))return;J_.set(i),n.uniformMatrix4fv(this.addr,!1,J_),bt(t,i)}}function DA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function UA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function IA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function OA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function FA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function kA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function zA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function BA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Sx:yx;t.setTexture2D(e||s,r)}function GA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ex,r)}function HA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Tx,r)}function VA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mx,r)}function WA(n){switch(n){case 5126:return wA;case 35664:return AA;case 35665:return CA;case 35666:return RA;case 35674:return PA;case 35675:return bA;case 35676:return LA;case 5124:case 35670:return DA;case 35667:case 35671:return NA;case 35668:case 35672:return UA;case 35669:case 35673:return IA;case 5125:return OA;case 36294:return FA;case 36295:return kA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return GA;case 35680:case 36300:case 36308:case 36293:return HA;case 36289:case 36303:case 36311:case 36292:return VA}}function XA(n,e){n.uniform1fv(this.addr,e)}function jA(n,e){const t=Go(e,this.size,2);n.uniform2fv(this.addr,t)}function YA(n,e){const t=Go(e,this.size,3);n.uniform3fv(this.addr,t)}function qA(n,e){const t=Go(e,this.size,4);n.uniform4fv(this.addr,t)}function $A(n,e){const t=Go(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function KA(n,e){const t=Go(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ZA(n,e){const t=Go(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function QA(n,e){n.uniform1iv(this.addr,e)}function JA(n,e){n.uniform2iv(this.addr,e)}function eC(n,e){n.uniform3iv(this.addr,e)}function tC(n,e){n.uniform4iv(this.addr,e)}function nC(n,e){n.uniform1uiv(this.addr,e)}function iC(n,e){n.uniform2uiv(this.addr,e)}function rC(n,e){n.uniform3uiv(this.addr,e)}function sC(n,e){n.uniform4uiv(this.addr,e)}function oC(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||yx,s[o])}function aC(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ex,s[o])}function lC(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Tx,s[o])}function uC(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Mx,s[o])}function cC(n){switch(n){case 5126:return XA;case 35664:return jA;case 35665:return YA;case 35666:return qA;case 35674:return $A;case 35675:return KA;case 35676:return ZA;case 5124:case 35670:return QA;case 35667:case 35671:return JA;case 35668:case 35672:return eC;case 35669:case 35673:return tC;case 5125:return nC;case 36294:return iC;case 36295:return rC;case 36296:return sC;case 35678:case 36198:case 36298:case 36306:case 35682:return oC;case 35679:case 36299:case 36307:return aC;case 35680:case 36300:case 36308:case 36293:return lC;case 36289:case 36303:case 36311:case 36292:return uC}}class fC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=WA(t.type)}}class hC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cC(t.type)}}class dC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Rf=/(\w+)(\])?(\[|\.)?/g;function ng(n,e){n.seq.push(e),n.map[e.id]=e}function pC(n,e,t){const i=n.name,r=i.length;for(Rf.lastIndex=0;;){const s=Rf.exec(i),o=Rf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ng(t,u===void 0?new fC(a,n,e):new hC(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new dC(a),ng(t,h)),t=h}}}class cu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);pC(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ig(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const mC=37297;let _C=0;function gC(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function vC(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===Gu&&t===Bu?i="LinearDisplayP3ToLinearSRGB":e===Bu&&t===Gu&&(i="LinearSRGBToLinearDisplayP3"),n){case Zi:case pc:return[i,"LinearTransferOETF"];case Ht:case ip:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function rg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+gC(n.getShaderSource(e),o)}else return r}function xC(n,e){const t=vC(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yC(n,e){let t;switch(e){case NE:t="Linear";break;case UE:t="Reinhard";break;case IE:t="OptimizedCineon";break;case Yv:t="ACESFilmic";break;case FE:t="AgX";break;case OE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function SC(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(so).join(`
`)}function MC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function EC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function TC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function so(n){return n!==""}function sg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function og(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(n){return n.replace(wC,CC)}const AC=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function CC(n,e){let t=Ue[e];if(t===void 0){const i=AC.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hh(t)}const RC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ag(n){return n.replace(RC,PC)}function PC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===aE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function LC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ro:case Po:e="ENVMAP_TYPE_CUBE";break;case dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DC(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Po:e="ENVMAP_MODE_REFRACTION";break}return e}function NC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ep:e="ENVMAP_BLENDING_MULTIPLY";break;case LE:e="ENVMAP_BLENDING_MIX";break;case DE:e="ENVMAP_BLENDING_ADD";break}return e}function UC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function IC(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bC(t),u=LC(t),c=DC(t),h=NC(t),d=UC(t),m=t.isWebGL2?"":SC(t),v=MC(t),_=EC(s),p=r.createProgram();let f,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(so).join(`
`),f.length>0&&(f+=`
`),g=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(so).join(`
`),g.length>0&&(g+=`
`)):(f=[lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),g=[m,lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Cr?yC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,xC("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=Hh(o),o=sg(o,t),o=og(o,t),a=Hh(a),a=sg(a,t),a=og(a,t),o=ag(o),a=ag(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===T_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===T_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=x+f+o,w=x+g+a,T=ig(r,r.VERTEX_SHADER,y),M=ig(r,r.FRAGMENT_SHADER,w);r.attachShader(p,T),r.attachShader(p,M),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function b(F){if(n.debug.checkShaderErrors){const Y=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(T).trim(),k=r.getShaderInfoLog(M).trim();let I=!0,q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,T,M);else{const N=rg(r,T,"vertex"),B=rg(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Y+`
`+N+`
`+B)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||k==="")&&(q=!1);q&&(F.diagnostics={runnable:I,programLog:Y,vertexShader:{log:L,prefix:f},fragmentShader:{log:k,prefix:g}})}r.deleteShader(T),r.deleteShader(M),D=new cu(r,p),S=TC(r,p)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(p,mC)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_C++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=M,this}let OC=0;class FC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kC(e),t.set(e,i)),i}}class kC{constructor(e){this.id=OC++,this.code=e,this.usedTimes=0}}function zC(n,e,t,i,r,s,o){const a=new ux,l=new FC,u=new Set,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return u.add(S),S===0?"uv":`uv${S}`}function f(S,R,F,Y,L){const k=Y.fog,I=L.geometry,q=S.isMeshStandardMaterial?Y.environment:null,N=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),B=N&&N.mapping===dc?N.image.height:null,H=_[S.type];S.precision!==null&&(v=r.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const $=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=$!==void 0?$.length:0;let xe=0;I.morphAttributes.position!==void 0&&(xe=1),I.morphAttributes.normal!==void 0&&(xe=2),I.morphAttributes.color!==void 0&&(xe=3);let G,K,le,ge;if(H){const et=yi[H];G=et.vertexShader,K=et.fragmentShader}else G=S.vertexShader,K=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const Ee=n.getRenderTarget(),pe=L.isInstancedMesh===!0,je=L.isBatchedMesh===!0,be=!!S.map,O=!!S.matcap,zt=!!N,Se=!!S.aoMap,Ce=!!S.lightMap,ve=!!S.bumpMap,ct=!!S.normalMap,De=!!S.displacementMap,C=!!S.emissiveMap,E=!!S.metalnessMap,V=!!S.roughnessMap,ne=S.anisotropy>0,Q=S.clearcoat>0,te=S.iridescence>0,me=S.sheen>0,ae=S.transmission>0,fe=ne&&!!S.anisotropyMap,we=Q&&!!S.clearcoatMap,Ie=Q&&!!S.clearcoatNormalMap,J=Q&&!!S.clearcoatRoughnessMap,Ke=te&&!!S.iridescenceMap,Ge=te&&!!S.iridescenceThicknessMap,Re=me&&!!S.sheenColorMap,ye=me&&!!S.sheenRoughnessMap,he=!!S.specularMap,Ne=!!S.specularColorMap,Ye=!!S.specularIntensityMap,rt=ae&&!!S.transmissionMap,Ve=ae&&!!S.thicknessMap,Qe=!!S.gradientMap,P=!!S.alphaMap,re=S.alphaTest>0,se=!!S.alphaHash,de=!!S.extensions;let Me=Cr;S.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Me=n.toneMapping);const qe={isWebGL2:h,shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:G,fragmentShader:K,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,batching:je,instancing:pe,instancingColor:pe&&L.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Zi,alphaToCoverage:!!S.alphaToCoverage,map:be,matcap:O,envMap:zt,envMapMode:zt&&N.mapping,envMapCubeUVHeight:B,aoMap:Se,lightMap:Ce,bumpMap:ve,normalMap:ct,displacementMap:m&&De,emissiveMap:C,normalMapObjectSpace:ct&&S.normalMapType===qE,normalMapTangentSpace:ct&&S.normalMapType===np,metalnessMap:E,roughnessMap:V,anisotropy:ne,anisotropyMap:fe,clearcoat:Q,clearcoatMap:we,clearcoatNormalMap:Ie,clearcoatRoughnessMap:J,iridescence:te,iridescenceMap:Ke,iridescenceThicknessMap:Ge,sheen:me,sheenColorMap:Re,sheenRoughnessMap:ye,specularMap:he,specularColorMap:Ne,specularIntensityMap:Ye,transmission:ae,transmissionMap:rt,thicknessMap:Ve,gradientMap:Qe,opaque:S.transparent===!1&&S.blending===mo&&S.alphaToCoverage===!1,alphaMap:P,alphaTest:re,alphaHash:se,combine:S.combine,mapUv:be&&p(S.map.channel),aoMapUv:Se&&p(S.aoMap.channel),lightMapUv:Ce&&p(S.lightMap.channel),bumpMapUv:ve&&p(S.bumpMap.channel),normalMapUv:ct&&p(S.normalMap.channel),displacementMapUv:De&&p(S.displacementMap.channel),emissiveMapUv:C&&p(S.emissiveMap.channel),metalnessMapUv:E&&p(S.metalnessMap.channel),roughnessMapUv:V&&p(S.roughnessMap.channel),anisotropyMapUv:fe&&p(S.anisotropyMap.channel),clearcoatMapUv:we&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(S.sheenRoughnessMap.channel),specularMapUv:he&&p(S.specularMap.channel),specularColorMapUv:Ne&&p(S.specularColorMap.channel),specularIntensityMapUv:Ye&&p(S.specularIntensityMap.channel),transmissionMapUv:rt&&p(S.transmissionMap.channel),thicknessMapUv:Ve&&p(S.thicknessMap.channel),alphaMapUv:P&&p(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ct||ne),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(be||P),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:xe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,useLegacyLights:n._useLegacyLights,decodeVideoTexture:be&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gi,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:de&&S.extensions.derivatives===!0,extensionFragDepth:de&&S.extensions.fragDepth===!0,extensionDrawBuffers:de&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:de&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return qe.vertexUv1s=u.has(1),qe.vertexUv2s=u.has(2),qe.vertexUv3s=u.has(3),u.clear(),qe}function g(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)R.push(F),R.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(x(R,S),y(R,S),R.push(n.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function x(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function y(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),S.push(a.mask)}function w(S){const R=_[S.type];let F;if(R){const Y=yi[R];F=S1.clone(Y.uniforms)}else F=S.uniforms;return F}function T(S,R){let F;for(let Y=0,L=c.length;Y<L;Y++){const k=c[Y];if(k.cacheKey===R){F=k,++F.usedTimes;break}}return F===void 0&&(F=new IC(n,R,S,s),c.push(F)),F}function M(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),S.destroy()}}function b(S){l.remove(S)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:w,acquireProgram:T,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:D}}function BC(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function GC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ug(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,m,v,_,p){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:v,renderOrder:h.renderOrder,z:_,group:p},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=_,f.group=p),e++,f}function a(h,d,m,v,_,p){const f=o(h,d,m,v,_,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(h,d,m,v,_,p){const f=o(h,d,m,v,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function u(h,d){t.length>1&&t.sort(h||GC),i.length>1&&i.sort(d||ug),r.length>1&&r.sort(d||ug)}function c(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function HC(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new cg,n.set(i,[o])):r>=s.length?(o=new cg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function VC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ze};break;case"SpotLight":t={position:new z,direction:new z,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function WC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let XC=0;function jC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function YC(n,e){const t=new VC,i=WC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new z);const s=new z,o=new At,a=new At;function l(c,h){let d=0,m=0,v=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let _=0,p=0,f=0,g=0,x=0,y=0,w=0,T=0,M=0,b=0,D=0;c.sort(jC);const S=h===!0?Math.PI:1;for(let F=0,Y=c.length;F<Y;F++){const L=c[F],k=L.color,I=L.intensity,q=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=k.r*I*S,m+=k.g*I*S,v+=k.b*I*S;else if(L.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(L.sh.coefficients[B],I);D++}else if(L.isDirectionalLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const H=L.shadow,$=i.get(L);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[_]=$,r.directionalShadowMap[_]=N,r.directionalShadowMatrix[_]=L.shadow.matrix,y++}r.directional[_]=B,_++}else if(L.isSpotLight){const B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(k).multiplyScalar(I*S),B.distance=q,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,r.spot[f]=B;const H=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,H.updateMatrices(L),L.castShadow&&b++),r.spotLightMatrix[f]=H.matrix,L.castShadow){const $=i.get(L);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[f]=$,r.spotShadowMap[f]=N,T++}f++}else if(L.isRectAreaLight){const B=t.get(L);B.color.copy(k).multiplyScalar(I),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=B,g++}else if(L.isPointLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity*S),B.distance=L.distance,B.decay=L.decay,L.castShadow){const H=L.shadow,$=i.get(L);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[p]=$,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=L.shadow.matrix,w++}r.point[p]=B,p++}else if(L.isHemisphereLight){const B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(I*S),B.groundColor.copy(L.groundColor).multiplyScalar(I*S),r.hemi[x]=B,x++}}g>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const R=r.hash;(R.directionalLength!==_||R.pointLength!==p||R.spotLength!==f||R.rectAreaLength!==g||R.hemiLength!==x||R.numDirectionalShadows!==y||R.numPointShadows!==w||R.numSpotShadows!==T||R.numSpotMaps!==M||R.numLightProbes!==D)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=g,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+M-b,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=D,R.directionalLength=_,R.pointLength=p,R.spotLength=f,R.rectAreaLength=g,R.hemiLength=x,R.numDirectionalShadows=y,R.numPointShadows=w,R.numSpotShadows=T,R.numSpotMaps=M,R.numLightProbes=D,r.version=XC++)}function u(c,h){let d=0,m=0,v=0,_=0,p=0;const f=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const y=c[g];if(y.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),d++}else if(y.isSpotLight){const w=r.spot[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),p++}}}return{setup:l,setupView:u,state:r}}function fg(n,e){const t=new YC(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function u(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function qC(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new fg(n,e),t.set(s,[l])):o>=a.length?(l=new fg(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class $C extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KC extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JC(n,e,t){let i=new rp;const r=new Be,s=new Be,o=new It,a=new $C({depthPacking:YE}),l=new KC,u={},c=t.maxTextureSize,h={[Nr]:un,[un]:Nr,[Gi]:Gi},d=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:ZC,fragmentShader:QC}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new mi;v.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new an(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jv;let f=this.type;this.render=function(T,M,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const D=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ar),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const Y=f!==Oi&&this.type===Oi,L=f===Oi&&this.type!==Oi;for(let k=0,I=T.length;k<I;k++){const q=T[k],N=q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const B=N.getFrameExtents();if(r.multiply(B),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/B.x),r.x=s.x*B.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/B.y),r.y=s.y*B.y,N.mapSize.y=s.y)),N.map===null||Y===!0||L===!0){const $=this.type!==Oi?{minFilter:sn,magFilter:sn}:{};N.map!==null&&N.map.dispose(),N.map=new Ss(r.x,r.y,$),N.map.texture.name=q.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const H=N.getViewportCount();for(let $=0;$<H;$++){const Z=N.getViewport($);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),F.viewport(o),N.updateMatrices(q,$),i=N.getFrustum(),y(M,b,N.camera,q,this.type)}N.isPointLightShadow!==!0&&this.type===Oi&&g(N,b),N.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(D,S,R)};function g(T,M){const b=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ss(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(M,null,b,d,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(M,null,b,m,_,null)}function x(T,M,b,D){let S=null;const R=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=b.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const F=S.uuid,Y=M.uuid;let L=u[F];L===void 0&&(L={},u[F]=L);let k=L[Y];k===void 0&&(k=S.clone(),L[Y]=k,M.addEventListener("dispose",w)),S=k}if(S.visible=M.visible,S.wireframe=M.wireframe,D===Oi?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:h[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=b}return S}function y(T,M,b,D,S){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Oi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const Y=e.update(T),L=T.material;if(Array.isArray(L)){const k=Y.groups;for(let I=0,q=k.length;I<q;I++){const N=k[I],B=L[N.materialIndex];if(B&&B.visible){const H=x(T,B,D,S);T.onBeforeShadow(n,T,M,b,Y,H,N),n.renderBufferDirect(b,null,Y,H,T,N),T.onAfterShadow(n,T,M,b,Y,H,N)}}}else if(L.visible){const k=x(T,L,D,S);T.onBeforeShadow(n,T,M,b,Y,k,null),n.renderBufferDirect(b,null,Y,k,T,null),T.onAfterShadow(n,T,M,b,Y,k,null)}}const F=T.children;for(let Y=0,L=F.length;Y<L;Y++)y(F[Y],M,b,D,S)}function w(T){T.target.removeEventListener("dispose",w);for(const b in u){const D=u[b],S=T.target.uuid;S in D&&(D[S].dispose(),delete D[S])}}}function eR(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const re=new It;let se=null;const de=new It(0,0,0,0);return{setMask:function(Me){se!==Me&&!P&&(n.colorMask(Me,Me,Me,Me),se=Me)},setLocked:function(Me){P=Me},setClear:function(Me,qe,et,Bt,Hn){Hn===!0&&(Me*=Bt,qe*=Bt,et*=Bt),re.set(Me,qe,et,Bt),de.equals(re)===!1&&(n.clearColor(Me,qe,et,Bt),de.copy(re))},reset:function(){P=!1,se=null,de.set(-1,0,0,0)}}}function s(){let P=!1,re=null,se=null,de=null;return{setTest:function(Me){Me?pe(n.DEPTH_TEST):je(n.DEPTH_TEST)},setMask:function(Me){re!==Me&&!P&&(n.depthMask(Me),re=Me)},setFunc:function(Me){if(se!==Me){switch(Me){case TE:n.depthFunc(n.NEVER);break;case wE:n.depthFunc(n.ALWAYS);break;case AE:n.depthFunc(n.LESS);break;case ku:n.depthFunc(n.LEQUAL);break;case CE:n.depthFunc(n.EQUAL);break;case RE:n.depthFunc(n.GEQUAL);break;case PE:n.depthFunc(n.GREATER);break;case bE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=Me}},setLocked:function(Me){P=Me},setClear:function(Me){de!==Me&&(n.clearDepth(Me),de=Me)},reset:function(){P=!1,re=null,se=null,de=null}}}function o(){let P=!1,re=null,se=null,de=null,Me=null,qe=null,et=null,Bt=null,Hn=null;return{setTest:function(tt){P||(tt?pe(n.STENCIL_TEST):je(n.STENCIL_TEST))},setMask:function(tt){re!==tt&&!P&&(n.stencilMask(tt),re=tt)},setFunc:function(tt,tn,_i){(se!==tt||de!==tn||Me!==_i)&&(n.stencilFunc(tt,tn,_i),se=tt,de=tn,Me=_i)},setOp:function(tt,tn,_i){(qe!==tt||et!==tn||Bt!==_i)&&(n.stencilOp(tt,tn,_i),qe=tt,et=tn,Bt=_i)},setLocked:function(tt){P=tt},setClear:function(tt){Hn!==tt&&(n.clearStencil(tt),Hn=tt)},reset:function(){P=!1,re=null,se=null,de=null,Me=null,qe=null,et=null,Bt=null,Hn=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let d={},m={},v=new WeakMap,_=[],p=null,f=!1,g=null,x=null,y=null,w=null,T=null,M=null,b=null,D=new ze(0,0,0),S=0,R=!1,F=null,Y=null,L=null,k=null,I=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,B=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=B>=1):H.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=B>=2);let $=null,Z={};const xe=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),K=new It().fromArray(xe),le=new It().fromArray(G);function ge(P,re,se,de){const Me=new Uint8Array(4),qe=n.createTexture();n.bindTexture(P,qe),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<se;et++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(re,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(re+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return qe}const Ee={};Ee[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),pe(n.DEPTH_TEST),l.setFunc(ku),De(!1),C(Wm),pe(n.CULL_FACE),ve(Ar);function pe(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function je(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function be(P,re){return m[P]!==re?(n.bindFramebuffer(P,re),m[P]=re,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=re),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=re)),!0):!1}function O(P,re){let se=_,de=!1;if(P)if(se=v.get(re),se===void 0&&(se=[],v.set(re,se)),P.isWebGLMultipleRenderTargets){const Me=P.texture;if(se.length!==Me.length||se[0]!==n.COLOR_ATTACHMENT0){for(let qe=0,et=Me.length;qe<et;qe++)se[qe]=n.COLOR_ATTACHMENT0+qe;se.length=Me.length,de=!0}}else se[0]!==n.COLOR_ATTACHMENT0&&(se[0]=n.COLOR_ATTACHMENT0,de=!0);else se[0]!==n.BACK&&(se[0]=n.BACK,de=!0);de&&(t.isWebGL2?n.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function zt(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const Se={[es]:n.FUNC_ADD,[uE]:n.FUNC_SUBTRACT,[cE]:n.FUNC_REVERSE_SUBTRACT};if(i)Se[qm]=n.MIN,Se[$m]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Se[qm]=P.MIN_EXT,Se[$m]=P.MAX_EXT)}const Ce={[fE]:n.ZERO,[hE]:n.ONE,[dE]:n.SRC_COLOR,[Nh]:n.SRC_ALPHA,[xE]:n.SRC_ALPHA_SATURATE,[gE]:n.DST_COLOR,[mE]:n.DST_ALPHA,[pE]:n.ONE_MINUS_SRC_COLOR,[Uh]:n.ONE_MINUS_SRC_ALPHA,[vE]:n.ONE_MINUS_DST_COLOR,[_E]:n.ONE_MINUS_DST_ALPHA,[yE]:n.CONSTANT_COLOR,[SE]:n.ONE_MINUS_CONSTANT_COLOR,[ME]:n.CONSTANT_ALPHA,[EE]:n.ONE_MINUS_CONSTANT_ALPHA};function ve(P,re,se,de,Me,qe,et,Bt,Hn,tt){if(P===Ar){f===!0&&(je(n.BLEND),f=!1);return}if(f===!1&&(pe(n.BLEND),f=!0),P!==lE){if(P!==g||tt!==R){if((x!==es||T!==es)&&(n.blendEquation(n.FUNC_ADD),x=es,T=es),tt)switch(P){case mo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xm:n.blendFunc(n.ONE,n.ONE);break;case jm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ym:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ym:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,w=null,M=null,b=null,D.set(0,0,0),S=0,g=P,R=tt}return}Me=Me||re,qe=qe||se,et=et||de,(re!==x||Me!==T)&&(n.blendEquationSeparate(Se[re],Se[Me]),x=re,T=Me),(se!==y||de!==w||qe!==M||et!==b)&&(n.blendFuncSeparate(Ce[se],Ce[de],Ce[qe],Ce[et]),y=se,w=de,M=qe,b=et),(Bt.equals(D)===!1||Hn!==S)&&(n.blendColor(Bt.r,Bt.g,Bt.b,Hn),D.copy(Bt),S=Hn),g=P,R=!1}function ct(P,re){P.side===Gi?je(n.CULL_FACE):pe(n.CULL_FACE);let se=P.side===un;re&&(se=!se),De(se),P.blending===mo&&P.transparent===!1?ve(Ar):ve(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const de=P.stencilWrite;u.setTest(de),de&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),V(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):je(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(P){F!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),F=P)}function C(P){P!==sE?(pe(n.CULL_FACE),P!==Y&&(P===Wm?n.cullFace(n.BACK):P===oE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):je(n.CULL_FACE),Y=P}function E(P){P!==L&&(N&&n.lineWidth(P),L=P)}function V(P,re,se){P?(pe(n.POLYGON_OFFSET_FILL),(k!==re||I!==se)&&(n.polygonOffset(re,se),k=re,I=se)):je(n.POLYGON_OFFSET_FILL)}function ne(P){P?pe(n.SCISSOR_TEST):je(n.SCISSOR_TEST)}function Q(P){P===void 0&&(P=n.TEXTURE0+q-1),$!==P&&(n.activeTexture(P),$=P)}function te(P,re,se){se===void 0&&($===null?se=n.TEXTURE0+q-1:se=$);let de=Z[se];de===void 0&&(de={type:void 0,texture:void 0},Z[se]=de),(de.type!==P||de.texture!==re)&&($!==se&&(n.activeTexture(se),$=se),n.bindTexture(P,re||Ee[P]),de.type=P,de.texture=re)}function me(){const P=Z[$];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(P){K.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function Ye(P){le.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),le.copy(P))}function rt(P,re){let se=h.get(re);se===void 0&&(se=new WeakMap,h.set(re,se));let de=se.get(P);de===void 0&&(de=n.getUniformBlockIndex(re,P.name),se.set(P,de))}function Ve(P,re){const de=h.get(re).get(P);c.get(re)!==de&&(n.uniformBlockBinding(re,de,P.__bindingPointIndex),c.set(re,de))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},$=null,Z={},m={},v=new WeakMap,_=[],p=null,f=!1,g=null,x=null,y=null,w=null,T=null,M=null,b=null,D=new ze(0,0,0),S=0,R=!1,F=null,Y=null,L=null,k=null,I=null,K.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:pe,disable:je,bindFramebuffer:be,drawBuffers:O,useProgram:zt,setBlending:ve,setMaterial:ct,setFlipSided:De,setCullFace:C,setLineWidth:E,setPolygonOffset:V,setScissorTest:ne,activeTexture:Q,bindTexture:te,unbindTexture:me,compressedTexImage2D:ae,compressedTexImage3D:fe,texImage2D:ye,texImage3D:he,updateUBOMapping:rt,uniformBlockBinding:Ve,texStorage2D:Ge,texStorage3D:Re,texSubImage2D:we,texSubImage3D:Ie,compressedTexSubImage2D:J,compressedTexSubImage3D:Ke,scissor:Ne,viewport:Ye,reset:Qe}}function tR(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,E){return m?new OffscreenCanvas(C,E):Wa("canvas")}function _(C,E,V,ne){let Q=1;if((C.width>ne||C.height>ne)&&(Q=ne/Math.max(C.width,C.height)),Q<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const te=E?Gh:Math.floor,me=te(Q*C.width),ae=te(Q*C.height);h===void 0&&(h=v(me,ae));const fe=V?v(me,ae):h;return fe.width=me,fe.height=ae,fe.getContext("2d").drawImage(C,0,0,me,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+me+"x"+ae+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return w_(C.width)&&w_(C.height)}function f(C){return a?!1:C.wrapS!==ci||C.wrapT!==ci||C.minFilter!==sn&&C.minFilter!==pn}function g(C,E){return C.generateMipmaps&&E&&C.minFilter!==sn&&C.minFilter!==pn}function x(C){n.generateMipmap(C)}function y(C,E,V,ne,Q=!1){if(a===!1)return E;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let te=E;if(E===n.RED&&(V===n.FLOAT&&(te=n.R32F),V===n.HALF_FLOAT&&(te=n.R16F),V===n.UNSIGNED_BYTE&&(te=n.R8)),E===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(te=n.R8UI),V===n.UNSIGNED_SHORT&&(te=n.R16UI),V===n.UNSIGNED_INT&&(te=n.R32UI),V===n.BYTE&&(te=n.R8I),V===n.SHORT&&(te=n.R16I),V===n.INT&&(te=n.R32I)),E===n.RG&&(V===n.FLOAT&&(te=n.RG32F),V===n.HALF_FLOAT&&(te=n.RG16F),V===n.UNSIGNED_BYTE&&(te=n.RG8)),E===n.RGBA){const me=Q?zu:Ze.getTransfer(ne);V===n.FLOAT&&(te=n.RGBA32F),V===n.HALF_FLOAT&&(te=n.RGBA16F),V===n.UNSIGNED_BYTE&&(te=me===ot?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function w(C,E,V){return g(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==sn&&C.minFilter!==pn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function T(C){return C===sn||C===Km||C===Qo?n.NEAREST:n.LINEAR}function M(C){const E=C.target;E.removeEventListener("dispose",M),D(E),E.isVideoTexture&&c.delete(E)}function b(C){const E=C.target;E.removeEventListener("dispose",b),R(E)}function D(C){const E=i.get(C);if(E.__webglInit===void 0)return;const V=C.source,ne=d.get(V);if(ne){const Q=ne[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(C),Object.keys(ne).length===0&&d.delete(V)}i.remove(C)}function S(C){const E=i.get(C);n.deleteTexture(E.__webglTexture);const V=C.source,ne=d.get(V);delete ne[E.__cacheKey],o.memory.textures--}function R(C){const E=C.texture,V=i.get(C),ne=i.get(E);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(V.__webglFramebuffer[Q]))for(let te=0;te<V.__webglFramebuffer[Q].length;te++)n.deleteFramebuffer(V.__webglFramebuffer[Q][te]);else n.deleteFramebuffer(V.__webglFramebuffer[Q]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[Q])}else{if(Array.isArray(V.__webglFramebuffer))for(let Q=0;Q<V.__webglFramebuffer.length;Q++)n.deleteFramebuffer(V.__webglFramebuffer[Q]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let Q=0;Q<V.__webglColorRenderbuffer.length;Q++)V.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[Q]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Q=0,te=E.length;Q<te;Q++){const me=i.get(E[Q]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(E[Q])}i.remove(E),i.remove(C)}let F=0;function Y(){F=0}function L(){const C=F;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),F+=1,C}function k(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function I(C,E){const V=i.get(C);if(C.isVideoTexture&&ct(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,C,E);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+E)}function q(C,E){const V=i.get(C);if(C.version>0&&V.__version!==C.version){K(V,C,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+E)}function N(C,E){const V=i.get(C);if(C.version>0&&V.__version!==C.version){K(V,C,E);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+E)}function B(C,E){const V=i.get(C);if(C.version>0&&V.__version!==C.version){le(V,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+E)}const H={[Fh]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[kh]:n.MIRRORED_REPEAT},$={[sn]:n.NEAREST,[Km]:n.NEAREST_MIPMAP_NEAREST,[Qo]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[Qc]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},Z={[$E]:n.NEVER,[t1]:n.ALWAYS,[KE]:n.LESS,[ix]:n.LEQUAL,[ZE]:n.EQUAL,[e1]:n.GEQUAL,[QE]:n.GREATER,[JE]:n.NOTEQUAL};function xe(C,E,V){if(E.type===Hi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pn||E.magFilter===Qc||E.magFilter===Qo||E.magFilter===ss||E.minFilter===pn||E.minFilter===Qc||E.minFilter===Qo||E.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(n.texParameteri(C,n.TEXTURE_WRAP_S,H[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,H[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,H[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,$[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,$[E.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==ci||E.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,T(E.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==sn&&E.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===sn||E.minFilter!==Qo&&E.minFilter!==ss||E.type===Hi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Va&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(C,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function G(C,E){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",M));const ne=E.source;let Q=d.get(ne);Q===void 0&&(Q={},d.set(ne,Q));const te=k(E);if(te!==C.__cacheKey){Q[te]===void 0&&(Q[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[te].usedTimes++;const me=Q[C.__cacheKey];me!==void 0&&(Q[C.__cacheKey].usedTimes--,me.usedTimes===0&&S(E)),C.__cacheKey=te,C.__webglTexture=Q[te].texture}return V}function K(C,E,V){let ne=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=n.TEXTURE_3D);const Q=G(C,E),te=E.source;t.bindTexture(ne,C.__webglTexture,n.TEXTURE0+V);const me=i.get(te);if(te.version!==me.__version||Q===!0){t.activeTexture(n.TEXTURE0+V);const ae=Ze.getPrimaries(Ze.workingColorSpace),fe=E.colorSpace===qn?null:Ze.getPrimaries(E.colorSpace),we=E.colorSpace===qn||ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ie=f(E)&&p(E.image)===!1;let J=_(E.image,Ie,!1,r.maxTextureSize);J=De(E,J);const Ke=p(J)||a,Ge=s.convert(E.format,E.colorSpace);let Re=s.convert(E.type),ye=y(E.internalFormat,Ge,Re,E.colorSpace,E.isVideoTexture);xe(ne,E,Ke);let he;const Ne=E.mipmaps,Ye=a&&E.isVideoTexture!==!0&&ye!==tx,rt=me.__version===void 0||Q===!0,Ve=te.dataReady,Qe=w(E,J,Ke);if(E.isDepthTexture)ye=n.DEPTH_COMPONENT,a?E.type===Hi?ye=n.DEPTH_COMPONENT32F:E.type===pr?ye=n.DEPTH_COMPONENT24:E.type===us?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:E.type===Hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===cs&&ye===n.DEPTH_COMPONENT&&E.type!==tp&&E.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=pr,Re=s.convert(E.type)),E.format===bo&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,E.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=us,Re=s.convert(E.type))),rt&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,ye,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,ye,J.width,J.height,0,Ge,Re,null));else if(E.isDataTexture)if(Ne.length>0&&Ke){Ye&&rt&&t.texStorage2D(n.TEXTURE_2D,Qe,ye,Ne[0].width,Ne[0].height);for(let P=0,re=Ne.length;P<re;P++)he=Ne[P],Ye?Ve&&t.texSubImage2D(n.TEXTURE_2D,P,0,0,he.width,he.height,Ge,Re,he.data):t.texImage2D(n.TEXTURE_2D,P,ye,he.width,he.height,0,Ge,Re,he.data);E.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(n.TEXTURE_2D,Qe,ye,J.width,J.height),Ve&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Ge,Re,J.data)):t.texImage2D(n.TEXTURE_2D,0,ye,J.width,J.height,0,Ge,Re,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,ye,Ne[0].width,Ne[0].height,J.depth);for(let P=0,re=Ne.length;P<re;P++)he=Ne[P],E.format!==fi?Ge!==null?Ye?Ve&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,P,0,0,0,he.width,he.height,J.depth,Ge,he.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,P,ye,he.width,he.height,J.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Ve&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,P,0,0,0,he.width,he.height,J.depth,Ge,Re,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,P,ye,he.width,he.height,J.depth,0,Ge,Re,he.data)}else{Ye&&rt&&t.texStorage2D(n.TEXTURE_2D,Qe,ye,Ne[0].width,Ne[0].height);for(let P=0,re=Ne.length;P<re;P++)he=Ne[P],E.format!==fi?Ge!==null?Ye?Ve&&t.compressedTexSubImage2D(n.TEXTURE_2D,P,0,0,he.width,he.height,Ge,he.data):t.compressedTexImage2D(n.TEXTURE_2D,P,ye,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Ve&&t.texSubImage2D(n.TEXTURE_2D,P,0,0,he.width,he.height,Ge,Re,he.data):t.texImage2D(n.TEXTURE_2D,P,ye,he.width,he.height,0,Ge,Re,he.data)}else if(E.isDataArrayTexture)Ye?(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,ye,J.width,J.height,J.depth),Ve&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ge,Re,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,J.width,J.height,J.depth,0,Ge,Re,J.data);else if(E.isData3DTexture)Ye?(rt&&t.texStorage3D(n.TEXTURE_3D,Qe,ye,J.width,J.height,J.depth),Ve&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ge,Re,J.data)):t.texImage3D(n.TEXTURE_3D,0,ye,J.width,J.height,J.depth,0,Ge,Re,J.data);else if(E.isFramebufferTexture){if(rt)if(Ye)t.texStorage2D(n.TEXTURE_2D,Qe,ye,J.width,J.height);else{let P=J.width,re=J.height;for(let se=0;se<Qe;se++)t.texImage2D(n.TEXTURE_2D,se,ye,P,re,0,Ge,Re,null),P>>=1,re>>=1}}else if(Ne.length>0&&Ke){Ye&&rt&&t.texStorage2D(n.TEXTURE_2D,Qe,ye,Ne[0].width,Ne[0].height);for(let P=0,re=Ne.length;P<re;P++)he=Ne[P],Ye?Ve&&t.texSubImage2D(n.TEXTURE_2D,P,0,0,Ge,Re,he):t.texImage2D(n.TEXTURE_2D,P,ye,Ge,Re,he);E.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(n.TEXTURE_2D,Qe,ye,J.width,J.height),Ve&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ge,Re,J)):t.texImage2D(n.TEXTURE_2D,0,ye,Ge,Re,J);g(E,Ke)&&x(ne),me.__version=te.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function le(C,E,V){if(E.image.length!==6)return;const ne=G(C,E),Q=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);const te=i.get(Q);if(Q.version!==te.__version||ne===!0){t.activeTexture(n.TEXTURE0+V);const me=Ze.getPrimaries(Ze.workingColorSpace),ae=E.colorSpace===qn?null:Ze.getPrimaries(E.colorSpace),fe=E.colorSpace===qn||me===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,Ie=E.image[0]&&E.image[0].isDataTexture,J=[];for(let P=0;P<6;P++)!we&&!Ie?J[P]=_(E.image[P],!1,!0,r.maxCubemapSize):J[P]=Ie?E.image[P].image:E.image[P],J[P]=De(E,J[P]);const Ke=J[0],Ge=p(Ke)||a,Re=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),he=y(E.internalFormat,Re,ye,E.colorSpace),Ne=a&&E.isVideoTexture!==!0,Ye=te.__version===void 0||ne===!0,rt=Q.dataReady;let Ve=w(E,Ke,Ge);xe(n.TEXTURE_CUBE_MAP,E,Ge);let Qe;if(we){Ne&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,he,Ke.width,Ke.height);for(let P=0;P<6;P++){Qe=J[P].mipmaps;for(let re=0;re<Qe.length;re++){const se=Qe[re];E.format!==fi?Re!==null?Ne?rt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,re,0,0,se.width,se.height,Re,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,re,he,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,re,0,0,se.width,se.height,Re,ye,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,re,he,se.width,se.height,0,Re,ye,se.data)}}}else{Qe=E.mipmaps,Ne&&Ye&&(Qe.length>0&&Ve++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,he,J[0].width,J[0].height));for(let P=0;P<6;P++)if(Ie){Ne?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,J[P].width,J[P].height,Re,ye,J[P].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,he,J[P].width,J[P].height,0,Re,ye,J[P].data);for(let re=0;re<Qe.length;re++){const de=Qe[re].image[P].image;Ne?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,re+1,0,0,de.width,de.height,Re,ye,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,re+1,he,de.width,de.height,0,Re,ye,de.data)}}else{Ne?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Re,ye,J[P]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,he,Re,ye,J[P]);for(let re=0;re<Qe.length;re++){const se=Qe[re];Ne?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,re+1,0,0,Re,ye,se.image[P]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,re+1,he,Re,ye,se.image[P])}}}g(E,Ge)&&x(n.TEXTURE_CUBE_MAP),te.__version=Q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ge(C,E,V,ne,Q,te){const me=s.convert(V.format,V.colorSpace),ae=s.convert(V.type),fe=y(V.internalFormat,me,ae,V.colorSpace);if(!i.get(E).__hasExternalTextures){const Ie=Math.max(1,E.width>>te),J=Math.max(1,E.height>>te);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,fe,Ie,J,E.depth,0,me,ae,null):t.texImage2D(Q,te,fe,Ie,J,0,me,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ve(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,Q,i.get(V).__webglTexture,0,Ce(E)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,Q,i.get(V).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(C,E,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||ve(E)){const Q=E.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Hi?ne=n.DEPTH_COMPONENT32F:Q.type===pr&&(ne=n.DEPTH_COMPONENT24));const te=Ce(E);ve(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ne,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ne,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const ne=Ce(E);V&&ve(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,E.width,E.height):ve(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0;Q<ne.length;Q++){const te=ne[Q],me=s.convert(te.format,te.colorSpace),ae=s.convert(te.type),fe=y(te.internalFormat,me,ae,te.colorSpace),we=Ce(E);V&&ve(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,fe,E.width,E.height):ve(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,fe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,fe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),I(E.depthTexture,0);const ne=i.get(E.depthTexture).__webglTexture,Q=Ce(E);if(E.depthTexture.format===cs)ve(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(E.depthTexture.format===bo)ve(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function je(C){const E=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");pe(E.__webglFramebuffer,C)}else if(V){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=n.createRenderbuffer(),Ee(E.__webglDepthbuffer[ne],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ee(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(C,E,V){const ne=i.get(C);E!==void 0&&ge(ne.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&je(C)}function O(C){const E=C.texture,V=i.get(C),ne=i.get(E);C.addEventListener("dispose",b),C.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=E.version,o.memory.textures++);const Q=C.isWebGLCubeRenderTarget===!0,te=C.isWebGLMultipleRenderTargets===!0,me=p(C)||a;if(Q){V.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[ae]=[];for(let fe=0;fe<E.mipmaps.length;fe++)V.__webglFramebuffer[ae][fe]=n.createFramebuffer()}else V.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)V.__webglFramebuffer[ae]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const ae=C.texture;for(let fe=0,we=ae.length;fe<we;fe++){const Ie=i.get(ae[fe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ve(C)===!1){const ae=te?E:[E];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<ae.length;fe++){const we=ae[fe];V.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);const Ie=s.convert(we.format,we.colorSpace),J=s.convert(we.type),Ke=y(we.internalFormat,Ie,J,we.colorSpace,C.isXRRenderTarget===!0),Ge=Ce(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Ke,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),xe(n.TEXTURE_CUBE_MAP,E,me);for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)ge(V.__webglFramebuffer[ae][fe],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else ge(V.__webglFramebuffer[ae],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(E,me)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const ae=C.texture;for(let fe=0,we=ae.length;fe<we;fe++){const Ie=ae[fe],J=i.get(Ie);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),xe(n.TEXTURE_2D,Ie,me),ge(V.__webglFramebuffer,C,Ie,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(Ie,me)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ae=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ne.__webglTexture),xe(ae,E,me),a&&E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)ge(V.__webglFramebuffer[fe],C,E,n.COLOR_ATTACHMENT0,ae,fe);else ge(V.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,ae,0);g(E,me)&&x(ae),t.unbindTexture()}C.depthBuffer&&je(C)}function zt(C){const E=p(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0,Q=V.length;ne<Q;ne++){const te=V[ne];if(g(te,E)){const me=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(te).__webglTexture;t.bindTexture(me,ae),x(me),t.unbindTexture()}}}function Se(C){if(a&&C.samples>0&&ve(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,ne=C.height;let Q=n.COLOR_BUFFER_BIT;const te=[],me=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(C),fe=C.isWebGLMultipleRenderTargets===!0;if(fe)for(let we=0;we<E.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let we=0;we<E.length;we++){te.push(n.COLOR_ATTACHMENT0+we),C.depthBuffer&&te.push(me);const Ie=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ie===!1&&(C.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[we]),Ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[me])),fe){const J=i.get(E[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,V,ne,0,0,V,ne,Q,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let we=0;we<E.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,ae.__webglColorRenderbuffer[we]);const Ie=i.get(E[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ce(C){return Math.min(r.maxSamples,C.samples)}function ve(C){const E=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ct(C){const E=o.render.frame;c.get(C)!==E&&(c.set(C,E),C.update())}function De(C,E){const V=C.colorSpace,ne=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===zh||V!==Zi&&V!==qn&&(Ze.getTransfer(V)===ot?a===!1?e.has("EXT_sRGB")===!0&&ne===fi?(C.format=zh,C.minFilter=pn,C.generateMipmaps=!1):E=sx.sRGBToLinear(E):(ne!==fi||Q!==Rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=I,this.setTexture2DArray=q,this.setTexture3D=N,this.setTextureCube=B,this.rebindTextures=be,this.setupRenderTarget=O,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ve}function nR(n,e,t){const i=t.isWebGL2;function r(s,o=qn){let a;const l=Ze.getTransfer(o);if(s===Rr)return n.UNSIGNED_BYTE;if(s===Kv)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Zv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===kE)return n.BYTE;if(s===zE)return n.SHORT;if(s===tp)return n.UNSIGNED_SHORT;if(s===$v)return n.INT;if(s===pr)return n.UNSIGNED_INT;if(s===Hi)return n.FLOAT;if(s===Va)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===BE)return n.ALPHA;if(s===fi)return n.RGBA;if(s===GE)return n.LUMINANCE;if(s===HE)return n.LUMINANCE_ALPHA;if(s===cs)return n.DEPTH_COMPONENT;if(s===bo)return n.DEPTH_STENCIL;if(s===zh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===VE)return n.RED;if(s===Qv)return n.RED_INTEGER;if(s===WE)return n.RG;if(s===Jv)return n.RG_INTEGER;if(s===ex)return n.RGBA_INTEGER;if(s===Jc||s===ef||s===tf||s===nf)if(l===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Jc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ef)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Jc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ef)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zm||s===Qm||s===Jm||s===e_)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Zm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===e_)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===tx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===t_||s===n_)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===t_)return l===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===n_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===i_||s===r_||s===s_||s===o_||s===a_||s===l_||s===u_||s===c_||s===f_||s===h_||s===d_||s===p_||s===m_||s===__)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===i_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===r_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===s_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===o_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===a_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===l_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===u_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===c_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===f_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===h_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===d_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===p_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===m_)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===__)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rf||s===g_||s===v_)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===rf)return l===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===g_)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===v_)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===XE||s===x_||s===y_||s===S_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===rf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===x_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===y_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===S_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===us?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class iR extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ua extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rR={type:"move"};class Pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),f=this._getHandJoint(u,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),m=.02,v=.005;u.inputState.pinching&&d>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ua;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Ur({extensions:{fragDepth:!0},vertexShader:sR,fragmentShader:oR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new an(new al(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class lR extends Bo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,m=null,v=null;const _=new aR,p=t.getContextAttributes();let f=null,g=null;const x=[],y=[],w=new Be;let T=null;const M=new Dn;M.layers.enable(1),M.viewport=new It;const b=new Dn;b.layers.enable(2),b.viewport=new It;const D=[M,b],S=new iR;S.layers.enable(1),S.layers.enable(2);let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=x[G];return K===void 0&&(K=new Pf,x[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=x[G];return K===void 0&&(K=new Pf,x[G]=K),K.getGripSpace()},this.getHand=function(G){let K=x[G];return K===void 0&&(K=new Pf,x[G]=K),K.getHandSpace()};function Y(G){const K=y.indexOf(G.inputSource);if(K===-1)return;const le=x[K];le!==void 0&&(le.update(G.inputSource,G.frame,u||o),le.dispatchEvent({type:G.type,data:G.inputSource}))}function L(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",k);for(let G=0;G<x.length;G++){const K=y[G];K!==null&&(y[G]=null,x[G].disconnect(K))}R=null,F=null,_.reset(),e.setRenderTarget(f),m=null,d=null,h=null,r=null,g=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",L),r.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Ss(m.framebufferWidth,m.framebufferHeight,{format:fi,type:Rr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,le=null,ge=null;p.depth&&(ge=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=p.stencil?bo:cs,le=p.stencil?us:pr);const Ee={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Ee),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Ss(d.textureWidth,d.textureHeight,{format:fi,type:Rr,depthTexture:new xx(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const pe=e.properties.get(g);pe.__ignoreDepthValues=d.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(G){for(let K=0;K<G.removed.length;K++){const le=G.removed[K],ge=y.indexOf(le);ge>=0&&(y[ge]=null,x[ge].disconnect(le))}for(let K=0;K<G.added.length;K++){const le=G.added[K];let ge=y.indexOf(le);if(ge===-1){for(let pe=0;pe<x.length;pe++)if(pe>=y.length){y.push(le),ge=pe;break}else if(y[pe]===null){y[pe]=le,ge=pe;break}if(ge===-1)break}const Ee=x[ge];Ee&&Ee.connect(le)}}const I=new z,q=new z;function N(G,K,le){I.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);const ge=I.distanceTo(q),Ee=K.projectionMatrix.elements,pe=le.projectionMatrix.elements,je=Ee[14]/(Ee[10]-1),be=Ee[14]/(Ee[10]+1),O=(Ee[9]+1)/Ee[5],zt=(Ee[9]-1)/Ee[5],Se=(Ee[8]-1)/Ee[0],Ce=(pe[8]+1)/pe[0],ve=je*Se,ct=je*Ce,De=ge/(-Se+Ce),C=De*-Se;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(C),G.translateZ(De),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const E=je+De,V=be+De,ne=ve-C,Q=ct+(ge-C),te=O*be/V*E,me=zt*be/V*E;G.projectionMatrix.makePerspective(ne,Q,te,me,E,V),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function B(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),S.near=b.near=M.near=G.near,S.far=b.far=M.far=G.far,(R!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,F=S.far,M.near=R,M.far=F,b.near=R,b.far=F,M.updateProjectionMatrix(),b.updateProjectionMatrix(),G.updateProjectionMatrix());const K=G.parent,le=S.cameras;B(S,K);for(let ge=0;ge<le.length;ge++)B(le[ge],K);le.length===2?N(S,M,b):S.projectionMatrix.copy(M.projectionMatrix),H(G,S,K)};function H(G,K,le){le===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(le.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Bh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null};let $=null;function Z(G,K){if(c=K.getViewerPose(u||o),v=K,c!==null){const le=c.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ge=!1;le.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let pe=0;pe<le.length;pe++){const je=le[pe];let be=null;if(m!==null)be=m.getViewport(je);else{const zt=h.getViewSubImage(d,je);be=zt.viewport,pe===0&&(e.setRenderTargetTextures(g,zt.colorTexture,d.ignoreDepthValues?void 0:zt.depthStencilTexture),e.setRenderTarget(g))}let O=D[pe];O===void 0&&(O=new Dn,O.layers.enable(pe),O.viewport=new It,D[pe]=O),O.matrix.fromArray(je.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(je.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(be.x,be.y,be.width,be.height),pe===0&&(S.matrix.copy(O.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(O)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const pe=h.getDepthInformation(le[0]);pe&&pe.isValid&&pe.texture&&_.init(e,pe,r.renderState)}}for(let le=0;le<x.length;le++){const ge=y[le],Ee=x[le];ge!==null&&Ee!==void 0&&Ee.update(ge,K,u||o)}_.render(e,S),$&&$(G,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const xe=new gx;xe.setAnimationLoop(Z),this.setAnimationLoop=function(G){$=G},this.dispose=function(){}}}function uR(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,px(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,g,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),c(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(s(p,f),v(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,g,x):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===un&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===un&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,g,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*g,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,g){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const g=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cR(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,x){const y=x.program;i.uniformBlockBinding(g,y)}function u(g,x){let y=r[g.id];y===void 0&&(v(g),y=c(g),r[g.id]=y,g.addEventListener("dispose",p));const w=x.program;i.updateUBOMapping(g,w);const T=e.render.frame;s[g.id]!==T&&(d(g),s[g.id]=T)}function c(g){const x=h();g.__bindingPointIndex=x;const y=n.createBuffer(),w=g.__size,T=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const x=r[g.id],y=g.uniforms,w=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,M=y.length;T<M;T++){const b=Array.isArray(y[T])?y[T]:[y[T]];for(let D=0,S=b.length;D<S;D++){const R=b[D];if(m(R,T,D,w)===!0){const F=R.__offset,Y=Array.isArray(R.value)?R.value:[R.value];let L=0;for(let k=0;k<Y.length;k++){const I=Y[k],q=_(I);typeof I=="number"||typeof I=="boolean"?(R.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,F+L,R.__data)):I.isMatrix3?(R.__data[0]=I.elements[0],R.__data[1]=I.elements[1],R.__data[2]=I.elements[2],R.__data[3]=0,R.__data[4]=I.elements[3],R.__data[5]=I.elements[4],R.__data[6]=I.elements[5],R.__data[7]=0,R.__data[8]=I.elements[6],R.__data[9]=I.elements[7],R.__data[10]=I.elements[8],R.__data[11]=0):(I.toArray(R.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(g,x,y,w){const T=g.value,M=x+"_"+y;if(w[M]===void 0)return typeof T=="number"||typeof T=="boolean"?w[M]=T:w[M]=T.clone(),!0;{const b=w[M];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return w[M]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function v(g){const x=g.uniforms;let y=0;const w=16;for(let M=0,b=x.length;M<b;M++){const D=Array.isArray(x[M])?x[M]:[x[M]];for(let S=0,R=D.length;S<R;S++){const F=D[S],Y=Array.isArray(F.value)?F.value:[F.value];for(let L=0,k=Y.length;L<k;L++){const I=Y[L],q=_(I),N=y%w;N!==0&&w-N<q.boundary&&(y+=w-N),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=q.storage}}}const T=y%w;return T>0&&(y+=w-T),g.__size=y,g.__cache={},this}function _(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function p(g){const x=g.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class op{constructor(e={}){const{canvas:t=i1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this._useLegacyLights=!1,this.toneMapping=Cr,this.toneMappingExposure=1;const x=this;let y=!1,w=0,T=0,M=null,b=-1,D=null;const S=new It,R=new It;let F=null;const Y=new ze(0);let L=0,k=t.width,I=t.height,q=1,N=null,B=null;const H=new It(0,0,k,I),$=new It(0,0,k,I);let Z=!1;const xe=new rp;let G=!1,K=!1,le=null;const ge=new At,Ee=new Be,pe=new z,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return M===null?q:1}let O=i;function zt(A,U){for(let X=0;X<A.length;X++){const j=A[X],W=t.getContext(j,U);if(W!==null)return W}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jd}`),t.addEventListener("webglcontextlost",Qe,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",re,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),O=zt(U,A),O===null)throw zt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Se,Ce,ve,ct,De,C,E,V,ne,Q,te,me,ae,fe,we,Ie,J,Ke,Ge,Re,ye,he,Ne,Ye;function rt(){Se=new gA(O),Ce=new fA(O,Se,e),Se.init(Ce),he=new nR(O,Se,Ce),ve=new eR(O,Se,Ce),ct=new yA(O),De=new BC,C=new tR(O,Se,ve,De,Ce,he,ct),E=new dA(x),V=new _A(x),ne=new R1(O,Ce),Ne=new uA(O,Se,ne,Ce),Q=new vA(O,ne,ct,Ne),te=new TA(O,Q,ne,ct),Ge=new EA(O,Ce,C),Ie=new hA(De),me=new zC(x,E,V,Se,Ce,Ne,Ie),ae=new uR(x,De),fe=new HC,we=new qC(Se,Ce),Ke=new lA(x,E,V,ve,te,d,l),J=new JC(x,te,Ce),Ye=new cR(O,ct,Ce,ve),Re=new cA(O,Se,ct,Ce),ye=new xA(O,Se,ct,Ce),ct.programs=me.programs,x.capabilities=Ce,x.extensions=Se,x.properties=De,x.renderLists=fe,x.shadowMap=J,x.state=ve,x.info=ct}rt();const Ve=new lR(x,O);this.xr=Ve,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(k,I,!1))},this.getSize=function(A){return A.set(k,I)},this.setSize=function(A,U,X=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,I=U,t.width=Math.floor(A*q),t.height=Math.floor(U*q),X===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(k*q,I*q).floor()},this.setDrawingBufferSize=function(A,U,X){k=A,I=U,q=X,t.width=Math.floor(A*X),t.height=Math.floor(U*X),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(H)},this.setViewport=function(A,U,X,j){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,U,X,j),ve.viewport(S.copy(H).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy($)},this.setScissor=function(A,U,X,j){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,U,X,j),ve.scissor(R.copy($).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){ve.setScissorTest(Z=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,U=!0,X=!0){let j=0;if(A){let W=!1;if(M!==null){const ue=M.texture.format;W=ue===ex||ue===Jv||ue===Qv}if(W){const ue=M.texture.type,_e=ue===Rr||ue===pr||ue===tp||ue===us||ue===Kv||ue===Zv,Te=Ke.getClearColor(),Ae=Ke.getClearAlpha(),Oe=Te.r,Pe=Te.g,Le=Te.b;_e?(m[0]=Oe,m[1]=Pe,m[2]=Le,m[3]=Ae,O.clearBufferuiv(O.COLOR,0,m)):(v[0]=Oe,v[1]=Pe,v[2]=Le,v[3]=Ae,O.clearBufferiv(O.COLOR,0,v))}else j|=O.COLOR_BUFFER_BIT}U&&(j|=O.DEPTH_BUFFER_BIT),X&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",re,!1),fe.dispose(),we.dispose(),De.dispose(),E.dispose(),V.dispose(),te.dispose(),Ne.dispose(),Ye.dispose(),me.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Hn),Ve.removeEventListener("sessionend",tt),le&&(le.dispose(),le=null),tn.stop()};function Qe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=ct.autoReset,U=J.enabled,X=J.autoUpdate,j=J.needsUpdate,W=J.type;rt(),ct.autoReset=A,J.enabled=U,J.autoUpdate=X,J.needsUpdate=j,J.type=W}function re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){const U=A.target;U.removeEventListener("dispose",se),de(U)}function de(A){Me(A),De.remove(A)}function Me(A){const U=De.get(A).programs;U!==void 0&&(U.forEach(function(X){me.releaseProgram(X)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,X,j,W,ue){U===null&&(U=je);const _e=W.isMesh&&W.matrixWorld.determinant()<0,Te=Py(A,U,X,j,W);ve.setMaterial(j,_e);let Ae=X.index,Oe=1;if(j.wireframe===!0){if(Ae=Q.getWireframeAttribute(X),Ae===void 0)return;Oe=2}const Pe=X.drawRange,Le=X.attributes.position;let yt=Pe.start*Oe,Cn=(Pe.start+Pe.count)*Oe;ue!==null&&(yt=Math.max(yt,ue.start*Oe),Cn=Math.min(Cn,(ue.start+ue.count)*Oe)),Ae!==null?(yt=Math.max(yt,0),Cn=Math.min(Cn,Ae.count)):Le!=null&&(yt=Math.max(yt,0),Cn=Math.min(Cn,Le.count));const Lt=Cn-yt;if(Lt<0||Lt===1/0)return;Ne.setup(W,j,Te,X,Ae);let bi,ft=Re;if(Ae!==null&&(bi=ne.get(Ae),ft=ye,ft.setIndex(bi)),W.isMesh)j.wireframe===!0?(ve.setLineWidth(j.wireframeLinewidth*be()),ft.setMode(O.LINES)):ft.setMode(O.TRIANGLES);else if(W.isLine){let Fe=j.linewidth;Fe===void 0&&(Fe=1),ve.setLineWidth(Fe*be()),W.isLineSegments?ft.setMode(O.LINES):W.isLineLoop?ft.setMode(O.LINE_LOOP):ft.setMode(O.LINE_STRIP)}else W.isPoints?ft.setMode(O.POINTS):W.isSprite&&ft.setMode(O.TRIANGLES);if(W.isBatchedMesh)ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ft.renderInstances(yt,Lt,W.count);else if(X.isInstancedBufferGeometry){const Fe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Mc=Math.min(X.instanceCount,Fe);ft.renderInstances(yt,Lt,Mc)}else ft.render(yt,Lt)};function qe(A,U,X){A.transparent===!0&&A.side===Gi&&A.forceSinglePass===!1?(A.side=un,A.needsUpdate=!0,cl(A,U,X),A.side=Nr,A.needsUpdate=!0,cl(A,U,X),A.side=Gi):cl(A,U,X)}this.compile=function(A,U,X=null){X===null&&(X=A),p=we.get(X),p.init(),g.push(p),X.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==X&&A.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(x._useLegacyLights);const j=new Set;return A.traverse(function(W){const ue=W.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const Te=ue[_e];qe(Te,X,W),j.add(Te)}else qe(ue,X,W),j.add(ue)}),g.pop(),p=null,j},this.compileAsync=function(A,U,X=null){const j=this.compile(A,U,X);return new Promise(W=>{function ue(){if(j.forEach(function(_e){De.get(_e).currentProgram.isReady()&&j.delete(_e)}),j.size===0){W(A);return}setTimeout(ue,10)}Se.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let et=null;function Bt(A){et&&et(A)}function Hn(){tn.stop()}function tt(){tn.start()}const tn=new gx;tn.setAnimationLoop(Bt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(A){et=A,Ve.setAnimationLoop(A),A===null?tn.stop():tn.start()},Ve.addEventListener("sessionstart",Hn),Ve.addEventListener("sessionend",tt),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(U),U=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,U,M),p=we.get(A,g.length),p.init(),g.push(p),ge.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),xe.setFromProjectionMatrix(ge),K=this.localClippingEnabled,G=Ie.init(this.clippingPlanes,K),_=fe.get(A,f.length),_.init(),f.push(_),_i(A,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(N,B),this.info.render.frame++,G===!0&&Ie.beginShadows();const X=p.state.shadowsArray;if(J.render(X,A,U),G===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1)&&Ke.render(_,A),p.setupLights(x._useLegacyLights),U.isArrayCamera){const j=U.cameras;for(let W=0,ue=j.length;W<ue;W++){const _e=j[W];Pp(_,A,_e,_e.viewport)}}else Pp(_,A,U);M!==null&&(C.updateMultisampleRenderTarget(M),C.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(x,A,U),Ne.resetDefaultState(),b=-1,D=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function _i(A,U,X,j){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xe.intersectsSprite(A)){j&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const _e=te.update(A),Te=A.material;Te.visible&&_.push(A,_e,Te,X,pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xe.intersectsObject(A))){const _e=te.update(A),Te=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pe.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),pe.copy(_e.boundingSphere.center)),pe.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Te)){const Ae=_e.groups;for(let Oe=0,Pe=Ae.length;Oe<Pe;Oe++){const Le=Ae[Oe],yt=Te[Le.materialIndex];yt&&yt.visible&&_.push(A,_e,yt,X,pe.z,Le)}}else Te.visible&&_.push(A,_e,Te,X,pe.z,null)}}const ue=A.children;for(let _e=0,Te=ue.length;_e<Te;_e++)_i(ue[_e],U,X,j)}function Pp(A,U,X,j){const W=A.opaque,ue=A.transmissive,_e=A.transparent;p.setupLightsView(X),G===!0&&Ie.setGlobalState(x.clippingPlanes,X),ue.length>0&&Ry(W,ue,U,X),j&&ve.viewport(S.copy(j)),W.length>0&&ul(W,U,X),ue.length>0&&ul(ue,U,X),_e.length>0&&ul(_e,U,X),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ry(A,U,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ue=Ce.isWebGL2;le===null&&(le=new Ss(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Va:Rr,minFilter:ss,samples:ue?4:0})),x.getDrawingBufferSize(Ee),ue?le.setSize(Ee.x,Ee.y):le.setSize(Gh(Ee.x),Gh(Ee.y));const _e=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(Y),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Te=x.toneMapping;x.toneMapping=Cr,ul(A,X,j),C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le);let Ae=!1;for(let Oe=0,Pe=U.length;Oe<Pe;Oe++){const Le=U[Oe],yt=Le.object,Cn=Le.geometry,Lt=Le.material,bi=Le.group;if(Lt.side===Gi&&yt.layers.test(j.layers)){const ft=Lt.side;Lt.side=un,Lt.needsUpdate=!0,bp(yt,X,j,Cn,Lt,bi),Lt.side=ft,Lt.needsUpdate=!0,Ae=!0}}Ae===!0&&(C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le)),x.setRenderTarget(_e),x.setClearColor(Y,L),x.toneMapping=Te}function ul(A,U,X){const j=U.isScene===!0?U.overrideMaterial:null;for(let W=0,ue=A.length;W<ue;W++){const _e=A[W],Te=_e.object,Ae=_e.geometry,Oe=j===null?_e.material:j,Pe=_e.group;Te.layers.test(X.layers)&&bp(Te,U,X,Ae,Oe,Pe)}}function bp(A,U,X,j,W,ue){A.onBeforeRender(x,U,X,j,W,ue),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(x,U,X,j,A,ue),W.transparent===!0&&W.side===Gi&&W.forceSinglePass===!1?(W.side=un,W.needsUpdate=!0,x.renderBufferDirect(X,U,j,W,A,ue),W.side=Nr,W.needsUpdate=!0,x.renderBufferDirect(X,U,j,W,A,ue),W.side=Gi):x.renderBufferDirect(X,U,j,W,A,ue),A.onAfterRender(x,U,X,j,W,ue)}function cl(A,U,X){U.isScene!==!0&&(U=je);const j=De.get(A),W=p.state.lights,ue=p.state.shadowsArray,_e=W.state.version,Te=me.getParameters(A,W.state,ue,U,X),Ae=me.getProgramCacheKey(Te);let Oe=j.programs;j.environment=A.isMeshStandardMaterial?U.environment:null,j.fog=U.fog,j.envMap=(A.isMeshStandardMaterial?V:E).get(A.envMap||j.environment),Oe===void 0&&(A.addEventListener("dispose",se),Oe=new Map,j.programs=Oe);let Pe=Oe.get(Ae);if(Pe!==void 0){if(j.currentProgram===Pe&&j.lightsStateVersion===_e)return Dp(A,Te),Pe}else Te.uniforms=me.getUniforms(A),A.onBuild(X,Te,x),A.onBeforeCompile(Te,x),Pe=me.acquireProgram(Te,Ae),Oe.set(Ae,Pe),j.uniforms=Te.uniforms;const Le=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=Ie.uniform),Dp(A,Te),j.needsLights=Ly(A),j.lightsStateVersion=_e,j.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.directionalShadowMap.value=W.state.directionalShadowMap,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotShadowMap.value=W.state.spotShadowMap,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMap.value=W.state.pointShadowMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Pe,j.uniformsList=null,Pe}function Lp(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=cu.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Dp(A,U){const X=De.get(A);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Py(A,U,X,j,W){U.isScene!==!0&&(U=je),C.resetTextureUnits();const ue=U.fog,_e=j.isMeshStandardMaterial?U.environment:null,Te=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Zi,Ae=(j.isMeshStandardMaterial?V:E).get(j.envMap||_e),Oe=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pe=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!X.morphAttributes.position,yt=!!X.morphAttributes.normal,Cn=!!X.morphAttributes.color;let Lt=Cr;j.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Lt=x.toneMapping);const bi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ft=bi!==void 0?bi.length:0,Fe=De.get(j),Mc=p.state.lights;if(G===!0&&(K===!0||A!==D)){const Vn=A===D&&j.id===b;Ie.setState(j,A,Vn)}let gt=!1;j.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Mc.state.version||Fe.outputColorSpace!==Te||W.isBatchedMesh&&Fe.batching===!1||!W.isBatchedMesh&&Fe.batching===!0||W.isInstancedMesh&&Fe.instancing===!1||!W.isInstancedMesh&&Fe.instancing===!0||W.isSkinnedMesh&&Fe.skinning===!1||!W.isSkinnedMesh&&Fe.skinning===!0||W.isInstancedMesh&&Fe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Fe.instancingColor===!1&&W.instanceColor!==null||Fe.envMap!==Ae||j.fog===!0&&Fe.fog!==ue||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ie.numPlanes||Fe.numIntersection!==Ie.numIntersection)||Fe.vertexAlphas!==Oe||Fe.vertexTangents!==Pe||Fe.morphTargets!==Le||Fe.morphNormals!==yt||Fe.morphColors!==Cn||Fe.toneMapping!==Lt||Ce.isWebGL2===!0&&Fe.morphTargetsCount!==ft)&&(gt=!0):(gt=!0,Fe.__version=j.version);let Gr=Fe.currentProgram;gt===!0&&(Gr=cl(j,U,W));let Np=!1,Vo=!1,Ec=!1;const Xt=Gr.getUniforms(),Hr=Fe.uniforms;if(ve.useProgram(Gr.program)&&(Np=!0,Vo=!0,Ec=!0),j.id!==b&&(b=j.id,Vo=!0),Np||D!==A){Xt.setValue(O,"projectionMatrix",A.projectionMatrix),Xt.setValue(O,"viewMatrix",A.matrixWorldInverse);const Vn=Xt.map.cameraPosition;Vn!==void 0&&Vn.setValue(O,pe.setFromMatrixPosition(A.matrixWorld)),Ce.logarithmicDepthBuffer&&Xt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Xt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,Vo=!0,Ec=!0)}if(W.isSkinnedMesh){Xt.setOptional(O,W,"bindMatrix"),Xt.setOptional(O,W,"bindMatrixInverse");const Vn=W.skeleton;Vn&&(Ce.floatVertexTextures?(Vn.boneTexture===null&&Vn.computeBoneTexture(),Xt.setValue(O,"boneTexture",Vn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Xt.setOptional(O,W,"batchingTexture"),Xt.setValue(O,"batchingTexture",W._matricesTexture,C));const Tc=X.morphAttributes;if((Tc.position!==void 0||Tc.normal!==void 0||Tc.color!==void 0&&Ce.isWebGL2===!0)&&Ge.update(W,X,Gr),(Vo||Fe.receiveShadow!==W.receiveShadow)&&(Fe.receiveShadow=W.receiveShadow,Xt.setValue(O,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Hr.envMap.value=Ae,Hr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Vo&&(Xt.setValue(O,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&by(Hr,Ec),ue&&j.fog===!0&&ae.refreshFogUniforms(Hr,ue),ae.refreshMaterialUniforms(Hr,j,q,I,le),cu.upload(O,Lp(Fe),Hr,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(cu.upload(O,Lp(Fe),Hr,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Xt.setValue(O,"center",W.center),Xt.setValue(O,"modelViewMatrix",W.modelViewMatrix),Xt.setValue(O,"normalMatrix",W.normalMatrix),Xt.setValue(O,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Vn=j.uniformsGroups;for(let wc=0,Dy=Vn.length;wc<Dy;wc++)if(Ce.isWebGL2){const Up=Vn[wc];Ye.update(Up,Gr),Ye.bind(Up,Gr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gr}function by(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Ly(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,U,X){De.get(A.texture).__webglTexture=U,De.get(A.depthTexture).__webglTexture=X;const j=De.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){const X=De.get(A);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,X=0){M=A,w=U,T=X;let j=!0,W=null,ue=!1,_e=!1;if(A){const Ae=De.get(A);Ae.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(O.FRAMEBUFFER,null),j=!1):Ae.__webglFramebuffer===void 0?C.setupRenderTarget(A):Ae.__hasExternalTextures&&C.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture);const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Pe=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?W=Pe[U][X]:W=Pe[U],ue=!0):Ce.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?W=De.get(A).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[X]:W=Pe,S.copy(A.viewport),R.copy(A.scissor),F=A.scissorTest}else S.copy(H).multiplyScalar(q).floor(),R.copy($).multiplyScalar(q).floor(),F=Z;if(ve.bindFramebuffer(O.FRAMEBUFFER,W)&&Ce.drawBuffers&&j&&ve.drawBuffers(A,W),ve.viewport(S),ve.scissor(R),ve.setScissorTest(F),ue){const Ae=De.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,X)}else if(_e){const Ae=De.get(A.texture),Oe=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.__webglTexture,X||0,Oe)}b=-1},this.readRenderTargetPixels=function(A,U,X,j,W,ue,_e){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){ve.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Ae=A.texture,Oe=Ae.format,Pe=Ae.type;if(Oe!==fi&&he.convert(Oe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Pe===Va&&(Se.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Pe!==Rr&&he.convert(Pe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Hi&&(Ce.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-j&&X>=0&&X<=A.height-W&&O.readPixels(U,X,j,W,he.convert(Oe),he.convert(Pe),ue)}finally{const Ae=M!==null?De.get(M).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(A,U,X=0){const j=Math.pow(2,-X),W=Math.floor(U.image.width*j),ue=Math.floor(U.image.height*j);C.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,A.x,A.y,W,ue),ve.unbindTexture()},this.copyTextureToTexture=function(A,U,X,j=0){const W=U.image.width,ue=U.image.height,_e=he.convert(X.format),Te=he.convert(X.type);C.setTexture2D(X,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,j,A.x,A.y,W,ue,_e,Te,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,j,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,_e,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,j,A.x,A.y,_e,Te,U.image),j===0&&X.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(A,U,X,j,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=A.max.x-A.min.x+1,_e=A.max.y-A.min.y+1,Te=A.max.z-A.min.z+1,Ae=he.convert(j.format),Oe=he.convert(j.type);let Pe;if(j.isData3DTexture)C.setTexture3D(j,0),Pe=O.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)C.setTexture2DArray(j,0),Pe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const Le=O.getParameter(O.UNPACK_ROW_LENGTH),yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Cn=O.getParameter(O.UNPACK_SKIP_PIXELS),Lt=O.getParameter(O.UNPACK_SKIP_ROWS),bi=O.getParameter(O.UNPACK_SKIP_IMAGES),ft=X.isCompressedTexture?X.mipmaps[W]:X.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?O.texSubImage3D(Pe,W,U.x,U.y,U.z,ue,_e,Te,Ae,Oe,ft.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Pe,W,U.x,U.y,U.z,ue,_e,Te,Ae,ft.data)):O.texSubImage3D(Pe,W,U.x,U.y,U.z,ue,_e,Te,Ae,Oe,ft),O.pixelStorei(O.UNPACK_ROW_LENGTH,Le),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Cn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Lt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,bi),W===0&&j.generateMipmaps&&O.generateMipmap(Pe),ve.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),ve.unbindTexture()},this.resetState=function(){w=0,T=0,M=null,ve.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ip?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===pc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ht?fs:nx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fs?Ht:Zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class fR extends op{}fR.prototype.isWebGL1Renderer=!0;class ap{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new ap(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wx extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ax extends As{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hg=new At,Vh=new lx,$l=new mc,Kl=new z;class hR extends Ft{constructor(e=new mi,t=new Ax){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(r),$l.radius+=s,e.ray.intersectsSphere($l)===!1)return;hg.copy(r).invert(),Vh.copy(e.ray).applyMatrix4(hg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=d,_=m;v<_;v++){const p=u.getX(v);Kl.fromBufferAttribute(h,p),dg(Kl,p,l,r,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=d,_=m;v<_;v++)Kl.fromBufferAttribute(h,v),dg(Kl,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function dg(n,e,t,i,r,s,o){const a=Vh.distanceSqToPoint(n);if(a<t){const l=new z;Vh.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class vc extends mi{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],h=[],d=[],m=[];let v=0;const _=[],p=i/2;let f=0;g(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new Sn(h,3)),this.setAttribute("normal",new Sn(d,3)),this.setAttribute("uv",new Sn(m,2));function g(){const y=new z,w=new z;let T=0;const M=(t-e)/i;for(let b=0;b<=s;b++){const D=[],S=b/s,R=S*(t-e)+e;for(let F=0;F<=r;F++){const Y=F/r,L=Y*l+a,k=Math.sin(L),I=Math.cos(L);w.x=R*k,w.y=-S*i+p,w.z=R*I,h.push(w.x,w.y,w.z),y.set(k,M,I).normalize(),d.push(y.x,y.y,y.z),m.push(Y,1-S),D.push(v++)}_.push(D)}for(let b=0;b<r;b++)for(let D=0;D<s;D++){const S=_[D][b],R=_[D+1][b],F=_[D+1][b+1],Y=_[D][b+1];c.push(S,R,Y),c.push(R,F,Y),T+=6}u.addGroup(f,T,0),f+=T}function x(y){const w=v,T=new Be,M=new z;let b=0;const D=y===!0?e:t,S=y===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,p*S,0),d.push(0,S,0),m.push(.5,.5),v++;const R=v;for(let F=0;F<=r;F++){const L=F/r*l+a,k=Math.cos(L),I=Math.sin(L);M.x=D*I,M.y=p*S,M.z=D*k,h.push(M.x,M.y,M.z),d.push(0,S,0),T.x=k*.5+.5,T.y=I*.5*S+.5,m.push(T.x,T.y),v++}for(let F=0;F<r;F++){const Y=w+F,L=R+F;y===!0?c.push(L,L+1,Y):c.push(L+1,L,Y),b+=3}u.addGroup(f,b,y===!0?1:2),f+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lp extends vc{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new lp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sa extends mi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new z,d=new z,m=[],v=[],_=[],p=[];for(let f=0;f<=i;f++){const g=[],x=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const T=w/t;h.x=-e*Math.cos(r+T*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+x*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(T+y,1-x),g.push(u++)}c.push(g)}for(let f=0;f<i;f++)for(let g=0;g<t;g++){const x=c[f][g+1],y=c[f][g],w=c[f+1][g],T=c[f+1][g+1];(f!==0||o>0)&&m.push(x,y,T),(f!==i-1||l<Math.PI)&&m.push(y,w,T)}this.setIndex(m),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dR extends As{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=np,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ma extends As{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=np,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const pg={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class pR{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=u.length;h<d;h+=2){const m=u[h],v=u[h+1];if(m.global&&(m.lastIndex=0),m.test(c))return v}return null}}}const mR=new pR;class up{constructor(e){this.manager=e!==void 0?e:mR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}up.DEFAULT_MATERIAL_NAME="__DEFAULT";class _R extends up{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Wa("img");function l(){c(),pg.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(h){c(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class gR extends up{constructor(e){super(e)}load(e,t,i,r){const s=new cn,o=new _R(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class cp extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class vR extends cp{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bf=new At,mg=new z,_g=new z;class xR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;mg.setFromMatrixPosition(e.matrixWorld),t.position.copy(mg),_g.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_g),t.updateMatrixWorld(),bf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yR extends xR{constructor(){super(new vx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cx extends cp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new yR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rx extends cp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);function ki(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Px(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Do={duration:.5,overwrite:!1,delay:0},fp,Qt,ut,Kn=1e8,nt=1/Kn,Wh=Math.PI*2,SR=Wh/4,MR=0,bx=Math.sqrt,ER=Math.cos,TR=Math.sin,kt=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},Qi=function(e){return typeof e=="number"},hp=function(e){return typeof e>"u"},Pi=function(e){return typeof e=="object"},Mn=function(e){return e!==!1},dp=function(){return typeof window<"u"},Zl=function(e){return xt(e)||kt(e)},Lx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,Xh=/(?:-?\.?\d|\.)+/gi,Dx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,oo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nx=/[+-]=-?[.\d]+/,Ux=/[^,'"\[\]\s]+/gi,wR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dt,xi,jh,pp,zn={},Vu={},Ix,Ox=function(e){return(Vu=Ms(e,zn))&&An},mp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xa=function(e,t){return!t&&console.warn(e)},Fx=function(e,t){return e&&(zn[e]=t)&&Vu&&(Vu[e]=t)||zn},ja=function(){return 0},AR={suppressEvents:!0,isStart:!0,kill:!1},fu={suppressEvents:!0,kill:!1},CR={suppressEvents:!0},_p={},Pr=[],Yh={},kx,Ln={},Df={},gg=30,hu=[],gp="",vp=function(e){var t=e[0],i,r;if(Pi(t)||xt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=hu.length;r--&&!hu[r].targetTest(t););i=hu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new ly(e[r],i)))||e.splice(r,1);return e},hs=function(e){return e._gsap||vp(Zn(e))[0]._gsap},zx=function(e,t,i){return(i=e[t])&&xt(i)?e[t]():hp(i)&&e.getAttribute&&e.getAttribute(t)||i},En=function(e,t){return(e=e.split(",")).forEach(t)||e},St=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},vo=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},RR=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Wu=function(){var e=Pr.length,t=Pr.slice(0),i,r;for(Yh={},Pr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Bx=function(e,t,i,r){Pr.length&&!Qt&&Wu(),e.render(t,i,Qt&&t<0&&(e._initted||e._startAt)),Pr.length&&!Qt&&Wu()},Gx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ux).length<2?t:kt(e)?e.trim():e},Hx=function(e){return e},ni=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},PR=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ms=function(e,t){for(var i in t)e[i]=t[i];return e},vg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Pi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Xu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ea=function(e){var t=e.parent||dt,i=e.keyframes?PR(Jt(e.keyframes)):ni;if(Mn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},bR=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Vx=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},xc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ir=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ds=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},LR=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qh=function(e,t,i,r){return e._startAt&&(Qt?e._startAt.revert(fu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},DR=function n(e){return!e||e._ts&&n(e.parent)},xg=function(e){return e._repeat?No(e._tTime,e=e.duration()+e._rDelay)*e:0},No=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},ju=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yc=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||nt)||0))},Sc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ut(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yc(e),i._dirty||ds(i,e)),e},Wx=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ju(e.rawTime(),t),(!t._dur||ll(0,t.totalDuration(),i)-t._tTime>nt)&&t.render(i,!0)),ds(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-nt}},Ei=function(e,t,i,r){return t.parent&&Ir(t),t._start=Ut((Qi(i)?i:i||e!==dt?Xn(e,i,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Vx(e,t,"_first","_last",e._sort?"_start":0),$h(t)||(e._recent=t),r||Wx(e,t),e._ts<0&&Sc(e,e._tTime),e},Xx=function(e,t){return(zn.ScrollTrigger||mp("scrollTrigger",t))&&zn.ScrollTrigger.create(t,e)},jx=function(e,t,i,r,s){if(yp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&kx!==Nn.frame)return Pr.push(e),e._lazy=[s,r],1},NR=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},$h=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},UR=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&NR(e)&&!(!e._initted&&$h(e))||(e._ts<0||e._dp._ts<0)&&!$h(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=ll(0,e._tDur,t),c=No(l,a),e._yoyo&&c&1&&(o=1-o),c!==No(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Qt||r||e._zTime===nt||!t&&e._zTime){if(!e._initted&&jx(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?nt:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&qh(e,t,i,!0),e._onUpdate&&!i&&In(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&In(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ir(e,1),!i&&!Qt&&(In(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},IR=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Uo=function(e,t,i,r){var s=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ut(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Sc(e,e._tTime=e._tDur*a),e.parent&&yc(e),i||ds(e.parent,e),e},yg=function(e){return e instanceof on?ds(e):Uo(e,e._dur)},OR={_start:0,endTime:ja,totalDuration:ja},Xn=function n(e,t,i){var r=e.labels,s=e._recent||OR,o=e.duration()>=Kn?s.endTime(!1):e._dur,a,l,u;return kt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Jt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ta=function(e,t,i){var r=Qi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;o.immediateRender=Mn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Tt(t[0],o,t[s+1])},Br=function(e,t){return e||e===0?t(e):t},ll=function(e,t,i){return i<e?e:i>t?t:i},Zt=function(e,t){return!kt(e)||!(t=wR.exec(e))?"":t[1]},FR=function(e,t,i){return Br(i,function(r){return ll(e,t,r)})},Kh=[].slice,Yx=function(e,t){return e&&Pi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pi(e[0]))&&!e.nodeType&&e!==xi},kR=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return kt(r)&&!t||Yx(r,1)?(s=i).push.apply(s,Zn(r)):i.push(r)})||i},Zn=function(e,t,i){return ut&&!t&&ut.selector?ut.selector(e):kt(e)&&!i&&(jh||!Io())?Kh.call((t||pp).querySelectorAll(e),0):Jt(e)?kR(e,i):Yx(e)?Kh.call(e,0):e?[e]:[]},Zh=function(e){return e=Zn(e)[0]||Xa("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Zn(t,i.querySelectorAll?i:i===e?Xa("Invalid scope")||pp.createElement("div"):e)}},qx=function(e){return e.sort(function(){return .5-Math.random()})},$x=function(e){if(xt(e))return e;var t=Pi(e)?e:{each:e},i=ps(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,h=r;return kt(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],h=r[1]),function(d,m,v){var _=(v||t).length,p=o[_],f,g,x,y,w,T,M,b,D;if(!p){if(D=t.grid==="auto"?0:(t.grid||[1,Kn])[1],!D){for(M=-Kn;M<(M=v[D++].getBoundingClientRect().left)&&D<_;);D<_&&D--}for(p=o[_]=[],f=l?Math.min(D,_)*c-.5:r%D,g=D===Kn?0:l?_*h/D-.5:r/D|0,M=0,b=Kn,T=0;T<_;T++)x=T%D-f,y=g-(T/D|0),p[T]=w=u?Math.abs(u==="y"?y:x):bx(x*x+y*y),w>M&&(M=w),w<b&&(b=w);r==="random"&&qx(p),p.max=M-b,p.min=b,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(D>_?_-1:u?u==="y"?_/D:D:Math.max(D,_/D))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Zt(t.amount||t.each)||0,i=i&&_<0?sy(i):i}return _=(p[d]-p.min)/p.max||0,Ut(p.b+(i?i(_):_)*p.v)+p.u}},Qh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ut(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Qi(i)?0:Zt(i))}},Kx=function(e,t){var i=Jt(e),r,s;return!i&&Pi(e)&&(r=i=e.radius||Kn,e.values?(e=Zn(e.values),(s=!Qi(e[0]))&&(r*=r)):e=Qh(e.increment)),Br(t,i?xt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Kn,c=0,h=e.length,d,m;h--;)s?(d=e[h].x-a,m=e[h].y-l,d=d*d+m*m):d=Math.abs(e[h]-a),d<u&&(u=d,c=h);return c=!r||u<=r?e[c]:o,s||c===o||Qi(o)?c:c+Zt(o)}:Qh(e))},Zx=function(e,t,i,r){return Br(Jt(e)?!t:i===!0?!!(i=0):!r,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},zR=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},BR=function(e,t){return function(i){return e(parseFloat(i))+(t||Zt(i))}},GR=function(e,t,i){return Jx(e,t,0,1,i)},Qx=function(e,t,i){return Br(i,function(r){return e[~~t(r)]})},HR=function n(e,t,i){var r=t-e;return Jt(e)?Qx(e,n(0,e.length),t):Br(i,function(s){return(r+(s-e)%r)%r+e})},VR=function n(e,t,i){var r=t-e,s=r*2;return Jt(e)?Qx(e,n(0,e.length-1),t):Br(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ya=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Ux:Xh),i+=e.substr(t,r-t)+Zx(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Jx=function(e,t,i,r,s){var o=t-e,a=r-i;return Br(s,function(l){return i+((l-e)/o*a||0)})},WR=function n(e,t,i,r){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=kt(e),a={},l,u,c,h,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(c=[],h=e.length,d=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(v){v*=h;var _=Math.min(d,~~v);return c[_](v-_)},i=t}else r||(e=Ms(Jt(e)?[]:{},e));if(!c){for(l in t)xp.call(a,e,l,"get",t[l]);s=function(v){return Ep(v,a)||(o?e.p:e)}}}return Br(i,s)},Sg=function(e,t,i){var r=e.labels,s=Kn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},In=function(e,t,i){var r=e.vars,s=r[t],o=ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Pr.length&&Wu(),a&&(ut=a),c=l?s.apply(u,l):s.call(u),ut=o,c},ca=function(e){return Ir(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qt),e.progress()<1&&In(e,"onInterrupt"),e},ao,ey=[],ty=function(e){if(e)if(e=!e.name&&e.default||e,dp()||e.headless){var t=e.name,i=xt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ja,render:Ep,add:xp,kill:oP,modifier:sP,rawVars:0},o={targetTest:0,get:0,getSetter:Mp,aliases:{},register:0};if(Io(),e!==r){if(Ln[t])return;ni(r,ni(Xu(e,s),o)),Ms(r.prototype,Ms(s,Xu(e,o))),Ln[r.prop=t]=r,e.targetTest&&(hu.push(r),_p[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Fx(t,r),e.register&&e.register(An,r,Tn)}else ey.push(e)},Je=255,fa={aqua:[0,Je,Je],lime:[0,Je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Je],navy:[0,0,128],white:[Je,Je,Je],olive:[128,128,0],yellow:[Je,Je,0],orange:[Je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Je,0,0],pink:[Je,192,203],cyan:[0,Je,Je],transparent:[Je,Je,Je,0]},Nf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Je+.5|0},ny=function(e,t,i){var r=e?Qi(e)?[e>>16,e>>8&Je,e&Je]:0:fa.black,s,o,a,l,u,c,h,d,m,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fa[e])r=fa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Je,r&Je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Je,e&Je]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Xh),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Nf(l+1/3,s,o),r[1]=Nf(l,s,o),r[2]=Nf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Dx),i&&r.length<4&&(r[3]=1),r}else r=e.match(Xh)||fa.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/Je,o=r[1]/Je,a=r[2]/Je,h=Math.max(s,o,a),d=Math.min(s,o,a),c=(h+d)/2,h===d?l=u=0:(m=h-d,u=c>.5?m/(2-h-d):m/(h+d),l=h===s?(o-a)/m+(o<a?6:0):h===o?(a-s)/m+2:(s-o)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},iy=function(e){var t=[],i=[],r=-1;return e.split(br).forEach(function(s){var o=s.match(oo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Mg=function(e,t,i){var r="",s=(e+r).match(br),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!s)return e;if(s=s.map(function(d){return(d=ny(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=iy(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(br,"1").split(oo),h=u.length-1;a<h;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(br),h=u.length-1;a<h;a++)r+=u[a]+s[a];return r+u[h]},br=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fa)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),XR=/hsl[a]?\(/,ry=function(e){var t=e.join(" "),i;if(br.lastIndex=0,br.test(t))return i=XR.test(t),e[1]=Mg(e[1],i),e[0]=Mg(e[0],i,iy(e[1])),!0},qa,Nn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,h,d,m,v=function _(p){var f=n()-r,g=p===!0,x,y,w,T;if((f>e||f<0)&&(i+=f-t),r+=f,w=r-i,x=w-o,(x>0||g)&&(T=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,o+=x+(x>=s?4:s-x),y=1),g||(l=u(_)),y)for(m=0;m<a.length;m++)a[m](w,d,T,p)};return h={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Ix&&(!jh&&dp()&&(xi=jh=window,pp=xi.document||{},zn.gsap=An,(xi.gsapVersions||(xi.gsapVersions=[])).push(An.version),Ox(Vu||xi.GreenSockGlobals||!xi.gsap&&xi||{}),ey.forEach(ty)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(p){return setTimeout(p,o-h.time*1e3+1|0)},qa=1,v(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),qa=0,u=ja},lagSmoothing:function(p,f){e=p||1/0,t=Math.min(f||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,f,g){var x=f?function(y,w,T,M){p(y,w,T,M),h.remove(x)}:p;return h.remove(p),a[g?"unshift":"push"](x),Io(),x},remove:function(p,f){~(f=a.indexOf(p))&&a.splice(f,1)&&m>=f&&m--},_listeners:a},h}(),Io=function(){return!qa&&Nn.wake()},We={},jR=/^[\d.\-M][\d.\-,\s]/,YR=/["']/g,qR=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(YR,"").trim():+u,r=l.substr(a+1).trim();return t},$R=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},KR=function(e){var t=(e+"").split("("),i=We[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[qR(t[1])]:$R(e).split(",").map(Gx)):We._CE&&jR.test(e)?We._CE("",e):i},sy=function(e){return function(t){return 1-e(1-t)}},oy=function n(e,t){for(var i=e._first,r;i;)i instanceof on?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},ps=function(e,t){return e&&(xt(e)?e:We[e]||KR(e))||t},Cs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return En(e,function(a){We[a]=zn[a]=s,We[o=a.toLowerCase()]=i;for(var l in s)We[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=We[a+"."+l]=s[l]}),s},ay=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Uf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Wh*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*TR((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:ay(a);return s=Wh/s,l.config=function(u,c){return n(e,u,c)},l},If=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:ay(i);return r.config=function(s){return n(e,s)},r};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Cs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;Cs("Elastic",Uf("in"),Uf("out"),Uf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Cs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Cs("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Cs("Circ",function(n){return-(bx(1-n*n)-1)});Cs("Sine",function(n){return n===1?1:-ER(n*SR)+1});Cs("Back",If("in"),If("out"),If());We.SteppedEase=We.steps=zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-nt;return function(a){return((r*ll(0,o,a)|0)+s)*i}}};Do.ease=We["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return gp+=n+","+n+"Params,"});var ly=function(e,t){this.id=MR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:zx,this.set=t?t.getSetter:Mp},$a=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Uo(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),qa||Nn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Uo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Io(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Sc(this,i),!s._dp||s.parent||Wx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ei(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===nt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Bx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+xg(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+xg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?No(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?ju(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-nt?0:this._rts,this.totalTime(ll(-Math.abs(this._delay),this._tDur,s),r!==!1),yc(this),LR(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Io(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nt&&(this._tTime-=nt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ei(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Mn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ju(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=CR);var r=Qt;return Qt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Qt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,yg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,yg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Xn(this,i),Mn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Mn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-nt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=xt(i)?i:Hx,a=function(){var u=r.then;r.then=null,xt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){ca(this)},n}();ni($a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});var on=function(n){Px(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Mn(i.sortChildren),dt&&Ei(i.parent||dt,ki(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Xx(ki(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ta(0,arguments,this),this},t.from=function(r,s,o){return Ta(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ta(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ea(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Tt(r,s,Xn(this,o),1),this},t.call=function(r,s,o){return Ei(this,Tt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Tt(r,o,Xn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ea(o).immediateRender=Mn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,h){return a.startAt=o,Ea(a).immediateRender=Mn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ut(r),h=this._zTime<0!=r<0&&(this._initted||!u),d,m,v,_,p,f,g,x,y,w,T,M;if(this!==dt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,y=this._start,x=this._ts,f=!x,h&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,p=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(d=Ut(c%p),c===l?(_=this._repeat,d=u):(_=~~(c/p),_&&_===c/p&&(d=u,_--),d>u&&(d=u)),w=No(this._tTime,p),!a&&this._tTime&&w!==_&&this._tTime-w*p-this._dur<=0&&(w=_),T&&_&1&&(d=u-d,M=1),_!==w&&!this._lock){var b=T&&w&1,D=b===(T&&_&1);if(_<w&&(b=!b),a=b?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Ut(_*p)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,D&&(this._lock=2,a=b?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;oy(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=IR(this,Ut(a),Ut(d)),g&&(c-=d-(d=g._start))),this._tTime=c,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!_&&(In(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(m=this._first;m;){if(v=m._next,(m._act||d>=m._start)&&m._ts&&g!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,o),d!==this._time||!this._ts&&!f){g=0,v&&(c+=this._zTime=-nt);break}}m=v}else{m=this._last;for(var S=r<0?r:d;m;){if(v=m._prev,(m._act||S<=m._end)&&m._ts&&g!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(S-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(S-m._start)*m._ts,s,o||Qt&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!f){g=0,v&&(c+=this._zTime=S?-nt:nt);break}}m=v}}if(g&&!s&&(this.pause(),g.render(d>=a?0:-nt)._zTime=d>=a?1:-1,this._ts))return this._start=y,yc(this),this.render(r,s,o);this._onUpdate&&!s&&In(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ir(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(In(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Qi(s)||(s=Xn(this,s,r)),!(r instanceof $a)){if(Jt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(kt(r))return this.addLabel(r,s);if(xt(r))r=Tt.delayedCall(0,r);else return this}return this!==r?Ei(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Kn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Tt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return kt(r)?this.removeLabel(r):xt(r)?this.killTweensOf(r):(xc(this,r),r===this._recent&&(this._recent=this._last),ds(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(Nn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Xn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Tt.delayedCall(0,s||ja,o);return a.data="isPause",this._hasPause=1,Ei(this,a,Xn(this,r))},t.removePause=function(r){var s=this._first;for(r=Xn(this,r);s;)s._start===r&&s.data==="isPause"&&Ir(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)mr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Zn(r),l=this._first,u=Qi(s),c;l;)l instanceof Tt?RR(l._targets,a)&&(u?(!mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Xn(o,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,d=l.immediateRender,m,v=Tt.to(o,ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||nt,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());v._dur!==p&&Uo(v,p,0,1).render(v._time,!0,!0),m=1}c&&c.apply(v,h||[])}},s));return d?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,ni({startAt:{time:Xn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Sg(this,Xn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Sg(this,Xn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+nt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return ds(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ds(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Kn,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ei(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Uo(o,o===dt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(dt._ts&&(Bx(dt,ju(r,dt)),kx=Nn.frame),Nn.frame>=gg){gg+=Fn.autoSleep||120;var s=dt._first;if((!s||!s._ts)&&Fn.autoSleep&&Nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Nn.sleep()}}},e}($a);ni(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var ZR=function(e,t,i,r,s,o,a){var l=new Tn(this._pt,e,t,0,1,py,null,s),u=0,c=0,h,d,m,v,_,p,f,g;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Ya(r)),o&&(g=[i,r],o(g,e,t),i=g[0],r=g[1]),d=i.match(Lf)||[];h=Lf.exec(r);)v=h[0],_=r.substring(u,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),v!==d[c++]&&(p=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:p,c:v.charAt(1)==="="?vo(p,v)-p:parseFloat(v)-p,m:m&&m<4?Math.round:0},u=Lf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Nx.test(r)||f)&&(l.e=0),this._pt=l,l},xp=function(e,t,i,r,s,o,a,l,u,c){xt(r)&&(r=r(s||0,e,o));var h=e[t],d=i!=="get"?i:xt(h)?u?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,m=xt(h)?u?nP:hy:Sp,v;if(kt(r)&&(~r.indexOf("random(")&&(r=Ya(r)),r.charAt(1)==="="&&(v=vo(d,r)+(Zt(d)||0),(v||v===0)&&(r=v))),!c||d!==r||Jh)return!isNaN(d*r)&&r!==""?(v=new Tn(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?rP:dy,0,m),u&&(v.fp=u),a&&v.modifier(a,this,e),this._pt=v):(!h&&!(t in e)&&mp(t,r),ZR.call(this,e,t,d,r,m,l||Fn.stringFilter,u))},QR=function(e,t,i,r,s){if(xt(e)&&(e=wa(e,s,t,i,r)),!Pi(e)||e.style&&e.nodeType||Jt(e)||Lx(e))return kt(e)?wa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=wa(e[a],s,t,i,r);return o},uy=function(e,t,i,r,s,o){var a,l,u,c;if(Ln[e]&&(a=new Ln[e]).init(s,a.rawVars?t[e]:QR(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Tn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ao))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},mr,Jh,yp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,h=r.yoyoEase,d=r.keyframes,m=r.autoRevert,v=e._dur,_=e._startAt,p=e._targets,f=e.parent,g=f&&f.data==="nested"?f.vars.targets:p,x=e._overwrite==="auto"&&!fp,y=e.timeline,w,T,M,b,D,S,R,F,Y,L,k,I,q;if(y&&(!d||!s)&&(s="none"),e._ease=ps(s,Do.ease),e._yEase=h?sy(ps(h===!0?s:h,Do.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!r.runBackwards,!y||d&&!r.stagger){if(F=p[0]?hs(p[0]).harness:0,I=F&&r[F.prop],w=Xu(r,_p),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!m?_.render(-1,!0):_.revert(c&&v?fu:AR),_._lazy=0),o){if(Ir(e._startAt=Tt.set(p,ni({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&Mn(l),startAt:null,delay:0,onUpdate:u&&function(){return In(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!a&&!m)&&e._startAt.revert(fu),a&&v&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&v&&!_){if(t&&(a=!1),M=ni({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Mn(l),immediateRender:a,stagger:0,parent:f},w),I&&(M[F.prop]=I),Ir(e._startAt=Tt.set(p,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert(fu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,nt,nt);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&Mn(l)||l&&!v,T=0;T<p.length;T++){if(D=p[T],R=D._gsap||vp(p)[T]._gsap,e._ptLookup[T]=L={},Yh[R.id]&&Pr.length&&Wu(),k=g===p?T:g.indexOf(D),F&&(Y=new F).init(D,I||w,e,k,g)!==!1&&(e._pt=b=new Tn(e._pt,D,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(N){L[N]=b}),Y.priority&&(S=1)),!F||I)for(M in w)Ln[M]&&(Y=uy(M,w,e,k,D,g))?Y.priority&&(S=1):L[M]=b=xp.call(e,D,M,"get",w[M],k,g,0,r.stringFilter);e._op&&e._op[T]&&e.kill(D,e._op[T]),x&&e._pt&&(mr=e,dt.killTweensOf(D,L,e.globalTime(t)),q=!e.parent,mr=0),e._pt&&l&&(Yh[R.id]=1)}S&&my(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&y.render(Kn,!0,!0)},JR=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,d,m;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,m=e._targets.length;m--;){if(c=d[m][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Jh=1,e.vars[t]="+=0",yp(e,a),Jh=0,l?Xa(t+" not eligible for reset"):1;u.push(c)}for(m=u.length;m--;)h=u[m],c=h._pt||h,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=St(i)+Zt(h.e)),h.b&&(h.b=c.s+Zt(h.b))},eP=function(e,t){var i=e[0]?hs(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ms({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},tP=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Jt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},wa=function(e,t,i,r,s){return xt(e)?e.call(t,i,r,s):kt(e)&&~e.indexOf("random(")?Ya(e):e},cy=gp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",fy={};En(cy+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return fy[n]=1});var Tt=function(n){Px(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ea(r))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,v=l.keyframes,_=l.defaults,p=l.scrollTrigger,f=l.yoyoEase,g=r.parent||dt,x=(Jt(i)||Lx(i)?Qi(i[0]):"length"in r)?[i]:Zn(i),y,w,T,M,b,D,S,R;if(a._targets=x.length?vp(x):Xa("GSAP target "+i+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||d||Zl(u)||Zl(c)){if(r=a.vars,y=a.timeline=new on({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:x}),y.kill(),y.parent=y._dp=ki(a),y._start=0,d||Zl(u)||Zl(c)){if(M=x.length,S=d&&$x(d),Pi(d))for(b in d)~cy.indexOf(b)&&(R||(R={}),R[b]=d[b]);for(w=0;w<M;w++)T=Xu(r,fy),T.stagger=0,f&&(T.yoyoEase=f),R&&Ms(T,R),D=x[w],T.duration=+wa(u,ki(a),w,D,x),T.delay=(+wa(c,ki(a),w,D,x)||0)-a._delay,!d&&M===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),y.to(D,T,S?S(w,D,x):0),y._ease=We.none;y.duration()?u=c=0:a.timeline=0}else if(v){Ea(ni(y.vars.defaults,{ease:"none"})),y._ease=ps(v.ease||r.ease||"none");var F=0,Y,L,k;if(Jt(v))v.forEach(function(I){return y.to(x,I,">")}),y.duration();else{T={};for(b in v)b==="ease"||b==="easeEach"||tP(b,v[b],T,v.easeEach);for(b in T)for(Y=T[b].sort(function(I,q){return I.t-q.t}),F=0,w=0;w<Y.length;w++)L=Y[w],k={ease:L.e,duration:(L.t-(w?Y[w-1].t:0))/100*u},k[b]=L.v,y.to(x,k,F),F+=k.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return m===!0&&!fp&&(mr=ki(a),dt.killTweensOf(x),mr=0),Ei(g,ki(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!u&&!v&&a._start===Ut(g._time)&&Mn(h)&&DR(ki(a))&&g.data!=="nested")&&(a._tTime=-nt,a.render(Math.max(0,-c)||0)),p&&Xx(ki(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-nt&&!c?l:r<nt?0:r,d,m,v,_,p,f,g,x,y;if(!u)UR(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(d=h,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(d=Ut(h%_),h===l?(v=this._repeat,d=u):(v=~~(h/_),v&&v===Ut(h/_)&&(d=u,v--),d>u&&(d=u)),f=this._yoyo&&v&1,f&&(y=this._yEase,d=u-d),p=No(this._tTime,_),d===a&&!o&&this._initted&&v===p)return this._tTime=h,this;v!==p&&(x&&this._yEase&&oy(x,f),this.vars.repeatRefresh&&!f&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Ut(_*v),!0).invalidate()._lock=0))}if(!this._initted){if(jx(this,c?r:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==p))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=g=(y||this._ease)(d/u),this._from&&(this.ratio=g=1-g),d&&!a&&!s&&!v&&(In(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(g,m.d),m=m._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&qh(this,r,s,o),In(this,"onUpdate")),this._repeat&&v!==p&&this.vars.onRepeat&&!s&&this.parent&&In(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&qh(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ir(this,1),!s&&!(c&&!a)&&(h||a||f)&&(In(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){qa||Nn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||yp(this,u),c=this._ease(u/this._dur),JR(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Sc(this,0),this.parent||Vx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ca(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,mr&&mr.vars.overwrite!==!0)._first||ca(this),this.parent&&o!==this.timeline.totalDuration()&&Uo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Zn(r):a,u=this._ptLookup,c=this._pt,h,d,m,v,_,p,f;if((!s||s==="all")&&bR(a,l))return s==="all"&&(this._pt=0),ca(this);for(h=this._op=this._op||[],s!=="all"&&(kt(s)&&(_={},En(s,function(g){return _[g]=1}),s=_),s=eP(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){d=u[f],s==="all"?(h[f]=s,v=d,m={}):(m=h[f]=h[f]||{},v=s);for(_ in v)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&xc(this,p,"_pt"),delete d[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&c&&ca(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ta(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ta(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return dt.killTweensOf(r,s,o)},e}($a);ni(Tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(n){Tt[n]=function(){var e=new on,t=Kh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Sp=function(e,t,i){return e[t]=i},hy=function(e,t,i){return e[t](i)},nP=function(e,t,i,r){return e[t](r.fp,i)},iP=function(e,t,i){return e.setAttribute(t,i)},Mp=function(e,t){return xt(e[t])?hy:hp(e[t])&&e.setAttribute?iP:Sp},dy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},rP=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},py=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Ep=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},sP=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},oP=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?xc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},aP=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},my=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Tn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||dy,this.d=l||this,this.set=u||Sp,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=aP,this.m=i,this.mt=s,this.tween=r},n}();En(gp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return _p[n]=1});zn.TweenMax=zn.TweenLite=Tt;zn.TimelineLite=zn.TimelineMax=on;dt=new on({sortChildren:!1,defaults:Do,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=ry;var ms=[],du={},lP=[],Eg=0,uP=0,Of=function(e){return(du[e]||lP).map(function(t){return t()})},ed=function(){var e=Date.now(),t=[];e-Eg>2&&(Of("matchMediaInit"),ms.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=xi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Of("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Eg=e,Of("matchMedia"))},_y=function(){function n(t,i){this.selector=i&&Zh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=uP++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){xt(i)&&(s=r,r=i,i=xt);var o=this,a=function(){var u=ut,c=o.selector,h;return u&&u!==o&&u.data.push(o),s&&(o.selector=Zh(s)),ut=o,h=r.apply(o,arguments),xt(h)&&o._r.push(h),ut=u,o.selector=c,o.isReverted=!1,h};return o.last=a,i===xt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=ut;ut=null,i(this),ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Tt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof on?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Tt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ms.length;o--;)ms[o].id===this.id&&ms.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),cP=function(){function n(t){this.contexts=[],this.scope=t,ut&&ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Pi(i)||(i={matches:i});var o=new _y(0,s||this.scope),a=o.conditions={},l,u,c;ut&&!o.selector&&(o.selector=ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=xi.matchMedia(i[u]),l&&(ms.indexOf(o)<0&&ms.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(ed):l.addEventListener("change",ed)));return c&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Yu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return ty(r)})},timeline:function(e){return new on(e)},getTweensOf:function(e,t){return dt.getTweensOf(e,t)},getProperty:function(e,t,i,r){kt(e)&&(e=Zn(e)[0]);var s=hs(e||{}).get,o=i?Hx:Gx;return i==="native"&&(i=""),e&&(t?o((Ln[t]&&Ln[t].get||s)(e,t,i,r)):function(a,l,u){return o((Ln[a]&&Ln[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Zn(e),e.length>1){var r=e.map(function(c){return An.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var o=Ln[t],a=hs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;ao._pt=0,h.init(e,i?c+i:c,ao,0,[e]),h.render(1,h),ao._pt&&Ep(1,ao)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=An.to(e,Ms((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ps(e.ease,Do.ease)),vg(Do,e||{})},config:function(e){return vg(Fn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ln[a]&&!zn[a]&&Xa(t+" effect requires "+a+" plugin.")}),Df[t]=function(a,l,u){return i(Zn(a),ni(l||{},s),u)},o&&(on.prototype[t]=function(a,l,u){return this.add(Df[t](a,Pi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){We[e]=ps(t)},parseEase:function(e,t){return arguments.length?ps(e,t):We},getById:function(e){return dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new on(e),r,s;for(i.smoothChildTiming=Mn(e.smoothChildTiming),dt.remove(i),i._dp=0,i._time=i._tTime=dt._time,r=dt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Tt&&r.vars.onComplete===r._targets[0]))&&Ei(i,r,r._start-r._delay),r=s;return Ei(dt,i,0),i},context:function(e,t){return e?new _y(e,t):ut},matchMedia:function(e){return new cP(e)},matchMediaRefresh:function(){return ms.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||ed()},addEventListener:function(e,t){var i=du[e]||(du[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=du[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:HR,wrapYoyo:VR,distribute:$x,random:Zx,snap:Kx,normalize:GR,getUnit:Zt,clamp:FR,splitColor:ny,toArray:Zn,selector:Zh,mapRange:Jx,pipe:zR,unitize:BR,interpolate:WR,shuffle:qx},install:Ox,effects:Df,ticker:Nn,updateRoot:on.updateRoot,plugins:Ln,globalTimeline:dt,core:{PropTween:Tn,globals:Fx,Tween:Tt,Timeline:on,Animation:$a,getCache:hs,_removeLinkedListItem:xc,reverting:function(){return Qt},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return fp=e}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Yu[n]=Tt[n]});Nn.add(on.updateRoot);ao=Yu.to({},{duration:0});var fP=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},hP=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=fP(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Ff=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(kt(s)&&(l={},En(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}hP(a,s)}}}},An=Yu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Qt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ff("roundProps",Qh),Ff("modifiers"),Ff("snap",Kx))||Yu;Tt.version=on.version=An.version="3.12.5";Ix=1;dp()&&Io();We.Power0;We.Power1;We.Power2;We.Power3;We.Power4;We.Linear;We.Quad;We.Cubic;We.Quart;We.Quint;We.Strong;We.Elastic;We.Back;We.SteppedEase;We.Bounce;We.Sine;We.Expo;We.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Tg,_r,xo,Tp,os,wg,wp,dP=function(){return typeof window<"u"},Ji={},Jr=180/Math.PI,yo=Math.PI/180,Xs=Math.atan2,Ag=1e8,Ap=/([A-Z])/g,pP=/(left|right|width|margin|padding|x)/i,mP=/[\s,\(]\S/,Ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},td=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_P=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vP=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},gy=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},vy=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},xP=function(e,t,i){return e.style[t]=i},yP=function(e,t,i){return e.style.setProperty(t,i)},SP=function(e,t,i){return e._gsap[t]=i},MP=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},EP=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},TP=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},pt="transform",wn=pt+"Origin",wP=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Bi(r,a)}):this.tfm[e]=o.x?o[e]:Bi(r,e),e===wn&&(this.tfm.zOrigin=o.zOrigin);else return Ti.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(pt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=pt}(s||t)&&this.props.push(e,t,s[e])},xy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},AP=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ap,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=wp(),(!s||!s.isStart)&&!i[pt]&&(xy(i),r.zOrigin&&i[wn]&&(i[wn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},yy=function(e,t){var i={target:e,props:[],revert:AP,save:wP};return e._gsap||An.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},Sy,nd=function(e,t){var i=_r.createElementNS?_r.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_r.createElement(e);return i&&i.style?i:_r.createElement(e)},Ri=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ap,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Oo(t)||t,1)||""},Cg="O,Moz,ms,Ms,Webkit".split(","),Oo=function(e,t,i){var r=t||os,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Cg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Cg[o]:"")+e},id=function(){dP()&&window.document&&(Tg=window,_r=Tg.document,xo=_r.documentElement,os=nd("div")||{style:{}},nd("div"),pt=Oo(pt),wn=pt+"Origin",os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sy=!!Oo("perspective"),wp=An.core.reverting,Tp=1)},kf=function n(e){var t=nd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(xo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),xo.removeChild(t),this.style.cssText=s,o},Rg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},My=function(e){var t;try{t=e.getBBox()}catch{t=kf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===kf||(t=kf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Rg(e,["x","cx","x1"])||0,y:+Rg(e,["y","cy","y1"])||0,width:0,height:0}:t},Ey=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&My(e))},Es=function(e,t){if(t){var i=e.style,r;t in Ji&&t!==wn&&(t=pt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Ap,"-$1").toLowerCase())):i.removeAttribute(t)}},gr=function(e,t,i,r,s,o){var a=new Tn(e._pt,t,i,0,1,o?vy:gy);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Pg={deg:1,rad:1,turn:1},CP={grid:1,flex:1},Or=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=os.style,l=pP.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",m=r==="%",v,_,p,f;if(r===o||!s||Pg[r]||Pg[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),f=e.getCTM&&Ey(e),(m||o==="%")&&(Ji[t]||~t.indexOf("adius")))return v=f?e.getBBox()[l?"width":"height"]:e[c],St(m?s/v*h:s/100*v);if(a[l?"width":"height"]=h+(d?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===_r||!_.appendChild)&&(_=_r.body),p=_._gsap,p&&m&&p.width&&l&&p.time===Nn.time&&!p.uncache)return St(s/p.width*h);if(m&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=h+r,v=e[c],g?e.style[t]=g:Es(e,t)}else(m||o==="%")&&!CP[Ri(_,"display")]&&(a.position=Ri(e,"position")),_===e&&(a.position="static"),_.appendChild(os),v=os[c],_.removeChild(os),a.position="absolute";return l&&m&&(p=hs(_),p.time=Nn.time,p.width=_[c]),St(d?v*s/h:v&&s?h/v*s:0)},Bi=function(e,t,i,r){var s;return Tp||id(),t in Ti&&t!=="transform"&&(t=Ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ji[t]&&t!=="transform"?(s=Za(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:$u(Ri(e,wn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=qu[t]&&qu[t](e,t,i)||Ri(e,t)||zx(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Or(e,t,s,i)+i:s},RP=function(e,t,i,r){if(!i||i==="none"){var s=Oo(t,e,1),o=s&&Ri(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ri(e,"borderTopColor"))}var a=new Tn(this._pt,e.style,t,0,1,py),l=0,u=0,c,h,d,m,v,_,p,f,g,x,y,w;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ri(e,t)||r,_?e.style[t]=_:Es(e,t)),c=[i,r],ry(c),i=c[0],r=c[1],d=i.match(oo)||[],w=r.match(oo)||[],w.length){for(;h=oo.exec(r);)p=h[0],g=r.substring(l,h.index),v?v=(v+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(v=1),p!==(_=d[u++]||"")&&(m=parseFloat(_)||0,y=_.substr((m+"").length),p.charAt(1)==="="&&(p=vo(m,p)+y),f=parseFloat(p),x=p.substr((f+"").length),l=oo.lastIndex-x.length,x||(x=x||Fn.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(m=Or(e,t,_,x)||0),a._pt={_next:a._pt,p:g||u===1?g:",",s:m,c:f-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?vy:gy;return Nx.test(r)&&(a.e=0),this._pt=a,a},bg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},PP=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=bg[i]||i,t[1]=bg[r]||r,t.join(" ")},bP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Ji[a]&&(l=1,a=a==="transformOrigin"?wn:pt),Es(i,a);l&&(Es(i,pt),o&&(o.svg&&i.removeAttribute("transform"),Za(i,1),o.uncache=1,xy(r)))}},qu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Tn(e._pt,t,i,0,0,bP);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ka=[1,0,0,1,0,0],Ty={},wy=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Lg=function(e){var t=Ri(e,pt);return wy(t)?Ka:t.substr(7).match(Dx).map(St)},Cp=function(e,t){var i=e._gsap||hs(e),r=e.style,s=Lg(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ka:s):(s===Ka&&!e.offsetParent&&e!==xo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,xo.appendChild(e)),s=Lg(e),l?r.display=l:Es(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):xo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},rd=function(e,t,i,r,s,o){var a=e._gsap,l=s||Cp(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,m=l[0],v=l[1],_=l[2],p=l[3],f=l[4],g=l[5],x=t.split(" "),y=parseFloat(x[0])||0,w=parseFloat(x[1])||0,T,M,b,D;i?l!==Ka&&(M=m*p-v*_)&&(b=y*(p/M)+w*(-_/M)+(_*g-p*f)/M,D=y*(-v/M)+w*(m/M)-(m*g-v*f)/M,y=b,w=D):(T=My(e),y=T.x+(~x[0].indexOf("%")?y/100*T.width:y),w=T.y+(~(x[1]||x[0]).indexOf("%")?w/100*T.height:w)),r||r!==!1&&a.smooth?(f=y-u,g=w-c,a.xOffset=h+(f*m+g*_)-f,a.yOffset=d+(f*v+g*p)-g):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[wn]="0px 0px",o&&(gr(o,a,"xOrigin",u,y),gr(o,a,"yOrigin",c,w),gr(o,a,"xOffset",h,a.xOffset),gr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},Za=function(e,t){var i=e._gsap||new ly(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ri(e,wn)||"0",c,h,d,m,v,_,p,f,g,x,y,w,T,M,b,D,S,R,F,Y,L,k,I,q,N,B,H,$,Z,xe,G,K;return c=h=d=_=p=f=g=x=y=0,m=v=1,i.svg=!!(e.getCTM&&Ey(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pt]!=="none"?l[pt]:"")),r.scale=r.rotate=r.translate="none"),M=Cp(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),rd(e,q||u,!!q||i.originIsAbsolute,i.smooth!==!1,M)),w=i.xOrigin||0,T=i.yOrigin||0,M!==Ka&&(R=M[0],F=M[1],Y=M[2],L=M[3],c=k=M[4],h=I=M[5],M.length===6?(m=Math.sqrt(R*R+F*F),v=Math.sqrt(L*L+Y*Y),_=R||F?Xs(F,R)*Jr:0,g=Y||L?Xs(Y,L)*Jr+_:0,g&&(v*=Math.abs(Math.cos(g*yo))),i.svg&&(c-=w-(w*R+T*Y),h-=T-(w*F+T*L))):(K=M[6],xe=M[7],H=M[8],$=M[9],Z=M[10],G=M[11],c=M[12],h=M[13],d=M[14],b=Xs(K,Z),p=b*Jr,b&&(D=Math.cos(-b),S=Math.sin(-b),q=k*D+H*S,N=I*D+$*S,B=K*D+Z*S,H=k*-S+H*D,$=I*-S+$*D,Z=K*-S+Z*D,G=xe*-S+G*D,k=q,I=N,K=B),b=Xs(-Y,Z),f=b*Jr,b&&(D=Math.cos(-b),S=Math.sin(-b),q=R*D-H*S,N=F*D-$*S,B=Y*D-Z*S,G=L*S+G*D,R=q,F=N,Y=B),b=Xs(F,R),_=b*Jr,b&&(D=Math.cos(b),S=Math.sin(b),q=R*D+F*S,N=k*D+I*S,F=F*D-R*S,I=I*D-k*S,R=q,k=N),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,f=180-f),m=St(Math.sqrt(R*R+F*F+Y*Y)),v=St(Math.sqrt(I*I+K*K)),b=Xs(k,I),g=Math.abs(b)>2e-4?b*Jr:0,y=G?1/(G<0?-G:G):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!wy(Ri(e,pt)),q&&e.setAttribute("transform",q))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(m*=-1,g+=_<=0?180:-180,_+=_<=0?180:-180):(v*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=St(m),i.scaleY=St(v),i.rotation=St(_)+a,i.rotationX=St(p)+a,i.rotationY=St(f)+a,i.skewX=g+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[wn]=$u(u)),i.xOffset=i.yOffset=0,i.force3D=Fn.force3D,i.renderTransform=i.svg?DP:Sy?Ay:LP,i.uncache=0,i},$u=function(e){return(e=e.split(" "))[0]+" "+e[1]},zf=function(e,t,i){var r=Zt(t);return St(parseFloat(t)+parseFloat(Or(e,"x",i+"px",r)))+r},LP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ay(e,t)},Yr="0deg",ra="0px",qr=") ",Ay=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,d=i.skewX,m=i.skewY,v=i.scaleX,_=i.scaleY,p=i.transformPerspective,f=i.force3D,g=i.target,x=i.zOrigin,y="",w=f==="auto"&&e&&e!==1||f===!0;if(x&&(h!==Yr||c!==Yr)){var T=parseFloat(c)*yo,M=Math.sin(T),b=Math.cos(T),D;T=parseFloat(h)*yo,D=Math.cos(T),o=zf(g,o,M*D*-x),a=zf(g,a,-Math.sin(T)*-x),l=zf(g,l,b*D*-x+x)}p!==ra&&(y+="perspective("+p+qr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(w||o!==ra||a!==ra||l!==ra)&&(y+=l!==ra||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+qr),u!==Yr&&(y+="rotate("+u+qr),c!==Yr&&(y+="rotateY("+c+qr),h!==Yr&&(y+="rotateX("+h+qr),(d!==Yr||m!==Yr)&&(y+="skew("+d+", "+m+qr),(v!==1||_!==1)&&(y+="scale("+v+", "+_+qr),g.style[pt]=y||"translate(0, 0)"},DP=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,d=i.scaleY,m=i.target,v=i.xOrigin,_=i.yOrigin,p=i.xOffset,f=i.yOffset,g=i.forceCSS,x=parseFloat(o),y=parseFloat(a),w,T,M,b,D;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=yo,u*=yo,w=Math.cos(l)*h,T=Math.sin(l)*h,M=Math.sin(l-u)*-d,b=Math.cos(l-u)*d,u&&(c*=yo,D=Math.tan(u-c),D=Math.sqrt(1+D*D),M*=D,b*=D,c&&(D=Math.tan(c),D=Math.sqrt(1+D*D),w*=D,T*=D)),w=St(w),T=St(T),M=St(M),b=St(b)):(w=h,b=d,T=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Or(m,"x",o,"px"),y=Or(m,"y",a,"px")),(v||_||p||f)&&(x=St(x+v-(v*w+_*M)+p),y=St(y+_-(v*T+_*b)+f)),(r||s)&&(D=m.getBBox(),x=St(x+r/100*D.width),y=St(y+s/100*D.height)),D="matrix("+w+","+T+","+M+","+b+","+x+","+y+")",m.setAttribute("transform",D),g&&(m.style[pt]=D)},NP=function(e,t,i,r,s){var o=360,a=kt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Jr:1),u=l-r,c=r+u+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*Ag)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*Ag)%o-~~(u/o)*o)),e._pt=d=new Tn(e._pt,t,i,r,u,_P),d.e=c,d.u="deg",e._props.push(i),d},Dg=function(e,t){for(var i in t)e[i]=t[i];return e},UP=function(e,t,i){var r=Dg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,d,m,v;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[pt]=t,a=Za(i,1),Es(i,pt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[pt],o[pt]=t,a=Za(i,1),o[pt]=u);for(l in Ji)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(m=Zt(u),v=Zt(c),h=m!==v?Or(i,l,u,v):parseFloat(u),d=parseFloat(c),e._pt=new Tn(e._pt,a,l,h,d-h,td),e._pt.u=v||0,e._props.push(l));Dg(a,r)};En("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});qu[e>1?"border"+n:n]=function(a,l,u,c,h){var d,m;if(arguments.length<4)return d=o.map(function(v){return Bi(a,v,u)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(c+"").split(" "),m={},o.forEach(function(v,_){return m[v]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,m,h)}});var Cy={name:"css",register:id,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,d,m,v,_,p,f,g,x,y,w,T,M,b;Tp||id(),this.styles=this.styles||yy(e),b=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Ln[_]&&uy(_,t,i,r,e,s)))){if(m=typeof c,v=qu[_],m==="function"&&(c=c.call(i,r,e,s),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=Ya(c)),v)v(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",br.lastIndex=0,br.test(u)||(p=Zt(u),f=Zt(c)),f?p!==f&&(u=Or(e,_,u,f)+f):p&&(c+=p),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),b.push(_,0,a[_]);else if(m!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],kt(u)&&~u.indexOf("random(")&&(u=Ya(u)),Zt(u+"")||u==="auto"||(u+=Fn.units[_]||Zt(Bi(e,_))||""),(u+"").charAt(1)==="="&&(u=Bi(e,_))):u=Bi(e,_),d=parseFloat(u),g=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),g&&(c=c.substr(2)),h=parseFloat(c),_ in Ti&&(_==="autoAlpha"&&(d===1&&Bi(e,"visibility")==="hidden"&&h&&(d=0),b.push("visibility",0,a.visibility),gr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ti[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Ji,x){if(this.styles.save(_),y||(w=e._gsap,w.renderTransform&&!t.parseTransform||Za(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new Tn(this._pt,a,pt,0,1,w.renderTransform,w,0,-1),y.dep=1),_==="scale")this._pt=new Tn(this._pt,w,"scaleY",w.scaleY,(g?vo(w.scaleY,g+h):h)-w.scaleY||0,td),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(wn,0,a[wn]),c=PP(c),w.svg?rd(e,c,0,T,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==w.zOrigin&&gr(this,w,"zOrigin",w.zOrigin,f),gr(this,a,_,$u(u),$u(c)));continue}else if(_==="svgOrigin"){rd(e,c,1,T,0,this);continue}else if(_ in Ty){NP(this,w,_,d,g?vo(d,g+c):c);continue}else if(_==="smoothOrigin"){gr(this,w,"smooth",w.smooth,c);continue}else if(_==="force3D"){w[_]=c;continue}else if(_==="transform"){UP(this,c,e);continue}}else _ in a||(_=Oo(_)||_);if(x||(h||h===0)&&(d||d===0)&&!mP.test(c)&&_ in a)p=(u+"").substr((d+"").length),h||(h=0),f=Zt(c)||(_ in Fn.units?Fn.units[_]:p),p!==f&&(d=Or(e,_,u,f)),this._pt=new Tn(this._pt,x?w:a,_,d,(g?vo(d,g+h):h)-d,!x&&(f==="px"||_==="zIndex")&&t.autoRound!==!1?vP:td),this._pt.u=f||0,p!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=gP);else if(_ in a)RP.call(this,e,_,u,g?g+c:c);else if(_ in e)this.add(e,_,u||e[_],g?g+c:c,r,s);else if(_!=="parseTransform"){mp(_,c);continue}x||(_ in a?b.push(_,0,a[_]):b.push(_,1,u||e[_])),o.push(_)}}M&&my(this)},render:function(e,t){if(t.tween._time||!wp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Bi,aliases:Ti,getSetter:function(e,t,i){var r=Ti[t];return r&&r.indexOf(",")<0&&(t=r),t in Ji&&t!==wn&&(e._gsap.x||Bi(e,"x"))?i&&wg===i?t==="scale"?MP:SP:(wg=i||{})&&(t==="scale"?EP:TP):e.style&&!hp(e.style[t])?xP:~t.indexOf("-")?yP:Mp(e,t)},core:{_removeProperty:Es,_getMatrix:Cp}};An.utils.checkPrefix=Oo;An.core.getStyleSaver=yy;(function(n,e,t,i){var r=En(n+","+e+","+t,function(s){Ji[s]=1});En(e,function(s){Fn.units[s]="deg",Ty[s]=1}),Ti[r[13]]=n+","+e,En(i,function(s){var o=s.split(":");Ti[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Fn.units[n]="px"});An.registerPlugin(Cy);var Ku=An.registerPlugin(Cy)||An;Ku.core.Tween;class IP{constructor(e){this.trees=[],this.mousePosition=new Be,this.targetRotation=new Be,this.currentRotation=new Be,this.handleMouseMove=t=>{this.mousePosition.x=t.clientX/window.innerWidth*2-1,this.mousePosition.y=-(t.clientY/window.innerHeight)*2+1,this.updateTargetRotation()},this.handleTouchMove=t=>{t.touches.length>0&&(this.mousePosition.x=t.touches[0].clientX/window.innerWidth*2-1,this.mousePosition.y=-(t.touches[0].clientY/window.innerHeight)*2+1,this.updateTargetRotation())},this.handleResize=()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},this.animate=()=>{requestAnimationFrame(this.animate),this.currentRotation.x+=(this.targetRotation.x-this.currentRotation.x)*.05,this.currentRotation.y+=(this.targetRotation.y-this.currentRotation.y)*.05,this.camera.position.x=Math.sin(this.currentRotation.y)*8,this.camera.position.z=Math.cos(this.currentRotation.y)*8,this.camera.position.y=3+this.currentRotation.x*2,this.camera.lookAt(0,0,0);const t=Date.now()*.001;this.trees.forEach((i,r)=>{const s=r*.1;i.rotation.x=Math.sin(t+s)*.03,i.rotation.z=Math.cos(t+s)*.03}),this.renderer.render(this.scene,this.camera)},this.scene=new wx,this.scene.fog=new ap(9684477,.05),this.camera=new Dn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new op({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Yv,this.renderer.toneMappingExposure=1.2,e.appendChild(this.renderer.domElement),this.camera.position.z=8,this.camera.position.y=3,this.camera.lookAt(0,0,0),this.setupLighting(),this.createGround(),this.createTreesGrid(),this.setupEventListeners(),this.animate()}setupLighting(){const e=new Rx(16777215,.5);this.scene.add(e);const t=new Cx(16777215,1);t.position.set(5,5,5),t.castShadow=!0,this.scene.add(t);const i=new vR(9684477,4759913,.5);this.scene.add(i)}createGround(){const e=new al(100,100),t=new dR({color:4759913,roughness:.8,metalness:.2}),i=new an(e,t);i.rotation.x=-Math.PI/2,i.position.y=-.5,this.scene.add(i)}createDetailedTree(){const e=new ua,t=new vc(.1,.15,1,8),i=new Ma({color:4863784,shininess:5,bumpScale:.1}),r=new an(t,i);r.position.y=.5,e.add(r);const s=(o,a)=>{const l=new lp(.5*a,1*a,8),u=new Ma({color:2972199,shininess:10,flatShading:!0}),c=new an(l,u);return c.position.y=o,c};return e.add(s(1.75,1)),e.add(s(1.25,.8)),e.add(s(2.25,.6)),e}createTreesGrid(){for(let i=-7;i<=7;i++)for(let r=-7;r<=7;r++){const s=this.createDetailedTree();s.position.x=i*2+(Math.random()-.5)*.5,s.position.z=r*2+(Math.random()-.5)*.5;const o=.8+Math.random()*.4;s.scale.set(o,o,o),s.rotation.y=Math.random()*Math.PI*2,this.trees.push(s),this.scene.add(s),Ku.from(s.scale,{x:0,y:0,z:0,duration:1.5,delay:(Math.abs(i)+Math.abs(r))*.1,ease:"elastic.out(1, 0.5)"})}}setupEventListeners(){window.addEventListener("resize",this.handleResize),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("touchmove",this.handleTouchMove)}updateTargetRotation(){this.targetRotation.x=this.mousePosition.y*.5,this.targetRotation.y=this.mousePosition.x*.5}dispose(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("touchmove",this.handleTouchMove),this.renderer.dispose()}}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ho=(n,e)=>{const t=Qn.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},c)=>Qn.createElement("svg",{ref:c,...OP,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${FP(n)}`,a].join(" "),...u},[...e.map(([h,d])=>Qn.createElement(h,d)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=Ho("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=Ho("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=Ho("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=Ho("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=Ho("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=Ho("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);function VP(){return ie.jsx("nav",{className:"fixed top-0 left-0 w-full bg-green-900/80 backdrop-blur-sm text-white",children:ie.jsxs("div",{className:"container mx-auto px-6 py-4 flex items-center justify-between",children:[ie.jsxs("div",{className:"flex items-center space-x-2",children:[ie.jsx(Rp,{className:"w-8 h-8"}),ie.jsx("span",{className:"text-xl font-bold",children:"TreeGuardians"})]}),ie.jsxs("div",{className:"flex space-x-6",children:[ie.jsx("a",{href:"#mission",className:"hover:text-green-300 transition-colors",children:"Our Mission"}),ie.jsx("a",{href:"#impact",className:"hover:text-green-300 transition-colors",children:"Impact"}),ie.jsx("a",{href:"#join",className:"hover:text-green-300 transition-colors",children:"Join Us"})]})]})})}function WP(){const n=Qn.useRef(null);return Qn.useEffect(()=>{const e=Ku.context(()=>{Ku.from(".footer-content > *",{y:20,opacity:0,duration:.8,stagger:.2,scrollTrigger:{trigger:n.current,start:"top bottom-=100",toggleActions:"play none none reverse"}})});return()=>e.revert()},[]),ie.jsx("footer",{ref:n,className:"bg-green-900 text-white py-16",children:ie.jsxs("div",{className:"container mx-auto px-6",children:[ie.jsxs("div",{className:"footer-content grid md:grid-cols-4 gap-12",children:[ie.jsxs("div",{children:[ie.jsxs("div",{className:"flex items-center space-x-2 mb-6",children:[ie.jsx(Rp,{className:"w-6 h-6"}),ie.jsx("span",{className:"text-xl font-bold",children:"TreeGuardians"})]}),ie.jsx("p",{className:"text-green-300",children:"Together we can make a difference. Join us in our mission to protect and restore Earth's forests."})]}),ie.jsxs("div",{children:[ie.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Quick Links"}),ie.jsxs("ul",{className:"space-y-2",children:[ie.jsx("li",{children:ie.jsx("a",{href:"#mission",className:"hover:text-green-300 transition-colors",children:"Our Mission"})}),ie.jsx("li",{children:ie.jsx("a",{href:"#impact",className:"hover:text-green-300 transition-colors",children:"Impact"})}),ie.jsx("li",{children:ie.jsx("a",{href:"#join",className:"hover:text-green-300 transition-colors",children:"Join Us"})})]})]}),ie.jsxs("div",{children:[ie.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Contact"}),ie.jsxs("ul",{className:"space-y-2",children:[ie.jsx("li",{children:"Email: contact@treeguardians.org"}),ie.jsx("li",{children:"Phone: (555) 123-4567"}),ie.jsx("li",{children:"Address: 123 Forest Ave, Green City"})]})]}),ie.jsxs("div",{children:[ie.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Follow Us"}),ie.jsxs("div",{className:"flex space-x-4",children:[ie.jsx("a",{href:"#",className:"hover:text-green-300 transition-colors",children:ie.jsx(GP,{className:"w-6 h-6"})}),ie.jsx("a",{href:"#",className:"hover:text-green-300 transition-colors",children:ie.jsx(kP,{className:"w-6 h-6"})}),ie.jsx("a",{href:"#",className:"hover:text-green-300 transition-colors",children:ie.jsx(zP,{className:"w-6 h-6"})})]})]})]}),ie.jsx("div",{className:"border-t border-green-800 mt-12 pt-6 text-center text-green-300",children:"© 2024 TreeGuardians. All rights reserved."})]})})}function XP({children:n,onClick:e,className:t=""}){return ie.jsx("button",{onClick:e,className:`bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors ${t}`,children:n})}function jP(){return ie.jsx("section",{className:"h-screen flex items-center justify-center text-white px-6",children:ie.jsxs("div",{className:"text-center",children:[ie.jsx("h1",{className:"text-6xl font-bold mb-6",children:"Protecting Earth's Lungs"}),ie.jsx("p",{className:"text-xl mb-8 max-w-2xl mx-auto",children:"Join our mission to preserve and restore the world's forests, one tree at a time."}),ie.jsx(XP,{children:"Make an Impact"})]})})}function Bf({icon:n,title:e,description:t}){return ie.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-lg",children:[ie.jsx("div",{className:"w-12 h-12 text-green-600 mb-4",children:n}),ie.jsx("h3",{className:"text-xl font-bold mb-4",children:e}),ie.jsx("p",{className:"text-gray-600",children:t})]})}function YP(){return ie.jsx("section",{id:"mission",className:"min-h-screen bg-white/90 backdrop-blur-sm py-24 px-6",children:ie.jsxs("div",{className:"container mx-auto",children:[ie.jsx("h2",{className:"text-4xl font-bold text-green-900 mb-12 text-center",children:"Our Mission"}),ie.jsxs("div",{className:"grid md:grid-cols-3 gap-12",children:[ie.jsx(Bf,{icon:ie.jsx(BP,{}),title:"Plant & Protect",description:"We're committed to planting millions of trees and protecting existing forests from deforestation."}),ie.jsx(Bf,{icon:ie.jsx(Rp,{}),title:"Biodiversity",description:"Supporting diverse ecosystems and protecting endangered species through forest conservation."}),ie.jsx(Bf,{icon:ie.jsx(HP,{}),title:"Community",description:"Working with local communities to create sustainable forest management practices."})]})]})})}class qP{constructor(e){this.handleResize=()=>{const t=this.renderer.domElement.parentElement;if(!t)return;const i=t.clientWidth,r=t.clientHeight;this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.renderer.setSize(i,r)},this.animate=()=>{requestAnimationFrame(this.animate),this.earth.rotation.y+=5e-4,this.clouds.rotation.y+=7e-4,this.atmosphere.rotation.y+=5e-4;const t=Date.now()*1e-4;this.earth.position.y=Math.sin(t)*.1,this.clouds.position.y=Math.sin(t)*.1,this.atmosphere.position.y=Math.sin(t)*.1,this.renderer.render(this.scene,this.camera)},this.scene=new wx,this.camera=new Dn(45,e.clientWidth/e.clientHeight,.1,1e3),this.renderer=new op({antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(this.renderer.domElement),this.camera.position.z=5,this.setupLighting(),this.setupEarth(),this.createAtmosphere(),this.createStars(),this.animate(),window.addEventListener("resize",this.handleResize)}setupLighting(){const e=new Rx(16777215,.4);this.scene.add(e);const t=new Cx(16777215,1);t.position.set(5,3,5),this.scene.add(t)}setupEarth(){const e=new gR,t=new Sa(1,64,64),i=new Ma({map:e.load("https://unpkg.com/three-globe/example/img/earth-day.jpg"),bumpMap:e.load("https://unpkg.com/three-globe/example/img/earth-topology.png"),bumpScale:.05,specularMap:e.load("https://unpkg.com/three-globe/example/img/earth-water.png"),specular:new ze("grey"),shininess:10});this.earth=new an(t,i),this.scene.add(this.earth);const r=new Sa(1.01,64,64),s=new Ma({map:e.load("https://unpkg.com/three-globe/example/img/earth-clouds.png"),transparent:!0,opacity:.4});this.clouds=new an(r,s),this.scene.add(this.clouds)}createAtmosphere(){const e=new Sa(1.1,64,64),t=new Ma({color:9684477,transparent:!0,opacity:.1,side:un});this.atmosphere=new an(e,t),this.scene.add(this.atmosphere)}createStars(){const e=new mi,t=new Ax({color:16777215,size:.02,transparent:!0}),i=[];for(let r=0;r<1e4;r++){const s=(Math.random()-.5)*2e3,o=(Math.random()-.5)*2e3,a=-Math.random()*2e3;i.push(s,o,a)}e.setAttribute("position",new Sn(i,3)),this.stars=new hR(e,t),this.scene.add(this.stars)}dispose(){window.removeEventListener("resize",this.handleResize),this.renderer.dispose()}}function $P(){const n=Qn.useRef(null);return Qn.useEffect(()=>{if(!n.current)return;const e=new qP(n.current);return()=>{e.dispose()}},[]),ie.jsx("section",{id:"impact",className:"min-h-screen bg-gray-900 py-24 px-6 relative overflow-hidden",children:ie.jsxs("div",{className:"container mx-auto relative z-10",children:[ie.jsx("h2",{className:"text-4xl font-bold text-white mb-12 text-center",children:"Our Global Impact"}),ie.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[ie.jsx("div",{children:ie.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-6",children:[ie.jsxs("div",{className:"text-green-400",children:[ie.jsx("div",{className:"text-5xl font-bold mb-2",children:"1M+"}),ie.jsx("div",{className:"text-xl",children:"Trees Planted"})]}),ie.jsxs("div",{className:"text-blue-400",children:[ie.jsx("div",{className:"text-5xl font-bold mb-2",children:"50+"}),ie.jsx("div",{className:"text-xl",children:"Countries Reached"})]}),ie.jsxs("div",{className:"text-yellow-400",children:[ie.jsx("div",{className:"text-5xl font-bold mb-2",children:"100K+"}),ie.jsx("div",{className:"text-xl",children:"Volunteers Worldwide"})]})]})}),ie.jsx("div",{ref:n,className:"h-[400px]"})]})]})})}function KP(){const n=Qn.useRef(null);return Qn.useEffect(()=>{if(!n.current)return;const e=new IP(n.current);return()=>{e.dispose()}},[]),ie.jsxs("div",{className:"relative",children:[ie.jsx("div",{ref:n,className:"fixed top-0 left-0 w-full h-screen"}),ie.jsxs("div",{className:"relative z-10",children:[ie.jsx(VP,{}),ie.jsxs("main",{className:"min-h-screen",children:[ie.jsx(jP,{}),ie.jsx(YP,{}),ie.jsx($P,{})]}),ie.jsx(WP,{})]})]})}Xv(document.getElementById("root")).render(ie.jsx(Qn.StrictMode,{children:ie.jsx(KP,{})}));
