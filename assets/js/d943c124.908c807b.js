"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},a="Contributing",s={unversionedId:"contribute/CONTRIBUTING",id:"contribute/CONTRIBUTING",title:"Contributing",description:"Welcome to HwameiStor!",source:"@site/docs/contribute/CONTRIBUTING.md",sourceDirName:"contribute",slug:"/contribute/CONTRIBUTING",permalink:"/docs/contribute/CONTRIBUTING",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/contribute/CONTRIBUTING.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contribution",permalink:"/docs/category/contribution"},next:{title:"HwameiStor Membership Roles",permalink:"/docs/contribute/membership"}},l={},u=[{value:"Community guidelines",id:"community-guidelines",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Getting involved",id:"getting-involved",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"Welcome to HwameiStor!"),(0,o.kt)("h2",{id:"community-guidelines"},"Community guidelines"),(0,o.kt)("p",null,"HwameiStor is a sandbox project listed in the ",(0,o.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/?selected=hwamei-stor"},"CNCF landscape"),".\nWe follow ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cncf/foundation/blob/main/code-of-conduct.md"},"CNCF Community Code of Conduct"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"The source code of HwameiStor is written in ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"golang"),"\nand managed with ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"git"),"."),(0,o.kt)("p",null,"To easily install HwameiStor, you may need to have ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"helm")," installed."),(0,o.kt)("h2",{id:"getting-involved"},"Getting involved"),(0,o.kt)("p",null,"Please check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hwameistor/hwameistor/issues"},"issues"),"\nto see if there are any existing tasks you may be interested in."),(0,o.kt)("p",null,"In particular, if you're just getting started, you may want to look for issues labeled with\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hwameistor/hwameistor/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"},"help wanted"),"\nor ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hwameistor/hwameistor/issues?q=is%3Aissue+is%3Aopen+label%3Akind%2Fbug"},"kind/bug"),",\nwhich are standard labels in the cloud-native communities."),(0,o.kt)("p",null,"If you're interested in working on any of these, please leave a comment to let us know!"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note:"),(0,o.kt)("p",{parentName:"blockquote"},"Please open an issue or discussion before starting work on a new feature or large change.")),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("p",null,"If you're planning to contribute code changes, the reviewers may need you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"follow ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/CodeReviewComments"},"good coding guidelines"),"."),(0,o.kt)("li",{parentName:"ul"},"write ",(0,o.kt)("a",{parentName:"li",href:"https://chris.beams.io/posts/git-commit/"},"good commit messages"),"."),(0,o.kt)("li",{parentName:"ul"},"break large changes into a logical series of smaller patches which individually make easily understandable changes, and in aggregate solve a broader issue.")),(0,o.kt)("p",null,"If you're looking to contribute documentation improvements, you'll want to read the\n",(0,o.kt)("a",{parentName:"p",href:"https://hwameistor.io/docs/intro"},"documentation"),"."))}m.isMDXComponent=!0}}]);