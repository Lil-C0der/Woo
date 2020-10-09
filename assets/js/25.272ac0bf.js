(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{414:function(t,o,s){},493:function(t,o,s){"use strict";var e=s(414);s.n(e).a},494:function(t,o,s){},499:function(t,o,s){"use strict";s(214),s(215);var e,n=s(447),i={name:"Toast",data:function(){return{timer:null}},props:{closable:{type:Boolean,default:!1},dangerouslyUseHTMLString:{type:Boolean,default:!1},delay:{type:Number,default:3e3},closeOption:{type:Object,default:function(){return{text:"关闭",callback:function(){}}}},offset:{type:String,default:"16px"},position:{type:String,default:"top",validator:function(t){return-1!==["top","bottom","middle"].indexOf(t)}}},computed:{toastStyle:function(){return-1!==["top","bottom"].indexOf(this.position)?Object(n.a)({},this.position,this.offset):{top:"50%",transform:"translate(-50%, -50%)"}},toastClass:function(){return-1!==["top","bottom"].indexOf(this.position)?"".concat(this.position,"-toast"):"fade-in"}},methods:{close:function(){var t;"function"==typeof this.closeOption.callback&&(null===(t=this.closeOption)||void 0===t||t.callback(this));this.$el.remove(),this.$emit("beforeDestroyToast"),this.$destroy()},handleCloseClick:function(){this.close()},execAutoClose:function(){var t=this;this.timer=setTimeout((function(){t.close()}),this.delay)}},mounted:function(){var t=this;this.delay&&(this.execAutoClose(),this.$once("hook:beforeDestroy",(function(){clearTimeout(t.timer)})))}},a=(s(493),s(32)),l=Object(a.a)(i,(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"woo-toast",class:t.toastClass,style:t.toastStyle},[t.dangerouslyUseHTMLString?s("div",{staticClass:"woo-toast-text",domProps:{innerHTML:t._s(t.$slots.default)}}):s("div",{staticClass:"woo-toast-text"},[s("span",[t._t("default")],2)]),t._v(" "),t.closable?s("div",{staticClass:"toast-close-button",on:{click:t.handleCloseClick}},[s("span",[t._v("\n      "+t._s(t.closeOption.text)+"\n    ")])]):t._e()])}),[],!1,null,"e6b79eaa",null).exports;o.a={install:function(t,o){t.prototype.$toast=function(o,s){e&&e.close(),e=function(t,o,s,e){var n=new(t.extend(l))({propsData:s});return n.$slots.default=o,n.$mount(document.createElement("div")),document.body.appendChild(n.$el),n.$on("beforeDestroyToast",e),n}(t,o,s,(function(){e=null}))}}}},577:function(t,o,s){"use strict";var e=s(494);s.n(e).a},612:function(t,o,s){"use strict";s.r(o);var e=s(0),n=s(404),i=s(499);e.a.use(i.a);var a={components:{WooButton:n.a},methods:{showToast1:function(){this.$toast("点击右边的按钮关闭",{closable:!0})},showToast2:function(){this.$toast("Live long and prosper",{closable:!0,closeOption:{text:"🖖",callback:function(){console.log("Live long and prosper!! ")}}})},showToast3:function(){this.$toast("这条提示一秒后会自动关闭",{closable:!0,delay:1e3})},showToast4:function(){this.$toast("这条提示距离页面底部 48 像素",{position:"bottom",offset:"48px"})},showToast5:function(){this.$toast("<i>这是 HTML 片段<i>",{dangerouslyUseHTMLString:!0})}}},l=(s(577),s(32)),c=Object(l.a)(a,(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"demo"},[s("p",[t._v("带有关闭按钮的提示")]),t._v(" "),s("woo-button",{on:{click:t.showToast1}},[t._v("显示提示")]),t._v(" "),s("p",[t._v("配置关闭按钮的文本内容，以及关闭之后的回调函数")]),t._v(" "),s("woo-button",{on:{click:t.showToast2}},[t._v("显示提示")]),t._v(" "),s("p",[t._v("设置关闭的延时，单位是毫秒")]),t._v(" "),s("woo-button",{on:{click:t.showToast3}},[t._v("显示提示")]),t._v(" "),s("p",[t._v("设置距离原始位置的偏移")]),t._v(" "),s("woo-button",{on:{click:t.showToast4}},[t._v("显示提示")]),t._v(" "),s("p",[t._v("使用 HTML 片段")]),t._v(" "),s("woo-button",{on:{click:t.showToast5}},[t._v("显示提示")]),t._v(" "),t._m(0)],1)}),[function(){var t=this.$createElement,o=this._self._c||t;return o("p",[o("strong",[this._v("\n      注意：在网站上动态渲染 HTML 是非常危险的，这样可能导致\n      "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cross-site_scripting"}},[this._v("XSS")]),this._v("\n      攻击，请务必确保内容是可信的，永远不要将用户提交的内容作为 msg 参数\n    ")])])}],!1,null,"17649e9e",null);o.default=c.exports}}]);