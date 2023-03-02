import{v as c,_ as q}from"./index-ebe4c6e3.js";import{al as F,am as U,R as V,an as B,ac as O}from"./router-7f210e9c.js";import{_ as P,r as m,a as I,f as N,l as C,m as i,k as r,j as a,W as D,u as S,v as A,h as M}from"./plugin-vueexport-helper-dfa573d2.js";import{_ as j,a as G,b as L,c as T,d as W}from"./Grid-87c6090c.js";import{u as $}from"./use-message-db71c59d.js";import"./use-locale-d405c6af.js";import"./index-714b5119.js";import"./Suffix-803205d7.js";import"./context-4a3c1b0b.js";const g=u=>(S("data-v-98e59e4c"),u=u(),A(),u),z={class:"bg_g"},H={class:"box"},J=g(()=>i("div",{class:"box_img"},[i("img",{src:q})],-1)),K={class:"box_form"},Q=g(()=>i("span",{style:{color:"#5865F2"}}," # ",-1)),X={span:5},Y={id:"login"},Z={__name:"RegisterView",setup(u){const f=F(),d=$(),_=m(null),p=m(!1),t=I({account:"",nickname:"",password:"",confirmPassword:"",email:"",dc_account:"",dc_id:""}),v={account:[{required:!0,validator(l,e){if(e){if(e.length<5||e.length>21)return new Error("帳號長度須為 6 ~ 20 字");if(!c.isAlphanumeric(e))return new Error("格式不正確")}else return new Error("帳號欄位必填")},trigger:["input","blur"]}],nickname:[{required:!0,validator(l,e){if(e){if(e.length>21)return new Error("暱稱長度過長")}else return new Error("探索者暱稱欄位必填")},trigger:["input","blur"]}],password:[{required:!0,validator(l,e){if(e){if(e.length<5||e.length>21)return new Error("密碼長度須為 6 ~ 20 字");if(!c.isAlphanumeric(e))return new Error("格式不正確")}else return new Error("密碼欄位必填")},trigger:["input","blur"]}],confirmPassword:[{required:!0,validator(l,e){if(!e)return new Error("請再填一次密碼")},trigger:["input","blur"]}],email:[{required:!0,validator(l,e){if(e){if(!c.isEmail(e))return new Error("信箱格式不正確")}else return new Error("email 欄位為必填")},trigger:["input","blur"]}],dc_account:[{required:!0,validator(l,e){if(!e)return new Error("此欄位必填")},trigger:["input","blur"]}],dc_id:[{required:!0,validator(l,e){if(e){if(!c.isNumeric(e)||e.length!==4)return new Error("是 4 位數字")}else return new Error("此欄位必填")},trigger:["input","blur"]}]},w=async()=>{var l,e;if(!t.value!==null){p.value=!0;try{await O.post("/users",t),f.push("/")}catch(n){console.log((e=(l=n==null?void 0:n.response)==null?void 0:l.data)==null?void 0:e.message),p.value=!1}}},b=[{label:()=>M(U,{to:{name:"login"}},{default:()=>"我已經是探索者..."}),key:"go-login"}];function h(l){var e;console.log(t.value),l.preventDefault(),(e=_.value)==null||e.validate(n=>{n?(console.log(n),d.error("註冊失敗")):(d.success("註冊成功"),w())})}return(l,e)=>{const n=G,s=L,y=V,E=T,x=W,k=j,R=B;return N(),C("div",z,[i("div",H,[J,i("div",K,[r(k,{ref_key:"valid",ref:_,model:t,rules:v,"label-placement":"top"},{default:a(()=>[r(x,{cols:"6 s:6 l:12","x-gap":18,resonsive:"screen"},{default:a(()=>[r(s,{span:3,label:"登入帳號",path:"account"},{default:a(()=>[r(n,{value:t.account,"onUpdate:value":e[0]||(e[0]=o=>t.account=o),maxlength:"20",clearable:"",placeholder:"英數字6碼以上"},null,8,["value"])]),_:1}),r(s,{span:3,label:"探索者暱稱",path:"nickname"},{default:a(()=>[r(n,{value:t.nickname,"onUpdate:value":e[1]||(e[1]=o=>t.nickname=o),maxlength:"20",clearable:"",placeholder:"想被怎麼稱呼呢?"},null,8,["value"])]),_:1}),r(s,{span:3,label:"密碼",path:"password"},{default:a(()=>[r(n,{value:t.password,"onUpdate:value":e[2]||(e[2]=o=>t.password=o),type:"password",placeholder:"英數字6碼以上",clearable:""},null,8,["value"])]),_:1}),r(s,{span:3,label:"再次輸入密碼",path:"confirmPassword"},{default:a(()=>[r(n,{value:t.confirmPassword,"onUpdate:value":e[3]||(e[3]=o=>t.confirmPassword=o),placeholder:" ",type:"password",clearable:""},null,8,["value"])]),_:1}),r(s,{span:2,label:"Discord 帳號   (GM 聯絡用 )",path:"dc_account",style:{"--n-label-text-color":"#3b3ace !important"}},{default:a(()=>[r(n,{value:t.dc_account,"onUpdate:value":e[4]||(e[4]=o=>t.dc_account=o),placeholder:"使用者名稱",style:{"--n-color":"#5865F248","--n-placeholder-color":"#3b3ace88","margin-right":"-2%"},clearable:""},null,8,["value"])]),_:1}),r(s,{span:1,path:"dc_id",style:{"margin-left":"-10px","margin-right":"10px"}},{default:a(()=>[Q,r(n,{value:t.dc_id,"onUpdate:value":e[5]||(e[5]=o=>t.dc_id=o),placeholder:"OOOO",style:{"--n-color":"#5865F248","--n-placeholder-color":"#3b3ace88","margin-left":"5%",width:"20vw"},clearable:""},null,8,["value"])]),_:1}),r(s,{span:3,label:"E-mail",path:"email",style:{"padding-bottom":"15%"}},{default:a(()=>[r(n,{value:t.email,"onUpdate:value":e[6]||(e[6]=o=>t.email=o),placeholder:" ",clearable:""},null,8,["value"])]),_:1}),r(E,{span:15},{default:a(()=>[i("div",X,[r(y,{round:"",type:"primary",loading:p.value,color:"#F9B02D",style:{width:"20%",position:"relative",top:"30%",left:"35%",color:"#FFF"},onClick:h},{default:a(()=>[D("  註      冊  ")]),_:1},8,["loading"])])]),_:1})]),_:1})]),_:1},8,["model"]),i("div",Y,[r(R,{options:b})])])])])}}},ue=P(Z,[["__scopeId","data-v-98e59e4c"]]);export{ue as default};
