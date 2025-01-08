"use strict";(globalThis.webpackChunkspz_planner=globalThis.webpackChunkspz_planner||[]).push([[561],{9561:(e,t,l)=>{l.r(t),l.d(t,{default:()=>fe});var i=l(5043),n=l(262),r=l(3410),o=l(5464);const s=o.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,a=o.Ay.div`
    width: 100%;
`;var d=l(2930),c=l(7921),u=l(5709),m=l(6242),h=l(2439);const p=o.Ay.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
`;var x=l(579);const v=e=>{let{associations:t,onSelect:l}=e;return(0,x.jsx)(u.A,{children:t.map((e=>(0,x.jsx)(g,{onSelect:l,association:e},e.Title)))})},g=e=>{let{association:t,onSelect:l}=e;const n=(0,i.useCallback)((()=>{l(t.Association_ID)}),[l,t.Association_ID]);return(0,x.jsx)(m.A,{onClick:n,children:t.Title})},j=e=>{let{association:t,members:l,reload:r}=e;(0,i.useEffect)((()=>{document.getElementById("association_form").reset(),document.getElementById("firstchair").selectedIndex=null===l||void 0===l?void 0:l.findIndex((e=>(null===t||void 0===t?void 0:t.FirstChair)===e.Member_ID)),document.getElementById("clerk").selectedIndex=null===l||void 0===l?void 0:l.findIndex((e=>(null===t||void 0===t?void 0:t.Clerk)===e.Member_ID)),document.getElementById("treasurer").selectedIndex=null===l||void 0===l?void 0:l.findIndex((e=>(null===t||void 0===t?void 0:t.Treasurer)===e.Member_ID))}));return(0,x.jsxs)(d.A,{id:"association_form",children:[(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"title",children:"Vereinsname:"}),(0,x.jsx)("input",{type:"text",name:"title",id:"title",defaultValue:null===t||void 0===t?void 0:t.Title})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"firstchair",children:"Vorsitz:"}),(0,x.jsx)("select",{id:"firstchair",children:l.map((e=>(0,x.jsxs)("option",{value:e.Member_ID,children:[e.Forename," ",e.Surname]},`fcmember_${e.Member_ID}`)))})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"clerk",children:"Schrift-/Gesch\xe4ftsf\xfchrer/-in:"}),(0,x.jsx)("select",{id:"clerk",children:l.map((e=>(0,x.jsxs)("option",{value:e.Member_ID,children:[e.Forename," ",e.Surname]},`clmember_${e.Member_ID}`)))})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"treasurer",children:"Kassierer/-in:"}),(0,x.jsx)("select",{id:"treasurer",children:l.map((e=>(0,x.jsxs)("option",{value:e.Member_ID,children:[e.Forename," ",e.Surname]},`trmember_${e.Member_ID}`)))})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(n.default,{onClick:async e=>{e.preventDefault(),r()},children:"Abbrechen"}),(0,x.jsx)(n.default,{onClick:async e=>{var l,i,n;e.preventDefault();let o=document.getElementById("title").value,s=null===(l=document.getElementById("firstchair").options[document.getElementById("firstchair").selectedIndex])||void 0===l?void 0:l.value,a=null===(i=document.getElementById("clerk").options[document.getElementById("clerk").selectedIndex])||void 0===i?void 0:i.value,d=null===(n=document.getElementById("treasurer").options[document.getElementById("treasurer").selectedIndex])||void 0===n?void 0:n.value;void 0!==t?await(0,h.xN)(t.Association_ID,o,s,a,d):await(0,h.GO)(o,s,a,d),r()},children:"Speichern"})]})]})},y=()=>{const[e,t]=(0,i.useState)(new Array(0)),[l,n]=(0,i.useState)(new Array(0)),[r,o]=(0,i.useState)(-1),s=(0,i.useCallback)((async()=>{let e=await(0,h.Tk)();t(void 0!==e?e:new Array(0))}),[]),a=(0,i.useCallback)((async()=>{fetch(`${h.Hc}/api/v0/member?api_token=${localStorage.getItem("api_token")}`).then((e=>e.json())).then((e=>{n(e)}),(()=>{n(new Array(0))}))}),[]),d=(0,i.useCallback)((()=>{o(-1),s(),a()}),[s,a]),c=(0,i.useCallback)((e=>{o(e)}),[]);return(0,i.useEffect)((()=>{s(),a()}),[s,a]),(0,x.jsxs)(p,{children:[(0,x.jsx)(v,{onSelect:c,associations:e}),(0,x.jsx)(j,{association:e.find((e=>e.Association_ID===r)),members:l,reload:d})]})};var f=l(3441),b=l(423),k=l(5394);const I=e=>{let{callback:t}=e;return(0,x.jsxs)(f.Vx.Provider,{value:{color:"#00bd00",className:"IconWrapper"},children:[(0,x.jsx)(k.G3G,{size:"100%",onClick:t}),(0,x.jsx)(A,{callback:t})]})},_=e=>{let{callback:t}=e;return(0,x.jsxs)(f.Vx.Provider,{value:{color:"#fe423e",className:"IconWrapper"},children:[(0,x.jsx)(b.cW1,{size:"100%",onClick:t}),(0,x.jsx)(A,{callback:t})]})},A=e=>{let{callback:t}=e;return(0,x.jsx)("svg",{size:"100%",className:"IconWrapper",children:(0,x.jsx)("circle",{cx:"50%",cy:"50%",r:"35%",fill:"white",onClick:t})})};var w=l(6327);const S=o.Ay.div`
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 100%;

    img {
        max-height: 1.5rem;
    }

    td {
        text-align: center;
        :nth-child(1) {
            z-index: 2;
        }
    }

    button {
        width: fit-content;
        align-self: center;
    }

    .IconWrapper {
        max-height: 1.8rem;
        max-width: 1.8rem;
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
    }

    svg {
        height: 100%;
        width: 100%;
    }
`,D=o.Ay.th`
    display: table-cell;
    
    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        display: none;
    }
`,C=o.Ay.th`
    display: none;
    
    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        display: table-cell;
    }
`,E=(o.Ay.div`
    display: none;

    padding: 5px;
    
    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        display: flex;
        flex-direction: column;
    }
`,e=>{let{association:t}=e;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(D,{children:t.Title}),(0,x.jsx)(C,{children:t.Association_ID})]})}),B=e=>{let{member_id:t,association_id:l,initial:n,onClick:r}=e;const[o,s]=(0,i.useState)(n),a=(0,i.useCallback)((()=>{let e=!o;s(e),r(t,l,e)}),[o,t,l,r]);return(0,x.jsx)($,{assigned:o,callback:a})},$=e=>{let{assigned:t,callback:l}=e;return(0,x.jsx)("td",{onClick:l,children:t?(0,x.jsx)(I,{}):(0,x.jsx)(_,{})})},T=()=>{var e,t;const[l,r]=(0,i.useState)(new Array(0)),[o,s]=(0,i.useState)({}),a=(0,i.useCallback)((async()=>{(0,h._e)().then((e=>{void 0!==e&&r(e)}))}),[]),d=(0,i.useCallback)(((e,t,l)=>{let i={...o};void 0===i[`${e}`]&&(i[`${e}`]={}),i[`${e}`][`${t}`]=l,s(i)}),[o]),c=(0,i.useCallback)((()=>{(0,h.Ts)(o)}),[o]);return(0,i.useEffect)((()=>{a()}),[a]),(0,x.jsxs)(S,{children:[(0,x.jsx)(n.default,{onClick:c,children:"Speichern"}),(0,x.jsxs)(w.X,{children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"Name:"}),null===(e=l[0])||void 0===e||null===(t=e.Associations)||void 0===t?void 0:t.map((e=>(0,x.jsx)(E,{association:e},`h_${e.Association_ID}`)))]})}),(0,x.jsx)("tbody",{children:l.map((e=>{var t;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:e.Fullname}),null===(t=e.Associations)||void 0===t?void 0:t.map((t=>(0,x.jsx)(B,{member_id:e.Member_ID,association_id:t.Association_ID,initial:t.Assigned,onClick:d},`${t.Association_ID}_${e.Member_ID}`)))]},e.Member_ID)}))})]})]})},F=o.Ay.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
`,M=e=>{let{datetemplates:t,onSelect:l}=e;return(0,x.jsx)(u.A,{children:t.map((e=>(0,x.jsx)(V,{onSelect:l,datetemplate:e},e.Title)))})},V=e=>{let{onSelect:t,datetemplate:l}=e;const n=(0,i.useCallback)((()=>{t(l.DateTemplate_ID)}),[t,l.DateTemplate_ID]);return(0,x.jsx)(m.A,{onClick:n,children:l.Title})},z=e=>{let{datetemplate:t,usergroups:l,reload:r}=e;return(0,i.useEffect)((()=>{document.getElementById("datetemplate_form").reset();let e=document.getElementById("category");for(let l=0;l<e.options.length;l++)e.options[l].value===(null===t||void 0===t?void 0:t.Category)&&(e.selectedIndex=l);document.getElementById("usergroup").selectedIndex=null===l||void 0===l?void 0:l.findIndex((e=>(null===e||void 0===e?void 0:e.Usergroup_ID)===(null===t||void 0===t?void 0:t.Usergroup_ID)))}),[t,l]),(0,x.jsxs)(d.A,{id:"datetemplate_form",children:[(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"title",children:"Bezeichnung:"}),(0,x.jsx)("input",{type:"text",name:"title",id:"title",defaultValue:null===t||void 0===t?void 0:t.Title})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"description",children:"Beschreibung"}),(0,x.jsx)("textarea",{name:"description",id:"description",cols:"30",rows:"3",defaultValue:void 0===t?"":t.Description})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"category",children:"Art:"}),(0,x.jsxs)("select",{name:"category",id:"category",children:[(0,x.jsx)("option",{value:"event",children:"Auftritt"}),(0,x.jsx)("option",{value:"practice",children:"\xdcben/Probe"}),(0,x.jsx)("option",{value:"other",children:"Sonstiges"})]})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"type",children:"Bezeichnung:"}),(0,x.jsx)("input",{type:"text",name:"type",id:"type",defaultValue:null===t||void 0===t?void 0:t.Type})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"location",children:"Ort:"}),(0,x.jsx)("input",{type:"text",name:"location",id:"location",defaultValue:null===t||void 0===t?void 0:t.Location})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"begin",children:"Startzeit:"}),(0,x.jsx)("input",{type:"time",name:"begin",id:"begin",step:"1",defaultValue:null===t||void 0===t?void 0:t.Begin})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"departure",children:"Abfahrt:"}),(0,x.jsx)("input",{type:"time",name:"departure",id:"departure",step:"1",defaultValue:null===t||void 0===t?void 0:t.Departure})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"leave_dep",children:"R\xfcckfahrt:"}),(0,x.jsx)("input",{type:"time",name:"leave_dep",id:"leave_dep",step:"1",defaultValue:null===t||void 0===t?void 0:t.Leave_dep})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"usergroup",children:"Sichtbarkeit:"}),(0,x.jsx)("select",{name:"usergroup",id:"usergroup",children:l.map((e=>(0,x.jsx)("option",{value:e.Usergroup_ID,children:e.Title},e.Title)))})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(n.default,{onClick:async e=>{e.preventDefault(),r()},children:"Abbrechen"}),(0,x.jsx)(n.default,{onClick:async e=>{e.preventDefault();let l=document.getElementById("title").value,i=document.getElementById("description").value,n=document.getElementById("category").options[document.getElementById("category").selectedIndex].value,o=document.getElementById("type").value,s=document.getElementById("location").value,a=document.getElementById("begin").value,d=document.getElementById("departure").value,c=document.getElementById("leave_dep").value,u=document.getElementById("usergroup").options[document.getElementById("usergroup").selectedIndex].value;void 0!==t?await(0,h.aT)(t.DateTemplate_ID,l,i,n,o,s,a,d,c,u):await(0,h.BD)(l,i,n,o,s,a,d,c,u),r()},children:"Speichern"})]})]})},U=()=>{const[e,t]=(0,i.useState)(new Array(0)),[l,n]=(0,i.useState)(new Array(0)),[r,o]=(0,i.useState)(-1),s=(0,i.useCallback)((async()=>{let e=await(0,h.kC)();t(void 0!==e?e:new Array(0))}),[]),a=(0,i.useCallback)((async()=>{let e=await(0,h.is)();n(void 0!==e?e:new Array(0))}),[]),d=(0,i.useCallback)((()=>{o(-1),s()}),[s]),c=(0,i.useCallback)((e=>{o(e)}),[]);return(0,i.useEffect)((()=>{s(),a()}),[s,a]),(0,x.jsxs)(F,{children:[(0,x.jsx)(M,{onSelect:c,datetemplates:e}),(0,x.jsx)(z,{datetemplate:e.find((e=>e.DateTemplate_ID===r)),usergroups:l,reload:d})]})},L=o.Ay.div`
    padding-left: env(safe-area-inset-left);
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;

    iframe {
        width: 100%;
        aspect-ratio: 210/297;
    }
`,N=e=>{let{scores:t,onSelect:l}=e;return(0,x.jsx)(u.A,{children:t.sort(((e,t)=>e.Title.localeCompare(t.Title))).map((e=>(0,x.jsx)(H,{onSelect:l,score:e},e.Score_ID)))})},H=e=>{let{onSelect:t,score:l}=e;const n=(0,i.useCallback)((()=>{t(l.Score_ID)}),[t,l]);return(0,x.jsx)(m.A,{onClick:n,children:l.Title})},R=e=>{let{score:t,reload:l}=e;(0,i.useEffect)((()=>{document.getElementById("score_form").reset()}),[t]);return(0,x.jsxs)(d.A,{id:"score_form",children:[(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"title",children:"Name:"}),(0,x.jsx)("input",{type:"text",name:"title",id:"title",defaultValue:null===t||void 0===t?void 0:t.Title})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"link",children:"Link:"}),(0,x.jsx)("input",{type:"url",name:"link",id:"link",defaultValue:null===t||void 0===t?void 0:t.Link})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(n.default,{onClick:e=>{e.preventDefault(),l()},children:"Abbrechen"}),(0,x.jsx)(n.default,{onClick:async e=>{e.preventDefault();let i=document.getElementById("title").value,n=document.getElementById("link").value;void 0!==t?await(0,h.g2)(t.Score_ID,i,n):(0,h.N2)(i,n),document.getElementById("score_form").reset(),l()},children:"Speichern"}),(0,x.jsx)(n.default,{onClick:async e=>{e.preventDefault(),void 0!==t&&await(0,h.kr)(t.Score_ID),l()},children:"L\xf6schen"})]}),null!==t&&void 0!==t&&t.Link?(0,x.jsx)("iframe",{title:"score_view",src:null===t||void 0===t?void 0:t.Link}):(0,x.jsx)(x.Fragment,{})]})},O=()=>{const[e,t]=(0,i.useState)(new Array(0)),[l,n]=(0,i.useState)(-1),r=(0,i.useCallback)((async()=>{let e=await(0,h.OG)();t(void 0!==e?e:new Array(0))}),[]),o=(0,i.useCallback)((()=>{n(-1),r()}),[r]),s=(0,i.useCallback)((e=>{n(e)}),[]);return(0,i.useEffect)((()=>{r()}),[r]),(0,x.jsxs)(L,{children:[(0,x.jsx)(N,{scores:e,onSelect:s}),(0,x.jsx)(R,{score:e.find((e=>e.Score_ID===l)),reload:o})]})},G=o.Ay.div`
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 100%;

    img {
        max-height: 1.5rem;
    }

    td {
        text-align: center;
        :nth-child(1) {
            z-index: 2;
        }
    }

    button {
        width: fit-content;
        align-self: center;
    }

    .IconWrapper {
        max-height: 1.8rem;
        max-width: 1.8rem;
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
    }

    svg {
        height: 100%;
        width: 100%;
    }
`,P=o.Ay.th`
    display: table-cell;
    
    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        display: none;
    }
`,W=o.Ay.th`
    display: none;
    
    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        display: table-cell;
    }
`,X=o.Ay.div`
    display: none;

    padding: 5px;
    
    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        display: flex;
        flex-direction: column;
    }
`,J=e=>{let{usergroup:t}=e;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(P,{children:t.Title}),(0,x.jsx)(W,{children:t.Usergroup_ID})]})},Y=e=>{let{member_id:t,usergroup_id:l,initial:n,onClick:r}=e;const[o,s]=(0,i.useState)(n),a=(0,i.useCallback)((()=>{let e=!o;s(e),r(t,l,e)}),[o,t,l,r]);return(0,x.jsx)(q,{assigned:o,callback:a})},q=e=>{let{assigned:t,callback:l}=e;return(0,x.jsx)("td",{onClick:l,children:t?(0,x.jsx)(I,{}):(0,x.jsx)(_,{})})},K=e=>{let{usergroups:t}=e;return(0,x.jsx)(X,{children:null===t||void 0===t?void 0:t.map((e=>(0,x.jsxs)("div",{children:[e.Usergroup_ID,": ",e.Title]},`${e.Usergroup_ID}_legend`)))})},Z=()=>{var e,t;const[l,r]=(0,i.useState)(new Array(0)),[o,s]=(0,i.useState)({}),a=(0,i.useCallback)((async()=>{let e=await(0,h.Zt)();r(void 0!==e?e:new Array(0))}),[]),d=(0,i.useCallback)(((e,t,l)=>{let i={...o};void 0===i[`${e}`]&&(i[`${e}`]={}),i[`${e}`][`${t}`]=l,s(i)}),[o]),c=(0,i.useCallback)((()=>{(0,h.uU)(o)}),[o]);return(0,i.useEffect)((()=>{a()}),[a]),(0,x.jsxs)(G,{children:[(0,x.jsx)(n.default,{onClick:c,children:"Speichern"}),(0,x.jsxs)(w.X,{children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"Name:"}),null===(e=l[0])||void 0===e?void 0:e.Usergroups.map((e=>(0,x.jsx)(J,{usergroup:e},`h_${e.Usergroup_ID}`)))]})}),(0,x.jsx)("tbody",{children:l.map((e=>(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:e.Fullname}),e.Usergroups.map((t=>(0,x.jsx)(Y,{member_id:e.Member_ID,usergroup_id:t.Usergroup_ID,initial:t.Assigned,onClick:d},`${t.Usergroup_ID}_${e.Member_ID}`)))]},e.Member_ID)))})]}),(0,x.jsx)(K,{usergroups:null===(t=l[0])||void 0===t?void 0:t.Usergroups})]})},Q=o.Ay.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
`,ee=e=>{let{usergroups:t,onSelect:l}=e;return(0,x.jsx)(u.A,{children:t.map((e=>(0,x.jsx)(te,{onSelect:l,usergroup:e},e.Title)))})},te=e=>{let{onSelect:t,usergroup:l}=e;const n=(0,i.useCallback)((()=>{t(l.Usergroup_ID)}),[t,l.Usergroup_ID]);return(0,x.jsx)(m.A,{onClick:n,children:l.Title})},le=e=>{let{usergroup:t,associations:l,reload:r}=e;(0,i.useEffect)((()=>{document.getElementById("usergroup_form").reset(),document.getElementById("association").selectedIndex=null===l||void 0===l?void 0:l.findIndex((e=>(null===t||void 0===t?void 0:t.Association_ID)===e.Association_ID)),document.getElementById("admin").checked="1"===(null===t||void 0===t?void 0:t.Admin),document.getElementById("moderator").checked="1"===(null===t||void 0===t?void 0:t.Moderator)}),[t,l]);return(0,x.jsxs)(d.A,{id:"usergroup_form",children:[(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"title",children:"Bezeichnung:"}),(0,x.jsx)("input",{type:"text",name:"title",id:"title",defaultValue:null===t||void 0===t?void 0:t.Title})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"admin",children:"Admin:"}),(0,x.jsx)("input",{type:"checkbox",name:"admin",id:"admin",defaultChecked:void 0!==t&&t.Admin})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"moderator",children:"Moderator:"}),(0,x.jsx)("input",{type:"checkbox",name:"moderator",id:"moderator",defaultChecked:void 0!==t&&t.Moderator})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"info",children:"Info:"}),(0,x.jsx)("textarea",{name:"info",id:"info",cols:"30",rows:"3",defaultValue:void 0===t?"":t.Info})]}),(0,x.jsxs)(c.A,{children:[(0,x.jsx)("label",{htmlFor:"association",children:"Verein:"}),(0,x.jsx)("select",{name:"association",id:"association",children:l.map((e=>(0,x.jsx)("option",{value:e.Association_ID,children:e.Title},e.Association_ID)))})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(n.default,{onClick:async e=>{e.preventDefault(),r()},children:"Abbrechen"}),(0,x.jsx)(n.default,{onClick:async e=>{var l;e.preventDefault();let i=document.getElementById("title").value,n=document.getElementById("admin").checked,o=document.getElementById("moderator").checked,s=document.getElementById("info").value,a=null===(l=document.getElementById("association").options[document.getElementById("association").selectedIndex])||void 0===l?void 0:l.value;""!==i?(console.log(a),void 0!==a?(void 0!==t?await(0,h.s0)(t.Usergroup_ID,i,n,o,s,a):await(0,h.hc)(i,n,o,s,a),r()):alert("Bitte w\xe4hl einen Verein aus!")):alert("Bitte gib eine Bezeichnung ein!")},children:"Speichern"}),(0,x.jsx)(n.default,{onClick:async e=>{e.preventDefault(),void 0!==t&&await(0,h.cF)(t.Usergroup_ID),r()},children:"L\xf6schen"})]})]})},ie=()=>{const[e,t]=(0,i.useState)(new Array(0)),[l,n]=(0,i.useState)(new Array(0)),[r,o]=(0,i.useState)(-1),s=(0,i.useCallback)((async()=>{let e=await(0,h.is)();t(void 0!==e?e:new Array(0))}),[]),a=(0,i.useCallback)((()=>{o(-1),s()}),[s]),d=(0,i.useCallback)((e=>{o(e)}),[]);return(0,i.useEffect)((()=>{(0,h.is)().then((e=>{t(void 0!==e?e:new Array(0))})),(0,h.Tk)().then((e=>{n(void 0!==e?e:new Array(0))}))}),[s]),(0,x.jsxs)(Q,{children:[(0,x.jsx)(ee,{onSelect:d,usergroups:e}),(0,x.jsx)(le,{usergroup:e.find((e=>e.Usergroup_ID===r)),associations:l,reload:a})]})},ne=o.Ay.div`
    display: flex;
    flex-direction: row;
