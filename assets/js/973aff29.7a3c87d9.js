"use strict";(globalThis.webpackChunkgo_faster_docs=globalThis.webpackChunkgo_faster_docs||[]).push([[223],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9770:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>s,assets:()=>l,toc:()=>c,default:()=>h});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_position:2,id:"hash",title:"CityHash"},o=void 0,s={unversionedId:"clickhouse/hash",id:"clickhouse/hash",title:"CityHash",description:"Prefer xxhash as non-cryptographic hash algorithm.",source:"@site/docs/clickhouse/hash.mdx",sourceDirName:"clickhouse",slug:"/clickhouse/hash",permalink:"/docs/clickhouse/hash",editUrl:"https://github.com/go-faster/web/edit/main/docs/clickhouse/hash.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"hash",title:"CityHash"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/clickhouse"},next:{title:"Wire protocol",permalink:"/docs/clickhouse/wire"}},l={},c=[{value:"Examples",id:"examples",level:2},{value:"Benchmarks",id:"benchmarks",level:2}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Prefer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cespare/xxhash"},"xxhash")," as non-cryptographic hash algorithm."))),(0,r.kt)("p",null,"ClickHouse uses ",(0,r.kt)("strong",{parentName:"p"},"one of previous")," versions of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/cityhash"},"CityHash from Google"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"CityHash has changed the algorithm after we have added it into ClickHouse."),(0,r.kt)("p",{parentName:"div"},"CityHash documentation specifically notes that the user should not rely to specific hash values and should not save it anywhere or use it as sharding key."),(0,r.kt)("p",{parentName:"div"},"But as we exposed this function to the user, we had to fix the version of CityHash (to 1.0.2). And now we guarantee that the behaviour of CityHash functions available in SQL will not change."),(0,r.kt)("p",{parentName:"div"},"\u2014 Alexey Milovidov, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues/8354#issuecomment-568517969"},"comment")," on issue."))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Current version of Google's CityHash ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues/8354"},"differs")," from ClickHouse ",(0,r.kt)("inlineCode",{parentName:"p"},"cityHash64")," variant."),(0,r.kt)("p",{parentName:"div"},"Don't use ",(0,r.kt)("inlineCode",{parentName:"p"},"farmHash64")," to get Google's CityHash value! ",(0,r.kt)("a",{parentName:"p",href:"https://opensource.googleblog.com/2014/03/introducing-farmhash.html"},"FarmHash")," is a successor to CityHash, but they are not fully compatible."),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"String"),(0,r.kt)("th",{parentName:"tr",align:null},"ClickHouse64"),(0,r.kt)("th",{parentName:"tr",align:null},"CityHash64"),(0,r.kt)("th",{parentName:"tr",align:null},"FarmHash64"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Moscow")),(0,r.kt)("td",{parentName:"tr",align:null},"12507901496292878638"),(0,r.kt)("td",{parentName:"tr",align:null},"5992710078453357409"),(0,r.kt)("td",{parentName:"tr",align:null},"5992710078453357409")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"How can you write a big system without C++?  -Paul Glick")),(0,r.kt)("td",{parentName:"tr",align:null},"6237945311650045625"),(0,r.kt)("td",{parentName:"tr",align:null},"749291162957442504"),(0,r.kt)("td",{parentName:"tr",align:null},"11716470977470720228")))))),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-faster/city"},"go-faster/city")," Go package that implements both variants."),(0,r.kt)("p",null,"Also see ",(0,r.kt)("a",{parentName:"p",href:"https://opensource.googleblog.com/2011/04/introducing-cityhash.html"},"Introducing CityHash")," for description and\nreasoning behind creation. TL;DR ",(0,r.kt)("strong",{parentName:"p"},"non-cryptographic")," hash that is faster than ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/MurmurHash"},"MurmurHash"),", but more complex."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Let's take 64-bit hash from ",(0,r.kt)("inlineCode",{parentName:"p"},"Moscow")," string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT cityHash64('Moscow')\n12507901496292878638\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'s := []byte("Moscow")\nfmt.Print("ClickHouse: ")\nfmt.Println(city.CH64(s))\nfmt.Print("CityHash:   ")\nfmt.Println(city.Hash64(s))\n// Output:\n// ClickHouse: 12507901496292878638\n// CityHash:   5992710078453357409\n')),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-faster/city/blob/main/_testdata/data.json"},"test data corpus")," to check your implementation of ClickHouse CityHash variant if needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Seed": {\n    "Low": 5577006791947779410,\n    "High": 8674665223082153551\n  },\n  "entries": [\n    {\n      "Input": "Moscow",\n      "City32": 431367057,\n      "City64": 5992710078453357409,\n      "City128": {\n        "Low": 10019773792274861915,\n        "High": 12276543986707912152\n      },\n      "City128Seed": {\n        "Low": 13396466470330251720,\n        "High": 5508504338941663328\n      },\n      "ClickHouse64": 12507901496292878638,\n      "ClickHouse128": {\n        "Low": 3377444358654451565,\n        "High": 2499202049363713365\n      },\n      "ClickHouse128Seed": {\n        "Low": 568168482305327346,\n        "High": 1719721512326527886\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"benchmarks"},"Benchmarks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"goos: linux\ngoarch: amd64\npkg: github.com/go-faster/city\ncpu: AMD Ryzen 9 5950X 16-Core Processor\nBenchmarkClickHouse128/16     2213.98 MB/s\nBenchmarkClickHouse128/64     4712.24 MB/s\nBenchmarkClickHouse128/256    7561.58 MB/s\nBenchmarkClickHouse128/1024  10158.98 MB/s\nBenchmarkClickHouse64        10379.89 MB/s\nBenchmarkCityHash32           3140.54 MB/s\nBenchmarkCityHash64           9508.45 MB/s\nBenchmarkCityHash128          9304.27 MB/s\nBenchmarkCityHash64Small      2700.84 MB/s\nBenchmarkCityHash128Small     1175.65 MB/s\n")))}h.isMDXComponent=!0}}]);