"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4405],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(v,s(s({ref:t},i),{},{components:a})):n.createElement(v,s({ref:t},i))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},744:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:5,sidebar_label:"\u6570\u636e\u5377\u5feb\u7167"},s="\u6570\u636e\u5377\u5feb\u7167",l={unversionedId:"quick_start/advanced_features/volume_snapshot",id:"quick_start/advanced_features/volume_snapshot",title:"\u6570\u636e\u5377\u5feb\u7167",description:"\u5728 HwameiStor \u4e2d\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u521b\u5efa\u6570\u636e\u5377\u7684\u5feb\u7167\uff0c\u4e14\u53ef\u4ee5\u57fa\u4e8e\u6570\u636e\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u3001\u56de\u6eda\u64cd\u4f5c\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/quick_start/advanced_features/volume_snapshot.md",sourceDirName:"quick_start/advanced_features",slug:"/quick_start/advanced_features/volume_snapshot",permalink:"/cn/docs/quick_start/advanced_features/volume_snapshot",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/advanced_features/volume_snapshot.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\u6570\u636e\u5377\u5feb\u7167"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5377IO\u9650\u901f",permalink:"/cn/docs/quick_start/advanced_features/volume_provisioned_io"},next:{title:"\u5e94\u7528\u6545\u969c\u6062\u590d",permalink:"/cn/docs/quick_start/advanced_features/fast_failover"}},p={},c=[{value:"\u521b\u5efa\u65b0\u7684\u5377\u5feb\u7167\u7c7b\uff08VolumeSnapshotClass\uff09",id:"\u521b\u5efa\u65b0\u7684\u5377\u5feb\u7167\u7c7bvolumesnapshotclass",level:2},{value:"\u4f7f\u7528 \u5377\u5feb\u7167\u7c7b\uff08VolumeSnapshotClass\uff09 \u521b\u5efa \u5377\u5feb\u7167\uff08VolumeSnapshot\uff09",id:"\u4f7f\u7528-\u5377\u5feb\u7167\u7c7bvolumesnapshotclass-\u521b\u5efa-\u5377\u5feb\u7167volumesnapshot",level:2},{value:"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u64cd\u4f5c",id:"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u64cd\u4f5c",level:2},{value:"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u56de\u6eda\u64cd\u4f5c",id:"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u56de\u6eda\u64cd\u4f5c",level:2}],i={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6570\u636e\u5377\u5feb\u7167"},"\u6570\u636e\u5377\u5feb\u7167"),(0,o.kt)("p",null,"\u5728 HwameiStor \u4e2d\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u521b\u5efa\u6570\u636e\u5377\u7684\u5feb\u7167\uff0c\u4e14\u53ef\u4ee5\u57fa\u4e8e\u6570\u636e\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u3001\u56de\u6eda\u64cd\u4f5c\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u4ec5\u652f\u6301\u5bf9\u975e\u9ad8\u53ef\u7528 LVM \u7c7b\u578b\u6570\u636e\u5377\u521b\u5efa\u5feb\u7167\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u907f\u514d\u6570\u636e\u4e0d\u4e00\u81f4\uff0c\u8bf7\u5148\u6682\u505c\u6216\u8005\u505c\u6b62 I/O \u7136\u540e\u518d\u6253\u5feb\u7167\u3002")),(0,o.kt)("p",null,"\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa\u5377\u5feb\u7167\u7c7b\uff08VolumeSnapshotClass\uff09\u548c\u5377\u5feb\u7167\uff08VolumeSnapshot\uff09\u6765\u4f7f\u7528\u5b83\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa\u65b0\u7684\u5377\u5feb\u7167\u7c7bvolumesnapshotclass"},"\u521b\u5efa\u65b0\u7684\u5377\u5feb\u7167\u7c7b\uff08VolumeSnapshotClass\uff09"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHwameiStor \u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u81ea\u52a8\u521b\u5efa\u8fd9\u6837\u7684 \u5377\u5feb\u7167\u7c7b\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u624b\u52a8\u521b\u5efa \u5377\u5feb\u7167\u7c7b\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b \u5377\u5feb\u7167\u7c7b\uff08VolumeSnapshotClass\uff09 \u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: VolumeSnapshotClass\napiVersion: snapshot.storage.k8s.io/v1\nmetadata:\n  name: hwameistor-storage-lvm-snapshot\n  annotations:\n    snapshot.storage.kubernetes.io/is-default-class: "true"\nparameters:\n  snapsize: "1073741824"\ndriver: lvm.hwameistor.io\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"snapsize\uff1a\u6307\u5b9a\u521b\u5efa\u5377\u5feb\u7167\u7684\u5927\u5c0f\u3002")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0d\u6307\u5b9a snapsize \u53c2\u6570\uff0c\u90a3\u4e48\u521b\u5efa\u7684\u5feb\u7167\u5927\u5c0f\u548c\u6e90\u5377\u7684\u5927\u5c0f\u4e00\u81f4\u3002")),(0,o.kt)("p",null,"\u521b\u5efa \u5377\u5feb\u7167\u7c7b \u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u521b\u5efa \u5377\u5feb\u7167\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-\u5377\u5feb\u7167\u7c7bvolumesnapshotclass-\u521b\u5efa-\u5377\u5feb\u7167volumesnapshot"},"\u4f7f\u7528 \u5377\u5feb\u7167\u7c7b\uff08VolumeSnapshotClass\uff09 \u521b\u5efa \u5377\u5feb\u7167\uff08VolumeSnapshot\uff09"),(0,o.kt)("p",null,"\u793a\u4f8b \u5377\u5feb\u7167\uff08VolumeSnapshot\uff09 \u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: snapshot.storage.k8s.io/v1\nkind: VolumeSnapshot\nmetadata:\n  name: snapshot-local-storage-pvc-lvm\nspec:\n  volumeSnapshotClassName: hwameistor-storage-lvm-snapshot\n  source:\n    persistentVolumeClaimName: local-storage-pvc-lvm\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"persistentVolumeClaimName\uff1a\u6307\u5b9a\u8981\u521b\u5efa\u5feb\u7167\u7684 PVC\u3002")),(0,o.kt)("p",null,"\u521b\u5efa \u5377\u5feb\u7167 \u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5 \u5377\u5feb\u7167\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kubectl get vs\nNAME                             READYTOUSE   SOURCEPVC               SOURCESNAPSHOTCONTENT   RESTORESIZE   SNAPSHOTCLASS                     SNAPSHOTCONTENT                                    CREATIONTIME   AGE\nsnapshot-local-storage-pvc-lvm   true         local-storage-pvc-lvm                           1Gi           hwameistor-storage-lvm-snapshot   snapcontent-0fc17697-68ea-49ce-8e4c-7a791e315110   53y            2m57s\n\n")),(0,o.kt)("p",null,"\u521b\u5efa \u5377\u5feb\u7167 \u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5 HwameiStor \u672c\u5730\u5377\u5feb\u7167\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kubectl get lvs\nNAME                                               CAPACITY     SOURCEVOLUME                               STATE   MERGING   INVALID   AGE\nsnapcontent-0fc17697-68ea-49ce-8e4c-7a791e315110   1073741824   pvc-967baffd-ce10-4739-b996-87c9ed24e635   Ready                       5m31s\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CAPACITY\uff1a\u5feb\u7167\u7684\u5bb9\u91cf\u5927\u5c0f"),(0,o.kt)("li",{parentName:"ul"},"SOURCEVOLUME\uff1a\u5feb\u7167\u7684\u6e90\u5377\u540d\u79f0"),(0,o.kt)("li",{parentName:"ul"},"MERGING\uff1a\u5feb\u7167\u662f\u5426\u5904\u4e8e\u5408\u5e76\u72b6\u6001\uff08\u4e00\u822c\u7531",(0,o.kt)("em",{parentName:"li"},"\u56de\u6eda\u64cd\u4f5c"),"\u89e6\u53d1\uff09"),(0,o.kt)("li",{parentName:"ul"},"INVALID\uff1a\u5feb\u7167\u662f\u5426\u5931\u6548\uff08\u4e00\u822c\u5728",(0,o.kt)("em",{parentName:"li"},"\u5feb\u7167\u5bb9\u91cf\u5199\u6ee1"),"\u89e6\u53d1\uff09"),(0,o.kt)("li",{parentName:"ul"},"AGE\uff1a\u5feb\u7167\u771f\u5b9e\u521b\u5efa\u7684\u65f6\u95f4\uff08\u4e0d\u540c\u4e8e CR \u521b\u5efa\u7684\u65f6\u95f4\uff0c\u8fd9\u4e2a\u65f6\u95f4\u662f\u5e95\u5c42\u5feb\u7167\u6570\u636e\u5377\u7684\u521b\u5efa\u65f6\u95f4\uff09")),(0,o.kt)("p",null,"\u521b\u5efa \u5377\u5feb\u7167 \u540e\uff0c\u60a8\u53ef\u4ee5\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u3001\u56de\u6eda\u64cd\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u64cd\u4f5c"},"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u64cd\u4f5c"),(0,o.kt)("p",null,"\u53ef\u4ee5\u521b\u5efapvc\uff0c\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u8fd8\u539f\u64cd\u4f5c\u3002\u5177\u4f53\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: local-storage-pvc-lvm-restore\nspec:\n  storageClassName: local-storage-hdd-lvm\n  dataSource:\n    name: snapshot-local-storage-pvc-lvm\n    kind: VolumeSnapshot\n    apiGroup: snapshot.storage.k8s.io\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 1Gi\n")),(0,o.kt)("h2",{id:"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u56de\u6eda\u64cd\u4f5c"},"\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u56de\u6eda\u64cd\u4f5c"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u5feb\u7167\u8fdb\u884c\u56de\u6eda\u5fc5\u987b\u5148",(0,o.kt)("em",{parentName:"p"},"\u505c\u6b62\u6e90\u5377\u7684 I/O"),"\uff0c\u6bd4\u5982\u5148\u505c\u6b62\u5e94\u7528\uff0c\u7b49\u5f85\u56de\u6eda\u64cd\u4f5c\u5b8c\u5168\u7ed3\u675f\uff0c\n\u5e76",(0,o.kt)("em",{parentName:"p"},"\u786e\u8ba4\u6570\u636e\u4e00\u81f4\u6027"),"\u4e4b\u540e\u518d\u4f7f\u7528\u56de\u6eda\u540e\u7684\u6570\u636e\u5377\u3002")),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u8d44\u6e90 LocalVolumeSnapshotRecover\uff0c\u5bf9\u5377\u5feb\u7167\u8fdb\u884c\u56de\u6eda\u64cd\u4f5c\u3002\u5177\u4f53\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: hwameistor.io/v1alpha1\nkind: LocalVolumeSnapshotRecover\nmetadata:\n  name: recover-test\nspec:\n  sourceVolumeSnapshot: snapcontent-0fc17697-68ea-49ce-8e4c-7a791e315110\n  recoverType: "rollback"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sourceVolumeSnapshot\uff1a\u6307\u5b9a\u8981\u8fdb\u884c\u56de\u6eda\u64cd\u4f5c\u7684 \u5377\u5feb\u7167\u3002")),(0,o.kt)("p",null,"\u5bf9\u521b\u5efa\u7684 LocalVolumeSnapshotRecover \u8fdb\u884c\u89c2\u5bdf\uff0c\u53ef\u4ee5\u901a\u8fc7\u72b6\u6001\u4e86\u89e3\u6574\u4e2a\u56de\u6eda\u7684\u8fc7\u7a0b\u3002\u56de\u6eda\u7ed3\u675f\u540e\uff0c\u5bf9\u5e94\u7684 LocalVolumeSnapshotRecover \u4f1a\u88ab\u5220\u9664\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"NAME            TARGETVOLUME                               SOURCESNAPSHOT                                     STATE        AGE\nrecover-test2   pvc-967baffd-ce10-4739-b996-87c9ed24e635   snapcontent-0fc17697-68ea-49ce-8e4c-7a791e315110   Submitted    0s\nrecover-test2   pvc-967baffd-ce10-4739-b996-87c9ed24e635   snapcontent-81a1f605-c28a-4e60-8c78-a3d504cbf6d9   InProgress   0s\nrecover-test2   pvc-967baffd-ce10-4739-b996-87c9ed24e635   snapcontent-81a1f605-c28a-4e60-8c78-a3d504cbf6d9   Completed    2s\n")))}u.isMDXComponent=!0}}]);