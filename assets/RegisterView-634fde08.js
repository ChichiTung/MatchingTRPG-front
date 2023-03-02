import{v as c,_ as q}from"./index-ebe4c6e3.js";import{V as F,X as R,A as U,Y as B,Z as O}from"./router-c5eb6ba6.js";import{_ as P}from"./plugin-vueexport-helper-c27b6911.js";import{u as I,_ as N,a as A,b as C,c as D,d as S}from"./use-message-1804c65d.js";import{r as m,a as M,f as j,l as G,m as i,k as r,j as a,W as L,u as T,v as W,h as X}from"./runtime-core.esm-bundler-4adb0545.js";import"./Icon-a8619f5f.js";import"./use-locale-b2887f78.js";import"./index-714b5119.js";import"./context-81bb04ff.js";const g=u=>(T("data-v-1665f4ca"),u=u(),W(),u),Y={class:"bg_g"},Z={class:"box"},$=g(()=>i("div",{class:"box_img"},[i("img",{src:q})],-1)),z={class:"box_form"},H=g(()=>i("span",{style:{color:"#5865F2"}}," # ",-1)),J={span:5},K={id:"login"},Q={__name:"RegisterView",setup(u){const f=F(),d=I(),_=m(null),p=m(!1),t=M({account:"",nickname:"",password:"",confirmPassword:"",email:"",dc_account:"",dc_id:""}),v={account:[{required:!0,validator(l,e){if(e){if(e.length<5||e.length>21)return new Error("帳號長度須為 6 ~ 20 字");if(!c.isAlphanumeric(e))return new Error("格式不正確")}else return new Error("帳號欄位必填")},trigger:["input","blur"]}],nickname:[{required:!0,validator(l,e){if(e){if(e.length>21)return new Error("暱稱長度過長")}else return new Error("探索者暱稱欄位必填")},trigger:["input","blur"]}],password:[{required:!0,validator(l,e){if(e){if(e.length<5||e.length>21)return new Error("密碼長度須為 6 ~ 20 字");if(!c.isAlphanumeric(e))return new Error("格式不正確")}else return new Error("密碼欄位必填")},trigger:["input","blur"]}],confirmPassword:[{required:!0,validator(l,e){if(!e)return new Error("請再填一次密碼")},trigger:["input","blur"]}],email:[{required:!0,validator(l,e){if(e){if(!c.isEmail(e))return new Error("信箱格式不正確")}else return new Error("email 欄位為必填")},trigger:["input","blur"]}],dc_account:[{required:!0,validator(l,e){if(!e)return new Error("此欄位必填")},trigger:["input","blur"]}],dc_id:[{required:!0,validator(l,e){if(e){if(!c.isNumeric(e)||e.length!==4)return new Error("是 4 位數字")}else return new Error("此欄位必填")},trigger:["input","blur"]}]},w=async()=>{var l,e;if(!t.value!==null){p.value=!0;try{await O.post("/users",t),f.push("/")}catch(n){console.log((e=(l=n==null?void 0:n.response)==null?void 0:l.data)==null?void 0:e.message),p.value=!1}}},b=[{label:()=>X(R,{to:{name:"login"}},{default:()=>"我已經是探索者..."}),key:"go-login"}];function h(l){var e;console.log(t.value),l.preventDefault(),(e=_.value)==null||e.validate(n=>{n?(console.log(n),d.error("註冊失敗")):(d.success("註冊成功"),w())})}return(l,e)=>{const n=A,s=C,y=U,E=D,x=S,k=N,V=B;return j(),G("div",Y,[i("div",Z,[$,i("div",z,[r(k,{ref_key:"valid",ref:_,model:t,rules:v,"label-placement":"top"},{default:a(()=>[r(x,{cols:"6 s:6 l:12","x-gap":18,resonsive:"screen"},{default:a(()=>[r(s,{span:3,label:"登入帳號",path:"account"},{default:a(()=>[r(n,{value:t.account,"onUpdate:value":e[0]||(e[0]=o=>t.account=o),maxlength:"20",clearable:"",placeholder:"英數字6碼以上"},null,8,["value"])]),_:1}),r(s,{span:3,label:"探索者暱稱",path:"nickname"},{default:a(()=>[r(n,{value:t.nickname,"onUpdate:value":e[1]||(e[1]=o=>t.nickname=o),maxlength:"20",clearable:"",placeholder:"想被怎麼稱呼呢?"},null,8,["value"])]),_:1}),r(s,{span:3,label:"密碼",path:"password"},{default:a(()=>[r(n,{value:t.password,"onUpdate:value":e[2]||(e[2]=o=>t.password=o),type:"password",placeholder:"英數字6碼以上",clearable:""},null,8,["value"])]),_:1}),r(s,{span:3,label:"再次輸入密碼",path:"confirmPassword"},{default:a(()=>[r(n,{value:t.confirmPassword,"onUpdate:value":e[3]||(e[3]=o=>t.confirmPassword=o),placeholder:" ",type:"password",clearable:""},null,8,["value"])]),_:1}),r(s,{span:2,label:"Discord 帳號   (GM 聯絡用 )",path:"dc_account",style:{"--n-label-text-color":"#3b3ace !important"}},{default:a(()=>[r(n,{value:t.dc_account,"onUpdate:value":e[4]||(e[4]=o=>t.dc_account=o),placeholder:"使用者名稱",style:{"--n-color":"#5865F248","--n-placeholder-color":"#3b3ace88","margin-right":"-2%"},clearable:""},null,8,["value"])]),_:1}),r(s,{span:1,path:"dc_id",style:{"margin-left":"-10px","margin-right":"10px"}},{default:a(()=>[H,r(n,{value:t.dc_id,"onUpdate:value":e[5]||(e[5]=o=>t.dc_id=o),placeholder:"OOOO",style:{"--n-color":"#5865F248","--n-placeholder-color":"#3b3ace88","margin-left":"5%",width:"20vw"},clearable:""},null,8,["value"])]),_:1}),r(s,{span:3,label:"E-mail",path:"email",style:{"padding-bottom":"15%"}},{default:a(()=>[r(n,{value:t.email,"onUpdate:value":e[6]||(e[6]=o=>t.email=o),placeholder:" ",clearable:""},null,8,["value"])]),_:1}),r(E,{span:15},{default:a(()=>[i("div",J,[r(y,{round:"",type:"primary",loading:p.value,color:"#F9B02D",style:{width:"20%",position:"relative",top:"30%",left:"35%",color:"#FFF"},onClick:h},{default:a(()=>[L("  註      冊  ")]),_:1},8,["loading"])])]),_:1})]),_:1})]),_:1},8,["model"]),i("div",K,[r(V,{options:b})])])])])}}},ue=P(Q,[["__scopeId","data-v-1665f4ca"]]);export{ue as default};