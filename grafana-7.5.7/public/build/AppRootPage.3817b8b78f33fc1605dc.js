(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4ACg":function(t,e,n){"use strict";n.d(e,"c",(function(){return p})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var o,r=n("q1tI"),a=n("i8i4"),i=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t){var e,n,o,r={};if("html"===t)o=document.createElement("div");else{if("svg"!==t)throw new Error('Invalid element type "'+t+'" for createPortalNode: must be "html" or "svg".');o=document.createElementNS("http://www.w3.org/2000/svg","g")}var a={element:o,elementType:t,setPortalProps:function(t){r=t},getInitialPortalProps:function(){return r},mount:function(o,r){if(r!==n){if(a.unmount(),o!==e&&!function(t,e){if("html"===e)return t instanceof HTMLElement;if("svg"===e)return t instanceof SVGElement;throw new Error('Unrecognized element type "'+e+'" for validateElementType.')}(o,t))throw new Error('Invalid element type for portal: "'+t+'" portalNodes must be used with '+t+" elements, but OutPortal is within <"+o.tagName+">.");o.replaceChild(a.element,r),e=o,n=r}},unmount:function(t){t&&t!==n||e&&n&&(e.replaceChild(n,a.element),e=void 0,n=void 0)}};return a},c=function(t){function e(e){var n=t.call(this,e)||this;return n.addPropsChannel=function(){Object.assign(n.props.node,{setPortalProps:function(t){n.setState({nodeProps:t})}})},n.state={nodeProps:n.props.node.getInitialPortalProps()},n}return i(e,t),e.prototype.componentDidMount=function(){this.addPropsChannel()},e.prototype.componentDidUpdate=function(){this.addPropsChannel()},e.prototype.render=function(){var t=this,e=this.props,n=e.children,o=e.node;return a.createPortal(r.Children.map(n,(function(e){return r.isValidElement(e)?r.cloneElement(e,t.state.nodeProps):e})),o.element)},e}(r.PureComponent),l=function(t){function e(e){var n=t.call(this,e)||this;return n.placeholderNode=r.createRef(),n.passPropsThroughPortal(),n}return i(e,t),e.prototype.passPropsThroughPortal=function(){var t=Object.assign({},this.props,{node:void 0});this.props.node.setPortalProps(t)},e.prototype.componentDidMount=function(){var t=this.props.node;this.currentPortalNode=t;var e=this.placeholderNode.current,n=e.parentNode;t.mount(n,e),this.passPropsThroughPortal()},e.prototype.componentDidUpdate=function(){var t=this.props.node;this.currentPortalNode&&t!==this.currentPortalNode&&(this.currentPortalNode.unmount(this.placeholderNode.current),this.currentPortalNode=t);var e=this.placeholderNode.current,n=e.parentNode;t.mount(n,e),this.passPropsThroughPortal()},e.prototype.componentWillUnmount=function(){this.props.node.unmount(this.placeholderNode.current)},e.prototype.render=function(){return r.createElement("div",{ref:this.placeholderNode})},e}(r.PureComponent),p=u.bind(null,"html");u.bind(null,"svg")},Xzuj:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"getAppPluginPageError",(function(){return w}));var o=n("q1tI"),r=n.n(o),a=n("0cfB"),i=n("/MKj"),u=n("Obii"),c=n("4ACg"),l=n("ZGyg"),p=n("okuo"),s=n("Vw/f"),f=n("lJbD"),d=n("HJRA"),h=n("QcpB");function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e,n,o,r,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(o,r)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){return t?t.type!==u.PluginType.app?"Plugin must be an app":t.enabled?null:"Application Not Enabled":"Unknown Plugin"}var E=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=b(this,g(e).call(this,t))).onNavChanged=function(t){n.setState({nav:t})},n.state={loading:!0,portalNode:Object(c.c)()},n}var n,o,a,i,m;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(e,t),n=e,(o=[{key:"shouldComponentUpdate",value:function(t){return t.path.startsWith("/a/")}},{key:"componentDidMount",value:(i=regeneratorRuntime.mark((function t(){var e,n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.pluginId,t.prev=1,t.next=4,Object(p.a)(e).then((function(t){var e=w(t);return e?(d.a.emit(u.AppEvents.alertError,[e]),o.setState({nav:Object(f.b)(e)}),null):Object(s.a)(t)}));case 4:n=t.sent,this.setState({plugin:n,loading:!1}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),this.setState({plugin:null,loading:!1,nav:Object(f.a)()});case 11:case"end":return t.stop()}}),t,this,[[1,8]])})),m=function(){var t=this,e=arguments;return new Promise((function(n,o){var r=i.apply(t,e);function a(t){v(r,n,o,a,u,"next",t)}function u(t){v(r,n,o,a,u,"throw",t)}a(void 0)}))},function(){return m.apply(this,arguments)})},{key:"render",value:function(){var t=this.props,e=t.path,n=t.query,o=this.state,a=o.loading,i=o.plugin,u=o.nav,p=o.portalNode;return i&&!i.root?r.a.createElement("div",null,"No Root App"):r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{node:p},i&&i.root&&r.a.createElement(i.root,{meta:i.meta,query:n,path:e,onNavChanged:this.onNavChanged})),u?r.a.createElement(l.a,{navModel:u},r.a.createElement(l.a.Contents,{isLoading:a},r.a.createElement(c.b,{node:p}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{node:p}),a&&r.a.createElement(h.a,null)))}}])&&y(n.prototype,o),a&&y(n,a),e}(o.Component);e.default=Object(a.hot)(t)(Object(i.connect)((function(t){return{pluginId:t.location.routeParams.pluginId,slug:t.location.routeParams.slug,query:t.location.query,path:t.location.path}}))(E))}.call(this,n("3UD+")(t))}}]);
//# sourceMappingURL=AppRootPage.3817b8b78f33fc1605dc.js.map