"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5574],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:9,sidebar_label:"LDA Controller"},l="LDA Controller",i={unversionedId:"modules/lda_controller",id:"modules/lda_controller",title:"LDA Controller",description:"The LDA controller provides a separate CRD - LocalDiskAction, which is used to match",source:"@site/docs/modules/lda_controller.md",sourceDirName:"modules",slug:"/modules/lda_controller",permalink:"/docs/modules/lda_controller",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/modules/lda_controller.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"LDA Controller"},sidebar:"tutorialSidebar",previous:{title:"GUI",permalink:"/docs/modules/gui"},next:{title:"Installation",permalink:"/docs/category/installation"}},c={},s=[],d={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lda-controller"},"LDA Controller"),(0,o.kt)("p",null,"The LDA controller provides a separate CRD - ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalDiskAction"),", which is used to match\nthe localdisk and execute the specified action. Its yaml definition is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: hwameistor.io/v1alpha1\nkind: LocalDiskAction\nmetadata:\n  name: forbidden-1\nspec:\n  action: reserve\n  rule:\n    minCapacity: 1024\n    devicePath: /dev/rbd*\n\n---\napiVersion: hwameistor.io/v1alpha1\nkind: LocalDiskAction\nmetadata:\n  name: forbidden-2\nspec:\n  action: reserve\n  rule:\n    maxCapacity: 1048576\n    devicePath: /dev/sd*\n")),(0,o.kt)("p",null,"The above yaml indicates:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Localdisks smaller than 1024 bytes and whose devicePath meets the ",(0,o.kt)("inlineCode",{parentName:"li"},"/dev/rbd*")," matching condition will be reserved"),(0,o.kt)("li",{parentName:"ol"},"Localdisks larger than 1048576 bytes and whose devicePath meets the ",(0,o.kt)("inlineCode",{parentName:"li"},"/dev/sd*")," matching condition will be reserved")),(0,o.kt)("p",null,"Note that the currently supported actions are only ",(0,o.kt)("strong",{parentName:"p"},"reserve"),"."))}p.isMDXComponent=!0}}]);