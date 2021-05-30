(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{gzYa:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("kDDq"),i=r("Obii"),c=r("kDLi"),u=r("ZGyg"),l=r("hBny"),s=r("/MKj"),d=r("fL47"),f=r("Wkk1"),m=r("d4Ek"),p=r("t8hP"),b=function(e){try{return JSON.parse(e),!0}catch(e){return"Not valid JSON"}},h=function(e){var t=/(^\d+$)|dashboards\/(\d+)/.exec(e);return!(!t||!t[1]&&!t[2])||"Could not find a valid Grafana.com id"},y=function(e){return Object(p.getBackendSrv)().get("/api/dashboards/uid/".concat(e)).then((function(e){return"Dashboard named '".concat(null==e?void 0:e.dashboard.title,"' in folder '").concat(null==e?void 0:e.meta.folderTitle,"' has the same uid")})).catch((function(e){return e.isHandled=!0,!0}))};function v(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){v(o,n,a,i,c,"next",e)}function c(e){v(o,n,a,i,c,"throw",e)}i(void 0)}))}}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=function(e){var t,r,o,i=e.register,u=e.errors,l=e.control,s=e.getValues,p=e.uidReset,b=e.inputs,h=e.initialFolderId,v=e.onUidReset,E=e.onCancel,j=e.onSubmit,S=e.watch,D=O(Object(n.useState)(!1),2),F=D[0],I=D[1],P=S("dataSources");return Object(n.useEffect)((function(){F&&(u.title||u.uid)&&j(s({nest:!0}),{})}),[u]),a.a.createElement(a.a.Fragment,null,a.a.createElement(c.Legend,null,"Options"),a.a.createElement(c.Field,{label:"Name",invalid:!!u.title,error:u.title&&u.title.message},a.a.createElement(c.Input,{name:"title",type:"text",ref:i({required:"Name is required",validate:(o=g(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r=t,n=s().folder.id,m.a.validateNewDashboardName(n,r).then((function(){return!0})).catch((function(e){if("EXISTING"===e.type)return e.message}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}var r,n}),e)}))),function(e){return o.apply(this,arguments)})})})),a.a.createElement(c.Field,{label:"Folder"},a.a.createElement(c.InputControl,{as:d.a,name:"folder",enableCreateNew:!0,initialFolderId:h,control:l})),a.a.createElement(c.Field,{label:"Unique identifier (uid)",description:"The unique identifier (uid) of a dashboard can be used for uniquely identify a dashboard between multiple Grafana installs. The uid allows having consistent URL’s for accessing dashboards so changing the title of a dashboard will not break any bookmarked links to that dashboard.",invalid:!!u.uid,error:u.uid&&u.uid.message},a.a.createElement(a.a.Fragment,null,p?a.a.createElement(c.Input,{name:"uid",ref:i({required:!0,validate:(t=g(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})})}):a.a.createElement(c.Input,{name:"uid",disabled:!0,ref:i({validate:(r=g(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})}),addonAfter:!p&&a.a.createElement(c.Button,{onClick:v},"Change uid")}))),b.dataSources&&b.dataSources.map((function(e,t){var r,n="dataSources[".concat(t,"]"),o=null!=P?P:[];return a.a.createElement(c.Field,{label:e.label,key:n,invalid:u.dataSources&&!!u.dataSources[t],error:u.dataSources&&u.dataSources[t]&&"A data source is required"},a.a.createElement(c.InputControl,{as:f.a,noDefault:!0,pluginId:e.pluginId,name:"".concat(n),current:null===(r=o[t])||void 0===r?void 0:r.name,control:l,placeholder:e.info,rules:{required:!0}}))})),b.constants&&b.constants.map((function(e,t){var r="constants[".concat(t,"]");return a.a.createElement(c.Field,{label:e.label,error:u.constants&&u.constants[t]&&"".concat(e.label," needs a value"),invalid:u.constants&&!!u.constants[t],key:r},a.a.createElement(c.Input,{ref:i({required:!0}),name:"".concat(r),defaultValue:e.value}))})),a.a.createElement(c.HorizontalGroup,null,a.a.createElement(c.Button,{type:"submit",variant:w(u),onClick:function(){I(!0)}},function(e){return e&&(e.title||e.uid)?"Import (Overwrite)":"Import"}(u)),a.a.createElement(c.Button,{type:"reset",variant:"secondary",onClick:E},"Cancel")))};function w(e){return e&&(e.title||e.uid)?"destructive":"primary"}var j=r("5LyR"),S=r("nFP0");function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(){var e,r;k(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=x(this,(e=C(t)).call.apply(e,[this].concat(a)))).state={uidReset:!1},r.onSubmit=function(e){r.props.importDashboard(e)},r.onCancel=function(){r.props.clearLoadedDashboard()},r.onUidReset=function(){r.setState({uidReset:!0})},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=this.props,r=t.dashboard,n=t.inputs,o=t.meta,u=t.source,l=t.folder,s=this.state.uidReset;return a.a.createElement(a.a.Fragment,null,u===S.a.Gcom&&a.a.createElement("div",{style:{marginBottom:"24px"}},a.a.createElement("div",null,a.a.createElement(c.Legend,null,"Importing Dashboard from"," ",a.a.createElement("a",{href:"https://grafana.com/dashboards/".concat(r.gnetId),className:"external-link",target:"_blank",rel:"noreferrer"},"Grafana.com"))),a.a.createElement("table",{className:"filter-table form-inline"},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Published by"),a.a.createElement("td",null,o.orgName)),a.a.createElement("tr",null,a.a.createElement("td",null,"Updated on"),a.a.createElement("td",null,Object(i.dateTimeFormat)(o.updatedAt)))))),a.a.createElement(c.Form,{onSubmit:this.onSubmit,defaultValues:I({},r,{constants:[],dataSources:[],folder:l}),validateOnMount:!0,validateFieldsOnMount:["title","uid"],validateOn:"onChange"},(function(t){var r=t.register,o=t.errors,i=t.control,c=t.watch,u=t.getValues;return a.a.createElement(E,{register:r,errors:o,control:i,getValues:u,uidReset:s,inputs:n,onCancel:e.onCancel,onUidReset:e.onUidReset,onSubmit:e.onSubmit,watch:c,initialFolderId:l.id})})))}}])&&N(r.prototype,n),o&&N(r,o),t}(n.PureComponent),_={clearLoadedDashboard:j.a,importDashboard:j.f},q=Object(s.connect)((function(e){return{dashboard:e.importDashboard.dashboard,meta:e.importDashboard.meta,source:e.importDashboard.source,inputs:e.importDashboard.inputs,folder:e.location.routeParams.folderId?{id:Number(e.location.routeParams.folderId)}:{id:0}}}),_)(R);q.displayName="ImportDashboardOverview";var L=r("Xmxp"),T=r("lzJ5");function A(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n      margin-bottom: 32px;\n    "]);return A=function(){return e},e}function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function V(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,"DashboardImportPage",(function(){return W}));var H=function(e){function t(){var e,r;U(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=V(this,(e=z(t)).call.apply(e,[this].concat(a)))).onFileUpload=function(e){var t=r.props.importDashboardJson,n=e.currentTarget.files&&e.currentTarget.files.length>0&&e.currentTarget.files[0];if(n){var a=new FileReader;a.onload=function(e){var r;try{r=JSON.parse(e.target.result)}catch(e){return void L.b.emit(i.AppEvents.alertError,["Import failed","JSON -> JS Serialization failed: "+e.message])}t(r)},a.readAsText(n)}},r.getDashboardFromJson=function(e){r.props.importDashboardJson(JSON.parse(e.dashboardJson))},r.getGcomDashboard=function(e){var t,n=/(^\d+$)|dashboards\/(\d+)/.exec(e.gcomDashboard);n&&n[1]?t=n[1]:n&&n[2]&&(t=n[2]),t&&r.props.fetchGcomDashboard(t)},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,e),r=t,(n=[{key:"renderImportForm",value:function(){var e=X();return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:e.option},a.a.createElement(c.FileUpload,{accept:"application/json",onFileUpload:this.onFileUpload},"Upload JSON file")),a.a.createElement("div",{className:e.option},a.a.createElement(c.Legend,null,"Import via grafana.com"),a.a.createElement(c.Form,{onSubmit:this.getGcomDashboard,defaultValues:{gcomDashboard:""}},(function(e){var t=e.register,r=e.errors;return a.a.createElement(c.Field,{invalid:!!r.gcomDashboard,error:r.gcomDashboard&&r.gcomDashboard.message},a.a.createElement(c.Input,{name:"gcomDashboard",placeholder:"Grafana.com dashboard url or id",type:"text",ref:t({required:"A Grafana dashboard url or id is required",validate:h}),addonAfter:a.a.createElement(c.Button,{type:"submit"},"Load")}))}))),a.a.createElement("div",{className:e.option},a.a.createElement(c.Legend,null,"Import via panel json"),a.a.createElement(c.Form,{onSubmit:this.getDashboardFromJson,defaultValues:{dashboardJson:""}},(function(e){var t=e.register,r=e.errors;return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.Field,{invalid:!!r.dashboardJson,error:r.dashboardJson&&r.dashboardJson.message},a.a.createElement(c.TextArea,{name:"dashboardJson",ref:t({required:"Need a dashboard json model",validate:b}),rows:10})),a.a.createElement(c.Button,{type:"submit"},"Load"))}))))}},{key:"render",value:function(){var e=this.props,t=e.isLoaded,r=e.navModel;return a.a.createElement(u.a,{navModel:r},a.a.createElement(u.a.Contents,null,t?a.a.createElement(q,null):this.renderImportForm()))}}])&&B(r.prototype,n),o&&B(r,o),t}(n.PureComponent),K={fetchGcomDashboard:j.e,importDashboardJson:j.g},W=Object(l.a)((function(e){return{navModel:Object(T.a)(e.navIndex,"import",void 0,!0),isLoaded:e.importDashboard.isLoaded}}),K,(function(e){return e.importDashboard}))(H);t.default=W;W.displayName="DashboardImport";var X=Object(c.stylesFactory)((function(){return{option:Object(o.css)(A())}}))},hBny:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("/MKj"),a=r("zVNn"),o=r("q1tI"),i=r.n(o),c=r("2mql"),u=r.n(c),l=function(e,t,r){return function(c){var l=Object(n.connect)(e,t)(c),s=function(e){var t=Object(n.useDispatch)();return Object(o.useEffect)((function(){return function(){t(Object(a.a)({stateSelector:r}))}}),[]),i.a.createElement(l,e)};return s.displayName="ConnectWithCleanUp(".concat(l.displayName,")"),u()(s,c),s}}}}]);
//# sourceMappingURL=DashboardImport.3817b8b78f33fc1605dc.js.map