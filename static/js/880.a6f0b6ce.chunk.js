"use strict";(globalThis.webpackChunkspz_planner=globalThis.webpackChunkspz_planner||[]).push([[880],{5396:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(579);const s=e=>{switch(e){default:return"";case 0:return"Sonntag";case 1:return"Montag";case 2:return"Dienstag";case 3:return"Mittwoch";case 4:return"Donnerstag";case 5:return"Freitag";case 6:return"Samstag"}},a=e=>{switch(e){default:return"";case 0:return"Januar";case 1:return"Februar";case 2:return"M\xe4rz";case 3:return"April";case 4:return"Mai";case 5:return"Juni";case 6:return"Juli";case 7:return"August";case 8:return"September";case 9:return"Oktober";case 10:return"November";case 11:return"Dezember"}},i=e=>{let{dateprops:t}=e;const r=new Date(t.Date),i=s(r.getDay()),l=r.getDate(),d=r.getMonth(),c=r.getFullYear(),o=0===t.State?"Anfrage":"";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"event_type",children:[o," ",t.Type," ",t.Location]}),(0,n.jsxs)("div",{className:"event_date",children:[l,". ",a(d)," ",c]}),(0,n.jsx)("div",{className:"event_day",children:i})]})}},9880:(e,t,r)=>{r.r(t),r.d(t,{Zusage:()=>v,default:()=>w});var n=r(5043),s=r(2439),a=r(5396),i=r(5464);const l=i.Ay.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: auto;
    align-items: center;

    select {
        width: fit-content;
    }
`,d=i.Ay.div`
    display: grid;
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
    overflox: auto;

    .Header {
        position: sticky;
        top: 0;
        z-index: 8;
        background-color: ${e=>{let{theme:t}=e;return t.primaryDark}};
    }

    .Date {
        grid-row: 1;
        grid-column: 1;
    }

    .NameTag {
        grid-row: 1;
        font-weight: bold;
        padding: 2px;
        cursor: pointer;
        border: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
    }

    .NameTagActive {
        grid-row: 1;
        font-weight: bold;
        padding: 2px;
        cursor: pointer;
        background-color: ${e=>{let{theme:t}=e;return t.primaryLight}};
        color: ${e=>{let{theme:t}=e;return t.primaryDark}};
        border-radius: 5px;
        border: 1px solid ${e=>{let{theme:t}=e;return t.primaryDark}};
        cursor: pointer;
    }

    .DateTag {
        grid-column: 1;
        text-align: center;
        border-left: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
        border-top: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
        border-right: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
        position: sticky;
        left: 0;
        z-index: 5;
        background-color: ${e=>{let{theme:t}=e;return t.primaryDark}};
    }

    .AttendenceTag {
        position: relative;
        min-width: 32px;
        min-height: 32px;
        padding: 5px;

        border-left: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
        border-top: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};

        :nth-child(1) {
            z-index: 3;
        }
    }

    .Last {
        border-right: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
    }

    .IconWrapper {
        width: 32px;
        height: 32px;
        position: absolute;

        left: 50%;
        top: 50%;

        transform: translateX(-50%) translateY(-50%);
    }

    .PlusOneIcon {
        width: 18px;
    }

    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        display: none;
    }
`,c=i.Ay.table`
    border-collapse: collapse;
    position: relative;
    margin: 0 2px 0 2px;

    tr {
        max-height: 100px;
    }

    td {
        text-align: center;
        border: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};

        > img {
            min-width: 15px;
            width: 100%;
            max-width: 30px;
        }
    }

    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        thead, td {
            display: none;
        }
    }
`,o=i.Ay.div`
    @media (min-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        div {
            display: none;
        }
    }
