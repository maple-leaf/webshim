jQuery.webshims.ready("form-core",function(d,e,m,h){var c=e.validityMessages,j=d.support;c.en=c.en||c["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",
stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};c["en-US"]=c["en-US"]||c.en;c[""]=c[""]||c["en-US"];c.de=c.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",
date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",
patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var k=c[""];d(h).bind("htmlExtLangChange",function(){e.activeLang(c,"form-message",function(f){k=f})});e.createValidationMessage=function(f,i){var a=k[i];if(a&&typeof a!=="string")a=a[(f.getAttribute("type")||"").toLowerCase()]||a.defaultMessage;a&&["value","min","max","title","maxlength","label"].forEach(function(b){if(a.indexOf("{%"+b)!==-1){var g=(b=="label"?d.trim(d('label[for="'+
f.id+'"]',f.form).text()).replace(/\*$|:$/,""):d.attr(f,b))||"";a=a.replace("{%"+b+"}",g);if("value"==b)a=a.replace("{%valueLen}",g.length)}});return a||""};h=e.overrideValidationMessages||e.implement.customValidationMessage?["customValidationMessage"]:[];if(!m.noHTMLExtFixes&&!j.validationMessage||!j.validity)h.push("validationMessage");d.each(h,function(f,i){e.defineNodeNamesProperty(["input","select","textarea","fieldset","output"],i,{get:function(a){var b="";if(!d.attr(a,"willValidate"))return b;
var g=d.attr(a,"validity")||{valid:1};if(g.valid)return b;if(b=a.getAttribute("x-moz-errormessage")||a.getAttribute("data-errormessage")||"")return b;if(g.customError&&a.nodeName)if(b="validationMessage"in a?a.validationMessage:d.data(a,"customvalidationMessage"))return b;d.each(g,function(l,n){if(!(l=="valid"||!n))if(b=e.createValidationMessage(a,l))return false});return b||""},set:d.noop})})},true);