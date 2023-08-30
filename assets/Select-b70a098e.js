import{aR as yt,aS as Ct,ar as Ne,as as ut,aT as He,az as tn,aU as ft,b as je,e as B,n as D,l as le,u as St,h as he,aA as nn,q as ce,i as Ke,x as Rt,a as at,s as on,aV as st,r as Se,T as Ft,g as oe,ah as it,a4 as Tt,aW as ln,Q as rn,w as an,z as sn,U as dn,aX as cn,aY as Ve,aZ as un,ag as Ce,a_ as fn,ae as hn,ak as ht,aD as vn,aj as gn,j as pn,a$ as lt,b0 as bn,b1 as mn,b2 as wn,v as xn,a2 as vt,b3 as yn,a8 as Cn,b4 as Sn,a7 as ae}from"./router-48931e80.js";import{u as zt}from"./use-locale-0327c502.js";import{a as Rn}from"./Suffix-a4f9a8a9.js";import{_ as Je}from"./Tag-3accda6e.js";import{d as re,o as ke,a3 as Fn,a4 as Tn,c as k,r as z,h as s,a5 as zn,n as dt,q as On,a0 as Ot,i as ct,a2 as ee,Z as Re,p as gt,b as Mn,F as Pn,w as kn}from"./plugin-vueexport-helper-dfa573d2.js";import{d as rt,p as Le,g as et}from"./index-714b5119.js";function In(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function tt(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(i=>{i&&i(o)})}}function pt(e){return e&-e}class _n{constructor(n,o){this.l=n,this.min=o;const i=new Array(n+1);for(let a=0;a<n+1;++a)i[a]=0;this.ft=i}add(n,o){if(o===0)return;const{l:i,ft:a}=this;for(n+=1;n<=i;)a[n]+=o,n+=pt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:i,l:a}=this;if(n>a)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let c=n*i;for(;n>0;)c+=o[n],n-=pt(n);return c}getBound(n){let o=0,i=this.l;for(;i>o;){const a=Math.floor((o+i)/2),c=this.sum(a);if(c>n){i=a;continue}else if(c<n){if(o===a)return this.sum(o+1)<=n?o+1:a;o=a}else return a}return o}}let De;function $n(){return De===void 0&&("matchMedia"in window?De=window.matchMedia("(pointer:coarse)").matches:De=!1),De}let nt;function bt(){return nt===void 0&&(nt="chrome"in window?window.devicePixelRatio:1),nt}const Bn=He(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[He("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[He("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),An=re({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=yt();Bn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Ct,ssr:n}),ke(()=>{const{defaultScrollIndex:h,defaultScrollKey:g}=e;h!=null?m({index:h}):g!=null&&m({key:g})});let o=!1,i=!1;Fn(()=>{if(o=!1,!i){i=!0;return}m({top:C.value,left:p})}),Tn(()=>{o=!0,i||(i=!0)});const a=k(()=>{const h=new Map,{keyField:g}=e;return e.items.forEach((_,W)=>{h.set(_[g],W)}),h}),c=z(null),f=z(void 0),l=new Map,x=k(()=>{const{items:h,itemSize:g,keyField:_}=e,W=new _n(h.length,g);return h.forEach((j,H)=>{const E=j[_],K=l.get(E);K!==void 0&&W.add(H,K)}),W}),w=z(0);let p=0;const C=z(0),T=Ne(()=>Math.max(x.value.getBound(C.value-rt(e.paddingTop))-1,0)),O=k(()=>{const{value:h}=f;if(h===void 0)return[];const{items:g,itemSize:_}=e,W=T.value,j=Math.min(W+Math.ceil(h/_+1),g.length-1),H=[];for(let E=W;E<=j;++E)H.push(g[E]);return H}),m=(h,g)=>{if(typeof h=="number"){y(h,g,"auto");return}const{left:_,top:W,index:j,key:H,position:E,behavior:K,debounce:r=!0}=h;if(_!==void 0||W!==void 0)y(_,W,K);else if(j!==void 0)S(j,K,r);else if(H!==void 0){const v=a.value.get(H);v!==void 0&&S(v,K,r)}else E==="bottom"?y(0,Number.MAX_SAFE_INTEGER,K):E==="top"&&y(0,0,K)};let F,A=null;function S(h,g,_){const{value:W}=x,j=W.sum(h)+rt(e.paddingTop);if(!_)c.value.scrollTo({left:0,top:j,behavior:g});else{F=h,A!==null&&window.clearTimeout(A),A=window.setTimeout(()=>{F=void 0,A=null},16);const{scrollTop:H,offsetHeight:E}=c.value;if(j>H){const K=W.get(h);j+K<=H+E||c.value.scrollTo({left:0,top:j+K-E,behavior:g})}else c.value.scrollTo({left:0,top:j,behavior:g})}}function y(h,g,_){c.value.scrollTo({left:h,top:g,behavior:_})}function V(h,g){var _,W,j;if(o||e.ignoreItemResize||J(g.target))return;const{value:H}=x,E=a.value.get(h),K=H.get(E),r=(j=(W=(_=g.borderBoxSize)===null||_===void 0?void 0:_[0])===null||W===void 0?void 0:W.blockSize)!==null&&j!==void 0?j:g.contentRect.height;if(r===K)return;r-e.itemSize===0?l.delete(h):l.set(h,r-e.itemSize);const L=r-K;if(L===0)return;H.add(E,L);const Q=c.value;if(Q!=null){if(F===void 0){const se=H.sum(E);Q.scrollTop>se&&Q.scrollBy(0,L)}else if(E<F)Q.scrollBy(0,L);else if(E===F){const se=H.sum(E);r+se>Q.scrollTop+Q.offsetHeight&&Q.scrollBy(0,L)}te()}w.value++}const Y=!$n();let q=!1;function N(h){var g;(g=e.onScroll)===null||g===void 0||g.call(e,h),(!Y||!q)&&te()}function G(h){var g;if((g=e.onWheel)===null||g===void 0||g.call(e,h),Y){const _=c.value;if(_!=null){if(h.deltaX===0&&(_.scrollTop===0&&h.deltaY<=0||_.scrollTop+_.offsetHeight>=_.scrollHeight&&h.deltaY>=0))return;h.preventDefault(),_.scrollTop+=h.deltaY/bt(),_.scrollLeft+=h.deltaX/bt(),te(),q=!0,tn(()=>{q=!1})}}}function X(h){if(o||J(h.target)||h.contentRect.height===f.value)return;f.value=h.contentRect.height;const{onResize:g}=e;g!==void 0&&g(h)}function te(){const{value:h}=c;h!=null&&(C.value=h.scrollTop,p=h.scrollLeft)}function J(h){let g=h;for(;g!==null;){if(g.style.display==="none")return!0;g=g.parentElement}return!1}return{listHeight:f,listStyle:{overflow:"auto"},keyToIndex:a,itemsStyle:k(()=>{const{itemResizable:h}=e,g=Le(x.value.sum());return w.value,[e.itemsStyle,{boxSizing:"content-box",height:h?"":g,minHeight:h?g:"",paddingTop:Le(e.paddingTop),paddingBottom:Le(e.paddingBottom)}]}),visibleItemsStyle:k(()=>(w.value,{transform:`translateY(${Le(x.value.sum(T.value))})`})),viewportItems:O,listElRef:c,itemsElRef:z(null),scrollTo:m,handleListResize:X,handleListScroll:N,handleListWheel:G,handleItemResize:V}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:i}=this;return s(ut,{onResize:this.handleListResize},{default:()=>{var a,c;return s("div",zn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?s("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[s(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(f=>{const l=f[n],x=o.get(l),w=this.$slots.default({item:f,index:x})[0];return e?s(ut,{key:l,onResize:p=>this.handleItemResize(l,p)},{default:()=>w}):(w.key=l,w)})})]):(c=(a=this.$slots).empty)===null||c===void 0?void 0:c.call(a)])}})}}),pe="v-hidden",En=He("[v-hidden]",{display:"none!important"}),mt=re({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const o=z(null),i=z(null);function a(){const{value:f}=o,{getCounter:l,getTail:x}=e;let w;if(l!==void 0?w=l():w=i.value,!f||!w)return;w.hasAttribute(pe)&&w.removeAttribute(pe);const{children:p}=f,C=f.offsetWidth,T=[],O=n.tail?x==null?void 0:x():null;let m=O?O.offsetWidth:0,F=!1;const A=f.children.length-(n.tail?1:0);for(let y=0;y<A-1;++y){if(y<0)continue;const V=p[y];if(F){V.hasAttribute(pe)||V.setAttribute(pe,"");continue}else V.hasAttribute(pe)&&V.removeAttribute(pe);const Y=V.offsetWidth;if(m+=Y,T[y]=Y,m>C){const{updateCounter:q}=e;for(let N=y;N>=0;--N){const G=A-1-N;q!==void 0?q(G):w.textContent=`${G}`;const X=w.offsetWidth;if(m-=T[N],m+X<=C||N===0){F=!0,y=N-1,O&&(y===-1?(O.style.maxWidth=`${C-X}px`,O.style.boxSizing="border-box"):O.style.maxWidth="");break}}}}const{onUpdateOverflow:S}=e;F?S!==void 0&&S(!0):(S!==void 0&&S(!1),w.setAttribute(pe,""))}const c=yt();return En.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Ct,ssr:c}),ke(a),{selfRef:o,counterRef:i,sync:a}},render(){const{$slots:e}=this;return dt(this.sync),s("div",{class:"v-overflow",ref:"selfRef"},[On(e,"default"),e.counter?e.counter():s("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Mt(e,n){n&&(ke(()=>{const{value:o}=e;o&&ft.registerHandler(o,n)}),Ot(()=>{const{value:o}=e;o&&ft.unregisterHandler(o)}))}const Ln=re({name:"Checkmark",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},s("g",{fill:"none"},s("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Dn=re({name:"Empty",render(){return s("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),s("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Nn=re({props:{onFocus:Function,onBlur:Function},setup(e){return()=>s("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Hn={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},Vn=e=>{const{textColorDisabled:n,iconColor:o,textColor2:i,fontSizeSmall:a,fontSizeMedium:c,fontSizeLarge:f,fontSizeHuge:l}=e;return Object.assign(Object.assign({},Hn),{fontSizeSmall:a,fontSizeMedium:c,fontSizeLarge:f,fontSizeHuge:l,textColor:n,iconColor:o,extraTextColor:i})},Wn={name:"Empty",common:je,self:Vn},Pt=Wn,jn=B("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[D("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[le("+",[D("description",`
 margin-top: 8px;
 `)])]),D("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),D("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Kn=Object.assign(Object.assign({},he.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Un=re({name:"Empty",props:Kn,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=St(e),i=he("Empty","-empty",jn,Pt,e,n),{localeRef:a}=zt("Empty"),c=ct(nn,null),f=k(()=>{var p,C,T;return(p=e.description)!==null&&p!==void 0?p:(T=(C=c==null?void 0:c.mergedComponentPropsRef.value)===null||C===void 0?void 0:C.Empty)===null||T===void 0?void 0:T.description}),l=k(()=>{var p,C;return((C=(p=c==null?void 0:c.mergedComponentPropsRef.value)===null||p===void 0?void 0:p.Empty)===null||C===void 0?void 0:C.renderIcon)||(()=>s(Dn,null))}),x=k(()=>{const{size:p}=e,{common:{cubicBezierEaseInOut:C},self:{[ce("iconSize",p)]:T,[ce("fontSize",p)]:O,textColor:m,iconColor:F,extraTextColor:A}}=i.value;return{"--n-icon-size":T,"--n-font-size":O,"--n-bezier":C,"--n-text-color":m,"--n-icon-color":F,"--n-extra-text-color":A}}),w=o?Ke("empty",k(()=>{let p="";const{size:C}=e;return p+=C[0],p}),x,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:l,localizedDescription:k(()=>f.value||a.value.description),cssVars:o?void 0:x,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),s("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?s("div",{class:`${n}-empty__icon`},e.icon?e.icon():s(Rt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?s("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?s("div",{class:`${n}-empty__extra`},e.extra()):null)}}),qn={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},Gn=e=>{const{borderRadius:n,popoverColor:o,textColor3:i,dividerColor:a,textColor2:c,primaryColorPressed:f,textColorDisabled:l,primaryColor:x,opacityDisabled:w,hoverColor:p,fontSizeSmall:C,fontSizeMedium:T,fontSizeLarge:O,fontSizeHuge:m,heightSmall:F,heightMedium:A,heightLarge:S,heightHuge:y}=e;return Object.assign(Object.assign({},qn),{optionFontSizeSmall:C,optionFontSizeMedium:T,optionFontSizeLarge:O,optionFontSizeHuge:m,optionHeightSmall:F,optionHeightMedium:A,optionHeightLarge:S,optionHeightHuge:y,borderRadius:n,color:o,groupHeaderTextColor:i,actionDividerColor:a,optionTextColor:c,optionTextColorPressed:f,optionTextColorDisabled:l,optionTextColorActive:x,optionOpacityDisabled:w,optionCheckColor:x,optionColorPending:p,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:p,actionTextColor:c,loadingColor:x})},Yn=at({name:"InternalSelectMenu",common:je,peers:{Scrollbar:on,Empty:Pt},self:Gn}),kt=Yn;function Zn(e,n){return s(Ft,{name:"fade-in-scale-up-transition"},{default:()=>e?s(Rt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>s(Ln)}):null})}const wt=re({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:i,valueSetRef:a,renderLabelRef:c,renderOptionRef:f,labelFieldRef:l,valueFieldRef:x,showCheckmarkRef:w,nodePropsRef:p,handleOptionClick:C,handleOptionMouseEnter:T}=ct(st),O=Ne(()=>{const{value:S}=o;return S?e.tmNode.key===S.key:!1});function m(S){const{tmNode:y}=e;y.disabled||C(S,y)}function F(S){const{tmNode:y}=e;y.disabled||T(S,y)}function A(S){const{tmNode:y}=e,{value:V}=O;y.disabled||V||T(S,y)}return{multiple:i,isGrouped:Ne(()=>{const{tmNode:S}=e,{parent:y}=S;return y&&y.rawNode.type==="group"}),showCheckmark:w,nodeProps:p,isPending:O,isSelected:Ne(()=>{const{value:S}=n,{value:y}=i;if(S===null)return!1;const V=e.tmNode.rawNode[x.value];if(y){const{value:Y}=a;return Y.has(V)}else return S===V}),labelField:l,renderLabel:c,renderOption:f,handleMouseMove:A,handleMouseEnter:F,handleClick:m}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:i,isGrouped:a,showCheckmark:c,nodeProps:f,renderOption:l,renderLabel:x,handleClick:w,handleMouseEnter:p,handleMouseMove:C}=this,T=Zn(o,e),O=x?[x(n,o),c&&T]:[Se(n[this.labelField],n,o),c&&T],m=f==null?void 0:f(n),F=s("div",Object.assign({},m,{class:[`${e}-base-select-option`,n.class,m==null?void 0:m.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:a,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:c}],style:[(m==null?void 0:m.style)||"",n.style||""],onClick:tt([w,m==null?void 0:m.onClick]),onMouseenter:tt([p,m==null?void 0:m.onMouseenter]),onMousemove:tt([C,m==null?void 0:m.onMousemove])}),s("div",{class:`${e}-base-select-option__content`},O));return n.render?n.render({node:F,option:n,selected:o}):l?l({node:F,option:n,selected:o}):F}}),xt=re({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:i}=ct(st);return{labelField:o,nodeProps:i,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:i,tmNode:{rawNode:a}}=this,c=i==null?void 0:i(a),f=n?n(a,!1):Se(a[this.labelField],a,!1),l=s("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c==null?void 0:c.class]}),f);return a.render?a.render({node:l,option:a}):o?o({node:l,option:a,selected:!1}):l}}),Xn=B("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[B("scrollbar",`
 max-height: var(--n-height);
 `),B("virtual-list",`
 max-height: var(--n-height);
 `),B("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[D("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),B("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),B("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),D("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),D("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),D("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),B("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),B("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[oe("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),le("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),le("&:active",`
 color: var(--n-option-text-color-pressed);
 `),oe("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),oe("pending",[le("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),oe("selected",`
 color: var(--n-option-text-color-active);
 `,[le("&::before",`
 background-color: var(--n-option-color-active);
 `),oe("pending",[le("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),oe("disabled",`
 cursor: not-allowed;
 `,[it("selected",`
 color: var(--n-option-text-color-disabled);
 `),oe("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),D("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Tt({enterScale:"0.5"})])])]),Qn=re({name:"InternalSelectMenu",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=he("InternalSelectMenu","-internal-select-menu",Xn,kt,e,ee(e,"clsPrefix")),o=z(null),i=z(null),a=z(null),c=k(()=>e.treeMate.getFlattenedNodes()),f=k(()=>cn(c.value)),l=z(null);function x(){const{treeMate:r}=e;let v=null;const{value:L}=e;L===null?v=r.getFirstAvailableNode():(e.multiple?v=r.getNode((L||[])[(L||[]).length-1]):v=r.getNode(L),(!v||v.disabled)&&(v=r.getFirstAvailableNode())),h(v||null)}function w(){const{value:r}=l;r&&!e.treeMate.getNode(r.key)&&(l.value=null)}let p;Re(()=>e.show,r=>{r?p=Re(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?x():w(),dt(g)):w()},{immediate:!0}):p==null||p()},{immediate:!0}),Ot(()=>{p==null||p()});const C=k(()=>rt(n.value.self[ce("optionHeight",e.size)])),T=k(()=>et(n.value.self[ce("padding",e.size)])),O=k(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),m=k(()=>{const r=c.value;return r&&r.length===0});function F(r){const{onToggle:v}=e;v&&v(r)}function A(r){const{onScroll:v}=e;v&&v(r)}function S(r){var v;(v=a.value)===null||v===void 0||v.sync(),A(r)}function y(){var r;(r=a.value)===null||r===void 0||r.sync()}function V(){const{value:r}=l;return r||null}function Y(r,v){v.disabled||h(v,!1)}function q(r,v){v.disabled||F(v)}function N(r){var v;Ve(r,"action")||(v=e.onKeyup)===null||v===void 0||v.call(e,r)}function G(r){var v;Ve(r,"action")||(v=e.onKeydown)===null||v===void 0||v.call(e,r)}function X(r){var v;(v=e.onMousedown)===null||v===void 0||v.call(e,r),!e.focusable&&r.preventDefault()}function te(){const{value:r}=l;r&&h(r.getNext({loop:!0}),!0)}function J(){const{value:r}=l;r&&h(r.getPrev({loop:!0}),!0)}function h(r,v=!1){l.value=r,v&&g()}function g(){var r,v;const L=l.value;if(!L)return;const Q=f.value(L.key);Q!==null&&(e.virtualScroll?(r=i.value)===null||r===void 0||r.scrollTo({index:Q}):(v=a.value)===null||v===void 0||v.scrollTo({index:Q,elSize:C.value}))}function _(r){var v,L;!((v=o.value)===null||v===void 0)&&v.contains(r.target)&&((L=e.onFocus)===null||L===void 0||L.call(e,r))}function W(r){var v,L;!((v=o.value)===null||v===void 0)&&v.contains(r.relatedTarget)||(L=e.onBlur)===null||L===void 0||L.call(e,r)}gt(st,{handleOptionMouseEnter:Y,handleOptionClick:q,valueSetRef:O,pendingTmNodeRef:l,nodePropsRef:ee(e,"nodeProps"),showCheckmarkRef:ee(e,"showCheckmark"),multipleRef:ee(e,"multiple"),valueRef:ee(e,"value"),renderLabelRef:ee(e,"renderLabel"),renderOptionRef:ee(e,"renderOption"),labelFieldRef:ee(e,"labelField"),valueFieldRef:ee(e,"valueField")}),gt(ln,o),ke(()=>{const{value:r}=a;r&&r.sync()});const j=k(()=>{const{size:r}=e,{common:{cubicBezierEaseInOut:v},self:{height:L,borderRadius:Q,color:se,groupHeaderTextColor:Fe,actionDividerColor:Te,optionTextColorPressed:be,optionTextColor:me,optionTextColorDisabled:de,optionTextColorActive:ne,optionOpacityDisabled:we,optionCheckColor:ue,actionTextColor:ze,optionColorPending:ve,optionColorActive:ge,loadingColor:Oe,loadingSize:Me,optionColorActivePending:Pe,[ce("optionFontSize",r)]:xe,[ce("optionHeight",r)]:ye,[ce("optionPadding",r)]:ie}}=n.value;return{"--n-height":L,"--n-action-divider-color":Te,"--n-action-text-color":ze,"--n-bezier":v,"--n-border-radius":Q,"--n-color":se,"--n-option-font-size":xe,"--n-group-header-text-color":Fe,"--n-option-check-color":ue,"--n-option-color-pending":ve,"--n-option-color-active":ge,"--n-option-color-active-pending":Pe,"--n-option-height":ye,"--n-option-opacity-disabled":we,"--n-option-text-color":me,"--n-option-text-color-active":ne,"--n-option-text-color-disabled":de,"--n-option-text-color-pressed":be,"--n-option-padding":ie,"--n-option-padding-left":et(ie,"left"),"--n-option-padding-right":et(ie,"right"),"--n-loading-color":Oe,"--n-loading-size":Me}}),{inlineThemeDisabled:H}=e,E=H?Ke("internal-select-menu",k(()=>e.size[0]),j,e):void 0,K={selfRef:o,next:te,prev:J,getPendingTmNode:V};return Mt(o,e.onResize),Object.assign({mergedTheme:n,virtualListRef:i,scrollbarRef:a,itemSize:C,padding:T,flattenedNodes:c,empty:m,virtualListContainer(){const{value:r}=i;return r==null?void 0:r.listElRef},virtualListContent(){const{value:r}=i;return r==null?void 0:r.itemsElRef},doScroll:A,handleFocusin:_,handleFocusout:W,handleKeyUp:N,handleKeyDown:G,handleMouseDown:X,handleVirtualListResize:y,handleVirtualListScroll:S,cssVars:H?void 0:j,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender},K)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:i,themeClass:a,onRender:c}=this;return c==null||c(),s("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,a,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?s("div",{class:`${o}-base-select-menu__loading`},s(an,{clsPrefix:o,strokeWidth:20})):this.empty?s("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},dn(e.empty,()=>[s(Un,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty})])):s(sn,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?s(An,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:f})=>f.isGroup?s(xt,{key:f.key,clsPrefix:o,tmNode:f}):f.ignored?null:s(wt,{clsPrefix:o,key:f.key,tmNode:f})}):s("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(f=>f.isGroup?s(xt,{key:f.key,clsPrefix:o,tmNode:f}):s(wt,{clsPrefix:o,key:f.key,tmNode:f})))}),rn(e.action,f=>f&&[s("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},f),s(Nn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Jn={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},eo=e=>{const{borderRadius:n,textColor2:o,textColorDisabled:i,inputColor:a,inputColorDisabled:c,primaryColor:f,primaryColorHover:l,warningColor:x,warningColorHover:w,errorColor:p,errorColorHover:C,borderColor:T,iconColor:O,iconColorDisabled:m,clearColor:F,clearColorHover:A,clearColorPressed:S,placeholderColor:y,placeholderColorDisabled:V,fontSizeTiny:Y,fontSizeSmall:q,fontSizeMedium:N,fontSizeLarge:G,heightTiny:X,heightSmall:te,heightMedium:J,heightLarge:h}=e;return Object.assign(Object.assign({},Jn),{fontSizeTiny:Y,fontSizeSmall:q,fontSizeMedium:N,fontSizeLarge:G,heightTiny:X,heightSmall:te,heightMedium:J,heightLarge:h,borderRadius:n,textColor:o,textColorDisabled:i,placeholderColor:y,placeholderColorDisabled:V,color:a,colorDisabled:c,colorActive:a,border:`1px solid ${T}`,borderHover:`1px solid ${l}`,borderActive:`1px solid ${f}`,borderFocus:`1px solid ${l}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${Ce(f,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${Ce(f,{alpha:.2})}`,caretColor:f,arrowColor:O,arrowColorDisabled:m,loadingColor:f,borderWarning:`1px solid ${x}`,borderHoverWarning:`1px solid ${w}`,borderActiveWarning:`1px solid ${x}`,borderFocusWarning:`1px solid ${w}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${Ce(x,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${Ce(x,{alpha:.2})}`,colorActiveWarning:a,caretColorWarning:x,borderError:`1px solid ${p}`,borderHoverError:`1px solid ${C}`,borderActiveError:`1px solid ${p}`,borderFocusError:`1px solid ${C}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${Ce(p,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${Ce(p,{alpha:.2})}`,colorActiveError:a,caretColorError:p,clearColor:F,clearColorHover:A,clearColorPressed:S})},to=at({name:"InternalSelection",common:je,peers:{Popover:un},self:eo}),It=to,no=le([B("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[B("base-loading",`
 color: var(--n-loading-color);
 `),B("base-selection-tags","min-height: var(--n-height);"),D("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),D("state-border",`
 z-index: 1;
 border-color: #0000;
 `),B("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[D("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),B("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[D("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),B("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[D("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),B("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),B("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[B("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[D("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),D("render-label",`
 color: var(--n-text-color);
 `)]),it("disabled",[le("&:hover",[D("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),oe("focus",[D("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),oe("active",[D("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),B("base-selection-label","background-color: var(--n-color-active);"),B("base-selection-tags","background-color: var(--n-color-active);")])]),oe("disabled","cursor: not-allowed;",[D("arrow",`
 color: var(--n-arrow-color-disabled);
 `),B("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[B("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),D("render-label",`
 color: var(--n-text-color-disabled);
 `)]),B("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),B("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),B("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[D("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),D("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>oe(`${e}-status`,[D("state-border",`border: var(--n-border-${e});`),it("disabled",[le("&:hover",[D("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),oe("active",[D("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),B("base-selection-label",`background-color: var(--n-color-active-${e});`),B("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),oe("focus",[D("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),B("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),B("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[le("&:last-child","padding-right: 0;"),B("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[D("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),oo=re({name:"InternalSelection",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const n=z(null),o=z(null),i=z(null),a=z(null),c=z(null),f=z(null),l=z(null),x=z(null),w=z(null),p=z(null),C=z(!1),T=z(!1),O=z(!1),m=he("InternalSelection","-internal-selection",no,It,e,ee(e,"clsPrefix")),F=k(()=>e.clearable&&!e.disabled&&(O.value||e.active)),A=k(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Se(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),S=k(()=>{const d=e.selectedOption;if(d)return d[e.labelField]}),y=k(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function V(){var d;const{value:b}=n;if(b){const{value:U}=o;U&&(U.style.width=`${b.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=w.value)===null||d===void 0||d.sync()))}}function Y(){const{value:d}=p;d&&(d.style.display="none")}function q(){const{value:d}=p;d&&(d.style.display="inline-block")}Re(ee(e,"active"),d=>{d||Y()}),Re(ee(e,"pattern"),()=>{e.multiple&&dt(V)});function N(d){const{onFocus:b}=e;b&&b(d)}function G(d){const{onBlur:b}=e;b&&b(d)}function X(d){const{onDeleteOption:b}=e;b&&b(d)}function te(d){const{onClear:b}=e;b&&b(d)}function J(d){const{onPatternInput:b}=e;b&&b(d)}function h(d){var b;(!d.relatedTarget||!(!((b=i.value)===null||b===void 0)&&b.contains(d.relatedTarget)))&&N(d)}function g(d){var b;!((b=i.value)===null||b===void 0)&&b.contains(d.relatedTarget)||G(d)}function _(d){te(d)}function W(){O.value=!0}function j(){O.value=!1}function H(d){!e.active||!e.filterable||d.target!==o.value&&d.preventDefault()}function E(d){X(d)}function K(d){if(d.key==="Backspace"&&!r.value&&!e.pattern.length){const{selectedOptions:b}=e;b!=null&&b.length&&E(b[b.length-1])}}const r=z(!1);let v=null;function L(d){const{value:b}=n;if(b){const U=d.target.value;b.textContent=U,V()}e.ignoreComposition&&r.value?v=d:J(d)}function Q(){r.value=!0}function se(){r.value=!1,e.ignoreComposition&&J(v),v=null}function Fe(d){var b;T.value=!0,(b=e.onPatternFocus)===null||b===void 0||b.call(e,d)}function Te(d){var b;T.value=!1,(b=e.onPatternBlur)===null||b===void 0||b.call(e,d)}function be(){var d,b;if(e.filterable)T.value=!1,(d=f.value)===null||d===void 0||d.blur(),(b=o.value)===null||b===void 0||b.blur();else if(e.multiple){const{value:U}=a;U==null||U.blur()}else{const{value:U}=c;U==null||U.blur()}}function me(){var d,b,U;e.filterable?(T.value=!1,(d=f.value)===null||d===void 0||d.focus()):e.multiple?(b=a.value)===null||b===void 0||b.focus():(U=c.value)===null||U===void 0||U.focus()}function de(){const{value:d}=o;d&&(q(),d.focus())}function ne(){const{value:d}=o;d&&d.blur()}function we(d){const{value:b}=l;b&&b.setTextContent(`+${d}`)}function ue(){const{value:d}=x;return d}function ze(){return o.value}let ve=null;function ge(){ve!==null&&window.clearTimeout(ve)}function Oe(){e.disabled||e.active||(ge(),ve=window.setTimeout(()=>{y.value&&(C.value=!0)},100))}function Me(){ge()}function Pe(d){d||(ge(),C.value=!1)}Re(y,d=>{d||(C.value=!1)}),ke(()=>{Mn(()=>{const d=f.value;d&&(d.tabIndex=e.disabled||T.value?-1:0)})}),Mt(i,e.onResize);const{inlineThemeDisabled:xe}=e,ye=k(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:b},self:{borderRadius:U,color:Ie,placeholderColor:Ue,textColor:qe,paddingSingle:Ge,paddingMultiple:Ye,caretColor:_e,colorDisabled:$e,textColorDisabled:Be,placeholderColorDisabled:Ze,colorActive:Xe,boxShadowFocus:Ae,boxShadowActive:fe,boxShadowHover:t,border:u,borderFocus:R,borderHover:$,borderActive:M,arrowColor:I,arrowColorDisabled:P,loadingColor:Z,colorActiveWarning:Ee,boxShadowFocusWarning:Qe,boxShadowActiveWarning:$t,boxShadowHoverWarning:Bt,borderWarning:At,borderFocusWarning:Et,borderHoverWarning:Lt,borderActiveWarning:Dt,colorActiveError:Nt,boxShadowFocusError:Ht,boxShadowActiveError:Vt,boxShadowHoverError:Wt,borderError:jt,borderFocusError:Kt,borderHoverError:Ut,borderActiveError:qt,clearColor:Gt,clearColorHover:Yt,clearColorPressed:Zt,clearSize:Xt,arrowSize:Qt,[ce("height",d)]:Jt,[ce("fontSize",d)]:en}}=m.value;return{"--n-bezier":b,"--n-border":u,"--n-border-active":M,"--n-border-focus":R,"--n-border-hover":$,"--n-border-radius":U,"--n-box-shadow-active":fe,"--n-box-shadow-focus":Ae,"--n-box-shadow-hover":t,"--n-caret-color":_e,"--n-color":Ie,"--n-color-active":Xe,"--n-color-disabled":$e,"--n-font-size":en,"--n-height":Jt,"--n-padding-single":Ge,"--n-padding-multiple":Ye,"--n-placeholder-color":Ue,"--n-placeholder-color-disabled":Ze,"--n-text-color":qe,"--n-text-color-disabled":Be,"--n-arrow-color":I,"--n-arrow-color-disabled":P,"--n-loading-color":Z,"--n-color-active-warning":Ee,"--n-box-shadow-focus-warning":Qe,"--n-box-shadow-active-warning":$t,"--n-box-shadow-hover-warning":Bt,"--n-border-warning":At,"--n-border-focus-warning":Et,"--n-border-hover-warning":Lt,"--n-border-active-warning":Dt,"--n-color-active-error":Nt,"--n-box-shadow-focus-error":Ht,"--n-box-shadow-active-error":Vt,"--n-box-shadow-hover-error":Wt,"--n-border-error":jt,"--n-border-focus-error":Kt,"--n-border-hover-error":Ut,"--n-border-active-error":qt,"--n-clear-size":Xt,"--n-clear-color":Gt,"--n-clear-color-hover":Yt,"--n-clear-color-pressed":Zt,"--n-arrow-size":Qt}}),ie=xe?Ke("internal-selection",k(()=>e.size[0]),ye,e):void 0;return{mergedTheme:m,mergedClearable:F,patternInputFocused:T,filterablePlaceholder:A,label:S,selected:y,showTagsPanel:C,isComposing:r,counterRef:l,counterWrapperRef:x,patternInputMirrorRef:n,patternInputRef:o,selfRef:i,multipleElRef:a,singleElRef:c,patternInputWrapperRef:f,overflowRef:w,inputTagElRef:p,handleMouseDown:H,handleFocusin:h,handleClear:_,handleMouseEnter:W,handleMouseLeave:j,handleDeleteOption:E,handlePatternKeyDown:K,handlePatternInputInput:L,handlePatternInputBlur:Te,handlePatternInputFocus:Fe,handleMouseEnterCounter:Oe,handleMouseLeaveCounter:Me,handleFocusout:g,handleCompositionEnd:se,handleCompositionStart:Q,onPopoverUpdateShow:Pe,focus:me,focusInput:de,blur:be,blurInput:ne,updateCounter:we,getCounter:ue,getTail:ze,renderLabel:e.renderLabel,cssVars:xe?void 0:ye,themeClass:ie==null?void 0:ie.themeClass,onRender:ie==null?void 0:ie.onRender}},render(){const{status:e,multiple:n,size:o,disabled:i,filterable:a,maxTagCount:c,bordered:f,clsPrefix:l,onRender:x,renderTag:w,renderLabel:p}=this;x==null||x();const C=c==="responsive",T=typeof c=="number",O=C||T,m=s(fn,null,{default:()=>s(Rn,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var A,S;return(S=(A=this.$slots).arrow)===null||S===void 0?void 0:S.call(A)}})});let F;if(n){const{labelField:A}=this,S=g=>s("div",{class:`${l}-base-selection-tag-wrapper`,key:g.value},w?w({option:g,handleClose:()=>this.handleDeleteOption(g)}):s(Je,{size:o,closable:!g.disabled,disabled:i,onClose:()=>this.handleDeleteOption(g),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>p?p(g,!0):Se(g[A],g,!0)})),y=()=>(T?this.selectedOptions.slice(0,c):this.selectedOptions).map(S),V=a?s("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),s("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,Y=C?()=>s("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},s(Je,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let q;if(T){const g=this.selectedOptions.length-c;g>0&&(q=s("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},s(Je,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${g}`})))}const N=C?a?s(mt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:y,counter:Y,tail:()=>V}):s(mt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:y,counter:Y}):T?y().concat(q):y(),G=O?()=>s("div",{class:`${l}-base-selection-popover`},C?y():this.selectedOptions.map(S)):void 0,X=O?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,J=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?s("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},s("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,h=a?s("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},N,C?null:V,m):s("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:i?void 0:0},N,m);F=s(Pn,null,O?s(hn,Object.assign({},X,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>h,default:G}):h,J)}else if(a){const A=this.pattern||this.isComposing,S=this.active?!A:!this.selected,y=this.active?!1:this.selected;F=s("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),y?s("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},s("div",{class:`${l}-base-selection-overlay__wrapper`},w?w({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):Se(this.label,this.selectedOption,!0))):null,S?s("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,m)}else F=s("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?s("div",{class:`${l}-base-selection-input`,title:In(this.label),key:"input"},s("div",{class:`${l}-base-selection-input__content`},w?w({option:this.selectedOption,handleClose:()=>{}}):p?p(this.selectedOption,!0):Se(this.label,this.selectedOption,!0))):s("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),m);return s("div",{ref:"selfRef",class:[`${l}-base-selection`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},F,f?s("div",{class:`${l}-base-selection__border`}):null,f?s("div",{class:`${l}-base-selection__state-border`}):null)}});function We(e){return e.type==="group"}function _t(e){return e.type==="ignored"}function ot(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function io(e,n){return{getIsGroup:We,getIgnored:_t,getKey(i){return We(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[n]}}}function lo(e,n,o,i){if(!n)return e;function a(c){if(!Array.isArray(c))return[];const f=[];for(const l of c)if(We(l)){const x=a(l[i]);x.length&&f.push(Object.assign({},l,{[i]:x}))}else{if(_t(l))continue;n(o,l)&&f.push(l)}return f}return a(e)}function ro(e,n,o){const i=new Map;return e.forEach(a=>{We(a)?a[o].forEach(c=>{i.set(c[n],c)}):i.set(a[n],a)}),i}function ao(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const so=at({name:"Select",common:je,peers:{InternalSelection:It,InternalSelectMenu:kt},self:ao}),co=so,uo=le([B("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),B("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Tt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),fo=Object.assign(Object.assign({},he.props),{to:lt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),wo=re({name:"Select",props:fo,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:i,inlineThemeDisabled:a}=St(e),c=he("Select","-select",uo,co,e,n),f=z(e.defaultValue),l=ee(e,"value"),x=ht(l,f),w=z(!1),p=z(""),C=k(()=>{const{valueField:t,childrenField:u}=e,R=io(t,u);return yn(g.value,R)}),T=k(()=>ro(J.value,e.valueField,e.childrenField)),O=z(!1),m=ht(ee(e,"show"),O),F=z(null),A=z(null),S=z(null),{localeRef:y}=zt("Select"),V=k(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:y.value.placeholder}),Y=vn(e,["items","options"]),q=[],N=z([]),G=z([]),X=z(new Map),te=k(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:u,valueField:R}=e;return $=>({[u]:String($),[R]:$})}return t===!1?!1:u=>Object.assign(t(u),{value:u})}),J=k(()=>G.value.concat(N.value).concat(Y.value)),h=k(()=>{const{filter:t}=e;if(t)return t;const{labelField:u,valueField:R}=e;return($,M)=>{if(!M)return!1;const I=M[u];if(typeof I=="string")return ot($,I);const P=M[R];return typeof P=="string"?ot($,P):typeof P=="number"?ot($,String(P)):!1}}),g=k(()=>{if(e.remote)return Y.value;{const{value:t}=J,{value:u}=p;return!u.length||!e.filterable?t:lo(t,h.value,u,e.childrenField)}});function _(t){const u=e.remote,{value:R}=X,{value:$}=T,{value:M}=te,I=[];return t.forEach(P=>{if($.has(P))I.push($.get(P));else if(u&&R.has(P))I.push(R.get(P));else if(M){const Z=M(P);Z&&I.push(Z)}}),I}const W=k(()=>{if(e.multiple){const{value:t}=x;return Array.isArray(t)?_(t):[]}return null}),j=k(()=>{const{value:t}=x;return!e.multiple&&!Array.isArray(t)?t===null?null:_([t])[0]||null:null}),H=gn(e),{mergedSizeRef:E,mergedDisabledRef:K,mergedStatusRef:r}=H;function v(t,u){const{onChange:R,"onUpdate:value":$,onUpdateValue:M}=e,{nTriggerFormChange:I,nTriggerFormInput:P}=H;R&&ae(R,t,u),M&&ae(M,t,u),$&&ae($,t,u),f.value=t,I(),P()}function L(t){const{onBlur:u}=e,{nTriggerFormBlur:R}=H;u&&ae(u,t),R()}function Q(){const{onClear:t}=e;t&&ae(t)}function se(t){const{onFocus:u,showOnFocus:R}=e,{nTriggerFormFocus:$}=H;u&&ae(u,t),$(),R&&de()}function Fe(t){const{onSearch:u}=e;u&&ae(u,t)}function Te(t){const{onScroll:u}=e;u&&ae(u,t)}function be(){var t;const{remote:u,multiple:R}=e;if(u){const{value:$}=X;if(R){const{valueField:M}=e;(t=W.value)===null||t===void 0||t.forEach(I=>{$.set(I[M],I)})}else{const M=j.value;M&&$.set(M[e.valueField],M)}}}function me(t){const{onUpdateShow:u,"onUpdate:show":R}=e;u&&ae(u,t),R&&ae(R,t),O.value=t}function de(){K.value||(me(!0),O.value=!0,e.filterable&&Be())}function ne(){me(!1)}function we(){p.value="",G.value=q}const ue=z(!1);function ze(){e.filterable&&(ue.value=!0)}function ve(){e.filterable&&(ue.value=!1,m.value||we())}function ge(){K.value||(m.value?e.filterable?Be():ne():de())}function Oe(t){var u,R;!((R=(u=S.value)===null||u===void 0?void 0:u.selfRef)===null||R===void 0)&&R.contains(t.relatedTarget)||(w.value=!1,L(t),ne())}function Me(t){se(t),w.value=!0}function Pe(t){w.value=!0}function xe(t){var u;!((u=F.value)===null||u===void 0)&&u.$el.contains(t.relatedTarget)||(w.value=!1,L(t),ne())}function ye(){var t;(t=F.value)===null||t===void 0||t.focus(),ne()}function ie(t){var u;m.value&&(!((u=F.value)===null||u===void 0)&&u.$el.contains(Cn(t))||ne())}function d(t){if(!Array.isArray(t))return[];if(te.value)return Array.from(t);{const{remote:u}=e,{value:R}=T;if(u){const{value:$}=X;return t.filter(M=>R.has(M)||$.has(M))}else return t.filter($=>R.has($))}}function b(t){U(t.rawNode)}function U(t){if(K.value)return;const{tag:u,remote:R,clearFilterAfterSelect:$,valueField:M}=e;if(u&&!R){const{value:I}=G,P=I[0]||null;if(P){const Z=N.value;Z.length?Z.push(P):N.value=[P],G.value=q}}if(R&&X.value.set(t[M],t),e.multiple){const I=d(x.value),P=I.findIndex(Z=>Z===t[M]);if(~P){if(I.splice(P,1),u&&!R){const Z=Ie(t[M]);~Z&&(N.value.splice(Z,1),$&&(p.value=""))}}else I.push(t[M]),$&&(p.value="");v(I,_(I))}else{if(u&&!R){const I=Ie(t[M]);~I?N.value=[N.value[I]]:N.value=q}$e(),ne(),v(t[M],t)}}function Ie(t){return N.value.findIndex(R=>R[e.valueField]===t)}function Ue(t){m.value||de();const{value:u}=t.target;p.value=u;const{tag:R,remote:$}=e;if(Fe(u),R&&!$){if(!u){G.value=q;return}const{onCreate:M}=e,I=M?M(u):{[e.labelField]:u,[e.valueField]:u},{valueField:P}=e;Y.value.some(Z=>Z[P]===I[P])||N.value.some(Z=>Z[P]===I[P])?G.value=q:G.value=[I]}}function qe(t){t.stopPropagation();const{multiple:u}=e;!u&&e.filterable&&ne(),Q(),u?v([],[]):v(null,null)}function Ge(t){!Ve(t,"action")&&!Ve(t,"empty")&&t.preventDefault()}function Ye(t){Te(t)}function _e(t){var u,R,$,M,I;switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((u=F.value)===null||u===void 0)&&u.isComposing)){if(m.value){const P=(R=S.value)===null||R===void 0?void 0:R.getPendingTmNode();P?b(P):e.filterable||(ne(),$e())}else if(de(),e.tag&&ue.value){const P=G.value[0];if(P){const Z=P[e.valueField],{value:Ee}=x;e.multiple&&Array.isArray(Ee)&&Ee.some(Qe=>Qe===Z)||U(P)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;m.value&&(($=S.value)===null||$===void 0||$.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;m.value?(M=S.value)===null||M===void 0||M.next():de();break;case"Escape":m.value&&(Sn(t),ne()),(I=F.value)===null||I===void 0||I.focus();break}}function $e(){var t;(t=F.value)===null||t===void 0||t.focus()}function Be(){var t;(t=F.value)===null||t===void 0||t.focusInput()}function Ze(){var t;m.value&&((t=A.value)===null||t===void 0||t.syncPosition())}be(),Re(ee(e,"options"),be);const Xe={focus:()=>{var t;(t=F.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=F.value)===null||t===void 0||t.blur()}},Ae=k(()=>{const{self:{menuBoxShadow:t}}=c.value;return{"--n-menu-box-shadow":t}}),fe=a?Ke("select",void 0,Ae,e):void 0;return Object.assign(Object.assign({},Xe),{mergedStatus:r,mergedClsPrefix:n,mergedBordered:o,namespace:i,treeMate:C,isMounted:pn(),triggerRef:F,menuRef:S,pattern:p,uncontrolledShow:O,mergedShow:m,adjustedTo:lt(e),uncontrolledValue:f,mergedValue:x,followerRef:A,localizedPlaceholder:V,selectedOption:j,selectedOptions:W,mergedSize:E,mergedDisabled:K,focused:w,activeWithoutMenuOpen:ue,inlineThemeDisabled:a,onTriggerInputFocus:ze,onTriggerInputBlur:ve,handleTriggerOrMenuResize:Ze,handleMenuFocus:Pe,handleMenuBlur:xe,handleMenuTabOut:ye,handleTriggerClick:ge,handleToggle:b,handleDeleteOption:U,handlePatternInput:Ue,handleClear:qe,handleTriggerBlur:Oe,handleTriggerFocus:Me,handleKeydown:_e,handleMenuAfterLeave:we,handleMenuClickOutside:ie,handleMenuScroll:Ye,handleMenuKeydown:_e,handleMenuMousedown:Ge,mergedTheme:c,cssVars:a?void 0:Ae,themeClass:fe==null?void 0:fe.themeClass,onRender:fe==null?void 0:fe.onRender})},render(){return s("div",{class:`${this.mergedClsPrefix}-select`},s(bn,null,{default:()=>[s(mn,null,{default:()=>s(oo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),s(wn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===lt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>s(Ft,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),kn(s(Qn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,a;return[(a=(i=this.$slots).empty)===null||a===void 0?void 0:a.call(i)]},action:()=>{var i,a;return[(a=(i=this.$slots).action)===null||a===void 0?void 0:a.call(i)]}}),this.displayDirective==="show"?[[xn,this.mergedShow],[vt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[vt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{wo as _};