webpackJsonp([1],{"1SIw":function(t,e){},"2VAg":function(t,e){},"4wKH":function(t,e){},"8gjB":function(t,e){},"9M+g":function(t,e){},"9tU6":function(t,e){},B7Kc:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[r("b-navbar-brand",{attrs:{href:"http://localhost:3000/#"}},[r("img",{attrs:{src:n("Q3eL"),alt:"logo"}})]),t._v(" "),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("em",[t._v("User")])]},proxy:!0}])},[t._v(" "),r("b-dropdown-item",{attrs:{href:"http://localhost:3000/#/"}},[t._v("Profile")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"http://localhost:3000/#/login"}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var s={name:"App",components:{Header:n("VU/8")({name:"header"},a,!1,function(t){n("4wKH")},"data-v-62e252b7",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("div",{staticClass:"content",attrs:{id:"content"}},[e("router-view")],1)],1)},staticRenderFns:[]};var i=n("VU/8")(s,o,!1,function(t){n("8gjB")},null,null).exports,u=n("/ocq"),l={created:function(){var t=this;this.$http.get("/api/login").then(function(e){var n=e.data.user;n?(t.$store.commit("setUser",n),"관리자"==n.position&&t.$router.push({name:"Hi"})):t.$router.push({name:"LoginPage"})}).catch(function(t){console.error(t)})},methods:{onSubmit:function(){this.$http.get("api/logout"),this.$store.commit("initdata"),this.$router.push({name:"LoginPage"})}},computed:{user:function(){return this.$store.getters.user}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.user?n("div",[n("h1",[t._v(" 접속한 유저 ")]),t._v(" "),n("p",[t._v(" 아이디 : "+t._s(t.user.id)+" ")]),t._v(" "),n("p",[t._v(" 비밀번호 : "+t._s(t.user.password)+" ")]),t._v(" "),n("p",[t._v(" 이름 : "+t._s(t.user.name)+" ")]),t._v(" "),n("p",[t._v(" 직책 : "+t._s(t.user.position)+" ")])]):t._e(),t._v(" "),n("button",[t._v("로그아웃")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("p",[this._v("© ED's DBD")])])}]};var v=n("VU/8")(l,c,!1,function(t){n("dpH6")},"data-v-5c3ecd66",null).exports,d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var p=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d,!1,function(t){n("1SIw")},"data-v-2519e17c",null).exports,_={name:"Hello",data:function(){return{msg:"Welcome! ED's DBD에 오신걸 환영합니다",id:"",password:""}},methods:{onSubmit:function(){var t=this,e=this.id,n=this.password;this.$http.post("api/login",{id:e,password:n},{"Content-Type":"application-json"}).then(function(e){e.data.user?(t.$store.commit("setUser",e.data.user),"사용자"==e.data.user.position?t.$router.push({name:"Submitter"}):t.$router.push({name:"IndexPage"})):e.data.message&&alert(e.data.message)}).catch(function(t){console.error(t)})}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("[직책에 맞는 아이디로 로그인 부탁드립니다]")]),t._v(" "),n("br"),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("div",[n("label",{attrs:{for:"id"}},[t._v("id:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{name:"id",type:"text"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"password"}},[t._v("PW:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{name:"password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",[t._v("로그인")]),t._v(" "),n("button",{attrs:{type:"newregister",onClick:"location.href='http://localhost:3000/#/'"}},[t._v("회원가입")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("p",[this._v("© ED's DBD")])])}]};var f=n("VU/8")(_,m,!1,function(t){n("svJ2")},"data-v-f87b3016",null).exports,h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.user?n("div",[n("h1",[t._v("Welcome! "+t._s(t.user.name)+"님")]),t._v(" "),n("h2",[t._v("[SUBMITTER Page]")]),t._v(" "),n("br"),t._v(" "),n("ul",[n("li",[n("b-button",{attrs:{variant:"info"},on:{click:t.GetTask}},[t._v("TASK 신청")])],1),t._v(" "),n("li",[n("b-button",{attrs:{variant:"info"},on:{click:t.SubmitData}},[t._v("DATA 제출")])],1)]),t._v(" "),t._m(0)]):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("p",[this._v("© ED's DBD")])])}]};var b=n("VU/8")({name:"submitter",methods:{GetTask:function(){this.$router.push({name:"GetTask"})},SubmitData:function(){this.$router.push({name:"SubmitData"})}},computed:{user:function(){return this.$store.getters.user}}},h,!1,function(t){n("B7Kc")},"data-v-628fe6eb",null).exports,g={render:function(){var t=this.$createElement,e=this._self._c||t;return this.user?e("div",[this._m(0)]):this._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("\n      신청 가능한 Task 목록\n    ")]),this._v(" "),e("li",[this._v("\n      신청 대기 중인 목록\n    ")])])}]};var k={name:"task",components:{TaskTable:n("VU/8")({name:"task",computed:{user:function(){return this.$store.getters.user}}},g,!1,function(t){n("9tU6")},"data-v-97623ee0",null).exports},methods:{selectTask:function(){this.$router.push({name:"Submitter"})},backPage:function(){this.$router.push({name:"Submitter"})}},computed:{user:function(){return this.$store.getters.user}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.user?n("div",[n("TaskTable"),t._v(" "),n("br"),t._v(" "),n("ul",[n("li",[n("b-button",{on:{click:t.selectTask}},[t._v("TASK 신청")])],1),t._v(" "),n("li",[n("b-button",{on:{click:t.backPage}},[t._v("뒤로 가기")])],1)]),t._v(" "),t._m(0)],1):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("p",[this._v("© ED's DBD")])])}]};var w=n("VU/8")(k,$,!1,function(t){n("b827")},"data-v-6747a166",null).exports,T=n("Xxa5"),D=n.n(T),S=n("exGp"),E=n.n(S),x={data:function(){return{selected:"",selectedType:"",file:null,fields:[{key:"name",label:"TASK Name"},{key:"period",label:"Period"},{key:"description",label:"Description"}],items:[{name:"task1",period:2,description:"data of school"},{name:"task2",period:4,description:"data of food"},{name:"task3",period:1,description:"data of habit"},{name:"task4",period:1,description:"data of money"}]}},methods:{backPage:function(){this.$router.push({name:"Submitter"})},selectTask:function(t){this.selected=t},upload:function(){var t=this;return E()(D.a.mark(function e(){var n;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append(file,t.file),e.next=4,axios.post("/api/upload",n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log("SUCCESS!!"),console.log(t.data)}).catch(function(){console.log("FAILURE!!")});case 4:case"end":return e.stop()}},e,t)}))()}},computed:{user:function(){return this.$store.getters.user}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.user?n("div",[n("h2",[t._v("TASK 목록")]),t._v(" "),n("b-table",{attrs:{fields:t.fields,items:t.items},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[n("b-button",{attrs:{size:"sm"},on:{click:function(n){return t.selectTask(e.value)}}},[t._v(t._s(e.value))])]}}],null,!1,3260455827)}),t._v(" "),n("br"),t._v(" "),n("p",[t._v(" Selected Task : "+t._s(t.selected)+" ")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedType,expression:"selectedType"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedType=e.target.multiple?n:n[0]}}},t._l(t.user.tasks,function(e){return n("option",{key:e.task,domProps:{value:e.task}},[t._v("\n      "+t._s(e.task)+"\n    ")])}),0),t._v(" "),n("span",[t._v("Selected Task : "+t._s(t.selectedType))]),t._v(" "),n("br"),t._v(" "),n("div",{attrs:{id:"fileBox"}},[n("b-form-file",{attrs:{state:Boolean(t.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1),t._v(" "),n("div",{staticClass:"mt-3"},[t._v("Selected file: "+t._s(t.file?t.file.name:""))]),t._v(" "),n("ul",[n("li",[n("b-button",{attrs:{variant:"info"},on:{click:t.upload}},[t._v("SUBMIT")])],1),t._v(" "),n("li",[n("b-button",{attrs:{variant:"info"},on:{click:t.backPage}},[t._v("BACK")])],1)]),t._v(" "),t._m(0)],1):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("p",[this._v("© ED's DBD")])])}]};var U=n("VU/8")(x,y,!1,function(t){n("2VAg")},"data-v-08410aca",null).exports;r.default.use(u.a);var P=new u.a({mode:"history",routes:[{path:"/",name:"IndexPage",component:v},{path:"/login",name:"LoginPage",component:f},{path:"/hi",name:"Hi",component:p},{path:"/submitter",name:"Submitter",component:b},{path:"/submitter/gettask",name:"GetTask",component:w},{path:"/submitter/submitdata",name:"SubmitData",component:U}]}),B=n("mtWM"),C=n.n(B),j=n("NYxO");r.default.use(j.a);var A=new j.a.Store({state:{user:null},getters:{user:function(t){return t.user}},mutations:{setUser:function(t,e){t.user=e},initdata:function(t){t.user=null}}}),F=n("Tqaz");n("Jmt5"),n("9M+g");r.default.prototype.$http=C.a,r.default.use(F.a),r.default.use(F.b),r.default.config.productionTip=!1,new r.default({router:P,store:A,render:function(t){return t(i)}}).$mount("#app")},Q3eL:function(t,e,n){t.exports=n.p+"static/img/EDs_DBD.285f2e5.png"},b827:function(t,e){},dpH6:function(t,e){},svJ2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.abb124cd410e3565c894.js.map