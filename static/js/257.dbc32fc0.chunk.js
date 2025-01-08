"use strict";(globalThis.webpackChunkspz_planner=globalThis.webpackChunkspz_planner||[]).push([[257],{6678:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var a=r(5396),n=r(591);const s=r.p+"static/media/4.95cce34e11d6b0d3b99c.png",i=r.p+"static/media/5.2bc62195d7a1e7833135.png";var c=r(5043),l=r(2439),d=r(5464);const o=d.Ay.div`
    display: grid;

    .pending {
        font-style: italic;
        color: ${e=>{let{theme:t}=e;return t.yellow}};
    }

    .sameDay {
        border-top: 1px dashed ${e=>{let{theme:t}=e;return t.primaryHover}};
    }

    .diffWeek {
        border-top: 3px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
`,g=d.Ay.div`
    display: grid;
    grid-template-columns: auto 64px min-content;
    align-items: center;

    border-top: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
    
    .event_type {
        grid-column-start: 1;
        grid-row-start: 1;
        padding: 5px;
        text-align: center;
    }

    .event_date {
        grid-column-start: 1;
        grid-row-start: 2;
        padding: 5px;
        text-align: center;
    }

    .event_day {
        grid-column-start: 1;
        grid-row-start: 3;
        padding: 5px;
        text-align: center;
    }

    .AttendenceInput {
        grid-column-start: 2;
        grid-row-start: 1;
        grid-row-end: 4;
        justify-self: end;
    }

    .PlusOne {
        grid-column-start: 3;
        grid-row-start: 1;
        grid-row-end: 4;
        justify-self: end;
    }
`,u=d.Ay.div`
    display: grid;
    grid-template-columns: min-content auto 64px min-content;
    align-items: center;

    border-top: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};

    img {
        max-height: 64px;
        grid-column-start: 1;
        grid-row-start: 1;
        grid-row-end: 4;
        justify-self: start;
    }
    
    .event_type {
        grid-column-start: 2;
        grid-row-start: 1;
        padding: 5px;
        text-align: center;
    }

    .event_date {
        grid-column-start: 2;
        grid-row-start: 2;
        padding: 5px;
        text-align: center;
    }

    .event_day {
        grid-column-start: 2;
        grid-row-start: 3;
        padding: 5px;
        text-align: center;
    }

    .AttendenceInput {
        grid-column-start: 3;
        grid-row-start: 1;
        grid-row-end: 4;
        justify-self: end;
    }

    .PlusOne {
        grid-column-start: 4;
        grid-row-start: 1;
        grid-row-end: 4;
        justify-self: end;
    }
`;var m=r(6132),p=r(2140),h=r(7059),f=r(579);const v=e=>{let{att:t,oneAssociation:r,flags:s,theme:i}=e;const[d,o]=(0,c.useState)(t.PlusOne),[m,p]=(0,c.useState)(t.Attendence),v=async(e,t)=>{await(0,l.NB)(e,t,d),p(t)},w=async()=>{1===m&&(await(0,l.NB)(t.Event_ID,m,!d),o(!d))};let y=0===t.State?"event pending":"event";return s.sameDay?y+=" sameDay":s.diffWeek&&(y+=" diffWeek"),r?(0,f.jsxs)(g,{className:y,children:[(0,f.jsx)(a.A,{dateprops:t}),(0,f.jsx)(h.s,{event:t,attendence:m,onClick:v,theme:i}),t.Ev_PlusOne?(0,f.jsx)(n.A,{active:1===m,plusOne:d,onClick:w,theme:i,className:"PlusOne"}):(0,f.jsx)(f.Fragment,{})]},t.Location+t.Event_ID):(0,f.jsxs)(u,{className:y,children:[x(t.Association_ID),(0,f.jsx)(a.A,{dateprops:t}),(0,f.jsx)(h.s,{event:t,attendence:m,onClick:v,theme:i}),t.Ev_PlusOne?(0,f.jsx)(n.A,{active:1===m,plusOne:d,onClick:w,theme:i,className:"PlusOne"}):(0,f.jsx)(f.Fragment,{})]},t.Location+t.Event_ID)},x=e=>{switch(parseInt(e)){case 1:return(0,f.jsx)("img",{src:s,alt:"Logo R\xf6nk"});case 2:return(0,f.jsx)("img",{src:i,alt:"Logo D\xfcn"});case 3:return(0,f.jsx)("img",{src:"https://sgv.de/assets/images/1/logo_sgv_web-fc5e97ec.svg",alt:"Logo SGV"});default:return(0,f.jsx)(f.Fragment,{})}},w=e=>{let{attendences:t,states:r,selectedDateFilter:a,selectedEventFilter:n,theme:s}=e;const[i,l]=(0,c.useState)(!0),[d,g]=(0,c.useState)(t);return(0,c.useEffect)((()=>{var e;const r=null===(e=t[0])||void 0===e?void 0:e.Association_ID;let a=!0;for(let n=1;n<t.length;n++)if(t[n].Association_ID!==r){a=!1;break}l(a)}),[t]),(0,c.useEffect)((()=>{let e=t.filter((e=>{let t=new Date(e.Date);return t.setHours(23,59,59,999),new Date<=t})).filter((e=>{switch(n){default:case"pending":return-1===e.Attendence;case"all":return!0;case"practice":return"practice"===e.Category;case"event":return"event"===e.Category;case"other":return"other"===e.Category}})).filter((e=>{let t=new Date(e.Date),r=new Date;switch(a){default:case"all":return!0;case"one":return t.getTime()-r.getTime()<6048e5;case"two":return t.getTime()-r.getTime()<12096e5;case"four":return t.getTime()-r.getTime()<24192e5;case"eight":return t.getTime()-r.getTime()<48384e5}})).filter((e=>!e.Type.includes("Abgesagt")&&e.State!==m.t.CANCELED));g(e)}),[t,a,n]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(o,{children:d.map(((e,t)=>{let a={sameDay:!1,diffWeek:!1};if(t>0){let r=new Date(d[t-1].Date),n=new Date(e.Date);a.sameDay=r.getDate()===n.getDate()&&r.getMonth()===n.getMonth()&&r.getFullYear()===n.getFullYear(),a.diffWeek=(0,p.ST)(r)!==(0,p.ST)(n)}return(0,f.jsx)(v,{att:e,states:r,oneAssociation:i,flags:a,theme:s},e.Location+e.Event_ID)}))})})}},5396:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(579);const n=e=>{switch(e){default:return"";case 0:return"Sonntag";case 1:return"Montag";case 2:return"Dienstag";case 3:return"Mittwoch";case 4:return"Donnerstag";case 5:return"Freitag";case 6:return"Samstag"}},s=e=>{switch(e){default:return"";case 0:return"Januar";case 1:return"Februar";case 2:return"M\xe4rz";case 3:return"April";case 4:return"Mai";case 5:return"Juni";case 6:return"Juli";case 7:return"August";case 8:return"September";case 9:return"Oktober";case 10:return"November";case 11:return"Dezember"}},i=e=>{let{dateprops:t}=e;const r=new Date(t.Date),i=n(r.getDay()),c=r.getDate(),l=r.getMonth(),d=r.getFullYear(),o=0===t.State?"Anfrage":"";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"event_type",children:[o," ",t.Type," ",t.Location]}),(0,a.jsxs)("div",{className:"event_date",children:[c,". ",s(l)," ",d]}),(0,a.jsx)("div",{className:"event_day",children:i})]})}}}]);
//# sourceMappingURL=257.dbc32fc0.chunk.js.map