"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3211],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return a?o.createElement(h,r(r({ref:t},p),{},{components:a})):o.createElement(h,r({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var d=2;d<l;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var o=a(7462),n=(a(7294),a(3905));const l={sidebar_position:12,sidebar_label:"FAQs"},r="FAQs",i={unversionedId:"faqs",id:"faqs",title:"FAQs",description:"Q1: How does hwameistor-scheduler work in a Kubernetes platform?",source:"@site/docs/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/docs/faqs",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/faqs.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,sidebar_label:"FAQs"},sidebar:"tutorialSidebar",previous:{title:"APIs",permalink:"/docs/apis"},next:{title:"Use Cases",permalink:"/docs/category/use-cases"}},s={},d=[{value:"Q1: How does hwameistor-scheduler work in a Kubernetes platform?",id:"q1-how-does-hwameistor-scheduler-work-in-a-kubernetes-platform",level:2},{value:"Q2: How to schedule applications with multi-replica workloads?",id:"q2-how-to-schedule-applications-with-multi-replica-workloads",level:2},{value:"Q3: How to maintain a Kubernetes node?",id:"q3-how-to-maintain-a-kubernetes-node",level:2},{value:"Remove a node",id:"remove-a-node",level:3},{value:"Reboot a node",id:"reboot-a-node",level:3},{value:"Traditional shared storage",id:"traditional-shared-storage",level:3},{value:"Q4: How to handle the error when encountering &quot;LocalStorageNode&quot; during inspection?",id:"q4-how-to-handle-the-error-when-encountering-localstoragenode-during-inspection",level:2},{value:"Q5: Why is StorageClasses not automatically created after installation using Hwameistor-operator?",id:"q5-why-is-storageclasses-not-automatically-created-after-installation-using-hwameistor-operator",level:2},{value:"Q6: How to expand the storage pool manually?",id:"q6-how-to-expand-the-storage-pool-manually",level:2},{value:"Q7: How to manually recycle a data volume\uff1f",id:"q7-how-to-manually-recycle-a-data-volume",level:2}],p={toc:d};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"faqs"},"FAQs"),(0,n.kt)("h2",{id:"q1-how-does-hwameistor-scheduler-work-in-a-kubernetes-platform"},"Q1: How does hwameistor-scheduler work in a Kubernetes platform?"),(0,n.kt)("p",null,"The hwameistor-scheduler is deployed as a pod in the hwameistor namespace."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(8841).Z,width:"553",height:"196"})),(0,n.kt)("p",null,"Once the applications (Deployment or StatefulSet) are created, the pod will\nbe scheduled to the worker nodes on which HwameiStor is already configured."),(0,n.kt)("h2",{id:"q2-how-to-schedule-applications-with-multi-replica-workloads"},"Q2: How to schedule applications with multi-replica workloads?"),(0,n.kt)("p",null,"This question can be extended to:\nHow does HwameiStor schedule applications with multi-replica workloads and how does it differ from traditional shared storage (NFS/block)?"),(0,n.kt)("p",null,"To efficiently schedule applications with multi-replica workloads, we highly recommend using StatefulSet."),(0,n.kt)("p",null,"StatefulSet ensures that replicas are deployed on the same worker node as the original pod.\nIt also creates a PV data volume for each replica. If you need to deploy replicas on different\nworker nodes, manual configuration with ",(0,n.kt)("inlineCode",{parentName:"p"},"pod affinity")," is necessary."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(2933).Z,width:"1382",height:"426"})),(0,n.kt)("p",null,"We suggest using a single pod for deployment because the block data volumes can not be shared."),(0,n.kt)("h2",{id:"q3-how-to-maintain-a-kubernetes-node"},"Q3: How to maintain a Kubernetes node?"),(0,n.kt)("p",null,"HwameiStor provides the volume eviction/migration functions to keep the Pods and HwameiStor\nvolumes' data running when retiring/rebooting a node."),(0,n.kt)("h3",{id:"remove-a-node"},"Remove a node"),(0,n.kt)("p",null,"Before you remove a node from a Kubernetes cluster, the Pods and volumes on the node should be\nrescheduled and migrated to another available node, and keep the Pods/volumes running."),(0,n.kt)("p",null,"Follow these steps to remove a node:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Drain node."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl drain NODE --ignore-daemonsets=true. --ignore-daemonsets=true\n")),(0,n.kt)("p",{parentName:"li"},"This command can evict and reschedule Pods on the node. It also automatically\ntriggers HwameiStor's data volume eviction behavior. HwameiStor will automatically\nmigrate all replicas of the data volumes from that node to other nodes, ensuring data availability.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the migration progress."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get localstoragenode NODE -o yaml\n")),(0,n.kt)("p",{parentName:"li"},"The output may look like:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: hwameistor.io/v1alpha1\nkind: LocalStorageNode\nmetadata:\n  name: NODE\nspec:\n  hostname: NODE\n  storageIP: 10.6.113.22\n  topogoly:\n    region: default\n    zone: default\nstatus:\n  ...\n  pools:\n    LocalStorage_PoolHDD:\n      class: HDD\n      disks:\n      - capacityBytes: 17175674880\n        devPath: /dev/sdb\n        state: InUse\n        type: HDD\n      freeCapacityBytes: 16101933056\n      freeVolumeCount: 999\n      name: LocalStorage_PoolHDD\n      totalCapacityBytes: 17175674880\n      totalVolumeCount: 1000\n      type: REGULAR\n      usedCapacityBytes: 1073741824\n      usedVolumeCount: 1\n      volumeCapacityBytesLimit: 17175674880\n      ## **** make sure volumes is empty **** ##\n      volumes:  \n  state: Ready\n")),(0,n.kt)("p",{parentName:"li"},"At the same time, HwameiStor will automatically reschedule the evicted Pods\nto the other node which has the associated volume replica, and continue to run.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remove the NODE from the cluster."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete nodes NODE\n")))),(0,n.kt)("h3",{id:"reboot-a-node"},"Reboot a node"),(0,n.kt)("p",null,"It usually takes a long time (~10minutes) to reboot a node. All the Pods and volumes on\nthe node will not work until the node is back online. For some applications like DataBase,\nthe long downtime is very costly and even unacceptable."),(0,n.kt)("p",null,"HwameiStor can immediately reschedule the Pod to another available node with associated\nvolume data and bring the Pod back to running in very short time (~ 10 seconds for the\nPod using a HA volume, and longer time for the Pod with non-HA volume depends on the data size)."),(0,n.kt)("p",null,"If users wish to keep data volumes on a specific node, accessible even after the node restarts,\nthey can add the following labels to the node. This prevents the system from migrating the data volumes\nfrom that node. However, the system will still immediately schedule Pods on other nodes that have\nreplicas of the data volumes."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add a label (optional)"),(0,n.kt)("p",{parentName:"li"},"If it is not required to migrate the volumes during the node reboots,\nyou can add the following label to the node before draining it."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label node NODE hwameistor.io/eviction=disable\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Drain the node."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl drain NODE --ignore-daemonsets=true. --ignore-daemonsets=true\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If Step 1 has been performed, you can reboot the node after Step 2 is successful."),(0,n.kt)("li",{parentName:"ul"},"If Step 1 has not been performed, you should check if the data migration is complete\nafter Step 2 is successful (similar to Step 2 in ",(0,n.kt)("a",{parentName:"li",href:"#remove-a-node"},"remove node"),").\nAfter the data migration is complete, you can reboot the node.")),(0,n.kt)("p",{parentName:"li"},"After the first two steps are successful, you can reboot the node and wait for the node system to return to normal.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Bring the node back to normal."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl uncordon NODE\n")))),(0,n.kt)("h3",{id:"traditional-shared-storage"},"Traditional shared storage"),(0,n.kt)("p",null,"StatefulSet, which is used for stateful applications, prioritizes deploying replicated replicas\nto different nodes to distribute the workload. However, it creates a PV data volume\nfor each Pod replica. Only when the number of replicas exceeds the number of worker nodes,\nmultiple replicas will be deployed on the same node."),(0,n.kt)("p",null,"On the other hand, Deployments, which are used for stateless applications, prioritize deploying\nreplicated replicas to different nodes to distribute the workload. All Pods share a single PV data volume\n(currently only supports NFS). Similar to StatefulSets, multiple replicas will be deployed on the same node\nonly when the number of replicas exceeds the number of worker nodes. For block storage, as data volumes\ncannot be shared, it is recommended to use a single replica."),(0,n.kt)("h2",{id:"q4-how-to-handle-the-error-when-encountering-localstoragenode-during-inspection"},'Q4: How to handle the error when encountering "LocalStorageNode" during inspection?'),(0,n.kt)("p",null,"When encountering the following error while inspecting ",(0,n.kt)("inlineCode",{parentName:"p"},"LocalStorageNode"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"faq_04",src:a(4545).Z,width:"2072",height:"1090"})),(0,n.kt)("p",null,"Possible causes of the error:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The node does not have LVM2 installed. You can install it using the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rpm -qa | grep lvm2  # Check if LVM2 is installed\nyum install lvm2  # Install LVM on each node\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ensure that the proper disk on the node has GPT partitioning."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"blkid /dev/sd*  # Confirm if the disk partitions are clean\nwipefs -a /dev/sd*  # Clean the disk\n")))),(0,n.kt)("h2",{id:"q5-why-is-storageclasses-not-automatically-created-after-installation-using-hwameistor-operator"},"Q5: Why is StorageClasses not automatically created after installation using Hwameistor-operator?"),(0,n.kt)("p",null,"Probable reasons:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The node has no remaining bare disks that can be automatically managed. You can check it by running the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ld # Check disk\nkubectl get lsn <node-name> -o yaml # Check whether the disk is managed normally\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The hwameistor related components are not working properly. You can check it by running the following command:"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"drbd-adapter")," is only needed when HA is enabled, if not, ignore the related error.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n hwameistor # Confirm whether the pod is running \nkubectl get hmcluster -o yaml # View the health field\n")))),(0,n.kt)("h2",{id:"q6-how-to-expand-the-storage-pool-manually"},"Q6: How to expand the storage pool manually?"),(0,n.kt)("p",null,"When is manually expanding storage needed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To use the disk partition (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hwameistor/hwameistor/issues/1387"},"Issue #1387"),")"),(0,n.kt)("li",{parentName:"ul"},"Same serial number is shared between different disks\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hwameistor/hwameistor/issues/1450"},"Issue #1450"),",\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hwameistor/hwameistor/issues/1449"},"Issue #1449"),")")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"lsblk -o +SERIAL")," to check serial number.")),(0,n.kt)("p",null,"Manual expansion steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create and expand storage pool"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"vgcreate LocalStorage_PoolHDD /dev/sdb\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"LocalStorage_PoolHDD")," is the StoragePool name for ",(0,n.kt)("inlineCode",{parentName:"p"},"HDD")," type disk.\nOther optional names are ",(0,n.kt)("inlineCode",{parentName:"p"},"LocalStorage_PoolSSD")," for ",(0,n.kt)("inlineCode",{parentName:"p"},"SSD")," type and ",(0,n.kt)("inlineCode",{parentName:"p"},"LocalStorage_PoolNVMe")," for ",(0,n.kt)("inlineCode",{parentName:"p"},"NVMe")," type.")),(0,n.kt)("p",{parentName:"li"},"If you want to ",(0,n.kt)("strong",{parentName:"p"},"expand the storage pool with disk partition"),", you can use the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"vgcreate LocalStorage_PoolHDD /dev/sdb1\n")),(0,n.kt)("p",{parentName:"li"},"If ",(0,n.kt)("strong",{parentName:"p"},"storage pool is already exist"),", you can use the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"vgextend LocalStorage_PoolHDD /dev/sdb1\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the status of the node storage pool and confirm that the disk is added to the storage pool like this:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get lsn node1 -o yaml\n\napiVersion: hwameistor.io/v1alpha1\nkind: LocalStorageNode\n...\npools:\n  LocalStorage_PoolHDD:\n  class: HDD\n  disks:\n  - capacityBytes: 17175674880\n  devPath: /dev/sdb\n...\n")))),(0,n.kt)("h2",{id:"q7-how-to-manually-recycle-a-data-volume"},"Q7: How to manually recycle a data volume\uff1f"),(0,n.kt)("p",null,"When do you need to manually recycle a data volume?:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The reclaim policy of StorageClass is set to Retain. After deleting the PVC, the volume fails to be automatically reclaimed."),(0,n.kt)("li",{parentName:"ul"},"The data volume is not automatically recycled after the PVC is deleted under abnormal circumstances")),(0,n.kt)("p",null,"Manually reclaim data volumes:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the mapping table between LV (data volume) and PVC, and find the PVC that is no longer in use. The corresponding LV should be recycled.:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get lv | awk '{print $1}' | grep -v NAME | xargs -I {} kubectl get lv {} -o jsonpath='{.metadata.name} -> {.spec.pvcNamespace}/{.spec.pvcName}{\"\\n\"}'\n\npvc-be53be2a-1c4b-430e-a45b-05777c791957 -> default/data-nginx-sts-0\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check whether the PVC exists and delete it if it does.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check if a PV with the same name as the LV exists, and if so, delete it.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Edit LV, modify spec.delete=true"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit lv pvc-be53be2a-1c4b-430e-a45b-05777c791957\n\n...\n   spec:\n     delete: true\n")))))}m.isMDXComponent=!0},8841:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/clip_image002-ab1b7f5938d19fde9eee9c8e334a392e.png"},2933:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/clip_image004-ea219969be0d9d975904a119d3135ff1.png"},4545:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/faq04-35ad5cc0809680a9895c470fdc885974.png"}}]);