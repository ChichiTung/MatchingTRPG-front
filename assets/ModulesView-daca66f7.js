import{C as we,aw as ye,D as se,a4 as c,ax as re,E as te,G as x,ay as de,H as pe,I as xe,J as fe,az as ke,r as E,a6 as Se,a5 as Ce,K as N,L as $e,aA as ne,v as g,av as R,M as L,aB as ae,aC as k,aD as ze,aE as Be,aF as oe,o as D,j as H,d as h,e as ue,P as ie,k as o,w as l,U as Re,x as Le,S as Ve,t as V,u as ce,F as Me,l as Fe,Q as Ue,B as he,A as Te,ao as De,aq as le}from"./index-dd25a306.js";import{_ as He}from"./Space-3ed4c2f2.js";import{E as We}from"./Edit-808f371e.js";import{_ as Ae}from"./Select-c7082f8e.js";import{_ as je}from"./Upload-61afbca4.js";import{u as Ee}from"./use-message-bb736759.js";import{_ as Pe}from"./Table-00799db3.js";import{_ as Ne}from"./Image-5b9e2c77.js";import{b as Ke,a as Ie,c as Oe,d as qe,_ as Xe}from"./Grid-b946789c.js";import{_ as Ye}from"./InputNumber-7df99c70.js";import{_ as Ge}from"./DynamicTags-04ea8d50.js";import{_ as Je}from"./Rate-59e66635.js";import"./Suffix-70351a49.js";import"./use-locale-bc572da0.js";import"./Add-a4912684.js";import"./_createCompounder-b9cc44ef.js";const Qe={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},Ze=a=>{const{primaryColor:_,opacityDisabled:w,borderRadius:p,textColor3:m}=a,S="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Qe),{iconColor:m,textColor:"white",loadingColor:_,opacityDisabled:w,railColor:S,railColorActive:_,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:p,railBorderRadiusMedium:p,railBorderRadiusLarge:p,buttonBorderRadiusSmall:p,buttonBorderRadiusMedium:p,buttonBorderRadiusLarge:p,boxShadowFocus:`0 0 0 2px ${ye(_,{alpha:.2})}`})},et={name:"Switch",common:we,self:Ze},tt=et,nt=se("switch",`
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
 `)])]),at=Object.assign(Object.assign({},fe.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let j;const ot=pe({name:"Switch",props:at,setup(a){j===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?j=CSS.supports("width","max(1px)"):j=!1:j=!0);const{mergedClsPrefixRef:_,inlineThemeDisabled:w}=xe(a),p=fe("Switch","-switch",nt,tt,a,_),m=ke(a),{mergedSizeRef:S,mergedDisabledRef:u}=m,e=E(a.defaultValue),M=Se(a,"value"),y=Ce(M,e),z=N(()=>y.value===a.checkedValue),C=E(!1),t=E(!1),n=N(()=>{const{railStyle:d}=a;if(d)return d({focused:t.value,checked:z.value})});function s(d){const{"onUpdate:value":B,onChange:F,onUpdateValue:U}=a,{nTriggerFormInput:T,nTriggerFormChange:W}=m;B&&oe(B,d),U&&oe(U,d),F&&oe(F,d),e.value=d,T(),W()}function r(){const{nTriggerFormFocus:d}=m;d()}function K(){const{nTriggerFormBlur:d}=m;d()}function I(){a.loading||u.value||(y.value!==a.checkedValue?s(a.checkedValue):s(a.uncheckedValue))}function O(){t.value=!0,r()}function P(){t.value=!1,K(),C.value=!1}function q(d){a.loading||u.value||d.key===" "&&(y.value!==a.checkedValue?s(a.checkedValue):s(a.uncheckedValue),C.value=!1)}function X(d){a.loading||u.value||d.key===" "&&(d.preventDefault(),C.value=!0)}const f=N(()=>{const{value:d}=S,{self:{opacityDisabled:B,railColor:F,railColorActive:U,buttonBoxShadow:T,buttonColor:W,boxShadowFocus:Y,loadingColor:G,textColor:i,iconColor:J,[L("buttonHeight",d)]:b,[L("buttonWidth",d)]:ge,[L("buttonWidthPressed",d)]:me,[L("railHeight",d)]:$,[L("railWidth",d)]:A,[L("railBorderRadius",d)]:ve,[L("buttonBorderRadius",d)]:_e},common:{cubicBezierEaseInOut:be}}=p.value;let Q,Z,ee;return j?(Q=`calc((${$} - ${b}) / 2)`,Z=`max(${$}, ${b})`,ee=`max(${A}, calc(${A} + ${b} - ${$}))`):(Q=ae((k($)-k(b))/2),Z=ae(Math.max(k($),k(b))),ee=k($)>k(b)?A:ae(k(A)+k(b)-k($))),{"--n-bezier":be,"--n-button-border-radius":_e,"--n-button-box-shadow":T,"--n-button-color":W,"--n-button-width":ge,"--n-button-width-pressed":me,"--n-button-height":b,"--n-height":Z,"--n-offset":Q,"--n-opacity-disabled":B,"--n-rail-border-radius":ve,"--n-rail-color":F,"--n-rail-color-active":U,"--n-rail-height":$,"--n-rail-width":A,"--n-width":ee,"--n-box-shadow-focus":Y,"--n-loading-color":G,"--n-text-color":i,"--n-icon-color":J}}),v=w?$e("switch",N(()=>S.value[0]),f,a):void 0;return{handleClick:I,handleBlur:P,handleFocus:O,handleKeyup:q,handleKeydown:X,mergedRailStyle:n,pressed:C,mergedClsPrefix:_,mergedValue:y,checked:z,mergedDisabled:u,cssVars:w?void 0:f,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{mergedClsPrefix:a,mergedDisabled:_,checked:w,mergedRailStyle:p,onRender:m,$slots:S}=this;m==null||m();const{checked:u,unchecked:e,icon:M,"checked-icon":y,"unchecked-icon":z}=S,C=!(ne(M)&&ne(y)&&ne(z));return g("div",{role:"switch","aria-checked":w,class:[`${a}-switch`,this.themeClass,C&&`${a}-switch--icon`,w&&`${a}-switch--active`,_&&`${a}-switch--disabled`,this.round&&`${a}-switch--round`,this.loading&&`${a}-switch--loading`,this.pressed&&`${a}-switch--pressed`,this.rubberBand&&`${a}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},g("div",{class:`${a}-switch__rail`,"aria-hidden":"true",style:p},R(u,t=>R(e,n=>t||n?g("div",{"aria-hidden":!0,class:`${a}-switch__children-placeholder`},g("div",{class:`${a}-switch__rail-placeholder`},g("div",{class:`${a}-switch__button-placeholder`}),t),g("div",{class:`${a}-switch__rail-placeholder`},g("div",{class:`${a}-switch__button-placeholder`}),n)):null)),g("div",{class:`${a}-switch__button`},R(M,t=>R(y,n=>R(z,s=>g(ze,null,{default:()=>this.loading?g(Be,{key:"loading",clsPrefix:a,strokeWidth:20}):this.checked&&(n||t)?g("div",{class:`${a}-switch__button-icon`,key:n?"checked-icon":"icon"},n||t):!this.checked&&(s||t)?g("div",{class:`${a}-switch__button-icon`,key:s?"unchecked-icon":"icon"},s||t):null})))),R(u,t=>t&&g("div",{key:"checked",class:`${a}-switch__checked`},t)),R(e,t=>t&&g("div",{key:"unchecked",class:`${a}-switch__unchecked`},t)))))}}),it={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},lt=h("g",{fill:"none"},[h("path",{d:"M3 4.5A2.5 2.5 0 0 1 5.5 2H17a2.5 2.5 0 0 1 2.5 2.5v6.813a6.475 6.475 0 0 0-1.5-.294V4.5a1 1 0 0 0-1-1H5.5a1 1 0 0 0-1 1V18h6.519c.04.52.14 1.022.294 1.5H4.5a1 1 0 0 0 1 1h6.232A6.518 6.518 0 0 0 12.81 22H5.5A2.5 2.5 0 0 1 3 19.5v-15zM17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm.501 8.503V18h2.502a.5.5 0 1 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1h2.505v2.503a.5.5 0 1 0 1 0zM6 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6zm1.5 1.5h7v-1h-7v1z",fill:"currentColor"})],-1),st=[lt],rt=pe({name:"BookAdd24Regular",render:function(_,w){return D(),H("svg",it,st)}});const dt={id:"ModulesView"},ut={class:"h1",textcenter:""},ct=h("thead",null,[h("tr",null,[h("th",{style:{"text-align":"center"}},"圖片"),h("th",{style:{"text-align":"center"}},"名稱"),h("th",{style:{"text-align":"center"}},"公開狀態"),h("th",{style:{"text-align":"center"}},"管理")])],-1),ht={style:{width:"35%"}},pt={style:{width:"40%","font-size":"25px"}},ft={style:{width:"15%"}},gt={style:{width:"10%"}},mt={key:0,style:{"text-align":"center",width:"100%"}},vt={key:1,style:{"text-align":"center",width:"100%","font-size":"2vw"}},_t=h("div",{style:{"margin-left":"-50px","padding-right":"60px"}}," 小時 ",-1),bt=h("div",{style:{"margin-left":"-50px","padding-right":"60px"}}," 人 ",-1),wt={class:"tags-wrapper",style:{background:"#DDA49244","border-radius":"8px",padding:"4%","margin-top":"-1px"}},yt={style:{display:"flex","justify-content":"flex"}},xt={style:{display:"flex","justify-content":"flex"}},At={__name:"ModulesView",setup(a){const _=Ee(),w=E("medium"),p=E([]),m=[{label:"按公開狀態排",value:"song0",disabled:!0},{label:"按難易度排序",value:"song1"},{label:"備團中",value:"song2"},{label:"翻譯中",value:"song2"}],S=t=>{console.log(t.fileList);let n=[],s=[];n=t.fileList.map(r=>r.url).filter(r=>r!==null),s=t.fileList.map(r=>r.file).filter(r=>r!==null),e.image=[...n,...s]},u=ue([]),e=ue({_id:"",name:"",gm:"",living:!1,image:[],minTime:.5,pl:1,difficulty:.5,hashtag:["19世紀","復活本"],info:"",notice:"",ccfoliaLink:"",discordLink:"",loading:!1,showModal:!1,idx:-1}),M={name:[{required:!0,validator(t,n){if(!n)return new Error("模組名稱必填")},trigger:["input","blur"]}],hashtag:{type:"array",trigger:["change"],validator(t,n){return n.length>=4?new Error("標籤不能超過 3 個"):!0}}},y=t=>{t===-1?(e._id="",e.name="",e.living=!1,e.image=[],e.minTime=.5,e.pl=1,e.difficulty=.5,e.hashtag=[],e.info="",e.notice="",e.ccfoliaLink="",e.discordLink="",e.loading=!1,e.idx=-1,p.value.length=0):(p.value.length=0,e._id=u[t]._id,e.name=u[t].name,e.gm=u[t].gm,e.living=u[t].living,e.image=u[t].image,e.minTime=u[t].minTime,e.pl=u[t].pl,e.difficulty=u[t].difficulty,e.hashtag=u[t].hashtag,e.info=u[t].info,e.notice=u[t].notice,e.ccfoliaLink=u[t].ccfoliaLink,e.discordLink=u[t].discordLink,p.value.push(...e.image.map((n,s)=>({id:s.toString(),name:s.toString(),status:"finished",url:n}))),e.loading=!1,e.idx=t),e.showModal=!0},z=async()=>{var n,s;e.loading=!0;const t=new FormData;t.append("name",e.name),t.append("gm",e.gm),t.append("living",e.living),e.image.length>=1&&e.image.forEach(r=>{t.append("image",r)}),t.append("minTime",e.minTime),t.append("pl",e.pl),t.append("difficulty",e.difficulty);for(const r of e.hashtag)t.append("hashtag",r);t.append("info",e.info),t.append("notice",e.notice),t.append("ccfoliaLink",e.ccfoliaLink),t.append("discordLink",e.discordLink);try{if(e._id.length===0){const{data:r}=await ie.post("/modules",t);u.push(r.result),le.fire({icon:"success",title:"成功",text:"模組新增成功"})}else{const{data:r}=await ie.patch("/modules/"+e._id,t);u[e.idx]=r.result,le.fire({icon:"success",title:"成功",text:"編輯成功"})}e.showModal=!1}catch(r){le.fire({icon:"error",title:"失敗",text:((s=(n=r==null?void 0:r.response)==null?void 0:n.data)==null?void 0:s.message)||"發生錯誤"})}e.loading=!1};(async()=>{var t,n;try{const{data:s}=await ie.get("/modules/gm");u.push(...s.result)}catch(s){_.error(((n=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:n.message)||"發生錯誤")}})();function C(t){console.log(e),z()}return(t,n)=>{const s=Re,r=Le,K=Ae,I=He,O=Ne,P=ot,q=De,X=Pe,f=Ke,v=Ie,d=je,B=Ye,F=Ge,U=Je,T=Oe,W=qe,Y=Xe,G=Ve;return D(),H("div",dt,[h("div",ut,[o(s,{dashed:"",style:{"font-size":"3vw",color:"rgb(240,162,23)"}},{default:l(()=>[V(" 模組管理 ")]),_:1})]),o(r,{color:"#5d8585",rounded:"",style:{position:"absolute",top:"18%",right:"10%",padding:"1.5%"},onClick:n[0]||(n[0]=i=>y(-1))},{icon:l(()=>[o(ce(rt),{style:{"font-size":"24px"}})]),default:l(()=>[V(" 新增模組 ")]),_:1}),o(I,{vertical:""},{default:l(()=>[o(K,{value:t.value,"onUpdate:value":n[1]||(n[1]=i=>t.value=i),options:m,style:{width:"20%","margin-left":"70%","margin-top":"5%"}},null,8,["value"])]),_:1}),o(X,{id:"moduleTable","single-line":!1,striped:"",style:{"margin-top":"5%","margin-bottom":"10%"}},{default:l(()=>[ct,h("tbody",null,[(D(!0),H(Me,null,Fe(u,(i,J)=>(D(),H("tr",{key:i._id,style:{"text-align":"center"}},[h("td",ht,[o(O,{src:i.image[0],width:200},null,8,["src"])]),h("td",pt,Ue(i.name),1),h("td",ft,[o(P,{value:i.living,"onUpdate:value":b=>i.living=b},null,8,["value","onUpdate:value"])]),h("td",gt,[o(r,{strong:"",secondary:"",circle:"",type:"error",onClick:b=>y(J)},{icon:l(()=>[o(q,null,{default:l(()=>[o(ce(We))]),_:1})]),_:2},1032,["onClick"])])]))),128))])]),_:1}),o(G,{show:e.showModal,"onUpdate:show":n[15]||(n[15]=i=>e.showModal=i),"trap-focus":!1,"mask-closable":!1},{default:l(()=>[o(Y,{model:e,rules:M,size:w.value,"label-placement":"top",style:{"background-color":"#F8E9DD","border-radius":"15px",padding:"2%"},onSubmit:he(C,["prevent"])},{default:l(()=>[o(W,{cols:"6 l:12","item-responsive":"",responsive:"screen","x-gap":"30"},{default:l(()=>[o(f,{span:"12"},{default:l(()=>[o(s,{"title-placement":"left",style:{"--n-color":"#5d8585","--n-text-color":"#5d8585",margin:"-8vh 0 -10vh 0"}},{default:l(()=>[e._id.length>0?(D(),H("h2",mt,"編 輯 模 組")):(D(),H("h2",vt,"新 增 模 組"))]),_:1})]),_:1}),o(f,{span:"12",path:"living"},{default:l(()=>[o(P,{value:e.living,"onUpdate:value":n[2]||(n[2]=i=>e.living=i),size:"large",style:{position:"absolute",right:"0"}},{checked:l(()=>[V(" 公開 ")]),unchecked:l(()=>[V(" 隱藏 ")]),_:1},8,["value"])]),_:1}),o(f,{span:"xs:9 m:6 l:6",label:"模組名稱",path:"name"},{default:l(()=>[o(v,{value:e.name,"onUpdate:value":n[3]||(n[3]=i=>e.name=i),placeholder:"",type:"text"},null,8,["value"])]),_:1}),o(f,{span:"xs:9 m:6 l:6",label:"模組圖片",path:"image"},{default:l(()=>[o(d,{value:e.image,"onUpdate:value":n[4]||(n[4]=i=>e.image=i),"list-type":"image-card",multiple:"",accept:".jpg,.jpeg,.png,.gif,.bmp,.tiff,.svg,.webp","default-file-list":p.value,onChange:S},{default:l(()=>[V(" 新增圖片 ")]),_:1},8,["value","default-file-list"])]),_:1}),o(f,{span:"xs:6 m:3 l:3",label:"預估時長 (以最短時間計算)",path:"minTime"},{default:l(()=>[o(B,{value:e.minTime,"onUpdate:value":n[5]||(n[5]=i=>e.minTime=i),"default-value":1,clearable:""},{suffix:l(()=>[_t]),_:1},8,["value"])]),_:1}),o(f,{span:"xs:6 m:3 l:3",label:"PL 人數",path:"pl"},{default:l(()=>[o(B,{value:e.pl,"onUpdate:value":n[6]||(n[6]=i=>e.pl=i),"default-value":1,clearable:""},{suffix:l(()=>[bt]),_:1},8,["value"])]),_:1}),o(f,{span:"xs:6 m:3 l:3",label:"特色",path:"hashtag"},{default:l(()=>[h("div",wt,[o(F,{value:e.hashtag,"onUpdate:value":n[7]||(n[7]=i=>e.hashtag=i),type:"primary",round:"","input-style":"warning"},null,8,["value"])])]),_:1}),o(f,{span:"xs:6 m:3 l:3",label:"難度",path:"difficulty"},{default:l(()=>[o(U,{value:e.difficulty,"onUpdate:value":n[8]||(n[8]=i=>e.difficulty=i),"default-value":.5,"allow-half":"",color:"#4fb233"},null,8,["value","default-value"])]),_:1}),o(f,{span:"xs:9 m:6 l:6",label:"模組說明",path:"info"},{default:l(()=>[o(v,{value:e.info,"onUpdate:value":n[9]||(n[9]=i=>e.info=i),placeholder:"建議這邊只放最簡單的模組介紹就好~",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["value"])]),_:1}),o(f,{span:"xs:9 m:6 l:6",label:"額外補充(注意事項)",path:"notice"},{default:l(()=>[o(v,{value:e.notice,"onUpdate:value":n[10]||(n[10]=i=>e.notice=i),placeholder:"有關 HO情報、公開情報、紙娃娃素材...等，是放在這區喔 :))",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["value"])]),_:1}),o(f,{span:"xs:9 m:6 l:6",label:"可可亞連結",path:"ccfoliaLink"},{default:l(()=>[o(v,{value:e.ccfoliaLink,"onUpdate:value":n[11]||(n[11]=i=>e.ccfoliaLink=i),placeholder:" ",style:{"background-color":"#F5BBA9"}},null,8,["value"])]),_:1}),o(f,{span:"xs:9 m:6 l:6",label:"Discord 連結",path:"discordLink"},{default:l(()=>[o(v,{value:e.discordLink,"onUpdate:value":n[12]||(n[12]=i=>e.discordLink=i),placeholder:" ",style:{"background-color":"#9D9FDD"}},null,8,["value"])]),_:1}),o(T,{span:"2"},{default:l(()=>[h("div",yt,[o(r,{type:"error",ghost:"",disabled:e.loading,round:"",size:"large",style:{width:"12vw",height:"3vw","font-size":"1.5vw"},onClick:n[13]||(n[13]=i=>e.showModal=!1)},{default:l(()=>[V(" 取    消 ")]),_:1},8,["disabled"])])]),_:1}),o(T,{span:"2"},{default:l(()=>[h("div",xt,[o(r,{disabled:e.loading,round:"",type:"primary",size:"large",style:{width:"12vw",height:"3vw","font-size":"1.5vw"},"attr-type":"submit",onKeydown:n[14]||(n[14]=Te(he(()=>{},["prevent"]),["enter"]))},{default:l(()=>[V(" 存    檔 ")]),_:1},8,["disabled"])])]),_:1})]),_:1})]),_:1},8,["model","size","onSubmit"])]),_:1},8,["show"])])}}};export{At as default};
