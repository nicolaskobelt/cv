(function(t){function e(e){for(var i,r,l=e[0],o=e[1],c=e[2],u=0,d=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);v&&v(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var v=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2967:function(t,e,a){t.exports=a.p+"img/logo-ucc-2018.21aa6f28.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{app:"",color:"gray"}},[i("div",{staticClass:"d-flex align-center"},[i("v-btn",{staticClass:"hidden-sm-and-up",attrs:{icon:"",color:"black"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[i("v-icon",[t._v("fas fa-bars")])],1)],1),i("v-icon"),t._l(t.items,(function(e){return i("v-toolbar-items",{key:e,staticClass:"hidden-xs-only"},[i("v-btn",{attrs:{text:""},on:{click:function(a){return t.$vuetify.goTo(e.target)}}},[i("v-icon",{staticClass:"cyan--text text--dark-6",attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)],1)})),i("v-spacer")],2),i("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:a("9db7")}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Nicolás")])],1)],1),i("v-divider"),i("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return i("v-list-item",{key:e.title,attrs:{link:""}},[i("v-list-item-icon",[i("v-icon",{staticClass:"cyan--text text--dark-6"},[t._v(t._s(e.icon))])],1),i("v-list-item-content",{on:{click:function(a){t.$vuetify.goTo(e.target),t.drawer=!t.drawer}}},[i("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),i("v-content",[i("HelloWorld")],1),i("v-card",{attrs:{height:"50"}},[i("v-footer",{staticClass:"font-weight-medium",attrs:{absolute:""}},[i("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),i("strong",[t._v("By Nicolás Kobelt made with Vuetify")])])],1)],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",{staticStyle:{padding:"0px 0px 0px"}},[i("v-parallax",{attrs:{src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}},[i("div",{staticClass:"mx-auto"},[i("v-img",{staticClass:"center center",attrs:{src:a("9db7"),contain:"",width:"120px",height:"100px"}})],1),i("h2",{staticClass:"white--text mb-2 display-2 text-center"},[t._v("Nicolás Kobelt")]),i("h2",{staticClass:"white--text mb-2 text-center"},[t._v("Student of Systems Engineering")]),i("div",{staticClass:"mx-auto"},[i("v-row",{attrs:{justify:"space-around"}},[i("v-btn",{attrs:{text:"",dark:"",href:"https://www.linkedin.com/in/nicolaskobelt/"}},[i("v-icon",{attrs:{dark:""}},[t._v("fab fa-linkedin")])],1),i("v-btn",{attrs:{text:"",dark:"",href:"https://github.com/nicolaskobelt"}},[i("v-icon",{attrs:{dark:""}},[t._v("fab fa-github")])],1),i("v-btn",{attrs:{text:"",dark:"",href:"mailto:nicolaskobelt@gmail.com"}},[i("v-icon",{attrs:{dark:""}},[t._v("fas fa-envelope")])],1),i("v-btn",{attrs:{text:"",dark:"",href:"https://t.me/nicolaskobelt"}},[i("v-icon",{attrs:{dark:""}},[t._v("fab fa-telegram")])],1)],1)],1)]),i("section",[i("v-layout",{attrs:{column:"","align-center":""}},[i("v-flex",{staticClass:"my-5",attrs:{xs12:"",sm4:""}},[i("div",{staticClass:"text-center",attrs:{id:"about"}},[i("v-icon",{staticClass:"cyan--text text--dark-2"},[t._v("fas fa-user-alt")]),i("h2",{staticClass:"headline"},[t._v("About me")])],1)]),i("v-flex",[i("v-container",[i("v-layout",{attrs:{"align-center":""}},[i("v-flex",{staticClass:"text-justify"},[i("v-card-text",{staticClass:"text-justify"},[t._v(" I am student in the last year of systems engineering, I love this career, this help me found what is my passion. "),i("br"),t._v("I came from a little town in Córdoba, Argentina. Actually I am living in Córdoba City. What I said, the career help me found what are my passion, this are Artificial Intelligence, Data Sciene, App develop, etc. I can work in teams, I like know new people, learn from them and try understand each one. I like do fisical activities, go out with friends, enjoy. ")])],1)],1)],1)],1)],1)],1),i("section",[i("v-layout",{attrs:{column:"","align-center":""}},[i("v-flex",{staticClass:"my-5",attrs:{xs12:"",sm4:""}},[i("div",{staticClass:"text-center",attrs:{id:"experience"}},[i("v-icon",{staticClass:"cyan--text text--dark-2"},[t._v("fas fa-code-branch")]),i("h2",{staticClass:"headline"},[t._v("Experience")])],1)]),i("v-flex",[i("v-container",[i("v-list-item",{attrs:{justify:"center"}},[i("v-list-item-avatar",[i("v-img",{staticClass:"center center",attrs:{src:a("654e"),contain:"",width:"120px",height:"100px"}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline"},[t._v("Software Developer")]),i("v-list-item-subtitle",[t._v("Checkbox Innovations")]),i("v-list-item-subtitle",[t._v("October 2019 - Present")])],1)],1)],1)],1)],1)],1),i("section",[i("v-layout",{attrs:{column:"","align-center":""}},[i("v-flex",{staticClass:"my-5",attrs:{xs12:"",sm4:""}},[i("div",{staticClass:"text-center",attrs:{id:"education"}},[i("v-icon",{staticClass:"cyan--text text--dark-2"},[t._v("fas fa-book-open")]),i("h2",{staticClass:"headline"},[t._v("Education")])],1)]),i("v-flex",[i("v-container",[i("v-list-item",{attrs:{justify:"center"}},[i("v-list-item-avatar",[i("v-img",{staticClass:"center center",attrs:{src:a("2967"),contain:"",width:"120px",height:"100px"}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline"},[t._v("Systems Engineering")]),i("v-list-item-subtitle",[t._v("Universidad Católica de Córdoba")]),i("v-list-item-subtitle",[t._v("March 2015 - Present")])],1)],1)],1)],1),i("v-flex",[i("v-container",[i("v-list-item",{attrs:{justify:"center"}},[i("v-list-item-avatar",[i("v-img",{staticClass:"center center",attrs:{src:a("2967"),contain:"",width:"120px",height:"100px"}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline"},[t._v("Project Management Diploma")]),i("v-list-item-subtitle",[t._v("Universidad Católica de Córdoba")]),i("v-list-item-subtitle",[t._v("June 2019 - October 2019")])],1)],1)],1)],1),i("v-flex",[i("v-container",[i("v-list-item",{attrs:{justify:"center"}},[i("v-list-item-avatar",{attrs:{color:"white"}}),i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline"},[t._v("Bachelor in Economics and Management")]),i("v-list-item-subtitle",[t._v("Instituto Parroquial San Juan Diego")]),i("v-list-item-subtitle",[t._v("March 2009 - December 2014")])],1)],1)],1)],1)],1)],1),i("section",[i("v-layout",{attrs:{column:"","align-center":""}},[i("v-flex",{staticClass:"my-5",attrs:{xs12:"",sm4:""}},[i("div",{staticClass:"text-center",attrs:{id:"skills"}},[i("v-icon",{staticClass:"cyan--text text--dark-2"},[t._v("fas fa-user-tag")]),i("h2",{staticClass:"headline"},[t._v("Skills")])],1)])],1)],1)],1)},l=[],o={name:"HelloWorld",data:function(){return{}}},c=o,v=a("2877"),u=a("6544"),d=a.n(u),f=a("8336"),m=a("99d9"),p=a("a523"),b=a("a75b"),h=a("0e8f"),x=a("132d"),g=a("adda"),y=a("a722"),C=a("da13"),_=a("8270"),w=a("5d23"),k=a("8b9c"),V=a("0fd9"),I=Object(v["a"])(c,r,l,!1,null,null,null),j=I.exports;d()(I,{VBtn:f["a"],VCardText:m["a"],VContainer:p["a"],VContent:b["a"],VFlex:h["a"],VIcon:x["a"],VImg:g["a"],VLayout:y["a"],VListItem:C["a"],VListItemAvatar:_["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VParallax:k["a"],VRow:V["a"]});var S={name:"App",components:{HelloWorld:j},data:function(){return{drawer:null,items:[{title:"About me",icon:"fas fa-user-alt",target:"#about"},{title:"Experience",icon:"fas fa-code-branch",target:"#experience"},{title:"Education",icon:"fas fa-book-open",target:"#education"},{title:"Skills",icon:"fas fa-user-tag",target:"#skills"}]}}},O=S,P=a("7496"),L=a("40dc"),A=a("b0af"),E=a("62ad"),T=a("ce7e"),D=a("553a"),M=a("8860"),B=a("34c3"),$=a("f774"),J=a("2fa4"),N=a("2a7f"),W=Object(v["a"])(O,s,n,!1,null,null,null),F=W.exports;d()(W,{VApp:P["a"],VAppBar:L["a"],VBtn:f["a"],VCard:A["a"],VCol:E["a"],VContent:b["a"],VDivider:T["a"],VFooter:D["a"],VIcon:x["a"],VImg:g["a"],VList:M["a"],VListItem:C["a"],VListItemAvatar:_["a"],VListItemContent:w["a"],VListItemIcon:B["a"],VListItemTitle:w["c"],VNavigationDrawer:$["a"],VSpacer:J["a"],VToolbarItems:N["a"]});var H=a("f309");i["a"].use(H["a"]);var K=new H["a"]({});i["a"].config.productionTip=!1,new i["a"]({el:"#app",vuetify:K,render:function(t){return t(F)}}).$mount("#app")},"654e":function(t,e,a){t.exports=a.p+"img/checkbox.24be058c.png"},"9db7":function(t,e,a){t.exports=a.p+"img/profile128X128.bf3208c5.png"}});
//# sourceMappingURL=app.eb31e7c6.js.map