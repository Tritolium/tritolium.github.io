"use strict";(globalThis.webpackChunkspz_planner=globalThis.webpackChunkspz_planner||[]).push([[533],{5533:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var l=n(5043),r=n(262),i=n(2439),a=n(5464);const d=a.Ay.div`
    display: flex;
    justify-content: center;
`,s=a.Ay.table`
    td {
        padding: 5px;
    }
`;var c=n(579);const o=()=>{const[e,t]=(0,l.useState)(new Array(0));(0,l.useEffect)((()=>{(async()=>{let e=await(0,i.$K)("current");void 0!==e&&t(e)})()}),[]);const n=e=>`${(e=e.split("-"))[2]}.${e[1]}.${e[0]}`;return(0,c.jsxs)(s,{children:[e.length>0?(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"von"}),(0,c.jsx)("th",{children:"bis"}),(0,c.jsx)("th",{children:"Bemerkung"})]})}):(0,c.jsx)("thead",{children:(0,c.jsx)("tr",{children:(0,c.jsx)("th",{children:"Keine Abwesenheiten eingetragen"})})}),(0,c.jsx)("tbody",{children:e.map((e=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:n(e.From)}),(0,c.jsx)("td",{children:n(e.Until)}),(0,c.jsx)("td",{children:e.Info})]},e.Absence_ID)))})]})},h=()=>(0,c.jsx)(d,{children:(0,c.jsx)(o,{})}),u=a.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,m=a.Ay.div`
    width: 100%;
`;var x=n(5709),p=n(6242);const b=a.Ay.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;

    .weekselect {

        max-width: 25%;

        display: grid;
        grid-template-columns: repeat(7, auto);

        justify-items: center;

        label {
            grid-row: 1;
            min-width: 25px;
            text-align: center;
        }

        input {
            grid-row: 2;
            margin: 0 auto;
        }
    }

    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        flex-direction: column;
    }
`,y=a.Ay.form`
    display: block;
    width: 100%;
    padding: 5px;
`,j=a.Ay.div`
    display: block;
    padding: 2px;
    label {
        float: left;
        width: 25%;
        min-width: 100px;
    }
