(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1461929a"],{"0671":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile-wrapper"},[s("div",{staticClass:"form__title"},[t._v("Мой профиль")]),s("form",{staticClass:"form__profile"},[s("label",{staticClass:"label__photo-upload"},[s("input",{staticClass:"user__form-file-input",attrs:{name:"add__photo",type:"file"},on:{change:t.handlePhoto}}),s("div",{staticClass:"user__form-pic",class:{filled:t.renderedPhoto.length},style:{backgroundImage:"url("+t.renderedPhoto+")"}},[s("div",{staticClass:"user__change-photo"},[t._v("Изменить фото")])])]),s("div",{staticClass:"user__info"},[s("div",{staticClass:"form__row"},[s("label",{staticClass:"user__info-label"},[t._v("Имя"),s("input",{staticClass:"user__name",attrs:{type:"text",size:"16",placeholder:"Имя"},domProps:{value:t.Жанаргүл}})]),s("label",{staticClass:"user__info-label"},[t._v("Фамилия"),s("input",{staticClass:"user__lastname",attrs:{type:"text",size:"16",placeholder:"Фамилия"},domProps:{value:t.Кашувай}})])]),s("div",{staticClass:"form__row"},[s("label",{staticClass:"user__info-label"},[t._v("Пароль"),s("input",{staticClass:"user__password",attrs:{type:"password",size:"16",placeholder:"Пароль"},domProps:{value:t.user.password}})]),t._m(0)]),s("div",{staticClass:"form__row"},[s("div",{staticClass:"user__info-label"},[t._v("Сертификаты"),s("ul",{staticClass:"certificates__list"},t._l(t.user.certificates,(function(t){return s("li",{staticClass:"certificates__item"},[s("certificateItem",{attrs:{certificate:t}})],1)})),0)]),s("label",{staticClass:"user__info-label"},[t._v("Добавить сертификат"),s("addCertificateForm")],1)]),s("div",{staticClass:"form__row"},[s("label",{staticClass:"user__info-label"},[t._v("Образование"),s("input",{staticClass:"user__education",attrs:{type:"text",size:"16",placeholder:"Образование"},domProps:{value:t.user.education}})]),s("label",{staticClass:"user__info-label"},[t._v("Цитата"),s("textarea",{staticClass:"user__education",attrs:{type:"text",size:"16",placeholder:"Цитата"},domProps:{value:t.user.quote}})])]),s("div",{staticClass:"buttons"},[s("button",{staticClass:"submit__button",attrs:{type:"submit"}},[t._v("Сохранить")]),s("button",{staticClass:"reset__button",attrs:{type:"reset"},on:{click:function(e){return e.preventDefault(),t.resetButton(e)}}},[t._v("Отмена")])])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"user__info-label"},[t._v("Повторите пароль"),s("input",{staticClass:"user__password",attrs:{type:"password",size:"16"}})])}],i=(s("b0c0"),s("d3b7"),{components:{certificateItem:function(){return s.e("chunk-58f90d4a").then(s.bind(null,"67dc"))},addCertificateForm:function(){return s.e("chunk-6468c2ee").then(s.bind(null,"74e3"))}},data:function(){return{renderedPhoto:"",user:{name:"Динара",lastname:"Жусупова",education:"высшее",quote:"2 b or not 2 b",certificates:[{title:"Сертификат #1",file:"/path_to_certificate/doc_name"},{title:"Сертификат #2",file:"/path_to_certificate/doc_name"},{title:"Сертификат #3",file:"/path_to_certificate/doc_name"},{title:"Сертификат #4",file:"/path_to_certificate/doc_name"}],password:"qwerty",photo:""}}},methods:{renderImageFile:function(t){var e=this,s=new FileReader;try{s.readAsDataURL(t),s.onloadend=function(){e.renderedPhoto=s.result}}catch(a){throw new Error("Error read file")}},handlePhoto:function(t){console.log("from handle");var e=t.target.files[0];this.renderImageFile(e)},resetButton:function(){this.user.name="",this.user.lastname="",this.user.school="",this.user.class=0,this.user.password="",this.renderedPhoto="",this.user.quote="",this.user.education=""}}}),l=i,o=(s("bb95"),s("2877")),n=Object(o["a"])(l,a,r,!1,null,null,null);e["default"]=n.exports},b0c0:function(t,e,s){var a=s("83ab"),r=s("9bf2").f,i=Function.prototype,l=i.toString,o=/^\s*function ([^ (]*)/,n="name";a&&!(n in i)&&r(i,n,{configurable:!0,get:function(){try{return l.call(this).match(o)[1]}catch(t){return""}}})},bb95:function(t,e,s){"use strict";var a=s("e955"),r=s.n(a);r.a},e955:function(t,e,s){}}]);
//# sourceMappingURL=chunk-1461929a.9db2cf26.js.map