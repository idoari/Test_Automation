(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{dK9G:function(e,a,r){"use strict";r.r(a);var n=r("q1tI"),t=r.n(n),i=r("NoLC"),o=r("/MKj"),l=r("kDLi"),c=r("ZFWI"),u=r("t8hP"),m=r("Xmxp"),s=r("Obii");function d(e,a,r,n,t,i,o){try{var l=e[i](o),c=l.value}catch(e){return void r(e)}l.done?a(c):Promise.resolve(c).then(n,t)}var p=Object(o.connect)((function(e){var a,r;return{email:null===(a=e.location.routeParams.email)||void 0===a?void 0:a.toString(),code:null===(r=e.location.routeParams.code)||void 0===r?void 0:r.toString()}}))((function(e){var a=function(){var e,a=(e=regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""===a.name&&delete a.name,delete a.confirm,e.next=4,Object(u.getBackendSrv)().post("/api/user/signup/step2",{email:a.email,code:a.code,username:a.email,orgName:a.orgName,password:a.password,name:a.name}).catch((function(e){var a,r=(null===(a=e.data)||void 0===a?void 0:a.message)||e;m.b.emit(s.AppEvents.alertWarning,[r])}));case 4:"redirect-to-select-org"===e.sent.code&&(window.location.href=Object(c.c)().appSubUrl+"/profile/select-org?signup=1"),window.location.href=Object(c.c)().appSubUrl+"/";case 7:case"end":return e.stop()}}),e)})),function(){var a=this,r=arguments;return new Promise((function(n,t){var i=e.apply(a,r);function o(e){d(i,n,t,o,l,"next",e)}function l(e){d(i,n,t,o,l,"throw",e)}o(void 0)}))});return function(e){return a.apply(this,arguments)}}(),r={email:e.email,code:e.code};return t.a.createElement(l.Form,{defaultValues:r,onSubmit:a},(function(e){var a,r,n,i=e.errors,o=e.register,u=e.getValues;return t.a.createElement(t.a.Fragment,null,t.a.createElement(l.Field,{label:"Your name"},t.a.createElement(l.Input,{name:"name",placeholder:"(optional)",ref:o})),t.a.createElement(l.Field,{label:"Email",invalid:!!i.email,error:null===(a=i.email)||void 0===a?void 0:a.message},t.a.createElement(l.Input,{name:"email",type:"email",placeholder:"Email",ref:o({required:"Email is required",pattern:{value:/^\S+@\S+$/,message:"Email is invalid"}})})),!Object(c.c)().autoAssignOrg&&t.a.createElement(l.Field,{label:"Org. name"},t.a.createElement(l.Input,{name:"orgName",placeholder:"Org. name",ref:o})),Object(c.c)().verifyEmailEnabled&&t.a.createElement(l.Field,{label:"Email verification code (sent to your email)"},t.a.createElement(l.Input,{name:"code",ref:o,placeholder:"Code"})),t.a.createElement(l.Field,{label:"Password",invalid:!!i.password,error:null==i||null===(r=i.password)||void 0===r?void 0:r.message},t.a.createElement(l.Input,{autoFocus:!0,type:"password",name:"password",ref:o({required:"Password is required"})})),t.a.createElement(l.Field,{label:"Confirm password",invalid:!!i.confirm,error:null==i||null===(n=i.confirm)||void 0===n?void 0:n.message},t.a.createElement(l.Input,{type:"password",name:"confirm",ref:o({required:"Confirmed password is required",validate:function(e){return e===u().password||"Passwords must match!"}})})),t.a.createElement(l.HorizontalGroup,null,t.a.createElement(l.Button,{type:"submit"},"Submit"),t.a.createElement(l.LinkButton,{variant:"link",href:Object(c.c)().appSubUrl+"/login"},"Back to login")))}))}));r.d(a,"SignupPage",(function(){return v}));var v=function(){return t.a.createElement(i.b,null,t.a.createElement(i.a,null,t.a.createElement(p,null)))};a.default=v}}]);
//# sourceMappingURL=SignupPage.3817b8b78f33fc1605dc.js.map