import{g as Re,S as Pe}from"./ScrollTrigger-010257a6.js";import{aN as St,aM as Ct,b as Rt,af as Pt,d as zt,u as fe,aO as kt,e as It,n as d,l as N,g as f,ak as Dt,h as Je,i as Tt,ay as Vt,as as Xe,ao as Fe,v as Nt,T as $t,L as H,k as Ye,a8 as Et,J,ac as Mt}from"./router-bb377ad8.js";import{_ as At}from"./ModuleCard-cc7e2c6d.js";import{a6 as Ge,p as jt,i as Bt,d as ve,r as M,ak as Lt,h as b,c as p,o as Te,a0 as Qe,a2 as Ot,b as Xt,I as Ft,Z as ue,w as Yt,n as Ke,aj as Kt,a as Ut,al as Wt,f as ze,l as ke,m as L,k as K,j as G,F as Zt,ag as qt,a5 as Ht}from"./plugin-vueexport-helper-dfa573d2.js";import{c as Jt}from"./_createCompounder-b404808f.js";import{u as Gt}from"./use-message-1747f09b.js";import"./Tag-d00b3c8b.js";import"./Card-448c4530.js";import"./index-714b5119.js";import"./Rate-414a8ab0.js";import"./context-fdd44220.js";function Qt(e){return St(Ct(e).toLowerCase())}var en=Jt(function(e,o,a){return o=o.toLowerCase(),e+(a?Qt(o):o)});const Ue=en,tn=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),nn={name:"Carousel",common:Rt,self:tn},on=nn;function an(e){const{length:o}=e;return o>1&&(e.push(We(e[0],0,"append")),e.unshift(We(e[o-1],o-1,"prepend"))),e}function We(e,o,a){return Ge(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Ze(e,o,a){return a?e===0?o-3:e===o-1?0:e-1:e}function Ie(e,o){return o?e+1:e}function sn(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function rn(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function ln(e,o){return o&&e>3?e-2:e}function qe(e){return window.TouchEvent&&e instanceof window.TouchEvent}function He(e,o){let{offsetWidth:a,offsetHeight:l}=e;if(o){const u=getComputedStyle(e);a=a-parseFloat(u.getPropertyValue("padding-left"))-parseFloat(u.getPropertyValue("padding-right")),l=l-parseFloat(u.getPropertyValue("padding-top"))-parseFloat(u.getPropertyValue("padding-bottom"))}return{width:a,height:l}}function ce(e,o,a){return e<o?o:e>a?a:e}function un(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,l,,u="ms"]=a;return Number(l)*(u==="ms"?1:1e3)}return 0}const et=zt("n-carousel-methods"),cn=e=>jt(et,e),Ve=(e="unknown",o="component")=>{const a=Bt(et);return a||Pt(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a},dn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},fn=ve({name:"CarouselDots",props:dn,setup(e){const{mergedClsPrefixRef:o}=fe(e),a=M([]),l=Ve();function u(g,v){switch(g.key){case"Enter":case" ":g.preventDefault(),l.to(v);return}e.keyboard&&S(g)}function x(g){e.trigger==="hover"&&l.to(g)}function y(g){e.trigger==="click"&&l.to(g)}function S(g){var v;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const w=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(w==="input"||w==="textarea")return;const{code:R}=g,A=R==="PageUp"||R==="ArrowUp",j=R==="PageDown"||R==="ArrowDown",C=R==="PageUp"||R==="ArrowRight",P=R==="PageDown"||R==="ArrowLeft",z=l.isVertical(),$=z?A:C,U=z?j:P;!$&&!U||(g.preventDefault(),$&&!l.isNextDisabled()?(l.next(),_(l.currentIndexRef.value)):U&&!l.isPrevDisabled()&&(l.prev(),_(l.currentIndexRef.value)))}function _(g){var v;(v=a.value[g])===null||v===void 0||v.focus()}return Lt(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:u,handleMouseenter:x,handleClick:y}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return b("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},kt(this.total,a=>{const l=a===this.currentIndex;return b("div",{"aria-selected":l,ref:u=>o.push(u),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:a,onClick:()=>this.handleClick(a),onMouseenter:()=>this.handleMouseenter(a),onKeydown:u=>this.handleKeydown(u,a)})}))}}),vn=b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),pn=b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),hn=ve({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=fe(e),{isVertical:a,isPrevDisabled:l,isNextDisabled:u,prev:x,next:y}=Ve();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:l,isNextDisabled:u,prev:x,next:y}},render(){const{mergedClsPrefix:e}=this;return b("div",{class:`${e}-carousel__arrow-group`},b("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},vn),b("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},pn))}}),de="CarouselItem",gn=e=>{var o;return((o=e.type)===null||o===void 0?void 0:o.name)===de},tt=ve({name:de,setup(e){const{mergedClsPrefixRef:o}=fe(e),a=Ve(Ue(de),`n-${Ue(de)}`),l=M(),u=p(()=>{const{value:v}=l;return v?a.getSlideIndex(v):-1}),x=p(()=>a.isPrev(u.value)),y=p(()=>a.isNext(u.value)),S=p(()=>a.isActive(u.value)),_=p(()=>a.getSlideStyle(u.value));Te(()=>a.addSlide(l.value)),Qe(()=>{a.removeSlide(l.value)});function g(v){const{value:w}=u;w!==void 0&&(a==null||a.onCarouselItemClick(w,v))}return{mergedClsPrefix:o,selfElRef:l,isPrev:x,isNext:y,isActive:S,index:u,style:_,handleClick:g}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:l,isNext:u,isActive:x,index:y,style:S}=this,_=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:x,[`${a}-carousel__slide--prev`]:l,[`${a}-carousel__slide--next`]:u}];return b("div",{ref:"selfElRef",class:_,role:"option",tabindex:"-1","data-index":y,"aria-hidden":!x,style:S,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:l,isNext:u,isActive:x,index:y}))}}),mn=It("carousel",`
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
 `,[N("> img",`
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
 `,[N("&:focus",`
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
 `,[N("&:focus",`
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
 `,[N("svg",`
 height: 1em;
 width: 1em;
 `),N("&:hover",`
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
 `)])])]),f("usercontrol",[d("slides",[N(">",[N("div",`
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
 `,[N("> *:first-child",`
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
 `,[N("> *:first-child",`
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
 `,[N("> *:first-child",`
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
 `,[N("> *:first-child",`
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
 `)])])]),xn=["transitionDuration","transitionTimingFunction"],wn=Object.assign(Object.assign({},Je.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let De=!1;const bn=ve({name:"Carousel",props:wn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=fe(e),l=M(null),u=M(null),x=M([]),y={value:[]},S=p(()=>e.direction==="vertical"),_=p(()=>S.value?"height":"width"),g=p(()=>S.value?"bottom":"right"),v=p(()=>e.effect==="slide"),w=p(()=>e.loop&&e.slidesPerView===1&&v.value),R=p(()=>e.effect==="custom"),A=p(()=>!v.value||e.centeredSlides?1:e.slidesPerView),j=p(()=>R.value?1:e.slidesPerView),C=p(()=>A.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),P=M({width:0,height:0}),z=p(()=>{const{value:t}=x;if(!t.length)return[];const{value:n}=C;if(n)return t.map(m=>He(m));const{value:s}=j,{value:i}=P,{value:c}=_;let r=i[c];if(s!=="auto"){const{spaceBetween:m}=e,k=r-(s-1)*m,le=1/Math.max(1,s);r=k*le}const h=Object.assign(Object.assign({},i),{[c]:r});return t.map(()=>h)}),$=p(()=>{const{value:t}=z;if(!t.length)return[];const{centeredSlides:n,spaceBetween:s}=e,{value:i}=_,{[i]:c}=P.value;let r=0;return t.map(({[i]:h})=>{let m=r;return n&&(m+=(h-c)/2),r+=h+s,m})}),U=M(!1),pe=p(()=>{const{transitionStyle:t}=e;return t?Ye(t,xn):{}}),he=p(()=>R.value?0:un(pe.value.transitionDuration)),Ne=p(()=>{const{value:t}=x;if(!t.length)return[];const n=!(C.value||j.value===1),s=h=>{if(n){const{value:m}=_;return{[m]:`${z.value[h][m]}px`}}};if(R.value)return t.map((h,m)=>s(m));const{effect:i,spaceBetween:c}=e,{value:r}=g;return t.reduce((h,m,k)=>{const le=Object.assign(Object.assign({},s(k)),{[`margin-${r}`]:`${c}px`});return h.push(le),U.value&&(i==="fade"||i==="card")&&Object.assign(le,pe.value),h},[])}),I=p(()=>{const{value:t}=A,{length:n}=x.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:s}=z,{length:i}=s;if(!i)return n;const{value:c}=$,{value:r}=_,h=P.value[r];let m=s[s.length-1][r],k=i;for(;k>1&&m<h;)k--,m+=c[k]-c[k-1];return ce(k+1,1,i)}}),Q=p(()=>ln(I.value,w.value)),nt=Ie(e.defaultIndex,w.value),ge=M(Ze(nt,I.value,w.value)),D=Dt(Ot(e,"currentIndex"),ge),T=p(()=>Ie(D.value,w.value));function W(t){var n,s;t=ce(t,0,I.value-1);const i=Ze(t,I.value,w.value),{value:c}=D;i!==D.value&&(ge.value=i,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,i,c),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,i,c))}function ee(t=T.value){return sn(t,I.value,e.loop)}function te(t=T.value){return rn(t,I.value,e.loop)}function ot(t){const n=O(t);return n!==null&&ee()===n}function at(t){const n=O(t);return n!==null&&te()===n}function $e(t){return T.value===O(t)}function st(t){return D.value===t}function Ee(){return ee()===null}function Me(){return te()===null}function me(t){const n=ce(Ie(t,w.value),0,I.value);(t!==D.value||n!==T.value)&&W(n)}function xe(){const t=ee();t!==null&&W(t)}function ne(){const t=te();t!==null&&W(t)}function rt(){(!V||!w.value)&&xe()}function it(){(!V||!w.value)&&ne()}let V=!1,B=0;const we=M({});function oe(t,n=0){we.value=Object.assign({},pe.value,{transform:S.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function Z(t=0){v.value?be(T.value,t):B!==0&&(!V&&t>0&&(V=!0),oe(B=0,t))}function be(t,n){const s=Ae(t);s!==B&&n>0&&(V=!0),B=Ae(T.value),oe(s,n)}function Ae(t){let n;return t>=I.value-1?n=je():n=$.value[t]||0,n}function je(){if(A.value==="auto"){const{value:t}=_,{[t]:n}=P.value,{value:s}=$,i=s[s.length-1];let c;if(i===void 0)c=n;else{const{value:r}=z;c=i+r[r.length-1][t]}return c-n}else{const{value:t}=$;return t[I.value-1]||0}}const q={currentIndexRef:D,to:me,prev:rt,next:it,isVertical:()=>S.value,isHorizontal:()=>!S.value,isPrev:ot,isNext:at,isActive:$e,isPrevDisabled:Ee,isNextDisabled:Me,getSlideIndex:O,getSlideStyle:ct,addSlide:lt,removeSlide:ut,onCarouselItemClick:dt};cn(q);function lt(t){t&&x.value.push(t)}function ut(t){if(!t)return;const n=O(t);n!==-1&&x.value.splice(n,1)}function O(t){return typeof t=="number"?t:t?x.value.indexOf(t):-1}function ct(t){const n=O(t);if(n!==-1){const s=[Ne.value[n]],i=q.isPrev(n),c=q.isNext(n);return i&&s.push(e.prevSlideStyle||""),c&&s.push(e.nextSlideStyle||""),Kt(s)}}function dt(t,n){let s=!V&&!re&&!Ce;e.effect==="card"&&s&&!$e(t)&&(me(t),s=!1),s||(n.preventDefault(),n.stopPropagation())}let ae=null;function se(){ae&&(clearInterval(ae),ae=null)}function X(){se(),!e.autoplay||Q.value<2||(ae=window.setInterval(ne,e.interval))}let ye=0,_e=0,E=0,Se=0,re=!1,Ce=!1;function Be(t){var n;if(De||!(!((n=u.value)===null||n===void 0)&&n.contains(Et(t))))return;De=!0,re=!0,Ce=!1,Se=Date.now(),se(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=qe(t)?t.touches[0]:t;S.value?_e=s.clientY:ye=s.clientX,e.touchable&&(J("touchmove",document,ie,{passive:!0}),J("touchend",document,F),J("touchcancel",document,F)),e.draggable&&(J("mousemove",document,ie),J("mouseup",document,F))}function ie(t){const{value:n}=S,{value:s}=_,i=qe(t)?t.touches[0]:t,c=n?i.clientY-_e:i.clientX-ye,r=P.value[s];E=ce(c,-r,r),t.cancelable&&t.preventDefault(),v.value&&oe(B-E,0)}function F(){const{value:t}=T;let n=t;if(!V&&E!==0&&v.value){const s=B-E,i=[...$.value.slice(0,I.value-1),je()];let c=null;for(let r=0;r<i.length;r++){const h=Math.abs(i[r]-s);if(c!==null&&c<h)break;c=h,n=r}}if(n===t){const s=Date.now()-Se,{value:i}=_,c=P.value[i];E>c/2||E/s>.4?n=ee(t):(E<-c/2||E/s<-.4)&&(n=te(t))}n!==null&&n!==t?(Ce=!0,W(n),Ke(()=>{(!w.value||ge.value!==D.value)&&Z(he.value)})):Z(he.value),Le(),X()}function Le(){re&&(De=!1),re=!1,ye=0,_e=0,E=0,Se=0,H("touchmove",document,ie),H("touchend",document,F),H("touchcancel",document,F),H("mousemove",document,ie),H("mouseup",document,F)}function ft(){if(v.value&&V){const{value:t}=T;be(t,0)}else X();v.value&&(we.value.transitionDuration="0ms"),V=!1}function vt(t){if(t.preventDefault(),V)return;let{deltaX:n,deltaY:s}=t;t.shiftKey&&!n&&(n=s);const i=-1,c=1,r=(n||s)>0?c:i;let h=0,m=0;S.value?m=r:h=r;const k=10;(m*s>=k||h*n>=k)&&(r===c&&!Me()?ne():r===i&&!Ee()&&xe())}function pt(){P.value=He(l.value,!0),X()}function ht(){var t,n;C.value&&((n=(t=z.effect).scheduler)===null||n===void 0||n.call(t),z.effect.run())}function gt(){e.autoplay&&se()}function mt(){e.autoplay&&X()}Te(()=>{Xt(X),requestAnimationFrame(()=>U.value=!0)}),Qe(()=>{Le(),se()}),Ft(()=>{const{value:t}=x,{value:n}=y,s=new Map,i=r=>s.has(r)?s.get(r):-1;let c=!1;for(let r=0;r<t.length;r++){const h=n.findIndex(m=>m.el===t[r]);h!==r&&(c=!0),s.set(t[r],h)}c&&t.sort((r,h)=>i(r)-i(h))}),ue(T,(t,n)=>{if(t!==n)if(X(),v.value){if(w.value&&Q.value>2){const{value:s}=I;t===s-2&&n===1?t=0:t===1&&n===s-2&&(t=s-1)}be(t,he.value)}else Z()},{immediate:!0}),ue([w,A],()=>void Ke(()=>W(T.value))),ue($,()=>v.value&&Z(),{deep:!0}),ue(v,t=>{t?Z():(V=!1,oe(B=0))});const xt=p(()=>({onTouchstartPassive:e.touchable?Be:void 0,onMousedown:e.draggable?Be:void 0,onWheel:e.mousewheel?vt:void 0})),wt=p(()=>Object.assign(Object.assign({},Ye(q,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:Q.value,currentIndex:D.value})),bt=p(()=>({total:Q.value,currentIndex:D.value,to:q.to})),yt={getCurrentIndex:()=>D.value,to:me,prev:xe,next:ne},_t=Je("Carousel","-carousel",mn,on,e,o),Oe=p(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:s,dotColorActive:i,dotColorFocus:c,dotLineWidth:r,dotLineWidthActive:h,arrowColor:m}}=_t.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":c,"--n-dot-color-active":i,"--n-dot-size":n,"--n-dot-line-width":r,"--n-dot-line-width-active":h,"--n-arrow-color":m}}),Y=a?Tt("carousel",void 0,Oe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:l,slidesElRef:u,slideVNodes:y,duplicatedable:w,userWantsControl:R,autoSlideSize:C,displayIndex:D,realIndex:T,slideStyles:Ne,translateStyle:we,slidesControlListeners:xt,handleTransitionEnd:ft,handleResize:pt,handleSlideResize:ht,handleMouseenter:gt,handleMouseleave:mt,isActive:st,arrowSlotProps:wt,dotSlotProps:bt},yt),{cssVars:a?void 0:Oe,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:l,slideStyles:u,dotType:x,dotPlacement:y,slidesControlListeners:S,transitionProps:_={},arrowSlotProps:g,dotSlotProps:v,$slots:{default:w,dots:R,arrow:A}}=this,j=w&&Vt(w())||[];let C=yn(j);return C.length||(C=j.map(P=>b(tt,null,{default:()=>Ge(P)}))),this.duplicatedable&&(C=an(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(P=>b(Xe,{onResize:this.handleSlideResize},{default:()=>P}))),(e=this.onRender)===null||e===void 0||e.call(this),b("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${y}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,l&&`${o}-carousel--usercontrol`],style:this.cssVars},S,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),b(Xe,{onResize:this.handleResize},{default:()=>b("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?C.map((P,z)=>b("div",{style:u[z],key:z},Yt(b($t,Object.assign({},_),{default:()=>P}),[[Nt,this.isActive(z)]]))):C)}),this.showDots&&v.total>1&&Fe(R,v,()=>[b(fn,{key:x+y,total:v.total,currentIndex:v.currentIndex,dotType:x,trigger:this.trigger,keyboard:this.keyboard})]),a&&Fe(A,g,()=>[b(hn,null)]))}});function yn(e){return e.reduce((o,a)=>(gn(a)&&o.push(a),o),[])}const _n={id:"front_module_bg"},Sn=L("h1",{style:{"text-align":"center","font-size":"3vw",color:"bisque",position:"relative",top:"3vh"}}," 模 組 任 務 ",-1),Cn={id:"carousel"},Rn=L("img",{class:"carousel-img",src:"https://res.cloudinary.com/dvpgoachn/image/upload/v1677159495/oh7jf2vhzttet9sgigxx.jpg"},null,-1),Pn=L("img",{class:"carousel-img",src:"https://res.cloudinary.com/dvpgoachn/image/upload/v1676555689/ut2gxdvspynnb7mlcknu.jpg"},null,-1),zn=L("img",{class:"carousel-img",src:"https://res.cloudinary.com/dvpgoachn/image/upload/v1676555786/brtnzqixnpipmvjss4qg.jpg"},null,-1),kn=L("img",{class:"carousel-img",src:"https://res.cloudinary.com/dvpgoachn/image/upload/v1677159046/exc3kafdx7srvfwsnwny.jpg"},null,-1),In={class:"front_module_contain"},On={__name:"AllModulesView",setup(e){const o=Gt(),a=Ut([]);Re.registerPlugin(Pe);const l=Pe.getAll();return Te(()=>{Re.set(".front_module_contain",{opacity:0,x:-100}),Re.to(".front_module_contain",{x:80,opacity:1,duration:1,scrollTrigger:{trigger:"#carousal",start:"top top",end:"+=300",pin:!0,scrub:!0}})}),Wt(()=>{l.forEach(u=>{u.kill()}),Pe.clearMatchMedia()}),(async()=>{try{const{data:u}=await Mt.get("/modules");a.push(...u.result)}catch{o.error("模組取得失敗")}})(),(u,x)=>{const y=tt,S=bn;return ze(),ke("div",_n,[Sn,L("div",Cn,[K(S,{effect:"card","centered-slides":"","slides-per-view":"5",autoplay:"",draggable:"","show-arrow":"",interval:"1800"},{default:G(()=>[K(y,{style:{width:"70%"}},{default:G(()=>[Rn]),_:1}),K(y,{style:{width:"70%"}},{default:G(()=>[Pn]),_:1}),K(y,{style:{width:"70%"}},{default:G(()=>[zn]),_:1}),K(y,{style:{width:"70%"}},{default:G(()=>[kn]),_:1})]),_:1})]),L("div",In,[(ze(!0),ke(Zt,null,qt(a,_=>(ze(),ke("div",{key:_._id,class:"col"},[K(At,Ht(_,{class:"module_card"}),null,16)]))),128))])])}}};export{On as default};
