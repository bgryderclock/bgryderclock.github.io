(function(){function l(f){window.__ATA_DEBUG&&"undefined"!==typeof console&&console.info&&console.info(new Date," -> ",f.replace("http","htt_p"))}function p(f){var d=this,c="section_id tz fl click3rd slot_id ref pos".split(" ");this.i={};this.o=!1;this.a=f;this.f=new q(this);this.H=function(d){return this.i[d]};this.J=function(){if(!d.o){d.o=!0;var a=document.createElement("iframe");a.style.cssText="position:absolute;left:-1000px;top:-1000px;border:0 solid;width:0;height:0;";a.width=a.height=0;a.name=
v;a.src=r+"#"+location.protocol+"//"+location.host;document.body.appendChild(a);d.K=d.a.onPassbackReceived=function(b){var a,c=b.id,c=c&&c.replace("fif_slot_"+s+"_","");if((a=d.H(c))&&a.c&&a.c.length){try{b.id=b.name="dead_"+b.name;b.style.cssText="border:none;position:absolute;width:0;height:0;left:-10000px;top:-10000px;";var g=b.contentWindow;g.name=b.id;g&&g.document&&"complete"===g.document.readyState&&b.parentNode&&b.parentNode.removeChild(b)}catch(f){}b=a.c.shift();a.g&&((new Image).src=a.g);
b.noad_url&&((new Image).src=b.noad_url);a={b:c,h:a.h,data:b.data,type:a.type,width:a.width,height:a.height,c:a.c,g:b.passback_url};d.i[a.b]=a;d.f.p(d.e(),a)}};d.f.r(function(b){if(b.origin===h&&b.source){b=b.source;for(var a=b.parent;a!==window&&a!==window.top;)b=a,a=a.parent;if(b&&a===window)try{d.K(b.frameElement)}catch(c){l("No access to iframe from postMessage "+c)}}})}};this.u=this.a.displayAd=function(a,b){l('<span class="blue">displayAd is called for ID:</span> '+a);var c=d.a.ids;c&&c[a]&&
delete c[a];var e,g,f,h,t,k,m;g=document.getElementById(a);h=parseInt(g.style.width,10);t=parseInt(g.style.height,10);f=g.getAttribute("data-type")||"adj";m=d.a.customParams;c=w;if(b)for(e in k={},b)b.hasOwnProperty(e)&&(k[e]=b[e]);if(m)for(e in k||(k={}),m)m.hasOwnProperty(e)&&!k.hasOwnProperty(e)&&(k[e]=m[e]);e={b:a,h:g.getAttribute("data-section"),v:g.getAttribute("data-forcedurl"),k:k,type:f,width:h,height:t};c=e.v||d.w(c,e);l("Ad server full URL: "+c);d.O(e,c)};this.s=function(a,b){var d,c=this.P,
g=this;d=(x+"_"+a.b).replace(/[^a-zA-Z0-9_\$]/g,"_");window[d]=function(b){try{delete window[d]}catch(f){window[d]=void 0}var h=document.getElementById("slots_script_"+a.b);h&&h.parentNode.removeChild(h);c.call(g,b,a)};return b+((-1<b.indexOf("?")?"&":"?")+"callbackPubmine="+d)};this.O=function(a,b){var c,e,g;b=d.s(a,b);c="slots_script_"+a.b;d.e()?(c='<script type="text/javascript" src="{{url}}" id="{{id}}">\x3c/script>'.replace("{{url}}",b).replace("{{id}}",c),document.write(c)):(e=document.createElement("script"),
e.async=!0,e.type="text/javascript",e.src=b,e.id=c,g=document.getElementsByTagName("script")[0],d.m()?setTimeout(function(){g.parentNode.insertBefore(e,g)},0):g.parentNode.insertBefore(e,g))};this.P=function(a,b){var c=b.k;a&&a.data?(b.data=a.data,b.g=a.passback_url,b.c=a.subs,d.i[b.b]=b,b.c&&b.c.length&&d.J(),c&&"function"===typeof c.renderStartCallback&&c.renderStartCallback(b),d.f.p(d.e(),b)):c&&"function"===typeof c.noContentCallback&&c.noContentCallback(b,a)};this.t=function(){var a,b,d;b=this.a.ids;
if(null!==b&&"object"===typeof b){try{d=this.a.customParams||{}}catch(c){return}for(a in b)b.hasOwnProperty(a)&&this.u(a,d)}};this.w=function(a,b){b=b||{};var c,e,g,f;c="https:"===document.location.protocol;g=[];f=this.F();e=a.replace(/^http:|^https:|\?$/im,"");e=(c?"https:":"http:")+e+b.type+"/";c="";top!==self&&(c=encodeURIComponent(document.referrer));c=["tz="+(new Date).getTimezoneOffset(),"fl="+d.B(),"ref="+c||"","pos="+d.I(b.b)||"","sfv=2"];e+=b.h+"/"+b.width+"/"+b.height+"/";g=g.concat(c);
"undefined"!=typeof d.a.providerData&&d.a.providerData.length&&d.j({headerbidding:JSON.stringify(d.a.providerData)},g);d.j(b.k,g);"undefined"!==typeof d.a.click3rd&&g.push("click3rd="+encodeURIComponent(d.a.click3rd));!1!==f&&g.push("lang="+encodeURIComponent(f));return e+"?"+g.join("&")+"&ord="+Math.floor(1E13*Math.random())};this.j=function(a,b){var f,e;if("undefined"!==typeof a)a:for(f in a){e=0;for(var g=c.length;e<g;e++)if(c[e]+""===f+"")continue a;if(a.hasOwnProperty(f)){e=a[f];if(d.isArray(e)){for(g=
0;g<e.length;g++)e[g]=encodeURIComponent(e[g]);b.push(f+"="+e.join("|"));continue a}b.push(f+"="+encodeURIComponent(e))}}};this.e=function(){return!0===d.a.isSync};this.t()}function q(f){var d=this;f instanceof p&&(this.q=f);this.p=function(c,a){l('<span class="green">Slot rendering method is invoked for ID:: '+a.b+" with "+a.type+" content</span>");c?this.N(a):this.M(a)};this.N=function(c){"adj"===c.type?document.write('<script type="text/javascript">'+c.data+"\x3c/script>"):document.write(c.data)};
this.M=function(c){var a,b,f;if(a=document.getElementById(c.b)){b=d.L(c);b.src="javascript:\"<html><body style='background:transparent;margin:0%;'></body></html>\"";a.appendChild(b);switch(c.type){case "adj":f='<html><body style=\'background:transparent;margin:0%;\'><script type="text/javascript">var inDapIF=true;\x3c/script><script type="text/javascript">'+c.data+"\x3c/script></body></html>";break;case "adi":f=c.data}c=d.l();0!==d.D()||c?(b=window.frames[b.name],b.contents=f,b.location.replace(d.A())):
(b=b.contentWindow?b.contentWindow.document:b.contentDocument,-1!==navigator.userAgent.indexOf("Firefox")&&b.open("text/html","replace"),b.write(f),d.m()||b.close())}else l("Not ready to render: "+c.b)};this.L=function(c){var a=document.createElement("iframe"),b="border:none;",f=d.C(c.b);d.n(c.width)&&(b+="width:"+c.width+"px;",a.width=c.width);d.n(c.height)&&(b+="height:"+c.height+"px;",a.height=c.height);a.setAttribute("style",b);a.setAttribute("frameBorder","0");a.setAttribute("scrolling","no");
a.name=f;a.id=f;return a};this.A=function(){return d.l()&&!d.q.e()?"javascript:document.write(window.contents);":"javascript:window.contents"};this.C=function(c){return"fif_slot_"+s+"_"+c};this.r=function(c){var a=window;a.addEventListener?a.addEventListener("message",c,void 0):a.attachEvent("onmessage",function(){return c.call(a,window.event)})}}function u(){var f=this;this.B=function(){var d=0,c;if(f.d(navigator.plugins)&&"object"===typeof navigator.plugins["Shockwave Flash"])!(c=navigator.plugins["Shockwave Flash"].description)||
f.d(navigator.mimeTypes)&&navigator.mimeTypes["application/x-shockwave-flash"]&&!navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin||(c=c.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),d=parseInt(c.replace(/^(.*)\..*$/,"$1"),10));else if(f.d(window.ActiveXObject))try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");a&&(c=a.GetVariable("$version"))&&(c=c.split(" ")[1].split(","),d=parseInt(c[0],10))}catch(b){}return d};this.d=function(d){return"undefined"!==typeof d};this.n=function(d){return f.d(d)&&
null!==d&&""!==d+""};this.D=function(){var d=navigator.userAgent,c=d.indexOf("MSIE ");return-1===c?0:parseFloat(d.substring(c+5,d.indexOf(";",c)))};this.l=function(){var d=navigator.userAgent;return null!==d.match(/\d\sNavigator\/\d/)||null!==d.match(/\d\sNetscape\/\d/)};this.m=function(){return-1!==navigator.userAgent.indexOf("Opera")};this.isArray=function(d){return"[object Array]"===Object.prototype.toString.call(d)};this.G=function(){var d=0,c=0;"number"===typeof window.innerHeight?(d=window.innerHeight,
c=window.innerWidth):document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)&&(d=document.documentElement.clientHeight,c=document.documentElement.clientWidth);return{width:c,height:d}};this.I=function(d){d=document.getElementById(d);for(var c=f.G(),a=d?d.offsetTop:0;d&&null!==d.offsetParent&&(d=d.offsetParent,a+=d.offsetTop,"BODY"!==d.tagName););(a||0===a)&&c.height?a>c.height?a="btf":a="atf":a="";return a};this.F=function(){for(var d=document.getElementsByTagName("meta"),
c,a=!1,b=0;b<d.length;b++)if(c=!1,d[b]&&(c=d[b].getAttribute("http-equiv")||d[b].httpEquiv),c&&"content-language"===c.toLowerCase()){a=(a=d[b].getAttribute("content")||d[b].content)||!1;break}return a}}var w="//s.pubmine.com/",n=window.__ATA,s=n.slotPrefix,x="automattic_jsonp_handler",v=n.passbackReceiver,r=n.passbackSrc,h=(r.match(/^(?:[a-z]+\:)?(?:\/\/)?[a-zA-Z0-9_\-\.]+/)||[""])[0];h.search(/https?\:\/\//)&&(h=location.protocol+h);p.prototype=new u;q.prototype=new u;new p(n)})();