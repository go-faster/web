"use strict";(globalThis.webpackChunkgo_faster_docs=globalThis.webpackChunkgo_faster_docs||[]).push([[455],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2756:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>o,toc:()=>p,default:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3,id:"client",title:"Client packets"},i=void 0,o={unversionedId:"clickhouse/packets/client",id:"clickhouse/packets/client",title:"Client packets",description:"Client packets",source:"@site/docs/clickhouse/packets/client.mdx",sourceDirName:"clickhouse/packets",slug:"/clickhouse/packets/client",permalink:"/docs/clickhouse/packets/client",editUrl:"https://github.com/go-faster/web/edit/main/docs/clickhouse/packets/client.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"client",title:"Client packets"},sidebar:"tutorialSidebar",previous:{title:"Server packets",permalink:"/docs/clickhouse/packets/server"},next:{title:"Compression",permalink:"/docs/clickhouse/packets/compression"}},p=[{value:"Hello",id:"hello",children:[{value:"Protocol version",id:"protocol-version",children:[],level:3},{value:"Defaults",id:"defaults",children:[],level:3}],level:2}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Client packets"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"value"),(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"##Hello"},"Hello")),(0,r.kt)("td",{parentName:"tr",align:null},"Client handshake start")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Query"),(0,r.kt)("td",{parentName:"tr",align:null},"Query request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Data"),(0,r.kt)("td",{parentName:"tr",align:null},"Block with data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Cancel"),(0,r.kt)("td",{parentName:"tr",align:null},"Cancel query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Ping"),(0,r.kt)("td",{parentName:"tr",align:null},"Ping request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"TableStatus"),(0,r.kt)("td",{parentName:"tr",align:null},"Table status request")))),(0,r.kt)("h2",{id:"hello"},"Hello"),(0,r.kt)("p",null,"For example, we are ",(0,r.kt)("inlineCode",{parentName:"p"},"Go Client")," v1.10 that supports ",(0,r.kt)("inlineCode",{parentName:"p"},"54451")," protocol version and\nwant to connect to ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," database with ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," user and ",(0,r.kt)("inlineCode",{parentName:"p"},"secret")," password."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"field"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Go Client"')),(0,r.kt)("td",{parentName:"tr",align:null},"Client implementation name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version_major"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"Client major version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version_minor"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},"Client minor version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protocol_version"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"54451")),(0,r.kt)("td",{parentName:"tr",align:null},"TCP Protocol version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"default"')),(0,r.kt)("td",{parentName:"tr",align:null},"Database name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"default"')),(0,r.kt)("td",{parentName:"tr",align:null},"Username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"secret"')),(0,r.kt)("td",{parentName:"tr",align:null},"Password")))),(0,r.kt)("h3",{id:"protocol-version"},"Protocol version"),(0,r.kt)("p",null,"Protocol version is TCP protocol version of client."),(0,r.kt)("p",null,"Usually it is equal to the latest compatible server revision, but\nshould not be confused with it."),(0,r.kt)("h3",{id:"defaults"},"Defaults"),(0,r.kt)("p",null,"All values should be ",(0,r.kt)("strong",{parentName:"p"},"explicitly set"),", there are no defaults on server side.\nOn client side, use ",(0,r.kt)("inlineCode",{parentName:"p"},'"default"')," database, ",(0,r.kt)("inlineCode",{parentName:"p"},'"default"')," username and ",(0,r.kt)("inlineCode",{parentName:"p"},'""')," (blank string)\npassword as defaults."))}u.isMDXComponent=!0}}]);