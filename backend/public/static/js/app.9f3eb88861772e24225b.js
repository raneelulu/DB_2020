webpackJsonp([1],{"/S2v":function(t,e){},"0597":function(t,e){},"3g1w":function(t,e){},"9M+g":function(t,e){},D6ja:function(t,e){},HQNB:function(t,e){},Jmt5:function(t,e){},JwnR:function(t,e){},N1xP:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("Home")]),t._v(" "),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"#"}},[t._v("뭘 넣으면")]),t._v(" "),a("b-nav-item",{attrs:{href:"#",disabled:""}},[t._v("좋을까?")])],1),t._v(" "),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form",[a("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),t._v(" "),a("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1),t._v(" "),a("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),t._v(" "),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),t._v(" "),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),t._v(" "),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1),t._v(" "),a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("em",[t._v("User")])]},proxy:!0}])},[t._v(" "),a("b-dropdown-item",{attrs:{href:"http://localhost:3000/#/"}},[t._v("Profile")]),t._v(" "),a("b-dropdown-item",{attrs:{href:"http://localhost:3000/#/login"}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},staticRenderFns:[]},n={name:"App",components:{Header:a("VU/8")({name:"header"},i,!1,null,null,null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("div",{staticClass:"content",attrs:{id:"content"}},[e("router-view")],1)],1)},staticRenderFns:[]};var l=a("VU/8")(n,r,!1,function(t){a("JwnR")},null,null).exports,o=a("/ocq"),c={created:function(){var t=this;this.$http.get("/api/login").then(function(e){var a=e.data.user;a?(t.$store.commit("setUser",a),"관리자"==a.position?t.$router.push({name:"Hi"}):"평가자"===a.position&&t.$router.push("/evaluator/"+a.id)):t.$router.push({name:"LoginPage"})}).catch(function(t){console.error(t)})},methods:{onSubmit:function(){this.$http.get("api/logout"),this.$store.commit("initdata"),this.$router.push({name:"LoginPage"})}},computed:{user:function(){return this.$store.getters.user}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.user?a("div",[a("h1",[t._v(" 접속한 유저 ")]),t._v(" "),a("p",[t._v(" 아이디 : "+t._s(t.user.id)+" ")]),t._v(" "),a("p",[t._v(" 비밀번호 : "+t._s(t.user.password)+" ")]),t._v(" "),a("p",[t._v(" 이름 : "+t._s(t.user.name)+" ")]),t._v(" "),a("p",[t._v(" 직책 : "+t._s(t.user.position)+" ")])]):t._e(),t._v(" "),a("button",[t._v("로그아웃")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("p",[this._v("© ED's DBD")])])}]};var v=a("VU/8")(c,u,!1,function(t){a("/S2v")},"data-v-599292a6",null).exports,d={props:{current:{type:String,required:!0}},computed:{alloc_list_style:function(){return{list:!0,current:"todo"===this.current}},finished_list_style:function(){return{list:!0,current:"evaluated"===this.current}}},methods:{on_click_alloc:function(){"todo"!==this.current&&this.$router.push("/evaluator/"+this.$route.params.userID+"/todo")},on_click_eval:function(){"evaluated"!==this.current&&this.$router.push("/evaluator/"+this.$route.params.userID+"/evaluated")}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu"},[e("div",{class:this.alloc_list_style,on:{click:this.on_click_alloc}},[this._v("\n    배당 파일 목록\n  ")]),this._v(" "),e("div",{class:this.finished_list_style,on:{click:this.on_click_eval}},[this._v("\n    평가 완료 파일 목록\n  ")])])},staticRenderFns:[]};var p=a("VU/8")(d,_,!1,function(t){a("qcwt")},"data-v-6c25ffe9",null).exports,h={props:{fileData:{type:Object,required:!0},rowType:{type:String,default:"tableRow"}},methods:{goTo:function(){"ID"!==this.fileData.id&&this.$router.push(this.$route.path+"/"+this.fileData.id.toString())}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.rowType,on:{click:t.goTo}},[a("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.id)+"\n  ")]),t._v(" "),a("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.task)+"\n  ")]),t._v(" "),a("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.type)+"\n  ")]),t._v(" "),a("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.number)+"\n  ")]),t._v(" "),a("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.start_period)+"\n    "),""!==t.fileData.end_period?a("span",[t._v(" ~ "+t._s(t.fileData.end_period))]):t._e()])])},staticRenderFns:[]};var m=a("VU/8")(h,f,!1,function(t){a("N1xP")},"data-v-4f573019",null).exports,b={props:{files:{type:Array,required:!0}},components:{AllocatedFile:m},computed:{isEmpty:function(){return 0===this.files.length}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[this.isEmpty?e("div",[e("h1",{staticClass:"no-margin"},[this._v("아직 평가한 Task가 없습니다.")])]):e("div",{staticClass:"table"},[e("AllocatedFile",{attrs:{fileData:{id:"ID",task:"Task 이름",type:"원본 Data Type",number:"회차",start_period:"기간",end_period:""},rowType:"tableHeader"}}),this._v(" "),this._m(0),this._v(" "),this._l(this.files,function(t){return e("AllocatedFile",{key:t.id,attrs:{fileData:t}})})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"table-row"}},[e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"})])}]};var g={components:{Menu:p,AllocList:a("VU/8")(b,C,!1,function(t){a("HQNB")},"data-v-698d4062",null).exports},data:function(){return{allocatedFiles:[{id:5,task:"android",type:"seoul",number:1,start_period:"2020-11-22",end_period:"2020-11-23"},{id:8,task:"windows10",type:"busan",number:1,start_period:"2020-11-22",end_period:"2020-11-26"}]}},created:function(){var t=this;this.$http.get("/api/evaluator/"+this.$route.params.userID+"/todo").then(function(e){t.allocatedFiles=e.data.todo_list}).catch(function(t){console.error(t)})}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("Menu",{attrs:{current:"todo"}}),this._v(" "),e("AllocList",{attrs:{files:this.allocatedFiles}})],1)},staticRenderFns:[]};var w=a("VU/8")(g,y,!1,function(t){a("3g1w")},"data-v-ccd5ee02",null).exports,D={props:{fileData:{type:Object,required:!0},rowType:{type:String,default:"tableRow"}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.rowType},[a("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.id)+"\n  ")]),t._v(" "),a("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.task)+"\n  ")]),t._v(" "),a("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.type)+"\n  ")]),t._v(" "),a("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.number)+"\n  ")]),t._v(" "),a("div",{staticClass:"tableCell"},["number"==typeof t.fileData.p_np?a("span",[t._v("\n      "+t._s(1===t.fileData.p_np?"Pass":"Non-Pass")+"\n    ")]):a("span",[t._v("\n      "+t._s(t.fileData.p_np)+"\n    ")])])])},staticRenderFns:[]};var k=a("VU/8")(D,$,!1,function(t){a("Q1O7")},"data-v-8d0737de",null).exports,E={props:{files:{type:Array,required:!0}},components:{EvaluatedFile:k},computed:{isEmpty:function(){return 0===this.files.length}}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[this.isEmpty?e("div",[e("h1",{staticClass:"no-margin"},[this._v("아직 평가한 Task가 없습니다.")])]):e("div",{staticClass:"table"},[e("EvaluatedFile",{attrs:{fileData:{id:"ID",task:"Task 이름",type:"원본 Data Type",number:"회차",p_np:"Pass"},rowType:"tableHeader"}}),this._v(" "),this._m(0),this._v(" "),this._l(this.files,function(t){return e("EvaluatedFile",{key:t.id,attrs:{fileData:t}})})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"table-row"}},[e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"})])}]};var F={components:{Menu:p,EvaluatedFileList:a("VU/8")(E,x,!1,function(t){a("hjC8")},"data-v-526aaaba",null).exports},data:function(){return{evaluatedFiles:[{id:1,task:"android",type:"seoul",number:1,p_np:!0},{id:3,task:"ios",type:"incheon",number:1,p_np:!1},{id:7,task:"windows10",type:"incheon",number:1,p_np:!0}]}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("Menu",{attrs:{current:"evaluated"}}),this._v(" "),e("EvaluatedFileList",{attrs:{files:this.evaluatedFiles}})],1)},staticRenderFns:[]};var T=a("VU/8")(F,S,!1,function(t){a("v/Em")},"data-v-0c4a0c1c",null).exports,P=a("fZjL"),j=a.n(P),I={data:function(){return{file:{id:5,tase:"android",type:"seoul",number:1,start_period:"2020-11-22",end_period:"2020-11-23",download_link:"",all_tuple_number:30,duplicated_tuple_number:0,null_col_rate:{colA:0,colB:0,colC:0,colD:0}},properties:"",pass:"Non-Pass",score:0}},created:function(){var t=this;this.$http.get("/api/evaluator/"+this.$route.params.userID+"/todo/"+this.$route.params.taskID).then(function(e){console.log(e),0!==j()(e.data.file).length&&(t.file=e.data.file)}).catch(function(t){console.error(t)}),this.properties=j()(this.file.null_col_rate)},methods:{onClickSubmit:function(){var t=this;this.$http.post("/api/evaluator/"+this.$route.params.userID+"/todo/"+String(this.$route.params.fileID),{score:this.score,p_np:this.pass}).then(function(e){e.data.success?t.$router.push("/evaluator/"+t.$route.params.userID):alert("Wrong data input")}).catch(function(t){console.error(t)})}},watch:{score:function(t){t<0?alert("0보다 작은 값이 입력되었습니다."):t>10&&alert("10보다 큰 값이 입력되었습니다.")}}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"10px"}},[a("div",{staticClass:"a"},[a("div",{staticClass:"b"},[a("div",{staticClass:"c bold"},[t._v("Task ID")]),t._v("\n      |\n      "),a("div",{staticClass:"c"},[t._v(t._s(t.file.id))])]),t._v(" "),a("div",{staticClass:"b"},[a("div",{staticClass:"c bold"},[t._v("Task")]),t._v("\n      |\n      "),a("div",{staticClass:"c"},[t._v(t._s(t.file.task))])]),t._v(" "),a("div",{staticClass:"b"},[a("div",{staticClass:"c bold"},[t._v("Data Type")]),t._v("\n      |\n      "),a("div",{staticClass:"c"},[t._v(t._s(t.file.type))])]),t._v(" "),a("div",{staticClass:"b"},[a("div",{staticClass:"c bold"},[t._v("Episode")]),t._v("\n      |\n      "),a("div",{staticClass:"c"},[t._v(t._s(t.file.number))])]),t._v(" "),a("div",{staticClass:"b",staticStyle:{width:"30%"}},[a("div",{staticClass:"c bold"},[t._v("Period")]),t._v("\n      |\n      "),a("div",{staticClass:"c"},[t._v(t._s(t.file.start_period)+" ~ "+t._s(t.file.end_period))])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"a"},[a("div",{staticClass:"b"},[a("div",{staticClass:"c bold"},[t._v("Number of Tuples")]),t._v("\n      |\n      "),a("div",{staticClass:"c"},[t._v(t._s(t.file.all_tuple_number))])]),t._v(" "),a("div",{staticClass:"b"},[a("div",{staticClass:"c bold"},[t._v("Number of Duplicates")]),t._v("\n      |\n      "),a("div",{staticClass:"c"},[t._v(t._s(t.file.duplicated_tuple_number))])]),t._v(" "),a("div",{staticClass:"b",staticStyle:{width:"40%"}},[a("div",{staticClass:"c bold"},[t._v("Download Link")]),t._v("\n      |\n      "),a("div",{staticClass:"c"},[a("a",{attrs:{href:t.file.download_link}},[t._v("Download")])])]),t._v(" "),a("div",{staticClass:"b",staticStyle:{width:"90%"}},[a("div",{staticClass:"c bold"},[t._v("Null value Rate")]),t._v(" "),a("table",[a("thead",t._l(t.properties,function(e){return a("th",{key:e},[t._v(t._s(e))])}),0),t._v(" "),a("tbody",[a("tr",t._l(t.file.null_col_rate,function(e){return a("td",{key:Object.keys(e)[0]},[t._v(t._s(e))])}),0)])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"a"},[a("div",{staticClass:"b",staticStyle:{width:"30%"}},[t._m(0),t._v("\n      |\n      "),a("div",{staticClass:"c"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.score,expression:"score",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.score},on:{input:function(e){e.target.composing||(t.score=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),a("div",{staticClass:"b",staticStyle:{width:"30%"}},[a("div",{staticClass:"c bold"},[t._v("Your Evaluation")]),t._v("\n      |\n      "),a("div",{staticClass:"c"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.pass=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"pass"}},[t._v("Pass")]),t._v(" "),a("option",{attrs:{value:"non-pass"}},[t._v("Non-Pass")])])])]),t._v(" "),a("div",{staticClass:"b"},[a("div",{staticClass:"c"},[a("input",{staticStyle:{margin:"0"},attrs:{type:"submit"},on:{click:t.onClickSubmit}})])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"c bold"},[e("span",{attrs:{title:"0 ~ 10 사이의 값을 입력하세요"}},[this._v("Score")])])}]};var U={components:{Menu:p,EvaluationPage:a("VU/8")(I,R,!1,function(t){a("0597")},"data-v-355fa824",null).exports}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("Menu",{attrs:{current:"todo"}}),this._v(" "),e("EvaluationPage")],1)},staticRenderFns:[]};var V=a("VU/8")(U,N,!1,function(t){a("D6ja")},"data-v-66de8d02",null).exports,H={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var A=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},H,!1,function(t){a("z8mD")},"data-v-2a8ae2bb",null).exports,L={name:"Hello",data:function(){return{msg:"Welcome! ED's DBD에 오신걸 환영합니다",id:"",password:""}},methods:{onSubmit:function(){var t=this,e=this.id,a=this.password;this.$http.post("api/login",{id:e,password:a},{"Content-Type":"application-json"}).then(function(e){e.data.user?(t.$store.commit("setUser",e.data.user),t.$router.push({name:"IndexPage"})):e.data.message&&alert(e.data.message)}).catch(function(t){console.error(t)})}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("[직책에 맞는 아이디로 로그인 부탁드립니다]")]),t._v(" "),a("br"),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",[a("label",{attrs:{for:"id"}},[t._v("id:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{name:"id",type:"text"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("PW:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{name:"password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("button",[t._v("로그인")]),t._v(" "),a("button",{attrs:{type:"newregister",onClick:"location.href='http://localhost:3000/#/'"}},[t._v("회원가입")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("p",[this._v("© ED's DBD")])])}]};var q=a("VU/8")(L,M,!1,function(t){a("m5Dp")},"data-v-35e80395",null).exports;s.default.use(o.a);var O=new o.a({mode:"history",routes:[{path:"/",name:"IndexPage",component:v},{path:"/evaluator/:userID",redirect:"/evaluator/:userID/todo"},{path:"/evaluator/:userID/todo",name:"EvaluatorTodoListPage",component:w},{path:"/evaluator/:userID/todo/:fileID",name:"EvaluateTaskPage",component:V},{path:"/evaluator/:userID/evaluated",name:"EvaluatorEvaluatedPage",component:T},{path:"/login",name:"LoginPage",component:q},{path:"/hi",name:"Hi",component:A}]}),W=a("mtWM"),B=a.n(W),z=a("NYxO");s.default.use(z.a);var J=new z.a.Store({state:{user:null},getters:{user:function(t){return t.user}},mutations:{setUser:function(t,e){t.user=e},initdata:function(t){t.user=null}}}),Q=a("Tqaz");a("Jmt5"),a("9M+g");s.default.prototype.$http=B.a,s.default.use(Q.a),s.default.use(Q.b),s.default.config.productionTip=!1,new s.default({router:O,store:J,render:function(t){return t(l)}}).$mount("#app")},Q1O7:function(t,e){},hjC8:function(t,e){},m5Dp:function(t,e){},qcwt:function(t,e){},"v/Em":function(t,e){},z8mD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9f3eb88861772e24225b.js.map