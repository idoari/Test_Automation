(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"6PW0":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("jYz7"),i=n("Obii"),s=n("kDLi"),c=n("Csm0"),l=n("Hi79"),u=n("ZFWI"),f=n("Iab2"),d=n("kDDq"),p=n("lcF4");function m(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin: 0;\n  margin-left: ",";\n  font-size: ",";\n  color: ",";\n"]);return m=function(){return e},e}var b=function(e){return Object(d.css)(m(),e.spacing.md,e.typography.size.sm,e.colors.textWeak)},h=function(e){var t=e.children,n=Object(s.useStyles)(b);return a.a.createElement("p",{className:n},t)};function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n              margin-bottom: 10px;\n            "]);return v=function(){return e},e}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return x}));var x=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=S(this,D(t).call(this,e))).exportCsv=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.props.panel,a=r.state.transformId,o=Object(i.toCSV)([e],t),s=new Blob([String.fromCharCode(65279),o],{type:"text/csv;charset=utf-8"}),c=n?n.getDisplayTitle():"Explore",l=a!==i.DataTransformerID.noop?"-as-"+a.toLocaleLowerCase():"",u="".concat(c,"-data").concat(l,"-").concat(Object(i.dateTimeFormat)(new Date),".csv");Object(f.saveAs)(s,u)},r.onDataFrameChange=function(e){r.setState({transformId:e.value===i.DataTransformerID.seriesToColumns?i.DataTransformerID.seriesToColumns:i.DataTransformerID.noop,dataFrameIndex:"number"==typeof e.value?e.value:0,selectedDataFrame:e.value})},r.state={selectedDataFrame:0,dataFrameIndex:0,transformId:i.DataTransformerID.noop,transformationOptions:(a=[{value:i.DataTransformerID.seriesToColumns,label:"Series joined by time",transformer:{id:i.DataTransformerID.seriesToColumns,options:{byField:"Time"}}}],a),transformedData:null!==(n=e.data)&&void 0!==n?n:[],downloadForExcel:!1},r}var n,r,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,(r=[{key:"componentDidUpdate",value:function(e,t){var n=this;if(this.props.data)if(this.props.options.withTransforms)this.setState({transformedData:this.props.data});else if(e.data===this.props.data&&t.transformId===this.state.transformId);else{var r=this.state.transformationOptions.find((function(e){return e.value===n.state.transformId}));if(r&&r.transformer.id!==i.DataTransformerID.noop){var a=this.state.selectedDataFrame,o=this.state.dataFrameIndex,s=Object(i.transformDataFrame)([r.transformer],this.props.data).subscribe((function(e){n.setState({transformedData:e,selectedDataFrame:a,dataFrameIndex:o},(function(){return s.unsubscribe()}))}));return}this.setState({transformedData:this.props.data})}else this.setState({transformedData:[]})}},{key:"getProcessedData",value:function(){var e=this.props,t=e.options,n=e.panel,r=this.state.transformedData;return t.withFieldConfig&&n?Object(i.applyFieldOverrides)({data:r,theme:u.a.theme,fieldConfig:n.fieldConfig,replaceVariables:function(e){return e}}):Object(i.applyRawFieldOverrides)(r)}},{key:"getActiveString",value:function(){var e=this.state.selectedDataFrame,t=this.props,n=t.options,r=t.data;if(!r)return"";var a=[];return e===i.DataTransformerID.seriesToColumns?a.push("Series joined by time"):r.length>1&&a.push(Object(i.getFrameDisplayName)(r[e])),(n.withTransforms||n.withFieldConfig)&&(n.withTransforms&&a.push("Panel transforms"),n.withTransforms&&n.withFieldConfig,n.withFieldConfig&&a.push("Formatted data")),this.state.downloadForExcel&&a.push("Excel header"),a.join(", ")}},{key:"renderDataOptions",value:function(e){var t,n=this,r=this.props,o=r.options,c=r.onOptionsChange,u=r.panel,f=r.data,d=this.state,m=d.transformId,b=d.transformationOptions,y=d.selectedDataFrame,v=Object(l.a)(),g=null==u?void 0:u.getTransformations(),w=Boolean(null==g?void 0:g.length)&&"join by time"!==m,E=u&&!(null===(t=u.plugin)||void 0===t?void 0:t.fieldConfigRegistry.isEmpty()),S=e;y===i.DataTransformerID.seriesToColumns&&(S=f);var D=S.map((function(e,t){return{value:t,label:"".concat(Object(i.getFrameDisplayName)(e)," (").concat(t,")")}})),P=[].concat(j(b),j(D));return a.a.createElement(p.a,{id:"Data options",index:0,title:"Data options",headerElement:a.a.createElement(h,null,this.getActiveString()),isOpen:!1},a.a.createElement("div",{className:v.options,"data-testid":"dataOptions"},a.a.createElement(s.VerticalGroup,{spacing:"none"},f.length>1&&a.a.createElement(s.Field,{label:"Show data frame"},a.a.createElement(s.Select,{options:P,value:y,onChange:this.onDataFrameChange,width:30,"aria-label":"Select dataframe"})),a.a.createElement(s.HorizontalGroup,null,w&&c&&a.a.createElement(s.Field,{label:"Apply panel transformations",description:"Table data is displayed with transformations defined in the panel Transform tab."},a.a.createElement(s.Switch,{value:!!o.withTransforms,onChange:function(){return c(O({},o,{withTransforms:!o.withTransforms}))}})),E&&c&&a.a.createElement(s.Field,{label:"Formatted data",description:"Table data is formatted with options defined in the Field and Override tabs."},a.a.createElement(s.Switch,{value:!!o.withFieldConfig,onChange:function(){return c(O({},o,{withFieldConfig:!o.withFieldConfig}))}})),a.a.createElement(s.Field,{label:"Download for Excel",description:"Adds header to CSV for use with Excel"},a.a.createElement(s.Switch,{value:this.state.downloadForExcel,onChange:function(){return n.setState({downloadForExcel:!n.state.downloadForExcel})}}))))))}},{key:"render",value:function(){var e=this,t=this.props.isLoading,n=this.state.dataFrameIndex,r=Object(l.a)();if(t)return a.a.createElement("div",null,a.a.createElement(s.Spinner,{inline:!0})," Loading");var i=this.getProcessedData();if(!i||!i.length)return a.a.createElement("div",null,"No Data");var u=i[n]?n:0,f=i[u];return a.a.createElement("div",{className:r.dataTabContent,"aria-label":c.selectors.components.PanelInspector.Data.content},a.a.createElement("div",{className:r.actionsWrapper},a.a.createElement("div",{className:r.dataDisplayOptions},this.renderDataOptions(i)),a.a.createElement(s.Button,{variant:"primary",onClick:function(){return e.exportCsv(i[n],{useExcelHeader:e.state.downloadForExcel})},className:Object(d.css)(v())},"Download CSV")),a.a.createElement(s.Container,{grow:1},a.a.createElement(o.a,null,(function(e){var t=e.width,n=e.height;return 0===t?null:a.a.createElement("div",{style:{width:t,height:n}},a.a.createElement(s.Table,{width:t,height:n,data:f}))}))))}}])&&E(n.prototype,r),m&&E(n,m),t}(r.PureComponent)},HgkN:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r,a=n("q1tI"),o=n.n(a),i=n("LvDl"),s=n("Obii"),c=n("kDLi"),l=n("jYz7"),u=n("Csm0"),f=n("HJRA"),d=n("Hi79");function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}!function(e){e.PanelJSON="panel",e.DataJSON="data",e.DataStructure="structure"}(r||(r={}));var w=[{label:"Panel JSON",description:"The model saved in the dashboard JSON that configures how everything works.",value:r.PanelJSON},{label:"Data",description:"The raw model passed to the panel visualization",value:r.DataJSON},{label:"DataFrame structure",description:"Response info without any values",value:r.DataStructure}],j=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,g(t).call(this,e))).onSelectChanged=function(e){var t=E(n.getJSONObject(e.value));n.setState({text:t,show:e.value})},n.onTextChanged=function(e){n.setState({text:e})},n.onApplyPanelModel=function(){var e=n.props,t=e.panel,r=e.dashboard,a=e.onClose;if(n.hasPanelJSON){try{if(r.meta.canEdit){var o=JSON.parse(n.state.text);t.restoreModel(o),t.refresh(),f.a.emit(s.AppEvents.alertSuccess,["Panel model updated"])}else f.a.emit(s.AppEvents.alertError,["Unable to apply"])}catch(e){console.error("Error applying updates",e),f.a.emit(s.AppEvents.alertError,["Invalid JSON text"])}a()}},n.hasPanelJSON=!(!e.panel||!e.dashboard),n.state={show:n.hasPanelJSON?r.PanelJSON:r.DataJSON,text:n.hasPanelJSON?E(e.panel.getSaveModel()):E(e.data)},n}var n,a,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(a=[{key:"getJSONObject",value:function(e){var t=this.props,n=t.data,a=t.panel;return e===r.DataJSON?n:e===r.DataStructure?(null==n?void 0:n.series)?n.series.map((function(e){var t=e;return t.table,t.fields,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},h(t,["table","fields"]),{fields:e.fields.map((function(e){return Object(i.chain)(e).omit("values").omit("state").omit("display").value()}))})})):{note:"Missing Response Data"}:this.hasPanelJSON&&e===r.PanelJSON?a.getSaveModel():{note:"Unknown Object: ".concat(e)}}},{key:"render",value:function(){var e=this,t=this.props.dashboard,n=this.state,a=n.show,i=n.text,s=this.hasPanelJSON?w:w.slice(1,w.length),f=w.find((function(e){return e.value===a})),p=a===r.PanelJSON,m=t&&t.meta.canEdit,b=Object(d.a)();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:b.toolbar,"aria-label":u.selectors.components.PanelInspector.Json.content},o.a.createElement(c.Field,{label:"Select source",className:"flex-grow-1"},o.a.createElement(c.Select,{options:s,value:f,onChange:this.onSelectChanged})),this.hasPanelJSON&&p&&m&&o.a.createElement(c.Button,{className:b.toolbarItem,onClick:this.onApplyPanelModel},"Apply")),o.a.createElement("div",{className:b.content},o.a.createElement(l.a,{disableWidth:!0},(function(t){var n=t.height;return o.a.createElement(c.CodeEditor,{width:"100%",height:n,language:"json",showLineNumbers:!0,showMiniMap:(i&&i.length)>100,value:i||"",readOnly:!p,onBlur:e.onTextChanged})}))))}}])&&y(n.prototype,a),p&&y(n,p),t}(a.PureComponent);function E(e){return JSON.stringify(e,null,2)}},Hi79:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n("kDDq"),a=n("ZFWI"),o=n("kDLi");function i(){var e=w(["\n      display: flex;\n      > * {\n        margin-right: ",";\n      }\n    "]);return i=function(){return e},e}function s(){var e=w(["\n      flex-grow: 1;\n      min-width: 300px;\n      margin-right: ",";\n    "]);return s=function(){return e},e}function c(){var e=w(["\n      padding-top: ",";\n    "]);return c=function(){return e},e}function l(){var e=w(["\n      display: flex;\n      flex-grow: 1;\n\n      max-width: 85%;\n      @media (max-width: 1345px) {\n        max-width: 75%;\n      }\n    "]);return l=function(){return e},e}function u(){var e=w(["\n      display: flex;\n    "]);return u=function(){return e},e}function f(){var e=w(["\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      width: 100%;\n    "]);return f=function(){return e},e}function d(){var e=w(["\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    "]);return d=function(){return e},e}function p(){var e=w(["\n      flex-grow: 2;\n    "]);return p=function(){return e},e}function m(){var e=w(["\n      overflow: scroll;\n    "]);return m=function(){return e},e}function b(){var e=w(["\n      font-family: monospace;\n      height: 100%;\n      flex-grow: 1;\n    "]);return b=function(){return e},e}function h(){var e=w(["\n      flex-grow: 1;\n      padding: "," 0;\n    "]);return h=function(){return e},e}function y(){var e=w(["\n      flex-grow: 1;\n      height: 100%;\n      padding-bottom: 16px;\n    "]);return y=function(){return e},e}function v(){var e=w(["\n      margin-left: ",";\n    "]);return v=function(){return e},e}function g(){var e=w(["\n      display: flex;\n      width: 100%;\n      flex-grow: 0;\n      align-items: center;\n      justify-content: flex-end;\n      margin-bottom: ",";\n    "]);return g=function(){return e},e}function O(){var e=w(["\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      width: 100%;\n      flex: 1 1 0;\n    "]);return O=function(){return e},e}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var j=Object(o.stylesFactory)((function(){return{wrap:Object(r.css)(O()),toolbar:Object(r.css)(g(),a.a.theme.spacing.sm),toolbarItem:Object(r.css)(v(),a.a.theme.spacing.md),content:Object(r.css)(y()),contentQueryInspector:Object(r.css)(h(),a.a.theme.spacing.md),editor:Object(r.css)(b()),viewer:Object(r.css)(m()),dataFrameSelect:Object(r.css)(p()),tabContent:Object(r.css)(d()),dataTabContent:Object(r.css)(f()),actionsWrapper:Object(r.css)(u()),leftActions:Object(r.css)(l()),options:Object(r.css)(c(),a.a.theme.spacing.sm),dataDisplayOptions:Object(r.css)(s(),a.a.theme.spacing.sm),selects:Object(r.css)(i(),a.a.theme.spacing.sm)}}))},LInY:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var r=n("q1tI"),a=n.n(r),o=n("kDLi"),i=n("Csm0"),s=n("Obii"),c=n("Xmxp"),l=n("ttS0"),u=n("Hi79"),f=n("sCrc"),d=n("t8hP"),p=n("kDDq"),m=n("pugT"),b=n("NXk7"),h=n("xAj+");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n        font-weight: ",";\n        color: ",";\n        margin-right: 8px;\n      "]);return v=function(){return e},e}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=E(this,S(t).call(this,e))).subs=new m.a,n.onPanelRefresh=function(){n.setState((function(e){return O({},e,{dsQuery:{isLoading:!0,response:{}}})}))},n.setFormattedJson=function(e){n.formattedJson=e},n.getTextForClipboard=function(){return JSON.stringify(n.formattedJson,null,2)},n.onClipboardSuccess=function(){c.b.emit(s.AppEvents.alertSuccess,["Content copied to clipboard"])},n.onToggleExpand=function(){n.setState((function(e){return O({},e,{allNodesExpanded:!n.state.allNodesExpanded})}))},n.onToggleMocking=function(){n.setState((function(e){return O({},e,{isMocking:!n.state.isMocking})}))},n.getNrOfOpenNodes=function(){return null===n.state.allNodesExpanded?3:n.state.allNodesExpanded?20:1},n.setMockedResponse=function(e){var t=e.target.value;n.setState((function(e){return O({},e,{mockedResponse:t})}))},n.state={executedQueries:[],allNodesExpanded:null,isMocking:!1,mockedResponse:"",dsQuery:{isLoading:!1,response:{}}},n}var n,r,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props.panel;this.subs.add(b.b.getInspectorStream().subscribe({next:function(t){return e.onDataSourceResponse(t)}})),t&&(this.subs.add(t.events.subscribe(h.RefreshEvent,this.onPanelRefresh)),this.updateQueryList())}},{key:"componentDidUpdate",value:function(e){this.props.data!==e.data&&this.updateQueryList()}},{key:"updateQueryList",value:function(){var e=this.props.data,t=[];if(null==e?void 0:e.length){var n=void 0;e.forEach((function(e,r){var a,o=null===(a=e.meta)||void 0===a?void 0:a.executedQueryString;if(o){var i,s=e.refId||"?";(null===(i=n)||void 0===i?void 0:i.refId)===s?(n.frames++,n.rows+=e.length):(n={refId:s,frames:0,rows:e.length,query:o},t.push(n))}}))}this.setState({executedQueries:t})}},{key:"componentWillUnmount",value:function(){this.subs.unsubscribe()}},{key:"onDataSourceResponse",value:function(e){var t;(null===(t=e.config)||void 0===t?void 0:t.hideFromInspector)||((e=O({},e)).headers&&delete e.headers,e.config&&(e.request=e.config,delete e.config,delete e.request.transformRequest,delete e.request.transformResponse,delete e.request.paramSerializer,delete e.request.jsonpCallbackParam,delete e.request.headers,delete e.request.requestId,delete e.request.inspect,delete e.request.retry,delete e.request.timeout),e.data&&(e.response=e.data,delete e.config,delete e.data,delete e.status,delete e.statusText,delete e.ok,delete e.url,delete e.redirected,delete e.type,delete e.$$config),this.setState((function(t){return O({},t,{dsQuery:{isLoading:!1,response:e}})})))}},{key:"renderExecutedQueries",value:function(e){if(!e.length)return null;var t={refId:Object(p.css)(v(),d.config.theme.typography.weight.semibold,d.config.theme.colors.textBlue)};return a.a.createElement("div",null,e.map((function(e){return a.a.createElement("div",{key:e.refId},a.a.createElement("div",null,a.a.createElement("span",{className:t.refId},e.refId,":"),e.frames>1&&a.a.createElement("span",null,e.frames," frames, "),a.a.createElement("span",null,e.rows," rows")),a.a.createElement("pre",null,e.query))})))}},{key:"render",value:function(){var e=this.state,t=e.allNodesExpanded,n=e.executedQueries,r=this.props,s=r.panel,c=r.onRefreshQuery,d=this.state.dsQuery,p=d.response,m=d.isLoading,b=this.getNrOfOpenNodes(),h=Object(u.a)(),y=Object.keys(p).length>0;return s&&!Object(f.b)(s.plugin)?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{"aria-label":i.selectors.components.PanelInspector.Query.content},a.a.createElement("h3",{className:"section-heading"},"Query inspector"),a.a.createElement("p",{className:"small muted"},"Query inspector allows you to view raw request and response. To collect this data Grafana needs to issue a new query. Hit refresh button below to trigger a new query.")),this.renderExecutedQueries(n),a.a.createElement("div",{className:h.toolbar},a.a.createElement(o.Button,{icon:"sync",onClick:c,"aria-label":i.selectors.components.PanelInspector.Query.refreshButton},"Refresh"),y&&t&&a.a.createElement(o.Button,{icon:"minus",variant:"secondary",className:h.toolbarItem,onClick:this.onToggleExpand},"Collapse all"),y&&!t&&a.a.createElement(o.Button,{icon:"plus",variant:"secondary",className:h.toolbarItem,onClick:this.onToggleExpand},"Expand all"),y&&a.a.createElement(l.a,{text:this.getTextForClipboard,onSuccess:this.onClipboardSuccess,elType:"div",className:h.toolbarItem},a.a.createElement(o.Button,{icon:"copy",variant:"secondary"},"Copy to clipboard")),a.a.createElement("div",{className:"flex-grow-1"})),a.a.createElement("div",{className:h.contentQueryInspector},m&&a.a.createElement(o.LoadingPlaceholder,{text:"Loading query inspector..."}),!m&&y&&a.a.createElement(o.JSONFormatter,{json:p,open:b,onDidRender:this.setFormattedJson}),!m&&!y&&a.a.createElement("p",{className:"muted"},"No request & response collected yet. Hit refresh button")))}}])&&j(n.prototype,r),y&&j(n,y),t}(r.PureComponent)},SVrL:function(e,t,n){"use strict";var r=n("Csm0"),a=n("q1tI"),o=n.n(a),i=n("Obii"),s=n("ZFWI"),c=n("kDLi"),l=n("kDDq");function u(){var e=d(["\n      text-align: right;\n    "]);return u=function(){return e},e}function f(){var e=d(["\n      padding-bottom: ",";\n    "]);return f=function(){return e},e}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var p=function(e){var t=e.timeZone,n=e.name,r=e.stats,a=Object(c.useTheme)(),l=m(a);return r&&r.length?o.a.createElement("div",{className:l.wrapper},o.a.createElement("div",{className:"section-heading"},n),o.a.createElement("table",{className:"filter-table width-30"},o.a.createElement("tbody",null,r.map((function(e,n){return o.a.createElement("tr",{key:"".concat(e.displayName,"-").concat(n)},o.a.createElement("td",null,e.displayName),o.a.createElement("td",{className:l.cell},function(e,t){var n=Object(i.getDisplayProcessor)({field:{type:i.FieldType.number,config:e},theme:s.a.theme,timeZone:t});return Object(i.formattedValueToString)(n(e.value))}(e,t)))}))))):null};var m=Object(c.stylesFactory)((function(e){return{wrapper:Object(l.css)(f(),e.spacing.md),cell:Object(l.css)(u())}}));n.d(t,"a",(function(){return b}));var b=function(e){var t,n=e.data,a=e.timeZone;if(!n.request)return null;var i=[],s=n.request.endTime?n.request.endTime-n.request.startTime:-1,c=(null===(t=n.timings)||void 0===t?void 0:t.dataProcessingTime)||-1,l=0,u=!0,f=!1,d=void 0;try{for(var m,b=n.series[Symbol.iterator]();!(u=(m=b.next()).done);u=!0){l+=m.value.length}}catch(e){f=!0,d=e}finally{try{u||null==b.return||b.return()}finally{if(f)throw d}}s>0&&i.push({displayName:"Total request time",value:s,unit:"ms"}),c>0&&i.push({displayName:"Data processing time",value:c,unit:"ms"}),i.push({displayName:"Number of queries",value:n.request.targets.length}),i.push({displayName:"Total number rows",value:l});var h=[],y=!0,v=!1,g=void 0;try{for(var O,w=n.series[Symbol.iterator]();!(y=(O=w.next()).done);y=!0){var j=O.value;j.meta&&j.meta.stats&&(h=h.concat(j.meta.stats))}}catch(e){v=!0,g=e}finally{try{y||null==w.return||w.return()}finally{if(v)throw g}}return o.a.createElement("div",{"aria-label":r.selectors.components.PanelInspector.Stats.content},o.a.createElement(p,{timeZone:a,name:"Stats",stats:i}),o.a.createElement(p,{timeZone:a,name:"Data source stats",stats:h}))}},sCrc:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return f}));var r=n("LvDl"),a=n("eLz+"),o=n("eXZ6");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n,r){if(e===a.a.Fill)return{width:t,height:n};var i=(window.innerWidth-4*o.e)/o.f*r.gridPos.w,s=o.d*r.gridPos.h,c=Math.min(t/i,n/s);return e===a.a.Exact&&i<=t&&s<=n?{width:i,height:s}:{width:i*c,height:s*c}}function u(e){return!1===(null==e?void 0:e.meta.skipDataQuery)}var f=function(e,t,n,a){var o=s({},e.defaults),i=null==n||"";return a?o.custom?o.custom=i?Object(r.omit)(o.custom,t):Object(r.set)(s({},o.custom),t,n):i||(o.custom=Object(r.set)(s({},o.custom),t,n)):o=i?Object(r.omit)(o,t):Object(r.set)(s({},o),t,n),s({},e,{defaults:o})}}}]);
//# sourceMappingURL=default~DashboardPage~explore.3817b8b78f33fc1605dc.js.map