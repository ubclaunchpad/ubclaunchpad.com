(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/new/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0620":function(t,e,n){},"0aec":function(t,e,n){},1701:function(t,e,n){"use strict";var a=n("0aec"),s=n.n(a);s.a},1796:function(t,e,n){"use strict";var a=n("7920"),s=n.n(a);s.a},3486:function(t,e,n){"use strict";var a=n("7026"),s=n.n(a);s.a},"3e0f":function(t,e,n){t.exports=n.p+"img/rocket.0a31c839.png"},"59dc":function(t,e,n){t.exports=n.p+"img/backdrop-first.85a499df.svg"},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),s=n.n(a);s.a},"6c09":function(t,e,n){"use strict";var a=n("0620"),s=n.n(a);s.a},7026:function(t,e,n){},"735c":function(t,e,n){t.exports=n.p+"img/indicator-down.30ba21fe.svg"},7920:function(t,e,n){},8615:function(t,e,n){t.exports=n.p+"img/about.def1d0b2.png"},"919f":function(t,e,n){t.exports=n.p+"img/landing.9050d284.png"},"9c0c":function(t,e,n){},a2a8:function(t,e,n){t.exports=n.p+"img/backdrop.b6159040.svg"},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,s,i=n("2b0e"),r=(n("92c6"),n("77ed"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("Nav"),n("Section",{attrs:{"section-id":0,"full-height":"","next-section-indicator":""}},[n("Feature",{attrs:{"applications-open":t.applicationsOpen}})],1),n("Section",{attrs:{"section-id":1,"full-height":""}},[n("About")],1),n("Section",{attrs:{"section-id":2}},[n("Highlights")],1),n("Section",{attrs:{"section-id":3}},[n("Projects")],1),n("Section",{attrs:{"section-id":4}},[n("Teams")],1),n("Section",{attrs:{"section-id":5}},[n("Join",{attrs:{"applications-open":t.applicationsOpen}})],1),n("Section",{attrs:{"section-id":6}},[n("Sponsors")],1),n("Footer")],1)}),o=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-transparent"},[a("div",{staticClass:"navbar-brand logo"},[a("a",{staticClass:"navbar-item",attrs:{href:"https://ubclaunchpad.com"}},[a("img",{attrs:{id:"rocket",src:n("3e0f")}})])]),a("div",{staticClass:"navbar-end links is-hidden-touch"},[a("a",{staticClass:"navbar-item"},[t._v(" ABOUT ")]),a("a",{staticClass:"navbar-item"},[t._v(" PROJECTS ")]),a("a",{staticClass:"navbar-item"},[t._v(" TEAMS ")]),a("a",{staticClass:"navbar-item"},[t._v(" SPONSORS ")])])])}],u=i["a"].extend({name:"Nav",props:{}}),p=u,d=(n("3486"),n("2877")),f=Object(d["a"])(p,c,l,!1,null,"58cedc93",null),v=f.exports,m={},h=Object(d["a"])(m,a,s,!1,null,null,null),b=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero",class:{"is-fullheight":t.fullHeight},attrs:{id:t.id}},[a("div",{staticClass:"section-bg-container"},[a("img",{staticClass:"section-bg",class:t.backdrop.class,attrs:{src:t.backdrop.src}})]),a("div",{staticClass:"hero-body"},[t._t("default")],2),t.nextSectionIndicator?a("div",[a("img",{staticClass:"indicator animated bounce delay-1s",attrs:{src:n("735c")}})]):t._e()])},_=[],x=(n("a9e3"),n("59dc")),C=n("a2a8"),O=i["a"].extend({name:"Section",props:{fullHeight:Boolean,nextSectionIndicator:Boolean,sectionId:Number},computed:{id:function(){return"section-".concat(this.sectionId)},backdrop:function(){return 0===this.sectionId?{src:x,class:"first"}:this.sectionId>1?{src:"",class:""}:this.sectionId%2===0?{src:C,class:"rotated"}:{src:C,class:"upright"}}}}),j=O,y=(n("6c09"),Object(d["a"])(j,g,_,!1,null,"cd4aeaa8",null)),w=y.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container is-widescreen",attrs:{id:"container"}},[n("div",{staticClass:"columns is-vcentered"},[n("div",{staticClass:"pad-32 column is-three-fifths"},[t._m(0),n("div",{staticClass:"animated fadeIn"},[n("p",{staticClass:"secondary"},[t._v(" A leading student-run software club devoted to building applications in a collaborative and professional environment. ")]),t.applicationsOpen?n("p",{staticClass:"secondary"},[n("i",[t._v(t._s(t.year)+" applications are now open!")])]):t._e()]),n("div",{staticClass:"animated fadeInUp"},[t.applicationsOpen?n("Button",{attrs:{text:"join us",primary:""}}):t._e(),n("Button",{attrs:{text:"our projects"}})],1)]),t._m(1)])])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns is-vcentered"},[n("div",{staticClass:"column is-narrow"},[n("h1",[t._v(" UBC Launch Pad ")])]),n("div",{staticClass:"column is-narrow is-hidden-mobile",attrs:{id:"aside-divider"}}),n("div",{staticClass:"column"},[n("p",{staticClass:"main",attrs:{id:"aside"}},[t._v(" Software Engineering"),n("br"),t._v("Design Team ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("img",{attrs:{src:n("919f")}})])}],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",class:{simple:!t.primary,primary:t.primary}},[t._v(" "+t._s(t.text)+" ")])},$=[],P=i["a"].extend({name:"Button",props:{text:String,primary:Boolean,onClick:Function}}),B=P,T=(n("1701"),Object(d["a"])(B,k,$,!1,null,"0217743a",null)),I=T.exports,A=i["a"].extend({name:"Feature",props:{applicationsOpen:Boolean},computed:{year:function(){return(new Date).getFullYear()}},components:{Button:I}}),F=A,J=(n("1796"),Object(d["a"])(F,S,E,!1,null,"58f01850",null)),H=J.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container is-widescreen",attrs:{id:"container"}},[a("div",{staticClass:"columns is-vcentered"},[a("div",{staticClass:"column"},[a("img",{attrs:{src:n("8615")}})]),a("div",{staticClass:"pad-32 column is-three-fifths"},[a("h2",[t._v("Who we are")]),a("p",[t._v(" We’re a student-run software engineering team devoted to building software projects in a collaborative and professional environment. ")]),a("p",[t._v(" Our primary objective is to be the best space at UBC for students to meet other tech enthusiasts, build projects in a team setting, gain experience with professional development tools and principles, and share their knowledge with others. ")]),a("p",[t._v(" We form teams based on common interests and project ideas of our own choosing, and hack on our projects to completion! We are also lucky enough to have sponsors which help provide our teams with necessary resources, like servers, to help us achieve our goals. ")])])])])}],U=i["a"].extend({name:"About",props:{}}),W=U,D=Object(d["a"])(W,M,N,!1,null,"0b063ca9",null),R=D.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},Y=[],q=i["a"].extend({name:"Highlights",props:{}}),z=q,G=Object(d["a"])(z,L,Y,!1,null,"184cdb87",null),K=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},V=[],X=i["a"].extend({name:"Projects",props:{}}),Z=X,tt=Object(d["a"])(Z,Q,V,!1,null,"af315eb2",null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},at=[],st=i["a"].extend({name:"Teams",props:{}}),it=st,rt=Object(d["a"])(it,nt,at,!1,null,"12925d89",null),ot=rt.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},lt=[],ut=i["a"].extend({name:"Join",props:{}}),pt=ut,dt=Object(d["a"])(pt,ct,lt,!1,null,"69dc2827",null),ft=dt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},mt=[],ht=i["a"].extend({name:"Sponsors",props:{}}),bt=ht,gt=Object(d["a"])(bt,vt,mt,!1,null,"0773c072",null),_t=gt.exports,xt={name:"App",data:function(){return{applicationsOpen:!0}},components:{Nav:v,Footer:b,Section:w,Feature:H,About:R,Highlights:K,Projects:et,Teams:ot,Join:ft,Sponsors:_t}},Ct=xt,Ot=(n("5c0b"),Object(d["a"])(Ct,r,o,!1,null,null,null)),jt=Ot.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(jt)}}).$mount("#app")}});
//# sourceMappingURL=app.fdf522f0.js.map