`,re=o.Ay.form`
    display: grid;
    grid-template-columns: auto auto;

    width: fit-content;
    margin: 5px;

    input, textarea {
        width: 100%;
        padding: 5px;
        margin: 1px;
        border-radius: 5px;
        border: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
        color: ${e=>{let{theme:t}=e;return t.primaryDark}};
        background-color: ${e=>{let{theme:t}=e;return t.primaryLight}};
    }

    input, checkbox {
        max-height: 16px;
    }
`,oe=e=>{let{roles:t,onSelect:l}=e;return(0,x.jsxs)(u.A,{children:[(0,x.jsx)(se,{onSelect:l,role:{role_id:-1,role_name:"*Neue Rolle"}}),t.map((e=>(0,x.jsx)(se,{onSelect:l,role:e},e.role_name)))]})},se=e=>{let{role:t,onSelect:l}=e;return(0,x.jsx)(m.A,{onClick:()=>l(t.role_id),children:t.role_name})},ae=e=>{let{role:t,onReload:l}=e;const[r,o]=(0,i.useState)(new Array(0));return(0,i.useEffect)((()=>{fetch(`${h.Hc}/api/v0/permissions?api_token=${localStorage.getItem("api_token")}`).then((e=>e.json())).then((e=>{o(e)}))}),[]),(0,i.useEffect)((()=>{void 0===t?(document.getElementById("roletitle").value="",document.getElementById("roledescription").value="",r.forEach((e=>{document.getElementById(e.permission_name).checked=!1}))):(document.getElementById("roletitle").value=t.role_name,document.getElementById("roledescription").value=t.description,r.forEach((e=>{document.getElementById(e.permission_name).checked=t.permissions.includes(e.permission_id)})))}),[t,r]),(0,x.jsxs)(re,{children:[(0,x.jsx)("label",{children:"Rolle:"}),(0,x.jsx)("input",{type:"text",id:"roletitle"}),(0,x.jsx)("label",{children:"Beschreibung:"}),(0,x.jsx)("textarea",{id:"roledescription"}),r.map((e=>(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)("label",{children:e.description}),(0,x.jsx)("input",{type:"checkbox",id:e.permission_name,defaultChecked:null===t||void 0===t?void 0:t.permissions.includes(e.permission_id)})]},e.permission_name))),(0,x.jsx)(n.default,{onClick:e=>{let i="";const n={role_name:document.getElementById("roletitle").value,description:document.getElementById("roledescription").value,permissions:r.filter((e=>document.getElementById(e.permission_name).checked)).map((e=>e.permission_id))};e.preventDefault(),i=void 0===t?`${h.Hc}/api/v0/roles?api_token=${localStorage.getItem("api_token")}`:`${h.Hc}/api/v0/roles/${t.role_id}?api_token=${localStorage.getItem("api_token")}`,fetch(i,{method:void 0===t?"POST":"PUT",body:JSON.stringify(n)}).then((()=>{l()}))},children:"Speichern"}),(0,x.jsx)(n.default,{onClick:e=>{e.preventDefault(),void 0!==t&&fetch(`${h.Hc}/api/v0/roles/${t.role_id}?api_token=${localStorage.getItem("api_token")}`,{method:"DELETE"}).then((e=>{e.ok?l():409===e.status?alert("Rolle kann nicht gel\xf6scht werden, da ihr noch Benutzer zugeordnet."):alert("Fehler beim L\xf6schen der Rolle")}))},children:"L\xf6schen"})]})},de=()=>{const[e,t]=(0,i.useState)(new Array(0)),[l,n]=(0,i.useState)(-1),r=()=>{fetch(`${h.Hc}/api/v0/roles?api_token=${localStorage.getItem("api_token")}`).then((e=>e.ok?e.json():[])).then((e=>{t(e)}))};return(0,i.useEffect)((()=>{r()}),[]),(0,x.jsxs)(ne,{children:[(0,x.jsx)(oe,{roles:e,onSelect:e=>{n(e)}}),(0,x.jsx)(ae,{role:e.find((e=>e.role_id===l)),onReload:()=>{r()}})]})},ce=o.Ay.div`
    display: flex;
    flex-direction: row;
