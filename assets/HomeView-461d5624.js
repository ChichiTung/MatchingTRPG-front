import{D as I,C as m,a3 as _,E as h,G as R,H as N,aq as j,ar as E,as as v,X as k,a5 as D,t as u,Y as G,at as g,Z as V,$ as M,J as S,B,I as A,K as L,au as x,y as H,h as K,o as O,i as U,j as o,w as a,F as q,u as P,d,P as J,s as z,v as X,S as Y,an as Z}from"./index-fcbc0ebc.js";import{E as Q}from"./Edit-035f7d25.js";import{_ as ee}from"./DynamicTags-2e94ac73.js";import{_ as te,b as ne,d as se}from"./Grid-a1cb5cdf.js";import"./use-locale-72c68c20.js";import"./Add-507f5927.js";import"./Space-8d279138.js";import"./Suffix-d8d121e3.js";const oe=Array.apply(null,{length:24}).map((s,e)=>{const n=e+1,l=`calc(100% / 24 * ${n})`;return[h(`${n}-span`,{width:l}),h(`${n}-offset`,{marginLeft:l}),h(`${n}-push`,{left:l}),h(`${n}-pull`,{right:l})]}),ae=I([m("row",{width:"100%",display:"flex",flexWrap:"wrap"}),m("col",{verticalAlign:"top",boxSizing:"border-box",display:"inline-block",position:"relative",zIndex:"auto"},[_("box",{position:"relative",zIndex:"auto",width:"100%",height:"100%"}),oe])]),F=G("n-row"),le={gutter:{type:[Array,Number,String],default:0},alignItems:String,justifyContent:String},ie=R({name:"Row",props:le,setup(s){const{mergedClsPrefixRef:e,mergedRtlRef:n}=N(s);j("-legacy-grid",ae,e);const l=E("Row",n,e),i=v(()=>{const{gutter:t}=s;return Array.isArray(t)&&t[1]||0}),r=v(()=>{const{gutter:t}=s;return Array.isArray(t)?t[0]:Number(t)});return k(F,{mergedClsPrefixRef:e,gutterRef:D(s,"gutter"),verticalGutterRef:i,horizontalGutterRef:r}),{mergedClsPrefix:e,rtlEnabled:l,styleMargin:v(()=>`-${g(i.value,{c:.5})} -${g(r.value,{c:.5})}`),styleWidth:v(()=>`calc(100% + ${g(r.value)})`)}},render(){return u("div",{class:[`${this.mergedClsPrefix}-row`,this.rtlEnabled&&`${this.mergedClsPrefix}-row--rtl`],style:{margin:this.styleMargin,width:this.styleWidth,alignItems:this.alignItems,justifyContent:this.justifyContent}},this.$slots)}}),re={span:{type:[String,Number],default:1},push:{type:[String,Number],default:0},pull:{type:[String,Number],default:0},offset:{type:[String,Number],default:0}},ue=R({name:"Col",props:re,setup(s){const e=V(F,null);return e||M("col","`n-col` must be placed inside `n-row`."),{mergedClsPrefix:e.mergedClsPrefixRef,gutter:e.gutterRef,stylePadding:S(()=>`${g(e.verticalGutterRef.value,{c:.5})} ${g(e.horizontalGutterRef.value,{c:.5})}`),mergedPush:S(()=>Number(s.push)-Number(s.pull))}},render(){const{$slots:s,span:e,mergedPush:n,offset:l,stylePadding:i,gutter:r,mergedClsPrefix:t}=this;return u("div",{class:[`${t}-col`,{[`${t}-col--${e}-span`]:!0,[`${t}-col--${n}-push`]:n>0,[`${t}-col--${-n}-pull`]:n<0,[`${t}-col--${l}-offset`]:l}],style:{padding:i}},r?u("div",null,s):s)}}),ce=s=>{const{textColor2:e,textColor3:n,fontSize:l,fontWeight:i}=s;return{labelFontSize:l,labelFontWeight:i,valueFontWeight:i,valueFontSize:"24px",labelTextColor:n,valuePrefixTextColor:e,valueSuffixTextColor:e,valueTextColor:e}},de={name:"Statistic",common:B,self:ce},pe=de,fe=m("statistic",[_("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),m("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[_("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[m("icon",{verticalAlign:"-0.125em"})]),_("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),_("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[m("icon",{verticalAlign:"-0.125em"})])])]),me=Object.assign(Object.assign({},A.props),{tabularNums:Boolean,label:String,value:[String,Number]}),_e=R({name:"Statistic",props:me,setup(s){const{mergedClsPrefixRef:e,inlineThemeDisabled:n,mergedRtlRef:l}=N(s),i=A("Statistic","-statistic",fe,pe,s,e),r=E("Statistic",l,e),t=S(()=>{const{self:{labelFontWeight:b,valueFontSize:y,valueFontWeight:w,valuePrefixTextColor:$,labelTextColor:p,valueSuffixTextColor:f,valueTextColor:C,labelFontSize:T},common:{cubicBezierEaseInOut:W}}=i.value;return{"--n-bezier":W,"--n-label-font-size":T,"--n-label-font-weight":b,"--n-label-text-color":p,"--n-value-font-weight":w,"--n-value-font-size":y,"--n-value-prefix-text-color":$,"--n-value-suffix-text-color":f,"--n-value-text-color":C}}),c=n?L("statistic",void 0,t,s):void 0;return{rtlEnabled:r,mergedClsPrefix:e,cssVars:n?void 0:t,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var s;const{mergedClsPrefix:e,$slots:{default:n,label:l,prefix:i,suffix:r}}=this;return(s=this.onRender)===null||s===void 0||s.call(this),u("div",{class:[`${e}-statistic`,this.themeClass,this.rtlEnabled&&`${e}-statistic--rtl`],style:this.cssVars},x(l,t=>u("div",{class:`${e}-statistic__label`},this.label||t)),u("div",{class:`${e}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},x(i,t=>t&&u("span",{class:`${e}-statistic-value__prefix`},t)),this.value!==void 0?u("span",{class:`${e}-statistic-value__content`},this.value):x(n,t=>t&&u("span",{class:`${e}-statistic-value__content`},t)),x(r,t=>t&&u("span",{class:`${e}-statistic-value__suffix`},t))))}}),ge=""+new URL("ronnie-8c5995e0.png",import.meta.url).href;const he=d("h2",{class:"title"},"G M 檔 案",-1),ve=d("img",{src:ge,style:{width:"30%"}},null,-1),xe={style:{"font-size":"24px"}},be={class:"tags-wrapper",style:{background:"#DDA49244","border-radius":"8px",padding:"4%","margin-top":"-1px"}},ye=d("p",{style:{"font-size":"18px",width:"50vw",height:"20vh",background:"#2F4F4422","border-radius":"20px",padding:"5%"}},[d("p",null," 最 ☆ 貼貼本，但手下已經有一整座大墓園，專門帶高難度本 WWW ~ ※嚴禁※ 1.遲到 2.人身攻擊 ")],-1),we=d("h3",null,"模組劇本",-1),Ae={__name:"HomeView",setup(s){const e=H();return(n,l)=>{const i=X,r=Y,t=ne,c=ee,b=se,y=te,w=K("md-save"),$=Z,p=_e,f=ue,C=ie;return O(),U(q,null,[o(y,{model:n.form,rules:n.rules,size:n.size,"label-placement":"top",style:{"background-color":"#DDA49244","border-radius":"15px",padding:"2%",width:"80%",margin:"auto","box-shadow":"0.1rem 0.1rem 0.5rem #333"}},{default:a(()=>[o(b,{cols:"6 l:12","item-responsive":"",responsive:"screen","x-gap":"30"},{default:a(()=>[o(t,{span:"12"},{default:a(()=>[o(r,{"title-placement":"left",style:{"--n-color":"#5d8585","--n-text-color":"#5d8585",margin:"-8vh 0 -10vh 0"}},{default:a(()=>[he,o(i,{strong:"",secondary:"",circle:"",type:"success",size:"large",style:{"font-size":"15px","margin-left":"550%","margin-bottom":"50%"}},{icon:a(()=>[o(P(Q))]),_:1})]),_:1})]),_:1}),o(t,{span:"xs:9 m:6 l:6",label:"GM照片",path:"image"},{default:a(()=>[ve]),_:1}),o(t,{span:"xs:9 m:6 l:4",label:"GM暱稱",path:"nickname"},{default:a(()=>[d("p",xe,J(P(e).nickname),1)]),_:1}),o(t,{span:"xs:6 m:6 l:6",label:"帶團特色",path:"hashtag"},{default:a(()=>[d("div",be,[o(c,{type:"primary",round:"","input-style":"warning"})])]),_:1}),o(t,{span:"xs:9 m:6 l:6",label:"GM自介",path:"notice"},{default:a(()=>[ye]),_:1})]),_:1})]),_:1},8,["model","rules","size"]),o(C,{style:{width:"70%",padding:"2.5%","padding-left":"10%",margin:"auto","margin-top":"10%","background-color":"#DDA49299","border-radius":"15px","box-shadow":"0.1rem 0.1rem 0.5rem #333","margin-bottom":"10%"}},{default:a(()=>[o(f,{span:12},{default:a(()=>[o(p,{label:"模組劇本",value:30,style:{"margin-bottom":"10%"}},{prefix:a(()=>[o($,null,{default:a(()=>[o(w)]),_:1})]),suffix:a(()=>[]),default:a(()=>[we]),_:1})]),_:1}),o(f,{span:12},{default:a(()=>[o(p,{label:"帶團總數"},{default:a(()=>[z("      25 ")]),_:1})]),_:1}),o(f,{span:12},{default:a(()=>[o(p,{label:"最熱門模組"},{default:a(()=>[z("      所囚非愛 ")]),_:1})]),_:1}),o(f,{span:12},{default:a(()=>[o(p,{label:"忠實 PL"},{default:a(()=>[z("      琦琦琦琦 ")]),_:1})]),_:1})]),_:1})],64)}}};export{Ae as default};