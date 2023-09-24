import{g as Re,S as Pe}from"./ScrollTrigger-010257a6.js";import{V as St,W as Ct,C as Rt,X as Ge,Y as Pt,Z as zt,$ as kt,a0 as It,H as fe,I as ve,r as M,a1 as Dt,v as b,a2 as Vt,K as h,f as Ve,a3 as Je,D as Tt,a4 as d,E as $,G as f,a5 as $t,a6 as Nt,a7 as Et,a8 as Mt,a9 as ue,J as Qe,L as At,aa as jt,ab as Xe,ac as Fe,ad as Bt,ae as Lt,af as Ot,ag as H,ah as Ye,ai as Ke,n as Xt,aj as Ft,ak as G,e as Yt,al as Kt,h as Wt,o as ze,j as ke,d as L,k as K,w as J,F as Ut,l as Zt,q as qt}from"./index-dd25a306.js";import{_ as Ht}from"./ModuleCard-8c7bbf2a.js";import{c as Gt}from"./_createCompounder-b9cc44ef.js";import{u as Jt}from"./use-message-bb736759.js";import"./Rate-59e66635.js";function Qt(e){return St(Ct(e).toLowerCase())}var en=Gt(function(e,o,a){return o=o.toLowerCase(),e+(a?Qt(o):o)});const We=en,tn=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),nn={name:"Carousel",common:Rt,self:tn},on=nn;function an(e){const{length:o}=e;return o>1&&(e.push(Ue(e[0],0,"append")),e.unshift(Ue(e[o-1],o-1,"prepend"))),e}function Ue(e,o,a){return Ge(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Ze(e,o,a){return a?e===0?o-3:e===o-1?0:e-1:e}function Ie(e,o){return o?e+1:e}function sn(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function rn(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function ln(e,o){return o&&e>3?e-2:e}function qe(e){return window.TouchEvent&&e instanceof window.TouchEvent}function He(e,o){let{offsetWidth:a,offsetHeight:i}=e;if(o){const u=getComputedStyle(e);a=a-parseFloat(u.getPropertyValue("padding-left"))-parseFloat(u.getPropertyValue("padding-right")),i=i-parseFloat(u.getPropertyValue("padding-top"))-parseFloat(u.getPropertyValue("padding-bottom"))}return{width:a,height:i}}function ce(e,o,a){return e<o?o:e>a?a:e}function un(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,i,,u="ms"]=a;return Number(i)*(u==="ms"?1:1e3)}return 0}const et=zt("n-carousel-methods"),cn=e=>Pt(et,e),Te=(e="unknown",o="component")=>{const a=kt(et);return a||It(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a},dn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},fn=fe({name:"CarouselDots",props:dn,setup(e){const{mergedClsPrefixRef:o}=ve(e),a=M([]),i=Te();function u(g,v){switch(g.key){case"Enter":case" ":g.preventDefault(),i.to(v);return}e.keyboard&&S(g)}function x(g){e.trigger==="hover"&&i.to(g)}function y(g){e.trigger==="click"&&i.to(g)}function S(g){var v;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const w=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(w==="input"||w==="textarea")return;const{code:R}=g,A=R==="PageUp"||R==="ArrowUp",j=R==="PageDown"||R==="ArrowDown",C=R==="PageUp"||R==="ArrowRight",P=R==="PageDown"||R==="ArrowLeft",z=i.isVertical(),N=z?A:C,W=z?j:P;!N&&!W||(g.preventDefault(),N&&!i.isNextDisabled()?(i.next(),_(i.currentIndexRef.value)):W&&!i.isPrevDisabled()&&(i.prev(),_(i.currentIndexRef.value)))}function _(g){var v;(v=a.value[g])===null||v===void 0||v.focus()}return Dt(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:u,handleMouseenter:x,handleClick:y}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return b("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Vt(this.total,a=>{const i=a===this.currentIndex;return b("div",{"aria-selected":i,ref:u=>o.push(u),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,i&&`${e}-carousel__dot--active`],key:a,onClick:()=>this.handleClick(a),onMouseenter:()=>this.handleMouseenter(a),onKeydown:u=>this.handleKeydown(u,a)})}))}}),vn=b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),hn=b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),pn=fe({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=ve(e),{isVertical:a,isPrevDisabled:i,isNextDisabled:u,prev:x,next:y}=Te();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:i,isNextDisabled:u,prev:x,next:y}},render(){const{mergedClsPrefix:e}=this;return b("div",{class:`${e}-carousel__arrow-group`},b("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},vn),b("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},hn))}}),de="CarouselItem",gn=e=>{var o;return((o=e.type)===null||o===void 0?void 0:o.name)===de},tt=fe({name:de,setup(e){const{mergedClsPrefixRef:o}=ve(e),a=Te(We(de),`n-${We(de)}`),i=M(),u=h(()=>{const{value:v}=i;return v?a.getSlideIndex(v):-1}),x=h(()=>a.isPrev(u.value)),y=h(()=>a.isNext(u.value)),S=h(()=>a.isActive(u.value)),_=h(()=>a.getSlideStyle(u.value));Ve(()=>a.addSlide(i.value)),Je(()=>{a.removeSlide(i.value)});function g(v){const{value:w}=u;w!==void 0&&(a==null||a.onCarouselItemClick(w,v))}return{mergedClsPrefix:o,selfElRef:i,isPrev:x,isNext:y,isActive:S,index:u,style:_,handleClick:g}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:i,isNext:u,isActive:x,index:y,style:S}=this,_=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:x,[`${a}-carousel__slide--prev`]:i,[`${a}-carousel__slide--next`]:u}];return b("div",{ref:"selfElRef",class:_,role:"option",tabindex:"-1","data-index":y,"aria-hidden":!x,style:S,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:i,isNext:u,isActive:x,index:y}))}}),mn=Tt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[d("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[d("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[$("> img",`
 display: block;
 `)])]),d("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[d("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[$("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 background-color: var(--n-dot-color-active);
 `)])]),f("line",[d("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[$("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),d("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[$("svg",`
 height: 1em;
 width: 1em;
 `),$("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),f("vertical",`
 touch-action: pan-x;
 `,[d("slides",`
 flex-direction: column;
 `),f("fade",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[d("slides",[$(">",[$("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `)]),d("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[d("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[d("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[d("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[d("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[$("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[$("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[d("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 top: 12px;
 right: 12px;
 `,[$("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[d("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[$("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[d("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[f("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),f("card",[d("slides",`
 perspective: 1000px;
 `),d("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[f("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),f("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),f("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),xn=["transitionDuration","transitionTimingFunction"],wn=Object.assign(Object.assign({},Qe.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let De=!1;const bn=fe({name:"Carousel",props:wn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=ve(e),i=M(null),u=M(null),x=M([]),y={value:[]},S=h(()=>e.direction==="vertical"),_=h(()=>S.value?"height":"width"),g=h(()=>S.value?"bottom":"right"),v=h(()=>e.effect==="slide"),w=h(()=>e.loop&&e.slidesPerView===1&&v.value),R=h(()=>e.effect==="custom"),A=h(()=>!v.value||e.centeredSlides?1:e.slidesPerView),j=h(()=>R.value?1:e.slidesPerView),C=h(()=>A.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),P=M({width:0,height:0}),z=h(()=>{const{value:t}=x;if(!t.length)return[];const{value:n}=C;if(n)return t.map(m=>He(m));const{value:s}=j,{value:l}=P,{value:c}=_;let r=l[c];if(s!=="auto"){const{spaceBetween:m}=e,k=r-(s-1)*m,ie=1/Math.max(1,s);r=k*ie}const p=Object.assign(Object.assign({},l),{[c]:r});return t.map(()=>p)}),N=h(()=>{const{value:t}=z;if(!t.length)return[];const{centeredSlides:n,spaceBetween:s}=e,{value:l}=_,{[l]:c}=P.value;let r=0;return t.map(({[l]:p})=>{let m=r;return n&&(m+=(p-c)/2),r+=p+s,m})}),W=M(!1),he=h(()=>{const{transitionStyle:t}=e;return t?Ye(t,xn):{}}),pe=h(()=>R.value?0:un(he.value.transitionDuration)),$e=h(()=>{const{value:t}=x;if(!t.length)return[];const n=!(C.value||j.value===1),s=p=>{if(n){const{value:m}=_;return{[m]:`${z.value[p][m]}px`}}};if(R.value)return t.map((p,m)=>s(m));const{effect:l,spaceBetween:c}=e,{value:r}=g;return t.reduce((p,m,k)=>{const ie=Object.assign(Object.assign({},s(k)),{[`margin-${r}`]:`${c}px`});return p.push(ie),W.value&&(l==="fade"||l==="card")&&Object.assign(ie,he.value),p},[])}),I=h(()=>{const{value:t}=A,{length:n}=x.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:s}=z,{length:l}=s;if(!l)return n;const{value:c}=N,{value:r}=_,p=P.value[r];let m=s[s.length-1][r],k=l;for(;k>1&&m<p;)k--,m+=c[k]-c[k-1];return ce(k+1,1,l)}}),Q=h(()=>ln(I.value,w.value)),nt=Ie(e.defaultIndex,w.value),ge=M(Ze(nt,I.value,w.value)),D=$t(Nt(e,"currentIndex"),ge),V=h(()=>Ie(D.value,w.value));function U(t){var n,s;t=ce(t,0,I.value-1);const l=Ze(t,I.value,w.value),{value:c}=D;l!==D.value&&(ge.value=l,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,l,c),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,l,c))}function ee(t=V.value){return sn(t,I.value,e.loop)}function te(t=V.value){return rn(t,I.value,e.loop)}function ot(t){const n=O(t);return n!==null&&ee()===n}function at(t){const n=O(t);return n!==null&&te()===n}function Ne(t){return V.value===O(t)}function st(t){return D.value===t}function Ee(){return ee()===null}function Me(){return te()===null}function me(t){const n=ce(Ie(t,w.value),0,I.value);(t!==D.value||n!==V.value)&&U(n)}function xe(){const t=ee();t!==null&&U(t)}function ne(){const t=te();t!==null&&U(t)}function rt(){(!T||!w.value)&&xe()}function lt(){(!T||!w.value)&&ne()}let T=!1,B=0;const we=M({});function oe(t,n=0){we.value=Object.assign({},he.value,{transform:S.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function Z(t=0){v.value?be(V.value,t):B!==0&&(!T&&t>0&&(T=!0),oe(B=0,t))}function be(t,n){const s=Ae(t);s!==B&&n>0&&(T=!0),B=Ae(V.value),oe(s,n)}function Ae(t){let n;return t>=I.value-1?n=je():n=N.value[t]||0,n}function je(){if(A.value==="auto"){const{value:t}=_,{[t]:n}=P.value,{value:s}=N,l=s[s.length-1];let c;if(l===void 0)c=n;else{const{value:r}=z;c=l+r[r.length-1][t]}return c-n}else{const{value:t}=N;return t[I.value-1]||0}}const q={currentIndexRef:D,to:me,prev:rt,next:lt,isVertical:()=>S.value,isHorizontal:()=>!S.value,isPrev:ot,isNext:at,isActive:Ne,isPrevDisabled:Ee,isNextDisabled:Me,getSlideIndex:O,getSlideStyle:ct,addSlide:it,removeSlide:ut,onCarouselItemClick:dt};cn(q);function it(t){t&&x.value.push(t)}function ut(t){if(!t)return;const n=O(t);n!==-1&&x.value.splice(n,1)}function O(t){return typeof t=="number"?t:t?x.value.indexOf(t):-1}function ct(t){const n=O(t);if(n!==-1){const s=[$e.value[n]],l=q.isPrev(n),c=q.isNext(n);return l&&s.push(e.prevSlideStyle||""),c&&s.push(e.nextSlideStyle||""),Xt(s)}}function dt(t,n){let s=!T&&!re&&!Ce;e.effect==="card"&&s&&!Ne(t)&&(me(t),s=!1),s||(n.preventDefault(),n.stopPropagation())}let ae=null;function se(){ae&&(clearInterval(ae),ae=null)}function X(){se(),!e.autoplay||Q.value<2||(ae=window.setInterval(ne,e.interval))}let ye=0,_e=0,E=0,Se=0,re=!1,Ce=!1;function Be(t){var n;if(De||!(!((n=u.value)===null||n===void 0)&&n.contains(Ft(t))))return;De=!0,re=!0,Ce=!1,Se=Date.now(),se(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=qe(t)?t.touches[0]:t;S.value?_e=s.clientY:ye=s.clientX,e.touchable&&(G("touchmove",document,le,{passive:!0}),G("touchend",document,F),G("touchcancel",document,F)),e.draggable&&(G("mousemove",document,le),G("mouseup",document,F))}function le(t){const{value:n}=S,{value:s}=_,l=qe(t)?t.touches[0]:t,c=n?l.clientY-_e:l.clientX-ye,r=P.value[s];E=ce(c,-r,r),t.cancelable&&t.preventDefault(),v.value&&oe(B-E,0)}function F(){const{value:t}=V;let n=t;if(!T&&E!==0&&v.value){const s=B-E,l=[...N.value.slice(0,I.value-1),je()];let c=null;for(let r=0;r<l.length;r++){const p=Math.abs(l[r]-s);if(c!==null&&c<p)break;c=p,n=r}}if(n===t){const s=Date.now()-Se,{value:l}=_,c=P.value[l];E>c/2||E/s>.4?n=ee(t):(E<-c/2||E/s<-.4)&&(n=te(t))}n!==null&&n!==t?(Ce=!0,U(n),Ke(()=>{(!w.value||ge.value!==D.value)&&Z(pe.value)})):Z(pe.value),Le(),X()}function Le(){re&&(De=!1),re=!1,ye=0,_e=0,E=0,Se=0,H("touchmove",document,le),H("touchend",document,F),H("touchcancel",document,F),H("mousemove",document,le),H("mouseup",document,F)}function ft(){if(v.value&&T){const{value:t}=V;be(t,0)}else X();v.value&&(we.value.transitionDuration="0ms"),T=!1}function vt(t){if(t.preventDefault(),T)return;let{deltaX:n,deltaY:s}=t;t.shiftKey&&!n&&(n=s);const l=-1,c=1,r=(n||s)>0?c:l;let p=0,m=0;S.value?m=r:p=r;const k=10;(m*s>=k||p*n>=k)&&(r===c&&!Me()?ne():r===l&&!Ee()&&xe())}function ht(){P.value=He(i.value,!0),X()}function pt(){var t,n;C.value&&((n=(t=z.effect).scheduler)===null||n===void 0||n.call(t),z.effect.run())}function gt(){e.autoplay&&se()}function mt(){e.autoplay&&X()}Ve(()=>{Et(X),requestAnimationFrame(()=>W.value=!0)}),Je(()=>{Le(),se()}),Mt(()=>{const{value:t}=x,{value:n}=y,s=new Map,l=r=>s.has(r)?s.get(r):-1;let c=!1;for(let r=0;r<t.length;r++){const p=n.findIndex(m=>m.el===t[r]);p!==r&&(c=!0),s.set(t[r],p)}c&&t.sort((r,p)=>l(r)-l(p))}),ue(V,(t,n)=>{if(t!==n)if(X(),v.value){if(w.value&&Q.value>2){const{value:s}=I;t===s-2&&n===1?t=0:t===1&&n===s-2&&(t=s-1)}be(t,pe.value)}else Z()},{immediate:!0}),ue([w,A],()=>void Ke(()=>U(V.value))),ue(N,()=>v.value&&Z(),{deep:!0}),ue(v,t=>{t?Z():(T=!1,oe(B=0))});const xt=h(()=>({onTouchstartPassive:e.touchable?Be:void 0,onMousedown:e.draggable?Be:void 0,onWheel:e.mousewheel?vt:void 0})),wt=h(()=>Object.assign(Object.assign({},Ye(q,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:Q.value,currentIndex:D.value})),bt=h(()=>({total:Q.value,currentIndex:D.value,to:q.to})),yt={getCurrentIndex:()=>D.value,to:me,prev:xe,next:ne},_t=Qe("Carousel","-carousel",mn,on,e,o),Oe=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:s,dotColorActive:l,dotColorFocus:c,dotLineWidth:r,dotLineWidthActive:p,arrowColor:m}}=_t.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":c,"--n-dot-color-active":l,"--n-dot-size":n,"--n-dot-line-width":r,"--n-dot-line-width-active":p,"--n-arrow-color":m}}),Y=a?At("carousel",void 0,Oe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:i,slidesElRef:u,slideVNodes:y,duplicatedable:w,userWantsControl:R,autoSlideSize:C,displayIndex:D,realIndex:V,slideStyles:$e,translateStyle:we,slidesControlListeners:xt,handleTransitionEnd:ft,handleResize:ht,handleSlideResize:pt,handleMouseenter:gt,handleMouseleave:mt,isActive:st,arrowSlotProps:wt,dotSlotProps:bt},yt),{cssVars:a?void 0:Oe,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:i,slideStyles:u,dotType:x,dotPlacement:y,slidesControlListeners:S,transitionProps:_={},arrowSlotProps:g,dotSlotProps:v,$slots:{default:w,dots:R,arrow:A}}=this,j=w&&jt(w())||[];let C=yn(j);return C.length||(C=j.map(P=>b(tt,null,{default:()=>Ge(P)}))),this.duplicatedable&&(C=an(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(P=>b(Xe,{onResize:this.handleSlideResize},{default:()=>P}))),(e=this.onRender)===null||e===void 0||e.call(this),b("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${y}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,i&&`${o}-carousel--usercontrol`],style:this.cssVars},S,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),b(Xe,{onResize:this.handleResize},{default:()=>b("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},i?C.map((P,z)=>b("div",{style:u[z],key:z},Bt(b(Ot,Object.assign({},_),{default:()=>P}),[[Lt,this.isActive(z)]]))):C)}),this.showDots&&v.total>1&&Fe(R,v,()=>[b(fn,{key:x+y,total:v.total,currentIndex:v.currentIndex,dotType:x,trigger:this.trigger,keyboard:this.keyboard})]),a&&Fe(A,g,()=>[b(pn,null)]))}});function yn(e){return e.reduce((o,a)=>(gn(a)&&o.push(a),o),[])}const _n={id:"front_module_bg"},Sn=L("h1",{style:{"text-align":"center","font-size":"3vw",color:"bisque",position:"relative",top:"3vh"}}," 模 組 任 務 ",-1),Cn={id:"carousel"},Rn=L("img",{class:"carousel-img",src:"https://res.cloudinary.com/dvpgoachn/image/upload/v1677159495/oh7jf2vhzttet9sgigxx.jpg"},null,-1),Pn=L("img",{class:"carousel-img",src:"https://res.cloudinary.com/dvpgoachn/image/upload/v1676555689/ut2gxdvspynnb7mlcknu.jpg"},null,-1),zn=L("img",{class:"carousel-img",src:"https://res.cloudinary.com/dvpgoachn/image/upload/v1676555786/brtnzqixnpipmvjss4qg.jpg"},null,-1),kn=L("img",{class:"carousel-img",src:"https://res.cloudinary.com/dvpgoachn/image/upload/v1677159046/exc3kafdx7srvfwsnwny.jpg"},null,-1),In={class:"front_module_contain"},Mn={__name:"AllModulesView",setup(e){const o=Jt(),a=Yt([]);Re.registerPlugin(Pe);const i=Pe.getAll();return Ve(()=>{Re.set(".front_module_contain",{opacity:0,x:-100}),Re.to(".front_module_contain",{x:80,opacity:1,duration:1,scrollTrigger:{trigger:"#carousal",start:"top top",end:"+=300",pin:!0,scrub:!0}})}),Kt(()=>{i.forEach(u=>{u.kill()}),Pe.clearMatchMedia()}),(async()=>{try{const{data:u}=await Wt.get("/modules");a.push(...u.result)}catch{o.error("模組取得失敗")}})(),(u,x)=>{const y=tt,S=bn;return ze(),ke("div",_n,[Sn,L("div",Cn,[K(S,{effect:"card","centered-slides":"","slides-per-view":"5",autoplay:"",draggable:"","show-arrow":"",interval:"1800"},{default:J(()=>[K(y,{style:{width:"70%"}},{default:J(()=>[Rn]),_:1}),K(y,{style:{width:"70%"}},{default:J(()=>[Pn]),_:1}),K(y,{style:{width:"70%"}},{default:J(()=>[zn]),_:1}),K(y,{style:{width:"70%"}},{default:J(()=>[kn]),_:1})]),_:1})]),L("div",In,[(ze(!0),ke(Ut,null,Zt(a,_=>(ze(),ke("div",{key:_._id,class:"col"},[K(Ht,qt(_,{class:"module_card"}),null,16)]))),128))])])}}};export{Mn as default};
