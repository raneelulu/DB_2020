webpackJsonp([1],{"12Cz":function(t,e){},"3g1w":function(t,e){},"9M+g":function(t,e){},CcIr:function(t,e){},D6ja:function(t,e){},HQNB:function(t,e){},JPKt:function(t,e){},Jmt5:function(t,e){},JwnR:function(t,e){},Ltpe:function(t,e){},N1xP:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[s("b-navbar-brand",{attrs:{href:"#"}},[t._v("Home")]),t._v(" "),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{href:"#"}},[t._v("뭘 넣으면")]),t._v(" "),s("b-nav-item",{attrs:{href:"#",disabled:""}},[t._v("좋을까?")])],1),t._v(" "),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-form",[s("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),t._v(" "),s("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1),t._v(" "),s("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[s("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),t._v(" "),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),t._v(" "),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),t._v(" "),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1),t._v(" "),s("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("em",[t._v("User")])]},proxy:!0}])},[t._v(" "),s("b-dropdown-item",{attrs:{href:"http://localhost:3000/#/"}},[t._v("Profile")]),t._v(" "),s("b-dropdown-item",{on:{click:t.gogo}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},staticRenderFns:[]},i={name:"App",components:{Header:s("VU/8")({name:"header",methods:{gogo:function(){this.$http.get("api/logout"),this.$store.commit("initdata"),this.$router.push({name:"LoginPage"})}}},n,!1,null,null,null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("div",{staticClass:"content",attrs:{id:"content"}},[e("router-view")],1)],1)},staticRenderFns:[]};var l=s("VU/8")(i,r,!1,function(t){s("JwnR")},null,null).exports,o=s("/ocq"),c={created:function(){var t=this;this.$http.get("/api/login").then(function(e){var s=e.data.user;s?(t.$store.commit("setUser",s),"관리자"==s.position?t.$router.push("/admin"):"평가자"===s.position&&t.$router.push("/evaluator/"+s.id)):t.$router.push({name:"LoginPage"})}).catch(function(t){console.error(t)})},methods:{onSubmit:function(){this.$http.get("api/logout"),this.$store.commit("initdata"),this.$router.push({name:"LoginPage"})}},computed:{user:function(){return this.$store.getters.user}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.user?s("div",[s("h1",[t._v(" 접속한 유저 ")]),t._v(" "),s("p",[t._v(" 아이디 : "+t._s(t.user.id)+" ")]),t._v(" "),s("p",[t._v(" 비밀번호 : "+t._s(t.user.password)+" ")]),t._v(" "),s("p",[t._v(" 이름 : "+t._s(t.user.name)+" ")]),t._v(" "),s("p",[t._v(" 직책 : "+t._s(t.user.position)+" ")])]):t._e(),t._v(" "),s("button",[t._v("로그아웃")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("p",[this._v("© ED's DBD")])])}]};var d=s("VU/8")(c,u,!1,function(t){s("w/dJ")},"data-v-bbc3fa80",null).exports,v={props:{current:{type:String,required:!0}},computed:{alloc_list_style:function(){return{list:!0,current:"todo"===this.current}},finished_list_style:function(){return{list:!0,current:"evaluated"===this.current}}},methods:{on_click_alloc:function(){"todo"!==this.current&&this.$router.push("/evaluator/"+this.$route.params.userID+"/todo")},on_click_eval:function(){"evaluated"!==this.current&&this.$router.push("/evaluator/"+this.$route.params.userID+"/evaluated")}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu"},[e("div",{class:this.alloc_list_style,on:{click:this.on_click_alloc}},[this._v("\n    배당 파일 목록\n  ")]),this._v(" "),e("div",{class:this.finished_list_style,on:{click:this.on_click_eval}},[this._v("\n    평가 완료 파일 목록\n  ")])])},staticRenderFns:[]};var p=s("VU/8")(v,_,!1,function(t){s("qcwt")},"data-v-6c25ffe9",null).exports,h={props:{fileData:{type:Object,required:!0},rowType:{type:String,default:"tableRow"}},methods:{goTo:function(){"ID"!==this.fileData.id&&this.$router.push(this.$route.path+"/"+this.fileData.id.toString())}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.rowType,on:{click:t.goTo}},[s("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.id)+"\n  ")]),t._v(" "),s("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.task)+"\n  ")]),t._v(" "),s("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.type)+"\n  ")]),t._v(" "),s("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.number)+"\n  ")]),t._v(" "),s("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.start_period)+"\n    "),""!==t.fileData.end_period?s("span",[t._v(" ~ "+t._s(t.fileData.end_period))]):t._e()])])},staticRenderFns:[]};var f=s("VU/8")(h,m,!1,function(t){s("N1xP")},"data-v-4f573019",null).exports,b={props:{files:{type:Array,required:!0}},components:{AllocatedFile:f},computed:{isEmpty:function(){return 0===this.files.length}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[this.isEmpty?e("div",[e("h1",{staticClass:"no-margin"},[this._v("아직 평가한 Task가 없습니다.")])]):e("div",{staticClass:"table"},[e("AllocatedFile",{attrs:{fileData:{id:"ID",task:"Task 이름",type:"원본 Data Type",number:"회차",start_period:"기간",end_period:""},rowType:"tableHeader"}}),this._v(" "),this._m(0),this._v(" "),this._l(this.files,function(t){return e("AllocatedFile",{key:t.id,attrs:{fileData:t}})})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"table-row"}},[e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"})])}]};var k={components:{Menu:p,AllocList:s("VU/8")(b,C,!1,function(t){s("HQNB")},"data-v-698d4062",null).exports},data:function(){return{allocatedFiles:[{id:5,task:"android",type:"seoul",number:1,start_period:"2020-11-22",end_period:"2020-11-23"},{id:8,task:"windows10",type:"busan",number:1,start_period:"2020-11-22",end_period:"2020-11-26"}]}},created:function(){var t=this;this.$http.get("/api/evaluator/"+this.$route.params.userID+"/todo").then(function(e){t.allocatedFiles=e.data.todo_list}).catch(function(t){console.error(t)})}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("Menu",{attrs:{current:"todo"}}),this._v(" "),e("AllocList",{attrs:{files:this.allocatedFiles}})],1)},staticRenderFns:[]};var y=s("VU/8")(k,g,!1,function(t){s("3g1w")},"data-v-ccd5ee02",null).exports,w={props:{fileData:{type:Object,required:!0},rowType:{type:String,default:"tableRow"}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.rowType},[s("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.id)+"\n  ")]),t._v(" "),s("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.task)+"\n  ")]),t._v(" "),s("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.type)+"\n  ")]),t._v(" "),s("div",{staticClass:"tableCell"},[t._v("\n    "+t._s(t.fileData.number)+"\n  ")]),t._v(" "),s("div",{staticClass:"tableCell"},["number"==typeof t.fileData.p_np?s("span",[t._v("\n      "+t._s(1===t.fileData.p_np?"Pass":"Non-Pass")+"\n    ")]):s("span",[t._v("\n      "+t._s(t.fileData.p_np)+"\n    ")])])])},staticRenderFns:[]};var $=s("VU/8")(w,D,!1,function(t){s("Q1O7")},"data-v-8d0737de",null).exports,E={props:{files:{type:Array,required:!0}},components:{EvaluatedFile:$},computed:{isEmpty:function(){return 0===this.files.length}}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[this.isEmpty?e("div",[e("h1",{staticClass:"no-margin"},[this._v("아직 평가한 Task가 없습니다.")])]):e("div",{staticClass:"table"},[e("EvaluatedFile",{attrs:{fileData:{id:"ID",task:"Task 이름",type:"원본 Data Type",number:"회차",p_np:"Pass"},rowType:"tableHeader"}}),this._v(" "),this._m(0),this._v(" "),this._l(this.files,function(t){return e("EvaluatedFile",{key:t.id,attrs:{fileData:t}})})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"table-row"}},[e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"})])}]};var x={components:{Menu:p,EvaluatedFileList:s("VU/8")(E,T,!1,function(t){s("hjC8")},"data-v-526aaaba",null).exports},data:function(){return{evaluatedFiles:[{id:1,task:"android",type:"seoul",number:1,p_np:!0},{id:3,task:"ios",type:"incheon",number:1,p_np:!1},{id:7,task:"windows10",type:"incheon",number:1,p_np:!0}]}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("Menu",{attrs:{current:"evaluated"}}),this._v(" "),e("EvaluatedFileList",{attrs:{files:this.evaluatedFiles}})],1)},staticRenderFns:[]};var F=s("VU/8")(x,S,!1,function(t){s("v/Em")},"data-v-0c4a0c1c",null).exports,R=s("fZjL"),U=s.n(R),P={data:function(){return{file:{id:5,tase:"android",type:"seoul",number:1,start_period:"2020-11-22",end_period:"2020-11-23",download_link:"",all_tuple_number:30,duplicated_tuple_number:0,null_col_rate:{colA:0,colB:0,colC:0,colD:0}},properties:"",pass:"Non-Pass",score:0}},created:function(){var t=this;this.$http.get("/api/evaluator/"+this.$route.params.userID+"/todo/"+this.$route.params.taskID).then(function(e){console.log(e),0!==U()(e.data.file).length&&(t.file=e.data.file)}).catch(function(t){console.error(t)}),this.properties=U()(this.file.null_col_rate)},methods:{onClickSubmit:function(){var t=this;this.$http.post("/api/evaluator/"+this.$route.params.userID+"/todo/"+this.$route.params.taskID,{score:score,p_np:pass},{"Content-Type":"application-json"}).then(function(e){e.data.success?t.$route.push("/evaluator/"+t.$route.params.userID):alert("Wrong data input")}).catch(function(t){console.error(t)})}},watch:{score:function(t){t<0?alert("0보다 작은 값이 입력되었습니다."):t>10&&alert("10보다 큰 값이 입력되었습니다.")}}},q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{margin:"10px"}},[s("div",{staticClass:"a"},[s("div",{staticClass:"b"},[s("div",{staticClass:"c bold"},[t._v("Task ID")]),t._v("\n      |\n      "),s("div",{staticClass:"c"},[t._v(t._s(t.file.id))])]),t._v(" "),s("div",{staticClass:"b"},[s("div",{staticClass:"c bold"},[t._v("Task")]),t._v("\n      |\n      "),s("div",{staticClass:"c"},[t._v(t._s(t.file.task))])]),t._v(" "),s("div",{staticClass:"b"},[s("div",{staticClass:"c bold"},[t._v("Data Type")]),t._v("\n      |\n      "),s("div",{staticClass:"c"},[t._v(t._s(t.file.type))])]),t._v(" "),s("div",{staticClass:"b"},[s("div",{staticClass:"c bold"},[t._v("Episode")]),t._v("\n      |\n      "),s("div",{staticClass:"c"},[t._v(t._s(t.file.number))])]),t._v(" "),s("div",{staticClass:"b",staticStyle:{width:"30%"}},[s("div",{staticClass:"c bold"},[t._v("Period")]),t._v("\n      |\n      "),s("div",{staticClass:"c"},[t._v(t._s(t.file.start_period)+" ~ "+t._s(t.file.end_period))])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"a"},[s("div",{staticClass:"b"},[s("div",{staticClass:"c bold"},[t._v("Number of Tuples")]),t._v("\n      |\n      "),s("div",{staticClass:"c"},[t._v(t._s(t.file.all_tuple_number))])]),t._v(" "),s("div",{staticClass:"b"},[s("div",{staticClass:"c bold"},[t._v("Number of Duplicates")]),t._v("\n      |\n      "),s("div",{staticClass:"c"},[t._v(t._s(t.file.duplicated_tuple_number))])]),t._v(" "),s("div",{staticClass:"b",staticStyle:{width:"40%"}},[s("div",{staticClass:"c bold"},[t._v("Download Link")]),t._v("\n      |\n      "),s("div",{staticClass:"c"},[s("a",{attrs:{href:t.file.download_link}},[t._v("Download")])])]),t._v(" "),s("div",{staticClass:"b",staticStyle:{width:"90%"}},[s("div",{staticClass:"c bold"},[t._v("Null value Rate")]),t._v(" "),s("table",[s("thead",t._l(t.properties,function(e){return s("th",{key:e},[t._v(t._s(e))])}),0),t._v(" "),s("tbody",[s("tr",t._l(t.file.null_col_rate,function(e){return s("td",{key:Object.keys(e)[0]},[t._v(t._s(e))])}),0)])])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"a"},[s("div",{staticClass:"b",staticStyle:{width:"30%"}},[t._m(0),t._v("\n      |\n      "),s("div",{staticClass:"c"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.score,expression:"score",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.score},on:{input:function(e){e.target.composing||(t.score=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"b",staticStyle:{width:"30%"}},[s("div",{staticClass:"c bold"},[t._v("Your Evaluation")]),t._v("\n      |\n      "),s("div",{staticClass:"c"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.pass=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"pass"}},[t._v("Pass")]),t._v(" "),s("option",{attrs:{value:"non-pass"}},[t._v("Non-Pass")])])])]),t._v(" "),s("div",{staticClass:"b"},[s("div",{staticClass:"c"},[s("input",{staticStyle:{margin:"0"},attrs:{type:"submit"},on:{click:t.onClickSubmit}})])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"c bold"},[e("span",{attrs:{title:"0 ~ 10 사이의 값을 입력하세요"}},[this._v("Score")])])}]};var I={components:{Menu:p,EvaluationPage:s("VU/8")(P,q,!1,function(t){s("QtMy")},"data-v-02891bb8",null).exports}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("Menu",{attrs:{current:"todo"}}),this._v(" "),e("EvaluationPage")],1)},staticRenderFns:[]};var V=s("VU/8")(I,M,!1,function(t){s("D6ja")},"data-v-66de8d02",null).exports,L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var j=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},L,!1,function(t){s("z8mD")},"data-v-2a8ae2bb",null).exports,N={name:"Hello",data:function(){return{msg:"Welcome! ED's DBD에 오신걸 환영합니다",id:"",password:""}},methods:{onSubmit:function(){var t=this,e=this.id,s=this.password;this.$http.post("api/login",{id:e,password:s},{"Content-Type":"application-json"}).then(function(e){e.data.user?(t.$store.commit("setUser",e.data.user),t.$router.push({name:"IndexPage"})):e.data.message&&alert(e.data.message)}).catch(function(t){console.error(t)})}}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("[직책에 맞는 아이디로 로그인 부탁드립니다]")]),t._v(" "),s("br"),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",[s("label",{attrs:{for:"id"}},[t._v("id:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{name:"id",type:"text"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"password"}},[t._v("PW:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{name:"password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("button",[t._v("로그인")]),t._v(" "),s("button",{attrs:{type:"newregister",onClick:"location.href='http://localhost:3000/#/'"}},[t._v("회원가입")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("p",[this._v("© ED's DBD")])])}]};var H=s("VU/8")(N,A,!1,function(t){s("m5Dp")},"data-v-35e80395",null).exports,O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Welcome! "+t._s(t.user.name)+"님")]),t._v(" "),s("h2",[t._v(t._s(t.msg))]),t._v(" "),s("br"),t._v(" "),s("ul",[s("li",[s("b-button",{on:{click:function(e){return t.to_task()}}},[t._v("테스크")])],1),t._v(" "),s("li",[s("b-button",{on:{click:function(e){return t.to_memb()}}},[t._v("회원관리")])],1)]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("p",[this._v("© ED's DBD")])])}]};var Y=s("VU/8")({name:"AdminMain",data:function(){return{msg:"[ADMINISTRATOR MAIN PAGE]"}},methods:{to_task:function(){this.$router.push({name:"ShowTaskInfo"})},to_memb:function(){this.$router.push({name:"AdministratorMemb"})}},computed:{user:function(){return this.$store.getters.user}}},O,!1,function(t){s("12Cz")},"data-v-2a060fc0",null).exports,J={props:{current:{type:String,required:!0}},computed:{showall_style:function(){return{list:!0,current:"showall"===this.current}},create_style:function(){return{list:!0,current:"create"===this.current}},manage_style:function(){return{list:!0,current:"manage"===this.current}}},methods:{on_click_showall:function(){"showall"!==this.current&&this.$router.push("/admin/task/showall")},on_click_create:function(){"create"!==this.current&&this.$router.push("/admin/task/create")}}},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu"},[s("div",{class:t.showall_style,on:{click:t.on_click_showall}},[t._v("\n        테스크 통계\n        ")]),t._v(" "),s("div",{class:t.create_style,on:{click:t.on_click_create}},[t._v("\n        테스크 생성\n        ")]),t._v(" "),s("div",{class:t.manage_style},[t._v("\n        테스크 관리\n        ")])])},staticRenderFns:[]};var W=s("VU/8")(J,Q,!1,function(t){s("q8ob")},"data-v-2e1cb50e",null).exports,B={data:function(){return{form:{name:"",des:"",start:"",end:"",min_submit_period:"",standard:""},field_info:[{name:"",type:""}],show:!0,use_sql:!1,taskSchema:""}},methods:{onSubmit:function(t){var e=this;t.preventDefault(),this.$http.post("/api/task/create",{name:this.form.name,des:this.form.des,start_period:this.form.start,end_period:this.form.end,min_submit_period:this.form.min_submit_period,standard_of_pass:this.form.standard,use_sql:this.use_sql,task_schema:this.taskSchema},{"Content-Type":"application-json"}).then(function(t){t.data.success?e.$route.push("/admin/task"):alert("Wrong data input")}).catch(function(t){console.error(t)})},onReset:function(t){var e=this;t.preventDefault(),this.form.name="",this.form.des="",this.form.upload="",this.form.table_name="",this.form.table_schema="",this.form.data_type="",this.show=!1,this.$nextTick(function(){e.show=!0})},setSQLTF:function(t){t.preventDefault(),use_sql?(this.use_sql=!1,this.tableSchema="."):(this.use_sql=!0,this.tableSchema="")}}},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.show?s("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[s("b-form-group",{attrs:{id:"input-group-1",label:"테스크 이름:","label-for":"input-1"}},[s("b-form-input",{attrs:{id:"input-1",required:"",placeholder:"테스크 이름을 입력하세요."},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"input-group-2",label:"테스크 설명:","label-for":"input-2"}},[s("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"테스크에 대한 간략한 설명을 써주세요."},model:{value:t.form.des,callback:function(e){t.$set(t.form,"des",e)},expression:"form.des"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"input-group-3",label:"최소 업로드 주기:","label-for":"input-3"}},[s("b-form-input",{attrs:{id:"input-3",required:"",placeholder:"테스크에 제출할 파일의 최소 업로드 주기를 입력하세요."},model:{value:t.form.min_submit_period,callback:function(e){t.$set(t.form,"min_submit_period",e)},expression:"form.min_submit_period"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"input-group-4",label:"제출 파일 PASS 기준:","label-for":"input-4"}},[s("b-form-input",{attrs:{id:"input-4",required:"",placeholder:"제출 파일이 PASS 되는 기준 점수를 입력하세요."},model:{value:t.form.standard,callback:function(e){t.$set(t.form,"standard",e)},expression:"form.standard"}})],1),t._v(" "),s("label",{attrs:{for:"example-datepicker1"}},[t._v("데이터 수집 시작 날짜")]),t._v(" "),s("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"example-datepicker"},model:{value:t.form.start,callback:function(e){t.$set(t.form,"start",e)},expression:"form.start"}}),t._v(" "),s("label",{attrs:{for:"example-datepicker2"}},[t._v("데이터 수집 종료 날짜")]),t._v(" "),s("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"example-datepicker2"},model:{value:t.form.end,callback:function(e){t.$set(t.form,"end",e)},expression:"form.end"}}),t._v(" "),s("hr"),t._v(" "),s("b-form-checkbox",{attrs:{id:"checkbox-1",name:"checkbox-1",value:"true","unchecked-value":"false"},on:{click:t.setSQLTF},model:{value:t.use_sql,callback:function(e){t.use_sql=e},expression:"use_sql"}},[t._v("\n            데이터 테이블 스키마 정의 SQL 사용 여부\n        ")]),t._v(" "),s("hr"),t._v(" "),s("b-form-group",{attrs:{id:"input-group-5",label:"데이터 테이블 스키마:","label-for":"input-5"}},[s("b-form-input",{attrs:{id:"input-5",required:"",placeholder:"데이터 테이블의 스키마를 설정해주세요."},model:{value:t.tableSchema,callback:function(e){t.tableSchema=e},expression:"tableSchema"}})],1),t._v(" "),s("hr"),t._v(" "),s("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v(" "),s("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e()],1)},staticRenderFns:[]},G={components:{Menu:W,CreateForm:s("VU/8")(B,z,!1,null,null,null).exports}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("Menu",{attrs:{current:"create"}}),this._v(" "),e("CreateForm")],1)},staticRenderFns:[]};var K=s("VU/8")(G,Z,!1,function(t){s("TbYZ")},"data-v-47e3a744",null).exports,X={props:{taskData:{type:Object,required:!0},rowType:{type:String,default:"tableRow"}},methods:{goTo:function(){this.$router.push(this.$route.path+"/"+this.taskData.name.toString())}}},tt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.rowType,on:{click:t.goTo}},[s("div",{staticClass:"tableCell"},[t._v("\n        "+t._s(t.taskData.name)+"\n    ")]),t._v(" "),s("div",{staticClass:"tableCell"},[t._v("\n        "+t._s(t.taskData.des)+"\n    ")]),t._v(" "),s("div",{staticClass:"tableCell"},[t._v("\n        "+t._s(t.taskData.upload)+"\n    ")]),t._v(" "),s("div",{staticClass:"tableCell"},[t._v("\n        "+t._s(t.taskData.table_name)+"\n    ")]),t._v(" "),s("div",{staticClass:"tableCell"},[t._v("\n        "+t._s(t.taskData.table_schema)+"\n    ")]),t._v(" "),s("div",{staticClass:"tableCell"},[t._v("\n        "+t._s(t.taskData.data_type)+"\n    ")])])},staticRenderFns:[]};var et=s("VU/8")(X,tt,!1,function(t){s("JPKt")},"data-v-a01d28b4",null).exports,st={props:{tasks:{type:Array,required:!0}},components:{TaskList:et},computed:{isEmpty:function(){return 0===this.tasks.length}}},at={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[this.isEmpty?e("div",[e("h1",{staticClass:"no-margin"},[this._v("아직 생성된 Task가 없습니다.")])]):e("div",{staticClass:"table"},[e("TaskList",{attrs:{taskData:{name:"Task 이름",des:"테스크 설명",upload:"최소 업로드 주기",table_name:"테이블 이름",table_schema:"테이블 스키마",data_type:"원본 데이터 타입"},rowType:"tableHeader"}}),this._v(" "),this._m(0),this._v(" "),this._l(this.tasks,function(t){return e("TaskList",{key:t.name,attrs:{taskData:t}})})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"table-row"}},[e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"})])}]};var nt={components:{Menu:W,TaskInfo:s("VU/8")(st,at,!1,function(t){s("YfCG")},"data-v-04a16382",null).exports},data:function(){return{task_list:[]}},created:function(){var t=this;this.$http.get("/api/task").then(function(e){t.task_list=e.data.task_list}).catch(function(t){console.error(t)})}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("Menu",{attrs:{current:"showall"}}),this._v(" "),e("TaskInfo",{attrs:{tasks:this.task_list}})],1)},staticRenderFns:[]};var rt=s("VU/8")(nt,it,!1,function(t){s("YfOD")},"data-v-54f805d0",null).exports,lt={props:{userData:{type:Object,required:!0},rowType:{type:String,default:"tableRow"}}},ot={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.rowType},[s("div",{staticClass:"tableCell"},[t._v("\n        "+t._s(t.userData.id)+"\n    ")]),t._v(" "),s("div",{staticClass:"tableCell"},[t._v("\n        "+t._s(t.userData.name)+"\n    ")])])},staticRenderFns:[]};var ct=s("VU/8")(lt,ot,!1,function(t){s("CcIr")},"data-v-d3d9d2f0",null).exports,ut={props:{users:{type:Array,required:!0}},components:{UserList:ct},computed:{isEmpty:function(){return 0===this.users.length}}},dt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[this.isEmpty?e("div",[e("h1",{staticClass:"no-margin"},[this._v("아직 참가자가 없습니다.")])]):e("div",{staticClass:"table"},[e("UserList",{attrs:{userData:{id:"ID",name:"제출자 이름"},rowType:"tableHeader"}}),this._v(" "),this._m(0),this._v(" "),this._l(this.users,function(t){return e("UserList",{key:t.id,attrs:{userData:t}})})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"table-row"}},[e("div",{staticClass:"table-hr"}),this._v(" "),e("div",{staticClass:"table-hr"})])}]};var vt={components:{UserView:s("VU/8")(ut,dt,!1,function(t){s("Ltpe")},"data-v-68106670",null).exports},data:function(){return{task:{},user_list:[]}},created:function(){var t=this;this.$http.get("/api/task/"+this.$route.params.taskName).then(function(e){t.task=e.data.task,t.user_list=e.data.user_list}).catch(function(t){console.error(t)})}},_t={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{margin:"10px"}},[s("div",{staticClass:"a"},[s("div",{staticClass:"b"},[s("div",{staticClass:"c bold"},[t._v("Name")]),t._v("\r\n                |\r\n                "),s("div",{staticClass:"c"},[t._v(t._s(t.task.name))])]),t._v(" "),s("div",{staticClass:"b",staticStyle:{width:"30%"}},[s("div",{staticClass:"c bold"},[t._v("Description")]),t._v("\r\n                |\r\n                "),s("div",{staticClass:"c"},[t._v(t._s(t.task.des))])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"a"},[s("div",{staticClass:"b"},[s("div",{staticClass:"c bold"},[t._v("Number of Files")]),t._v("\r\n                |\r\n                "),s("div",{staticClass:"c"},[t._v(t._s(t.task.all_file_number))])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"a"},[s("div",{staticClass:"b"},[s("div",{staticClass:"c bold"},[t._v("Number of Passed Tuples")]),t._v("\r\n                |\r\n                "),s("div",{staticClass:"c"},[t._v(t._s(t.task.pass_tuple_number))])]),t._v(" "),s("div",{staticClass:"b"},[s("div",{staticClass:"c bold"},[t._v("Number of Tuples in data type level")]),t._v("\r\n                |\r\n                "),s("div",{staticClass:"c"},[t._v(t._s(t.task.data_type_level_tuple_number))])])]),t._v(" "),s("hr"),t._v(" "),s("UserView",{attrs:{users:t.user_list}})],1)},staticRenderFns:[]};var pt={components:{Menu:W,TaskDetail:s("VU/8")(vt,_t,!1,function(t){s("YM6L")},"data-v-75475172",null).exports}},ht={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("Menu",{attrs:{current:"showall"}}),this._v(" "),e("TaskDetail")],1)},staticRenderFns:[]};var mt=s("VU/8")(pt,ht,!1,function(t){s("j0dp")},"data-v-77858fe9",null).exports,ft={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var bt=s("VU/8")({data:function(){return{msg:"MEMBER Management"}}},ft,!1,function(t){s("TLrP")},"data-v-440597e8",null).exports;a.default.use(o.a);var Ct=new o.a({mode:"history",routes:[{path:"/",name:"IndexPage",component:d},{path:"/evaluator/:userID",redirect:"/evaluator/:userID/todo"},{path:"/evaluator/:userID/todo",name:"EvaluatorTodoListPage",component:y},{path:"/evaluator/:userID/todo/:fileID",name:"EvaluateTaskPage",component:V},{path:"/evaluator/:userID/evaluated",name:"EvaluatorEvaluatedPage",component:F},{path:"/admin",name:"AdministratorMain",component:Y},{path:"/admin/task/create",name:"TaskCreate",component:K},{path:"/admin/task/",redirect:"/admin/task/showall"},{path:"/admin/task/showall",name:"ShowTaskInfo",component:rt},{path:"/admin/task/showall/:taskName",name:"ShowTaskDetail",component:mt},{path:"/admin/member",name:"AdministratorMemb",component:bt},{path:"/login",name:"LoginPage",component:H},{path:"/hi",name:"Hi",component:j}]}),kt=s("mtWM"),gt=s.n(kt),yt=s("NYxO");a.default.use(yt.a);var wt=new yt.a.Store({state:{user:null},getters:{user:function(t){return t.user}},mutations:{setUser:function(t,e){t.user=e},initdata:function(t){t.user=null}}}),Dt=s("Tqaz");s("Jmt5"),s("9M+g");a.default.prototype.$http=gt.a,a.default.use(Dt.a),a.default.use(Dt.b),a.default.config.productionTip=!1,new a.default({router:Ct,store:wt,render:function(t){return t(l)}}).$mount("#app")},Q1O7:function(t,e){},QtMy:function(t,e){},TLrP:function(t,e){},TbYZ:function(t,e){},YM6L:function(t,e){},YfCG:function(t,e){},YfOD:function(t,e){},hjC8:function(t,e){},j0dp:function(t,e){},m5Dp:function(t,e){},q8ob:function(t,e){},qcwt:function(t,e){},"v/Em":function(t,e){},"w/dJ":function(t,e){},z8mD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.788b721da6f37ac1a32c.js.map