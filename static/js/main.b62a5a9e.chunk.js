(window["webpackJsonpwiki-viewer-v2.0"]=window["webpackJsonpwiki-viewer-v2.0"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(3),o=t.n(i),c=(t(9),t(1)),l=(t(10),function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(""),l=Object(c.a)(o,2),s=l[0],u=l[1],d=Object(a.useState)(!1),h=Object(c.a)(d,2),m=h[0],p=h[1],w=function(){fetch("https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srlimit=6&srsearch=".concat(s)).then(function(e){return e.json()}).then(function(e){i(e.query.search),p(!0)}).catch(function(e){return console.log(e)})},f=function(e){return r.a.createElement("div",null,r.a.createElement("a",{className:"links",href:"".concat("https://en.wikipedia.org/?curid="," + ").concat(t[e].pageid),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"results"},t[e].title)))};return r.a.createElement("div",{id:"container"},r.a.createElement("p",{className:"heading"},r.a.createElement("a",{id:"RandomLink",href:"https://en.wikipedia.org/wiki/Special:Random",target:"_blank",rel:"noopener noreferrer"}," ","Click here for a random Wikipedia article")),r.a.createElement("div",{id:"search-container"},r.a.createElement("input",{className:"search-box",type:"text",placeholder:"search...",value:s,onChange:function(e){var n=e.target.value;u(n),setTimeout(function(){""===n&&p(!1)},100)},onKeyDown:function(e){13===e.keyCode&&w()}})),m&&r.a.createElement("div",{id:"result-container"},f(0),f(1),f(2),f(3),f(4),f(5)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.b62a5a9e.chunk.js.map