"use strict";(globalThis.webpackChunkspz_planner=globalThis.webpackChunkspz_planner||[]).push([[775],{5775:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var l=n(5043),r=n(262),i=n(2930),a=n(7921),o=n(5709),s=n(2439),d=n(5464);const m=d.Ay.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;

    form {
        display: flex;
        flex-direction: column;
    }
`,c=d.Ay.div`
    user-select: none;
    cursor: pointer;
    padding: 2px;
    border-radius: 5px;

    &:hover {
        background: ${e=>{let{theme:t}=e;return t.primaryHover}};
    }
`;var u=n(579);const h=e=>{let{members:t,onSelect:n}=e;return(0,u.jsx)(o.A,{children:t.map((e=>(0,u.jsx)(p,{onSelect:n,member:e},e.Member_ID)))})},p=e=>{let{member:t,onSelect:n}=e;const r=(0,l.useCallback)((()=>{n(t.Member_ID)}),[n,t.Member_ID]);return(0,u.jsxs)(c,{onClick:r,children:[t.Surname,", ",t.Forename]})},b=e=>{let{member:t,reload:n}=e;const[o,d]=(0,l.useState)([]);(0,l.useEffect)((()=>{document.getElementById("memberform_form").reset(),document.getElementById("auth_level").selectedIndex=null===t||void 0===t?void 0:t.Auth_level,fetch(`${s.Hc}/api/v0/association?api_token=${localStorage.getItem("api_token")}`).then((e=>e.json())).then((e=>{d(e)}))}),[t]);return(0,u.jsxs)(i.A,{id:"memberform_form",children:[(0,u.jsxs)(a.A,{children:[(0,u.jsx)("label",{htmlFor:"forename",children:"Vorname:"}),(0,u.jsx)("input",{type:"text",name:"forename",id:"forename",defaultValue:null===t||void 0===t?void 0:t.Forename})]}),(0,u.jsxs)(a.A,{children:[(0,u.jsx)("label",{htmlFor:"surname",children:"Nachname:"}),(0,u.jsx)("input",{type:"text",name:"surname",id:"surname",defaultValue:null===t||void 0===t?void 0:t.Surname})]}),(0,u.jsxs)(a.A,{children:[(0,u.jsx)("label",{htmlFor:"auth_level",children:"Zugriffslevel:"}),(0,u.jsxs)("select",{name:"auth_level",id:"auth_level",children:[(0,u.jsx)("option",{value:"0",children:"ohne"}),(0,u.jsx)("option",{value:"1",children:"Mitglied"}),(0,u.jsx)("option",{value:"2",children:"Vorstand"}),(0,u.jsx)("option",{value:"3",children:"Admin"})]})]}),(0,u.jsxs)(a.A,{children:[(0,u.jsx)("label",{htmlFor:"nicknames",children:"Kurz:"}),(0,u.jsx)("input",{type:"text",name:"nicknames",id:"nicknames",defaultValue:null===t||void 0===t?void 0:t.Nicknames})]}),(0,u.jsxs)(a.A,{children:[(0,u.jsx)("label",{htmlFor:"instrument",children:"Instrument:"}),(0,u.jsx)("input",{type:"text",name:"instrument",id:"instrument",defaultValue:null===t||void 0===t?void 0:t.Instrument})]}),(0,u.jsxs)(a.A,{children:[(0,u.jsx)("label",{htmlFor:"birthdate",children:"Geburtstag:"}),(0,u.jsx)("input",{type:"date",id:"birthdate",defaultValue:null===t||void 0===t?void 0:t.Birthdate})]}),void 0!==t?(0,u.jsx)(u.Fragment,{}):(0,u.jsxs)(a.A,{children:[(0,u.jsx)("label",{htmlFor:"associations",children:"Verein:"}),(0,u.jsx)("select",{name:"associations",id:"associations",children:o.map((e=>(0,u.jsx)("option",{value:e.Association_ID,children:e.Title},e.Association_ID)))})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(r.default,{onClick:async e=>{e.preventDefault(),n()},children:"Abbrechen"}),(0,u.jsx)(r.default,{onClick:async e=>{e.preventDefault();let l=document.getElementById("forename").value,r=document.getElementById("surname").value,i=document.getElementById("auth_level").options[document.getElementById("auth_level").selectedIndex].value,a=document.getElementById("nicknames").value,o=document.getElementById("instrument").value,d=document.getElementById("birthdate").value;void 0!==t?fetch(`${s.Hc}/api/v0/member/${t.Member_ID}?api_token=${localStorage.getItem("api_token")}`,{method:"PUT",body:JSON.stringify({Forename:l,Surname:r,Auth_level:i,Nicknames:a,Birthdate:d,Instrument:o})}):fetch(`${s.Hc}/api/v0/member?api_token=${localStorage.getItem("api_token")}`,{method:"POST",body:JSON.stringify({Forename:l,Surname:r,Auth_level:i,Nicknames:a,Birthdate:d})}).then((e=>e.json())).then((e=>{(async e=>{let t={},n=document.getElementById("associations").options[document.getElementById("associations").selectedIndex].value;t[`${e}`]={},t[`${e}`][`${n}`]=!0,await(0,s.Ts)(t)})(e.Member_ID).then((()=>n()))}))},children:"Speichern"})]})]})},x=e=>{let{members:t,reload:n}=e;const[r,i]=(0,l.useState)(),a=(0,l.useCallback)((()=>{i(void 0),n()}),[n]),o=(0,l.useCallback)((e=>{fetch(`${s.Hc}/api/v0/member/${e}?api_token=${localStorage.getItem("api_token")}`).then((e=>e.json())).then((e=>{i(e)}))}),[]);return(0,u.jsxs)(m,{children:[(0,u.jsx)(h,{onSelect:o,members:t}),(0,u.jsx)(b,{member:r,reload:a})]})};var v=n(3410),f=n(5467);const j=(0,l.lazy)((()=>n.e(656).then(n.bind(n,5656)))),g=e=>{let{view:t,members:n,reload:r}=e;const i={0:(0,u.jsx)(j,{members:n}),1:(0,u.jsx)(x,{members:n,reload:r})},a={0:(0,u.jsx)("div",{children:"\xdcbersicht l\xe4dt"}),1:(0,u.jsx)("div",{children:"Stammdaten laden"})};return(0,u.jsx)(l.Suspense,{fallback:a[t],children:i[t]})},k=e=>{const[t,n]=(0,l.useState)(0),[i,a]=(0,l.useState)(new Array(0)),o=(0,l.useCallback)((async()=>{fetch(`${s.Hc}/api/v0/member?api_token=${localStorage.getItem("api_token")}`).then((e=>e.json())).then((e=>{a(e)}))}),[]);(0,l.useEffect)((()=>{o()}),[o]);const d=(0,l.useCallback)((()=>{o()}),[o]),m=e=>{let t=e.target.id.split("_")[2];n(parseInt(t))},c=[{id:"member_button_0",label:"\xdcbersicht",permitted:(0,f._m)(1),onClick:m},{id:"member_button_1",label:"Stammdaten",permitted:(0,f._m)(2),onClick:m}];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v.A,{children:c.map((e=>{let{id:t,label:n,permitted:l,onClick:i}=e;return l&&(0,u.jsx)(r.default,{type:"button",id:t,onClick:i,children:n},t)}))}),(0,u.jsx)(g,{view:t,members:i,reload:d})]})}},2930:(e,t,n)=>{n.d(t,{A:()=>l});const l=n(5464).Ay.form`
    display: block;
    width: 100%;
    padding: 5px;
`},7921:(e,t,n)=>{n.d(t,{A:()=>l});const l=n(5464).Ay.div`
    display: block;
    padding: 2px;
    label {
        float: left;
        width: 25%;
        min-width: 100px;
    }
`},5709:(e,t,n)=>{n.d(t,{A:()=>l});const l=n(5464).Ay.nav`
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
`},3410:(e,t,n)=>{n.d(t,{A:()=>l});const l=n(5464).Ay.nav`
    display: flex;
    background-color: ${e=>{let{theme:t}=e;return t.primaryHover}};
    position: relative;
    padding: 5px;
    margin: 5px;
    border-radius: 20px;

    flex-wrap: wrap;
    justify-content: center;
`},5467:(e,t,n)=>{n.d(t,{_m:()=>l,sx:()=>r});const l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=JSON.parse(localStorage.getItem("permissions")||"{}");var l;if(null===t){for(let r in n)if(n[r].includes(e))return!0}else if(null!==(l=n[t])&&void 0!==l&&l.includes(e))return!0;return!1},r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;for(let n of e)if(l(n,t))return!0;return!1}}}]);
//# sourceMappingURL=775.217643ab.chunk.js.map