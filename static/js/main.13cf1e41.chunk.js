(this.webpackJsonptdlist=this.webpackJsonptdlist||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(6),i=n.n(r),l=(n(14),n(8)),s=n(1),c=n(2),m=n(4),u=n(3),d=(n(15),function(t){var e=t.list,n=t.rmFromList,a=e.length?e.map((function(t){return o.a.createElement("div",{className:"list-body",key:t.priority},o.a.createElement("div",{onClick:function(){n(t.priority)}}," ",o.a.createElement("b",null,t.priority)," : ",t.memo))})):o.a.createElement("div",{className:"list-body"},o.a.createElement("b",null,"All Done!"));return o.a.createElement("div",null,a)}),h=n(7),p=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={priority:null,memo:null},t.handleChange=function(e){console.log(e),t.setState(Object(h.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),console.log(e),t.props.addToList(t.state)},t}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"list-form",onSubmit:this.handleSubmit},o.a.createElement("input",{type:"number",step:"1",min:"0",max:"100",id:"priority",placeholder:"Priority(0:100)",onChange:this.handleChange}),o.a.createElement("input",{type:"text",id:"memo",maxLength:"280",placeholder:"What do you need to do?",onChange:this.handleChange}),o.a.createElement("button",{type:"submit"},"Submit")))}}]),n}(a.Component),f=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={list:[{priority:1,memo:"Buy face masks."},{priority:2,memo:"Stay at home."},{priority:3,memo:"Learn some React."}]},t.addToList=function(e){console.log(t.state.list);var n=[].concat(Object(l.a)(t.state.list),[e]);t.setState({list:n})},t.rmFromList=function(e){console.log(e);var n=t.state.list.filter((function(t){return t.priority!==e}));t.setState({list:n})},t}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"App-header"}," To Do List"),o.a.createElement(d,{list:this.state.list,rmFromList:this.rmFromList}),o.a.createElement(p,{list:this.state.list,addToList:this.addToList}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.13cf1e41.chunk.js.map