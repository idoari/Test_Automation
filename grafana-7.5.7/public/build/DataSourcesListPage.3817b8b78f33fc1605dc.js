(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"3/ef":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("kDLi"),u=n("kDDq");function c(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n      list-style: none;\n    "]);return c=function(){return e},e}t.a=function(e){var t=e.dataSources,n=(e.layoutMode,Object(a.useStyles)(i));return o.a.createElement("ul",{className:n.list},t.map((function(e,t){return o.a.createElement("li",{key:e.id},o.a.createElement(a.Card,{heading:e.name,href:"datasources/edit/".concat(e.id)},o.a.createElement(a.Card.Figure,null,o.a.createElement("img",{src:e.typeLogoUrl,alt:e.name})),o.a.createElement(a.Card.Meta,null,[e.typeName,e.url,e.isDefault&&o.a.createElement(a.Tag,{key:"default-tag",name:"default",colorIndex:1})])))})))};var i=function(){return{list:Object(u.css)(c())}}},"6jYb":function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("q1tI"),o=n.n(r),a=n("EKT6"),u=n("kDLi");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return i(this,t),l(this,f(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.searchQuery,n=e.linkButton,r=e.setSearchQuery,c=e.target,i={href:n.href};return c&&(i.target=c),o.a.createElement("div",{className:"page-action-bar"},o.a.createElement("div",{className:"gf-form gf-form--grow"},o.a.createElement(a.a,{labelClassName:"gf-form--has-input-icon",inputClassName:"gf-form-input width-20",value:t,onChange:r,placeholder:"Search by name or type"})),o.a.createElement("div",{className:"page-action-bar__spacer"}),o.a.createElement(u.LinkButton,i,n.title))}}])&&s(n.prototype,r),c&&s(n,c),t}(r.PureComponent)},rouV:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"DataSourcesListPage",(function(){return j}));var r=n("q1tI"),o=n.n(r),a=n("/MKj"),u=n("0cfB"),c=n("ZGyg"),i=n("6jYb"),s=n("QQVG"),l=n("3/ef"),f=n("5BCB"),p=n("lzJ5"),y=n("frIo"),d=n("FFN/");function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O={title:"There are no data sources defined yet",buttonIcon:"database",buttonLink:"datasources/new",buttonTitle:"Add data source",proTip:"You can also define data sources through configuration files.",proTipLink:"http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list",proTipLinkTitle:"Learn more",proTipTarget:"_blank"},j=function(e){function t(){return m(this,t),g(this,v(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.loadDataSources()}},{key:"render",value:function(){var e=this.props,t=e.dataSources,n=e.dataSourcesCount,r=e.navModel,a=e.layoutMode,u=e.searchQuery,f=e.setDataSourcesSearchQuery,p=e.hasFetched;return o.a.createElement(c.a,{navModel:r},o.a.createElement(c.a.Contents,{isLoading:!p},o.a.createElement(o.a.Fragment,null,p&&0===n&&o.a.createElement(s.a,O),p&&n>0&&[o.a.createElement(i.a,{searchQuery:u,setSearchQuery:function(e){return f(e)},linkButton:{href:"datasources/new",title:"Add data source"},key:"action-bar"}),o.a.createElement(l.a,{dataSources:t,layoutMode:a,key:"list"})])))}}])&&h(n.prototype,r),a&&h(n,a),t}(r.PureComponent);var w={loadDataSources:f.f,setDataSourcesSearchQuery:d.l,setDataSourcesLayoutMode:d.k};t.default=Object(u.hot)(e)(Object(a.connect)((function(e){return{navModel:Object(p.a)(e.navIndex,"datasources"),dataSources:Object(y.d)(e.dataSources),layoutMode:Object(y.f)(e.dataSources),dataSourcesCount:Object(y.e)(e.dataSources),searchQuery:Object(y.g)(e.dataSources),hasFetched:e.dataSources.hasFetched}}),w)(j))}.call(this,n("3UD+")(e))}}]);
//# sourceMappingURL=DataSourcesListPage.3817b8b78f33fc1605dc.js.map