import{u as q,w as f,a9 as w,ac as A,ad as F,A as N}from"./router-c5eb6ba6.js";import{u as R,_ as S,b as H,a as K,c as $,d as M}from"./use-message-1804c65d.js";import{r as h,a as I,f as s,l as r,m as y,k as a,j as l,g as k,W as _,af as O,a7 as g,t as v}from"./runtime-core.esm-bundler-4adb0545.js";import{_ as T,a as W}from"./Upload-b253ef1f.js";import{a as G}from"./Rate-6d516893.js";import"./Icon-a8619f5f.js";import"./plugin-vueexport-helper-c27b6911.js";import"./use-locale-b2887f78.js";import"./index-714b5119.js";import"./context-81bb04ff.js";import"./Add-22a87db6.js";import"./Image-150839fc.js";import"./_createCompounder-dbed2684.js";const J={id:"user_home"},P=y("h1",null," 探索者檔案",-1),Q={class:"user_form"},X={key:0,class:"title"},Y={key:1,class:"title"},Z={key:0,src:"https://picsum.photos/300/200/?random=10"},ee={key:0,style:{"font-size":"24px"}},te={class:"tags-wrapper",style:{background:"#DDA49244","border-radius":"8px",padding:"4%","margin-top":"-1px"}},ae={key:0,style:{display:"flex","justify-content":"flex"}},ne={key:0,style:{display:"flex","justify-content":"flex"}},le={key:0,style:{display:"flex","justify-content":"flex"}},be={__name:"HomeView",setup(oe){const u=q(),b=R(),x=h("medium"),D=h([]),z=i=>{console.log(i.fileList);let e=[],p=[];e=i.fileList.map(o=>o.url).filter(o=>o!==null),p=i.fileList.map(o=>o.file).filter(o=>o!==null),t.image=[...e,...p]},t=I({account:"",nickname:"",dc_account:"",dc_id:"",email:"",image:[],info:"",loading:!1,updateDisabled:!0}),U={nickname:[{required:!0,validator(i,e){if(!e)return new Error("暱稱必填")},trigger:["input","blur"]}],dc_account:[{required:!0,validator(i,e){if(!e)return new Error("暱稱必填")},trigger:["input","blur"]}],dc_id:[{required:!0,validator(i,e){if(!e)return new Error("暱稱必填")},trigger:["input","blur"]}],email:[{required:!0,validator(i,e){if(!e)return new Error("暱稱必填")},trigger:["input","blur"]}],image:[{required:!0,validator(i,e){if(e){if(e.length>=2)return new Error("照片只能放 1 張")}else return new Error("探索者照片必放")}}]},E=async()=>{t.loading=!0;const i=new FormData;i.append("nickname",t.nickname),i.append("dc_account",t.dc_account),i.append("dc_id",t.dc_id),i.append("info",t.info),t.image.length>=1&&t.image.forEach(e=>{i.append("image",e)});try{const{data:e}=await A.patch("/users/edit/"+u._id,i);console.log(e.result),b.success("探索者資料 修改成功！")}catch{b.error("探索者資料 修改失敗")}t.loading=!1};return(i,e)=>{const p=F,o=H,L=T,d=K,C=W,j=G,m=N,c=$,B=M,V=S;return s(),r("div",J,[P,y("div",Q,[a(V,{model:t,rules:U,size:x.value,disabled:t.updateDisabled,"label-placement":"top",style:{"background-color":"#F8E9DD","border-radius":"15px",padding:"2%"},onSubmit:f(E,["prevent"])},{default:l(()=>[a(B,{cols:"6 l:12","item-responsive":"",responsive:"screen","x-gap":"30"},{default:l(()=>[a(o,{span:"12"},{default:l(()=>[a(p,{"title-placement":"left",style:{"--n-color":"#5d8585","--n-text-color":"#5d8585",margin:"-8vh 0 -10vh 0"}},{default:l(()=>[t.updateDisabled===!0?(s(),r("h2",X,"探 索 者 檔 案")):(s(),r("h2",Y,"探 索 者 檔 案 編 修 中"))]),_:1})]),_:1}),a(o,{span:"xs:9 m:6 l:6",label:"探索者照片",path:"image"},{default:l(()=>[t.updateDisabled===!0?(s(),r("img",Z)):(s(),k(L,{key:1,value:t.image,"onUpdate:value":e[0]||(e[0]=n=>t.image=n),"list-type":"image-card",accept:".jpg,.jpeg,.png,.gif,.bmp,.tiff,.svg,.webp","default-file-list":D.value,onChange:z},{default:l(()=>[_(" 更改照片 ")]),_:1},8,["value","default-file-list"]))]),_:1}),a(o,{span:"xs:9 m:6 l:6",label:"探索者暱稱",path:"nickname"},{default:l(()=>[t.updateDisabled===!0?(s(),r("p",ee,O(g(u).nickname),1)):(s(),k(d,{key:1,value:g(u).nickname,"onUpdate:value":e[1]||(e[1]=n=>g(u).nickname=n),type:"text"},null,8,["value"]))]),_:1}),a(o,{span:"xs:6 m:3 l:3",label:"DC 名稱",path:"dc_account"},{default:l(()=>[a(d,{value:t.dc_account,"onUpdate:value":e[2]||(e[2]=n=>t.dc_account=n),clearable:""},null,8,["value"])]),_:1}),a(o,{span:"xs:6 m:3 l:3",label:"DC_id",path:"dc_id"},{default:l(()=>[a(d,{value:t.dc_id,"onUpdate:value":e[3]||(e[3]=n=>t.dc_id=n),clearable:""},null,8,["value"])]),_:1}),a(o,{span:"xs:6 m:3 l:3",label:"特色",path:"hashtag"},{default:l(()=>[y("div",te,[a(C,{value:t.hashtag,"onUpdate:value":e[4]||(e[4]=n=>t.hashtag=n),type:"primary",round:"","input-style":"warning"},null,8,["value"])])]),_:1}),a(o,{span:"xs:6 m:3 l:3",label:"難度",path:"difficulty"},{default:l(()=>[a(j,{value:t.difficulty,"onUpdate:value":e[5]||(e[5]=n=>t.difficulty=n),"default-value":.5,"allow-half":"",color:"#4fb233"},null,8,["value","default-value"])]),_:1}),a(o,{span:"xs:9 m:6 l:6",label:"模組說明",path:"info"},{default:l(()=>[a(d,{value:t.info,"onUpdate:value":e[6]||(e[6]=n=>t.info=n),placeholder:"建議這邊只放最簡單的模組介紹就好~",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["value"])]),_:1}),a(o,{span:"xs:9 m:6 l:6",label:"額外補充(注意事項)",path:"notice"},{default:l(()=>[a(d,{value:t.notice,"onUpdate:value":e[7]||(e[7]=n=>t.notice=n),placeholder:"有關 HO情報、公開情報、紙娃娃素材...等，是放在這區喔 :))",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["value"])]),_:1}),a(o,{span:"xs:9 m:6 l:6",label:"可可亞連結",path:"ccfoliaLink"},{default:l(()=>[a(d,{value:t.ccfoliaLink,"onUpdate:value":e[8]||(e[8]=n=>t.ccfoliaLink=n),placeholder:" ",style:{"background-color":"#F5BBA9"}},null,8,["value"])]),_:1}),a(o,{span:"xs:9 m:6 l:6",label:"Discord 連結",path:"discordLink"},{default:l(()=>[a(d,{value:t.discordLink,"onUpdate:value":e[9]||(e[9]=n=>t.discordLink=n),placeholder:" ",style:{"background-color":"#9D9FDD"}},null,8,["value"])]),_:1}),a(c,{span:"2"},{default:l(()=>[t.updateDisabled===!1?(s(),r("div",ae,[a(m,{type:"error",ghost:"",disabled:t.loading,round:"",size:"large",style:{width:"12vw",height:"3vw","font-size":"1.5vw"},onClick:e[10]||(e[10]=n=>t.updateDisabled=!0)},{default:l(()=>[_(" 取    消 ")]),_:1},8,["disabled"])])):v("",!0)]),_:1}),a(c,{span:"2"},{default:l(()=>[t.updateDisabled===!1?(s(),r("div",ne,[a(m,{disabled:t.loading,round:"",type:"primary",size:"large",style:{width:"12vw",height:"3vw","font-size":"1.5vw"},"attr-type":"submit",onKeydown:e[11]||(e[11]=w(f(()=>{},["prevent"]),["enter"]))},{default:l(()=>[_(" 存    檔 ")]),_:1},8,["disabled"])])):v("",!0)]),_:1}),a(c,{span:"2"},{default:l(()=>[t.updateDisabled===!0?(s(),r("div",le,[a(m,{disabled:t.loading,round:"",type:"primary",size:"large",style:{width:"12vw",height:"3vw","font-size":"1.5vw"},onClick:e[12]||(e[12]=n=>t.updateDisabled=!1),onKeydown:e[13]||(e[13]=w(f(()=>{},["prevent"]),["enter"]))},{default:l(()=>[_(" 編    輯 ")]),_:1},8,["disabled"])])):v("",!0)]),_:1})]),_:1})]),_:1},8,["model","size","disabled","onSubmit"])])])}}};export{be as default};