"use strict";(globalThis.webpackChunkspz_planner=globalThis.webpackChunkspz_planner||[]).push([[676],{3676:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var i=n(5043);const l=n(5464).Ay.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: ${e=>{let{theme:t}=e;return t.primaryDark}};
    height: 100vh;
    text-align: left;
    padding: calc(5% + 2rem) 2rem 2rem 2rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    transition: transform 0.3s ease-in-out;

    transform: ${e=>{let{open:t}=e;return t?"translateX(0)":"translateX(-100%)"}};
    
    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        width: 100%;
        padding: calc(10% + 2rem) 2rem 2rem 2rem;
    }

    button {
        /*font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: 0.05rem;
        color: ${e=>{let{theme:t}=e;return t.primaryDark}};
        background: ${e=>{let{theme:t}=e;return t.primaryLight}};
        border: none;
        border-radius: 15px;
        padding: 1px 5px;
        margin: 2px;
        text-align: center;
        transition: color 0.3s linear*/

        @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover {
            color: ${e=>{let{theme:t}=e;return t.primaryHover}};
        }
    }
`;var r=n(262),o=n(5467),a=n(579);const u=e=>{let{open:t,navigate:n,auth_level:u,setOpen:m,secure:d}=e;const s="1.5rem",c=(0,i.useCallback)((e=>{m(!1),n(e)}),[n,m]),p=[{id:"main_button_0",label:"Startseite",minAuth:1,permitted:void 0,onClick:c},{id:"main_button_1",label:"Anwesenheiten",minAuth:1,permitted:void 0,onClick:c},{id:"main_button_2",label:"Urlaub/Abmeldung",minAuth:1,permitted:void 0,onClick:c},{id:"main_button_3",label:"Auswertung",minAuth:3,permitted:!0,onClick:c},{id:"main_button_4",label:"Mitglieder",minAuth:1,permitted:(0,o.sx)([1,2]),onClick:c},{id:"main_button_5",label:"Termine",minAuth:1,permitted:void 0,onClick:c},{id:"main_button_6",label:"Noten",minAuth:1,permitted:void 0,onClick:d?c:()=>{alert("Diese Funktion ist nur noch zug\xe4nglich, wenn ein Passwort gesetzt wurde.")}},{id:"main_button_7",label:"Bestellungen",minAuth:1,permitted:void 0,onClick:c},{id:"main_button_8",label:"Verwaltung",minAuth:3,permitted:void 0,onClick:c},{id:"main_button_9",label:"Einstellungen",minAuth:1,permitted:void 0,onClick:c},{id:"main_button_10",label:"Hilfe/Datenschutz",minAuth:1,permitted:void 0,onClick:c}];return(0,a.jsx)(l,{open:t,children:p.map((e=>{let{id:t,label:n,minAuth:i,permitted:l,onClick:o}=e;return void 0===l?u>=i&&(0,a.jsx)(r.default,{type:"button",id:t,font_size:s,onClick:o,children:n},t):l&&(0,a.jsx)(r.default,{type:"button",id:t,font_size:s,onClick:o,children:n},t)}))})}},5467:(e,t,n)=>{n.d(t,{_m:()=>i,sx:()=>l});const i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=JSON.parse(localStorage.getItem("permissions")||"{}");var i;if(null===t){for(let l in n)if(n[l].includes(e))return!0}else if(null!==(i=n[t])&&void 0!==i&&i.includes(e))return!0;return!1},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;for(let n of e)if(i(n,t))return!0;return!1}}}]);
//# sourceMappingURL=676.67caf159.chunk.js.map