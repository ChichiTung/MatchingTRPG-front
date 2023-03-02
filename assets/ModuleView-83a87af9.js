import{d as w,aa as A,ab as G,V as Z,u as J,Z as R,w as D,a9 as Q,ac as X,ad as Y,A as ee}from"./router-c5eb6ba6.js";import{a as te,d as H,h as S,e as z,u as O,f as P,g as j}from"./Icon-a8619f5f.js";import{d as E,c as $,h as k,a as W,r as oe,f as L,l as V,m as n,W as T,af as b,k as c,j as p,F as ne,t as ae,a7 as y}from"./runtime-core.esm-bundler-4adb0545.js";import{_ as ie}from"./Modal-b331f9bb.js";import{_ as re}from"./InputNumber-8916e978.js";import{u as se,b as le,a as de,c as ce,d as ue,_ as pe}from"./use-message-1804c65d.js";import"./plugin-vueexport-helper-c27b6911.js";import"./Card-035d3dec.js";import"./index-714b5119.js";import"./use-locale-b2887f78.js";import"./Add-22a87db6.js";import"./context-81bb04ff.js";const he={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},_e=r=>{const{primaryColor:s,textColor2:d,borderColor:u,lineHeight:a,fontSize:l,borderRadiusSmall:i,dividerColor:e,fontWeightStrong:m,textColor1:g,textColor3:o,infoColor:t,warningColor:f,errorColor:x,successColor:v,codeColor:_}=r;return Object.assign(Object.assign({},he),{aTextColor:s,blockquoteTextColor:d,blockquotePrefixColor:u,blockquoteLineHeight:a,blockquoteFontSize:l,codeBorderRadius:i,liTextColor:d,liLineHeight:a,liFontSize:l,hrColor:e,headerFontWeight:m,headerTextColor:g,pTextColor:d,pTextColor1Depth:g,pTextColor2Depth:d,pTextColor3Depth:o,pLineHeight:a,pFontSize:l,headerBarColor:s,headerBarColorPrimary:s,headerBarColorInfo:t,headerBarColorError:x,headerBarColorWarning:f,headerBarColorSuccess:v,textColor:d,textColor1Depth:g,textColor2Depth:d,textColor3Depth:o,textColorPrimary:s,textColorInfo:t,textColorSuccess:v,textColorWarning:f,textColorError:x,codeTextColor:d,codeColor:_,codeBorder:"1px solid #0000"})},me={name:"Typography",common:te,self:_e},U=me,ge=H("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[S("&:first-child",{marginTop:0}),z("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[z("align-text",{paddingLeft:0},[S("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),S("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),S("&::before",{backgroundColor:"var(--n-bar-color)"})])]),fe=Object.assign(Object.assign({},P.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),B=r=>E({name:`H${r}`,props:fe,setup(s){const{mergedClsPrefixRef:d,inlineThemeDisabled:u}=O(s),a=P("Typography","-h",ge,U,s,d),l=$(()=>{const{type:e}=s,{common:{cubicBezierEaseInOut:m},self:{headerFontWeight:g,headerTextColor:o,[w("headerPrefixWidth",r)]:t,[w("headerFontSize",r)]:f,[w("headerMargin",r)]:x,[w("headerBarWidth",r)]:v,[w("headerBarColor",e)]:_}}=a.value;return{"--n-bezier":m,"--n-font-size":f,"--n-margin":x,"--n-bar-color":_,"--n-bar-width":v,"--n-font-weight":g,"--n-text-color":o,"--n-prefix-width":t}}),i=u?j(`h${r}`,$(()=>s.type[0]),l,s):void 0;return{mergedClsPrefix:d,cssVars:u?void 0:l,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var s;const{prefix:d,alignText:u,mergedClsPrefix:a,cssVars:l,$slots:i}=this;return(s=this.onRender)===null||s===void 0||s.call(this),k(`h${r}`,{class:[`${a}-h`,`${a}-h${r}`,this.themeClass,{[`${a}-h--prefix-bar`]:d,[`${a}-h--align-text`]:u}],style:l},i)}}),xe=B("1");B("2");B("3");B("4");B("5");B("6");const ve=H("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[z("strong",`
 font-weight: var(--n-font-weight-strong);
 `),z("italic",{fontStyle:"italic"}),z("underline",{textDecoration:"underline"}),z("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),be=Object.assign(Object.assign({},P.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),Ce=E({name:"Text",props:be,setup(r){const{mergedClsPrefixRef:s,inlineThemeDisabled:d}=O(r),u=P("Typography","-text",ve,U,r,s),a=$(()=>{const{depth:i,type:e}=r,m=e==="default"?i===void 0?"textColor":`textColor${i}Depth`:w("textColor",e),{common:{fontWeightStrong:g,fontFamilyMono:o,cubicBezierEaseInOut:t},self:{codeTextColor:f,codeBorderRadius:x,codeColor:v,codeBorder:_,[m]:C}}=u.value;return{"--n-bezier":t,"--n-text-color":C,"--n-font-weight-strong":g,"--n-font-famliy-mono":o,"--n-code-border-radius":x,"--n-code-text-color":f,"--n-code-color":v,"--n-code-border":_}}),l=d?j("text",$(()=>`${r.type[0]}${r.depth||""}`),a,r):void 0;return{mergedClsPrefix:s,compitableTag:A(r,["as","tag"]),cssVars:d?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var r,s,d;const{mergedClsPrefix:u}=this;(r=this.onRender)===null||r===void 0||r.call(this);const a=[`${u}-text`,this.themeClass,{[`${u}-text--code`]:this.code,[`${u}-text--delete`]:this.delete,[`${u}-text--strong`]:this.strong,[`${u}-text--italic`]:this.italic,[`${u}-text--underline`]:this.underline}],l=(d=(s=this.$slots).default)===null||d===void 0?void 0:d.call(s);return this.code?k("code",{class:a,style:this.cssVars},this.delete?k("del",null,l):l):this.delete?k("del",{class:a,style:this.cssVars},l):k(this.compitableTag||"span",{class:a,style:this.cssVars},l)}});const ye={id:"moduleView_bg"},we={class:"head"},ze={class:"head_title"},Be={style:{color:"#F8E9DD","letter-spacing":"0.5rem"},class:"gm"},Te={class:"info_bar"},ke={class:"column hexagon_1"},Se=n("div",{class:"column_title"},"難度",-1),$e={class:"column_text"},Pe={class:"column hexagon_2"},We=n("div",{class:"column_title"},"時長",-1),Fe={class:"column_text"},Me=n("span",{style:{"font-size":"0.5vw"}},"小時",-1),Re={class:"column hexagon_3"},De=n("div",{class:"column_title"},"人數",-1),Le={class:"column_text"},Ve=n("span",{style:{position:"absolute",top:"15%",right:"20%"}},"報名",-1),He=[Ve],Oe={id:"head_img"},je=["src"],Ee={id:"content_info"},Ue=n("div",{id:"pl_orders"},null,-1),Ne={key:0,style:{"text-align":"center",width:"100%"}},qe=n("div",{style:{"margin-right":"-50px","padding-right":"60px",color:"#2F4F4088"}}," HO ： ",-1),Ie={style:{display:"flex","justify-content":"flex"}},Ke={style:{display:"flex","justify-content":"flex"}},it={__name:"ModuleView",setup(r){const s=G(),d=Z(),u=se(),a=J(),l=W([]),i=W({_id:"",m_name:"",gm:"",pl_id:"",pl_nickname:"",pl_dc_account:"",pl_dc_id:0,ho:1,loading:!1,showModal:!1}),e=W({_id:"",living:!0,name:"",gm:"",minTime:.5,difficulty:.5,image:[],pl:1,hashtag:[],info:"",notice:"",ccfoliaLink:"",discordLink:""}),m=oe(!1),g=async()=>{i.loading=!0;const o={m_id:e._id,m_name:e.name,gm:e.gm,ho:i.ho};try{if(i._id.length===0){const{data2:t}=await X.post("/orders",o);u.success("訂單新增成功"),m.value=!1,console.log(t.result),l.push(t.result)}}catch{}i.loading=!1};return(async()=>{try{const{data:o}=await R.get("/modules/"+s.params.id);e._id=o.result._id,e.living=o.result.living,e.name=o.result.name,e.gm=o.result.gm,e.minTime=o.result.minTime,e.difficulty=o.result.difficulty,e.image=o.result.image[0],e.pl=o.result.pl,e.hashtag=o.result.hashtag,e.info=o.result.info,e.notice=o.result.notice,e.ccfoliaLink=o.result.ccfoliaLink,e.discordLink=o.result.discordLink,document.title=e.name+" | Matching TRPG",console.log(o.result);const{data_order:t}=await R.get("/order")}catch{console.log("模組取得失敗"),d.go(-1)}})(),(o,t)=>{const f=Ce,x=xe,v=Y,_=le,C=de,N=re,F=ee,M=ce,q=ue,I=pe,K=ie;return L(),V(ne,null,[n("div",ye,[n("div",we,[n("h1",ze,[T(b(e.name)+" ",1),n("p",Be," GM: "+b(e.gm),1)]),n("div",Te,[n("div",ke,[Se,n("div",$e,b(e.difficulty),1)]),n("div",Pe,[We,n("div",Fe,[T(b(e.minTime)+" ",1),Me])]),n("div",Re,[De,n("div",Le,b(e.pl),1)]),n("div",{id:"attend",onClick:t[0]||(t[0]=h=>m.value=!0)},He)])]),n("div",Oe,[n("img",{src:e.image,class:"head_img_wrapper"},null,8,je)]),n("div",Ee,[c(x,{prefix:"bar","align-text":"",type:"warning"},{default:p(()=>[c(f,{type:"warning",strong:""},{default:p(()=>[T(" 模組簡介 ")]),_:1})]),_:1}),n("p",null,b(e.info),1)]),Ue]),c(K,{show:m.value,"onUpdate:show":t[8]||(t[8]=h=>m.value=h),"trap-focus":!1,"mask-closable":!1},{default:p(()=>[c(I,{model:i,"label-placement":"top",style:{"background-color":"#F8E9DD","border-radius":"15px",padding:"2%"},onSubmit:D(g,["prevent"])},{default:p(()=>[c(q,{cols:"6 l:12","item-responsive":"",responsive:"screen","x-gap":"30"},{default:p(()=>[c(_,{span:"12"},{default:p(()=>[c(v,{"title-placement":"left",style:{"--n-color":"#5d8585","--n-text-color":"#5d8585",margin:"-8vh 0 -10vh 0"}},{default:p(()=>[i._id.length<=0?(L(),V("h2",Ne,b(e.name)+"   報名中",1)):ae("",!0)]),_:1})]),_:1}),c(_,{span:"xs:9 m:6 l:6",label:"模組名稱",path:"m_name"},{default:p(()=>[c(C,{value:e.name,"onUpdate:value":t[1]||(t[1]=h=>e.name=h),"default-value":e.name,type:"text"},null,8,["value","default-value"])]),_:1}),c(_,{span:"xs:6 m:3 l:3",label:"想要的 HO",path:"pl"},{default:p(()=>[c(N,{value:i.ho,"onUpdate:value":t[2]||(t[2]=h=>i.ho=h),disabled:o.disabled,"default-value":1,clearable:""},{prefix:p(()=>[qe]),_:1},8,["value","disabled"])]),_:1}),c(_,{span:"xs:9 m:6 l:6",label:"PL 暱稱",path:"pl_nickname"},{default:p(()=>[c(C,{value:y(a).nickname,"onUpdate:value":t[3]||(t[3]=h=>y(a).nickname=h),type:"text"},null,8,["value"])]),_:1}),c(_,{span:"xs:9 m:6 l:6",label:"PL DC帳號",path:"pl_dc_account"},{default:p(()=>[c(C,{value:y(a).dc_account,"onUpdate:value":t[4]||(t[4]=h=>y(a).dc_account=h),type:"text"},null,8,["value"])]),_:1}),c(_,{span:"xs:9 m:6 l:6",label:"PL資料 DC_id",path:"pl_dc_id"},{default:p(()=>[c(C,{value:y(a).dc_id,"onUpdate:value":t[5]||(t[5]=h=>y(a).dc_id=h),type:"text"},null,8,["value"])]),_:1}),c(M,{span:"2"},{default:p(()=>[n("div",Ie,[c(F,{type:"error",ghost:"",disabled:i.loading,round:"",size:"large",style:{width:"12vw",height:"3vw","font-size":"1.5vw"},onClick:t[6]||(t[6]=h=>m.value=!1)},{default:p(()=>[T(" 取    消 ")]),_:1},8,["disabled"])])]),_:1}),c(M,{span:"2"},{default:p(()=>[n("div",Ke,[c(F,{disabled:i.loading,round:"",type:"warning",size:"large",style:{width:"12vw",height:"3vw","font-size":"1.5vw"},onKeydown:t[7]||(t[7]=Q(D(()=>{},["prevent"]),["enter"])),onClick:g},{default:p(()=>[T(" 送    出 ")]),_:1},8,["disabled"])])]),_:1})]),_:1})]),_:1},8,["model","onSubmit"])]),_:1},8,["show"])],64)}}};export{it as default};