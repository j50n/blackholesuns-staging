(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],d=0,h=[];d<s.length;d++)o=s[d],n[o]&&h.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var u=a[s];0!==n[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/blackholesuns/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0810":function(t,e,a){},"1d93":function(t,e,a){"use strict";var r=a("766d"),n=a.n(r);n.a},"5c0b":function(t,e,a){"use strict";var r=a("e332"),n=a.n(r);n.a},"5f35":function(t,e){t.exports={publicPath:"/blackholesuns/",configureWebpack:{module:{rules:[]}}}},"766d":function(t,e,a){},"9d49":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navigator",{attrs:{msg:"Get Me There!"}})],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",{staticStyle:{"margin-bottom":"0px","padding-bottom":"0px"}},[t._v("Black Hole Suns DaRC Web")]),t._m(0),a("travel-request-form"),t._m(1),t._m(2)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"text-align":"center"}},[a("sub",[t._v("Distance and Route Calculator")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"text-align":"center"}},[a("ul",[a("li",[a("a",{attrs:{href:"https://guide.blackholesuns.com/",target:"_blank",rel:"noopener"}},[t._v("Guide")])]),a("li",[a("a",{attrs:{href:"https://www.reddit.com/r/NMSBlackHoleSuns/",target:"_blank",rel:"noopener"}},[t._v("Reddit")])]),a("li",[a("a",{attrs:{href:"https://discord.blackholesuns.com",target:"_blank",rel:"noopener"}},[t._v("Discord")])]),a("li",[a("a",{attrs:{href:"https://data.blackholesuns.com",target:"_blank",rel:"noopener"}},[t._v("Contribute")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"text-align":"center"}},[a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/j50n/blackholesuns/",target:"_blank",rel:"noopener"}},[t._v("Project")])])])])}],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"outer-div",staticStyle:{"text-align":"center"}},[a("div",{staticStyle:{display:"inline-block"}},[a("form",{staticClass:"pure-form pure-form-stacked",staticStyle:{"text-align":"left"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[a("div",{staticClass:"pure-g"},[a("fieldset",{staticClass:"pure-u-1-3"},[a("div",{staticClass:"pure-control-group"},[a("label",{attrs:{for:"starting-coordinates"}},[t._v("Start")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.startVal,expression:"formData.startVal",modifiers:{trim:!0}}],staticClass:"pure-input-rounded",attrs:{id:"starting-coordinates",type:"text",pattern:t.coordPattern,required:"",placeholder:"07FF:007F:07FF:017F"},domProps:{value:t.formData.startVal},on:{blur:[t.formatCoordinates,function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.formData,"startVal",e.target.value.trim())}}})]),a("div",{staticClass:"pure-control-group"},[a("label",{attrs:{for:"destination-coordinates"}},[t._v("Destination")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.destVal,expression:"formData.destVal",modifiers:{trim:!0}}],staticClass:"pure-input-rounded",attrs:{id:"destination-coordinates",type:"text",pattern:t.coordPattern,required:"",placeholder:"07FF:007F:07FF:017F"},domProps:{value:t.formData.destVal},on:{blur:[t.formatCoordinates,function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.formData,"destVal",e.target.value.trim())}}})])]),a("fieldset",{staticClass:"pure-u-1-3"},[a("div",{staticClass:"pure-controls",staticStyle:{display:"inline-block"}},[a("label",{attrs:{for:"platform"}},[t._v("Platform")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.platform,expression:"formData.platform"}],attrs:{id:"platform",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.formData,"platform",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"ps4"}},[t._v("PS4")]),a("option",{attrs:{value:"xbox"}},[t._v("PC / XBox")])])]),a("div",{staticClass:"pure-controls",staticStyle:{display:"inline-block"}},[a("label",{attrs:{for:"galaxy"}},[t._v("Galaxy")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.galaxy,expression:"formData.galaxy"}],attrs:{id:"galaxy",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.formData,"galaxy",e.target.multiple?a:a[0])}}},t._l(t.galaxies,function(e){return a("option",{key:e[0],domProps:{value:e[1]}},[t._v(t._s(e[1]))])}),0)]),a("div",{staticClass:"pure-control-group"},[a("label",{attrs:{for:"maximum-jump-range"}},[t._v("Jump Range")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.maxJump,expression:"formData.maxJump",modifiers:{trim:!0}}],attrs:{id:"maximum-jump-range",type:"number",required:"",min:"200",max:"3000",placeholder:"Jump Range"},domProps:{value:t.formData.maxJump},on:{input:function(e){e.target.composing||t.$set(t.formData,"maxJump",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("div",{key:t.graphCount,staticClass:"pure-u-1-3",staticStyle:{"min-width":"250px"}},[a("galaxy-map",{attrs:{blackholes:t.bhs,exits:t.exs,explanation:t.journey}})],1)])],1),t._m(0)])]),[a("route-summary",{attrs:{explanation:t.journey,estimate:t.timeEstimate}}),a("div",{staticClass:"pure-g"},t._l(t.messages,function(e){return a("div",{key:e.key,class:[e.type,"message","pure-u-1-1"]},[t._v(t._s(e.text))])}),0),a("br"),null===t.journey?a("div",{staticClass:"pure-g"},[a("div",{staticClass:"pure-u-1"},[t._v(" ")])]):[a("div",{staticClass:"pure-g"},[this.windowWidth>=639?[a("div",{staticClass:"pure-u-1"},[a("table",{staticClass:"pure-table pure-table-horizontal",staticStyle:{"margin-left":"auto","margin-right":"auto",width:"100%"}},[t._m(1),a("tbody",t._l(t.journey.legs(),function(e){return a("tr",{key:e.index,class:{"pure-table-odd":t.isOdd(e.index)}},[a("td",[t._v(t._s(e.index+1))]),a("td",{staticClass:"notranslate"},[t._v("\n                    "+t._s(t.journey.desc(e.start))+"\n                    "),a("br"),a("small",[t._v(t._s(""+e.start.coords))])]),a("td",{staticClass:"notranslate"},[t._v("\n                    "+t._s(t.journey.desc(e.dest))+"\n                    "),a("br"),a("small",[t._v(t._s(""+e.dest.coords))])]),a("td",[t._v(t._s(e.description))]),a("td",[a("span",{staticClass:"galactic-coordinates"},[a("big",[a("big",[a("big",[a("span",{staticClass:"galactic-coordinates-mobile"},[t._v(t._s(e.dest.coords.galacticCoordinates(0).toUpperCase().slice(0,4))+" "+t._s(e.dest.coords.galacticCoordinates(0).toUpperCase().slice(4,8))+" "+t._s(e.dest.coords.galacticCoordinates(0).toUpperCase().slice(8,12)))])])],1)],1)],1)])])}),0)])])]:[a("div",{staticClass:"pure-u-1"},[a("table",{staticClass:"pure-table no-border",staticStyle:{width:"100%"}},t._l(t.journey.legs(),function(e){return a("tr",{key:e.index,class:{"pure-table-odd":t.isOdd(e.index)}},[a("td",{staticClass:"no-padding no-border"},[a("table",{staticClass:"pure-table no-border"},[a("tr",[a("td",{staticClass:"key-cell"},[t._v("Route")]),a("td",{staticClass:"value-cell"},[t._v(t._s(e.index+1))])]),a("tr",[a("td",{staticClass:"key-cell"},[0===e.index?[t._v("Start")]:[t._v("Exit")]],2),a("td",{staticClass:"value-cell notranslate"},[t._v("\n                        "+t._s(t.journey.desc(e.start))+"\n                        "),a("br"),a("small",[t._v(t._s(""+e.start.coords))])])]),a("tr",[a("td",{staticClass:"key-cell"},[e.index>=t.journey.legs().last().index?[t._v("Destination")]:[t._v("Black Hole")]],2),a("td",{staticClass:"value-cell notranslate"},[t._v("\n                        "+t._s(t.journey.desc(e.dest))+"\n                        "),a("br"),a("small",[t._v(t._s(""+e.dest.coords))])])]),a("tr",[a("td",{staticClass:"key-cell"},[t._v("Directions")]),a("td",{staticClass:"value-cell"},[t._v(t._s(e.description))])]),a("tr",[a("td",{staticClass:"key-cell"},[t._v("Custom Waypoint")]),a("td",{staticClass:"value-cell"},[a("span",{staticClass:"galactic-coordinates-mobile"},[t._v(t._s(e.dest.coords.galacticCoordinates(0).toUpperCase().slice(0,4))+" "+t._s(e.dest.coords.galacticCoordinates(0).toUpperCase().slice(4,8))+" "+t._s(e.dest.coords.galacticCoordinates(0).toUpperCase().slice(8,12)))])])])])])])}),0)])]],2)]]],2)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pure-g"},[a("fieldset",{staticClass:"pure-u-1-2"},[a("div",{staticClass:"pure-controls",staticStyle:{"text-align":"right"}},[a("button",{attrs:{button:"pure-button-primary pure-button "}},[t._v("Go!")])])]),a("fieldset",{staticClass:"pure-u-1-2"},[t._v(" ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v(" ")]),a("th",[t._v("Start / Exit")]),a("th",[t._v("Black Hole / Destination")]),a("th",[t._v("Directions")]),a("th",[t._v("Custom Waypoint")])])])}],l=(a("ac4d"),a("8a81"),a("ac6a"),a("96cf"),a("3b8d")),d=(a("6b54"),a("9a04")),h=a("75fc"),f=(a("a481"),a("3b2b"),a("c5f6"),a("7cdf"),a("d225")),m=a("b0b4"),p=function(){function t(e,a,r,n){if(Object(f["a"])(this,t),this.x=e,this.y=a,this.z=r,this.system=n,!Number.isInteger(e))throw new RangeError("x must be an integer value: ".concat(e));if(!Number.isInteger(a))throw new RangeError("y must be an integer value: ".concat(a));if(!Number.isInteger(r))throw new RangeError("z must be an integer value: ".concat(r));if(!Number.isInteger(n))throw new RangeError("system must be an integer value: ".concat(n));if(e<0||e>4095)throw new RangeError("x must be in range 0x0 to 0xFFF: 0x".concat(e.toString(16)));if(a<0||a>255)throw new RangeError("y must be in range 0x0 to 0xFF: 0x".concat(a.toString(16)));if(r<0||r>4095)throw new RangeError("z must be in range 0x0 to 0xFFF: 0x".concat(r.toString(16)));if(n<0||n>767)throw new RangeError("system must be in range 0x0 to 0x2FF: 0x".concat(n.toString(16)))}return Object(m["a"])(t,[{key:"toString",value:function(){function t(t){var e=t.toString(16).toUpperCase();while(e.length<4)e="0".concat(e);return e}return"".concat(t(this.x),":").concat(t(this.y),":").concat(t(this.z),":").concat(t(this.system))}},{key:"galacticCoordinates",value:function(t){if(t<0||t>15)throw new RangeError("illegal planet code: ".concat(t.toString(16)));function e(t,a){return t.length>=a?t:e("0".concat(t),a)}function a(t,r){return t.length<=r?e(t,r):a(t.substring(1),r)}var r=t.toString(16),n=a(this.system.toString(16),3),i=a((this.y+129).toString(16),2),o=a((this.z+2049).toString(16),3),s=a((this.x+2049).toString(16),3);return"".concat(r).concat(n).concat(i).concat(o).concat(s)}},{key:"dist2Center",value:function(){return this.dist2(D)}},{key:"dist2",value:function(t){return Math.sqrt(this.dist2Sq(t))}},{key:"dist2Sq",value:function(t){var e=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return e*e+a*a+r*r}},{key:"radial",get:function(){var t=Math.atan2(-1*(this.z-2047),this.x-2047);return t<0&&(t+=2*Math.PI),180*t/Math.PI}}]),t}(),g="([0-9a-f]{1,4})[:\\s]([0-9a-f]{1,4})[:\\s]([0-9a-f]{1,4})",y="([0-9a-f]{1,4})[:\\s]([0-9a-f]{1,4})[:\\s]([0-9a-f]{1,4})[:\\s]([0-9a-f]{1,4})",v="([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})",b="([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})",x=new RegExp("^".concat(g,"$"),"i"),k=new RegExp("^".concat(y,"$"),"i"),w=new RegExp("^".concat(v,"$"),"i"),_=new RegExp("^".concat(b,"$"),"i"),j="^(".concat(g,")|(").concat(y,")|(").concat(v,")|(").concat(b,")$").replace(/a-f/g,"a-fA-F");function C(t){function e(t){if(null===t)return null;var e=t.slice(1,5).map(function(t){return parseInt(t,16)});return 3===e.length&&e.push(0),e}var a=t.trim(),r=e(x.exec(a));if(null==r&&(r=e(k.exec(a))),null==r&&(r=e(w.exec(a))),null==r&&(r=e(_.exec(a))),null==r)throw new SyntaxError("not valid galactic coordinates: '".concat(a,"'"));return Object(d["a"])(p,Object(h["a"])(r))}var S,D=C("07FF:007F:07FF:0000");(function(t){t["PS4"]="PS4",t["PC"]="PC"})(S||(S={}));var E=function(){function t(e,a,r){Object(f["a"])(this,t),this.region=e,this.system=a,this.coords=r}return Object(m["a"])(t,[{key:"label",get:function(){return console.log("".concat(this.region,":").concat(this.system,":").concat(this.coords)),"[".concat(this.region.replace(/ /g," "),"] ").concat(this.system.replace(/-/g,"‑").replace(/ /g," "))}}]),t}(),R=function(){function t(e,a,r,n){Object(f["a"])(this,t),this.platform=e,this.galaxy=a,this.blackhole=r,this.exit=n}return Object(m["a"])(t,[{key:"radialDist",get:function(){var t=this.blackhole.coords.dist2Center(),e=this.exit.coords.dist2Center();return Math.abs(t-e)}},{key:"axialDist",get:function(){var t=this.blackhole.coords.radial,e=this.exit.coords.radial,a=t-e;while(a<0)a+=180;while(a>180)a-=180;return a=t<180?e>t&&e<t+180?a:-a:e<t&&e>t-180?-a:a,a}}]),t}();var O=a("308d"),z=a("6bb5"),F=a("4e2b"),L=(a("55dd"),a("768b")),P=(a("6c7b"),a("06a0"));function H(t,e,a){var r=e.x-t.x,n=e.y-t.y,i=e.z-t.z;function o(){function e(t){return t*t}var o=r*(a.x-t.x)+n*(a.y-t.y)+i*(a.z-t.z),s=e(r)+e(n)+e(i);return o/s}var s=o();return{x:t.x+s*r,y:t.y+s*n,z:t.z+s*i}}function M(t,e){var a=t.x-e.x,r=t.y-e.y,n=t.z-e.z;return Math.sqrt(a*a+r*r*n*n)}function I(t,e,a){var r=M(t,e),n=M(t,a),i=M(e,a);return r-(n+i)<1e-6}function J(t,e,a,r){var n=H(t,e,a);return I(t,e,n)?M(n,a)<=r:M(t,a)<=r||M(e,a)<=r}var T=function(){function t(e){Object(f["a"])(this,t),this.nodes=e,this.adjacencyList=new Array(e).fill(null).map(function(t){return new Array(0)})}return Object(m["a"])(t,[{key:"addEdge",value:function(t,e,a){if(a<0)throw new RangeError("weight must be >= 0");this.adjacencyList[t].push({node:e,weight:a})}},{key:"addBidirEdge",value:function(t,e,a){if(a<0)throw new RangeError("weight must be >= 0");this.adjacencyList[t].push({node:e,weight:a}),this.adjacencyList[e].push({node:t,weight:a})}},{key:"setEdges",value:function(t,e){this.adjacencyList[t]=e}},{key:"calculateFor",value:function(t){var e=this,a=new Array(this.nodes).fill(1/0);a[t]=0;var r=new P["a"]([{node:t,weight:0}],function(t,e){return t.weight-e.weight}),n=new Array(this.nodes).fill(-1),i=function(){var t=r.pop(),i=t.node;e.adjacencyList[i].forEach(function(t){var e=a[i]+t.weight;e<a[t.node]&&(a[t.node]=e,n[t.node]=i,r.push({node:t.node,weight:e}))})};while(0!==r.length)i();return new W(t,n,a)}}]),t}(),W=function(){function t(e,a,r){Object(f["a"])(this,t),this.startNode=e,this.backtrace=a,this.weights=r}return Object(m["a"])(t,[{key:"shortestPathTo",value:function(t){var e=[t],a=t;while(a!=this.startNode)e.unshift(this.backtrace[a]),a=this.backtrace[a];return e}},{key:"totalWeight",value:function(t){return this.weights[t]}}]),t}(),N=function(){function t(e,a){Object(f["a"])(this,t),this.score=e,this.route=a}return Object(m["a"])(t,[{key:"start",get:function(){return this.route[0].coords}},{key:"destination",get:function(){return this.route[this.route.length-1].coords}}]),t}();function A(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}function B(t,e){return A(t,e)&&t.system===e.system}function $(t,e){return Math.abs(t.x-e.x)<=1&&Math.abs(t.y-e.y)<=1&&Math.abs(t.z-e.z)<=1}function q(t,e,a){var r=Math.ceil(400*e.dist2(a)/t);return 0===r?B(e,a)?0:1:r}function U(t,e,a){if("fuel"===a)return new G(t,e);if("time"===a)return new Y(t,e);throw new Error("unknown optimization value: ".concat(a))}var V=function(){function t(e,a){Object(f["a"])(this,t),this.galacticHops=e,this.maxJumpRange=a}return Object(m["a"])(t,[{key:"routeWeight",value:function(t,e){return B(t,e)?0:A(t,e)?this.sameRegionWeight():$(t,e)?Math.max(this.adjacentRegionWeight(),q(this.maxJumpRange,t,e)):this.waypointWeight()+q(this.maxJumpRange,t,e)}},{key:"findRoute",value:function(t,e){var a=this,r=[],n=[],i=[],o=[],s={index:-1,system:e,edges:[]};r.push(s);var u=!0,c=!1,l=void 0;try{for(var d,h=t[Symbol.iterator]();!(u=(d=h.next()).done);u=!0){var f=d.value,m={index:-1,system:f,edges:[]};r.push(m),o.push(m)}}catch(V){c=!0,l=V}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}var p=!0,g=!1,y=void 0;try{for(var v,b=this.galacticHops[Symbol.iterator]();!(p=(v=b.next()).done);p=!0){var x=v.value,k={index:-1,system:x.blackhole,edges:[]};r.push(k),n.push(k);var w=r.length-1,_={index:-1,system:x.exit,edges:[{node:w,weight:this.blackHoleWeight()}]};r.push(_),i.push(_)}}catch(V){g=!0,y=V}finally{try{p||null==b.return||b.return()}finally{if(g)throw y}}var j=!0,C=!1,S=void 0;try{for(var E,R=r.entries()[Symbol.iterator]();!(j=(E=R.next()).done);j=!0){var O=Object(L["a"])(E.value,2),z=O[0],F=O[1];F.index=z,F.edges.forEach(function(t){0==t.weight&&(t.weight+=1e-6)})}}catch(V){C=!0,S=V}finally{try{j||null==R.return||R.return()}finally{if(C)throw S}}for(var P=function(){var t=M[H],e=a.closest(t.system.coords,i).map(function(e){return{node:e.index,weight:a.routeWeight(t.system.coords,e.system.coords)}}),r=o.filter(function(e){return!J(e.system.coords,t.system.coords,D,7)}).map(function(e){return{node:e.index,weight:a.routeWeight(t.system.coords,e.system.coords)}});t.edges=e.concat(r)},H=0,M=n;H<M.length;H++)P();s.edges=i.filter(function(t){return!J(t.system.coords,s.system.coords,D,7)}).concat(o).map(function(t){return{node:t.index,weight:a.routeWeight(s.system.coords,t.system.coords)}});for(var I=new T(r.length),W=0,A=r;W<A.length;W++){F=A[W];I.setEdges(F.index,F.edges)}for(var B=I.calculateFor(s.index),$=0,q=o;$<q.length;$++){var U=q[$];console.log("".concat(JSON.stringify(U.system)," scored ").concat(B.totalWeight(U.index),"; ").concat(B.shortestPathTo(U.index)))}return o.map(function(t){return new N(Math.round(B.totalWeight(t.index)),B.shortestPathTo(t.index).map(function(t){return r[t]}).map(function(t){return t.system}).reverse())})}},{key:"maxTravelRangeLY",value:function(){return 2e5}},{key:"maxClosest",value:function(){return 100}},{key:"closest",value:function(t,e){var a=this.maxTravelRangeLY()/400,r=e.filter(function(e){return Math.abs(t.x-e.system.coords.x)<=a&&Math.abs(t.z-e.system.coords.z)<=a}).filter(function(e){return!J(e.system.coords,t,D,7)}).map(function(e){return{system:e,dist:t.dist2Sq(e.system.coords)}});return r.sort(function(t,e){return t.dist-e.dist}).map(function(t){return t.system}).slice(0,this.maxClosest())}}]),t}(),Y=function(t){function e(t,a){var r;return Object(f["a"])(this,e),r=Object(O["a"])(this,Object(z["a"])(e).call(this,t,a)),r.galacticHops=t,r.maxJumpRange=a,r}return Object(F["a"])(e,t),Object(m["a"])(e,[{key:"blackHoleWeight",value:function(){return 1}},{key:"sameRegionWeight",value:function(){return 1}},{key:"adjacentRegionWeight",value:function(){return 2}},{key:"waypointWeight",value:function(){return 4}}]),e}(V),G=function(t){function e(t,a){var r;return Object(f["a"])(this,e),r=Object(O["a"])(this,Object(z["a"])(e).call(this,t,a)),r.galacticHops=t,r.maxJumpRange=a,r}return Object(F["a"])(e,t),Object(m["a"])(e,[{key:"blackHoleWeight",value:function(){return 0}},{key:"sameRegionWeight",value:function(){return 1}},{key:"adjacentRegionWeight",value:function(){return 1}},{key:"waypointWeight",value:function(){return 0}}]),e}(V),K=["Euclid","Hilbert Dimension","Calypso","Hesperius Dimension","Hyades","Ickjamatew","Budullangr","Kikolgallr","Eltiensleen","Eissentam","Elkupalos","Aptarkaba","Ontiniangp","Odiwagiri","Ogtialabi","Muhacksonto","Hitonskyer","Rerasmutul","Isdoraijung","Doctinawyra","Loychazinq","Zukasizawa","Ekwathore","Yeberhahne","Twerbetek","Sivarates","Eajerandal","Aldukesci","Wotyarogii","Sudzerbal","Maupenzhay","Sugueziume","Brogoweldian","Ehbogdenbu","Ijsenufryos","Nipikulha","Autsurabin","Lusontrygiamh","Rewmanawa","Ethiophodhe","Urastrykle","Xobeurindj","Oniijialdu","Wucetosucc","Ebyeloofdud","Odyavanta","Milekistri","Waferganh","Agnusopwit","Teyaypilny","Zalienkosm","Ladgudiraf","Mushonponte","Amsentisz","Fladiselm","Laanawemb","Ilkerloor","Davanossi","Ploehrliou","Corpinyaya","Leckandmeram","Quulngais","Nokokipsechl","Rinblodesa","Loydporpen","Ibtrevskip","Elkowaldb","Heholhofsko","Yebrilowisod","Husalvangewi","Ovna'uesed","Bahibusey","Nuybeliaure","Doshawchuc","Ruckinarkh","Thorettac","Nuponoparau","Moglaschil","Uiweupose","Nasmilete","Ekdaluskin","Hakapanasy","Dimonimba","Cajaccari","Olonerovo","Umlanswick","Henayliszm","Utzenmate","Umirpaiya","Paholiang","Iaereznika","Yudukagath","Boealalosnj","Yaevarcko","Coellosipp","Wayndohalou","Smoduraykl","Apmaneessu","Hicanpaav","Akvasanta","Tuychelisaor","Rivskimbe","Daksanquix","Kissonlin","Aediabiel","Ulosaginyik","Roclaytonycar","Kichiaroa","Irceauffey","Nudquathsenfe","Getaizakaal","Hansolmien","Bloytisagra","Ladsenlay","Luyugoslasr","Ubredhatk","Cidoniana","Jasinessa","Torweierf","Saffneckm","Thnistner","Dotusingg","Luleukous","Jelmandan","Otimanaso","Enjaxusanto","Sezviktorew","Zikehpm","Bephembah","Broomerrai","Meximicka","Venessika","Gaiteseling","Zosakasiro","Drajayanes","Ooibekuar","Urckiansi","Dozivadido","Emiekereks","Meykinunukur","Kimycuristh","Roansfien","Isgarmeso","Daitibeli","Gucuttarik","Enlaythie","Drewweste","Akbulkabi","Homskiw","Zavainlani","Jewijkmas","Itlhotagra","Podalicess","Hiviusauer","Halsebenk","Puikitoac","Gaybakuaria","Grbodubhe","Rycempler","Indjalala","Fontenikk","Pasycihelwhee","Ikbaksmit","Telicianses","Oyleyzhan","Uagerosat","Impoxectin","Twoodmand","Hilfsesorbs","Ezdaranit","Wiensanshe","Ewheelonc","Litzmantufa","Emarmatosi","Mufimbomacvi","Wongquarum","Hapirajua","Igbinduina","Wepaitvas","Sthatigudi","Yekathsebehn","Ebedeagurst","Nolisonia","Ulexovitab","Iodhinxois","Irroswitzs","Bifredait","Beiraghedwe","Yeonatlak","Cugnatachh","Nozoryenki","Ebralduri","Evcickcandj","Ziybosswin","Heperclait","Sugiuniam","Aaseertush","Uglyestemaa","Horeroedsh","Drundemiso","Ityanianat","Purneyrine","Dokiessmat","Nupiacheh","Dihewsonj","Rudrailhik","Tweretnort","Snatreetze","Iwunddaracos","Digarlewena","Erquagsta","Logovoloin","Boyaghosganh","Kuolungau","Pehneldept","Yevettiiqidcon","Sahliacabru","Noggalterpor","Chmageaki","Veticueca","Vittesbursul","Nootanore","Innebdjerah","Kisvarcini","Cuzcogipper","Pamanhermonsu","Brotoghek","Mibittara","Huruahili","Raldwicarn","Ezdartlic","Badesclema","Isenkeyan","Iadoitesu","Yagrovoisi","Ewcomechio","Inunnunnoda","Dischiutun","Yuwarugha","Ialmendra","Reponudrle","Rinjanagrbo","Zeziceloh","Oeileutasc","Zicniijinis","Dugnowarilda","Neuxoisan","Ilmenhorn","Rukwatsuku","Nepitzaspru","Chcehoemig","Haffneyrin","Uliciawai","Tuhgrespod","Iousongola"],Z=a("329b");a("4917"),a("28a5");function X(t){return new Promise(function(e,a){var r=new XMLHttpRequest;r.onreadystatechange=function(){4===r.readyState&&(200===r.status?e(r.responseText):a(new Error("".concat(r.status," ").concat(r.statusText))))},r.open("GET",t),r.send()})}var Q=a("5f35");function tt(){return et.apply(this,arguments)}function et(){return et=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=Z["a"],t.next=3,X("".concat(Q["publicPath"],"blackholes.txt"));case 3:return t.t1=t.sent.split(/\n/g),e=(0,t.t0)(t.t1),a=e.filter(function(t){return!t.match(/^\s*$/g)}).map(function(t){try{return JSON.parse(t)}catch(e){throw new Error("".concat(e.message,"\n'").concat(t,"'"))}}),t.abrupt("return",a.map(function(t){return new R(t[1],K[t[0]],new E(t[3],t[4],C(t[2])),new E(t[6],t[7],C(t[5])))}));case 7:case"end":return t.stop()}},t)})),et.apply(this,arguments)}var at=[[0,"Euclid"],[1,"Hilbert Dimension"],[2,"Calypso"],[3,"Hesperius Dimension"],[4,"Hyades"],[5,"Ickjamatew"],[6,"Budullangr"],[7,"Kikolgallr"],[8,"Eltiensleen"],[9,"Eissentam"],[10,"Elkupalos"],[11,"Aptarkaba"],[12,"Ontiniangp"],[13,"Odiwagiri"],[14,"Ogtialabi"],[15,"Muhacksonto"],[16,"Hitonskyer"],[17,"Rerasmutul"],[18,"Isdoraijung"],[19,"Doctinawyra"],[20,"Loychazinq"],[21,"Zukasizawa"],[22,"Ekwathore"],[23,"Yeberhahne"],[24,"Twerbetek"],[25,"Sivarates"],[29,"Sudzerbal"],[34,"Ijsenufryos"],[35,"Nipikulha"],[41,"Xobeurindj"],[254,"Iousongola"]],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticStyle:{"max-height":"300px","min-width":"250px"},attrs:{x:"0",y:"0",height:"99%",viewBox:"-100 -100 4296 4296",preserveAspectRatio:"xMidYMid meet"}},[a("title",[t._v("Reality")]),a("circle",{attrs:{cx:"2047",cy:"2047",r:"2047",fill:"none",stroke:"lightgrey","stroke-width":"7"}}),t._l(t.explLegs.zip(t.explLegs.slice(1)),function(t){var e=t[0],r=t[1];return[a("line",{key:"JUMP|"+e.dest.coords.toString()+"|"+r.start.coords.toString(),attrs:{x1:e.dest.coords.x,y1:e.dest.coords.z,x2:r.start.coords.x,y2:r.start.coords.z,stroke:"black","stroke-width":"5","stroke-linecap":"round"}})]}),t._l(t.explLegs,function(t){return[a("line",{key:"HYPERSPACE|"+t.start.coords.toString()+"|"+t.dest.coords.toString(),attrs:{x1:t.start.coords.x,y1:t.start.coords.z,x2:t.dest.coords.x,y2:t.dest.coords.z,stroke:"darkred","stroke-width":"5","stroke-linecap":"round"}})]}),t.explLegs.isEmpty()?t._e():[a("circle",{attrs:{cx:t.explLegs.first().start.coords.x,cy:t.explLegs.first().start.coords.z,r:"80",fill:"none",stroke:"green","stroke-width":"20"}})],t.explLegs.isEmpty()?t._e():[a("circle",{attrs:{cx:t.explLegs.last().dest.coords.x,cy:t.explLegs.last().dest.coords.z,r:"80",fill:"none",stroke:"red","stroke-width":"20"}})],t._l(t.bhs,function(t){return[a("circle",{key:t.toString(),attrs:{cx:t.x,cy:t.z,r:"15",fill:"blue",opacity:"0.5"}})]}),t._l(t.exs,function(t){return[a("circle",{key:t.toString(),attrs:{cx:t.x,cy:t.z,r:"15",fill:"darkorange",opacity:"0.5"}})]})],2)},nt=[],it=r["a"].extend({name:"galaxy-map",props:["blackholes","exits","explanation"],methods:{},computed:{explLegs:function(){return this.explanation?this.explanation.legs():Object(Z["a"])([])},bhs:function(){var t=this.blackholes,e="";return Object(Z["a"])(t).sortBy(function(t){return t.toString()}).filter(function(t){var a=t.toString()!==e;return e=t.toString(),a}).toArray()},exs:function(){var t=this.exits,e="";return Object(Z["a"])(t).sortBy(function(t){return t.toString()}).filter(function(t){var a=t.toString()!==e;return e=t.toString(),a}).toArray()}}}),ot=it,st=a("2877"),ut=Object(st["a"])(ot,rt,nt,!1,null,"b94c6608",null),ct=ut.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pure-u-1 route-summary"},[null!=t.expl?[a("table",{staticClass:"pure-table no-border",staticStyle:{width:"100%"}},[t._m(0),a("tbody",[a("tr",[a("td",{staticClass:"key-cell"},[t._v("Direct Route")]),a("td",{staticClass:"value-cell"},[t._v("\n            "+t._s(t.expl.directDistanceLY().toLocaleString())+" LY, "+t._s(t.expl.directJumps().toLocaleString())+" jumps\n            "),null!==t.est?a("span",[t._v("in "+t._s(t.directTimeFormatted)+" minutes")]):t._e()])]),a("tr",[a("td",{staticClass:"key-cell"},[t._v("Using DaRC")]),a("td",{staticClass:"value-cell"},[t._v("\n            "+t._s(t.expl.journeyJumps().toLocaleString())+" jumps\n            "),null!==t.est?a("span",[t._v("in "+t._s(t.routeTimeFormatted)+" minutes")]):t._e()])]),a("tr",[a("td",{staticClass:"key-cell"},[t._v("Reduction")]),a("td",{staticClass:"value-cell"},[t._v("\n            "+t._s((100*t.expl.hyperjumpReduction()).toFixed(2))+"% fewer jumps,\n            "),a("span",[t._v(t._s((100*t.timeReduction).toFixed(2))+"% less time")])])]),a("tr",[a("td",{staticClass:"key-cell"},[t._v("Cornell Index")]),a("td",{staticClass:"value-cell"},[t._v(t._s(t.expl.journeyBlackHoles().toLocaleString())+" Black Holes")])])])])]:t._e()],2)},dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("Route Summary")])])])}],ht=r["a"].extend({name:"route-summary",props:["explanation","estimate"],data:function(){return{}},computed:{expl:function(){return this.explanation},est:function(){return this.estimate},routeTimeFormatted:function(){return Math.round((this.est||{route:0,direct:0}).route).toLocaleString()},directTimeFormatted:function(){return Math.round((this.est||{route:0,direct:0}).direct).toLocaleString()},timeReduction:function(){return 1-this.est.route/this.est.direct}}}),ft=ht,mt=(a("f6d1"),Object(st["a"])(ft,lt,dt,!1,null,"ab9abf18",null)),pt=mt.exports;function gt(t){if(t.size%2===1)throw new RangeError("list must have an even number of end points");var e=t.filter(function(t,e){return e%2===0}),a=t.filter(function(t,e){return e%2===1});return e.zip(a)}var yt=function(){function t(e,a){Object(f["a"])(this,t),this.maxJumpRange=e,this.journey=a,this.flat=a.flatMap(function(t){return t})}return Object(m["a"])(t,[{key:"directDistanceLY",value:function(){return Math.floor(400*this.first.coords.dist2(this.last.coords))}},{key:"directJumps",value:function(){return q(this.maxJumpRange,this.first.coords,this.last.coords)}},{key:"journeyJumps",value:function(){var t=this;return this.journey.map(function(e){var a=Object(L["a"])(e,2),r=a[0],n=a[1];return q(t.maxJumpRange,r.coords,n.coords)}).reduce(function(t,e){return t+e})}},{key:"journeyBlackHoles",value:function(){return this.journey.size-1}},{key:"speedup",value:function(){var t=this.directJumps(),e=this.journeyJumps()+this.journeyBlackHoles();return 0===e?NaN:t/e}},{key:"hyperjumpReduction",value:function(){var t=this.directJumps(),e=this.journeyJumps();return 1-e/t}},{key:"legs",value:function(){var t=this;return this.journey.map(function(e,a){var r=Object(L["a"])(e,2),n=r[0],i=r[1];if(B(n.coords,i.coords))return{index:a,start:n,dest:i,description:"Same system!"};if(A(n.coords,i.coords))return{index:a,start:n,dest:i,description:"Same region."};if($(n.coords,i.coords))return i.coords.y-n.coords.y>0?{index:a,start:n,dest:i,description:"Adjacent region, above current location."}:i.coords.y-n.coords.y<0?{index:a,start:n,dest:i,description:"Adjacent region, below current location."}:{index:a,start:n,dest:i,description:"Adjacent region, same level as current location."};var o=Math.floor(400*n.coords.dist2(i.coords)),s=q(t.maxJumpRange,n.coords,i.coords);return{index:a,start:n,dest:i,description:"About ".concat(o.toLocaleString()," LY, or ").concat(s," jumps, away.")}})}},{key:"desc",value:function(t){return t.coords.system,"".concat(t.label)}},{key:"first",get:function(){return this.flat.first()}},{key:"last",get:function(){return this.flat.last()}}]),t}(),vt=r["a"].extend({components:{GalaxyMap:ct,RouteSummary:pt},data:function(){return{graphCount:0,coordPattern:j,galaxies:at,bhs:[],exs:[],formData:{startVal:"",destVal:"",galaxy:"01 Euclid",platform:"ps4",maxJump:"2000"},route:null,journey:null,timeEstimate:null,messages:[],messageKey:0,windowWidth:-1}},watch:{formData:{handler:function(){var t=this.getFormData();window.localStorage.setItem("TravelRequestForm_FormData",JSON.stringify(this.formData)),null!==t&&(t.galaxy===this.formData.galaxy&&t.platform===this.formData.platform||(this.updateHopData(),this.journey=null,this.messages=[]))},deep:!0},route:function(){null!==this.route&&this.calculateTrip(this.route)}},beforeDestroy:function(){window.removeEventListener("resize",this.windowResizeEvent)},mounted:function(){console.log("TravelRequestForm mounted"),this.windowWidth=window.innerWidth,window.addEventListener("resize",this.windowResizeEvent);var t=this.getFormData();t&&(this.formData=t),this.updateHopData()},methods:{isOdd:function(t){return t%2!==0},getFormData:function(){return window.localStorage.getItem("TravelRequestForm_FormData")?JSON.parse(window.localStorage.getItem("TravelRequestForm_FormData")):null},updateHopData:function(){var t=this,e=this.getFormData();if(null!==e&&e&&e.galaxy.trim().length>0&&e.platform.trim().length>0){var a=tt().then(function(t){return t.filter(function(t){return t.galaxy===e.galaxy}).filter(function(t){function a(){if("PC"===t.platform)return 1;if("PS4"===t.platform)return 2;throw new RangeError(t.platform)}function r(){if("xbox"===e.platform)return 1;if("ps4"===e.platform)return 2;throw new RangeError(e.platform)}return a()===r()})});a.then(function(e){t.bhs=e.map(function(t){return t.blackhole.coords}).toArray(),t.exs=e.map(function(t){return t.exit.coords}).toArray(),t.graphCount+=1})}},formatCoordinates:function(){function t(t){try{var e=C(t);return e.toString()}catch(a){return null}}this.formData.startVal=t(this.formData.startVal)||this.formData.startVal,this.formData.destVal=t(this.formData.destVal)||this.formData.destVal},submitForm:function(){this.graphCount+=1,this.formatCoordinates(),this.messages=[],this.route={platform:this.formData.platform,galaxy:this.formData.galaxy,maxJump:parseInt(this.formData.maxJump,10),start:C(this.formData.startVal),dest:C(this.formData.destVal)}},calculateTrip:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var a,r,n,i,o,s,u,c,l,d,h,f,m,p;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.journey=null,!(400*e.start.dist2Center()<3e3)){t.next=4;break}return this.messages.unshift({key:this.messageKey++,type:"warning",text:"Start appears to be invalid. That point is in the void at the center of the galaxy."}),t.abrupt("return");case 4:if(!(400*e.dest.dist2Center()<3e3)){t.next=7;break}return this.messages.unshift({key:this.messageKey++,type:"warning",text:"Destination appears to be invalid. That point is in the void at the center of the galaxy."}),t.abrupt("return");case 7:return a=Math.floor(400*e.start.dist2Center()),r=Math.floor(400*e.dest.dist2Center()),n=Math.abs(a-(r+2e4)),n>=3e4&&this.messages.unshift({key:this.messageKey++,type:"warning",text:"Start is ".concat(a.toLocaleString()," LY from center. ")+"Destination is ".concat(r.toLocaleString()," LY from center. ")+"For best results, find a start location that is just a little further away from center than the destination."}),i=function(){return"ps4"==e.platform?function(t){return t.platform===S.PS4}:function(t){return t.platform===S.PC}}(),t.next=14,tt();case 14:for(t.t0=i,t.t1=function(t){return t.galaxy===e.galaxy},o=t.sent.filter(t.t0).filter(t.t1).toArray(),s=U(o,e.maxJump,"time").findRoute([{label:"start",coords:e.start}],{label:"destination",coords:e.dest})[0],this.journey=new yt(e.maxJump,gt(Object(Z["a"])(s.route))),console.log(this.journey),u=!0,c=!1,l=void 0,t.prev=23,d=this.journey.legs()[Symbol.iterator]();!(u=(h=d.next()).done);u=!0)f=h.value,console.log(f.description);t.next=31;break;case 27:t.prev=27,t.t2=t["catch"](23),c=!0,l=t.t2;case 31:t.prev=31,t.prev=32,u||null==d.return||d.return();case 34:if(t.prev=34,!c){t.next=37;break}throw l;case 37:return t.finish(34);case 38:return t.finish(31);case 39:m=U([],e.maxJump,"time").findRoute([{label:"start",coords:e.start}],{label:"destination",coords:e.dest})[0],p=62/38,this.timeEstimate={route:p*s.score,direct:p*m.score};case 42:case"end":return t.stop()}},t,this,[[23,27,31,39],[32,,34,38]])}));function e(e){return t.apply(this,arguments)}return e}(),windowResizeEvent:function(t){this.windowWidth=window.innerWidth}}}),bt=vt,xt=(a("cd5f"),Object(st["a"])(bt,u,c,!1,null,"70987312",null)),kt=xt.exports,wt=r["a"].extend({props:{msg:String},data:function(){return{}},components:{TravelRequestForm:kt}}),_t=wt,jt=(a("1d93"),Object(st["a"])(_t,o,s,!1,null,"c38dabdc",null)),Ct=jt.exports,St=r["a"].extend({name:"app",components:{Navigator:Ct}}),Dt=St,Et=(a("5c0b"),Object(st["a"])(Dt,n,i,!1,null,null,null)),Rt=Et.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Rt)}}).$mount("#app")},cd5f:function(t,e,a){"use strict";var r=a("9d49"),n=a.n(r);n.a},e332:function(t,e,a){},f6d1:function(t,e,a){"use strict";var r=a("0810"),n=a.n(r);n.a}});
//# sourceMappingURL=app.9f340918.js.map