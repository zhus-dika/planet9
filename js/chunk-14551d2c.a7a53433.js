(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14551d2c"],{"031c":function(t,e,i){"use strict";var n=i("72f7"),o=i.n(n);o.a},"72f7":function(t,e,i){},8392:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"programme__content"},[t._m(0),t._l(t.programmePoints,(function(e,n){return i("li",{key:e.id,staticClass:"programmes__point"},[i("programme-point-item",{attrs:{point:e,index:n,programmeId:t.programme.id}})],1)})),t.newPointVisible?i("new-point",{attrs:{programmeId:t.programme.id},on:{closeNewPoint:t.closeNewPoint,addNewPoint:t.addNewPoint}}):t._e(),i("div",{staticClass:"buttons__programme"},[t.newPointVisible||"ROLE_ADMIN"!=t.user.role.role||"NOT_ACTIVE"!==t.programme.status?t._e():i("button",{staticClass:"activate__programme-button",on:{click:function(e){return e.preventDefault(),t.activateExistedProgramme()}}},[t._v("Активировать программу")]),i("div",{staticClass:"activate__programme-button-hide"}),i("div",{staticClass:"buttons__programme-collection"},[t.newPointVisible?t._e():i("button",{staticClass:"add__programme-point",on:{click:function(e){return e.preventDefault(),t.addPoint()}}},[t._v("Добавить пункт")]),i("button",{staticClass:"remove__programme-point",on:{click:function(e){return t.deleteProgramme()}}},[t._v("Удалить программу")])])])],2)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"programmes__point names"},[i("div",{staticClass:"programmes__point-number"},[t._v("#")]),i("div",{staticClass:"programmes__point-name"},[t._v("Название пункта")]),i("div",{staticClass:"programmes__point-desc"},[t._v("Описание")]),i("div",{staticClass:"programmes__point-duration-names"},[t._v("Часы")]),i("div",{staticClass:"programmes__point-tools"})])}],r=(i("a9e3"),i("d3b7"),i("5530")),a=i("2f62"),s={components:{programmePointItem:function(){return i.e("chunk-443ec1c0").then(i.bind(null,"5308"))},newPoint:function(){return i.e("chunk-50e5f896").then(i.bind(null,"f18f"))}},created:function(){this.fetchProgrammePoints(this.programme.id)},data:function(){return{newPointVisible:!1}},computed:Object(r["a"])({},Object(a["d"])("user",{user:function(t){return t.user}}),{},Object(a["d"])("programmePoints",{programmePoints:function(t){return t.programmePoints}})),props:{programme:Object,index:Number},methods:Object(r["a"])({},Object(a["b"])("programmePoints",["fetchProgrammePoints"]),{},Object(a["b"])("programmes",["removeProgramme","activateProgramme"]),{closeNewPoint:function(){this.newPointVisible=!this.newPointVisible},addPoint:function(){this.newPointVisible=!this.newPointVisible},addNewPoint:function(){this.newPointVisible=!this.newPointVisible},deleteProgramme:function(){this.removeProgramme(this.programme.id)},activateExistedProgramme:function(){this.activateProgramme(this.programme.id)}})},m=s,c=(i("031c"),i("2877")),u=Object(c["a"])(m,n,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-14551d2c.a7a53433.js.map