`,ue=o.Ay.form`
    display: grid;
`;var me=l(3445),he=l(5467);const pe=e=>{let{associations:t,onSelect:l}=e;return(0,x.jsx)(u.A,{children:t.map((e=>(0,he._m)(5,e.Association_ID)?(0,x.jsx)(xe,{association:e,onSelect:l},e.Title):(0,x.jsx)(x.Fragment,{})))})},xe=e=>{let{association:t,onSelect:l}=e;const n=(0,i.useCallback)((()=>{l(t.Association_ID)}),[l,t.Association_ID]);return(0,x.jsx)(m.A,{onClick:n,children:t.Title})},ve=e=>{var t;let{members:l,association:r}=e;const[o,s]=(0,i.useState)(-1),[a,d]=(0,i.useState)(new Array(0)),[c,u]=(0,i.useState)(new Array(0)),m=[{value:-1,label:void 0!==r?"Mitglied ausw\xe4hlen":"erst Verein ausw\xe4hlen"},...l.map((e=>({value:e.Member_ID,label:e.Forename+" "+e.Surname})))],p=(0,i.useCallback)((()=>{fetch(`${h.Hc}/api/v0/roles?api_token=${localStorage.getItem("api_token")}`).then((e=>e.ok?e.json():[])).then((e=>{d(e)}))}),[]),v=(0,i.useCallback)((e=>{var t;s(parseInt(e.target.value));let i=null===(t=l.find((t=>t.Member_ID===parseInt(e.target.value))))||void 0===t?void 0:t.Roles;if(void 0!==i){let e=i[parseInt(null===r||void 0===r?void 0:r.Association_ID)];u(void 0!==e?e:new Array(0))}else u(new Array(0))}),[l,r]);(0,i.useEffect)((()=>{p()}),[p]);return(0,x.jsxs)(ue,{children:[(0,x.jsx)(me.A,{options:m,onChange:v}),(0,x.jsx)("h2",{children:null===r||void 0===r?void 0:r.Title}),(0,x.jsx)("h3",{children:null===(t=l.find((e=>e.Member_ID===o)))||void 0===t?void 0:t.Forename}),(0,x.jsx)(ge,{roles:a,assignedRoles:c,onSelect:e=>{let t=parseInt(e.target.value);e.target.checked?u([...c,t]):u(c.filter((e=>e!==t)))}}),(0,x.jsx)(n.default,{onClick:e=>{e.preventDefault();const t=document.querySelectorAll('input[type="checkbox"]:checked'),l=Array.from(t).map((e=>parseInt(e.value)));fetch(`${h.Hc}/api/v0/roleassign/${o}?api_token=${localStorage.getItem("api_token")}`,{method:"PATCH",body:JSON.stringify({association_id:r.Association_ID,role_ids:l})})},children:"Speichern"})]})},ge=e=>{let{roles:t,assignedRoles:l,onSelect:n}=e;return(0,i.useEffect)((()=>{for(let e of t)document.getElementById(`role_${e.role_id}`).checked=null===l||void 0===l?void 0:l.includes(e.role_id)}),[l,t]),(0,x.jsx)(x.Fragment,{children:t.map((e=>(0,x.jsxs)("label",{children:[(0,x.jsx)("input",{type:"checkbox",id:`role_${e.role_id}`,value:e.role_id,onChange:n}),e.role_name]},e.role_id)))})},je=()=>{const[e,t]=(0,i.useState)(new Array(0)),[l,n]=(0,i.useState)(new Array(0)),[r,o]=(0,i.useState)(-1),s=(0,i.useCallback)((async()=>{let e=await(0,h.Tk)();t(void 0!==e?e:new Array(0))}),[]),a=(0,i.useCallback)((async()=>{-1!==r&&fetch(`${h.Hc}/api/v0/member?association_id=${r}&&api_token=${localStorage.getItem("api_token")}`).then((e=>e.json())).then((e=>{n(e)}))}),[r]);return(0,i.useEffect)((()=>{s(),a()}),[s,a]),(0,x.jsxs)(ce,{children:[(0,x.jsx)(pe,{onSelect:e=>{o(e)},associations:e}),(0,x.jsx)(ve,{members:l,association:e.find((e=>e.Association_ID===r))})]})},ye=e=>{let{view:t}=e;const l=[(0,x.jsx)(y,{}),(0,x.jsx)(T,{}),(0,x.jsx)(ie,{}),(0,x.jsx)(Z,{}),...(0,he._m)(4)?[(0,x.jsx)(de,{})]:[],...(0,he._m)(5)?[(0,x.jsx)(je,{})]:[],(0,x.jsx)(U,{}),(0,x.jsx)(O,{})];return(0,x.jsx)(a,{children:l[t]||(0,x.jsx)(y,{})})},fe=()=>{const[e,t]=(0,i.useState)(0),l=["Vereine","Vereinzuordnung","Benutzergruppen","Gruppenzuordnung",...(0,he.sx)([3,4])?["Rollen"]:[],...(0,he.sx)([3,5])?["Rollenzuordnung"]:[],"Terminvorlagen","Noten"],o=e=>{const l=parseInt(e.target.id.split("_")[2]);isNaN(l)||t(l)};return(0,x.jsxs)(s,{children:[(0,x.jsx)(r.A,{children:l.map(((e,t)=>(0,x.jsx)(n.default,{id:`Button_Administration_${t}`,onClick:o,children:e},t)))}),(0,x.jsx)(ye,{view:e})]})}},3445:(e,t,l)=>{l.d(t,{A:()=>r});var i=l(5043),n=l(579);const r=e=>{const t=(0,i.useCallback)((t=>{e.onChange(t)}),[e]);return(0,n.jsx)("select",{onChange:t,children:e.options.map(((e,t)=>(0,n.jsx)("option",{value:e.value,children:e.label},t)))})}},2930:(e,t,l)=>{l.d(t,{A:()=>i});const i=l(5464).Ay.form`
    display: block;
    width: 100%;
    padding: 5px;
