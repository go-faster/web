"use strict";(globalThis.webpackChunkgo_faster_docs=globalThis.webpackChunkgo_faster_docs||[]).push([[223],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||r;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9770:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>r,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:2,id:"hash",title:"CityHash"},i=void 0,s={unversionedId:"clickhouse/hash",id:"clickhouse/hash",title:"CityHash",description:"Prefer xxhash as non-cryptographic hash algorithm.",source:"@site/docs/clickhouse/hash.mdx",sourceDirName:"clickhouse",slug:"/clickhouse/hash",permalink:"/docs/clickhouse/hash",editUrl:"https://github.com/go-faster/web/edit/main/docs/clickhouse/hash.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"hash",title:"CityHash"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/clickhouse"},next:{title:"Wire protocol",permalink:"/docs/clickhouse/wire"}},l=[{value:"Examples",id:"examples",children:[],level:2},{value:"Benchmarks",id:"benchmarks",children:[],level:2}],p={toc:l};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Prefer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cespare/xxhash"},"xxhash")," as non-cryptographic hash algorithm."))),(0,o.kt)("p",null,"ClickHouse uses ",(0,o.kt)("strong",{parentName:"p"},"one of previous")," versions of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/cityhash"},"CityHash from Google"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"CityHash has changed the algorithm after we have added it into ClickHouse."),(0,o.kt)("p",{parentName:"div"},"CityHash documentation specifically notes that the user should not rely to specific hash values and should not save it anywhere or use it as sharding key."),(0,o.kt)("p",{parentName:"div"},"But as we exposed this function to the user, we had to fix the version of CityHash (to 1.0.2). And now we guarantee that the behaviour of CityHash functions available in SQL will not change."),(0,o.kt)("p",{parentName:"div"},"\u2014 Alexey Milovidov, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues/8354#issuecomment-568517969"},"comment")," on issue."))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Current version of Google's CityHash ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues/8354"},"differs")," from ClickHouse ",(0,o.kt)("inlineCode",{parentName:"p"},"cityHash64")," variant."),(0,o.kt)("p",{parentName:"div"},"Don't use ",(0,o.kt)("inlineCode",{parentName:"p"},"farmHash64")," to get Google's CityHash value! ",(0,o.kt)("a",{parentName:"p",href:"https://opensource.googleblog.com/2014/03/introducing-farmhash.html"},"FarmHash")," is a successor to CityHash, but they are not fully compatible."),(0,o.kt)("table",{parentName:"div"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"String"),(0,o.kt)("th",{parentName:"tr",align:null},"ClickHouse64"),(0,o.kt)("th",{parentName:"tr",align:null},"CityHash64"),(0,o.kt)("th",{parentName:"tr",align:null},"FarmHash64"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Moscow")),(0,o.kt)("td",{parentName:"tr",align:null},"12507901496292878638"),(0,o.kt)("td",{parentName:"tr",align:null},"5992710078453357409"),(0,o.kt)("td",{parentName:"tr",align:null},"5992710078453357409")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"How can you write a big system without C++?  -Paul Glick")),(0,o.kt)("td",{parentName:"tr",align:null},"6237945311650045625"),(0,o.kt)("td",{parentName:"tr",align:null},"749291162957442504"),(0,o.kt)("td",{parentName:"tr",align:null},"11716470977470720228")))))),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-faster/city"},"go-faster/city")," Go package that implements both variants."),(0,o.kt)("p",null,"Also see ",(0,o.kt)("a",{parentName:"p",href:"https://opensource.googleblog.com/2011/04/introducing-cityhash.html"},"Introducing CityHash")," for description and\nreasoning behind creation. TL;DR ",(0,o.kt)("strong",{parentName:"p"},"non-cryptographic")," hash that is faster than ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/MurmurHash"},"MurmurHash"),", but more complex."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Let's take 64-bit hash from ",(0,o.kt)("inlineCode",{parentName:"p"},"Moscow")," string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT cityHash64('Moscow')\n12507901496292878638\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'s := []byte("Moscow")\nfmt.Print("ClickHouse: ")\nfmt.Println(city.CH64(s))\nfmt.Print("CityHash:   ")\nfmt.Println(city.Hash64(s))\n// Output:\n// ClickHouse: 12507901496292878638\n// CityHash:   5992710078453357409\n')),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-faster/city/blob/main/_testdata/data.json"},"test data corpus")," to check your implementation of ClickHouse CityHash variant if needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Seed": {\n    "Low": 5577006791947779410,\n    "High": 8674665223082153551\n  },\n  "entries": [\n    {\n      "Input": "Moscow",\n      "City32": 431367057,\n      "City64": 5992710078453357409,\n      "City128": {\n        "Low": 10019773792274861915,\n        "High": 12276543986707912152\n      },\n      "City128Seed": {\n        "Low": 13396466470330251720,\n        "High": 5508504338941663328\n      },\n      "ClickHouse64": 12507901496292878638,\n      "ClickHouse128": {\n        "Low": 3377444358654451565,\n        "High": 2499202049363713365\n      },\n      "ClickHouse128Seed": {\n        "Low": 568168482305327346,\n        "High": 1719721512326527886\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"benchmarks"},"Benchmarks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"goos: linux\ngoarch: amd64\npkg: github.com/go-faster/city\ncpu: AMD Ryzen 9 5950X 16-Core Processor\nBenchmarkClickHouse128-32     137.7 ns/op  7437.19 MB/s  0 B/op  0 allocs/op\nBenchmarkClickHouse64-32      131.5 ns/op  7786.84 MB/s  0 B/op  0 allocs/op\nBenchmarkCityHash32-32        333.9 ns/op  3066.73 MB/s  0 B/op  0 allocs/op\nBenchmarkCityHash64-32        141.9 ns/op  7216.10 MB/s  0 B/op  0 allocs/op\nBenchmarkCityHash128-32       148.5 ns/op  6897.44 MB/s  0 B/op  0 allocs/op\nBenchmarkCityHash64Small-32   3.659 ns/op  2732.82 MB/s  0 B/op  0 allocs/op\nBenchmarkCityHash128Small-32  9.103 ns/op  1098.57 MB/s  0 B/op  0 allocs/op\nPASS\nok      github.com/go-faster/city       12.018s\n")))}c.isMDXComponent=!0}}]);