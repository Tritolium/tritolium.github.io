"use strict";(self.webpackChunkspz_planner=self.webpackChunkspz_planner||[]).push([[533],{5533:(e,n,t)=>{t.r(n),t.d(n,{default:()=>G});var r,l,i=t(5043),a=t(262),s=t(3163),d=t(7528),c=t(403);const o=c.Ay.div(r||(r=(0,d.A)(["\n    display: flex;\n    justify-content: center;\n"]))),h=c.Ay.table(l||(l=(0,d.A)(["\n    td {\n        padding: 5px;\n    }\n"])));var u=t(579);const m=()=>{const[e,n]=(0,i.useState)(new Array(0));(0,i.useEffect)((()=>{(async()=>{let e=await(0,s.$K)("current");void 0!==e&&n(e)})()}),[]);const t=e=>(e=e.split("-"),"".concat(e[2],".").concat(e[1],".").concat(e[0]));return(0,u.jsxs)(h,{children:[e.length>0?(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"von"}),(0,u.jsx)("th",{children:"bis"}),(0,u.jsx)("th",{children:"Bemerkung"})]})}):(0,u.jsx)("thead",{children:(0,u.jsx)("tr",{children:(0,u.jsx)("th",{children:"Keine Abwesenheiten eingetragen"})})}),(0,u.jsx)("tbody",{children:e.map((e=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:t(e.From)}),(0,u.jsx)("td",{children:t(e.Until)}),(0,u.jsx)("td",{children:e.Info})]},e.Absence_ID)))})]})},x=()=>(0,u.jsx)(o,{children:(0,u.jsx)(m,{})});var b,p;const j=c.Ay.div(b||(b=(0,d.A)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),f=c.Ay.div(p||(p=(0,d.A)(["\n    width: 100%;\n"])));var y,A,v,w=t(5709),g=t(6242);const k=c.Ay.div(y||(y=(0,d.A)(["\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    width: 100%;\n"]))),_=c.Ay.form(A||(A=(0,d.A)(["\n    display: block;\n    width: 100%;\n    padding: 5px;\n"]))),I=c.Ay.div(v||(v=(0,d.A)(["\n    display: block;\n    padding: 2px;\n    label {\n        float: left;\n        width: 25%;\n        min-width: 100px;\n    }\n"]))),D=e=>{let{absences:n,onSelect:t}=e;return(0,u.jsx)(w.A,{children:n.map((e=>(0,u.jsx)(E,{onSelect:t,absence:e},e.Absence_ID)))})},E=e=>{let{absence:n,onSelect:t}=e;const r=(0,i.useCallback)((()=>{t(n.Absence_ID)}),[t,n.Absence_ID]),l=e=>(e=e.split("-"),"".concat(e[2],".").concat(e[1],".").concat(e[0]));return(0,u.jsxs)(g.A,{onClick:r,children:[l(n.From)," - ",l(n.Until)]})},F=e=>{let{selected:n,reload:t}=e;const r=(new Date).toISOString().split("T")[0],[l,d]=(0,i.useState)({Absence_ID:-1,From:r,Until:r,Info:""});(0,i.useEffect)((()=>{(async()=>{let e=await(0,s.SX)(n);void 0!==e&&d(e)})()}),[n]),(0,i.useEffect)((()=>{document.getElementById("absenceeditor").reset()}),[l]);const c=e=>{e.preventDefault(),d({Absence_ID:-1,From:r,Until:r,Info:""})};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(_,{id:"absenceeditor",children:[(0,u.jsxs)(I,{children:[(0,u.jsx)("label",{htmlFor:"from",children:"Von:"}),(0,u.jsx)("input",{type:"date",name:"from",id:"from",defaultValue:l.From})]}),(0,u.jsxs)(I,{children:[(0,u.jsx)("label",{htmlFor:"until",children:"Bis:"}),(0,u.jsx)("input",{type:"date",name:"until",id:"until",defaultValue:l.Until})]}),(0,u.jsxs)(I,{children:[(0,u.jsx)("label",{htmlFor:"info",children:"Bemerkung:"}),(0,u.jsx)("textarea",{name:"info",id:"info",cols:"30",rows:"3",defaultValue:l.Info})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(a.default,{onClick:c,children:"Abbrechen"}),(0,u.jsx)(a.default,{onClick:async e=>{if(e.preventDefault(),l.Absence_ID<0)return void(async e=>{let n;e.preventDefault();let r=document.getElementById("from").value,l=document.getElementById("until").value,i=document.getElementById("info").value;n=""===l?r:l,await(0,s.uu)(r,n,i),t(),c(e)})(e);let n,r=document.getElementById("from").value,i=document.getElementById("until").value,a=document.getElementById("info").value;n=""===i?r:i,await(0,s.p3)(l.Absence_ID,l.Member_ID,r,n,a),t(),c(e)},children:"Speichern"}),(0,u.jsx)(a.default,{onClick:async e=>{e.preventDefault(),l.Absence_ID>0&&await(0,s.BA)(l.Absence_ID),t(),c(e)},children:"L\xf6schen"})]})]})})},B=()=>{const[e,n]=(0,i.useState)(new Array(0)),[t,r]=(0,i.useState)(-1),l=(0,i.useCallback)((async()=>{let e=await(0,s.$K)("current");n(void 0!==e?e:new Array(0))}),[]),a=(0,i.useCallback)((()=>{l()}),[l]),d=(0,i.useCallback)((e=>{r(e)}),[]);return(0,i.useEffect)((()=>{l()}),[l]),(0,u.jsxs)(k,{children:[(0,u.jsx)(D,{onSelect:d,absences:e}),(0,u.jsx)(F,{selected:t,reload:a})]})};var S,C=t(3410),L=t(6590);const U=c.Ay.div(S||(S=(0,d.A)(["\n    display: flex;\n    justify-content: center;\n    text-align: center;\n"]))),V=()=>{const[e,n]=(0,i.useState)(new Array(0)),t=(0,i.useCallback)((async()=>{let e=await(0,s.oS)("current");void 0!==e&&n(e)}),[]),r=e=>(e=e.split("-"),"".concat(e[2],".").concat(e[1],".").concat(e[0]));return(0,i.useEffect)((()=>{t()}),[t]),(0,u.jsxs)(L.Ic,{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Name"}),(0,u.jsx)("th",{children:"von"}),(0,u.jsx)("th",{children:"bis"}),(0,u.jsx)("th",{children:"Bemerkung"})]})}),(0,u.jsx)("tbody",{children:e.map((e=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e.Fullname}),(0,u.jsx)("td",{children:r(e.From)}),(0,u.jsx)("td",{children:r(e.Until)}),(0,u.jsx)("td",{children:e.Info})]},e.Fullname+e.From)))})]})},z=()=>(0,u.jsx)(U,{children:(0,u.jsx)(V,{})});var H,K=t(2930),M=t(7921);const N=c.Ay.div(H||(H=(0,d.A)(["\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    width: 100%;\n"]))),T=()=>{const[e,n]=(0,i.useState)(new Array(0)),t=(0,i.useCallback)((async()=>{let e=await(0,s.iT)();n(e)}),[]),r=e=>{e.preventDefault(),document.getElementById("absence_form").reset()};return(0,i.useEffect)((()=>{t()}),[t]),(0,u.jsx)(N,{children:(0,u.jsxs)(K.A,{id:"absence_form",children:[(0,u.jsxs)(M.A,{children:[(0,u.jsx)("label",{htmlFor:"member_select",children:"Name:"}),(0,u.jsx)("select",{id:"member_select",children:e.map((e=>(0,u.jsxs)("option",{value:e.Member_ID,children:[e.Forename," ",e.Surname]},"member_".concat(e.Member_ID))))})]}),(0,u.jsxs)(M.A,{children:[(0,u.jsx)("label",{htmlFor:"from",children:"Von:"}),(0,u.jsx)("input",{type:"date",name:"from",id:"from"})]}),(0,u.jsxs)(M.A,{children:[(0,u.jsx)("label",{htmlFor:"until",children:"Bis:"}),(0,u.jsx)("input",{type:"date",name:"until",id:"until"})]}),(0,u.jsxs)(M.A,{children:[(0,u.jsx)("label",{htmlFor:"info",children:"Bemerkung:"}),(0,u.jsx)("textarea",{name:"info",id:"info",cols:"30",rows:"3"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(a.default,{onClick:r,children:"Abbrechen"}),(0,u.jsx)(a.default,{onClick:async e=>{e.preventDefault();let n=document.getElementById("member_select"),t=n.options[n.selectedIndex].value,l=document.getElementById("from").value,i=document.getElementById("until").value,a=document.getElementById("info").value;await(0,s.sm)(t,l,i,a),r(e)},children:"Speichern"})]})]})})},$=e=>{let{view:n}=e;switch(n){default:case 0:return(0,u.jsx)(f,{children:(0,u.jsx)(x,{})});case 1:return(0,u.jsx)(f,{children:(0,u.jsx)(B,{})});case 2:return(0,u.jsx)(f,{children:(0,u.jsx)(z,{})});case 3:return(0,u.jsx)(f,{children:(0,u.jsx)(T,{})})}},G=e=>{let{auth_level:n}=e;const[t,r]=(0,i.useState)(0),l=e=>{switch(e.target.id){default:case"absence_button_0":r(0);break;case"absence_button_1":r(1);break;case"absence_button_2":r(2);break;case"absence_button_3":r(3)}};return(0,u.jsxs)(j,{children:[(0,u.jsxs)(C.A,{children:[(0,u.jsx)(a.default,{id:"absence_button_0",onClick:l,children:"\xdcbersicht"}),(0,u.jsx)(a.default,{id:"absence_button_1",onClick:l,children:"Eingabe"}),n>2?(0,u.jsx)(a.default,{id:"absence_button_2",onClick:l,children:"Gesamt\xfcbersicht"}):(0,u.jsx)(u.Fragment,{}),n>2?(0,u.jsx)(a.default,{id:"absence_button_3",onClick:l,children:"manuelle Eingabe"}):(0,u.jsx)(u.Fragment,{})]}),(0,u.jsx)($,{view:t})]})}},6590:(e,n,t)=>{t.d(n,{Ic:()=>o,Sj:()=>h,oN:()=>u,pi:()=>c});var r,l,i,a,s=t(7528),d=t(403);const c=d.Ay.div(r||(r=(0,s.A)(["\n    display: block;\n    text-align: center;\n    select {\n        padding: 5px;\n        margin: 10px;\n        border-radius: 5px;\n    }\n"]))),o=d.Ay.table(l||(l=(0,s.A)(["\n    margin: 5px;\n    border: 1px solid ",";\n    border-radius: 10px;\n    /*border-collapse: collapse;*/\n    border-spacing: 0;\n    width: auto;\n\n    display: table;\n\n    th {\n        border-bottom: 1px solid ",";\n        padding: 5px;\n    }\n\n    td {\n        border-top: 1px solid ",";\n        padding: 5px;\n        white-space: nowrap;\n    }\n\n    td:first-child {\n        white-space: normal;\n    }\n\n    img {\n        max-width: 32px;\n    }\n\n    @media (max-width: ",") {\n        font-size: 0.75em;\n    }\n"])),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.mobile})),h=(0,d.Ay)(o)(i||(i=(0,s.A)(["\n    display: table;\n    @media (max-width: ",") {\n            display: none;\n    }\n"])),(e=>{let{theme:n}=e;return n.mobile})),u=(0,d.Ay)(o)(a||(a=(0,s.A)(["\n    \n    display: none;\n    font-size: 0.75em;\n\n    @media (max-width: ",") {\n            display: table;\n    }\n"])),(e=>{let{theme:n}=e;return n.mobile}))},2930:(e,n,t)=>{t.d(n,{A:()=>i});var r,l=t(7528);const i=t(403).Ay.form(r||(r=(0,l.A)(["\n    display: block;\n    width: 100%;\n    padding: 5px;\n"])))},7921:(e,n,t)=>{t.d(n,{A:()=>i});var r,l=t(7528);const i=t(403).Ay.div(r||(r=(0,l.A)(["\n    display: block;\n    padding: 2px;\n    label {\n        float: left;\n        width: 25%;\n        min-width: 100px;\n    }\n"])))},5709:(e,n,t)=>{t.d(n,{A:()=>i});var r,l=t(7528);const i=t(403).Ay.nav(r||(r=(0,l.A)(["\n    margin: 2px;\n    padding: 2px;\n    white-space: nowrap;\n    border: 1px solid ",";\n    border-radius: 10px;\n    overflow-y: scroll;\n    max-height: 75vh;\n    min-width: fit-content;\n    width: auto;\n    max-width: fit-content;\n\n\n    @media (max-width: ",") {\n        white-space: normal;\n    }\n\n    ::-webkit-scrollbar {\n        width: 5px;\n    }\n\n    ::-webkit-scrollbar-track {\n        background: none;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background: ",";\n        border-radius: 5px;\n    }\n\n    ::-webkit-scrollbar-thumb:hover {\n        background: ",";\n    }\n"])),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.mobile}),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.primaryHover}))},6242:(e,n,t)=>{t.d(n,{A:()=>i});var r,l=t(7528);const i=t(403).Ay.div(r||(r=(0,l.A)(["\n    user-select: none;\n    cursor: pointer;\n    padding: 2px;\n    border-radius: 5px;\n\n    &:hover {\n        background: ",";\n    }\n"])),(e=>{let{theme:n}=e;return n.primaryHover}))},3410:(e,n,t)=>{t.d(n,{A:()=>i});var r,l=t(7528);const i=t(403).Ay.nav(r||(r=(0,l.A)(["\n    display: flex;\n    background-color: ",";\n    position: relative;\n    padding: 5px;\n    margin: 5px;\n    border-radius: 20px;\n\n    flex-wrap: wrap;\n    justify-content: center;\n"])),(e=>{let{theme:n}=e;return n.primaryHover}))}}]);
//# sourceMappingURL=533.0fe039cf.chunk.js.map