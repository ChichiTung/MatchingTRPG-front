import{D as V,aC as B,am as C,R as L,an as I,C as S}from"./router-7f210e9c.js";import{v as d,_ as D}from"./index-ebe4c6e3.js";import{_ as N,r as m,a as R,f as U,l as q,m as s,k as o,j as t,W as A,u as K,v as M,h as j}from"./plugin-vueexport-helper-dfa573d2.js";import{u as z}from"./use-message-db71c59d.js";import{_ as F,a as O,b as T,c as W,d as $}from"./Grid-87c6090c.js";import"./context-4a3c1b0b.js";import"./use-locale-d405c6af.js";import"./index-714b5119.js";import"./Suffix-803205d7.js";const G=r=>(K("data-v-0fac2ac9"),r=r(),M(),r),H={id:"bg_g"},J={class:"box"},P=G(()=>s("div",{class:"box_img"},[s("img",{src:D})],-1)),Q={class:"box_form"},X={span:6},Y={id:"register"},Z={__name:"LoginView",setup(r){const g=V(),c=m(null),i=m(!1),p=z(),n=R({account:"",password:""}),f={account:[{required:!0,validator(_,e){if(e){if(e.length<5||e.length>21)return new Error("帳號長度須為 6 ~ 20 字");if(!d.isAlphanumeric(e))return new Error("格式不正確")}else return new Error("帳號欄位必填")},trigger:["input","blur"]}],password:[{required:!0,validator(_,e){if(e){if(e.length<5||e.length>21)return new Error("密碼長度須為 6 ~ 20 字");if(!d.isAlphanumeric(e))return new Error("格式不正確")}else return new Error("密碼欄位必填")},trigger:["input","blur"]}]},v=async()=>{i.value=!0,await g.login(n),i.value=!1},w=[{label:()=>j(C,{to:{name:"register"}},{default:()=>"我還沒註冊為探索者 !!"}),key:"go-register"}];function h(_){var e;console.log(n.value),_.preventDefault(),(e=c.value)==null||e.validate(a=>{a?(console.log(a),p.error("登錄失敗")):(p.success("登錄成功"),v())})}return(_,e)=>{const a=O,u=T,y=L,b=W,x=$,k=F,E=I;return U(),q("div",H,[s("div",J,[P,s("div",Q,[o(k,{ref_key:"valid",ref:c,model:n,rules:f,"label-placement":"top"},{default:t(()=>[o(x,{cols:"6 s:6 l:12","y-gap":18},{default:t(()=>[o(u,{span:5,label:"登入帳號",path:"account"},{default:t(()=>[o(a,{value:n.account,"onUpdate:value":e[0]||(e[0]=l=>n.account=l),placeholder:"英數字6碼以上",onKeydown:e[1]||(e[1]=B(S(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),o(u,{span:5,label:"密碼",path:"password"},{default:t(()=>[o(a,{value:n.password,"onUpdate:value":e[2]||(e[2]=l=>n.password=l),type:"password",placeholder:"英數字6碼以上"},null,8,["value"])]),_:1}),o(b,{span:6},{default:t(()=>[s("div",X,[o(y,{round:"",type:"primary",loading:i.value,color:"#F9B02D",size:"large",style:{position:"relative",top:"50%",left:"30%"},onClick:h},{default:t(()=>[A("     登    錄      ")]),_:1},8,["loading"])])]),_:1})]),_:1})]),_:1},8,["model"]),s("div",Y,[o(E,{options:w})])])])])}}},le=N(Z,[["__scopeId","data-v-0fac2ac9"]]);export{le as default};