"use strict";(globalThis.webpackChunkgo_faster_docs=globalThis.webpackChunkgo_faster_docs||[]).push([[616],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(k,o(o({ref:e},c),{},{components:a})):n.createElement(k,o({ref:e},c))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6728:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var n=a(7462),r=a(7294),l=a(3905),o=a(4996);const i="diagram_8zck",s=t=>{let{src:e,alt:a="diagram",height:n,width:l}=t;return r.createElement("div",{className:i},r.createElement("img",{alt:a,src:e,height:n,width:l}))},p={sidebar_position:4,id:"compression",title:"Compression"},c=void 0,d={unversionedId:"clickhouse/packets/compression",id:"clickhouse/packets/compression",title:"Compression",description:"ClickHouse protocol supports data blocks compression with checksums.",source:"@site/docs/clickhouse/packets/compression.mdx",sourceDirName:"clickhouse/packets",slug:"/clickhouse/packets/compression",permalink:"/docs/clickhouse/packets/compression",editUrl:"https://github.com/go-faster/web/edit/main/docs/clickhouse/packets/compression.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"compression",title:"Compression"},sidebar:"tutorialSidebar",previous:{title:"Client packets",permalink:"/docs/clickhouse/packets/client"},next:{title:"Slack channel",permalink:"/docs/slack"}},m=[{value:"Modes",id:"modes",children:[],level:2},{value:"Block",id:"block",children:[],level:2}],u={toc:m};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ClickHouse protocol supports ",(0,l.kt)("strong",{parentName:"p"},"data blocks")," compression with checksums."),(0,l.kt)("h2",{id:"modes"},"Modes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x02")),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No compression, only checksums")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x82")),(0,l.kt)("td",{parentName:"tr",align:null},"LZ4"),(0,l.kt)("td",{parentName:"tr",align:null},"LZ4, extremely fast, good compression")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x90")),(0,l.kt)("td",{parentName:"tr",align:null},"ZSTD"),(0,l.kt)("td",{parentName:"tr",align:null},"Zstandard, pretty fast, best compression")))),(0,l.kt)("p",null,"Both LZ4 and ZSTD are made by same author, but with different tradeoffs.\nFrom ",(0,l.kt)("a",{parentName:"p",href:"https://facebook.github.io/zstd/#benchmarks"},"facebook benchmarks"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"ratio"),(0,l.kt)("th",{parentName:"tr",align:null},"encoding"),(0,l.kt)("th",{parentName:"tr",align:null},"decoding"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zstd 1.4.5 -1"),(0,l.kt)("td",{parentName:"tr",align:null},"2.8"),(0,l.kt)("td",{parentName:"tr",align:null},"500 MB/s"),(0,l.kt)("td",{parentName:"tr",align:null},"1660 MB/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lz4 1.9.2"),(0,l.kt)("td",{parentName:"tr",align:null},"2.1"),(0,l.kt)("td",{parentName:"tr",align:null},"740 MB/s"),(0,l.kt)("td",{parentName:"tr",align:null},"4530 MB/s")))),(0,l.kt)("h2",{id:"block"},"Block"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checksum"),(0,l.kt)("td",{parentName:"tr",align:null},"uint128"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"6ddf3eeebf17df2e559d40c605f3ae22")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/clickhouse/hash"},"Hash")," of (header + compressed data)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"raw_size"),(0,l.kt)("td",{parentName:"tr",align:null},"uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"251"),(0,l.kt)("td",{parentName:"tr",align:null},"Raw size without header")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data_size"),(0,l.kt)("td",{parentName:"tr",align:null},"uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"1254"),(0,l.kt)("td",{parentName:"tr",align:null},"Uncompressed data size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x82")),(0,l.kt)("td",{parentName:"tr",align:null},"Compression mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compressed data"),(0,l.kt)("td",{parentName:"tr",align:null},"binary"),(0,l.kt)("td",{parentName:"tr",align:null},"Byte slice"),(0,l.kt)("td",{parentName:"tr",align:null},"Block of compressed data")))),(0,l.kt)(s,{src:(0,o.Z)("/img/diagrams/ch_compression_block.drawio.svg"),mdxType:"Diagram"}),(0,l.kt)("p",null,"Header is (raw_size + data_size + mode), raw size consists of len(header + compressed data)."),(0,l.kt)("p",null,"Checksum is ",(0,l.kt)("inlineCode",{parentName:"p"},"hash(header + compressed data)"),", using ",(0,l.kt)("a",{parentName:"p",href:"/docs/clickhouse/hash"},"ClickHouse CityHash"),"."))}k.isMDXComponent=!0}}]);