import{a as U,h as t,d as h,a1 as X,e as a,i as d,a0 as Y,a3 as Z,u as oo,f as P,j as eo,g as ro,T as m}from"./Icon-a8619f5f.js";import{m as to,P as no,d as $,e as ao}from"./router-c5eb6ba6.js";import{g as lo}from"./index-714b5119.js";import{d as io,c as w,h as l}from"./runtime-core.esm-bundler-4adb0545.js";const so={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},co=r=>{const{primaryColor:f,borderRadius:c,lineHeight:o,fontSize:i,cardColor:s,textColor2:v,textColor1:b,dividerColor:n,fontWeightStrong:e,closeIconColor:g,closeIconColorHover:u,closeIconColorPressed:x,closeColorHover:z,closeColorPressed:C,modalColor:S,boxShadow1:y,popoverColor:k,actionColor:p}=r;return Object.assign(Object.assign({},so),{lineHeight:o,color:s,colorModal:S,colorPopover:k,colorTarget:f,colorEmbedded:p,colorEmbeddedModal:p,colorEmbeddedPopover:p,textColor:v,titleTextColor:b,borderColor:n,actionColor:p,titleFontWeight:e,closeColorHover:z,closeColorPressed:C,closeBorderRadius:c,closeIconColor:g,closeIconColorHover:u,closeIconColorPressed:x,fontSizeSmall:i,fontSizeMedium:i,fontSizeLarge:i,fontSizeHuge:i,boxShadow:y,borderRadius:c})},bo={name:"Card",common:U,self:co},go=bo,po=t([h("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[X({background:"var(--n-color-modal)"}),a("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),a("content-segmented",[t(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),a("content-soft-segmented",[t(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),a("footer-segmented",[t(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),a("footer-soft-segmented",[t(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[h("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[d("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),d("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),d("content","flex: 1; min-width: 0;"),d("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),h("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),a("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),a("action-segmented",[t(">",[d("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("content-segmented, content-soft-segmented",[t(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("footer-segmented, footer-soft-segmented",[t(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Y(h("card",`
 background: var(--n-color-modal);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Z(h("card",`
 background: var(--n-color-popover);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),_={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},xo=to(_),mo=Object.assign(Object.assign({},P.props),_),zo=io({name:"Card",props:mo,setup(r){const f=()=>{const{onClose:e}=r;e&&no(e)},{inlineThemeDisabled:c,mergedClsPrefixRef:o,mergedRtlRef:i}=oo(r),s=P("Card","-card",po,go,r,o),v=eo("Card",i,o),b=w(()=>{const{size:e}=r,{self:{color:g,colorModal:u,colorTarget:x,textColor:z,titleTextColor:C,titleFontWeight:S,borderColor:y,actionColor:k,borderRadius:p,lineHeight:T,closeIconColor:R,closeIconColorHover:B,closeIconColorPressed:E,closeColorHover:M,closeColorPressed:O,closeBorderRadius:j,closeIconSize:H,closeSize:F,boxShadow:I,colorPopover:L,colorEmbedded:V,colorEmbeddedModal:W,colorEmbeddedPopover:K,[$("padding",e)]:A,[$("fontSize",e)]:D,[$("titleFontSize",e)]:N},common:{cubicBezierEaseInOut:q}}=s.value,{top:G,left:J,bottom:Q}=lo(A);return{"--n-bezier":q,"--n-border-radius":p,"--n-color":g,"--n-color-modal":u,"--n-color-popover":L,"--n-color-embedded":V,"--n-color-embedded-modal":W,"--n-color-embedded-popover":K,"--n-color-target":x,"--n-text-color":z,"--n-line-height":T,"--n-action-color":k,"--n-title-text-color":C,"--n-title-font-weight":S,"--n-close-icon-color":R,"--n-close-icon-color-hover":B,"--n-close-icon-color-pressed":E,"--n-close-color-hover":M,"--n-close-color-pressed":O,"--n-border-color":y,"--n-box-shadow":I,"--n-padding-top":G,"--n-padding-bottom":Q,"--n-padding-left":J,"--n-font-size":D,"--n-title-font-size":N,"--n-close-size":F,"--n-close-icon-size":H,"--n-close-border-radius":j}}),n=c?ro("card",w(()=>r.size[0]),b,r):void 0;return{rtlEnabled:v,mergedClsPrefix:o,mergedTheme:s,handleCloseClick:f,cssVars:c?void 0:b,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){const{segmented:r,bordered:f,hoverable:c,mergedClsPrefix:o,rtlEnabled:i,onRender:s,embedded:v,tag:b,$slots:n}=this;return s==null||s(),l(b,{class:[`${o}-card`,this.themeClass,v&&`${o}-card--embedded`,{[`${o}-card--rtl`]:i,[`${o}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${o}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${o}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${o}-card--bordered`]:f,[`${o}-card--hoverable`]:c}],style:this.cssVars,role:this.role},m(n.cover,e=>e&&l("div",{class:`${o}-card-cover`,role:"none"},e)),m(n.header,e=>e||this.title||this.closable?l("div",{class:`${o}-card-header`,style:this.headerStyle},l("div",{class:`${o}-card-header__main`,role:"heading"},e||this.title),m(n["header-extra"],g=>g&&l("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},g)),this.closable?l(ao,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),m(n.default,e=>e&&l("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},e)),m(n.footer,e=>e&&[l("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},e)]),m(n.action,e=>e&&l("div",{class:`${o}-card__action`,role:"none"},e)))}});export{zo as _,_ as a,xo as b,go as c};
