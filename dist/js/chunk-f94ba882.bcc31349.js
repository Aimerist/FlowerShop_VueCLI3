(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f94ba882"],{"11dd":function(t,s,a){},"27c2":function(t,s,a){"use strict";var e=a("11dd"),i=a.n(e);i.a},"4a2f":function(t,s,a){"use strict";var e=a("b1d9"),i=a.n(e);i.a},"56a6":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"message-alert"},t._l(t.messages,(function(s,e){return a("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+s.status},[t._v(" "+t._s(s.message)+" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(s){return t.removeMessage(e)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},i=[],n=a("5530"),l=a("2f62"),c={data:function(){return{}},computed:Object(n["a"])({},Object(l["c"])("alertMessageModules",["messages"])),methods:{updateMessage:function(t,s){this.$store.dispatch("alertMessageModules/updateMessage",{message:t,status:s})},removeMessage:function(t){this.$store.dispatch("alertMessageModules/removeMessage",t)}}},r=c,o=(a("4a2f"),a("2877")),u=Object(o["a"])(r,e,i,!1,null,null,null);s["a"]=u.exports},"622c":function(t,s,a){},"837b":function(t,s,a){"use strict";var e=a("622c"),i=a.n(e);i.a},b1d9:function(t,s,a){},df1d:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("AlertMessage"),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("Sidebar"),a("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-md-4",attrs:{role:"main"}},[a("router-view")],1)],1)])],1)},i=[],n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("nav",{staticClass:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse",attrs:{id:"sidebarMenu"}},[a("div",{staticClass:"sidebar-sticky pt-3"},[a("hr"),t._m(0),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"ProductsList"}}},[a("i",{staticClass:"fas fa-box-open"}),t._v(" 產品列表 ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"OrderList"}}},[a("i",{staticClass:"far fa-list-alt"}),t._v(" 訂單列表 ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"CouponList"}}},[a("i",{staticClass:"fas fa-ticket-alt"}),t._v(" 優惠卷列表 ")])],1)]),a("hr"),t._m(1),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Products"}}},[a("i",{staticClass:"fas fa-shopping-cart"}),t._v(" 購物 ")])],1)]),a("hr"),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",on:{click:function(s){return s.preventDefault(),t.signout(s)}}},[a("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" 登出 ")])])])])])])},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h6",{staticClass:"sidebar-heading d-flex justify-content-between\n        align-items-center px-3 mt-4 mb-1 text-muted"},[a("span",[t._v("管理員")]),a("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#","aria-label":"Add a new report"}},[a("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h6",{staticClass:"sidebar-heading d-flex justify-content-between\n        align-items-center px-3 mt-4 mb-1 text-muted"},[a("span",[t._v("模擬功能")]),a("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#","aria-label":"Add a new report"}},[a("span",{attrs:{"data-feather":"plus-circle"}})])])}],c={methods:{signout:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/logout");this.$http.post(s).then((function(s){s.data.success&&t.$router.push({name:"Products"})}))}}},r=c,o=(a("837b"),a("2877")),u=Object(o["a"])(r,n,l,!1,null,"69cc2853",null),d=u.exports,f=a("56a6"),m={components:{Sidebar:d,AlertMessage:f["a"]}},v=m,p=(a("27c2"),Object(o["a"])(v,e,i,!1,null,"b7ab4b2a",null));s["default"]=p.exports}}]);
//# sourceMappingURL=chunk-f94ba882.bcc31349.js.map