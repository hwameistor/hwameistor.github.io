"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[619],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:2,sidebar_label:"Migrate Volumes"},l="Migrate Volumes",i={unversionedId:"quick_start/create_stateful/advanced/migrate",id:"quick_start/create_stateful/advanced/migrate",title:"Migrate Volumes",description:"The Migrate function is an important operation and maintenance management function in HwameiStor. When the copy of the node where the data volume bound to the application is located is damaged, the copy of the volume can be migrated to other nodes, and after successfully migrated to the new node, the application can be rescheduled to the new node and bind mount the data volume.",source:"@site/docs/quick_start/create_stateful/advanced/migrate.md",sourceDirName:"quick_start/create_stateful/advanced",slug:"/quick_start/create_stateful/advanced/migrate",permalink:"/docs/quick_start/create_stateful/advanced/migrate",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/quick_start/create_stateful/advanced/migrate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Migrate Volumes"},sidebar:"tutorialSidebar",previous:{title:"Expand Volumes",permalink:"/docs/quick_start/create_stateful/advanced/expand"},next:{title:"Advanced Features",permalink:"/docs/category/advanced-features"}},s={},c=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Step 1: Create convertible <code>StorageClass</code>",id:"step-1-create-convertible-storageclass",level:2},{value:"Step 2: Create multiple <code>PVCs</code>",id:"step-2-create-multiple-pvcs",level:2},{value:"Step 3: Deploy multi-volume pod",id:"step-3-deploy-multi-volume-pod",level:2},{value:"Step 4: Detach multi-volume pod",id:"step-4-detach-multi-volume-pod",level:2},{value:"Step 5: Create migration tasks",id:"step-5-create-migration-tasks",level:2},{value:"Step 6: Check migration Status",id:"step-6-check-migration-status",level:2},{value:"Step 7: Verify migration results",id:"step-7-verify-migration-results",level:2},{value:"Step 8: Reattach/Remount volume",id:"step-8-reattachremount-volume",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrate-volumes"},"Migrate Volumes"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Migrate")," function is an important operation and maintenance management function in HwameiStor. When the copy of the node where the data volume bound to the application is located is damaged, the copy of the volume can be migrated to other nodes, and after successfully migrated to the new node, the application can be rescheduled to the new node and bind mount the data volume."),(0,o.kt)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolumeGroup(LVG)")," management is an important function in HwameiStor. When an application Pod applies for multiple data volume PVCs, in order to ensure the correct operation of the Pod, these data volumes must have certain attributes, such as the number of copies of the data volume and the node where the copies are located. Properly managing these associated data volumes through the data volume group management function is a very important capability in HwameiStor."),(0,o.kt)("h2",{id:"preconditions"},"Preconditions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolumeMigrate")," needs to be deployed in the Kubernetes system, and the deployed application needs to meet the following conditions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support ",(0,o.kt)("inlineCode",{parentName:"li"},"lvm")," type volumes"),(0,o.kt)("li",{parentName:"ul"},"convertible type volume (need to add the configuration item convertible: true in sc)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When applying pod to apply for multiple data volume ",(0,o.kt)("inlineCode",{parentName:"li"},"PVCs"),", the corresponding data volume needs to use the same configuration sc"),(0,o.kt)("li",{parentName:"ul"},"When migrating based on ",(0,o.kt)("inlineCode",{parentName:"li"},"LocalVolume")," granularity, the data volumes belonging to the same ",(0,o.kt)("inlineCode",{parentName:"li"},"LocalVolumeGroup")," by default will not be migrated together (if they are migrated together, you need to configure the switch ",(0,o.kt)("inlineCode",{parentName:"li"},"MigrateAllVols: true"),")")))),(0,o.kt)("h2",{id:"step-1-create-convertible-storageclass"},"Step 1: Create convertible ",(0,o.kt)("inlineCode",{parentName:"h2"},"StorageClass")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ cd ../../deploy/\n$ kubectl apply -f storageclass-convertible-lvm.yaml\n")),(0,o.kt)("h2",{id:"step-2-create-multiple-pvcs"},"Step 2: Create multiple ",(0,o.kt)("inlineCode",{parentName:"h2"},"PVCs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl apply -f pvc-multiple-lvm.yaml\n")),(0,o.kt)("h2",{id:"step-3-deploy-multi-volume-pod"},"Step 3: Deploy multi-volume pod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl apply -f nginx-multiple-lvm.yaml\n")),(0,o.kt)("h2",{id:"step-4-detach-multi-volume-pod"},"Step 4: Detach multi-volume pod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl patch deployment nginx-local-storage-lvm --patch \'{"spec": {"replicas": 0}}\' -n hwameistor\n')),(0,o.kt)("h2",{id:"step-5-create-migration-tasks"},"Step 5: Create migration tasks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cat > ./migrate_lv.yaml <<- EOF\napiVersion: hwameistor.io/v1alpha1\nkind: LocalVolumeMigrate\nmetadata:\n  namespace: hwameistor\n  name: <localVolumeMigrateName>\nspec:\n  targetNodesNames: \n  - <targetNodesName1>\n  - <targetNodesName2>\n  sourceNodesNames:\n  - <sourceNodesName1>\n  - <sourceNodesName2>\n  volumeName: <volName>\n  migrateAllVols: <true/false>\nEOF\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl apply -f ./migrate_lv.yaml\n")),(0,o.kt)("h2",{id:"step-6-check-migration-status"},"Step 6: Check migration Status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl  get LocalVolumeMigrate  -o yaml\napiVersion: v1\nitems:\n- apiVersion: hwameistor.io/v1alpha1\n  kind: LocalVolumeMigrate\n  metadata:\n  annotations:\n  kubectl.kubernetes.io/last-applied-configuration: |\n  {"apiVersion":"hwameistor.io/v1alpha1","kind":"LocalVolumeMigrate","metadata":{"annotations":{},"name":"localvolumemigrate-1","namespace":"hwameistor"},"spec":{"migrateAllVols":true,"sourceNodesNames":["dce-172-30-40-61"],"targetNodesNames":["172-30-45-223"],"volumeName":"pvc-1a0913ac-32b9-46fe-8258-39b4e3b696a4"}}\n  creationTimestamp: "2022-07-07T12:34:31Z"\n  generation: 1\n  name: localvolumemigrate-1\n  namespace: hwameistor\n  resourceVersion: "12828637"\n  uid: 78af7f1b-d701-4b03-84de-27fafca58764\n  spec:\n  abort: false\n  migrateAllVols: true\n  sourceNodesNames:\n  - dce-172-30-40-61\n    targetNodesNames:\n  - 172-30-45-223\n    volumeName: pvc-1a0913ac-32b9-46fe-8258-39b4e3b696a4\n    status:\n    replicaNumber: 1\n    state: InProgress\n    kind: List\n    metadata:\n    resourceVersion: ""\n    selfLink: ""\n')),(0,o.kt)("h2",{id:"step-7-verify-migration-results"},"Step 7: Verify migration results"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"[root@172-30-45-222 deploy]# kubectl  get lvr\nNAME                                              CAPACITY     NODE            STATE   SYNCED   DEVICE                                                                  AGE\npvc-1a0913ac-32b9-46fe-8258-39b4e3b696a4-9cdkkn   1073741824   172-30-45-223   Ready   true     /dev/LocalStorage_PoolHDD-HA/pvc-1a0913ac-32b9-46fe-8258-39b4e3b696a4   77s\npvc-d9d3ae9f-64af-44de-baad-4c69b9e0744a-7ppmrx   1073741824   172-30-45-223   Ready   true     /dev/LocalStorage_PoolHDD-HA/pvc-d9d3ae9f-64af-44de-baad-4c69b9e0744a   77s\n")),(0,o.kt)("h2",{id:"step-8-reattachremount-volume"},"Step 8: Reattach/Remount volume"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ kubectl patch deployment nginx-local-storage-lvm --patch \'{"spec": {"replicas": 1}}\' -n hwameistor\n')))}m.isMDXComponent=!0}}]);