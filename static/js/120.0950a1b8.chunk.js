"use strict";(globalThis.webpackChunkspz_planner=globalThis.webpackChunkspz_planner||[]).push([[120],{2120:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(5043),l=a(262),r=a(3410),s=a(5464);const i=s.Ay.div`
    border-radius: 5px;
    padding: 5px 10px;
    background: ${e=>{let{theme:t}=e;return t.primaryHover}};
    color: ${e=>{let{theme:t}=e;return t.primaryLight}};
    margin: 2px;
    text-align: center;
    width: fit-content;
    font-size: 1.25em;
    cursor: default;

    :hover {
        color: ${e=>{let{theme:t}=e;return t.primaryDark}};
    }
`;var c=a(2439),o=a(4294);const d=s.Ay.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;

    @media screen and (max-width: 720px) {
        flex-direction: column;
        > select {
            width: 100%
        }
    }

    > select {
        max-height: 40px;
        padding: 5px;
        margin: 5px;
    }
    > img {
        padding: 2px;
        min-height: 21px;
        height: 10vh;
        max-height: 64px;
    }
`;var m=a(591),h=a(5467),u=a(579);const p=e=>{let{theme:t}=e;const[a,l]=(0,n.useState)(-1),[r,s]=(0,n.useState)(!1),[p,x]=(0,n.useState)(new Array(0)),[v,b]=(0,n.useState)(new Array(0)),[g,j]=(0,n.useState)(new Array(0)),[k,f]=(0,n.useState)(-1);(0,n.useEffect)((()=>{(async()=>{let e=await(0,c.kQ)("current");b(e)})(),(async()=>{fetch(`${c.Hc}/api/v0/member?api_token=${localStorage.getItem("api_token")}`).then((e=>e.json())).then((e=>{j(e)}),(()=>{j(new Array(0))}))})(),(async()=>{let e=await(0,c.iJ)();e=e.filter((e=>(0,h._m)(6,e.Association_ID))),x(e),f(e[0].Usergroup_ID)})()}),[]);const w=(0,n.useCallback)(((e,t)=>{l(t)}),[]),y=(0,n.useCallback)((e=>{f(parseInt(e.target.value))}),[f]);return(0,u.jsxs)(d,{children:[(0,u.jsx)("select",{id:"usergroup_select",onChange:y,children:p.map((e=>(0,u.jsx)("option",{value:e.Usergroup_ID,children:e.Title},`usergroup_${e.Usergroup_ID}`)))}),(0,u.jsx)("select",{id:"event_select",children:v.filter((e=>-1===k||e.Usergroup_ID===k)).map((e=>(0,u.jsxs)("option",{value:e.Event_ID,children:[e.Date,": ",e.Type," ",e.Location]},`event_${e.Event_ID}`)))}),(0,u.jsx)("select",{id:"member_select",children:g.filter((e=>{if(console.log("member",e),-1===k)return!0;for(let t of e.Usergroups)if(parseInt(t)===k)return!0;return!1})).map((e=>(0,u.jsxs)("option",{value:e.Member_ID,children:[e.Forename," ",e.Surname]},`member_${e.Member_ID}`)))}),(0,u.jsx)(o.Ay,{states:3,attendence:a,onClick:w,theme:t}),(0,u.jsx)(m.A,{plusOne:r,onClick:()=>{s(!r)},active:1===a,theme:t}),(0,u.jsx)(i,{type:"submit",onClick:()=>{let e=document.getElementById("event_select"),t=document.getElementById("member_select"),n=e.options[e.selectedIndex].value,l=t.options[t.selectedIndex].value;(0,c.ie)(n,l,a,r)},children:"Abschicken"})]})},x=(0,n.lazy)((()=>a.e(322).then(a.bind(a,8322)))),v=(0,n.lazy)((()=>Promise.all([a.e(58),a.e(880)]).then(a.bind(a,9880)))),b=e=>{const t={0:(0,u.jsx)(x,{fullname:e.fullname,theme:e.theme}),1:(0,u.jsx)(v,{theme:e.theme}),2:(0,u.jsx)(p,{theme:e.theme})};return(0,u.jsx)(n.Suspense,{fallback:(0,u.jsx)("div",{children:"L\xe4dt..."}),children:t[e.view]})},g=e=>{const[t,a]=(0,n.useState)(0),s=e=>{let t=e.target.id.split("_")[2];a(parseInt(t))},i=[{id:"date_button_0",label:"Eingabe",permitted:!0},{id:"date_button_1",label:"\xdcbersicht",permitted:(0,h._m)(7)},{id:"date_button_2",label:"manuelle Eingabe",permitted:(0,h._m)(6)}];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.A,{children:i.map((e=>{let{id:t,label:a,permitted:n}=e;return n&&(0,u.jsx)(l.default,{type:"button",id:t,onClick:s,children:a},t)}))}),(0,u.jsx)(b,{view:t,fullname:e.fullname,theme:e.theme})]})}},4294:(e,t,a)=>{a.d(t,{Fc:()=>x,hA:()=>h,Jl:()=>u,Ug:()=>g,hf:()=>p,V9:()=>b,j_:()=>j,KB:()=>v,Ay:()=>f});var n=a(5043),l=a(423),r=a(5394);const s=a(5464).Ay.div`

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
`;var i=a(3441),c=a(3156),o=a(2661),d=a(579);const m=e=>{switch(e.attendence){default:case-1:return(0,d.jsx)(h,{callback:e.callback,theme:e.theme});case 0:return(0,d.jsx)(p,{callback:e.callback,theme:e.theme});case 1:return(0,d.jsx)(u,{callback:e.callback,theme:e.theme});case 2:return(0,d.jsx)(x,{callback:e.callback,theme:e.theme})}},h=e=>{let{callback:t,size:a,theme:n,overlay:r,className:s}=e,c=[n.green,n.red,n.darkred];return(0,d.jsx)("div",{className:`ButtonWrapper ${s}`,children:(0,d.jsxs)(i.Vx.Provider,{value:{color:n.blue,className:"IconWrapper Attendence_none"},children:[(0,d.jsx)(l.Edw,{size:"100%",onClick:t}),(0,d.jsx)(k,{callback:t,fill:c[r]})]})})},u=e=>{let{callback:t,theme:a,className:n}=e;return(0,d.jsx)("div",{className:`ButtonWrapper ${n}`,children:(0,d.jsxs)(i.Vx.Provider,{value:{color:a.green,className:"IconWrapper "},children:[(0,d.jsx)(r.G3G,{size:"100%",onClick:t}),(0,d.jsx)(k,{callback:t})]})})},p=e=>{let{callback:t,theme:a,className:n}=e;return(0,d.jsx)("div",{className:`ButtonWrapper ${n}`,children:(0,d.jsxs)(i.Vx.Provider,{value:{color:a.red,className:"IconWrapper"},children:[(0,d.jsx)(l.cW1,{size:"100%",onClick:t}),(0,d.jsx)(k,{callback:t})]})})},x=e=>{let{callback:t,theme:a,className:n}=e;return(0,d.jsx)("div",{className:`ButtonWrapper ${n}`,children:(0,d.jsxs)(i.Vx.Provider,{value:{color:a.yellow,className:"IconWrapper"},children:[(0,d.jsx)(l.Edw,{size:"100%",onClick:t}),(0,d.jsx)(k,{callback:t})]})})},v=e=>{let{callback:t}=e;return(0,d.jsx)("div",{className:"ButtonWrapper",children:(0,d.jsxs)(i.Vx.Provider,{value:{color:"#904c77",className:"IconWrapper"},children:[(0,d.jsx)(l.wMi,{size:"100%",onClick:t}),(0,d.jsx)(k,{callback:t})]})})},b=e=>{let{callback:t}=e;return(0,d.jsxs)(i.Vx.Provider,{value:{color:"#7d7abc",className:"IconWrapper"},children:[(0,d.jsx)(l.Edw,{size:"100%",onClick:t}),(0,d.jsx)(k,{callback:t})]})},g=e=>{let{callback:t}=e;return(0,d.jsxs)(i.Vx.Provider,{value:{color:"#00bd00",className:"IconWrapper"},children:[(0,d.jsx)(l.cW1,{size:"100%",onClick:t}),(0,d.jsx)(k,{callback:t})]})},j=e=>{let{callback:t,theme:a,className:n=""}=e;return(0,d.jsxs)(i.Vx.Provider,{value:{color:"white",className:`IconWrapper ${n}`},children:[(0,d.jsx)(c.waN,{size:"50%",onClick:t}),(0,d.jsx)(k,{callback:t,fill:a.greenRGB,r:"40.625%"})]})},k=e=>{let{callback:t,fill:a="white",r:n="35%"}=e;return(0,d.jsx)("svg",{size:"100%",className:"IconWrapper",children:(0,d.jsx)("circle",{cx:"50%",cy:"50%",r:n,fill:a,onClick:t})})},f=e=>{const[t,a]=(0,n.useState)(e.attendence),[l,r]=(0,n.useState)(!1),i=(0,n.useCallback)((async()=>{var n;let l=new Date,s=void 0!==e.event?new Date(null===(n=e.event)||void 0===n?void 0:n.Date):void 0;if(s&&e.event.Begin){var i;if(s.setHours(e.event.Begin.split(":")[0]),s.setMinutes(e.event.Begin.split(":")[1]),l.getTime()>s.getTime())return void alert("Du kannst deine Zusage nicht mehr \xe4ndern, da der Termin bereits begonnen hat. Solltest du vergessen haben abzusagen, schick bitte eine WhatsApp.");if("event"===(null===(i=e.event)||void 0===i?void 0:i.Category)&&l.getTime()>s.getTime()-54e5)return void alert("Du kannst deine Zusage nicht mehr \xe4ndern, da der Termin in weniger als 1,5 Stunden beginnt. Schick bitte eine WhatsApp zum An- oder Abmelden.")}let c=(t+1)%e.states;r(!0),await e.onClick(e.event_id,c),r(!1),a(c)}),[e,t]);return(0,n.useEffect)((()=>{a(e.attendence)}),[e.attendence]),(0,d.jsxs)(s,{className:"Terminzusage",children:[e.cancelled?(0,d.jsx)(m,{attendence:0,theme:e.theme}):(0,d.jsx)(m,{callback:i,attendence:t,theme:e.theme}),l?(0,d.jsx)(o.vTn,{className:"LoadingSpinner"}):null]})}},3410:(e,t,a)=>{a.d(t,{A:()=>n});const n=a(5464).Ay.nav`
    display: flex;
    background-color: ${e=>{let{theme:t}=e;return t.primaryHover}};
    position: relative;
    padding: 5px;
    margin: 5px;
    border-radius: 20px;

    flex-wrap: wrap;
    justify-content: center;
`},591:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(3441),l=a(3156);const r=a(5464).Ay.div.attrs((e=>({className:e.className})))`
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
        max-width: 64px;
    }

    .UserIcon {
        top: 25%;
        left: 25%;
        height: 50%;
        width: 50%;
    }

    svg {
        top: 0;
        height: 100%;
        width: 100%;
    }
`;var s=a(579);const i=e=>{let{callback:t,active:a,theme:n}=e;return(0,s.jsx)("svg",{className:"IconWrapper",children:(0,s.jsx)("circle",{cx:"50%",cy:"50%",r:"40.625%",fill:a?n.greenRGB:n.blue,onClick:t})})},c=e=>{let{active:t,plusOne:a,onClick:c,theme:o,className:d}=e;return(0,s.jsx)(r,{className:d,children:(0,s.jsxs)(n.Vx.Provider,{value:{color:"white",className:"IconWrapper UserIcon"},children:[a&&t?(0,s.jsx)(l.waN,{onClick:c,size:"50%"}):(0,s.jsx)(l.x$1,{size:"50%",onClick:c}),(0,s.jsx)(i,{callback:c,active:t,theme:o})]})})}},5467:(e,t,a)=>{a.d(t,{_m:()=>n,sx:()=>l});const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const a=JSON.parse(localStorage.getItem("permissions")||"{}");var n;if(null===t){for(let l in a)if(a[l].includes(e))return!0}else if(null!==(n=a[t])&&void 0!==n&&n.includes(e))return!0;return!1},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;for(let a of e)if(n(a,t))return!0;return!1}}}]);
//# sourceMappingURL=120.0950a1b8.chunk.js.map