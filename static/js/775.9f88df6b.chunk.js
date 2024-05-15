"use strict";(self.webpackChunkspz_planner=self.webpackChunkspz_planner||[]).push([[775],{5775:(e,n,t)=>{t.r(n),t.d(n,{default:()=>_});var a,r,l=t(5043),i=t(262),o=t(2930),s=t(7921),c=t(5709),d=t(3163),m=t(7528),u=t(197);const h=u.Ay.div(a||(a=(0,m.A)(["\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    width: 100%;\n\n    form {\n        display: flex;\n        flex-direction: column;\n    }\n"]))),b=u.Ay.div(r||(r=(0,m.A)(["\n    user-select: none;\n    cursor: pointer;\n    padding: 2px;\n    border-radius: 5px;\n\n    &:hover {\n        background: ",";\n    }\n"])),(e=>{let{theme:n}=e;return n.primaryHover}));var p=t(579);const x=e=>{let{members:n,onSelect:t}=e;return(0,p.jsx)(c.A,{children:n.map((e=>(0,p.jsx)(v,{onSelect:t,member:e},e.Member_ID)))})},v=e=>{let{member:n,onSelect:t}=e;const a=(0,l.useCallback)((()=>{t(n.Member_ID)}),[t,n.Member_ID]);return(0,p.jsxs)(b,{onClick:a,children:[n.Surname,", ",n.Forename]})},j=e=>{let{member:n,reload:t}=e;const[a,r]=(0,l.useState)({}),[c,m]=(0,l.useState)([]);(0,l.useEffect)((()=>{document.getElementById("memberform_form").reset(),document.getElementById("auth_level").selectedIndex=null===n||void 0===n?void 0:n.Auth_level,r({}),fetch("".concat(d.Hc,"/api/v0/association?api_token=").concat(localStorage.getItem("api_token"))).then((e=>e.json())).then((e=>{m(e)}))}),[n]);return(0,p.jsxs)(o.A,{id:"memberform_form",children:[(0,p.jsxs)(s.A,{children:[(0,p.jsx)("label",{htmlFor:"forename",children:"Vorname:"}),(0,p.jsx)("input",{type:"text",name:"forename",id:"forename",defaultValue:null===n||void 0===n?void 0:n.Forename})]}),(0,p.jsxs)(s.A,{children:[(0,p.jsx)("label",{htmlFor:"surname",children:"Nachname:"}),(0,p.jsx)("input",{type:"text",name:"surname",id:"surname",defaultValue:null===n||void 0===n?void 0:n.Surname})]}),(0,p.jsxs)(s.A,{children:[(0,p.jsx)("label",{htmlFor:"auth_level",children:"Zugriffslevel:"}),(0,p.jsxs)("select",{name:"auth_level",id:"auth_level",children:[(0,p.jsx)("option",{value:"0",children:"ohne"}),(0,p.jsx)("option",{value:"1",children:"Mitglied"}),(0,p.jsx)("option",{value:"2",children:"Vorstand"}),(0,p.jsx)("option",{value:"3",children:"Admin"})]})]}),(0,p.jsxs)(s.A,{children:[(0,p.jsx)("label",{htmlFor:"nicknames",children:"Kurz:"}),(0,p.jsx)("input",{type:"text",name:"nicknames",id:"nicknames",defaultValue:null===n||void 0===n?void 0:n.Nicknames})]}),(0,p.jsxs)(s.A,{children:[(0,p.jsx)("label",{htmlFor:"instrument",children:"Instrument:"}),(0,p.jsx)("input",{type:"text",name:"instrument",id:"instrument",defaultValue:null===n||void 0===n?void 0:n.Instrument})]}),(0,p.jsxs)(s.A,{children:[(0,p.jsx)("label",{htmlFor:"birthdate",children:"Geburtstag:"}),(0,p.jsx)("input",{type:"date",id:"birthdate",defaultValue:null===n||void 0===n?void 0:n.Birthdate})]}),void 0!==n?(0,p.jsx)(p.Fragment,{}):(0,p.jsxs)(s.A,{children:[(0,p.jsx)("label",{htmlFor:"associations",children:"Verein:"}),(0,p.jsx)("select",{name:"associations",id:"associations",children:c.map((e=>(0,p.jsx)("option",{value:e.Association_ID,children:e.Title},e.Association_ID)))})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)(i.default,{onClick:async e=>{e.preventDefault(),t()},children:"Abbrechen"}),(0,p.jsx)(i.default,{onClick:async e=>{e.preventDefault();let r=document.getElementById("forename").value,l=document.getElementById("surname").value,i=document.getElementById("auth_level").options[document.getElementById("auth_level").selectedIndex].value,o=document.getElementById("nicknames").value,s=document.getElementById("instrument").value,c=document.getElementById("birthdate").value;void 0!==n?await(0,d.ON)(n.Member_ID,r,l,i,o,s,c,a):fetch("".concat(d.Hc,"/api/v0/member?api_token=").concat(localStorage.getItem("api_token")),{method:"POST",body:JSON.stringify({Forename:r,Surname:l,Auth_level:i,Nicknames:o,Birthdate:c})}).then((e=>e.json())).then((e=>{(async e=>{let n={},t=document.getElementById("associations").options[document.getElementById("associations").selectedIndex].value;n["".concat(e)]={},n["".concat(e)]["".concat(t)]=!0,await(0,d.Ts)(n)})(e.Member_ID).then((()=>t()))}))},children:"Speichern"})]})]})},f=e=>{let{members:n,reload:t}=e;const[a,r]=(0,l.useState)(),i=(0,l.useCallback)((()=>{r(void 0),t()}),[t]),o=(0,l.useCallback)((e=>{fetch("".concat(d.Hc,"/api/v0/member/").concat(e,"?api_token=").concat(localStorage.getItem("api_token"))).then((e=>e.json())).then((e=>{r(e)}))}),[]);return(0,p.jsxs)(h,{children:[(0,p.jsx)(x,{onSelect:o,members:n}),(0,p.jsx)(j,{member:a,reload:i})]})};var y=t(3410);const g=(0,l.lazy)((()=>t.e(783).then(t.bind(t,1783)))),k=e=>{let{view:n,members:t,reload:a}=e;switch(n){default:case 0:return(0,p.jsx)(l.Suspense,{fallback:(0,p.jsx)("div",{children:"\xdcbersicht l\xe4dt"}),children:(0,p.jsx)(g,{members:t})});case 1:return(0,p.jsx)(f,{members:t,reload:a})}},_=e=>{const[n,t]=(0,l.useState)(0),[a,r]=(0,l.useState)(new Array(0)),o=(0,l.useCallback)((async()=>{fetch("".concat(d.Hc,"/api/v0/member?api_token=").concat(localStorage.getItem("api_token"))).then((e=>e.json())).then((e=>{r(e)}))}),[]);(0,l.useEffect)((()=>{o()}),[o]);const s=(0,l.useCallback)((()=>{o()}),[o]),c=e=>{switch(e.target.id){default:case"member_button_0":t(0);break;case"member_button_1":t(1)}};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(y.A,{children:[(0,p.jsx)(i.default,{id:"member_button_0",type:"button",onClick:c,children:"\xdcbersicht"}),e.auth_level>2?(0,p.jsx)(i.default,{id:"member_button_1",type:"button",onClick:c,children:"Stammdaten"}):(0,p.jsx)(p.Fragment,{})]}),(0,p.jsx)(k,{view:n,members:a,reload:s})]})}},2930:(e,n,t)=>{t.d(n,{A:()=>l});var a,r=t(7528);const l=t(197).Ay.form(a||(a=(0,r.A)(["\n    display: block;\n    width: 100%;\n    padding: 5px;\n"])))},7921:(e,n,t)=>{t.d(n,{A:()=>l});var a,r=t(7528);const l=t(197).Ay.div(a||(a=(0,r.A)(["\n    display: block;\n    padding: 2px;\n    label {\n        float: left;\n        width: 25%;\n        min-width: 100px;\n    }\n"])))},5709:(e,n,t)=>{t.d(n,{A:()=>l});var a,r=t(7528);const l=t(197).Ay.nav(a||(a=(0,r.A)(["\n    margin: 2px;\n    padding: 2px;\n    white-space: nowrap;\n    border: 1px solid ",";\n    border-radius: 10px;\n    overflow-y: scroll;\n    max-height: 75vh;\n    min-width: fit-content;\n    width: auto;\n    max-width: fit-content;\n\n\n    @media (max-width: ",") {\n        white-space: normal;\n    }\n\n    ::-webkit-scrollbar {\n        width: 5px;\n    }\n\n    ::-webkit-scrollbar-track {\n        background: none;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background: ",";\n        border-radius: 5px;\n    }\n\n    ::-webkit-scrollbar-thumb:hover {\n        background: ",";\n    }\n"])),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.mobile}),(e=>{let{theme:n}=e;return n.primaryLight}),(e=>{let{theme:n}=e;return n.primaryHover}))},3410:(e,n,t)=>{t.d(n,{A:()=>l});var a,r=t(7528);const l=t(197).Ay.nav(a||(a=(0,r.A)(["\n    display: flex;\n    background-color: ",";\n    position: relative;\n    padding: 5px;\n    margin: 5px;\n    border-radius: 20px;\n\n    flex-wrap: wrap;\n    justify-content: center;\n"])),(e=>{let{theme:n}=e;return n.primaryHover}))}}]);
//# sourceMappingURL=775.9f88df6b.chunk.js.map