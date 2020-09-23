(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-637b891c"],{"0a4a":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container gap-setting"},[r("div",{staticClass:"vld-parent"},[r("loading",{attrs:{active:e.isLoading},on:{"update:active":function(t){e.isLoading=t}}})],1),e._m(0),r("ValidationObserver",{ref:"form"},[r("form",{staticClass:"text-left",on:{submit:function(t){return t.preventDefault(),e.createdOrder(t)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-7"},[r("div",{staticClass:"p-3 bg-brownlight mb-4 md-dis-none"},[r("h4",{staticClass:"text-center mb-0"},[e._v("訂單資料")])]),r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-sm-6"},[r("label",{attrs:{for:"username"}},[e._v("姓名")]),r("ValidationProvider",{attrs:{name:"姓名",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.name,expression:"form.user.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:e.form.user.name},on:{input:function(t){t.target.composing||e.$set(e.form.user,"name",t.target.value)}}}),r("span",{staticClass:"text-danger"},[e._v(e._s(n[0]))])]}}])})],1),r("div",{staticClass:"form-group col-sm-6"},[r("label",{attrs:{for:"usertel"}},[e._v("電話")]),r("ValidationProvider",{attrs:{name:"電話",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",attrs:{type:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:e.form.user.tel},on:{input:function(t){t.target.composing||e.$set(e.form.user,"tel",t.target.value)}}}),r("span",{staticClass:"text-danger"},[e._v(e._s(n[0]))])]}}])})],1)]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useremail"}},[e._v("信箱")]),r("ValidationProvider",{attrs:{name:"信箱",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.email,expression:"form.user.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入信箱"},domProps:{value:e.form.user.email},on:{input:function(t){t.target.composing||e.$set(e.form.user,"email",t.target.value)}}}),r("span",{staticClass:"text-danger"},[e._v(e._s(n[0]))])]}}])})],1),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useraddress"}},[e._v("收件地址")]),r("ValidationProvider",{attrs:{name:"地址",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.address,expression:"form.user.address"}],staticClass:"form-control",attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:e.form.user.address},on:{input:function(t){t.target.composing||e.$set(e.form.user,"address",t.target.value)}}}),r("span",{staticClass:"text-danger"},[e._v(e._s(n[0]))])]}}])})],1),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"comment"}},[e._v("留言 "),r("small",{staticClass:"text-info"},[e._v("(選填)")])]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"4"},domProps:{value:e.form.message},on:{input:function(t){t.target.composing||e.$set(e.form,"message",t.target.value)}}})]),r("router-link",{staticClass:"btn-block btn-back py-1 my-4 text-dark md-dis-none",attrs:{to:{name:"Cart"}}},[r("i",{staticClass:"fas  fa-arrow-left"}),e._v(" 上一步，確認購物清單")])],1),r("div",{staticClass:"col-md-5 my-md-0 my-2"},[r("div",{staticClass:"border p-3 shadow"},[r("span",{staticClass:"badge badge-pill badge-danger float-right bg-primary"},[e._v(" "+e._s(e.cartLength))]),r("div",{staticClass:"h5 text-center pb-2"},[e._v("訂 單 內 容")]),r("table",{staticClass:"table m-0 teble-order"},[r("thead",[r("tr",[r("td",[e._v("商品")]),r("td",{staticClass:"text-right",attrs:{width:"135"}},[e._v("總計")])])]),r("tbody",e._l(e.carts.carts,(function(t){return r("tr",{key:t.id},[r("td",[e._v(e._s(t.product.title)+" Ｘ "+e._s(t.qty))]),r("td",{staticClass:"text-right"},[e._v(e._s(e._f("currency")(t.product.price)))])])})),0),r("tfoot",[r("tr",{},[r("th",[e._v("總計")]),r("td",{staticClass:"text-right h4 font-weight-bold h5 text-primary",class:{"text-secondary":e.carts.total===e.carts.final_total}},[e._v(" "+e._s(e._f("currency")(e.carts.total)))])]),e.carts.total!==e.carts.final_total?r("tr",[r("th",[e._v(" 折扣價 "),r("small",{staticClass:"text-success"},[e._v("(已套用優惠券)")])]),r("td",{staticClass:"text-right h4 font-weight-bold text-secondary"},[e._v(" "+e._s(e._f("currency")(e.carts.final_total)))])]):e._e()])]),r("div",{staticClass:"p-2"},[r("button",{staticClass:"btn btn-block btn-submit mt-4 py-3 rounded-0 f-size125"},[e._v(" 送出訂單 "),r("i",{staticClass:"fas  fa-arrow-right"})])])])])])])])],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"mb-4 step"},[r("li",{staticClass:"bg-light"},[r("strong",[e._v("STEP")]),r("h3",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),r("p",{staticClass:"h6"},[e._v("確認購物清單")])]),r("li",{staticClass:"active"},[r("strong",[e._v("STEP")]),r("h3",[r("strong",[e._v("02")])]),r("p",{staticClass:"h6"},[e._v("填寫訂購資料")])]),r("li",{staticClass:"bg-light"},[r("strong",[e._v("STEP")]),r("h3",[r("strong",[e._v("03")])]),r("p",{staticClass:"h6"},[e._v("付款/完成訂單")])])])}],a=(r("99af"),r("5530")),s=r("2b0e"),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function u(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,a){function s(e){try{u(n.next(e))}catch(t){a(t)}}function o(e){try{u(n["throw"](e))}catch(t){a(t)}}function u(e){e.done?r(e.value):i(e.value).then(s,o)}u((n=n.apply(e,t||[])).next())}))}function l(e,t){var r,n,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(e){return function(t){return u([e,t])}}function u(a){if(r)throw new TypeError("Generator is already executing.");while(s)try{if(r=1,n&&(i=2&a[0]?n["return"]:a[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(o){a=[6,o],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function d(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var a=arguments[t],s=0,o=a.length;s<o;s++,i++)n[i]=a[s];return n}function c(e){return e!==e}function v(e){return null===e||void 0===e}function f(e){return Array.isArray(e)&&0===e.length}var m=function(e){return null!==e&&e&&"object"===typeof e&&!Array.isArray(e)};function p(e,t){return!(!c(e)||!c(t))||e===t}function h(e,t){if(e instanceof RegExp&&t instanceof RegExp)return h(e.source,t.source)&&h(e.flags,t.flags);if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!h(e[r],t[r]))return!1;return!0}return m(e)&&m(t)?Object.keys(e).every((function(r){return h(e[r],t[r])}))&&Object.keys(t).every((function(r){return h(e[r],t[r])})):p(e,t)}function g(e){return""!==e&&!v(e)}function b(e){return"function"===typeof e}function y(e){return b(e)&&!!e.__locatorRef}function _(e,t){var r=Array.isArray(e)?e:x(e);if(b(r.findIndex))return r.findIndex(t);for(var n=0;n<r.length;n++)if(t(r[n],n))return n;return-1}function O(e,t){var r=Array.isArray(e)?e:x(e),n=_(r,t);return-1===n?void 0:r[n]}function $(e,t){return-1!==e.indexOf(t)}function x(e){return b(Array.from)?Array.from(e):A(e)}function A(e){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}function R(e){return b(Object.values)?Object.values(e):Object.keys(e).map((function(t){return e[t]}))}function w(e,t){return Object.keys(t).forEach((function(r){if(m(t[r]))return e[r]||(e[r]={}),void w(e[r],t[r]);e[r]=t[r]})),e}function k(){return{untouched:!0,touched:!1,dirty:!1,pristine:!0,valid:!1,invalid:!1,validated:!1,pending:!1,required:!1,changed:!1,passed:!1,failed:!1}}function C(e,t,r){return void 0===t&&(t=0),void 0===r&&(r={cancelled:!1}),0===t?e:function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];var s=function(){n=void 0,r.cancelled||e.apply(void 0,i)};clearTimeout(n),n=setTimeout(s,t)};var n}function E(e){console.warn("[vee-validate] "+e)}function j(e,t){return e.replace(/{([^}]+)}/g,(function(e,r){return r in t?t[r]:"{"+r+"}"}))}var S={};function q(e){var t;return(null===(t=e.params)||void 0===t?void 0:t.length)&&(e.params=e.params.map((function(e){return"string"===typeof e?{name:e}:e}))),e}var M=function(){function e(){}return e.extend=function(e,t){var r=q(t);S[e]?S[e]=w(S[e],t):S[e]=o({lazy:!1,computesRequired:!1},r)},e.isLazy=function(e){var t;return!!(null===(t=S[e])||void 0===t?void 0:t.lazy)},e.isRequireRule=function(e){var t;return!!(null===(t=S[e])||void 0===t?void 0:t.computesRequired)},e.getRuleDefinition=function(e){return S[e]},e}();function V(e,t){z(e,t),"object"!==typeof t?M.extend(e,{validate:t}):M.extend(e,t)}function z(e,t){if(!b(t)&&!b(t.validate)&&!M.getRuleDefinition(e))throw new Error("Extension Error: The validator '"+e+"' must be a function or have a 'validate' method.")}var D={defaultMessage:"{_field_} is not valid.",skipOptional:!0,classes:{touched:"touched",untouched:"untouched",valid:"valid",invalid:"invalid",pristine:"pristine",dirty:"dirty"},bails:!0,mode:"aggressive",useConstraintAttrs:!0},I=o({},D),N=function(){return I};function P(e){var t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?m(e)&&e._$$isNormalized?e:m(e)?Object.keys(e).reduce((function(t,r){var n=[];return n=!0===e[r]?[]:Array.isArray(e[r])||m(e[r])?e[r]:[e[r]],!1!==e[r]&&(t[r]=T(r,n)),t}),t):"string"!==typeof e?(E("rules must be either a string or an object."),t):e.split("|").reduce((function(e,t){var r=F(t);return r.name?(e[r.name]=T(r.name,r.params),e):e}),t):t}function T(e,t){var r=M.getRuleDefinition(e);if(!r)return t;var n,i,a={};if(!r.params&&!Array.isArray(t))throw new Error("You provided an object params to a rule that has no defined schema.");if(Array.isArray(t)&&!r.params)return t;!r.params||r.params.length<t.length&&Array.isArray(t)?n=t.map((function(e,t){var n,a=null===(n=r.params)||void 0===n?void 0:n[t];return i=a||i,a||(a=i),a})):n=r.params;for(var s=0;s<n.length;s++){var o=n[s],u=o.default;Array.isArray(t)?s in t&&(u=t[s]):o.name in t?u=t[o.name]:1===n.length&&(u=t),o.isTarget&&(u=B(u,o.cast)),"string"===typeof u&&"@"===u[0]&&(u=B(u.slice(1),o.cast)),!y(u)&&o.cast&&(u=o.cast(u)),a[o.name]?(a[o.name]=Array.isArray(a[o.name])?a[o.name]:[a[o.name]],a[o.name].push(u)):a[o.name]=u}return a}var F=function(e){var t=[],r=e.split(":")[0];return $(e,":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:r,params:t}};function B(e,t){var r=function(r){var n=r[e];return t?t(n):n};return r.__locatorRef=e,r}function L(e){return Array.isArray(e)?e.filter(y):Object.keys(e).filter((function(t){return y(e[t])})).map((function(t){return e[t]}))}function W(e,t,r){return void 0===r&&(r={}),u(this,void 0,void 0,(function(){var n,i,a,s,o,u,d;return l(this,(function(l){switch(l.label){case 0:return n=null===r||void 0===r?void 0:r.bails,i=null===r||void 0===r?void 0:r.skipIfEmpty,a={name:(null===r||void 0===r?void 0:r.name)||"{field}",rules:P(t),bails:null===n||void 0===n||n,skipIfEmpty:null===i||void 0===i||i,forceRequired:!1,crossTable:(null===r||void 0===r?void 0:r.values)||{},names:(null===r||void 0===r?void 0:r.names)||{},customMessages:(null===r||void 0===r?void 0:r.customMessages)||{}},[4,H(a,e,r)];case 1:return s=l.sent(),o=[],u={},d={},s.errors.forEach((function(e){var t=e.msg();o.push(t),u[e.rule]=t,d[e.rule]=e.msg})),[2,{valid:s.valid,errors:o,failedRules:u,regenerateMap:d}]}}))}))}function H(e,t,r){var n=(void 0===r?{}:r).isInitial,i=void 0!==n&&n;return u(this,void 0,void 0,(function(){var r,n,a,s,o,u,d,c;return l(this,(function(l){switch(l.label){case 0:return[4,J(e,t)];case 1:if(r=l.sent(),n=r.shouldSkip,a=r.errors,n)return[2,{valid:!a.length,errors:a}];s=Object.keys(e.rules).filter((function(e){return!M.isRequireRule(e)})),o=s.length,u=0,l.label=2;case 2:return u<o?i&&M.isLazy(s[u])?[3,4]:(d=s[u],[4,Z(e,t,{name:d,params:e.rules[d]})]):[3,5];case 3:if(c=l.sent(),!c.valid&&c.error&&(a.push(c.error),e.bails))return[2,{valid:!1,errors:a}];l.label=4;case 4:return u++,[3,2];case 5:return[2,{valid:!a.length,errors:a}]}}))}))}function J(e,t){return u(this,void 0,void 0,(function(){var r,n,i,a,s,o,u,d,c;return l(this,(function(l){switch(l.label){case 0:r=Object.keys(e.rules).filter(M.isRequireRule),n=r.length,i=[],a=v(t)||""===t||f(t),s=a&&e.skipIfEmpty,o=!1,u=0,l.label=1;case 1:return u<n?(d=r[u],[4,Z(e,t,{name:d,params:e.rules[d]})]):[3,4];case 2:if(c=l.sent(),!m(c))throw new Error("Require rules has to return an object (see docs)");if(c.required&&(o=!0),!c.valid&&c.error&&(i.push(c.error),e.bails))return[2,{shouldSkip:!0,errors:i}];l.label=3;case 3:return u++,[3,1];case 4:return(!a||o||e.skipIfEmpty)&&(e.bails||s)?[2,{shouldSkip:!o&&a,errors:i}]:[2,{shouldSkip:!1,errors:i}]}}))}))}function Z(e,t,r){return u(this,void 0,void 0,(function(){var n,i,a,s,u;return l(this,(function(l){switch(l.label){case 0:if(n=M.getRuleDefinition(r.name),!n||!n.validate)throw new Error("No such validator '"+r.name+"' exists.");return i=n.castValue?n.castValue(t):t,a=U(r.params,e.crossTable),[4,n.validate(i,a)];case 1:return s=l.sent(),"string"===typeof s?(u=o(o({},a||{}),{_field_:e.name,_value_:t,_rule_:r.name}),[2,{valid:!1,error:{rule:r.name,msg:function(){return j(s,u)}}}]):(m(s)||(s={valid:s}),[2,{valid:s.valid,required:s.required,error:s.valid?void 0:G(e,t,n,r.name,a)}])}}))}))}function G(e,t,r,n,i){var a,s=null!==(a=e.customMessages[n])&&void 0!==a?a:r.message,u=Y(e,r,n),l=K(e,r,n,s),d=l.userTargets,c=l.userMessage,v=o(o(o(o({},i||{}),{_field_:e.name,_value_:t,_rule_:n}),u),d);return{msg:function(){return Q(c||N().defaultMessage,e.name,v)},rule:n}}function Y(e,t,r){var n=t.params;if(!n)return{};var i=n.filter((function(e){return e.isTarget})).length;if(i<=0)return{};var a={},s=e.rules[r];!Array.isArray(s)&&m(s)&&(s=n.map((function(e){return s[e.name]})));for(var o=0;o<n.length;o++){var u=n[o],l=s[o];if(y(l)){l=l.__locatorRef;var d=e.names[l]||l;a[u.name]=d,a["_"+u.name+"_"]=e.crossTable[l]}}return a}function K(e,t,r,n){var i={},a=e.rules[r],s=t.params||[];return a?(Object.keys(a).forEach((function(t,r){var n=a[t];if(!y(n))return{};var o=s[r];if(!o)return{};var u=n.__locatorRef;i[o.name]=e.names[u]||u,i["_"+o.name+"_"]=e.crossTable[u]})),{userTargets:i,userMessage:n}):{}}function Q(e,t,r){return"function"===typeof e?e(t,r):j(e,o(o({},r),{_field_:t}))}function U(e,t){if(Array.isArray(e))return e;var r={},n=function(e){return y(e)?e(t):e};return Object.keys(e).forEach((function(t){r[t]=n(e[t])})),r}var X=function(){return{on:["input","blur"]}},ee=function(){return{on:["change"]}},te=function(e){var t=e.errors;return t.length?{on:["input","change"]}:{on:["change","blur"]}},re=function(){return{on:[]}},ne={aggressive:X,eager:te,passive:re,lazy:ee},ie=new s["a"];(function(){function e(e,t){this.container={},this.locale=e,this.merge(t)}e.prototype.resolve=function(e,t,r){return this.format(this.locale,e,t,r)},e.prototype.format=function(e,t,r,n){var i,a,s,u,l,d,c,v,f;return f=(null===(s=null===(a=null===(i=this.container[e])||void 0===i?void 0:i.fields)||void 0===a?void 0:a[t])||void 0===s?void 0:s[r])||(null===(l=null===(u=this.container[e])||void 0===u?void 0:u.messages)||void 0===l?void 0:l[r]),f||(f="{_field_} is not valid"),t=null!==(v=null===(c=null===(d=this.container[e])||void 0===d?void 0:d.names)||void 0===c?void 0:c[t])&&void 0!==v?v:t,b(f)?f(t,n):j(f,o(o({},n),{_field_:t}))},e.prototype.merge=function(e){w(this.container,e)},e.prototype.hasRule=function(e){var t,r;return!!(null===(r=null===(t=this.container[this.locale])||void 0===t?void 0:t.messages)||void 0===r?void 0:r[e])}})();var ae=function(e){return!!e&&(!!("undefined"!==typeof Event&&b(Event)&&e instanceof Event)||!(!e||!e.srcElement))};function se(e){var t,r;if(!ae(e))return e;var n=e.target;if("file"===n.type&&n.files)return x(n.files);if(null===(t=n._vModifiers)||void 0===t?void 0:t.number){var i=parseFloat(n.value);return c(i)?n.value:i}if(null===(r=n._vModifiers)||void 0===r?void 0:r.trim){var a="string"===typeof n.value?n.value.trim():n.value;return a}return n.value}var oe=function(e){var t,r=(null===(t=e.data)||void 0===t?void 0:t.attrs)||e.elm;return!("input"!==e.tag||r&&r.type)||("textarea"===e.tag||$(["text","password","search","email","tel","url","number"],null===r||void 0===r?void 0:r.type))};function ue(e){if(e.data){var t=e.data;if("model"in t)return t.model;if(e.data.directives)return O(e.data.directives,(function(e){return"model"===e.name}))}}function le(e){var t,r,n=ue(e);if(n)return{value:n.value};var i=ve(e),a=(null===i||void 0===i?void 0:i.prop)||"value";if((null===(t=e.componentOptions)||void 0===t?void 0:t.propsData)&&a in e.componentOptions.propsData){var s=e.componentOptions.propsData;return{value:s[a]}}return(null===(r=e.data)||void 0===r?void 0:r.domProps)&&"value"in e.data.domProps?{value:e.data.domProps.value}:void 0}function de(e){return Array.isArray(e)?e:Array.isArray(e.children)?e.children:e.componentOptions&&Array.isArray(e.componentOptions.children)?e.componentOptions.children:[]}function ce(e){if(!Array.isArray(e)&&void 0!==le(e))return[e];var t=de(e);return t.reduce((function(e,t){var r=ce(t);return r.length&&e.push.apply(e,r),e}),[])}function ve(e){return e.componentOptions?e.componentOptions.Ctor.options.model:null}function fe(e,t,r){if(v(e[t]))e[t]=[r];else{if(b(e[t])&&e[t].fns){var n=e[t];return n.fns=Array.isArray(n.fns)?n.fns:[n.fns],void($(n.fns,r)||n.fns.push(r))}if(b(e[t])){var i=e[t];e[t]=[i]}Array.isArray(e[t])&&!$(e[t],r)&&e[t].push(r)}}function me(e,t,r){e.data||(e.data={}),v(e.data.on)&&(e.data.on={}),fe(e.data.on,t,r)}function pe(e,t,r){e.componentOptions&&(e.componentOptions.listeners||(e.componentOptions.listeners={}),fe(e.componentOptions.listeners,t,r))}function he(e,t,r){e.componentOptions?pe(e,t,r):me(e,t,r)}function ge(e,t){var r;if(e.componentOptions){var n=(ve(e)||{event:"input"}).event;return n}return(null===(r=null===t||void 0===t?void 0:t.modifiers)||void 0===r?void 0:r.lazy)?"change":oe(e)?"input":"change"}function be(e){return $(["input","select","textarea"],e.tag)}function ye(e){var t,r=null===(t=e.data)||void 0===t?void 0:t.attrs,n={};return r?("email"===r.type&&M.getRuleDefinition("email")&&(n.email=["multiple"in r]),r.pattern&&M.getRuleDefinition("regex")&&(n.regex=r.pattern),r.maxlength>=0&&M.getRuleDefinition("max")&&(n.max=r.maxlength),r.minlength>=0&&M.getRuleDefinition("min")&&(n.min=r.minlength),"number"===r.type&&(g(r.min)&&M.getRuleDefinition("min_value")&&(n.min_value=Number(r.min)),g(r.max)&&M.getRuleDefinition("max_value")&&(n.max_value=Number(r.max))),n):n}function _e(e){var t,r=["input","select","textarea"],n=null===(t=e.data)||void 0===t?void 0:t.attrs;if(!$(r,e.tag)||!n)return{};var i={};return"required"in n&&!1!==n.required&&M.getRuleDefinition("required")&&(i.required="checkbox"!==n.type||[!0]),oe(e)?P(o(o({},i),ye(e))):P(i)}function Oe(e,t){return e.$scopedSlots.default?e.$scopedSlots.default(t)||[]:e.$slots.default||[]}function $e(e,t){return!(e._ignoreImmediate||!e.immediate)||(!(p(e.value,t)||!e.normalizedEvents.length)||(!!e._needsValidation||!e.initialized&&void 0===t))}function xe(e){return o(o({},e.flags),{errors:e.errors,classes:e.classes,failedRules:e.failedRules,reset:function(){return e.reset()},validate:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.validate.apply(e,t)},ariaInput:{"aria-invalid":e.flags.invalid?"true":"false","aria-required":e.isRequired?"true":"false","aria-errormessage":"vee_"+e.id},ariaMsg:{id:"vee_"+e.id,"aria-live":e.errors.length?"assertive":"off"}})}function Ae(e,t){e.initialized||(e.initialValue=t);var r=$e(e,t);if(e._needsValidation=!1,e.value=t,e._ignoreImmediate=!0,r){var n=function(){if(e.immediate||e.flags.validated)return we(e);e.validateSilent()};e.initialized?n():e.$once("hook:mounted",(function(){return n()}))}}function Re(e){var t=b(e.mode)?e.mode:ne[e.mode];return t(e)}function we(e){var t=e.validateSilent();return e._pendingValidation=t,t.then((function(r){return t===e._pendingValidation&&(e.applyResult(r),e._pendingValidation=void 0),r}))}function ke(e){e.$veeOnInput||(e.$veeOnInput=function(t){e.syncValue(t),e.setFlags({dirty:!0,pristine:!1})});var t=e.$veeOnInput;e.$veeOnBlur||(e.$veeOnBlur=function(){e.setFlags({touched:!0,untouched:!1})});var r=e.$veeOnBlur,n=e.$veeHandler,i=Re(e);return n&&e.$veeDebounce===e.debounce||(n=C((function(){e.$nextTick((function(){e._pendingReset||we(e),e._pendingReset=!1}))}),i.debounce||e.debounce),e.$veeHandler=n,e.$veeDebounce=e.debounce),{onInput:t,onBlur:r,onValidate:n}}function Ce(e,t){var r=le(t);e._inputEventName=e._inputEventName||ge(t,ue(t)),Ae(e,null===r||void 0===r?void 0:r.value);var n=ke(e),i=n.onInput,a=n.onBlur,s=n.onValidate;he(t,e._inputEventName,i),he(t,"blur",a),e.normalizedEvents.forEach((function(e){he(t,e,s)})),e.initialized=!0}var Ee=0;function je(){var e=[],t="",r={errors:e,value:void 0,initialized:!1,initialValue:void 0,flags:k(),failedRules:{},isActive:!0,fieldName:t,id:""};return r}var Se=s["a"].extend({inject:{$_veeObserver:{from:"$_veeObserver",default:function(){return this.$vnode.context.$_veeObserver||(this.$vnode.context.$_veeObserver=De()),this.$vnode.context.$_veeObserver}}},props:{vid:{type:String,default:""},name:{type:String,default:null},mode:{type:[String,Function],default:function(){return N().mode}},rules:{type:[Object,String],default:null},immediate:{type:Boolean,default:!1},bails:{type:Boolean,default:function(){return N().bails}},skipIfEmpty:{type:Boolean,default:function(){return N().skipOptional}},debounce:{type:Number,default:0},tag:{type:String,default:"span"},slim:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customMessages:{type:Object,default:function(){return{}}}},watch:{rules:{deep:!0,handler:function(e,t){this._needsValidation=!h(e,t)}}},data:je,computed:{fieldDeps:function(){var e=this;return Object.keys(this.normalizedRules).reduce((function(t,r){var n=L(e.normalizedRules[r]).map((function(e){return e.__locatorRef}));return t.push.apply(t,n),n.forEach((function(t){Ie(e,t)})),t}),[])},normalizedEvents:function(){var e=this,t=Re(this).on;return(t||[]).map((function(t){return"input"===t?e._inputEventName:t}))},isRequired:function(){var e=o(o({},this._resolvedRules),this.normalizedRules),t=Object.keys(e).some(M.isRequireRule);return this.flags.required=!!t,t},classes:function(){var e=N().classes;return qe(e,this.flags)},normalizedRules:function(){return P(this.rules)}},mounted:function(){var e=this,t=function(){if(e.flags.validated){var t=e._regenerateMap;if(t){var r=[],n={};return Object.keys(t).forEach((function(e){var i=t[e]();r.push(i),n[e]=i})),void e.applyResult({errors:r,failedRules:n,regenerateMap:t})}e.validate()}};ie.$on("change:locale",t),this.$on("hook:beforeDestroy",(function(){ie.$off("change:locale",t)}))},render:function(e){var t=this;this.registerField();var r=xe(this),n=Oe(this,r),i=ce(n);return i.length?(i.forEach((function(e,r){var n,i,a,s,o,u;if($(["checkbox","radio"],null===(i=null===(n=e.data)||void 0===n?void 0:n.attrs)||void 0===i?void 0:i.type)||!(r>0)){var l=N().useConstraintAttrs?_e(e):{};h(t._resolvedRules,l)||(t._needsValidation=!0),be(e)&&(t.fieldName=(null===(s=null===(a=e.data)||void 0===a?void 0:a.attrs)||void 0===s?void 0:s.name)||(null===(u=null===(o=e.data)||void 0===o?void 0:o.attrs)||void 0===u?void 0:u.id)),t._resolvedRules=l,Ce(t,e)}})),this.slim&&n.length<=1?n[0]:e(this.tag,n)):this.slim&&n.length<=1?n[0]:e(this.tag,n)},beforeDestroy:function(){this.$_veeObserver.unobserve(this.id)},activated:function(){this.isActive=!0},deactivated:function(){this.isActive=!1},methods:{setFlags:function(e){var t=this;Object.keys(e).forEach((function(r){t.flags[r]=e[r]}))},syncValue:function(e){var t=se(e);this.value=t,this.flags.changed=this.initialValue!==t},reset:function(){var e=this;this.errors=[],this.initialValue=this.value;var t=k();t.required=this.isRequired,this.setFlags(t),this.failedRules={},this.validateSilent(),this._pendingValidation=void 0,this._pendingReset=!0,setTimeout((function(){e._pendingReset=!1}),this.debounce)},validate:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return u(this,void 0,void 0,(function(){return l(this,(function(t){return e.length>0&&this.syncValue(e[0]),[2,we(this)]}))}))},validateSilent:function(){return u(this,void 0,void 0,(function(){var e,t;return l(this,(function(r){switch(r.label){case 0:return this.setFlags({pending:!0}),e=o(o({},this._resolvedRules),this.normalizedRules),Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),[4,W(this.value,e,o(o({name:this.name||this.fieldName},Me(this)),{bails:this.bails,skipIfEmpty:this.skipIfEmpty,isInitial:!this.initialized,customMessages:this.customMessages}))];case 1:return t=r.sent(),this.setFlags({pending:!1,valid:t.valid,invalid:!t.valid}),[2,t]}}))}))},setErrors:function(e){this.applyResult({errors:e,failedRules:{}})},applyResult:function(e){var t=e.errors,r=e.failedRules,n=e.regenerateMap;this.errors=t,this._regenerateMap=n,this.failedRules=o({},r||{}),this.setFlags({valid:!t.length,passed:!t.length,invalid:!!t.length,failed:!!t.length,validated:!0,changed:this.value!==this.initialValue})},registerField:function(){ze(this)}}});function qe(e,t){for(var r={},n=Object.keys(t),i=n.length,a=function(i){var a=n[i],s=e&&e[a]||a,o=t[a];return v(o)?"continue":"valid"!==a&&"invalid"!==a||t.validated?void("string"===typeof s?r[s]=o:Array.isArray(s)&&s.forEach((function(e){r[e]=o}))):"continue"},s=0;s<i;s++)a(s);return r}function Me(e){var t=e.$_veeObserver.refs,r={names:{},values:{}};return e.fieldDeps.reduce((function(e,r){return t[r]?(e.values[r]=t[r].value,e.names[r]=t[r].name,e):e}),r)}function Ve(e){return e.vid?e.vid:e.name?e.name:e.id?e.id:e.fieldName?e.fieldName:(Ee++,"_vee_"+Ee)}function ze(e){var t=Ve(e),r=e.id;!e.isActive||r===t&&e.$_veeObserver.refs[r]||(r!==t&&e.$_veeObserver.refs[r]===e&&e.$_veeObserver.unobserve(r),e.id=t,e.$_veeObserver.observe(e))}function De(){return{refs:{},observe:function(e){this.refs[e.id]=e},unobserve:function(e){delete this.refs[e]}}}function Ie(e,t,r){void 0===r&&(r=!0);var n=e.$_veeObserver.refs;if(e._veeWatchers||(e._veeWatchers={}),!n[t]&&r)return e.$once("hook:mounted",(function(){Ie(e,t,!1)}));!b(e._veeWatchers[t])&&n[t]&&(e._veeWatchers[t]=n[t].$watch("value",(function(){e.flags.validated&&(e._needsValidation=!0,e.validate())})))}var Ne=[["pristine","every"],["dirty","some"],["touched","some"],["untouched","every"],["valid","every"],["invalid","some"],["pending","some"],["validated","every"],["changed","some"],["passed","every"],["failed","some"]],Pe=0;function Te(){var e={},t={},r=Je(),n={},i=[];return{id:"",refs:e,observers:i,errors:t,flags:r,fields:n}}function Fe(){return{$_veeObserver:this}}var Be=s["a"].extend({name:"ValidationObserver",provide:Fe,inject:{$_veeObserver:{from:"$_veeObserver",default:function(){return this.$vnode.context.$_veeObserver?this.$vnode.context.$_veeObserver:null}}},props:{tag:{type:String,default:"span"},vid:{type:String,default:function(){return"obs_"+Pe++}},slim:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:Te,created:function(){var e=this;this.id=this.vid,We(this);var t=C((function(t){var r=t.errors,n=t.flags,i=t.fields;e.errors=r,e.flags=n,e.fields=i}),16);this.$watch(Ze,t)},activated:function(){We(this)},deactivated:function(){Le(this)},beforeDestroy:function(){Le(this)},render:function(e){var t=Oe(this,He(this));return this.slim&&t.length<=1?t[0]:e(this.tag,{on:this.$listeners},t)},methods:{observe:function(e,t){var r;void 0===t&&(t="provider"),"observer"!==t?this.refs=o(o({},this.refs),(r={},r[e.id]=e,r)):this.observers.push(e)},unobserve:function(e,t){if(void 0===t&&(t="provider"),"provider"!==t){var r=_(this.observers,(function(t){return t.id===e}));-1!==r&&this.observers.splice(r,1)}else{var n=this.refs[e];if(!n)return;this.$delete(this.refs,e)}},validate:function(e){var t=(void 0===e?{}:e).silent,r=void 0!==t&&t;return u(this,void 0,void 0,(function(){var e;return l(this,(function(t){switch(t.label){case 0:return[4,Promise.all(d(R(this.refs).filter((function(e){return!e.disabled})).map((function(e){return e[r?"validateSilent":"validate"]().then((function(e){return e.valid}))})),this.observers.filter((function(e){return!e.disabled})).map((function(e){return e.validate({silent:r})}))))];case 1:return e=t.sent(),[2,e.every((function(e){return e}))]}}))}))},handleSubmit:function(e){return u(this,void 0,void 0,(function(){var t;return l(this,(function(r){switch(r.label){case 0:return[4,this.validate()];case 1:return t=r.sent(),t&&e?[2,e()]:[2]}}))}))},reset:function(){return d(R(this.refs),this.observers).forEach((function(e){return e.reset()}))},setErrors:function(e){var t=this;Object.keys(e).forEach((function(r){var n=t.refs[r];if(n){var i=e[r]||[];i="string"===typeof i?[i]:i,n.setErrors(i)}})),this.observers.forEach((function(t){t.setErrors(e)}))}}});function Le(e){e.$_veeObserver&&e.$_veeObserver.unobserve(e.id,"observer")}function We(e){e.$_veeObserver&&e.$_veeObserver.observe(e,"observer")}function He(e){return o(o({},e.flags),{errors:e.errors,fields:e.fields,validate:e.validate,passes:e.handleSubmit,handleSubmit:e.handleSubmit,reset:e.reset})}function Je(){return o(o({},k()),{valid:!0,invalid:!1})}function Ze(){for(var e=d(R(this.refs),this.observers),t={},r=Je(),n={},i=e.length,a=0;a<i;a++){var s=e[a];Array.isArray(s.errors)?(t[s.id]=s.errors,n[s.id]=o({id:s.id,name:s.name,failedRules:s.failedRules},s.flags)):(t=o(o({},t),s.errors),n=o(o({},n),s.fields))}return Ne.forEach((function(t){var n=t[0],i=t[1];r[n]=e[i]((function(e){return e.flags[n]}))})),{errors:t,flags:r,fields:n}}var Ge=function(e,t){var r=(void 0===t?{}:t).multiple,n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r&&!Array.isArray(e)&&(e=String(e).split(",").map((function(e){return e.trim()}))),Array.isArray(e)?e.every((function(e){return n.test(String(e))})):n.test(String(e))},Ye=[{name:"multiple",default:!1}],Ke={validate:Ge,params:Ye};
/**
  * vee-validate v3.3.9
  * (c) 2020 Abdelrahman Awad
  * @license MIT
  */function Qe(e){return null===e||void 0===e}function Ue(e){return Array.isArray(e)&&0===e.length}var Xe=function(e,t){var r=(void 0===t?{allowFalse:!0}:t).allowFalse,n={valid:!1,required:!0};return Qe(e)||Ue(e)?n:!1!==e||r?(n.valid=!!String(e).trim().length,n):n},et=!0,tt=[{name:"allowFalse",default:!0}],rt={validate:Xe,params:tt,computesRequired:et},nt=r("2f62");V("required",Object(a["a"])(Object(a["a"])({},rt),{},{message:"{_field_} 欄位不得留空"})),V("email",Object(a["a"])(Object(a["a"])({},Ke),{},{message:"{_field_} 必須是有效的電子郵件地址"}));var it={components:{ValidationProvider:Se,ValidationObserver:Be},data:function(){return{form:{user:{}},isLoading:!1}},computed:Object(a["a"])({},Object(nt["c"])("cartModules",["carts","cartLength"])),methods:{createdOrder:function(){var e=this,t="".concat("https://vue-course-api.hexschool.io","/api/").concat("aimer","/order");this.$refs.form.validate().then((function(r){r?e.$http.post(t,{data:e.form}).then((function(t){t.data.success?(e.$store.dispatch("alertMessageModules/updateMessage",{message:t.data.message,status:"success"}),e.$router.push({name:"ConsumerOrder",params:{orderId:t.data.orderId}})):e.$store.dispatch("alertMessageModules/updateMessage",{message:t.data.message,status:"danger"})})):e.$store.dispatch("alertMessageModules/updateMessage",{message:"欄位填寫不完整",status:"danger"})}))}},created:function(){this.$store.dispatch("cartModules/getCart")}},at=it,st=(r("8435"),r("2877")),ot=Object(st["a"])(at,n,i,!1,null,"e96798f2",null);t["default"]=ot.exports},8435:function(e,t,r){"use strict";var n=r("c8a1"),i=r.n(n);i.a},c8a1:function(e,t,r){}}]);
//# sourceMappingURL=chunk-637b891c.f741693c.js.map