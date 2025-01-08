"use strict";(globalThis.webpackChunkspz_planner=globalThis.webpackChunkspz_planner||[]).push([[162,880],{6132:(e,t,n)=>{n.d(t,{t:()=>m,A:()=>f});var a=n(5043),r=n(262),l=n(3445),s=n(2930),i=n(7921),c=n(5709),d=n(6242),o=n(2439);const u=n(5464).Ay.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;

    select {
        padding: 2px;
        margin: 2px;
        border-radius: 5px;
    }

    img {
        height: 35pt;
    }

    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        flex-direction: column;
    }

    .confirmed {
        color: ${e=>{let{theme:t}=e;return t.primaryLight}};
        font-style: normal;
    }

    .pending {
        color: ${e=>{let{theme:t}=e;return t.primaryLight}};
        font-style: italic;
    }

    .declined {
        color: ${e=>{let{theme:t}=e;return t.lightred}};
        font-style: italic;
    }

    .canceled {
        color: ${e=>{let{theme:t}=e;return t.red}};
        font-style: italic;
    }
`;var h=n(7474),p=n(579);const m={PENDING:0,CONFIRMED:1,DECLINED:2,CANCELED:3},g=e=>{let{events:t,onSelect:n,date_options:r,usergroups:s,onFilterChange:i}=e;const d=[{value:"all",label:"Alle"},{value:"practice",label:"Probe/\xdcben"},{value:"event",label:"Auftritt"},{value:"other",label:"Sonstige Termine"}],o=[{value:"all",label:"Alle"},...s.map((e=>({value:e.Usergroup_ID,label:e.Title})))],[u,h]=(0,a.useState)(d[0].value),[m,g]=(0,a.useState)(o[0].value),v=(0,a.useCallback)((e=>{h(e.target.value)}),[]),b=(0,a.useCallback)((e=>{g(e.target.value)}),[]);return(0,p.jsxs)(c.A,{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)(l.A,{options:r,onChange:i}),(0,p.jsx)(l.A,{options:d,onChange:v}),(0,p.jsx)(l.A,{options:o,onChange:b})]}),t.filter((e=>{switch(u){default:case"all":return!0;case"practice":return"practice"===e.Category;case"event":return"event"===e.Category;case"other":return"other"===e.Category}})).filter((e=>"all"===m||parseInt(e.Usergroup_ID)===parseInt(m))).map((e=>(0,p.jsx)(x,{event:e,onSelect:n},`event_${e.Event_ID}`)))]})},x=e=>{let t,{event:n,onSelect:r}=e;const l=(0,a.useCallback)((()=>{r(n.Event_ID)}),[r,n.Event_ID]);switch(n.State){default:case m.PENDING:t="pending";break;case m.CONFIRMED:t="confirmed";break;case m.DECLINED:t="declined";break;case m.CANCELED:t="canceled"}return(0,p.jsxs)(d.A,{className:t,onClick:l,children:[n.Type," ",n.Location]})},v=e=>{let{usergroups:t,datetemplates:n,reload:l,selected:c}=e;const[d,u]=(0,a.useState)(),[g,x]=(0,a.useState)();(0,a.useEffect)((()=>{var e;document.getElementById("eventform_form").reset();let n=document.getElementById("category");for(let t=0;t<n.options.length;t++)n.options[t].value===(null===d||void 0===d?void 0:d.Category)&&(n.selectedIndex=t);document.getElementById("state").value=null!==(e=null===d||void 0===d?void 0:d.State)&&void 0!==e?e:m.PENDING,document.getElementById("usergroup").selectedIndex=null===t||void 0===t?void 0:t.findIndex((e=>parseInt(null===e||void 0===e?void 0:e.Usergroup_ID)===parseInt(null===d||void 0===d?void 0:d.Usergroup_ID))),x(void 0!==d?d.Clothing:0)}),[d,t]),(0,a.useEffect)((()=>{(async()=>{let e=await(0,o.Zc)(c);void 0!==e&&u(e)})()}),[c]);const v=(0,a.useCallback)((()=>{x((g+1)%h.HE)}),[g]);return(0,p.jsxs)(s.A,{id:"eventform_form",children:[(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"category",children:"Art:"}),(0,p.jsxs)("select",{name:"category",id:"category",children:[(0,p.jsx)("option",{value:"event",children:"Auftritt"}),(0,p.jsx)("option",{value:"practice",children:"\xdcben/Probe"}),(0,p.jsx)("option",{value:"other",children:"Sonstiges"})]})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"type",children:"Status"}),(0,p.jsxs)("select",{name:"state",id:"state",defaultValue:m.PENDING,children:[(0,p.jsx)("option",{value:m.PENDING,children:"Anfrage"}),(0,p.jsx)("option",{value:m.CONFIRMED,children:"Angenommen"}),(0,p.jsx)("option",{value:m.DECLINED,children:"Abgelehnt"}),(0,p.jsx)("option",{value:m.CANCELED,children:"Abgesagt"})]})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"type",children:"Bezeichnung:"}),(0,p.jsx)("input",{type:"text",name:"type",id:"type",defaultValue:null===d||void 0===d?void 0:d.Type})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"location",children:"Ort:"}),(0,p.jsx)("input",{type:"text",name:"location",id:"location",defaultValue:null===d||void 0===d?void 0:d.Location})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"address",children:"Adresse:"}),(0,p.jsx)("input",{type:"text",name:"address",id:"address",defaultValue:null===d||void 0===d?void 0:d.Address})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"date",children:"Datum:"}),(0,p.jsx)("input",{type:"date",name:"date",id:"date",defaultValue:null===d||void 0===d?void 0:d.Date})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"begin",children:"Startzeit:"}),(0,p.jsx)("input",{type:"time",name:"begin",id:"begin",step:"1",defaultValue:null===d||void 0===d?void 0:d.Begin})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"departure",children:"Abfahrt:"}),(0,p.jsx)("input",{type:"time",name:"departure",id:"departure",step:"1",defaultValue:null===d||void 0===d?void 0:d.Departure})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"leave_dep",children:"R\xfcckfahrt:"}),(0,p.jsx)("input",{type:"time",name:"leave_dep",id:"leave_dep",step:"1",defaultValue:null===d||void 0===d?void 0:d.Leave_dep})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"clothing",children:"Uniform:"}),(0,p.jsx)(h.rm,{id:"clothing",clothing:g,onClick:v})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"plusone",children:"mit Begleitung:"}),(0,p.jsx)("input",{type:"checkbox",name:"plusone",id:"plusone",defaultChecked:null===d||void 0===d?void 0:d.PlusOne})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"fixed",children:"Fixiert:"}),(0,p.jsx)("input",{type:"checkbox",name:"fixed",id:"fixed",defaultChecked:null===d||void 0===d?void 0:d.Fixed})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"push",children:"Push versenden:"}),(0,p.jsx)("input",{type:"checkbox",name:"push",id:"push",defaultChecked:null===d||void 0===d?void 0:d.Push})]}),(0,p.jsxs)(i.A,{children:[(0,p.jsx)("label",{htmlFor:"usergroup",children:"Sichtbarkeit:"}),(0,p.jsx)("select",{name:"usergroup",id:"usergroup",children:t.map((e=>(0,p.jsx)("option",{value:e.Usergroup_ID,children:e.Title},`usergroup_${e.Usergroup_ID}`)))})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)(r.default,{onClick:async e=>{e.preventDefault(),u(void 0),l()},children:"Abbrechen"}),(0,p.jsx)(r.default,{onClick:async e=>{e.preventDefault();let t=document.getElementById("category").options[document.getElementById("category").selectedIndex].value,n=document.getElementById("state").value,a=document.getElementById("type").value,r=document.getElementById("location").value,s=document.getElementById("address").value,i=document.getElementById("date").value,c=document.getElementById("begin").value,u=document.getElementById("departure").value,h=document.getElementById("leave_dep").value,p=document.getElementById("plusone").checked,m=document.getElementById("usergroup").options[document.getElementById("usergroup").selectedIndex].value,x=document.getElementById("fixed").checked,v=document.getElementById("push").checked;d&&-1!==d.Event_ID?await(0,o.qM)(d.Event_ID,t,n,a,r,s,i,c,u,h,p,m,g,x,v):await(0,o.dn)(t,n,a,r,s,i,c,u,h,p,m,g,x,v),l()},children:"Speichern"})]}),(0,p.jsx)(b,{datetemplates:n,onTemplateSelect:e=>{l();let a=null===n||void 0===n?void 0:n.find((t=>t.DateTemplate_ID===e));a&&(document.getElementById("category").value=a.Category,document.getElementById("type").value=a.Type,document.getElementById("location").value=a.Location,document.getElementById("begin").value=a.Begin,document.getElementById("departure").value=a.Departure,document.getElementById("leave_dep").value=a.Leave_dep,document.getElementById("usergroup").selectedIndex=null===t||void 0===t?void 0:t.findIndex((e=>(null===e||void 0===e?void 0:e.Usergroup_ID)===(null===a||void 0===a?void 0:a.Usergroup_ID))),document.getElementById("push").checked=!0,"practice"===a.Category&&(document.getElementById("state").value=m.CONFIRMED))}})]})},b=e=>{let{datetemplates:t,onTemplateSelect:n}=e;return(0,p.jsx)(c.A,{children:t.map((e=>(0,p.jsx)(j,{onSelect:n,datetemplate:e},e.Title)))})},j=e=>{let{onSelect:t,datetemplate:n}=e;const r=(0,a.useCallback)((()=>{t(n.DateTemplate_ID)}),[t,n.DateTemplate_ID]);return(0,p.jsx)(d.A,{onClick:r,children:n.Title})},f=()=>{const e=[{value:"current",label:"Aktuell"},{value:"past",label:"Vergangen"},{value:"all",label:"Alle"}],[t,n]=(0,a.useState)(new Array(0)),[r,l]=(0,a.useState)(new Array(0)),[s,i]=(0,a.useState)(new Array(0)),[c,d]=(0,a.useState)(-1),[h,m]=(0,a.useState)(e[0].value),x=(0,a.useCallback)((async()=>{let e=await(0,o.kQ)(h);n(void 0!==e?e:new Array(0))}),[h]),b=(0,a.useCallback)((async()=>{let e=await(0,o.is)();l(void 0!==e?e:new Array(0))}),[]),j=(0,a.useCallback)((async()=>{let e=await(0,o.kC)();i(void 0!==e?e:new Array(0))}),[]),f=(0,a.useCallback)((()=>{d(-1),x()}),[x]),y=(0,a.useCallback)((e=>{d(e)}),[]),A=(0,a.useCallback)((e=>{m(e.target.value)}),[]);return(0,a.useEffect)((()=>{x(),b(),j()}),[x,b,j]),(0,p.jsxs)(u,{children:[(0,p.jsx)(g,{events:t,onSelect:y,onFilterChange:A,date_options:e,usergroups:r}),(0,p.jsx)(v,{usergroups:r,datetemplates:s,reload:f,selected:c})]})}},5396:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(579);const r=e=>{switch(e){default:return"";case 0:return"Sonntag";case 1:return"Montag";case 2:return"Dienstag";case 3:return"Mittwoch";case 4:return"Donnerstag";case 5:return"Freitag";case 6:return"Samstag"}},l=e=>{switch(e){default:return"";case 0:return"Januar";case 1:return"Februar";case 2:return"M\xe4rz";case 3:return"April";case 4:return"Mai";case 5:return"Juni";case 6:return"Juli";case 7:return"August";case 8:return"September";case 9:return"Oktober";case 10:return"November";case 11:return"Dezember"}},s=e=>{let{dateprops:t}=e;const n=new Date(t.Date),s=r(n.getDay()),i=n.getDate(),c=n.getMonth(),d=n.getFullYear(),o=0===t.State?"Anfrage":"";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"event_type",children:[o," ",t.Type," ",t.Location]}),(0,a.jsxs)("div",{className:"event_date",children:[i,". ",l(c)," ",d]}),(0,a.jsx)("div",{className:"event_day",children:s})]})}},4294:(e,t,n)=>{n.d(t,{Fc:()=>g,hA:()=>h,Jl:()=>p,Ug:()=>b,hf:()=>m,V9:()=>v,j_:()=>j,KB:()=>x,Ay:()=>y});var a=n(5043),r=n(423),l=n(5394);const s=n(5464).Ay.div`

    position: relative;
    height: 64px;
    width: 64px;

    :nth-child(1) {
        z-index: 3;
    }

    :nth-child(1) {
        z-index: 2;
    }

    .IconWrapper {
        position: absolute;
    }

    svg {
        height: 100%;
        width: 100%;
    }

    .LoadingSpinner {
        animation: spin 1s linear infinite;

        @keyframes spin {
            0% {transform: rotate(0deg);}
            100% {transform: rotate(360deg);}
        }
    }
`;var i=n(3441),c=n(3156),d=n(2661),o=n(579);const u=e=>{switch(e.attendence){default:case-1:return(0,o.jsx)(h,{callback:e.callback,theme:e.theme});case 0:return(0,o.jsx)(m,{callback:e.callback,theme:e.theme});case 1:return(0,o.jsx)(p,{callback:e.callback,theme:e.theme});case 2:return(0,o.jsx)(g,{callback:e.callback,theme:e.theme})}},h=e=>{let{callback:t,size:n,theme:a,overlay:l,className:s}=e,c=[a.green,a.red,a.darkred];return(0,o.jsx)("div",{className:`ButtonWrapper ${s}`,children:(0,o.jsxs)(i.Vx.Provider,{value:{color:a.blue,className:"IconWrapper Attendence_none"},children:[(0,o.jsx)(r.Edw,{size:"100%",onClick:t}),(0,o.jsx)(f,{callback:t,fill:c[l]})]})})},p=e=>{let{callback:t,theme:n,className:a}=e;return(0,o.jsx)("div",{className:`ButtonWrapper ${a}`,children:(0,o.jsxs)(i.Vx.Provider,{value:{color:n.green,className:"IconWrapper "},children:[(0,o.jsx)(l.G3G,{size:"100%",onClick:t}),(0,o.jsx)(f,{callback:t})]})})},m=e=>{let{callback:t,theme:n,className:a}=e;return(0,o.jsx)("div",{className:`ButtonWrapper ${a}`,children:(0,o.jsxs)(i.Vx.Provider,{value:{color:n.red,className:"IconWrapper"},children:[(0,o.jsx)(r.cW1,{size:"100%",onClick:t}),(0,o.jsx)(f,{callback:t})]})})},g=e=>{let{callback:t,theme:n,className:a}=e;return(0,o.jsx)("div",{className:`ButtonWrapper ${a}`,children:(0,o.jsxs)(i.Vx.Provider,{value:{color:n.yellow,className:"IconWrapper"},children:[(0,o.jsx)(r.Edw,{size:"100%",onClick:t}),(0,o.jsx)(f,{callback:t})]})})},x=e=>{let{callback:t}=e;return(0,o.jsx)("div",{className:"ButtonWrapper",children:(0,o.jsxs)(i.Vx.Provider,{value:{color:"#904c77",className:"IconWrapper"},children:[(0,o.jsx)(r.wMi,{size:"100%",onClick:t}),(0,o.jsx)(f,{callback:t})]})})},v=e=>{let{callback:t}=e;return(0,o.jsxs)(i.Vx.Provider,{value:{color:"#7d7abc",className:"IconWrapper"},children:[(0,o.jsx)(r.Edw,{size:"100%",onClick:t}),(0,o.jsx)(f,{callback:t})]})},b=e=>{let{callback:t}=e;return(0,o.jsxs)(i.Vx.Provider,{value:{color:"#00bd00",className:"IconWrapper"},children:[(0,o.jsx)(r.cW1,{size:"100%",onClick:t}),(0,o.jsx)(f,{callback:t})]})},j=e=>{let{callback:t,theme:n,className:a=""}=e;return(0,o.jsxs)(i.Vx.Provider,{value:{color:"white",className:`IconWrapper ${a}`},children:[(0,o.jsx)(c.waN,{size:"50%",onClick:t}),(0,o.jsx)(f,{callback:t,fill:n.greenRGB,r:"40.625%"})]})},f=e=>{let{callback:t,fill:n="white",r:a="35%"}=e;return(0,o.jsx)("svg",{size:"100%",className:"IconWrapper",children:(0,o.jsx)("circle",{cx:"50%",cy:"50%",r:a,fill:n,onClick:t})})},y=e=>{const[t,n]=(0,a.useState)(e.attendence),[r,l]=(0,a.useState)(!1),i=(0,a.useCallback)((async()=>{var a;let r=new Date,s=void 0!==e.event?new Date(null===(a=e.event)||void 0===a?void 0:a.Date):void 0;if(s&&e.event.Begin){var i;if(s.setHours(e.event.Begin.split(":")[0]),s.setMinutes(e.event.Begin.split(":")[1]),r.getTime()>s.getTime())return void alert("Du kannst deine Zusage nicht mehr \xe4ndern, da der Termin bereits begonnen hat. Solltest du vergessen haben abzusagen, schick bitte eine WhatsApp.");if("event"===(null===(i=e.event)||void 0===i?void 0:i.Category)&&r.getTime()>s.getTime()-54e5)return void alert("Du kannst deine Zusage nicht mehr \xe4ndern, da der Termin in weniger als 1,5 Stunden beginnt. Schick bitte eine WhatsApp zum An- oder Abmelden.")}let c=(t+1)%e.states;l(!0),await e.onClick(e.event_id,c),l(!1),n(c)}),[e,t]);return(0,a.useEffect)((()=>{n(e.attendence)}),[e.attendence]),(0,o.jsxs)(s,{className:"Terminzusage",children:[e.cancelled?(0,o.jsx)(u,{attendence:0,theme:e.theme}):(0,o.jsx)(u,{callback:i,attendence:t,theme:e.theme}),r?(0,o.jsx)(d.vTn,{className:"LoadingSpinner"}):null]})}},9880:(e,t,n)=>{n.r(t),n.d(t,{Zusage:()=>f,default:()=>k});var a=n(5043),r=n(2439),l=n(5396),s=n(5464);const i=s.Ay.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: auto;
    align-items: center;

    select {
        width: fit-content;
    }
`,c=s.Ay.div`
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
`,d=s.Ay.table`
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
`,o=s.Ay.div`
    @media (min-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        div {
            display: none;
        }
    }
`;var u=n(461),h=n(6058),p=n(579);const m=e=>{let{event:t,theme:n}=e;u.t1.register(u.PP,u.kc,u.E8,u.hE,u.m_,u.s$);const a={labels:[""],datasets:[{data:[t.Consent],backgroundColor:n.greenRGB},{data:[t.ProbAttending],backgroundColor:n.lightgreenRGB},{data:[t.Maybe],backgroundColor:n.yellowRGB},{data:[t.ProbMissing],backgroundColor:n.lightredRGB},{data:[t.Refusal],backgroundColor:n.redRGB},{data:[t.ProbSignout],backgroundColor:n.darkredRGB}]};return(0,p.jsxs)(o,{children:[(0,p.jsx)(l.A,{dateprops:t}),(0,p.jsx)(h.yP,{height:"60px",options:{indexAxis:"y",plugins:{title:{display:!1},legend:{display:!1}},responsive:!1,scales:{x:{stacked:!0,display:!1},y:{stacked:!0}}},data:a})]})};var g=n(4294),x=n(5394);const v=e=>{let{attendences:t,theme:n}=e;return(0,p.jsxs)(c,{children:[(0,p.jsx)("span",{className:"Date Header",children:"Termin:"}),t[0].Attendences.map((e=>(0,p.jsx)(b,{Fullname:e.Fullname},e.Fullname))),t.map((e=>(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)("span",{className:"DateTag",children:(0,p.jsx)(l.A,{dateprops:e})},e.Event_ID),e.Attendences.map(((t,a)=>{const r=a===e.Attendences.length-1?"AttendenceTag Last":"AttendenceTag";return(0,p.jsx)("span",{className:r,children:(0,p.jsx)(f,{attendence:t.Attendence,plusone:t.PlusOne,prediction:t.Prediction,theme:n})},t.Fullname+e.Event_ID)}))]},`row_${e.Event_ID}`)))]})},b=e=>{let{Fullname:t}=e;const[n,r]=(0,a.useState)(!1),l=t.split(" ")[0].slice(0,2)+t.split(" ")[1][0];return(0,p.jsx)("span",{className:n?"NameTagActive Header":"NameTag Header",onClick:()=>{r(!n)},children:n?t:l})};var j=n(5467);const f=e=>{let{attendence:t,plusone:n,theme:a,prediction:r}=e;if(1===t&&1===n)return(0,p.jsx)(g.j_,{theme:a,className:"PlusOneIcon"});switch(t){default:case-1:return(0,p.jsx)(g.hA,{theme:a,overlay:r});case 0:return(0,p.jsx)(g.hf,{theme:a});case 1:return(0,p.jsx)(g.Jl,{theme:a});case 2:return(0,p.jsx)(g.Fc,{theme:a})}},y=e=>{let{evaluation:t,theme:n}=e;return(0,p.jsxs)(d,{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"Termin"}),(0,p.jsx)("th",{colSpan:2,children:"Zu."}),(0,p.jsx)("th",{children:"Ab."}),(0,p.jsx)("th",{children:"Aus."}),(0,p.jsx)("th",{children:"Vllt."}),(0,p.jsx)("th",{children:"M"}),(0,p.jsx)("th",{children:"S"}),(0,p.jsx)("th",{children:"A"}),(0,p.jsx)("th",{children:"D"}),(0,p.jsx)("th",{children:"T"}),(0,p.jsx)("th",{children:"L"}),(0,p.jsx)("th",{children:"Tr"}),(0,p.jsx)("th",{children:"B"}),(0,p.jsx)("th",{children:"P"})]})}),(0,p.jsx)("tbody",{children:t.map((e=>(0,p.jsx)(A,{event:e,theme:n},`eval_${e.Event_ID}`)))})]})},A=e=>{let{event:t,theme:n}=e;return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:(0,p.jsx)(l.A,{dateprops:t})}),(0,p.jsx)("td",{colSpan:t.PlusOne?1:2,children:t.Consent}),t.PlusOne?(0,p.jsxs)("td",{children:["+",t.PlusOne]}):(0,p.jsx)(p.Fragment,{}),(0,p.jsx)("td",{children:t.Refusal}),(0,p.jsx)("td",{children:t.Missing}),(0,p.jsx)("td",{children:t.Maybe}),(0,p.jsx)("td",{children:t.Instruments.Major}),(0,p.jsx)("td",{children:t.Instruments.Sopran}),(0,p.jsx)("td",{children:t.Instruments.Diskant}),(0,p.jsx)("td",{children:t.Instruments.Alt}),(0,p.jsx)("td",{children:t.Instruments.Tenor}),(0,p.jsx)("td",{children:t.Instruments.Lyra}),(0,p.jsx)("td",{children:t.Instruments.Trommel}),(0,p.jsx)("td",{children:t.Instruments.Becken}),(0,p.jsx)("td",{children:t.Instruments.Pauke}),(0,p.jsx)(m,{event:t,theme:n})]})},k=e=>{let{theme:t}=e;const[n,l]=(0,a.useState)(new Array(0)),[s,c]=(0,a.useState)(),[d,o]=(0,a.useState)(new Array(0)),[u,h]=(0,a.useState)(new Array(0)),m=(0,a.useCallback)((async()=>{let e=await(0,r.Kp)(s);o(e)}),[s]),g=(0,a.useCallback)((async()=>{let e=await(0,r.Ms)(s);h(e)}),[s]),b=(0,a.useCallback)((e=>{c(e.target.value)}),[c]),f=(0,a.useCallback)((()=>{m(),g()}),[m,g]);return(0,a.useEffect)((()=>{f()}),[f]),(0,a.useEffect)((()=>{(async()=>{let e=await(0,r.iJ)();e=e.filter((e=>(0,j._m)(7,e.Association_ID))),l(e)})()}),[]),(0,a.useEffect)((()=>{var e;c(null===(e=n[0])||void 0===e?void 0:e.Usergroup_ID)}),[n]),0===d.length?(0,p.jsx)("select",{name:"usergroup",id:"usergroup_select",onChange:b,children:n.map(((e,t)=>(0,p.jsx)("option",{value:e.Usergroup_ID,children:e.Title},t)))}):(0,p.jsxs)(i,{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("select",{name:"usergroup",id:"usergroup_select",onChange:b,children:n.map(((e,t)=>(0,p.jsx)("option",{value:e.Usergroup_ID,children:e.Title},t)))}),(0,p.jsx)(x.UF6,{onClick:f})]}),(0,p.jsx)(v,{attendences:d,theme:t}),(0,p.jsx)(y,{evaluation:u,theme:t})]})}},3992:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(5043),r=n(2439),l=n(5709),s=n(3445),i=n(6242),c=n(262),d=n(2930),o=n(6327),u=n(9880),h=n(5464);const p=h.Ay.div`

    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;

    td {
        text-align: center;
        min-width: 32px;
    }

    :nth-child(1) {
        z-index: 3;
    }

    :nth-child(1) {
        z-index: 2;
    }

    .IconWrapper {
        min-width: 1.5em;
        max-width: 32px;
        min-height: 1.5em;
        max-height: 32px;
        position: absolute;

        transform: translateX(-50%) translateY(-50%);
    }

    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        flex-direction: column;
        table {
            width: 100%;
        }
    }
`;var m=n(4294),g=n(5467),x=n(6132),v=n(579);const b=e=>{let{events:t,onSelect:n,usergroups:r}=e;const i=[{value:"all",label:"Alle"},...r.map((e=>({value:e.Usergroup_ID,label:e.Title})))],[c,d]=(0,a.useState)(i[0].value),o=(0,a.useCallback)((e=>{d(e.target.value)}),[]);return(0,v.jsxs)(l.A,{children:[(0,v.jsx)("div",{children:(0,v.jsx)(s.A,{options:i,onChange:o})}),t.filter((e=>e.State===x.t.CONFIRMED&&!e.Type.includes("Abgesagt")&&!e.Evaluated&&(0,g._m)(9,e.Association_ID))).filter((e=>{let t=new Date,n=new Date(e.Date);return null!==e.Begin&&n.setHours(null===e||void 0===e?void 0:e.Begin.split(":")[0],null===e||void 0===e?void 0:e.Begin.split(":")[1],0,0),n<t})).filter((e=>"all"===c||parseInt(e.Usergroup_ID)===parseInt(c))).map((e=>(0,v.jsx)(j,{event:e,onSelect:n},`event_${e.Event_ID}`)))]})},j=e=>{let{event:t,onSelect:n}=e;const r=(0,a.useCallback)((()=>{n(t.Event_ID)}),[n,t.Event_ID]);return(0,v.jsxs)(i.A,{onClick:r,children:[t.Type," ",t.Location]})},f=e=>{let{event:t,reload:n,theme:l}=e;const[s,i]=(0,a.useState)(new Array(0)),[h,p]=(0,a.useState)({}),m=(0,a.useCallback)((async()=>{void 0!==t&&fetch(`${r.Hc}/api/v0/attendenceeval/${null===t||void 0===t?void 0:t.Event_ID}?api_token=${localStorage.getItem("api_token")}`).then((e=>e.json())).then((e=>{i(e);let t={};for(let n of e)switch(n.Attendence){default:case-1:t[n.Member_ID]=0;break;case 0:t[n.Member_ID]=2;break;case 1:t[n.Member_ID]=3;break;case 2:t[n.Member_ID]=2}p(t)}))}),[t]),g=(0,a.useCallback)(((e,t)=>{let n={...h};n[e]=t,p(n)}),[h]);(0,a.useEffect)((()=>{m()}),[m]);return(0,v.jsxs)(d.A,{id:"evaluation_form",children:[null===t||void 0===t?void 0:t.Type," ",null===t||void 0===t?void 0:t.Location," ",null===t||void 0===t?void 0:t.Date,(0,v.jsxs)(o.X,{children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Name"}),(0,v.jsx)("th",{children:"Angabe"}),(0,v.jsx)("th",{children:"Tats\xe4chlich"})]})}),(0,v.jsx)("tbody",{children:s.sort(((e,t)=>e.Fullname.split(" ")[1]<t.Fullname.split(" ")[1]?-1:e.Fullname.split(" ")[1]>t.Fullname.split(" ")[1]?1:0)).map((e=>(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:e.Fullname}),(0,v.jsx)("td",{children:(0,v.jsx)(u.Zusage,{attendence:e.Attendence,theme:l})}),(0,v.jsx)("td",{children:(0,v.jsx)(y,{member_id:e.Member_ID,attendence:h[e.Member_ID],callback:g,theme:l})})]},`attendence_${e.Member_ID}`)))})]}),(0,v.jsx)(o.X,{children:(0,v.jsxs)("tbody",{children:[(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Unabgemeldet gefehlt"}),(0,v.jsx)("td",{children:(0,v.jsx)(y,{attendence:0,callback:()=>{},theme:l})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Angemeldet gefehlt"}),(0,v.jsx)("td",{children:(0,v.jsx)(y,{attendence:1,callback:()=>{},theme:l})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Abgemeldet"}),(0,v.jsx)("td",{children:(0,v.jsx)(y,{attendence:2,callback:()=>{},theme:l})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Anwesend"}),(0,v.jsx)("td",{children:(0,v.jsx)(y,{attendence:3,callback:()=>{},theme:l})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Anwesend trotz Abmeldung"}),(0,v.jsx)("td",{children:(0,v.jsx)(y,{attendence:4,callback:()=>{},theme:l})})]})]})}),(0,v.jsxs)("div",{children:[(0,v.jsx)(c.default,{onClick:async e=>{e.preventDefault(),n()},children:"Abbrechen"}),(0,v.jsx)(c.default,{onClick:async e=>{e.preventDefault(),fetch(`${r.Hc}/api/eval.php?event_id=${null===t||void 0===t?void 0:t.Event_ID}&api_token=${localStorage.getItem("api_token")}`,{method:"POST",body:JSON.stringify(h)}).then((e=>{200===e.status&&n()}))},children:"Speichern"})]})]})},y=e=>{let{member_id:t,attendence:n,callback:r,theme:l}=e;const s=(0,a.useCallback)((()=>{r(t,(n+1)%5)}),[r,t,n]);switch(n){default:case 0:return(0,v.jsx)(m.KB,{callback:s});case 1:return(0,v.jsx)(m.V9,{callback:s});case 2:return(0,v.jsx)(m.hf,{callback:s,theme:l});case 3:return(0,v.jsx)(m.Jl,{callback:s,theme:l});case 4:return(0,v.jsx)(m.Ug,{callback:s})}},A=e=>{let{theme:t}=e;const[n,l]=(0,a.useState)(new Array(0)),[s,i]=(0,a.useState)(new Array(0)),[c,d]=(0,a.useState)(-1),o=(0,a.useCallback)((async()=>{let e=await(0,r.kQ)("all");l(void 0!==e?e:new Array(0))}),[]),u=(0,a.useCallback)((async()=>{let e=await(0,r.iJ)();void 0!==e?(e=e.filter((e=>(0,g._m)(9,e.Association_ID))),i(e)):i(new Array(0))}),[]),h=(0,a.useCallback)((()=>{d(-1),o()}),[o]),m=(0,a.useCallback)((e=>{d(e)}),[]);return(0,a.useEffect)((()=>{o(),u()}),[o,u]),(0,v.jsxs)(p,{children:[(0,v.jsx)(b,{events:n,onSelect:m,usergroups:s}),(0,v.jsx)(f,{event:n.find((e=>e.Event_ID===c)),reload:h,theme:t})]})};var k=n(3410),w=n(7196);const I=h.Ay.div`

    td, th {
        text-align: center;
        min-width: 32px;
    }

    td:nth-child(1), td:nth-child(2), th:nth-child(1) {
        border-right: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
    }

    td:nth-last-child(4), th:nth-last-child(4) {
        border-left: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
    }

    :nth-child(1) {
        z-index: 3;
    }

    :nth-child(1) {
        z-index: 2;
    }    

    .IconWrapper {
        min-width: 1.5em;
        max-width: 32px;
        min-height: 1.5em;
        max-height: 32px;
        position: absolute;

        transform: translateX(-50%) translateY(-50%);
    }
`,_=e=>{let{evaluations:t,filterFrom:n,filterTo:a,category:r,theme:l}=e;return(0,v.jsxs)(o.X,{children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{colSpan:2,children:"Termin"}),(0,v.jsx)("th",{children:(0,v.jsx)(y,{attendence:0,callback:()=>{},theme:l})}),(0,v.jsx)("th",{children:(0,v.jsx)(y,{attendence:1,callback:()=>{},theme:l})}),(0,v.jsx)("th",{children:(0,v.jsx)(y,{attendence:2,callback:()=>{},theme:l})}),(0,v.jsx)("th",{children:(0,v.jsx)(y,{attendence:3,callback:()=>{},theme:l})}),(0,v.jsx)("th",{children:(0,v.jsx)(y,{attendence:4,callback:()=>{},theme:l})}),(0,v.jsx)("th",{children:(0,v.jsx)(w.iZI,{})}),(0,v.jsx)("th",{children:(0,v.jsx)(y,{attendence:3,callback:()=>{},theme:l})}),(0,v.jsx)("th",{children:(0,v.jsx)(y,{attendence:2,callback:()=>{},theme:l})}),(0,v.jsx)("th",{children:"%"})]})}),(0,v.jsx)("tbody",{children:t.filter((e=>{if(void 0!==n&&void 0!==a&&""!==n&&""!==a){let t=new Date(e.Date),r=new Date(n),l=new Date(a);return t>=r&&t<=l}return!0})).filter((e=>!1===e.Type.includes("Abgesagt")&&e.State!==x.t.CANCELED)).filter((e=>e.Category===r||"all"===r)).map((e=>(0,v.jsx)(E,{evaluation:e},`evaluation_${e.Type}_${e.Date}`)))})]})},E=e=>{let{evaluation:t}=e,n=t.Evaluations.filter((e=>3===e.Evaluation||4===e.Evaluation)).length,a=t.Evaluations.filter((e=>-1!==e.Evaluation)).length,r=new Date(t.Date),l=r.getDate()+"."+(r.getMonth()+1)+"."+r.getFullYear();return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:l}),(0,v.jsxs)("td",{children:[t.Type," ",t.Location]}),(0,v.jsx)("td",{children:t.Evaluations.filter((e=>0===e.Evaluation)).length}),(0,v.jsx)("td",{children:t.Evaluations.filter((e=>1===e.Evaluation)).length}),(0,v.jsx)("td",{children:t.Evaluations.filter((e=>2===e.Evaluation)).length}),(0,v.jsx)("td",{children:t.Evaluations.filter((e=>3===e.Evaluation)).length}),(0,v.jsx)("td",{children:t.Evaluations.filter((e=>4===e.Evaluation)).length}),(0,v.jsx)("td",{children:t.Prediction}),(0,v.jsx)("td",{children:t.Evaluations.filter((e=>3===e.Evaluation||4===e.Evaluation)).length}),(0,v.jsx)("td",{children:t.Evaluations.filter((e=>!(3===e.Evaluation||4===e.Evaluation||-1===e.Evaluation))).length}),(0,v.jsxs)("td",{children:[n,"/",a," (",Math.round(n/a*100),"%)"]})]})},D=e=>{let{theme:t}=e;const[n,l]=(0,a.useState)(new Array(0)),[s,i]=(0,a.useState)(-1),[c,d]=(0,a.useState)("all"),[o,u]=(0,a.useState)(new Date("2023-11-23").toISOString().split("T")[0]),[h,p]=(0,a.useState)((new Date).toISOString().split("T")[0]),[m,x]=(0,a.useState)(new Array(0)),b=(0,a.useCallback)((async()=>{let e=await(0,r.iJ)();void 0!==e?(e=e.filter((e=>(0,g._m)(8,e.Association_ID))),l(e)):l(new Array(0))}),[]),j=(0,a.useCallback)((async()=>{-1!==s&&fetch(`${r.Hc}/api/v0/attendenceeval?api_token=${localStorage.getItem("api_token")}&usergroup_id=${s}`).then((e=>200===e.status?e.json():void 0)).then((e=>{x(void 0===e?new Array(0):e)}))}),[s]),f=(0,a.useCallback)((e=>{i(e.target.value)}),[]),y=(0,a.useCallback)((e=>{d(e.target.value)}),[]),A=(0,a.useCallback)((()=>{j()}),[j]);return(0,a.useEffect)((()=>{b(),A()}),[b,A]),(0,a.useEffect)((()=>{let e=new Date,t=new Date("2023-11-23"),n=new Date(e.getFullYear()-1,e.getMonth(),e.getDate());n>t&&u(n.toISOString().split("T")[0])}),[o]),(0,v.jsxs)(I,{children:[(0,v.jsxs)("div",{children:[(0,v.jsxs)("select",{name:"usergroup",id:"usergroup",onChange:f,children:[(0,v.jsx)("option",{value:-1,children:"Gruppe ausw\xe4hlen"}),n.map((e=>(0,v.jsx)("option",{value:e.Usergroup_ID,children:e.Title},e.Usergroup_ID)))]}),(0,v.jsxs)("select",{name:"type",id:"type",onChange:y,children:[(0,v.jsx)("option",{value:"all",children:"Alle"}),(0,v.jsx)("option",{value:"practice",children:"\xdcben/Probe"}),(0,v.jsx)("option",{value:"event",children:"Auftritt"}),(0,v.jsx)("option",{value:"other",children:"sonstige Termine"})]}),(0,v.jsx)("input",{type:"date",defaultValue:o,onChange:e=>{u(e.target.value)}}),(0,v.jsx)("input",{type:"date",defaultValue:h,onChange:e=>{p(e.target.value)}})]}),(0,v.jsx)(_,{evaluations:m,filterFrom:o,filterTo:h,category:c,theme:t})]})},C=h.Ay.div`
    display: flex;
    flex-direction: column;
`,S=e=>{let{usergroup:t,evaluation:n}=e,r=0,l=0;const s=(e,t)=>({missing:(e[t][0]||0)+(e[t][1]||0)+(e[t][2]||0),attendance:(e[t][3]||0)+(e[t][4]||0),wout_notice:(e[t][0]||0)+(e[t][1]||0)}),i=(e,t,n)=>Math.round((e+t)/(e+n+t)*100),c=e=>e<0?"rgb(192, 0, 0)":["rgb(255, 0, 0)","rgb(255, 64, 0)","rgb(255, 128, 0)","rgb(255, 192, 0)","rgb(255, 255, 0)","rgb(192, 255, 0)","rgb(128, 255, 0)","rgb(0, 212, 0)","rgb(0, 170, 0)","rgb(0, 128, 0)"][Math.min(e,9)];(0,a.useEffect)((()=>{const e=document.getElementById(`ugroup_rating_${t}`.toLocaleLowerCase()),n=document.getElementById(`event_rating_${t}`.toLocaleLowerCase()),a=document.getElementById(`practice_rating_${t}`.toLocaleLowerCase()),r=document.getElementById(`other_rating_${t}`.toLocaleLowerCase());if(n){let e=parseInt(n.innerText.split(" ")[8].slice(0,-1));e=Math.floor(e/10),n.style.color=c(e)}if(a){let e=parseInt(a.innerText.split(" ")[8].slice(0,-1));e=Math.floor(e/10),a.style.color=c(e)}if(r){let e=parseInt(r.innerText.split(" ")[8].slice(0,-1));e=Math.floor(e/10),r.style.color=c(e)}if(e){let t=parseInt(e.innerText.split(" ")[1].slice(0,-1));t=Math.floor(t/10),e.style.color=c(t)}}),[t,r]);const d={attendence:0,missing:0,wout_notice:0,percentage:0,wout_percentage:0,rating:0,less:0,more:0,equal:0,comparrison:0},o={attendence:0,missing:0,wout_notice:0,percentage:0,wout_percentage:0,rating:0,less:0,more:0,equal:0,comparrison:0},u={attendence:0,missing:0,wout_notice:0,percentage:0,wout_percentage:0,rating:0,less:0,more:0,equal:0,comparrison:0};d.less=n.event.less,o.less=n.practice.less,u.less=n.other.less,d.more=n.event.more,o.more=n.practice.more,u.more=n.other.more,d.equal=n.event.equal,o.equal=n.practice.equal,u.equal=n.other.equal,d.comparrison=i(d.less,d.equal,d.more),o.comparrison=i(o.less,o.equal,o.more),u.comparrison=i(u.less,u.equal,u.more);for(let a in n)switch(a){case"event":({missing:d.missing,attendance:d.attendence,wout_notice:d.wout_notice}=s(n,a));break;case"practice":({missing:o.missing,attendance:o.attendence,wout_notice:o.wout_notice}=s(n,a));break;case"other":({missing:u.missing,attendance:u.attendence,wout_notice:u.wout_notice}=s(n,a))}if(0!==d.attendence||0!==o.attendence||0!==u.attendence)return d.percentage=Math.round(d.attendence/(d.attendence+d.missing)*100),o.percentage=Math.round(o.attendence/(o.attendence+o.missing)*100),u.percentage=Math.round(u.attendence/(u.attendence+u.missing)*100),d.wout_percentage=Math.round(d.wout_notice/(d.attendence+d.missing)*100),o.wout_percentage=Math.round(o.wout_notice/(o.attendence+o.missing)*100),u.wout_percentage=Math.round(u.wout_notice/(u.attendence+u.missing)*100),d.rating=Math.round((4*d.percentage+d.comparrison+20*(10-d.wout_percentage))/7),o.rating=Math.round((4*o.percentage+o.comparrison+20*(10-o.wout_percentage))/7),u.rating=Math.round((4*u.percentage+u.comparrison+20*(10-u.wout_percentage))/7),d.attendence>0&&(r+=4*d.rating,l+=4),o.attendence>0&&(r+=2*o.rating,l+=2),u.attendence>0&&(r+=1*u.rating,l+=1),r=Math.round(r/l),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:t}),d.attendence>0&&(0,v.jsxs)("p",{id:`event_rating_${t}`.toLocaleLowerCase(),children:["Auftritte Teilnahme: ",d.percentage,"%, Unentschuldigt: ",d.wout_percentage,"% Vergleich: ",d.comparrison,"%, gesamt: ",d.rating,"%"]}),o.attendence>0&&(0,v.jsxs)("p",{id:`practice_rating_${t}`.toLocaleLowerCase(),children:["Proben Teilnahme: ",o.percentage,"%, Unentschuldigt: ",o.wout_percentage,"% Vergleich: ",o.comparrison,"%, gesamt: ",o.rating,"%"]}),u.attendence>0&&(0,v.jsxs)("p",{id:`other_rating_${t}`.toLocaleLowerCase(),children:["Sonstige Teilnahme: ",u.percentage,"%, Unentschuldigt: ",u.wout_percentage,"% Vergleich: ",u.comparrison,"%, gesamt: ",u.rating,"%"]}),(0,v.jsxs)("p",{id:`ugroup_rating_${t}`.toLocaleLowerCase(),children:["Gesamtbewertung: ",r,"%"]})]})},T=e=>{let{theme:t}=e;const[n,l]=(0,a.useState)(new Array(0)),[s,i]=(0,a.useState)(2024),c=(0,a.useCallback)((async()=>{fetch(`${r.Hc}/api/v0/p_evaluation?year=${s}&api_token=${localStorage.getItem("api_token")}`).then((e=>e.json())).then((e=>{l(e)}))}),[s]);return(0,a.useEffect)((()=>{c()}),[s,c]),(0,v.jsxs)("div",{children:[(0,v.jsxs)("select",{onChange:e=>{i(e.target.value)},children:[(0,v.jsx)("option",{value:"2024",children:"2024"}),(0,v.jsx)("option",{value:"2025",children:"2025"})]}),Object.keys(n).map((e=>(0,v.jsx)(S,{usergroup:e,evaluation:n[e]},e)))]})},L=e=>{let{view:t,theme:n}=e;return{0:(0,v.jsx)(T,{theme:n}),1:(0,v.jsx)(D,{theme:n}),2:(0,v.jsx)(A,{theme:n})}[t]||(0,v.jsx)(A,{theme:n})},N=e=>{let{theme:t}=e;const[n,r]=(0,a.useState)(0),l=[{id:"evaluation_button_0",label:"Meine \xdcbersicht",permitted:!0},{id:"evaluation_button_1",label:"\xdcbersicht",permitted:(0,g._m)(8)},{id:"evaluation_button_2",label:"Auswertung",permitted:(0,g._m)(9)}],s=e=>{let t=e.target.id.split("_")[2];r(parseInt(t))};return(0,v.jsxs)(C,{children:[(0,v.jsx)(k.A,{children:l.map((e=>{let{id:n,label:a,permitted:r}=e;return r&&(0,v.jsx)(c.default,{id:n,onClick:s,theme:t,children:a},n)}))}),(0,v.jsx)(L,{view:n,theme:t})]})}},3445:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(5043),r=n(579);const l=e=>{const t=(0,a.useCallback)((t=>{e.onChange(t)}),[e]);return(0,r.jsx)("select",{onChange:t,children:e.options.map(((e,t)=>(0,r.jsx)("option",{value:e.value,children:e.label},t)))})}},2930:(e,t,n)=>{n.d(t,{A:()=>a});const a=n(5464).Ay.form`
    display: block;
    width: 100%;
    padding: 5px;
`},7921:(e,t,n)=>{n.d(t,{A:()=>a});const a=n(5464).Ay.div`
    display: block;
    padding: 2px;
    label {
        float: left;
        width: 25%;
        min-width: 100px;
    }
`},5709:(e,t,n)=>{n.d(t,{A:()=>a});const a=n(5464).Ay.nav`
    margin: 2px;
    padding: 2px;
    white-space: nowrap;
    border: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
    border-radius: 10px;
    overflow-y: scroll;
    max-height: 75vh;
    min-width: fit-content;
    width: auto;
    max-width: fit-content;


    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        white-space: normal;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: none;
    }

    ::-webkit-scrollbar-thumb {
        background: ${e=>{let{theme:t}=e;return t.primaryLight}};
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${e=>{let{theme:t}=e;return t.primaryHover}};
    }
`},6242:(e,t,n)=>{n.d(t,{A:()=>a});const a=n(5464).Ay.div`
    user-select: none;
    cursor: pointer;
    padding: 2px;
    border-radius: 5px;

    &:hover {
        background: ${e=>{let{theme:t}=e;return t.primaryHover}};
    }
`},3410:(e,t,n)=>{n.d(t,{A:()=>a});const a=n(5464).Ay.nav`
    display: flex;
    background-color: ${e=>{let{theme:t}=e;return t.primaryHover}};
    position: relative;
    padding: 5px;
    margin: 5px;
    border-radius: 20px;

    flex-wrap: wrap;
    justify-content: center;
`},7474:(e,t,n)=>{n.d(t,{rX:()=>h,rm:()=>p,HE:()=>u});const a=n.p+"static/media/polo.712b26af13af64644991.png",r=n.p+"static/media/polod.105b441f9c3ea18617b0.png",l=n.p+"static/media/shirt.fbcc2ca982466cf1415e.png",s=n.p+"static/media/suit.f2947921472d3fcaf13d.png",i=n.p+"static/media/suit_2.2577edd8cf36d52067fd.png",c=n.p+"static/media/cow.d8758b23c18f146ca6dd.png",d=n.p+"static/media/pants.0c00db6e187282389039.png";var o=n(579);const u=8,h=e=>{let t,{clothing:n}=e;switch(parseInt(n)){case 1:t=a;break;case 2:t=r;break;case 3:t=l;break;case 4:t=s;break;case 5:t=c;break;case 6:t=d;break;case 7:t=i}return t?(0,o.jsx)("img",{src:t,alt:"Uniform"}):(0,o.jsx)(o.Fragment,{})},p=e=>{let t,{clothing:n,onClick:u}=e;switch(parseInt(n)){default:case 0:t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHJAAAByQFhD1RcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAcVQTFRF////AKqqGrPMK7/VJrPQIbXWJrfVJbnTJLfVJLbTJrjUJbjTJLbUJbbTJbfTJrfSJbfTJrfUJLjUJrfTJbfTJLfTJbfTJbfTJbfSJbfTJbfTJbfTJbfTJbfTJbfTJrfTJ7jTKLjUKbjUK7nULbrVLrrVL7rVMLvVMbvVNLzWN73XOb3XO77XPL/YPb/YPr/YP7/YQ8HZRMHZRcHZSsPaS8PbTMTbTcTbT8XbUMXcUcXcUsbcVMfcWMjdWcjeWsneW8neXMneXcneXcreXsrfX8rfYMrfYcvfY8zgZ83gac3has7ha87hbs/icNDicdDic9HjddHjddLjdtLje9TkfNTlfdTlftTlgNXlhdfmidjni9nojNnojdnokdvpldzql93qnt/sn9/soeDsouDspuLtqeLuquPuq+PurOTur+XvseXvsubvuOjxvuryv+rywerywevzw+vzx+z0x+30y+70ze71z+/10fD20vD21PH21/L32PL32vP42/P43PP43fT44/b55Pb55Pb65vf66fj76vj77Pn77fn77/r88Pr88vv89Pv99fz99/z9+P3++f3++v3++/7+/P7+/f7//v//////L+Q+dAAAAB50Uk5TAAMKDBsfPExOYmRocHSKjqSwtr7Ay9XY5ery+Pn+bfME6gAAAvZJREFUWMOtV+dfE0EQvRDSKykEkrBEEsWo2AsWLNgVLICKYgMLFuyoUVA0VkBQiLm/1+Ru97ybLXf5Je9bZt+b7M3OzM5KEgd2tz8YjiaSyUQ0HPS77VJNaPZFUsiAVMTXbFXdFIh3IAY64oEmC3Kbtw1x0ea1meldrUiIVpdQ7oghU8QcfL2zHVlAu5On96SRJaQ97OiFkGWEGLG0taAa0EJ7YP1/bsfR4avnDm3rYuyB+n6KsnZouiyrWHx0OguXQRycMH65iSVZj58XYCQNZ+GA59f7SYZ4sQWcpj4fYP4Mrcg0Pm8EGaXLX6A/siqz8L7bSNOy2gbyf/sCkfwqTN19/kXzMAnqgpylF2zgGRE8zCu/L/7Av1c3G4leXP+gfvcQ/RixbCIexkF1q/0hADbwGLOnM5rpJDZ9BNSA4iAOrEXM3q2zfVNNy51Galzpf6B/Zf+q5NessPSALlftkz6wgR7MHdQb32IjSAXkqziIwCz/rlAL+t2uL6n6UgZwI5X+n4IOzlS/oXxAb7qFN/AOclN2yU2Xat/L4uRBveEYDot8meK6Jb959zhBCvNDjlrzS0FT/XlSGcs76cWgFDbTj5K2Il9irIalqIn+mlZK46zlqJQQ629q+hvM9YSUFOrHiLw0wiYkxQ52kc70ZwDxHIg+IVPA+qV+HiUhDOIw0fdxKVHhMd5T9eVTfEpYmEhvVAcPBJSgMJUXVQf7BRQ/q5gINuCLLSNw4GaUs4Y16iE+Eegr5Uw3lP94qoSwV+AgwmhpOmydleXfE6JM8zGaquEjDg90i/RKU6Xaeg2IMy8WAzqFDgLMq02nHplZKd5Zx9Xjq426XDXcV45xNstb93Kud4J+XEvXOXrteqcGDIzb2MErjgMXf8QxFKM8w9bHREOWgivYwRRTbxiy6DGvivxXdS7Zx9KnnWaDZgV75yr6+UHmBjxWRl3UdXz0bJ6pDzV+2K573K//wdGAJ0/9j676n30NeHjW//RtwOO7tuf/PxInRcIOjW3pAAAAAElFTkSuQmCC";break;case 1:t=a;break;case 2:t=r;break;case 3:t=l;break;case 4:t=s;break;case 5:t=c;break;case 6:t=d;break;case 7:t=i}return t?(0,o.jsx)("img",{src:t,alt:"Uniform",onClick:u}):(0,o.jsx)(o.Fragment,{})}},6327:(e,t,n)=>{n.d(t,{X:()=>a});const a=n(5464).Ay.table`
    margin: 5px;
    border: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
    border-radius: 10px;
    border-spacing: 0;
    width: auto;

    th {
        border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
        padding: 5px;
    }

    td {
        border-top: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
        padding: 5px;
        white-space: nowrap;
    }

    td:first-child {
        white-space: normal;
    }
`},5467:(e,t,n)=>{n.d(t,{_m:()=>a,sx:()=>r});const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=JSON.parse(localStorage.getItem("permissions")||"{}");var a;if(null===t){for(let r in n)if(n[r].includes(e))return!0}else if(null!==(a=n[t])&&void 0!==a&&a.includes(e))return!0;return!1},r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;for(let n of e)if(a(n,t))return!0;return!1}}}]);
//# sourceMappingURL=162.c4097cea.chunk.js.map