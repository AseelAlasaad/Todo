(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var c=n(20),i=n(21),a=n(25),s=n(24),j=n(0),r=n.n(j),l=n(8),o=n.n(l),b=(n(28),n(143)),u=n(1);var d=function(){return Object(u.jsx)(b.e,{className:"nav.bp3-navbar",children:Object(u.jsxs)(b.e.Group,{children:[Object(u.jsx)(b.e.Heading,{children:"To Do List"}),Object(u.jsx)(b.e.Divider,{}),Object(u.jsx)(b.a,{className:"bp3-minimal",icon:"home",text:"Home"}),Object(u.jsx)(b.a,{className:"bp3-minimal",icon:"settings",text:"Settings"})]})})},O=n(54),p=n(9),h=n(23),m=n(36),x=function(e){var t=Object(j.useState)({}),n=Object(p.a)(t,2),c=n[0],i=n[1];return{handleChange:function(e){e.persist(),i((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(h.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(c)},values:c}},f=n(11);var g=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(b.b,{interactive:!0,elevation:f.a.TWO,children:[Object(u.jsx)("p",{children:"Completed Task"}),e.completeList.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:e.text}),Object(u.jsx)("p",{children:Object(u.jsxs)("small",{children:["Assigned to: ",e.assignee]})}),Object(u.jsx)("p",{children:Object(u.jsxs)("small",{children:["Difficulty: ",e.difficulty]})}),Object(u.jsx)("hr",{})]},e.id)}))]})})};var v=function(e){return Object(u.jsx)(u.Fragment,{children:e.paginate().map((function(t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:t.text}),Object(u.jsx)("p",{children:Object(u.jsxs)("small",{children:["Assigned to: ",t.assignee]})}),Object(u.jsx)("p",{children:Object(u.jsxs)("small",{children:["Difficulty: ",t.difficulty]})}),Object(u.jsx)(b.a,{type:"button",class:"bp3-button.bp3-intent-danger",onClick:function(){return e.deleteItem(t.id)},children:"delete"}),Object(u.jsx)("div",{onClick:function(){return e.toggleComplete(t.id)},children:Object(u.jsx)(b.a,{className:"bp3-icon",children:t.complete?"Complete":"Pending"})}),Object(u.jsx)("hr",{})]},t.id)}))})},C=n(144),y=(n(138),r.a.createContext());var D=function(e){var t=Object(j.useState)(2),n=Object(p.a)(t,2),c=(n[0],n[1],Object(j.useState)(!1)),i=Object(p.a)(c,2),a=(i[0],i[1],Object(j.useState)([])),s=Object(p.a)(a,2);return s[0],s[1],Object(u.jsx)(y.Provider,{value:{pagination:2,hide:!1,listComplete:[]},children:e.children})},S=function(e){var t=Object(j.useContext)(y),n=Object(j.useState)([]),c=Object(p.a)(n,2),i=c[0],a=c[1],s=Object(j.useState)(t.pagination),r=Object(p.a)(s,2),l=r[0],o=r[1],d=Object(j.useState)([]),h=Object(p.a)(d,2),m=h[0],D=h[1],S=x((function(e){console.log(e),e.id=Object(C.a)(),e.complete=!1,a([].concat(Object(O.a)(i),[e]))})),k=S.handleChange,N=S.handleSubmit,I=Object(j.useState)(!1),T=Object(p.a)(I,2),A=T[0],L=T[1],E=Object(j.useState)([]),w=Object(p.a)(E,2),F=w[0],P=w[1];Object(j.useEffect)((function(){var e=i.filter((function(e){return!e.complete})).length;D(e),document.title="To Do List: ".concat(m)}),[i]);function H(){var e=[];i.map((function(t){1==t.complete&&e.push(t)})),L(!0),P(e)}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"Classes.ELEVATION_*",class:"app",children:Object(u.jsxs)(b.b,{interactive:!0,elevation:f.a.TWO,children:[Object(u.jsx)("header",{class:"header",children:Object(u.jsxs)("h1",{className:"h1",children:["To Do List: ",m," items pending"]})}),Object(u.jsx)("h2",{children:"Add To Do Item"}),Object(u.jsxs)("form",{onSubmit:N,children:[Object(u.jsx)(b.c,{label:"To Do Item",children:Object(u.jsx)(b.d,{onChange:k,name:"text",type:"text",placeholder:"Item Details"})}),Object(u.jsx)(b.c,{label:"Assigned To",children:Object(u.jsx)(b.d,{onChange:k,name:"assignee",type:"text",placeholder:"Assignee Name"})}),Object(u.jsx)(b.c,{label:"Difficulty",children:Object(u.jsx)(b.d,{onChange:k,defaultValue:3,type:"range",min:1,max:5,name:"difficulty"})}),Object(u.jsx)(b.c,{}),Object(u.jsx)(b.a,{className:"bp3-intent-primary",type:"submit",children:"Add Item"})]})]})}),Object(u.jsx)(v,{toggleComplete:function(e){var t=i.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));a(t)},paginate:function(e){var n=l-t.pagination;return i.slice(n,l)},deleteItem:function(e){var t=i.filter((function(t){return t.id!==e}));a(t)}}),Object(u.jsx)(b.a,{className:"bp3-intent-primary",type:"click",onClick:H,children:"Completed Item"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),o(l-t.pagination)},children:" Previous"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),o(l+t.pagination)},children:" Next"}),A&&Object(u.jsx)(g,{showIfComplete:H,completeList:F})]})},k=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(D,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(S,{})]})}}]),n}(r.a.Component),N=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsx)(k,{})}}]),n}(r.a.Component),I=document.getElementById("root");o.a.render(Object(u.jsx)(N,{}),I)}},[[139,1,2]]]);
//# sourceMappingURL=main.e9156559.chunk.js.map