import{B as X,C as E,D as $,E as P,G as N,H as G,I as W,J as F,K as U,t as k,L as z,M as Y,f as Z,N as ee,q as te,y as oe,e as M,r as ne,g as se,O,o as V,i as H,d as e,s as b,P as g,j as s,w as _,F as ie,Q as re,A as j,a as le,u as T,z as ae,S as de,v as ce}from"./index-fcbc0ebc.js";import{_ as _e}from"./matching_半身-01-8616c978.js";import{g as y,S as ue}from"./ScrollTrigger-010257a6.js";import{_ as pe}from"./Table-fc811141.js";import{_ as he}from"./InputNumber-b2f858c3.js";import{_ as me}from"./Image-ce5f7d9a.js";import{u as ge}from"./use-message-f4e7830d.js";import{b as fe,a as xe,c as ve,d as be,_ as ye}from"./Grid-a1cb5cdf.js";import"./use-locale-72c68c20.js";import"./Add-507f5927.js";import"./_createCompounder-abc07a4f.js";import"./Suffix-d8d121e3.js";const Ce={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},we=l=>{const{primaryColor:a,textColor2:c,borderColor:p,lineHeight:i,fontSize:d,borderRadiusSmall:r,dividerColor:o,fontWeightStrong:u,textColor1:h,textColor3:f,infoColor:t,warningColor:n,errorColor:x,successColor:v,codeColor:C}=l;return Object.assign(Object.assign({},Ce),{aTextColor:a,blockquoteTextColor:c,blockquotePrefixColor:p,blockquoteLineHeight:i,blockquoteFontSize:d,codeBorderRadius:r,liTextColor:c,liLineHeight:i,liFontSize:d,hrColor:o,headerFontWeight:u,headerTextColor:h,pTextColor:c,pTextColor1Depth:h,pTextColor2Depth:c,pTextColor3Depth:f,pLineHeight:i,pFontSize:d,headerBarColor:a,headerBarColorPrimary:a,headerBarColorInfo:t,headerBarColorError:x,headerBarColorWarning:n,headerBarColorSuccess:v,textColor:c,textColor1Depth:h,textColor2Depth:c,textColor3Depth:f,textColorPrimary:a,textColorInfo:t,textColorSuccess:v,textColorWarning:n,textColorError:x,codeTextColor:c,codeColor:C,codeBorder:"1px solid #0000"})},Te={name:"Typography",common:X,self:we},I=Te,ze=E("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[$("&:first-child",{marginTop:0}),P("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[P("align-text",{paddingLeft:0},[$("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),$("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),$("&::before",{backgroundColor:"var(--n-bar-color)"})])]),Pe=Object.assign(Object.assign({},W.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),S=l=>N({name:`H${l}`,props:Pe,setup(a){const{mergedClsPrefixRef:c,inlineThemeDisabled:p}=G(a),i=W("Typography","-h",ze,I,a,c),d=F(()=>{const{type:o}=a,{common:{cubicBezierEaseInOut:u},self:{headerFontWeight:h,headerTextColor:f,[z("headerPrefixWidth",l)]:t,[z("headerFontSize",l)]:n,[z("headerMargin",l)]:x,[z("headerBarWidth",l)]:v,[z("headerBarColor",o)]:C}}=i.value;return{"--n-bezier":u,"--n-font-size":n,"--n-margin":x,"--n-bar-color":C,"--n-bar-width":v,"--n-font-weight":h,"--n-text-color":f,"--n-prefix-width":t}}),r=p?U(`h${l}`,F(()=>a.type[0]),d,a):void 0;return{mergedClsPrefix:c,cssVars:p?void 0:d,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var a;const{prefix:c,alignText:p,mergedClsPrefix:i,cssVars:d,$slots:r}=this;return(a=this.onRender)===null||a===void 0||a.call(this),k(`h${l}`,{class:[`${i}-h`,`${i}-h${l}`,this.themeClass,{[`${i}-h--prefix-bar`]:c,[`${i}-h--align-text`]:p}],style:d},r)}}),Se=S("1");S("2");S("3");S("4");S("5");S("6");const ke=E("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[P("strong",`
 font-weight: var(--n-font-weight-strong);
 `),P("italic",{fontStyle:"italic"}),P("underline",{textDecoration:"underline"}),P("code",`
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
 `)]),Be=Object.assign(Object.assign({},W.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),$e=N({name:"Text",props:Be,setup(l){const{mergedClsPrefixRef:a,inlineThemeDisabled:c}=G(l),p=W("Typography","-text",ke,I,l,a),i=F(()=>{const{depth:r,type:o}=l,u=o==="default"?r===void 0?"textColor":`textColor${r}Depth`:z("textColor",o),{common:{fontWeightStrong:h,fontFamilyMono:f,cubicBezierEaseInOut:t},self:{codeTextColor:n,codeBorderRadius:x,codeColor:v,codeBorder:C,[u]:L}}=p.value;return{"--n-bezier":t,"--n-text-color":L,"--n-font-weight-strong":h,"--n-font-famliy-mono":f,"--n-code-border-radius":x,"--n-code-text-color":n,"--n-code-color":v,"--n-code-border":C}}),d=c?U("text",F(()=>`${l.type[0]}${l.depth||""}`),i,l):void 0;return{mergedClsPrefix:a,compitableTag:Y(l,["as","tag"]),cssVars:c?void 0:i,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var l,a,c;const{mergedClsPrefix:p}=this;(l=this.onRender)===null||l===void 0||l.call(this);const i=[`${p}-text`,this.themeClass,{[`${p}-text--code`]:this.code,[`${p}-text--delete`]:this.delete,[`${p}-text--strong`]:this.strong,[`${p}-text--italic`]:this.italic,[`${p}-text--underline`]:this.underline}],d=(c=(a=this.$slots).default)===null||c===void 0?void 0:c.call(a);return this.code?k("code",{class:i,style:this.cssVars},this.delete?k("del",null,d):d):this.delete?k("del",{class:i,style:this.cssVars},d):k(this.compitableTag||"span",{class:i,style:this.cssVars},d)}});const Me={id:"moduleView_bg"},Fe={class:"head"},We={class:"head_title"},Le={style:{color:"#F8E9DD","letter-spacing":"0.5rem"},class:"gm"},De={class:"info_bar"},Re={class:"column hexagon_1"},Oe=e("div",{class:"column_title"},"難度",-1),Ve={class:"column_text"},He={class:"column hexagon_2"},je=e("div",{class:"column_title"},"時長",-1),Ee={class:"column_text"},Ne=e("span",{style:{"font-size":"0.5vw"}},"小時",-1),Ge={class:"column hexagon_3"},Ue=e("div",{class:"column_title"},"人數",-1),Ie={class:"column_text"},qe=e("span",{style:{position:"absolute",top:"15%",right:"20%"}},"報名",-1),Ke=[qe],Ae={id:"head_img"},Je=["src"],Qe={id:"section2"},Xe={id:"content_info"},Ye={class:"content_info"},Ze=e("img",{src:_e,class:"cute_img"},null,-1),et={id:"content_notice"},tt={class:"content_notice"},ot={id:"gm_intro"},nt={class:"gm_intro_title"},st={style:{color:"orange"}},it=e("p",{class:"gm_intro"}," 重要的事先放在前面： 妳各位 請禮貌地對待 PL 與 GM ！還有一定要守時啊啊啊啊！ 嗨，我是新手 GM 琪琪琪琪~ 目前帶過的本還沒有很多，請大家多多給我回饋，讓我能早日擺脫新手GM~ 目前主要以歐美本為主，正劇向長劇本居多，形式採語音團~ 歡迎各位新手、老手來報報~ ",-1),rt={id:"pl_orders"},lt=e("h2",{class:"pl_orders_title"},"目前的預約",-1),at=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center",width:"30%"}},"日期"),e("th",{style:{"text-align":"center"}},"HO : PL")])],-1),dt=e("td",{style:{"text-align":"center"}},"2/28",-1),ct={style:{"text-align":"center"}},_t=e("tr",null,[e("td",{style:{"text-align":"center"}},"2/28"),e("td",{style:{"text-align":"center"}},"HO:2 , 琪琪大人 ")],-1),ut={key:0,style:{"text-align":"center",width:"100%"}},pt=e("div",{style:{"margin-right":"-50px","padding-right":"60px",color:"#2F4F4088"}}," HO ： ",-1),ht={style:{display:"flex","justify-content":"flex"}},mt={style:{display:"flex","justify-content":"flex"}},kt={__name:"ModuleView",setup(l){y.registerPlugin(ue),Z(()=>{y.to("#content_info",{xPercent:10,ease:"none",scrollTrigger:{trigger:"#content_info",scrub:!0}}),y.set("#content_notice",{x:500}),y.to("#content_notice",{xPercent:-15,ease:"none",scrollTrigger:{trigger:"#content_notice",scrub:!0}}),y.to(".head_img_wrapper",{xPercent:-5,ease:"none",scrollTrigger:{trigger:".head_img_wrapper",scrub:!0}}),y.to("#gm_intro",{yPercent:-10,ease:"none",scrollTrigger:{trigger:"gm_intro",scrub:!0,pin:!0}}),y.set(".cute_img",{x:-100}),y.to(".cute_img",{x:55,ease:"none",scrollTrigger:{trigger:".cute_img",scrub:!0}})});const a=ee(),c=te(),p=ge(),i=oe(),d=M([]),r=M({_id:"",m_name:"",gm:"",pl_id:"",pl_nickname:"",pl_dc_account:"",pl_dc_id:0,ho:1,loading:!1,showModal:!1}),o=M({_id:"",living:!0,name:"",gm:"",minTime:.5,difficulty:.5,image:[],pl:1,hashtag:[],info:"",notice:"",ccfoliaLink:"",discordLink:""}),u=M({_id:[],pl_id:[],pl_nickname:[],pl_dc_account:[],pl_dc_id:[],m_id:"",m_name:"",gm:.5,ho:[],date:""}),h=ne(!1),f=async()=>{r.loading=!0;const t={m_id:o._id,m_name:o.name,gm:o.gm,ho:r.ho};try{if(r._id.length===0){const{data2:n}=await O.post("/orders",t);p.success("訂單新增成功"),h.value=!1,console.log(n.result),d.push(n.result)}}catch{}r.loading=!1};return(async()=>{try{const{data:t}=await se.get("/modules/"+a.params.id);o._id=t.result._id,o.living=t.result.living,o.name=t.result.name,o.gm=t.result.gm,o.minTime=t.result.minTime,o.difficulty=t.result.difficulty,o.image=t.result.image[0],o.pl=t.result.pl,o.hashtag=t.result.hashtag,o.info=t.result.info,o.notice=t.result.notice,o.ccfoliaLink=t.result.ccfoliaLink,o.discordLink=t.result.discordLink,document.title=o.name+" | Matching TRPG",console.log(t.result)}catch{console.log("模組取得失敗"),c.go(-1)}try{const{data:t}=await O.get(`/orders/module/${o._id}`);for(let n=0;n<t.result.length;n++)u.pl_nickname[n]=t.result[n].pl_nickname,u.pl_id[n]=t.result[n].pl_id,u.ho[n]=t.result[n].ho;u._id=t.result._id,u.pl_id=t.result.pl_id,u.pl_dc_account=t.result.pl_dc_account,u.pl_dc_id=t.result.pl_dc_id,u.m_id=t.result.m_id,u.m_name=t.result.m_name,u.gm=t.result.gm,u.date=t.result.date,console.log(t.result.length)}catch(t){console.log(t),console.log("訂單取得失敗")}})(),(t,n)=>{const x=$e,v=Se,C=pe,L=de,w=fe,B=xe,q=he,K=me,D=ce,R=ve,A=be,J=ye,Q=re;return V(),H(ie,null,[e("div",Me,[e("div",Fe,[e("h1",We,[b(g(o.name)+" ",1),e("p",Le," GM: "+g(o.gm),1)]),e("div",De,[e("div",Re,[Oe,e("div",Ve,g(o.difficulty),1)]),e("div",He,[je,e("div",Ee,[b(g(o.minTime)+" ",1),Ne])]),e("div",Ge,[Ue,e("div",Ie,g(o.pl),1)]),e("div",{id:"attend",onClick:n[0]||(n[0]=m=>h.value=!0)},Ke)])]),e("div",Ae,[e("img",{src:o.image,class:"head_img_wrapper"},null,8,Je)]),e("div",Qe,[e("div",Xe,[s(v,{"align-text":"",type:"warning"},{default:_(()=>[s(x,{style:{color:"#2F4F40","font-weight":"800"},strong:""},{default:_(()=>[b(' " 模組簡介 " ')]),_:1})]),_:1}),e("p",Ye,g(o.info),1)]),Ze,e("div",et,[s(v,{prefix:"bar","align-text":"",type:"warning",style:{"margin-left":"3%"}},{default:_(()=>[s(x,{style:{color:"#2F4F4055","font-weight":"800"},strong:""},{default:_(()=>[b(" NOTICE ")]),_:1})]),_:1}),e("p",tt,g(o.notice),1)])]),e("div",ot,[e("h2",nt,[b(" - About GM "),e("span",st,"   "+g(o.gm),1),b(" -")]),it]),e("div",rt,[lt,s(C,{id:"favoriteTable","single-line":!1,striped:"",style:{"margin-top":"5%","margin-bottom":"10%"},class:"table"},{default:_(()=>[at,e("tbody",null,[e("tr",null,[dt,e("td",ct,"HO:1 , "+g(u.pl_nickname[0]),1)]),_t])]),_:1})])]),s(Q,{show:h.value,"onUpdate:show":n[8]||(n[8]=m=>h.value=m),"trap-focus":!1,"mask-closable":!1},{default:_(()=>[s(J,{model:r,"label-placement":"top",style:{"background-color":"#F8E9DD","border-radius":"15px",padding:"2%",width:"60vw"},onSubmit:j(f,["prevent"])},{default:_(()=>[s(A,{cols:"6 l:12","item-responsive":"",responsive:"screen","x-gap":"30"},{default:_(()=>[s(w,{span:"12"},{default:_(()=>[s(L,{"title-placement":"left",style:{"--n-color":"#5d8585","--n-text-color":"#5d8585",margin:"-8vh 0 -10vh 0"}},{default:_(()=>[r._id.length<=0?(V(),H("h2",ut,g(o.name)+"   報名中",1)):le("",!0)]),_:1})]),_:1}),s(w,{span:"xs:9 m:6 l:6",label:"模組名稱",path:"m_name"},{default:_(()=>[s(B,{value:o.name,"onUpdate:value":n[1]||(n[1]=m=>o.name=m),"default-value":o.name,type:"text",disabled:""},null,8,["value","default-value"])]),_:1}),s(w,{span:"xs:6 m:3 l:3",label:"想要的 HO",path:"pl"},{default:_(()=>[s(q,{value:r.ho,"onUpdate:value":n[2]||(n[2]=m=>r.ho=m),"default-value":1,clearable:""},{prefix:_(()=>[pt]),_:1},8,["value"])]),_:1}),s(w,{span:"xs:9 m:6 l:6",label:"PL 頭像",path:"pl_img"},{default:_(()=>[s(K,{src:T(i).image,width:"120"},null,8,["src"])]),_:1}),s(w,{span:"xs:9 m:6 l:6",label:"PL 暱稱",path:"pl_nickname"},{default:_(()=>[s(B,{value:T(i).nickname,"onUpdate:value":n[3]||(n[3]=m=>T(i).nickname=m),type:"text",disabled:""},null,8,["value"])]),_:1}),s(w,{span:"xs:9 m:6 l:6",label:"PL DC帳號",path:"pl_dc_account"},{default:_(()=>[s(B,{value:T(i).dc_account,"onUpdate:value":n[4]||(n[4]=m=>T(i).dc_account=m),type:"text",disabled:""},null,8,["value"])]),_:1}),s(w,{span:"xs:9 m:6 l:6",label:"PL資料 DC_id",path:"pl_dc_id"},{default:_(()=>[s(B,{value:T(i).dc_id,"onUpdate:value":n[5]||(n[5]=m=>T(i).dc_id=m),type:"text",disabled:""},null,8,["value"])]),_:1}),s(R,{span:"2",offset:"7"},{default:_(()=>[e("div",ht,[s(D,{type:"error",ghost:"",disabled:r.loading,round:"",size:"large",style:{width:"9vw",height:"2.2vw","font-size":"1rem"},onClick:n[6]||(n[6]=m=>h.value=!1)},{default:_(()=>[b(" 取    消 ")]),_:1},8,["disabled"])])]),_:1}),s(R,{span:"2"},{default:_(()=>[e("div",mt,[s(D,{disabled:r.loading,round:"",size:"large",style:{width:"9vw",height:"2.2vw","font-size":"1rem"},onKeydown:n[7]||(n[7]=ae(j(()=>{},["prevent"]),["enter"])),onClick:f},{default:_(()=>[b(" 送    出 ")]),_:1},8,["disabled"])])]),_:1})]),_:1})]),_:1},8,["model","onSubmit"])]),_:1},8,["show"])],64)}}};export{kt as default};
