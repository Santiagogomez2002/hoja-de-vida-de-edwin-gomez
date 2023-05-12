import{_ as p,a as l}from"./table-2a55cd24.js";import{_ as c,a as o}from"./form-e1958efa.js";import{_ as m}from"./dialog-af59178c.js";import{_ as y}from"./pagination-1b794adb.js";import{_ as d,a}from"./select-4620f752.js";import{c as h,j as g}from"./codeMirror-416cb659.js";import{n as k,g as f,i as v}from"./vueConfig-81691177.js";import{s as _,e as r,n as b}from"./notify-8d0c981a.js";import{R as x}from"./constants-8d899194.js";import"./checkbox-2767b1db.js";import"./scrollbar-fe572d5c.js";import"./index-fb93a5d0.js";import"./checkbox-group-1f1334bf.js";import"./index-f06350f9.js";import"./focus-34de79c8.js";let s;const w={components:{codemirror:h},data(){return{cmOptions:{mode:"text/plain",foldGutter:!0,gutters:["CodeMirror-foldgutter"],foldOptions:void 0},cmContent:"",language:{current:"Text",supports:["Text","JSON","Yaml"],map:{Text:"text/plain",JSON:"application/json",Yaml:"text/yaml"}},itemModel:{old:null,key:null,score:null,value:null},searchInput:"",pageIndex:1,pageSize:100,dataCount:0,remainHeight:0,keyLoading:!0,isNew:!1,key:{name:"",ttl:-1,content:null,count:null,type:null},edit:{name:"",ttl:-1,content:null},itemDialogVisiable:!1,selectStyle:{float:this.float},textrows:6}},computed:{size(){var n;return((n=this.cmContent)==null?void 0:n.length)||0},codemirror(){var n;return(n=this.$refs.cmEditor)==null?void 0:n.codemirror},isJSON(){var n;return["string","ReJSON-RL"].includes(this.key.type)&&((n=this.edit.content)==null?void 0:n.match(/^\s*[{[]/))!=null},filterData(){this.key.content||(this.key.content=[]);const n=this.searchInput,e=this.key.content.filter(t=>!n||(t.value?t.value.includes(n):t.includes(n)));return this.dataCount=this.key.count??e.length,e},dialogTitle(){const n=this.itemModel.old;switch(this.key.type){case"hash":return n?"Edit Hash":"Add to hash";case"set":return n?"Edit Set":"Add to set";case"zset":return n?"Edit ZSet":"Add to zset";case"list":return n?"Edit List":"Add to list"}return""},dynamicHeight(){return window.innerHeight-100+"px"}},destroyed(){s.destroy()},mounted(){const n=()=>{this.remainHeight=window.innerHeight-130};n(),new ResizeObserver(n).observe(document.body),window.addEventListener("resize",n),s=f(),s.on("new",({prefix:e})=>{this.isNew=!0,this.keyLoading=!1,this.language.current="Text",this.key={name:e,type:x.STRING,ttl:-1},this.edit=this.deepClone(this.key)}).on("detail",e=>{this.isNew=!1,this.keyLoading=!1,this.language.current="Text",this.pageIndex=e.page.pageNum,this.pageSize=e.page.pageSize,this.itemDialogVisiable=!1,this.key=e.res,this.edit=this.deepClone(e.res),["string","ReJSON-RL"].includes(this.key.type)&&(this.cmContent=this.edit.content),this.autoDetect()}).on("pagination",e=>{this.key.content=e}).on("msg",e=>{_(e)}).on("error",e=>{r(e)}).on("success",e=>{b({showClose:!0,duration:1500,message:e,type:"success"})}).on("refresh",()=>{this.refresh()}),s.emit("routed"),window.addEventListener("keydown",e=>{v(e)&&e.code=="KeyS"&&["string","ReJSON-RL"].includes(this.key.type)&&this.update()})},methods:{changePage(n,e){s.emit("changePage",e?n:this.pageIndex+n)},autoDetect(){!this.key||!["string","ReJSON-RL"].includes(this.key.type)||this.$nextTick(()=>{this.isJSON?(this.language.current="JSON",this.format("JSON"),this.changeLanguage("JSON")):(this.language.current="Text",this.changeLanguage("Text"))})},format(n){var e;if(n=="JSON")try{const t=this.cmContent;this.cmContent=JSON.stringify(JSON.parse((e=t==null?void 0:t.replace)==null?void 0:e.call(t,/ /g," ")),null,2)}catch(t){console.log(t)}},changeLanguage(n){if(!this.codemirror)return;const e=this.language.map[n];this.codemirror.setOption("mode",e),this.codemirror.setOption("foldOptions",n=="JSON"?g(this.codemirror):void 0)},refresh(){this.itemDialogVisiable=!1,s.emit("refresh",{key:this.key})},saveItem(){if(!this.edit.name)return r("Key name cannot be null!");s.emit("saveItem",{...this.itemModel,keyName:this.edit.name,type:this.key.type})},showOpenDialog(){this.itemModel={},this.itemDialogVisiable=!0},showEditDialog(n){this.itemModel={...n,old:{...n}},this.itemDialogVisiable=!0},deleteLine(n){this.$confirm("Are you sure to delete this key?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{s.emit("deleteLine",n)})},deleteKey(){this.$confirm("Are you sure to delete this key?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{s.emit("del",{key:{name:this.key.name}}),this.key={},this.edit={}})},rename(){console.log(this.key.name),s.emit("rename",{key:{name:this.key.name,newName:this.edit.name}})},ttlKey(){s.emit("ttl",{key:{name:this.key.name,ttl:this.edit.ttl}})},update(){if(!this.edit.name)return r("Key name cannot be null!");s.emit("update",{key:{name:this.key.name,newName:this.edit.name,type:this.key.type,ttl:this.edit.ttl,content:this.cmContent}})},deepClone(n){let e=Array.isArray(n)?[]:{};if(n&&typeof n=="object")for(let t in n)n.hasOwnProperty(t)&&(n[t]&&typeof n[t]=="object"?e[t]=this.deepClone(n[t]):e[t]=n[t]);return e}}};var S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"redis-view-container px-4",attrs:{id:"app"}},[e.keyLoading?[t("div",{staticStyle:{"text-align":"center"}},[e._v(" loading ")])]:t("div",{staticClass:"key-tab-container"},[t("div",{staticClass:"flex pt-4 pb-4 justify-between pr-4 flex-wrap gap-3"},[t("div",[t("vsc-input",{ref:"keyNameInput",staticStyle:{width:"500px"},attrs:{size:"mini",placeholder:"Please input key name"},nativeOn:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.rename.apply(null,arguments)}},model:{value:e.edit.name,callback:function(i){e.$set(e.edit,"name",i)},expression:"edit.name"}},[e.isNew?t(d,{staticStyle:{width:"100px"},attrs:{slot:"prepend",placeholder:"Forever",size:"small"},slot:"prepend",model:{value:e.key.type,callback:function(i){e.$set(e.key,"type",i)},expression:"key.type"}},[t(a,{attrs:{value:"string",label:"STRING"}}),t(a,{attrs:{value:"list",label:"LIST"}}),t(a,{attrs:{value:"set",label:"SET"}}),t(a,{attrs:{value:"zset",label:"ZSET"}}),t(a,{attrs:{value:"hash",label:"HASH"}}),t(a,{attrs:{value:"stream",label:"STREAM"}})],1):t("span",{staticClass:"key-detail-type",attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(e.key.type))])],1),e.isNew?e._e():t("vsc-button",{staticClass:"inline btn-ad",attrs:{size:"medium",icon:"el-icon-check"},on:{click:e.rename}})],1),t("div",[t("vsc-input",{staticStyle:{width:"220px"},attrs:{type:"number",size:"mini"},nativeOn:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.ttlKey.apply(null,arguments)}},model:{value:e.edit.ttl,callback:function(i){e.$set(e.edit,"ttl",i)},expression:"edit.ttl"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("TTL")])]),t("vsc-button",{staticClass:"inline btn-ad",attrs:{size:"medium",icon:"el-icon-check"},on:{click:e.ttlKey}}),t("vsc-button",{staticClass:"inline btn-ad",attrs:{size:"medium",icon:"el-icon-delete"},on:{click:e.deleteKey}},[e._v("Delete")]),t("vsc-button",{staticClass:"inline btn-ad",attrs:{size:"medium",icon:"el-icon-refresh"},on:{click:e.refresh}},[e._v("Refresh")])],1)]),["string","ReJSON-RL"].includes(e.key.type)?t("div",{staticClass:"flex pr-4 mb-2 gap-x-7"},[t("div",[e._v(" Size: "+e._s(e.size)+" Bytes ")]),["string","ReJSON-RL"].includes(e.key.type)?t("div",[t(d,{staticClass:"mr-2",staticStyle:{width:"145px"},attrs:{placeholder:"Default",size:"small"},on:{change:e.changeLanguage},model:{value:e.language.current,callback:function(i){e.$set(e.language,"current",i)},expression:"language.current"}},e._l(e.language.supports,function(i){return t(a,{key:i,attrs:{value:i}},[e._v(e._s(i))])}),1),t("vsc-button",{staticClass:"inline btn-ad",staticStyle:{height:"27px"},on:{click:e.update}},[e._v("Save")])],1):e._e()]):e._e(),t(c,{directives:[{name:"show",rawName:"v-show",value:["string","ReJSON-RL"].includes(e.key.type),expression:"['string','ReJSON-RL'].includes(key.type)"}],staticClass:"key-content-string"},[t(o,[t("div",{staticClass:"value-panel"},[t("codemirror",{ref:"cmEditor",staticClass:"json-panel",style:"height:"+e.remainHeight+"px",attrs:{options:e.cmOptions},model:{value:e.cmContent,callback:function(i){e.cmContent=i},expression:"cmContent"}})],1)])],1),e.key.type=="list"||e.key.type=="set"||e.key.type=="zset"||e.key.type=="hash"||e.key.type=="stream"?t("div",[t("div",[t("vsc-input",{staticClass:"filter-input mb-2",staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.$t("result.searchNotice"),clearable:!0},model:{value:e.searchInput,callback:function(i){e.searchInput=i},expression:"searchInput"}}),t("vsc-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Add new key",placement:"bottom-start"}},[t("div",{staticClass:"ml-2 inline-block"},[e.key.type!="stream"?t("vsc-button",{staticStyle:{color:"var(--vscode-terminal-ansiYellow)"},attrs:{type:"icon",icon:"codicon-add text-lg"},on:{click:function(i){return e.showOpenDialog()}}}):e._e()],1)]),t(y,{staticStyle:{display:"inline-block"},attrs:{small:!0,total:e.dataCount,"page-size":e.pageSize,"current-page":e.pageIndex,"page-sizes":[20,50,100,200,300],layout:"prev,pager, next, total",background:""},on:{"update:pageSize":function(i){e.pageSize=i},"update:page-size":function(i){e.pageSize=i},"update:currentPage":function(i){e.pageIndex=i},"update:current-page":function(i){e.pageIndex=i},"current-change":i=>e.changePage(i,!0),"next-click":()=>e.changePage(1),"prev-click":()=>e.changePage(-1)}}),t(m,{attrs:{title:e.dialogTitle,visible:e.itemDialogVisiable,closeOnClickModal:!1,width:"30%","custom-class":"new-item-dialog"},on:{"update:visible":function(i){e.itemDialogVisiable=i}}},[t(c,{attrs:{"label-width":"60px"}},[e.key.type=="hash"?t(o,{attrs:{label:"key"}},[t("vsc-input",{attrs:{size:"mini"},model:{value:e.itemModel.key,callback:function(i){e.$set(e.itemModel,"key",i)},expression:"itemModel.key"}})],1):e._e(),e.key.type=="zset"?t(o,{attrs:{label:"score"}},[t("vsc-input",{attrs:{size:"mini"},model:{value:e.itemModel.score,callback:function(i){e.$set(e.itemModel,"score",i)},expression:"itemModel.score"}})],1):e._e(),t(o,{attrs:{label:"value"}},[t("vsc-input",{attrs:{size:"mini"},model:{value:e.itemModel.value,callback:function(i){e.$set(e.itemModel,"value",i)},expression:"itemModel.value"}})],1)],1),t("div",{staticClass:"dialog-footer text-center",attrs:{slot:"footer"},slot:"footer"},[t("vsc-button",{attrs:{type:"secondary"},on:{click:function(i){e.itemDialogVisiable=!1}}},[e._v(e._s(e.$t("common.cancel")))]),t("vsc-button",{attrs:{type:"primary"},on:{click:e.saveItem}},[e._v("Confirm")])],1)],1)],1),t("div",[t(p,{attrs:{data:e.filterData,height:e.remainHeight,border:"","header-cell-style":{padding:0}}},[t(l,{attrs:{type:"index",label:"Index",sortable:"",width:"60",align:"center"}}),e.key.type=="hash"?t(l,{attrs:{"sort-by":"key",resizable:"",sortable:"",label:"Key",align:"center",prop:"key"}}):e._e(),e.key.type=="zset"?t(l,{attrs:{"sort-by":"score",resizable:"",sortable:"",label:"Score",align:"center",width:"200",prop:"score"}}):e._e(),e.key.type=="stream"?t(l,{attrs:{"sort-by":"id",resizable:"",sortable:"",label:"id",align:"center",width:"200",prop:"id"}}):e._e(),t(l,{attrs:{"sort-by":"value",resizable:"",sortable:"","show-overflow-tooltip":"",label:"Value",align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return[e.key.type=="hash"?t("span",{domProps:{textContent:e._s(i.row.value)}}):e.key.type=="zset"||e.key.type=="set"||e.key.type=="stream"?t("span",{domProps:{textContent:e._s(i.row.value)}}):t("span",{domProps:{textContent:e._s(i.row)}})]}}],null,!1,2761915246)}),t(l,{attrs:{label:"Operation",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return[["hash","set","zset"].includes(e.key.type)?t("vsc-button",{attrs:{type:"icon",icon:"codicon-edit text-base",title:"edit"},on:{click:function(u){return e.showEditDialog(i.row)}}}):e._e(),t("vsc-button",{staticClass:"ml-3",staticStyle:{color:"#f56c6c"},attrs:{type:"icon",icon:"el-icon-delete text-base",title:"delete"},on:{click:function(u){return e.deleteLine(i.row)}}})]}}],null,!1,1350935295)})],1)],1)]):e._e()],1)],2)},C=[],z=k(w,S,C,!1,null,"70feea6d",null,null);const P=z.exports;export{P as default};
