(function(t){function e(e){for(var a,r,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-6fedeada":"31cb2949","chunk-75322c28":"7169a46e","chunk-b6fc8ea2":"0868a210","chunk-1661d6ce":"f2a4c811","chunk-742929a7":"84a5a2cc","chunk-ce0fa262":"5d4c56ce"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-6fedeada":1,"chunk-75322c28":1,"chunk-1661d6ce":1,"chunk-742929a7":1,"chunk-ce0fa262":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-6fedeada":"d9db01a1","chunk-75322c28":"241dbaa7","chunk-b6fc8ea2":"31d6cfe0","chunk-1661d6ce":"5a441deb","chunk-742929a7":"6aaeb435","chunk-ce0fa262":"7a113f59"}[t]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/admin-chatbot-luisa/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"14ee":function(t,e,n){},"1a12":function(t,e,n){},"2dae":function(t,e,n){"use strict";var a=n("14ee"),r=n.n(a);r.a},4360:function(t,e,n){"use strict";n("d81d"),n("d3b7");var a=n("2b0e"),r=n("2f62"),o=n("b47a"),i=n.n(o),c=n("db49"),s={apiKey:c["a"].FIREBASE_APIKEY,authDomain:c["a"].FIREBASE_AUTHDOMAIN,databaseURL:c["a"].FIREBASE_DATABASEURL,projectId:c["a"].FIREBASE_PROJECTID,storageBucket:c["a"].FIREBASE_STORAGEBUCKET,messagingSenderId:c["a"].FIREBASE_MESSAGINGSENDERID,appId:c["a"].FIREBASE_APPID,measurementId:c["a"].FIREBASE_MEASUREMENTID},u=i.a.initializeApp(s),l=u,d=n("bc3a"),f=n.n(d);a["default"].use(r["a"]);e["a"]=new r["a"].Store({state:{userLogged:localStorage.getItem("userLogged"),chartData:null,chartOptions:null,layout:"login-layout",loadingData:!1},mutations:{SET_USER_LOGGED:function(t,e){localStorage.setItem("userLogged",e),t.userLogged=e},REMOVE_USER_LOGGED:function(t){localStorage.removeItem("userLogged"),t.userLogged=""},SET_LAYOUT:function(t,e){t.layout=e},SET_LOADING_DATA:function(t,e){t.loadingData=e}},getters:{isLoggedIn:function(t){return!!t.userLogged}},actions:{signIn:function(t,e){var n=t.commit;return new Promise((function(t,a){l.auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){n("SET_USER_LOGGED",e.user.email),t(!0)})).catch((function(t){console.log("Error al iniciar sesión",t),a(t)}))}))},signOut:function(t){var e=t.commit;return new Promise((function(t,n){l.auth().signOut().then((function(){e("REMOVE_USER_LOGGED"),t(!0)})).catch((function(t){console.log("Error al cerrar sesión",t),n(t)}))}))},getReportDaily:function(t,e){var n=t.state,a=t.commit;t.dispatch;return new Promise((function(t,r){var o={emailUser:n.userLogged,dateStart:e.dateStart,dateEnd:e.dateEnd,apiKey:c["a"].VUE_APP_BACKEND_APIKEY};f.a.post(c["a"].RUTA_BACKEND_CHATBOT+"reports/email/daily",o).then((function(e){e.data.success||r(e.data.message),console.log(e);var n=e.data.message.result.map((function(t){return{date:t._id.substring(0,10),count:t.count}}));a("SET_LOADING_DATA",!1),t(n)})).catch((function(t){r(t)}))}))},getReportMonthly:function(t,e){var n=t.state,a=t.commit;t.dispatch;return new Promise((function(t,r){var o={emailUser:n.userLogged,dateStart:e.dateStart,dateEnd:e.dateEnd,apiKey:c["a"].VUE_APP_BACKEND_APIKEY};f.a.post(c["a"].RUTA_BACKEND_CHATBOT+"reports/email/monthly",o).then((function(e){e.data.success||r(e.data.message);var n=e.data.message.result.map((function(t){return{month:t._id.substring(0,7),count:t.count}}));a("SET_LOADING_DATA",!1),t(n)})).catch((function(t){r(t)}))}))},getReportIntents:function(t,e){var n=t.state,a=t.commit;t.dispatch;return new Promise((function(t,r){var o={emailUser:n.userLogged,dateStart:e.dateStart,dateEnd:e.dateEnd,apiKey:c["a"].VUE_APP_BACKEND_APIKEY};f.a.post(c["a"].RUTA_BACKEND_CHATBOT+"reports/chat/intents",o).then((function(e){e.data.success||r(e.data.message);var n=e.data.message.result.map((function(t){return{intent:t._id,count:t.count}}));a("SET_LOADING_DATA",!1),t(n)})).catch((function(t){r(t)}))}))},getAccountInfo:function(t,e){var n=t.state,a=t.commit;t.dispatch;return new Promise((function(t,e){f.a.get(c["a"].RUTA_BACKEND_CHATBOT+"accounts/".concat(n.userLogged)).then((function(e){a("SET_LOADING_DATA",!1),t(e.data.message.account)})).catch((function(t){e(t.message)}))}))},updateAccountInfo:function(t,e){var n=t.state,a=t.commit;t.dispatch;return new Promise((function(t,r){f.a.put(c["a"].RUTA_BACKEND_CHATBOT+"accounts/".concat(n.userLogged),e).then((function(e){a("SET_LOADING_DATA",!1),t(e.data.message.account)})).catch((function(t){r(t)}))}))}},modules:{}})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.layout,{tag:"component"})},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},c=[],s=n("2877"),u={},l=Object(s["a"])(u,i,c,!1,null,null,null),d=l.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("sidebar"),n("div",{staticClass:"d-flex flex-column",attrs:{id:"content-wrapper"}},[n("div",{attrs:{id:"content"}},[n("navbar"),n("div",{staticClass:"container-fluid"},[n("router-view")],1)],1)])],1)},h=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand topbar mb-4 static-top shadow"},[n("button",{staticClass:"btn btn-link d-md-none rounded-circle mr-3",attrs:{id:"sidebarToggleTop"},on:{click:function(e){return t.toggleSidebar()}}},[n("i",{staticClass:"fa fa-bars"})]),n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item name-user-logged"},[n("div",{staticClass:"nav-link"},[t._v(t._s(this.userLogged))])]),n("li",{staticClass:"nav-item btn-sign-out",on:{click:function(e){return t.signOut()}}},[n("a",{staticClass:"nav-link"},[t._v("Salir")])])])])},g=[],p=(n("ac1f"),n("5319"),n("4360")),E={data:function(){return{}},computed:{isLogged:function(){return this.$store.getters.isLoggedIn},userLogged:function(){return this.$store.state.userLogged}},methods:{toggleSidebar:function(){document.getElementById("accordionSidebar").classList.toggle("toggled"),document.getElementById("page-top").classList.toggle("sidebar-toggled")},signOut:function(){var t=this;p["a"].dispatch("signOut").then((function(){t.$router.replace("/auth/login")}))}}},b=E,A=(n("5dfc"),Object(s["a"])(b,m,g,!1,null,null,null)),v=A.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",{staticClass:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",attrs:{id:"accordionSidebar"}},[t._m(0),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link item-sidebar",attrs:{href:t.links.home}},[n("i",{staticClass:"fas fa-at"}),n("span",[t._v("Emails Enviados")])])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link item-sidebar",attrs:{href:t.links.reportChatbot}},[n("i",{staticClass:"fas fa-comments"}),n("span",[t._v("Estadísticas Chatbot")])])]),n("hr",{staticClass:"sidebar-divider"})])])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-brand d-flex align-items-center justify-content-center"},[n("div",{staticClass:"sidebar-brand-text mx-2"},[t._v("Admin Chatbot Luisa")])])}],I=(n("db49"),{data:function(){return{links:{home:"/admin-chatbot-luisa",adminAccount:"/admin-chatbot-luisa/admin",reportChatbot:"/admin-chatbot-luisa/reportes/chatbot"}}}}),T=I,C=(n("2dae"),Object(s["a"])(T,_,S,!1,null,null,null)),y=C.exports,O={components:{Sidebar:y,Navbar:v}},D=O,L=(n("c72f"),Object(s["a"])(D,f,h,!1,null,null,null)),R=L.exports,k={components:{LoginLayout:d,PrincipalLayout:R},data:function(){return{}},computed:{layout:function(){return this.$store.state.layout}}},B=k,P=(n("034f"),Object(s["a"])(B,r,o,!1,null,null,null)),w=P.exports,N=(n("45fc"),n("d3b7"),n("8c4f"));a["default"].use(N["a"]);var U=[{path:"*",redirect:"/auth/login"},{path:"/",name:"Home",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-b6fc8ea2"),n.e("chunk-742929a7")]).then(n.bind(null,"bb51"))}},{path:"/admin",name:"Admin",meta:{requiresAuth:!0},component:function(){return n.e("chunk-ce0fa262").then(n.bind(null,"2b8a"))}},{path:"/reportes/chatbot",name:"ReportChatbot",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-b6fc8ea2"),n.e("chunk-1661d6ce")]).then(n.bind(null,"f453"))}},{path:"/auth/login",name:"Login",component:function(){return n.e("chunk-6fedeada").then(n.bind(null,"a55b"))}},{path:"/auth/register",name:"Register",component:function(){return n.e("chunk-75322c28").then(n.bind(null,"73cf"))}}],K=new N["a"]({mode:"history",base:"/admin-chatbot-luisa/",routes:U});K.beforeEach((function(t,e,n){console.log(t);var a=window.localStorage.getItem("userLogged"),r=t.matched.some((function(t){return t.meta.requiresAuth}));r&&null===a?n("/auth/login"):n()}));var G=K,j=n("025a"),x=n("2f62"),F=n("5f5b"),M=n("b1e0");n("f9e3"),n("2dd8");a["default"].use(F["a"]),a["default"].use(M["a"]),a["default"].use(j["a"],{}),a["default"].use(x["a"]),a["default"].config.productionTip=!1,new a["default"]({router:G,store:p["a"],render:function(t){return t(w)},mounted:function(){this.$toastr.defaultPosition="toast-top-right",this.$toastr.defaultTimeout=3e3}}).$mount("#app")},"5dfc":function(t,e,n){"use strict";var a=n("1a12"),r=n.n(a);r.a},"85ec":function(t,e,n){},"89c4":function(t,e,n){},c72f:function(t,e,n){"use strict";var a=n("89c4"),r=n.n(a);r.a},db49:function(t,e,n){"use strict";var a={RUTA_BACKEND_CHATBOT:"https://us-central1-chatbot-luisa.cloudfunctions.net/chatbot/",FIREBASE_APIKEY:"AIzaSyAaS40woQ6w3aelS2N6L34RzbGKgpXFN2E",FIREBASE_AUTHDOMAIN:"chatbot-luisa.firebaseapp.com",FIREBASE_DATABASEURL:"https://chatbot-291013.firebaseio.com",FIREBASE_PROJECTID:"chatbot-luisa",FIREBASE_STORAGEBUCKET:"chatbot-luisa.appspot.com",FIREBASE_MESSAGINGSENDERID:"645471949425",FIREBASE_APPID:"1:645471949425:web:53afe02b91c7e6af6fc1d0",FIREBASE_MEASUREMENTID:"G-QSZ48B0C2Q",VUE_APP_BASE_URL:"/admin-chatbot-luisa",VUE_APP_BACKEND_APIKEY:"5f6ca6d59d8e240a4c39968a"};e["a"]=a}});
//# sourceMappingURL=app.5628937c.js.map