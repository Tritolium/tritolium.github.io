"use strict";(self.webpackChunkspz_planner=self.webpackChunkspz_planner||[]).push([[543],{7543:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var r,l=n(5043),a=n(1462),d=n(2639),i=n(423),s=n(397),c=n(262),o=n(3445),h=n(2930),x=n(7921),j=n(7528);const u=n(197).Ay.div(r||(r=(0,j.A)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    @media (min-width: ",") {\n        align-items: center;\n    }\n    align-items: stretch;\n    \n    select {\n        width: fit-content;\n        align-self: center;\n    }\n\n    #thead-desktop {\n        display: none;\n        @media (min-width: ",") {\n            display: table-header-group;\n        }\n    }\n\n    #thead-mobile {\n        display: table-header-group;\n        @media (min-width: ",") {\n            display: none;\n        }\n    }\n\n    table {\n        @media (min-width: ",") {\n            width: fit-content;\n\n            th {\n                padding: 5px;\n            }\n        }\n        \n        td {\n            text-align: center;\n        }\n    }\n"])),(e=>{let{theme:t}=e;return t.mobile}),(e=>{let{theme:t}=e;return t.mobile}),(e=>{let{theme:t}=e;return t.mobile}),(e=>{let{theme:t}=e;return t.mobile}));var m=n(6720),p=n(3163),g=n(579);const f=e=>{let{state:t}=e;switch(t){default:case 0:return(0,g.jsx)(m.q5k,{});case 1:return(0,g.jsx)(s.qtE,{});case 2:return(0,g.jsx)(a.mcb,{})}},b=e=>{let{order:t,reload:n}=e;const r=async()=>{let e=localStorage.getItem("api_token");await fetch("".concat(p.Hc,"/api/order.php?api_token=").concat(e,"&id=").concat(t.Order_ID),{method:"PUT",body:JSON.stringify({Order_State:t.Order_State})}),n()},l=async()=>{let e=localStorage.getItem("api_token");await fetch("".concat(p.Hc,"/api/order.php?api_token=").concat(e,"&id=").concat(t.Order_ID),{method:"DELETE"}),n()};switch(t.Order_State){case 0:return(0,g.jsxs)("td",{children:[(0,g.jsx)(c.default,{onClick:r,children:"bestellt?"}),(0,g.jsx)("br",{}),(0,g.jsx)(c.default,{onClick:l,children:"stornieren"})]});case 1:return(0,g.jsx)("td",{children:(0,g.jsx)(c.default,{onClick:r,children:"geliefert?"})});default:return(0,g.jsx)(g.Fragment,{})}},k=e=>{let{orders:t,reload:n,own:r}=e,l=localStorage.getItem("auth_level");return t.map((e=>(0,g.jsxs)("tr",{children:[r?(0,g.jsx)(g.Fragment,{}):(0,g.jsxs)("td",{children:[e.Forename," ",e.Surname[0],"."]}),(0,g.jsx)("td",{children:e.Article}),(0,g.jsx)("td",{children:e.Size}),(0,g.jsx)("td",{children:e.Count}),(0,g.jsx)("td",{children:e.Placed}),(0,g.jsx)("td",{children:e.Ordered}),(0,g.jsx)("td",{children:e.Info}),(0,g.jsx)("td",{children:(0,g.jsx)(f,{state:e.Order_State})}),l>1?(0,g.jsx)(b,{order:e,reload:n}):(0,g.jsx)(g.Fragment,{})]},"order_".concat(e.Order_ID))))},w=e=>{let{orders:t,reload:n,own:r}=e;return(0,g.jsxs)("table",{children:[(0,g.jsx)("thead",{id:"thead-desktop",children:(0,g.jsxs)("tr",{children:[r?(0,g.jsx)(g.Fragment,{}):(0,g.jsx)("th",{children:"Name"}),(0,g.jsx)("th",{children:"Artikel"}),(0,g.jsx)("th",{children:"Gr\xf6\xdfe"}),(0,g.jsx)("th",{children:"Anzahl"}),(0,g.jsx)("th",{children:"Angefordert am"}),(0,g.jsx)("th",{children:"Bestellt am"}),(0,g.jsx)("th",{children:"Notiz"}),(0,g.jsx)("th",{children:"Status"})]})}),(0,g.jsx)("thead",{id:"thead-mobile",children:(0,g.jsxs)("tr",{children:[r?(0,g.jsx)(g.Fragment,{}):(0,g.jsx)("th",{children:(0,g.jsx)(a.tVJ,{})}),(0,g.jsx)("th",{children:(0,g.jsx)(a.kAG,{})}),(0,g.jsx)("th",{children:(0,g.jsx)(i.mbg,{})}),(0,g.jsx)("th",{children:(0,g.jsx)(a.evN,{})}),(0,g.jsx)("th",{children:(0,g.jsx)(a.GOD,{})}),(0,g.jsx)("th",{children:(0,g.jsx)(a.Jqf,{})}),(0,g.jsx)("th",{children:(0,g.jsx)(s.Jb_,{})}),(0,g.jsx)("th",{children:(0,g.jsx)(d.ifl,{})})]})}),(0,g.jsx)("tbody",{children:(0,g.jsx)(k,{orders:t,reload:n,own:r})})]})},y=e=>{let{reload:t}=e,n=localStorage.getItem("api_token");const r=e=>{e.preventDefault();let r=document.getElementById("article").value,l=document.getElementById("size").value,a=document.getElementById("count").value,d=document.getElementById("info").value;""!==r&&""!==l&&""!==a&&0!==a?fetch("".concat(p.Hc,"/api/order.php?api_token=").concat(n),{method:"POST",body:JSON.stringify({Article:r,Size:l,Count:a,Info:d})}).then((e=>{if(!e.ok)throw new Error(e.status);t(),alert("Bestellung eingereicht"),document.getElementById("order_form").reset()})).catch((e=>{alert(e)})):alert("Angaben unvollst\xe4ndig/nicht zul\xe4ssig")};return(0,g.jsx)("div",{children:(0,g.jsxs)(h.A,{id:"order_form",onSubmit:r,children:[(0,g.jsxs)(x.A,{children:[(0,g.jsx)("label",{htmlFor:"article",children:"Was?"}),(0,g.jsx)("input",{type:"text",name:"article",id:"article"})]}),(0,g.jsxs)(x.A,{children:[(0,g.jsx)("label",{htmlFor:"size",children:"Gr\xf6\xdfe?"}),(0,g.jsx)("input",{type:"text",name:"size",id:"size"})]}),(0,g.jsxs)(x.A,{children:[(0,g.jsx)("label",{htmlFor:"count",children:"Anzahl?"}),(0,g.jsx)("input",{type:"number",name:"count",id:"count"})]}),(0,g.jsxs)(x.A,{children:[(0,g.jsx)("label",{htmlFor:"info",children:"Notiz"}),(0,g.jsx)("input",{type:"text",name:"info",id:"info"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(c.default,{onClick:e=>{e.preventDefault(),document.getElementById("order_form").reset()},children:"Abbrechen"}),(0,g.jsx)(c.default,{onClick:r,children:"Anfragen"})]})]})})},A=()=>{const e=[{value:"own",label:"Eigen"},{value:"all",label:"Alle"}];let t=localStorage.getItem("api_token"),n=localStorage.getItem("auth_level");const[r,a]=(0,l.useState)(new Array(0)),[d,i]=(0,l.useState)(e[0].value),s=(0,l.useCallback)((async()=>{let e="own"===d?"".concat(p.Hc,"/api/order.php?api_token=").concat(t,"&own"):"".concat(p.Hc,"/api/order.php?api_token=").concat(t);fetch(e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{a(e)}),(()=>{a(new Array(0))})).catch((e=>{}))}),[t,d]),c=(0,l.useCallback)((e=>{i(e.target.value)}),[i]),h=(0,l.useCallback)((()=>{s()}),[s]);return(0,l.useEffect)((()=>{s()}),[s]),(0,g.jsxs)(u,{children:[n>1?(0,g.jsx)(o.A,{options:e,onChange:c}):(0,g.jsx)(g.Fragment,{}),r.length?(0,g.jsx)(w,{orders:r,reload:h,own:"own"===d}):(0,g.jsx)(g.Fragment,{}),(0,g.jsx)(y,{reload:h})]})}},3445:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(5043),l=n(579);const a=e=>{const t=(0,r.useCallback)((t=>{e.onChange(t)}),[e]);return(0,l.jsx)("select",{onChange:t,children:e.options.map(((e,t)=>(0,l.jsx)("option",{value:e.value,children:e.label},t)))})}},2930:(e,t,n)=>{n.d(t,{A:()=>a});var r,l=n(7528);const a=n(197).Ay.form(r||(r=(0,l.A)(["\n    display: block;\n    width: 100%;\n    padding: 5px;\n"])))},7921:(e,t,n)=>{n.d(t,{A:()=>a});var r,l=n(7528);const a=n(197).Ay.div(r||(r=(0,l.A)(["\n    display: block;\n    padding: 2px;\n    label {\n        float: left;\n        width: 25%;\n        min-width: 100px;\n    }\n"])))}}]);
//# sourceMappingURL=543.7f23a662.chunk.js.map