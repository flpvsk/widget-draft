!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){function t(){}function e(t){return t=+t,t!==t?t=0:0!==t&&t!==1/0&&t!==-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t))),t}function r(t){var e=typeof t;return null===t||"undefined"===e||"boolean"===e||"number"===e||"string"===e}function n(t){var e,n,o;if(r(t))return t;if(n=t.valueOf,p(n)&&(e=n.call(t),r(e)))return e;if(o=t.toString,p(o)&&(e=o.call(t),r(e)))return e;throw new TypeError}var o=Function.prototype.call,i=Array.prototype,a=Object.prototype,l=i.slice,u=Array.prototype.splice,c=(Array.prototype.push,Array.prototype.unshift),s=a.toString,p=function(t){return"[object Function]"===a.toString.call(t)},f=function(t){return"[object RegExp]"===a.toString.call(t)},h=function(t){return"[object Array]"===s.call(t)},y=function(t){var e=s.call(t),r="[object Arguments]"===e;return r||(r=!h(e)&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&p(t.callee)),r};Function.prototype.bind||(Function.prototype.bind=function(e){var r=this;if(!p(r))throw new TypeError("Function.prototype.bind called on incompatible "+r);for(var n=l.call(arguments,1),o=function(){if(this instanceof c){var t=r.apply(this,n.concat(l.call(arguments)));return Object(t)===t?t:this}return r.apply(e,n.concat(l.call(arguments)))},i=Math.max(0,r.length-n.length),a=[],u=0;i>u;u++)a.push("$"+u);var c=Function("binder","return function ("+a.join(",")+"){return binder.apply(this,arguments)}")(o);return r.prototype&&(t.prototype=r.prototype,c.prototype=new t,t.prototype=null),c});var g,m,d,v,b,w=o.bind(a.hasOwnProperty);(b=w(a,"__defineGetter__"))&&(g=o.bind(a.__defineGetter__),m=o.bind(a.__defineSetter__),d=o.bind(a.__lookupGetter__),v=o.bind(a.__lookupSetter__));var S=function(){var t={};return Array.prototype.splice.call(t,0,0,1),1===t.length}(),E=0===[1].splice(0).length,x=function(){var t=[1,2],e=t.splice();return 2===t.length&&h(e)&&0===e.length}();x&&(Array.prototype.splice=function(){return 0===arguments.length?[]:u.apply(this,arguments)}),E&&S||(Array.prototype.splice=function(t,r){if(0===arguments.length)return[];var n=arguments;return this.length=Math.max(e(this.length),0),arguments.length>0&&"number"!=typeof r&&(n=l.call(arguments),n.length<2?n.push(e(r)):n[1]=e(r)),u.apply(this,n)}),1!==[].unshift(0)&&(Array.prototype.unshift=function(){return c.apply(this,arguments),this.length}),Array.isArray||(Array.isArray=h);var A=Object("a"),j="a"!==A[0]||!(0 in A),O=function(t){var e=!0,r=!0;return t&&(t.call("foo",function(t,r,n){"object"!=typeof n&&(e=!1)}),t.call([1],function(){"use strict";r="string"==typeof this},"x")),!!t&&e&&r};Array.prototype.forEach&&O(Array.prototype.forEach)||(Array.prototype.forEach=function(t){var e=K(this),r=j&&"[object String]"===s.call(this)?this.split(""):e,n=arguments[1],o=-1,i=r.length>>>0;if(!p(t))throw new TypeError;for(;++o<i;)o in r&&t.call(n,r[o],o,e)}),Array.prototype.map&&O(Array.prototype.map)||(Array.prototype.map=function(t){var e=K(this),r=j&&"[object String]"===s.call(this)?this.split(""):e,n=r.length>>>0,o=Array(n),i=arguments[1];if(!p(t))throw new TypeError(t+" is not a function");for(var a=0;n>a;a++)a in r&&(o[a]=t.call(i,r[a],a,e));return o}),Array.prototype.filter&&O(Array.prototype.filter)||(Array.prototype.filter=function(t){var e,r=K(this),n=j&&"[object String]"===s.call(this)?this.split(""):r,o=n.length>>>0,i=[],a=arguments[1];if(!p(t))throw new TypeError(t+" is not a function");for(var l=0;o>l;l++)l in n&&(e=n[l],t.call(a,e,l,r)&&i.push(e));return i}),Array.prototype.every&&O(Array.prototype.every)||(Array.prototype.every=function(t){var e=K(this),r=j&&"[object String]"===s.call(this)?this.split(""):e,n=r.length>>>0,o=arguments[1];if(!p(t))throw new TypeError(t+" is not a function");for(var i=0;n>i;i++)if(i in r&&!t.call(o,r[i],i,e))return!1;return!0}),Array.prototype.some&&O(Array.prototype.some)||(Array.prototype.some=function(t){var e=K(this),r=j&&"[object String]"===s.call(this)?this.split(""):e,n=r.length>>>0,o=arguments[1];if(!p(t))throw new TypeError(t+" is not a function");for(var i=0;n>i;i++)if(i in r&&t.call(o,r[i],i,e))return!0;return!1});var T=!1;Array.prototype.reduce&&(T="object"==typeof Array.prototype.reduce.call("es5",function(t,e,r,n){return n})),Array.prototype.reduce&&T||(Array.prototype.reduce=function(t){var e=K(this),r=j&&"[object String]"===s.call(this)?this.split(""):e,n=r.length>>>0;if(!p(t))throw new TypeError(t+" is not a function");if(!n&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var o,i=0;if(arguments.length>=2)o=arguments[1];else for(;;){if(i in r){o=r[i++];break}if(++i>=n)throw new TypeError("reduce of empty array with no initial value")}for(;n>i;i++)i in r&&(o=t.call(void 0,o,r[i],i,e));return o});var N=!1;Array.prototype.reduceRight&&(N="object"==typeof Array.prototype.reduceRight.call("es5",function(t,e,r,n){return n})),Array.prototype.reduceRight&&N||(Array.prototype.reduceRight=function(t){var e=K(this),r=j&&"[object String]"===s.call(this)?this.split(""):e,n=r.length>>>0;if(!p(t))throw new TypeError(t+" is not a function");if(!n&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var o,i=n-1;if(arguments.length>=2)o=arguments[1];else for(;;){if(i in r){o=r[i--];break}if(--i<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>i)return o;do i in r&&(o=t.call(void 0,o,r[i],i,e));while(i--);return o}),Array.prototype.indexOf&&-1===[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(t){var r=j&&"[object String]"===s.call(this)?this.split(""):K(this),n=r.length>>>0;if(!n)return-1;var o=0;for(arguments.length>1&&(o=e(arguments[1])),o=o>=0?o:Math.max(0,n+o);n>o;o++)if(o in r&&r[o]===t)return o;return-1}),Array.prototype.lastIndexOf&&-1===[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(t){var r=j&&"[object String]"===s.call(this)?this.split(""):K(this),n=r.length>>>0;if(!n)return-1;var o=n-1;for(arguments.length>1&&(o=Math.min(o,e(arguments[1]))),o=o>=0?o:n-Math.abs(o);o>=0;o--)if(o in r&&t===r[o])return o;return-1});var D=Object.keys&&function(){return 2===Object.keys(arguments).length}(1,2);if(Object.keys){if(!D){var F=Object.keys;Object.keys=function(t){return F(y(t)?Array.prototype.slice.call(t):t)}}}else{var M=!{toString:null}.propertyIsEnumerable("toString"),I=function(){}.propertyIsEnumerable("prototype"),_=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],C=_.length;Object.keys=function(t){var e=p(t),r=y(t),n=null!==t&&"object"==typeof t,o=n&&"[object String]"===s.call(t);if(!n&&!e&&!r)throw new TypeError("Object.keys called on a non-object");var i=[],a=I&&e;if(o||r)for(var l=0;l<t.length;++l)i.push(String(l));else for(var u in t)a&&"prototype"===u||!w(t,u)||i.push(String(u));if(M)for(var c=t.constructor,f=c&&c.prototype===t,h=0;C>h;h++){var g=_[h];f&&"constructor"===g||!w(t,g)||i.push(g)}return i}}var k=-621987552e5,R="-000001";Date.prototype.toISOString&&-1!==new Date(k).toISOString().indexOf(R)||(Date.prototype.toISOString=function(){var t,e,r,n,o;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(n=this.getUTCFullYear(),o=this.getUTCMonth(),n+=Math.floor(o/12),o=(o%12+12)%12,t=[o+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],n=(0>n?"-":n>9999?"+":"")+("00000"+Math.abs(n)).slice(n>=0&&9999>=n?-4:-6),e=t.length;e--;)r=t[e],10>r&&(t[e]="0"+r);return n+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"});var U=!1;try{U=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(k).toJSON().indexOf(R)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(Z){}U||(Date.prototype.toJSON=function(){var t,e=Object(this),r=n(e);if("number"==typeof r&&!isFinite(r))return null;if(t=e.toISOString,"function"!=typeof t)throw new TypeError("toISOString property is not callable");return t.call(e)});var $=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),J=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z")),H=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));(!Date.parse||H||J||!$)&&(Date=function(t){function e(r,n,o,i,a,l,u){var c=arguments.length;if(this instanceof t){var s=1===c&&String(r)===r?new t(e.parse(r)):c>=7?new t(r,n,o,i,a,l,u):c>=6?new t(r,n,o,i,a,l):c>=5?new t(r,n,o,i,a):c>=4?new t(r,n,o,i):c>=3?new t(r,n,o):c>=2?new t(r,n):c>=1?new t(r):new t;return s.constructor=e,s}return t.apply(this,arguments)}function r(t,e){var r=e>1?1:0;return i[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)}function n(e){return Number(new t(1970,0,1,0,0,0,e))}var o=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),i=[0,31,59,90,120,151,181,212,243,273,304,334,365];for(var a in t)e[a]=t[a];return e.now=t.now,e.UTC=t.UTC,e.prototype=t.prototype,e.prototype.constructor=e,e.parse=function(e){var i=o.exec(e);if(i){var a,l=Number(i[1]),u=Number(i[2]||1)-1,c=Number(i[3]||1)-1,s=Number(i[4]||0),p=Number(i[5]||0),f=Number(i[6]||0),h=Math.floor(1e3*Number(i[7]||0)),y=Boolean(i[4]&&!i[8]),g="-"===i[9]?1:-1,m=Number(i[10]||0),d=Number(i[11]||0);return(p>0||f>0||h>0?24:25)>s&&60>p&&60>f&&1e3>h&&u>-1&&12>u&&24>m&&60>d&&c>-1&&c<r(l,u+1)-r(l,u)&&(a=60*(24*(r(l,u)+c)+s+m*g),a=1e3*(60*(a+p+d*g)+f)+h,y&&(a=n(a)),a>=-864e13&&864e13>=a)?a:0/0}return t.parse.apply(this,arguments)},e}(Date)),Date.now||(Date.now=function(){return(new Date).getTime()}),Number.prototype.toFixed&&"0.000"===8e-5.toFixed(3)&&"0"!==.9.toFixed(0)&&"1.25"===1.255.toFixed(2)&&"1000000000000000128"===0xde0b6b3a7640080.toFixed(0)||!function(){function t(t,e){for(var r=-1;++r<a;)e+=t*l[r],l[r]=e%i,e=Math.floor(e/i)}function e(t){for(var e=a,r=0;--e>=0;)r+=l[e],l[e]=Math.floor(r/t),r=r%t*i}function r(){for(var t=a,e="";--t>=0;)if(""!==e||0===t||0!==l[t]){var r=String(l[t]);""===e?e=r:e+="0000000".slice(0,7-r.length)+r}return e}function n(t,e,r){return 0===e?r:e%2===1?n(t,e-1,r*t):n(t*t,e/2,r)}function o(t){for(var e=0;t>=4096;)e+=12,t/=4096;for(;t>=2;)e+=1,t/=2;return e}var i,a,l;i=1e7,a=6,l=[0,0,0,0,0,0],Number.prototype.toFixed=function(i){var a,l,u,c,s,p,f,h;if(a=Number(i),a=a!==a?0:Math.floor(a),0>a||a>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(l=Number(this),l!==l)return"NaN";if(-1e21>=l||l>=1e21)return String(l);if(u="",0>l&&(u="-",l=-l),c="0",l>1e-21)if(s=o(l*n(2,69,1))-69,p=0>s?l*n(2,-s,1):l/n(2,s,1),p*=4503599627370496,s=52-s,s>0){for(t(0,p),f=a;f>=7;)t(1e7,0),f-=7;for(t(n(10,f,1),0),f=s-1;f>=23;)e(1<<23),f-=23;e(1<<f),t(1,1),e(2),c=r()}else t(0,p),t(1<<-s,0),c=r()+"0.00000000000000000000".slice(2,2+a);return a>0?(h=c.length,c=a>=h?u+"0.0000000000000000000".slice(0,a-h+2)+c:u+c.slice(0,h-a)+"."+c.slice(h-a)):c=u+c,c}}();var B=String.prototype.split;2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var t=void 0===/()??/.exec("")[1];String.prototype.split=function(e,r){var n=this;if(void 0===e&&0===r)return[];if("[object RegExp]"!==s.call(e))return B.call(this,e,r);var o,i,a,l,u=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":""),p=0;for(e=new RegExp(e.source,c+"g"),n+="",t||(o=new RegExp("^"+e.source+"$(?!\\s)",c)),r=void 0===r?-1>>>0:Q(r);(i=e.exec(n))&&(a=i.index+i[0].length,!(a>p&&(u.push(n.slice(p,i.index)),!t&&i.length>1&&i[0].replace(o,function(){for(var t=1;t<arguments.length-2;t++)void 0===arguments[t]&&(i[t]=void 0)}),i.length>1&&i.index<n.length&&Array.prototype.push.apply(u,i.slice(1)),l=i[0].length,p=a,u.length>=r)));)e.lastIndex===i.index&&e.lastIndex++;return p===n.length?(l||!e.test(""))&&u.push(""):u.push(n.slice(p)),u.length>r?u.slice(0,r):u}}():"0".split(void 0,0).length&&(String.prototype.split=function(t,e){return void 0===t&&0===e?[]:B.call(this,t,e)});var G=String.prototype.replace,L=function(){var t=[];return"x".replace(/x(.)?/g,function(e,r){t.push(r)}),1===t.length&&"undefined"==typeof t[0]}();if(L||(String.prototype.replace=function(t,e){var r=p(e),n=f(t)&&/\)[*?]/.test(t.source);if(r&&n){var o=function(r){var n=arguments.length,o=t.lastIndex;t.lastIndex=0;var i=t.exec(r);return t.lastIndex=o,i.push(arguments[n-2],arguments[n-1]),e.apply(this,i)};return G.call(this,t,o)}return G.call(this,t,e)}),"".substr&&"b"!=="0b".substr(-1)){var P=String.prototype.substr;String.prototype.substr=function(t,e){return P.call(this,0>t&&(t=this.length+t)<0?0:t,e)}}var z="	\n\f\r   ᠎             　\u2028\u2029﻿",q="​";if(!String.prototype.trim||z.trim()||!q.trim()){z="["+z+"]";var X=new RegExp("^"+z+z+"*"),Y=new RegExp(z+z+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(X,"").replace(Y,"")}}(8!==parseInt(z+"08")||22!==parseInt(z+"0x16"))&&(parseInt=function(t){var e=/^0[xX]/;return function(r,n){return r=String(r).trim(),Number(n)||(n=e.test(r)?16:10),t(r,n)}}(parseInt));var K=function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return Object(t)},Q=function(t){return t>>>0}}),function(t,e){function r(t,e){var r=t.createElement("p"),n=t.getElementsByTagName("head")[0]||t.documentElement;return r.innerHTML="x<style>"+e+"</style>",n.insertBefore(r.lastChild,n.firstChild)}function n(){var t=b.elements;return"string"==typeof t?t.split(" "):t}function o(t,e){var r=b.elements;"string"!=typeof r&&(r=r.join(" ")),"string"!=typeof t&&(t=t.join(" ")),b.elements=r+" "+t,c(e)}function i(t){var e=v[t[m]];return e||(e={},d++,t[m]=d,v[d]=e),e}function a(t,r,n){if(r||(r=e),p)return r.createElement(t);n||(n=i(r));var o;return o=n.cache[t]?n.cache[t].cloneNode():g.test(t)?(n.cache[t]=n.createElem(t)).cloneNode():n.createElem(t),!o.canHaveChildren||y.test(t)||o.tagUrn?o:n.frag.appendChild(o)}function l(t,r){if(t||(t=e),p)return t.createDocumentFragment();r=r||i(t);for(var o=r.frag.cloneNode(),a=0,l=n(),u=l.length;u>a;a++)o.createElement(l[a]);return o}function u(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(r){return b.shivMethods?a(r,t,e):e.createElem(r)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(b,e.frag)}function c(t){t||(t=e);var n=i(t);return!b.shivCSS||s||n.hasCSS||(n.hasCSS=!!r(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),p||u(t,n),t}var s,p,f="3.7.2",h=t.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",d=0,v={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",s="hidden"in t,p=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(r){s=!0,p=!0}}();var b={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:h.shivCSS!==!1,supportsUnknownElements:p,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:l,addElements:o};t.html5=b,c(e)}(this,document),function(t){"use strict";for(var e,r,n={},o=function(){},i="memory".split(","),a="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");e=i.pop();)t[e]=t[e]||n;for(;r=a.pop();)t[r]=t[r]||o}(this.console=this.console||{});