import{D as x,aF as k,aP as z,ad as F,aG as L,R as C}from"./router-c656fe92.js";import{d as b,f as i,l as a,m as t,a as V,e as H,k as s,j as _,F as N,ag as B,s as D,W as $,ai as r,a9 as A,t as R}from"./plugin-vueexport-helper-dfa573d2.js";import{_ as S}from"./Table-b4c634c8.js";import{_ as T}from"./Image-287724b5.js";import"./use-locale-714ac2f4.js";import"./_createCompounder-6435c5b0.js";const M={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},O=t("g",{fill:"none"},[t("path",{d:"M3 4h.293L2.146 2.854a.5.5 0 1 1 .708-.708L8.26 7.553l9.594 9.593a.5.5 0 0 1-.708.708l-1.958-1.958l-.038.333A2 2 0 0 1 13.163 18H6.837a2 2 0 0 1-1.987-1.77L3.553 5H3a.5.5 0 0 1-.492-.41L2.5 4.5A.5.5 0 0 1 3 4zm11.286 10.993L12 12.707v1.355c0 .242-.224.438-.5.438c-.245 0-.45-.155-.492-.359L11 14.062v-2.355l-2-2v4.355c0 .242-.224.438-.5.438c-.245 0-.45-.155-.492-.359L8 14.062V8.707L4.596 5.303l1.247 10.812a1 1 0 0 0 .994.885h6.326a1 1 0 0 0 .993-.885l.13-1.122zm1.195-1.633l-.903-.903l.86-7.457H7.121l-1-1H7.5a2.5 2.5 0 0 1 5 0H17a.5.5 0 0 1 0 1h-.554l-.965 8.36zM11.5 4a1.5 1.5 0 0 0-3 0h3zm.5 5.879l-1-1v-.941c0-.242.224-.438.5-.438c.245 0 .45.155.492.359l.008.079v1.94z",fill:"currentColor"})],-1),j=[O],E=b({name:"DeleteOff20Regular",render:function(c,d){return i(),a("svg",M,j)}});const G={id:"favorite_bg"},I=t("h1",{class:"title"},"我的收藏",-1),P=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"圖片"),t("th",{style:{"text-align":"center"}},"名稱"),t("th",{style:{"text-align":"center"}},"報名人數"),t("th",{style:{"text-align":"center"}},"遊玩時間"),t("th",{style:{"text-align":"center"}},"刪除")])],-1),U={style:{width:"20%"}},W={style:{width:"30%","font-size":"20px"}},q={style:{width:"10%","font-size":"20px"}},J={style:{width:"10%","font-size":"20px"}},K={style:{width:"15%","font-size":"20px"}},Q={key:0},X=t("td",null," 收藏庫空空的喔... ",-1),Y=[X],at={__name:"FavoriteView",setup(p){const c=x(),{editFavorite:d}=c,n=V([]),m=async(e,l)=>{await d({_id:n[e].m_id._id,status:l}),n[e].status+=l,n[e].status<=0&&n.splice(e,1)};return(async()=>{try{const{data:e}=await k.get("/users/favorite");n.push(...e.result)}catch{z.fire({icon:"error",title:"失敗",text:"取得收藏失敗"})}})(),(e,l)=>{const h=L,u=T,f=H("router-link"),g=F,v=C,y=S;return i(),a("div",G,[I,s(h),s(y,{id:"favoriteTable","single-line":!1,striped:"",style:{"margin-top":"5%"},class:"table"},{default:_(()=>[P,t("tbody",null,[(i(!0),a(N,null,B(n,(o,w)=>(i(),a("tr",{key:o._id,class:D({"bg-red":!o.m_id.living}),style:{"text-align":"center"}},[t("td",U,[s(u,{"aspect-ratio":1,src:o.m_id.image[0],width:200},null,8,["src"])]),t("td",W,[s(f,{to:"/modules/"+o.m_id._id,style:{"text-decoration":"none","font-weight":"800",color:"#2F4F40"}},{default:_(()=>[$(r(o.m_id.name),1)]),_:2},1032,["to"])]),t("td",q,r(o.m_id.pl),1),t("td",J,r(o.m_id.minTime),1),t("td",K,[s(v,{type:"error",circle:"",onClick:Z=>m(w,-1)},{icon:_(()=>[s(g,null,{default:_(()=>[s(A(E))]),_:1})]),_:2},1032,["onClick"])])],2))),128)),n.length===0?(i(),a("tr",Q,Y)):R("",!0)])]),_:1})])}}};export{at as default};
