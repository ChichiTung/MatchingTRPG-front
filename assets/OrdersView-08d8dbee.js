import{e as g,O as h,ap as y,h as f,o as a,i as l,j as s,w as i,d as t,F as v,k as w,P as o,s as x}from"./index-fcbc0ebc.js";import{_ as b}from"./Space-8d279138.js";import{_ as k}from"./Table-fc811141.js";import{_ as V}from"./Select-efc4ea9c.js";import"./Suffix-d8d121e3.js";import"./use-locale-72c68c20.js";const D={id:"gm_orders_bg"},F=t("h1",null," 預約列表 ",-1),L=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"ID"),t("th",{style:{"text-align":"center"}},"跑團日期"),t("th",{style:{"text-align":"center"}},"報名模組"),t("th",{style:{"text-align":"center"}}," PL ")])],-1),B={style:{width:"20%"}},N={style:{width:"20%"}},O={style:{width:"30%","font-size":"20px"}},P={style:{width:"20%"}},I={__name:"OrdersView",setup(S){const _=g([]),c=[{label:"按跑團日期排",value:"song0",disabled:!0},{label:"按模組名稱排",value:"song1"},{label:"按 PL 姓名排",value:"song2"}];return(async()=>{try{const{data:n}=await h.get("/orders/gm");_.push(...n.result)}catch{y.fire({icon:"error",title:"失敗",text:"取得預約失敗"})}})(),(n,r)=>{const d=V,u=b,p=f("router-link"),m=k;return a(),l("div",D,[F,s(u,{vertical:""},{default:i(()=>[s(d,{value:n.value,"onUpdate:value":r[0]||(r[0]=e=>n.value=e),options:c,style:{width:"20%","margin-left":"70%"}},null,8,["value"])]),_:1}),s(m,{id:"ordersTable","single-line":!1,striped:"",style:{margin:"auto","margin-top":"5%",width:"85%"},class:"table"},{default:i(()=>[L,t("tbody",null,[(a(!0),l(v,null,w(_,e=>(a(),l("tr",{key:e._id,style:{"text-align":"center"}},[t("td",B,o(e._id),1),t("td",N,o(new Date(e.date).toLocaleDateString()),1),t("td",O,[s(p,{to:"/modules/"+e.m_id._id,style:{"text-decoration":"none","font-weight":"800",color:"#2F4F40"}},{default:i(()=>[x(o(e.m_name),1)]),_:2},1032,["to"])]),t("td",P,o(e.pl_nickname),1)]))),128))])]),_:1})])}}};export{I as default};
