(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad50f3bc"],{"6bf9":function(t,e,s){"use strict";var a=s("b06d"),l=s.n(a);l.a},afed:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tests__content"},[s("div",{staticClass:"tests__header"},[s("h4",{staticClass:"tests__title"},[t._v("Список всех тестов")]),s("ul",{staticClass:"tests__filter"},[s("li",{staticClass:"tests__filter-item"},[s("label",{staticClass:"label__filter-tests"},[t._v("Выберите предмет:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSubject,expression:"selectedSubject"}],staticClass:"tests__filter-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedSubject=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"0"}},[t._v("Все")]),t._l(t.subjects,(function(e){return s("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)]),s("li",{staticClass:"tests__filter-item"},[s("label",{staticClass:"label__filter-tests",attrs:{for:"classes"}},[t._v("Выберите класс:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedClass,expression:"selectedClass"}],staticClass:"tests__filter-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedClass=e.target.multiple?s:s[0]}}},[s("option",{domProps:{value:0}},[t._v("Все")]),t._l(12,(function(e){return s("option",{domProps:{value:e}},[t._v(t._s(e))])}))],2)]),s("li",{staticClass:"tests__filter-item"},[s("label",{staticClass:"label__filter-tests"},[t._v("Выберите язык:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedLanguage,expression:"selectedLanguage"}],staticClass:"tests__filter-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedLanguage=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[t._v("Все")]),s("option",{attrs:{value:"Казахский"}},[t._v("Казахский")]),s("option",{attrs:{value:"Русский"}},[t._v("Русский")])])])])]),s("ul",{staticClass:"tests__list"},[t._m(0),t._l(t.filteredTests,(function(t,e){return s("li",{key:t.id,staticClass:"tests__item"},[s("available-test-item",{attrs:{idx:e,test:t}})],1)}))],2)])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tests__item names"},[s("div",{staticClass:"test__item-row"},[s("div",{staticClass:"test__item-row names"}),s("div",{staticClass:"tests__number"},[t._v("#")]),s("div",{staticClass:"tests__code"},[t._v("Код теста")]),s("div",{staticClass:"tests__subject"},[t._v("Предмет")]),s("div",{staticClass:"tests__class"},[t._v("Класс")]),s("div",{staticClass:"tests__class"},[t._v("Время (мин)")]),s("div",{staticClass:"tests__pass"},[t._v("Выбрать")])])])}],c=(s("4de4"),s("d3b7"),s("5530")),i=s("2f62"),n={components:{availableTestItem:function(){return s.e("chunk-1505cbc2").then(s.bind(null,"5e8c"))}},created:function(){this.fetchAllTests(),this.fetchSubjects()},computed:Object(c["a"])({},Object(i["d"])("user",{user:function(t){return t.user}}),{},Object(i["d"])("tests",{tests:function(t){return t.tests}}),{},Object(i["d"])("subjects",{subjects:function(t){return t.subjects}}),{filteredTests:function(){var t=this;return this.tests.filter((function(e){return 0==t.selectedSubject||e.group.subject.id==t.selectedSubject})).filter((function(e){return 0==t.selectedClass||e.group.groupClass==t.selectedClass})).filter((function(e){return""==t.selectedLanguage||e.group.language==t.selectedLanguage}))}}),mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML"),document.head.appendChild(t)},methods:Object(c["a"])({},Object(i["b"])("tests",["fetchAllTests"]),{},Object(i["b"])("subjects",["fetchSubjects"])),data:function(){return{selectedSubject:0,selectedClass:0,selectedLanguage:""}}},r=n,u=(s("6bf9"),s("2877")),o=Object(u["a"])(r,a,l,!1,null,null,null);e["default"]=o.exports},b06d:function(t,e,s){}}]);
//# sourceMappingURL=chunk-ad50f3bc.27320237.js.map