`},7921:(e,t,l)=>{l.d(t,{A:()=>i});const i=l(5464).Ay.div`
    display: block;
    padding: 2px;
    label {
        float: left;
        width: 25%;
        min-width: 100px;
    }
`},5709:(e,t,l)=>{l.d(t,{A:()=>i});const i=l(5464).Ay.nav`
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
`},6242:(e,t,l)=>{l.d(t,{A:()=>i});const i=l(5464).Ay.div`
    user-select: none;
    cursor: pointer;
    padding: 2px;
    border-radius: 5px;

    &:hover {
        background: ${e=>{let{theme:t}=e;return t.primaryHover}};
    }
`},3410:(e,t,l)=>{l.d(t,{A:()=>i});const i=l(5464).Ay.nav`
    display: flex;
    background-color: ${e=>{let{theme:t}=e;return t.primaryHover}};
    position: relative;
    padding: 5px;
    margin: 5px;
    border-radius: 20px;

    flex-wrap: wrap;
    justify-content: center;
`},6327:(e,t,l)=>{l.d(t,{X:()=>i});const i=l(5464).Ay.table`
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
`},5467:(e,t,l)=>{l.d(t,{_m:()=>i,sx:()=>n});const i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const l=JSON.parse(localStorage.getItem("permissions")||"{}");var i;if(null===t){for(let n in l)if(l[n].includes(e))return!0}else if(null!==(i=l[t])&&void 0!==i&&i.includes(e))return!0;return!1},n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;for(let l of e)if(i(l,t))return!0;return!1}}}]);
//# sourceMappingURL=561.142b9506.chunk.js.map