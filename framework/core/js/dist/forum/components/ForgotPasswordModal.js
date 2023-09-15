"use strict";(self.webpackChunkflarum_core=self.webpackChunkflarum_core||[]).push([[502],{1839:(r,t,s)=>{s.r(t),s.d(t,{default:()=>u});var o=s(7905),a=s(6789),e=s(7108),l=s(7202),i=s(1552),n=s(6458),d=s(4041);class u extends e.Z{constructor(){super(...arguments),(0,o.Z)(this,"email",void 0),(0,o.Z)(this,"success",!1)}oninit(r){super.oninit(r),this.email=(0,n.Z)(this.attrs.email||"")}className(){return"ForgotPasswordModal Modal--small"}title(){return a.Z.translator.trans("core.forum.forgot_password.title")}content(){return this.success?m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},a.Z.translator.trans("core.forum.forgot_password.email_sent_message")),m("div",{className:"Form-group"},m(l.Z,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},a.Z.translator.trans("core.forum.forgot_password.dismiss_button"))))):m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},a.Z.translator.trans("core.forum.forgot_password.text")),this.fields().toArray()))}fields(){const r=new d.Z,t=(0,i.Z)(a.Z.translator.trans("core.forum.forgot_password.email_placeholder"));return r.add("email",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"email",type:"email",placeholder:t,"aria-label":t,bidi:this.email,disabled:this.loading})),50),r.add("submit",m("div",{className:"Form-group"},m(l.Z,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},a.Z.translator.trans("core.forum.forgot_password.submit_button"))),-10),r}onsubmit(r){r.preventDefault(),this.loading=!0,a.Z.request({method:"POST",url:a.Z.forum.attribute("apiUrl")+"/forgot",body:this.requestParams(),errorHandler:this.onerror.bind(this)}).then((()=>{this.success=!0,this.alertAttrs=null})).catch((()=>{})).then(this.loaded.bind(this))}requestParams(){return{email:this.email()}}onerror(r){404===r.status&&r.alert&&(r.alert.content=a.Z.translator.trans("core.forum.forgot_password.not_found_message")),super.onerror(r)}}flarum.reg.add("core","forum/components/ForgotPasswordModal",u)}}]);
//# sourceMappingURL=ForgotPasswordModal.js.map