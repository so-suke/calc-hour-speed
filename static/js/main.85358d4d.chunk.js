(this["webpackJsonpcalc-hour-speed"]=this["webpackJsonpcalc-hour-speed"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c.n(n),s=c(18),l=c.n(s),r=(c(23),c(8)),j=(c(24),c(28)),b=c(30),i=c(29),o=c(3),u="HH:mm:ss";var m=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),l=Object(r.a)(s,2),m=l[0],O=l[1],d=Object(n.useState)(""),h=Object(r.a)(d,2),f=h[0],x=h[1],p=Object(n.useState)(""),g=Object(r.a)(p,2),N=g[0],v=g[1],S=Object(n.useState)(0),C=Object(r.a)(S,2),F=C[0],E=C[1],I=Object(n.useState)(0),w=Object(r.a)(I,2),y=w[0],k=w[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("rotateNumberStart")||"",t=localStorage.getItem("rotateNumberEnd")||"",c=localStorage.getItem("timeStart")||"",n=localStorage.getItem("timeEnd")||"";a(e),O(t),x(c),v(n)}),[]),Object(n.useEffect)((function(){localStorage.setItem("rotateNumberStart",c)}),[c]),Object(n.useEffect)((function(){localStorage.setItem("rotateNumberEnd",m)}),[m]),Object(n.useEffect)((function(){localStorage.setItem("timeStart",f)}),[f]),Object(n.useEffect)((function(){localStorage.setItem("timeEnd",N)}),[N]),Object(o.jsxs)("div",{className:"app",children:[Object(o.jsxs)("div",{className:"formContent",children:[Object(o.jsx)("label",{htmlFor:"",children:"\u958b\u59cb\u56de\u8ee2\u6570"}),Object(o.jsx)("input",{className:"input",type:"number",value:c,onChange:function(e){!function(e){a(e.target.value)}(e)}}),Object(o.jsx)("label",{htmlFor:"",children:"\u958b\u59cb\u6642\u523b"}),Object(o.jsx)("input",{className:"input",type:"text",value:f,onChange:function(e){!function(e){x(e.target.value)}(e)}}),Object(o.jsx)("button",{className:"calcBtn",onClick:function(){var e=Object(i.a)(new Date,u);x(e)},children:"\u958b\u59cb\u6642\u523b\u5165\u529b"})]}),Object(o.jsxs)("div",{className:"formContent",children:[Object(o.jsx)("label",{htmlFor:"",children:"\u7d42\u4e86\u56de\u8ee2\u6570"}),Object(o.jsx)("input",{className:"input",type:"number",value:m,onChange:function(e){!function(e){O(e.target.value)}(e)}}),Object(o.jsx)("label",{htmlFor:"",children:"\u7d42\u4e86\u6642\u523b"}),Object(o.jsx)("input",{className:"input",type:"text",value:N,onChange:function(e){!function(e){v(e.target.value)}(e)}}),Object(o.jsx)("button",{className:"calcBtn",onClick:function(){var e=Object(i.a)(new Date,u);v(e)},children:"\u7d42\u4e86\u6642\u523b\u5165\u529b"})]}),Object(o.jsx)("button",{className:"calcBtn",onClick:function(){var e=Object(j.a)(f,u,new Date),t=Object(j.a)(N,u,new Date),n=Object(b.a)(t,e);k(n);var a=(Number(m)-Number(c))/n,s=Math.floor(60*a*60);E(s)},children:"\u8a08\u7b97"}),Object(o.jsxs)("div",{className:"display",children:[Object(o.jsxs)(n.Fragment,{children:[Object(o.jsx)("span",{children:"\u7d4c\u904e\u6642\u9593"}),Object(o.jsx)("span",{className:"number",children:(y/60).toFixed(1)}),Object(o.jsx)("span",{children:"\u5206"})]}),Object(o.jsxs)(n.Fragment,{children:[Object(o.jsx)("span",{children:"\u56de\u8ee2\u6570"}),Object(o.jsx)("span",{className:"number",children:Number(m)-Number(c)}),Object(o.jsx)("span",{children:"\u56de\u8ee2"})]}),Object(o.jsxs)(n.Fragment,{children:[Object(o.jsx)("span",{children:"\u6642\u901f"}),Object(o.jsx)("span",{className:"number",children:F}),Object(o.jsx)("span",{children:"\u56de\u8ee2"})]})]})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),O()}},[[26,1,2]]]);
//# sourceMappingURL=main.85358d4d.chunk.js.map