"use strict";(globalThis.webpackChunkgo_faster_docs=globalThis.webpackChunkgo_faster_docs||[]).push([[455],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>N});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),o=m(a),N=l,g=o["".concat(p,".").concat(N)]||o[N]||u[N]||r;return a?n.createElement(g,i(i({ref:e},k),{},{components:a})):n.createElement(g,i({ref:e},k))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=o;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},2756:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>r,contentTitle:()=>i,metadata:()=>d,toc:()=>p,default:()=>k});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:3,id:"client",title:"Client packets"},i=void 0,d={unversionedId:"clickhouse/packets/client",id:"clickhouse/packets/client",title:"Client packets",description:"Client packets",source:"@site/docs/clickhouse/packets/client.mdx",sourceDirName:"clickhouse/packets",slug:"/clickhouse/packets/client",permalink:"/docs/clickhouse/packets/client",editUrl:"https://github.com/go-faster/web/edit/main/docs/clickhouse/packets/client.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"client",title:"Client packets"},sidebar:"tutorialSidebar",previous:{title:"Server packets",permalink:"/docs/clickhouse/packets/server"},next:{title:"Compression",permalink:"/docs/clickhouse/packets/compression"}},p=[{value:"Hello",id:"hello",children:[{value:"Protocol version",id:"protocol-version",children:[],level:3},{value:"Defaults",id:"defaults",children:[],level:3}],level:2},{value:"Query",id:"query",children:[{value:"Client info",id:"client-info",children:[],level:3},{value:"Settings",id:"settings",children:[],level:3},{value:"Stage",id:"stage",children:[],level:3}],level:2},{value:"Data",id:"data",children:[{value:"Column",id:"column",children:[],level:3}],level:2},{value:"Cancel",id:"cancel",children:[],level:2},{value:"Ping",id:"ping",children:[],level:2}],m={toc:p};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Client packets"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#hello"},"Hello")),(0,l.kt)("td",{parentName:"tr",align:null},"Client handshake start")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#query"},"Query")),(0,l.kt)("td",{parentName:"tr",align:null},"Query request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#data"},"Data")),(0,l.kt)("td",{parentName:"tr",align:null},"Block with data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#cancel"},"Cancel")),(0,l.kt)("td",{parentName:"tr",align:null},"Cancel query")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#ping"},"Ping")),(0,l.kt)("td",{parentName:"tr",align:null},"Ping request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"TableStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"Table status request")))),(0,l.kt)("h2",{id:"hello"},"Hello"),(0,l.kt)("p",null,"For example, we are ",(0,l.kt)("inlineCode",{parentName:"p"},"Go Client")," v1.10 that supports ",(0,l.kt)("inlineCode",{parentName:"p"},"54451")," protocol version and\nwant to connect to ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," database with ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," user and ",(0,l.kt)("inlineCode",{parentName:"p"},"secret")," password."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"Go Client"')),(0,l.kt)("td",{parentName:"tr",align:null},"Client implementation name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version_major"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Client major version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version_minor"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},"Client minor version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol_version"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"54451")),(0,l.kt)("td",{parentName:"tr",align:null},"TCP Protocol version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"default"')),(0,l.kt)("td",{parentName:"tr",align:null},"Database name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"default"')),(0,l.kt)("td",{parentName:"tr",align:null},"Username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"secret"')),(0,l.kt)("td",{parentName:"tr",align:null},"Password")))),(0,l.kt)("h3",{id:"protocol-version"},"Protocol version"),(0,l.kt)("p",null,"Protocol version is TCP protocol version of client."),(0,l.kt)("p",null,"Usually it is equal to the latest compatible server revision, but\nshould not be confused with it."),(0,l.kt)("h3",{id:"defaults"},"Defaults"),(0,l.kt)("p",null,"All values should be ",(0,l.kt)("strong",{parentName:"p"},"explicitly set"),", there are no defaults on server side.\nOn client side, use ",(0,l.kt)("inlineCode",{parentName:"p"},'"default"')," database, ",(0,l.kt)("inlineCode",{parentName:"p"},'"default"')," username and ",(0,l.kt)("inlineCode",{parentName:"p"},'""')," (blank string)\npassword as defaults."),(0,l.kt)("h2",{id:"query"},"Query"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1ff-a123")),(0,l.kt)("td",{parentName:"tr",align:null},"Query ID, can be UUIDv4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_info"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#client-info"},"ClientInfo")),(0,l.kt)("td",{parentName:"tr",align:null},"See type"),(0,l.kt)("td",{parentName:"tr",align:null},"Data about client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"settings"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#settings"},"Settings")),(0,l.kt)("td",{parentName:"tr",align:null},"See type"),(0,l.kt)("td",{parentName:"tr",align:null},"List of settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"secret")),(0,l.kt)("td",{parentName:"tr",align:null},"Inter-server secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#stage"},"stage")),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},"Execute until query stage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compression"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Disabled=0, enabled=1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SELECT 1")),(0,l.kt)("td",{parentName:"tr",align:null},"Query text")))),(0,l.kt)("h3",{id:"client-info"},"Client info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query_kind"),(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"None=0, Initial=1, Secondary=2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initial_user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initial_query_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial query id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initial_address"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initial_time"),(0,l.kt)("td",{parentName:"tr",align:null},"Int64"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interface"),(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP=1, HTTP=2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"os_user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"OS User")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Client Hostname")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Client Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version_major"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Client major version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version_minor"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Client minor version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol_version"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Client protocol version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quota_key"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Quota key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"distributed_depth"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Distributed depth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version_patch"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Client patch version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"otel"),(0,l.kt)("td",{parentName:"tr",align:null},"Bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Trace fields are present")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trace_id"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedString(16)"),(0,l.kt)("td",{parentName:"tr",align:null},"Trace ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"span_id"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedString(8)"),(0,l.kt)("td",{parentName:"tr",align:null},"Span ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trace_state"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Tracing state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trace_flags"),(0,l.kt)("td",{parentName:"tr",align:null},"Byte"),(0,l.kt)("td",{parentName:"tr",align:null},"Tracing flags")))),(0,l.kt)("h3",{id:"settings"},"Settings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"send_logs_level")),(0,l.kt)("td",{parentName:"tr",align:null},"Key of setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trace")),(0,l.kt)("td",{parentName:"tr",align:null},"Value of setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"important"),(0,l.kt)("td",{parentName:"tr",align:null},"Bool"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Can be ignored or not")))),(0,l.kt)("p",null,"Encoded as list, blank key and value denotes end of list."),(0,l.kt)("h3",{id:"stage"},"Stage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"FetchColumns"),(0,l.kt)("td",{parentName:"tr",align:null},"Only fetch column types")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"WithMergeableState"),(0,l.kt)("td",{parentName:"tr",align:null},"Until mergeable state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Complete"),(0,l.kt)("td",{parentName:"tr",align:null},"Until full completeness (should be default)")))),(0,l.kt)("h2",{id:"data"},"Data"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"info"),(0,l.kt)("td",{parentName:"tr",align:null},"BlockInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"Encoded block info")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Columns count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rows"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Rows count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#column"},"[]Column")),(0,l.kt)("td",{parentName:"tr",align:null},"Columns with data")))),(0,l.kt)("h3",{id:"column"},"Column"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"foo")),(0,l.kt)("td",{parentName:"tr",align:null},"Column name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DateTime64(9)")),(0,l.kt)("td",{parentName:"tr",align:null},"Column type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"~"),(0,l.kt)("td",{parentName:"tr",align:null},"Column data")))),(0,l.kt)("h2",{id:"cancel"},"Cancel"),(0,l.kt)("p",null,"No packet body. Server should cancel query."),(0,l.kt)("h2",{id:"ping"},"Ping"),(0,l.kt)("p",null,"No packet body. Server should respond with pong."))}k.isMDXComponent=!0}}]);