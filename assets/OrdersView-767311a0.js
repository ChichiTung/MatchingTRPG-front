import{aF as m,aP as p,aG as h}from"./router-c656fe92.js";import{a as g,e as y,f as a,l as o,k as l,j as _,m as t,F as x,ag as f,ai as n,W as w}from"./plugin-vueexport-helper-dfa573d2.js";import{_ as k}from"./Table-b4c634c8.js";const v={id:"orders_bg"},b=t("h1",null," 預約列表 ",-1),F=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"ID"),t("th",{style:{"text-align":"center"}},"跑團日期"),t("th",{style:{"text-align":"center"}},"報名模組"),t("th",{style:{"text-align":"center"}},"負責 GM")])],-1),V={style:{width:"20%"}},D={style:{width:"30%","font-size":"20px"}},G={__name:"OrdersView",setup(B){const r=g([]);return(async()=>{try{const{data:s}=await m.get("/orders");r.push(...s.result.map(i=>i))}catch{p.fire({icon:"error",title:"失敗",text:"取得訂單失敗"})}})(),(s,i)=>{const c=h,d=y("router-link"),u=k;return a(),o("div",v,[b,l(c),l(u,{id:"ordersTable","single-line":!1,striped:"",style:{margin:"auto","margin-top":"5%",width:"85%"},class:"table"},{default:_(()=>[F,t("tbody",null,[(a(!0),o(x,null,f(r,e=>(a(),o("tr",{key:e._id,style:{"text-align":"center"}},[t("td",V,n(e._id),1),t("td",null,n(new Date(e.date).toLocaleDateString()),1),t("td",D,[l(d,{to:"/modules/"+e.m_id._id,style:{"text-decoration":"none","font-weight":"800",color:"#2F4F40"}},{default:_(()=>[w(n(e.m_name),1)]),_:2},1032,["to"])]),t("td",null,n(e.gm),1)]))),128))])]),_:1})])}}};export{G as default};
