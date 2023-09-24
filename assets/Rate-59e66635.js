import{C as w,v as u,D as B,E as b,a4 as z,G as R,ay as A,H,I as N,J as L,a6 as T,r as p,az as U,a5 as E,K as y,L as P,l as k,aK as D,M as K,aM as O,aF as S}from"./index-dd25a306.js";const j=e=>{const{railColor:l}=e;return{itemColor:l,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}},W={name:"Rate",common:w,self:j},G=W,J=u("svg",{viewBox:"0 0 512 512"},u("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),X=B("rate",{display:"inline-flex",flexWrap:"nowrap"},[b("&:hover",[z("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),z("item",`
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `,[b("&:not(:first-child)",`
 margin-left: 6px;
 `),R("active",`
 color: var(--n-item-color-active);
 `)]),A("readonly",`
 cursor: pointer;
 `,[z("item",[b("&:hover",`
 transform: scale(1.05);
 `),b("&:active",`
 transform: scale(0.96);
 `)])]),z("half",`
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `,[R("active",`
 color: var(--n-item-color-active);
 `)])]),q=Object.assign(Object.assign({},L.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Y=H({name:"Rate",props:q,setup(e){const{mergedClsPrefixRef:l,inlineThemeDisabled:f}=N(e),n=L("Rate","-rate",X,G,e,l),d=T(e,"value"),m=p(e.defaultValue),v=p(null),r=U(e),h=E(d,m);function g(t){const{"onUpdate:value":a,onUpdateValue:o}=e,{nTriggerFormChange:C,nTriggerFormInput:c}=r;a&&S(a,t),o&&S(o,t),m.value=t,C(),c()}function s(t,a){return e.allowHalf?a.offsetX>=Math.floor(a.currentTarget.offsetWidth/2)?t+1:t+.5:t+1}let M=!1;function x(t,a){M||(v.value=s(t,a))}function I(){v.value=null}function F(t,a){var o;const{clearable:C}=e,c=s(t,a);C&&c===h.value?(M=!0,(o=e.onClear)===null||o===void 0||o.call(e),v.value=null,g(null)):g(c)}function $(){M=!1}const _=y(()=>{const{size:t}=e,{self:a}=n.value;return typeof t=="number"?`${t}px`:a[K("size",t)]}),V=y(()=>{const{common:{cubicBezierEaseInOut:t},self:a}=n.value,{itemColor:o,itemColorActive:C}=a,{color:c}=e;return{"--n-bezier":t,"--n-item-color":o,"--n-item-color-active":c||C,"--n-item-size":_.value}}),i=f?P("rate",y(()=>{const t=_.value,{color:a}=e;let o="";return t&&(o+=t[0]),a&&(o+=O(a)),o}),V,e):void 0;return{mergedClsPrefix:l,mergedValue:h,hoverIndex:v,handleMouseMove:x,handleClick:F,handleMouseLeave:I,handleMouseEnterSomeStar:$,cssVars:f?void 0:V,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{readonly:e,hoverIndex:l,mergedValue:f,mergedClsPrefix:n,onRender:d,$slots:{default:m}}=this;return d==null||d(),u("div",{class:[`${n}-rate`,{[`${n}-rate--readonly`]:e},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},k(this.count,(v,r)=>{const h=m?m():u(D,{clsPrefix:n},{default:()=>J}),g=l!==null?r+1<=l:r+1<=(f||0);return u("div",{key:r,class:[`${n}-rate__item`,g&&`${n}-rate__item--active`],onClick:e?void 0:s=>{this.handleClick(r,s)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:e?void 0:s=>{this.handleMouseMove(r,s)}},h,this.allowHalf?u("div",{class:[`${n}-rate__half`,{[`${n}-rate__half--active`]:!g&&l!==null?r+.5<=l:r+.5<=(f||0)}]},h):null)}))}});export{Y as _};
