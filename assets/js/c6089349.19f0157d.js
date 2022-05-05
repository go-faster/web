"use strict";(globalThis.webpackChunkgo_faster_docs=globalThis.webpackChunkgo_faster_docs||[]).push([[493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={id:"introduction",title:"Introduction",sidebar_position:1,slug:"/style-guide"},a=void 0,l={unversionedId:"style-guide/introduction",id:"style-guide/introduction",title:"Introduction",description:"Based on Uber Go Style Guide.",source:"@site/docs/style-guide/introduction.mdx",sourceDirName:"style-guide",slug:"/style-guide",permalink:"/docs/style-guide",editUrl:"https://github.com/go-faster/web/edit/main/docs/style-guide/introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_position:1,slug:"/style-guide"},sidebar:"tutorialSidebar",previous:{title:"Status",permalink:"/docs/projects/status"},next:{title:"Guidelines",permalink:"/docs/style-guide/guidelines"}},s={},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/uber-go/guide/blob/master/style.md"},"Uber Go Style Guide"),"."),(0,r.kt)("p",null,"Styles are the conventions that govern our code. The term style is a bit of a\nmisnomer, since these conventions cover far more than just source file\nformatting \u2014 gofmt handles that for us."),(0,r.kt)("p",null,"The goal of this guide is to manage this complexity by describing in detail the\nDos and Don'ts of writing Go code at Uber. These rules exist to keep the code\nbase manageable while still allowing engineers to use Go language features\nproductively."),(0,r.kt)("p",null,"This guide was originally created by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prashantv"},"Prashant Varanasi")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nomis52"},"Simon Newton")," as\na way to bring some colleagues up to speed with using Go. Over the years it has\nbeen amended based on feedback from others."),(0,r.kt)("p",null,"This documents idiomatic conventions in Go code that we follow at Uber. A lot\nof these are general guidelines for Go, while others extend upon external\nresources:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/doc/effective_go.html"},"Effective Go")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/CommonMistakes"},"Go Common Mistakes")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/CodeReviewComments"},"Go Code Review Comments"))),(0,r.kt)("p",null,"All code should be error-free when run through ",(0,r.kt)("inlineCode",{parentName:"p"},"golint")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"go vet"),". We\nrecommend setting up your editor to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"goimports")," on save"),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"golint")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"go vet")," to check for errors")),(0,r.kt)("p",null,"You can find information in editor support for Go tools here:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/IDEsAndTextEditorPlugins"},"https://github.com/golang/go/wiki/IDEsAndTextEditorPlugins")))}d.isMDXComponent=!0}}]);