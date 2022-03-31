"use strict";(globalThis.webpackChunkgo_faster_docs=globalThis.webpackChunkgo_faster_docs||[]).push([[918],{2179:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var n=a(7294),l=a(6010),s=a(7462),i=a(5999),r=a(1750);function o(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(r.Z,(0,s.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(r.Z,(0,s.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var c=a(2263),d=a(9960),m=a(5551),u=a(1548);const b={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=b[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,c.Z)(),{pluginId:i}=(0,m.gA)({failfast:!0}),{savePreferredVersionName:r}=(0,u.J)(i),{latestDocSuggestion:o,latestVersionSuggestion:d}=(0,m.Jo)(i),b=o??(E=d).docs.find((e=>e.id===E.mainDocId));var E;return n.createElement("div",{className:(0,l.Z)(t,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:d.label,to:b.path,onClick:()=>r(d.name)})))}function h(e){let{className:t}=e;const a=(0,u.E6)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}function g(e){let{className:t}=e;const a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function f(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function N(e){let{lastUpdatedBy:t}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(N,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(6753),k=a(8727);const Z="lastUpdated_foO9";function C(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(k.Z,e)))}function U(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(_.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",Z)},(a||s)&&n.createElement(L,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function T(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:i,formattedLastUpdatedAt:r,lastUpdatedBy:o,tags:c}=a,d=c.length>0,m=!!(s||i||o);return d||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(C,{tags:c}),m&&n.createElement(U,{editUrl:s,lastUpdatedAt:i,lastUpdatedBy:o,formattedLastUpdatedAt:r})):null}var y=a(1575);const M="tocCollapsible_jdIR",w="tocCollapsibleButton_Fzxq",A="tocCollapsibleContent_MpvI",x="tocCollapsibleExpanded_laf4";var H=a(5002);function B(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:c}=(0,u.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(M,!o&&x,a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",w),onClick:c},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:A,collapsed:o},n.createElement(H.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:r})))}var I=a(9649);const S="docItemContainer_vinB",V="docItemCol_DM6M",D="tocMobile_TmEX",O={breadcrumbsContainer:"breadcrumbsContainer_Xlws"};var P=a(4996);function F(e){let{children:t,href:a}=e;const l="breadcrumbs__link";return a?n.createElement(d.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l,itemProp:"item name"},t)}function R(e){let{children:t,active:a,index:s}=e;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(s+1)}))}function z(){const e=(0,P.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(d.Z,{className:(0,l.Z)("breadcrumbs__link",O.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function J(){const e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,O.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(z,null),e.map(((t,a)=>n.createElement(R,{key:a,active:a===e.length-1,index:a},n.createElement(F,{href:a<e.length-1?t.href:void 0},t.label)))))):null}var X=a(7459);function $(e){const{content:t}=e,{metadata:a,frontMatter:l,assets:s}=t,{keywords:i}=l,{description:r,title:o}=a,c=s.image??l.image;return n.createElement(u.d,{title:o,description:r,keywords:i,image:c})}function j(e){const{content:t}=e,{metadata:a,frontMatter:s}=t,{hide_title:i,hide_table_of_contents:r,toc_min_heading_level:c,toc_max_heading_level:d}=s,{title:m}=a,b=!i&&void 0===t.contentTitle,v=(0,u.iP)(),p=!r&&t.toc&&t.toc.length>0,E=p&&("desktop"===v||"ssr"===v);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!r&&V)},n.createElement(h,null),n.createElement("div",{className:S},n.createElement("article",null,n.createElement(J,null),n.createElement(g,null),p&&n.createElement(B,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:(0,l.Z)(u.kM.docs.docTocMobile,D)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},b&&n.createElement("header",null,n.createElement(I.Z,{as:"h1"},m)),n.createElement(X.Z,null,n.createElement(t,null))),n.createElement(T,e)),n.createElement(o,{previous:a.previous,next:a.next}))),E&&n.createElement("div",{className:"col col--3"},n.createElement(y.Z,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:u.kM.docs.docTocDesktop})))}function q(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`;return n.createElement(u.FG,{className:t},n.createElement($,e),n.createElement(j,e))}},1575:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7462),l=a(7294),s=a(6010),i=a(5002);const r="tableOfContents_cNA8";function o(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,s.Z)(r,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7462),l=a(7294),s=a(1548);function i(e){let{toc:t,className:a,linkClassName:n,isChild:s}=e;return t.length?l.createElement("ul",{className:s?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function r(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const u=(0,s.LU)(),b=c??u.tableOfContents.minHeadingLevel,v=d??u.tableOfContents.maxHeadingLevel,p=(0,s.b9)({toc:t,minHeadingLevel:b,maxHeadingLevel:v}),E=(0,l.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:b,maxHeadingLevel:v}}),[r,o,b,v]);return(0,s.Si)(E),l.createElement(i,(0,n.Z)({toc:p,className:a,linkClassName:r},m))}}}]);