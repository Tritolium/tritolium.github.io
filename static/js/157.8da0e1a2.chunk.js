"use strict";(self.webpackChunkspz_planner=self.webpackChunkspz_planner||[]).push([[157],{8934:function(n,e,t){var r=t(184),s=function(n){switch(n){default:return"";case 0:return"Sonntag";case 1:return"Montag";case 2:return"Dienstag";case 3:return"Mittwoch";case 4:return"Donnerstag";case 5:return"Freitag";case 6:return"Samstag"}},a=function(n){switch(n){default:return"";case 0:return"Januar";case 1:return"Februar";case 2:return"M\xe4rz";case 3:return"April";case 4:return"Mai";case 5:return"Juni";case 6:return"Juli";case 7:return"August";case 8:return"September";case 9:return"Oktober";case 10:return"November";case 11:return"Dezember"}};e.Z=function(n){var e=n.dateprops,t=new Date(e.Date),i=s(t.getDay()),c=t.getDate(),l=t.getMonth(),u=t.getFullYear();return(0,r.jsxs)("div",{children:[e.Type," ",e.Location,(0,r.jsx)("br",{}),c,". ",a(l)," ",u,(0,r.jsx)("br",{}),i]})}},1157:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,s,a,i,c=t(5861),l=t(885),u=t(7757),d=t.n(u),o=t(2791),h=t(7918),x=t(8934),p=t(168),m=t(6031),j=m.ZP.div(r||(r=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    margin: auto;\n    align-items: center;\n\n    select {\n        width: fit-content;\n    }\n"]))),f=m.ZP.table(s||(s=(0,p.Z)(["\n\n    table-layout: fixed;\n\n    border-collapse: collapse;\n    position: relative;\n    overflow: scroll;\n    align-self: flex-start;\n    margin: 0 2px 0 2px;\n\n    tbody {\n        overflow-x: scroll;\n    }\n\n    td {\n        border: 1px solid ",";\n        padding: 2px;\n        text-align: center;\n        position: relative;\n        min-width: 32px;\n        \n        .IconWrapper {\n            min-width: 1.5em;\n            max-width: 32px;\n            min-height: 1.5em;\n            max-height: 32px;\n            position: absolute;\n\n            transform: translateX(-50%) translateY(-50%);\n            :nth-child(1) {\n                z-index: 2;\n            }\n        }\n    }\n\n    th {\n        min-width: 15px;\n        max-width: 40px;\n    }\n\n    @media (max-width: ",") {\n        display: none;\n    }\n"])),(function(n){return n.theme.primaryLight}),(function(n){return n.theme.mobile})),g=m.ZP.table(a||(a=(0,p.Z)(["\n    border-collapse: collapse;\n    position: relative;\n    margin: 0 2px 0 2px;\n\n    tr {\n        max-height: 100px;\n    }\n\n    td {\n        text-align: center;\n        border: 1px solid ",";\n\n        > img {\n            min-width: 15px;\n            width: 100%;\n            max-width: 30px;\n        }\n    }\n\n    @media (max-width: ",") {\n        thead, td {\n            display: none;\n        }\n    }\n"])),(function(n){return n.theme.primaryLight}),(function(n){return n.theme.mobile})),b=m.ZP.div(i||(i=(0,p.Z)(["\n    @media (min-width: ",") {\n        div {\n            display: none;\n        }\n    }\n"])),(function(n){return n.theme.mobile})),v=t(8304),w=t(3077),k=t(184),y=function(n){var e=n.event;v.kL.register(v.uw,v.f$,v.ZL,v.Dx,v.u,v.De);var t={labels:[""],datasets:[{data:[e.Consent],backgroundColor:"rgb(0, 186, 0)"},{data:[e.Missing],backgroundColor:"rgb(37, 183, 211)"},{data:[e.Maybe],backgroundColor:"rgb(255, 161, 31)"},{data:[e.Refusal],backgroundColor:"rgb(255, 0, 0)"}]};return(0,k.jsxs)(b,{children:[(0,k.jsx)(x.Z,{dateprops:e}),(0,k.jsx)(w.$Q,{height:"60px",options:{indexAxis:"y",plugins:{title:{display:!1},legend:{display:!1}},responsive:!1,scales:{x:{stacked:!0,display:!1},y:{stacked:!0}}},data:t})]})},Z=t(7730),D=t(7526),C=function(n){switch(n.attendence){default:case-1:return(0,k.jsx)(Z.Blank,{});case 0:return(0,k.jsx)(Z.Deny,{});case 1:return(0,k.jsx)(Z.Check,{});case 2:return(0,k.jsx)(Z.Alert,{})}},A=function(n){var e=n.attendences;return(0,k.jsxs)(f,{children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:"Termin:"}),e[0].Attendences.map((function(n){return(0,k.jsxs)("th",{children:[n.Fullname.split(" ")[0].slice(0,2),n.Fullname.split(" ")[1][0]]},n.Fullname)}))]})}),(0,k.jsx)("tbody",{children:e.map((function(n){return(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:(0,k.jsx)(x.Z,{dateprops:n})}),n.Attendences.map((function(e){return(0,k.jsx)("td",{children:(0,k.jsx)(C,{attendence:e.Attendence})},e.Fullname+n.Event_ID)}))]},n.Event_ID)}))})]})},I=function(n){var e=n.evaluation;return(0,k.jsxs)(g,{children:[(0,k.jsxs)("thead",{children:[(0,k.jsx)("th",{children:"Termin"}),(0,k.jsx)("th",{children:"Zu."}),(0,k.jsx)("th",{children:"Ab."}),(0,k.jsx)("th",{children:"Aus."}),(0,k.jsx)("th",{children:"Vllt."}),(0,k.jsx)("th",{children:"M"}),(0,k.jsx)("th",{children:"S"}),(0,k.jsx)("th",{children:"D"}),(0,k.jsx)("th",{children:"A"}),(0,k.jsx)("th",{children:"T"}),(0,k.jsx)("th",{children:"L"}),(0,k.jsx)("th",{children:"Tr"}),(0,k.jsx)("th",{children:"B"}),(0,k.jsx)("th",{children:"P"})]}),(0,k.jsx)("tbody",{children:e.map((function(n){return(0,k.jsx)(M,{event:n})}))})]})},M=function(n){var e=n.event;return(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:(0,k.jsx)(x.Z,{dateprops:e})}),(0,k.jsx)("td",{children:e.Consent}),(0,k.jsx)("td",{children:e.Refusal}),(0,k.jsx)("td",{children:e.Missing}),(0,k.jsx)("td",{children:e.Maybe}),(0,k.jsx)("td",{children:e.Instruments.Major}),(0,k.jsx)("td",{children:e.Instruments.Sopran}),(0,k.jsx)("td",{children:e.Instruments.Diskant}),(0,k.jsx)("td",{children:e.Instruments.Alt}),(0,k.jsx)("td",{children:e.Instruments.Tenor}),(0,k.jsx)("td",{children:e.Instruments.Lyra}),(0,k.jsx)("td",{children:e.Instruments.Trommel}),(0,k.jsx)("td",{children:e.Instruments.Becken}),(0,k.jsx)("td",{children:e.Instruments.Pauke}),(0,k.jsx)(y,{event:e})]})},S=function(){var n=(0,o.useState)(new Array(0)),e=(0,l.Z)(n,2),t=e[0],r=e[1],s=(0,o.useState)(),a=(0,l.Z)(s,2),i=a[0],u=a[1],x=(0,o.useState)(new Array(0)),p=(0,l.Z)(x,2),m=p[0],f=p[1],g=(0,o.useState)(new Array(0)),b=(0,l.Z)(g,2),v=b[0],w=b[1],y=function(){var n=(0,c.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,h.tO)();case 2:e=n.sent,r(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=(0,o.useCallback)((0,c.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,h.KH)(i);case 2:e=n.sent,f(e);case 4:case"end":return n.stop()}}),n)}))),[i]),C=(0,o.useCallback)((0,c.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,h.DR)(i);case 2:e=n.sent,w(e);case 4:case"end":return n.stop()}}),n)}))),[i]),M=(0,o.useCallback)((function(n){u(n.target.value)}),[u]),S=(0,o.useCallback)((function(){Z(),C()}),[Z,C]);return(0,o.useEffect)((function(){y(),S()}),[S]),0===m.length?(0,k.jsx)("select",{name:"usergroup",id:"usergroup_select",onChange:M,children:t.map((function(n,e){return(0,k.jsx)("option",{value:n.Usergroup_ID,children:n.Title},e)}))}):(0,k.jsxs)(j,{children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("select",{name:"usergroup",id:"usergroup_select",onChange:M,children:t.map((function(n,e){return(0,k.jsx)("option",{value:n.Usergroup_ID,children:n.Title},e)}))}),(0,k.jsx)(D.A$d,{onClick:S})]}),(0,k.jsx)(A,{attendences:m}),(0,k.jsx)(I,{evaluation:v})]})}}}]);
//# sourceMappingURL=157.8da0e1a2.chunk.js.map