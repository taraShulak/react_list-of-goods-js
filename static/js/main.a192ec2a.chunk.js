(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(6),c=n.n(s),i=n(5),o=n(7),r=n(1),a=(n(12),n(13),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l="name",b="length";var j=function(){var t=Object(r.useState)(""),e=Object(i.a)(t,2),n=e[0],s=e[1],c=Object(r.useState)(!1),j=Object(i.a)(c,2),h=j[0],d=j[1],g=function(t,e,n){var s=Object(o.a)(t);return e&&s.sort((function(t,n){switch(e){case b:return t.length-n.length;case l:return t.localeCompare(n);default:return 0}})),n&&(s=s.reverse()),s}(u,n,h);return Object(a.jsxs)("div",{className:"section content",children:[Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{type:"button",className:n===l?"button is-info":"button is-info is-light",onClick:function(){return s(l)},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",className:n===b?"button is-success":"button is-success is-light",onClick:function(){return s(b)},children:"Sort by length"}),Object(a.jsx)("button",{type:"button",className:h?"button is-warning":"button is-warning is-light",onClick:function(){return d(!h)},children:"Reverse"}),(h||n)&&Object(a.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return d(!1),void s("")},children:"Reset"})]}),Object(a.jsx)("ul",{children:g.map((function(t){return Object(a.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a192ec2a.chunk.js.map