(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bc32f1d"],{"0bee":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"test__point"},[s("div",{staticClass:"test__question-info"},[s("div",{staticClass:"test__question"},[e._v(e._s(e.index+1)+". ")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.editedQuestion.content,expression:"editedQuestion.content"}],staticClass:"test__question-content",attrs:{type:"text",rows:"3",disabled:!e.testEditable},domProps:{value:e.editedQuestion.content},on:{input:function(t){t.target.composing||e.$set(e.editedQuestion,"content",t.target.value)}}}),e.texTranslateVisible?s("vue-mathjax",{staticClass:"formula__question",attrs:{formula:e.editedQuestion.content}}):e._e()],1),s("ul",{staticClass:"test__answers"},[s("li",{staticClass:"test__answer-container"},[e.numberAnswers>0?s("test-answer-item",{attrs:{answer:e.question.answerA,answerChar:e.answerChars[0],texTranslateVisible:e.texTranslateVisible,testEditable:e.testEditable},on:{updateAnswerItem:e.updateAnswerItem}}):e._e()],1),s("li",{staticClass:"test__answer-container"},[e.numberAnswers>1?s("test-answer-item",{attrs:{answer:e.question.answerB,answerChar:e.answerChars[1],texTranslateVisible:e.texTranslateVisible,testEditable:e.testEditable},on:{updateAnswerItem:e.updateAnswerItem}}):e._e()],1),s("li",{staticClass:"test__answer-container"},[e.numberAnswers>2?s("test-answer-item",{attrs:{answer:e.question.answerC,answerChar:e.answerChars[2],texTranslateVisible:e.texTranslateVisible,testEditable:e.testEditable},on:{updateAnswerItem:e.updateAnswerItem}}):e._e()],1),s("li",{staticClass:"test__answer-container"},[e.numberAnswers>3?s("test-answer-item",{attrs:{answer:e.question.answerD,answerChar:e.answerChars[3],texTranslateVisible:e.texTranslateVisible,testEditable:e.testEditable},on:{updateAnswerItem:e.updateAnswerItem}}):e._e()],1),s("li",{staticClass:"test__answer-container"},[e.numberAnswers>4?s("test-answer-item",{attrs:{answer:e.question.answerE,answerChar:e.answerChars[4],texTranslateVisible:e.texTranslateVisible,testEditable:e.testEditable},on:{updateAnswerItem:e.updateAnswerItem}}):e._e()],1),s("li",{staticClass:"test__answer-container"},[e.numberAnswers>5?s("test-answer-item",{attrs:{answer:e.question.answerF,answerChar:e.answerChars[5],texTranslateVisible:e.texTranslateVisible,testEditable:e.testEditable},on:{updateAnswerItem:e.updateAnswerItem}}):e._e()],1),s("div",{staticClass:"correct"},[s("div",{staticClass:"buttons"},[e.testEditable?e._e():s("button",{staticClass:"edit__button",on:{click:function(t){t.preventDefault(),e.testEditable=!e.testEditable}}},[e._v("Редактировать")]),e.testEditable?s("button",{staticClass:"save__button",on:{click:function(t){return t.preventDefault(),e.updateQuestion()}}},[e._v("Сохранить")]):e._e(),e.testEditable?s("button",{staticClass:"remove__button",on:{click:function(t){return e.removeQuestion()}}},[e._v("Удалить")]):e._e(),e.testEditable?s("div",{staticClass:"latex__on"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.texTranslateVisible,expression:"texTranslateVisible"}],staticClass:"tex__on",attrs:{type:"checkbox",value:"latexon"},domProps:{checked:Array.isArray(e.texTranslateVisible)?e._i(e.texTranslateVisible,"latexon")>-1:e.texTranslateVisible},on:{change:function(t){var s=e.texTranslateVisible,n=t.target,a=!!n.checked;if(Array.isArray(s)){var r="latexon",i=e._i(s,r);n.checked?i<0&&(e.texTranslateVisible=s.concat([r])):i>-1&&(e.texTranslateVisible=s.slice(0,i).concat(s.slice(i+1)))}else e.texTranslateVisible=a}}}),s("span",{staticClass:"tex__on-text"},[e._v("Включить трансляцию формул")])]):e._e()]),s("div",{staticClass:"correct__answer-content"},[s("div",{staticClass:"correct__text"},[e._v("Правильный ответ:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.editedQuestion.correctAnswer,expression:"editedQuestion.correctAnswer"}],staticClass:"correct__answer",attrs:{disabled:!e.testEditable},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.editedQuestion,"correctAnswer",t.target.multiple?s:s[0])}}},e._l(e.answerChars,(function(t,n){return n<e.numberAnswers?s("option",{domProps:{value:n,selected:n!==e.editedQuestion.correctAnswer}},[e._v(e._s(t))]):e._e()})),0)])])])])},a=[],r=(s("a9e3"),s("d3b7"),s("5530")),i=s("2f62"),o=s("7b93"),u={components:{"vue-mathjax":o["VueMathjax"],testAnswerItem:function(){return s.e("chunk-5df688f4").then(s.bind(null,"b7c3"))}},props:{testId:Number,question:Object,index:Number,numberAnswers:Number},data:function(){return{editedQuestion:{id:this.question.id,content:this.question.content,answerA:this.question.answerA,answerB:this.question.answerB,answerC:this.question.answerC,answerD:this.question.answerD,answerE:this.question.answerE,answerF:this.question.answerF,correctAnswer:this.question.correctAnswer-1},selected:0,disabled:0,texTranslateVisible:!1,testEditable:!1,testInput:"",answerChars:["a","b","c","d","e","f"]}},mounted:function(){var e=document.createElement("script");e.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"),document.head.appendChild(e)},methods:Object(r["a"])({},Object(i["b"])("testQuestions",["deleteTestQuestion","updateTestQuestion"]),{removeQuestion:function(){var e={id:this.testId,questionId:this.question.id};this.deleteTestQuestion(e)},updateAnswerItem:function(e){switch(console.log(e),e.answerChar){case"a":this.editedQuestion.answerA=e.answer;break;case"b":this.editedQuestion.answerB=e.answer;break;case"c":this.editedQuestion.answerC=e.answer;break;case"d":this.editedQuestion.answerD=e.answer;break;case"e":this.editedQuestion.answerE=e.answer;break;case"f":this.editedQuestion.answerF=e.answer;break}},updateQuestion:function(){var e={id:this.testId,question:this.editedQuestion};this.updateTestQuestion(e),this.testEditable=!this.testEditable}})},l=u,c=(s("7cd7"),s("2877")),d=Object(c["a"])(l,n,a,!1,null,"cfe8fbea",null);t["default"]=d.exports},"5ee4":function(e,t,s){(function(t){e.exports=function(e){function t(n){if(s[n])return s[n].exports;var a=s[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var s={};return t.m=e,t.c=s,t.i=function(e){return e},t.d=function(e,s,n){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,s){var n=s(3)(s(2),s(4),null,null);e.exports=n.exports},function(e,s,n){"use strict";function a(e){e.component("vue-mathjax",i.a)}Object.defineProperty(s,"__esModule",{value:!0}),s.install=a;var r=n(0),i=n.n(r);n.d(s,"VueMathjax",(function(){return i.a}));var o={version:"0.0.11",install:a};s.default=o;var u=null;"undefined"!=typeof window?u=window.Vue:"undefined"!=typeof t&&(u=t.Vue),u&&u.use(o)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e};t.default={props:{formula:{type:String},safe:{type:Boolean,default:!0},options:{type:Object,default:function(){return{}}}},watch:{formula:function(){this.renderMathJax()}},mounted:function(){this.renderMathJax()},methods:{renderContent:function(){this.safe?this.$refs.mathJaxEl.textContent=this.formula:this.$refs.mathJaxEl.innerHTML=this.formula},renderMathJax:function(){this.renderContent(),window.MathJax&&(window.MathJax.Hub.Config(n({tex2jax:{inlineMath:[["$","$"],["(",")"]],displayMath:[["$$","$$"],["[","]"]],processEscapes:!0,processEnvironments:!0},displayAlign:"center","HTML-CSS":{styles:{".MathJax_Display":{margin:0}},linebreaks:{automatic:!0}}},this.options)),window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,this.$refs.mathJaxEl]))}}}},function(e,t){e.exports=function(e,t,s,n){var a,r=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(a=e,r=e.default);var o="function"==typeof r?r.options:r;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),s&&(o._scopeId=s),n){var u=o.computed||(o.computed={});Object.keys(n).forEach((function(e){var t=n[e];u[e]=function(){return t}}))}return{esModule:a,exports:r,options:o}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{ref:"mathJaxEl"},[e._v(e._s(e.formula))])},staticRenderFns:[]}}])}).call(this,s("c8ba"))},"732a":function(e,t,s){},"7b93":function(e,t,s){"use strict";var n=s("5ee4");s.o(n,"VueMathjax")&&s.d(t,"VueMathjax",(function(){return n["VueMathjax"]}))},"7cd7":function(e,t,s){"use strict";var n=s("732a"),a=s.n(n);a.a}}]);
//# sourceMappingURL=chunk-2bc32f1d.d8a03b66.js.map