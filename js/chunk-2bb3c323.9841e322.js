(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bb3c323"],{"0434":function(r,t,s){},"9f25":function(r,t,s){"use strict";s.r(t);var e=function(){var r=this,t=r.$createElement,s=r._self._c||t;return s("form",{staticClass:"group__add-scholar",on:{submit:function(t){return r.saveScholar()}}},[s("label",{staticClass:"label__filter"},[r._v("Выберите ученика:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:r.ids.scholarId,expression:"ids.scholarId"}],staticClass:"group__add-scholar-select",attrs:{required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(r){return r.selected})).map((function(r){var t="_value"in r?r._value:r.value;return t}));r.$set(r.ids,"scholarId",t.target.multiple?s:s[0])}}},[s("option",{domProps:{value:0}},[r._v("Выбрать")]),r._l(r.filteredScholars,(function(t){return s("option",{domProps:{value:t.id}},[r._v(r._s(t.lastName)+" "+r._s(t.firstName)+" ")])}))],2),r._m(0)])},a=[function(){var r=this,t=r.$createElement,s=r._self._c||t;return s("button",{staticClass:"save__scholar-button"},[s("div",{staticClass:"save__scholar"})])}],o=(s("4de4"),s("a9e3"),s("5530")),c=s("2f62"),l={data:function(){return{ids:{scholarId:0,groupId:this.group.id},selectedScholarId:0}},computed:Object(o["a"])({},Object(c["d"])("groupScholars",{groupScholars:function(r){return r.groupScholars}}),{filteredScholars:function(){var r=this;return this.scholars.filter((function(t){return 0==r.groupScholars.filter((function(r){return r.id==t.id})).length})).filter((function(t){return r.groupClass==t.scholarClass}))}}),created:function(){this.fetchGroupScholars(this.group.id)},props:{group:Object,groupClass:Number,scholars:Array},methods:Object(o["a"])({},Object(c["b"])("groupScholars",["addScholarGroup","fetchGroupScholars"]),{saveScholar:function(){this.ids.scholarId>0&&(this.addScholarGroup(this.ids),this.group.count++,this.$emit("saveScholar"))}})},n=l,i=(s("d0f5"),s("2877")),u=Object(i["a"])(n,e,a,!1,null,"12726b6a",null);t["default"]=u.exports},d0f5:function(r,t,s){"use strict";var e=s("0434"),a=s.n(e);a.a}}]);
//# sourceMappingURL=chunk-2bb3c323.9841e322.js.map