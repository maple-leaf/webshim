(function(e){"use strict";var t=window.Modernizr,n=e.webshims,r=n.bugs,i=e('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input required="" name="a" /></form>'),s=function(){if(i[0].querySelector)try{r.findRequired=!i[0].querySelector("select:required")}catch(e){r.findRequired=!1}},o=e("input",i).eq(0),u=function(e){n.loader.loadList(["dom-extend"]),n.ready("dom-extend",e)};r.findRequired=!1,r.validationMessage=!1,n.capturingEventPrevented=function(t){if(!t._isPolyfilled){var n=t.isDefaultPrevented,r=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),r.apply(this,arguments)},t.isDefaultPrevented=function(){return!!(n.apply(this,arguments)||e.data(t.target,t.type+"DefaultPrevented")||!1)},t._isPolyfilled=!0}};if(!t.formvalidation||r.bustedValidity){s();return}n.capturingEvents(["input"]),n.capturingEvents(["invalid"],!0);if(window.opera||window.testGoodWithFix)i.appendTo("head"),s(),r.validationMessage=!o.prop("validationMessage"),n.reTest(["form-native-extend","form-message"]),i.remove(),e(function(){u(function(){var t=function(e){e.preventDefault()};["form","input","textarea","select"].forEach(function(r){var i=n.defineNodeNameProperty(r,"checkValidity",{prop:{value:function(){n.fromSubmit||e(this).on("invalid.checkvalidity",t),n.fromCheckValidity=!0;var r=i.prop._supvalue.apply(this,arguments);return n.fromSubmit||e(this).unbind("invalid.checkvalidity",t),n.fromCheckValidity=!1,r}}})})})});e.browser.webkit&&!n.bugs.bustedValidity&&function(){var t=/^(?:textarea|input)$/i,n=!1;document.addEventListener("contextmenu",function(e){t.test(e.target.nodeName||"")&&(n=e.target.form)&&setTimeout(function(){n=!1},1)},!1),e(window).on("invalid",function(e){e.originalEvent&&n&&n==e.target.form&&(e.wrongWebkitInvalid=!0,e.stopImmediatePropagation())})}()})(jQuery),jQuery.webshims.register("form-core",function(e,t,n,r,i,s){"use strict";var o={radio:1},u={checkbox:1,radio:1},a=e([]),f=t.bugs,l=function(t){t=e(t);var n,i,s=a;return o[t[0].type]&&(i=t.prop("form"),n=t[0].name,n?i?s=e(i[n]):s=e(r.getElementsByName(n)).filter(function(){return!e.prop(this,"form")}):s=t,s=s.filter('[type="radio"]')),s},c=t.getContentValidationMessage=function(t,n,r){var i=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return r&&i[r]&&(i=i[r]),typeof i=="object"&&(n=n||e.prop(t,"validity")||{valid:1},n.valid||e.each(n,function(e,t){if(t&&e!="valid"&&i[e])return i=i[e],!1})),typeof i=="object"&&(i=i.defaultMessage),i||""},h={number:1,range:1,date:1},p=function(t){var n=!1;return e(e.prop(t,"elements")).each(function(){n=e(this).is(":invalid");if(n)return!1}),n};e.extend(e.expr[":"],{"valid-element":function(t){return e.nodeName(t,"form")?!p(t):!!e.prop(t,"willValidate")&&!!v(t)},"invalid-element":function(t){return e.nodeName(t,"form")?p(t):!!e.prop(t,"willValidate")&&!v(t)},"required-element":function(t){return!!e.prop(t,"willValidate")&&!!e.prop(t,"required")},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!!e.prop(t,"willValidate")&&e.prop(t,"required")===!1},"in-range":function(t){if(!h[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!!(n&&!n.rangeOverflow&&!n.rangeUnderflow)},"out-of-range":function(t){if(!h[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!(!n||!n.rangeOverflow&&!n.rangeUnderflow)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]}),e.expr[":"].focus=function(e){try{var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())}catch(n){}return!1};var d=e.event.customEvent||{},v=function(t){return(e.prop(t,"validity")||{valid:1}).valid};(f.bustedValidity||f.findRequired)&&function(){var t=e.find,n=e.find.matchesSelector,i=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,s=function(e){return e+"-element"};e.find=function(){var e=Array.prototype.slice,n=function(n){var r=arguments;return r=e.call(r,1,r.length),r.unshift(n.replace(i,s)),t.apply(this,r)};for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",r.documentElement))e.find.matchesSelector=function(e,t){return t=t.replace(i,s),n.call(this,e,t)}}();var m=e.prop,g={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};e.prop=function(t,n,r){var s=m.apply(this,arguments);return t&&"form"in t&&g[n]&&r!==i&&e(t).hasClass(w)&&v(t)&&(e(t).getShadowElement().removeClass(E),n=="checked"&&r&&l(t).not(t).removeClass(E).removeAttr("aria-invalid")),s};var y=function(t,n){var r;return e.each(t,function(t,i){if(i)return r=t=="customError"?e.prop(n,"validationMessage"):t,!1}),r},b=function(e){var t;try{t=r.activeElement.name===e}catch(n){}return t},w="user-error",E="user-error form-ui-invalid",S="user-success",x="user-success form-ui-valid",T=function(t){var n,r;if(!t.target)return;n=e(t.target).getNativeElement()[0];if(n.type=="submit"||!e.prop(n,"willValidate"))return;r=e.data(n,"webshimsswitchvalidityclass");var i=function(){if(t.type=="focusout"&&n.type=="radio"&&b(n.name))return;var r=e.prop(n,"validity"),i=e(n).getShadowElement(),s,o,a,f,c;e(n).trigger("refreshCustomValidityRules"),r.valid?i.hasClass(S)||(s=x,o=E,f="changedvaliditystate",a="changedvalid",u[n.type]&&n.checked&&l(n).not(n).removeClass(o).addClass(s).removeAttr("aria-invalid"),e.removeData(n,"webshimsinvalidcause")):(c=y(r,n),e.data(n,"webshimsinvalidcause")!=c&&(e.data(n,"webshimsinvalidcause",c),f="changedvaliditystate"),i.hasClass(w)||(s=E,o=x,u[n.type]&&!n.checked&&l(n).not(n).removeClass(o).addClass(s),a="changedinvalid")),s&&(i.addClass(s).removeClass(o),setTimeout(function(){e(n).trigger(a)},0)),f&&setTimeout(function(){e(n).trigger(f)},0),e.removeData(t.target,"webshimsswitchvalidityclass")};r&&clearTimeout(r),t.type=="refreshvalidityui"?i():e.data(n,"webshimsswitchvalidityclass",setTimeout(i,9))};e(r).on(s.validityUIEvents||"focusout change refreshvalidityui",T),d.changedvaliditystate=!0,d.refreshCustomValidityRules=!0,d.changedvalid=!0,d.changedinvalid=!0,d.refreshvalidityui=!0,t.triggerInlineForm=function(t,n){e(t).trigger(n)},t.modules["form-core"].getGroupElements=l;var N=function(){t.scrollRoot=e.browser.webkit||r.compatMode=="BackCompat"?e(r.body):e(r.documentElement)};N(),t.ready("DOM",N),t.getRelOffset=function(t,n){t=e(t);var r=e(n).offset(),i;return e.swap(e(t)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){i=t.offset()}),r.top-=i.top,r.left-=i.left,r},t.validityAlert=function(){var i=!e.browser.msie||parseInt(e.browser.version,10)>7?"span":"label",s,o=!1,u=!1,a=!1,f,l={hideDelay:5e3,showFor:function(t,r,i,s){l._create(),t=e(t);var u=e(t).getShadowElement(),c=l.getOffsetFromBody(u);l.clear(),s?this.hide():(this.getMessage(t,r),this.position(u,c),this.show(),this.hideDelay&&(o=setTimeout(f,this.hideDelay)),e(n).on("resize.validityalert reposoverlay.validityalert",function(){clearTimeout(a),a=setTimeout(function(){l.position(u)},9)})),i||this.setFocus(u,c)},getOffsetFromBody:function(e){return t.getRelOffset(s,e)},setFocus:function(o,u){var a=e(o).getShadowFocusElement(),l=t.scrollRoot.scrollTop(),c=(u||a.offset()).top-30,h;t.getID&&i=="label"&&s.attr("for",t.getID(a)),l>c&&(t.scrollRoot.animate({scrollTop:c-5},{queue:!1,duration:Math.max(Math.min(600,(l-c)*1.5),80)}),h=!0);try{a[0].focus()}catch(p){}h&&(t.scrollRoot.scrollTop(l),setTimeout(function(){t.scrollRoot.scrollTop(l)},0)),setTimeout(function(){e(r).on("focusout.validityalert",f)},10),e(n).triggerHandler("reposoverlay")},getMessage:function(t,n){n||(n=c(t[0])||t.prop("customValidationMessage")||t.prop("validationMessage")),n?e("span.va-box",s).text(n):this.hide()},position:function(t,n){n=n?e.extend({},n):l.getOffsetFromBody(t),n.top+=t.outerHeight(),s.css(n)},show:function(){s.css("display")==="none"&&s.css({opacity:0}).show(),s.addClass("va-visible").fadeTo(400,1)},hide:function(){s.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(u),clearTimeout(o),e(r).unbind(".validityalert"),e(n).unbind(".validityalert"),s.stop().removeAttr("for")},_create:function(){if(s)return;s=l.errorBubble=e("<"+i+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+i+">").css({position:"absolute",display:"none"}),t.ready("DOM",function(){s.appendTo("body"),e.fn.bgIframe&&e.browser.msie&&parseInt(e.browser.version,10)<7&&s.bgIframe()})}};return f=e.proxy(l,"hide"),l}(),function(){var t,n=[],i,s;e(r).on("invalid",function(s){if(s.wrongWebkitInvalid)return;var o=e(s.target),u=o.getShadowElement();u.hasClass(w)||(u.addClass(E).removeClass(x),setTimeout(function(){e(s.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=s.isDefaultPrevented;var a=e.Event("firstinvalidsystem");e(r).triggerHandler(a,{element:s.target,form:s.target.form,isInvalidUIPrevented:s.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&s.preventDefault(),n.push(s.target),s.extraData="fix",clearTimeout(i),i=setTimeout(function(){var r={type:"lastinvalid",cancelable:!1,invalidlist:e(n)};t=!1,n=[],e(s.target).trigger(r,r)},9),o=null,u=null})}(),e.fn.getErrorMessage=function(){var t="",n=this[0];return n&&(t=c(n)||e.prop(n,"customValidationMessage")||e.prop(n,"validationMessage")),t},s.replaceValidationUI&&t.ready("DOM forms",function(){e(r).on("firstinvalid",function(t){t.isInvalidUIPrevented()||(t.preventDefault(),e.webshims.validityAlert.showFor(t.target))})})}),(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-shim-extend",function(e,t,n,r){"use strict";t.inputTypes=t.inputTypes||{};var i=t.cfg.forms,s,o=function(e){return typeof e=="number"||e&&e==e*1},u=t.inputTypes,a={radio:1,checkbox:1},f=function(e){return(e.getAttribute("type")||e.type||"").toLowerCase()};t.addInputType=function(e,t){u[e]=t};var l={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},c=function(t){if(t.type=="select-one"&&t.size<2){var n=e("> option:first-child",t);return!!n.prop("selected")}return!1},h={valueMissing:function(e,n,r){if(!e.prop("required"))return!1;var i=!1;return"type"in r||(r.type=f(e[0])),r.nodeName=="select"?i=!n&&(e[0].selectedIndex<0||c(e[0])):a[r.type]?i=r.type=="checkbox"?!e.is(":checked"):!t.modules["form-core"].getGroupElements(e).filter(":checked")[0]:i=!n,i},tooLong:function(){return!1},typeMismatch:function(e,t,n){if(t===""||n.nodeName=="select")return!1;var r=!1;return"type"in n||(n.type=f(e[0])),u[n.type]&&u[n.type].mismatch?r=u[n.type].mismatch(t,e):"validity"in e[0]&&(r=e[0].validity.typeMismatch),r},patternMismatch:function(e,n,r){if(n===""||r.nodeName=="select")return!1;var i=e.attr("pattern");if(!i)return!1;try{i=new RegExp("^(?:"+i+")$")}catch(s){t.error('invalid pattern value: "'+i+'" | '+s),i=!1}return i?!i.test(n):!1}};t.addValidityRule=function(e,t){h[e]=t},e.event.special.invalid={add:function(){e.event.special.invalid.setup.call(this.form||this)},setup:function(){var n=this.form||this;if(e.data(n,"invalidEventShim")){n=null;return}e(n).data("invalidEventShim",!0).on("submit",e.event.special.invalid.handler),t.moveToFirstEvent(n,"submit"),t.bugs.bustedValidity&&e.nodeName(n,"form")&&function(){var e=n.getAttribute("novalidate");n.setAttribute("novalidate","novalidate"),t.data(n,"bustedNoValidate",e==null?null:e)}(),n=null},teardown:e.noop,handler:function(t,n){if(t.type!="submit"||t.testedValidity||!t.originalEvent||!e.nodeName(t.target,"form")||e.prop(t.target,"noValidate"))return;s=!0,t.testedValidity=!0;var r=!e(t.target).checkValidity();if(r)return t.stopImmediatePropagation(),s=!1,!1;s=!1}};var p=function(t){!e.support.submitBubbles&&t&&typeof t=="object"&&!t._submit_attached&&(e.event.add(t,"submit._submit",function(e){e._submit_bubble=!0}),t._submit_attached=!0)};!e.support.submitBubbles&&e.event.special.submit&&(e.event.special.submit.setup=function(){if(e.nodeName(this,"form"))return!1;e.event.add(this,"click._submit keypress._submit",function(t){var n=t.target,r=e.nodeName(n,"input")||e.nodeName(n,"button")?e.prop(n,"form"):undefined;p(r)})}),e.event.special.submit=e.event.special.submit||{setup:function(){return!1}};var d=e.event.special.submit.setup;e.extend(e.event.special.submit,{setup:function(){return e.nodeName(this,"form")?e(this).on("invalid",e.noop):e("form",this).on("invalid",e.noop),d.apply(this,arguments)}}),e(n).on("invalid",e.noop),t.addInputType("email",{mismatch:function(){var e=i.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return function(t){return!e.test(t)}}()}),t.addInputType("url",{mismatch:function(){var e=i.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;return function(t){return!e.test(t)}}()}),t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,n=(e.getAttribute("type")||"").toLowerCase();return t.inputTypes[n]?n:e.type}}}),t.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:e.noop},validity:{writeable:!1,get:function(){return e.extend({},l)}}},"prop");var v=function(n){var r,i=e.prop(n,"validity");if(!i)return!0;e.data(n,"cachedValidity",i);if(!i.valid){r=e.Event("invalid");var o=e(n).trigger(r);s&&!v.unhandledInvalids&&!r.isDefaultPrevented()&&(t.validityAlert.showFor(o),v.unhandledInvalids=!0)}return e.removeData(n,"cachedValidity"),i.valid},m=/^(?:select|textarea|input)/i;t.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var n=!0,r=e(e.prop(this,"elements")).filter(function(){if(!m.test(this.nodeName))return!1;var e=t.data(this,"shadowData");return!e||!e.nativeElement||e.nativeElement===this});v.unhandledInvalids=!1;for(var i=0,s=r.length;i<s;i++)v(r[i])||(n=!1);return n}}}),t.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){return v.unhandledInvalids=!1,v(e(this).getNativeElement()[0])}},setCustomValidity:{value:function(n){e.removeData(this,"cachedValidity"),t.data(this,"customvalidationMessage",""+n)}},willValidate:{writeable:!1,get:function(){var t={button:1,reset:1,hidden:1,image:1};return function(){var n=e(this).getNativeElement()[0];return!n.disabled&&!n.readOnly&&!t[n.type]}}()},validity:{writeable:!1,get:function(){var n=e(this).getNativeElement(),r=n[0],i=e.data(r,"cachedValidity");if(i)return i;i=e.extend({},l);if(!e.prop(r,"willValidate")||r.type=="submit")return i;var s=n.val(),o={nodeName:r.nodeName.toLowerCase()};return i.customError=!!t.data(r,"customvalidationMessage"),i.customError&&(i.valid=!1),e.each(h,function(e,t){t(n,s,o)&&(i[e]=!0,i.valid=!1)}),e(this).getShadowFocusElement().attr("aria-invalid",i.valid?"false":"true"),n=null,r=null,i}}},"prop"),t.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(t){e(this).getShadowFocusElement().attr("aria-required",!!t+"")},initAttr:!e.browser.msie||t.browserVersion>7}),t.reflectProperties(["input"],["pattern"]);if(!("maxLength"in r.createElement("textarea"))){var g=function(){var t,n=0,r=e([]),i=1e9,s=function(){var e=r.prop("value"),t=e.length;t>n&&t>i&&(t=Math.max(n,i),r.prop("value",e.substr(0,t))),n=t},o=function(){clearTimeout(t),r.unbind(".maxlengthconstraint")};return function(u,a){o(),a>-1&&(i=a,n=e.prop(u,"value").length,r=e(u),r.on({"keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint":function(e){setTimeout(s,0)},"keyup.maxlengthconstraint":s,"blur.maxlengthconstraint":o}),t=setInterval(s,200))}}();g.update=function(t,n){e(t).is(":focus")&&(n||(n=e.prop(t,"maxlength")),g(t,n))},e(r).on("focusin",function(t){var n;t.target.nodeName=="TEXTAREA"&&(n=e.prop(t.target,"maxlength"))>-1&&g(t.target,n)}),t.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(e){this.setAttribute("maxlength",""+e),g.update(this)},get:function(){var e=this.getAttribute("maxlength");return e==null?undefined:e}},prop:{set:function(e){if(o(e)){if(e<0)throw"INDEX_SIZE_ERR";e=parseInt(e,10),this.setAttribute("maxlength",e),g.update(this,e);return}this.setAttribute("maxlength","0"),g.update(this,0)},get:function(){var e=this.getAttribute("maxlength");return o(e)&&e>=0?parseInt(e,10):-1}}}),t.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(t){e.prop(this,"maxlength",t)},get:function(){return e.prop(this,"maxlength")}}})}var y={submit:1,button:1,image:1},b={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(t){var n="form"+(t.propName||t.name).replace(/^[a-z]/,function(e){return e.toUpperCase()}),i="form"+t.name,s=t.name,o="click.webshimssubmittermutate"+s,u=function(){var r=this;if(!("form"in r)||!y[r.type])return;var o=e.prop(r,"form");if(!o)return;var u=e.attr(r,i);if(u!=null&&(!t.limitedTo||u.toLowerCase()===e.prop(r,n))){var a=e.attr(o,s);e.attr(o,s,u),setTimeout(function(){if(a!=null)e.attr(o,s,a);else try{e(o).removeAttr(s)}catch(t){o.removeAttribute(s)}},9)}};switch(t.proptype){case"url":var a=r.createElement("form");b[n]={prop:{set:function(t){e.attr(this,i,t)},get:function(){var t=e.attr(this,i);return t==null?"":(a.setAttribute("action",t),a.action)}}};break;case"boolean":b[n]={prop:{set:function(t){t=!!t,t?e.attr(this,"formnovalidate","formnovalidate"):e(this).removeAttr("formnovalidate")},get:function(){return e.attr(this,"formnovalidate")!=null}}};break;case"enum":b[n]={prop:{set:function(t){e.attr(this,i,t)},get:function(){var n=e.attr(this,i);return!n||(n=n.toLowerCase())&&!t.limitedTo[n]?t.defaultProp:n}}};break;default:b[n]={prop:{set:function(t){e.attr(this,i,t)},get:function(){var t=e.attr(this,i);return t!=null?t:""}}}}b[i]||(b[i]={}),b[i].attr={set:function(t){b[i].attr._supset.call(this,t),e(this).unbind(o).on(o,u)},get:function(){return b[i].attr._supget.call(this)}},b[i].initAttr=!0,b[i].removeAttr={value:function(){e(this).unbind(o),b[i].removeAttr._supvalue.call(this)}}}),t.defineNodeNamesProperties(["input","button"],b),!e.support.getSetAttribute&&e("<form novalidate></form>").attr("novalidate")==null?t.defineNodeNameProperty("form","novalidate",{attr:{set:function(e){this.setAttribute("novalidate",""+e)},get:function(){var e=this.getAttribute("novalidate");return e==null?undefined:e}}}):t.bugs.bustedValidity&&(t.defineNodeNameProperty("form","novalidate",{attr:{set:function(e){t.data(this,"bustedNoValidate",""+e)},get:function(){var e=t.data(this,"bustedNoValidate");return e==null?undefined:e}},removeAttr:{value:function(){t.data(this,"bustedNoValidate",null)}}}),e.each(["rangeUnderflow","rangeOverflow","stepMismatch"],function(e,t){h[t]=function(e){return(e[0].validity||{})[t]||!1}})),t.defineNodeNameProperty("form","noValidate",{prop:{set:function(t){t=!!t,t?e.attr(this,"novalidate","novalidate"):e(this).removeAttr("novalidate")},get:function(){return e.attr(this,"novalidate")!=null}}}),e.browser.webkit&&Modernizr.inputtypes.date&&function(){var n={updateInput:1,input:1},i={date:1,time:1,"datetime-local":1},o={focusout:1,blur:1},u={updateInput:1,change:1},a=function(e){var t,r=!0,i=e.prop("value"),s=i,a=function(t){if(!e)return;var o=e.prop("value");o!==i&&(i=o,(!t||!n[t.type])&&e.trigger("input")),t&&u[t.type]&&(s=o),!r&&o!==s&&e.trigger("change")},f,l=function(){clearTimeout(f),f=setTimeout(a,9)},c=function(n){clearInterval(t),setTimeout(function(){n&&o[n.type]&&(r=!1),e&&(e.unbind("focusout blur",c).unbind("input change updateInput",a),a()),e=null},1)};clearInterval(t),t=setInterval(a,160),l(),e.off({"focusout blur":c,"input change updateInput":a}).on({"focusout blur":c,"input updateInput change":a})};e.event.customEvent&&(e.event.customEvent.updateInput=!0),function(){var n=function(t){var n=1,r=3,i,o;if(t.type=="date"&&(s||!e(t).is(":focus"))){o=t.value;if(o&&o.length<10&&(o=o.split("-"))&&o.length==r){for(;n<r;n++)if(o[n].length==1)o[n]="0"+o[n];else if(o[n].length!=2){i=!0;break}if(!i)return o=o.join("-"),e.prop(t,"value",o),o}}},i,o,u,a;i=t.defineNodeNameProperty("input","checkValidity",{prop:{value:function(){return n(this),i.prop._supvalue.apply(this,arguments)}}}),o=t.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){return e("input",this).each(function(){n(this)}),o.prop._supvalue.apply(this,arguments)}}}),u=t.defineNodeNameProperty("input","value",{prop:{set:function(){return u.prop._supset.apply(this,arguments)},get:function(){return n(this)||u.prop._supget.apply(this,arguments)}}}),a=t.defineNodeNameProperty("input","validity",{prop:{writeable:!1,get:function(){return n(this),a.prop._supget.apply(this,arguments)}}}),e(r).on("change",function(e){n(e.target)})}(),e(r).on("focusin",function(t){t.target&&i[t.target.type]&&!t.target.readOnly&&!t.target.disabled&&a(e(t.target))})}(),t.addReady(function(t,n){var i;e("form",t).add(n.filter("form")).bind("invalid",e.noop);try{t==r&&!("form"in(r.activeElement||{}))&&(i=e("input[autofocus], select[autofocus], textarea[autofocus]",t).eq(0).getShadowFocusElement()[0],i&&i.offsetHeight&&i.offsetWidth&&i.focus())}catch(s){}}),(!Modernizr.formattribute||!Modernizr.fieldsetdisabled)&&function(){(function(t,n){e.prop=function(i,s,o){var u;if(i&&i.nodeType==1&&o===n&&e.nodeName(i,"form")&&i.id){u=r.getElementsByName(s);if(!u||!u.length)u=r.getElementById(s);if(u){u=e(u).filter(function(){return e.prop(this,"form")==i}).get();if(u.length)return u.length==1?u[0]:u}}return t.apply(this,arguments)}})(e.prop,undefined);var n=function(t){var n=e.data(t,"webshimsAddedElements");n&&(n.remove(),e.removeData(t,"webshimsAddedElements"))},i=/\r?\n/g,s=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,o=/^(?:select|textarea)/i;Modernizr.formattribute||(t.defineNodeNamesProperty(["input","textarea","select","button","fieldset"],"form",{prop:{get:function(){var n=t.contentAttr(this,"form");return n&&(n=r.getElementById(n),n&&!e.nodeName(n,"form")&&(n=null)),n||this.form},writeable:!1}}),t.defineNodeNamesProperty(["form"],"elements",{prop:{get:function(){var t=this.id,n=e.makeArray(this.elements);return t&&(n=e(n).add('input[form="'+t+'"], select[form="'+t+'"], textarea[form="'+t+'"], button[form="'+t+'"], fieldset[form="'+t+'"]').not(".webshims-visual-hide > *").get()),n},writeable:!1}}),e(function(){var t=function(e){e.stopPropagation()};e(r).on("submit",function(t){if(!t.isDefaultPrevented()){var r=t.target,i=r.id,s;i&&(n(r),s=e('input[form="'+i+'"], select[form="'+i+'"], textarea[form="'+i+'"]').filter(function(){return!this.disabled&&this.name&&this.form!=r}).clone(),s.length&&(e.data(r,"webshimsAddedElements",e('<div class="webshims-visual-hide" />').append(s).appendTo(r)),setTimeout(function(){n(r)},9)),s=null)}}),e(r).on("click",function(n){if(!n.isDefaultPrevented()&&e(n.target).is('input[type="submit"][form], button[form], input[type="button"][form], input[type="image"][form], input[type="reset"][form]')){var r=e.prop(n.target,"form"),i=n.target.form,s;r&&r!=i&&(s=e(n.target).clone().removeAttr("form").addClass("webshims-visual-hide").on("click",t).appendTo(r),i&&n.preventDefault(),p(r),s.trigger("click"),setTimeout(function(){s.remove(),s=null},9))}})})),Modernizr.fieldsetdisabled||t.defineNodeNamesProperty(["fieldset"],"elements",{prop:{get:function(){return e("input, select, textarea, button, fieldset",this).get()||[]},writeable:!1}}),e.fn.serializeArray=function(){return this.map(function(){var t=e.prop(this,"elements");return t?e.makeArray(t):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||o.test(this.nodeName)||s.test(this.type))}).map(function(t,n){var r=e(this).val();return r==null?null:e.isArray(r)?e.map(r,function(e,t){return{name:n.name,value:e.replace(i,"\r\n")}}):{name:n.name,value:r.replace(i,"\r\n")}}).get()}}();try{r.querySelector(":checked")}catch(w){(function(){var n={radio:1,checkbox:1},i=function(){var t=this.options||[],n,r,i;for(n=0,r=t.length;n<r;n++)i=e(t[n]),i[e.prop(t[n],"selected")?"addClass":"removeClass"]("prop-checked")},s=function(){var t=e.prop(this,"checked")?"addClass":"removeClass",n=this.className||"",r;if(n.indexOf("prop-checked")==-1==(t=="addClass")){e(this)[t]("prop-checked");if(r=this.parentNode)r.className=r.className}};t.onNodeNamesPropertyModify("select","value",i),t.onNodeNamesPropertyModify("select","selectedIndex",i),t.onNodeNamesPropertyModify("option","selected",function(){e(this).closest("select").each(i)}),t.onNodeNamesPropertyModify("input","checked",function(r,i){var o=this.type;o=="radio"&&i?t.modules["form-core"].getGroupElements(this).each(s):n[o]&&e(this).each(s)}),e(r).on("change",function(r){n[r.target.type]?r.target.type=="radio"?t.modules["form-core"].getGroupElements(r.target).each(s):e(r.target)[e.prop(r.target,"checked")?"addClass":"removeClass"]("prop-checked"):r.target.nodeName.toLowerCase()=="select"&&e(r.target).each(i)}),t.addReady(function(t,r){e("option, input",t).add(r.filter("option, input")).each(function(){var t;n[this.type]?t="checked":this.nodeName.toLowerCase()=="option"&&(t="selected"),t&&e(this)[e.prop(this,t)?"addClass":"removeClass"]("prop-checked")})})})()}(function(){Modernizr.textareaPlaceholder="placeholder"in e("<textarea />")[0];var r=e.browser.webkit&&Modernizr.textareaPlaceholder&&t.browserVersion<535;if(Modernizr.input.placeholder&&Modernizr.textareaPlaceholder&&!r)return;var i=t.cfg.forms.placeholderType=="over",s=t.cfg.forms.responsivePlaceholder,o=["textarea"];Modernizr.input.placeholder||o.push("input");var u=function(e){try{if(e.setSelectionRange)return e.setSelectionRange(0,0),!0;if(e.createTextRange){var t=e.createTextRange();return t.collapse(!0),t.moveEnd("character",0),t.moveStart("character",0),t.select(),!0}}catch(n){}},a=function(t,n,r,s){r===!1&&(r=e.prop(t,"value"));if(!i&&t.type!="password"){if(!r&&s&&u(t)){var o=setTimeout(function(){u(t)},9);e(t).off(".placeholderremove").on({"keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove":function(r){if(!(!r||r.keyCode!=17&&r.keyCode!=16))return;t.value=e.prop(t,"value"),n.box.removeClass("placeholder-visible"),clearTimeout(o),e(t).unbind(".placeholderremove")},"mousedown.placeholderremove drag.placeholderremove select.placeholderremove":function(e){u(t),clearTimeout(o),o=setTimeout(function(){u(t)},9)},"blur.placeholderremove":function(){clearTimeout(o),e(t).unbind(".placeholderremove")}});return}t.value=r}else if(!r&&s){e(t).off(".placeholderremove").on({"keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove":function(r){if(!(!r||r.keyCode!=17&&r.keyCode!=16))return;n.box.removeClass("placeholder-visible"),e(t).unbind(".placeholderremove")},"blur.placeholderremove":function(){e(t).unbind(".placeholderremove")}});return}n.box.removeClass("placeholder-visible")},f=function(t,n,r){r===!1&&(r=e.prop(t,"placeholder")),!i&&t.type!="password"&&(t.value=r),n.box.addClass("placeholder-visible")},l=function(t,n,r,s,o){if(!s){s=e.data(t,"placeHolder");if(!s)return}e(t).unbind(".placeholderremove");if(o=="focus"||!o&&e(t).is(":focus")){(t.type=="password"||i||e(t).hasClass("placeholder-visible"))&&a(t,s,"",!0);return}n===!1&&(n=e.prop(t,"value"));if(n){a(t,s,n);return}r===!1&&(r=e.attr(t,"placeholder")||""),r&&!n?f(t,s,r):a(t,s,n)},c=function(t){t=e(t);var n=t.prop("id"),r=!!t.prop("title")||!!t.attr("aria-labelledby");return!r&&n&&(r=!!e('label[for="'+n+'"]',t[0].form)[0]),r||(n||(n=e.webshims.getID(t)),r=!!e("label #"+n)[0]),e(r?'<span class="placeholder-text"></span>':'<label for="'+n+'" class="placeholder-text"></label>')},h=function(){var r=/\n|\r|\f|\t/g,o={text:1,search:1,url:1,email:1,password:1,tel:1,number:1};return{create:function(t){var r=e.data(t,"placeHolder"),o,u;if(r)return r;r=e.data(t,"placeHolder",{}),e(t).on("focus.placeholder blur.placeholder",function(e){l(this,!1,!1,r,e.type),r.box[e.type=="focus"?"addClass":"removeClass"]("placeholder-focused")}),(o=e.prop(t,"form"))&&e(o).on("reset.placeholder",function(e){setTimeout(function(){l(t,!1,!1,r,e.type)},0)});if(t.type=="password"||i)r.text=c(t),s||e(t).is(".responsive-width")||(t.currentStyle||{width:""}).width.indexOf("%")!=-1?(u=!0,r.box=r.text):r.box=e(t).wrap('<span class="placeholder-box placeholder-box-'+(t.nodeName||"").toLowerCase()+" placeholder-box-"+e.css(t,"float")+'" />').parent(),r.text.insertAfter(t).on("mousedown.placeholder",function(){l(this,!1,!1,r,"focus");try{setTimeout(function(){t.focus()},0)}catch(e){}return!1}),e.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(n,i){var s=e.css(t,i);r.text.css(i)!=s&&r.text.css(i,s)}),e.each(["Left","Top"],function(n,i){var s=(parseInt(e.css(t,"padding"+i),10)||0)+Math.max(parseInt(e.css(t,"margin"+i),10)||0,0)+(parseInt(e.css(t,"border"+i+"Width"),10)||0);r.text.css("padding"+i,s)}),e(t).on("updateshadowdom",function(){var n,i;((i=t.offsetWidth)||(n=t.offsetHeight))&&r.text.css({width:i,height:n}).css(e(t).position())}).triggerHandler("updateshadowdom");else{var f=function(n){e(t).hasClass("placeholder-visible")&&(a(t,r,""),n&&n.type=="submit"&&setTimeout(function(){n.isDefaultPrevented()&&l(t,!1,!1,r)},9))};e(n).on("beforeunload",f),r.box=e(t),o&&e(o).submit(f)}return r},update:function(n,r){var i=(e.attr(n,"type")||e.prop(n,"type")||"").toLowerCase();if(!o[i]&&!e.nodeName(n,"textarea")){t.error('placeholder not allowed on input[type="'+i+'"]'),i=="date"&&t.error('but you can use data-placeholder for input[type="date"]');return}var s=h.create(n);s.text&&s.text.text(r),l(n,!1,r,s)}}}();e.webshims.publicMethods={pHolder:h},o.forEach(function(e){var n=t.defineNodeNameProperty(e,"placeholder",{attr:{set:function(e){var n=this;r?(t.data(n,"textareaPlaceholder",e),n.placeholder=""):t.contentAttr(n,"placeholder",e),h.update(n,e)},get:function(){var e=r?t.data(this,"textareaPlaceholder"):"";return e||t.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})}),o.forEach(function(n){var i={},s;["attr","prop"].forEach(function(n){i[n]={set:function(i){var o=this,u;r&&(u=t.data(o,"textareaPlaceholder")),u||(u=t.contentAttr(o,"placeholder")),e.removeData(o,"cachedValidity");var a=s[n]._supset.call(o,i);return u&&"value"in o&&l(o,i,u),a},get:function(){var t=this;return e(t).hasClass("placeholder-visible")?"":s[n]._supget.call(t)}}}),s=t.defineNodeNameProperty(n,"value",i)})})(),function(){var n=r;if("value"in r.createElement("output"))return;t.defineNodeNameProperty("output","value",{prop:{set:function(t){var n=e.data(this,"outputShim");n||(n=i(this)),n(t)},get:function(){return t.contentAttr(this,"value")||e(this).text()||""}}}),t.onNodeNamesPropertyModify("input","value",function(t,n,r){if(r=="removeAttr")return;var i=e.data(this,"outputShim");i&&i(t)});var i=function(i){if(i.getAttribute("aria-live"))return;i=e(i);var s=(i.text()||"").trim(),o=i.attr("id"),u=i.attr("for"),a=e('<input class="output-shim" type="text" disabled name="'+(i.attr("name")||"")+'" value="'+s+'" style="display: none !important;" />').insertAfter(i),f=a[0].form||n,l=function(e){a[0].value=e,e=a[0].value,i.text(e),t.contentAttr(i[0],"value",e)};return i[0].defaultValue=s,t.contentAttr(i[0],"value",s),i.attr({"aria-live":"polite"}),o&&(a.attr("id",o),i.attr("aria-labelledby",t.getID(e('label[for="'+o+'"]',f)))),u&&(o=t.getID(i),u.split(" ").forEach(function(e){e=r.getElementById(e),e&&e.setAttribute("aria-controls",o)})),i.data("outputShim",l),a.data("outputShim",l),l};t.addReady(function(t,n){e("output",t).add(n.filter("output")).each(function(){i(this)})}),function(){var r={updateInput:1,input:1},i={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},s=function(e){var n,i=e.prop("value"),s=function(n){if(!e)return;var s=e.prop("value");s!==i&&(i=s,(!n||!r[n.type])&&t.triggerInlineForm&&t.triggerInlineForm(e[0],"input"))},o,u=function(){clearTimeout(o),o=setTimeout(s,9)},a=function(){e.unbind("focusout",a).unbind("keyup keypress keydown paste cut",u).unbind("input change updateInput",s),clearInterval(n),setTimeout(function(){s(),e=null},1)};clearInterval(n),n=setInterval(s,99),u(),e.on({"keyup keypress keydown paste cut":u,focusout:a,"input updateInput change":s})};e.event.customEvent&&(e.event.customEvent.updateInput=!0),e(n).on("focusin",function(t){t.target&&t.target.type&&!t.target.readOnly&&!t.target.disabled&&(t.target.nodeName||"").toLowerCase()=="input"&&!i[t.target.type]&&s(e(t.target))})}()}()}),jQuery.webshims.register("form-message",function(e,t,n,r,i,s){"use strict";var o=t.validityMessages,u=s.overrideMessages||s.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),["select","radio"].forEach(function(e){o.en.valueMissing[e]="Please select an option."}),["date","time","datetime-local"].forEach(function(e){o.en.rangeUnderflow[e]="Value must be at or after {%min}."}),["date","time","datetime-local"].forEach(function(e){o.en.rangeOverflow[e]="Value must be at or before {%max}."}),o["en-US"]=o["en-US"]||o.en,o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},o.de||{}),["select","radio"].forEach(function(e){o.de.valueMissing[e]="Bitte w\u00e4hlen Sie eine Option aus"}),["date","time","datetime-local"].forEach(function(e){o.de.rangeUnderflow[e]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."}),["date","time","datetime-local"].forEach(function(e){o.de.rangeOverflow[e]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var a=o[""];t.createValidationMessage=function(n,r){var i=a[r];return i&&typeof i!="string"&&(i=i[e.prop(n,"type")]||i[(n.nodeName||"").toLowerCase()]||i.defaultMessage),i&&["value","min","max","title","maxlength","label"].forEach(function(s){if(i.indexOf("{%"+s)===-1)return;var o=(s=="label"?e.trim(e('label[for="'+n.id+'"]',n.form).text()).replace(/\*$|:$/,""):e.attr(n,s))||"";r=="patternMismatch"&&s=="title"&&!o&&t.error("no title for patternMismatch provided. Always add a title attribute."),i=i.replace("{%"+s+"}",o),"value"==s&&(i=i.replace("{%valueLen}",o.length))}),i||""},(t.bugs.validationMessage||!Modernizr.formvalidation||t.bugs.bustedValidity)&&u.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){a=e}}),u.forEach(function(n){t.defineNodeNamesProperty(["fieldset","output","button"],n,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(r){var i=t.defineNodeNameProperty(r,n,{prop:{get:function(){var n=this,r="";if(!e.prop(n,"willValidate"))return r;var s=e.prop(n,"validity")||{valid:1};if(s.valid)return r;r=t.getContentValidationMessage(n,s);if(r)return r;if(s.customError&&n.nodeName){r=Modernizr.formvalidation&&!t.bugs.bustedValidity&&i.prop._supget?i.prop._supget.call(n):t.data(n,"customvalidationMessage");if(r)return r}return e.each(s,function(e,i){if(e=="valid"||!i)return;r=t.createValidationMessage(n,e);if(r)return!1}),r||""},writeable:!1}})})})});