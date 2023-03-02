import{b as X,e as E,l as $,g as z,u as G,h as W,i as N,q as T,aD as Y,aE as Z,al as ee,D as te,ac as oe,aF as V,C as O,aC as ne,aG as re,R as se}from"./router-bb377ad8.js";import{_ as ie}from"./matching_半身-01-8616c978.js";import{g as b,S as ae}from"./ScrollTrigger-010257a6.js";import{d as U,c as M,h as S,o as le,a as F,r as de,f as H,l as j,m as e,W as y,ai as g,k as r,j as _,F as ce,t as _e,a9 as k}from"./plugin-vueexport-helper-dfa573d2.js";import{_ as ue}from"./Table-07eba5a0.js";import{_ as pe}from"./Modal-853b3032.js";import{_ as me}from"./InputNumber-4cada1d6.js";import{_ as he}from"./Image-4b018ec4.js";import{u as ge}from"./use-message-1747f09b.js";import{b as fe,a as xe,c as ve,d as be,_ as ye}from"./Grid-aa39ebb7.js";import"./Card-448c4530.js";import"./index-714b5119.js";import"./use-locale-96fc84d1.js";import"./Add-a982debf.js";import"./_createCompounder-b404808f.js";import"./context-fdd44220.js";import"./Suffix-16496830.js";const Ce={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},we=a=>{const{primaryColor:l,textColor2:c,borderColor:p,lineHeight:s,fontSize:d,borderRadiusSmall:i,dividerColor:o,fontWeightStrong:u,textColor1:m,textColor3:f,infoColor:t,warningColor:n,errorColor:x,successColor:v,codeColor:C}=a;return Object.assign(Object.assign({},Ce),{aTextColor:l,blockquoteTextColor:c,blockquotePrefixColor:p,blockquoteLineHeight:s,blockquoteFontSize:d,codeBorderRadius:i,liTextColor:c,liLineHeight:s,liFontSize:d,hrColor:o,headerFontWeight:u,headerTextColor:m,pTextColor:c,pTextColor1Depth:m,pTextColor2Depth:c,pTextColor3Depth:f,pLineHeight:s,pFontSize:d,headerBarColor:l,headerBarColorPrimary:l,headerBarColorInfo:t,headerBarColorError:x,headerBarColorWarning:n,headerBarColorSuccess:v,textColor:c,textColor1Depth:m,textColor2Depth:c,textColor3Depth:f,textColorPrimary:l,textColorInfo:t,textColorSuccess:v,textColorWarning:n,textColorError:x,codeTextColor:c,codeColor:C,codeBorder:"1px solid #0000"})},ke={name:"Typography",common:X,self:we},q=ke,Te=E("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[$("&:first-child",{marginTop:0}),z("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[z("align-text",{paddingLeft:0},[$("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),$("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),$("&::before",{backgroundColor:"var(--n-bar-color)"})])]),ze=Object.assign(Object.assign({},W.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),P=a=>U({name:`H${a}`,props:ze,setup(l){const{mergedClsPrefixRef:c,inlineThemeDisabled:p}=G(l),s=W("Typography","-h",Te,q,l,c),d=M(()=>{const{type:o}=l,{common:{cubicBezierEaseInOut:u},self:{headerFontWeight:m,headerTextColor:f,[T("headerPrefixWidth",a)]:t,[T("headerFontSize",a)]:n,[T("headerMargin",a)]:x,[T("headerBarWidth",a)]:v,[T("headerBarColor",o)]:C}}=s.value;return{"--n-bezier":u,"--n-font-size":n,"--n-margin":x,"--n-bar-color":C,"--n-bar-width":v,"--n-font-weight":m,"--n-text-color":f,"--n-prefix-width":t}}),i=p?N(`h${a}`,M(()=>l.type[0]),d,l):void 0;return{mergedClsPrefix:c,cssVars:p?void 0:d,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var l;const{prefix:c,alignText:p,mergedClsPrefix:s,cssVars:d,$slots:i}=this;return(l=this.onRender)===null||l===void 0||l.call(this),S(`h${a}`,{class:[`${s}-h`,`${s}-h${a}`,this.themeClass,{[`${s}-h--prefix-bar`]:c,[`${s}-h--align-text`]:p}],style:d},i)}}),Pe=P("1");P("2");P("3");P("4");P("5");P("6");const Se=E("text",`
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
 `)]),Be=Object.assign(Object.assign({},W.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),$e=U({name:"Text",props:Be,setup(a){const{mergedClsPrefixRef:l,inlineThemeDisabled:c}=G(a),p=W("Typography","-text",Se,q,a,l),s=M(()=>{const{depth:i,type:o}=a,u=o==="default"?i===void 0?"textColor":`textColor${i}Depth`:T("textColor",o),{common:{fontWeightStrong:m,fontFamilyMono:f,cubicBezierEaseInOut:t},self:{codeTextColor:n,codeBorderRadius:x,codeColor:v,codeBorder:C,[u]:L}}=p.value;return{"--n-bezier":t,"--n-text-color":L,"--n-font-weight-strong":m,"--n-font-famliy-mono":f,"--n-code-border-radius":x,"--n-code-text-color":n,"--n-code-color":v,"--n-code-border":C}}),d=c?N("text",M(()=>`${a.type[0]}${a.depth||""}`),s,a):void 0;return{mergedClsPrefix:l,compitableTag:Y(a,["as","tag"]),cssVars:c?void 0:s,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var a,l,c;const{mergedClsPrefix:p}=this;(a=this.onRender)===null||a===void 0||a.call(this);const s=[`${p}-text`,this.themeClass,{[`${p}-text--code`]:this.code,[`${p}-text--delete`]:this.delete,[`${p}-text--strong`]:this.strong,[`${p}-text--italic`]:this.italic,[`${p}-text--underline`]:this.underline}],d=(c=(l=this.$slots).default)===null||c===void 0?void 0:c.call(l);return this.code?S("code",{class:s,style:this.cssVars},this.delete?S("del",null,d):d):this.delete?S("del",{class:s,style:this.cssVars},d):S(this.compitableTag||"span",{class:s,style:this.cssVars},d)}});const Fe={id:"moduleView_bg"},Me={class:"head"},We={class:"head_title"},Le={style:{color:"#F8E9DD","letter-spacing":"0.5rem"},class:"gm"},De={class:"info_bar"},Re={class:"column hexagon_1"},Ve=e("div",{class:"column_title"},"難度",-1),Oe={class:"column_text"},He={class:"column hexagon_2"},je=e("div",{class:"column_title"},"時長",-1),Ee={class:"column_text"},Ge=e("span",{style:{"font-size":"0.5vw"}},"小時",-1),Ne={class:"column hexagon_3"},Ue=e("div",{class:"column_title"},"人數",-1),qe={class:"column_text"},Ie=e("span",{style:{position:"absolute",top:"15%",right:"20%"}},"報名",-1),Ke=[Ie],Ae={id:"head_img"},Je=["src"],Qe={id:"section2"},Xe={id:"content_info"},Ye={class:"content_info"},Ze=e("img",{src:ie,class:"cute_img"},null,-1),et={id:"content_notice"},tt={class:"content_notice"},ot={id:"gm_intro"},nt={class:"gm_intro_title"},rt={style:{color:"orange"}},st=e("p",{class:"gm_intro"}," 重要的事先放在前面： 妳各位 請禮貌地對待 PL 與 GM ！還有一定要守時啊啊啊啊！ 嗨，我是新手 GM 琪琪琪琪~ 目前帶過的本還沒有很多，請大家多多給我回饋，讓我能早日擺脫新手GM~ 目前主要以歐美本為主，正劇向長劇本居多，形式採語音團~ 歡迎各位新手、老手來報報~ ",-1),it={id:"pl_orders"},at=e("h2",{class:"pl_orders_title"},"目前的預約",-1),lt=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center",width:"30%"}},"日期"),e("th",{style:{"text-align":"center"}},"HO : PL")])],-1),dt=e("td",{style:{"text-align":"center"}},"2/28",-1),ct={style:{"text-align":"center"}},_t=e("tr",null,[e("td",{style:{"text-align":"center"}},"2/28"),e("td",{style:{"text-align":"center"}},"HO:2 , 琪琪大人 ")],-1),ut={key:0,style:{"text-align":"center",width:"100%"}},pt=e("div",{style:{"margin-right":"-50px","padding-right":"60px",color:"#2F4F4088"}}," HO ： ",-1),mt={style:{display:"flex","justify-content":"flex"}},ht={style:{display:"flex","justify-content":"flex"}},Wt={__name:"ModuleView",setup(a){b.registerPlugin(ae),le(()=>{b.to("#content_info",{xPercent:10,ease:"none",scrollTrigger:{trigger:"#content_info",scrub:!0,markers:!0}}),b.set("#content_notice",{x:500}),b.to("#content_notice",{xPercent:-15,ease:"none",scrollTrigger:{trigger:"#content_notice",scrub:!0,markers:!0}}),b.to(".head_img_wrapper",{xPercent:-5,ease:"none",scrollTrigger:{trigger:".head_img_wrapper",scrub:!0,markers:!0}}),b.to("#gm_intro",{yPercent:-10,ease:"none",scrollTrigger:{trigger:"gm_intro",scrub:!0,markers:!0,pin:!0}}),b.set(".cute_img",{x:-100}),b.to(".cute_img",{x:55,ease:"none",scrollTrigger:{trigger:".cute_img",scrub:!0,markers:!0}})});const l=Z(),c=ee(),p=ge(),s=te(),d=F([]),i=F({_id:"",m_name:"",gm:"",pl_id:"",pl_nickname:"",pl_dc_account:"",pl_dc_id:0,ho:1,loading:!1,showModal:!1}),o=F({_id:"",living:!0,name:"",gm:"",minTime:.5,difficulty:.5,image:[],pl:1,hashtag:[],info:"",notice:"",ccfoliaLink:"",discordLink:""}),u=F({_id:[],pl_id:[],pl_nickname:[],pl_dc_account:[],pl_dc_id:[],m_id:"",m_name:"",gm:.5,ho:[],date:""}),m=de(!1),f=async()=>{i.loading=!0;const t={m_id:o._id,m_name:o.name,gm:o.gm,ho:i.ho};try{if(i._id.length===0){const{data2:n}=await V.post("/orders",t);p.success("訂單新增成功"),m.value=!1,console.log(n.result),d.push(n.result)}}catch{}i.loading=!1};return(async()=>{try{const{data:t}=await oe.get("/modules/"+l.params.id);o._id=t.result._id,o.living=t.result.living,o.name=t.result.name,o.gm=t.result.gm,o.minTime=t.result.minTime,o.difficulty=t.result.difficulty,o.image=t.result.image[0],o.pl=t.result.pl,o.hashtag=t.result.hashtag,o.info=t.result.info,o.notice=t.result.notice,o.ccfoliaLink=t.result.ccfoliaLink,o.discordLink=t.result.discordLink,document.title=o.name+" | Matching TRPG",console.log(t.result)}catch{console.log("模組取得失敗"),c.go(-1)}try{const{data:t}=await V.get(`/orders/module/${o._id}`);for(let n=0;n<t.result.length;n++)u.pl_nickname[n]=t.result[n].pl_nickname,u.pl_id[n]=t.result[n].pl_id,u.ho[n]=t.result[n].ho;u._id=t.result._id,u.pl_id=t.result.pl_id,u.pl_dc_account=t.result.pl_dc_account,u.pl_dc_id=t.result.pl_dc_id,u.m_id=t.result.m_id,u.m_name=t.result.m_name,u.gm=t.result.gm,u.date=t.result.date,console.log(t.result.length)}catch(t){console.log(t),console.log("訂單取得失敗")}})(),(t,n)=>{const x=$e,v=Pe,C=ue,L=re,w=fe,B=xe,I=me,K=he,D=se,R=ve,A=be,J=ye,Q=pe;return H(),j(ce,null,[e("div",Fe,[e("div",Me,[e("h1",We,[y(g(o.name)+" ",1),e("p",Le," GM: "+g(o.gm),1)]),e("div",De,[e("div",Re,[Ve,e("div",Oe,g(o.difficulty),1)]),e("div",He,[je,e("div",Ee,[y(g(o.minTime)+" ",1),Ge])]),e("div",Ne,[Ue,e("div",qe,g(o.pl),1)]),e("div",{id:"attend",onClick:n[0]||(n[0]=h=>m.value=!0)},Ke)])]),e("div",Ae,[e("img",{src:o.image,class:"head_img_wrapper"},null,8,Je)]),e("div",Qe,[e("div",Xe,[r(v,{"align-text":"",type:"warning"},{default:_(()=>[r(x,{style:{color:"#2F4F40","font-weight":"800"},strong:""},{default:_(()=>[y(' " 模組簡介 " ')]),_:1})]),_:1}),e("p",Ye,g(o.info),1)]),Ze,e("div",et,[r(v,{prefix:"bar","align-text":"",type:"warning",style:{"margin-left":"3%"}},{default:_(()=>[r(x,{style:{color:"#2F4F4055","font-weight":"800"},strong:""},{default:_(()=>[y(" NOTICE ")]),_:1})]),_:1}),e("p",tt,g(o.notice),1)])]),e("div",ot,[e("h2",nt,[y(" - About GM "),e("span",rt,"   "+g(o.gm),1),y(" -")]),st]),e("div",it,[at,r(C,{id:"favoriteTable","single-line":!1,striped:"",style:{"margin-top":"5%","margin-bottom":"10%"},class:"table"},{default:_(()=>[lt,e("tbody",null,[e("tr",null,[dt,e("td",ct,"HO:1 , "+g(u.pl_nickname[0]),1)]),_t])]),_:1})])]),r(Q,{show:m.value,"onUpdate:show":n[8]||(n[8]=h=>m.value=h),"trap-focus":!1,"mask-closable":!1},{default:_(()=>[r(J,{model:i,"label-placement":"top",style:{"background-color":"#F8E9DD","border-radius":"15px",padding:"2%",width:"60vw"},onSubmit:O(f,["prevent"])},{default:_(()=>[r(A,{cols:"6 l:12","item-responsive":"",responsive:"screen","x-gap":"30"},{default:_(()=>[r(w,{span:"12"},{default:_(()=>[r(L,{"title-placement":"left",style:{"--n-color":"#5d8585","--n-text-color":"#5d8585",margin:"-8vh 0 -10vh 0"}},{default:_(()=>[i._id.length<=0?(H(),j("h2",ut,g(o.name)+"   報名中",1)):_e("",!0)]),_:1})]),_:1}),r(w,{span:"xs:9 m:6 l:6",label:"模組名稱",path:"m_name"},{default:_(()=>[r(B,{value:o.name,"onUpdate:value":n[1]||(n[1]=h=>o.name=h),"default-value":o.name,type:"text",disabled:""},null,8,["value","default-value"])]),_:1}),r(w,{span:"xs:6 m:3 l:3",label:"想要的 HO",path:"pl"},{default:_(()=>[r(I,{value:i.ho,"onUpdate:value":n[2]||(n[2]=h=>i.ho=h),"default-value":1,clearable:""},{prefix:_(()=>[pt]),_:1},8,["value"])]),_:1}),r(w,{span:"xs:9 m:6 l:6",label:"PL 頭像",path:"pl_img"},{default:_(()=>[r(K,{src:k(s).image,width:"120"},null,8,["src"])]),_:1}),r(w,{span:"xs:9 m:6 l:6",label:"PL 暱稱",path:"pl_nickname"},{default:_(()=>[r(B,{value:k(s).nickname,"onUpdate:value":n[3]||(n[3]=h=>k(s).nickname=h),type:"text",disabled:""},null,8,["value"])]),_:1}),r(w,{span:"xs:9 m:6 l:6",label:"PL DC帳號",path:"pl_dc_account"},{default:_(()=>[r(B,{value:k(s).dc_account,"onUpdate:value":n[4]||(n[4]=h=>k(s).dc_account=h),type:"text",disabled:""},null,8,["value"])]),_:1}),r(w,{span:"xs:9 m:6 l:6",label:"PL資料 DC_id",path:"pl_dc_id"},{default:_(()=>[r(B,{value:k(s).dc_id,"onUpdate:value":n[5]||(n[5]=h=>k(s).dc_id=h),type:"text",disabled:""},null,8,["value"])]),_:1}),r(R,{span:"2",offset:"7"},{default:_(()=>[e("div",mt,[r(D,{type:"error",ghost:"",disabled:i.loading,round:"",size:"large",style:{width:"9vw",height:"2.2vw","font-size":"1rem"},onClick:n[6]||(n[6]=h=>m.value=!1)},{default:_(()=>[y(" 取    消 ")]),_:1},8,["disabled"])])]),_:1}),r(R,{span:"2"},{default:_(()=>[e("div",ht,[r(D,{disabled:i.loading,round:"",size:"large",style:{width:"9vw",height:"2.2vw","font-size":"1rem"},onKeydown:n[7]||(n[7]=ne(O(()=>{},["prevent"]),["enter"])),onClick:f},{default:_(()=>[y(" 送    出 ")]),_:1},8,["disabled"])])]),_:1})]),_:1})]),_:1},8,["model","onSubmit"])]),_:1},8,["show"])],64)}}};export{Wt as default};
