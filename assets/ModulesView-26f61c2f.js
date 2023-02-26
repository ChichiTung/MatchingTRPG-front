import{b as le,a2 as we,a1 as ye,d as L,N as xe,g as ke,P as Z,ac as ee,ad as Ce,A as Se,w as se,a9 as $e,aj as te}from"./router-c5eb6ba6.js";import{_ as ze}from"./Image-150839fc.js";import{a as Be,W as Re,d as re,i as u,h as ne,e as w,N as de,u as Le,f as he,g as Ve,R as ae,T as V,_ as Me}from"./Icon-a8619f5f.js";import{p as ie,d as y}from"./index-714b5119.js";import{d as oe,r as N,a0 as Fe,c as K,h as g,f as F,l as T,m as h,a as ue,k as i,j as s,W as M,a7 as ce,F as Te,ai as He,af as Ue}from"./runtime-core.esm-bundler-4adb0545.js";import{_ as We,a as De}from"./Upload-b253ef1f.js";import{u as je,b as Ae,a as Ne,c as Pe,d as Ee,_ as Ke}from"./use-message-1804c65d.js";import{_ as Oe}from"./Table-fd92a162.js";import{_ as Ie}from"./Modal-b331f9bb.js";import{_ as Xe}from"./InputNumber-8916e978.js";import{a as Ye}from"./Rate-6d516893.js";import"./plugin-vueexport-helper-c27b6911.js";import"./use-locale-b2887f78.js";import"./_createCompounder-dbed2684.js";import"./Add-22a87db6.js";import"./context-81bb04ff.js";import"./Card-035d3dec.js";const qe={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},Ge=a=>{const{primaryColor:m,opacityDisabled:v,borderRadius:p,textColor3:_}=a,c="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},qe),{iconColor:_,textColor:"white",loadingColor:m,opacityDisabled:v,railColor:c,railColorActive:m,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:p,railBorderRadiusMedium:p,railBorderRadiusLarge:p,buttonBorderRadiusSmall:p,buttonBorderRadiusMedium:p,buttonBorderRadiusLarge:p,boxShadowFocus:`0 0 0 2px ${Re(m,{alpha:.2})}`})},Je={name:"Switch",common:Be,self:Ge},Qe=Je,Ze=re("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[u("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),u("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),u("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),re("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[le({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),u("checked, unchecked",`
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
 `),u("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),u("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),ne("&:focus",[u("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),w("round",[u("rail","border-radius: calc(var(--n-rail-height) / 2);",[u("button","border-radius: calc(var(--n-button-height) / 2);")])]),de("disabled",[de("icon",[w("rubber-band",[w("pressed",[u("rail",[u("button","max-width: var(--n-button-width-pressed);")])]),u("rail",[ne("&:active",[u("button","max-width: var(--n-button-width-pressed);")])]),w("active",[w("pressed",[u("rail",[u("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),u("rail",[ne("&:active",[u("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),w("active",[u("rail",[u("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),u("rail",`
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
 `,[u("button-icon",`
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
 `,[le()]),u("button",`
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
 `)]),w("active",[u("rail","background-color: var(--n-rail-color-active);")]),w("loading",[u("rail",`
 cursor: wait;
 `)]),w("disabled",[u("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),et=Object.assign(Object.assign({},he.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let A;const tt=oe({name:"Switch",props:et,setup(a){A===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?A=CSS.supports("width","max(1px)"):A=!1:A=!0);const{mergedClsPrefixRef:m,inlineThemeDisabled:v}=Le(a),p=he("Switch","-switch",Ze,Qe,a,m),_=we(a),{mergedSizeRef:c,mergedDisabledRef:e}=_,S=N(a.defaultValue),$=Fe(a,"value"),b=ye($,S),z=K(()=>b.value===a.checkedValue),n=N(!1),t=N(!1),r=K(()=>{const{railStyle:d}=a;if(d)return d({focused:t.value,checked:z.value})});function l(d){const{"onUpdate:value":R,onChange:H,onUpdateValue:U}=a,{nTriggerFormInput:D,nTriggerFormChange:o}=_;R&&Z(R,d),U&&Z(U,d),H&&Z(H,d),S.value=d,D(),o()}function O(){const{nTriggerFormFocus:d}=_;d()}function P(){const{nTriggerFormBlur:d}=_;d()}function I(){a.loading||e.value||(b.value!==a.checkedValue?l(a.checkedValue):l(a.uncheckedValue))}function X(){t.value=!0,O()}function f(){t.value=!1,P(),n.value=!1}function B(d){a.loading||e.value||d.key===" "&&(b.value!==a.checkedValue?l(a.checkedValue):l(a.uncheckedValue),n.value=!1)}function Y(d){a.loading||e.value||d.key===" "&&(d.preventDefault(),n.value=!0)}const W=K(()=>{const{value:d}=c,{self:{opacityDisabled:R,railColor:H,railColorActive:U,buttonBoxShadow:D,buttonColor:o,boxShadowFocus:q,loadingColor:E,textColor:pe,iconColor:fe,[L("buttonHeight",d)]:k,[L("buttonWidth",d)]:ge,[L("buttonWidthPressed",d)]:me,[L("railHeight",d)]:C,[L("railWidth",d)]:j,[L("railBorderRadius",d)]:_e,[L("buttonBorderRadius",d)]:ve},common:{cubicBezierEaseInOut:be}}=p.value;let G,J,Q;return A?(G=`calc((${C} - ${k}) / 2)`,J=`max(${C}, ${k})`,Q=`max(${j}, calc(${j} + ${k} - ${C}))`):(G=ie((y(C)-y(k))/2),J=ie(Math.max(y(C),y(k))),Q=y(C)>y(k)?j:ie(y(j)+y(k)-y(C))),{"--n-bezier":be,"--n-button-border-radius":ve,"--n-button-box-shadow":D,"--n-button-color":o,"--n-button-width":ge,"--n-button-width-pressed":me,"--n-button-height":k,"--n-height":J,"--n-offset":G,"--n-opacity-disabled":R,"--n-rail-border-radius":_e,"--n-rail-color":H,"--n-rail-color-active":U,"--n-rail-height":C,"--n-rail-width":j,"--n-width":Q,"--n-box-shadow-focus":q,"--n-loading-color":E,"--n-text-color":pe,"--n-icon-color":fe}}),x=v?Ve("switch",K(()=>c.value[0]),W,a):void 0;return{handleClick:I,handleBlur:f,handleFocus:X,handleKeyup:B,handleKeydown:Y,mergedRailStyle:r,pressed:n,mergedClsPrefix:m,mergedValue:b,checked:z,mergedDisabled:e,cssVars:v?void 0:W,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:a,mergedDisabled:m,checked:v,mergedRailStyle:p,onRender:_,$slots:c}=this;_==null||_();const{checked:e,unchecked:S,icon:$,"checked-icon":b,"unchecked-icon":z}=c,n=!(ae($)&&ae(b)&&ae(z));return g("div",{role:"switch","aria-checked":v,class:[`${a}-switch`,this.themeClass,n&&`${a}-switch--icon`,v&&`${a}-switch--active`,m&&`${a}-switch--disabled`,this.round&&`${a}-switch--round`,this.loading&&`${a}-switch--loading`,this.pressed&&`${a}-switch--pressed`,this.rubberBand&&`${a}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},g("div",{class:`${a}-switch__rail`,"aria-hidden":"true",style:p},V(e,t=>V(S,r=>t||r?g("div",{"aria-hidden":!0,class:`${a}-switch__children-placeholder`},g("div",{class:`${a}-switch__rail-placeholder`},g("div",{class:`${a}-switch__button-placeholder`}),t),g("div",{class:`${a}-switch__rail-placeholder`},g("div",{class:`${a}-switch__button-placeholder`}),r)):null)),g("div",{class:`${a}-switch__button`},V($,t=>V(b,r=>V(z,l=>g(xe,null,{default:()=>this.loading?g(ke,{key:"loading",clsPrefix:a,strokeWidth:20}):this.checked&&(r||t)?g("div",{class:`${a}-switch__button-icon`,key:r?"checked-icon":"icon"},r||t):!this.checked&&(l||t)?g("div",{class:`${a}-switch__button-icon`,key:l?"unchecked-icon":"icon"},l||t):null})))),V(e,t=>t&&g("div",{key:"checked",class:`${a}-switch__checked`},t)),V(S,t=>t&&g("div",{key:"unchecked",class:`${a}-switch__unchecked`},t)))))}}),nt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},at=h("g",{fill:"none"},[h("path",{d:"M3 4.5A2.5 2.5 0 0 1 5.5 2H17a2.5 2.5 0 0 1 2.5 2.5v6.813a6.475 6.475 0 0 0-1.5-.294V4.5a1 1 0 0 0-1-1H5.5a1 1 0 0 0-1 1V18h6.519c.04.52.14 1.022.294 1.5H4.5a1 1 0 0 0 1 1h6.232A6.518 6.518 0 0 0 12.81 22H5.5A2.5 2.5 0 0 1 3 19.5v-15zM17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm.501 8.503V18h2.502a.5.5 0 1 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1h2.505v2.503a.5.5 0 1 0 1 0zM6 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6zm1.5 1.5h7v-1h-7v1z",fill:"currentColor"})],-1),it=[at],ot=oe({name:"BookAdd24Regular",render:function(m,v){return F(),T("svg",nt,it)}}),lt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},st=h("path",{d:"M2 26h28v2H2z",fill:"currentColor"},null,-1),rt=h("path",{d:"M25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z",fill:"currentColor"},null,-1),dt=[st,rt],ut=oe({name:"Edit",render:function(m,v){return F(),T("svg",lt,dt)}});const ct={id:"ModulesView"},ht={class:"h1",textcenter:""},pt=h("thead",null,[h("tr",null,[h("th",{style:{"text-align":"center"}},"圖片"),h("th",{style:{"text-align":"center"}},"名稱"),h("th",{style:{"text-align":"center"}},"公開狀態"),h("th",{style:{"text-align":"center"}},"管理")])],-1),ft={style:{width:"35%"}},gt={style:{width:"40%","font-size":"25px"}},mt={style:{width:"15%"}},_t={style:{width:"10%"}},vt={key:0,style:{"text-align":"center",width:"100%"}},bt={key:1,style:{"text-align":"center",width:"100%","font-size":"2vw"}},wt=h("div",{style:{"margin-left":"-50px","padding-right":"60px"}}," 小時 ",-1),yt=h("div",{style:{"margin-left":"-50px","padding-right":"60px"}}," 人 ",-1),xt={class:"tags-wrapper",style:{background:"#DDA49244","border-radius":"8px",padding:"4%","margin-top":"-1px"}},kt={style:{display:"flex","justify-content":"flex"}},Ct={style:{display:"flex","justify-content":"flex"}},Pt={__name:"ModulesView",setup(a){const m=je(),v=N("medium"),p=N([]),_=n=>{console.log(n.fileList);let t=[],r=[];t=n.fileList.map(l=>l.url).filter(l=>l!==null),r=n.fileList.map(l=>l.file).filter(l=>l!==null),e.image=[...t,...r]},c=ue([]),e=ue({_id:"",name:"",gm:"",living:!1,image:[],minTime:.5,pl:1,difficulty:.5,hashtag:["19世紀","復活本"],info:"",notice:"",ccfoliaLink:"",discordLink:"",loading:!1,showModal:!1,idx:-1}),S={name:[{required:!0,validator(n,t){if(!t)return new Error("模組名稱必填")},trigger:["input","blur"]}],hashtag:{type:"array",trigger:["change"],validator(n,t){return t.length>=4?new Error("標籤不能超過 3 個"):!0}}},$=n=>{n===-1?(e._id="",e.name="",e.living=!1,e.image=[],e.minTime=.5,e.pl=1,e.difficulty=.5,e.hashtag=[],e.info="",e.notice="",e.ccfoliaLink="",e.discordLink="",e.loading=!1,e.idx=-1,p.value.length=0):(p.value.length=0,e._id=c[n]._id,e.name=c[n].name,e.gm=c[n].gm,e.living=c[n].living,e.image=c[n].image,e.minTime=c[n].minTime,e.pl=c[n].pl,e.difficulty=c[n].difficulty,e.hashtag=c[n].hashtag,e.info=c[n].info,e.notice=c[n].notice,e.ccfoliaLink=c[n].ccfoliaLink,e.discordLink=c[n].discordLink,p.value.push(...e.image.map((t,r)=>({id:r.toString(),name:r.toString(),status:"finished",url:t}))),e.loading=!1,e.idx=n),e.showModal=!0},b=async()=>{var t,r;e.loading=!0;const n=new FormData;n.append("name",e.name),n.append("gm",e.gm),n.append("living",e.living),e.image.length>=1&&e.image.forEach(l=>{n.append("image",l)}),n.append("minTime",e.minTime),n.append("pl",e.pl),n.append("difficulty",e.difficulty);for(const l of e.hashtag)n.append("hashtag",l);n.append("info",e.info),n.append("notice",e.notice),n.append("ccfoliaLink",e.ccfoliaLink),n.append("discordLink",e.discordLink);try{if(e._id.length===0){const{data:l}=await ee.post("/modules",n);c.push(l.result),te.fire({icon:"success",title:"成功",text:"模組新增成功"})}else{const{data:l}=await ee.patch("/modules/"+e._id,n);c[e.idx]=l.result,te.fire({icon:"success",title:"成功",text:"編輯成功"})}e.showModal=!1}catch(l){te.fire({icon:"error",title:"失敗",text:((r=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:r.message)||"發生錯誤"})}e.loading=!1};(async()=>{var n,t;try{const{data:r}=await ee.get("/modules/gm");c.push(...r.result)}catch(r){m.error(((t=(n=r==null?void 0:r.response)==null?void 0:n.data)==null?void 0:t.message)||"發生錯誤")}})();function z(n){console.log(e),b()}return(n,t)=>{const r=Ce,l=Se,O=ze,P=tt,I=Me,X=Oe,f=Ae,B=Ne,Y=We,W=Xe,x=De,d=Ye,R=Pe,H=Ee,U=Ke,D=Ie;return F(),T("div",ct,[h("div",ht,[i(r,{dashed:"",style:{"font-size":"3vw",color:"rgb(240,162,23)"}},{default:s(()=>[M(" 模組管理 ")]),_:1})]),i(l,{color:"#5d8585",rounded:"",style:{position:"absolute",top:"18%",right:"10%",padding:"1.5%"},onClick:t[0]||(t[0]=o=>$(-1))},{icon:s(()=>[i(ce(ot),{style:{"font-size":"24px"}})]),default:s(()=>[M(" 新增模組 ")]),_:1}),i(X,{id:"moduleTable","single-line":!1,striped:"",style:{"margin-top":"5%"}},{default:s(()=>[pt,h("tbody",null,[(F(!0),T(Te,null,He(c,(o,q)=>(F(),T("tr",{key:o._id,style:{"text-align":"center"}},[h("td",ft,[i(O,{src:o.image[0],width:200},null,8,["src"])]),h("td",gt,Ue(o.name),1),h("td",mt,[i(P,{value:o.living,"onUpdate:value":E=>o.living=E},null,8,["value","onUpdate:value"])]),h("td",_t,[i(l,{strong:"",secondary:"",circle:"",type:"error",onClick:E=>$(q)},{icon:s(()=>[i(I,null,{default:s(()=>[i(ce(ut))]),_:1})]),_:2},1032,["onClick"])])]))),128))])]),_:1}),i(D,{show:e.showModal,"onUpdate:show":t[14]||(t[14]=o=>e.showModal=o),"trap-focus":!1,"mask-closable":!1},{default:s(()=>[i(U,{model:e,rules:S,size:v.value,"label-placement":"top",style:{"background-color":"#F8E9DD","border-radius":"15px",padding:"2%"},onSubmit:se(z,["prevent"])},{default:s(()=>[i(H,{cols:"6 l:12","item-responsive":"",responsive:"screen","x-gap":"30"},{default:s(()=>[i(f,{span:"12"},{default:s(()=>[i(r,{"title-placement":"left",style:{"--n-color":"#5d8585","--n-text-color":"#5d8585",margin:"-8vh 0 -10vh 0"}},{default:s(()=>[e._id.length>0?(F(),T("h2",vt,"編 輯 模 組")):(F(),T("h2",bt,"新 增 模 組"))]),_:1})]),_:1}),i(f,{span:"12",path:"living"},{default:s(()=>[i(P,{value:e.living,"onUpdate:value":t[1]||(t[1]=o=>e.living=o),size:"large",style:{position:"absolute",right:"0"}},{checked:s(()=>[M(" 公開 ")]),unchecked:s(()=>[M(" 隱藏 ")]),_:1},8,["value"])]),_:1}),i(f,{span:"xs:9 m:6 l:6",label:"模組名稱",path:"name"},{default:s(()=>[i(B,{value:e.name,"onUpdate:value":t[2]||(t[2]=o=>e.name=o),placeholder:"",type:"text"},null,8,["value"])]),_:1}),i(f,{span:"xs:9 m:6 l:6",label:"模組圖片",path:"image"},{default:s(()=>[i(Y,{value:e.image,"onUpdate:value":t[3]||(t[3]=o=>e.image=o),"list-type":"image-card",multiple:"",accept:".jpg,.jpeg,.png,.gif,.bmp,.tiff,.svg,.webp","default-file-list":p.value,onChange:_},{default:s(()=>[M(" 新增圖片 ")]),_:1},8,["value","default-file-list"])]),_:1}),i(f,{span:"xs:6 m:3 l:3",label:"預估時長 (以最短時間計算)",path:"minTime"},{default:s(()=>[i(W,{value:e.minTime,"onUpdate:value":t[4]||(t[4]=o=>e.minTime=o),"default-value":1,clearable:""},{suffix:s(()=>[wt]),_:1},8,["value"])]),_:1}),i(f,{span:"xs:6 m:3 l:3",label:"PL 人數",path:"pl"},{default:s(()=>[i(W,{value:e.pl,"onUpdate:value":t[5]||(t[5]=o=>e.pl=o),"default-value":1,clearable:""},{suffix:s(()=>[yt]),_:1},8,["value"])]),_:1}),i(f,{span:"xs:6 m:3 l:3",label:"特色",path:"hashtag"},{default:s(()=>[h("div",xt,[i(x,{value:e.hashtag,"onUpdate:value":t[6]||(t[6]=o=>e.hashtag=o),type:"primary",round:"","input-style":"warning"},null,8,["value"])])]),_:1}),i(f,{span:"xs:6 m:3 l:3",label:"難度",path:"difficulty"},{default:s(()=>[i(d,{value:e.difficulty,"onUpdate:value":t[7]||(t[7]=o=>e.difficulty=o),"default-value":.5,"allow-half":"",color:"#4fb233"},null,8,["value","default-value"])]),_:1}),i(f,{span:"xs:9 m:6 l:6",label:"模組說明",path:"info"},{default:s(()=>[i(B,{value:e.info,"onUpdate:value":t[8]||(t[8]=o=>e.info=o),placeholder:"建議這邊只放最簡單的模組介紹就好~",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["value"])]),_:1}),i(f,{span:"xs:9 m:6 l:6",label:"額外補充(注意事項)",path:"notice"},{default:s(()=>[i(B,{value:e.notice,"onUpdate:value":t[9]||(t[9]=o=>e.notice=o),placeholder:"有關 HO情報、公開情報、紙娃娃素材...等，是放在這區喔 :))",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["value"])]),_:1}),i(f,{span:"xs:9 m:6 l:6",label:"可可亞連結",path:"ccfoliaLink"},{default:s(()=>[i(B,{value:e.ccfoliaLink,"onUpdate:value":t[10]||(t[10]=o=>e.ccfoliaLink=o),placeholder:" ",style:{"background-color":"#F5BBA9"}},null,8,["value"])]),_:1}),i(f,{span:"xs:9 m:6 l:6",label:"Discord 連結",path:"discordLink"},{default:s(()=>[i(B,{value:e.discordLink,"onUpdate:value":t[11]||(t[11]=o=>e.discordLink=o),placeholder:" ",style:{"background-color":"#9D9FDD"}},null,8,["value"])]),_:1}),i(R,{span:"2"},{default:s(()=>[h("div",kt,[i(l,{type:"error",ghost:"",disabled:e.loading,round:"",size:"large",style:{width:"12vw",height:"3vw","font-size":"1.5vw"},onClick:t[12]||(t[12]=o=>e.showModal=!1)},{default:s(()=>[M(" 取    消 ")]),_:1},8,["disabled"])])]),_:1}),i(R,{span:"2"},{default:s(()=>[h("div",Ct,[i(l,{disabled:e.loading,round:"",type:"primary",size:"large",style:{width:"12vw",height:"3vw","font-size":"1.5vw"},"attr-type":"submit",onKeydown:t[13]||(t[13]=$e(se(()=>{},["prevent"]),["enter"]))},{default:s(()=>[M(" 存    檔 ")]),_:1},8,["disabled"])])]),_:1})]),_:1})]),_:1},8,["model","size","onSubmit"])]),_:1},8,["show"])])}}};export{Pt as default};
