(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0311aae0"],{"0d92":function(t,s,e){"use strict";e.r(s);var c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tests__content"},[e("div",{staticClass:"tests__header"},[e("h4",{staticClass:"tests__title"},[t._v("Пройденные тесты")]),e("div",{staticClass:"tests__filter"},[e("label",{staticClass:"label__filter",attrs:{for:"subjects"}},[t._v("Выберите предмет:")]),e("ul",{staticClass:"subjects__list"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSubjectId,expression:"selectedSubjectId"}],staticClass:"tests__filter-select",on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.selectedSubjectId=s.target.multiple?e:e[0]}}},[e("option",{staticClass:"subject__option",domProps:{value:0}},[t._v("Все")]),t._l(t.subjects,(function(s){return e("option",{staticClass:"subject__option",domProps:{value:s.id}},[t._v(t._s(s.name)+" ")])}))],2)])])]),e("ul",{staticClass:"tests__list"},[t._m(0),t._l(t.filteredTests,(function(s,c){return e("li",{key:s.id,staticClass:"tests__item"},[e("div",{staticClass:"tests__number"},[t._v(t._s(c+1))]),e("div",{staticClass:"tests__code"},[t._v(t._s(s.test.code))]),e("div",{staticClass:"tests__subject"},[t._v(t._s(s.test.group.subject.name))]),e("div",{staticClass:"tests__class"},[t._v(" "+t._s(s.test.group.groupClass))]),e("div",{staticClass:"tests__results"},[t._v(t._s(s.result))])])}))],2),e("router-link",{staticClass:"new__test",attrs:{"data-text":"Новый тест",replace:"",to:"/scholar/available-tests"}},[t._v("Новый тест")])],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"tests__item names"},[e("div",{staticClass:"tests__number"},[t._v("# ")]),e("div",{staticClass:"tests__code"},[t._v("Код теста")]),e("div",{staticClass:"tests__subject"},[t._v("Предмет")]),e("div",{staticClass:"tests__class"},[t._v("Класс")]),e("div",{staticClass:"tests__results"},[t._v("Результат")])])}],i=(e("4de4"),e("5530")),l=e("2f62"),r={created:function(){this.fetchScholarTests(this.user.id),this.fetchSubjectsForScholar()},computed:Object(i["a"])({},Object(l["d"])("user",{user:function(t){return t.user}}),{},Object(l["d"])("scholarTests",{scholarTests:function(t){return t.scholarTests}}),{},Object(l["d"])("subjects",{subjects:function(t){return t.subjects}}),{filteredTests:function(){var t=this;return this.scholarTests.filter((function(s){return 0==t.selectedSubjectId||s.test.group.subject.id==t.selectedSubjectId}))}}),data:function(){return{selectedSubjectId:0}},methods:Object(i["a"])({},Object(l["b"])("scholarTests",["fetchScholarTests"]),{},Object(l["b"])("subjects",["fetchSubjectsForScholar"]))},u=r,_=(e("7502"),e("2877")),n=Object(_["a"])(u,c,a,!1,null,"2fdba4f1",null);s["default"]=n.exports},7502:function(t,s,e){"use strict";var c=e("7b92"),a=e.n(c);a.a},"7b92":function(t,s,e){}}]);
//# sourceMappingURL=chunk-0311aae0.163bb178.js.map