(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{472:function(t,e,r){var content=r(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("7bf09c8c",content,!0,{sourceMap:!1})},564:function(t,e,r){"use strict";r(472)},565:function(t,e,r){var c=r(20)(!1);c.push([t.i,".chip[data-v-7276eea7]{position:absolute;bottom:0}",""]),t.exports=c},604:function(t,e,r){"use strict";r.r(e);var c={props:{data:{required:!0,type:Object,default:function(){return{title:"商品標題",description:"商品說明",imageSrc:"",mPrice:60,lPrice:80,isPopular:!1,isRecommend:!1}}}}},n=(r(564),r(49)),o=r(52),l=r.n(o),d=r(447),v=r(437),_=r(580),m=r(184),h=r(161),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"350",height:"550"}},[r("v-img",{attrs:{src:t.data.imageSrc,height:"370px"}}),t._v(" "),r("v-card-title",[t._v("\n    "+t._s(t.data.title)+"\n  ")]),t._v(" "),r("v-card-subtitle",[t._v("\n    "+t._s(t.data.description)+"\n    "),r("div",[r("strong",[t.data.mPrice?r("span",[t._v("M: "+t._s(t.data.mPrice)+" 元")]):t._e(),t._v(" "),t.data.mPrice&&t.data.lPrice?r("span",[t._v("/")]):t._e(),t._v(" "),t.data.lPrice?r("span",[t._v("L: "+t._s(t.data.lPrice)+" 元")]):t._e()])])]),t._v(" "),r("v-card-text"),t._v(" "),r("div",{staticClass:"chip"},[t.data.isRecommend?r("v-chip",{staticClass:"ma-2",attrs:{color:"orange lighten-2",label:"","text-color":"white"}},[r("v-icon",{attrs:{left:""}},[t._v("\n        mdi-thumb-up\n      ")]),t._v("\n      老闆推薦\n    ")],1):t._e(),t._v(" "),t.data.isPopular?r("v-chip",{staticClass:"ma-2",attrs:{color:"pink",label:"","text-color":"white"}},[r("v-icon",{attrs:{left:""}},[t._v("\n        mdi-heart\n      ")]),t._v("\n      熱銷飲品\n    ")],1):t._e()],1)],1)}),[],!1,null,"7276eea7",null);e.default=component.exports;l()(component,{VCard:d.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d,VChip:_.a,VIcon:m.a,VImg:h.a})}}]);