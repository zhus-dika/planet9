(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f777596"],{"0cfe":function(e,t,s){},4695:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"teacher__profile"},[s("div",{staticClass:"teacher__profile-container"},[s("ul",{staticClass:"teacher__profile-list"},[e._m(0),s("li",{staticClass:"teacher__profile-item"},[s("label",{staticClass:"label__item"},[e._v("Группы")]),s("ul",{staticClass:"teacher__groups-list"},e._l(e.teacherGroups,(function(t){return s("li",{staticClass:"teacher__groups-item"},[e._v(e._s(t.code))])})),0)]),s("li",{staticClass:"teacher__profile-item"},[s("label",{staticClass:"label__item"},[e._v("Программы")]),s("ul",{staticClass:"teacher__programmes-list"},e._l(e.teacher.programmes,(function(t){return s("li",{staticClass:"teacher__programmes-item"},[s("div",{staticClass:"teacher__programmes-item-text"},[e._v(e._s(t.name))]),"passive"===t.status?s("button",{staticClass:"programme__status-button"}):e._e()])})),0)]),s("li",{staticClass:"teacher__profile-item"},[s("label",{staticClass:"label__item"},[e._v("Тесты")]),s("ul",{staticClass:"teacher__tests-list"},e._l(e.teacherTests,(function(t){return s("li",{staticClass:"teacher__tests-item"},[e._v(e._s(t.code))])})),0)])])]),s("div",{staticClass:"buttons__teacher"},[s("button",{staticClass:"remove__teacher-button",on:{click:function(t){return e.removeCurrentTeacher()}}},[e._v("Удалить данные")])])])},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"teacher__profile-item"},[a("label",{staticClass:"label__item"},[e._v("Аватар")]),a("div",{staticClass:"teacher__profile-photo"},[a("img",{staticClass:"teacher__photo",attrs:{src:s("9e1a")}})])])}],r=s("5530"),i=s("2f62"),l={data:function(){return{}},props:{teacher:Object},created:function(){this.fetchTeacherTests(this.teacher.id),this.fetchTeacherGroups(this.teacher.id)},computed:Object(r["a"])({},Object(i["d"])("teacherTests",{teacherTests:function(e){return e.teacherTests}}),{},Object(i["d"])("teacherGroups",{teacherGroups:function(e){return e.teacherGroups}})),methods:Object(r["a"])({},Object(i["b"])("teacherTests",["fetchTeacherTests"]),{},Object(i["b"])("teachers",["removeTeacher"]),{},Object(i["b"])("teacherGroups",["fetchTeacherGroups"]),{removeCurrentTeacher:function(){this.removeTeacher(this.teacher.id)}})},_=l,o=(s("a016"),s("2877")),n=Object(o["a"])(_,a,c,!1,null,"d54e3f76",null);t["default"]=n.exports},"9e1a":function(e,t,s){e.exports=s.p+"img/login_scholar.b7e691dd.svg"},a016:function(e,t,s){"use strict";var a=s("0cfe"),c=s.n(a);c.a}}]);
//# sourceMappingURL=chunk-2f777596.6231ac47.js.map