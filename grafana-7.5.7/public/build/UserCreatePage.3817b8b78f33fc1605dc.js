(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"w+x2":function(e,n,t){"use strict";t.r(n),function(e){var r=t("q1tI"),a=t.n(r),u=t("0cfB"),i=t("/MKj"),o=t("kDLi"),c=t("t8hP"),l=t("lzJ5"),s=t("ZGyg"),d=t("3SGO");function m(e,n,t,r,a,u,i){try{var o=e[u](i),c=o.value}catch(e){return void t(e)}o.done?n(c):Promise.resolve(c).then(r,a)}function p(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function i(e){m(u,r,a,i,o,"next",e)}function o(e){m(u,r,a,i,o,"throw",e)}i(void 0)}))}}var f=function(){var e=p(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c.getBackendSrv)().post("/api/admin/users",n));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v={updateLocation:d.d};n.default=Object(u.hot)(e)(Object(i.connect)((function(e){return{navModel:Object(l.a)(e.navIndex,"global-users")}}),v)((function(e){var n=e.navModel,t=e.updateLocation,u=Object(r.useCallback)(function(){var e=p(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(n);case 2:t({path:"/admin/users"});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[]);return a.a.createElement(s.a,{navModel:n},a.a.createElement(s.a.Contents,null,a.a.createElement("h1",null,"Add new user"),a.a.createElement(o.Form,{onSubmit:u,validateOn:"onBlur"},(function(e){var n=e.register,t=e.errors;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Field,{label:"Name",required:!0,invalid:!!t.name,error:t.name?"Name is required":void 0},a.a.createElement(o.Input,{name:"name",ref:n({required:!0})})),a.a.createElement(o.Field,{label:"E-mail"},a.a.createElement(o.Input,{name:"email",ref:n})),a.a.createElement(o.Field,{label:"Username"},a.a.createElement(o.Input,{name:"login",ref:n})),a.a.createElement(o.Field,{label:"Password",required:!0,invalid:!!t.password,error:t.password?"Password is required and must contain at least 4 characters":void 0},a.a.createElement(o.Input,{type:"password",name:"password",ref:n({validate:function(e){return""!==e.trim()&&e.length>=4}})})),a.a.createElement(o.Button,{type:"submit"},"Create user"))}))))})))}.call(this,t("3UD+")(e))}}]);
//# sourceMappingURL=UserCreatePage.3817b8b78f33fc1605dc.js.map