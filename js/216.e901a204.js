"use strict";(self["webpackChunkweek6and7"]=self["webpackChunkweek6and7"]||[]).push([[216],{2216:function(e,s,r){r.r(s),r.d(s,{default:function(){return g}});var a=r(6252),t=r(9963);const n={class:"container"},o={class:"row justify-content-center"},i=(0,a._)("h1",{class:"h3 mb-3 font-weight-normal"}," 請先登入 ",-1),l={class:"col-8"},u={class:"form-floating mb-3"},d=(0,a._)("label",{for:"username"},"Email address",-1),c={class:"form-floating"},m=(0,a._)("label",{for:"password"},"Password",-1),p=(0,a._)("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1),f=(0,a._)("p",{class:"mt-5 mb-3 text-muted"}," © 2021~∞ - 六角學院 ",-1);function h(e,s,r,h,w,b){return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",o,[i,(0,a._)("div",l,[(0,a._)("form",{id:"form",class:"form-signin",onSubmit:s[2]||(s[2]=(0,t.iM)(((...e)=>b.login&&b.login(...e)),["prevent"]))},[(0,a._)("div",u,[(0,a.wy)((0,a._)("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com","onUpdate:modelValue":s[0]||(s[0]=e=>w.user.username=e),required:"",autofocus:""},null,512),[[t.nr,w.user.username]]),d]),(0,a._)("div",c,[(0,a.wy)((0,a._)("input",{type:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=e=>w.user.password=e),required:""},null,512),[[t.nr,w.user.password]]),m]),p],32)])]),f])}var w={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post("https://vue3-course-api.hexschool.io/v2/admin/signin",this.user).then((e=>{const{token:s,expired:r}=e.data;document.cookie=`hexToken=${s}; expires=${new Date(r)};`,this.$router.push("/admin/AdminProducts")})).catch((e=>{alert(e.data.message)}))}}},b=r(3744);const _=(0,b.Z)(w,[["render",h]]);var g=_}}]);
//# sourceMappingURL=216.e901a204.js.map