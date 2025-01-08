"use strict";(globalThis.webpackChunkspz_planner=globalThis.webpackChunkspz_planner||[]).push([[543],{7543:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var l=r(5043),n=r(1462),d=r(2639),i=r(423),a=r(397),s=r(262),o=r(3445),c=r(2930),h=r(7921);const x=r(5464).Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
        align-items: center;
    }
    align-items: stretch;
    
    select {
        width: fit-content;
        align-self: center;
    }

    #thead-desktop {
        display: none;
        @media (min-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
            display: table-header-group;
        }
    }

    #thead-mobile {
        display: table-header-group;
        @media (min-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
            display: none;
        }
    }

    table {
        @media (min-width: ${e=>{let{theme:t}=e;return t.mobile}}) {
            width: fit-content;

            th {
                padding: 5px;
            }
        }
        
        td {
            text-align: center;
        }
    }
`;var j=r(6720),u=r(2439),m=r(579);const p=e=>{let{state:t}=e;switch(t){default:case 0:return(0,m.jsx)(j.q5k,{});case 1:return(0,m.jsx)(a.qtE,{});case 2:return(0,m.jsx)(n.mcb,{})}},g=e=>{let{order:t,reload:r}=e;const l=async()=>{let e=localStorage.getItem("api_token");await fetch(`${u.Hc}/api/order.php?api_token=${e}&id=${t.Order_ID}`,{method:"PUT",body:JSON.stringify({Order_State:t.Order_State})}),r()},n=async()=>{let e=localStorage.getItem("api_token");await fetch(`${u.Hc}/api/order.php?api_token=${e}&id=${t.Order_ID}`,{method:"DELETE"}),r()};switch(t.Order_State){case 0:return(0,m.jsxs)("td",{children:[(0,m.jsx)(s.default,{onClick:l,children:"bestellt?"}),(0,m.jsx)("br",{}),(0,m.jsx)(s.default,{onClick:n,children:"stornieren"})]});case 1:return(0,m.jsx)("td",{children:(0,m.jsx)(s.default,{onClick:l,children:"geliefert?"})});default:return(0,m.jsx)(m.Fragment,{})}},f=e=>{let{orders:t,reload:r,own:l}=e,n=localStorage.getItem("auth_level");return t.map((e=>(0,m.jsxs)("tr",{children:[l?(0,m.jsx)(m.Fragment,{}):(0,m.jsxs)("td",{children:[e.Forename," ",e.Surname[0],"."]}),(0,m.jsx)("td",{children:e.Article}),(0,m.jsx)("td",{children:e.Size}),(0,m.jsx)("td",{children:e.Count}),(0,m.jsx)("td",{children:e.Placed}),(0,m.jsx)("td",{children:e.Ordered}),(0,m.jsx)("td",{children:e.Info}),(0,m.jsx)("td",{children:(0,m.jsx)(p,{state:e.Order_State})}),n>1?(0,m.jsx)(g,{order:e,reload:r}):(0,m.jsx)(m.Fragment,{})]},`order_${e.Order_ID}`)))},b=e=>{let{orders:t,reload:r,own:l}=e;return(0,m.jsxs)("table",{children:[(0,m.jsx)("thead",{id:"thead-desktop",children:(0,m.jsxs)("tr",{children:[l?(0,m.jsx)(m.Fragment,{}):(0,m.jsx)("th",{children:"Name"}),(0,m.jsx)("th",{children:"Artikel"}),(0,m.jsx)("th",{children:"Gr\xf6\xdfe"}),(0,m.jsx)("th",{children:"Anzahl"}),(0,m.jsx)("th",{children:"Angefordert am"}),(0,m.jsx)("th",{children:"Bestellt am"}),(0,m.jsx)("th",{children:"Notiz"}),(0,m.jsx)("th",{children:"Status"})]})}),(0,m.jsx)("thead",{id:"thead-mobile",children:(0,m.jsxs)("tr",{children:[l?(0,m.jsx)(m.Fragment,{}):(0,m.jsx)("th",{children:(0,m.jsx)(n.tVJ,{})}),(0,m.jsx)("th",{children:(0,m.jsx)(n.kAG,{})}),(0,m.jsx)("th",{children:(0,m.jsx)(i.mbg,{})}),(0,m.jsx)("th",{children:(0,m.jsx)(n.evN,{})}),(0,m.jsx)("th",{children:(0,m.jsx)(n.GOD,{})}),(0,m.jsx)("th",{children:(0,m.jsx)(n.Jqf,{})}),(0,m.jsx)("th",{children:(0,m.jsx)(a.Jb_,{})}),(0,m.jsx)("th",{children:(0,m.jsx)(d.ifl,{})})]})}),(0,m.jsx)("tbody",{children:(0,m.jsx)(f,{orders:t,reload:r,own:l})})]})},k=e=>{let{reload:t}=e,r=localStorage.getItem("api_token");const l=e=>{e.preventDefault();let l=document.getElementById("article").value,n=document.getElementById("size").value,d=document.getElementById("count").value,i=document.getElementById("info").value;""!==l&&""!==n&&""!==d&&0!==d?fetch(`${u.Hc}/api/order.php?api_token=${r}`,{method:"POST",body:JSON.stringify({Article:l,Size:n,Count:d,Info:i})}).then((e=>{if(!e.ok)throw new Error(e.status);t(),alert("Bestellung eingereicht"),document.getElementById("order_form").reset()})).catch((e=>{alert(e)})):alert("Angaben unvollst\xe4ndig/nicht zul\xe4ssig")};return(0,m.jsx)("div",{children:(0,m.jsxs)(c.A,{id:"order_form",onSubmit:l,children:[(0,m.jsxs)(h.A,{children:[(0,m.jsx)("label",{htmlFor:"article",children:"Was?"}),(0,m.jsx)("input",{type:"text",name:"article",id:"article"})]}),(0,m.jsxs)(h.A,{children:[(0,m.jsx)("label",{htmlFor:"size",children:"Gr\xf6\xdfe?"}),(0,m.jsx)("input",{type:"text",name:"size",id:"size"})]}),(0,m.jsxs)(h.A,{children:[(0,m.jsx)("label",{htmlFor:"count",children:"Anzahl?"}),(0,m.jsx)("input",{type:"number",name:"count",id:"count"})]}),(0,m.jsxs)(h.A,{children:[(0,m.jsx)("label",{htmlFor:"info",children:"Notiz"}),(0,m.jsx)("input",{type:"text",name:"info",id:"info"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(s.default,{onClick:e=>{e.preventDefault(),document.getElementById("order_form").reset()},children:"Abbrechen"}),(0,m.jsx)(s.default,{onClick:l,children:"Anfragen"})]})]})})},w=()=>{const e=[{value:"own",label:"Eigen"},{value:"all",label:"Alle"}];let t=localStorage.getItem("api_token"),r=localStorage.getItem("auth_level");const[n,d]=(0,l.useState)(new Array(0)),[i,a]=(0,l.useState)(e[0].value),s=(0,l.useCallback)((async()=>{let e="own"===i?`${u.Hc}/api/order.php?api_token=${t}&own`:`${u.Hc}/api/order.php?api_token=${t}`;fetch(e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{d(e)}),(()=>{d(new Array(0))})).catch((e=>{}))}),[t,i]),c=(0,l.useCallback)((e=>{a(e.target.value)}),[a]),h=(0,l.useCallback)((()=>{s()}),[s]);return(0,l.useEffect)((()=>{s()}),[s]),(0,m.jsxs)(x,{children:[r>1?(0,m.jsx)(o.A,{options:e,onChange:c}):(0,m.jsx)(m.Fragment,{}),n.length?(0,m.jsx)(b,{orders:n,reload:h,own:"own"===i}):(0,m.jsx)(m.Fragment,{}),(0,m.jsx)(k,{reload:h})]})}},3445:(e,t,r)=>{r.d(t,{A:()=>d});var l=r(5043),n=r(579);const d=e=>{const t=(0,l.useCallback)((t=>{e.onChange(t)}),[e]);return(0,n.jsx)("select",{onChange:t,children:e.options.map(((e,t)=>(0,n.jsx)("option",{value:e.value,children:e.label},t)))})}},2930:(e,t,r)=>{r.d(t,{A:()=>l});const l=r(5464).Ay.form`
    display: block;
    width: 100%;
    padding: 5px;
`},7921:(e,t,r)=>{r.d(t,{A:()=>l});const l=r(5464).Ay.div`
    display: block;
    padding: 2px;
    label {
        float: left;
        width: 25%;
        min-width: 100px;
    }
`}}]);
//# sourceMappingURL=543.3fae6eff.chunk.js.map