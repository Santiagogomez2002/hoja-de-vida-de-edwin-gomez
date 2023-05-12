import{_ as a,a as i}from"./select-4620f752.js";import{_ as l,a as n}from"./form-e1958efa.js";import{s as u,e as r}from"./notify-8d0c981a.js";import{i as p}from"./vscodeInject-d1aa3399.js";import{u as c}from"./umy-table.common-a2bbba6b.js";import{n as d}from"./vueConfig-81691177.js";import"./scrollbar-fe572d5c.js";import"./index-fb93a5d0.js";import"./focus-34de79c8.js";import"./index-f37b6d04.js";import"./index-f06350f9.js";const m={components:{UxGrid:c.UxGrid,UxTableColumn:c.UxTableColumn},mixins:[p],data(){return{supportServersList:[{value:"MySQL",icon:"icon/server/mysql_dark.svg"},{value:"MariaDB",icon:"icon/server/mariadb.svg"},{value:"PostgreSQL",icon:"icon/server/pgsql.svg"}],connections:[],source:{dbLoading:!1,dbList:[]},target:{dbLoading:!1,dbList:[]},option:{from:{connection:null,database:null,db:null},to:{db:null}},loading:{compare:!1,sync:!1},compareResult:{sqlList:null}}},computed:{remainHeight(){return window.outerHeight-340}},mounted(){this.on("nodes",s=>{this.connections=s}).on("sourceDB",s=>{this.source.dbList=s,this.source.dbLoading=!1}).on("targetDB",s=>{this.target.dbList=s,this.target.dbLoading=!1}).on("compareResult",s=>{this.compareResult=s,this.loading.compare=!1}).on("syncSuccess",()=>{u("syncSuccess"),this.loading.sync=!1}).on("success",()=>{this.refresh()}).on("error",s=>{r(s),this.loading.sync=!1}).init()},methods:{getIcon(s){for(const t of this.supportServersList)if(t.value==s)return t.icon;return"icon/server/mysql_dark.svg"},loadSource(s){this.emit("loadDB",{key:s}),this.source.dbLoading=!0,this.source.dbList=[],this.option.from.db=null,this.option.from.database=null},loadTarget(s){this.emit("loadDB",{key:s,isTarget:!0}),this.target.dbLoading=!0,this.target.dbList=[],this.option.to.db=null,this.option.to.database=null},changeActive(s,t){const o=t?this.source.dbList:this.target.dbList;for(const e of o)e.label==s&&(t?this.option.from.db=e:this.option.to.db=e);this.$forceUpdate()},startCompare(){this.loading.compare=!0,this.emit("start",this.option)},confrimSync(){const s=this.$refs.dataTable.getCheckboxRecords();if(!s||s.length==0){r("Need to select at least one sql!");return}this.loading.sync=!0,this.emit("sync",{sqlList:s,option:this.option})},selectionChange(s){},execute(s){s&&this.emit("execute",s)},refresh(){this.emit("routed")}}};var b=function(){var t=this,o=t._self._c;return o("div",[o("div",{staticStyle:{margin:"30px 20px"}},[t._v(" Struct sync is being refactored and is currently unavailable ")]),o("div",{staticClass:"opt-panel"},[o(l,[o(n,{attrs:{"label-width":"80px",label:"Target"}},[o(a,{attrs:{filterable:""},on:{change:t.loadSource},model:{value:t.option.from.connection,callback:function(e){t.$set(t.option.from,"connection",e)},expression:"option.from.connection"}},t._l(t.connections,function(e){return o(i,{key:e.key,attrs:{label:e.label,value:e.key}},[o("img",{staticClass:"inline-block",staticStyle:{width:"13px",height:"13px",position:"relative",left:"-2px",top:"-1px"},attrs:{src:t.getIcon(e.dbType)}}),t._v(" "+t._s(e.label)+" ")])}),1)],1),o(n,{attrs:{"label-width":"80px",label:"database"}},[o(a,{attrs:{loading:t.source.dbLoading,filterable:""},on:{change:e=>t.changeActive(e,!0)},model:{value:t.option.from.database,callback:function(e){t.$set(t.option.from,"database",e)},expression:"option.from.database"}},t._l(t.source.dbList,function(e){return o(i,{key:e.label,attrs:{label:e.label,value:e.label}})}),1)],1)],1)],1),o("div",{staticClass:"opt-panel"},[o(l,[o(n,{attrs:{"label-width":"90px",label:"Sync From"}},[o(a,{attrs:{filterable:""},on:{change:t.loadTarget},model:{value:t.option.to.connection,callback:function(e){t.$set(t.option.to,"connection",e)},expression:"option.to.connection"}},t._l(t.connections,function(e){return o(i,{key:e.key,attrs:{label:e.label,value:e.key}},[o("img",{staticClass:"inline-block",staticStyle:{width:"13px",height:"13px",position:"relative",left:"-2px",top:"-1px"},attrs:{src:t.getIcon(e.dbType)}}),t._v(" "+t._s(e.label)+" ")])}),1)],1),o(n,{attrs:{"label-width":"90px",label:"database"}},[o(a,{attrs:{loading:t.target.dbLoading,filterable:""},on:{change:e=>t.changeActive(e,!1)},model:{value:t.option.to.database,callback:function(e){t.$set(t.option.to,"database",e)},expression:"option.to.database"}},t._l(t.target.dbList,function(e){return o(i,{key:e.label,attrs:{label:e.label,value:e.label}})}),1)],1)],1)],1),o("vsc-button",{staticClass:"m-2",attrs:{stlye:"margin-left:250px;",loading:t.loading.compare,title:"Start Compare"},on:{click:t.startCompare}},[t._v(" Compare ")]),o("div",[t.compareResult.sqlList?[o("div",{staticClass:"bg-secondBg pl-5 pt-3"},[o("div",{staticClass:"mb-3"},[o("vsc-button",{attrs:{loading:t.loading.sync,title:"Confrim Sync"},on:{click:t.confrimSync}},[t._v(" Sync ")])],1),o("ux-grid",{ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.compareResult.sqlList,height:t.remainHeight,stripe:""},on:{"selection-change":t.selectionChange}},[o("ux-table-column",{attrs:{type:"checkbox",width:"40",fixed:"left"}}),o("ux-table-column",{attrs:{align:"center",width:"60",field:"type",title:"type","show-overflow-tooltip":"true"}}),o("ux-table-column",{attrs:{align:"center",field:"sql",title:"sql","show-overflow-tooltip":"true"}})],1)],1)]:t._e()],2)],1)},f=[],g=d(m,b,f,!1,null,null,null,null);const q=g.exports;export{q as default};
