(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{267:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return v})),r.d(e,"d",(function(){return h}));var o=r(270),c=r(9),n=Object(c.g)("v-card__actions"),l=Object(c.g)("v-card__subtitle"),v=Object(c.g)("v-card__text"),h=Object(c.g)("v-card__title");o.a},269:function(t,e,r){t.exports=r.p+"img/not_update.8cbe666.png"},270:function(t,e,r){"use strict";r(282),r(283),r(186);var o=r(7),c=(r(276),r(286)),n=r(1),l=r(274),v=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(l.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),h=r(271),d=r(123);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(v,h.a,c.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},h.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},c.a.options.computed.classes.call(this))},styles:function(){var style=f({},c.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=v.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},274:function(t,e,r){"use strict";var o=r(275);e.a=o.a},276:function(t,e,r){var content=r(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("e23b7040",content,!0,{sourceMap:!1})},277:function(t,e,r){(e=r(71)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},278:function(t,e,r){var content=r(279);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("197fcea4",content,!0,{sourceMap:!1})},279:function(t,e,r){(e=r(71)(!1)).push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=e},281:function(t,e,r){var content=r(291);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("7bf09c8c",content,!0,{sourceMap:!1})},290:function(t,e,r){"use strict";r(281)},291:function(t,e,r){(e=r(71)(!1)).push([t.i,".chip[data-v-7276eea7]{position:absolute;bottom:0}",""]),t.exports=e},292:function(t,e,r){"use strict";r.r(e);var o={props:{data:{required:!0,type:Object,default:function(){return{title:"商品標題",description:"商品說明",imageSrc:"",mPrice:60,lPrice:80,isPopular:!1,isRecommend:!1}}}}},c=(r(290),r(42)),n=r(73),l=r.n(n),v=r(270),h=r(267),d=r(294),m=r(325),f=r(316),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"350",height:"550"}},[r("v-img",{attrs:{src:t.data.imageSrc,height:"370px"}}),t._v(" "),r("v-card-title",[t._v("\n    "+t._s(t.data.title)+"\n  ")]),t._v(" "),r("v-card-subtitle",[t._v("\n    "+t._s(t.data.description)+"\n    "),r("div",[r("strong",[t.data.mPrice?r("span",[t._v("M: "+t._s(t.data.mPrice)+" 元")]):t._e(),t._v(" "),t.data.mPrice&&t.data.lPrice?r("span",[t._v("/")]):t._e(),t._v(" "),t.data.lPrice?r("span",[t._v("L: "+t._s(t.data.lPrice)+" 元")]):t._e()])])]),t._v(" "),r("v-card-text"),t._v(" "),r("div",{staticClass:"chip"},[t.data.isRecommend?r("v-chip",{staticClass:"ma-2",attrs:{color:"orange lighten-2",label:"","text-color":"white"}},[r("v-icon",{attrs:{left:""}},[t._v("\n        mdi-thumb-up\n      ")]),t._v("\n      老闆推薦\n    ")],1):t._e(),t._v(" "),t.data.isPopular?r("v-chip",{staticClass:"ma-2",attrs:{color:"pink",label:"","text-color":"white"}},[r("v-icon",{attrs:{left:""}},[t._v("\n        mdi-heart\n      ")]),t._v("\n      熱銷飲品\n    ")],1):t._e()],1)],1)}),[],!1,null,"7276eea7",null);e.default=component.exports;l()(component,{VCard:v.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VChip:d.a,VIcon:m.a,VImg:f.a})},294:function(t,e,r){"use strict";r(74),r(51);var o=r(13),c=r(7),n=(r(278),r(123)),l=r(287),v=r(272),h=r(273),d=r(288),m=r(124),f=r(280),x=r(271),_=r(284),y=r(21);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(n.a)(h.a,_.a,x.a,m.a,Object(d.a)("chipGroup"),Object(f.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return P(P(P(P({"v-chip":!0},x.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var r=Object(o.a)(e,2),c=r[0],n=r[1];t.$attrs.hasOwnProperty(c)&&Object(y.a)(c,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(v.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(v.a,{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),o=r.tag,data=r.data;data.attrs=P(P({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var c=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(c,data),e)}})},409:function(t,e,r){t.exports=r.p+"img/sesame_banana_milk.95ca372.jpg"},410:function(t,e,r){t.exports=r.p+"img/strawberry_milk.1c111bd.jpg"},411:function(t,e,r){t.exports=r.p+"img/drink_13.a3ab42b.jpg"},412:function(t,e,r){t.exports=r.p+"img/banana_milk.818c798.jpg"},413:function(t,e,r){t.exports=r.p+"img/drink_7.832c571.jpg"},414:function(t,e,r){t.exports=r.p+"img/drink_14.db3253f.jpg"},483:function(t,e,r){"use strict";r.r(e);r(10);var o={components:{DrinkCard:function(){return Promise.resolve().then(r.bind(null,292))}},data:function(){return{drinks:[{title:"芝麻香蕉牛奶",description:"炒過的黑芝麻富含豐富的芝麻素～能抗氧化、補充鈣質！加上香蕉牛奶鐵質鈣質都補充到啦！",imageSrc:r(409),mPrice:60,lPrice:80,isPopular:!1,isRecommend:!0},{title:"草莓牛奶",description:"",imageSrc:r(410),mPrice:70,lPrice:90,isPopular:!0,isRecommend:!1},{title:"蘋果牛奶",description:"",imageSrc:r(269),mPrice:50,lPrice:70,isPopular:!0,isRecommend:!1},{title:"木瓜牛奶",description:"",imageSrc:r(411),mPrice:50,lPrice:70,isPopular:!0,isRecommend:!1},{title:"香蕉牛奶",description:"",imageSrc:r(412),mPrice:50,lPrice:70,isPopular:!0,isRecommend:!1},{title:"抹茶牛奶",description:"",imageSrc:r(269),mPrice:50,lPrice:70,isPopular:!0,isRecommend:!1},{title:"黑糖牛奶",description:"",imageSrc:r(269),mPrice:50,lPrice:70,isPopular:!0,isRecommend:!1},{title:"巧克力牛奶",description:"(圖片取自 foodpanda)",imageSrc:r(413),mPrice:50,lPrice:70,isPopular:!0,isRecommend:!1},{title:"大甲芋頭牛奶",description:"",imageSrc:r(414),mPrice:50,lPrice:70,isPopular:!0,isRecommend:!1},{title:"錫蘭紅鮮奶茶",description:"",imageSrc:r(269),mPrice:45,lPrice:65,isPopular:!0,isRecommend:!1},{title:"茉莉綠鮮奶茶",description:"",imageSrc:r(269),mPrice:45,lPrice:65,isPopular:!0,isRecommend:!1}]}},head:function(){return{title:"小農鮮乳"}}},c=r(42),n=r(73),l=r.n(n),v=r(465),h=r(492),d=r(466),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-container",[e("h1",[this._v("小農鮮乳")]),this._v(" "),e("v-row",this._l(this.drinks,(function(t,r){return e("v-col",{key:r,attrs:{cols:"12",md:"3"}},[e("drink-card",{attrs:{data:t}})],1)})),1)],1)],1)}),[],!1,null,"c193ce5a",null);e.default=component.exports;l()(component,{DrinkCard:r(292).default}),l()(component,{VCol:v.a,VContainer:h.a,VRow:d.a})}}]);