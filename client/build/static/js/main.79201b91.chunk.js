(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){"use strict";n.a={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE",TOGGLE_DARK_MODE:"TOGGLE_DARK_MODE"}},14:function(e,n,t){"use strict";t.d(n,"d",function(){return s}),t.d(n,"a",function(){return d}),t.d(n,"c",function(){return f}),t.d(n,"f",function(){return p}),t.d(n,"b",function(){return b}),t.d(n,"e",function(){return m}),t.d(n,"g",function(){return h});var r=t(2),a=t.n(r),c=t(12),o=t(35),i=t(33),u=t.n(i),l=(t(84),t(87),console.log);u.a.initializeApp({apiKey:"AIzaSyCJzSTV0IWS7r_cgEJ1uzya2uH2MVyfJaM",authDomain:"shaja-267509.firebaseapp.com",databaseURL:"https://shaja-267509.firebaseio.com",projectId:"shaja-267509",storageBucket:"shaja-267509.appspot.com",messagingSenderId:"413253657609",appId:"1:413253657609:web:d86c050f91983b793dc4d8",measurementId:"G-CC4FG5NYHV"});var s=function(){var e=Object(o.a)(a.a.mark(function e(n,t){var r,o,i,u,s,d,f;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return r=m.doc("users/".concat(n.uid)),e.next=5,r.get();case 5:if(o=e.sent,l("This is the receieved snapShot of the user before signing in from fireStore DB :D ...",o),r.onSnapshot(function(e){l("This is the actual document data from a refreshed snapShot :D ...",e.data())}),o.exists){e.next=19;break}return i=n.displayName,u=n.email,s=n.phoneNumber,d=n.photoURL,f=new Date,e.prev=11,e.next=14,r.set(Object(c.a)({displayName:i,email:u,phoneNumber:s,oAuthPhoto:d,createdAt:f},t));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(11),console.log("error creating user",e.t0.message);case 19:return e.abrupt("return",r);case 20:case"end":return e.stop()}},e,null,[[11,16]])}));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(a.a.mark(function e(n,t){var r,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=m.collection(n),c=m.batch(),t.forEach(function(e){var n=r.doc();console.log("New data is waiting to be added in this directory on Firestore.",n),c.set(n,e)}),e.next=5,c.commit();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),f=function(e){return e.docs.map(function(e){var n=e.data(),t=n.title,r=n.items;return{routeName:encodeURI(t.toLowerCase()),id:e.id,title:t,items:r}}).reduce(function(e,n){return e[n.title.toLowerCase()]=n,e},{})},p=function(){return new Promise(function(e,n){var t=b.onAuthStateChanged(function(n){l("This is the received object from Firebase authentication. Here we go :D ",n),t(),e(n)},n)})},b=u.a.auth(),m=u.a.firestore(),h=new u.a.auth.GoogleAuthProvider;h.setCustomParameters({prompt:"select_account"});u.a},16:function(e,n,t){"use strict";t.d(n,"e",function(){return a}),t.d(n,"a",function(){return c}),t.d(n,"d",function(){return o}),t.d(n,"c",function(){return i}),t.d(n,"b",function(){return u});var r=t(19),a=function(){return{type:r.a.TOGGLE_CART_HIDDEN}},c=function(e){return{type:r.a.ADD_ITEM,payload:e}},o=function(e){return{type:r.a.REMOVE_ITEM,payload:e}},i=function(e){return{type:r.a.CLEAR_ITEM_FROM_CART,payload:e}},u=function(){return{type:r.a.CLEAR_CART}}},17:function(e,n,t){"use strict";t.d(n,"c",function(){return a}),t.d(n,"e",function(){return c}),t.d(n,"d",function(){return o}),t.d(n,"b",function(){return i}),t.d(n,"a",function(){return u}),t.d(n,"g",function(){return l}),t.d(n,"h",function(){return s}),t.d(n,"f",function(){return d}),t.d(n,"j",function(){return f}),t.d(n,"k",function(){return p}),t.d(n,"i",function(){return b});var r=t(11),a=function(){return{type:r.a.GOOGLE_SIGN_IN_START}},c=function(e){return{type:r.a.SIGN_IN_SUCCESS,payload:e}},o=function(e){return{type:r.a.SIGN_IN_FAILURE,payload:e}},i=function(e){return{type:r.a.EMAIL_SIGN_IN_START,payload:e}},u=function(){return{type:r.a.CHECK_USER_SESSION}},l=function(){return{type:r.a.SIGN_OUT_START}},s=function(){return{type:r.a.SIGN_OUT_SUCCESS}},d=function(e){return{type:r.a.SIGN_OUT_FAILURE,payload:e}},f=function(e){return{type:r.a.SIGN_UP_START,payload:e}},p=function(e){var n=e.user,t=e.additionalData;return{type:r.a.SIGN_UP_SUCCESS,payload:{user:n,additionalData:t}}},b=function(e){return{type:r.a.SIGN_UP_FAILURE,payload:e}}},19:function(e,n,t){"use strict";n.a={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"}},24:function(e,n,t){"use strict";n.a={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"}},25:function(e,n,t){"use strict";function r(e,n,t){var r,a=n.theme&&n.theme[e];return"function"===typeof(r="function"===typeof a?a(t):t[a])?r(n):r}function a(e,n){return function(t){return r(e,t,n)}}a.variants=function(e,n,t){return function(a){var c=a[n]&&t[a[n]];return c&&r(e,a,c)}},e.exports=a},26:function(e,n,t){"use strict";t.d(n,"b",function(){return c}),t.d(n,"a",function(){return o}),t.d(n,"c",function(){return i}),t.d(n,"d",function(){return u});var r=t(10),a=function(e){return e.cart},c=Object(r.a)([a],function(e){return e.cartItems}),o=Object(r.a)([a],function(e){return e.hidden}),i=Object(r.a)([c],function(e){return e.reduce(function(e,n){return e+n.quantity},0)}),u=Object(r.a)([c],function(e){return e.reduce(function(e,n){return e+n.quantity*n.price},0)})},41:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"c",function(){return c}),t.d(n,"a",function(){return o});var r=t(24),a=(t(14),function(){return{type:r.a.FETCH_COLLECTIONS_START}}),c=function(e){return{type:r.a.FETCH_COLLECTIONS_SUCCESS,payload:e}},o=function(e){return{type:r.a.FETCH_COLLECTIONS_FAILURE,payload:e}}},45:function(e,n,t){"use strict";var r=t(34),a=t(0),c=t.n(a),o=t(7),i=t(4);function u(){var e=Object(o.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  ","\n"]);return u=function(){return e},e}function l(){var e=Object(o.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return l=function(){return e},e}function s(){var e=Object(o.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return s=function(){return e},e}function d(){var e=Object(o.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return d=function(){return e},e}var f=Object(i.c)(d()),p=Object(i.c)(s()),b=Object(i.c)(l()),m=i.d.button(u(),function(e){return e.isGoogleSignIn?b:e.inverted?p:f});n.a=function(e){var n=e.children,t=Object(r.a)(e,["children"]);return c.a.createElement(m,t,n)}},47:function(e,n,t){e.exports=t.p+"static/media/sprite-medals.d666b9f5.svg"},48:function(e,n,t){"use strict";t.d(n,"b",function(){return u}),t.d(n,"a",function(){return l});var r=t(10),a=t(64),c=t.n(a),o=function(e){return e.shop},i=Object(r.a)([o],function(e){return e.collections}),u=Object(r.a)([i],function(e){return e?Object.keys(e).map(function(n){return e[n]}):[]}),l=c()(function(e){return Object(r.a)([i],function(n){return n?n[e]:null})});Object(r.a)([o],function(e){return e.isFetching}),Object(r.a)([o],function(e){return!!e.collections})},54:function(e,n,t){"use strict";var r=t(0),a=t.n(r),c=t(7),o=t(4);function i(){var e=Object(c.a)(["\n  display: inline-block;\n  width: 50px;\n  border-color: green;\n  height: 50px;\n  ","\n  border: 2px solid rgba(10, 20, 30, 0.6);\n  border-radius: 50%;\n  border-top-color: red;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 0.9s ease-in-out infinite;\n\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return i=function(){return e},e}function u(){var e=Object(c.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return u=function(){return e},e}var l=o.d.div(u()),s=o.d.div(i(),"");n.a=function(){return a.a.createElement(l,null,a.a.createElement(s,null))}},71:function(e,n,t){e.exports=t(98)},89:function(e,n,t){},90:function(e,n,t){},91:function(e,n,t){},97:function(e,n,t){},98:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(31),o=t.n(c),i=t(28),u=t(13),l=t(56),s=t(21),d=t(37),f=(t(80),t(65)),p=t(57),b=t.n(p),m=t(12),h=t(19),O=t(66),g=function(e,n){return 1===e.find(function(e){return e.id===n.id}).quantity?e.filter(function(e){return e.id!==n.id}):e.map(function(e){return e.id===n.id?Object(m.a)({},e,{quantity:e.quantity-1}):e})},v={hidden:!0,cartItems:[]},E=function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case h.a.TOGGLE_CART_HIDDEN:return Object(m.a)({},t,{hidden:!t.hidden});case h.a.ADD_ITEM:return Object(m.a)({},t,{cartItems:(e=t.cartItems,n=r.payload,e.find(function(e){return e.id===n.id})?e.map(function(e){return e.id===n.id?Object(m.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(O.a)(e),[Object(m.a)({},n,{quantity:1})]))});case h.a.REMOVE_ITEM:return Object(m.a)({},t,{cartItems:g(t.cartItems,r.payload)});case h.a.CLEAR_ITEM_FROM_CART:return Object(m.a)({},t,{cartItems:t.cartItems.filter(function(e){return e.id!==r.payload.id})});case h.a.CLEAR_CART:return Object(m.a)({},t,{cartItems:[]});default:return t}},j={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;return(arguments.length>1?arguments[1]:void 0).type,e},S=t(24),_={collections:null,isFetching:!1,errorMessage:void 0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case S.a.FETCH_COLLECTIONS_START:return Object(m.a)({},e,{isFetching:!0});case S.a.FETCH_COLLECTIONS_SUCCESS:return Object(m.a)({},e,{isFetching:!1,collections:n.payload});case S.a.FETCH_COLLECTIONS_FAILURE:return Object(m.a)({},e,{isFetching:!1,errorMessage:n.payload});default:return e}},w={TOGGLE_DARK_MODE:"TOGGLE_DARK_MODE"},k={darkMode:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;switch((arguments.length>1?arguments[1]:void 0).type){case w.TOGGLE_DARK_MODE:return console.log("Dark Mode :D"),Object(m.a)({},e,{darkMode:!e.darkMode});default:return e}},I=t(11),T={currentUser:null,error:null,darkMode:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case I.a.SIGN_IN_SUCCESS:return Object(m.a)({},e,{currentUser:n.payload,error:null});case I.a.TOGGLE_DARK_MODE:return console.log("Hello from reducer :D"),Object(m.a)({},e,{darkMode:!0});case I.a.SIGN_OUT_SUCCESS:return Object(m.a)({},e,{currentUser:null,error:null});case I.a.SIGN_IN_FAILURE:case I.a.SIGN_OUT_FAILURE:case I.a.SIGN_UP_FAILURE:return Object(m.a)({},e,{error:n.payload});default:return e}},R={key:"root",storage:b.a,whitelist:["cart"]},U=Object(s.c)({user:N,cart:E,directory:x,shop:y,mode:C}),A=Object(d.a)(R,U),G=t(2),L=t.n(G),D=t(5),M=t(14),F=t(41),H=L.a.mark(B),P=L.a.mark(K),z=L.a.mark(W);function B(){var e,n,t;return L.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=M.e.collection("collections"),r.next=4,e.get();case 4:return n=r.sent,r.next=7,Object(D.b)(M.c,n);case 7:return t=r.sent,r.next=10,Object(D.c)(Object(F.c)(t));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(D.c)(Object(F.a)(r.t0.message));case 16:case"end":return r.stop()}},H,null,[[0,12]])}function K(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(S.a.FETCH_COLLECTIONS_START,B);case 2:case"end":return e.stop()}},P)}function W(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([Object(D.b)(K)]);case 2:case"end":return e.stop()}},z)}var q=t(17),V=L.a.mark(ie),J=L.a.mark(ue),Y=L.a.mark(le),$=L.a.mark(se),Q=L.a.mark(de),X=L.a.mark(fe),Z=L.a.mark(pe),ee=L.a.mark(be),ne=L.a.mark(me),te=L.a.mark(he),re=L.a.mark(Oe),ae=L.a.mark(ge),ce=L.a.mark(ve),oe=L.a.mark(Ee);function ie(e,n){var t,r;return L.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(D.b)(M.d,e,n);case 3:return t=a.sent,a.next=6,t.get();case 6:return r=a.sent,a.next=9,Object(D.c)(Object(q.e)(Object(m.a)({id:r.id},r.data())));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(D.c)(Object(q.d)(a.t0));case 15:case"end":return a.stop()}},V,null,[[0,11]])}function ue(){var e,n;return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.b.signInWithPopup(M.g);case 3:return e=t.sent,n=e.user,t.next=7,ie(n);case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(D.c)(Object(q.d)(t.t0));case 13:case"end":return t.stop()}},J,null,[[0,9]])}function le(e){var n,t,r,a,c;return L.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return n=e.payload,t=n.email,r=n.password,o.prev=1,o.next=4,M.b.signInWithEmailAndPassword(t,r);case 4:return a=o.sent,c=a.user,o.next=8,ie(c);case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(D.c)(Object(q.d)(o.t0));case 14:case"end":return o.stop()}},Y,null,[[1,10]])}function se(){var e;return L.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(M.f)();case 3:if(e=n.sent){n.next=6;break}return n.abrupt("return");case 6:return n.next=8,ie(e);case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object(D.c)(Object(q.d)(n.t0));case 14:case"end":return n.stop()}},$,null,[[0,10]])}function de(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.b.signOut();case 3:return e.next=5,Object(D.c)(Object(q.h)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(D.c)(Object(q.f)(e.t0));case 11:case"end":return e.stop()}},Q,null,[[0,7]])}function fe(e){var n,t,r,a,c,o;return L.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.payload,t=n.email,r=n.password,a=n.displayName,i.prev=1,i.next=4,M.b.createUserWithEmailAndPassword(t,r);case 4:return c=i.sent,o=c.user,i.next=8,Object(D.c)(Object(q.k)({user:o,additionalData:{displayName:a}}));case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(D.c)(Object(q.i)(i.t0));case 14:case"end":return i.stop()}},X,null,[[1,10]])}function pe(e){var n,t,r;return L.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.payload,t=n.user,r=n.additionalData,a.next=3,ie(t,r);case 3:case"end":return a.stop()}},Z)}function be(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(I.a.GOOGLE_SIGN_IN_START,ue);case 2:case"end":return e.stop()}},ee)}function me(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(I.a.EMAIL_SIGN_IN_START,le);case 2:case"end":return e.stop()}},ne)}function he(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(I.a.CHECK_USER_SESSION,se);case 2:case"end":return e.stop()}},te)}function Oe(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(I.a.SIGN_OUT_START,de);case 2:case"end":return e.stop()}},re)}function ge(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(I.a.SIGN_UP_START,fe);case 2:case"end":return e.stop()}},ae)}function ve(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(I.a.SIGN_UP_SUCCESS,pe);case 2:case"end":return e.stop()}},ce)}function Ee(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([Object(D.b)(be),Object(D.b)(me),Object(D.b)(he),Object(D.b)(Oe),Object(D.b)(ge),Object(D.b)(ve)]);case 2:case"end":return e.stop()}},oe)}var je=t(16),xe=L.a.mark(ye),Se=L.a.mark(we),_e=L.a.mark(ke);function ye(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.c)(Object(je.b)());case 2:case"end":return e.stop()}},xe)}function we(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(I.a.SIGN_OUT_SUCCESS,ye);case 2:case"end":return e.stop()}},Se)}function ke(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([Object(D.b)(we)]);case 2:case"end":return e.stop()}},_e)}var Ce=L.a.mark(Ie);function Ie(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([Object(D.b)(W),Object(D.b)(Ee),Object(D.b)(ke)]);case 2:case"end":return e.stop()}},Ce)}var Te=Object(f.a)(),Ne=[Te];var Re=Object(s.d)(A,s.a.apply(void 0,Ne));Te.run(Ie);var Ue=Object(d.b)(Re),Ae=(d.b,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Ge(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(89),t(90);var Le=t(30),De=t(10),Me=t(4),Fe=t(58),He=t(59),Pe=t(67),ze=t(60),Be=t(68),Ke=t(7);function We(){var e=Object(Ke.a)(["\n  font-size: 28px;\n  color: #2f8e89;\n"]);return We=function(){return e},e}function qe(){var e=Object(Ke.a)(["\n  display: inline-block;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"]);return qe=function(){return e},e}function Ve(){var e=Object(Ke.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Ve=function(){return e},e}var Je=Me.d.div(Ve()),Ye=Me.d.div(qe(),function(e){var n=e.imageUrl;return"url(".concat(n,")")}),$e=Me.d.h2(We()),Qe=function(e){function n(){var e;return Object(Fe.a)(this,n),(e=Object(Pe.a)(this,Object(ze.a)(n).call(this))).state={hasErrored:!1},e}return Object(Be.a)(n,e),Object(He.a)(n,[{key:"componentDidCatch",value:function(e,n){console.log(e)}},{key:"render",value:function(){return this.state.hasErrored?a.a.createElement(Je,null,a.a.createElement(Ye,{imageUrl:"https://banner2.cleanpng.com/20180304/wpe/kisspng-web-development-http-404-world-wide-web-website-we-blue-cartoon-monster-5a9c0ec981df50.615012421520176841532.jpg"}),a.a.createElement($e,null,"Ooops ! something bad happened :( ")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),n}(a.a.Component);function Xe(){return(Xe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Ze(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var en=a.a.createElement("title",null,"Group"),nn=a.a.createElement("desc",null,"Created with Sketch."),tn=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",cx:48,cy:9,r:2})))),rn=function(e){var n=e.svgRef,t=Ze(e,["svgRef"]);return a.a.createElement("svg",Xe({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:n},t),en,nn,tn)},an=a.a.forwardRef(function(e,n){return a.a.createElement(rn,Xe({svgRef:n},e))}),cn=(t.p,t(47)),on=t.n(cn),un=t(26);t(91);function ln(){return(ln=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function sn(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var dn=a.a.createElement("title",null,"star"),fn=a.a.createElement("path",{d:"M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"}),pn=function(e){var n=e.svgRef,t=sn(e,["svgRef"]);return a.a.createElement("svg",ln({width:20,height:20,viewBox:"0 0 20 20",ref:n},t),dn,fn)},bn=a.a.forwardRef(function(e,n){return a.a.createElement(pn,ln({svgRef:n},e))});t.p;function mn(){var e=Object(Ke.a)(["\n  position: absolute;\n  font-size: 10px;\n  font-weight: bold;\n  bottom: 12px;\n"]);return mn=function(){return e},e}function hn(){var e=Object(Ke.a)(["\n  width: 24px;\n  height: 24px;\n  fill: pink;\n\n"]);return hn=function(){return e},e}function On(){var e=Object(Ke.a)(["\n  width: 24px;\n  height: 24px;\n  fill: lightblue;\n \n  cursor: pointer;\n"]);return On=function(){return e},e}function gn(){var e=Object(Ke.a)(["\n  width: 100px;\n  height: 100px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  \n"]);return gn=function(){return e},e}var vn=Me.d.div(gn()),En=Me.d.svg(On());vn.displayName="SearchContainer";var jn=Object(Me.d)(bn)(hn());Me.d.span(mn()).displayName="ItemCountContainer";var xn=Object(De.b)({itemCount:un.c}),Sn=Object(u.b)(xn,function(e){return{toggleCartHidden:function(){return e(Object(je.e)())}}})(function(e){var n=e.toggleCartHidden;e.itemCount;return a.a.createElement(vn,null,a.a.createElement(an,{className:"nanai-icon",onClick:n}),a.a.createElement(jn,null),a.a.createElement(En,{onClick:n},a.a.createElement("use",{href:on.a+"#icon-trophy"})))}),_n=Object(De.a)([function(e){return e.mode}],function(e){return e.darkMode}),yn=Object(De.a)([function(e){return e.user}],function(e){return e.currentUser});function wn(){var e=Object(Ke.a)(["\n         font: inherit;\n         font-size: 1.5rem;\n         padding: 0.5em 1em;\n         border: none;\n         background-color: ",";\n         ","\n         color: ",";\n         border-radius: 0.25em;\n         margin-right: 0.5em;\n         cursor: pointer;\n       "]);return wn=function(){return e},e}var kn=Me.d.button(wn(),function(e){return e.theme.background},"",function(e){return e.theme.foreground});kn.defaultProps={kind:"default"};var Cn=kn;function In(){return(In=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Tn(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Nn=a.a.createElement("g",null,a.a.createElement("path",{d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Rn=a.a.createElement("g",null),Un=a.a.createElement("g",null),An=a.a.createElement("g",null),Gn=a.a.createElement("g",null),Ln=a.a.createElement("g",null),Dn=a.a.createElement("g",null),Mn=a.a.createElement("g",null),Fn=a.a.createElement("g",null),Hn=a.a.createElement("g",null),Pn=a.a.createElement("g",null),zn=a.a.createElement("g",null),Bn=a.a.createElement("g",null),Kn=a.a.createElement("g",null),Wn=a.a.createElement("g",null),qn=a.a.createElement("g",null),Vn=function(e){var n=e.svgRef,t=Tn(e,["svgRef"]);return a.a.createElement("svg",In({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:n},t),Nn,Rn,Un,An,Gn,Ln,Dn,Mn,Fn,Hn,Pn,zn,Bn,Kn,Wn,qn)},Jn=a.a.forwardRef(function(e,n){return a.a.createElement(Vn,In({svgRef:n},e))});t.p;function Yn(){var e=Object(Ke.a)(["\n  position: absolute;\n  font-size: 10px;\n  font-weight: bold;\n  bottom: 12px;\n"]);return Yn=function(){return e},e}function $n(){var e=Object(Ke.a)(["\n  width: 24px;\n  height: 24px;\n  fill: pink;\n  ","\n"]);return $n=function(){return e},e}function Qn(){var e=Object(Ke.a)(["\n  width: 45px;\n  height: 45px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"]);return Qn=function(){return e},e}var Xn=Me.d.div(Qn());Xn.displayName="CartContainer";var Zn=Object(Me.d)(Jn)($n(),""),et=Me.d.span(Yn());et.displayName="ItemCountContainer";var nt=Object(De.b)({itemCount:un.c}),tt=Object(u.b)(nt,function(e){return{toggleCartHidden:function(){return e(Object(je.e)())}}})(function(e){var n=e.toggleCartHidden,t=e.itemCount;return a.a.createElement(Xn,{onClick:n},a.a.createElement(Zn,null),a.a.createElement(et,null,t))});function rt(){var e=Object(Ke.a)(["\n  padding-left: 12px;\n  padding-top: 1.5rem;\n  cursor: pointer;\n"]);return rt=function(){return e},e}function at(){var e=Object(Ke.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 10px 20px;\n"]);return at=function(){return e},e}function ct(){var e=Object(Ke.a)(["\n  width: 30%;\n"]);return ct=function(){return e},e}function ot(){var e=Object(Ke.a)(["\n  width: 100%;\n  display: flex;\n  height: 80px;\n  margin-bottom: 15px;\n"]);return ot=function(){return e},e}var it=Me.d.div(ot()),ut=Me.d.img(ct()),lt=Me.d.div(at()),st=Me.d.div(rt());st.displayName="RemoveButtonContainer";var dt=Object(u.b)(null,function(e){return{clearItem:function(n){return e(Object(je.c)(n))},addItem:function(n){return e(Object(je.a)(n))},removeItem:function(n){return e(Object(je.d)(n))}}})(function(e){var n=e.cartItem,t=e.clearItem,r=n.imageUrl,c=n.price,o=n.name,i=n.quantity;return a.a.createElement(it,null,a.a.createElement(ut,{src:r,alt:"item"}),a.a.createElement(lt,null,a.a.createElement("span",null,o),a.a.createElement("span",null,i," x $",c)),a.a.createElement(st,{onClick:function(){return t(n)}},"\u2715"))}),ft=t(45);function pt(){var e=Object(Ke.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n"]);return pt=function(){return e},e}function bt(){var e=Object(Ke.a)(["\n  font-size: 18px;\n  margin: 50px auto;\n"]);return bt=function(){return e},e}function mt(){var e=Object(Ke.a)(["\n  margin-top: auto;\n"]);return mt=function(){return e},e}function ht(){var e=Object(Ke.a)(["\n         position: absolute;\n         background-image: linear-gradient(to right, orangered, mediumseagreen);\n         width: 240px;\n         height: 340px;\n         display: flex;\n         flex-direction: column;\n         padding: 20px;\n         border: 1px solid black;\n         background-color: white;\n         top: 90px;\n         right: 400px;\n         z-index: 5;\n       "]);return ht=function(){return e},e}var Ot=Me.d.div(ht()),gt=Object(Me.d)(ft.a)(mt());gt.displayName="CartDropdownButton";var vt=Me.d.span(bt());vt.displayName="EmptyMessageContainer";var Et=Me.d.div(pt()),jt=Object(De.b)({cartItems:un.b}),xt=Object(Le.f)(Object(u.b)(jt)(function(e){var n=e.cartItems,t=e.history,r=e.dispatch;return a.a.createElement(Ot,null,a.a.createElement(Et,null,n.length?n.map(function(e){return a.a.createElement(dt,{key:e.id,cartItem:e})}):a.a.createElement(vt,null,"Your cart is empty")),a.a.createElement(gt,{onClick:function(){t.push("/checkout"),r(Object(je.e)())}},"GO TO CHECKOUT"))})),St=t(25),_t=t.n(St),yt="#fff",wt="black",kt="#D8D8D8",Ct="#ccc",It="#444",Tt="#222",Nt="#2196F3",Rt="#104977",Ut="#3b5221",At="#ffc107",Gt="#715605",Lt="#e91e63",Dt="#670a2a",Mt="orangered",Ft="darkred";_t()("mode",{light:wt,dark:yt,felal:Dt}),_t()("mode",{light:"white",dark:Tt,felal:"red"}),_t()("mode",{light:kt,dark:It,felal:Ft}),_t.a.variants("mode","kind",{default:{light:kt,dark:Ct,felal:kt},primary:{light:Nt,dark:Rt,felal:Mt},success:{light:Dt,dark:Ut,felal:Mt},warning:{light:At,dark:Gt,felal:Mt},danger:{light:Lt,dark:Dt,felal:Ft}}),_t()("mode",{light:yt,dark:Tt}),_t()("mode",{light:Tt,dark:kt});function Ht(){var e=Object(Ke.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n  \n"]);return Ht=function(){return e},e}function Pt(){var e=Object(Ke.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  \n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]);return Pt=function(){return e},e}function zt(){var e=Object(Ke.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n\n  @media screen and (max-width: 800px) {\n    width: 50px;\n    padding: 0;\n  }\n"]);return zt=function(){return e},e}function Bt(){var e=Object(Ke.a)(["\n         height: 70px;\n         width: 100%;\n         display: flex;\n         justify-content: space-between;\n         margin-bottom: 25px;\n         ","\n         color: 'pink';\n\n         background-color: ",";\n\n         /* Color the border and text with theme.main */\n         ","\n         border: 5px solid ",";\n\n         @media screen and (max-width: 800px) {\n           height: 60px;\n           padding: 10px;\n           margin-bottom: 20px;\n         }\n       "]);return Bt=function(){return e},e}var Kt=Me.d.div(Bt(),"",function(e){return e.theme.background},"",function(e){return e.theme.foreground}),Wt=Object(Me.d)(i.b)(zt()),qt=Me.d.div(Pt()),Vt=Object(Me.d)(i.b)(Ht());Vt.displayName="OptionLink";var Jt=Object(De.b)({currentUser:yn,hidden:un.a,darkMode:_n}),Yt=Object(u.b)(Jt,function(e){return{signOutStart:function(){return e(Object(q.g)())},toggleDarkMode:function(){return e({type:w.TOGGLE_DARK_MODE})},toggleCartHidden:function(){return e(Object(je.e)())}}})(function(e){var n=e.currentUser,t=e.hidden,r=e.signOutStart,c=e.toggleDarkMode;return a.a.createElement(Kt,null,a.a.createElement(Wt,{to:"/"},a.a.createElement(an,{className:"logo"})),a.a.createElement(Cn,{kind:"warning",onClick:c},"Toggle Mode"),a.a.createElement(Cn,null,"Default Btn"),a.a.createElement(Cn,{kind:"success",onClick:function(){return console.log("success clicked :D")}},"Toggle Size"),a.a.createElement(qt,null,a.a.createElement(Vt,{to:"/shop"},"SHOP"),a.a.createElement(Vt,{to:"/shop"},"CONTACT"),n?a.a.createElement(Vt,{as:"div",onClick:r},"SIGN OUT"):a.a.createElement(Vt,{to:"/signin"},"SIGN IN"),a.a.createElement(tt,null),a.a.createElement(Sn,null)),t?null:a.a.createElement(xt,null))}),$t=t(54),Qt=t(35),Xt=t(49),Zt=(t(97),t(48)),er=Object(De.b)({collectionsArray:Zt.b}),nr=Object(u.b)(er)(function(e){var n=e.collectionsArray,t=Object(r.useState)(!1),c=Object(Xt.a)(t,2),o=c[0],i=c[1],u=function(){var e=Object(Qt.a)(L.a.mark(function e(t){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(M.a)("collections",n.map(function(e){return{title:e.title,items:e.items}}));case 3:console.log("Added in Firestore :D"),i(!0);case 5:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}();return a.a.createElement("p",null,o?a.a.createElement("marquee",null,"Data Uploaded Successfully to your DB in Firestore!!!"):a.a.createElement("button",{className:"fireButton",onClick:u},"Upload to Firestore"))}),tr=_t()("size",{normal:"1em",large:"1.5em"});function rr(){var e=Object(Ke.a)(["\n\tbody {\n\t\tfont-family: 'Open Sans Condensed';\n\t\tpadding: 20px 40px;\n\t\tbackground-color: ",";\n\t\tcolor: ",";\n\t\t\n\t\t","\n\t\t\n\t\t","\n\t\t\n\t\tfont-size: ",";\n\t\t\n\t\t@media screen and (max-width: 800px) {\n\t\t\tpadding: 10px;\n\t\t}\n\t}\n\n\ta,\n\ta:link,\n\ta:hover {\n\t\ttext-decoration: none;\n\t\tcolor: ",";\n\t\t\n\t}\n\n\t* {\n\t\tbox-sizing: border-box;\n\t\ttransition: background-color .3s ease-out;\n\t\t\n\t}\n"]);return rr=function(){return e},e}var ar=Object(Me.b)(rr(),function(e){return e.theme.background},function(e){return e.theme&&e.theme.foreground},"","",tr,function(e){return e.theme.foreground}),cr=Object(De.b)({darkMode:_n}),or=Object(u.b)(cr)(ar),ir=t(34),ur={main:Ut,foreground:Tt,background:kt,mode:"light",size:"large",linkColor:"darkviolet",header:"yellow"},lr=function(e){var n=e.mode,t=e.main,r=Object(ir.a)(e,["mode","main"]);return Object(m.a)({mode:n,main:t},r)},sr=function(e){var n=e.foreground,t=e.background,r=Object(ir.a)(e,["foreground","background"]);return Object(m.a)({foreground:t,background:n},r)},dr=Object(r.lazy)(function(){return t.e(8).then(t.bind(null,143))}),fr=Object(r.lazy)(function(){return t.e(4).then(t.bind(null,141))}),pr=Object(r.lazy)(function(){return t.e(9).then(t.bind(null,146))}),br=Object(r.lazy)(function(){return t.e(10).then(t.bind(null,142))}),mr=Object(r.lazy)(function(){return Promise.all([t.e(3),t.e(7)]).then(t.bind(null,144))}),hr=Object(De.b)({currentUser:yn,darkMode:_n}),Or=Object(u.b)(hr,function(e){return{checkUserSession:function(){return e(Object(q.a)())}}})(function(e){var n=e.checkUserSession,t=e.currentUser,c=e.darkMode;return Object(r.useEffect)(function(){n()},[n]),a.a.createElement(Me.a,{theme:ur},a.a.createElement(Me.a,{theme:c?sr:lr},a.a.createElement("div",null,a.a.createElement(or,{darkMode:!0}),a.a.createElement(Me.a,{theme:lr},a.a.createElement(Yt,{darkMode:!0})),a.a.createElement(Le.d,null,a.a.createElement(Qe,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement($t.a,null)},a.a.createElement(Le.b,{exact:!0,path:"/",component:dr}),a.a.createElement(Le.b,{exact:!0,path:"/landing",component:fr}),a.a.createElement(Le.b,{path:"/shop",component:pr}),a.a.createElement(Le.b,{exact:!0,path:"/checkout",component:mr}),a.a.createElement(Le.b,{exact:!0,path:"/firebaseDBUpload",component:nr}),a.a.createElement(Le.b,{exact:!0,path:"/signin",render:function(){return t?a.a.createElement(Le.a,{to:"/"}):a.a.createElement(br,null)}})))))))});o.a.render(a.a.createElement(u.a,{store:Re},a.a.createElement(i.a,null,a.a.createElement(l.a,{persistor:Ue},a.a.createElement(Or,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");Ae?(function(e,n){fetch(e).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ge(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ge(n,e)})}}()}},[[71,1,2]]]);
//# sourceMappingURL=main.79201b91.chunk.js.map