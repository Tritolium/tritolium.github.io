"use strict";(self.webpackChunkspz_planner=self.webpackChunkspz_planner||[]).push([[120],{2120:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var a,l=t(5043),r=t(262),s=t(3410),c=t(7528),i=t(197);const o=i.Ay.div(a||(a=(0,c.A)(["\n    border-radius: 5px;\n    padding: 5px 10px;\n    background: ",";\n    color: ",";\n    margin: 2px;\n    text-align: center;\n    width: fit-content;\n    font-size: 1.25em;\n    cursor: default;\n\n    :hover {\n        color: ",";\n    }\n"])),(e=>{let{theme:n}=e;return n.primaryHover}),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.primaryDark}));var d,u=t(3163),h=t(4294);const m=i.Ay.form(d||(d=(0,c.A)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-wrap: nowrap;\n\n    @media screen and (max-width: 720px) {\n        flex-direction: column;\n        > select {\n            width: 100%\n        }\n    }\n\n    > select {\n        max-height: 40px;\n        padding: 5px;\n        margin: 5px;\n    }\n    > img {\n        padding: 2px;\n        min-height: 21px;\n        height: 10vh;\n        max-height: 64px;\n    }\n"])));var x=t(591),p=t(579);const v=e=>{let{theme:n}=e;const[t,a]=(0,l.useState)(-1),[r,s]=(0,l.useState)(!1),[c,i]=(0,l.useState)(new Array(0)),[d,v]=(0,l.useState)(new Array(0)),[g,b]=(0,l.useState)(new Array(0)),[k,j]=(0,l.useState)(-1);(0,l.useEffect)((()=>{(async()=>{let e=await(0,u.kQ)("current");v(e)})(),(async()=>{let e=await(0,u.iT)();b(e),i(e[0].Usergroups)})()}),[]);const f=(0,l.useCallback)(((e,n)=>{a(n)}),[]),_=(0,l.useCallback)((e=>{"all"===e.target.value?j(-1):j(parseInt(e.target.value))}),[j]);return(0,p.jsxs)(m,{children:[(0,p.jsxs)("select",{id:"usergroup_select",onChange:_,children:[(0,p.jsx)("option",{value:"all",children:"Alle"},"usergroup_all"),c.map((e=>(0,p.jsx)("option",{value:e.Usergroup_ID,children:e.Title},"usergroup_".concat(e.Usergroup_ID))))]}),(0,p.jsx)("select",{id:"event_select",children:d.filter((e=>-1===k||e.Usergroup_ID===k)).map((e=>(0,p.jsxs)("option",{value:e.Event_ID,children:[e.Date,": ",e.Type," ",e.Location]},"event_".concat(e.Event_ID))))}),(0,p.jsx)("select",{id:"member_select",children:g.filter((e=>{if(-1===k)return!0;for(let n of e.Usergroups)if(parseInt(n.Usergroup_ID)===k)return n.Assigned;return!1})).map((e=>(0,p.jsxs)("option",{value:e.Member_ID,children:[e.Forename," ",e.Surname]},"member_".concat(e.Member_ID))))}),(0,p.jsx)(h.Ay,{states:3,attendence:t,onClick:f,theme:n}),(0,p.jsx)(x.A,{plusOne:r,onClick:()=>{s(!r)},active:1===t,theme:n}),(0,p.jsx)(o,{type:"submit",onClick:()=>{let e=document.getElementById("event_select"),n=document.getElementById("member_select"),a=e.options[e.selectedIndex].value,l=n.options[n.selectedIndex].value;(0,u.ie)(a,l,t,r)},children:"Abschicken"})]})},g=(0,l.lazy)((()=>t.e(322).then(t.bind(t,8322)))),b=(0,l.lazy)((()=>Promise.all([t.e(58),t.e(880)]).then(t.bind(t,9880)))),k=[{Type:"FT",Location:"Oelinghauserheide",Date:"14. Mai 2022",Day_of_Week:"Samstag"},{Type:"SF",Location:"Ennest",Date:"17. Juli 2022",Day_of_Week:"Sonntag"}],j=e=>{switch(e.view){default:case 0:return(0,p.jsx)(l.Suspense,{children:(0,p.jsx)(g,{dates:k,fullname:e.fullname,theme:e.theme})});case 1:return(0,p.jsx)(l.Suspense,{children:(0,p.jsx)(b,{dates:k,theme:e.theme})});case 2:return(0,p.jsx)(l.Suspense,{children:(0,p.jsx)(v,{theme:e.theme})})}},f=e=>{const[n,t]=(0,l.useState)(0),a=e=>{switch(e.target.id){default:case"date_button_0":t(0);break;case"date_button_1":t(1);break;case"date_button_2":t(2)}};return(0,p.jsxs)(p.Fragment,{children:[e.auth_level>1?(0,p.jsxs)(s.A,{children:[(0,p.jsx)(r.default,{id:"date_button_0",font_size:"1rem",onClick:a,children:"Eingabe"}),(0,p.jsx)(r.default,{id:"date_button_1",font_size:"1rem",onClick:a,children:"\xdcbersicht"}),e.auth_level>2?(0,p.jsx)(r.default,{id:"date_button_2",font_size:"1rem",onClick:a,children:"manuelle Eingabe"}):(0,p.jsx)(p.Fragment,{})]}):(0,p.jsx)(p.Fragment,{}),(0,p.jsx)(j,{view:n,fullname:e.fullname,theme:e.theme})]})}},4294:(e,n,t)=>{t.d(n,{Fc:()=>g,hA:()=>x,Jl:()=>p,Ug:()=>j,hf:()=>v,V9:()=>k,j_:()=>f,KB:()=>b,Ay:()=>w});var a,l=t(5043),r=t(423),s=t(5394),c=t(7528);const i=t(197).Ay.div(a||(a=(0,c.A)(["\n\n    position: relative;\n    height: 64px;\n    width: 64px;\n\n    :nth-child(1) {\n        z-index: 3;\n    }\n\n    :nth-child(1) {\n        z-index: 2;\n    }\n\n    .IconWrapper {\n        position: absolute;\n    }\n\n    svg {\n        height: 100%;\n        width: 100%;\n    }\n\n    .LoadingSpinner {\n        animation: spin 1s linear infinite;\n\n        @keyframes spin {\n            0% {transform: rotate(0deg);}\n            100% {transform: rotate(360deg);}\n        }\n    }\n"])));var o=t(3441),d=t(3156),u=t(2661),h=t(579);const m=e=>{switch(e.attendence){default:case-1:return(0,h.jsx)(x,{callback:e.callback,theme:e.theme});case 0:return(0,h.jsx)(v,{callback:e.callback,theme:e.theme});case 1:return(0,h.jsx)(p,{callback:e.callback,theme:e.theme});case 2:return(0,h.jsx)(g,{callback:e.callback,theme:e.theme})}},x=e=>{let{callback:n,size:t,theme:a}=e;return(0,h.jsxs)(o.Vx.Provider,{value:{color:a.blue,className:"IconWrapper"},children:[(0,h.jsx)(r.Edw,{size:"100%",onClick:n}),(0,h.jsx)(_,{callback:n})]})},p=e=>{let{callback:n,theme:t}=e;return(0,h.jsxs)(o.Vx.Provider,{value:{color:t.green,className:"IconWrapper"},children:[(0,h.jsx)(s.G3G,{size:"100%",onClick:n}),(0,h.jsx)(_,{callback:n})]})},v=e=>{let{callback:n,theme:t}=e;return(0,h.jsxs)(o.Vx.Provider,{value:{color:t.red,className:"IconWrapper"},children:[(0,h.jsx)(r.cW1,{size:"100%",onClick:n}),(0,h.jsx)(_,{callback:n})]})},g=e=>{let{callback:n,theme:t}=e;return(0,h.jsxs)(o.Vx.Provider,{value:{color:t.yellow,className:"IconWrapper"},children:[(0,h.jsx)(r.Edw,{size:"100%",onClick:n}),(0,h.jsx)(_,{callback:n})]})},b=e=>{let{callback:n}=e;return(0,h.jsxs)(o.Vx.Provider,{value:{color:"#904c77",className:"IconWrapper"},children:[(0,h.jsx)(r.wMi,{size:"100%",onClick:n}),(0,h.jsx)(_,{callback:n})]})},k=e=>{let{callback:n}=e;return(0,h.jsxs)(o.Vx.Provider,{value:{color:"#7d7abc",className:"IconWrapper"},children:[(0,h.jsx)(r.Edw,{size:"100%",onClick:n}),(0,h.jsx)(_,{callback:n})]})},j=e=>{let{callback:n}=e;return(0,h.jsxs)(o.Vx.Provider,{value:{color:"#00bd00",className:"IconWrapper"},children:[(0,h.jsx)(r.cW1,{size:"100%",onClick:n}),(0,h.jsx)(_,{callback:n})]})},f=e=>{let{callback:n,theme:t,className:a=""}=e;return(0,h.jsxs)(o.Vx.Provider,{value:{color:"white",className:"IconWrapper ".concat(a)},children:[(0,h.jsx)(d.waN,{size:"50%",onClick:n}),(0,h.jsx)(_,{callback:n,fill:t.greenRGB,r:"40.625%"})]})},_=e=>{let{callback:n,fill:t="white",r:a="35%"}=e;return(0,h.jsx)("svg",{size:"100%",className:"IconWrapper",children:(0,h.jsx)("circle",{cx:"50%",cy:"50%",r:a,fill:t,onClick:n})})},w=e=>{const[n,t]=(0,l.useState)(e.attendence),[a,r]=(0,l.useState)(!1),s=(0,l.useCallback)((async()=>{var a;let l=new Date,s=void 0!==e.event?new Date(null===(a=e.event)||void 0===a?void 0:a.Date):void 0;if(s&&e.event.Begin){var c;if(s.setHours(e.event.Begin.split(":")[0]),s.setMinutes(e.event.Begin.split(":")[1]),l.getTime()>s.getTime())return void alert("Du kannst deine Zusage nicht mehr \xe4ndern, da der Termin bereits begonnen hat. Solltest du vergessen haben abzusagen, schick bitte eine WhatsApp.");if("event"===(null===(c=e.event)||void 0===c?void 0:c.Category)&&l.getTime()>s.getTime()-54e5)return void alert("Du kannst deine Zusage nicht mehr \xe4ndern, da der Termin in weniger als 1,5 Stunden beginnt. Schick bitte eine WhatsApp zum An- oder Abmelden.")}let i=(n+1)%e.states;r(!0),await e.onClick(e.event_id,i),r(!1),t(i)}),[e,n]);return(0,l.useEffect)((()=>{t(e.attendence)}),[e.attendence]),(0,h.jsxs)(i,{className:"Terminzusage",children:[e.cancelled?(0,h.jsx)(m,{attendence:0,theme:e.theme}):(0,h.jsx)(m,{callback:s,attendence:n,theme:e.theme}),a?(0,h.jsx)(u.vTn,{className:"LoadingSpinner"}):null]})}},3410:(e,n,t)=>{t.d(n,{A:()=>r});var a,l=t(7528);const r=t(197).Ay.nav(a||(a=(0,l.A)(["\n    display: flex;\n    background-color: ",";\n    position: relative;\n    padding: 5px;\n    margin: 5px;\n    border-radius: 20px;\n\n    flex-wrap: wrap;\n    justify-content: center;\n"])),(e=>{let{theme:n}=e;return n.primaryHover}))},591:(e,n,t)=>{t.d(n,{A:()=>d});var a,l=t(3441),r=t(3156),s=t(7528);const c=t(197).Ay.div.attrs((e=>({className:e.className})))(a||(a=(0,s.A)(["\n    position: relative;\n    height: 64px;\n    width: 64px;\n\n    :nth-child(1) {\n        z-index: 3;\n    }\n\n    :nth-child(1) {\n        z-index: 2;\n    }\n\n    .IconWrapper {\n        position: absolute;\n        max-width: 64px;\n    }\n\n    .UserIcon {\n        top: 25%;\n        left: 25%;\n        height: 50%;\n        width: 50%;\n    }\n\n    svg {\n        top: 0;\n        height: 100%;\n        width: 100%;\n    }\n"])));var i=t(579);const o=e=>{let{callback:n,active:t,theme:a}=e;return(0,i.jsx)("svg",{className:"IconWrapper",children:(0,i.jsx)("circle",{cx:"50%",cy:"50%",r:"40.625%",fill:t?a.greenRGB:a.blue,onClick:n})})},d=e=>{let{active:n,plusOne:t,onClick:a,theme:s,className:d}=e;return(0,i.jsx)(c,{className:d,children:(0,i.jsxs)(l.Vx.Provider,{value:{color:"white",className:"IconWrapper UserIcon"},children:[t&&n?(0,i.jsx)(r.waN,{onClick:a,size:"50%"}):(0,i.jsx)(r.x$1,{size:"50%",onClick:a}),(0,i.jsx)(o,{callback:a,active:n,theme:s})]})})}}}]);
//# sourceMappingURL=120.b27f7b87.chunk.js.map