`;var f=n(2140);const g=e=>{let{absences:t,onSelect:n}=e;return(0,c.jsx)(x.A,{children:t.map((e=>(0,c.jsx)(w,{onSelect:n,absence:e},e.Absence_ID)))})},w=e=>{let{absence:t,onSelect:n}=e;const r=(0,l.useCallback)((()=>{n(t.Absence_ID)}),[n,t.Absence_ID]),i=e=>`${(e=e.split("-"))[2]}.${e[1]}.${e[0]}`;return(0,c.jsxs)(p.A,{onClick:r,children:[i(t.From)," - ",i(t.Until)]})},v=e=>{let{selected:t,reload:n}=e;const a=(new Date).toISOString().split("T")[0],[d,s]=(0,l.useState)({Absence_ID:-1,From:a,Until:a,Info:""});(0,l.useEffect)((()=>{(async()=>{let e=await(0,i.SX)(t);void 0!==e&&s(e)})()}),[t]),(0,l.useEffect)((()=>{document.getElementById("absenceeditor").reset()}),[d]);const o=e=>{e.preventDefault(),s({Absence_ID:-1,From:a,Until:a,Info:""})};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(y,{id:"absenceeditor",children:[(0,c.jsxs)(j,{children:[(0,c.jsx)("label",{htmlFor:"from",children:"Von:"}),(0,c.jsx)("input",{type:"date",name:"from",id:"from",defaultValue:d.From})]}),(0,c.jsxs)(j,{children:[(0,c.jsx)("label",{htmlFor:"until",children:"Bis:"}),(0,c.jsx)("input",{type:"date",name:"until",id:"until",defaultValue:d.Until})]}),(0,c.jsxs)(j,{children:[(0,c.jsx)("label",{htmlFor:"info",children:"Bemerkung:"}),(0,c.jsx)("textarea",{name:"info",id:"info",cols:"30",rows:"3",defaultValue:d.Info})]}),d.Absence_ID<0&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(j,{children:[(0,c.jsx)("label",{htmlFor:"days",children:"Wochentage:"}),(0,c.jsxs)("div",{className:"weekselect",children:[(0,c.jsx)("label",{htmlFor:"monday",children:"Mo"}),(0,c.jsx)("label",{htmlFor:"tuesday",children:"Di"}),(0,c.jsx)("label",{htmlFor:"wednesday",children:"Mi"}),(0,c.jsx)("label",{htmlFor:"thursday",children:"Do"}),(0,c.jsx)("label",{htmlFor:"friday",children:"Fr"}),(0,c.jsx)("label",{htmlFor:"saturday",children:"Sa"}),(0,c.jsx)("label",{htmlFor:"sunday",children:"So"}),(0,c.jsx)("input",{type:"checkbox",name:"monday",id:"monday",defaultChecked:"true"}),(0,c.jsx)("input",{type:"checkbox",name:"tuesday",id:"tuesday",defaultChecked:"true"}),(0,c.jsx)("input",{type:"checkbox",name:"wednesday",id:"wednesday",defaultChecked:"true"}),(0,c.jsx)("input",{type:"checkbox",name:"thursday",id:"thursday",defaultChecked:"true"}),(0,c.jsx)("input",{type:"checkbox",name:"friday",id:"friday",defaultChecked:"true"}),(0,c.jsx)("input",{type:"checkbox",name:"saturday",id:"saturday",defaultChecked:"false"}),(0,c.jsx)("input",{type:"checkbox",name:"sunday",id:"sunday",defaultChecked:"false"})]})]}),(0,c.jsxs)(j,{children:[(0,c.jsx)("label",{htmlFor:"weeks",children:"Wochen:"}),(0,c.jsxs)("select",{name:"weeks",id:"weeks",children:[(0,c.jsx)("option",{value:"0",children:"alle"}),(0,c.jsx)("option",{value:"1",children:"gerade"}),(0,c.jsx)("option",{value:"2",children:"ungerade"})]})]})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(r.default,{onClick:o,children:"Abbrechen"}),(0,c.jsx)(r.default,{onClick:async e=>{if(e.preventDefault(),d.Absence_ID<0)return void(async e=>{let t;e.preventDefault();let l=document.getElementById("from").value,r=document.getElementById("until").value,a=document.getElementById("info").value,d=document.getElementById("weeks").value,s=[],c=document.getElementsByClassName("weekselect")[0];for(let n=0;n<c.children.length;n++)c.children[n].checked&&s.push((n-6)%7);if(t=""===r?l:r,l>t)return void alert("Das Startdatum darf nicht nach dem Enddatum liegen.");let h=[];for(let n=new Date(l);n<=new Date(t);n.setDate(n.getDate()+1))switch(d){default:case"0":s.includes(n.getDay())&&h.push(new Date(n));break;case"1":s.includes(n.getDay())&&(0,f.ST)(n)%2===0&&h.push(new Date(n));break;case"2":s.includes(n.getDay())&&(0,f.ST)(n)%2===1&&h.push(new Date(n))}if(0!==h.length){h=(0,f.Pw)(h);for(let e=0;e<h.length;e++){let t=h[e][0].toISOString().split("T")[0],n=h[e][h[e].length-1].toISOString().split("T")[0];await(0,i.uu)(t,n,a)}n(),o(e)}else alert("In der Auswahl sind keine Tage enthalten.")})(e);let t,l=document.getElementById("from").value,r=document.getElementById("until").value,a=document.getElementById("info").value;t=""===r?l:r,l>t?alert("Das Startdatum darf nicht nach dem Enddatum liegen."):(await(0,i.p3)(d.Absence_ID,d.Member_ID,l,t,a),n(),o(e))},children:"Speichern"}),(0,c.jsx)(r.default,{onClick:async e=>{if(e.preventDefault(),d.Absence_ID>0)return!0;await(0,i.BA)(d.Absence_ID),n(),o(e)},children:"L\xf6schen"})]})]})})},k=()=>{const[e,t]=(0,l.useState)(new Array(0)),[n,r]=(0,l.useState)(-1),a=(0,l.useCallback)((async()=>{let e=await(0,i.$K)("current");t(void 0!==e?e:new Array(0))}),[]),d=(0,l.useCallback)((()=>{a()}),[a]),s=(0,l.useCallback)((e=>{r(e)}),[]);return(0,l.useEffect)((()=>{a()}),[a]),(0,c.jsxs)(b,{children:[(0,c.jsx)(g,{onSelect:s,absences:e}),(0,c.jsx)(v,{selected:n,reload:d})]})};var A=n(3410),I=n(6590);const D=a.Ay.div`
    display: flex;
    justify-content: center;
    text-align: center;