`;var h=r(461),u=r(6058),m=r(579);const p=e=>{let{event:t,theme:r}=e;h.t1.register(h.PP,h.kc,h.E8,h.hE,h.m_,h.s$);const n={labels:[""],datasets:[{data:[t.Consent],backgroundColor:r.greenRGB},{data:[t.ProbAttending],backgroundColor:r.lightgreenRGB},{data:[t.Maybe],backgroundColor:r.yellowRGB},{data:[t.ProbMissing],backgroundColor:r.lightredRGB},{data:[t.Refusal],backgroundColor:r.redRGB},{data:[t.ProbSignout],backgroundColor:r.darkredRGB}]};return(0,m.jsxs)(o,{children:[(0,m.jsx)(a.A,{dateprops:t}),(0,m.jsx)(u.yP,{height:"60px",options:{indexAxis:"y",plugins:{title:{display:!1},legend:{display:!1}},responsive:!1,scales:{x:{stacked:!0,display:!1},y:{stacked:!0}}},data:n})]})};var x=r(4294),g=r(5394);const j=e=>{let{attendences:t,theme:r}=e;return(0,m.jsxs)(d,{children:[(0,m.jsx)("span",{className:"Date Header",children:"Termin:"}),t[0].Attendences.map((e=>(0,m.jsx)(b,{Fullname:e.Fullname},e.Fullname))),t.map((e=>(0,m.jsxs)(n.Fragment,{children:[(0,m.jsx)("span",{className:"DateTag",children:(0,m.jsx)(a.A,{dateprops:e})},e.Event_ID),e.Attendences.map(((t,n)=>{const s=n===e.Attendences.length-1?"AttendenceTag Last":"AttendenceTag";return(0,m.jsx)("span",{className:s,children:(0,m.jsx)(v,{attendence:t.Attendence,plusone:t.PlusOne,prediction:t.Prediction,theme:r})},t.Fullname+e.Event_ID)}))]},`row_${e.Event_ID}`)))]})},b=e=>{let{Fullname:t}=e;const[r,s]=(0,n.useState)(!1),a=t.split(" ")[0].slice(0,2)+t.split(" ")[1][0];return(0,m.jsx)("span",{className:r?"NameTagActive Header":"NameTag Header",onClick:()=>{s(!r)},children:r?t:a})};var y=r(5467);const v=e=>{let{attendence:t,plusone:r,theme:n,prediction:s}=e;if(1===t&&1===r)return(0,m.jsx)(x.j_,{theme:n,className:"PlusOneIcon"});switch(t){default:case-1:return(0,m.jsx)(x.hA,{theme:n,overlay:s});case 0:return(0,m.jsx)(x.hf,{theme:n});case 1:return(0,m.jsx)(x.Jl,{theme:n});case 2:return(0,m.jsx)(x.Fc,{theme:n})}},k=e=>{let{evaluation:t,theme:r}=e;return(0,m.jsxs)(c,{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Termin"}),(0,m.jsx)("th",{colSpan:2,children:"Zu."}),(0,m.jsx)("th",{children:"Ab."}),(0,m.jsx)("th",{children:"Aus."}),(0,m.jsx)("th",{children:"Vllt."}),(0,m.jsx)("th",{children:"M"}),(0,m.jsx)("th",{children:"S"}),(0,m.jsx)("th",{children:"A"}),(0,m.jsx)("th",{children:"D"}),(0,m.jsx)("th",{children:"T"}),(0,m.jsx)("th",{children:"L"}),(0,m.jsx)("th",{children:"Tr"}),(0,m.jsx)("th",{children:"B"}),(0,m.jsx)("th",{children:"P"})]})}),(0,m.jsx)("tbody",{children:t.map((e=>(0,m.jsx)(A,{event:e,theme:r},`eval_${e.Event_ID}`)))})]})},A=e=>{let{event:t,theme:r}=e;return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:(0,m.jsx)(a.A,{dateprops:t})}),(0,m.jsx)("td",{colSpan:t.PlusOne?1:2,children:t.Consent}),t.PlusOne?(0,m.jsxs)("td",{children:["+",t.PlusOne]}):(0,m.jsx)(m.Fragment,{}),(0,m.jsx)("td",{children:t.Refusal}),(0,m.jsx)("td",{children:t.Missing}),(0,m.jsx)("td",{children:t.Maybe}),(0,m.jsx)("td",{children:t.Instruments.Major}),(0,m.jsx)("td",{children:t.Instruments.Sopran}),(0,m.jsx)("td",{children:t.Instruments.Diskant}),(0,m.jsx)("td",{children:t.Instruments.Alt}),(0,m.jsx)("td",{children:t.Instruments.Tenor}),(0,m.jsx)("td",{children:t.Instruments.Lyra}),(0,m.jsx)("td",{children:t.Instruments.Trommel}),(0,m.jsx)("td",{children:t.Instruments.Becken}),(0,m.jsx)("td",{children:t.Instruments.Pauke}),(0,m.jsx)(p,{event:t,theme:r})]})},w=e=>{let{theme:t}=e;const[r,a]=(0,n.useState)(new Array(0)),[i,d]=(0,n.useState)(),[c,o]=(0,n.useState)(new Array(0)),[h,u]=(0,n.useState)(new Array(0)),p=(0,n.useCallback)((async()=>{let e=await(0,s.Kp)(i);o(e)}),[i]),x=(0,n.useCallback)((async()=>{let e=await(0,s.Ms)(i);u(e)}),[i]),b=(0,n.useCallback)((e=>{d(e.target.value)}),[d]),v=(0,n.useCallback)((()=>{p(),x()}),[p,x]);return(0,n.useEffect)((()=>{v()}),[v]),(0,n.useEffect)((()=>{(async()=>{let e=await(0,s.iJ)();e=e.filter((e=>(0,y._m)(7,e.Association_ID))),a(e)})()}),[]),(0,n.useEffect)((()=>{var e;d(null===(e=r[0])||void 0===e?void 0:e.Usergroup_ID)}),[r]),0===c.length?(0,m.jsx)("select",{name:"usergroup",id:"usergroup_select",onChange:b,children:r.map(((e,t)=>(0,m.jsx)("option",{value:e.Usergroup_ID,children:e.Title},t)))}):(0,m.jsxs)(l,{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("select",{name:"usergroup",id:"usergroup_select",onChange:b,children:r.map(((e,t)=>(0,m.jsx)("option",{value:e.Usergroup_ID,children:e.Title},t)))}),(0,m.jsx)(g.UF6,{onClick:v})]}),(0,m.jsx)(j,{attendences:c,theme:t}),(0,m.jsx)(k,{evaluation:h,theme:t})]})}}}]);
//# sourceMappingURL=880.a6f0b6ce.chunk.js.map