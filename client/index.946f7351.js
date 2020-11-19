import{S as e,i as t,s as n,e as a,t as r,c as s,a as l,b as c,d as i,f as o,g as h,h as u,n as f,j as m,k as d,l as g,m as p,o as $,p as v,q as E,r as w,u as T,v as D,w as b,x as I,y as S,z as H,A as L,B as M,C as y,D as R}from"./client.ed210559.js";import{c as N,h as _,L as A}from"./createOctokit.3b5730e6.js";function U(e,t,n){const a=e.slice();return a[5]=t[n],a}function k(e){let t,n,m,d=w.i18n.allSystemsOperational+"";return{c(){t=a("article"),n=r("✅   "),m=r(d),this.h()},l(e){t=s(e,"ARTICLE",{class:!0});var a=l(t);n=c(a,"✅   "),m=c(a,d),a.forEach(i),this.h()},h(){o(t,"class","good svelte-lf2whe")},m(e,a){h(e,t,a),u(t,n),u(t,m)},p:f,d(e){e&&i(t)}}}function O(e){let t,n,o,g,p=w.i18n.activeIncidents+"",$=e[1],v=[];for(let t=0;t<$.length;t+=1)v[t]=C(U(e,$,t));return{c(){t=a("h2"),n=r(p),o=m();for(let e=0;e<v.length;e+=1)v[e].c();g=D()},l(e){t=s(e,"H2",{});var a=l(t);n=c(a,p),a.forEach(i),o=d(e);for(let t=0;t<v.length;t+=1)v[t].l(e);g=D()},m(e,a){h(e,t,a),u(t,n),h(e,o,a);for(let t=0;t<v.length;t+=1)v[t].m(e,a);h(e,g,a)},p(e,t){if(2&t){let n;for($=e[1],n=0;n<$.length;n+=1){const a=U(e,$,n);v[n]?v[n].p(a,t):(v[n]=C(a),v[n].c(),v[n].m(g.parentNode,g))}for(;n<v.length;n+=1)v[n].d(1);v.length=$.length}},i:f,o:f,d(e){e&&i(t),e&&i(o),b(v,e),e&&i(g)}}}function V(e){let t,n;return t=new A({}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,a){H(t,e,a),n=!0},p:f,i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function C(e){let t,n,f,g,p,$,v,E,D,b,I,S,H,L,M=e[5].title.replace("🛑","").replace("⚠️","").trim()+"",y=w.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(e[5].created_at).toLocaleString()).replace(/\$POSTS/g,e[5].comments)+"",R=w.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"";return{c(){t=a("article"),n=a("div"),f=a("div"),g=a("h4"),p=r(M),$=m(),v=a("div"),E=r(y),D=m(),b=a("div"),I=a("a"),S=r(R),L=m(),this.h()},l(e){t=s(e,"ARTICLE",{class:!0});var a=l(t);n=s(a,"DIV",{class:!0});var r=l(n);f=s(r,"DIV",{});var o=l(f);g=s(o,"H4",{});var h=l(g);p=c(h,M),h.forEach(i),$=d(o),v=s(o,"DIV",{});var u=l(v);E=c(u,y),u.forEach(i),o.forEach(i),D=d(r),b=s(r,"DIV",{class:!0});var m=l(b);I=s(m,"A",{href:!0});var w=l(I);S=c(w,R),w.forEach(i),m.forEach(i),r.forEach(i),L=d(a),a.forEach(i),this.h()},h(){o(I,"href",H=`incident/${e[5].number}`),o(b,"class","f r"),o(n,"class","f"),o(t,"class","down link svelte-lf2whe")},m(e,a){h(e,t,a),u(t,n),u(n,f),u(f,g),u(g,p),u(f,$),u(f,v),u(v,E),u(n,D),u(n,b),u(b,I),u(I,S),u(t,L)},p(e,t){2&t&&M!==(M=e[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&T(p,M),2&t&&y!==(y=w.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(e[5].created_at).toLocaleString()).replace(/\$POSTS/g,e[5].comments)+"")&&T(E,y),2&t&&R!==(R=w.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"")&&T(S,R),2&t&&H!==(H=`incident/${e[5].number}`)&&o(I,"href",H)},d(e){e&&i(t)}}}function x(e){let t,n,r,c,u,f=!e[1].length&&!e[0]&&k();const E=[V,O],w=[];function T(e,t){return e[0]?0:e[1].length?1:-1}return~(r=T(e))&&(c=w[r]=E[r](e)),{c(){f&&f.c(),t=m(),n=a("section"),c&&c.c(),this.h()},l(e){f&&f.l(e),t=d(e),n=s(e,"SECTION",{class:!0});var a=l(n);c&&c.l(a),a.forEach(i),this.h()},h(){o(n,"class","svelte-lf2whe")},m(e,a){f&&f.m(e,a),h(e,t,a),h(e,n,a),~r&&w[r].m(n,null),u=!0},p(e,[a]){e[1].length||e[0]?f&&(f.d(1),f=null):f?f.p(e,a):(f=k(),f.c(),f.m(t.parentNode,t));let s=r;r=T(e),r===s?~r&&w[r].p(e,a):(c&&(g(),p(w[s],1,1,(()=>{w[s]=null})),$()),~r?(c=w[r],c?c.p(e,a):(c=w[r]=E[r](e),c.c()),v(c,1),c.m(n,null)):c=null)},i(e){u||(v(c),u=!0)},o(e){p(c),u=!1},d(e){f&&f.d(e),e&&i(t),e&&i(n),~r&&w[r].d()}}}function P(e,t,n){let a=!0;const r=N(),s=w.owner,l=w.repo;let c=[];return E((async()=>{try{n(1,c=(await r.issues.listForRepo({owner:s,repo:l,state:"open",filter:"all",sort:"created",direction:"desc",labels:"status"})).data),n(1,c=c.map(((e,t)=>(e.showHeading=0===t||new Date(c[t-1].created_at).toLocaleDateString()!==new Date(e.created_at).toLocaleDateString(),e))))}catch(e){_(e)}n(0,a=!1)})),[a,c]}class B extends e{constructor(e){super(),t(this,e,P,x,n,{})}}function j(e,t,n){const a=e.slice();return a[8]=t[n],a}function F(e){let t,n=e[1],a=[];for(let t=0;t<n.length;t+=1)a[t]=q(j(e,n,t));return{c(){for(let e=0;e<a.length;e+=1)a[e].c();t=D()},l(e){for(let t=0;t<a.length;t+=1)a[t].l(e);t=D()},m(e,n){for(let t=0;t<a.length;t+=1)a[t].m(e,n);h(e,t,n)},p(e,r){if(6&r){let s;for(n=e[1],s=0;s<n.length;s+=1){const l=j(e,n,s);a[s]?a[s].p(l,r):(a[s]=q(l),a[s].c(),a[s].m(t.parentNode,t))}for(;s<a.length;s+=1)a[s].d(1);a.length=n.length}},i:f,o:f,d(e){b(a,e),e&&i(t)}}}function z(e){let t,n;return t=new A({}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,a){H(t,e,a),n=!0},p:f,i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function q(e){let t,n,f,g,p,$,v,E,D,b,I,S,H=e[8].name+"",L=w.i18n.overallUptime.replace(/\$UPTIME/g,e[8].uptime)+"",y=w.i18n.averageResponseTime.replace(/\$TIME/g,e[8].time)+"";return{c(){t=a("article"),n=a("h4"),f=a("a"),g=r(H),$=m(),v=a("div"),E=m(),D=a("div"),b=m(),this.h()},l(e){t=s(e,"ARTICLE",{class:!0,style:!0});var a=l(t);n=s(a,"H4",{});var r=l(n);f=s(r,"A",{href:!0});var o=l(f);g=c(o,H),o.forEach(i),r.forEach(i),$=d(a),v=s(a,"DIV",{}),l(v).forEach(i),E=d(a),D=s(a,"DIV",{}),l(D).forEach(i),b=d(a),a.forEach(i),this.h()},h(){o(f,"href",p=`history/${e[8].slug}`),o(t,"class",I=M(`${e[8].status} link`)+" svelte-b6aso6"),o(t,"style",S=`background-image: url("${e[2]}/${e[8].slug}.png`)},m(e,a){h(e,t,a),u(t,n),u(n,f),u(f,g),u(t,$),u(t,v),v.innerHTML=L,u(t,E),u(t,D),D.innerHTML=y,u(t,b)},p(e,n){2&n&&H!==(H=e[8].name+"")&&T(g,H),2&n&&p!==(p=`history/${e[8].slug}`)&&o(f,"href",p),2&n&&L!==(L=w.i18n.overallUptime.replace(/\$UPTIME/g,e[8].uptime)+"")&&(v.innerHTML=L),2&n&&y!==(y=w.i18n.averageResponseTime.replace(/\$TIME/g,e[8].time)+"")&&(D.innerHTML=y),2&n&&I!==(I=M(`${e[8].status} link`)+" svelte-b6aso6")&&o(t,"class",I),2&n&&S!==(S=`background-image: url("${e[2]}/${e[8].slug}.png`)&&o(t,"style",S)},d(e){e&&i(t)}}}function J(e){let t,n,o,f,E,T,D,b=w.i18n.liveStatus+"";const I=[z,F],S=[];function H(e,t){return e[0]?0:e[1].length?1:-1}return~(E=H(e))&&(T=S[E]=I[E](e)),{c(){t=a("h2"),n=r(b),o=m(),f=a("section"),T&&T.c()},l(e){t=s(e,"H2",{});var a=l(t);n=c(a,b),a.forEach(i),o=d(e),f=s(e,"SECTION",{});var r=l(f);T&&T.l(r),r.forEach(i)},m(e,a){h(e,t,a),u(t,n),h(e,o,a),h(e,f,a),~E&&S[E].m(f,null),D=!0},p(e,[t]){let n=E;E=H(e),E===n?~E&&S[E].p(e,t):(T&&(g(),p(S[n],1,1,(()=>{S[n]=null})),$()),~E?(T=S[E],T?T.p(e,t):(T=S[E]=I[E](e),T.c()),v(T,1),T.m(f,null)):T=null)},i(e){D||(v(T),D=!0)},o(e){p(T),D=!1},d(e){e&&i(t),e&&i(o),e&&i(f),~E&&S[E].d()}}}function G(e,t,n){let a=!0;const r=N(),s=w.owner,l=w.repo;let{apiBaseUrl:c}=w["status-website"]||{},i=[];c||(c="https://api.github.com");const o=`${c.includes("api.github.com")?"https://raw.githubusercontent.com":c}/${s}/${l}/master/graphs`;return E((async()=>{try{n(1,i=JSON.parse(atob((await r.repos.getContent({owner:s,repo:l,path:"history/summary.json"})).data.content.replace(/\n/g,""))))}catch(e){_(e)}n(0,a=!1)})),[a,i,o]}class K extends e{constructor(e){super(),t(this,e,G,J,n,{})}}function Q(e,t,n){const a=e.slice();return a[5]=t[n],a}function W(e){let t,n,g,p,$=w.i18n.pastIncidents+"",v=e[1],E=[];for(let t=0;t<v.length;t+=1)E[t]=Z(Q(e,v,t));return{c(){t=a("h2"),n=r($),g=m();for(let e=0;e<E.length;e+=1)E[e].c();p=D(),this.h()},l(e){t=s(e,"H2",{class:!0});var a=l(t);n=c(a,$),a.forEach(i),g=d(e);for(let t=0;t<E.length;t+=1)E[t].l(e);p=D(),this.h()},h(){o(t,"class","svelte-18y4uo2")},m(e,a){h(e,t,a),u(t,n),h(e,g,a);for(let t=0;t<E.length;t+=1)E[t].m(e,a);h(e,p,a)},p(e,t){if(2&t){let n;for(v=e[1],n=0;n<v.length;n+=1){const a=Q(e,v,n);E[n]?E[n].p(a,t):(E[n]=Z(a),E[n].c(),E[n].m(p.parentNode,p))}for(;n<E.length;n+=1)E[n].d(1);E.length=v.length}},i:f,o:f,d(e){e&&i(t),e&&i(g),b(E,e),e&&i(p)}}}function X(e){let t,n;return t=new A({}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,a){H(t,e,a),n=!0},p:f,i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Y(e){let t,n,o=new Date(e[5].created_at).toLocaleDateString()+"";return{c(){t=a("h3"),n=r(o)},l(e){t=s(e,"H3",{});var a=l(t);n=c(a,o),a.forEach(i)},m(e,a){h(e,t,a),u(t,n)},p(e,t){2&t&&o!==(o=new Date(e[5].created_at).toLocaleDateString()+"")&&T(n,o)},d(e){e&&i(t)}}}function Z(e){let t,n,f,g,p,$,v,E,D,b,I,S,H,L,M=e[5].title.replace("🛑","").replace("⚠️","").trim()+"",y=w.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(e[5].closed_at).getTime()-new Date(e[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,e[5].comments)+"",R=w.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"",N=e[5].showHeading&&Y(e);return{c(){N&&N.c(),t=m(),n=a("article"),f=a("div"),g=a("div"),p=a("h4"),$=r(M),v=m(),E=a("div"),D=m(),b=a("div"),I=a("a"),S=r(R),L=m(),this.h()},l(e){N&&N.l(e),t=d(e),n=s(e,"ARTICLE",{class:!0});var a=l(n);f=s(a,"DIV",{class:!0});var r=l(f);g=s(r,"DIV",{});var o=l(g);p=s(o,"H4",{});var h=l(p);$=c(h,M),h.forEach(i),v=d(o),E=s(o,"DIV",{}),l(E).forEach(i),o.forEach(i),D=d(r),b=s(r,"DIV",{class:!0});var u=l(b);I=s(u,"A",{href:!0});var m=l(I);S=c(m,R),m.forEach(i),u.forEach(i),r.forEach(i),L=d(a),a.forEach(i),this.h()},h(){o(I,"href",H=`incident/${e[5].number}`),o(b,"class","f r"),o(f,"class","f"),o(n,"class","down link")},m(e,a){N&&N.m(e,a),h(e,t,a),h(e,n,a),u(n,f),u(f,g),u(g,p),u(p,$),u(g,v),u(g,E),E.innerHTML=y,u(f,D),u(f,b),u(b,I),u(I,S),u(n,L)},p(e,n){e[5].showHeading?N?N.p(e,n):(N=Y(e),N.c(),N.m(t.parentNode,t)):N&&(N.d(1),N=null),2&n&&M!==(M=e[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&T($,M),2&n&&y!==(y=w.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(e[5].closed_at).getTime()-new Date(e[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,e[5].comments)+"")&&(E.innerHTML=y),2&n&&R!==(R=w.i18n.incidentReport.replace(/\$NUMBER/g,e[5].number)+"")&&T(S,R),2&n&&H!==(H=`incident/${e[5].number}`)&&o(I,"href",H)},d(e){N&&N.d(e),e&&i(t),e&&i(n)}}}function ee(e){let t,n,r,c;const o=[X,W],u=[];function f(e,t){return e[0]?0:e[1].length?1:-1}return~(n=f(e))&&(r=u[n]=o[n](e)),{c(){t=a("section"),r&&r.c()},l(e){t=s(e,"SECTION",{});var n=l(t);r&&r.l(n),n.forEach(i)},m(e,a){h(e,t,a),~n&&u[n].m(t,null),c=!0},p(e,[a]){let s=n;n=f(e),n===s?~n&&u[n].p(e,a):(r&&(g(),p(u[s],1,1,(()=>{u[s]=null})),$()),~n?(r=u[n],r?r.p(e,a):(r=u[n]=o[n](e),r.c()),v(r,1),r.m(t,null)):r=null)},i(e){c||(v(r),c=!0)},o(e){p(r),c=!1},d(e){e&&i(t),~n&&u[n].d()}}}function te(e,t,n){let a=!0;const r=N(),s=w.owner,l=w.repo;let c=[];return E((async()=>{try{n(1,c=(await r.issues.listForRepo({owner:s,repo:l,state:"closed",filter:"all",sort:"created",direction:"desc",labels:"status"})).data)}catch(e){_(e)}n(1,c=c.map(((e,t)=>(e.showHeading=0===t||new Date(c[t-1].created_at).toLocaleDateString()!==new Date(e.created_at).toLocaleDateString(),e)))),n(0,a=!1)})),[a,c]}class ne extends e{constructor(e){super(),t(this,e,te,ee,n,{})}}function ae(e){let t,n=R(w["status-website"].introTitle)+"";return{c(){t=a("h1")},l(e){t=s(e,"H1",{}),l(t).forEach(i)},m(e,a){h(e,t,a),t.innerHTML=n},p:f,d(e){e&&i(t)}}}function re(e){let t,n=R(w["status-website"].introMessage)+"";return{c(){t=a("p"),this.h()},l(e){t=s(e,"P",{class:!0}),l(t).forEach(i),this.h()},h(){o(t,"class","lead svelte-ngkazm")},m(e,a){h(e,t,a),t.innerHTML=n},p:f,d(e){e&&i(t)}}}function se(e){let t,n,r,c,u,f,g,$,E,T;document.title=t=e[0];let b=w["status-website"]&&function(e){let t,n,a=w["status-website"].introTitle&&ae(),r=w["status-website"].introMessage&&re();return{c(){a&&a.c(),t=m(),r&&r.c(),n=D()},l(e){a&&a.l(e),t=d(e),r&&r.l(e),n=D()},m(e,s){a&&a.m(e,s),h(e,t,s),r&&r.m(e,s),h(e,n,s)},p(e,t){w["status-website"].introTitle&&a.p(e,t),w["status-website"].introMessage&&r.p(e,t)},d(e){a&&a.d(e),e&&i(t),r&&r.d(e),e&&i(n)}}}();return u=new B({}),g=new K({}),E=new ne({}),{c(){n=m(),r=a("header"),b&&b.c(),c=m(),I(u.$$.fragment),f=m(),I(g.$$.fragment),$=m(),I(E.$$.fragment),this.h()},l(e){y('[data-svelte="svelte-1258swp"]',document.head).forEach(i),n=d(e),r=s(e,"HEADER",{class:!0});var t=l(r);b&&b.l(t),t.forEach(i),c=d(e),S(u.$$.fragment,e),f=d(e),S(g.$$.fragment,e),$=d(e),S(E.$$.fragment,e),this.h()},h(){o(r,"class","svelte-ngkazm")},m(e,t){h(e,n,t),h(e,r,t),b&&b.m(r,null),h(e,c,t),H(u,e,t),h(e,f,t),H(g,e,t),h(e,$,t),H(E,e,t),T=!0},p(e,[n]){(!T||1&n)&&t!==(t=e[0])&&(document.title=t),w["status-website"]&&b.p(e,n)},i(e){T||(v(u.$$.fragment,e),v(g.$$.fragment,e),v(E.$$.fragment,e),T=!0)},o(e){p(u.$$.fragment,e),p(g.$$.fragment,e),p(E.$$.fragment,e),T=!1},d(e){e&&i(n),e&&i(r),b&&b.d(),e&&i(c),L(u,e),e&&i(f),L(g,e),e&&i($),L(E,e)}}}function le(e,t,n){let a="Status";try{a=w["status-website"].name}catch(e){}return[a]}export default class extends e{constructor(e){super(),t(this,e,le,se,n,{})}}
