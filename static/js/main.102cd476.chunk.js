(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{116:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var c=n(20),a=n(21),i=n(25),r=n(24),s=n(0),j=n.n(s),o=n(8),l=n.n(o),u=n(52),b=n(10),d=n(23),O=n(32),h=function(e){var t=Object(s.useState)({}),n=Object(b.a)(t,2),c=n[0],a=n[1];return{handleChange:function(e){e.persist(),a((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(c)},values:c}},p=(n(115),n(147)),f=n(11),m=n(148),x=(n(116),n(2)),v=j.a.createContext();var g=function(e){var t=Object(s.useState)(2),n=Object(b.a)(t,2),c=(n[0],n[1],Object(s.useState)(!1)),a=Object(b.a)(c,2);return a[0],a[1],Object(x.jsx)(v.Provider,{value:{pagination:2,hide:!1},children:e.children})},y=function(e){var t=Object(s.useContext)(v),n=Object(s.useState)([]),c=Object(b.a)(n,2),a=c[0],i=c[1],r=Object(s.useState)(t.pagination),j=Object(b.a)(r,2),o=j[0],l=j[1],d=Object(s.useState)([]),O=Object(b.a)(d,2),g=O[0],y=O[1],C=h((function(e){console.log(e),e.id=Object(m.a)(),e.complete=!1,i([].concat(Object(u.a)(a),[e]))})),D=C.handleChange,S=C.handleSubmit;Object(s.useEffect)((function(){var e=a.filter((function(e){return!e.complete})).length;y(e),document.title="To Do List: ".concat(g)}),[a]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"Classes.ELEVATION_*",class:"app",children:Object(x.jsxs)(p.b,{interactive:!0,elevation:f.a.TWO,children:[Object(x.jsx)("header",{class:"header",children:Object(x.jsxs)("h1",{className:"h1",children:["To Do List: ",g," items pending"]})}),Object(x.jsx)("h2",{children:"Add To Do Item"}),Object(x.jsxs)("form",{onSubmit:S,children:[Object(x.jsx)(p.c,{label:"To Do Item",children:Object(x.jsx)(p.d,{onChange:D,name:"text",type:"text",placeholder:"Item Details"})}),Object(x.jsx)(p.c,{label:"Assigned To",children:Object(x.jsx)(p.d,{onChange:D,name:"assignee",type:"text",placeholder:"Assignee Name"})}),Object(x.jsx)(p.c,{label:"Difficulty",children:Object(x.jsx)(p.d,{onChange:D,defaultValue:3,type:"range",min:1,max:5,name:"difficulty"})}),Object(x.jsx)(p.a,{className:"bp3-intent-primary",type:"submit",children:"Add Item"})]})]})}),function(e){var n=o-t.pagination;return a.slice(n,o)}().map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:e.text}),Object(x.jsx)("p",{children:Object(x.jsxs)("small",{children:["Assigned to: ",e.assignee]})}),Object(x.jsx)("p",{children:Object(x.jsxs)("small",{children:["Difficulty: ",e.difficulty]})}),Object(x.jsxs)("div",{onClick:function(){return function(e){var t=a.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));i(t)}(e.id)},children:["Complete: ",e.complete.toString()]}),Object(x.jsx)("hr",{})]},e.id)})),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),l(o-t.pagination)},children:" Previous"}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),l(o+t.pagination)},children:" Next"})]})},C=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(x.jsx)(g,{children:Object(x.jsx)(y,{})})}}]),n}(j.a.Component),D=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(x.jsx)(C,{})}}]),n}(j.a.Component),S=document.getElementById("root");l.a.render(Object(x.jsx)(D,{}),S)}},[[142,1,2]]]);
//# sourceMappingURL=main.102cd476.chunk.js.map