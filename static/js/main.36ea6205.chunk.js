(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r),a=n(4),s=n.n(a),c=n(6),i=n(7),u=n(8),l=n(10),d=n(9),h=n(1),g=n.n(h),f=(n(3),n(16),function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(e){if(!e.ok)throw new Error("Loading error");return e.json()}))}),j=function(){return f().then((function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name)})).splice(0,5)}))},m=function(){return f().then((function(e){return e.filter((function(e){return"red"===e.color}))}))},b=(n(17),n(0)),p=function(e){var t=e.goods;return Object(b.jsx)("ul",{className:"list list-group",children:t.map((function(e){return Object(b.jsx)("li",{style:{color:"".concat(e.color)},className:"list-group-item",children:e.name},e.id)}))})},O=function(e){var t=e.name,n=e.handleChange;return Object(b.jsx)("button",{type:"button",className:"btn btn-success mr-2",onClick:n,children:t})},x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={goods:[],errorMessage:"",loading:!1},e.getGoods=function(){var t=Object(c.a)(s.a.mark((function t(n){var r,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({errorMessage:"",loading:!0}),t.next=4,n();case 4:r=t.sent,e.setState({goods:r,errorMessage:"",loading:!1}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),o=t.t0,e.setState({errorMessage:o.message,loading:!1});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.goods,r=t.errorMessage,o=t.loading;return Object(b.jsxs)("main",{className:"App",children:[Object(b.jsx)("h1",{children:"Dynamic list of Goods"}),Object(b.jsxs)("section",{className:"buttons",children:[Object(b.jsx)(O,{name:"Get all",handleChange:function(){return e.getGoods(f)}}),Object(b.jsx)(O,{name:"Get 5 first",handleChange:function(){return e.getGoods(j)}}),Object(b.jsx)(O,{name:"Get red",handleChange:function(){return e.getGoods(m)}})]}),r&&Object(b.jsx)("div",{className:"alert alert-danger",children:r}),!r&&(o?Object(b.jsx)("h2",{children:"Please, wait..."}):n.length>0&&Object(b.jsx)(p,{goods:n}))]})}}]),n}(g.a.Component),v=x;o.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.36ea6205.chunk.js.map