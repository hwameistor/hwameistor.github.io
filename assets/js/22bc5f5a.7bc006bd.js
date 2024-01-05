"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,v=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2,sidebar_label:"Expand Volumes"},l="Expand Volumes",s={unversionedId:"volumes/expand",id:"volumes/expand",title:"Expand Volumes",description:"HwameiStor supports CSI Volume Expansion, by which altering the size of PVC",source:"@site/docs/volumes/expand.md",sourceDirName:"volumes",slug:"/volumes/expand",permalink:"/docs/volumes/expand",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/volumes/expand.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Expand Volumes"},sidebar:"tutorialSidebar",previous:{title:"Volume Snapshot",permalink:"/docs/volumes/volume_snapshot"},next:{title:"PVC Autoresizing",permalink:"/docs/volumes/pvc_autoresizing"}},i={},c=[{value:"Verify <code>StorageClass</code>",id:"verify-storageclass",level:2},{value:"Edit <code>PVC</code> size",id:"edit-pvc-size",level:2},{value:"Observe the process",id:"observe-the-process",level:2},{value:"Verify the size of <code>PVC/PV</code> after expansion",id:"verify-the-size-of-pvcpv-after-expansion",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"expand-volumes"},"Expand Volumes"),(0,o.kt)("p",null,"HwameiStor supports ",(0,o.kt)("inlineCode",{parentName:"p"},"CSI Volume Expansion"),", by which altering the size of ",(0,o.kt)("inlineCode",{parentName:"p"},"PVC"),"\ncan dynamically expand the volume online."),(0,o.kt)("p",null,"The below example will expand PVC ",(0,o.kt)("inlineCode",{parentName:"p"},"data-sts-mysql-local-0")," from 1GiB to 2GiB."),(0,o.kt)("p",null,"Check the current size of the ",(0,o.kt)("inlineCode",{parentName:"p"},"PVC/PV"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get pvc data-sts-mysql-local-0\nNAME                     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS                 AGE\ndata-sts-mysql-local-0   Bound    pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8   1Gi        RWO            hwameistor-storage-lvm-hdd   85m\n\n$ kubectl get pv pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8\nNAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                            STORAGECLASS                 REASON   AGE\npvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8   1Gi        RWO            Delete           Bound    default/data-sts-mysql-local-0   hwameistor-storage-lvm-hdd            85m\n")),(0,o.kt)("h2",{id:"verify-storageclass"},"Verify ",(0,o.kt)("inlineCode",{parentName:"h2"},"StorageClass")),(0,o.kt)("p",null,"Verify if the ",(0,o.kt)("inlineCode",{parentName:"p"},"StorageClass")," has the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"allowVolumeExpansion: true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get pvc data-sts-mysql-local-0 -o jsonpath='{.spec.storageClassName}'\nhwameistor-storage-lvm-hdd\n\n$ kubectl get sc hwameistor-storage-lvm-hdd -o jsonpath='{.allowVolumeExpansion}'\ntrue\n")),(0,o.kt)("h2",{id:"edit-pvc-size"},"Edit ",(0,o.kt)("inlineCode",{parentName:"h2"},"PVC")," size"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl edit pvc data-sts-mysql-local-0\n\n...\nspec:\n  resources:\n    requests:\n      storage: 2Gi\n...\n")),(0,o.kt)("h2",{id:"observe-the-process"},"Observe the process"),(0,o.kt)("p",null,"The larger the volume, the longer it takes to expand the volume. You may observe the process from ",(0,o.kt)("inlineCode",{parentName:"p"},"PVC")," events."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl describe pvc data-sts-mysql-local-0\n\nEvents:\n  Type     Reason                      Age                From                                Message\n  ----     ------                      ----               ----                                -------\n  Warning  ExternalExpanding           34s                volume_expand                       Ignoring the PVC: didn\'t find a plugin capable of expanding the volume; waiting for an external controller to process this PVC.\n  Warning  VolumeResizeFailed          33s                external-resizer lvm.hwameistor.io  resize volume "pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8" by resizer "lvm.hwameistor.io" failed: rpc error: code = Unknown desc = volume expansion not completed yet\n  Normal   Resizing                    32s (x2 over 33s)  external-resizer lvm.hwameistor.io  External resizer is resizing volume pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8\n  Normal   FileSystemResizeRequired    32s                external-resizer lvm.hwameistor.io  Require file system resize of volume on node\n  Normal   FileSystemResizeSuccessful  11s                kubelet                             MountVolume.NodeExpandVolume succeeded for volume "pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8" k8s-worker-3\n')),(0,o.kt)("h2",{id:"verify-the-size-of-pvcpv-after-expansion"},"Verify the size of ",(0,o.kt)("inlineCode",{parentName:"h2"},"PVC/PV")," after expansion"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get pvc data-sts-mysql-local-0\nNAME                     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS                 AGE\ndata-sts-mysql-local-0   Bound    pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8   2Gi        RWO            hwameistor-storage-lvm-hdd   96m\n\n$ kubectl get pv pvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8\nNAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                            STORAGECLASS                 REASON   AGE\npvc-b9fc8651-97b8-414c-8bcf-c8d2708c4ee8   2Gi        RWO            Delete           Bound    default/data-sts-mysql-local-0   hwameistor-storage-lvm-hdd            96m\n")))}d.isMDXComponent=!0}}]);