(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2304f4da"],{"1c70":function(t,e,s){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var r=s("1d80"),n=s("5899"),o="["+n+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(t){return function(e){var s=String(r(e));return 1&t&&(s=s.replace(i,"")),2&t&&(s=s.replace(a,"")),s}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,s){var r=s("861d"),n=s("d2bb");t.exports=function(t,e,s){var o,i;return n&&"function"==typeof(o=e.constructor)&&o!==s&&r(i=o.prototype)&&i!==s.prototype&&n(t,i),t}},9552:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test__item-content"},[s("div",{staticClass:"test__item-row"},[s("div",{staticClass:"tests__number"},[t._v(t._s(t.idx+1))]),s("div",{staticClass:"tests__code"},[t._v(" "+t._s(t.test.code))]),s("div",{staticClass:"tests__subject"},[t._v(t._s(t.test.group.subject.name))]),s("div",{staticClass:"tests__class"},[t._v(" "+t._s(t.test.group.groupClass))]),s("div",{staticClass:"tests__class"},[t._v(" "+t._s(t.test.duration))]),s("div",{staticClass:"tests__pass"},[s("button",{staticClass:"tests__pass-button",attrs:{id:"passTest"},on:{click:function(e){return e.preventDefault(),t.passAvailableTest()}}})])]),t.testVisible?s("div",{staticClass:"form__test"},[s("div",{staticClass:"timer"},[s("div",{staticClass:"remaining__time"},[t._v("Осталось времени ")]),s("div",{staticClass:"remaining__time-content"},[t._v(t._s(t.hours)+":"+t._s(t.minutes)+":"+t._s(t.seconds))])]),s("form",{staticClass:"new__test",on:{submit:function(e){return e.preventDefault(),t.submitTest()}}},[s("ul",{staticClass:"new__test-list"},t._l(t.testQuestions,(function(e,r){return s("li",{key:e.id,staticClass:"new__test-point"},[s("new-test-point",{attrs:{question:e,index:r,test:t.test}})],1)})),0),t._m(0)])]):t._e()])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tests__ready"},[s("button",{staticClass:"tests__ready-button",attrs:{type:"submit"}},[t._v("Готово")])])}],o=(s("4160"),s("a9e3"),s("d3b7"),s("159b"),s("5530")),i=s("2f62"),a={components:{newTestPoint:function(){return s.e("chunk-608432be").then(s.bind(null,"584f"))}},data:function(){return{testResults:{test:{id:this.test.id},user:{id:this.userId},result:0},testVisible:!1,result:0,local:"",currentTime:60*this.test.duration,hours:"",minutes:"",seconds:"",expired:!0,timer:null}},computed:Object(o["a"])({},Object(i["d"])("testQuestions",{testQuestions:function(t){return t.testQuestions}})),props:{test:Object,idx:Number,userId:Number},methods:Object(o["a"])({},Object(i["b"])("testQuestions",["fetchTestQuestionsForScholar"]),{},Object(i["b"])("scholarAvailableTests",["passTest"]),{passAvailableTest:function(){this.test.id&&this.fetchTestQuestionsForScholar(this.test.id),this.$emit("passTestAvailable",{available:!1}),this.testVisible=!this.testVisible;var t=document.getElementsByClassName("tests__pass-button"),e=document.querySelector(".nav__item-groups"),s=document.querySelector(".nav__item-schedule"),r=document.querySelector(".nav__item-programmes"),n=document.querySelector(".nav__item-tests"),o=document.querySelector(".header__logo"),i=document.querySelector(".user-info"),a=document.querySelectorAll(".tests__filter-select"),u=document.querySelector(".quit-link");t.forEach((function(t){t.disabled=!0})),a.forEach((function(t){t.disabled=!0})),e.style="cursor: not-allowed;pointer-events: none;",s.style="cursor: not-allowed;pointer-events: none;",r.style="cursor: not-allowed;pointer-events: none;",n.style="cursor: not-allowed;pointer-events: none;",o.style="cursor: not-allowed;pointer-events: none;",i.style="cursor: not-allowed;pointer-events: none;",u.style="cursor: not-allowed;pointer-events: none;",this.expired=!1,this.startTimer()},submitTest:function(){this.expired||this.stopTimer();for(var t=0;t<this.testQuestions.length;t++)this.local=JSON.parse(localStorage.getItem(t)),this.local&&this.testQuestions[t].correctAnswer==this.local.answer&&this.testResults.result++,localStorage.removeItem(t);this.passTest(this.testResults),console.log(this.testResults),this.testVisible=!this.testVisible,console.log("Your result is "+this.result),this.result=0;var e=document.getElementsByClassName("tests__pass-button");e.forEach((function(t){t.disabled=!1}));var s=document.querySelector(".nav__item-groups"),r=document.querySelector(".nav__item-schedule"),n=document.querySelector(".nav__item-programmes"),o=document.querySelector(".nav__item-tests"),i=document.querySelector(".header__logo"),a=document.querySelector(".user-info"),u=document.querySelectorAll(".tests__filter-select"),l=document.querySelector(".quit-link");u.forEach((function(t){t.disabled=!1})),s.style="cursor: allowed;pointer-events: auto;",r.style="cursor: allowed;pointer-events: auto;",n.style="cursor: allowed;pointer-events: auto;",o.style="cursor: allowed;pointer-events: auto;",i.style="cursor: allowed;pointer-events: auto;",a.style="cursor: allowed;pointer-events: auto;",l.style="cursor: allowed;pointer-events: auto;",this.$emit("passTestAvailable",{available:!0})},startTimer:function(){var t=this;this.timer=setInterval((function(){t.currentTime--;var e=Math.floor(t.currentTime/3600),s=Math.floor(t.currentTime/60),r=t.currentTime-60*e*60-60*s;t.hours=e<10?"0"+e:e,t.minutes=s<10?"0"+s:s,t.seconds=r<10?"0"+r:r}),1e3)},stopTimer:function(){this.expired&&this.submitTest(),clearTimeout(this.timer)}}),watch:{currentTime:function(t){0===t&&(this.expired=!0,this.stopTimer())}}},u=a,l=(s("ff06"),s("2877")),c=Object(l["a"])(u,r,n,!1,null,"06605676",null);e["default"]=c.exports},a9e3:function(t,e,s){"use strict";var r=s("83ab"),n=s("da84"),o=s("94ca"),i=s("6eeb"),a=s("5135"),u=s("c6b6"),l=s("7156"),c=s("c04e"),d=s("d039"),_=s("7c73"),m=s("241c").f,f=s("06cf").f,p=s("9bf2").f,v=s("58a8").trim,h="Number",b=n[h],y=b.prototype,T=u(_(y))==h,w=function(t){var e,s,r,n,o,i,a,u,l=c(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+l}for(o=l.slice(2),i=o.length,a=0;a<i;a++)if(u=o.charCodeAt(a),u<48||u>n)return NaN;return parseInt(o,r)}return+l};if(o(h,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var g,S=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof S&&(T?d((function(){y.valueOf.call(s)})):u(s)!=h)?l(new b(w(e)),s,S):w(e)},C=r?m(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;C.length>I;I++)a(b,g=C[I])&&!a(S,g)&&p(S,g,f(b,g));S.prototype=y,y.constructor=S,i(n,h,S)}},ff06:function(t,e,s){"use strict";var r=s("1c70"),n=s.n(r);n.a}}]);
//# sourceMappingURL=chunk-2304f4da.c9119649.js.map