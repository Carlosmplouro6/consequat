(this.webpackJsonpconsequat=this.webpackJsonpconsequat||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),l=n.n(r),s=n(3),o=n(4),i=n(5),u=n(6),m=(n(18),n(19),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"headerContainer"},c.a.createElement("div",{className:"logo"},c.a.createElement("a",{href:"index.html"},c.a.createElement("h1",null,"Consequat"))))}}]),n}(a.Component)),d=(n(20),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"FooterContainer"},c.a.createElement("div",{className:"FooterContent"},"Made by Carlos Louro"),c.a.createElement("div",{className:"FooterContent"},"API courtesy by"," ",c.a.createElement("a",{href:"https://www.themealdb.com",target:"_blank",rel:"noopener noreferrer"},"www.themealdb.com/")))}}]),n}(a.Component)),p=n(2),f=n.n(p),b=n(7),v=n(1),h=Object(a.createContext)(),E=function(e){var t=e.children,n=Object(a.useState)("None"),r=Object(v.a)(n,2),l=r[0],s=r[1],o=Object(a.useState)("None"),i=Object(v.a)(o,2),u=i[0],m=i[1];return c.a.createElement(h.Provider,{value:[l,s,u,m]},t)},j=(n(22),function(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],r=t[1],l=Object(a.useContext)(h),s=Object(v.a)(l,2),o=(s[0],s[1]);function i(){return(i=Object(b.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),r(n.meals);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){var e=document.getElementsByClassName("activeBtn");e.length>0&&(e[0].className=e[0].className.replace(" activeBtn",""))}return Object(a.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),c.a.createElement("div",{id:"menuToggle"},c.a.createElement("input",{id:"checkbox",type:"checkbox",defaultChecked:!0}),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("div",{className:"buttonGrid"},n.map((function(e){return c.a.createElement("button",{key:e.strCategory,id:e.strCategory,className:"categorieButton",onClick:function(){return function(e){o(e);var t=document.getElementsByClassName("categorieButton");document.getElementById("checkbox").checked=!1;for(var n=0;n<t.length;n++)t[n].id===e&&(u(),t[n].className+=" activeBtn")}(e.strCategory)}},e.strCategory)}))))});n(23);var O=function(){var e=Object(a.useContext)(h),t=Object(v.a)(e,4),n=t[0],r=(t[1],t[2],t[3]),l=Object(a.useState)([]),s=Object(v.a)(l,2),o=s[0],i=s[1];function u(){return(u=Object(b.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+n);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),i(a.meals);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){"None"!==n&&function(){u.apply(this,arguments)}()}),[n]),c.a.createElement("div",{className:"RecepieCardContainer"},o.map((function(e){return c.a.createElement("div",{className:"recepieCard",key:e.idMeal,onClick:function(){return t=e.idMeal,console.log(t),void r(t);var t}},c.a.createElement("img",{className:"recepieImg",src:e.strMealThumb,alt:e.strMeal}),c.a.createElement("h3",{className:"recepieTitle"},e.strMeal))})))},N=n(10);n(24);var C=function(){var e=Object(a.useContext)(h),t=Object(v.a)(e,4),n=(t[0],t[1],t[2]),r=t[3],l=Object(a.useState)(),s=Object(v.a)(l,2),o=s[0],i=s[1],u=Object(a.useState)(!1),m=Object(v.a)(u,2),d=m[0],p=m[1],E=Object(a.useState)([]),j=Object(v.a)(E,2),O=j[0],C=j[1],g=Object(a.useState)([]),y=Object(v.a)(g,2),w=y[0],k=y[1];function x(){return(x=Object(b.a)(f.a.mark((function e(){var t,a,c,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+n);case 2:return t=e.sent,e.next=5,t.json();case 5:for(a=e.sent,c=function(e){""!=!a.meals[0]["strIngredient"+e]&&null!=!a.meals[0]["strIngredient"+e]||(C((function(t){return[].concat(Object(N.a)(t),[a.meals[0]["strIngredient"+e]])})),k((function(t){return[].concat(Object(N.a)(t),[a.meals[0]["strMeasure"+e]])})))},l=1;l<21;l++)c(l);console.log(a),i(a),p(!0),r("None");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){"None"!==n&&function(){x.apply(this,arguments)}()}),[n]),c.a.createElement("div",null,c.a.createElement("div",null,d?c.a.createElement("div",{className:"recepieFieldCardContainer"},c.a.createElement("div",{className:"recepieFieldCard"},c.a.createElement("h2",{className:"recepieName"},o.meals[0].strMeal),c.a.createElement("div",{className:"imgIngContainer"},c.a.createElement("img",{className:"recepiePic",src:o.meals[0].strMealThumb,alt:o.meals[0].strMeal}),c.a.createElement("ul",null,c.a.createElement("h4",{className:"ingredientsTitle"},"Ingredients:"),O.map((function(e,t){return c.a.createElement("li",{key:t},e," - ",w[t])})))),c.a.createElement("h4",{className:"instructionsTitle"},"Instructions:"),c.a.createElement("p",{className:"recepieInstructions"},o.meals[0].strInstructions),c.a.createElement("button",{className:"CloseBtn",onClick:function(){p(!1),C([]),k([])}},"X"))):c.a.createElement("div",null)))},g=(n(25),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement(E,null,c.a.createElement("div",null,c.a.createElement(C,null)),c.a.createElement("div",{className:"mainContentContainer"},c.a.createElement("div",{className:"buttonBay"},c.a.createElement(j,null)),c.a.createElement("div",{className:"recipeBay"}),c.a.createElement(O,null)))}}]),n}(a.Component)),y=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"mainContainer"},c.a.createElement("div",{className:"Header"},c.a.createElement(m,null)),c.a.createElement(h.Provider,null,c.a.createElement("div",{className:"mainContent"},c.a.createElement(g,null))),c.a.createElement("div",{className:"Footer"},c.a.createElement(d,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.d1fb0892.chunk.js.map