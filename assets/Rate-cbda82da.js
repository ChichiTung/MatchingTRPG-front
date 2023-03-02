import{h as u,d as w,a2 as B,r as R,c as M,ag as A}from"./plugin-vueexport-helper-dfa573d2.js";import{b as N,e as T,l as b,n as z,g as p,ah as U,u as k,h as x,aj as H,ak as P,i as E,x as j,q as O,ai as D,a7 as S}from"./router-7f210e9c.js";const W=e=>{const{railColor:l}=e;return{itemColor:l,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}},q={name:"Rate",common:N,self:W},K=q,X=u("svg",{viewBox:"0 0 512 512"},u("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),G=T("rate",{display:"inline-flex",flexWrap:"nowrap"},[b("&:hover",[z("item",`
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
 `),p("active",`
 color: var(--n-item-color-active);
 `)]),U("readonly",`
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
 `,[p("active",`
 color: var(--n-item-color-active);
 `)])]),J=Object.assign(Object.assign({},x.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Z=w({name:"Rate",props:J,setup(e){const{mergedClsPrefixRef:l,inlineThemeDisabled:f}=k(e),n=x("Rate","-rate",G,K,e,l),d=B(e,"value"),m=R(e.defaultValue),v=R(null),r=H(e),h=P(d,m);function g(t){const{"onUpdate:value":a,onUpdateValue:o}=e,{nTriggerFormChange:C,nTriggerFormInput:c}=r;a&&S(a,t),o&&S(o,t),m.value=t,C(),c()}function s(t,a){return e.allowHalf?a.offsetX>=Math.floor(a.currentTarget.offsetWidth/2)?t+1:t+.5:t+1}let y=!1;function L(t,a){y||(v.value=s(t,a))}function I(){v.value=null}function F(t,a){var o;const{clearable:C}=e,c=s(t,a);C&&c===h.value?(y=!0,(o=e.onClear)===null||o===void 0||o.call(e),v.value=null,g(null)):g(c)}function $(){y=!1}const _=M(()=>{const{size:t}=e,{self:a}=n.value;return typeof t=="number"?`${t}px`:a[O("size",t)]}),V=M(()=>{const{common:{cubicBezierEaseInOut:t},self:a}=n.value,{itemColor:o,itemColorActive:C}=a,{color:c}=e;return{"--n-bezier":t,"--n-item-color":o,"--n-item-color-active":c||C,"--n-item-size":_.value}}),i=f?E("rate",M(()=>{const t=_.value,{color:a}=e;let o="";return t&&(o+=t[0]),a&&(o+=D(a)),o}),V,e):void 0;return{mergedClsPrefix:l,mergedValue:h,hoverIndex:v,handleMouseMove:L,handleClick:F,handleMouseLeave:I,handleMouseEnterSomeStar:$,cssVars:f?void 0:V,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{readonly:e,hoverIndex:l,mergedValue:f,mergedClsPrefix:n,onRender:d,$slots:{default:m}}=this;return d==null||d(),u("div",{class:[`${n}-rate`,{[`${n}-rate--readonly`]:e},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},A(this.count,(v,r)=>{const h=m?m():u(j,{clsPrefix:n},{default:()=>X}),g=l!==null?r+1<=l:r+1<=(f||0);return u("div",{key:r,class:[`${n}-rate__item`,g&&`${n}-rate__item--active`],onClick:e?void 0:s=>{this.handleClick(r,s)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:e?void 0:s=>{this.handleMouseMove(r,s)}},h,this.allowHalf?u("div",{class:[`${n}-rate__half`,{[`${n}-rate__half--active`]:!g&&l!==null?r+.5<=l:r+.5<=(f||0)}]},h):null)}))}});export{Z as _};
