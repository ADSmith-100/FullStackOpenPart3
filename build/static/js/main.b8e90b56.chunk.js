(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(e,n,t){},24:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),a=t.n(r),o=t(17),u=t.n(o),i=(t(24),t(18)),s=t(3),l=t(5),j=t.n(l),d="http://localhost:3001/api/persons",b=function(){return j.a.get(d).then((function(e){return e.data}))},h=function(e){return j.a.post(d,e).then((function(e){return e.data}))},f=function(e,n){return j.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},m=function(e){return j.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},O=(t(16),function(e){return Object(c.jsx)("form",{onSubmit:e.addPerson,children:Object(c.jsxs)("fieldset",{children:[Object(c.jsx)("legend",{children:"Add Entry:"}),Object(c.jsxs)("div",{children:["name:"," ",Object(c.jsx)("input",{value:e.newName,onChange:e.handlePersonChange})]}),Object(c.jsxs)("div",{children:["number:"," ",Object(c.jsx)("input",{value:e.newNum,onChange:e.handleNumChange})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})})}),x=function(e){return Object(c.jsxs)("div",{children:["filter by name:"," ",Object(c.jsx)("input",{value:e.searchName,onChange:e.handleSearchNameChange})]})},v=function(e){return Object(c.jsxs)("li",{children:[e.person.name," ",e.person.number]})},p=function(e){return Object(c.jsx)(c.Fragment,{children:e.filteredData.map((function(n){return Object(c.jsxs)("div",{children:[Object(c.jsx)(v,{person:n})," ",Object(c.jsx)("button",{className:"remove",onClick:function(){return e.handleRemove(n.id,n.name)},children:"Remove"}),Object(c.jsx)("br",{})]},n.id)}))})},g=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},N=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"ok",children:n})},w=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)(""),u=Object(s.a)(o,2),l=u[0],j=u[1],d=Object(r.useState)(""),v=Object(s.a)(d,2),w=v[0],C=v[1],S=Object(r.useState)(""),k=Object(s.a)(S,2),y=k[0],P=k[1],D=Object(r.useState)(null),E=Object(s.a)(D,2),R=E[0],T=E[1],A=Object(r.useState)(null),J=Object(s.a)(A,2),L=J[0],B=J[1];Object(r.useEffect)((function(){b().then((function(e){a(e)}))}),[]);var F=t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)("div",{children:Object(c.jsx)(x,{handleSearchNameChange:function(e){P(e.target.value)},searchName:y})}),Object(c.jsx)("br",{}),null!==R?Object(c.jsx)(g,{message:R}):Object(c.jsx)(N,{message:L}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{children:Object(c.jsx)(O,{addPerson:function(e){e.preventDefault();var n,c={name:l,number:w},r=t.filter((function(e){return e.name===l}));t.find((function(e){return e.name===l}))?window.confirm("".concat(l," already exists in this phonebook! Want to replace the number?"))?(n=r[0].id,f(n,{name:l,number:w}).then((function(e){var c=Object(i.a)(t);c.splice(n-1,1,e),a(c),B("Number for ".concat(l," has been updated!")),setTimeout((function(){B(null)}),4e3),j(""),C("")}))):alert("action cancelled"):h(c).then((function(e){a(t.concat(e)),B("".concat(l," has been added to the phonebook!")),setTimeout((function(){B(null)}),4e3),j(""),C("")}))},newName:l,handlePersonChange:function(e){j(e.target.value)},newNum:w,handleNumChange:function(e){C(e.target.value)}})}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)("div",{children:Object(c.jsx)(p,{filteredData:F,handleRemove:function(e,n){window.confirm("Are you sure you want to delete ".concat(n,"?"))?m(e).then((function(){var n=t.filter((function(n){return n.id!==e}));a(n)})).catch((function(c){T("'".concat(n,"' was already removed from server")),setTimeout((function(){T(null)}),5e3),a(t.filter((function(n){return n.id!==e})))})):alert("operation cancelled")}})})]})};u.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b8e90b56.chunk.js.map