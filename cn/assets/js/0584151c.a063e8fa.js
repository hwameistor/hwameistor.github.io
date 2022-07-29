"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[820],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1,sidebar_label:"\u51c6\u5907\u5de5\u4f5c"},o="\u51c6\u5907\u5de5\u4f5c",l={unversionedId:"installation/prepare",id:"installation/prepare",title:"\u51c6\u5907\u5de5\u4f5c",description:"HwameiStor \u672c\u5730\u78c1\u76d8\u662f\u4e91\u539f\u751f\u672c\u5730\u5b58\u50a8\u7cfb\u7edf\uff0c\u5e94\u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u6216\u4ee5 Kubernetes \u4e3a\u5185\u6838\u7684\u5bb9\u5668\u5e73\u53f0\u4e2d\uff0c\u6574\u4e2a\u96c6\u7fa4\u5e94\u6ee1\u8db3\u4e0b\u5217\u6761\u4ef6\uff1a",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/02.installation/00.prepare.md",sourceDirName:"02.installation",slug:"/installation/prepare",permalink:"/cn/docs/installation/prepare",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/02.installation/00.prepare.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u51c6\u5907\u5de5\u4f5c"},sidebar:"tutorialSidebar",previous:{title:"DRBD \u5b89\u88c5\u5668",permalink:"/cn/docs/features/DRBD"},next:{title:"\u901a\u8fc7 Helm Chart \u90e8\u7f72",permalink:"/cn/docs/installation/helm-chart"}},c={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"HwameiStor \u672c\u5730\u78c1\u76d8\u662f\u4e91\u539f\u751f\u672c\u5730\u5b58\u50a8\u7cfb\u7edf\uff0c\u5e94\u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u6216\u4ee5 Kubernetes \u4e3a\u5185\u6838\u7684\u5bb9\u5668\u5e73\u53f0\u4e2d\uff0c\u6574\u4e2a\u96c6\u7fa4\u5e94\u6ee1\u8db3\u4e0b\u5217\u6761\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LocalDisk Version: ",(0,a.kt)("inlineCode",{parentName:"li"},"4.0+")),(0,a.kt)("li",{parentName:"ul"},"Kubernetes Version: ",(0,a.kt)("inlineCode",{parentName:"li"},"1.18+")),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f2\u78c1\u76d8"),(0,a.kt)("li",{parentName:"ul"},"LVM \u903b\u8f91\u5b58\u50a8\u5377\uff08\u53ef\u9009\uff09")))))}u.isMDXComponent=!0}}]);