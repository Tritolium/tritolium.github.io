"use strict";(self.webpackChunkspz_planner=self.webpackChunkspz_planner||[]).push([[880],{5396:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(579);const s=e=>{switch(e){default:return"";case 0:return"Sonntag";case 1:return"Montag";case 2:return"Dienstag";case 3:return"Mittwoch";case 4:return"Donnerstag";case 5:return"Freitag";case 6:return"Samstag"}},a=e=>{switch(e){default:return"";case 0:return"Januar";case 1:return"Februar";case 2:return"M\xe4rz";case 3:return"April";case 4:return"Mai";case 5:return"Juni";case 6:return"Juli";case 7:return"August";case 8:return"September";case 9:return"Oktober";case 10:return"November";case 11:return"Dezember"}},l=e=>{let{dateprops:n}=e;const t=new Date(n.Date),l=s(t.getDay()),i=t.getDate(),d=t.getMonth(),c=t.getFullYear();return(0,r.jsxs)("div",{children:[n.Type," ",n.Location,(0,r.jsx)("br",{}),i,". ",a(d)," ",c,(0,r.jsx)("br",{}),l]})}},9880:(e,n,t)=>{t.r(n),t.d(n,{Zusage:()=>f,default:()=>T});var r,s,a,l,i=t(5043),d=t(3163),c=t(5396),h=t(7528),o=t(197);const u=o.Ay.div(r||(r=(0,h.A)(["\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    margin: auto;\n    align-items: center;\n\n    select {\n        width: fit-content;\n    }\n"]))),p=o.Ay.div(s||(s=(0,h.A)(["\n    display: grid;\n    border-bottom: 1px solid ",";\n\n    .Date {\n        grid-row: 1;\n    }\n\n    .NameTag {\n        grid-row: 1;\n        font-weight: bold;\n        padding: 2px;\n        cursor: pointer;\n    }\n\n    .NameTagActive {\n        grid-row: 1;\n        font-weight: bold;\n        padding: 2px;\n        cursor: pointer;\n        background-color: ",";\n        color: ",";\n        border-radius: 5px;\n        border: 1px solid ",";\n        cursor: pointer;\n    }\n\n    .DateTag {\n        text-align: center;\n        border-left: 1px solid ",";\n        border-top: 1px solid ",";\n    }\n\n    .AttendenceTag {\n        position: relative;\n        min-width: 32px;\n        min-height: 32px;\n        padding: 5px;\n\n        border-left: 1px solid ",";\n        border-top: 1px solid ",";\n\n        :nth-child(1) {\n            z-index: 3;\n        }\n    }\n\n    .Last {\n        border-right: 1px solid ",";\n    }\n\n    .IconWrapper {\n        width: 32px;\n        height: 32px;\n        position: absolute;\n\n        left: 50%;\n        top: 50%;\n\n        transform: translateX(-50%) translateY(-50%);\n    }\n\n    .PlusOneIcon {\n        width: 18px;\n    }\n\n    @media (max-width: ",") {\n        display: none;\n    }\n"])),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.primaryDark}),(e=>{let{theme:n}=e;return n.primaryDark}),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.mobile})),m=o.Ay.table(a||(a=(0,h.A)(["\n    border-collapse: collapse;\n    position: relative;\n    margin: 0 2px 0 2px;\n\n    tr {\n        max-height: 100px;\n    }\n\n    td {\n        text-align: center;\n        border: 1px solid ",";\n\n        > img {\n            min-width: 15px;\n            width: 100%;\n            max-width: 30px;\n        }\n    }\n\n    @media (max-width: ",") {\n        thead, td {\n            display: none;\n        }\n    }\n"])),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.mobile})),x=o.Ay.div(l||(l=(0,h.A)(["\n    @media (min-width: ",") {\n        div {\n            display: none;\n        }\n    }\n"])),(e=>{let{theme:n}=e;return n.mobile}));var g=t(7658),j=t(6058),b=t(579);const y=e=>{let{event:n,theme:t}=e;g.t1.register(g.PP,g.kc,g.E8,g.hE,g.m_,g.s$);const r={labels:[""],datasets:[{data:[n.Consent],backgroundColor:t.greenRGB},{data:[n.Missing],backgroundColor:t.blueRGB},{data:[n.Maybe],backgroundColor:t.yellowRGB},{data:[n.Refusal],backgroundColor:t.redRGB}]};return(0,b.jsxs)(x,{children:[(0,b.jsx)(c.A,{dateprops:n}),(0,b.jsx)(j.yP,{height:"60px",options:{indexAxis:"y",plugins:{title:{display:!1},legend:{display:!1}},responsive:!1,scales:{x:{stacked:!0,display:!1},y:{stacked:!0}}},data:r})]})};var A=t(4294),v=t(5394);const w=e=>{let{attendences:n,theme:t}=e;return(0,b.jsxs)(p,{children:[(0,b.jsx)("span",{className:"Date",children:"Termin:"}),n[0].Attendences.map((e=>(0,b.jsx)(k,{Fullname:e.Fullname},e.Fullname))),n.map((e=>(0,b.jsxs)(i.Fragment,{children:[(0,b.jsx)("span",{className:"DateTag",children:(0,b.jsx)(c.A,{dateprops:e})},e.Event_ID),e.Attendences.map(((n,r)=>{const s=r===e.Attendences.length-1?"AttendenceTag Last":"AttendenceTag";return(0,b.jsx)("span",{className:s,children:(0,b.jsx)(f,{attendence:n.Attendence,plusone:n.PlusOne,theme:t})},n.Fullname+e.Event_ID)}))]},"row_".concat(e.Event_ID))))]})},k=e=>{let{Fullname:n}=e;const[t,r]=(0,i.useState)(!1),s=n.split(" ")[0].slice(0,2)+n.split(" ")[1][0];return(0,b.jsx)("span",{className:t?"NameTagActive":"NameTag",onClick:()=>{r(!t)},children:t?n:s})},f=e=>{let{attendence:n,plusone:t,theme:r}=e;if(1===n&&1===t)return(0,b.jsx)(A.j_,{theme:r,className:"PlusOneIcon"});switch(n){default:case-1:return(0,b.jsx)(A.hA,{theme:r});case 0:return(0,b.jsx)(A.hf,{theme:r});case 1:return(0,b.jsx)(A.Jl,{theme:r});case 2:return(0,b.jsx)(A.Fc,{theme:r})}},D=e=>{let{evaluation:n,theme:t}=e;return(0,b.jsxs)(m,{children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"Termin"}),(0,b.jsx)("th",{colSpan:2,children:"Zu."}),(0,b.jsx)("th",{children:"Ab."}),(0,b.jsx)("th",{children:"Aus."}),(0,b.jsx)("th",{children:"Vllt."}),(0,b.jsx)("th",{children:"M"}),(0,b.jsx)("th",{children:"S"}),(0,b.jsx)("th",{children:"A"}),(0,b.jsx)("th",{children:"D"}),(0,b.jsx)("th",{children:"T"}),(0,b.jsx)("th",{children:"L"}),(0,b.jsx)("th",{children:"Tr"}),(0,b.jsx)("th",{children:"B"}),(0,b.jsx)("th",{children:"P"})]})}),(0,b.jsx)("tbody",{children:n.map((e=>(0,b.jsx)(I,{event:e,theme:t},"eval_".concat(e.Event_ID))))})]})},I=e=>{let{event:n,theme:t}=e;return(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:(0,b.jsx)(c.A,{dateprops:n})}),(0,b.jsx)("td",{colSpan:n.PlusOne?1:2,children:n.Consent}),n.PlusOne?(0,b.jsxs)("td",{children:["+",n.PlusOne]}):(0,b.jsx)(b.Fragment,{}),(0,b.jsx)("td",{children:n.Refusal}),(0,b.jsx)("td",{children:n.Missing}),(0,b.jsx)("td",{children:n.Maybe}),(0,b.jsx)("td",{children:n.Instruments.Major}),(0,b.jsx)("td",{children:n.Instruments.Sopran}),(0,b.jsx)("td",{children:n.Instruments.Diskant}),(0,b.jsx)("td",{children:n.Instruments.Alt}),(0,b.jsx)("td",{children:n.Instruments.Tenor}),(0,b.jsx)("td",{children:n.Instruments.Lyra}),(0,b.jsx)("td",{children:n.Instruments.Trommel}),(0,b.jsx)("td",{children:n.Instruments.Becken}),(0,b.jsx)("td",{children:n.Instruments.Pauke}),(0,b.jsx)(y,{event:n,theme:t})]})},T=e=>{let{theme:n}=e;const[t,r]=(0,i.useState)(new Array(0)),[s,a]=(0,i.useState)(),[l,c]=(0,i.useState)(new Array(0)),[h,o]=(0,i.useState)(new Array(0)),p=(0,i.useCallback)((async()=>{let e=await(0,d.Kp)(s);c(e)}),[s]),m=(0,i.useCallback)((async()=>{let e=await(0,d.Ms)(s);o(e)}),[s]),x=(0,i.useCallback)((e=>{a(e.target.value)}),[a]),g=(0,i.useCallback)((()=>{p(),m()}),[p,m]);return(0,i.useEffect)((()=>{(async()=>{let e=await(0,d.iJ)();r(e)})(),g()}),[g]),0===l.length?(0,b.jsx)("select",{name:"usergroup",id:"usergroup_select",onChange:x,children:t.map(((e,n)=>(0,b.jsx)("option",{value:e.Usergroup_ID,children:e.Title},n)))}):(0,b.jsxs)(u,{children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("select",{name:"usergroup",id:"usergroup_select",onChange:x,children:t.map(((e,n)=>(0,b.jsx)("option",{value:e.Usergroup_ID,children:e.Title},n)))}),(0,b.jsx)(v.UF6,{onClick:g})]}),(0,b.jsx)(w,{attendences:l,theme:n}),(0,b.jsx)(D,{evaluation:h,theme:n})]})}}}]);
//# sourceMappingURL=880.a8eb3211.chunk.js.map