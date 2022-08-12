"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(r),k=n,d=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return r?a.createElement(d,i(i({ref:t},m),{},{components:r})):a.createElement(d,i({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={id:"intro",sidebar_position:1,sidebar_label:"\u4ec0\u4e48\u662f HwameiStor"},i="\u4ec0\u4e48\u662f HwameiStor",o={unversionedId:"intro",id:"intro",title:"\u4ec0\u4e48\u662f HwameiStor",description:"HwameiStor \u662f\u4e00\u6b3e Kubernetes \u539f\u751f\u7684\u5bb9\u5668\u9644\u52a0\u5b58\u50a8 (CAS) \u89e3\u51b3\u65b9\u6848\uff0c\u5c06 HDD\u3001SSD \u548c NVMe \u78c1\u76d8\u5f62\u6210\u672c\u5730\u5b58\u50a8\u8d44\u6e90\u6c60\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u4f7f\u7528 CSI \u67b6\u6784\u63d0\u4f9b\u5206\u5e03\u5f0f\u7684\u672c\u5730\u6570\u636e\u5377\u670d\u52a1\uff0c\u4e3a\u6709\u72b6\u6001\u7684\u4e91\u539f\u751f\u5e94\u7528\u6216\u7ec4\u4ef6\u63d0\u4f9b\u6570\u636e\u6301\u4e45\u5316\u80fd\u529b\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/what.md",sourceDirName:".",slug:"/intro",permalink:"/cn/docs/intro",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/what.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",sidebar_position:1,sidebar_label:"\u4ec0\u4e48\u662f HwameiStor"},sidebar:"tutorialSidebar",next:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/cn/docs/quick_start/install/prereq"}},p={},c=[{value:"\u529f\u80fd\u7279\u6027",id:"\u529f\u80fd\u7279\u6027",level:2},{value:"\u7cfb\u7edf\u67b6\u6784",id:"\u7cfb\u7edf\u67b6\u6784",level:2},{value:"\u672f\u8bed",id:"\u672f\u8bed",level:2}],m={toc:c};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4ec0\u4e48\u662f-hwameistor"},"\u4ec0\u4e48\u662f HwameiStor"),(0,n.kt)("p",null,"HwameiStor \u662f\u4e00\u6b3e Kubernetes \u539f\u751f\u7684\u5bb9\u5668\u9644\u52a0\u5b58\u50a8 (CAS) \u89e3\u51b3\u65b9\u6848\uff0c\u5c06 HDD\u3001SSD \u548c NVMe \u78c1\u76d8\u5f62\u6210\u672c\u5730\u5b58\u50a8\u8d44\u6e90\u6c60\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u4f7f\u7528 CSI \u67b6\u6784\u63d0\u4f9b\u5206\u5e03\u5f0f\u7684\u672c\u5730\u6570\u636e\u5377\u670d\u52a1\uff0c\u4e3a\u6709\u72b6\u6001\u7684\u4e91\u539f\u751f\u5e94\u7528\u6216\u7ec4\u4ef6\u63d0\u4f9b\u6570\u636e\u6301\u4e45\u5316\u80fd\u529b\u3002"),(0,n.kt)("h2",{id:"\u529f\u80fd\u7279\u6027"},"\u529f\u80fd\u7279\u6027"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u81ea\u52a8\u5316\u8fd0\u7ef4\u7ba1\u7406"),(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u81ea\u52a8\u53d1\u73b0\u3001\u8bc6\u522b\u3001\u7ba1\u7406\u3001\u5206\u914d\u78c1\u76d8\u3002 \u6839\u636e\u4eb2\u548c\u6027\uff0c\u667a\u80fd\u8c03\u5ea6\u5e94\u7528\u548c\u6570\u636e\u3002\u81ea\u52a8\u76d1\u6d4b\u78c1\u76d8\u72b6\u6001\uff0c\u5e76\u53ca\u65f6\u9884\u8b66\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9ad8\u53ef\u7528\u7684\u6570\u636e"),(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8de8\u8282\u70b9\u526f\u672c\u540c\u6b65\u6570\u636e\uff0c \u5b9e\u73b0\u9ad8\u53ef\u7528\u3002\u53d1\u751f\u95ee\u9898\u65f6\uff0c\u4f1a\u81ea\u52a8\u5c06\u5e94\u7528\u8c03\u5ea6\u5230\u9ad8\u53ef\u7528\u6570\u636e\u8282\u70b9\u4e0a\uff0c\u4fdd\u8bc1\u5e94\u7528\u7684\u8fde\u7eed\u6027\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e30\u5bcc\u7684\u6570\u636e\u5377\u7c7b\u578b"),(0,n.kt)("p",{parentName:"li"},"\u805a\u5408 HDD\u3001SSD\u3001NVMe \u7c7b\u578b\u7684\u78c1\u76d8\uff0c\u63d0\u4f9b\u975e\u4f4e\u5ef6\u65f6\uff0c\u9ad8\u541e\u5410\u7684\u6570\u636e\u670d\u52a1\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7075\u6d3b\u52a8\u6001\u7684\u7ebf\u6027\u6269\u5c55"),(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u6839\u636e\u96c6\u7fa4\u89c4\u6a21\u5927\u5c0f\u8fdb\u884c\u52a8\u6001\u7684\u6269\u5bb9\uff0c\u7075\u6d3b\u6ee1\u8db3\u5e94\u7528\u7684\u6570\u636e\u6301\u4e45\u5316\u9700\u6c42\u3002"))),(0,n.kt)("h2",{id:"\u7cfb\u7edf\u67b6\u6784"},"\u7cfb\u7edf\u67b6\u6784"),(0,n.kt)("p",null,"HwameiStor \u7684\u7cfb\u7edf\u67b6\u6784\u56fe\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u7cfb\u7edf\u67b6\u6784\u56fe",src:r(8749).Z,width:"1214",height:"481"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u672c\u5730\u5b58\u50a8")),(0,n.kt)("p",{parentName:"li"},"\u5373 local-storage\uff0c\u8d1f\u8d23\u63d0\u4f9b LVM \u672c\u5730\u6570\u636e\u5377\uff0c\u5305\u62ec\u9ad8\u53ef\u7528 LVM \u6570\u636e\u5377\u3001\u975e\u9ad8\u53ef\u7528 LVM \u6570\u636e\u5377\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668")),(0,n.kt)("p",{parentName:"li"},"\u5b83\u5c06\u78c1\u76d8\u62bd\u8c61\u6210\u4e00\u79cd\u53ef\u4ee5\u88ab\u7ba1\u7406\u548c\u76d1\u63a7\u7684\u8d44\u6e90\u3002\u672c\u8eab\u662f\u4e00\u79cd DaemonSet \u5bf9\u8c61\uff0c\u96c6\u7fa4\u4e2d\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u4f1a\u8fd0\u884c\u8be5\u670d\u52a1\uff0c\u901a\u8fc7\u8be5\u670d\u52a1\u68c0\u6d4b\u5b58\u5728\u7684\u78c1\u76d8\u5e76\u5c06\u5176\u8f6c\u6362\u6210\u76f8\u5e94\u7684 LocalDisk \u8d44\u6e90\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8c03\u5ea6\u5668")),(0,n.kt)("p",{parentName:"li"},"\u81ea\u52a8\u5c06 Pod \u8c03\u5ea6\u5230\u914d\u6709 HwameiStor \u5b58\u50a8\u5377\u7684\u6b63\u786e\u8282\u70b9\u3002\u4f7f\u7528\u8c03\u5ea6\u5668\u540e\uff0cPod \u4e0d\u5fc5\u518d\u4f7f\u7528 NodeAffinity \u6216 NodeSelector \u5b57\u6bb5\u6765\u9009\u62e9\u8282\u70b9\u3002\u8c03\u5ea6\u5668\u80fd\u5904\u7406 LVM \u548c Disk \u5b58\u50a8\u5377\u3002"))),(0,n.kt)("h2",{id:"\u672f\u8bed"},"\u672f\u8bed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LocalDisk (LD)")),(0,n.kt)("p",{parentName:"li"},"\u672c\u5730\u78c1\u76d8\u8d44\u6e90\uff0c\u4e00\u4e2a LD \u4ee3\u8868\u4e86\u8282\u70b9\u4e0a\u7684\u4e00\u5757\u7269\u7406\u78c1\u76d8\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LocalDiskClaim")),(0,n.kt)("p",{parentName:"li"},"\u8fd9\u662f\u7cfb\u7edf\u4f7f\u7528\u78c1\u76d8\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7\u521b\u5efa Claim \u5bf9\u8c61\u6765\u5411\u7cfb\u7edf\u7533\u8bf7\u78c1\u76d8\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LocalVolume (LV)")),(0,n.kt)("p",{parentName:"li"},"\u5728\u7cfb\u7edf\u4e2d\u662f\u4e00\u4e2a\u903b\u8f91\u6982\u5ff5\uff0c\u63a7\u5236\u8282\u70b9\u63a5\u53d7\u5916\u90e8\u8bf7\u6c42\uff08\u4f8b\u5982 Kubernetes \u7684 PVC\uff09\uff0c\u6839\u636e\u5f53\u65f6\u7684\u96c6\u7fa4\u5168\u5c40\u4fe1\u606f\uff0c\u521b\u5efa LocalVolume \u4ee5\u53caLocalVolumeReplica\uff0c\u5e76\u5c06 LocalVolumeReplica \u5206\u914d\u7ed9\u76f8\u5e94\u7684\u8282\u70b9\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LocalVolumeReplica")),(0,n.kt)("p",{parentName:"li"},"LocalVolumeReplica \u8d44\u6e90\u662f\u63a7\u5236\u8282\u70b9\u5728\u521b\u5efa\u6216\u66f4\u65b0 Volume \u65f6\u521b\u5efa\u7684\u3002LocalVolumeReplica \u5206\u914d\u7ed9\u6307\u5b9a\u8282\u70b9\uff0c\u5e76\u7531\u8be5\u8282\u70b9\u6839\u636e\u5176\u5185\u5bb9\u521b\u5efa/\u7ba1\u7406\u672c\u5730\u5b58\u50a8\uff08\u4f8b\u5982 LocalVolume\uff09\uff0c\u5e76\u5b9e\u65f6\u8fdb\u884c\u7ef4\u62a4\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Logical Volume Manager (LVM)")),(0,n.kt)("p",{parentName:"li"},"\u5373\u903b\u8f91\u5377\u7ba1\u7406\uff0c\u5728\u78c1\u76d8\u5206\u533a\u548c\u6587\u4ef6\u7cfb\u7edf\u4e4b\u95f4\u6dfb\u52a0\u4e00\u4e2a\u903b\u8f91\u5c42\uff0c\u4e3a\u6587\u4ef6\u7cfb\u7edf\u5c4f\u853d\u4e0b\u5c42\u78c1\u76d8\u5206\u533a\u5e03\u5c40\u63d0\u4f9b\u4e00\u4e2a\u62bd\u8c61\u7684\u76d8\u5377\uff0c\u5e76\u5728\u76d8\u5377\u4e0a\u5efa\u7acb\u6587\u4ef6\u7cfb\u7edf\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LocalStorageNode")," "),(0,n.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u8282\u70b9\u90fd\u5e94\u521b\u5efa\u4e00\u4e2a\u81ea\u5df1\u7684\u8282\u70b9 CRD \u8d44\u6e90\uff0c\u5e76\u4e3b\u52a8\u7ef4\u62a4\u3001\u66f4\u65b0\u76f8\u5173\u4fe1\u606f\u3002"))))}u.isMDXComponent=!0},8749:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/architecture-8d6977bfc951ea37e57bcb9cc226ee9c.png"}}]);