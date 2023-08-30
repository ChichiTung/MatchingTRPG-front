import{B as $,t as u,C as w,D as b,a3 as y,E as R,ax as A,G as E,H,I as S,a5 as N,r as p,ay as T,a4 as U,J as M,K as k,k as P,aJ as D,L as O,aL as j,aE as L}from"./index-fcbc0ebc.js";const J=e=>{const{railColor:l}=e;return{itemColor:l,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}},K={name:"Rate",common:$,self:J},W=K,G=u("svg",{viewBox:"0 0 512 512"},u("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),X=w("rate",{display:"inline-flex",flexWrap:"nowrap"},[b("&:hover",[y("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),y("item",`
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
 `,[y("item",[b("&:hover",`
 transform: scale(1.05);
 `),b("&:active",`
 transform: scale(0.96);
 `)])]),y("half",`
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
 `)])]),q=Object.assign(Object.assign({},S.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Y=E({name:"Rate",props:q,setup(e){const{mergedClsPrefixRef:l,inlineThemeDisabled:f}=H(e),n=S("Rate","-rate",X,W,e,l),d=N(e,"value"),m=p(e.defaultValue),v=p(null),r=T(e),h=U(d,m);function g(t){const{"onUpdate:value":a,onUpdateValue:o}=e,{nTriggerFormChange:C,nTriggerFormInput:c}=r;a&&L(a,t),o&&L(o,t),m.value=t,C(),c()}function s(t,a){return e.allowHalf?a.offsetX>=Math.floor(a.currentTarget.offsetWidth/2)?t+1:t+.5:t+1}let z=!1;function x(t,a){z||(v.value=s(t,a))}function I(){v.value=null}function B(t,a){var o;const{clearable:C}=e,c=s(t,a);C&&c===h.value?(z=!0,(o=e.onClear)===null||o===void 0||o.call(e),v.value=null,g(null)):g(c)}function F(){z=!1}const _=M(()=>{const{size:t}=e,{self:a}=n.value;return typeof t=="number"?`${t}px`:a[O("size",t)]}),V=M(()=>{const{common:{cubicBezierEaseInOut:t},self:a}=n.value,{itemColor:o,itemColorActive:C}=a,{color:c}=e;return{"--n-bezier":t,"--n-item-color":o,"--n-item-color-active":c||C,"--n-item-size":_.value}}),i=f?k("rate",M(()=>{const t=_.value,{color:a}=e;let o="";return t&&(o+=t[0]),a&&(o+=j(a)),o}),V,e):void 0;return{mergedClsPrefix:l,mergedValue:h,hoverIndex:v,handleMouseMove:x,handleClick:B,handleMouseLeave:I,handleMouseEnterSomeStar:F,cssVars:f?void 0:V,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{readonly:e,hoverIndex:l,mergedValue:f,mergedClsPrefix:n,onRender:d,$slots:{default:m}}=this;return d==null||d(),u("div",{class:[`${n}-rate`,{[`${n}-rate--readonly`]:e},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},P(this.count,(v,r)=>{const h=m?m():u(D,{clsPrefix:n},{default:()=>G}),g=l!==null?r+1<=l:r+1<=(f||0);return u("div",{key:r,class:[`${n}-rate__item`,g&&`${n}-rate__item--active`],onClick:e?void 0:s=>{this.handleClick(r,s)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:e?void 0:s=>{this.handleMouseMove(r,s)}},h,this.allowHalf?u("div",{class:[`${n}-rate__half`,{[`${n}-rate__half--active`]:!g&&l!==null?r+.5<=l:r+.5<=(f||0)}]},h):null)}))}});export{Y as _};
