"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[876],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={slug:"Javascript_Study_Note",title:"Javascript Study Note 1 - From javascript.info",authors:"taowang",tags:["javascript"]},i="JavaScript",l={permalink:"/zh-CN/blog/Javascript_Study_Note",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2018-08-04-JS-Study-Notes.md",source:"@site/blog/2018-08-04-JS-Study-Notes.md",title:"Javascript Study Note 1 - From javascript.info",description:"Javascript can execute not only in the browser, but also on the server, or actually on any device where there exists a special program called the JavaScript Engine",date:"2018-08-04T00:00:00.000Z",formattedDate:"2018\u5e748\u67084\u65e5",tags:[{label:"javascript",permalink:"/zh-CN/blog/tags/javascript"}],readingTime:1.82,hasTruncateMarker:!1,authors:[{name:"Tao Wang",url:"https://github.com/huwangtao123",imageURL:"https://github.com/huwangtao123.png",key:"taowang"}],frontMatter:{slug:"Javascript_Study_Note",title:"Javascript Study Note 1 - From javascript.info",authors:"taowang",tags:["javascript"]},prevItem:{title:"CLever\u8fc7\u6e21\u51fa\u6d4b\u8bd5\u7248\u548c\u66f4\u591a",permalink:"/zh-CN/blog/2022/10/17/CLever\u2019s Transition Out of Beta and More"}},s={authorsImageUrls:[void 0]},c=[{value:"How do engines work",id:"how-do-engines-work",level:2},{value:"In-browser Javascript is able to",id:"in-browser-javascript-is-able-to",level:3},{value:"Restriction",id:"restriction",level:3},{value:"Fundamentals",id:"fundamentals",level:2},{value:"Variable",id:"variable",level:3},{value:"Type",id:"type",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Javascript can execute not only in the browser, but also on the server, or actually on any device where there exists a special program called the JavaScript Engine"),(0,n.kt)("h2",{id:"how-do-engines-work"},"How do engines work"),(0,n.kt)("p",null,"Engines are complicated. But the basics are easy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The engine reads teh script"),(0,n.kt)("li",{parentName:"ul"},"Then it converts the script to the machine language"),(0,n.kt)("li",{parentName:"ul"},"Then the machine code runs, pretty fast")),(0,n.kt)("h3",{id:"in-browser-javascript-is-able-to"},"In-browser Javascript is able to"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add new HTML to the page, change the existing content, modify styles\nReact to user actions, run on mouse clicks, pointer movements, key presses."),(0,n.kt)("li",{parentName:"ul"},"Send requests over the network to remote network, download and upload files (Ajax and COMET)\nGet and set cookie, ask quesitons to the visitor, show messages\nRemember the data on the client side(local storage)")),(0,n.kt)("h3",{id:"restriction"},"Restriction"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs, no access to OS system functions"),(0,n.kt)("li",{parentName:"ul"},"Different tabs/windows generally do not know each other. Same Origin Policy."),(0,n.kt)("li",{parentName:"ul"},"Javascript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled")),(0,n.kt)("h2",{id:"fundamentals"},"Fundamentals"),(0,n.kt)("h3",{id:"variable"},"Variable"),(0,n.kt)("p",null,"we can declare variables to store data. That can be done using var or let or const"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"let - is a modern variable declaration"),(0,n.kt)("li",{parentName:"ul"},"var - old-scholl variable declaration"),(0,n.kt)("li",{parentName:"ul"},"const - the value of variable can\u2019t be changed")),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("p",null,"There are 7 basic types in Javascript"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"number for numbers of any kind: integer or floating-point"),(0,n.kt)("li",{parentName:"ul"},"String for sttrings"),(0,n.kt)("li",{parentName:"ul"},"boolean"),(0,n.kt)("li",{parentName:"ul"},"null for unknown values - a standalone type"),(0,n.kt)("li",{parentName:"ul"},"object for more complex data structures"),(0,n.kt)("li",{parentName:"ul"},"symbol for unique identifiers")),(0,n.kt)("p",null,"The typeof operator allows us to see whihc type is tored in the variable"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Two forms : typeof x or typeof(x)"),(0,n.kt)("li",{parentName:"ul"},"Return a string with the name of the type")),(0,n.kt)("p",null,"Backticks are extended functionality quotes. They allow us to embed variables and expressions into a string by wrapping them in ${..}"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"let name = 'John';\n// embed a variable\nalert(`Hello ${name}!`);\n// embed an expression\nalert(`the result is ${1 + 2}`);\n")))}p.isMDXComponent=!0}}]);