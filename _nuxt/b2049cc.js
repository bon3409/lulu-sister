(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{272:function(t,e,r){var content=r(283);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("69e50092",content,!0,{sourceMap:!1})},282:function(t,e,r){"use strict";r(272)},283:function(t,e,r){(e=r(71)(!1)).push([t.i,".chip[data-v-401abc6a]{position:absolute;bottom:0}",""]),t.exports=e},284:function(t,e,r){"use strict";r.r(e);var n={props:{data:{type:Object,default:function(){return{title:"商品標題",description:"商品說明",imageSrc:"",mPrice:60,lPrice:80,isPopular:!1,isRecommend:!1}}}}},c=(r(282),r(42)),o=r(73),l=r.n(o),d=r(330),v=r(268),_=r(403),m=r(322),h=r(316),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"350",height:"550"}},[r("v-img",{attrs:{src:t.data.imageSrc,height:"350px"}}),t._v(" "),r("v-card-title",[t._v("\n    "+t._s(t.data.title)+"\n  ")]),t._v(" "),r("v-card-subtitle",[t._v("\n    "+t._s(t.data.description)+"\n  ")]),t._v(" "),r("v-card-text",[t.data.mPrice?r("span",[t._v("M: "+t._s(t.data.mPrice)+" 元")]):t._e(),t._v(" "),t.data.mPrice&&t.data.lPrice?r("span",[t._v("/")]):t._e(),t._v(" "),t.data.lPrice?r("span",[t._v("L: "+t._s(t.data.lPrice)+" 元")]):t._e()]),t._v(" "),r("div",{staticClass:"chip"},[t.data.isRecommend?r("v-chip",{staticClass:"ma-2",attrs:{color:"orange lighten-2",label:"","text-color":"white"}},[r("v-icon",{attrs:{left:""}},[t._v("\n        mdi-thumb-up\n      ")]),t._v("\n      老闆推薦\n    ")],1):t._e(),t._v(" "),t.data.isPopular?r("v-chip",{staticClass:"ma-2",attrs:{color:"pink",label:"","text-color":"white"}},[r("v-icon",{attrs:{left:""}},[t._v("\n        mdi-heart\n      ")]),t._v("\n      熱銷飲品\n    ")],1):t._e()],1)],1)}),[],!1,null,"401abc6a",null);e.default=component.exports;l()(component,{VCard:d.a,VCardSubtitle:v.a,VCardText:v.b,VCardTitle:v.c,VChip:_.a,VIcon:m.a,VImg:h.a})},349:function(t,e,r){t.exports=r.p+"img/strawberry_milk.38746e5.jpg"},421:function(t,e,r){"use strict";r.r(e);r(10);var n={components:{DrinkCard:function(){return Promise.resolve().then(r.bind(null,284))}},data:function(){return{drinks:[{title:"草莓牛奶",description:"",imageSrc:r(349),mPrice:70,lPrice:90,isPopular:!0,isRecommend:!0}]}}},c=r(42),o=r(73),l=r.n(o),d=r(404),v=r(430),_=r(405),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-container",[e("h1",[this._v("小農鮮乳")]),this._v(" "),e("v-row",this._l(this.drinks,(function(t,r){return e("v-col",{key:r,attrs:{cols:"12",md:"3"}},[e("drink-card",{attrs:{data:t}})],1)})),1)],1)],1)}),[],!1,null,"08a3a30a",null);e.default=component.exports;l()(component,{DrinkCard:r(284).default}),l()(component,{VCol:d.a,VContainer:v.a,VRow:_.a})}}]);