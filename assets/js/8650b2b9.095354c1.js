"use strict";(globalThis.webpackChunkgo_faster_docs=globalThis.webpackChunkgo_faster_docs||[]).push([[217],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>s});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):f(f({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(a),s=r,m=l["".concat(i,".").concat(s)]||l[s]||d[s]||o;return a?n.createElement(m,f(f({ref:t},c),{},{components:a})):n.createElement(m,f({ref:t},c))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,f=new Array(o);f[0]=l;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,f[1]=p;for(var u=2;u<o;u++)f[u]=a[u];return n.createElement.apply(null,f)}return n.createElement.apply(null,a)}l.displayName="MDXCreateElement"},6126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>l,frontMatter:()=>f,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(4996);const f={slug:"visionfive-2-setup",title:"Booting StarFive VisionFive 2: images, firmware updates and NVME SSD",authors:["ernado"]},p=void 0,i={permalink:"/blog/visionfive-2-setup",source:"@site/blog/2023-03-31-starfive-2-setup.mdx",title:"Booting StarFive VisionFive 2: images, firmware updates and NVME SSD",description:"So, you need following guides by James A. Chambers",date:"2023-03-31T00:00:00.000Z",formattedDate:"March 31, 2023",tags:[],readingTime:3.5,hasTruncateMarker:!1,authors:[{name:"Aleksandr Razumov",title:"Maintainer",url:"https://github.com/ernado",imageURL:"https://github.com/ernado.png",key:"ernado"}],frontMatter:{slug:"visionfive-2-setup",title:"Booting StarFive VisionFive 2: images, firmware updates and NVME SSD",authors:["ernado"]}},u={authorsImageUrls:[void 0]},c=[{value:"Firmware update",id:"firmware-update",level:2},{value:"Download firmware",id:"download-firmware",level:3},{value:"Prepare SD card",id:"prepare-sd-card",level:3},{value:"Boot",id:"boot",level:3},{value:"Flash firmware",id:"flash-firmware",level:3},{value:"Install Debian",id:"install-debian",level:2},{value:"Download image",id:"download-image",level:3},{value:"Updating",id:"updating",level:3},{value:"SSD",id:"ssd",level:2},{value:"Backup",id:"backup",level:3},{value:"Copy partitions",id:"copy-partitions",level:3},{value:"Fix extlinux.conf",id:"fix-extlinuxconf",level:3},{value:"Bonus",id:"bonus",level:2}],d={toc:c};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So, you need following guides by ",(0,r.kt)("a",{parentName:"p",href:"https://jamesachambers.com/"},"James A. Chambers")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jamesachambers.com/starfive-visionfive-2-firmware-update-guide"},"StarFive VisionFive 2 Firmware / Bootloader Update Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jamesachambers.com/starfive-visionfive-2-debian-ssd-boot-guide"},"StarFive VisionFive 2 Official Debian SSD Boot Guide"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Booting from old image can result in errorneus RAM size display, don't be afraid seeing 4GB instead of 8GB.\nIf you follow this article, this should not happen, but anyway.")),(0,r.kt)("h2",{id:"firmware-update"},"Firmware update"),(0,r.kt)("p",null,"You can't install new images without updating your firmware."),(0,r.kt)("h3",{id:"download-firmware"},"Download firmware"),(0,r.kt)("p",null,"To do this, get ",(0,r.kt)("inlineCode",{parentName:"p"},"sdcard.img"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"visionfive2_fw_payload.img")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"u-boot-spl.bin.normal.out"),"  from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/starfive-tech/VisionFive2/releases/tag/VF2_v2.10.4"},"Vision2 v2.10.4 Release"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Latest version can prevent you from booting, try ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.10.4")," if you have any issues.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://github.com/starfive-tech/VisionFive2/releases/download/VF2_v2.10.4/{sdcard.img,visionfive2_fw_payload.img,u-boot-spl.bin.normal.out}\n")),(0,r.kt)("h3",{id:"prepare-sd-card"},"Prepare SD card"),(0,r.kt)("p",null,"Then, flash it with ",(0,r.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher"},"balenaEtcher")," to your SD card:"),(0,r.kt)("img",{alt:"",src:(0,o.Z)("./img/blog/2023-03/balena.png")}),(0,r.kt)("p",null,"Copy  ",(0,r.kt)("inlineCode",{parentName:"p"},"visionfive2_fw_payload.img")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"u-boot-spl.bin.normal.out")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/root")," of your SD card ",(0,r.kt)("inlineCode",{parentName:"p"},"rootfs"),", so you can access them later without\nsetting up ftp servers."),(0,r.kt)("h3",{id:"boot"},"Boot"),(0,r.kt)("p",null,"Insert the SD card into the VisionFive 2 and power it on. After minute or two, you should see flashing green light on the board.\nOn connected monitor you should see the load progress. There will be no GUI or console, so you need to connect to the board via SSH."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," as username and ",(0,r.kt)("inlineCode",{parentName:"p"},"starfive")," as password."),(0,r.kt)("h3",{id:"flash-firmware"},"Flash firmware"),(0,r.kt)("p",null,"As per ",(0,r.kt)("a",{parentName:"p",href:"https://jamesachambers.com/starfive-visionfive-2-firmware-update-guide"},"guide"),", you need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"mtd-utils")," and flash the firmware:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt update && apt install mtd-utils -y\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo flashcp -v u-boot-spl.bin.normal.out /dev/mtd0\nsudo flashcp -v visionfive2_fw_payload.img /dev/mtd1\n")),(0,r.kt)("h2",{id:"install-debian"},"Install Debian"),(0,r.kt)("h3",{id:"download-image"},"Download image"),(0,r.kt)("p",null,"Download image from ",(0,r.kt)("a",{parentName:"p",href:"https://debian.starfivetech.com/"},"download page"),". I've used ",(0,r.kt)("inlineCode",{parentName:"p"},"202302")," image from Google Drive.\nYou can use my ",(0,r.kt)("a",{parentName:"p",href:"magnet:?xt=urn:btih:6434983b93972ab386633252698e659908457cf4&xt=urn:btmh:12209f25cab69dca5c8aec4659126b8dc5b0bbc1743de0f124531d6934a8dfde5666&dn=starfive-jh7110-202302-SD-minimal-desktop.img&tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&tr=http%3a%2f%2f104.28.1.30%3a8080%2fannounce&tr=http%3a%2f%2f104.28.16.69%2fannounce&tr=udp%3a%2f%2f107.150.14.110%3a6969%2fannounce&tr=udp%3a%2f%2f109.121.134.121%3a1337%2fannounce&tr=udp%3a%2f%2f114.55.113.60%3a6969%2fannounce&tr=http%3a%2f%2f125.227.35.196%3a6969%2fannounce&tr=udp%3a%2f%2f128.199.70.66%3a5944%2fannounce&tr=http%3a%2f%2f157.7.202.64%3a8080%2fannounce&tr=http%3a%2f%2f158.69.146.212%3a7777%2fannounce&tr=http%3a%2f%2f173.254.204.71%3a1096%2fannounce&tr=http%3a%2f%2f178.175.143.27%2fannounce&tr=udp%3a%2f%2f178.33.73.26%3a2710%2fannounce&tr=udp%3a%2f%2f182.176.139.129%3a6969%2fannounce&tr=udp%3a%2f%2f185.5.97.139%3a8089%2fannounce&tr=udp%3a%2f%2f188.165.253.109%3a1337%2fannounce&tr=udp%3a%2f%2f194.106.216.222%3a80%2fannounce&tr=udp%3a%2f%2f195.123.209.37%3a1337%2fannounce&tr=http%3a%2f%2f210.244.71.25%3a6969%2fannounce&tr=http%3a%2f%2f210.244.71.26%3a6969%2fannounce&tr=http%3a%2f%2f213.159.215.198%3a6970%2fannounce&tr=udp%3a%2f%2f213.163.67.56%3a1337%2fannounce&tr=http%3a%2f%2f37.19.5.139%3a6969%2fannounce&tr=udp%3a%2f%2f37.19.5.155%3a2710%2fannounce&tr=udp%3a%2f%2f46.4.109.148%3a6969%2fannounce&tr=udp%3a%2f%2f5.79.249.77%3a6969%2fannounce&tr=udp%3a%2f%2f5.79.83.193%3a6969%2fannounce&tr=udp%3a%2f%2f51.254.244.161%3a6969%2fannounce&tr=http%3a%2f%2f59.36.96.77%3a6969%2fannounce&tr=udp%3a%2f%2f74.82.52.209%3a6969%2fannounce&tr=http%3a%2f%2f80.246.243.18%3a6969%2fannounce&tr=http%3a%2f%2f81.200.2.231%2fannounce&tr=udp%3a%2f%2f85.17.19.180%3a80%2fannounce&tr=http%3a%2f%2f87.248.186.252%3a8080%2fannounce&tr=http%3a%2f%2f87.253.152.137%2fannounce&tr=http%3a%2f%2f91.216.110.47%2fannounce&tr=http%3a%2f%2f91.217.91.21%3a3218%2fannounce&tr=udp%3a%2f%2f91.218.230.81%3a6969%2fannounce&tr=http%3a%2f%2f93.92.64.5%2fannounce&tr=http%3a%2f%2fatrack.pow7.com%2fannounce&tr=http%3a%2f%2fbt.henbt.com%3a2710%2fannounce&tr=http%3a%2f%2fbt.pusacg.org%3a8080%2fannounce&tr=http%3a%2f%2fbt2.careland.com.cn%3a6969%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fmgtracker.org%3a2710%2fannounce&tr=http%3a%2f%2fmgtracker.org%3a6969%2fannounce&tr=http%3a%2f%2fopen.acgtracker.com%3a1096%2fannounce&tr=http%3a%2f%2fopen.lolicon.eu%3a7777%2fannounce&tr=http%3a%2f%2fopen.touki.ru%2fannounce.php&tr=http%3a%2f%2fp4p.arenabg.ch%3a1337%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=http%3a%2f%2fpow7.com%3a80%2fannounce&tr=http%3a%2f%2fretracker.gorcomnet.ru%2fannounce&tr=http%3a%2f%2fretracker.krs-ix.ru%2fannounce&tr=http%3a%2f%2fretracker.krs-ix.ru%3a80%2fannounce&tr=http%3a%2f%2fsecure.pow7.com%2fannounce&tr=http%3a%2f%2ft1.pow7.com%2fannounce&tr=http%3a%2f%2ft2.pow7.com%2fannounce&tr=http%3a%2f%2fthetracker.org%3a80%2fannounce&tr=udp%3a%2f%2ftorrent.gresille.org%3a80%2fannounce&tr=http%3a%2f%2ftorrentsmd.com%3a8080%2fannounce&tr=udp%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce&tr=http%3a%2f%2ftracker.baravik.org%3a6970%2fannounce&tr=udp%3a%2f%2ftracker.bittor.pw%3a1337%2fannounce&tr=http%3a%2f%2ftracker.bittorrent.am%2fannounce&tr=http%3a%2f%2ftracker.calculate.ru%3a6969%2fannounce&tr=http%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=http%3a%2f%2ftracker.dutchtracking.com%2fannounce&tr=http%3a%2f%2ftracker.dutchtracking.com%3a80%2fannounce&tr=http%3a%2f%2ftracker.dutchtracking.nl%2fannounce&tr=http%3a%2f%2ftracker.dutchtracking.nl%3a80%2fannounce&tr=http%3a%2f%2ftracker.edoardocolombo.eu%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ex.ua%3a80%2fannounce&tr=http%3a%2f%2ftracker.ex.ua%3a80%2fannounce&tr=udp%3a%2f%2ftracker.filetracker.pl%3a8089%2fannounce&tr=udp%3a%2f%2ftracker.flashtorrents.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.grepler.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.kicks-ass.net%3a80%2fannounce&tr=http%3a%2f%2ftracker.kicks-ass.net%3a80%2fannounce&tr=udp%3a%2f%2ftracker.kuroy.me%3a5944%2fannounce&tr=udp%3a%2f%2ftracker.mg64.net%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.skyts.net%3a6969%2fannounce&tr=http%3a%2f%2ftracker.tfile.me%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.tvunderground.org.ru%3a3218%2fannounce&tr=udp%3a%2f%2ftracker.yoshi210.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker1.wasabii.com.tw%3a6969%2fannounce&tr=http%3a%2f%2ftracker2.itzmx.com%3a6961%2fannounce&tr=http%3a%2f%2ftracker2.wasabii.com.tw%3a6969%2fannounce&tr=http%3a%2f%2fwww.wareztorrent.com%2fannounce&tr=http%3a%2f%2fwww.wareztorrent.com%3a80%2fannounce&tr=https%3a%2f%2f104.28.17.69%2fannounce&tr=https%3a%2f%2fwww.wareztorrent.com%2fannounce&tr=http%3a%2f%2f107.150.14.110%3a6969%2fannounce&tr=http%3a%2f%2f109.121.134.121%3a1337%2fannounce&tr=http%3a%2f%2f114.55.113.60%3a6969%2fannounce&tr=http%3a%2f%2f128.199.70.66%3a5944%2fannounce&tr=udp%3a%2f%2f151.80.120.114%3a2710%2fannounce&tr=udp%3a%2f%2f168.235.67.63%3a6969%2fannounce&tr=http%3a%2f%2f178.33.73.26%3a2710%2fannounce&tr=http%3a%2f%2f182.176.139.129%3a6969%2fannounce&tr=http%3a%2f%2f185.5.97.139%3a8089%2fannounce&tr=udp%3a%2f%2f185.86.149.205%3a1337%2fannounce&tr=http%3a%2f%2f188.165.253.109%3a1337%2fannounce&tr=udp%3a%2f%2f191.101.229.236%3a1337%2fannounce&tr=http%3a%2f%2f194.106.216.222%2fannounce&tr=http%3a%2f%2f195.123.209.37%3a1337%2fannounce&tr=udp%3a%2f%2f195.123.209.40%3a80%2fannounce&tr=udp%3a%2f%2f208.67.16.113%3a8000%2fannounce&tr=http%3a%2f%2f213.163.67.56%3a1337%2fannounce&tr=http%3a%2f%2f37.19.5.155%3a6881%2fannounce&tr=http%3a%2f%2f46.4.109.148%3a6969%2fannounce&tr=http%3a%2f%2f5.79.249.77%3a6969%2fannounce&tr=http%3a%2f%2f5.79.83.193%3a2710%2fannounce&tr=http%3a%2f%2f51.254.244.161%3a6969%2fannounce&tr=udp%3a%2f%2f62.138.0.158%3a6969%2fannounce&tr=udp%3a%2f%2f62.212.85.66%3a2710%2fannounce&tr=http%3a%2f%2f74.82.52.209%3a6969%2fannounce&tr=http%3a%2f%2f85.17.19.180%2fannounce&tr=udp%3a%2f%2f89.234.156.205%3a80%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2710%2fannounce&tr=udp%3a%2f%2f9.rarbg.me%3a2780%2fannounce&tr=udp%3a%2f%2f9.rarbg.to%3a2730%2fannounce&tr=http%3a%2f%2f91.218.230.81%3a6969%2fannounce&tr=udp%3a%2f%2f94.23.183.33%3a6969%2fannounce&tr=udp%3a%2f%2fbt.xxx-tracker.com%3a2710%2fannounce&tr=udp%3a%2f%2feddie4.nl%3a6969%2fannounce&tr=http%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=http%3a%2f%2fmgtracker.org%3a2710%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=http%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fshadowshq.eddie4.nl%3a6969%2fannounce&tr=udp%3a%2f%2fshadowshq.yi.org%3a6969%2fannounce&tr=http%3a%2f%2ftorrent.gresille.org%2fannounce&tr=http%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce&tr=http%3a%2f%2ftracker.bittor.pw%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.eddie4.nl%3a6969%2fannounce&tr=http%3a%2f%2ftracker.ex.ua%2fannounce&tr=http%3a%2f%2ftracker.filetracker.pl%3a8089%2fannounce&tr=http%3a%2f%2ftracker.flashtorrents.org%3a6969%2fannounce&tr=http%3a%2f%2ftracker.grepler.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ilibr.org%3a80%2fannounce&tr=http%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&tr=http%3a%2f%2ftracker.kicks-ass.net%2fannounce&tr=http%3a%2f%2ftracker.kuroy.me%3a5944%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.mg64.net%3a6969%2fannounce&tr=http%3a%2f%2ftracker.mg64.net%3a6881%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.piratepublic.com%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.sktorrent.net%3a6969%2fannounce&tr=http%3a%2f%2ftracker.skyts.net%3a6969%2fannounce&tr=http%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.yoshi210.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker2.indowebster.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker4.piratux.com%3a6969%2fannounce&tr=udp%3a%2f%2fzer0day.ch%3a1337%2fannounce&tr=udp%3a%2f%2fzer0day.to%3a1337%2fannounce"},"magnet link"),", but make sure to check hashes."),(0,r.kt)("p",null,"Flash to SD card with ",(0,r.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher"},"balenaEtcher")," and boot."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," username, ",(0,r.kt)("inlineCode",{parentName:"p"},"starfive")," password. First login will fail, just try again.\nGUI can freeze, just press restart button.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There is no SSH server by default, you should use GUI.")),(0,r.kt)("p",null,"To install ssh server, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install -y openssh-server\n")),(0,r.kt)("h3",{id:"updating"},"Updating"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"GUI can be broken after update, so make sure that SSH server is working.")),(0,r.kt)("p",null,"System can be outdated (probably is fixed in ",(0,r.kt)("inlineCode",{parentName:"p"},"202303")," image), you should download new keyring and upgrade:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget http://ftp.de.debian.org/debian/pool/main/d/debian-ports-archive-keyring/debian-ports-archive-keyring_2023.02.01_all.deb\ndpkg -i debian-ports-archive-keyring_2023.02.01_all.deb\n")),(0,r.kt)("p",null,"Edit your sources.list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ nano /etc/apt/sources.list\ndeb https://snapshot.debian.org/archive/debian-ports/20230316T202809Z unstable main\n")),(0,r.kt)("p",null,"After that, you can update your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt-get update && apt-get upgrade\n")),(0,r.kt)("p",null,"This can take some time."),(0,r.kt)("h2",{id:"ssd"},"SSD"),(0,r.kt)("h3",{id:"backup"},"Backup"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Backup your data from SD card, this will save your time. You don't want to setup ssh server and wait for apt again, if something fails.")),(0,r.kt)("p",null,"Shutdown your devboard (",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl halt"),") remove SD card and create a backup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo dd if=/dev/sde of=backup.img\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://askubuntu.com/questions/1174487/re-size-the-img-for-smaller-sd-card-how-to-shrink-a-bootable-sd-card-image"},"that article"),"\nhow to shrink resulting image."),(0,r.kt)("h3",{id:"copy-partitions"},"Copy partitions"),(0,r.kt)("p",null,"Refer to original ",(0,r.kt)("a",{parentName:"p",href:"https://jamesachambers.com/starfive-visionfive-2-debian-ssd-boot-guide"},"guide"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Find a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," partition first. The ",(0,r.kt)("inlineCode",{parentName:"p"},"mmcblk1p3")," can be not a root.")),(0,r.kt)("p",null,"To find a partition, use ",(0,r.kt)("inlineCode",{parentName:"p"},"blkid"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blkid | grep root\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'/dev/mmcblk1p4: LABEL="root" UUID="44d3144d-069b-4e11-b6b4-68c296328a12" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="c3a2885b-b39c-b54d-b8fa-eac6faccbed8"\n')),(0,r.kt)("p",null,"So, in that case you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/mmcblk1p4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/nvme0n1p4")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/mmcblk1p3")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/nvme0n1p3")," in the guide!"),(0,r.kt)("h3",{id:"fix-extlinuxconf"},"Fix extlinux.conf"),(0,r.kt)("p",null,"You probably should update this file on both SSD and SD:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mount /dev/nvme0n1p3 /mnt/boot/\n")),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"mmcblk1p4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nvme0n1p4")," should be your ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," partitions (",(0,r.kt)("inlineCode",{parentName:"p"},"blkid | grep root"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sed -i 's/mmcblk1p4/nvme0n1p4/g' /boot/extlinux/extlinux.conf\nsed -i 's/mmcblk1p4/nvme0n1p4/g' /mnt/boot/extlinux/extlinux.conf\n")),(0,r.kt)("p",null,"Also don't forget to follow guide and generate new UUID for SD card ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," partition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tune2fs -O metadata_csum_seed -U random /dev/mmcblk1p4\n")),(0,r.kt)("p",null,"You probably want to resize your SSD partition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"e2fsck -f /dev/nvme0n4p\n")),(0,r.kt)("p",null,"To do this, use ",(0,r.kt)("inlineCode",{parentName:"p"},"fdisk"),". Delete your ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," partiton (",(0,r.kt)("inlineCode",{parentName:"p"},"d"),") and re-add it (",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fdisk /dev/nvme0n1\n")),(0,r.kt)("p",null,"After that, run ",(0,r.kt)("inlineCode",{parentName:"p"},"e2fsck -f /dev/nvme0n4p")," again and ",(0,r.kt)("inlineCode",{parentName:"p"},"resize2fs /dev/nvme0n1p4")," to resize partition."),(0,r.kt)("p",null,"To be sure, run ",(0,r.kt)("inlineCode",{parentName:"p"},"e2fsck")," again."),(0,r.kt)("h2",{id:"bonus"},"Bonus"),(0,r.kt)("p",null,"Networking works pretty well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"root@starfive:~# iperf -c 192.168.50.114\n------------------------------------------------------------\nClient connecting to 192.168.50.114, TCP port 5001\nTCP window size: 16.0 KByte (default)\n------------------------------------------------------------\n[  1] local 192.168.50.140 port 41680 connected with 192.168.50.114 port 5001 (icwnd/mss/irtt=14/1448/721)\n[ ID] Interval       Transfer     Bandwidth\n[  1] 0.0000-10.0249 sec  1.04 GBytes   894 Mbits/sec\n")))}l.isMDXComponent=!0}}]);