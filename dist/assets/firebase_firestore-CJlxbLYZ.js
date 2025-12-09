import{L as hl,_ as fl,C as dl,r as Xi,a as ml,F as gl,b as Lt,g as pl,c as _l,d as yl,i as Yo,p as El,u as Tl,e as Il,f as vl,h as Ut,j as Al,k as wl,S as Rl}from"./firebase_core-DvOidIsA.js";var Yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ht,Jo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,g){function _(){}_.prototype=g.prototype,E.F=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.D=function(T,y,A){for(var p=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)p[Et-2]=arguments[Et];return g.prototype[y].apply(T,p)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,e),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,_){_||(_=0);const T=Array(16);if(typeof g=="string")for(var y=0;y<16;++y)T[y]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(y=0;y<16;++y)T[y]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],y=E.g[2];let A=E.g[3],p;p=g+(A^_&(y^A))+T[0]+3614090360&4294967295,g=_+(p<<7&4294967295|p>>>25),p=A+(y^g&(_^y))+T[1]+3905402710&4294967295,A=g+(p<<12&4294967295|p>>>20),p=y+(_^A&(g^_))+T[2]+606105819&4294967295,y=A+(p<<17&4294967295|p>>>15),p=_+(g^y&(A^g))+T[3]+3250441966&4294967295,_=y+(p<<22&4294967295|p>>>10),p=g+(A^_&(y^A))+T[4]+4118548399&4294967295,g=_+(p<<7&4294967295|p>>>25),p=A+(y^g&(_^y))+T[5]+1200080426&4294967295,A=g+(p<<12&4294967295|p>>>20),p=y+(_^A&(g^_))+T[6]+2821735955&4294967295,y=A+(p<<17&4294967295|p>>>15),p=_+(g^y&(A^g))+T[7]+4249261313&4294967295,_=y+(p<<22&4294967295|p>>>10),p=g+(A^_&(y^A))+T[8]+1770035416&4294967295,g=_+(p<<7&4294967295|p>>>25),p=A+(y^g&(_^y))+T[9]+2336552879&4294967295,A=g+(p<<12&4294967295|p>>>20),p=y+(_^A&(g^_))+T[10]+4294925233&4294967295,y=A+(p<<17&4294967295|p>>>15),p=_+(g^y&(A^g))+T[11]+2304563134&4294967295,_=y+(p<<22&4294967295|p>>>10),p=g+(A^_&(y^A))+T[12]+1804603682&4294967295,g=_+(p<<7&4294967295|p>>>25),p=A+(y^g&(_^y))+T[13]+4254626195&4294967295,A=g+(p<<12&4294967295|p>>>20),p=y+(_^A&(g^_))+T[14]+2792965006&4294967295,y=A+(p<<17&4294967295|p>>>15),p=_+(g^y&(A^g))+T[15]+1236535329&4294967295,_=y+(p<<22&4294967295|p>>>10),p=g+(y^A&(_^y))+T[1]+4129170786&4294967295,g=_+(p<<5&4294967295|p>>>27),p=A+(_^y&(g^_))+T[6]+3225465664&4294967295,A=g+(p<<9&4294967295|p>>>23),p=y+(g^_&(A^g))+T[11]+643717713&4294967295,y=A+(p<<14&4294967295|p>>>18),p=_+(A^g&(y^A))+T[0]+3921069994&4294967295,_=y+(p<<20&4294967295|p>>>12),p=g+(y^A&(_^y))+T[5]+3593408605&4294967295,g=_+(p<<5&4294967295|p>>>27),p=A+(_^y&(g^_))+T[10]+38016083&4294967295,A=g+(p<<9&4294967295|p>>>23),p=y+(g^_&(A^g))+T[15]+3634488961&4294967295,y=A+(p<<14&4294967295|p>>>18),p=_+(A^g&(y^A))+T[4]+3889429448&4294967295,_=y+(p<<20&4294967295|p>>>12),p=g+(y^A&(_^y))+T[9]+568446438&4294967295,g=_+(p<<5&4294967295|p>>>27),p=A+(_^y&(g^_))+T[14]+3275163606&4294967295,A=g+(p<<9&4294967295|p>>>23),p=y+(g^_&(A^g))+T[3]+4107603335&4294967295,y=A+(p<<14&4294967295|p>>>18),p=_+(A^g&(y^A))+T[8]+1163531501&4294967295,_=y+(p<<20&4294967295|p>>>12),p=g+(y^A&(_^y))+T[13]+2850285829&4294967295,g=_+(p<<5&4294967295|p>>>27),p=A+(_^y&(g^_))+T[2]+4243563512&4294967295,A=g+(p<<9&4294967295|p>>>23),p=y+(g^_&(A^g))+T[7]+1735328473&4294967295,y=A+(p<<14&4294967295|p>>>18),p=_+(A^g&(y^A))+T[12]+2368359562&4294967295,_=y+(p<<20&4294967295|p>>>12),p=g+(_^y^A)+T[5]+4294588738&4294967295,g=_+(p<<4&4294967295|p>>>28),p=A+(g^_^y)+T[8]+2272392833&4294967295,A=g+(p<<11&4294967295|p>>>21),p=y+(A^g^_)+T[11]+1839030562&4294967295,y=A+(p<<16&4294967295|p>>>16),p=_+(y^A^g)+T[14]+4259657740&4294967295,_=y+(p<<23&4294967295|p>>>9),p=g+(_^y^A)+T[1]+2763975236&4294967295,g=_+(p<<4&4294967295|p>>>28),p=A+(g^_^y)+T[4]+1272893353&4294967295,A=g+(p<<11&4294967295|p>>>21),p=y+(A^g^_)+T[7]+4139469664&4294967295,y=A+(p<<16&4294967295|p>>>16),p=_+(y^A^g)+T[10]+3200236656&4294967295,_=y+(p<<23&4294967295|p>>>9),p=g+(_^y^A)+T[13]+681279174&4294967295,g=_+(p<<4&4294967295|p>>>28),p=A+(g^_^y)+T[0]+3936430074&4294967295,A=g+(p<<11&4294967295|p>>>21),p=y+(A^g^_)+T[3]+3572445317&4294967295,y=A+(p<<16&4294967295|p>>>16),p=_+(y^A^g)+T[6]+76029189&4294967295,_=y+(p<<23&4294967295|p>>>9),p=g+(_^y^A)+T[9]+3654602809&4294967295,g=_+(p<<4&4294967295|p>>>28),p=A+(g^_^y)+T[12]+3873151461&4294967295,A=g+(p<<11&4294967295|p>>>21),p=y+(A^g^_)+T[15]+530742520&4294967295,y=A+(p<<16&4294967295|p>>>16),p=_+(y^A^g)+T[2]+3299628645&4294967295,_=y+(p<<23&4294967295|p>>>9),p=g+(y^(_|~A))+T[0]+4096336452&4294967295,g=_+(p<<6&4294967295|p>>>26),p=A+(_^(g|~y))+T[7]+1126891415&4294967295,A=g+(p<<10&4294967295|p>>>22),p=y+(g^(A|~_))+T[14]+2878612391&4294967295,y=A+(p<<15&4294967295|p>>>17),p=_+(A^(y|~g))+T[5]+4237533241&4294967295,_=y+(p<<21&4294967295|p>>>11),p=g+(y^(_|~A))+T[12]+1700485571&4294967295,g=_+(p<<6&4294967295|p>>>26),p=A+(_^(g|~y))+T[3]+2399980690&4294967295,A=g+(p<<10&4294967295|p>>>22),p=y+(g^(A|~_))+T[10]+4293915773&4294967295,y=A+(p<<15&4294967295|p>>>17),p=_+(A^(y|~g))+T[1]+2240044497&4294967295,_=y+(p<<21&4294967295|p>>>11),p=g+(y^(_|~A))+T[8]+1873313359&4294967295,g=_+(p<<6&4294967295|p>>>26),p=A+(_^(g|~y))+T[15]+4264355552&4294967295,A=g+(p<<10&4294967295|p>>>22),p=y+(g^(A|~_))+T[6]+2734768916&4294967295,y=A+(p<<15&4294967295|p>>>17),p=_+(A^(y|~g))+T[13]+1309151649&4294967295,_=y+(p<<21&4294967295|p>>>11),p=g+(y^(_|~A))+T[4]+4149444226&4294967295,g=_+(p<<6&4294967295|p>>>26),p=A+(_^(g|~y))+T[11]+3174756917&4294967295,A=g+(p<<10&4294967295|p>>>22),p=y+(g^(A|~_))+T[2]+718787259&4294967295,y=A+(p<<15&4294967295|p>>>17),p=_+(A^(y|~g))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+A&4294967295}n.prototype.v=function(E,g){g===void 0&&(g=E.length);const _=g-this.blockSize,T=this.C;let y=this.h,A=0;for(;A<g;){if(y==0)for(;A<=_;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<g;)if(T[y++]=E.charCodeAt(A++),y==this.blockSize){i(this,T),y=0;break}}else for(;A<g;)if(T[y++]=E[A++],y==this.blockSize){i(this,T),y=0;break}}this.h=y,this.o+=g},n.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;g=this.o*8;for(var _=E.length-8;_<E.length;++_)E[_]=g&255,g/=256;for(this.v(E),E=Array(16),g=0,_=0;_<4;++_)for(let T=0;T<32;T+=8)E[g++]=this.g[_]>>>T&255;return E};function o(E,g){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function a(E,g){this.h=g;const _=[];let T=!0;for(let y=E.length-1;y>=0;y--){const A=E[y]|0;T&&A==g||(_[y]=A,T=!1)}this.g=_}var c={};function h(E){return-128<=E&&E<128?o(E,function(g){return new a([g|0],g<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return I;if(E<0)return b(d(-E));const g=[];let _=1;for(let T=0;E>=_;T++)g[T]=E/_|0,_*=4294967296;return new a(g,0)}function m(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return b(m(E.substring(1),g));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(g,8));let T=I;for(let A=0;A<E.length;A+=8){var y=Math.min(8,E.length-A);const p=parseInt(E.substring(A,A+y),g);y<8?(y=d(Math.pow(g,y)),T=T.j(y).add(d(p))):(T=T.j(_),T=T.add(d(p)))}return T}var I=h(0),R=h(1),S=h(16777216);r=a.prototype,r.m=function(){if(x(this))return-b(this).m();let E=0,g=1;for(let _=0;_<this.g.length;_++){const T=this.i(_);E+=(T>=0?T:4294967296+T)*g,g*=4294967296}return E},r.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(x(this))return"-"+b(this).toString(E);const g=d(Math.pow(E,6));var _=this;let T="";for(;;){const y=ft(_,g).g;_=K(_,y.j(g));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(E);if(_=y,k(_))return A+T;for(;A.length<6;)A="0"+A;T=A+T}},r.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(let g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=K(this,E),x(E)?-1:k(E)?0:1};function b(E){const g=E.g.length,_=[];for(let T=0;T<g;T++)_[T]=~E.g[T];return new a(_,~E.h).add(R)}r.abs=function(){return x(this)?b(this):this},r.add=function(E){const g=Math.max(this.g.length,E.g.length),_=[];let T=0;for(let y=0;y<=g;y++){let A=T+(this.i(y)&65535)+(E.i(y)&65535),p=(A>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);T=p>>>16,A&=65535,p&=65535,_[y]=p<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function K(E,g){return E.add(b(g))}r.j=function(E){if(k(this)||k(E))return I;if(x(this))return x(E)?b(this).j(b(E)):b(b(this).j(E));if(x(E))return b(this.j(b(E)));if(this.l(S)<0&&E.l(S)<0)return d(this.m()*E.m());const g=this.g.length+E.g.length,_=[];for(var T=0;T<2*g;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(let y=0;y<E.g.length;y++){const A=this.i(T)>>>16,p=this.i(T)&65535,Et=E.i(y)>>>16,ie=E.i(y)&65535;_[2*T+2*y]+=p*ie,G(_,2*T+2*y),_[2*T+2*y+1]+=A*ie,G(_,2*T+2*y+1),_[2*T+2*y+1]+=p*Et,G(_,2*T+2*y+1),_[2*T+2*y+2]+=A*Et,G(_,2*T+2*y+2)}for(E=0;E<g;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=g;E<2*g;E++)_[E]=0;return new a(_,0)};function G(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function W(E,g){this.g=E,this.h=g}function ft(E,g){if(k(g))throw Error("division by zero");if(k(E))return new W(I,I);if(x(E))return g=ft(b(E),g),new W(b(g.g),b(g.h));if(x(g))return g=ft(E,b(g)),new W(b(g.g),g.h);if(E.g.length>30){if(x(E)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var _=R,T=g;T.l(E)<=0;)_=vt(_),T=vt(T);var y=st(_,1),A=st(T,1);for(T=st(T,2),_=st(_,2);!k(T);){var p=A.add(T);p.l(E)<=0&&(y=y.add(_),A=p),T=st(T,1),_=st(_,1)}return g=K(E,y.j(g)),new W(y,g)}for(y=I;E.l(g)>=0;){for(_=Math.max(1,Math.floor(E.m()/g.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),A=d(_),p=A.j(g);x(p)||p.l(E)>0;)_-=T,A=d(_),p=A.j(g);k(A)&&(A=R),y=y.add(A),E=K(E,p)}return new W(y,E)}r.B=function(E){return ft(this,E).h},r.and=function(E){const g=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<g;T++)_[T]=this.i(T)&E.i(T);return new a(_,this.h&E.h)},r.or=function(E){const g=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<g;T++)_[T]=this.i(T)|E.i(T);return new a(_,this.h|E.h)},r.xor=function(E){const g=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<g;T++)_[T]=this.i(T)^E.i(T);return new a(_,this.h^E.h)};function vt(E){const g=E.g.length+1,_=[];for(let T=0;T<g;T++)_[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(_,E.h)}function st(E,g){const _=g>>5;g%=32;const T=E.g.length-_,y=[];for(let A=0;A<T;A++)y[A]=g>0?E.i(A+_)>>>g|E.i(A+_+1)<<32-g:E.i(A+_);return new a(y,E.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Jo=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Ht=a}).apply(typeof Yi<"u"?Yi:typeof self<"u"?self:typeof window<"u"?window:{});var Ln=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zo,tn,ta,Bn,Yr,ea,na,ra;(function(){var r,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ln=="object"&&Ln];for(var u=0;u<s.length;++u){var l=s[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,u){if(u)t:{var l=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var v=s[f];if(!(v in l))break t;l=l[v]}s=s[s.length-1],f=l[s],u=u(f),u!=f&&u!=null&&t(l,s,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(u){var l=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&l.push([f,u[f]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function h(s,u,l){return s.call.apply(s.bind,arguments)}function d(s,u,l){return d=h,d.apply(null,arguments)}function m(s,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function I(s,u){function l(){}l.prototype=u.prototype,s.Z=u.prototype,s.prototype=new l,s.prototype.constructor=s,s.Ob=function(f,v,w){for(var C=Array(arguments.length-2),U=2;U<arguments.length;U++)C[U-2]=arguments[U];return u.prototype[v].apply(f,C)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function S(s){const u=s.length;if(u>0){const l=Array(u);for(let f=0;f<u;f++)l[f]=s[f];return l}return[]}function k(s,u){for(let f=1;f<arguments.length;f++){const v=arguments[f];var l=typeof v;if(l=l!="object"?l:v?Array.isArray(v)?"array":l:"null",l=="array"||l=="object"&&typeof v.length=="number"){l=s.length||0;const w=v.length||0;s.length=l+w;for(let C=0;C<w;C++)s[l+C]=v[C]}else s.push(v)}}class x{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function b(s){a.setTimeout(()=>{throw s},0)}function K(){var s=E;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class G{constructor(){this.h=this.g=null}add(u,l){const f=W.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var W=new x(()=>new ft,s=>s.reset());class ft{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let vt,st=!1,E=new G,g=()=>{const s=Promise.resolve(void 0);vt=()=>{s.then(_)}};function _(){for(var s;s=K();){try{s.h.call(s.g)}catch(l){b(l)}var u=W;u.j(s),u.h<100&&(u.h++,s.next=u.g,u.g=s)}st=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};a.addEventListener("test",l,u),a.removeEventListener("test",l,u)}catch{}return s}();function p(s){return/^[\s\xa0]*$/.test(s)}function Et(s,u){y.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,u)}I(Et,y),Et.prototype.init=function(s,u){const l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget,u||(l=="mouseover"?u=s.fromElement:l=="mouseout"&&(u=s.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&Et.Z.h.call(this)},Et.prototype.h=function(){Et.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var ie="closure_listenable_"+(Math.random()*1e6|0),ku=0;function xu(s,u,l,f,v){this.listener=s,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=v,this.key=++ku,this.da=this.fa=!1}function vn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function An(s,u,l){for(const f in s)u.call(l,s[f],f,s)}function Mu(s,u){for(const l in s)u.call(void 0,s[l],l,s)}function Hs(s){const u={};for(const l in s)u[l]=s[l];return u}const Xs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ys(s,u){let l,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(l in f)s[l]=f[l];for(let w=0;w<Xs.length;w++)l=Xs[w],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function wn(s){this.src=s,this.g={},this.h=0}wn.prototype.add=function(s,u,l,f,v){const w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);const C=Ar(s,u,f,v);return C>-1?(u=s[C],l||(u.fa=!1)):(u=new xu(u,this.src,w,!!f,v),u.fa=l,s.push(u)),u};function vr(s,u){const l=u.type;if(l in s.g){var f=s.g[l],v=Array.prototype.indexOf.call(f,u,void 0),w;(w=v>=0)&&Array.prototype.splice.call(f,v,1),w&&(vn(u),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Ar(s,u,l,f){for(let v=0;v<s.length;++v){const w=s[v];if(!w.da&&w.listener==u&&w.capture==!!l&&w.ha==f)return v}return-1}var wr="closure_lm_"+(Math.random()*1e6|0),Rr={};function Js(s,u,l,f,v){if(Array.isArray(u)){for(let w=0;w<u.length;w++)Js(s,u[w],l,f,v);return null}return l=ei(l),s&&s[ie]?s.J(u,l,c(f)?!!f.capture:!1,v):Ou(s,u,l,!1,f,v)}function Ou(s,u,l,f,v,w){if(!u)throw Error("Invalid event type");const C=c(v)?!!v.capture:!!v;let U=Pr(s);if(U||(s[wr]=U=new wn(s)),l=U.add(u,l,f,C,w),l.proxy)return l;if(f=Lu(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)A||(v=C),v===void 0&&(v=!1),s.addEventListener(u.toString(),f,v);else if(s.attachEvent)s.attachEvent(ti(u.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Lu(){function s(l){return u.call(s.src,s.listener,l)}const u=Fu;return s}function Zs(s,u,l,f,v){if(Array.isArray(u))for(var w=0;w<u.length;w++)Zs(s,u[w],l,f,v);else f=c(f)?!!f.capture:!!f,l=ei(l),s&&s[ie]?(s=s.i,w=String(u).toString(),w in s.g&&(u=s.g[w],l=Ar(u,l,f,v),l>-1&&(vn(u[l]),Array.prototype.splice.call(u,l,1),u.length==0&&(delete s.g[w],s.h--)))):s&&(s=Pr(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Ar(u,l,f,v)),(l=s>-1?u[s]:null)&&Vr(l))}function Vr(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[ie])vr(u.i,s);else{var l=s.type,f=s.proxy;u.removeEventListener?u.removeEventListener(l,f,s.capture):u.detachEvent?u.detachEvent(ti(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=Pr(u))?(vr(l,s),l.h==0&&(l.src=null,u[wr]=null)):vn(s)}}}function ti(s){return s in Rr?Rr[s]:Rr[s]="on"+s}function Fu(s,u){if(s.da)s=!0;else{u=new Et(u,this);const l=s.listener,f=s.ha||s.src;s.fa&&Vr(s),s=l.call(f,u)}return s}function Pr(s){return s=s[wr],s instanceof wn?s:null}var Sr="__closure_events_fn_"+(Math.random()*1e9>>>0);function ei(s){return typeof s=="function"?s:(s[Sr]||(s[Sr]=function(u){return s.handleEvent(u)}),s[Sr])}function dt(){T.call(this),this.i=new wn(this),this.M=this,this.G=null}I(dt,T),dt.prototype[ie]=!0,dt.prototype.removeEventListener=function(s,u,l,f){Zs(this,s,u,l,f)};function _t(s,u){var l,f=s.G;if(f)for(l=[];f;f=f.G)l.push(f);if(s=s.M,f=u.type||u,typeof u=="string")u=new y(u,s);else if(u instanceof y)u.target=u.target||s;else{var v=u;u=new y(f,s),Ys(u,v)}v=!0;let w,C;if(l)for(C=l.length-1;C>=0;C--)w=u.g=l[C],v=Rn(w,f,!0,u)&&v;if(w=u.g=s,v=Rn(w,f,!0,u)&&v,v=Rn(w,f,!1,u)&&v,l)for(C=0;C<l.length;C++)w=u.g=l[C],v=Rn(w,f,!1,u)&&v}dt.prototype.N=function(){if(dt.Z.N.call(this),this.i){var s=this.i;for(const u in s.g){const l=s.g[u];for(let f=0;f<l.length;f++)vn(l[f]);delete s.g[u],s.h--}}this.G=null},dt.prototype.J=function(s,u,l,f){return this.i.add(String(s),u,!1,l,f)},dt.prototype.K=function(s,u,l,f){return this.i.add(String(s),u,!0,l,f)};function Rn(s,u,l,f){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();let v=!0;for(let w=0;w<u.length;++w){const C=u[w];if(C&&!C.da&&C.capture==l){const U=C.listener,it=C.ha||C.src;C.fa&&vr(s.i,C),v=U.call(it,f)!==!1&&v}}return v&&!f.defaultPrevented}function Uu(s,u){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(s,u||0)}function ni(s){s.g=Uu(()=>{s.g=null,s.i&&(s.i=!1,ni(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class qu extends T{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ni(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(s){T.call(this),this.h=s,this.g={}}I(Fe,T);var ri=[];function si(s){An(s.g,function(u,l){this.g.hasOwnProperty(l)&&Vr(u)},s),s.g={}}Fe.prototype.N=function(){Fe.Z.N.call(this),si(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cr=a.JSON.stringify,ju=a.JSON.parse,Bu=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function ii(){}function oi(){}var Ue={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Dr(){y.call(this,"d")}I(Dr,y);function br(){y.call(this,"c")}I(br,y);var oe={},ai=null;function Vn(){return ai=ai||new dt}oe.Ia="serverreachability";function ui(s){y.call(this,oe.Ia,s)}I(ui,y);function qe(s){const u=Vn();_t(u,new ui(u))}oe.STAT_EVENT="statevent";function li(s,u){y.call(this,oe.STAT_EVENT,s),this.stat=u}I(li,y);function yt(s){const u=Vn();_t(u,new li(u,s))}oe.Ja="timingevent";function ci(s,u){y.call(this,oe.Ja,s),this.size=u}I(ci,y);function je(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},u)}function Be(){this.g=!0}Be.prototype.ua=function(){this.g=!1};function zu(s,u,l,f,v,w){s.info(function(){if(s.g)if(w){var C="",U=w.split("&");for(let $=0;$<U.length;$++){var it=U[$].split("=");if(it.length>1){const at=it[0];it=it[1];const Ct=at.split("_");C=Ct.length>=2&&Ct[1]=="type"?C+(at+"="+it+"&"):C+(at+"=redacted&")}}}else C=null;else C=w;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+u+`
`+l+`
`+C})}function Gu(s,u,l,f,v,w,C){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+u+`
`+l+`
`+w+" "+C})}function _e(s,u,l,f){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ku(s,l)+(f?" "+f:"")})}function $u(s,u){s.info(function(){return"TIMEOUT: "+u})}Be.prototype.info=function(){};function Ku(s,u){if(!s.g)return u;if(!u)return null;try{const w=JSON.parse(u);if(w){for(s=0;s<w.length;s++)if(Array.isArray(w[s])){var l=w[s];if(!(l.length<2)){var f=l[1];if(Array.isArray(f)&&!(f.length<1)){var v=f[0];if(v!="noop"&&v!="stop"&&v!="close")for(let C=1;C<f.length;C++)f[C]=""}}}}return Cr(w)}catch{return u}}var Pn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},hi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fi;function Nr(){}I(Nr,ii),Nr.prototype.g=function(){return new XMLHttpRequest},fi=new Nr;function ze(s){return encodeURIComponent(String(s))}function Qu(s){var u=1;s=s.split(":");const l=[];for(;u>0&&s.length;)l.push(s.shift()),u--;return s.length&&l.push(s.join(":")),l}function Bt(s,u,l,f){this.j=s,this.i=u,this.l=l,this.S=f||1,this.V=new Fe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new di}function di(){this.i=null,this.g="",this.h=!1}var mi={},kr={};function xr(s,u,l){s.M=1,s.A=Cn(St(u)),s.u=l,s.R=!0,gi(s,null)}function gi(s,u){s.F=Date.now(),Sn(s),s.B=St(s.A);var l=s.B,f=s.S;Array.isArray(f)||(f=[String(f)]),Si(l.i,"t",f),s.C=0,l=s.j.L,s.h=new di,s.g=Ki(s.j,l?u:null,!s.u),s.P>0&&(s.O=new qu(d(s.Y,s,s.g),s.P)),u=s.V,l=s.g,f=s.ba;var v="readystatechange";Array.isArray(v)||(v&&(ri[0]=v.toString()),v=ri);for(let w=0;w<v.length;w++){const C=Js(l,v[w],f||u.handleEvent,!1,u.h||u);if(!C)break;u.g[C.key]=C}u=s.J?Hs(s.J):{},s.u?(s.v||(s.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,u)):(s.v="GET",s.g.ea(s.B,s.v,null,u)),qe(),zu(s.i,s.v,s.B,s.l,s.S,s.u)}Bt.prototype.ba=function(s){s=s.target;const u=this.O;u&&$t(s)==3?u.j():this.Y(s)},Bt.prototype.Y=function(s){try{if(s==this.g)t:{const U=$t(this.g),it=this.g.ya(),$=this.g.ca();if(!(U<3)&&(U!=3||this.g&&(this.h.h||this.g.la()||Mi(this.g)))){this.K||U!=4||it==7||(it==8||$<=0?qe(3):qe(2)),Mr(this);var u=this.g.ca();this.X=u;var l=Wu(this);if(this.o=u==200,Gu(this.i,this.v,this.B,this.l,this.S,U,u),this.o){if(this.U&&!this.L){e:{if(this.g){var f,v=this.g;if((f=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(f)){var w=f;break e}}w=null}if(s=w)_e(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Or(this,s);else{this.o=!1,this.m=3,yt(12),ae(this),Ge(this);break t}}if(this.R){s=!0;let at;for(;!this.K&&this.C<l.length;)if(at=Hu(this,l),at==kr){U==4&&(this.m=4,yt(14),s=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}else if(at==mi){this.m=4,yt(15),_e(this.i,this.l,l,"[Invalid Chunk]"),s=!1;break}else _e(this.i,this.l,at,null),Or(this,at);if(pi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||l.length!=0||this.h.h||(this.m=1,yt(16),s=!1),this.o=this.o&&s,!s)_e(this.i,this.l,l,"[Invalid Chunked Response]"),ae(this),Ge(this);else if(l.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),Gr(C),C.P=!0,yt(11))}}else _e(this.i,this.l,l,null),Or(this,l);U==4&&ae(this),this.o&&!this.K&&(U==4?Bi(this.j,this):(this.o=!1,Sn(this)))}else ll(this.g),u==400&&l.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),ae(this),Ge(this)}}}catch{}finally{}};function Wu(s){if(!pi(s))return s.g.la();const u=Mi(s.g);if(u==="")return"";let l="";const f=u.length,v=$t(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return ae(s),Ge(s),"";s.h.i=new a.TextDecoder}for(let w=0;w<f;w++)s.h.h=!0,l+=s.h.i.decode(u[w],{stream:!(v&&w==f-1)});return u.length=0,s.h.g+=l,s.C=0,s.h.g}function pi(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Hu(s,u){var l=s.C,f=u.indexOf(`
`,l);return f==-1?kr:(l=Number(u.substring(l,f)),isNaN(l)?mi:(f+=1,f+l>u.length?kr:(u=u.slice(f,f+l),s.C=f+l,u)))}Bt.prototype.cancel=function(){this.K=!0,ae(this)};function Sn(s){s.T=Date.now()+s.H,_i(s,s.H)}function _i(s,u){if(s.D!=null)throw Error("WatchDog timer not null");s.D=je(d(s.aa,s),u)}function Mr(s){s.D&&(a.clearTimeout(s.D),s.D=null)}Bt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?($u(this.i,this.B),this.M!=2&&(qe(),yt(17)),ae(this),this.m=2,Ge(this)):_i(this,this.T-s)};function Ge(s){s.j.I==0||s.K||Bi(s.j,s)}function ae(s){Mr(s);var u=s.O;u&&typeof u.dispose=="function"&&u.dispose(),s.O=null,si(s.V),s.g&&(u=s.g,s.g=null,u.abort(),u.dispose())}function Or(s,u){try{var l=s.j;if(l.I!=0&&(l.g==s||Lr(l.h,s))){if(!s.L&&Lr(l.h,s)&&l.I==3){try{var f=l.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<s.F)xn(l),Nn(l);else break t;zr(l),yt(18)}}else l.xa=v[1],0<l.xa-l.K&&v[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=je(d(l.Va,l),6e3));Ti(l.h)<=1&&l.ta&&(l.ta=void 0)}else le(l,11)}else if((s.L||l.g==s)&&xn(l),!p(u))for(v=l.Ba.g.parse(u),u=0;u<v.length;u++){let $=v[u];const at=$[0];if(!(at<=l.K))if(l.K=at,$=$[1],l.I==2)if($[0]=="c"){l.M=$[1],l.ba=$[2];const Ct=$[3];Ct!=null&&(l.ka=Ct,l.j.info("VER="+l.ka));const ce=$[4];ce!=null&&(l.za=ce,l.j.info("SVER="+l.za));const Kt=$[5];Kt!=null&&typeof Kt=="number"&&Kt>0&&(f=1.5*Kt,l.O=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Qt=s.g;if(Qt){const On=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(On){var w=f.h;w.g||On.indexOf("spdy")==-1&&On.indexOf("quic")==-1&&On.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Fr(w,w.h),w.h=null))}if(f.G){const $r=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;$r&&(f.wa=$r,H(f.J,f.G,$r))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-s.F,l.j.info("Handshake RTT: "+l.T+"ms")),f=l;var C=s;if(f.na=$i(f,f.L?f.ba:null,f.W),C.L){Ii(f.h,C);var U=C,it=f.O;it&&(U.H=it),U.D&&(Mr(U),Sn(U)),f.g=C}else qi(f);l.i.length>0&&kn(l)}else $[0]!="stop"&&$[0]!="close"||le(l,7);else l.I==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?le(l,7):Br(l):$[0]!="noop"&&l.l&&l.l.qa($),l.A=0)}}qe(4)}catch{}}var Xu=class{constructor(s,u){this.g=s,this.map=u}};function yi(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ei(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ti(s){return s.h?1:s.g?s.g.size:0}function Lr(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function Fr(s,u){s.g?s.g.add(u):s.h=u}function Ii(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}yi.prototype.cancel=function(){if(this.i=vi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function vi(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const l of s.g.values())u=u.concat(l.G);return u}return S(s.i)}var Ai=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yu(s,u){if(s){s=s.split("&");for(let l=0;l<s.length;l++){const f=s[l].indexOf("=");let v,w=null;f>=0?(v=s[l].substring(0,f),w=s[l].substring(f+1)):v=s[l],u(v,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function zt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;s instanceof zt?(this.l=s.l,$e(this,s.j),this.o=s.o,this.g=s.g,Ke(this,s.u),this.h=s.h,Ur(this,Ci(s.i)),this.m=s.m):s&&(u=String(s).match(Ai))?(this.l=!1,$e(this,u[1]||"",!0),this.o=Qe(u[2]||""),this.g=Qe(u[3]||"",!0),Ke(this,u[4]),this.h=Qe(u[5]||"",!0),Ur(this,u[6]||"",!0),this.m=Qe(u[7]||"")):(this.l=!1,this.i=new He(null,this.l))}zt.prototype.toString=function(){const s=[];var u=this.j;u&&s.push(We(u,wi,!0),":");var l=this.g;return(l||u=="file")&&(s.push("//"),(u=this.o)&&s.push(We(u,wi,!0),"@"),s.push(ze(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&s.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(We(l,l.charAt(0)=="/"?tl:Zu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",We(l,nl)),s.join("")},zt.prototype.resolve=function(s){const u=St(this);let l=!!s.j;l?$e(u,s.j):l=!!s.o,l?u.o=s.o:l=!!s.g,l?u.g=s.g:l=s.u!=null;var f=s.h;if(l)Ke(u,s.u);else if(l=!!s.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var v=u.h.lastIndexOf("/");v!=-1&&(f=u.h.slice(0,v+1)+f)}if(v=f,v==".."||v==".")f="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){f=v.lastIndexOf("/",0)==0,v=v.split("/");const w=[];for(let C=0;C<v.length;){const U=v[C++];U=="."?f&&C==v.length&&w.push(""):U==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),f&&C==v.length&&w.push("")):(w.push(U),f=!0)}f=w.join("/")}else f=v}return l?u.h=f:l=s.i.toString()!=="",l?Ur(u,Ci(s.i)):l=!!s.m,l&&(u.m=s.m),u};function St(s){return new zt(s)}function $e(s,u,l){s.j=l?Qe(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function Ke(s,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);s.u=u}else s.u=null}function Ur(s,u,l){u instanceof He?(s.i=u,rl(s.i,s.l)):(l||(u=We(u,el)),s.i=new He(u,s.l))}function H(s,u,l){s.i.set(u,l)}function Cn(s){return H(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Qe(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function We(s,u,l){return typeof s=="string"?(s=encodeURI(s).replace(u,Ju),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ju(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var wi=/[#\/\?@]/g,Zu=/[#\?:]/g,tl=/[#\?]/g,el=/[#\?@]/g,nl=/#/g;function He(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function ue(s){s.g||(s.g=new Map,s.h=0,s.i&&Yu(s.i,function(u,l){s.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}r=He.prototype,r.add=function(s,u){ue(this),this.i=null,s=ye(this,s);let l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(u),this.h+=1,this};function Ri(s,u){ue(s),u=ye(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function Vi(s,u){return ue(s),u=ye(s,u),s.g.has(u)}r.forEach=function(s,u){ue(this),this.g.forEach(function(l,f){l.forEach(function(v){s.call(u,v,f,this)},this)},this)};function Pi(s,u){ue(s);let l=[];if(typeof u=="string")Vi(s,u)&&(l=l.concat(s.g.get(ye(s,u))));else for(s=Array.from(s.g.values()),u=0;u<s.length;u++)l=l.concat(s[u]);return l}r.set=function(s,u){return ue(this),this.i=null,s=ye(this,s),Vi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},r.get=function(s,u){return s?(s=Pi(this,s),s.length>0?String(s[0]):u):u};function Si(s,u,l){Ri(s,u),l.length>0&&(s.i=null,s.g.set(ye(s,u),S(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var l=u[f];const v=ze(l);l=Pi(this,l);for(let w=0;w<l.length;w++){let C=v;l[w]!==""&&(C+="="+ze(l[w])),s.push(C)}}return this.i=s.join("&")};function Ci(s){const u=new He;return u.i=s.i,s.g&&(u.g=new Map(s.g),u.h=s.h),u}function ye(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function rl(s,u){u&&!s.j&&(ue(s),s.i=null,s.g.forEach(function(l,f){const v=f.toLowerCase();f!=v&&(Ri(this,f),Si(this,v,l))},s)),s.j=u}function sl(s,u){const l=new Be;if(a.Image){const f=new Image;f.onload=m(Gt,l,"TestLoadImage: loaded",!0,u,f),f.onerror=m(Gt,l,"TestLoadImage: error",!1,u,f),f.onabort=m(Gt,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=m(Gt,l,"TestLoadImage: timeout",!1,u,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else u(!1)}function il(s,u){const l=new Be,f=new AbortController,v=setTimeout(()=>{f.abort(),Gt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:f.signal}).then(w=>{clearTimeout(v),w.ok?Gt(l,"TestPingServer: ok",!0,u):Gt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),Gt(l,"TestPingServer: error",!1,u)})}function Gt(s,u,l,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(l)}catch{}}function ol(){this.g=new Bu}function qr(s){this.i=s.Sb||null,this.h=s.ab||!1}I(qr,ii),qr.prototype.g=function(){return new Dn(this.i,this.h)};function Dn(s,u){dt.call(this),this.H=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Dn,dt),r=Dn.prototype,r.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=u,this.readyState=1,Ye(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(u.body=s),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xe(this)),this.readyState=0},r.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ye(this)),this.g&&(this.readyState=3,Ye(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Di(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Di(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}r.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?Xe(this):Ye(this),this.readyState==3&&Di(this)}},r.Oa=function(s){this.g&&(this.response=this.responseText=s,Xe(this))},r.Na=function(s){this.g&&(this.response=s,Xe(this))},r.ga=function(){this.g&&Xe(this)};function Xe(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Ye(s)}r.setRequestHeader=function(s,u){this.A.append(s,u)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=u.next();return s.join(`\r
`)};function Ye(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Dn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function bi(s){let u="";return An(s,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function jr(s,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=bi(l),typeof s=="string"?l!=null&&ze(l):H(s,u,l))}function J(s){dt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(J,dt);var al=/^https?$/i,ul=["POST","PUT"];r=J.prototype,r.Fa=function(s){this.H=s},r.ea=function(s,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fi.g(),this.g.onreadystatechange=R(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(w){Ni(this,w);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)l.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const w of f.keys())l.set(w,f.get(w));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(ul,u,void 0)>=0)||f||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of l)this.g.setRequestHeader(w,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(w){Ni(this,w)}};function Ni(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.o=5,ki(s),bn(s)}function ki(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,_t(this,"complete"),_t(this,"abort"),bn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bn(this,!0)),J.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?xi(this):this.Xa())},r.Xa=function(){xi(this)};function xi(s){if(s.h&&typeof o<"u"){if(s.v&&$t(s)==4)setTimeout(s.Ca.bind(s),0);else if(_t(s,"readystatechange"),$t(s)==4){s.h=!1;try{const w=s.ca();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=w===0){let C=String(s.D).match(Ai)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),f=!al.test(C?C.toLowerCase():"")}l=f}if(l)_t(s,"complete"),_t(s,"success");else{s.o=6;try{var v=$t(s)>2?s.g.statusText:""}catch{v=""}s.l=v+" ["+s.ca()+"]",ki(s)}}finally{bn(s)}}}}function bn(s,u){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const l=s.g;s.g=null,u||_t(s,"ready");try{l.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function $t(s){return s.g?s.g.readyState:0}r.ca=function(){try{return $t(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),ju(u)}};function Mi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function ll(s){const u={};s=(s.g&&$t(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(p(s[f]))continue;var l=Qu(s[f]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=u[v]||[];u[v]=w,w.push(l)}Mu(u,function(f){return f.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Je(s,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||u}function Oi(s){this.za=0,this.i=[],this.j=new Be,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Je("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Je("baseRetryDelayMs",5e3,s),this.Za=Je("retryDelaySeedMs",1e4,s),this.Ta=Je("forwardChannelMaxRetries",2,s),this.va=Je("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new yi(s&&s.concurrentRequestLimit),this.Ba=new ol,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Oi.prototype,r.ka=8,r.I=1,r.connect=function(s,u,l,f){yt(0),this.W=s,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.J=$i(this,null,this.W),kn(this)};function Br(s){if(Li(s),s.I==3){var u=s.V++,l=St(s.J);if(H(l,"SID",s.M),H(l,"RID",u),H(l,"TYPE","terminate"),Ze(s,l),u=new Bt(s,s.j,u),u.M=2,u.A=Cn(St(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=u.A,l=!0),l||(u.g=Ki(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Sn(u)}Gi(s)}function Nn(s){s.g&&(Gr(s),s.g.cancel(),s.g=null)}function Li(s){Nn(s),s.v&&(a.clearTimeout(s.v),s.v=null),xn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function kn(s){if(!Ei(s.h)&&!s.m){s.m=!0;var u=s.Ea;vt||g(),st||(vt(),st=!0),E.add(u,s),s.D=0}}function cl(s,u){return Ti(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=u.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=je(d(s.Ea,s,u),zi(s,s.D)),s.D++,!0)}r.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const v=new Bt(this,this.j,s);let w=this.o;if(this.U&&(w?(w=Hs(w),Ys(w,this.U)):w=this.U),this.u!==null||this.R||(v.J=w,w=null),this.S)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=Ui(this,v,u),l=St(this.J),H(l,"RID",s),H(l,"CVER",22),this.G&&H(l,"X-HTTP-Session-Id",this.G),Ze(this,l),w&&(this.R?u="headers="+ze(bi(w))+"&"+u:this.u&&jr(l,this.u,w)),Fr(this.h,v),this.Ra&&H(l,"TYPE","init"),this.S?(H(l,"$req",u),H(l,"SID","null"),v.U=!0,xr(v,l,null)):xr(v,l,u),this.I=2}}else this.I==3&&(s?Fi(this,s):this.i.length==0||Ei(this.h)||Fi(this))};function Fi(s,u){var l;u?l=u.l:l=s.V++;const f=St(s.J);H(f,"SID",s.M),H(f,"RID",l),H(f,"AID",s.K),Ze(s,f),s.u&&s.o&&jr(f,s.u,s.o),l=new Bt(s,s.j,l,s.D+1),s.u===null&&(l.J=s.o),u&&(s.i=u.G.concat(s.i)),u=Ui(s,l,1e3),l.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Fr(s.h,l),xr(l,f,u)}function Ze(s,u){s.H&&An(s.H,function(l,f){H(u,f,l)}),s.l&&An({},function(l,f){H(u,f,l)})}function Ui(s,u,l){l=Math.min(s.i.length,l);const f=s.l?d(s.l.Ka,s.l,s):null;t:{var v=s.i;let U=-1;for(;;){const it=["count="+l];U==-1?l>0?(U=v[0].g,it.push("ofs="+U)):U=0:it.push("ofs="+U);let $=!0;for(let at=0;at<l;at++){var w=v[at].g;const Ct=v[at].map;if(w-=U,w<0)U=Math.max(0,v[at].g-100),$=!1;else try{w="req"+w+"_"||"";try{var C=Ct instanceof Map?Ct:Object.entries(Ct);for(const[ce,Kt]of C){let Qt=Kt;c(Kt)&&(Qt=Cr(Kt)),it.push(w+ce+"="+encodeURIComponent(Qt))}}catch(ce){throw it.push(w+"type="+encodeURIComponent("_badmap")),ce}}catch{f&&f(Ct)}}if($){C=it.join("&");break t}}C=void 0}return s=s.i.splice(0,l),u.G=s,C}function qi(s){if(!s.g&&!s.v){s.Y=1;var u=s.Da;vt||g(),st||(vt(),st=!0),E.add(u,s),s.A=0}}function zr(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=je(d(s.Da,s),zi(s,s.A)),s.A++,!0)}r.Da=function(){if(this.v=null,ji(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=je(d(this.Wa,this),s)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),Nn(this),ji(this))};function Gr(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function ji(s){s.g=new Bt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var u=St(s.na);H(u,"RID","rpc"),H(u,"SID",s.M),H(u,"AID",s.K),H(u,"CI",s.F?"0":"1"),!s.F&&s.ia&&H(u,"TO",s.ia),H(u,"TYPE","xmlhttp"),Ze(s,u),s.u&&s.o&&jr(u,s.u,s.o),s.O&&(s.g.H=s.O);var l=s.g;s=s.ba,l.M=1,l.A=Cn(St(u)),l.u=null,l.R=!0,gi(l,s)}r.Va=function(){this.C!=null&&(this.C=null,Nn(this),zr(this),yt(19))};function xn(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function Bi(s,u){var l=null;if(s.g==u){xn(s),Gr(s),s.g=null;var f=2}else if(Lr(s.h,u))l=u.G,Ii(s.h,u),f=1;else return;if(s.I!=0){if(u.o)if(f==1){l=u.u?u.u.length:0,u=Date.now()-u.F;var v=s.D;f=Vn(),_t(f,new ci(f,l)),kn(s)}else qi(s);else if(v=u.m,v==3||v==0&&u.X>0||!(f==1&&cl(s,u)||f==2&&zr(s)))switch(l&&l.length>0&&(u=s.h,u.i=u.i.concat(l)),v){case 1:le(s,5);break;case 4:le(s,10);break;case 3:le(s,6);break;default:le(s,2)}}}function zi(s,u){let l=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(l*=2),l*u}function le(s,u){if(s.j.info("Error code "+u),u==2){var l=d(s.bb,s),f=s.Ua;const v=!f;f=new zt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||$e(f,"https"),Cn(f),v?sl(f.toString(),l):il(f.toString(),l)}else yt(2);s.I=0,s.l&&s.l.pa(u),Gi(s),Li(s)}r.bb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Gi(s){if(s.I=0,s.ja=[],s.l){const u=vi(s.h);(u.length!=0||s.i.length!=0)&&(k(s.ja,u),k(s.ja,s.i),s.h.i.length=0,S(s.i),s.i.length=0),s.l.oa()}}function $i(s,u,l){var f=l instanceof zt?St(l):new zt(l);if(f.g!="")u&&(f.g=u+"."+f.g),Ke(f,f.u);else{var v=a.location;f=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;const w=new zt(null);f&&$e(w,f),u&&(w.g=u),v&&Ke(w,v),l&&(w.h=l),f=w}return l=s.G,u=s.wa,l&&u&&H(f,l,u),H(f,"VER",s.ka),Ze(s,f),f}function Ki(s,u,l){if(u&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Aa&&!s.ma?new J(new qr({ab:l})):new J(s.ma),u.Fa(s.L),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qi(){}r=Qi.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Mn(){}Mn.prototype.g=function(s,u){return new At(s,u)};function At(s,u){dt.call(this),this.g=new Oi(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(s?s["X-WebChannel-Client-Profile"]=u.sa:s={"X-WebChannel-Client-Profile":u.sa}),this.g.U=s,(s=u&&u.Qb)&&!p(s)&&(this.g.u=s),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!p(u)&&(this.g.G=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new Ee(this)}I(At,dt),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Br(this.g)},At.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.v&&(l={},l.__data__=Cr(s),s=l);u.i.push(new Xu(u.Ya++,s)),u.I==3&&kn(u)},At.prototype.N=function(){this.g.l=null,delete this.j,Br(this.g),delete this.g,At.Z.N.call(this)};function Wi(s){Dr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const l in u){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}I(Wi,Dr);function Hi(){br.call(this),this.status=1}I(Hi,br);function Ee(s){this.g=s}I(Ee,Qi),Ee.prototype.ra=function(){_t(this.g,"a")},Ee.prototype.qa=function(s){_t(this.g,new Wi(s))},Ee.prototype.pa=function(s){_t(this.g,new Hi)},Ee.prototype.oa=function(){_t(this.g,"b")},Mn.prototype.createWebChannel=Mn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,ra=function(){return new Mn},na=function(){return Vn()},ea=oe,Yr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Pn.NO_ERROR=0,Pn.TIMEOUT=8,Pn.HTTP_ERROR=6,Bn=Pn,hi.COMPLETE="complete",ta=hi,oi.EventType=Ue,Ue.OPEN="a",Ue.CLOSE="b",Ue.ERROR="c",Ue.MESSAGE="d",dt.prototype.listen=dt.prototype.J,tn=oi,J.prototype.listenOnce=J.prototype.K,J.prototype.getLastError=J.prototype.Ha,J.prototype.getLastErrorCode=J.prototype.ya,J.prototype.getStatus=J.prototype.ca,J.prototype.getResponseJson=J.prototype.La,J.prototype.getResponseText=J.prototype.la,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Fa,Zo=J}).apply(typeof Ln<"u"?Ln:typeof self<"u"?self:typeof window<"u"?window:{});const Ji="@firebase/firestore",Zi="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ne="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new hl("@firebase/firestore");function Te(){return de.logLevel}function N(r,...t){if(de.logLevel<=Lt.DEBUG){const e=t.map(gs);de.debug(`Firestore (${Ne}): ${r}`,...e)}}function qt(r,...t){if(de.logLevel<=Lt.ERROR){const e=t.map(gs);de.error(`Firestore (${Ne}): ${r}`,...e)}}function Ve(r,...t){if(de.logLevel<=Lt.WARN){const e=t.map(gs);de.warn(`Firestore (${Ne}): ${r}`,...e)}}function gs(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,sa(r,n,e)}function sa(r,t,e){let n=`FIRESTORE (${Ne}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw qt(n),new Error(n)}function z(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||sa(t,i,n)}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends gl{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Vl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class Pl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Sl{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0,42304);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ft,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ft)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(z(typeof n.accessToken=="string",31837,{l:n}),new ia(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class Cl{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Dl{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Cl(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class to{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bl{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ml(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){z(this.o===void 0,3512);const n=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new to(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(z(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new to(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Nl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function Jr(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const i=r.charAt(n),o=t.charAt(n);if(i!==o)return Kr(i)===Kr(o)?q(i,o):Kr(i)?1:-1}return q(r.length,t.length)}const kl=55296,xl=57343;function Kr(r){const t=r.charCodeAt(0);return t>=kl&&t<=xl}function Pe(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="__name__";class Dt{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Dt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Dt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Dt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const n=Dt.isNumericId(t),i=Dt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Dt.extractNumericId(t).compare(Dt.extractNumericId(e)):Jr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ht.fromString(t.substring(4,t.length-2))}}class Q extends Dt{construct(t,e,n){return new Q(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new D(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new Q(e)}static emptyPath(){return new Q([])}}const Ml=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Dt{construct(t,e,n){return new ct(t,e,n)}static isValidIdentifier(t){return Ml.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===eo}static keyField(){return new ct([eo])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new D(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new D(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new D(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(n+=c,i++):(o(),i++)}if(o(),a)throw new D(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Q.fromString(t))}static fromName(t){return new M(Q.fromString(t).popFirst(5))}static empty(){return new M(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Q(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(r,t,e){if(!e)throw new D(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Ol(r,t,e,n){if(t===!0&&n===!0)throw new D(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function no(r){if(!M.isDocumentKey(r))throw new D(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ro(r){if(M.isDocumentKey(r))throw new D(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function aa(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function or(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O(12329,{type:typeof r})}function Mt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new D(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=or(r);throw new D(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(r,t){const e={typeString:r};return t&&(e.value=t),e}function gn(r,t){if(!aa(r))throw new D(V.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(i&&typeof a!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new D(V.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=-62135596800,io=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*io);return new X(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<so)throw new D(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/io}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(gn(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-so;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:rt("string",X._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new X(0,0))}static max(){return new L(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=-1;function Ll(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=L.fromTimestamp(n===1e9?new X(e+1,0):new X(e,n));return new Yt(i,M.empty(),t)}function Fl(r){return new Yt(r.readTime,r.key,ln)}class Yt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Yt(L.min(),M.empty(),ln)}static max(){return new Yt(L.max(),M.empty(),ln)}}function Ul(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==ql)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,n)=>{e(t)})}static reject(t){return new P((e,n)=>{n(t)})}static waitFor(t){return new P((e,n)=>{let i=0,o=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&e()},h=>n(h))}),a=!0,o===i&&e()})}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next(i=>i?P.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new P((n,i)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&n(a)},m=>i(m))}})}static doWhile(t,e){return new P((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function Bl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function xe(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}ar.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=-1;function ur(r){return r==null}function Wn(r){return r===0&&1/r==-1/0}function zl(r){return typeof r=="number"&&Number.isInteger(r)&&!Wn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="";function Gl(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=oo(t)),t=$l(r.get(e),t);return oo(t)}function $l(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case ua:e+="";break;default:e+=o}}return e}function oo(r){return r+ua+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function re(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function la(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fn(this.root,t,this.comparator,!0)}}class Fn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new lt(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new uo(this.data.getIterator())}getIteratorFrom(t){return new uo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class uo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new wt([])}unionWith(t){let e=new ot(ct.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pe(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ca("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Kl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(r){if(z(!!r,39018),typeof r=="string"){let t=0;const e=Kl.exec(r);if(z(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Z(r.seconds),nanos:Z(r.nanos)}}function Z(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Zt(r){return typeof r=="string"?ht.fromBase64String(r):ht.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="server_timestamp",fa="__type__",da="__previous_value__",ma="__local_write_time__";function ys(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[fa])==null?void 0:n.stringValue)===ha}function lr(r){const t=r.mapValue.fields[da];return ys(t)?lr(t):t}function cn(r){const t=Jt(r.mapValue.fields[ma].timestampValue);return new X(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t,e,n,i,o,a,c,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const Hn="(default)";class hn{constructor(t,e){this.projectId=t,this.database=e||Hn}static empty(){return new hn("","")}get isDefaultDatabase(){return this.database===Hn}isEqual(t){return t instanceof hn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="__type__",Wl="__max__",Un={mapValue:{}},pa="__vector__",Xn="value";function te(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ys(r)?4:Xl(r)?9007199254740991:Hl(r)?10:11:O(28295,{value:r})}function Ot(r,t){if(r===t)return!0;const e=te(r);if(e!==te(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return cn(r).isEqual(cn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Jt(i.timestampValue),c=Jt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return Zt(i.bytesValue).isEqual(Zt(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return Z(i.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Z(i.integerValue)===Z(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=Z(i.doubleValue),c=Z(o.doubleValue);return a===c?Wn(a)===Wn(c):isNaN(a)&&isNaN(c)}return!1}(r,t);case 9:return Pe(r.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(ao(a)!==ao(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Ot(a[h],c[h])))return!1;return!0}(r,t);default:return O(52216,{left:r})}}function fn(r,t){return(r.values||[]).find(e=>Ot(e,t))!==void 0}function Se(r,t){if(r===t)return 0;const e=te(r),n=te(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return function(o,a){const c=Z(o.integerValue||o.doubleValue),h=Z(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return lo(r.timestampValue,t.timestampValue);case 4:return lo(cn(r),cn(t));case 5:return Jr(r.stringValue,t.stringValue);case 6:return function(o,a){const c=Zt(o),h=Zt(a);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=q(c[d],h[d]);if(m!==0)return m}return q(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const c=q(Z(o.latitude),Z(a.latitude));return c!==0?c:q(Z(o.longitude),Z(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return co(r.arrayValue,t.arrayValue);case 10:return function(o,a){var R,S,k,x;const c=o.fields||{},h=a.fields||{},d=(R=c[Xn])==null?void 0:R.arrayValue,m=(S=h[Xn])==null?void 0:S.arrayValue,I=q(((k=d==null?void 0:d.values)==null?void 0:k.length)||0,((x=m==null?void 0:m.values)==null?void 0:x.length)||0);return I!==0?I:co(d,m)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===Un.mapValue&&a===Un.mapValue)return 0;if(o===Un.mapValue)return 1;if(a===Un.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let I=0;I<h.length&&I<m.length;++I){const R=Jr(h[I],m[I]);if(R!==0)return R;const S=Se(c[h[I]],d[m[I]]);if(S!==0)return S}return q(h.length,m.length)}(r.mapValue,t.mapValue);default:throw O(23264,{he:e})}}function lo(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=Jt(r),n=Jt(t),i=q(e.seconds,n.seconds);return i!==0?i:q(e.nanos,n.nanos)}function co(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Se(e[i],n[i]);if(o)return o}return q(e.length,n.length)}function Ce(r){return Zr(r)}function Zr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Jt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Zt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Zr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of n)o?o=!1:i+=",",i+=`${a}:${Zr(e.fields[a])}`;return i+"}"}(r.mapValue):O(61005,{value:r})}function zn(r){switch(te(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=lr(r);return t?16+zn(t):16;case 5:return 2*r.stringValue.length;case 6:return Zt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+zn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return re(n.fields,(o,a)=>{i+=o.length+zn(a)}),i}(r.mapValue);default:throw O(13486,{value:r})}}function ho(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ts(r){return!!r&&"integerValue"in r}function Es(r){return!!r&&"arrayValue"in r}function fo(r){return!!r&&"nullValue"in r}function mo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Gn(r){return!!r&&"mapValue"in r}function Hl(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[ga])==null?void 0:n.stringValue)===pa}function sn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return re(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=sn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=sn(r.arrayValue.values[e]);return t}return{...r}}function Xl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Wl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Gn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=sn(e)}setAll(t){let e=ct.emptyPath(),n={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}a?n[c.lastSegment()]=sn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());Gn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Gn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){re(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new It(sn(this.value))}}function _a(r){const t=[];return re(r.fields,(e,n)=>{const i=new ct([e]);if(Gn(n)){const o=_a(n.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e,n,i,o,a,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new pt(t,0,L.min(),L.min(),L.min(),It.empty(),0)}static newFoundDocument(t,e,n,i){return new pt(t,1,e,L.min(),n,i,0)}static newNoDocument(t,e){return new pt(t,2,e,L.min(),L.min(),It.empty(),0)}static newUnknownDocument(t,e){return new pt(t,3,e,L.min(),L.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e){this.position=t,this.inclusive=e}}function go(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],a=r.position[i];if(o.field.isKeyField()?n=M.comparator(M.fromName(a.referenceValue),e.key):n=Se(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function po(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ot(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Yl(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{}class nt extends ya{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Zl(t,e,n):e==="array-contains"?new nc(t,n):e==="in"?new rc(t,n):e==="not-in"?new sc(t,n):e==="array-contains-any"?new ic(t,n):new nt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new tc(t,n):new ec(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Se(e,this.value)):e!==null&&te(this.value)===te(e)&&this.matchesComparison(Se(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pt extends ya{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Pt(t,e)}matches(t){return Ea(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ea(r){return r.op==="and"}function Ta(r){return Jl(r)&&Ea(r)}function Jl(r){for(const t of r.filters)if(t instanceof Pt)return!1;return!0}function es(r){if(r instanceof nt)return r.field.canonicalString()+r.op.toString()+Ce(r.value);if(Ta(r))return r.filters.map(t=>es(t)).join(",");{const t=r.filters.map(e=>es(e)).join(",");return`${r.op}(${t})`}}function Ia(r,t){return r instanceof nt?function(n,i){return i instanceof nt&&n.op===i.op&&n.field.isEqual(i.field)&&Ot(n.value,i.value)}(r,t):r instanceof Pt?function(n,i){return i instanceof Pt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,a,c)=>o&&Ia(a,i.filters[c]),!0):!1}(r,t):void O(19439)}function va(r){return r instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ce(e.value)}`}(r):r instanceof Pt?function(e){return e.op.toString()+" {"+e.getFilters().map(va).join(" ,")+"}"}(r):"Filter"}class Zl extends nt{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class tc extends nt{constructor(t,e){super(t,"in",e),this.keys=Aa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ec extends nt{constructor(t,e){super(t,"not-in",e),this.keys=Aa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Aa(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class nc extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Es(e)&&fn(e.arrayValue,this.value)}}class rc extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&fn(this.value.arrayValue,e)}}class sc extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!fn(this.value.arrayValue,e)}}class ic extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Es(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>fn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,e=null,n=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.Te=null}}function _o(r,t=null,e=[],n=[],i=null,o=null,a=null){return new oc(r,t,e,n,i,o,a)}function Ts(r){const t=F(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>es(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),ur(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ce(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ce(n)).join(",")),t.Te=e}return t.Te}function Is(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Yl(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Ia(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!po(r.startAt,t.startAt)&&po(r.endAt,t.endAt)}function ns(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,e=null,n=[],i=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ac(r,t,e,n,i,o,a,c){return new pn(r,t,e,n,i,o,a,c)}function vs(r){return new pn(r)}function yo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function wa(r){return r.collectionGroup!==null}function on(r){const t=F(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ot(ct.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Jn(o,n))}),e.has(ct.keyField().canonicalString())||t.Ie.push(new Jn(ct.keyField(),n))}return t.Ie}function bt(r){const t=F(r);return t.Ee||(t.Ee=uc(t,on(r))),t.Ee}function uc(r,t){if(r.limitType==="F")return _o(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Jn(i.field,o)});const e=r.endAt?new Yn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Yn(r.startAt.position,r.startAt.inclusive):null;return _o(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function rs(r,t){const e=r.filters.concat([t]);return new pn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function ss(r,t,e){return new pn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function cr(r,t){return Is(bt(r),bt(t))&&r.limitType===t.limitType}function Ra(r){return`${Ts(bt(r))}|lt:${r.limitType}`}function Ie(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>va(i)).join(", ")}]`),ur(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ce(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ce(i)).join(",")),`Target(${n})`}(bt(r))}; limitType=${r.limitType})`}function hr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of on(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(a,c,h){const d=go(a,c,h);return a.inclusive?d<=0:d<0}(n.startAt,on(n),i)||n.endAt&&!function(a,c,h){const d=go(a,c,h);return a.inclusive?d>=0:d>0}(n.endAt,on(n),i))}(r,t)}function lc(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Va(r){return(t,e)=>{let n=!1;for(const i of on(r)){const o=cc(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function cc(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Se(h,d):O(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){re(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return la(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Y(M.comparator);function jt(){return hc}const Pa=new Y(M.comparator);function en(...r){let t=Pa;for(const e of r)t=t.insert(e.key,e);return t}function Sa(r){let t=Pa;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function he(){return an()}function Ca(){return an()}function an(){return new ge(r=>r.toString(),(r,t)=>r.isEqual(t))}const fc=new Y(M.comparator),dc=new ot(M.comparator);function j(...r){let t=dc;for(const e of r)t=t.add(e);return t}const mc=new ot(q);function gc(){return mc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wn(t)?"-0":t}}function Da(r){return{integerValue:""+r}}function pc(r,t){return zl(t)?Da(t):As(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this._=void 0}}function _c(r,t,e){return r instanceof Zn?function(i,o){const a={fields:{[fa]:{stringValue:ha},[ma]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ys(o)&&(o=lr(o)),o&&(a.fields[da]=o),{mapValue:a}}(e,t):r instanceof dn?Na(r,t):r instanceof mn?ka(r,t):function(i,o){const a=ba(i,o),c=Eo(a)+Eo(i.Ae);return ts(a)&&ts(i.Ae)?Da(c):As(i.serializer,c)}(r,t)}function yc(r,t,e){return r instanceof dn?Na(r,t):r instanceof mn?ka(r,t):e}function ba(r,t){return r instanceof tr?function(n){return ts(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Zn extends fr{}class dn extends fr{constructor(t){super(),this.elements=t}}function Na(r,t){const e=xa(t);for(const n of r.elements)e.some(i=>Ot(i,n))||e.push(n);return{arrayValue:{values:e}}}class mn extends fr{constructor(t){super(),this.elements=t}}function ka(r,t){let e=xa(t);for(const n of r.elements)e=e.filter(i=>!Ot(i,n));return{arrayValue:{values:e}}}class tr extends fr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Eo(r){return Z(r.integerValue||r.doubleValue)}function xa(r){return Es(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Ec(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof dn&&i instanceof dn||n instanceof mn&&i instanceof mn?Pe(n.elements,i.elements,Ot):n instanceof tr&&i instanceof tr?Ot(n.Ae,i.Ae):n instanceof Zn&&i instanceof Zn}(r.transform,t.transform)}class Tc{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function $n(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class dr{}function Ma(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new La(r.key,Vt.none()):new _n(r.key,r.data,Vt.none());{const e=r.data,n=It.empty();let i=new ot(ct.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),i=i.add(o)}return new se(r.key,n,new wt(i.toArray()),Vt.none())}}function Ic(r,t,e){r instanceof _n?function(i,o,a){const c=i.value.clone(),h=Io(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):r instanceof se?function(i,o,a){if(!$n(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Io(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Oa(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function un(r,t,e,n){return r instanceof _n?function(o,a,c,h){if(!$n(o.precondition,a))return c;const d=o.value.clone(),m=vo(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof se?function(o,a,c,h){if(!$n(o.precondition,a))return c;const d=vo(o.fieldTransforms,h,a),m=a.data;return m.setAll(Oa(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(r,t,e,n):function(o,a,c){return $n(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,t,e)}function vc(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=ba(n.transform,i||null);o!=null&&(e===null&&(e=It.empty()),e.set(n.field,o))}return e||null}function To(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Pe(n,i,(o,a)=>Ec(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class _n extends dr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class se extends dr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Oa(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Io(r,t,e){const n=new Map;z(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let i=0;i<e.length;i++){const o=r[i],a=o.transform,c=t.data.field(o.field);n.set(o.field,yc(a,c,e[i]))}return n}function vo(r,t,e){const n=new Map;for(const i of r){const o=i.transform,a=e.data.field(i.field);n.set(i.field,_c(o,a,t))}return n}class La extends dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ac extends dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Ic(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=un(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=un(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ca();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const h=Ma(a,c);h!==null&&n.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&Pe(this.mutations,t.mutations,(e,n)=>To(e,n))&&Pe(this.baseMutations,t.baseMutations,(e,n)=>To(e,n))}}class ws{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){z(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let i=function(){return fc}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new ws(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,B;function Pc(r){switch(r){case V.OK:return O(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return O(15467,{code:r})}}function Fa(r){if(r===void 0)return qt("GRPC error has no .code"),V.UNKNOWN;switch(r){case et.OK:return V.OK;case et.CANCELLED:return V.CANCELLED;case et.UNKNOWN:return V.UNKNOWN;case et.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case et.INTERNAL:return V.INTERNAL;case et.UNAVAILABLE:return V.UNAVAILABLE;case et.UNAUTHENTICATED:return V.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case et.NOT_FOUND:return V.NOT_FOUND;case et.ALREADY_EXISTS:return V.ALREADY_EXISTS;case et.PERMISSION_DENIED:return V.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case et.ABORTED:return V.ABORTED;case et.OUT_OF_RANGE:return V.OUT_OF_RANGE;case et.UNIMPLEMENTED:return V.UNIMPLEMENTED;case et.DATA_LOSS:return V.DATA_LOSS;default:return O(39323,{code:r})}}(B=et||(et={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new Ht([4294967295,4294967295],0);function Ao(r){const t=Sc().encode(r),e=new Jo;return e.update(t),new Uint8Array(e.digest())}function wo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Ht([e,n],0),new Ht([i,o],0)]}class Rs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new nn(`Invalid padding: ${e}`);if(n<0)throw new nn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new nn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new nn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Ht.fromNumber(this.ge)}ye(t,e,n){let i=t.add(e.multiply(Ht.fromNumber(n)));return i.compare(Cc)===1&&(i=new Ht([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Ao(t),[n,i]=wo(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,i,o);if(!this.we(a))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Rs(o,i,e);return n.forEach(c=>a.insert(c)),a}insert(t){if(this.ge===0)return;const e=Ao(t),[n,i]=wo(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,i,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,yn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new mr(L.min(),i,new Y(q),jt(),j())}}class yn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new yn(n,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e,n,i){this.be=t,this.removedTargetIds=e,this.key=n,this.De=i}}class Ua{constructor(t,e){this.targetId=t,this.Ce=e}}class qa{constructor(t,e,n=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Ro{constructor(){this.ve=0,this.Fe=Vo(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=j(),e=j(),n=j();return this.Fe.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:O(38017,{changeType:o})}}),new yn(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=Vo()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Dc{constructor(t){this.Ge=t,this.ze=new Map,this.je=jt(),this.Je=qn(),this.He=qn(),this.Ye=new Y(q)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:O(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,i)=>{this.rt(i)&&e(i)})}st(t){const e=t.targetId,n=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(ns(o))if(n===0){const a=new M(o.path);this.et(e,a,pt.newNoDocument(a,L.min()))}else z(n===1,20013,{expectedCount:n});else{const a=this._t(e);if(a!==n){const c=this.ut(t),h=c?this.ct(c,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=Zt(n).toUint8Array()}catch(h){if(h instanceof ca)return Ve("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Rs(a,i,o)}catch(h){return Ve(h instanceof nn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.et(e,o,null),i++)}),i}Tt(t){const e=new Map;this.ze.forEach((o,a)=>{const c=this.ot(a);if(c){if(o.current&&ns(c.target)){const h=new M(c.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,pt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}});let n=j();this.He.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.je.forEach((o,a)=>a.setReadTime(t));const i=new mr(t,e,this.Ye,this.je,n);return this.je=jt(),this.Je=qn(),this.He=qn(),this.Ye=new Y(q),i}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Ro,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new ot(q),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new ot(q),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Ro),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function qn(){return new Y(M.comparator)}function Vo(){return new Y(M.comparator)}const bc={asc:"ASCENDING",desc:"DESCENDING"},Nc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kc={and:"AND",or:"OR"};class xc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function is(r,t){return r.useProto3Json||ur(t)?t:{value:t}}function er(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ja(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Mc(r,t){return er(r,t.toTimestamp())}function Nt(r){return z(!!r,49232),L.fromTimestamp(function(e){const n=Jt(e);return new X(n.seconds,n.nanos)}(r))}function Vs(r,t){return os(r,t).canonicalString()}function os(r,t){const e=function(i){return new Q(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Ba(r){const t=Q.fromString(r);return z(Qa(t),10190,{key:t.toString()}),t}function as(r,t){return Vs(r.databaseId,t.path)}function Qr(r,t){const e=Ba(t);if(e.get(1)!==r.databaseId.projectId)throw new D(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new D(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(Ga(e))}function za(r,t){return Vs(r.databaseId,t)}function Oc(r){const t=Ba(r);return t.length===4?Q.emptyPath():Ga(t)}function us(r){return new Q(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ga(r){return z(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Po(r,t,e){return{name:as(r,t),fields:e.value.mapValue.fields}}function Lc(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(z(m===void 0||typeof m=="string",58123),ht.fromBase64String(m||"")):(z(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ht.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?V.UNKNOWN:Fa(d.code);return new D(m,d.message||"")}(a);e=new qa(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Qr(r,n.document.name),o=Nt(n.document.updateTime),a=n.document.createTime?Nt(n.document.createTime):L.min(),c=new It({mapValue:{fields:n.document.fields}}),h=pt.newFoundDocument(i,o,a,c),d=n.targetIds||[],m=n.removedTargetIds||[];e=new Kn(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Qr(r,n.document),o=n.readTime?Nt(n.readTime):L.min(),a=pt.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Kn([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Qr(r,n.document),o=n.removedTargetIds||[];e=new Kn([],o,i,null)}else{if(!("filter"in t))return O(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,a=new Vc(i,o),c=n.targetId;e=new Ua(c,a)}}return e}function Fc(r,t){let e;if(t instanceof _n)e={update:Po(r,t.key,t.value)};else if(t instanceof La)e={delete:as(r,t.key)};else if(t instanceof se)e={update:Po(r,t.key,t.data),updateMask:Qc(t.fieldMask)};else{if(!(t instanceof Ac))return O(16599,{Vt:t.type});e={verify:as(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const c=a.transform;if(c instanceof Zn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof dn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof mn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof tr)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw O(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Mc(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O(27497)}(r,t.precondition)),e}function Uc(r,t){return r&&r.length>0?(z(t!==void 0,14353),r.map(e=>function(i,o){let a=i.updateTime?Nt(i.updateTime):Nt(o);return a.isEqual(L.min())&&(a=Nt(o)),new Tc(a,i.transformResults||[])}(e,t))):[]}function qc(r,t){return{documents:[za(r,t.path)]}}function jc(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=za(r,i);const o=function(d){if(d.length!==0)return Ka(Pt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(R){return{field:ve(R.field),direction:Gc(R.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=is(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:i}}function Bc(r){let t=Oc(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){z(n===1,65062);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(I){const R=$a(I);return R instanceof Pt&&Ta(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(I){return I.map(R=>function(k){return new Jn(Ae(k.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(I){let R;return R=typeof I=="object"?I.value:I,ur(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(I){const R=!!I.before,S=I.values||[];return new Yn(S,R)}(e.startAt));let d=null;return e.endAt&&(d=function(I){const R=!I.before,S=I.values||[];return new Yn(S,R)}(e.endAt)),ac(t,i,a,o,c,"F",h,d)}function zc(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function $a(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ae(e.unaryFilter.field);return nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ae(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ae(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ae(e.unaryFilter.field);return nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(r):r.fieldFilter!==void 0?function(e){return nt.create(Ae(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Pt.create(e.compositeFilter.filters.map(n=>$a(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(e.compositeFilter.op))}(r):O(30097,{filter:r})}function Gc(r){return bc[r]}function $c(r){return Nc[r]}function Kc(r){return kc[r]}function ve(r){return{fieldPath:r.canonicalString()}}function Ae(r){return ct.fromServerFormat(r.fieldPath)}function Ka(r){return r instanceof nt?function(e){if(e.op==="=="){if(mo(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NAN"}};if(fo(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(mo(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NOT_NAN"}};if(fo(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ve(e.field),op:$c(e.op),value:e.value}}}(r):r instanceof Pt?function(e){const n=e.getFilters().map(i=>Ka(i));return n.length===1?n[0]:{compositeFilter:{op:Kc(e.op),filters:n}}}(r):O(54877,{filter:r})}function Qc(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Qa(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e,n,i,o=L.min(),a=L.min(),c=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Wt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){this.yt=t}}function Hc(r){const t=Bc({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ss(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this.Cn=new Yc}addToCollectionParentIndex(t,e){return this.Cn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Yt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Yt.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Yc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ot(Q.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ot(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Wa=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(Wa,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new De(0)}static cr(){return new De(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="LruGarbageCollector",Jc=1048576;function Do([r,t],[e,n]){const i=q(r,e);return i===0?q(t,n):i}class Zc{constructor(t){this.Ir=t,this.buffer=new ot(Do),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Do(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class th{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){N(Co,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xe(e)?N(Co,"Ignoring IndexedDB error during garbage collection: ",e):await ke(e)}await this.Vr(3e5)})}}class eh{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return P.resolve(ar.ce);const n=new Zc(e);return this.mr.forEachTarget(t,i=>n.Ar(i.sequenceNumber)).next(()=>this.mr.pr(t,i=>n.Ar(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(So)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),So):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,i,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,a=Date.now(),this.nthSequenceNumber(t,i))).next(I=>(n=I,c=Date.now(),this.removeTargets(t,n,e))).next(I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(I=>(d=Date.now(),Te()<=Lt.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${I} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I})))}}function nh(r,t){return new eh(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.changes=new ge(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&un(n.mutation,i,wt.empty(),X.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,j()).next(()=>n))}getLocalViewOfDocuments(t,e,n=j()){const i=he();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let a=en();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=he();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,j()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,n,i){let o=jt();const a=an(),c=function(){return an()}();return e.forEach((h,d)=>{const m=n.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof se)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),un(m.mutation,d,m.mutation.getFieldMask(),X.now())):a.set(d.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>c.set(d,new sh(m,a.get(d)??null))),c))}recalculateAndSaveOverlays(t,e){const n=an();let i=new Y((a,c)=>a-c),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=n.get(h)||wt.empty();m=c.applyToLocalView(d,m),n.set(h,m);const I=(i.get(c.batchId)||j()).add(h);i=i.insert(c.batchId,I)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,I=Ca();m.forEach(R=>{if(!o.has(R)){const S=Ma(e.get(R),n.get(R));S!==null&&I.set(R,S),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,I))}return P.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):wa(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):P.resolve(he());let c=ln,h=o;return a.next(d=>P.forEach(d,(m,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(R=>{h=h.insert(m,R)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,j())).next(m=>({batchId:c,changes:Sa(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let i=en();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let a=en();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,h=>{const d=function(I,R){return new pn(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(m=>{m.forEach((I,R)=>{a=a.insert(I,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,pt.newInvalidDocument(m)))});let c=en();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&un(m.mutation,d,wt.empty(),X.now()),hr(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return P.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Nt(i.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(i){return{name:i.name,query:Hc(i.bundledQuery),readTime:Nt(i.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.overlays=new Y(M.comparator),this.qr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=he();return P.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.St(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const i=he(),o=e.length+1,a=new M(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Y((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=o.get(d.largestBatchId);m===null&&(m=he(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=he(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=i)););return P.resolve(c)}St(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Rc(e,n));let o=this.qr.get(e);o===void 0&&(o=j(),this.qr.set(e,o)),this.qr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.Qr=new ot(ut.$r),this.Ur=new ot(ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new ut(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Gr(new ut(t,e))}zr(t,e){t.forEach(n=>this.removeReference(n,e))}jr(t){const e=new M(new Q([])),n=new ut(e,t),i=new ut(e,t+1),o=[];return this.Ur.forEachInRange([n,i],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new M(new Q([])),n=new ut(e,t),i=new ut(e,t+1);let o=j();return this.Ur.forEachInRange([n,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ut(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ut{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return M.comparator(t.key,e.key)||q(t.Yr,e.Yr)}static Kr(t,e){return q(t.Yr,e.Yr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new ot(ut.$r)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wc(o,e,n,i);this.mutationQueue.push(a);for(const c of i)this.Zr=this.Zr.add(new ut(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ei(n),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?_s:this.tr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ut(e,0),i=new ut(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([n,i],a=>{const c=this.Xr(a.Yr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ot(q);return e.forEach(i=>{const o=new ut(i,0),a=new ut(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],c=>{n=n.add(c.Yr)})}),P.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const a=new ut(new M(o),0);let c=new ot(q);return this.Zr.forEachWhile(h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(h.Yr)),!0)},a),P.resolve(this.ti(c))}ti(t){const e=[];return t.forEach(n=>{const i=this.Xr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){z(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return P.forEach(e.mutations,i=>{const o=new ut(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new ut(e,0),i=this.Zr.firstAfterOrEqual(n);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t){this.ri=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,a=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():pt.newInvalidDocument(e))}getEntries(t,e){let n=jt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():pt.newInvalidDocument(i))}),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=jt();const a=e.path,c=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ul(Fl(m),n)<=0||(i.has(m.key)||hr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,i){O(9500)}ii(t,e){return P.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new hh(this)}getSize(t){return P.resolve(this.size)}}class hh extends rh{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(n)}),P.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t){this.persistence=t,this.si=new ge(e=>Ts(e),Is),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.oi=0,this._i=new Ps,this.targetCount=0,this.ai=De.ur()}forEachTarget(t,e){return this.si.forEach((n,i)=>e(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),P.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new De(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Pr(e),P.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,e){this.ui={},this.overlays={},this.ci=new ar(0),this.li=!1,this.li=!0,this.hi=new uh,this.referenceDelegate=t(this),this.Pi=new fh(this),this.indexManager=new Xc,this.remoteDocumentCache=function(i){return new ch(i)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new Wc(e),this.Ii=new oh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ah,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new lh(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const i=new dh(this.ci.next());return this.referenceDelegate.Ei(),n(i).next(o=>this.referenceDelegate.di(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ai(t,e){return P.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class dh extends jl{constructor(t){super(),this.currentSequenceNumber=t}}class Ss{constructor(t){this.persistence=t,this.Ri=new Ps,this.Vi=null}static mi(t){return new Ss(t)}get fi(){if(this.Vi)return this.Vi;throw O(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(i=>this.fi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.fi.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,n=>{const i=M.fromPath(n);return this.gi(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return P.or([()=>P.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class nr{constructor(t,e){this.persistence=t,this.pi=new ge(n=>Gl(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=nh(this,e)}static mi(t,e){return new nr(t,e)}Ei(){}di(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}pr(t,e){return P.forEach(this.pi,(n,i)=>this.br(t,n,i).next(o=>o?P.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,a=>this.br(t,a,e).next(c=>{c||(n++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),P.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=zn(t.data.value)),e}br(t,e,n){return P.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return P.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=i}static As(t,e){let n=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Cs(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Al()?8:Bl(wl())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ys(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(t,e,i,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new mh;return this.Ss(t,e,a).next(c=>{if(o.result=c,this.Vs)return this.bs(t,e,a,c.size)})}).next(()=>o.result)}bs(t,e,n,i){return n.documentReadCount<this.fs?(Te()<=Lt.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Ie(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(Te()<=Lt.DEBUG&&N("QueryEngine","Query:",Ie(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(Te()<=Lt.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Ie(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bt(e))):P.resolve())}ys(t,e){if(yo(e))return P.resolve(null);let n=bt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ss(e,null,"F"),n=bt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=j(...o);return this.ps.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const d=this.Ds(e,c);return this.Cs(e,d,a,h.readTime)?this.ys(t,ss(e,null,"F")):this.vs(t,d,e,h)}))})))}ws(t,e,n,i){return yo(e)||i.isEqual(L.min())?P.resolve(null):this.ps.getDocuments(t,n).next(o=>{const a=this.Ds(e,o);return this.Cs(e,a,n,i)?P.resolve(null):(Te()<=Lt.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ie(e)),this.vs(t,a,e,Ll(i,ln)).next(c=>c))})}Ds(t,e){let n=new ot(Va(t));return e.forEach((i,o)=>{hr(t,o)&&(n=n.add(o))}),n}Cs(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,n){return Te()<=Lt.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ie(e)),this.ps.getDocumentsMatchingQuery(t,e,Yt.min(),n)}vs(t,e,n,i){return this.ps.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="LocalStore",ph=3e8;class _h{constructor(t,e,n,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new Y(q),this.xs=new ge(o=>Ts(o),Is),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ih(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function yh(r,t,e,n){return new _h(r,t,e,n)}async function Xa(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],c=[];let h=j();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:c}))})})}function Eh(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const I=d.batch,R=I.keys();let S=P.resolve();return R.forEach(k=>{S=S.next(()=>m.getEntry(h,k)).next(x=>{const b=d.docVersions.get(k);z(b!==null,48541),x.version.compareTo(b)<0&&(I.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),m.addEntry(x)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,I))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=j();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function Ya(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function Th(r,t){const e=F(r),n=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const c=[];t.targetChanges.forEach((m,I)=>{const R=i.get(I);if(!R)return;c.push(e.Pi.removeMatchingKeys(o,m.removedDocuments,I).next(()=>e.Pi.addMatchingKeys(o,m.addedDocuments,I)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?S=S.withResumeToken(ht.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),i=i.insert(I,S),function(x,b,K){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=ph?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(R,S,m)&&c.push(e.Pi.updateTargetData(o,S))});let h=jt(),d=j();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(Ih(o,a,t.documentUpdates).next(m=>{h=m.ks,d=m.qs})),!n.isEqual(L.min())){const m=e.Pi.getLastRemoteSnapshotVersion(o).next(I=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(m)}return P.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Ms=i,o))}function Ih(r,t,e){let n=j(),i=j();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let a=jt();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):N(Ds,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{ks:a,qs:i}})}function vh(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=_s),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Ah(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Pi.getTargetData(n,t).next(o=>o?(i=o,P.resolve(i)):e.Pi.allocateTargetId(n).next(a=>(i=new Wt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n})}async function ls(r,t,e){const n=F(r),i=n.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!xe(a))throw a;N(Ds,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ms=n.Ms.remove(t),n.xs.delete(i.target)}function bo(r,t,e){const n=F(r);let i=L.min(),o=j();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const I=F(h),R=I.xs.get(m);return R!==void 0?P.resolve(I.Ms.get(R)):I.Pi.getTargetData(d,m)}(n,a,bt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>n.Fs.getDocumentsMatchingQuery(a,t,e?i:L.min(),e?o:j())).next(c=>(wh(n,lc(t),c),{documents:c,Qs:o})))}function wh(r,t,e){let n=r.Os.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Os.set(t,n)}class No{constructor(){this.activeTargetIds=gc()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Rh{constructor(){this.Mo=new No,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new No,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="ConnectivityMonitor";class xo{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){N(ko,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){N(ko,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn=null;function cs(){return jn===null?jn=function(){return 268435456+Math.round(2147483648*Math.random())}():jn++,"0x"+jn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="RestConnection",Ph={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Sh{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===Hn?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(t,e,n,i,o){const a=cs(),c=this.zo(t,e.toUriEncodedString());N(Wr,`Sending RPC '${t}' ${a}:`,c,n);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,i,o);const{host:d}=new URL(c),m=Yo(d);return this.Jo(t,c,h,n,m).then(I=>(N(Wr,`Received RPC '${t}' ${a}: `,I),I),I=>{throw Ve(Wr,`RPC '${t}' ${a} failed with error: `,I,"url: ",c,"request:",n),I})}Ho(t,e,n,i,o,a){return this.Go(t,e,n,i,o)}jo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ne}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}zo(t,e){const n=Ph[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class Dh extends Sh{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,i,o){const a=cs();return new Promise((c,h)=>{const d=new Zo;d.setWithCredentials(!0),d.listenOnce(ta.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Bn.NO_ERROR:const I=d.getResponseJson();N(mt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(I)),c(I);break;case Bn.TIMEOUT:N(mt,`RPC '${t}' ${a} timed out`),h(new D(V.DEADLINE_EXCEEDED,"Request time out"));break;case Bn.HTTP_ERROR:const R=d.getStatus();if(N(mt,`RPC '${t}' ${a} failed with status:`,R,"response text:",d.getResponseText()),R>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const k=S==null?void 0:S.error;if(k&&k.status&&k.message){const x=function(K){const G=K.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(G)>=0?G:V.UNKNOWN}(k.status);h(new D(x,k.message))}else h(new D(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new D(V.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(mt,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(i);N(mt,`RPC '${t}' ${a} sending request:`,i),d.send(e,"POST",m,n,15)})}T_(t,e,n){const i=cs(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ra(),c=na(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");N(mt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const I=a.createWebChannel(m,h);this.I_(I);let R=!1,S=!1;const k=new Ch({Yo:b=>{S?N(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(R||(N(mt,`Opening RPC '${t}' stream ${i} transport.`),I.open(),R=!0),N(mt,`RPC '${t}' stream ${i} sending:`,b),I.send(b))},Zo:()=>I.close()}),x=(b,K,G)=>{b.listen(K,W=>{try{G(W)}catch(ft){setTimeout(()=>{throw ft},0)}})};return x(I,tn.EventType.OPEN,()=>{S||(N(mt,`RPC '${t}' stream ${i} transport opened.`),k.o_())}),x(I,tn.EventType.CLOSE,()=>{S||(S=!0,N(mt,`RPC '${t}' stream ${i} transport closed`),k.a_(),this.E_(I))}),x(I,tn.EventType.ERROR,b=>{S||(S=!0,Ve(mt,`RPC '${t}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),k.a_(new D(V.UNAVAILABLE,"The operation could not be completed")))}),x(I,tn.EventType.MESSAGE,b=>{var K;if(!S){const G=b.data[0];z(!!G,16349);const W=G,ft=(W==null?void 0:W.error)||((K=W[0])==null?void 0:K.error);if(ft){N(mt,`RPC '${t}' stream ${i} received error:`,ft);const vt=ft.status;let st=function(_){const T=et[_];if(T!==void 0)return Fa(T)}(vt),E=ft.message;st===void 0&&(st=V.INTERNAL,E="Unknown error status: "+vt+" with message "+ft.message),S=!0,k.a_(new D(st,E)),I.close()}else N(mt,`RPC '${t}' stream ${i} received:`,G),k.u_(G)}}),x(c,ea.STAT_EVENT,b=>{b.stat===Yr.PROXY?N(mt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===Yr.NOPROXY&&N(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function Hr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(r){return new xc(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-n);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="PersistentStream";class Za{constructor(t,e,n,i,o,a,c,h){this.Mi=t,this.S_=n,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ja(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(qt(e.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.D_===e&&this.G_(n,i)},n=>{t(()=>{const i=new D(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{n(()=>this.z_(i))}),this.stream.onMessage(i=>{n(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return N(Mo,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(N(Mo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bh extends Za{constructor(t,e,n,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Lc(this.serializer,t),n=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Nt(a.readTime):L.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=us(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=ns(h)?{documents:qc(o,h)}:{query:jc(o,h).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=ja(o,a.resumeToken);const d=is(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=er(o,a.snapshotVersion.toTimestamp());const d=is(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const n=zc(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=us(this.serializer),e.removeTarget=t,this.q_(e)}}class Nh extends Za{constructor(t,e,n,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return z(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){z(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Uc(t.writeResults,t.commitTime),n=Nt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=us(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Fc(this.serializer,n))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{}class xh extends kh{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(t,os(e,n),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(V.UNKNOWN,o.toString())})}Ho(t,e,n,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(t,os(e,n),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(V.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Mh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qt(e),this.aa=!1):N("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="RemoteStore";class Oh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{n.enqueueAndForget(async()=>{pe(this)&&(N(me,"Restarting streams for network reachability change."),await async function(h){const d=F(h);d.Ea.add(4),await En(d),d.Ra.set("Unknown"),d.Ea.delete(4),await pr(d)}(this))})}),this.Ra=new Mh(n,i)}}async function pr(r){if(pe(r))for(const t of r.da)await t(!0)}async function En(r){for(const t of r.da)await t(!1)}function tu(r,t){const e=F(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),xs(e)?ks(e):Me(e).O_()&&Ns(e,t))}function bs(r,t){const e=F(r),n=Me(e);e.Ia.delete(t),n.O_()&&eu(e,t),e.Ia.size===0&&(n.O_()?n.L_():pe(e)&&e.Ra.set("Unknown"))}function Ns(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Me(r).Y_(t)}function eu(r,t){r.Va.Ue(t),Me(r).Z_(t)}function ks(r){r.Va=new Dc({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),Me(r).start(),r.Ra.ua()}function xs(r){return pe(r)&&!Me(r).x_()&&r.Ia.size>0}function pe(r){return F(r).Ea.size===0}function nu(r){r.Va=void 0}async function Lh(r){r.Ra.set("Online")}async function Fh(r){r.Ia.forEach((t,e)=>{Ns(r,t)})}async function Uh(r,t){nu(r),xs(r)?(r.Ra.ha(t),ks(r)):r.Ra.set("Unknown")}async function qh(r,t,e){if(r.Ra.set("Online"),t instanceof qa&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.Ia.delete(c),i.Va.removeTarget(c))}(r,t)}catch(n){N(me,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rr(r,n)}else if(t instanceof Kn?r.Va.Ze(t):t instanceof Ua?r.Va.st(t):r.Va.tt(t),!e.isEqual(L.min()))try{const n=await Ya(r.localStore);e.compareTo(n)>=0&&await function(o,a){const c=o.Va.Tt(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(d);m&&o.Ia.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(ht.EMPTY_BYTE_STRING,m.snapshotVersion)),eu(o,h);const I=new Wt(m.target,h,d,m.sequenceNumber);Ns(o,I)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){N(me,"Failed to raise snapshot:",n),await rr(r,n)}}async function rr(r,t,e){if(!xe(t))throw t;r.Ea.add(1),await En(r),r.Ra.set("Offline"),e||(e=()=>Ya(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(me,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await pr(r)})}function ru(r,t){return t().catch(e=>rr(r,e,t))}async function _r(r){const t=F(r),e=ee(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:_s;for(;jh(t);)try{const i=await vh(t.localStore,n);if(i===null){t.Ta.length===0&&e.L_();break}n=i.batchId,Bh(t,i)}catch(i){await rr(t,i)}su(t)&&iu(t)}function jh(r){return pe(r)&&r.Ta.length<10}function Bh(r,t){r.Ta.push(t);const e=ee(r);e.O_()&&e.X_&&e.ea(t.mutations)}function su(r){return pe(r)&&!ee(r).x_()&&r.Ta.length>0}function iu(r){ee(r).start()}async function zh(r){ee(r).ra()}async function Gh(r){const t=ee(r);for(const e of r.Ta)t.ea(e.mutations)}async function $h(r,t,e){const n=r.Ta.shift(),i=ws.from(n,t,e);await ru(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await _r(r)}async function Kh(r,t){t&&ee(r).X_&&await async function(n,i){if(function(a){return Pc(a)&&a!==V.ABORTED}(i.code)){const o=n.Ta.shift();ee(n).B_(),await ru(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await _r(n)}}(r,t),su(r)&&iu(r)}async function Oo(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),N(me,"RemoteStore received new credentials");const n=pe(e);e.Ea.add(3),await En(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await pr(e)}async function Qh(r,t){const e=F(r);t?(e.Ea.delete(2),await pr(e)):t||(e.Ea.add(2),await En(e),e.Ra.set("Unknown"))}function Me(r){return r.ma||(r.ma=function(e,n,i){const o=F(e);return o.sa(),new bh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Xo:Lh.bind(null,r),t_:Fh.bind(null,r),r_:Uh.bind(null,r),H_:qh.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),xs(r)?ks(r):r.Ra.set("Unknown")):(await r.ma.stop(),nu(r))})),r.ma}function ee(r){return r.fa||(r.fa=function(e,n,i){const o=F(e);return o.sa(),new Nh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:zh.bind(null,r),r_:Kh.bind(null,r),ta:Gh.bind(null,r),na:$h.bind(null,r)}),r.da.push(async t=>{t?(r.fa.B_(),await _r(r)):(await r.fa.stop(),r.Ta.length>0&&(N(me,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const a=Date.now()+n,c=new Ms(t,e,a,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Os(r,t){if(qt("AsyncQueue",`${t}: ${r}`),xe(r))return new D(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static emptySet(t){return new we(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=en(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new we;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.ga=new Y(M.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):O(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class be{constructor(t,e,n,i,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new be(t,e,we.emptySet(e),a,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&cr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class Hh{constructor(){this.queries=Fo(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const i=F(e),o=i.queries;i.queries=Fo(),o.forEach((a,c)=>{for(const h of c.Sa)h.onError(n)})})(this,new D(V.ABORTED,"Firestore shutting down"))}}function Fo(){return new ge(r=>Ra(r),cr)}async function ou(r,t){const e=F(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(n=2):(o=new Wh,n=t.Da()?0:1);try{switch(n){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=Os(a,`Initialization of query '${Ie(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Ls(e)}async function au(r,t){const e=F(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Xh(r,t){const e=F(r);let n=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.Sa)c.Fa(i)&&(n=!0);a.wa=i}}n&&Ls(e)}function Yh(r,t,e){const n=F(r),i=n.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);n.queries.delete(t)}function Ls(r){r.Ca.forEach(t=>{t.next()})}var hs,Uo;(Uo=hs||(hs={})).Ma="default",Uo.Cache="cache";class uu{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new be(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=be.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==hs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t){this.key=t}}class cu{constructor(t){this.key=t}}class Jh{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=j(),this.mutatedKeys=j(),this.eu=Va(t),this.tu=new we(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new Lo,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,I)=>{const R=i.get(m),S=hr(this.query,I)?I:null,k=!!R&&this.mutatedKeys.has(R.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;R&&S?R.data.isEqual(S.data)?k!==x&&(n.track({type:3,doc:S}),b=!0):this.su(R,S)||(n.track({type:2,doc:S}),b=!0,(h&&this.eu(S,h)>0||d&&this.eu(S,d)<0)&&(c=!0)):!R&&S?(n.track({type:0,doc:S}),b=!0):R&&!S&&(n.track({type:1,doc:R}),b=!0,(h||d)&&(c=!0)),b&&(S?(a=a.add(S),o=x?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{tu:a,iu:n,Cs:c,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((m,I)=>function(S,k){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Rt:b})}};return x(S)-x(k)}(m.type,I.type)||this.eu(m.doc,I.doc)),this.ou(n),i=i??!1;const c=e&&!i?this._u():[],h=this.Xa.size===0&&this.current&&!i?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new be(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Lo,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=j(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const e=[];return t.forEach(n=>{this.Xa.has(n)||e.push(new cu(n))}),this.Xa.forEach(n=>{t.has(n)||e.push(new lu(n))}),e}cu(t){this.Ya=t.Qs,this.Xa=j();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return be.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Fs="SyncEngine";class Zh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class tf{constructor(t){this.key=t,this.hu=!1}}class ef{constructor(t,e,n,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new ge(c=>Ra(c),cr),this.Iu=new Map,this.Eu=new Set,this.du=new Y(M.comparator),this.Au=new Map,this.Ru=new Ps,this.Vu={},this.mu=new Map,this.fu=De.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nf(r,t,e=!0){const n=pu(r);let i;const o=n.Tu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await hu(n,t,e,!0),i}async function rf(r,t){const e=pu(r);await hu(e,t,!0,!1)}async function hu(r,t,e,n){const i=await Ah(r.localStore,bt(t)),o=i.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await sf(r,t,o,a==="current",i.resumeToken)),r.isPrimaryClient&&e&&tu(r.remoteStore,i),c}async function sf(r,t,e,n,i){r.pu=(I,R,S)=>async function(x,b,K,G){let W=b.view.ru(K);W.Cs&&(W=await bo(x.localStore,b.query,!1).then(({documents:E})=>b.view.ru(E,W)));const ft=G&&G.targetChanges.get(b.targetId),vt=G&&G.targetMismatches.get(b.targetId)!=null,st=b.view.applyChanges(W,x.isPrimaryClient,ft,vt);return jo(x,b.targetId,st.au),st.snapshot}(r,I,R,S);const o=await bo(r.localStore,t,!0),a=new Jh(t,o.Qs),c=a.ru(o.documents),h=yn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=a.applyChanges(c,r.isPrimaryClient,h);jo(r,e,d.au);const m=new Zh(t,e,a);return r.Tu.set(t,m),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),d.snapshot}async function of(r,t,e){const n=F(r),i=n.Tu.get(t),o=n.Iu.get(i.targetId);if(o.length>1)return n.Iu.set(i.targetId,o.filter(a=>!cr(a,t))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ls(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&bs(n.remoteStore,i.targetId),fs(n,i.targetId)}).catch(ke)):(fs(n,i.targetId),await ls(n.localStore,i.targetId,!0))}async function af(r,t){const e=F(r),n=e.Tu.get(t),i=e.Iu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),bs(e.remoteStore,n.targetId))}async function uf(r,t,e){const n=gf(r);try{const i=await function(a,c){const h=F(a),d=X.now(),m=c.reduce((S,k)=>S.add(k.key),j());let I,R;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=jt(),x=j();return h.Ns.getEntries(S,m).next(b=>{k=b,k.forEach((K,G)=>{G.isValidDocument()||(x=x.add(K))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,k)).next(b=>{I=b;const K=[];for(const G of c){const W=vc(G,I.get(G.key).overlayedDocument);W!=null&&K.push(new se(G.key,W,_a(W.value.mapValue),Vt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,K,c)}).next(b=>{R=b;const K=b.applyToLocalDocumentSet(I,x);return h.documentOverlayCache.saveOverlays(S,b.batchId,K)})}).then(()=>({batchId:R.batchId,changes:Sa(I)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(a,c,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new Y(q)),d=d.insert(c,h),a.Vu[a.currentUser.toKey()]=d}(n,i.batchId,e),await Tn(n,i.changes),await _r(n.remoteStore)}catch(i){const o=Os(i,"Failed to persist write");e.reject(o)}}async function fu(r,t){const e=F(r);try{const n=await Th(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Au.get(o);a&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?z(a.hu,14607):i.removedDocuments.size>0&&(z(a.hu,42227),a.hu=!1))}),await Tn(e,n,t)}catch(n){await ke(n)}}function qo(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Tu.forEach((o,a)=>{const c=a.view.va(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=F(a);h.onlineState=c;let d=!1;h.queries.forEach((m,I)=>{for(const R of I.Sa)R.va(c)&&(d=!0)}),d&&Ls(h)}(n.eventManager,t),i.length&&n.Pu.H_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function lf(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Au.get(t),o=i&&i.key;if(o){let a=new Y(M.comparator);a=a.insert(o,pt.newNoDocument(o,L.min()));const c=j().add(o),h=new mr(L.min(),new Map,new Y(q),a,c);await fu(n,h),n.du=n.du.remove(o),n.Au.delete(t),Us(n)}else await ls(n.localStore,t,!1).then(()=>fs(n,t,e)).catch(ke)}async function cf(r,t){const e=F(r),n=t.batch.batchId;try{const i=await Eh(e.localStore,t);mu(e,n,null),du(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Tn(e,i)}catch(i){await ke(i)}}async function hf(r,t,e){const n=F(r);try{const i=await function(a,c){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(I=>(z(I!==null,37113),m=I.keys(),h.mutationQueue.removeMutationBatch(d,I))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(n.localStore,t);mu(n,t,e),du(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Tn(n,i)}catch(i){await ke(i)}}function du(r,t){(r.mu.get(t)||[]).forEach(e=>{e.resolve()}),r.mu.delete(t)}function mu(r,t,e){const n=F(r);let i=n.Vu[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Vu[n.currentUser.toKey()]=i}}function fs(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(n=>{r.Ru.containsKey(n)||gu(r,n)})}function gu(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(bs(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),Us(r))}function jo(r,t,e){for(const n of e)n instanceof lu?(r.Ru.addReference(n.key,t),ff(r,n)):n instanceof cu?(N(Fs,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||gu(r,n.key)):O(19791,{wu:n})}function ff(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(N(Fs,"New document in limbo: "+e),r.Eu.add(n),Us(r))}function Us(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new M(Q.fromString(t)),n=r.fu.next();r.Au.set(n,new tf(e)),r.du=r.du.insert(e,n),tu(r.remoteStore,new Wt(bt(vs(e.path)),n,"TargetPurposeLimboResolution",ar.ce))}}async function Tn(r,t,e){const n=F(r),i=[],o=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((c,h)=>{a.push(n.pu(h,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const I=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(d){i.push(d);const I=Cs.As(h.targetId,d);o.push(I)}}))}),await Promise.all(a),n.Pu.H_(i),await async function(h,d){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>P.forEach(d,R=>P.forEach(R.Es,S=>m.persistence.referenceDelegate.addReference(I,R.targetId,S)).next(()=>P.forEach(R.ds,S=>m.persistence.referenceDelegate.removeReference(I,R.targetId,S)))))}catch(I){if(!xe(I))throw I;N(Ds,"Failed to update sequence numbers: "+I)}for(const I of d){const R=I.targetId;if(!I.fromCache){const S=m.Ms.get(R),k=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(k);m.Ms=m.Ms.insert(R,x)}}}(n.localStore,o))}async function df(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){N(Fs,"User change. New user:",t.toKey());const n=await Xa(e.localStore,t);e.currentUser=t,function(o,a){o.mu.forEach(c=>{c.forEach(h=>{h.reject(new D(V.CANCELLED,a))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Tn(e,n.Ls)}}function mf(r,t){const e=F(r),n=e.Au.get(t);if(n&&n.hu)return j().add(n.key);{let i=j();const o=e.Iu.get(t);if(!o)return i;for(const a of o){const c=e.Tu.get(a);i=i.unionWith(c.view.nu)}return i}}function pu(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=fu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=mf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lf.bind(null,t),t.Pu.H_=Xh.bind(null,t.eventManager),t.Pu.yu=Yh.bind(null,t.eventManager),t}function gf(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=cf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hf.bind(null,t),t}class sr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=gr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return yh(this.persistence,new gh,t.initialUser,this.serializer)}Cu(t){return new Ha(Ss.mi,this.serializer)}Du(t){return new Rh}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sr.provider={build:()=>new sr};class pf extends sr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){z(this.persistence.referenceDelegate instanceof nr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new th(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new Ha(n=>nr.mi(n,e),this.serializer)}}class ds{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>qo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=df.bind(null,this.syncEngine),await Qh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Hh}()}createDatastore(t){const e=gr(t.databaseInfo.databaseId),n=function(o){return new Dh(o)}(t.databaseInfo);return function(o,a,c,h){return new xh(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,a,c){return new Oh(n,i,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>qo(this.syncEngine,e,0),function(){return xo.v()?new xo:new Vh}())}createSyncEngine(t,e){return function(i,o,a,c,h,d,m){const I=new ef(i,o,a,c,h,d);return m&&(I.gu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);N(me,"RemoteStore shutting down."),o.Ea.add(5),await En(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ds.provider={build:()=>new ds};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):qt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="FirestoreClient";class _f{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=ps.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{N(ne,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(N(ne,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Os(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Xr(r,t){r.asyncQueue.verifyOperationInProgress(),N(ne,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Xa(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Bo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await yf(r);N(ne,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Oo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Oo(t.remoteStore,i)),r._onlineComponents=t}async function yf(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(ne,"Using user provided OfflineComponentProvider");try{await Xr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ve("Error using user provided cache. Falling back to memory cache: "+e),await Xr(r,new sr)}}else N(ne,"Using default OfflineComponentProvider"),await Xr(r,new pf(void 0));return r._offlineComponents}async function yu(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(ne,"Using user provided OnlineComponentProvider"),await Bo(r,r._uninitializedComponentsProvider._online)):(N(ne,"Using default OnlineComponentProvider"),await Bo(r,new ds))),r._onlineComponents}function Ef(r){return yu(r).then(t=>t.syncEngine)}async function Eu(r){const t=await yu(r),e=t.eventManager;return e.onListen=nf.bind(null,t.syncEngine),e.onUnlisten=of.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=rf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=af.bind(null,t.syncEngine),e}function Tf(r,t,e={}){const n=new Ft;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new _u({next:R=>{m.Nu(),a.enqueueAndForget(()=>au(o,I));const S=R.docs.has(c);!S&&R.fromCache?d.reject(new D(V.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&R.fromCache&&h&&h.source==="server"?d.reject(new D(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(R)},error:R=>d.reject(R)}),I=new uu(vs(c.path),m,{includeMetadataChanges:!0,qa:!0});return ou(o,I)}(await Eu(r),r.asyncQueue,t,e,n)),n.promise}function If(r,t,e={}){const n=new Ft;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new _u({next:R=>{m.Nu(),a.enqueueAndForget(()=>au(o,I)),R.fromCache&&h.source==="server"?d.reject(new D(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(R)},error:R=>d.reject(R)}),I=new uu(c,m,{includeMetadataChanges:!0,qa:!0});return ou(o,I)}(await Eu(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="firestore.googleapis.com",Go=!0;class $o{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new D(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Iu,this.ssl=Go}else this.host=t.host,this.ssl=t.ssl??Go;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Wa;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Jc)throw new D(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ol("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tu(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new D(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new D(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new D(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $o({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $o(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Vl;switch(n.type){case"firstParty":return new Dl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zo.get(e);n&&(N("ComponentProvider","Removing Datastore"),zo.delete(e),n.terminate())}(this),Promise.resolve()}}function vf(r,t,e,n={}){var d;r=Mt(r,yr);const i=Yo(t),o=r._getSettings(),a={...o,emulatorOptions:r._getEmulatorOptions()},c=`${t}:${e}`;i&&(El(`https://${c}`),Tl("Firestore",!0)),o.host!==Iu&&o.host!==c&&Ve("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:c,ssl:i,emulatorOptions:n};if(!Il(h,a)&&(r._setSettings(h),n.mockUserToken)){let m,I;if(typeof n.mockUserToken=="string")m=n.mockUserToken,I=gt.MOCK_USER;else{m=vl(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const R=n.mockUserToken.sub||n.mockUserToken.user_id;if(!R)throw new D(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new gt(R)}r._authCredentials=new Pl(new ia(m,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Oe(this.firestore,t,this._query)}}class tt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new tt(this.firestore,t,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(gn(e,tt._jsonSchema))return new tt(t,n||null,new M(Q.fromString(e.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:rt("string",tt._jsonSchemaVersion),referencePath:rt("string")};class Xt extends Oe{constructor(t,e,n){super(t,e,vs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new tt(this.firestore,null,new M(t))}withConverter(t){return new Xt(this.firestore,t,this._path)}}function qf(r,t,...e){if(r=Ut(r),oa("collection","path",t),r instanceof yr){const n=Q.fromString(t,...e);return ro(n),new Xt(r,null,n)}{if(!(r instanceof tt||r instanceof Xt))throw new D(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Q.fromString(t,...e));return ro(n),new Xt(r.firestore,null,n)}}function Af(r,t,...e){if(r=Ut(r),arguments.length===1&&(t=ps.newId()),oa("doc","path",t),r instanceof yr){const n=Q.fromString(t,...e);return no(n),new tt(r,null,new M(n))}{if(!(r instanceof tt||r instanceof Xt))throw new D(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Q.fromString(t,...e));return no(n),new tt(r.firestore,r instanceof Xt?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="AsyncQueue";class Qo{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ja(this,"async_queue_retry"),this._c=()=>{const n=Hr();n&&N(Ko,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=Hr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Hr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Ft;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!xe(t))throw t;N(Ko,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,qt("INTERNAL UNHANDLED ERROR: ",Wo(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Ms.createAndSchedule(this,t,e,n,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&O(47125,{Pc:Wo(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Wo(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Le extends yr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Qo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qo(t),this._firestoreClient=void 0,await t}}}function jf(r,t){const e=typeof r=="object"?r:pl(),n=typeof r=="string"?r:Hn,i=_l(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=yl("firestore");o&&vf(i,...o)}return i}function qs(r){if(r._terminated)throw new D(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||wf(r),r._firestoreClient}function wf(r){var n,i,o;const t=r._freezeSettings(),e=function(c,h,d,m){return new Ql(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Tu(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new _f(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rt(ht.fromBase64String(t))}catch(e){throw new D(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Rt(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(gn(t,Rt._jsonSchema))return Rt.fromBase64String(t.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:rt("string",Rt._jsonSchemaVersion),bytes:rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kt._jsonSchemaVersion}}static fromJSON(t){if(gn(t,kt._jsonSchema))return new kt(t.latitude,t.longitude)}}kt._jsonSchemaVersion="firestore/geoPoint/1.0",kt._jsonSchema={type:rt("string",kt._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(gn(t,xt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new xt(t.vectorValues);throw new D(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xt._jsonSchemaVersion="firestore/vectorValue/1.0",xt._jsonSchema={type:rt("string",xt._jsonSchemaVersion),vectorValues:rt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=/^__.*__$/;class Vf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new _n(t,this.data,e,this.fieldTransforms)}}class vu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Au(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{Ac:r})}}class Bs{constructor(t,e,n,i,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Bs({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ir(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Au(this.Ac)&&Rf.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Pf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||gr(t)}Cc(t,e,n,i=!1){return new Bs({Ac:t,methodName:e,Dc:n,path:ct.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tr(r){const t=r._freezeSettings(),e=gr(r._databaseId);return new Pf(r._databaseId,!!t.ignoreUndefinedProperties,e)}function wu(r,t,e,n,i,o={}){const a=r.Cc(o.merge||o.mergeFields?2:0,t,e,i);zs("Data must be an object, but it was:",a,n);const c=Ru(n,a);let h,d;if(o.merge)h=new wt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const I of o.mergeFields){const R=ms(t,I,e);if(!a.contains(R))throw new D(V.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Pu(m,R)||m.push(R)}h=new wt(m),d=a.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,d=a.fieldTransforms;return new Vf(new It(c),h,d)}class Ir extends js{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ir}}function Sf(r,t,e,n){const i=r.Cc(1,t,e);zs("Data must be an object, but it was:",i,n);const o=[],a=It.empty();re(n,(h,d)=>{const m=Gs(t,h,e);d=Ut(d);const I=i.yc(m);if(d instanceof Ir)o.push(m);else{const R=In(d,I);R!=null&&(o.push(m),a.set(m,R))}});const c=new wt(o);return new vu(a,c,i.fieldTransforms)}function Cf(r,t,e,n,i,o){const a=r.Cc(1,t,e),c=[ms(t,n,e)],h=[i];if(o.length%2!=0)throw new D(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)c.push(ms(t,o[R])),h.push(o[R+1]);const d=[],m=It.empty();for(let R=c.length-1;R>=0;--R)if(!Pu(d,c[R])){const S=c[R];let k=h[R];k=Ut(k);const x=a.yc(S);if(k instanceof Ir)d.push(S);else{const b=In(k,x);b!=null&&(d.push(S),m.set(S,b))}}const I=new wt(d);return new vu(m,I,a.fieldTransforms)}function Df(r,t,e,n=!1){return In(e,r.Cc(n?4:3,t))}function In(r,t){if(Vu(r=Ut(r)))return zs("Unsupported field value:",t,r),Ru(r,t);if(r instanceof js)return function(n,i){if(!Au(i.Ac))throw i.Sc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(n,i){const o=[];let a=0;for(const c of n){let h=In(c,i.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=Ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return pc(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=X.fromDate(n);return{timestampValue:er(i.serializer,o)}}if(n instanceof X){const o=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:er(i.serializer,o)}}if(n instanceof kt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Rt)return{bytesValue:ja(i.serializer,n._byteString)};if(n instanceof tt){const o=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw i.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Vs(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof xt)return function(a,c){return{mapValue:{fields:{[ga]:{stringValue:pa},[Xn]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return As(c.serializer,d)})}}}}}}(n,i);throw i.Sc(`Unsupported field value: ${or(n)}`)}(r,t)}function Ru(r,t){const e={};return la(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):re(r,(n,i)=>{const o=In(i,t.mc(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Vu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof X||r instanceof kt||r instanceof Rt||r instanceof tt||r instanceof js||r instanceof xt)}function zs(r,t,e){if(!Vu(e)||!aa(e)){const n=or(e);throw n==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+n)}}function ms(r,t,e){if((t=Ut(t))instanceof Er)return t._internalPath;if(typeof t=="string")return Gs(r,t);throw ir("Field path arguments must be of type string or ",r,!1,void 0,e)}const bf=new RegExp("[~\\*/\\[\\]]");function Gs(r,t,e){if(t.search(bf)>=0)throw ir(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Er(...t.split("."))._internalPath}catch{throw ir(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ir(r,t,e,n,i){const o=n&&!n.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${i}`),h+=")"),new D(V.INVALID_ARGUMENT,c+r+h)}function Pu(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Nf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Cu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Nf extends Su{data(){return super.data()}}function Cu(r,t){return typeof t=="string"?Gs(r,t):t instanceof Er?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new D(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $s{}class xf extends $s{}function Bf(r,t,...e){let n=[];t instanceof $s&&n.push(t),n=n.concat(e),function(o){const a=o.filter(h=>h instanceof Qs).length,c=o.filter(h=>h instanceof Ks).length;if(a>1||a>0&&c>0)throw new D(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Ks extends xf{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Ks(t,e,n)}_apply(t){const e=this._parse(t);return Du(t._query,e),new Oe(t.firestore,t.converter,rs(t._query,e))}_parse(t){const e=Tr(t.firestore);return function(o,a,c,h,d,m,I){let R;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new D(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Xo(I,m);const k=[];for(const x of I)k.push(Ho(h,o,x));R={arrayValue:{values:k}}}else R=Ho(h,o,I)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Xo(I,m),R=Df(c,a,I,m==="in"||m==="not-in");return nt.create(d,m,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Qs extends $s{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Qs(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Pt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const c=o.getFlattenedFilters();for(const h of c)Du(a,h),a=rs(a,h)}(t._query,e),new Oe(t.firestore,t.converter,rs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ho(r,t,e){if(typeof(e=Ut(e))=="string"){if(e==="")throw new D(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wa(t)&&e.indexOf("/")!==-1)throw new D(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(Q.fromString(e));if(!M.isDocumentKey(n))throw new D(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ho(r,new M(n))}if(e instanceof tt)return ho(r,e._key);throw new D(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${or(e)}.`)}function Xo(r,t){if(!Array.isArray(r)||r.length===0)throw new D(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Du(r,t){const e=function(i,o){for(const a of i)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new D(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Mf{convertValue(t,e="none"){switch(te(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return re(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var n,i,o;const e=(o=(i=(n=t.fields)==null?void 0:n[Xn].arrayValue)==null?void 0:i.values)==null?void 0:o.map(a=>Z(a.doubleValue));return new xt(e)}convertGeoPoint(t){return new kt(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=lr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(cn(t));default:return null}}convertTimestamp(t){const e=Jt(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Q.fromString(t);z(Qa(n),9688,{name:t});const i=new hn(n.get(1),n.get(3)),o=new M(n.popFirst(5));return i.isEqual(e)||qt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(r,t,e){let n;return n=r?r.toFirestore(t):t,n}class rn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fe extends Su{constructor(t,e,n,i,o,a){super(t,e,n,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Cu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=fe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}fe._jsonSchemaVersion="firestore/documentSnapshot/1.0",fe._jsonSchema={type:rt("string",fe._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class Qn extends fe{data(t={}){return super.data(t)}}class Re{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new rn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Qn(this._firestore,this._userDataWriter,n.key,n,new rn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const h=new Qn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new rn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Qn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new rn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Of(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Re._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ps.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Of(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(r){r=Mt(r,tt);const t=Mt(r.firestore,Le);return Tf(qs(t),r._key).then(e=>Lf(t,r,e))}Re._jsonSchemaVersion="firestore/querySnapshot/1.0",Re._jsonSchema={type:rt("string",Re._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};class Nu extends Mf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Rt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new tt(this.firestore,null,e)}}function Gf(r){r=Mt(r,Oe);const t=Mt(r.firestore,Le),e=qs(t),n=new Nu(t);return kf(r._query),If(e,r._query).then(i=>new Re(t,n,r,i))}function $f(r,t,e){r=Mt(r,tt);const n=Mt(r.firestore,Le),i=bu(r.converter,t);return Ws(n,[wu(Tr(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,Vt.none())])}function Kf(r,t,e,...n){r=Mt(r,tt);const i=Mt(r.firestore,Le),o=Tr(i);let a;return a=typeof(t=Ut(t))=="string"||t instanceof Er?Cf(o,"updateDoc",r._key,t,e,n):Sf(o,"updateDoc",r._key,t),Ws(i,[a.toMutation(r._key,Vt.exists(!0))])}function Qf(r,t){const e=Mt(r.firestore,Le),n=Af(r),i=bu(r.converter,t);return Ws(e,[wu(Tr(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Vt.exists(!1))]).then(()=>n)}function Ws(r,t){return function(n,i){const o=new Ft;return n.asyncQueue.enqueueAndForget(async()=>uf(await Ef(n),i,o)),o.promise}(qs(r),t)}function Lf(r,t,e){const n=e.docs.get(t._key),i=new Nu(r);return new fe(r,i,t._key,n,new rn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Ne=i})(Rl),fl(new dl("firestore",(n,{instanceIdentifier:i,options:o})=>{const a=n.getProvider("app").getImmediate(),c=new Le(new Sl(n.getProvider("auth-internal")),new bl(a,n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hn(d.options.projectId,m)}(a,i),a);return o={useFetchStreams:e,...o},c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Xi(Ji,Zi,t),Xi(Ji,Zi,"esm2020")})();export{zf as a,Qf as b,qf as c,Af as d,Gf as e,jf as g,Bf as q,$f as s,Kf as u};
