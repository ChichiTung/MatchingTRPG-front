import{z as I,r as w,e as x,P as z,o as s,j as l,d as K,k as o,w as i,B as b,A as C,u as g,a as v,c as _,t as k,Q as f,x as L,U as R}from"./index-dd25a306.js";import{E as $}from"./Edit-808f371e.js";import{u as A}from"./use-message-bb736759.js";import{_ as H,b as M,a as P,c as Q,d as T}from"./Grid-b946789c.js";import{_ as q}from"./Upload-61afbca4.js";import"./use-locale-bc572da0.js";import"./Suffix-70351a49.js";import"./Add-a4912684.js";import"./Image-5b9e2c77.js";import"./_createCompounder-b9cc44ef.js";const G={id:"user_home"},J={class:"user_form"},O={key:0,class:"title"},W={key:1,class:"title"},X={key:2,class:"edit_button"},Y=["src"],Z={key:0,style:{"font-size":"24px"}},ee={key:0,style:{"font-size":"24px"}},te={key:0,style:{"font-size":"24px"}},ae={key:0,style:{"font-size":"24px",width:"50vw",height:"20vh"}},ne={key:0},se={key:1},oe={key:0,style:{display:"flex","justify-content":"flex"}},ie={key:0,style:{display:"flex","justify-content":"flex"}},be={__name:"HomeView",setup(le){const p=I(),y=A(),U=w("medium"),h=w([]),j=n=>{console.log(n.fileList);let t=[],u=[];t=n.fileList.map(c=>c.url).filter(c=>c!==null),u=n.fileList.map(c=>c.file).filter(c=>c!==null),e.image=[...t,...u]},a=x([]),e=x({account:"",nickname:"",dc_account:"",dc_id:0,image:[],intro:"",loading:!1,updateDisabled:!0,idx:-1}),V=n=>{console.log(n),n!==!0&&(h.value.length=0,e.account=a.account,e.nickname=a.nickname,e.dc_account=a.dc_account,e.dc_id=a.dc_id,e.email=a.email,e.image=a.image,e.intro=a.intro,e.loading=!1,e.updateDisabled=-1,e.idx=n),e.updateDisabled=!1},B=()=>{e.account="",e.nickname="",e.dc_account="",e.dc_id="",e.email="",e.image="",e.intro="",e.loading=!1,e.updateDisabled=!0},E=async()=>{e.loading=!0;const n=new FormData;n.append("nickname",e.nickname),n.append("dc_account",e.dc_account),n.append("dc_id",e.dc_id),n.append("intro",e.intro),e.image.length>=1&&e.image.forEach(t=>{n.append("image",t)});try{const{data:t}=await z.patch("/users/edit/"+p._id,n);a._id=t.result._id,a.account=t.result.account,a.password=t.result.password,a.email=t.result.email,a.nickname=t.result.nickname,a.image=t.result.image,a.intro=t.result.intro,a.dc_account=t.result.dc_account,a.dc_id=t.result.dc_id,y.success("探索者資料 修改成功！"),e.loading=!1,e.updateDisabled=!0}catch{y.error("探索者資料 修改失敗")}e.loading=!1};return(async()=>{try{const{data:n}=await z.get("/users/me");a._id=n.result._id,a.account=n.result.account,a.password=n.result.password,a.email=n.result.email,a.nickname=n.result.nickname,a.image=n.result.image[0],a.intro=n.result.intro,a.dc_account=n.result.dc_account,a.dc_id=n.result.dc_id,console.log(n),console.log("data.result._img:"+n.result.image[0]),console.log("myInfo.image:"+a.image)}catch{console.log(a),y.error("探索者資料取得失敗")}})(),(n,t)=>{const u=L,c=R,r=M,F=q,m=P,D=Q,N=T,S=H;return s(),l("div",G,[K("div",J,[o(S,{model:e,size:U.value,disabled:e.updateDisabled,"label-placement":"top",style:{"background-color":"#F8E9DD","border-radius":"15px",padding:"2%"},onSubmit:b(E,["prevent"])},{default:i(()=>[o(N,{cols:"6 l:12","item-responsive":"",responsive:"screen","x-gap":"30"},{default:i(()=>[o(r,{span:"12"},{default:i(()=>[o(c,{"title-placement":"left",style:{"--n-color":"#5d8585","--n-text-color":"#5d8585",margin:"-8vh 0 -10vh 0"}},{default:i(()=>[e.updateDisabled===!0?(s(),l("h2",O,"探 索 者 檔 案")):(s(),l("h2",W,"探 索 者 檔 案 編 修 中")),e.updateDisabled===!0?(s(),l("div",X,[o(u,{strong:"",secondary:"",disabled:e.loading,circle:"",type:"success",size:"large",style:{"font-size":"15px"},onClick:t[0]||(t[0]=d=>V(!1)),onKeydown:t[1]||(t[1]=C(b(()=>{},["prevent"]),["enter"]))},{icon:i(()=>[o(g($))]),_:1},8,["disabled"])])):v("",!0)]),_:1})]),_:1}),o(r,{span:"xs:9 m:6 l:6",label:"探索者照片",path:"image"},{default:i(()=>[e.updateDisabled===!0?(s(),l("img",{key:0,class:"user_img",src:a.image},null,8,Y)):(s(),_(F,{key:1,value:e.image,"onUpdate:value":t[2]||(t[2]=d=>e.image=d),"list-type":"image-card",multiple:"",accept:".jpg,.jpeg,.png,.gif,.bmp,.tiff,.svg,.webp","default-file-list":h.value,onChange:j},{default:i(()=>[k(" 更改照片 ")]),_:1},8,["value","default-file-list"]))]),_:1}),o(r,{span:"xs:9 m:6 l:4",label:"探索者暱稱",path:"nickname"},{default:i(()=>[e.updateDisabled===!0?(s(),l("p",Z,f(g(p).nickname),1)):(s(),_(m,{key:1,value:e.nickname,"onUpdate:value":t[3]||(t[3]=d=>e.nickname=d),type:"text"},null,8,["value"]))]),_:1}),o(r,{span:"xs:6 m:3 l:3",label:"DC 使用者名稱",path:"dc_account"},{default:i(()=>[e.updateDisabled===!0?(s(),l("p",ee,f(g(p).dc_account),1)):(s(),_(m,{key:1,value:e.dc_account,"onUpdate:value":t[4]||(t[4]=d=>e.dc_account=d),clearable:"",style:{"background-color":"#9D9FDD88"}},null,8,["value"]))]),_:1}),o(r,{span:"xs:6 m:3 l:3",label:"DC 個人識別碼",path:"dc_id"},{default:i(()=>[e.updateDisabled===!0?(s(),l("p",te," # "+f(g(p).dc_id),1)):(s(),_(m,{key:1,value:e.dc_id,"onUpdate:value":t[5]||(t[5]=d=>e.dc_id=d),clearable:"",style:{"background-color":"#9D9FDD88"}},null,8,["value"]))]),_:1}),o(r,{span:"xs:9 m:6 l:6",label:"探索者自介",path:"notice"},{default:i(()=>[e.updateDisabled===!0?(s(),l("p",ae,[a.intro===null?(s(),l("span",ne," 講點什麼讓大家更了解你吧~ ")):(s(),l("span",se,f(a.intro),1))])):(s(),_(m,{key:1,value:e.intro,"onUpdate:value":t[6]||(t[6]=d=>e.intro=d),placeholder:"喜歡的模組風格、擅長推理或RP... 等等，能讓大家更了解你的內容都可以放在這裡喔~ :))",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["value"]))]),_:1}),o(D,{span:"2",offset:8},{default:i(()=>[e.updateDisabled===!1?(s(),l("div",oe,[o(u,{type:"error",ghost:"",disabled:e.loading,round:"",size:"large",style:{width:"9vw",height:"2.2vw","font-size":"1rem"},onClick:t[7]||(t[7]=d=>B())},{default:i(()=>[k(" 取    消 ")]),_:1},8,["disabled"])])):v("",!0)]),_:1}),o(D,{span:"2"},{default:i(()=>[e.updateDisabled===!1?(s(),l("div",ie,[o(u,{disabled:e.loading,round:"",type:"success",size:"large",style:{width:"9vw",height:"2.2vw","font-size":"1rem"},"attr-type":"submit",onKeydown:t[8]||(t[8]=C(b(()=>{},["prevent"]),["enter"]))},{default:i(()=>[k(" 存    檔 ")]),_:1},8,["disabled"])])):v("",!0)]),_:1})]),_:1})]),_:1},8,["model","size","disabled","onSubmit"])])])}}};export{be as default};
