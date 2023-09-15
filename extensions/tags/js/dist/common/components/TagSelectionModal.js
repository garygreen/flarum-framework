"use strict";(self.webpackChunkmodule_exports=self.webpackChunkmodule_exports||[]).push([[162],{610:(t,e,s)=>{s.r(e),s.d(e,{default:()=>S});var i=s(905),a=s(351),n=s.n(a),l=s(645),r=s.n(l),o=s(836),c=s.n(o),d=s(596),h=s.n(d),u=s(291),g=s.n(u),p=s(657),f=s.n(p),y=s(149),T=s.n(y),b=s(686),x=s.n(b),w=s(636),v=s.n(w),I=s(648),N=s(924),_=s(974),C=s(997);class S extends(x()){constructor(){super(...arguments),(0,i.Z)(this,"loading",!0),(0,i.Z)(this,"tags",void 0),(0,i.Z)(this,"selected",[]),(0,i.Z)(this,"bypassReqs",!1),(0,i.Z)(this,"filter",v()("")),(0,i.Z)(this,"focused",!1),(0,i.Z)(this,"navigator",new(f())),(0,i.Z)(this,"indexTag",void 0)}static initAttrs(t){var e,s,i,a,l,r,o,m,c,d,u,g,p,f,y,T,b,x;super.initAttrs(t),t.title||(t.title=h()(n().translator.trans("flarum-tags.lib.tag_selection_modal.title"))),t.canSelect||(t.canSelect=()=>!0),null!=t.allowResetting||(t.allowResetting=!0),t.limits={min:{total:null!=(e=null==(s=t.limits)||null==(i=s.min)?void 0:i.total)?e:-1/0,primary:null!=(a=null==(l=t.limits)||null==(r=l.min)?void 0:r.primary)?a:-1/0,secondary:null!=(o=null==(m=t.limits)||null==(c=m.min)?void 0:c.secondary)?o:-1/0},max:{total:null!=(d=null==(u=t.limits)||null==(g=u.max)?void 0:g.total)?d:1/0,primary:null!=(p=null==(f=t.limits)||null==(y=f.max)?void 0:y.primary)?p:1/0,secondary:null!=(T=null==(b=t.limits)||null==(x=b.max)?void 0:x.secondary)?T:1/0}},function(t){if(t.min.primary>t.max.primary)throw new Error("The minimum number of primary tags allowed cannot be more than the maximum number of primary tags allowed.");if(t.min.secondary>t.max.secondary)throw new Error("The minimum number of secondary tags allowed cannot be more than the maximum number of secondary tags allowed.");if(t.min.total>t.max.primary+t.max.secondary)throw new Error("The minimum number of tags allowed cannot be more than the maximum number of primary and secondary tags allowed together.");if(t.max.total<t.min.primary+t.min.secondary)throw new Error("The maximum number of tags allowed cannot be less than the minimum number of primary and secondary tags allowed together.");if(t.min.total>t.max.total)throw new Error("The minimum number of tags allowed cannot be more than the maximum number of tags allowed.")}(t.limits)}oninit(t){super.oninit(t),this.navigator.onUp((()=>this.setIndex(this.getCurrentNumericIndex()-1,!0))).onDown((()=>this.setIndex(this.getCurrentNumericIndex()+1,!0))).onSelect(this.select.bind(this)).onRemove((()=>this.selected.splice(this.selected.length-1,1))),n().tagList.load(["parent"]).then((t=>{this.loading=!1,this.attrs.selectableTags&&(t=this.attrs.selectableTags(t)),this.tags=(0,I.Z)(t),this.attrs.selectedTags&&this.attrs.selectedTags.map(this.addTag.bind(this)),this.indexTag=t[0],m.redraw()}))}className(){return c()("TagSelectionModal",this.attrs.className)}title(){return this.attrs.title}content(){if(this.loading||!this.tags)return m(T(),null);const t=this.filter().toLowerCase(),e=this.primaryCount(),s=this.secondaryCount(),i=this.getFilteredTags(),a=Math.max(h()(this.getInstruction(e,s)).length,this.filter().length);return[m("div",{className:"Modal-body"},m("div",{className:"TagSelectionModal-form"},m("div",{className:"TagSelectionModal-form-input"},m("div",{className:"TagsInput FormControl "+(this.focused?"focus":""),onclick:()=>this.$(".TagsInput input").focus()},m("span",{className:"TagsInput-selected"},this.selected.map((t=>m("span",{className:"TagsInput-tag",onclick:()=>{this.removeTag(t),this.onready()}},(0,N.Z)(t))))),m("input",{className:"FormControl",placeholder:h()(this.getInstruction(e,s)),bidi:this.filter,style:{width:a+"ch"},onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:()=>this.focused=!0,onblur:()=>this.focused=!1}))),m("div",{className:"TagSelectionModal-form-submit App-primaryControl"},m(r(),{type:"submit",className:"Button Button--primary",disabled:!this.meetsRequirements(e,s),icon:"fas fa-check"},n().translator.trans("flarum-tags.lib.tag_selection_modal.submit_button"))))),m("div",{className:"Modal-footer"},m("ul",{className:"TagSelectionModal-list SelectTagList"},i.map((e=>m("li",{"data-index":e.id(),className:c()({pinned:null!==e.position(),child:!!e.parent(),colored:!!e.color(),selected:this.selected.includes(e),active:this.indexTag===e}),style:{color:e.color()},onmouseover:()=>this.indexTag=e,onclick:this.toggleTag.bind(this,e)},(0,_.Z)(e),m("span",{className:"SelectTagListItem-name"},g()(e.name(),t)),e.description()?m("span",{className:"SelectTagListItem-description"},e.description()):"")))),this.attrs.limits.allowBypassing&&m("div",{className:"TagSelectionModal-controls"},m(C.Z,{className:"Button",onclick:()=>this.bypassReqs=!this.bypassReqs,isToggled:this.bypassReqs},n().translator.trans("flarum-tags.lib.tag_selection_modal.bypass_requirements"))))]}getFilteredTags(){const t=this.filter().toLowerCase(),e=this.primaryCount(),s=this.secondaryCount();let i=this.tags;return this.attrs.requireParentTag&&(i=i.filter((t=>{const e=t.parent();return null!==e&&(!1===e||this.selected.includes(e))}))),this.bypassReqs||(this.selected.length>=this.attrs.limits.max.total?i=i.filter((t=>this.selected.includes(t))):(e>=this.attrs.limits.max.primary&&(i=i.filter((t=>!t.isPrimary()||this.selected.includes(t)))),s>=this.attrs.limits.max.secondary&&(i=i.filter((t=>t.isPrimary()||this.selected.includes(t)))))),t&&(i=i.filter((e=>e.name().toLowerCase().includes(t)))),this.indexTag&&i.includes(this.indexTag)||(this.indexTag=i[0]),i}primaryCount(){return this.selected.filter((t=>t.isPrimary())).length}secondaryCount(){return this.selected.filter((t=>!t.isPrimary())).length}meetsRequirements(t,e){return!!(this.bypassReqs||this.attrs.allowResetting&&0===this.selected.length)||!(this.selected.length<this.attrs.limits.min.total)&&t>=this.attrs.limits.min.primary&&e>=this.attrs.limits.min.secondary}addTag(t){if(t&&this.attrs.canSelect(t)){if(this.attrs.onSelect&&this.attrs.onSelect(t,this.selected),this.attrs.requireParentTag){const e=t.parent();e&&!this.selected.includes(e)&&this.selected.push(e)}this.selected.includes(t)||this.selected.push(t)}}removeTag(t){const e=this.selected.indexOf(t);-1!==e&&(this.selected.splice(e,1),this.attrs.requireParentTag&&this.selected.filter((e=>e.parent()===t)).forEach(this.removeTag.bind(this)),this.attrs.onDeselect&&this.attrs.onDeselect(t,this.selected))}toggleTag(t){this.tags&&(this.selected.includes(t)?this.removeTag(t):this.addTag(t),this.filter()&&(this.filter(""),this.indexTag=this.tags[0]),this.onready())}getInstruction(t,e){if(this.bypassReqs)return"";if(t<this.attrs.limits.min.primary){const e=this.attrs.limits.min.primary-t;return h()(n().translator.trans("flarum-tags.lib.tag_selection_modal.choose_primary_placeholder",{count:e}))}if(e<this.attrs.limits.min.secondary){const t=this.attrs.limits.min.secondary-e;return h()(n().translator.trans("flarum-tags.lib.tag_selection_modal.choose_secondary_placeholder",{count:t}))}if(this.selected.length<this.attrs.limits.min.total){const t=this.attrs.limits.min.total-this.selected.length;return h()(n().translator.trans("flarum-tags.lib.tag_selection_modal.choose_tags_placeholder",{count:t}))}return""}onsubmit(t){t.preventDefault(),this.attrs.onsubmit&&this.attrs.onsubmit(this.selected),this.hide()}select(t){t.metaKey||t.ctrlKey||this.indexTag&&this.selected.includes(this.indexTag)?this.selected.length&&this.$('button[type="submit"]').click():this.indexTag&&this.getItem(this.indexTag)[0].dispatchEvent(new Event("click"))}selectableItems(){return this.$(".TagSelectionModal-list > li")}getCurrentNumericIndex(){return this.indexTag?this.selectableItems().index(this.getItem(this.indexTag)):-1}getItem(t){return this.selectableItems().filter('[data-index="'.concat(t.id(),'"]'))}setIndex(t,e){const s=this.selectableItems(),i=s.parent();t<0?t=s.length-1:t>=s.length&&(t=0);const a=s.eq(t);if(this.indexTag=n().store.getById("tags",a.attr("data-index")),m.redraw(),e&&this.indexTag){const t=i.scrollTop(),e=i.offset().top,s=e+i.outerHeight(),n=a.offset().top,l=n+a.outerHeight();let r;n<e?r=t-e+n-parseInt(i.css("padding-top"),10):l>s&&(r=t-s+l+parseInt(i.css("padding-bottom"),10)),void 0!==r&&i.stop(!0).animate({scrollTop:r},100)}}}flarum.reg.add("flarum-tags","common/components/TagSelectionModal",S)},997:(t,e,s)=>{s.d(e,{Z:()=>c});var i=s(433),a=s.n(i),n=s(645),l=s.n(n),r=s(836),o=s.n(r);class c extends(a()){view(t){const{className:e,isToggled:s,...i}=this.attrs,a=s?"far fa-check-circle":"far fa-circle";return m(l(),Object.assign({},i,{icon:a,className:o()([e,s&&"Button--toggled"])}),t.children)}}flarum.reg.add("flarum-tags","forum/components/ToggleButton",c)}}]);
//# sourceMappingURL=TagSelectionModal.js.map