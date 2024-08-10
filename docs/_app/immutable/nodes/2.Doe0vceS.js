import{s as R,e as $,t as X,a as D,c as y,b as T,d as A,g as k,f as m,p as _,i as z,h as p,T as U,j as F,n as P,U as Z,E as M,o as Y,r as j,G as ee,V as te}from"../chunks/scheduler.D1ftjoAL.js";import{S as L,i as x,b as E,d as S,m as C,a as W,t as V,e as I}from"../chunks/index.SMf7i-aU.js";import{r as J,w as re}from"../chunks/index.C4JHBXBJ.js";const B=re(!1),K=J({x:0,y:0},function(e){function t(n){e({x:n.clientX,y:n.clientY})}return document.body.addEventListener("mousemove",t),function(){document.body.removeEventListener("mousemove",t)}}),Q=J(!1,function(e){function t(r){e(!0)}function n(r){e(!1)}return document.body.addEventListener("mouseup",t),document.body.addEventListener("mousedown",n),function(){document.body.removeEventListener("mouseup",t),document.body.removeEventListener("mousedown",n)}});function ne(i){let e,t,n,r,s,a,u,c;return{c(){e=$("button"),t=X(i[0]),n=D(),r=$("span"),s=X(i[1]),this.h()},l(l){e=y(l,"BUTTON",{class:!0});var o=T(e);t=A(o,i[0]),n=k(o),r=y(o,"SPAN",{class:!0});var d=T(r);s=A(d,i[1]),d.forEach(m),o.forEach(m),this.h()},h(){_(r,"class","transition-all absolute left-12 top-1 text-xs z-10 scale-0 bg-black rounded-md group-hover:scale-100 text-nowrap p-1 px-2 no-icon cursor-default text-white"),_(e,"class",a="relative group material-symbols-outlined cursor-pointer w-[2.25rem] mx-[.375rem] hover:bg-neutral-"+(i[0]==="dock_to_right"?"600":i[2]?"800":"700")+" rounded-md")},m(l,o){z(l,e,o),p(e,t),p(e,n),p(e,r),p(r,s),u||(c=U(e,"click",i[3]),u=!0)},p(l,[o]){o&1&&F(t,l[0]),o&2&&F(s,l[1]),o&5&&a!==(a="relative group material-symbols-outlined cursor-pointer w-[2.25rem] mx-[.375rem] hover:bg-neutral-"+(l[0]==="dock_to_right"?"600":l[2]?"800":"700")+" rounded-md")&&_(e,"class",a)},i:P,o:P,d(l){l&&m(e),u=!1,c()}}}function se(i,e,t){let n=!1;B.subscribe(c=>{t(2,n=c)});const r=Z();function s(){r("click")}let{icon:a}=e,{tooltip:u}=e;return i.$$set=c=>{"icon"in c&&t(0,a=c.icon),"tooltip"in c&&t(1,u=c.tooltip)},[a,u,n,s]}class O extends L{constructor(e){super(),x(this,e,se,ne,R,{icon:0,tooltip:1})}}function oe(i){let e,t,n,r,s,a,u,c,l,o,d,w,h,g;return n=new O({props:{icon:"dock_to_right",tooltip:"Hide/Show Sidebar"}}),n.$on("click",i[1]),a=new O({props:{icon:"find_in_page",tooltip:"Files"}}),o=new O({props:{icon:"terminal",tooltip:"Open Command Palette"}}),w=new O({props:{icon:"settings",tooltip:"Settings"}}),{c(){e=$("div"),t=$("div"),E(n.$$.fragment),r=D(),s=$("div"),E(a.$$.fragment),u=D(),c=$("div"),l=D(),E(o.$$.fragment),d=D(),E(w.$$.fragment),this.h()},l(f){e=y(f,"DIV",{class:!0});var v=T(e);t=y(v,"DIV",{class:!0});var N=T(t);S(n.$$.fragment,N),N.forEach(m),r=k(v),s=y(v,"DIV",{class:!0});var b=T(s);S(a.$$.fragment,b),u=k(b),c=y(b,"DIV",{class:!0}),T(c).forEach(m),l=k(b),S(o.$$.fragment,b),d=k(b),S(w.$$.fragment,b),b.forEach(m),v.forEach(m),this.h()},h(){_(t,"class","h-12 w-full bg-neutral-700 content-center"),_(c,"class","mt-auto"),_(s,"class","flex flex-col gap-2 py-3 h-[calc(100%-3rem)]"),_(e,"class",h="h-screen min-w-12 w-12 "+(i[0]?"bg-neutral-900":"bg-neutral-800")+" border-r-2 border-neutral-700")},m(f,v){z(f,e,v),p(e,t),C(n,t,null),p(e,r),p(e,s),C(a,s,null),p(s,u),p(s,c),p(s,l),C(o,s,null),p(s,d),C(w,s,null),g=!0},p(f,[v]){(!g||v&1&&h!==(h="h-screen min-w-12 w-12 "+(f[0]?"bg-neutral-900":"bg-neutral-800")+" border-r-2 border-neutral-700"))&&_(e,"class",h)},i(f){g||(W(n.$$.fragment,f),W(a.$$.fragment,f),W(o.$$.fragment,f),W(w.$$.fragment,f),g=!0)},o(f){V(n.$$.fragment,f),V(a.$$.fragment,f),V(o.$$.fragment,f),V(w.$$.fragment,f),g=!1},d(f){f&&m(e),I(n),I(a),I(o),I(w)}}}function ie(i,e,t){let n=!1;B.subscribe(s=>{t(0,n=s)});function r(){B.update(s=>!s)}return[n,r]}class ae extends L{constructor(e){super(),x(this,e,ie,oe,R,{})}}function le(i){let e,t,n,r,s;return{c(){e=$("button"),t=X(i[0]),n=D(),r=$("span"),s=X(i[1]),this.h()},l(a){e=y(a,"BUTTON",{class:!0});var u=T(e);t=A(u,i[0]),n=k(u),r=y(u,"SPAN",{class:!0});var c=T(r);s=A(c,i[1]),c.forEach(m),u.forEach(m),this.h()},h(){_(r,"class","transition-all absolute left-[50%] -translate-x-2/4 top-10 text-xs z-10 scale-0 bg-black rounded-md group-hover:scale-100 text-nowrap p-1 px-2 no-icon cursor-default text-white"),_(e,"class","group relative material-symbols-outlined cursor-pointer h-8 w-[2.25rem] hover:bg-neutral-600 rounded-md")},m(a,u){z(a,e,u),p(e,t),p(e,n),p(e,r),p(r,s)},p(a,[u]){u&1&&F(t,a[0]),u&2&&F(s,a[1])},i:P,o:P,d(a){a&&m(e)}}}function ue(i,e,t){let{icon:n}=e,{tooltip:r}=e;return i.$$set=s=>{"icon"in s&&t(0,n=s.icon),"tooltip"in s&&t(1,r=s.tooltip)},[n,r]}class q extends L{constructor(e){super(),x(this,e,ue,le,R,{icon:0,tooltip:1})}}function ce(i){let e,t,n,r,s,a,u,c,l,o,d,w,h;return n=new q({props:{icon:"folder",tooltip:"Files"}}),s=new q({props:{icon:"search",tooltip:"Search"}}),u=new q({props:{icon:"bookmark",tooltip:"Bookmarks"}}),{c(){e=$("div"),t=$("div"),E(n.$$.fragment),r=D(),E(s.$$.fragment),a=D(),E(u.$$.fragment),c=D(),l=$("div"),this.h()},l(g){e=y(g,"DIV",{class:!0});var f=T(e);t=y(f,"DIV",{class:!0});var v=T(t);S(n.$$.fragment,v),r=k(v),S(s.$$.fragment,v),a=k(v),S(u.$$.fragment,v),v.forEach(m),c=k(f),l=y(f,"DIV",{class:!0}),T(l).forEach(m),f.forEach(m),this.h()},h(){_(t,"class","h-12 w-full bg-neutral-700 flex content-center pt-[.425rem] pl-1 gap-1"),_(l,"class","h-screen w-[3px] bg-transparent border-r-2 border-r-neutral-700 transition-colors duration-300 hover:bg-pink-500 hover:border-r-pink-500 hover:cursor-col-resize absolute right-0 top-0"),_(e,"class",o="h-screen min-w-48 bg-neutral-800 relative "+(i[1]?"hidden":"block"))},m(g,f){z(g,e,f),p(e,t),C(n,t,null),p(t,r),C(s,t,null),p(t,a),C(u,t,null),p(e,c),p(e,l),i[6](l),i[7](e),d=!0,w||(h=[U(l,"mousedown",i[4]),U(l,"mouseup",i[0])],w=!0)},p(g,[f]){(!d||f&2&&o!==(o="h-screen min-w-48 bg-neutral-800 relative "+(g[1]?"hidden":"block")))&&_(e,"class",o)},i(g){d||(W(n.$$.fragment,g),W(s.$$.fragment,g),W(u.$$.fragment,g),d=!0)},o(g){V(n.$$.fragment,g),V(s.$$.fragment,g),V(u.$$.fragment,g),d=!1},d(g){g&&m(e),I(n),I(s),I(u),i[6](null),i[7](null),w=!1,M(h)}}}function de(i,e,t){let n=!1;B.subscribe(h=>{t(1,n=h)});let r,s,a=!1,u;function c(){a=!0,s.focus(),document.body.style.cursor="col-resize",t(2,s.style.background="#ec4899",s),t(2,s.style.borderRightColor="#ec4899",s)}function l(){a=!1,document.body.style.cursor="default",s.style.removeProperty("background"),s.style.removeProperty("border-right-color")}function o(){a&&(r<=47*2?B.set(!0):r>=47*4&&(B.set(!1),document.body.style.cursor="col-resize",t(2,s.style.background="#ec4899",s),t(2,s.style.borderRightColor="#ec4899",s),t(3,u.style.width=r-47+"px",u)))}Y(()=>{K.subscribe(h=>{r=h.x,h.y,o()}),Q.subscribe(h=>{h&&l()})});function d(h){j[h?"unshift":"push"](()=>{s=h,t(2,s)})}function w(h){j[h?"unshift":"push"](()=>{u=h,t(3,u)})}return[l,n,s,u,c,o,d,w]}class fe extends L{constructor(e){super(),x(this,e,de,ce,R,{sideTabDragStop:0,sideTabDrag:5})}get sideTabDragStop(){return this.$$.ctx[0]}get sideTabDrag(){return this.$$.ctx[5]}}function H(i){let e,t,n;return{c(){e=$("div"),this.h()},l(r){e=y(r,"DIV",{class:!0}),T(e).forEach(m),this.h()},h(){_(e,"class","h-screen w-[3px] bg-transparent border-r-2 border-r-neutral-700 transition-colors duration-300 hover:bg-pink-500 hover:border-r-pink-500 hover:cursor-col-resize absolute right-0 top-0")},m(r,s){z(r,e,s),i[10](e),t||(n=[U(e,"mousedown",i[6]),U(e,"mouseup",i[2])],t=!0)},p:P,d(r){r&&m(e),i[10](null),t=!1,M(n)}}}function be(i){let e,t,n=!i[1]&&H(i);return{c(){e=$("div"),n&&n.c(),this.h()},l(r){e=y(r,"DIV",{style:!0,class:!0});var s=T(e);n&&n.l(s),s.forEach(m),this.h()},h(){_(e,"style",t="background-color: "+i[0]+"; "+(i[1]?"flex-grow: 1;":"width: "+i[3]+"px;")),_(e,"class","h-full relative min-w-48")},m(r,s){z(r,e,s),n&&n.m(e,null),i[11](e)},p(r,[s]){r[1]?n&&(n.d(1),n=null):n?n.p(r,s):(n=H(r),n.c(),n.m(e,null)),s&11&&t!==(t="background-color: "+r[0]+"; "+(r[1]?"flex-grow: 1;":"width: "+r[3]+"px;"))&&_(e,"style",t)},i:P,o:P,d(r){r&&m(e),n&&n.d(),i[11](null)}}}function me(i,e,t){let{color:n}=e,{parentWidth:r}=e,{last:s=!1}=e,a=structuredClone(r),u=0,c,l,o,d=!1,w;function h(){d=!0,document.body.style.cursor="col-resize",t(4,o.style.background="#ec4899",o),t(4,o.style.borderRightColor="#ec4899",o),l=structuredClone(c)}function g(){d=!1,document.body.style.cursor="default";try{o.style.removeProperty("background"),o.style.removeProperty("border-right-color")}catch{}}function f(){d&&(document.body.style.cursor="col-resize",t(4,o.style.background="#ec4899",o),t(4,o.style.borderRightColor="#ec4899",o),t(3,u=u+(c-l)),l=structuredClone(c))}Y(()=>{K.subscribe(b=>{c=b.x,b.y,f()}),Q.subscribe(b=>{b&&g()})});function v(b){j[b?"unshift":"push"](()=>{o=b,t(4,o)})}function N(b){j[b?"unshift":"push"](()=>{w=b,t(5,w)})}return i.$$set=b=>{"color"in b&&t(0,n=b.color),"parentWidth"in b&&t(7,r=b.parentWidth),"last"in b&&t(1,s=b.last)},i.$$.update=()=>{i.$$.dirty&648&&(r!==void 0&&a===void 0&&t(3,u=r/3),r!==void 0&&a!==void 0&&t(3,u=u*r/a),t(9,a=structuredClone(r)))},[n,s,g,u,o,w,h,r,f,a,v,N]}class G extends L{constructor(e){super(),x(this,e,me,be,R,{color:0,parentWidth:7,last:1,sideTabDragStop:2,sideTabDrag:8})}get sideTabDragStop(){return this.$$.ctx[2]}get sideTabDrag(){return this.$$.ctx[8]}}function he(i){let e,t,n,r,s,a,u,c;return t=new G({props:{color:"blue",parentWidth:i[0]}}),r=new G({props:{color:"red",parentWidth:i[0]}}),a=new G({props:{color:"green",parentWidth:i[0],last:!0}}),{c(){e=$("div"),E(t.$$.fragment),n=D(),E(r.$$.fragment),s=D(),E(a.$$.fragment),this.h()},l(l){e=y(l,"DIV",{class:!0});var o=T(e);S(t.$$.fragment,o),n=k(o),S(r.$$.fragment,o),s=k(o),S(a.$$.fragment,o),o.forEach(m),this.h()},h(){_(e,"class","h-screen grow min-w-96 flex flex-row"),ee(()=>i[1].call(e))},m(l,o){z(l,e,o),C(t,e,null),p(e,n),C(r,e,null),p(e,s),C(a,e,null),u=te(e,i[1].bind(e)),c=!0},p(l,[o]){const d={};o&1&&(d.parentWidth=l[0]),t.$set(d);const w={};o&1&&(w.parentWidth=l[0]),r.$set(w);const h={};o&1&&(h.parentWidth=l[0]),a.$set(h)},i(l){c||(W(t.$$.fragment,l),W(r.$$.fragment,l),W(a.$$.fragment,l),c=!0)},o(l){V(t.$$.fragment,l),V(r.$$.fragment,l),V(a.$$.fragment,l),c=!1},d(l){l&&m(e),I(t),I(r),I(a),u()}}}function ge(i,e,t){let n;function r(){n=this.offsetWidth,t(0,n)}return[n,r]}class pe extends L{constructor(e){super(),x(this,e,ge,he,R,{})}}function _e(i){let e,t,n,r,s,a,u,c,l;return t=new ae({}),r=new fe({}),a=new pe({}),{c(){e=$("div"),E(t.$$.fragment),n=D(),E(r.$$.fragment),s=D(),E(a.$$.fragment),u=D(),c=$("div"),this.h()},l(o){e=y(o,"DIV",{class:!0});var d=T(e);S(t.$$.fragment,d),n=k(d),S(r.$$.fragment,d),s=k(d),S(a.$$.fragment,d),d.forEach(m),u=k(o),c=y(o,"DIV",{class:!0}),T(c).forEach(m),this.h()},h(){_(e,"class","bg-neutral-900 w-screen h-screen flex"),_(c,"class","hidden hover:bg-neutral-800")},m(o,d){z(o,e,d),C(t,e,null),p(e,n),C(r,e,null),p(e,s),C(a,e,null),z(o,u,d),z(o,c,d),l=!0},p:P,i(o){l||(W(t.$$.fragment,o),W(r.$$.fragment,o),W(a.$$.fragment,o),l=!0)},o(o){V(t.$$.fragment,o),V(r.$$.fragment,o),V(a.$$.fragment,o),l=!1},d(o){o&&(m(e),m(u),m(c)),I(t),I(r),I(a)}}}class ye extends L{constructor(e){super(),x(this,e,null,_e,R,{})}}export{ye as component};
