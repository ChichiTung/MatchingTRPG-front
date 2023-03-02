import{b as we,ag as ye,e as se,n as c,o as re,l as te,g as x,ah as de,u as xe,h as pe,aj as ke,ak as Ce,i as Se,aQ as ne,Q as R,q as L,N as $e,w as ze,a7 as ae,aF as oe,ad as Be,aG as Re,R as Le,C as ue,aC as Ve,aP as ie}from"./router-7f210e9c.js";import{_ as Me}from"./Space-9d51f206.js";import{_ as Fe}from"./Select-495f88fd.js";import{p as le,d as k}from"./index-714b5119.js";import{d as fe,r as N,a2 as Te,c as E,h as m,f as D,l as H,m as h,a as ce,k as o,j as l,W as V,a9 as he,F as Ue,ag as De,ai as He}from"./plugin-vueexport-helper-dfa573d2.js";import{_ as We}from"./Upload-1cfd9aa0.js";import{E as je}from"./Edit-138ea721.js";import{u as Ae}from"./use-message-db71c59d.js";import{_ as Ne}from"./Table-98f027c2.js";import{_ as Pe}from"./Modal-aad6ef37.js";import{_ as Ee}from"./Image-d763c907.js";import{b as Ke,a as Oe,c as Ie,d as qe,_ as Qe}from"./Grid-87c6090c.js";import{_ as Xe}from"./InputNumber-4bf47d19.js";import{_ as Ye}from"./DynamicTags-2e21af58.js";import{_ as Ge}from"./Rate-cbda82da.js";import"./Suffix-803205d7.js";import"./use-locale-d405c6af.js";import"./Tag-d731c72f.js";import"./Add-a982debf.js";import"./context-4a3c1b0b.js";import"./Card-aaaa1b8c.js";import"./_createCompounder-6f148eed.js";const Je={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},Ze=a=>{const{primaryColor:v,opacityDisabled:w,borderRadius:p,textColor3:g}=a,C="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Je),{iconColor:g,textColor:"white",loadingColor:v,opacityDisabled:w,railColor:C,railColorActive:v,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:p,railBorderRadiusMedium:p,railBorderRadiusLarge:p,buttonBorderRadiusSmall:p,buttonBorderRadiusMedium:p,buttonBorderRadiusLarge:p,boxShadowFocus:`0 0 0 2px ${ye(v,{alpha:.2})}`})},et={name:"Switch",common:we,self:Ze},tt=et,nt=se("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[c("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),c("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),c("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),se("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[re({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),c("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),c("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),c("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),te("&:focus",[c("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),x("round",[c("rail","border-radius: calc(var(--n-rail-height) / 2);",[c("button","border-radius: calc(var(--n-button-height) / 2);")])]),de("disabled",[de("icon",[x("rubber-band",[x("pressed",[c("rail",[c("button","max-width: var(--n-button-width-pressed);")])]),c("rail",[te("&:active",[c("button","max-width: var(--n-button-width-pressed);")])]),x("active",[x("pressed",[c("rail",[c("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),c("rail",[te("&:active",[c("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),x("active",[c("rail",[c("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),c("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[c("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[re()]),c("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),x("active",[c("rail","background-color: var(--n-rail-color-active);")]),x("loading",[c("rail",`
 cursor: wait;
 `)]),x("disabled",[c("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),at=Object.assign(Object.assign({},pe.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let A;const ot=fe({name:"Switch",props:at,setup(a){A===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?A=CSS.supports("width","max(1px)"):A=!1:A=!0);const{mergedClsPrefixRef:v,inlineThemeDisabled:w}=xe(a),p=pe("Switch","-switch",nt,tt,a,v),g=ke(a),{mergedSizeRef:C,mergedDisabledRef:u}=g,e=N(a.defaultValue),M=Te(a,"value"),y=Ce(M,e),z=E(()=>y.value===a.checkedValue),S=N(!1),t=N(!1),n=E(()=>{const{railStyle:d}=a;if(d)return d({focused:t.value,checked:z.value})});function s(d){const{"onUpdate:value":B,onChange:F,onUpdateValue:T}=a,{nTriggerFormInput:U,nTriggerFormChange:W}=g;B&&ae(B,d),T&&ae(T,d),F&&ae(F,d),e.value=d,U(),W()}function r(){const{nTriggerFormFocus:d}=g;d()}function K(){const{nTriggerFormBlur:d}=g;d()}function O(){a.loading||u.value||(y.value!==a.checkedValue?s(a.checkedValue):s(a.uncheckedValue))}function I(){t.value=!0,r()}function P(){t.value=!1,K(),S.value=!1}function q(d){a.loading||u.value||d.key===" "&&(y.value!==a.checkedValue?s(a.checkedValue):s(a.uncheckedValue),S.value=!1)}function Q(d){a.loading||u.value||d.key===" "&&(d.preventDefault(),S.value=!0)}const f=E(()=>{const{value:d}=C,{self:{opacityDisabled:B,railColor:F,railColorActive:T,buttonBoxShadow:U,buttonColor:W,boxShadowFocus:X,loadingColor:Y,textColor:i,iconColor:G,[L("buttonHeight",d)]:b,[L("buttonWidth",d)]:me,[L("buttonWidthPressed",d)]:ge,[L("railHeight",d)]:$,[L("railWidth",d)]:j,[L("railBorderRadius",d)]:_e,[L("buttonBorderRadius",d)]:ve},common:{cubicBezierEaseInOut:be}}=p.value;let J,Z,ee;return A?(J=`calc((${$} - ${b}) / 2)`,Z=`max(${$}, ${b})`,ee=`max(${j}, calc(${j} + ${b} - ${$}))`):(J=le((k($)-k(b))/2),Z=le(Math.max(k($),k(b))),ee=k($)>k(b)?j:le(k(j)+k(b)-k($))),{"--n-bezier":be,"--n-button-border-radius":ve,"--n-button-box-shadow":U,"--n-button-color":W,"--n-button-width":me,"--n-button-width-pressed":ge,"--n-button-height":b,"--n-height":Z,"--n-offset":J,"--n-opacity-disabled":B,"--n-rail-border-radius":_e,"--n-rail-color":F,"--n-rail-color-active":T,"--n-rail-height":$,"--n-rail-width":j,"--n-width":ee,"--n-box-shadow-focus":X,"--n-loading-color":Y,"--n-text-color":i,"--n-icon-color":G}}),_=w?Se("switch",E(()=>C.value[0]),f,a):void 0;return{handleClick:O,handleBlur:P,handleFocus:I,handleKeyup:q,handleKeydown:Q,mergedRailStyle:n,pressed:S,mergedClsPrefix:v,mergedValue:y,checked:z,mergedDisabled:u,cssVars:w?void 0:f,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const{mergedClsPrefix:a,mergedDisabled:v,checked:w,mergedRailStyle:p,onRender:g,$slots:C}=this;g==null||g();const{checked:u,unchecked:e,icon:M,"checked-icon":y,"unchecked-icon":z}=C,S=!(ne(M)&&ne(y)&&ne(z));return m("div",{role:"switch","aria-checked":w,class:[`${a}-switch`,this.themeClass,S&&`${a}-switch--icon`,w&&`${a}-switch--active`,v&&`${a}-switch--disabled`,this.round&&`${a}-switch--round`,this.loading&&`${a}-switch--loading`,this.pressed&&`${a}-switch--pressed`,this.rubberBand&&`${a}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},m("div",{class:`${a}-switch__rail`,"aria-hidden":"true",style:p},R(u,t=>R(e,n=>t||n?m("div",{"aria-hidden":!0,class:`${a}-switch__children-placeholder`},m("div",{class:`${a}-switch__rail-placeholder`},m("div",{class:`${a}-switch__button-placeholder`}),t),m("div",{class:`${a}-switch__rail-placeholder`},m("div",{class:`${a}-switch__button-placeholder`}),n)):null)),m("div",{class:`${a}-switch__button`},R(M,t=>R(y,n=>R(z,s=>m($e,null,{default:()=>this.loading?m(ze,{key:"loading",clsPrefix:a,strokeWidth:20}):this.checked&&(n||t)?m("div",{class:`${a}-switch__button-icon`,key:n?"checked-icon":"icon"},n||t):!this.checked&&(s||t)?m("div",{class:`${a}-switch__button-icon`,key:s?"unchecked-icon":"icon"},s||t):null})))),R(u,t=>t&&m("div",{key:"checked",class:`${a}-switch__checked`},t)),R(e,t=>t&&m("div",{key:"unchecked",class:`${a}-switch__unchecked`},t)))))}}),it={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},lt=h("g",{fill:"none"},[h("path",{d:"M3 4.5A2.5 2.5 0 0 1 5.5 2H17a2.5 2.5 0 0 1 2.5 2.5v6.813a6.475 6.475 0 0 0-1.5-.294V4.5a1 1 0 0 0-1-1H5.5a1 1 0 0 0-1 1V18h6.519c.04.52.14 1.022.294 1.5H4.5a1 1 0 0 0 1 1h6.232A6.518 6.518 0 0 0 12.81 22H5.5A2.5 2.5 0 0 1 3 19.5v-15zM17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm.501 8.503V18h2.502a.5.5 0 1 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1h2.505v2.503a.5.5 0 1 0 1 0zM6 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6zm1.5 1.5h7v-1h-7v1z",fill:"currentColor"})],-1),st=[lt],rt=fe({name:"BookAdd24Regular",render:function(v,w){return D(),H("svg",it,st)}});const dt={id:"ModulesView"},ut={class:"h1",textcenter:""},ct=h("thead",null,[h("tr",null,[h("th",{style:{"text-align":"center"}},"圖片"),h("th",{style:{"text-align":"center"}},"名稱"),h("th",{style:{"text-align":"center"}},"公開狀態"),h("th",{style:{"text-align":"center"}},"管理")])],-1),ht={style:{width:"35%"}},pt={style:{width:"40%","font-size":"25px"}},ft={style:{width:"15%"}},mt={style:{width:"10%"}},gt={key:0,style:{"text-align":"center",width:"100%"}},_t={key:1,style:{"text-align":"center",width:"100%","font-size":"2vw"}},vt=h("div",{style:{"margin-left":"-50px","padding-right":"60px"}}," 小時 ",-1),bt=h("div",{style:{"margin-left":"-50px","padding-right":"60px"}}," 人 ",-1),wt={class:"tags-wrapper",style:{background:"#DDA49244","border-radius":"8px",padding:"4%","margin-top":"-1px"}},yt={style:{display:"flex","justify-content":"flex"}},xt={style:{display:"flex","justify-content":"flex"}},Ot={__name:"ModulesView",setup(a){const v=Ae(),w=N("medium"),p=N([]),g=[{label:"按公開狀態排",value:"song0",disabled:!0},{label:"按難易度排序",value:"song1"},{label:"備團中",value:"song2"},{label:"翻譯中",value:"song2"}],C=t=>{console.log(t.fileList);let n=[],s=[];n=t.fileList.map(r=>r.url).filter(r=>r!==null),s=t.fileList.map(r=>r.file).filter(r=>r!==null),e.image=[...n,...s]},u=ce([]),e=ce({_id:"",name:"",gm:"",living:!1,image:[],minTime:.5,pl:1,difficulty:.5,hashtag:["19世紀","復活本"],info:"",notice:"",ccfoliaLink:"",discordLink:"",loading:!1,showModal:!1,idx:-1}),M={name:[{required:!0,validator(t,n){if(!n)return new Error("模組名稱必填")},trigger:["input","blur"]}],hashtag:{type:"array",trigger:["change"],validator(t,n){return n.length>=4?new Error("標籤不能超過 3 個"):!0}}},y=t=>{t===-1?(e._id="",e.name="",e.living=!1,e.image=[],e.minTime=.5,e.pl=1,e.difficulty=.5,e.hashtag=[],e.info="",e.notice="",e.ccfoliaLink="",e.discordLink="",e.loading=!1,e.idx=-1,p.value.length=0):(p.value.length=0,e._id=u[t]._id,e.name=u[t].name,e.gm=u[t].gm,e.living=u[t].living,e.image=u[t].image,e.minTime=u[t].minTime,e.pl=u[t].pl,e.difficulty=u[t].difficulty,e.hashtag=u[t].hashtag,e.info=u[t].info,e.notice=u[t].notice,e.ccfoliaLink=u[t].ccfoliaLink,e.discordLink=u[t].discordLink,p.value.push(...e.image.map((n,s)=>({id:s.toString(),name:s.toString(),status:"finished",url:n}))),e.loading=!1,e.idx=t),e.showModal=!0},z=async()=>{var n,s;e.loading=!0;const t=new FormData;t.append("name",e.name),t.append("gm",e.gm),t.append("living",e.living),e.image.length>=1&&e.image.forEach(r=>{t.append("image",r)}),t.append("minTime",e.minTime),t.append("pl",e.pl),t.append("difficulty",e.difficulty);for(const r of e.hashtag)t.append("hashtag",r);t.append("info",e.info),t.append("notice",e.notice),t.append("ccfoliaLink",e.ccfoliaLink),t.append("discordLink",e.discordLink);try{if(e._id.length===0){const{data:r}=await oe.post("/modules",t);u.push(r.result),ie.fire({icon:"success",title:"成功",text:"模組新增成功"})}else{const{data:r}=await oe.patch("/modules/"+e._id,t);u[e.idx]=r.result,ie.fire({icon:"success",title:"成功",text:"編輯成功"})}e.showModal=!1}catch(r){ie.fire({icon:"error",title:"失敗",text:((s=(n=r==null?void 0:r.response)==null?void 0:n.data)==null?void 0:s.message)||"發生錯誤"})}e.loading=!1};(async()=>{var t,n;try{const{data:s}=await oe.get("/modules/gm");u.push(...s.result)}catch(s){v.error(((n=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:n.message)||"發生錯誤")}})();function S(t){console.log(e),z()}return(t,n)=>{const s=Re,r=Le,K=Fe,O=Me,I=Ee,P=ot,q=Be,Q=Ne,f=Ke,_=Oe,d=We,B=Xe,F=Ye,T=Ge,U=Ie,W=qe,X=Qe,Y=Pe;return D(),H("div",dt,[h("div",ut,[o(s,{dashed:"",style:{"font-size":"3vw",color:"rgb(240,162,23)"}},{default:l(()=>[V(" 模組管理 ")]),_:1})]),o(r,{color:"#5d8585",rounded:"",style:{position:"absolute",top:"18%",right:"10%",padding:"1.5%"},onClick:n[0]||(n[0]=i=>y(-1))},{icon:l(()=>[o(he(rt),{style:{"font-size":"24px"}})]),default:l(()=>[V(" 新增模組 ")]),_:1}),o(O,{vertical:""},{default:l(()=>[o(K,{value:t.value,"onUpdate:value":n[1]||(n[1]=i=>t.value=i),options:g,style:{width:"20%","margin-left":"70%","margin-top":"5%"}},null,8,["value"])]),_:1}),o(Q,{id:"moduleTable","single-line":!1,striped:"",style:{"margin-top":"5%","margin-bottom":"10%"}},{default:l(()=>[ct,h("tbody",null,[(D(!0),H(Ue,null,De(u,(i,G)=>(D(),H("tr",{key:i._id,style:{"text-align":"center"}},[h("td",ht,[o(I,{src:i.image[0],width:200},null,8,["src"])]),h("td",pt,He(i.name),1),h("td",ft,[o(P,{value:i.living,"onUpdate:value":b=>i.living=b},null,8,["value","onUpdate:value"])]),h("td",mt,[o(r,{strong:"",secondary:"",circle:"",type:"error",onClick:b=>y(G)},{icon:l(()=>[o(q,null,{default:l(()=>[o(he(je))]),_:1})]),_:2},1032,["onClick"])])]))),128))])]),_:1}),o(Y,{show:e.showModal,"onUpdate:show":n[15]||(n[15]=i=>e.showModal=i),"trap-focus":!1,"mask-closable":!1},{default:l(()=>[o(X,{model:e,rules:M,size:w.value,"label-placement":"top",style:{"background-color":"#F8E9DD","border-radius":"15px",padding:"2%"},onSubmit:ue(S,["prevent"])},{default:l(()=>[o(W,{cols:"6 l:12","item-responsive":"",responsive:"screen","x-gap":"30"},{default:l(()=>[o(f,{span:"12"},{default:l(()=>[o(s,{"title-placement":"left",style:{"--n-color":"#5d8585","--n-text-color":"#5d8585",margin:"-8vh 0 -10vh 0"}},{default:l(()=>[e._id.length>0?(D(),H("h2",gt,"編 輯 模 組")):(D(),H("h2",_t,"新 增 模 組"))]),_:1})]),_:1}),o(f,{span:"12",path:"living"},{default:l(()=>[o(P,{value:e.living,"onUpdate:value":n[2]||(n[2]=i=>e.living=i),size:"large",style:{position:"absolute",right:"0"}},{checked:l(()=>[V(" 公開 ")]),unchecked:l(()=>[V(" 隱藏 ")]),_:1},8,["value"])]),_:1}),o(f,{span:"xs:9 m:6 l:6",label:"模組名稱",path:"name"},{default:l(()=>[o(_,{value:e.name,"onUpdate:value":n[3]||(n[3]=i=>e.name=i),placeholder:"",type:"text"},null,8,["value"])]),_:1}),o(f,{span:"xs:9 m:6 l:6",label:"模組圖片",path:"image"},{default:l(()=>[o(d,{value:e.image,"onUpdate:value":n[4]||(n[4]=i=>e.image=i),"list-type":"image-card",multiple:"",accept:".jpg,.jpeg,.png,.gif,.bmp,.tiff,.svg,.webp","default-file-list":p.value,onChange:C},{default:l(()=>[V(" 新增圖片 ")]),_:1},8,["value","default-file-list"])]),_:1}),o(f,{span:"xs:6 m:3 l:3",label:"預估時長 (以最短時間計算)",path:"minTime"},{default:l(()=>[o(B,{value:e.minTime,"onUpdate:value":n[5]||(n[5]=i=>e.minTime=i),"default-value":1,clearable:""},{suffix:l(()=>[vt]),_:1},8,["value"])]),_:1}),o(f,{span:"xs:6 m:3 l:3",label:"PL 人數",path:"pl"},{default:l(()=>[o(B,{value:e.pl,"onUpdate:value":n[6]||(n[6]=i=>e.pl=i),"default-value":1,clearable:""},{suffix:l(()=>[bt]),_:1},8,["value"])]),_:1}),o(f,{span:"xs:6 m:3 l:3",label:"特色",path:"hashtag"},{default:l(()=>[h("div",wt,[o(F,{value:e.hashtag,"onUpdate:value":n[7]||(n[7]=i=>e.hashtag=i),type:"primary",round:"","input-style":"warning"},null,8,["value"])])]),_:1}),o(f,{span:"xs:6 m:3 l:3",label:"難度",path:"difficulty"},{default:l(()=>[o(T,{value:e.difficulty,"onUpdate:value":n[8]||(n[8]=i=>e.difficulty=i),"default-value":.5,"allow-half":"",color:"#4fb233"},null,8,["value","default-value"])]),_:1}),o(f,{span:"xs:9 m:6 l:6",label:"模組說明",path:"info"},{default:l(()=>[o(_,{value:e.info,"onUpdate:value":n[9]||(n[9]=i=>e.info=i),placeholder:"建議這邊只放最簡單的模組介紹就好~",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["value"])]),_:1}),o(f,{span:"xs:9 m:6 l:6",label:"額外補充(注意事項)",path:"notice"},{default:l(()=>[o(_,{value:e.notice,"onUpdate:value":n[10]||(n[10]=i=>e.notice=i),placeholder:"有關 HO情報、公開情報、紙娃娃素材...等，是放在這區喔 :))",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["value"])]),_:1}),o(f,{span:"xs:9 m:6 l:6",label:"可可亞連結",path:"ccfoliaLink"},{default:l(()=>[o(_,{value:e.ccfoliaLink,"onUpdate:value":n[11]||(n[11]=i=>e.ccfoliaLink=i),placeholder:" ",style:{"background-color":"#F5BBA9"}},null,8,["value"])]),_:1}),o(f,{span:"xs:9 m:6 l:6",label:"Discord 連結",path:"discordLink"},{default:l(()=>[o(_,{value:e.discordLink,"onUpdate:value":n[12]||(n[12]=i=>e.discordLink=i),placeholder:" ",style:{"background-color":"#9D9FDD"}},null,8,["value"])]),_:1}),o(U,{span:"2"},{default:l(()=>[h("div",yt,[o(r,{type:"error",ghost:"",disabled:e.loading,round:"",size:"large",style:{width:"12vw",height:"3vw","font-size":"1.5vw"},onClick:n[13]||(n[13]=i=>e.showModal=!1)},{default:l(()=>[V(" 取    消 ")]),_:1},8,["disabled"])])]),_:1}),o(U,{span:"2"},{default:l(()=>[h("div",xt,[o(r,{disabled:e.loading,round:"",type:"primary",size:"large",style:{width:"12vw",height:"3vw","font-size":"1.5vw"},"attr-type":"submit",onKeydown:n[14]||(n[14]=Ve(ue(()=>{},["prevent"]),["enter"]))},{default:l(()=>[V(" 存    檔 ")]),_:1},8,["disabled"])])]),_:1})]),_:1})]),_:1},8,["model","size","onSubmit"])]),_:1},8,["show"])])}}};export{Ot as default};
