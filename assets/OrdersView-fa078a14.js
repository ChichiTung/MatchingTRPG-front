import{e as p,P as m,aq as h,i as g,o,j as a,k as l,w as _,d as t,F as y,l as x,Q as n,t as w,U as f}from"./index-dd25a306.js";import{_ as k}from"./Table-00799db3.js";const v={id:"orders_bg"},b=t("h1",null," 預約列表 ",-1),V=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"ID"),t("th",{style:{"text-align":"center"}},"跑團日期"),t("th",{style:{"text-align":"center"}},"報名模組"),t("th",{style:{"text-align":"center"}},"負責 GM")])],-1),D={style:{width:"20%"}},F={style:{width:"30%","font-size":"20px"}},C={__name:"OrdersView",setup(B){const r=p([]);return(async()=>{try{const{data:s}=await m.get("/orders");r.push(...s.result.map(i=>i))}catch{h.fire({icon:"error",title:"失敗",text:"取得訂單失敗"})}})(),(s,i)=>{const c=f,d=g("router-link"),u=k;return o(),a("div",v,[b,l(c),l(u,{id:"ordersTable","single-line":!1,striped:"",style:{margin:"auto","margin-top":"5%",width:"85%"},class:"table"},{default:_(()=>[V,t("tbody",null,[(o(!0),a(y,null,x(r,e=>(o(),a("tr",{key:e._id,style:{"text-align":"center"}},[t("td",D,n(e._id),1),t("td",null,n(new Date(e.date).toLocaleDateString()),1),t("td",F,[l(d,{to:"/modules/"+e.m_id._id,style:{"text-decoration":"none","font-weight":"800",color:"#2F4F40"}},{default:_(()=>[w(n(e.m_name),1)]),_:2},1032,["to"])]),t("td",null,n(e.gm),1)]))),128))])]),_:1})])}}};export{C as default};
