(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-beef8c2e"],{5678:function(t,e,i){"use strict";i("d12f")},a15b:function(t,e,i){"use strict";var n=i("23e7"),s=i("44ad"),a=i("fc6a"),r=i("a640"),d=[].join,o=s!=Object,c=r("join",",");n({target:"Array",proto:!0,forced:o||!c},{join:function(t){return d.call(a(this),void 0===t?",":t)}})},d12f:function(t,e,i){},eb7b:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"linea-tiempo-d"},[t._l(t.elements,(function(e,n){return i("div",{key:"linea-tiempo-d-key-"+e.id,staticClass:"linea-tiempo-d__item row",class:{"linea-tiempo-d__item--selected":t.selected===e.id}},[i("div",{staticClass:"col-auto linea-tiempo-d__item__col-number"},[i("div",{staticClass:"linea-tiempo-d__item__number tarjeta tarjeta--gris",class:[,{"px-3":e.numero.length>1}],on:{click:function(i){t.selected=e.id},mouseover:function(e){t.mostrarIndicador=!(t.mostrarIndicador&&n>=1)&&t.mostrarIndicador}}},[t.mostrarIndicador&&1===n?i("div",{staticClass:"indicador__container"},[i("div",{staticClass:"indicador--click"})]):t._e(),i("span",{domProps:{innerHTML:t._s(e.numero)}})]),n<t.elements.length-1?i("div",{staticClass:"linea-tiempo-d__item__dots"}):t._e()]),i("div",{staticClass:"col",class:{"mb-4":n<t.elements.length-1}},[i("div",{staticClass:"linea-tiempo-d__item__content tarjeta tarjeta--gris"},[i("div",{staticClass:"linea-tiempo-d__item__content__title px-3 justify-content-between",class:{active:t.selected===e.id},on:{click:function(i){t.selected=e.id},mouseover:function(e){t.mostrarIndicador=!(t.mostrarIndicador&&n>=1)&&t.mostrarIndicador}}},[i("span",{domProps:{innerHTML:t._s(e.titulo)}}),t.selected===e.id?i("i",{staticClass:"fas fa-angle-up"}):i("i",{staticClass:"fas fa-angle-down"})]),i("div",{staticClass:"linea-tiempo-d__item__content__slot",style:{height:t.rendered&&t.selected===e.id?t.getActiveHeight(e.id):0}},[i("div",{directives:[{name:"child",rawName:"v-child",value:e.elm,expression:"item.elm"}],ref:e.id,refInFor:!0,staticClass:"p-3"})])])])])})),i("div",{staticClass:"hidden-slot"},[t._t("default")],2)],2)},s=[],a=i("f480"),r={name:"LineaTiempoD",mixins:[a["a"]],data:function(){return{mostrarIndicador:!0}},computed:{},watch:{},methods:{}},d=r,o=(i("5678"),i("2877")),c=Object(o["a"])(d,n,s,!1,null,null,null);e["default"]=c.exports},f480:function(t,e,i){"use strict";var n=i("5530");i("d81d"),i("a15b");e["a"]={data:function(){return{mainId:Math.floor(Math.random()*Math.pow(10,10)),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}},watch:{menuState:function(){this.domUpdated()}},created:function(){window.addEventListener("resize",this.domUpdated)},mounted:function(){var t=this;this.$nextTick((function(){t.crearElementos()}))},computed:{menuState:function(){return this.$store.getters.isMenuOpen},navObj:function(){if(!this.elements.length||!this.secuencial)return{};var t=this.elements.map((function(t){return t.id})),e=t.indexOf(this.selected);if(e<0)return{};var i={};return 0===e?i.next=t[e+1]:(e+1===t.length||(i.next=t[e+1]),i.back=t[e-1]),i}},beforeDestroy:function(){window.removeEventListener("resize",this.domUpdated)},updated:function(){var t=this;this.$nextTick((function(){t.getStateStr()!=t.stateStr&&t.crearElementos()}))},methods:{crearElementos:function(){var t=this;return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((function(e,i){var s=e.data&&e.data.attrs?e.data.attrs:[];return Object(n["a"])({id:t.mainId+i+1,elm:e.elm},s)})),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight:function(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr:function(){return this.$slots.default.map((function(t){return t.elm.outerHTML})).join("")},domUpdated:function(){var t=this;this.rendered=!1,setTimeout((function(){t.rendered=!0}),100)}}}}}]);
//# sourceMappingURL=chunk-beef8c2e.c345d8a9.js.map