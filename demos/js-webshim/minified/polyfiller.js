(function(e){window.jQuery&&(e(jQuery),e=jQuery.noop),"function"==typeof define&&define.amd&&define.amd.jQuery&&define("polyfiller",["jquery"],e)})(function(e){"use strict";var t="dom-support",n=e(document.scripts||"script"),r=e.event.special,a=e([]),i=window.Modernizr,o=window.asyncWebshims,s=i.addTest,c=window.Object,u=window.html5||{};i.advancedObjectProperties=i.objectAccessor=i.ES5=!!("create"in c&&"seal"in c),e.event.customEvent||(e.event.customEvent={});var l={version:"1.10.0dev",cfg:{useImportantStyles:!0,waitReady:!0,extendNative:!0,loadStyles:!0,disableShivMethods:!0,wspopover:{appendTo:"body",hideOnBlur:!0},basePath:function(){var t,r=n.filter('[src*="polyfiller.js"]');return r=r[0]||r.end()[r.end().length-1],t=(e.support.hrefNormalized?r.src:r.getAttribute("src",4)).split("?")[0],t=t.slice(0,t.lastIndexOf("/")+1)+"shims/"}()},bugs:{},modules:{},features:{},featureList:[],setOptions:function(t,n){"string"==typeof t&&void 0!==n?m[t]=e.isPlainObject(n)?e.extend(!0,m[t]||{},n):n:"object"==typeof t&&e.extend(!0,m,t)},addPolyfill:function(t,n){n=n||{};var r=n.f||t;h[r]||(h[r]=[],h[r].delayReady=0,l.featureList.push(r),m[r]={}),!h[r].failedM&&n.nM&&e.each(n.nM.split(" "),function(e,t){return t in i?void 0:(h[r].failedM=t,!1)}),h[r].failedM&&(n.test=function(){return l.error("webshims needs Modernizr."+h[r].failedM+" to implement feature: "+r),!0}),h[r].push(t),n.options=e.extend(m[r],n.options),x(t,n),n.methodNames&&e.each(n.methodNames,function(e,t){l.addMethodName(t)})},polyfill:function(){var t,n=function(t){var r,a=[];m.disableShivMethods&&(u.shivMethods=!1);var i=function(){e("html").removeClass("loading-polyfills long-loading-polyfills"),e(window).unbind(".lP"),clearTimeout(r)};e(window).on("load.lP error.lP",i),a.push("loading-polyfills"),r=setTimeout(function(){e("html").addClass("long-loading-polyfills"),r=setTimeout(i,150)},350),m.waitReady&&e.isReady&&l.warn("Call webshims.polyfill before DOM-Ready or set waitReady to false."),v(t,i),m.useImportantStyles&&a.push("polyfill-important"),a[0]&&e("html").addClass(a.join(" ")),m.loadStyles&&b.loadCSS("styles/shim.css"),n=e.noop};return function(r){var a=[];r=r||l.featureList,"string"==typeof r&&(r=r.split(" ")),t||(t=-1!==e.inArray("forms",r),t||-1===e.inArray("forms-ext",r)||(r.push("forms"),t=!0)),m.waitReady&&(e.readyWait++,v(r,function(){e.ready(!0)})),e.each(r,function(e,t){return h[t]?(t!==h[t][0]&&v(h[t],function(){y(t,!0)}),a=a.concat(h[t]),void 0):(l.error("could not find webshims-feature (aborted): "+t),y(t,!0),void 0)}),n(r),E(a)}}(),reTest:function(){var t,n,a=function(a,i){var o,s=w[i],c=i+"Ready";!s||s.loaded||(s.test&&e.isFunction(s.test)?s.test([]):s.test)||(r[c]&&delete r[c],o=h[s.f],o&&!n&&(o.delayReady++,v(i,function(){o.delayReady--,y(s.f,o.callReady)})),t.push(i))};return function(r,i){n=i,"string"==typeof r&&(r=r.split(" ")),t=[],e.each(r,a),E(t)}}(),isReady:function(t,n){if(h[t]&&h[t].delayReady>0)return n&&(h[t].callReady=!0),!1;if(t+="Ready",n){if(r[t]&&r[t].add)return!0;r[t]=e.extend(r[t]||{},{add:function(e){e.handler.call(this,t)}}),e(document).triggerHandler(t)}return!(!r[t]||!r[t].add)||!1},ready:function(t,n){var r=arguments[2];if("string"==typeof t&&(t=t.split(" ")),r||(t=e.map(e.grep(t,function(e){return!y(e)}),function(e){return e+"Ready"})),!t.length)return n(e,l,window,document),void 0;var a=t.shift(),i=function(){v(t,n,!0)};e(document).one(a,i)},capturingEvents:function(t,n){document.addEventListener&&("string"==typeof t&&(t=[t]),e.each(t,function(t,a){var i=function(t){return t=e.event.fix(t),n&&l.capturingEventPrevented&&l.capturingEventPrevented(t),e.event.dispatch.call(this,t)};r[a]=r[a]||{},r[a].setup||r[a].teardown||e.extend(r[a],{setup:function(){this.addEventListener(a,i,!0)},teardown:function(){this.removeEventListener(a,i,!0)}})}))},register:function(t,n){var r=w[t];if(!r)return l.error("can't find module: "+t),void 0;if(r.noAutoCallback){var a=function(){n(e,l,window,document,void 0,r.options),y(t,!0)};r.d&&r.d.length?v(r.d,a):a()}},c:{},loader:{addModule:function(t,n){w[t]=n,n.name=n.name||t,n.c||(n.c=[]),e.each(n.c,function(e,n){l.c[n]||(l.c[n]=[]),l.c[n].push(t)})},loadList:function(){var t=[],n=function(n,r){"string"==typeof r&&(r=[r]),e.merge(t,r),b.loadScript(n,!1,r)},r=function(n,r){if(y(n)||-1!=e.inArray(n,t))return!0;var a=w[n];m[a.f||n]||{};var i;return a?(i=a.test&&e.isFunction(a.test)?a.test(r):a.test,i?(y(n,!0),!0):!1):!0},a=function(t,n){if(t.d&&t.d.length){var a=function(t,a){r(a,n)||-1!=e.inArray(a,n)||n.push(a)};e.each(t.d,function(t,n){w[n]?a(t,n):h[n]&&(e.each(h[n],a),v(h[n],function(){y(n,!0)}))}),t.noAutoCallback||(t.noAutoCallback=!0)}};return function(i){var o,s,c,u,d=[],f=function(r,a){return u=a,e.each(l.c[a],function(n,r){return-1==e.inArray(r,d)||-1!=e.inArray(r,t)?(u=!1,!1):void 0}),u?(n("combos/"+u,l.c[u]),!1):void 0};for(s=0;i.length>s;s++)o=w[i[s]],o&&!r(o.name,i)?(o.css&&b.loadCSS(o.css),o.loadInit&&o.loadInit(),o.loaded=!0,a(o,i),d.push(o.name)):o||l.warn("could not find: "+i[s]);for(s=0,c=d.length;c>s;s++)u=!1,o=d[s],-1==e.inArray(o,t)&&("noCombo"!=l.debug&&e.each(w[o].c,f),u||n(w[o].src||o,o))}}(),makePath:function(e){return-1!=e.indexOf("//")||0===e.indexOf("/")?e:(-1==e.indexOf(".")&&(e+=".js"),m.addCacheBuster&&(e+=m.addCacheBuster),m.basePath+e)},loadCSS:function(){var t,n=[];return function(r){r=this.makePath(r),-1==e.inArray(r,n)&&(t=t||e("link, style")[0]||e("script")[0],n.push(r),e('<link rel="stylesheet" />').insertBefore(t).attr({href:r}))}}(),loadScript:function(){var t=[];return function(n,r,a){if(n=b.makePath(n),-1==e.inArray(n,t)){var i=function(){i=null,r&&r(),a&&("string"==typeof a&&(a=a.split(" ")),e.each(a,function(e,t){w[t]&&(w[t].afterLoad&&w[t].afterLoad(),y(w[t].noAutoCallback?t+"FileLoaded":t,!0))}))};t.push(n),window.require?require([n],i):window.sssl?sssl(n,i):window.yepnope?yepnope.injectJs(n,i):window.steal&&steal(n).then(i)}}}()}};e.webshims=l;var d="https:"==location.protocol?"https://":"http://",f=d+"ajax.googleapis.com/ajax/libs/",p=f+"jqueryui/1.8.24/",m=l.cfg,h=l.features,y=l.isReady,v=l.ready,g=l.addPolyfill,w=l.modules,b=l.loader,E=b.loadList,x=b.addModule,C=l.bugs,M=[],P={warn:1,error:1};l.addMethodName=function(t){t=t.split(":");var n=t[1];1==t.length?(n=t[0],t=t[0]):t=t[0],e.fn[t]=function(){return this.callProp(n,arguments)}},e.fn.callProp=function(t,n){var r;return n||(n=[]),this.each(function(){var a=e.prop(this,t);if(a&&a.apply){if(r=a.apply(this,n),void 0!==r)return!1}else l.warn(t+" is not a method of "+this)}),void 0!==r?r:this},l.activeLang=function(){var e=navigator.browserLanguage||navigator.language||"";return v("webshimLocalization",function(){l.activeLang(e)}),function(t){if(t)if("string"==typeof t)e=t;else if("object"==typeof t){var n=arguments,r=this;v("webshimLocalization",function(){l.activeLang.apply(r,n)})}return e}}(),e.each(["log","error","warn","info"],function(e,t){l[t]=function(e){return(P[t]&&l.debug!==!1||l.debug)&&window.console&&console.log?console[console[t]?t:"log"](e):void 0}}),function(){if(e.isDOMReady=e.isReady,e.isDOMReady)y("DOM",!0);else{var t=e.ready;e.ready=function(n){return n===!0||e.isDOMReady||(document.body?(e.isDOMReady=!0,y("DOM",!0),e.ready=t):setTimeout(function(){e.ready(n)},13)),t.apply(this,arguments)},e.ready.promise=t.promise}e(function(){e.isDOMReady=!0,y("DOM",!0),setTimeout(function(){y("WINDOWLOAD",!0)},9999)}),e(window).load(function(){e.isDOMReady=!0,y("DOM",!0),y("WINDOWLOAD",!0)})}(),function(){var t=[];e.extend(l,{addReady:function(e){var n=function(t,n){l.ready("DOM",function(){e(t,n)})};t.push(n),n(document,a)},triggerDomUpdate:function(n){if(!n||!n.nodeType)return n&&n.jquery&&n.each(function(){l.triggerDomUpdate(this)}),void 0;var r=n.nodeType;if(1==r||9==r){var i=n!==document?e(n):a;e.each(t,function(e,t){t(n,i)})}}}),e.fn.htmlPolyfill=function(t){var n=e.fn.html.call(this,t);return n===this&&e.isDOMReady&&this.each(function(){1==this.nodeType&&l.triggerDomUpdate(this)}),n},e.fn.jProp=function(){return e(e.fn.prop.apply(this,arguments)||[])},e.each(["after","before","append","prepend","replaceWith"],function(t,n){e.fn[n+"Polyfill"]=function(t){return t=e(t),e.fn[n].call(this,t),e.isDOMReady&&t.each(function(){1==this.nodeType&&l.triggerDomUpdate(this)}),this}}),e.each(["insertAfter","insertBefore","appendTo","prependTo","replaceAll"],function(t,n){e.fn[n.replace(/[A-Z]/,function(e){return"Polyfill"+e})]=function(){return e.fn[n].apply(this,arguments),e.isDOMReady&&l.triggerDomUpdate(this),this}}),e.fn.updatePolyfill=function(){return e.isDOMReady&&l.triggerDomUpdate(this),this},e.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(t,n){e.fn[n]=function(){return this}})}(),function(){var t="defineProperty",n=c.prototype.hasOwnProperty,r=["configurable","enumerable","writable"],a=function(e){for(var t=0;3>t;t++)void 0!==e[r[t]]||"writable"===r[t]&&void 0===e.value||(e[r[t]]=!0)},i=function(e){if(e)for(var t in e)n.call(e,t)&&a(e[t])};c.create&&(l.objectCreate=function(t,n,r){i(n);var a=c.create(t,n);return r&&(a.options=e.extend(!0,{},a.options||{},r),r=a.options),a._create&&e.isFunction(a._create)&&a._create(r),a}),c[t]&&(l[t]=function(e,n,r){return a(r),c[t](e,n,r)}),c.defineProperties&&(l.defineProperties=function(e,t){return i(t),c.defineProperties(e,t)}),l.getOwnPropertyDescriptor=c.getOwnPropertyDescriptor,l.getPrototypeOf=c.getPrototypeOf}(),x("jquery-ui",{src:p+"jquery-ui.min.js",test:function(){return l.warn("deprecated module: "+this.name),!(!e.widget||!e.Widget)}}),x("swfobject",{src:f+"swfobject/2.2/swfobject.js",test:function(){return l.warn("deprecated module: "+this.name),"swfobject"in window}}),x("input-widgets",{src:"",test:function(){return l.warn("deprecated module: "+this.name),!(this.src&&e.widget&&(!e.fn.datepicker||!e.fn.slider))}}),x("swfmini",{test:function(){return window.swfobject&&!window.swfmini&&(window.swfmini=window.swfobject),"swfmini"in window},c:[16,7,2,8,1,12,19,23]}),w.swfmini.test(),g("es5",{test:!(!i.ES5||!Function.prototype.bind),c:[14,18,19,20]}),g("dom-extend",{f:t,noAutoCallback:!0,d:["es5"],c:[16,7,2,15,3,8,4,9,10,14,19,20]}),g("json-storage",{test:i.localstorage&&"sessionStorage"in window&&"JSON"in window,d:["swfmini"],noAutoCallback:!0,c:[14],nM:"localstorage"}),g("geolocation",{test:i.geolocation,options:{destroyWrite:!0},d:["json-storage"],c:[21],nM:"geolocation"}),function(){var n;g("canvas",{src:"excanvas",test:i.canvas,options:{type:"flash"},noAutoCallback:!0,loadInit:function(){var t,r=this.options.type;!r||-1===r.indexOf("flash")||w.swfmini.test()&&!swfmini.hasFlashPlayerVersion("9.0.0")||(window.FlashCanvasOptions=window.FlashCanvasOptions||{},n=FlashCanvasOptions,"flash"==r?(e.extend(n,{swfPath:m.basePath+"FlashCanvas/"}),this.src="FlashCanvas/flashcanvas",t=n.swfPath+"flashcanvas.swf"):(e.extend(n,{swfPath:m.basePath+"FlashCanvasPro/"}),this.src="FlashCanvasPro/flashcanvas",t=n.swfPath+"flash10canvas.swf"))},afterLoad:function(){l.addReady(function(t,n){t==document&&window.G_vmlCanvasManager&&G_vmlCanvasManager.init_&&G_vmlCanvasManager.init_(document),e("canvas",t).add(n.filter("canvas")).each(function(){var e=this.getContext;!e&&window.G_vmlCanvasManager&&G_vmlCanvasManager.initElement(this)}),t==document&&y("canvas",!0)})},methodNames:["getContext"],d:[t],nM:"canvas"})}(),function(){var n,r,a=i.input,o=i.inputtypes,c="formvalidation",u=e('<select required="" name="a"><option disabled="" /></select>')[0],d=!1,f=function(){return f.run||(s(c,function(){return!(!a.required||!a.pattern)}),s("fieldsetdisabled",function(){var t=e("<fieldset />")[0];return"elements"in t&&"disabled"in t}),i[c]&&(C.bustedValidity=d=!(i.formattribute!==!1&&i.fieldsetdisabled&&"value"in document.createElement("progress")&&"value"in document.createElement("output")&&(e('<input type="date" value="1488-12-11" />')[0].validity||{valid:!0}).valid&&"required"in u&&!(u.validity||{}).valid)),n=i[c]&&!d?"form-native-extend":"form-shim-extend",s("styleableinputrange",function(){if(!o.range)return!1;var e=document.createElement("input");return e.setAttribute("type","range"),void 0!==e.style.WebkitAppearance})),f.run=!0,!1};l.formcfg=[],l.validationMessages=l.validityMessages=[],l.inputTypes={},g("form-core",{f:"forms",d:["es5"],test:f,options:{placeholderType:"value",langSrc:"i18n/formcfg-",messagePopover:{},datalistPopover:{constrainWidth:!0},availabeLangs:["ar","ch-ZN","el","es","fr","he","hi","hu","it","ja","nl","pt-PT","ru","sv"]},methodNames:["setCustomValidity","checkValidity"],c:[16,7,2,8,1,15,3],nM:"input"}),r=m.forms,g("form-native-extend",{f:"forms",test:function(t){return!i[c]||d||(w["form-number-date-api"].test()||-1==e.inArray("form-number-date-api",t||[]))&&!r.overrideMessages},d:["form-core",t,"form-message"],c:[6,5]}),g("form-shim-extend",{f:"forms",test:function(){return i[c]&&!d},d:["form-core",t],c:[16,15]}),g("form-message",{f:"forms",test:function(e){return!(r.customMessages||!i[c]||C.validationMessage||d||!w[n].test(e))},d:[t],c:[16,7,15,3,8,4]}),g("form-number-date-api",{f:"forms-ext",options:{types:["range","date","time","number","month"]},test:function(){var t=!0;return f(),e.each(this.options.types,function(e,n){return o[n]?void 0:(t=!1,!1)}),t},methodNames:["stepUp","stepDown"],d:["forms",t],c:[6,5,18,17],nM:"input inputtypes"}),e.webshims.loader.addModule("range-ui",{options:{},noAutoCallback:!0,c:[6,5,9,10,18,17,11]}),g("form-number-date-ui",{f:"forms-ext",test:function(){return!this.options.replaceUI&&w["form-number-date-api"].test()},d:["forms",t,"form-number-date-api","range-ui"],options:{widgets:{calculateWidth:!0,monthNames:"monthNamesShort"}},c:[6,5,9,10,18,17,11]}),g("form-datalist",{f:"forms",test:function(){return a.list&&!r.customDatalist},d:["form-core",t],c:[16,7,6,2,9,15]})}(),"details"in i||s("details",function(){return"open"in document.createElement("details")}),g("details",{test:i.details,d:[t],options:{text:"Details"},c:[21,22]}),function(){l.mediaelement={};var n=function(){if(!i.audio||!i.video||l.mediaelement.loadSwf)return!1;var e=this.options;return e.preferFlash&&!w.swfmini.test()&&(e.preferFlash=!1),!(e.preferFlash&&window.swfmini.hasFlashPlayerVersion("9.0.115"))},r=["swfmini",t];g("mediaelement-core",{f:"mediaelement",noAutoCallback:!0,options:{preferFlash:!1,player:"jaris",vars:{},params:{},attrs:{},changeSWF:e.noop},methodNames:["play","pause","canPlayType","mediaLoad:load"],d:["swfmini"],c:[16,7,2,8,1,12,13,19,20,23],nM:"audio video texttrackapi"}),g("mediaelement-swf",{f:"mediaelement",d:r,test:function(){return"jwplayer"!=this.options.player?!0:n.apply(this,arguments)}}),g("mediaelement-jaris",{f:"mediaelement",d:r,test:function(){return"jwplayer"==this.options.player?!0:n.apply(this,arguments)},c:[21,19,20]}),C.track=i.track&&(!i.texttrackapi||"string"!=typeof(document.createElement("track").track||{}).mode),g("track",{options:{positionDisplay:!0,override:C.track},test:function(){return i.track&&!this.options.override&&!C.track},d:["mediaelement",t],methodNames:["addTextTrack"],c:[21,12,13,22],nM:"texttrackapi"}),x("track-ui",{d:["track"]})}(),g("feature-dummy",{test:!0,loaded:!0,c:M}),n.filter("[data-polyfill-cfg]").each(function(){try{l.setOptions(e(this).data("polyfillCfg"))}catch(t){l.warn("error parsing polyfill cfg: "+t)}}).end().filter("[data-polyfill]").each(function(){l.polyfill(e.trim(e(this).data("polyfill")||""))}),o&&(o.cfg&&l.setOptions(o.cfg),o.lang&&l.activeLang(o.lang),"polyfill"in o&&l.polyfill(o.polyfill))});