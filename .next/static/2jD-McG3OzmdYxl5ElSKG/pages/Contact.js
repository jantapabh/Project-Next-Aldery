(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{MbLX:function(e,t,n){"use strict";var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),i=n("a7VT"),c=n("Tit0"),s=n("vYYK"),l=n("q1tI"),u=n.n(l),p=n("YFqc"),f=n.n(p),h=(n("59Bn"),u.a.createElement),v=[{href:"/about",label:"About"},{href:"/contact",label:"Contact"},{href:"/login",label:"Login"}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),d=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return"main"!=this.props.name?h("nav",null,h("div",{className:"warp-back"},h("ul",null,h("div",{className:"back"},h("li",null,h(f.a,{href:"/"},h("p",null,"\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a"))))))):h("nav",null,h("ul",null,h("div",{className:"warp-manu"},v.map(function(e){var t=e.key,n=e.href,r=e.label;return h("li",{key:t},h(f.a,{href:n},h("p",null,r)))}))))}}]),t}(u.a.Component);Object(s.a)(d,"defaultProps",{name:""}),t.a=d},SjN1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Contact",function(){var e=n("VscV");return{page:e.default||e}}])},VscV:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),i=n("a7VT"),c=n("Tit0"),s=n("q1tI"),l=n.n(s),u=(n("59Bn"),n("cag5")),p=n("MbLX"),f=l.a.createElement,h=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).call(this,e))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return f("div",null,f(p.a,{name:"contace"}),f(u.a,{avatar:"/static/cover.png",name:"cover",text_head:"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e40\u0e08\u0e49\u0e32\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48",text:"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e2b\u0e19\u0e49\u0e32\u0e2b\u0e25\u0e31\u0e01"}))}}]),t}(l.a.Component);t.default=h},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),a=n("WaGi"),o=n("ZDA2"),i=n("/+P4"),c=n("N9n2"),s=n("5Uuq"),l=n("KI45");t.__esModule=!0,t.default=void 0;var u,p=l(n("LX0d")),f=n("CxY0"),h=s(n("q1tI")),v=(l(n("17x9")),l(n("nOHt"))),d=(n("KA3u"),n("Bu4q"));function b(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var m=new p.default,w=window.IntersectionObserver;function y(){return u||(w?u=new w(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var g=function(e){function t(e){var n;return r(this,t),(n=o(this,i(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var i=e(a,o);return t=a,n=o,r=i,i}}(function(e,t){return{href:b(e),as:t?b(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,a=t.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),i=o.href,c=o.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var s=window.location.pathname;i=(0,f.resolve)(s,i),c=c?(0,f.resolve)(s,c):i,e.preventDefault();var l=n.props.scroll;null==l&&(l=c.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](i,c,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return c(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=y();return n?(n.observe(e),m.set(e,t),function(){n.unobserve(e),m.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,f.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var o=h.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),h.default.cloneElement(o,i)}}]),t}(h.Component);g.propTypes=void 0;var O=g;t.default=O},cag5:function(e,t,n){"use strict";var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),i=n("a7VT"),c=n("Tit0"),s=n("vYYK"),l=n("q1tI"),u=n.n(l),p=u.a.createElement,f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return p("div",{className:"warp-cover"},p("div",{className:"warp-text"},p("h1",null,this.props.text_head),p("button",{type:"button",className:"btn"},p("h6",null,this.props.text))),p("div",{className:"cover"},p("img",{src:this.props.avatar,alt:this.props.cover})))}}]),t}(u.a.Component);Object(s.a)(f,"defaultProps",{avatar:"",name:"",text_head:"",text:""}),t.a=f}},[["SjN1",1,0,2]]]);