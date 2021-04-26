(()=>{"use strict";const r="transitionend";const t=e=>{let t=e.getAttribute("data-mdb-target");if(!t||"#"===t){const n=e.getAttribute("href");t=n&&"#"!==n?n.trim():null}return t},a=e=>{e=t(e);return e&&document.querySelector(e)?e:null},s=e=>{e=t(e);return e?document.querySelector(e):null},o=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);var r=Number.parseFloat(t),e=Number.parseFloat(n);return r||e?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0},l=e=>(e[0]||e).nodeType,c=(t,e)=>{let n=!1;e+=5;t.addEventListener(r,function e(){n=!0,t.removeEventListener(r,e)}),setTimeout(()=>{n||t.dispatchEvent(new Event(r))},e)};const g=()=>{var{jQuery:e}=window;return e&&!document.body.hasAttribute("data-mdb-no-jquery")?e:null};document.documentElement.dir;const i=(()=>{const r={};let s=1;return{set(e,t,n){void 0===e.bsKey&&(e.bsKey={key:t,id:s},s++),r[e.bsKey.id]=n},get(e,t){if(!e||void 0===e.bsKey)return null;e=e.bsKey;return e.key===t?r[e.id]:null},delete(e,t){var n;void 0===e.bsKey||(n=e.bsKey).key===t&&(delete r[n.id],delete e.bsKey)}}})(),u={setData(e,t,n){i.set(e,t,n)},getData(e,t){return i.get(e,t)},removeData(e,t){i.delete(e,t)}},v=/[^.]*(?=\..*)\.|.*/,h=/\..*/,d=/::\d+$/,n={};let f=1;const p={mouseenter:"mouseover",mouseleave:"mouseout"},m=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function _(e,t){return t&&`${t}::${f++}`||e.uidEvent||f++}function b(e){var t=_(e);return e.uidEvent=t,n[t]=n[t]||{},n[t]}function y(n,r,s=null){var i=Object.keys(n);for(let e=0,t=i.length;e<t;e++){var o=n[i[e]];if(o.originalHandler===r&&o.delegationSelector===s)return o}return null}function E(e,t,n){var r="string"==typeof t,n=r?n:t;let s=e.replace(h,"");t=p[s];return t&&(s=t),m.has(s)||(s=e),[r,n,s]}function A(e,t,n,r,s){if("string"==typeof t&&e){n||(n=r,r=null);var[i,o,a]=E(t,n,r);const h=b(e),f=h[a]||(h[a]={}),p=y(f,o,i?n:null);if(p)p.oneOff=p.oneOff&&s;else{var l,c,u,d,g,t=_(o,t.replace(v,""));const m=i?(u=e,d=n,g=r,function n(r){var s=u.querySelectorAll(d);for(let{target:t}=r;t&&t!==this;t=t.parentNode)for(let e=s.length;e--;)if(s[e]===t)return r.delegateTarget=t,n.oneOff&&L.off(u,r.type,g),g.apply(t,[r]);return null}):(l=e,c=n,function e(t){return t.delegateTarget=l,e.oneOff&&L.off(l,t.type,c),c.apply(l,[t])});m.delegationSelector=i?n:null,m.originalHandler=o,m.oneOff=s,m.uidEvent=t,f[t]=m,e.addEventListener(a,m,i)}}}function D(e,t,n,r,s){r=y(t[n],r,s);r&&(e.removeEventListener(n,r,Boolean(s)),delete t[n][r.uidEvent])}const L={on(e,t,n,r){A(e,t,n,r,!1)},one(e,t,n,r){A(e,t,n,r,!0)},off(n,r,e,t){if("string"==typeof r&&n){const[s,i,o]=E(r,e,t),a=o!==r,l=b(n);t=r.startsWith(".");if(void 0!==i)return l&&l[o]?void D(n,l,o,i,s?e:null):void 0;t&&Object.keys(l).forEach(e=>{!function(t,n,r,s){const i=n[r]||{};Object.keys(i).forEach(e=>{e.includes(s)&&(e=i[e],D(t,n,r,e.originalHandler,e.delegationSelector))})}(n,l,e,r.slice(1))});const c=l[o]||{};Object.keys(c).forEach(e=>{var t=e.replace(d,"");a&&!r.includes(t)||(e=c[e],D(n,l,o,e.originalHandler,e.delegationSelector))})}},trigger(e,t,n){if("string"!=typeof t||!e)return null;const r=g();var s=t.replace(h,""),i=t!==s,o=m.has(s);let a,l=!0,c=!0,u=!1,d=null;return i&&r&&(a=r.Event(t,n),r(e).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),o?(d=document.createEvent("HTMLEvents"),d.initEvent(s,l,!0)):d=new CustomEvent(t,{bubbles:l,cancelable:!0}),void 0!==n&&Object.keys(n).forEach(e=>{Object.defineProperty(d,e,{get(){return n[e]}})}),u&&d.preventDefault(),c&&e.dispatchEvent(d),d.defaultPrevented&&void 0!==a&&a.preventDefault(),d}},w=L;function T(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function O(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const S={setDataAttribute(e,t,n){e.setAttribute(`data-mdb-${O(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-mdb-${O(t)}`)},getDataAttributes(n){if(!n)return{};const r={};return Object.keys(n.dataset).filter(e=>e.startsWith("mdb")).forEach(e=>{let t=e.replace(/^mdb/,"");t=t.charAt(0).toLowerCase()+t.slice(1,t.length),r[t]=T(n.dataset[e])}),r},getDataAttribute(e,t){return T(e.getAttribute(`data-mdb-${O(t)}`))},offset(e){e=e.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}},$={matches(e,t){return e.matches(t)},find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){const n=[].concat(...e.children);return n.filter(e=>e.matches(t))},parents(e,t){const n=[];let r=e.parentNode;for(;r&&r.nodeType===Node.ELEMENT_NODE&&3!==r.nodeType;)this.matches(r,t)&&n.push(r),r=r.parentNode;return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(this.matches(n,t))return[n];n=n.nextElementSibling}return[]}};const C="collapse",k="bs.collapse";k;const N={toggle:!0,parent:""},j={toggle:"boolean",parent:"(string|element)"};var x,K,e;const I="show",P="collapse",q="collapsing",H="collapsed",M='[data-mdb-toggle="collapse"]';class B extends class{constructor(e){e&&(this._element=e,u.setData(e,this.constructor.DATA_KEY,this))}dispose(){u.removeData(this._element,this.constructor.DATA_KEY),this._element=null}static getInstance(e){return u.getData(e,this.DATA_KEY)}static get VERSION(){return"5.0.0-beta2"}}{constructor(n,e){super(n),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=$.find(`${M}[href="#${n.id}"],`+`${M}[data-mdb-target="#${n.id}"]`);var r=$.find(M);for(let e=0,t=r.length;e<t;e++){var s=r[e],i=a(s),o=$.find(i).filter(e=>e===n);null!==i&&o.length&&(this._selector=i,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get Default(){return N}static get DATA_KEY(){return k}toggle(){this._element.classList.contains(I)?this.hide():this.show()}show(){if(!this._isTransitioning&&!this._element.classList.contains(I)){let e,t;this._parent&&(e=$.find(".show, .collapsing",this._parent).filter(e=>"string"==typeof this._config.parent?e.getAttribute("data-mdb-parent")===this._config.parent:e.classList.contains(P)),0===e.length&&(e=null));const s=$.findOne(this._selector);if(e){var n=e.find(e=>s!==e);if(t=n?u.getData(n,k):null,t&&t._isTransitioning)return}if(!w.trigger(this._element,"show.bs.collapse").defaultPrevented){e&&e.forEach(e=>{s!==e&&B.collapseInterface(e,"hide"),t||u.setData(e,k,null)});const i=this._getDimension();this._element.classList.remove(P),this._element.classList.add(q),this._element.style[i]=0,this._triggerArray.length&&this._triggerArray.forEach(e=>{e.classList.remove(H),e.setAttribute("aria-expanded",!0)}),this.setTransitioning(!0);var r=`scroll${i[0].toUpperCase()+i.slice(1)}`,n=o(this._element);w.one(this._element,"transitionend",()=>{this._element.classList.remove(q),this._element.classList.add(P,I),this._element.style[i]="",this.setTransitioning(!1),w.trigger(this._element,"shown.bs.collapse")}),c(this._element,n),this._element.style[i]=`${this._element[r]}px`}}}hide(){if(!this._isTransitioning&&this._element.classList.contains(I)&&!w.trigger(this._element,"hide.bs.collapse").defaultPrevented){var e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,this._element.offsetHeight,this._element.classList.add(q),this._element.classList.remove(P,I);var t=this._triggerArray.length;if(0<t)for(let e=0;e<t;e++){const n=this._triggerArray[e],r=s(n);r&&!r.classList.contains(I)&&(n.classList.add(H),n.setAttribute("aria-expanded",!1))}this.setTransitioning(!0);this._element.style[e]="";e=o(this._element);w.one(this._element,"transitionend",()=>{this.setTransitioning(!1),this._element.classList.remove(q),this._element.classList.add(P),w.trigger(this._element,"hidden.bs.collapse")}),c(this._element,e)}}setTransitioning(e){this._isTransitioning=e}dispose(){super.dispose(),this._config=null,this._parent=null,this._triggerArray=null,this._isTransitioning=null}_getConfig(e){var s,i,o;return(e={...N,...e}).toggle=Boolean(e.toggle),s=C,i=e,o=j,Object.keys(o).forEach(e=>{var t,n=o[e],r=i[e],t=r&&l(r)?"element":null==(t=r)?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(n).test(t))throw new Error(`${s.toUpperCase()}: `+`Option "${e}" provided type "${t}" `+`but expected type "${n}".`)}),e}_getDimension(){return this._element.classList.contains("width")?"width":"height"}_getParent(){let{parent:e}=this._config;l(e)?void 0===e.jquery&&void 0===e[0]||(e=e[0]):e=$.findOne(e);var t=`${M}[data-mdb-parent="${e}"]`;return $.find(t,e).forEach(e=>{var t=s(e);this._addAriaAndCollapsedClass(t,[e])}),e}_addAriaAndCollapsedClass(e,t){if(e&&t.length){const n=e.classList.contains(I);t.forEach(e=>{n?e.classList.remove(H):e.classList.add(H),e.setAttribute("aria-expanded",n)})}}static collapseInterface(e,t){let n=u.getData(e,k);const r={...N,...S.getDataAttributes(e),..."object"==typeof t&&t?t:{}};if(!n&&r.toggle&&"string"==typeof t&&/show|hide/.test(t)&&(r.toggle=!1),n=n||new B(e,r),"string"==typeof t){if(void 0===n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}static jQueryInterface(e){return this.each(function(){B.collapseInterface(this,e)})}}w.on(document,"click.bs.collapse.data-api",M,function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const r=S.getDataAttributes(this);e=a(this);const t=$.find(e);t.forEach(e=>{const t=u.getData(e,k);let n;n=t?(null===t._parent&&"string"==typeof r.parent&&(t._config.parent=r.parent,t._parent=t._getParent()),"toggle"):r,B.collapseInterface(e,n)})}),x=C,K=B,e=()=>{const e=g();if(e){const t=e.fn[x];e.fn[x]=K.jQueryInterface,e.fn[x].Constructor=K,e.fn[x].noConflict=()=>(e.fn[x]=t,K.jQueryInterface)}},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()})();