(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b88c4e3"],{"0ad8":function(t,e,s){"use strict";var o=s("2026"),r=s.n(o);r.a},2026:function(t,e,s){},2166:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"c",(function(){return a})),s.d(e,"b",(function(){return l}));var o=s("bc3a"),r=s.n(o),n=(s("4328"),"http://localhost:3000/users/");function i(t){return r.a.post(n+"addCart",t)}function a(t){return r.a.post(n+"getShopCart",t)}function l(t){return r.a.post(n+"deleteCart",t)}},"3ac9":function(t,e,s){"use strict";var o=s("7552"),r=s.n(o);r.a},"3d01":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("el-row",{staticClass:"header"},[o("el-col",{staticStyle:{height:"50px"},attrs:{span:16}},[o("img",{staticClass:"logo",staticStyle:{cursor:"pointer"},attrs:{src:s("cac3"),alt:""},on:{click:t.back}})]),o("el-col",{attrs:{span:4}},[o("i",{staticClass:"el-icon-user"}),t.hasLogin?o("span",[t._v(t._s(t.userInfo.name))]):t._e(),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.hasLogin,expression:"!hasLogin"}],on:{click:function(e){return t.login(1)}}},[t._v("登录")]),t._v("/"),t.hasLogin?t._e():o("span",{on:{click:function(e){return t.login(0)}}},[t._v("注册")]),t.hasLogin?o("span",{on:{click:t.loginout}},[t._v("退出")]):t._e()]),o("el-col",{attrs:{span:2}},[o("i",{staticClass:"el-icon-shopping-cart-full"}),o("span",{on:{click:t.goShopCart}},[t._v("购物车")])]),o("el-col",{attrs:{span:2}},[o("i",{staticClass:"el-icon-goods"}),o("span",{on:{click:t.goMyOrder}},[t._v("订单")])])],1),o("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","background-color":"#333","text-color":"#fff","active-text-color":"#ffd04b"}},t._l(t.navGender,(function(e,s){return o("el-submenu",{key:s,ref:e.id,refInFor:!0,attrs:{index:s.toString()}},[o("template",{slot:"title"},[t._v(t._s(e.name))]),t._l(t.navSeries,(function(e,r){return o("div",{key:r,staticClass:"subTitle"},[o("el-menu-item",{ref:e.id,refInFor:!0,attrs:{index:s+"-"+r},on:{click:function(e){return t.navSelect(s,r)}}},[t._v(t._s(e.name))])],1)}))],2)})),1),o("el-dialog",{staticClass:"dialog",attrs:{title:t.dialogTitle,visible:t.registerVisible,center:"",width:"35%"},on:{"update:visible":function(e){t.registerVisible=e}}},[1===t.dialogStatus?o("el-form",{attrs:{mode:t.loginForm,"label-width":"120px","label-position":"right"}},[o("el-form-item",{attrs:{label:"用户名",prop:"name"}},[o("el-input",{staticClass:"input",attrs:{placeholder:"请输入用户名",maxlength:"30"},model:{value:t.loginForm.name,callback:function(e){t.$set(t.loginForm,"name",e)},expression:"loginForm.name"}})],1),o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码",maxlength:"30"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1)],1):o("el-form",{attrs:{mode:t.registerFrom,"label-width":"120px","label-position":"right"}},[o("el-form-item",{attrs:{label:"用户名",prop:"name"}},[o("el-input",{staticClass:"input",attrs:{placeholder:"请输入用户名",maxlength:"30"},model:{value:t.registerFrom.name,callback:function(e){t.$set(t.registerFrom,"name",e)},expression:"registerFrom.name"}})],1),o("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[o("el-input",{staticClass:"input",attrs:{placeholder:"请输入手机号码",maxlength:"30"},model:{value:t.registerFrom.phone,callback:function(e){t.$set(t.registerFrom,"phone",e)},expression:"registerFrom.phone"}})],1),o("el-form-item",{attrs:{label:"性别",prop:"gender"}},[o("el-radio-group",{model:{value:t.registerFrom.gender,callback:function(e){t.$set(t.registerFrom,"gender",e)},expression:"registerFrom.gender"}},[o("el-radio",{attrs:{label:"0"}},[t._v("女")]),o("el-radio",{attrs:{label:"1"}},[t._v("男")])],1)],1),o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码",maxlength:"30"},model:{value:t.registerFrom.password,callback:function(e){t.$set(t.registerFrom,"password",e)},expression:"registerFrom.password"}})],1),o("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[o("el-input",{staticClass:"input",attrs:{placeholder:"请输入邮箱",maxlength:"30"},model:{value:t.registerFrom.email,callback:function(e){t.$set(t.registerFrom,"email",e)},expression:"registerFrom.email"}})],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.registerVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:t.dialogConfirm}},[t._v("确 定")])],1)],1)],1)},r=[],n=(s("b0c0"),s("498a"),s("c40e")),i=s("c24f"),a=s("0e0b"),l=s.n(a),c={name:"navBar",data:function(){return{navGender:[],navSeries:[],banner:[],dialogStatus:1,dialogTitle:"登录",registerVisible:!1,registerFrom:{name:"",phone:"",gender:"0",password:"",email:""},loginForm:{name:"",password:""},hasLogin:!1,userInfo:{},hotGoods:[],newGoods:[]}},created:function(){this.getCategoryGender_(),this.getCategorySeries_(),localStorage.getItem("userInfo")&&(this.hasLogin=!0,this.userInfo=JSON.parse(localStorage.getItem("userInfo")))},methods:{goShopCart:function(){this.userInfo.id?this.$router.push("/shoppingCart"):this.$message.info("请先登录")},goMyOrder:function(){this.userInfo.id?this.$router.push("/myOrder"):this.$message.info("请先登录")},back:function(){this.$router.push("/")},navSelect:function(t,e){"/goodsList"==this.$route.path?this.$emit("changeList",{gid:this.navGender[t].gid,sid:this.navSeries[e].sid}):this.$router.push({path:"/goodsList",query:{gid:this.navGender[t].gid,sid:this.navSeries[e].sid}})},getCategoryGender_:function(){var t=this;Object(n["b"])().then((function(e){t.navGender=e.data.data}))},getCategorySeries_:function(){var t=this;Object(n["c"])().then((function(e){t.navSeries=e.data.data}))},goUser:function(){this.$router.push("/user")},login:function(t){this.dialogTitle=0==t?"注册":"登录",this.dialogStatus=t,this.registerVisible=!0},dialogConfirm:function(){var t=this;if(0==this.dialogStatus){for(var e in this.registerFrom)if(""==l.a.trim(this.registerFrom[e]))return void this.$message.error("请检查输入是否完整");if(!l.a.isTel(this.registerFrom.phone))return void this.$message.error("请输出正确手机号");if(!l.a.isEmail(this.registerFrom.email))return void this.$message.error("请输出正确邮箱");Object(i["b"])(this.registerFrom).then((function(e){0==e.data.code?(t.$message.success("注册成功, 请登录"),t.registerFrom={name:"",phone:"",gender:"0",password:"",email:""},t.dialogStatus=1):2==e.data.code?t.$confirm("该手机号已被注册, 是否跳转登录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.registerFrom={name:"",phone:"",gender:"0",password:"",email:""},t.dialogStatus=1})):t.$message.error(e.data.msg)}))}else{if(""==l.a.trim(this.loginForm.name))return void this.$message.error("请输入用户名");if(""==l.a.trim(this.loginForm.password))return void this.$message.error("请输入密码");Object(i["a"])(this.loginForm).then((function(e){console.log(e),2==e.data.code?t.$confirm("用户不存在, 是否跳转注册?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loginForm={name:"",password:""},t.dialogStatus=0})):0==e.data.code?(t.loginForm={name:"",password:""},t.$message.success("登陆成功"),t.hasLogin=!0,t.userInfo=e.data.data,t.registerVisible=!1,localStorage.setItem("userInfo",JSON.stringify(e.data.data))):t.$message.error(e.data.msg)}))}},loginout:function(){this.hasLogin=!1,this.userInfo={},localStorage.removeItem("userInfo"),this.$router.push("/")}}},u=c,d=(s("0ad8"),s("2877")),g=Object(d["a"])(u,o,r,!1,null,"0912a901",null);e["a"]=g.exports},"498a":function(t,e,s){"use strict";var o=s("23e7"),r=s("58a8").trim,n=s("c8d2");o({target:"String",proto:!0,forced:n("trim")},{trim:function(){return r(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var o=s("1d80"),r=s("5899"),n="["+r+"]",i=RegExp("^"+n+n+"*"),a=RegExp(n+n+"*$"),l=function(t){return function(e){var s=String(o(e));return 1&t&&(s=s.replace(i,"")),2&t&&(s=s.replace(a,"")),s}};t.exports={start:l(1),end:l(2),trim:l(3)}},7001:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("navBar"),s("div",{staticClass:"content"},[s("img",{staticClass:"img",attrs:{src:t.goodsInfo.imgurl}}),s("div",{staticClass:"info"},[s("p",{staticClass:"title"},[t._v(t._s(t.goodsInfo.name))]),s("p",{staticClass:"price"},[s("span",[t._v("价格：￥")]),t._v(t._s(t.goodsInfo.price))]),s("p",{staticClass:"num"},[s("span",[t._v("数量： ")]),s("el-input-number",{staticClass:"number",attrs:{min:1,max:100,size:"small",precision:0},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),s("div",{staticClass:"btn-box"},[s("div",{staticClass:"btn cart",on:{click:t.addCart_}},[t._v("加入购物车")]),s("div",{staticClass:"btn buy"},[t._v("立即购买")])])])]),s("h3",[t._v("推荐商品")]),s("hr"),s("div",{staticClass:"more"},t._l(t.randomGoods,(function(e,o){return s("div",{key:o,staticClass:"item",on:{click:function(s){return t.getSingleGood_(e.id)}}},[s("img",{attrs:{src:e.imgurl,alt:""}}),s("el-tooltip",{staticClass:"item",staticStyle:{width:"100%"},attrs:{effect:"dark",content:e.name,placement:"top"}},[s("p",{staticClass:"name"},[t._v(t._s(e.name))])])],1)})),0)],1)},r=[],n=(s("b0c0"),s("c40e")),i=s("2166"),a=s("3d01"),l={components:{navBar:a["a"]},data:function(){return{goodsId:"",goodsInfo:{},num:"",randomGoods:[]}},created:function(){this.goodsId=this.$route.query.goodsId,this.getSingleGood_(this.goodsId),this.getRandomGoods_()},methods:{getSingleGood_:function(t){var e=this;Object(n["h"])({id:t}).then((function(t){e.goodsInfo=t.data.data,e.getRandomGoods_()}))},getRandomGoods_:function(){var t=this;Object(n["g"])().then((function(e){t.randomGoods=e.data.data}))},addCart_:function(){var t=this;if(JSON.parse(localStorage.getItem("userInfo"))){var e=this,s={uid:JSON.parse(localStorage.getItem("userInfo")).id,gid:e.goodsInfo.id,num:e.num,goods_title:e.goodsInfo.name,goods_img:e.goodsInfo.imgurl,price:e.num*e.goodsInfo.price};Object(i["a"])(s).then((function(e){0==e.data.code?t.$message.success("添加成功"):t.$message.success("添加失败")}))}else this.$message.info("请先登录")}}},c=l,u=(s("3ac9"),s("2877")),d=Object(u["a"])(c,o,r,!1,null,"c06bda68",null);e["default"]=d.exports},7552:function(t,e,s){},b0c0:function(t,e,s){var o=s("83ab"),r=s("9bf2").f,n=Function.prototype,i=n.toString,a=/^\s*function ([^ (]*)/,l="name";o&&!(l in n)&&r(n,l,{configurable:!0,get:function(){try{return i.call(this).match(a)[1]}catch(t){return""}}})},c24f:function(t,e,s){"use strict";s.d(e,"b",(function(){return i})),s.d(e,"a",(function(){return a})),s.d(e,"d",(function(){return l})),s.d(e,"c",(function(){return c}));var o=s("bc3a"),r=s.n(o),n=(s("4328"),"http://localhost:3000/users/");function i(t){return r.a.post(n+"register",t)}function a(t){return r.a.post(n+"login",t)}function l(t){return r.a.post(n+"updateUser",t)}function c(t){return r.a.post(n+"resetPwd",t)}},c8d2:function(t,e,s){var o=s("d039"),r=s("5899"),n="​᠎";t.exports=function(t){return o((function(){return!!r[t]()||n[t]()!=n||r[t].name!==t}))}}}]);
//# sourceMappingURL=chunk-0b88c4e3.abb5d23a.js.map