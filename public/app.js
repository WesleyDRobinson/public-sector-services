!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){(function(t){e.exports=function(){"use strict";var e=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},n=m,i=l,a=function(e){return c(l(e))},s=c,o=h,r=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function l(e){for(var t,n=[],i=0,a=0,s="";null!=(t=r.exec(e));){var o=t[0],l=t[1],c=t.index;if(s+=e.slice(a,c),a=c+o.length,l)s+=l[1];else{s&&(n.push(s),s="");var p=t[2],d=t[3],f=t[4],h=t[5],m=t[6],g=t[7],v="+"===m||"*"===m,y="?"===m||"*"===m,b=p||"/",w=f||h||(g?".*":"[^"+b+"]+?");n.push({name:d||i++,prefix:p||"",delimiter:b,optional:y,repeat:v,pattern:u(w)})}}return a<e.length&&(s+=e.substr(a)),s&&n.push(s),n}function c(t){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(n[i]=new RegExp("^"+t[i].pattern+"$"));return function(i){for(var a="",s=i||{},o=0;o<t.length;o++){var r=t[o];if("string"!=typeof r){var l,c=s[r.name];if(null==c){if(r.optional)continue;throw new TypeError('Expected "'+r.name+'" to be defined')}if(e(c)){if(!r.repeat)throw new TypeError('Expected "'+r.name+'" to not repeat, but received "'+c+'"');if(0===c.length){if(r.optional)continue;throw new TypeError('Expected "'+r.name+'" to not be empty')}for(var p=0;p<c.length;p++){if(l=encodeURIComponent(c[p]),!n[o].test(l))throw new TypeError('Expected all "'+r.name+'" to match "'+r.pattern+'", but received "'+l+'"');a+=(0===p?r.prefix:r.delimiter)+l}}else{if(l=encodeURIComponent(c),!n[o].test(l))throw new TypeError('Expected "'+r.name+'" to match "'+r.pattern+'", but received "'+l+'"');a+=r.prefix+l}}else a+=r}return a}}function p(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function d(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function h(e,t){for(var n=(t=t||{}).strict,i=!1!==t.end,a="",s=e[e.length-1],o="string"==typeof s&&/\/$/.test(s),r=0;r<e.length;r++){var l=e[r];if("string"==typeof l)a+=p(l);else{var c=p(l.prefix),u=l.pattern;l.repeat&&(u+="(?:"+c+u+")*"),u=l.optional?c?"(?:"+c+"("+u+"))?":"("+u+")?":c+"("+u+")",a+=u}}return n||(a=(o?a.slice(0,-2):a)+"(?:\\/(?=$))?"),a+=i?"$":n&&o?"":"(?=\\/|$)",new RegExp("^"+a,f(t))}function m(t,n,i){return e(n=n||[])?i||(i={}):(i=n,n=[]),t instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return d(e,t)}(t,n):e(t)?function(e,t,n){for(var i=[],a=0;a<e.length;a++)i.push(m(e[a],t,n).source);return d(new RegExp("(?:"+i.join("|")+")",f(n)),t)}(t,n,i):function(e,t,n){for(var i=l(e),a=h(i,n),s=0;s<i.length;s++)"string"!=typeof i[s]&&t.push(i[s]);return d(a,t)}(t,n,i)}n.parse=i,n.compile=a,n.tokensToFunction=s,n.tokensToRegExp=o;var g=P;P.default=P,P.Context=N,P.Route=O,P.sameOrigin=D;var v,y,b,w="undefined"!=typeof document,x="undefined"!=typeof window,C="undefined"!=typeof history,_=void 0!==t,k=w&&document.ontouchstart?"touchstart":"click",E=x&&!(!window.history.location&&!window.location),M=!0,T=!0,S="",L=!1,A=!1;function P(e,t){if("function"==typeof e)return P("*",e);if("function"==typeof t)for(var n=new O(e),i=1;i<arguments.length;++i)P.callbacks.push(n.middleware(arguments[i]));else"string"==typeof e?P["string"==typeof t?"redirect":"show"](e,t):P.start(e)}function H(e){return"string"!=typeof e?e:T?decodeURIComponent(e.replace(/\+/g," ")):e}function N(e,t){var n=I();"/"===e[0]&&0!==e.indexOf(n)&&(e=n+(A?"#!":"")+e);var i=e.indexOf("?");if(this.canonicalPath=e,this.path=e.replace(n,"")||"/",A&&(this.path=this.path.replace("#!","")||"/"),this.title=w&&b.document.title,this.state=t||{},this.state.path=e,this.querystring=~i?H(e.slice(i+1)):"",this.pathname=H(~i?e.slice(0,i):e),this.params={},this.hash="",!A){if(!~this.path.indexOf("#"))return;var a=this.path.split("#");this.path=this.pathname=a[0],this.hash=H(a[1])||"",this.querystring=this.querystring.split("#")[0]}}function O(e,t){(t=t||{}).strict=t.strict||L,this.path="*"===e?"(.*)":e,this.method="GET",this.regexp=n(this.path,this.keys=[],t)}P.callbacks=[],P.exits=[],P.current="",P.len=0,P.base=function(e){if(0===arguments.length)return S;S=e},P.strict=function(e){if(0===arguments.length)return L;L=e},P.start=function(e){if(e=e||{},!v&&(v=!0,b=e.window||x&&window,!1===e.dispatch&&(M=!1),!1===e.decodeURLComponents&&(T=!1),!1!==e.popstate&&x&&b.addEventListener("popstate",j,!1),!1!==e.click&&w&&b.document.addEventListener(k,R,!1),(A=!!e.hashbang)&&x&&!C&&b.addEventListener("hashchange",j,!1),M)){var t;if(E){var n=b.location;t=A&&~n.hash.indexOf("#!")?n.hash.substr(2)+n.search:A?n.search+n.hash:n.pathname+n.search+n.hash}P.replace(t,null,!0,M)}},P.stop=function(){v&&(P.current="",P.len=0,v=!1,w&&b.document.removeEventListener(k,R,!1),x&&b.removeEventListener("popstate",j,!1),x&&b.removeEventListener("hashchange",j,!1))},P.show=function(e,t,n,i){var a=new N(e,t),s=y;return y=a,P.current=a.path,!1!==n&&P.dispatch(a,s),!1!==a.handled&&!1!==i&&a.pushState(),a},P.back=function(e,t){P.len>0?(C&&b.history.back(),P.len--):e?setTimeout(function(){P.show(e,t)}):setTimeout(function(){P.show(I(),t)})},P.redirect=function(e,t){"string"==typeof e&&"string"==typeof t&&P(e,function(e){setTimeout(function(){P.replace(t)},0)}),"string"==typeof e&&void 0===t&&setTimeout(function(){P.replace(e)},0)},P.replace=function(e,t,n,i){var a=new N(e,t),s=y;return y=a,P.current=a.path,a.init=n,a.save(),!1!==i&&P.dispatch(a,s),a},P.dispatch=function(e,t){var n=0,i=0;function a(){var t=P.callbacks[n++];if(e.path===P.current)return t?void t(e,a):function(e){e.handled||(A?E&&I()+b.location.hash.replace("#!",""):E&&b.location.pathname+b.location.search)!==e.canonicalPath&&(P.stop(),e.handled=!1,E&&(b.location.href=e.canonicalPath))}(e);e.handled=!1}t?function e(){var n=P.exits[i++];if(!n)return a();n(t,e)}():a()},P.exit=function(e,t){if("function"==typeof e)return P.exit("*",e);for(var n=new O(e),i=1;i<arguments.length;++i)P.exits.push(n.middleware(arguments[i]))},P.Context=N,N.prototype.pushState=function(){P.len++,C&&b.history.pushState(this.state,this.title,A&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},N.prototype.save=function(){C&&"file:"!==b.location.protocol&&b.history.replaceState(this.state,this.title,A&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},P.Route=O,O.prototype.middleware=function(e){var t=this;return function(n,i){if(t.match(n.path,n.params))return e(n,i);i()}},O.prototype.match=function(e,t){var n=this.keys,i=e.indexOf("?"),a=~i?e.slice(0,i):e,s=this.regexp.exec(decodeURIComponent(a));if(!s)return!1;for(var o=1,r=s.length;o<r;++o){var l=n[o-1],c=H(s[o]);void 0===c&&hasOwnProperty.call(t,l.name)||(t[l.name]=c)}return!0};var j=function(){var e=!1;if(x)return w&&"complete"===document.readyState?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(t){if(e)if(t.state){var n=t.state.path;P.replace(n,t.state)}else if(E){var i=b.location;P.show(i.pathname+i.hash,void 0,void 0,!1)}}}();function R(e){if(1===function(e){return null==(e=e||x&&window.event).which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=e.target,n=e.path||(e.composedPath?e.composedPath():null);if(n)for(var i=0;i<n.length;i++)if(n[i].nodeName&&"A"===n[i].nodeName.toUpperCase()&&n[i].href){t=n[i];break}for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;if(t&&"A"===t.nodeName.toUpperCase()){var a="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name;if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")){var s=t.getAttribute("href");if((A||!function(e){if(!E)return!1;var t=b.location;return e.pathname===t.pathname&&e.search===t.search}(t)||!t.hash&&"#"!==s)&&!(s&&s.indexOf("mailto:")>-1)&&(a?!t.target.baseVal:!t.target)&&(a||D(t.href))){var o=a?t.href.baseVal:t.pathname+t.search+(t.hash||"");o="/"!==o[0]?"/"+o:o,_&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var r=o,l=I();0===o.indexOf(l)&&(o=o.substr(S.length)),A&&(o=o.replace("#!","")),l&&r===o||(e.preventDefault(),P.show(r))}}}}}function D(e){if(!e||!E)return!1;var t=function(e){if("function"==typeof URL&&E)return new URL(e,location.toString());if(w){var t=document.createElement("a");return t.href=e,t}}(e),n=b.location;return n.protocol===t.protocol&&n.hostname===t.hostname&&n.port===t.port}function I(){if(S)return S;var e=x&&b&&b.location;return x&&A&&e&&"file:"===e.protocol?e.pathname:S}return P.sameOrigin=D,g}()}).call(this,n(2))},function(e,t,n){"use strict";n.r(t);n(4);var i=n(0),a=n.n(i),s=function(e){var t=document.defaultView,n=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,i="ownerSVGElement",a="http://www.w3.org/2000/svg",s="connected",o="dis"+s,r=/^style|textarea$/i,l="_hyper: "+(Math.random()*new Date|0)+";",c="\x3c!--"+l+"--\x3e",p=t.Event;try{new p("Event")}catch(e){p=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}var u,d=t.Map||function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,i){t[e.push(n)-1]=i}}},f=0,h=t.WeakMap||function(){var e=l+f++;return{get:function(t){return t[e]},set:function(t,n){Object.defineProperty(t,e,{configurable:!0,value:n})}}},m=t.WeakSet||function(){var e=new h;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}},g=Array.isArray||(u={}.toString,function(e){return"[object Array]"===u.call(e)}),v=l.trim||function(){return this.replace(/^\s+|\s+$/g,"")};function y(){return this}var b=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||w(this,n,t.call(this,e))},set:function(e){w(this,n,e)}}},w=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},x={},C={},_=[],k=C.hasOwnProperty,E=0,M={attributes:x,define:function(e,t){e.indexOf("-")<0?(e in C||(E=_.push(e)),C[e]=t):x[e]=t},invoke:function(e,t){for(var n=0;n<E;n++){var i=_[n];if(k.call(e,i))return C[i](e[i],t)}}},T=function(e,t){return S(e).createElement(t)},S=function(e){return e.ownerDocument||e},L=function(e){return S(e).createDocumentFragment()},A=function(e,t){return S(e).createTextNode(t)},P=" \\f\\n\\r\\t",H="[^ "+P+"\\/>\"'=]+",N="[ "+P+"]+"+H,O="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",j="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+H+"))?)",R=new RegExp(O+N+j+"+)([ "+P+"]*/?>)","g"),D=new RegExp(O+N+j+"*)([ "+P+"]*/>)","g"),I=L(document),$="append"in I,q="content"in T(document,"template");I.appendChild(A(I,"g")),I.appendChild(A(I,""));var F=1===I.cloneNode(!0).childNodes.length,z="importNode"in document,B=$?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,i=0;i<n;i++)e.appendChild(t[i])},U=new RegExp("("+N+"=)(['\"]?)"+c+"\\2","gi"),V=function(e,t,n,i){return"<"+t+n.replace(U,G)+i},G=function(e,t,n){return t+(n||'"')+l+(n||'"')},W=function(e,t){return(i in e?ee:Q)(e,t.replace(R,V))},Z=F?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],i=n.length,a=0;a<i;a++)t.appendChild(Z(n[a]));return t}:function(e){return e.cloneNode(!0)},K=z?function(e,t){return e.importNode(t,!0)}:function(e,t){return Z(t)},X=[].slice,Y=function(e){return J(e)},J=function(e){if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((t.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var n={};J=function(e){var t="^"+e.join("^");return n[t]||(n[t]=e)}}else J=function(e){return e};return J(e)},Q=q?function(e,t){var n=T(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=T(e,"template"),i=L(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var a=RegExp.$1;n.innerHTML="<table>"+t+"</table>",B(i,X.call(n.querySelectorAll(a)))}else n.innerHTML=t,B(i,X.call(n.childNodes));return i},ee=q?function(e,t){var n=L(e),i=S(e).createElementNS(a,"svg");return i.innerHTML=t,B(n,X.call(i.childNodes)),n}:function(e,t){var n=L(e),i=T(e,"div");return i.innerHTML='<svg xmlns="'+a+'">'+t+"</svg>",B(n,X.call(i.firstChild.childNodes)),n};function te(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}te.prototype.insert=function(){var e=L(this.first);return B(e,this.childNodes),e},te.prototype.remove=function(){var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=S(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var ne=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))},ie=function(e,t,n){return{type:e,name:n,node:t,path:function(e){var t=[],n=void 0;switch(e.nodeType){case 1:case 11:n=e;break;case 8:n=e.parentNode,ne(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)ne(t,n,e);return t}(t)}},ae=function(e,t){for(var n=t.length,i=0;i<n;i++)e=e.childNodes[t[i]];return e},se=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,oe=function(e,t){var n=void 0,i=void 0;return function(a){switch(typeof a){case"object":if(a){if("object"===n){if(!t&&i!==a)for(var s in i)s in a||(e[s]="")}else t?e.value="":e.cssText="";var o=t?{}:e;for(var r in a){var l=a[r];o[r]="number"!=typeof l||se.test(r)?l:l+"px"}n="object",t?e.value=ce(i=o):i=a;break}default:i!=a&&(n="string",i=a,t?e.value=a||"":e.cssText=a||"")}}},re=/([^A-Z])([A-Z]+)/g,le=function(e,t,n){return t+"-"+n.toLowerCase()},ce=function(e){var t=[];for(var n in e)t.push(n.replace(re,le),":",e[n],";");return t.join("")},pe=function(e,t){return e==t},ue=function(e){return e},de=function(e,t,n,i){if(null==i)t.removeChild(e(n,-1));else{var a=t.ownerDocument.createRange();a.setStartBefore(e(n,-1)),a.setEndAfter(e(i,-1)),a.deleteContents()}},fe=function(e,t,n,i){i||(i={});for(var a=i.compare||pe,s=i.node||ue,o=null==i.before?null:s(i.before,0),r=0,l=0,c=t.length-1,p=t[0],u=t[c],d=n.length-1,f=n[0],h=n[d];r<=c&&l<=d;)if(null==p)p=t[++r];else if(null==u)u=t[--c];else if(null==f)f=n[++l];else if(null==h)h=n[--d];else if(a(p,f))p=t[++r],f=n[++l];else if(a(u,h))u=t[--c],h=n[--d];else if(a(p,h))e.insertBefore(s(p,1),s(u,-0).nextSibling),p=t[++r],h=n[--d];else if(a(u,f))e.insertBefore(s(u,1),s(p,0)),u=t[--c],f=n[++l];else{var m=t.indexOf(f);if(m<0)e.insertBefore(s(f,1),s(p,0)),f=n[++l];else{for(var g=m,v=l;g<=c&&v<=d&&t[g]===n[v];)g++,v++;if(1<g-m)--m===r?e.removeChild(s(p,-1)):de(s,e,p,t[m]),l=v,p=t[r=g],f=n[v];else{var y=t[m];t[m]=null,e.insertBefore(s(y,1),s(p,0)),f=n[++l]}}}if(r<=c||l<=d)if(c<r){var b=n[d+1],w=null==b?o:s(b,0);if(l===d)e.insertBefore(s(n[l],1),w);else{for(var x=e.ownerDocument.createDocumentFragment();l<=d;)x.appendChild(s(n[l++],1));e.insertBefore(x,w)}}else null==t[r]&&r++,r===c?e.removeChild(s(t[r],-1)):de(s,e,t[r],t[c]);return n},he=new m;function me(){}me.prototype=Object.create(null);var ge=function(e){return{html:e}},ve=function e(t,n){return"ELEMENT_NODE"in t?t:t.constructor===te?1/n<0?n?t.remove():t.last:n?t.insert():t.first:e(t.render(),n)},ye=function(e,t,n){for(var i=new me,a=e.attributes,s=X.call(a),o=[],r=s.length,c=0;c<r;c++){var p=s[c];if(p.value===l){var u=p.name;if(!(u in i)){var d=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");i[u]=a[d]||a[d.toLowerCase()],t.push(ie("attr",i[u],d))}o.push(p)}}for(var f=o.length,h=0;h<f;h++){var m=o[h];/^id$/i.test(m.name)?e.removeAttribute(m.name):e.removeAttributeNode(o[h])}var g=e.nodeName;if(/^script$/i.test(g)){for(var v=document.createElement(g),y=0;y<a.length;y++)v.setAttributeNode(a[y].cloneNode(!0));v.textContent=e.textContent,e.parentNode.replaceChild(v,e)}},be=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(ge).then(t):Promise.resolve(M.invoke(e,t)).then(t)},we=function(e){return null!=e&&"then"in e},xe=function(e,t){var n={node:ve,before:e},i=!1,a=void 0;return function s(o){switch(typeof o){case"string":case"number":case"boolean":i?a!==o&&(a=o,t[0].textContent=o):(i=!0,a=o,t=fe(e.parentNode,t,[A(e,o)],n));break;case"object":case"undefined":if(null==o){i=!1,t=fe(e.parentNode,t,[],n);break}default:if(i=!1,g(a=o))if(0===o.length)t.length&&(t=fe(e.parentNode,t,[],n));else switch(typeof o[0]){case"string":case"number":case"boolean":s({html:o});break;case"object":if(g(o[0])&&(o=o.concat.apply([],o)),we(o[0])){Promise.all(o).then(s);break}default:t=fe(e.parentNode,t,o,n)}else"ELEMENT_NODE"in(r=o)||r instanceof te||r instanceof y?t=fe(e.parentNode,t,11===o.nodeType?X.call(o.childNodes):[o],n):we(o)?o.then(s):"placeholder"in o?be(o,s):"text"in o?s(String(o.text)):"any"in o?s(o.any):"html"in o?t=fe(e.parentNode,t,X.call(W(e,[].concat(o.html).join("")).childNodes),n):s("length"in o?X.call(o):M.invoke(o,s))}var r}},Ce=function(e,t,n){var a=i in e,r=void 0;if("style"===t)return function(e,t,n){if(n){var i=t.cloneNode(!0);return i.value="",e.setAttributeNode(i),oe(i,n)}return oe(e.style,n)}(e,n,a);if(/^on/.test(t)){var l=t.slice(2);return l===s||l===o?(Ee&&(Ee=!1,function(){var e=function(e,n){for(var i=new p(n),a=e.length,s=0;s<a;s++){var o=e[s];1===o.nodeType&&t(o,i)}},t=function e(t,n){he.has(t)&&t.dispatchEvent(n);for(var i=t.children||function(e){for(var t=[],n=e.childNodes,i=n.length,a=0;a<i;a++)1===n[a].nodeType&&t.push(n[a]);return t}(t),a=i.length,s=0;s<a;s++)e(i[s],n)};try{new MutationObserver(function(t){for(var n=t.length,i=0;i<n;i++){var a=t[i];e(a.removedNodes,o),e(a.addedNodes,s)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],o)},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],s)},!1)}}()),he.add(e)):t.toLowerCase()in e&&(l=l.toLowerCase()),function(t){r!==t&&(r&&e.removeEventListener(l,r,!1),(r=t)&&e.addEventListener(l,t,!1))}}if("data"===t||!a&&t in e)return function(n){r!==n&&(r=n,e[t]!==n&&null==(e[t]=n)&&e.removeAttribute(t))};if(t in M.attributes)return function(n){r=M.attributes[t](e,n),e.setAttribute(t,null==r?"":r)};var c=!1,u=n.cloneNode(!0);return function(t){r!==t&&(r=t,u.value!==t&&(null==t?(c&&(c=!1,e.removeAttributeNode(u)),u.value=t):(u.value=t,c||(c=!0,e.setAttributeNode(u)))))}},_e=function(e){var t=void 0;return function n(i){t!==i&&("object"==typeof(t=i)&&i?we(i)?i.then(n):"placeholder"in i?be(i,n):n("text"in i?String(i.text):"any"in i?i.any:"html"in i?[].concat(i.html).join(""):"length"in i?X.call(i).join(""):M.invoke(i,n)):e.textContent=null==i?"":i)}},ke={create:function(e,t){for(var n=[],i=t.length,a=0;a<i;a++){var s=t[a],o=ae(e,s.path);switch(s.type){case"any":n.push(xe(o,[]));break;case"attr":n.push(Ce(o,s.name,s.node));break;case"text":n.push(_e(o)),o.textContent=""}}return n},find:function e(t,n,i){for(var a=t.childNodes,s=a.length,o=0;o<s;o++){var p=a[o];switch(p.nodeType){case 1:ye(p,n,i),e(p,n,i);break;case 8:p.textContent===l&&(i.shift(),n.push(r.test(t.nodeName)?ie("text",t):ie("any",p)));break;case 3:r.test(t.nodeName)&&v.call(p.textContent)===c&&(i.shift(),n.push(ie("text",t)))}}}},Ee=!0,Me=new h,Te=function(){try{var e=new h,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(t){return new d}}();function Se(e){var t=Me.get(this);return t&&t.template===Y(e)?Le.apply(t.updates,arguments):function(e){e=Y(e);var t=Te.get(e)||function(e){var t=[],n=e.join(c).replace(Oe,je),i=W(this,n);ke.find(i,t,e.slice());var a={fragment:i,paths:t};return Te.set(e,a),a}.call(this,e),n=K(this.ownerDocument,t.fragment),i=ke.create(n,t.paths);Me.set(this,{template:e,updates:i}),Le.apply(i,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this}function Le(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t])}var Ae,Pe,He,Ne,Oe=D,je=function(e,t,i){return n.test(t)?e:"<"+t+i+"></"+t+">"},Re=new h,De=function(e){var t=void 0,n=void 0,i=void 0,s=void 0,o=void 0;return function(r){r=Y(r);var l=s!==r;return l&&(s=r,i=L(document),n="svg"===e?document.createElementNS(a,"svg"):i,o=Se.bind(n)),o.apply(null,arguments),l&&("svg"===e&&B(i,X.call(n.childNodes)),t=$e(i)),t}},Ie=function(e,t){var n=t.indexOf(":"),i=Re.get(e),a=t;return-1<n&&(a=t.slice(n+1),t=t.slice(0,n)||"html"),i||Re.set(e,i={}),i[a]||(i[a]=De(t))},$e=function(e){for(var t=e.childNodes,n=t.length,i=[],a=0;a<n;a++){var s=t[a];1!==s.nodeType&&0===v.call(s.textContent).length||i.push(s)}return 1===i.length?i[0]:new te(i)},qe=M.define;function Fe(e){return arguments.length<2?null==e?De("html"):"string"==typeof e?Fe.wire(null,e):"raw"in e?De("html")(e):"nodeType"in e?Fe.bind(e):Ie(e,"html"):("raw"in e?De("html"):Fe.wire).apply(null,arguments)}return Fe.Component=y,Fe.bind=function(e){return Se.bind(e)},Fe.define=qe,Fe.diff=fe,(Fe.hyper=Fe).wire=function(e,t){return null==e?De(t||"html"):Ie(e,t||"html")},Ae=De,Pe=new h,He=Object.create,Ne=function(e,t){var n={w:null,p:null};return t.set(e,n),n},Object.defineProperties(y,{for:{configurable:!0,value:function(e,t){return function(e,t,n,i){var a,s,o,r=t.get(e)||Ne(e,t);switch(typeof i){case"object":case"function":var l=r.w||(r.w=new h);return l.get(i)||(a=l,s=i,o=new e(n),a.set(s,o),o);default:var c=r.p||(r.p=He(null));return c[i]||(c[i]=new e(n))}}(this,Pe.get(e)||(n=e,i=new d,Pe.set(n,i),i),e,null==t?"default":t);var n,i}}}),Object.defineProperties(y.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:b("html",Ae),svg:b("svg",Ae),state:b("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return i.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(i)}return!1}},setState:{value:function(e,t){var n=this.state,i="function"==typeof e?e.call(this,n):e;for(var a in i)n[a]=i[a];return!1!==t&&this.render(),this}}}),Fe}(window);const{Component:o,bind:r,define:l,diff:c,hyper:p,wire:u}=s,d=Object,f=[],h=(d.defineProperties,d.defineProperty),m=d.getOwnPropertyDescriptor,g=d.getOwnPropertyNames,v=d.getOwnPropertySymbols||(()=>[]),y=d.getPrototypeOf||(e=>e.__proto__),b="object"==typeof Reflect&&Reflect.ownKeys||(e=>g(e).concat(v(e))),w=d.setPrototypeOf||((e,t)=>(e.__proto__=t,e));
/*! (C) 2017-2018 Andrea Giammarchi - ISC Style License */class x extends HTMLElement{static define(e,t){const n=this,i=n.prototype;(n.observedAttributes||[]).forEach(e=>{e in i||h(i,e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),{configurable:!0,get(){return this.getAttribute(e)},set(t){this.setAttribute(e,t)}})});const a=i.attributeChangedCallback,s=!!a,o=i.created;if(o){h(i,"_init$",{configurable:!0,writable:!0,value:!0}),h(i,"attributeChangedCallback",{configurable:!0,value:function e(t,n,i){if(this._init$&&(k.call(this,o),this._init$))return this._init$$.push(e.bind(this,t,n,i));s&&n!==i&&a.apply(this,arguments)}});const e=i.connectedCallback,t=!!e;h(i,"connectedCallback",{configurable:!0,value:function n(){if(this._init$&&(k.call(this,o),this._init$))return this._init$$.push(n.bind(this));t&&e.apply(this,arguments)}})}else s&&h(i,"attributeChangedCallback",{configurable:!0,value(e,t,n){t!==n&&a.apply(this,arguments)}});if(g(i).forEach(e=>{if(/^handle[A-Z]/.test(e)){const t="_"+e+"$",n=i[e];h(i,e,{configurable:!0,get(){return this[t]||(this[t]=n.bind(this))}})}}),"handleEvent"in i||h(i,"handleEvent",{configurable:!0,value(e){this[(e.currentTarget.dataset||{}).call||"on"+e.type](e)}}),t&&t.extends){const a=document.createElement(t.extends).constructor,s=class extends a{},o=y(n);b(o).filter(e=>["length","name","arguments","caller","prototype"].indexOf(e)<0).forEach(e=>h(s,e,m(o,e))),b(o.prototype).forEach(e=>h(s.prototype,e,m(o.prototype,e))),w(n,s),w(i,s.prototype),customElements.define(e,n,t)}else customElements.define(e,n);return f.push(n),n}get html(){return this._html$||(this.html=r(this.shadowRoot||this._shadowRoot||this))}set html(e){h(this,"_html$",{configurable:!0,value:e})}render(){}get defaultState(){return{}}get state(){return this._state$||(this.state=this.defaultState)}set state(e){h(this,"_state$",{configurable:!0,value:e})}setState(e,t){const n=this.state,i="function"==typeof e?e.call(this,n):e;for(const e in i)n[e]=i[e];return!1!==t&&this.render(),this}}x.Component=o,x.bind=r,x.intent=l,x.wire=u,x.hyper=p;try{Symbol.hasInstance&&f.push(h(x,Symbol.hasInstance,{enumerable:!1,configurable:!0,value:e=>f.some(M,y(e))}))}catch(e){}var C=x;const _={type:"DOMContentLoaded",handleEvent(){_.ready()?(document.removeEventListener(_.type,_,!1),_.list.splice(0).forEach(E)):setTimeout(_.handleEvent)},ready:()=>"complete"===document.readyState,list:[]};function k(e){if(_.ready()||function(e){let t=this;do{if(t.nextSibling)return!0}while(t=t.parentNode);return setTimeout(k.bind(this,e)),!1}.call(this,e)){if(this._init$){const t=this._init$$;t&&delete this._init$$,e.call(h(this,"_init$",{value:!1})),t&&t.forEach(E)}}else this.hasOwnProperty("_init$$")||h(this,"_init$$",{configurable:!0,value:[]}),_.list.push(k.bind(this,e))}function E(e){e()}function M(e){return this===e.prototype}_.ready()||document.addEventListener(_.type,_,!1);(class extends C{static get observedAttributes(){return["timeout","exit"]}created(){this.entry="fadeIn",this.exit=this.exit||"fadeOut",this.className="db animated "+this.entry,this.render()}render(){const e="pv3 ph4 bg-animate bg-dark-green hover-bg-light-green light-green hover-orange";return this.html`
      <div>
        <h1 class="f2 ml2 ml3-ns avenir">Public Sector Services</h1>
        <nav class="ph2 ph3-ns flex flex-wrap tc ttu f4 tracked athelas" onclick="${this}">
          <div style="width:190px;" class=${e} data-href="/about">about</div>
          <div style="width:190px;" class=${e} data-href="/services">services</div>
          <div style="width:190px;" class=${e} data-href="/contact">contact</div>
          <div style="width:190px;" class=${e} data-href="/bio">bio</div>
        </nav>
      </div>
      <main id="main-area"/>`}onclick(e){if("DIV"!==e.target.nodeName)return e;const t=e.target;Array.from(t.parentElement.children).forEach(e=>{e.classList.remove("bg-orange","dark-green"),e.classList.add("bg-dark-green","light-green")}),t.classList.add("bg-orange","dark-green"),t.classList.remove("bg-dark-green","light-green"),a()(t.dataset.href)}}).define("custom-home");const{bind:T,wire:S}=C;(class extends C{static get observedAttributes(){return["timeout","entry","exit"]}created(){this.entry=this.entry||"fadeIn",this.exit=this.exit||"fadeOut",this.className="db avenir animated "+this.entry,this.render()}render(){return this.html`
<div class="pa3">
<h1 id="our-services" class="mt0 mb2 lh-title">
OUR SERVICES
</h1>

<nav class="flex f5 flex-wrap">
    <a class="link pa2 light-green hover-dark-green bg-animate bg-dark-green hover-bg-light-green" href="#homeland-security">Homeland Security</a>
    <a class="link pa2 light-green hover-dark-green bg-animate bg-dark-green hover-bg-light-green" href="#public-safety-consolidations-efficiencies">Public Safety Consolidations &amp; Efficiencies</a>
    <a class="link pa2 light-green hover-dark-green bg-animate bg-dark-green hover-bg-light-green" href="#executive-team-support">Executive Team Support</a>
    <a class="link pa2 light-green hover-dark-green bg-animate bg-dark-green hover-bg-light-green" href="#controversial-development-project-strategies">Controversial Development Project Strategies</a>
</nav>

<article class="mt3 cf w-100 ph2 ph3-ns lh-copy">
  <div class="fl w-100 w-50-ns mr4 measure measure-wide-ns">
    <h2 id="overview" class="athelas lh-title mv0">
    Overview <a class="pa2 f5" href="#our-services">TOP</a> 
    </h2>
    
    <p>
    <span>PUBLIC SECTOR SERVICES</span> (PSS) is built upon decades of leadership and experience 
    with government operations.
    </p>
    <p> As the founder of PSS, Marcia Raines is a tenured local
    government leader that has been recognized statewide as a leader working with cities,
    counties, special districts and private clients, providing high level strategic approaches to
    issues confronting communities in today’s complex environment.
    </p>
    <p>
    Her vast network of public and private contacts combined with a strong understanding of public 
    policy have resulted in successful innovative solutions to numerous complex long unresolved issues.
    </p>
    <p>
    PSS has insight into navigating the system and the network and contacts to reach out and
    find a solution.
    </p>
    <p> Projects undertaken have generated success in working City Councils and
    civic committees to address budget constraints, resolve labor issues, enhance executive
    team performance, create consolidations, reach approval and construction of
    controversial projects, and achieve approval of strategic partnerships to create resilient
    communities.
    </p>
    <p>
    Examples of projects include campaigns to increase tax base, spur heading
    construction of public facilities incorporating large cross section of stakeholder interests,
    restructuring municipal debt, rebuilding public marinas, fire stations, converting public
    facilities into alternative uses, organizing community plans for revitalization of
    downtown to resolve flooding issues, attracting developer interest in civic projects,
    managing major transportation projects completed on time and on budget, breaking long
    standing roadblocks to progress and creating innovative approaches to resolve harsh
    fiscal issues.
    </p>
    <p>
    Areas of expertise include; homeland security issues, public safety consolidations,
    executive team support, strategic planning and development support for controversial
    projects.
    </p>
    
    <h2 id="homeland-security" class="athelas lh-title">
    Homeland Security 
    <a class="pa2 f5" href="#our-services">TOP</a>
    </h2>
    
    <p>
    Ensure your agency is ‘crisis ready’ for the next emergency by preparing for the
    multiple agency, multiple day outages and the optimal recovery.
    </p>
    <p> This level of
    preparation encompasses preparing staff organization wide to support public
    safety responses, preparing for multiple agency efforts, communicating with
    residents and managing recovery efforts after the event.
    </p>
    <p> PSS has managed
    multiple emergencies and worked with FEMA on the latest tools.
    </p>
    <p> We can work
    with your team to prepare for the best possible outcomes.
    </p>
    <p> Examples include
    destruction of community center, support for airport disaster, support for
    neighboring community disaster, massive flooding of downtown areas and a
    major industrial catastrophic incident.
    </p>
    <p> Issues are numerous and include; cross
    agency communication, identification of and recording location and access to
    community resources such as food, transportation, alternative power, preparing
    methods to locate staff and city equipment in emergency situations, planning for
    prolonged outages of public services and utilities and cost recovery.
    </p>

    <h2 id="public-safety-consolidations-efficiencies" class="athelas lh-title">
    Public Safety Consolidations &amp; Efficiencies <a class="pa2 f5" href="#our-services">TOP</a>
    </h2>

    <p>
    Successful shared services created by PSS cross a variety of agencies including
    fire, police, libraries, code compliance, recreation and housing programs.
    </p>
    <p> These
    projects often involve multiple agencies and numerous stakeholders.
    </p>
    <p> Projects
    include establishing new levels of service delivery by identifying shared service
    possibilities including incorporating all stakeholder groups in crafting approaches,
    contracting amongst agencies with expertise in specific areas of service, splitting
    staff and facility responsibility, standardizing vehicles, equipment and facilities
    between neighboring agencies to allow efficiencies in operations, consolidating
    functions such as payroll, dispatch and management positions.
    </p>
    <p> Projects have also
    included examining and implementation of new governance models and
    identification of best practices for a variety of agencies.
    </p>
  </div>

  <div class="fl w-100 w-50-ns measure measure-wide-ns">
    <h2 id="executive-team-support" class="athelas lh-title">
    Executive Team Support 
    <a class="pa2 f5" href="#our-services">TOP</a>
    </h2>

    <p>
    PSS is experienced in preparing and operating team building exercises that
    engage and strengthen the executive team to better meet changing community
    needs in areas such as effective civic engagement, use of inclusionary approaches
    and implementing sustainable operations.
    </p>
    <p> Completed projects include work with
    executive teams to become more innovative, progressive and successful in
    meeting the ever-expanding demands from the public.
    </p>
    <p> Examples used include
    implementing maximize use of volunteers citywide, implementing new systems
    for record keeping and communication, reorganizing staff including redefinition
    of roles and responsibilities accompanied by training opportunities and techniques
    used effectively include mentoring and on-boarding of entire teams to improve
    collaboration, auditing departments using in-house teams to build enhanced
    methods of service delivery,
    </p>
    
    <h2 id="controversial-development-project-strategies" class="athelas lh-title">
    Controversial Development Project Strategies 
    <a class="pa2 f5" href="#our-services">TOP</a>
    </h2>
    
    <p>
    PSS assists private entities in working with agencies and special districts on
    approval and construction of complex, controversial projects in ways that result in
    healthy communities and achieve realistic goals of the proponents.
    One of the projects PSS is proudest of involved charting a path to the future for a
    community served with a major financial federal judgement resulting from a land
    use decision.
    </p>
    <p> This judgement had the potential to bankrupt the community.
    </p>
    <p> PSS
    created a team of experts to assist the community in navigating the path forward.
    Now a decade later the community is looking forward to a sustainable future.
    </p>
    <p>
    PSS experience includes identifying and engaging stakeholders, structuring
    finance packages, shaping ballot measures, gaining support for rate increases and
    successfully navigation Coastal Commission concerns.
    </p>
    <p> The broad spectrum of
    projects ranges from renovating downtowns, rebuilding aging infrastructure,
    refinancing debt, defining partnerships, building support for new facilities to
    resurrecting decade old stalemates and successfully completing projects.
    </p>
    <p> Projects
    have included Devil Slide/Highway 1 in San Mateo County, the Martinez Marina,
    the Martinez Water System storage facilities, the Millbrae wastewater facility,
    Safeway markets, Westin/Aloft complex remodel, Contra Costa County hospital,
    Oceana retail center and reconstruction of county facilities for the county seat in
    Contra Costa County.
    </p>
    <p>
    PSS projects include attracting developers talented in working with the
    communities to define a successful project, engage the community to define
    specific plans, and working through approval, permitting and construction to
    deliver a successful project.
    </p>
  </div>
</article>
`}onclick(){document.querySelector("custom-toaster").popToast("Congratulations! it toasted")}}).define("our-services");(class extends C{static get observedAttributes(){return["timeout","entry"]}created(){this.entry=this.entry||"fadeIn",this.className="db pa3 avenir animated "+this.entry,this.render()}render(){return this.html`
<h1 id="our-services" class="mt0 mb2 lh-title ttu">
ABOUT US
</h1>
<article class="mw7 ph3 ph4-ns lh-copy">
    <p>
    PUBLIC SECTOR SERVICES (PSS) is a small results-oriented firm with direct responsive
    service for public and private clients. Communication is streamlined and adaptable to client
    needs. The firm’ knowledge of government operations and extensive network, provides clients
    with a strong advantage in expanding market share using collaborative techniques. We know
    how government works and what targets are needed to get projects prioritized. PSS focuses on
    using leadership skills and experience to help clients navigate today’s complex governmental
    atmosphere. The firm founded in early 2018, provides public and private clients with innovative
    and strategic approaches in difficult situations, paying attention to details in order to support
    accomplishing client goals. Areas of expertise include;
    </p>
    <ul>
      <li>homeland security issues,</li> 
      <li>public safety consolidations,</li> 
      <li>executive team support, and</li> 
      <li>development support for controversial projects.</li> 
    </ul>
    <p>
    PSS works with agencies to select and mentor the best candidates for their executive team, find
    efficiencies in operational areas and define solutions that will move the organization forward.
    PSS assists private entities in working with agencies on approval and construction of complex,
    controversial projects in ways that result in healthy communities and achieve realistic goals of
    the proponents.
    </p>
    <p>
    Marcia Raines is the founding principal and sole proprietor of PSS. For over three decades she
    has worked in top level management of cities, counties, and special districts in the San Francisco
    Bay Area. Her leadership roles have given her a strong understanding of the components of
    government organizations and the communities they serve. She is familiar with the requirements,
    operations and concerns of City Councils, Planning Commissions, Board of Supervisors, School
    Boards, special district boards and the state, federal and special agencies that regulate them. 
    </p>
    <p>
    As a recognized leader statewide, Marcia's network is exhaustive. She successfully works with groups in
    addressing budget constraints, resolving labor issues, creating successful executive teams,
    forming consolidations, achieving approval and construction of controversial projects, and
    creating strategic partnerships that move communities forward. Ms. Raines has managed
    campaigns to increase tax base, spur headed construction of public facilities incorporating large
    cross section of stakeholder interests, restructured municipal debt, rebuilt public marinas, fire
    stations, converted public facilities into alternative uses, led community plans for revitalization
    of downtown including addressing flooding issues, attracted developer interest to civic projects,
    brought transportation projects in on time and on budget and created innovative approaches to
    resolve harsh fiscal issues.
    </p>
    <p>
    As City Manager in Millbrae she managed the public entitlement process and civic engagement
    for controversial developments at the BART station, managed the city’s finances to establish
    healthy reserves, managed community change including implementing public safety
    consolidations, updated facilities and renovated of the business areas of the community. Her
    work included transforming programs and services to reflect the diversity of the community.
    </p>
    <p>
    Prior to her appointment in Millbrae, as City Manager for the City of Half Moon Bay she worked
    with stakeholders to define the future course of the city following a major federal judgement
    which could have financially crippled the city. Prior to her Half Moon Bay role, she served as
    Environmental Services Agency Director for San Mateo County with responsibility for many of
    the municipal-like services provided by the County, responsible for coordination of county
    services and programs with each of the 20 cities in the County. In this assignment she formed
    multiple consolidations across city-county lines all of which remain effective and in place today,
    resulting in multiple agencies with financial efficiencies while improving service delivery.
    Before joining the County, Ms. Raines was City Manager of Martinez where she held multiple
    leadership positions in the organization including Assistant City Manager, Economic
    Development Director, and Public Works Director. She successfully led renovation of the
    downtown area by eliminating flooding with the overwhelming consent of the major property
    owner, Contra Costa. County.
    </p>
    <p>
    
    Marcia has held numerous positions on professional boards including that of President of the
    League of California Cities, City Manager’s Department, serving on the California City
    Managers Foundation Board for over a decade, the California Chapter of the International City
    Managers Association and the Institute for Local Government Boards. She has worked as a
    mentor to next generation professionals at local universities for over a decade. Marcia recently
    completed her master’s degree in Homeland Security Issues from the Naval Postgraduate School
    where her thesis focused on enhancing transportation sector emergency coordination. She holds
    a degree in Urban and Regional Planning from Cal Poly, Pomona and is a graduate of the UC
    Berkley Executive Seminar.
    </p>
</article>`}}).define("about-us");(class extends C{static get observedAttributes(){return["timeout","entry","exit"]}created(){this.entry=this.entry||"fadeIn",this.exit=this.exit||"fadeOut",this.className="db pa3 avenir animated "+this.entry,this.render()}render(){return this.html`
<div class="mw6 ml3 pa3 bg-near-white">
  <h1>
    <a class="link dark-gray" href="/bio">
        Marcia Raines
    </a>
  </h1>
  <div class="flex flex-column">
    <a class="f3 mb3 dark-green hover-orange" href="https://www.linkedin.com/in/marcia-raines-b25298a4/">LinkedIn</a>
    <a class="f3 mb3 dark-green hover-orange" href="tel:+16509954743">650.995.4743</a>
    <a class="f3 mb3 dark-green hover-orange" href="mailto:mraines.pss@gmail.com">mraines.pss@gmail.com</a>
  </div>
</div>`}}).define("contact-information");(class extends C{static get observedAttributes(){return["timeout","entry","exit"]}created(){this.entry=this.entry||"fadeIn",this.exit=this.exit||"fadeOut",this.className="w-100 bg-near-white near-black avenir lh-copy animated "+this.entry,this.render()}render(){return this.html`
<style type="text/css">
@import url('https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLUXza5VhXqVC6o75Eld_V98');

ul.lst-kix_list_1-0 {
  list-style-type: none
}

.lst-kix_list_3-0 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_5-7 {
  list-style-type: none
}

ul.lst-kix_list_5-8 {
  list-style-type: none
}

.lst-kix_list_3-1 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_3-2 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_5-5 {
  list-style-type: none
}

ul.lst-kix_list_5-6 {
  list-style-type: none
}

ul.lst-kix_list_1-3 {
  list-style-type: none
}

.lst-kix_list_3-5 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_5-0 {
  list-style-type: none
}

ul.lst-kix_list_1-4 {
  list-style-type: none
}

ul.lst-kix_list_1-1 {
  list-style-type: none
}

.lst-kix_list_3-4 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_1-2 {
  list-style-type: none
}

ul.lst-kix_list_5-3 {
  list-style-type: none
}

ul.lst-kix_list_1-7 {
  list-style-type: none
}

.lst-kix_list_3-3 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_5-4 {
  list-style-type: none
}

ul.lst-kix_list_1-8 {
  list-style-type: none
}

ul.lst-kix_list_5-1 {
  list-style-type: none
}

ul.lst-kix_list_1-5 {
  list-style-type: none
}

ul.lst-kix_list_5-2 {
  list-style-type: none
}

ul.lst-kix_list_1-6 {
  list-style-type: none
}

.lst-kix_list_3-8 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_3-6 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_3-7 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_5-0 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-8 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_5-3 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-7 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_5-2 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_5-1 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_4-8 {
  list-style-type: none
}

.lst-kix_list_5-7 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_4-6 {
  list-style-type: none
}

.lst-kix_list_5-6 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_5-8 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_4-7 {
  list-style-type: none
}

ul.lst-kix_list_4-0 {
  list-style-type: none
}

ul.lst-kix_list_4-1 {
  list-style-type: none
}

.lst-kix_list_5-4 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_4-4 {
  list-style-type: none
}

.lst-kix_list_5-5 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_4-5 {
  list-style-type: none
}

ul.lst-kix_list_4-2 {
  list-style-type: none
}

ul.lst-kix_list_4-3 {
  list-style-type: none
}

.lst-kix_list_6-1 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-3 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-0 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-4 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-2 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-8 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-5 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-7 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-6 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-6 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-7 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-4 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-5 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-8 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_3-7 {
  list-style-type: none
}

ul.lst-kix_list_3-8 {
  list-style-type: none
}

ul.lst-kix_list_3-1 {
  list-style-type: none
}

ul.lst-kix_list_3-2 {
  list-style-type: none
}

ul.lst-kix_list_3-0 {
  list-style-type: none
}

ul.lst-kix_list_3-5 {
  list-style-type: none
}

ul.lst-kix_list_3-6 {
  list-style-type: none
}

ul.lst-kix_list_3-3 {
  list-style-type: none
}

ul.lst-kix_list_3-4 {
  list-style-type: none
}

.lst-kix_list_4-0 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-1 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-4 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-3 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-5 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-2 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-6 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_6-6 {
  list-style-type: none
}

ul.lst-kix_list_6-7 {
  list-style-type: none
}

ul.lst-kix_list_6-4 {
  list-style-type: none
}

ul.lst-kix_list_2-8 {
  list-style-type: none
}

ul.lst-kix_list_6-5 {
  list-style-type: none
}

ul.lst-kix_list_6-8 {
  list-style-type: none
}

ul.lst-kix_list_2-2 {
  list-style-type: none
}

.lst-kix_list_1-0 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_2-3 {
  list-style-type: none
}

ul.lst-kix_list_2-0 {
  list-style-type: none
}

ul.lst-kix_list_2-1 {
  list-style-type: none
}

ul.lst-kix_list_6-2 {
  list-style-type: none
}

ul.lst-kix_list_2-6 {
  list-style-type: none
}

ul.lst-kix_list_6-3 {
  list-style-type: none
}

.lst-kix_list_1-1 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_1-2 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_2-7 {
  list-style-type: none
}

ul.lst-kix_list_6-0 {
  list-style-type: none
}

ul.lst-kix_list_2-4 {
  list-style-type: none
}

ul.lst-kix_list_6-1 {
  list-style-type: none
}

ul.lst-kix_list_2-5 {
  list-style-type: none
}

.lst-kix_list_1-3 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_1-4 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_1-7 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_1-5 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_1-6 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-0 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-1 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_1-8 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-2 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-3 > li:before {
  content: "\\0025cf  "
}

ol {
  margin: 0;
  padding: 0
}

table td, table th {
  padding: 0
}

.c4 {
  margin-left: 36pt;
  padding-top: 0pt;
  padding-left: 0pt;
  padding-bottom: 4px;
  orphans: 2;
  widows: 2;
  text-align: justify;
  line-height: 1.2;
}

.c8 {
  margin-left: 36pt;
  padding-top: 0pt;
  text-indent: -36pt;
  padding-bottom: 14pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: left
}

.c7 {
  margin-left: 36pt;
  padding-top: 0pt;
  padding-left: 0pt;
  padding-bottom: 0pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: left
}

.c15 {
  padding-top: 0pt;
  padding-bottom: 0pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: right;
  height: 12pt
}

.c6 {
  padding-top: 0pt;
  padding-bottom: 0pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: left;
  height: 12pt
}

.c11 {
  color: #000000;
  font-weight: 400;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 12pt;
  font-family: "Times New Roman";
  font-style: normal
}

.c0 {
  color: #000000;
  font-weight: 400;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 12pt;
  font-family: "Gentona";
  font-style: normal
}

.c18 {
  color: #000000;
  font-weight: 400;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 12pt;
  font-family: "Calibri";
  font-style: normal
}

.c10 {
  padding-top: 0pt;
  padding-bottom: 0pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: left
}

.c20 {
  padding-top: 0pt;
  padding-bottom: 0pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: justify
}

.c3 {
  padding-top: 0pt;
  padding-bottom: 14pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: justify
}

.c9 {
  padding-top: 0pt;
  padding-bottom: 14pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: left
}

.c27 {
  padding-top: 14pt;
  padding-bottom: 14pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: left
}

.c28 {
  font-family: "Symbol";
  color: #006d84;
  font-weight: 400
}

.c5 {
  font-family: "FontAwesome";
  color: #006d84;
  font-weight: 400
}

.c2 {
  vertical-align: baseline;
  font-family: "Gentona";
  font-weight: 400
}

.c22 {
  text-decoration: none;
  vertical-align: baseline;
  font-style: normal
}

.c23 {
  color: #000000;
  text-decoration: none;
  font-size: 12pt
}

.c1 {
  font-weight: 700;
  font-family: "Gentona"
}

.c16 {
  font-size: 14pt;
  color: #006d84
}

.c13 {
  font-weight: 400;
  font-family: "Gentona"
}

.c12 {
  padding: 0;
  margin: 0
}

.c19 {
  margin-left: 36pt;
  padding-left: 0pt
}

.c25 {
  color: #000000;
  font-size: 12pt
}

.c21 {
  font-weight: 700;
  font-family: "Times New Roman"
}

.c24 {
  font-weight: 400;
  font-family: "Times New Roman"
}

.c17 {
  height: 12pt
}

.c14 {
  font-style: italic
}

.c29 {
  margin-right: 18pt
}

.title {
  padding-top: 24pt;
  color: #000000;
  font-weight: 700;
  font-size: 36pt;
  padding-bottom: 6pt;
  font-family: "Calibri";
  line-height: 1.2;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left
}

.subtitle {
  padding-top: 18pt;
  color: #666666;
  font-size: 24pt;
  padding-bottom: 4pt;
  font-family: "Georgia";
  line-height: 1.2;
  page-break-after: avoid;
  font-style: italic;
  orphans: 2;
  widows: 2;
  text-align: left
}

li {
  color: #000000;
  font-size: 12pt;
  font-family: "Calibri"
}

p {
  margin: 0;
  color: #000000;
  font-size: 12pt;
  font-family: "Calibri"
}

h3 {
  padding-top: 14pt;
  color: #000000;
  font-weight: 700;
  font-size: 14pt;
  padding-bottom: 4pt;
  font-family: "Calibri";
  line-height: 1.2;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left
}

h4 {
  padding-top: 12pt;
  color: #000000;
  font-weight: 700;
  font-size: 12pt;
  padding-bottom: 2pt;
  font-family: "Calibri";
  line-height: 1.2;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left
}

h5 {
  padding-top: 11pt;
  color: #000000;
  font-weight: 700;
  font-size: 11pt;
  padding-bottom: 2pt;
  font-family: "Calibri";
  line-height: 1.2;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left
}

h6 {
  padding-top: 10pt;
  color: #000000;
  font-weight: 700;
  font-size: 10pt;
  padding-bottom: 2pt;
  font-family: "Calibri";
  line-height: 1.2;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left
}
</style>

<div class="mt4 pa3 bg-moon-gray">
  <div class="mw7 lh-copy pv4 ph5 bw3 b--silver bg-near-white">
    <p class="c27"><span class="c1 c16">Marcia Raines </span></p>
    <p class="c9"><span class="c13">mraines.pss@gmail.com </span><span class="c28">&bull;</span><span
         class="c5">&nbsp;</span><span class="c13">650.995.4743 </span></p>
    <p class="c9"><span class="c1 c16">EDUCATION </span></p>
    <p class="c10"><span class="c1">Master of Arts </span></p>
    <p class="c10"><span class="c13">Homeland Security Issues </span></p>
    <p class="c10"><span class="c13 c14">Naval Postgraduate School, Monterey </span></p>
    <p class="c10"><span class="c13">Center for Homeland Defense and Security<br></span><span
         class="c13 c14">&nbsp;</span>
    </p>
    <p class="c10"><span class="c1">Bachelor of Science </span></p>
    <p class="c10"><span class="c13">Urban Planning </span></p>
    <p class="c10"><span class="c2 c14 c23">California State Polytechnic University, Pomona </span></p>
    <p class="c6"><span class="c2 c23 c14"></span></p>
    <p class="c10"><span class="c22 c1 c25">Executive Seminar graduate </span></p>
    <p class="c10"><span class="c13 c14">UC Berkeley </span></p>
    <p class="c9 c17"><span class="c1 c16 c22"></span></p>
    <p class="c9"><span class="c22 c1 c16">EXPERIENCE </span></p>
    <p class="c9"><span class="c21">CEO, Founder </span><span class="c2">| </span><span
         class="c24">Public Sector Services </span><span class="c2">| </span><span class="c24">April 2018 </span><span
         class="c13">&ndash; </span><span class="c11">present </span></p>
    <p class="c9"><span class="c11">Public Sector Services (PSS) provides public and private clients with innovative and strategic approaches in difficult situations in working with local government agencies. PSS focuses on using leadership skills and experience to help clients navigate today&rsquo;s complex governmental atmosphere. &nbsp;Attention to detail, finding solutions that moves projects forward and resolve controversial issues is the focus of PSS.</span>
    </p>
    <p class="c9"><span class="c1">City Manager </span><span class="c2">| </span><span
         class="c13">City of Millbrae </span><span class="c2">| </span><span
         class="c13">December 2008 &ndash; April 2018 </span></p>
    <p class="c3"><span class="c13">The City of Millbrae is located about 15 miles south of San Francisco, adjacent to the San Francisco International Airport (SFO). Millbrae is a regional transit hub and a full-service city with 100 full time employees and a budget of $60 million. My accomplishments in Millbrae include the following: </span>
    </p>
    <ul class="c12 lst-kix_list_1-0 start">
      <li class="c4"><span class="c0">Led preparation of Economic Development Strategic Plan to establish Millbrae&rsquo;s path forward for long-term economic sustainability. </span>
      </li>
      <li class="c4"><span class="c0">Managed City through economic downturn of 2008 to 2012 including facilitation and coordination of numerous innovative actions to increase efficiencies while preserving critical services. </span>
      </li>
      <li class="c4"><span class="c0">Identified unfunded liabilities and fiscal imbalance at beginning of my time in Millbrae and conducted &ldquo;MILLBRAE NOW&rdquo; community workshops with the Council to define a new reality. </span>
      </li>
      <li class="c4"><span class="c0">Worked with community stakeholders to define approach to achieving fiscal sustainability, including revenue enhancement strategies. </span>
      </li>
      <li class="c4"><span class="c0">With unanimous Council support, led successful ballot measure to move the City Treasurer function into the City&rsquo;s Finance Department to eliminate duplication of efforts. </span>
      </li>
      <li class="c4"><span class="c0">With unanimous Council support, led successful ballot measures to extend a parcel tax generating $1.2 million annually for Fire Services and to establish an increase in local transit occupancy tax. </span>
      </li>
      <li class="c4"><span class="c0">Established shared services agreements with neighboring cities in both Police and Fire Services and moved agreements to the next level to realize greater long-term savings. </span>
      </li>
      <li class="c4"><span class="c0">Successfully coordinated transfer of City Police Services to County Sheriff&rsquo;s Office resulting in over $1.5 million annual savings. </span>
      </li>
      <li class="c4"><span class="c0">Attracted a $30 million 1% ARRA (American Recovery Relief Act) loan to refurbish the City&rsquo;s 35-year-old wastewater treatment plant to reduce environmental exposure and to be consistent with the City&rsquo;s sustainable objectives. </span>
      </li>
      <li class="c4"><span class="c0">Coordinated with Bay Area Rapid Transit (BART) to define criteria consistent with the City&rsquo;s Redevelopment Plan and selected a developer for a major hotel and office development adjacent to the Millbrae Station. </span>
      </li>
      <li class="c3 c19"><span class="c0">Coordinated with neighboring community of San Bruno during major catastrophic event, the September 9, 2010 PG&amp;E pipeline explosion. Assisted with emergency center operations, staffing, equipment and recovery needs. </span>
      </li>
    </ul>
    <p class="c9"><span class="c1">City Manager </span><span class="c2">| </span><span
         class="c13">City of Half Moon Bay </span><span class="c2">| </span><span
         class="c13">October 2006 - December 2008<br>The City of Half Moon Bay is a coast side community with 60 full time municipal employees and a budget of $29 million. My accomplishments included the following: </span>
    </p>
    <ul class="c12 lst-kix_list_2-0 start">
      <li class="c7"><span class="c0">Upon my arrival, raised awareness of long-standing legal issue over land use dispute with developer and the potential for an unfunded liability. </span>
      </li>
      <li class="c7"><span class="c0">Recruited team of experts to minimize federal judgment and negotiate final settlement acceptable to the Council and fiscally sustainable for the community. </span>
      </li>
      <li class="c7"><span
           class="c0">Developed of a five-year budget forecast including a Capital Improvement Plan. </span>
      </li>
      <li class="c7"><span class="c0">With unanimous Council support, successfully passed an increase in transit occupancy tax. </span>
      </li>
      <li class="c7"><span
           class="c0">Developed of a three-year Strategic Plan with a six-month detailed operations plan. </span></li>
      <li class="c7"><span
           class="c0">Successfully led the organization in the transition to a new City Attorney. </span>
      </li>
      <li class="c7"><span class="c0">Recruited department heads and initiated development of an Executive Team. </span>
      </li>
      <li class="c7"><span class="c0">Initiated and implemented organizational and operational improvements in each department. </span>
      </li>
      <li class="c7"><span class="c0">Established Human Resources Department, created standards of performance, and resolved outstanding workers compensation claims, resulting in improved accountability. </span>
      </li>
      <li class="c7"><span
           class="c0">Worked with local schools regarding major capital refurbishment of facilities. </span>
      </li>
      <li class="c7"><span class="c0">Facilitated completion of long outstanding major highway improvements through coordination with CALTRANS and San Mateo County. </span>
      </li>
      <li class="c7"><span class="c0">Created a public/private partnership to acquire a community park to provide an entry statement for the City. </span>
      </li>
      <li class="c9 c19"><span class="c0">Engaged the community as necessary to address and resolve various controversial issues. </span>
      </li>
    </ul>
    <p class="c9"><span class="c1">Director of Environmental Services Agency </span><span class="c2">| </span><span
         class="c13">San Mateo County </span><span class="c2">| </span><span
         class="c0">September 2000 - October 2006 </span></p>
    <p class="c3"><span class="c0">The Environmental Services Agency provides most of the municipal like services to the 79,000 residents of the unincorporated areas of San Mateo County and some services to various cities in the County. The agency had 500 regular and volunteer staff, an annual operating budget of $70 million, plus a capital projects list of $23 million. Departments within the Agency included; Animal Control, Agricultural Inspection Weights &amp; Measures, UC Extension Services, Fire, Library, LAFCo, Parks, Planning and Building. Some of my accomplishments in this position included the following: </span>
    </p>
    <ul class="c12 lst-kix_list_3-0 start">
      <li class="c4"><span class="c0">Reduced budget demands on the general fund by 20% resulting in a 7:1 ratio leverage of general fund dollars spent to actual cost of programs delivering services to the public. </span>
      </li>
      <li class="c4"><span class="c0">Redefined cost allocation for animal control services resulting in $1 million savings for the County general fund, while enhancing service delivery levels. </span>
      </li>
      <li class="c4"><span
           class="c0">Revised animal control contracts so that services are linked to the facility lease. </span></li>
      <li class="c4"><span class="c0">Coordinated airport planning through the Airport Roundtable and Airport Land Use Commission. </span>
      </li>
      <li class="c4"><span class="c0">Directed preparation of Airport Master Plans for SFO, San Carlos and Half Moon Bay airports. </span>
      </li>
      <li class="c4"><span class="c0">Refined fire protection services to maintain level of service while significantly reducing costs. </span>
      </li>
      <li class="c4"><span class="c0">Developed scanner pricing ordinance with no increase in cost to consumers and the County, while reducing erroneous charges to consumers. </span>
      </li>
      <li class="c4"><span class="c0">Developed weed management area with no cost to landowners, providing services to farmers and agricultural community. </span>
      </li>
      <li class="c4"><span class="c0">Oversaw 60% change in personnel in library services with increase in service delivery level. </span>
      </li>
      <li class="c4"><span class="c0">Reduced library system charges to the general fund by $500,000. </span></li>
      <li class="c4"><span class="c0">Facilitated a new agreement between eleven cities and the County for the library system resolving staffing, financing and facility issues. </span>
      </li>
      <li class="c4"><span class="c0">Worked with newly formed Arts Commission to establish a strategic plan for the arts and begin implementation, including display of art in public buildings. </span>
      </li>
      <li class="c4"><span class="c0">Oversaw transition of one-third of personnel in the park system, with increase in training and modernization of operations. </span>
      </li>
      <li class="c4"><span class="c0">Managed transition to countywide park operations resulting in significant cost savings without reducing services. </span>
      </li>
      <li class="c4"><span class="c0">Negotiated reimbursement for reduction in tax dollars resulting from annexation of agricultural lands to open space districts. </span>
      </li>
      <li class="c4"><span class="c0">Moved toward full cost recovery of Development Review Services over a two-year period, resulting in a $2 million savings to the general fund, with ongoing savings not yet realized. </span>
      </li>
      <li class="c3 c19"><span
           class="c0">Coordinated business development efforts with coast side business community. </span></li>
    </ul>
    <p class="c9"><span class="c1">City Manager </span><span class="c2">| </span><span
         class="c13">City of Martinez </span><span class="c2">| </span><span class="c0">1997-2000 </span></p>
    <p class="c3"><span class="c13">Assistant City Manager/Economic Development Manager </span><span
         class="c2">| </span><span class="c0">1984 - 2000 Administrative Services Director, Public Works Director, Community Development Director, Associate Planner </span>
    </p>
    <p class="c3"><span class="c0">The City of Martinez is a historic city with a population of 35,000, serving as the county seat to Contra Costa County. It is a full-service city with a FY 2000 general fund budget of $23 million, a capital project budget of $16 million and 130 employees. Accomplishments during this assignment included: </span>
    </p>
    <ul class="c12 lst-kix_list_4-0 start">
      <li class="c4"><span class="c0">Developed framework for initial establishment of a Community Foundation and recommendations for allocation of $200,000 annual fund to community-based organizations. </span>
      </li>
      <li class="c4"><span class="c0">Worked with Contra Costa County to coordinate plans and policies to accommodate new facilities for courts, hospital and general services. </span>
      </li>
      <li class="c4"><span class="c0">Managed 10 MGD water system and implemented water system improvements resulting in enhanced water quality, while controlling rates. </span>
      </li>
      <li class="c4"><span class="c0">Managed grant application and voter approval (86% approval) of flood control project to reduce downtown flooding. </span>
      </li>
      <li class="c4"><span
           class="c0">Implemented construction of multimodal transportation station serving regional needs. </span></li>
      <li class="c4"><span class="c0">Privatized marina and refinanced $25 million in loans that had accumulated over a 30-year period. </span>
      </li>
      <li class="c4"><span class="c0">Initiated community-based events such as &ldquo;First Night&rdquo;; a family based alcohol-free New Year&rsquo;s celebration. </span>
      </li>
      <li class="c4"><span class="c0">Worked with industry representatives to streamline process times by devising a state-of-the-art telecommunications ordinance accepted by environmental community representatives. </span>
      </li>
      <li class="c4"><span
           class="c0">Worked with local business leaders to establish business friendly environment.</span>
      </li>
      <li class="c4"><span class="c0">Established a municipal council of leaders focused on coordinating services to the community. </span>
      </li>
      <li class="c4"><span class="c0">Served on the board of non-profit community organizations in order to coordinate partnerships between the City, schools and business groups. </span>
      </li>
      <li class="c4"><span class="c0">Initiated a 5-year CIP for the City. </span></li>
      <li class="c4"><span class="c0">Administered solid waste and recycling franchises. </span></li>
      <li class="c4"><span class="c0">Developed program to meet AB 949 recycling objectives. </span></li>
      <li class="c4"><span class="c0">Negotiated labor agreements. </span></li>
      <li class="c4"><span class="c0">Initiated Economic Development program focused on the downtown area. </span></li>
      <li class="c4"><span class="c0">Worked with regional business leaders to establish partnerships with municipal leaders. </span>
      </li>
      <li class="c3 c19"><span class="c0">Established partnerships with local industry leaders and converted annual contributions to locally driven funding mechanisms. </span>
      </li>
    </ul>
    <p class="c8"><span class="c1 c16">ADDITIONAL QUALIFICATIONS </span></p>
    <p class="c8"><span class="c1">Professional Affiliations </span></p>
    <ul class="c12 lst-kix_list_5-0 start">
      <li class="c4"><span class="c0">ICMA (International City Management Association) Awards Panel, 2010-2017, Chair 2017, President&rsquo;s appointment </span>
      </li>
      <li class="c4"><span
           class="c0">ICMA 2010 San Jose Conference Host Committee and Volunteer Coordinating Committee </span></li>
      <li class="c4"><span
           class="c0">ICMA 2012 Phoenix Conference Host Committee, Awards Committee representative </span>
      </li>
      <li class="c4"><span class="c0">ICMA 2013-2016 Award Committee appointment by President of ICMA</span></li>
      <li class="c4"><span class="c0">ICMA Credentialed Manager status, 2012-2018 </span></li>
      <li class="c4"><span class="c0">ICMA Service Award, 40 years-2018 </span></li>
      <li class="c4"><span class="c0">Cal-ICMA (California chapter &ndash; International City Management Association) Board 2008 to 2018 </span>
      </li>
      <li class="c4"><span class="c0">Cal-ICMA Governance and Nominations Committee, 2008-2010 </span></li>
      <li class="c4"><span class="c0">CCMF (California City Management Foundation) Board 2007 to 2018 </span></li>
      <li class="c4"><span class="c0">CCMF member highlight 2013 </span></li>
      <li class="c4"><span class="c0">League of California Cities, City Manager Department, President 2014-15, Board member 2010 to 2018 </span>
      </li>
      <li class="c4"><span class="c0">League of California Cities, City Manager Department, At-Large Representative for Northern California cities under 100,000 population, 2010-2012 </span>
      </li>
      <li class="c4"><span class="c0">League of California Cities, City Manager Department, Conference Planning Committee appointed by Department President 2009, 2010 </span>
      </li>
      <li class="c4"><span class="c0">League of California Cities, Policy Committee: Public Safety 2010, Environmental Quality 2009, and Community Services 2008 </span>
      </li>
      <li class="c4"><span class="c0">ILG (Institute for Local Government), Board member 2016 to 2018</span></li>
      <li class="c4"><span class="c0">San Mateo County City Managers Association, Vice Chair 2011, Chair 2012, member 2007 to 2018</span>
      </li>
      <li class="c4"><span
           class="c0">San Mateo County SAL (Sheriff&rsquo;s Activity League) Board, 2014 to present</span>
      </li>
      <li class="c4"><span
           class="c0">San Mateo County HEART (Housing Endowment and Regional Trust) Treasurer, 2016 to 2018</span></li>
      <li class="c4"><span class="c0">Contra Costa County City Managers Association, member 1997-2001 </span></li>
      <li class="c4"><span class="c0">Leadership Contra Costa graduate, 2000 </span></li>
      <li class="c4"><span class="c0">Boys &amp; Girls Club of Martinez, Board member, 1995-2000 </span></li>
      <li class="c4"><span class="c0">Martinez Area Chamber of Commerce, Board member 1995-2000 </span></li>
      <li class="c4"><span class="c0">Rotary International, Martinez, Redwood City and Half Moon Bay 1996-2009, Paul Harris fellow 2005, Board member 1998-2000</span>
      </li>
      <li class="c3 c19"><span class="c0">Sonrisas Dental, Board member 2004-2006 </span></li>
    </ul>
    <p class="c8"><span class="c1">Recent Public Speaking </span></p>
    <ul class="c12 lst-kix_list_6-0 start">
      <li class="c4"><span class="c0">POST (Police Officers Standards &amp; Training) lecturer &ldquo;The Police Chief /City Manager relationship,&rdquo; 2012, 2013 </span>
      </li>
      <li class="c4"><span class="c0">League of California Cities, City Manager Department, &ldquo;The New Normal,&rdquo; 2009 and &ldquo;Making Shared Services a Reality,&rdquo; 2011, &ldquo;How to Successfully Consolidate Public Safety Units,&rdquo; 2013 </span>
      </li>
      <li class="c4"><span class="c0">USC Public Policy Master&rsquo;s program, &ldquo;Internships,&rdquo; &ldquo;Case Studies in Decision Making&rdquo;, &ldquo;Crucible Moments,&rdquo; &ldquo;Finding the Right Job to Build Your Career,&rdquo; 2011-2016 </span>
      </li>
      <li class="c4"><span class="c0">San Francisco State University Public Administration Master&rsquo;s program, &ldquo;Crucible Moments&rdquo;, &ldquo;Shared Services,&rdquo; 2015-2017 </span>
      </li>
      <li class="c4"><span class="c0">Golden Gate University Business School, &ldquo;Public-Private Partnerships,&rdquo; 2017 </span>
      </li>
      <li class="c4"><span
           class="c0">San Mateo County, Council of Cities, &ldquo;Shared Services&rdquo;, 2010-2011 </span>
      </li>
      <li class="c3 c19"><span class="c0">State of California Assembly/Senate Joint Committee on Local Government Transparency and Compensation, &ldquo;Public Employee Compensation,&rdquo; September 2010 </span>
      </li>
    </ul>
    <p class="c6"><span class="c11"></span></p>
    <p class="c17 c20"><span class="c11"></span></p>
    <p class="c6"><span class="c18"></span></p>
    <div><p class="c15"><span class="c18"></span></p>
      <p class="c6 c29"><span class="c18"></span></p></div>
  </div>
</div>
`}}).define("marcia-resume");(class extends C{static get observedAttributes(){return["timeout","entry","exit"]}created(){this.entry=this.entry||"fadeIn",this.exit=this.exit||"fadeOut",this.className="db w-100 pa3 bg-near-white near-black avenir lh-copy animated "+this.entry,this.render()}render(){return this.html`
<h2 class="athelas lh-title">
    Respected City Manager and tenured local government leader
</h2>
<p>
Marcia Raines managed three cities in Northern California over the past 30 years. She has held
leadership positions in several professional organizations including serving as the President of the
City Managers Department for the League of California Cities, Board member of the California
<img class="fl-l mr3-l mv3-l" width="320" height="446" src="mraines.png">
City Management Foundation, Chairperson of the San Mateo County City Managers Association,
Treasurer of the San Mateo County Housing and Regional Trust (HEART) and currently serves
on the boards of the San Mateo County Sheriff Activity League.
</p>
<p>
She has a reputation as an innovator in issues confronting local governments, and as a creative
problem solver. Marcia semi-retired in early 2018, formed Public Sector Services, and is currently
teaching, mentoring and consulting for cities, counties and special districts on topics including the following:
</p>
<ul class="list">
  <li class="mb2">• Preparing management teams to support public safety efforts and provide communities with leadership in the next emergency situation,</li>
  <li class="mb2">• Mentoring new members of the management to rapidly engage in organizational leadership,</li>
  <li class="mb2">• Designing and implementing shared services consolidations,</li>
  <li class="mb2">• Advising public and private clients on strategic methods to address complex projects.</li>
</ul>
<p>
Marcia has been a guest speaker at USC, Golden Gate University and San Francisco State
University on public policy topics including crisis management, emerging issues facing local
managers and career development.
</p>
<p>
Marcia studied Urban Planning at California State Polytechnic University, Pomona. Her graduate
work focused on Homeland Security Issues confronting local governments with the Naval
Postgraduate School, Center for Homeland Defense and Security in Monterey.
She and her family live in the San Francisco Bay Area.
</p>`}}).define("marcia-bio");(class extends C{static get observedAttributes(){return["timeout","entry","exit"]}created(){this.entry=this.entry||"fadeIn",this.exit=this.exit||"fadeOut",this.className="db animated "+this.entry,this.render()}render(){return this.html`
<div class="flex flex-wrap flex-nowrap-l">
  <marcia-bio class="w-50"></marcia-bio>
  <marcia-resume id="marcia-raines-resume" class="w-50"></marcia-resume>
</div>`}}).define("bio-resume");const{bind:L,wire:A}=C;a()("*",function(e,t){e.init?(window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){return window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config","UA-68515019-6"),t()):t()}),a()("/",function(){window.gtag("event","Home Viewed"),a()("/about")}),a()("/about",function(){window.gtag("event","About Us Viewed");const e=document.querySelector("#main-area"),t=e.firstElementChild;t&&t.classList.add(P);const n=A()`<about-us></about-us>`;setTimeout(()=>L(e)`${n}`,1e3)}),a()("/services",function(){window.gtag("event","Our Services Viewed");const e=document.querySelector("#main-area"),t=e.firstElementChild;t&&t.classList.add(P);const n=A()`<our-services></our-services>`;setTimeout(()=>L(e)`${n}`,1e3)}),a()("/contact",function(){window.gtag("event","Contact Information Viewed");const e=document.querySelector("#main-area"),t=e.firstElementChild;t&&t.classList.add(P);const n=A()`<contact-information></contact-information>`;setTimeout(()=>L(e)`${n}`,1e3)}),a()("/bio",function(){window.gtag("event","Bio | Resume Viewed");const e=document.querySelector("#main-area"),t=e.firstElementChild;t&&t.classList.add(P);const n=A()`<bio-resume></bio-resume>`;setTimeout(()=>L(e)`${n}`,1e3)}),a()("/resume","/bio#marcia-raines-resume"),a()();const P="fadeOut"},function(e,t){var n,i,a=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,c=[],p=!1,u=-1;function d(){p&&l&&(p=!1,l.length?c=l.concat(c):u=-1,c.length&&f())}function f(){if(!p){var e=r(d);p=!0;for(var t=c.length;t;){for(l=c,c=[];++u<t;)l&&l[u].run();u=-1,t=c.length}l=null,p=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||p||r(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){
/*!
ISC License

Copyright (c) 2014-2018, Andrea Giammarchi, @WebReflection

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

*/
function n(e,t){"use strict";var n=e.document,i=e.Object,a=function(e){var t,n,a,s,o=/^[A-Z]+[a-z]/,r=function(e,t){(t=t.toLowerCase())in l||(l[e]=(l[e]||[]).concat(t),l[t]=l[t.toUpperCase()]=e)},l=(i.create||i)(null),c={};for(n in e)for(s in e[n])for(a=e[n][s],l[s]=a,t=0;t<a.length;t++)l[a[t].toLowerCase()]=l[a[t].toUpperCase()]=s;return c.get=function(e){return"string"==typeof e?l[e]||(o.test(e)?[]:""):function(e){var t,n=[];for(t in l)e.test(t)&&n.push(t);return n}(e)},c.set=function(e,t){return o.test(e)?r(e,t):r(t,e),c},c}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});"object"!=typeof t&&(t={type:t||"auto"});var s,o,r,l,c,p,u,d,f,h="registerElement",m="__"+h+(1e5*e.Math.random()>>0),g="addEventListener",v="attached",y="Callback",b="detached",w="extends",x="attributeChanged"+y,C=v+y,_="connected"+y,k="disconnected"+y,E="created"+y,M=b+y,T="ADDITION",S="REMOVAL",L="DOMAttrModified",A="DOMContentLoaded",P="DOMSubtreeModified",H="<",N="=",O=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,j=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],R=[],D=[],I="",$=n.documentElement,q=R.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},F=i.prototype,z=F.hasOwnProperty,B=F.isPrototypeOf,U=i.defineProperty,V=[],G=i.getOwnPropertyDescriptor,W=i.getOwnPropertyNames,Z=i.getPrototypeOf,K=i.setPrototypeOf,X=!!i.__proto__,Y="__dreCEv1",J=e.customElements,Q=!/^force/.test(t.type)&&!!(J&&J.define&&J.get&&J.whenDefined),ee=i.create||i,te=e.Map||function(){var e,t=[],n=[];return{get:function(e){return n[q.call(t,e)]},set:function(i,a){(e=q.call(t,i))<0?n[t.push(i)-1]=a:n[e]=a}}},ne=e.Promise||function(e){var t=[],n=!1,i={catch:function(){return i},then:function(e){return t.push(e),n&&setTimeout(a,1),i}};function a(e){for(n=!0;t.length;)t.shift()(e)}return e(a),i},ie=!1,ae=ee(null),se=ee(null),oe=new te,re=function(e){return e.toLowerCase()},le=i.create||function e(t){return t?(e.prototype=t,new e):this},ce=K||(X?function(e,t){return e.__proto__=t,e}:W&&G?function(){function e(e,t){for(var n,i=W(t),a=0,s=i.length;a<s;a++)n=i[a],z.call(e,n)||U(e,n,G(t,n))}return function(t,n){do{e(t,n)}while((n=Z(n))&&!B.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),pe=e.MutationObserver||e.WebKitMutationObserver,ue=(e.HTMLElement||e.Element||e.Node).prototype,de=!B.call(ue,$),fe=de?function(e,t,n){return e[t]=n.value,e}:U,he=de?function(e){return 1===e.nodeType}:function(e){return B.call(ue,e)},me=de&&[],ge=ue.attachShadow,ve=ue.cloneNode,ye=ue.dispatchEvent,be=ue.getAttribute,we=ue.hasAttribute,xe=ue.removeAttribute,Ce=ue.setAttribute,_e=n.createElement,ke=n.importNode,Ee=_e,Me=pe&&{attributes:!0,characterData:!0,attributeOldValue:!0},Te=pe||function(e){He=!1,$.removeEventListener(L,Te)},Se=0,Le=h in n&&!/^force-all/.test(t.type),Ae=!0,Pe=!1,He=!0,Ne=!0,Oe=!0;function je(){var e=s.splice(0,s.length);for(Se=0;e.length;)e.shift().call(null,e.shift())}function Re(e,t){for(var n=0,i=e.length;n<i;n++)We(e[n],t)}function De(e){return function(t){he(t)&&(We(t,e),I.length&&Re(t.querySelectorAll(I),e))}}function Ie(e){var t=be.call(e,"is"),n=e.nodeName.toUpperCase(),i=q.call(R,t?N+t.toUpperCase():H+n);return t&&-1<i&&!$e(n,t)?-1:i}function $e(e,t){return-1<I.indexOf(e+'[is="'+t+'"]')}function qe(e){var t=e.currentTarget,n=e.attrChange,i=e.attrName,a=e.target,s=e[T]||2,o=e[S]||3;!Oe||a&&a!==t||!t[x]||"style"===i||e.prevValue===e.newValue&&(""!==e.newValue||n!==s&&n!==o)||t[x](i,n===s?null:e.prevValue,n===o?null:e.newValue)}function Fe(e){var t=De(e);return function(e){s.push(t,e.target),Se&&clearTimeout(Se),Se=setTimeout(je,1)}}function ze(e){Ne&&(Ne=!1,e.currentTarget.removeEventListener(A,ze)),I.length&&Re((e.target||n).querySelectorAll(I),e.detail===b?b:v),de&&function(){for(var e,t=0,n=me.length;t<n;t++)e=me[t],$.contains(e)||(n--,me.splice(t--,1),We(e,b))}()}function Be(e,t){Ce.call(this,e,t),o.call(this,{target:this})}function Ue(e,t,n){var i=t.apply(e,n),a=Ie(i);return-1<a&&d(i,D[a]),n.pop()&&I.length&&function(e){for(var t,n=0,i=e.length;n<i;n++)t=e[n],d(t,D[Ie(t)])}(i.querySelectorAll(I)),i}function Ve(e,t){ce(e,t),c?c.observe(e,Me):(He&&(e.setAttribute=Be,e[m]=l(e),e[g](P,o)),e[g](L,qe)),e[E]&&Oe&&(e.created=!0,e[E](),e.created=!1)}function Ge(e){throw new Error("A "+e+" type is already registered")}function We(e,t){var n,i,a=Ie(e);-1<a&&(u(e,D[a]),a=0,t!==v||e[v]?t!==b||e[b]||(e[v]=!1,e[b]=!0,i="disconnected",a=1):(e[b]=!1,e[v]=!0,i="connected",a=1,de&&q.call(me,e)<0&&me.push(e)),a&&(n=e[t+y]||e[i+y])&&n.call(e))}function Ze(){}function Ke(e,t,i){var a=i&&i[w]||"",s=t.prototype,o=le(s),r=t.observedAttributes||V,l={prototype:o};fe(o,E,{value:function(){if(ie)ie=!1;else if(!this[Y]){this[Y]=!0,new t(this),s[E]&&s[E].call(this);var e=ae[oe.get(t)];(!Q||e.create.length>1)&&Je(this)}}}),fe(o,x,{value:function(e){-1<q.call(r,e)&&s[x]&&s[x].apply(this,arguments)}}),s[_]&&fe(o,C,{value:s[_]}),s[k]&&fe(o,M,{value:s[k]}),a&&(l[w]=a),e=e.toUpperCase(),ae[e]={constructor:t,create:a?[a,re(e)]:[e]},oe.set(t,e),n[h](e.toLowerCase(),l),Qe(e),se[e].r()}function Xe(e){var t=ae[e.toUpperCase()];return t&&t.constructor}function Ye(e){return"string"==typeof e?e:e&&e.is||""}function Je(e){for(var t,n=e[x],i=n?e.attributes:V,a=i.length;a--;)t=i[a],n.call(e,t.name||t.nodeName,null,t.value||t.nodeValue)}function Qe(e){return(e=e.toUpperCase())in se||(se[e]={},se[e].p=new ne(function(t){se[e].r=t})),se[e].p}function et(){J&&delete e.customElements,U(e,"customElements",{configurable:!0,value:new Ze}),U(e,"CustomElementRegistry",{configurable:!0,value:Ze});for(var t=function(t){var i=e[t];if(i){e[t]=function(e){var t,a;return e||(e=this),e[Y]||(ie=!0,t=ae[oe.get(e.constructor)],(e=(a=Q&&1===t.create.length)?Reflect.construct(i,V,t.constructor):n.createElement.apply(n,t.create))[Y]=!0,ie=!1,a||Je(e)),e},e[t].prototype=i.prototype;try{i.prototype.constructor=e[t]}catch(n){!0,U(i,Y,{value:e[t]})}}},i=a.get(/^HTML[A-Z]*[a-z]/),s=i.length;s--;t(i[s]));n.createElement=function(e,t){var n=Ye(t);return n?Ee.call(this,e,re(n)):Ee.call(this,e)},Le||(Pe=!0,n[h](""))}if(pe&&((f=n.createElement("div")).innerHTML="<div><div></div></div>",new pe(function(e,t){if(e[0]&&"childList"==e[0].type&&!e[0].removedNodes[0].childNodes.length){var n=(f=G(ue,"innerHTML"))&&f.set;n&&U(ue,"innerHTML",{set:function(e){for(;this.lastChild;)this.removeChild(this.lastChild);n.call(this,e)}})}t.disconnect(),f=null}).observe(f,{childList:!0,subtree:!0}),f.innerHTML=""),Le||(K||X?(u=function(e,t){B.call(t,e)||Ve(e,t)},d=Ve):d=u=function(e,t){e[m]||(e[m]=i(!0),Ve(e,t))},de?(He=!1,function(){var e=G(ue,g),t=e.value,n=function(e){var t=new CustomEvent(L,{bubbles:!0});t.attrName=e,t.prevValue=be.call(this,e),t.newValue=null,t[S]=t.attrChange=2,xe.call(this,e),ye.call(this,t)},i=function(e,t){var n=we.call(this,e),i=n&&be.call(this,e),a=new CustomEvent(L,{bubbles:!0});Ce.call(this,e,t),a.attrName=e,a.prevValue=n?i:null,a.newValue=t,n?a.MODIFICATION=a.attrChange=1:a[T]=a.attrChange=0,ye.call(this,a)},a=function(e){var t,n=e.currentTarget,i=n[m],a=e.propertyName;i.hasOwnProperty(a)&&(i=i[a],(t=new CustomEvent(L,{bubbles:!0})).attrName=i.name,t.prevValue=i.value||null,t.newValue=i.value=n[a]||null,null==t.prevValue?t[T]=t.attrChange=0:t.MODIFICATION=t.attrChange=1,ye.call(n,t))};e.value=function(e,s,o){e===L&&this[x]&&this.setAttribute!==i&&(this[m]={className:{name:"class",value:this.className}},this.setAttribute=i,this.removeAttribute=n,t.call(this,"propertychange",a)),t.call(this,e,s,o)},U(ue,g,e)}()):pe||($[g](L,Te),$.setAttribute(m,1),$.removeAttribute(m),He&&(o=function(e){var t,n,i;if(this===e.target){for(i in t=this[m],this[m]=n=l(this),n){if(!(i in t))return r(0,this,i,t[i],n[i],T);if(n[i]!==t[i])return r(1,this,i,t[i],n[i],"MODIFICATION")}for(i in t)if(!(i in n))return r(2,this,i,t[i],n[i],S)}},r=function(e,t,n,i,a,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:i,newValue:a};o[s]=e,qe(o)},l=function(e){for(var t,n,i={},a=e.attributes,s=0,o=a.length;s<o;s++)"setAttribute"!==(n=(t=a[s]).name)&&(i[n]=t.value);return i})),n[h]=function(e,t){if(i=e.toUpperCase(),Ae&&(Ae=!1,pe?(c=function(e,t){function n(e,t){for(var n=0,i=e.length;n<i;t(e[n++]));}return new pe(function(i){for(var a,s,o,r=0,l=i.length;r<l;r++)"childList"===(a=i[r]).type?(n(a.addedNodes,e),n(a.removedNodes,t)):(s=a.target,Oe&&s[x]&&"style"!==a.attributeName&&(o=be.call(s,a.attributeName))!==a.oldValue&&s[x](a.attributeName,a.oldValue,o))})}(De(v),De(b)),(p=function(e){return c.observe(e,{childList:!0,subtree:!0}),e})(n),ge&&(ue.attachShadow=function(){return p(ge.apply(this,arguments))})):(s=[],n[g]("DOMNodeInserted",Fe(v)),n[g]("DOMNodeRemoved",Fe(b))),n[g](A,ze),n[g]("readystatechange",ze),n.importNode=function(e,t){switch(e.nodeType){case 1:return Ue(n,ke,[e,!!t]);case 11:for(var i=n.createDocumentFragment(),a=e.childNodes,s=a.length,o=0;o<s;o++)i.appendChild(n.importNode(a[o],!!t));return i;default:return ve.call(e,!!t)}},ue.cloneNode=function(e){return Ue(this,ve,[!!e])}),Pe)return Pe=!1;if(-2<q.call(R,N+i)+q.call(R,H+i)&&Ge(e),!O.test(i)||-1<q.call(j,i))throw new Error("The type "+e+" is invalid");var i,a,o=function(){return l?n.createElement(u,i):n.createElement(u)},r=t||F,l=z.call(r,w),u=l?t[w].toUpperCase():i;return l&&-1<q.call(R,H+u)&&Ge(u),a=R.push((l?N:H)+i)-1,I=I.concat(I.length?",":"",l?u+'[is="'+e.toLowerCase()+'"]':u),o.prototype=D[a]=z.call(r,"prototype")?r.prototype:le(ue),I.length&&Re(n.querySelectorAll(I),v),o},n.createElement=Ee=function(e,t){var i=Ye(t),a=i?_e.call(n,e,re(i)):_e.call(n,e),s=""+e,o=q.call(R,(i?N:H)+(i||s).toUpperCase()),r=-1<o;return i&&(a.setAttribute("is",i=i.toLowerCase()),r&&(r=$e(s.toUpperCase(),i))),Oe=!n.createElement.innerHTMLHelper,r&&d(a,D[o]),a}),Ze.prototype={constructor:Ze,define:Q?function(e,t,n){if(n)Ke(e,t,n);else{var i=e.toUpperCase();ae[i]={constructor:t,create:[i]},oe.set(t,i),J.define(e,t)}}:Ke,get:Q?function(e){return J.get(e)||Xe(e)}:Xe,whenDefined:Q?function(e){return ne.race([J.whenDefined(e),Qe(e)])}:Qe},!J||/^force/.test(t.type))et();else if(!t.noBuiltIn)try{!function(t,i,a){var s=new RegExp("^<a\\s+is=('|\")"+a+"\\1></a>$");if(i[w]="a",(t.prototype=le(HTMLAnchorElement.prototype)).constructor=t,e.customElements.define(a,t,i),!s.test(n.createElement("a",{is:a}).outerHTML)||!s.test((new t).outerHTML))throw i}(function e(){return Reflect.construct(HTMLAnchorElement,[],e)},{},"document-register-element-a")}catch(e){et()}if(!t.noBuiltIn)try{_e.call(n,"a","a")}catch(e){re=function(e){return{is:e.toLowerCase()}}}}e.exports=n,n(t)}).call(this,n(3))}]);