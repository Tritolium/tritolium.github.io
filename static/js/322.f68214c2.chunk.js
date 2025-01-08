"use strict";(globalThis.webpackChunkspz_planner=globalThis.webpackChunkspz_planner||[]).push([[322],{8322:(e,l,t)=>{t.r(l),t.d(l,{default:()=>r});var n=t(5043),a=t(5464),i=t(2439),s=t(579);const o=(0,n.lazy)((()=>Promise.all([t.e(159),t.e(257)]).then(t.bind(t,6678)))),c=a.Ay.form`

    flex-direction: column;

    @media (max-width: ${e=>{let{theme:l}=e;return l.mobile}}) {
        padding-bottom: 2rem;
    }
    
    box-sizing: border-box;

    select {
        padding: 2px;
        margin: 2px;
        border-radius: 5px;
    }

    .EventFilter {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
`,r=e=>{let{theme:l}=e;const[t,a]=(0,n.useState)(new Array(0)),[r,d]=(0,n.useState)("all"),[u,h]=(0,n.useState)("pending"),p=(0,n.useCallback)((e=>{d(e.target.value)}),[d]),v=(0,n.useCallback)((e=>{h(e.target.value),console.log(e.target.value)}),[h]);return(0,n.useEffect)((()=>{(async()=>{let e=await(0,i.fN)();void 0!==e&&a(e),0===(null===e||void 0===e?void 0:e.filter((e=>-1===e.Attendence)).length)&&(h("all"),document.getElementById("eventSelect").value="all")})()}),[]),(0,s.jsxs)(c,{className:"DateInput",children:[(0,s.jsxs)("div",{className:"EventFilter",children:[(0,s.jsxs)("select",{name:"eventSelect",id:"eventSelect",title:"event select",onChange:v,children:[(0,s.jsx)("option",{value:"pending",children:"Ausstehend"}),(0,s.jsx)("option",{value:"all",children:"Alle"}),(0,s.jsx)("option",{value:"practice",children:"\xdcben/Probe"}),(0,s.jsx)("option",{value:"event",children:"Auftritt"}),(0,s.jsx)("option",{value:"other",children:"Sonstige Termine"})]}),(0,s.jsxs)("select",{name:"dateSelect",id:"dateSelect",title:"date select",onChange:p,children:[(0,s.jsx)("option",{value:"all",children:"Alle"}),(0,s.jsx)("option",{value:"one",children:"1 Woche"}),(0,s.jsx)("option",{value:"two",children:"2 Wochen"}),(0,s.jsx)("option",{value:"four",children:"4 Wochen"}),(0,s.jsx)("option",{value:"eight",children:"8 Wochen"})]})]}),(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)("div",{children:"Tabelle l\xe4dt."}),children:(0,s.jsx)(o,{attendences:t,selectedDateFilter:r,selectedEventFilter:u,theme:l})})]})}}}]);
//# sourceMappingURL=322.f68214c2.chunk.js.map