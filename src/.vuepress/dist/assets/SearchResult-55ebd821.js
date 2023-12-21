import{u as I,f as ee,m as B,n as M,X as ae,p as le,t as se,g as x,h as D,q as te,w as X,k as l,x as _,y as F,T as U,z as re,A as ue,B as ne,C as ie,R as oe,O as ce,s as ve,j as pe,D as he,E as ye,F as de,G as me,H as b,J as fe}from"./app-8ce60001.js";const ge="SEARCH_PRO_QUERY_HISTORY",y=I(ge,[]),He=()=>{const{queryHistoryCount:r}=b,i=r>0;return{enabled:i,queryHistory:y,addQueryHistory:t=>{i&&(y.value.length<r?y.value=Array.from(new Set([t,...y.value])):y.value=Array.from(new Set([t,...y.value.slice(0,r-1)])))},removeQueryHistory:t=>{y.value=[...y.value.slice(0,t),...y.value.slice(t+1)]}}},Re="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:E}=b,d=I(Re,[]),Qe=()=>{const r=B(),i=E>0,t=s=>r.resolve({name:s.key,..."anchor"in s?{hash:`#${s.anchor}`}:{}}).fullPath;return{enabled:i,resultHistory:d,addResultHistory:s=>{if(i){const u={link:t(s),display:s.display};"header"in s&&(u.header=s.header),d.value.length<E?d.value=[u,...d.value]:d.value=[u,...d.value.slice(0,E-1)]}},removeResultHistory:s=>{d.value=[...d.value.slice(0,s),...d.value.slice(s+1)]}}},ke=r=>{const i=oe(),t=M(),{search:s,terminate:u}=ce(),f=x(!1),g=ve([]);return pe(()=>{const m=()=>{g.value=[],f.value=!1},w=fe(H=>{f.value=!0,H?s({type:"search",query:H,locale:t.value,options:i}).then(h=>{g.value=h,f.value=!1}).catch(h=>{console.error(h),m()}):m()},b.searchDelay);X([r,t],()=>w(r.value),{immediate:!0}),he(()=>{u()})}),{searching:f,results:g}};var we=ee({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(r,{emit:i}){const t=B(),s=M(),u=ae(le),{enabled:f,addQueryHistory:g,queryHistory:m,removeQueryHistory:w}=He(),{enabled:H,resultHistory:h,addResultHistory:O,removeResultHistory:Y}=Qe(),P=f||H,S=se(r,"query"),{results:R,searching:j}=ke(S),o=x({isQuery:!0,index:0}),p=x(0),c=x(0),T=D(()=>P&&(m.value.length>0||h.value.length>0)),C=D(()=>R.value.length>0),q=D(()=>R.value[p.value]||null),$=e=>t.resolve({name:e.key,..."anchor"in e?{hash:`#${e.anchor}`}:{}}).fullPath,z=()=>{const{isQuery:e,index:a}=o.value;a===0?o.value={isQuery:!e,index:e?h.value.length-1:m.value.length-1}:o.value={isQuery:e,index:a-1}},G=()=>{const{isQuery:e,index:a}=o.value;a===(e?m.value.length-1:h.value.length-1)?o.value={isQuery:!e,index:0}:o.value={isQuery:e,index:a+1}},J=()=>{p.value=p.value>0?p.value-1:R.value.length-1,c.value=q.value.contents.length-1},V=()=>{p.value=p.value<R.value.length-1?p.value+1:0,c.value=0},K=()=>{c.value<q.value.contents.length-1?c.value=c.value+1:V()},N=()=>{c.value>0?c.value=c.value-1:J()},A=e=>e.map(a=>ye(a)?a:l(a[0],a[1])),W=e=>{if(e.type==="customField"){const a=de[e.index]||"$content",[n,k=""]=me(a)?a[s.value].split("$content"):a.split("$content");return e.display.map(v=>l("div",A([n,...v,k])))}return e.display.map(a=>l("div",A(a)))},Q=()=>{p.value=0,c.value=0,i("updateQuery",""),i("close")};return te("keydown",e=>{if(r.isFocusing){if(C.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const a=q.value.contents[c.value],n=$(a);g(r.query),O(a),t.push(n),Q()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:a}=o.value;o.value.isQuery?(i("updateQuery",m.value[a]),e.preventDefault()):(t.push(h.value[a].link),Q())}}}}),X([p,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:S.value?!C.value:!T.value}],id:"search-pro-results"},S.value===""?P?T.value?[f?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.history),m.value.map((e,a)=>l("div",{class:["search-pro-result-item",{active:o.value.isQuery&&o.value.index===a}],onClick:()=>{i("updateQuery",e)}},[l(_,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:n=>{n.preventDefault(),n.stopPropagation(),w(a)}})]))])):null,H?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.history),h.value.map((e,a)=>l(U,{to:e.link,class:["search-pro-result-item",{active:!o.value.isQuery&&o.value.index===a}],onClick:()=>{Q()}},()=>[l(_,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(n=>A(n)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:n=>{n.preventDefault(),n.stopPropagation(),Y(a)}})]))])):null]:u.value.emptyHistory:u.value.emptyResult:j.value?l(re,{hint:u.value.searching}):C.value?l("ul",{class:"search-pro-result-list"},R.value.map(({title:e,contents:a},n)=>{const k=p.value===n;return l("li",{class:["search-pro-result-list-item",{active:k}]},[l("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),a.map((v,Z)=>{const L=k&&c.value===Z;return l(U,{to:$(v),class:["search-pro-result-item",{active:L,"aria-selected":L}],onClick:()=>{g(r.query),O(v),Q()}},()=>[v.type==="text"?null:l(v.type==="title"?ue:v.type==="heading"?ne:ie,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[v.type==="text"&&v.header?l("div",{class:"content-header"},v.header):null,l("div",W(v))])])})])})):u.value.emptyResult)}});export{we as default};
