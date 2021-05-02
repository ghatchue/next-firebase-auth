/*! For license information please see index.node.js.LICENSE.txt */
(()=>{"use strict";var e={933:(e,t,r)=>{var n=r(5)("cookies"),i=r(42),o=r(605),s={},a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,u=/^(?:lax|none|strict)$/i;function c(e,t,r){if(!(this instanceof c))return new c(e,t,r);this.secure=void 0,this.request=e,this.response=t,r&&(Array.isArray(r)?(n('"keys" argument; provide using options {"keys": [...]}'),this.keys=new i(r)):r.constructor&&"Keygrip"===r.constructor.name?(n('"keys" argument; provide using options {"keys": keygrip}'),this.keys=r):(this.keys=Array.isArray(r.keys)?new i(r.keys):r.keys,this.secure=r.secure))}function h(e,t,r){if(!a.test(e))throw new TypeError("argument name is invalid");if(t&&!a.test(t))throw new TypeError("argument value is invalid");for(var e in this.name=e,this.value=t||"",r)this[e]=r[e];if(this.value||(this.expires=new Date(0),this.maxAge=null),this.path&&!a.test(this.path))throw new TypeError("option path is invalid");if(this.domain&&!a.test(this.domain))throw new TypeError("option domain is invalid");if(this.sameSite&&!0!==this.sameSite&&!u.test(this.sameSite))throw new TypeError("option sameSite is invalid")}function l(e,t){if(t.overwrite)for(var r=e.length-1;r>=0;r--)0===e[r].indexOf(t.name+"=")&&e.splice(r,1);e.push(t.toHeader())}c.prototype.get=function(e,t){var r,n,i,o,a,u,c=e+".sig",h=t&&void 0!==t.signed?t.signed:!!this.keys;if((r=this.request.headers.cookie)&&(n=r.match(function(e){return s[e]?s[e]:s[e]=new RegExp("(?:^|;) *"+e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")+"=([^;]*)")}(e)))){if(i=n[1],!t||!h)return i;if(o=this.get(c)){if(a=e+"="+i,!this.keys)throw new Error(".keys required for signed cookies");if(!((u=this.keys.index(a,o))<0))return u&&this.set(c,this.keys.sign(a),{signed:!1}),i;this.set(c,null,{path:"/",signed:!1})}}},c.prototype.set=function(e,t,r){var i=this.response,s=this.request,a=i.getHeader("Set-Cookie")||[],u=void 0!==this.secure?!!this.secure:"https"===s.protocol||s.connection.encrypted,c=new h(e,t,r),p=r&&void 0!==r.signed?r.signed:!!this.keys;if("string"==typeof a&&(a=[a]),!u&&r&&r.secure)throw new Error("Cannot send secure cookie over unencrypted connection");if(c.secure=r&&void 0!==r.secure?r.secure:u,r&&"secureProxy"in r&&(n('"secureProxy" option; use "secure" option, provide "secure" to constructor if needed'),c.secure=r.secureProxy),l(a,c),r&&p){if(!this.keys)throw new Error(".keys required for signed cookies");c.value=this.keys.sign(c.toString()),c.name+=".sig",l(a,c)}return(i.set?o.OutgoingMessage.prototype.setHeader:i.setHeader).call(i,"Set-Cookie",a),this},h.prototype.path="/",h.prototype.expires=void 0,h.prototype.domain=void 0,h.prototype.httpOnly=!0,h.prototype.sameSite=!1,h.prototype.secure=!1,h.prototype.overwrite=!1,h.prototype.toString=function(){return this.name+"="+this.value},h.prototype.toHeader=function(){var e=this.toString();return this.maxAge&&(this.expires=new Date(Date.now()+this.maxAge)),this.path&&(e+="; path="+this.path),this.expires&&(e+="; expires="+this.expires.toUTCString()),this.domain&&(e+="; domain="+this.domain),this.sameSite&&(e+="; samesite="+(!0===this.sameSite?"strict":this.sameSite.toLowerCase())),this.secure&&(e+="; secure"),this.httpOnly&&(e+="; httponly"),e},Object.defineProperty(h.prototype,"maxage",{configurable:!0,enumerable:!0,get:function(){return this.maxAge},set:function(e){return this.maxAge=e}}),n.property(h.prototype,"maxage",'"maxage"; use "maxAge" instead'),c.connect=c.express=function(e){return function(t,r,n){t.cookies=r.cookies=new c(t,r,{keys:e}),n()}},c.Cookie=h,e.exports=c},5:e=>{e.exports=require("depd")},421:e=>{e.exports=require("firebase/app")},942:e=>{e.exports=require("firebase/auth")},605:e=>{e.exports=require("http")},42:e=>{e.exports=require("keygrip")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};(()=>{r.d(n,{default:()=>le});const e=require("@babel/runtime/helpers/defineProperty");var t=r.n(e);const i=require("@babel/runtime/helpers/objectWithoutProperties");var o=r.n(i);const s=()=>"undefined"!=typeof window;var a=!1,u=e=>{a=e};const c=function(){if(a){for(var e=s()?["%cnext-firebase-auth","background: #ffa000; color: #fff; border-radius: 2px; padding: 2px 6px"]:["next-firebase-auth:"],t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];console.log(...e,...r)}};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?h(Object(n),!0).forEach((function(r){t()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p,d=12096e5,f={debug:!1,loginAPIEndpoint:void 0,logoutAPIEndpoint:void 0,tokenChangedHandler:void 0,authPageURL:void 0,appPageURL:void 0,firebaseAdminInitConfig:void 0,firebaseClientInitConfig:void 0,firebaseAuthEmulatorHost:void 0,cookies:{name:void 0,keys:void 0,domain:void 0,httpOnly:!0,maxAge:6048e5,overwrite:!0,path:"/",sameSite:"strict",secure:!0,signed:!0}},g=e=>{var t=[];e.tokenChangedHandler?(e.loginAPIEndpoint&&t.push('The "loginAPIEndpoint" setting should not be set if you are using a "tokenChangedHandler".'),e.logoutAPIEndpoint&&t.push('The "logoutAPIEndpoint" setting should not be set if you are using a "tokenChangedHandler".')):(e.loginAPIEndpoint||t.push('The "loginAPIEndpoint" setting is required.'),e.logoutAPIEndpoint||t.push('The "logoutAPIEndpoint" setting is required.')),e.firebaseClientInitConfig&&e.firebaseClientInitConfig.apiKey||t.push('The "firebaseClientInitConfig.apiKey" value is required.'),e.firebaseAuthEmulatorHost&&e.firebaseAuthEmulatorHost.startsWith("http")&&t.push("The firebaseAuthEmulatorHost should be set without a prefix (e.g., localhost:9099)");var{keys:r}=e.cookies,n=r&&r.length&&(!r.filter||r.filter((e=>void 0!==e)).length);return s()?(e.firebaseAdminInitConfig&&e.firebaseAdminInitConfig.credential&&e.firebaseAdminInitConfig.credential.privateKey&&t.push('The "firebaseAdminInitConfig" private key setting should not be available on the client side.'),n&&t.push('The "cookies.keys" setting should not be available on the client side.')):(e.cookies.name||t.push('The "cookies.name" setting is required on the server side.'),e.cookies.signed&&!n&&t.push('The "cookies.keys" setting must be set if "cookies.signed" is true.'),e.firebaseAuthEmulatorHost&&(process.env.FIREBASE_AUTH_EMULATOR_HOST?process.env.FIREBASE_AUTH_EMULATOR_HOST!==e.firebaseAuthEmulatorHost&&t.push('The "FIREBASE_AUTH_EMULATOR_HOST" environment variable should be the same as the host set in the config'):t.push('The "FIREBASE_AUTH_EMULATOR_HOST" environment variable should be set if you are using the "firebaseAuthEmulatorHost" option')),e.cookies.maxAge>d&&t.push('The "cookies.maxAge" setting must be less than two weeks ('.concat(d," ms)."))),{isValid:0===t.length,errors:t}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c("Setting config with provided value:",e);var{cookies:t={}}=e,r=o()(e,["cookies"]),n=l(l(l({},f),r),{},{cookies:l(l({},f.cookies),t)}),{isValid:i,errors:s}=g(n);if(!i)throw new Error("Invalid next-firebase-auth options: ".concat(s.join(" ")));p=n},v=()=>{if(!p)throw new Error("next-firebase-auth must be initialized before rendering.");return p};const m=require("react");var b=r.n(m);const w=require("next/router"),O=require("@babel/runtime/helpers/asyncToGenerator");var k=r.n(O),A=["aud","auth_time","email","email_verified","exp","firebase","iat","iss","name","phone_number","picture","sub","uid","user_id"],E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.keys(e).forEach((r=>{A.includes(r)||(t[r]=e[r])})),t};function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?T(Object(n),!0).forEach((function(r){t()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const S=function(){var{firebaseUserClientSDK:e,firebaseUserAdminSDK:t,serializedAuthUser:n,clientInitialized:i=!1,token:o=null,claims:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c("Called createAuthUser with arguments:",{firebaseUserClientSDK:e,firebaseUserAdminSDK:t,serializedAuthUser:n,clientInitialized:i,token:o,claims:a});var u=[e,t,n].reduce(((e,t)=>t?e+1:e),0);if(u>1)throw new Error('createAuthUser cannot receive more than one of the following properties: "firebaseUserClientSDK", "firebaseUserAdminSDK", "serializedAuthUser"');if(i&&(t||n))throw new Error('The "clientInitialized" value can only be true when called with the "firebaseUserClientSDK" property or no user.');if(a&&(t||n))throw new Error('The "claims" value can only be set in conjunction with the "firebaseUserClientSDK" property.');if(o&&!t)throw new Error('The "token" value can only be set if the "firebaseUserAdminSDK" property is defined.');var h,l={},p=null,d=null,f=!1,g=null,y=null,v=null,m=function(){var e=k()((function*(){return null}));return function(){return e.apply(this,arguments)}}();s()&&(r(942),h=r(421).default);var b=function(){var e=k()((function*(){}));return function(){return e.apply(this,arguments)}}(),w=null;if(e)l=E(a),p=e.uid,d=e.email,f=e.emailVerified,g=e.phoneNumber,y=e.displayName,v=e.photoURL,m=function(){var t=k()((function*(){return e.getIdToken()}));return function(){return t.apply(this,arguments)}}(),b=function(){var e=k()((function*(){return h.auth().signOut()}));return function(){return e.apply(this,arguments)}}(),w=null;else if(t)l=E(t),p=t.uid,d=t.email,f=t.email_verified,g=t.phone_number,y=t.name,v=t.picture,m=function(){var e=k()((function*(){return o}));return function(){return e.apply(this,arguments)}}(),w=o;else if(n){var O=JSON.parse(n);l=O.claims,p=O.id,d=O.email,f=O.emailVerified,g=O.phoneNumber,y=O.displayName,v=O.photoURL,m=function(){var e=k()((function*(){return O._token||null}));return function(){return e.apply(this,arguments)}}(),w=O._token}return{id:p,email:d,emailVerified:f,phoneNumber:g,displayName:y,photoURL:v,claims:l,getIdToken:m,clientInitialized:i,firebaseUser:e||null,signOut:b,serialize:function(){var{includeToken:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return JSON.stringify(P({id:p,claims:l,email:d,emailVerified:f,phoneNumber:g,displayName:y,photoURL:v,clientInitialized:i},e&&{_token:w}))}}};var U=(0,m.createContext)(S());var R=r(421),I=r.n(R),C=(r(942),function(){var e=k()((function*(e){var t,{loginAPIEndpoint:r,logoutAPIEndpoint:n}=v();if(e.id){var i=yield e.getIdToken();if(!(t=yield fetch(r,{method:"POST",headers:{Authorization:i},credentials:"include"})).ok){var o=yield t.json();throw new Error("Received ".concat(t.status," response from login API endpoint: ").concat(JSON.stringify(o)))}}else if(!(t=yield fetch(n,{method:"POST",credentials:"include"})).ok){var s=yield t.json();throw new Error("Received ".concat(t.status," response from logout API endpoint: ").concat(JSON.stringify(s)))}return t}));return function(t){return e.apply(this,arguments)}}()),j=function(){var e=k()((function*(e){var{tokenChangedHandler:t}=v(),r=S({firebaseUserClientSDK:e,clientInitialized:!0});return t?t(r):C(r)}));return function(t){return e.apply(this,arguments)}}();const x=()=>{var[e,t]=(0,m.useState)(),[r,n]=(0,m.useState)({}),[i,o]=(0,m.useState)(!1);function s(e){return a.apply(this,arguments)}function a(){return(a=k()((function*(e){if(e){var r=yield I().auth().currentUser.getIdTokenResult(),i=E(r.claims);n(i)}t(e),o(!0),yield j(e)}))).apply(this,arguments)}return(0,m.useEffect)((()=>{var e=I().auth().onIdTokenChanged(s);return()=>e()}),[]),{user:e,claims:r,initialized:i}},_={RENDER:"render",SHOW_LOADER:"showLoader",RETURN_NULL:"returnNull",REDIRECT_TO_LOGIN:"redirectToLogin",REDIRECT_TO_APP:"redirectToApp"};function D(){var{firebaseClientInitConfig:e,firebaseAuthEmulatorHost:t}=v();if(!I().apps.length){if(!e)throw new Error('If not initializing the Firebase JS SDK elsewhere, you must provide "firebaseClientInitConfig" to next-firebase-auth.');I().initializeApp(e)}t&&I().auth().useEmulator("http://".concat(t))}const L={init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(!0===e.debug),y(e),s()&&D()},withAuthUser:function(){var{whenAuthed:e=_.RENDER,whenUnauthedBeforeInit:t=_.RENDER,whenUnauthedAfterInit:r=_.RENDER,appPageURL:n=null,authPageURL:i=null,LoaderComponent:a=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u=>{var c=c=>{var{AuthUserSerialized:h}=c,l=o()(c,["AuthUserSerialized"]),p=S({serializedAuthUser:h}),{user:d,claims:f,initialized:g}=x(),y=S({firebaseUserClientSDK:d,clientInitialized:g,claims:f}),O=g?y:p,k=!!O.id,A=O.clientInitialized,E=k&&e===_.REDIRECT_TO_APP,T=!k&&(!A&&t===_.REDIRECT_TO_LOGIN||A&&r===_.REDIRECT_TO_LOGIN),P=(0,w.useRouter)(),R=(0,m.useCallback)((()=>{var e=n||v().appPageURL;if(!e)throw new Error('The "appPageURL" config setting must be set when using `REDIRECT_TO_APP`.');var t="string"==typeof e?e:e({ctx:void 0,AuthUser:O});if(!t||"string"!=typeof t)throw new Error('The "appPageURL" must be set to a non-empty string or resolve to a non-empty string');P.replace(t)}),[P,O]),I=(0,m.useCallback)((()=>{var e=i||v().authPageURL;if(!e)throw new Error('The "authPageURL" config setting must be set when using `REDIRECT_TO_LOGIN`.');var t="string"==typeof e?e:e({ctx:void 0,AuthUser:O});if(!t||"string"!=typeof t)throw new Error('The "authPageURL" must be set to a non-empty string or resolve to a non-empty string');P.replace(t)}),[P,O]);if((0,m.useEffect)((()=>{s()&&(E?R():T&&I())}),[E,T,R,I]),E||T)return null;if(!A&&!k){if(t===_.SHOW_LOADER)return a?b().createElement(a,null):null;if(t===_.RETURN_NULL)return null}return b().createElement(U.Provider,{value:O},b().createElement(u,l))};return c.displayName="WithAuthUserHOC",c}},useAuthUser:()=>(0,m.useContext)(U),withAuthUserSSR:()=>{throw new Error('"withAuthUserSSR" can only be called server-side.')},withAuthUserTokenSSR:()=>{throw new Error('"withAuthUserTokenSSR" can only be called server-side.')},setAuthCookies:()=>{throw new Error('"setAuthCookies" can only be called server-side.')},unsetAuthCookies:()=>{throw new Error('"unsetAuthCookies" can only be called server-side.')},verifyIdToken:()=>{throw new Error('"verifyIdToken" can only be called server-side.')},AuthAction:_,getFirebaseAdmin:()=>{throw new Error('"getFirebaseAdmin" can only be called server-side.')},getFirebaseClient:()=>{if(0===I().apps.length)throw new Error('"getFirebaseClient": Please initialise before calling');return I()}},N=require("firebase-admin");function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?q(Object(n),!0).forEach((function(r){t()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const z=()=>{if(!N.apps.length){var{firebaseAdminInitConfig:e}=v();if(!e)throw new Error('If not initializing the Firebase admin SDK elsewhere, you must provide "firebaseAdminInitConfig" to next-firebase-auth.');N.initializeApp(H(H({},e),{},{credential:N.credential.cert(H({},e.credential))}))}return N};var K="auth/id-token-expired",F=()=>process.env.FIREBASE_AUTH_EMULATOR_HOST?"http://".concat(process.env.FIREBASE_AUTH_EMULATOR_HOST,"/"):"https://",J=()=>v().firebaseClientInitConfig.apiKey,B=function(){var e=k()((function*(e){if(!e)throw new Error('The "refreshToken" argument is required.');var t=J(),r="".concat(F(),"securetoken.googleapis.com/v1/token?key=").concat(t),n=yield fetch(r,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=refresh_token&refresh_token=".concat(e)}),i=yield n.json();if(!n.ok)throw new Error("Problem refreshing token: ".concat(JSON.stringify(i)));return i.id_token}));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=k()((function*(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e,i=z();try{t=yield i.auth().verifyIdToken(e)}catch(e){if(!r||e.code!==K)throw e;n=yield B(r),t=yield i.auth().verifyIdToken(n)}var o=S({firebaseUserAdminSDK:t,token:n});return o}));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=k()((function*(e){var t=yield M(e),r=z(),n=yield r.auth().createCustomToken(t.id),i=J(),o="".concat(F(),"identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=").concat(i),s=yield fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n,returnSecureToken:!0})}),a=yield s.json();if(!s.ok)throw new Error("Problem getting a refresh token: ".concat(JSON.stringify(a)));var{idToken:u,refreshToken:c}=a;return{idToken:u,refreshToken:c,AuthUser:t}}));return function(t){return e.apply(this,arguments)}}(),G=r(933),V=r.n(G),$=e=>{var t=Buffer.from(e,"base64").toString("utf8");return JSON.parse(t)},Q=e=>{var t=JSON.stringify(e);return Buffer.from(t).toString("base64")},X=function(e){var{req:t,res:r}=e,{keys:n,secure:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=V()(t,r,{keys:n,secure:i});return o},Y=function(e,t){var{req:r,res:n}=t,{keys:i,secure:o,signed:s}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(s&&!i)throw new Error('The "keys" value must be provided when using signed cookies.');var a=X({req:r,res:n},{keys:i,secure:o}),u=a.get(e,{signed:s});return u?$(u):void 0},Z=function(e,t,r){var{req:n,res:i}=r,{keys:o,domain:s,httpOnly:a,maxAge:u,overwrite:c,path:h,sameSite:l,secure:p,signed:d}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(d&&!o)throw new Error('The "keys" value must be provided when using signed cookies.');var f=X({req:n,res:i},{keys:o,secure:p}),g=null==t?void 0:Q(t);f.set(e,g,{domain:s,httpOnly:a,maxAge:u,overwrite:c,path:h,sameSite:l,secure:p,signed:d})},ee=(e,t,r)=>{Z(e,void 0,t,r)},te=()=>v().cookies.name,re=()=>{var e=te();return"".concat(e,".AuthUser")},ne=()=>{var e=te();return"".concat(e,".AuthUserTokens")};const ie=function(){var e=k()((function*(e,t){if(!e.headers||!e.headers.authorization)throw new Error("The request is missing an Authorization header value");var r=e.headers.authorization,{idToken:n,refreshToken:i,AuthUser:o}=yield W(r),s=(e=>{var{domain:t,httpOnly:r,keys:n,maxAge:i,overwrite:o,path:s,sameSite:a,secure:u,signed:c}=e;return{domain:t,httpOnly:r,keys:n,maxAge:i,overwrite:o,path:s,sameSite:a,secure:u,signed:c}})(v().cookies);return Z(ne(),JSON.stringify({idToken:n,refreshToken:i}),{req:e,res:t},s),Z(re(),o.serialize({includeToken:!1}),{req:e,res:t},s),{idToken:n,refreshToken:i,AuthUser:o}}));return function(t,r){return e.apply(this,arguments)}}(),oe=function(){var e=k()((function*(e,t){var r=(e=>{var{domain:t,httpOnly:r,keys:n,maxAge:i,overwrite:o,path:s,sameSite:a,secure:u,signed:c}=e;return{domain:t,httpOnly:r,keys:n,maxAge:i,overwrite:o,path:s,sameSite:a,secure:u,signed:c}})(v().cookies);ee(ne(),{req:e,res:t},r),ee(re(),{req:e,res:t},r)}));return function(t,r){return e.apply(this,arguments)}}();function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?se(Object(n),!0).forEach((function(r){t()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ue=function(){var{whenAuthed:e=_.RENDER,whenUnauthed:t=_.RENDER,appPageURL:r=null,authPageURL:n=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{useToken:i=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o=>function(){var s=k()((function*(s){var a,{req:u,res:c}=s,{keys:h,secure:l,signed:p}=v().cookies;if(i){var d=Y(ne(),{req:u,res:c},{keys:h,secure:l,signed:p}),{idToken:f,refreshToken:g}=d?JSON.parse(d):{};a=f?yield M(f,g):S()}else{var y=Y(re(),{req:u,res:c},{keys:h,secure:l,signed:p});a=S({serializedAuthUser:y})}var m=a.serialize();if(!a.id&&t===_.REDIRECT_TO_LOGIN){var b=n||v().authPageURL;if(!b)throw new Error('When "whenUnauthed" is set to AuthAction.REDIRECT_TO_LOGIN, "authPageURL" must be set.');var w="string"==typeof b?b:b({ctx:s,AuthUser:a});if(!w)throw new Error('The "authPageURL" must be set to a non-empty string or resolve to a non-empty string');return{redirect:{destination:w,permanent:!1}}}if(a.id&&e===_.REDIRECT_TO_APP){var O=r||v().appPageURL;if(!O)throw new Error('When "whenAuthed" is set to AuthAction.REDIRECT_TO_APP, "appPageURL" must be set.');var k="string"==typeof O?O:O({ctx:s,AuthUser:a});if(!k)throw new Error('The "appPageURL" must be set to a non-empty string or resolve to a non-empty string');return{redirect:{destination:k,permanent:!1}}}var A={props:{AuthUserSerialized:m}};if(o){s.AuthUser=a;var E=(yield o(s))||{};E&&(E.props?(A=ae({},E)).props.AuthUserSerialized=m:(E.notFound||E.redirect)&&(A=ae({},E)))}return A}));return function(e){return s.apply(this,arguments)}}()};function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ce(Object(n),!0).forEach((function(r){t()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const le=he(he({},L),{},{init:e=>L.init(e),withAuthUserSSR:e=>ue(e,{useToken:!1}),withAuthUserTokenSSR:e=>ue(e,{useToken:!0}),setAuthCookies:ie,unsetAuthCookies:oe,verifyIdToken:M,getFirebaseAdmin:()=>z()})})(),module.exports=n.default})();