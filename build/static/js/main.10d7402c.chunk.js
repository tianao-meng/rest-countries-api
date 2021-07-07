(this["webpackJsonprest-countries-api"]=this["webpackJsonprest-countries-api"]||[]).push([[0],{24:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(18),i=n.n(s),a=(n(24),n(0)),l=function(){return Object(a.jsxs)("div",{className:"container header",children:[Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Where in the world?"})}),Object(a.jsx)("div",{children:Object(a.jsxs)("button",{onClick:function(){var e=document.querySelector(".header"),t=document.querySelector("button"),n=document.querySelector("input"),c=document.querySelector(".dropdown"),r=document.querySelector(".fa"),s=document.querySelectorAll(".information"),i=document.querySelector(".details-card");document.body.classList.toggle("light"),e&&e.classList.toggle("light"),t&&t.classList.toggle("light"),n&&n.classList.toggle("light"),c&&c.classList.toggle("light"),r&&r.classList.toggle("light"),i&&i.classList.toggle("light"),s&&s.forEach((function(e){e.classList.toggle("light")}))},children:[Object(a.jsx)("i",{class:"fas fa-moon"}),"Dark Mode"]})})]})},o=n(7),j=n.n(o),d=n(11),u=n(12),h=n(9),b=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"container grid",children:n.map((function(e){var t=e.population,n=e.name,c=e.region,r=e.capital,s=e.flag;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)(h.b,{to:"/countries/".concat(n),children:Object(a.jsx)("img",{src:s,alt:n})}),Object(a.jsxs)("div",{className:"information",children:[Object(a.jsx)("h3",{className:"name",children:n}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Population:"})," ",t]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Region:"})," ",Object(a.jsx)("span",{className:"region",children:c})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Capital:"})," ",Object(a.jsx)("span",{children:r})]})]})]})}))})},O=function(){window.addEventListener("DOMContentLoaded",(function(){document.getElementById("search").addEventListener("input",(function(e){var t=e.target.value;console.log(t),document.querySelectorAll(".name").forEach((function(e){e.innerText.toLowerCase().includes(t.toLowerCase())?e.parentElement.parentElement.style.display="block":e.parentElement.parentElement.style.display="none"}))}))}));var e=function(e){var t=document.getElementById(e).innerText,n=document.querySelectorAll(".region");document.getElementById("p").innerText=t,n.forEach((function(e){e.innerText.includes(t)||"All"===t?e.parentElement.parentElement.parentElement.style.display="block":e.parentElement.parentElement.parentElement.style.display="none"}))};return Object(a.jsx)("div",{className:"container filter",children:Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"input",children:[Object(a.jsx)("button",{type:"submit",children:Object(a.jsx)("i",{class:"fa fa-search"})}),Object(a.jsx)("input",{type:"search",id:"search",name:"search",placeholder:"Search for a country..."})]}),Object(a.jsx)("div",{className:"select",children:Object(a.jsxs)("div",{onClick:function(){document.getElementById("filter").classList.toggle("open")},className:"dropdown",id:"filter",children:[Object(a.jsx)("div",{id:"p",children:"Filter by Region"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{id:"All",onClick:function(){return e("All")},children:"All"}),Object(a.jsx)("li",{id:"Africa",onClick:function(){return e("Africa")},children:"Africa"}),Object(a.jsx)("li",{id:"Americas",onClick:function(){return e("Americas")},children:"Americas"}),Object(a.jsx)("li",{id:"Asia",onClick:function(){return e("Asia")},children:"Asia"}),Object(a.jsx)("li",{id:"Europe",onClick:function(){return e("Europe")},children:"Europe"}),Object(a.jsx)("li",{id:"Oceania",onClick:function(){return e("Oceania")},children:"Oceania"})]})]})})]})})},x=n(2),p=(n(32),function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(u.a)(s,2),l=i[0],o=i[1],b=Object(x.e)().name,O=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/name/".concat(b));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=n[0].borders,s=[],c.map(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/alpha/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,i=r.name,s.push(i),s.length===c.length&&o(s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){O()}),[b]);var p=function(){window.history.back()};return Object(a.jsx)("div",{children:n.map((function(e){var t=e.flag,n=e.nativeName,c=e.population,r=e.region,s=e.subregion,i=e.capital,o=e.topLevelDomain,j=e.currencies,d=e.languages;e.borders;return Object(a.jsxs)("div",{className:"details-card container",children:[Object(a.jsxs)("button",{className:"btn",onClick:p,children:[Object(a.jsx)("i",{className:"fas fa-arrow-left"})," Back"]}),Object(a.jsxs)("div",{className:"details",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:t,alt:b})}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsx)("h2",{children:b}),Object(a.jsxs)("div",{className:"information",children:[Object(a.jsxs)("div",{className:"information-left",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Native Name: "}),n]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Population: "}),c]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Region: "}),r]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Sub Region: "}),s]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Capital: "}),i]})]}),Object(a.jsxs)("div",{className:"information-right",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Top Level Domain: "}),o[0]]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Currencies: "}),j[0].name]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Languages: "}),d[0].name]})]})]}),Object(a.jsx)("div",{className:"border",children:Object(a.jsx)("ul",{children:l.map((function(e){var t="/countries/".concat(e);return Object(a.jsx)("li",{children:Object(a.jsx)(h.b,{className:"link",to:t,children:e})})}))})})]})]})]})}))})});var m=function(){return Object(a.jsxs)(h.a,{children:[Object(a.jsx)(l,{}),Object(a.jsxs)(x.a,{exact:!0,path:"/",children:[Object(a.jsx)(O,{}),Object(a.jsx)(b,{})]}),Object(a.jsx)(x.a,{path:"/countries/:name",children:Object(a.jsx)(p,{})})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.10d7402c.chunk.js.map