`,_=()=>{const[e,t]=(0,l.useState)(new Array(0)),n=(0,l.useCallback)((async()=>{let e=await(0,i.oS)("current");void 0!==e&&t(e)}),[]),r=e=>`${(e=e.split("-"))[2]}.${e[1]}.${e[0]}`;return(0,l.useEffect)((()=>{n()}),[n]),(0,c.jsxs)(I.Ic,{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Name"}),(0,c.jsx)("th",{children:"von"}),(0,c.jsx)("th",{children:"bis"}),(0,c.jsx)("th",{children:"Bemerkung"})]})}),(0,c.jsx)("tbody",{children:e.map((e=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:e.Fullname}),(0,c.jsx)("td",{children:r(e.From)}),(0,c.jsx)("td",{children:r(e.Until)}),(0,c.jsx)("td",{children:e.Info})]},e.Fullname+e.From)))})]})},S=()=>(0,c.jsx)(D,{children:(0,c.jsx)(_,{})});var F=n(2930),$=n(7921);const E=a.Ay.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
`,C=()=>{const[e,t]=(0,l.useState)(new Array(0)),n=(0,l.useCallback)((async()=>{fetch(`${i.Hc}/api/v0/member?api_token=${localStorage.getItem("api_token")}`).then((e=>e.json())).then((e=>{t(e)}),(()=>{t(new Array(0))}))}),[]),a=e=>{e.preventDefault(),document.getElementById("absence_form").reset()};return(0,l.useEffect)((()=>{n()}),[n]),(0,c.jsx)(E,{children:(0,c.jsxs)(F.A,{id:"absence_form",children:[(0,c.jsxs)($.A,{children:[(0,c.jsx)("label",{htmlFor:"member_select",children:"Name:"}),(0,c.jsx)("select",{id:"member_select",children:e.map((e=>(0,c.jsxs)("option",{value:e.Member_ID,children:[e.Forename," ",e.Surname]},`member_${e.Member_ID}`)))})]}),(0,c.jsxs)($.A,{children:[(0,c.jsx)("label",{htmlFor:"from",children:"Von:"}),(0,c.jsx)("input",{type:"date",name:"from",id:"from"})]}),(0,c.jsxs)($.A,{children:[(0,c.jsx)("label",{htmlFor:"until",children:"Bis:"}),(0,c.jsx)("input",{type:"date",name:"until",id:"until"})]}),(0,c.jsxs)($.A,{children:[(0,c.jsx)("label",{htmlFor:"info",children:"Bemerkung:"}),(0,c.jsx)("textarea",{name:"info",id:"info",cols:"30",rows:"3"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(r.default,{onClick:a,children:"Abbrechen"}),(0,c.jsx)(r.default,{onClick:async e=>{e.preventDefault();let t=document.getElementById("member_select"),n=t.options[t.selectedIndex].value,l=document.getElementById("from").value,r=document.getElementById("until").value,d=document.getElementById("info").value;await(0,i.sm)(n,l,r,d),a(e)},children:"Speichern"})]})]})})},B=e=>{let{view:t}=e;const n={0:(0,c.jsx)(h,{}),1:(0,c.jsx)(k,{}),2:(0,c.jsx)(S,{}),3:(0,c.jsx)(C,{})};return(0,c.jsx)(l.Suspense,{fallback:(0,c.jsx)("div",{children:"L\xe4dt..."}),children:(0,c.jsx)(m,{children:n[t]})})},T=e=>{let{auth_level:t}=e;const[n,i]=(0,l.useState)(0),a=e=>{let t=e.target.id.split("_")[2];i(parseInt(t))},d=[{id:"absence_button_0",label:"\xdcbersicht",permitted:!0},{id:"absence_button_1",label:"Eingabe",permitted:!0},{id:"absence_button_2",label:"Gesamt\xfcbersicht",permitted:t>2},{id:"absence_button_3",label:"manuelle Eingabe",permitted:t>2}];return(0,c.jsxs)(u,{children:[(0,c.jsx)(A.A,{children:d.map((e=>{let{id:t,label:n,permitted:l}=e;return l&&(0,c.jsx)(r.default,{type:"button",id:t,onClick:a,children:n},t)}))}),(0,c.jsx)(B,{view:n})]})}},6590:(e,t,n)=>{n.d(t,{Ic:()=>i,Sj:()=>a,oN:()=>d,pi:()=>r});var l=n(5464);const r=l.Ay.div`
    display: block;
    text-align: center;
    select {
        padding: 5px;
        margin: 10px;
        border-radius: 5px;
    }
`,i=l.Ay.table`
    margin: 5px;
    border: 1px solid ${e=>{let{theme:t}=e;return t.primaryLight}};
    border-radius: 10px;
    /*border-collapse: collapse;*/
    border-spacing: 0;
    width: auto;

    display: table;

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

    img {
        max-width: 32px;
    }

    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        font-size: 0.75em;
    }
`,a=(0,l.Ay)(i)`
    display: table;
    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
            display: none;
    }
`,d=(0,l.Ay)(i)`
    
    display: none;
    font-size: 0.75em;

    @media (max-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
            display: table;
    }
`},2930:(e,t,n)=>{n.d(t,{A:()=>l});const l=n(5464).Ay.form`
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
`},6242:(e,t,n)=>{n.d(t,{A:()=>l});const l=n(5464).Ay.div`
    user-select: none;
    cursor: pointer;
    padding: 2px;
    border-radius: 5px;

    &:hover {
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
`}}]);
//# sourceMappingURL=533.8c20a79f.chunk.js.map