"use strict";(self.webpackChunkspz_planner=self.webpackChunkspz_planner||[]).push([[544],{7722:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r,s,a=n(168),c=n(885),i=n(8934),u=n(7730),l=n.p+"static/media/4.95cce34e11d6b0d3b99c.png",o=n.p+"static/media/5.2bc62195d7a1e7833135.png",d=n(6031),g=n(2791),p=n(184),h=function(e){switch(parseInt(e)){case 4:return(0,p.jsx)("img",{src:l,alt:"Logo R\xf6nk"});case 5:return(0,p.jsx)("img",{src:o,alt:"Logo D\xfcn"});case 7:return(0,p.jsx)("img",{src:"https://sgv.de/assets/images/1/logo_sgv_web-fc5e97ec.svg",alt:"Logo SGV"});default:return(0,p.jsx)(p.Fragment,{})}},x=d.ZP.table(r||(r=(0,a.Z)(["\n    border-collapse: collapse;\n\n    img {\n        max-height: 64px;\n        max-width: 64px;\n    }\n\n    th {\n        img {\n            transform: translateY(20%);\n            max-height: 27px;\n            max-width: 128px;\n        }\n    }\n"]))),f=d.ZP.td(s||(s=(0,a.Z)(["\n    border-top: 1px solid #ccc;\n    :nth-child(1) {\n        text-align: center;\n    }\n    :nth-child(2) {\n        text-align: center;\n    }\n"]))),m=function(e){var t,n=e.attendences,r=e.fullname,s=e.states,a=e.selectedDateFilter,l=e.selectedEventFilter,o=e.onClick,d=(0,g.useState)(!0),m=(0,c.Z)(d,2),b=m[0],j=m[1];return(0,g.useEffect)((function(){j(n.every((function(e){return e.Usergroup_ID===n[0].Usergroup_ID})))}),[n]),(0,p.jsxs)(x,{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsxs)("th",{children:["Termine: ",b?h(null===(t=n[0])||void 0===t?void 0:t.Usergroup_ID):(0,p.jsx)(p.Fragment,{})]}),(0,p.jsx)("th",{children:r}),(0,p.jsx)("th",{})]})}),(0,p.jsx)("tbody",{children:n.filter((function(e){var t=new Date(e.Date);return t.setHours(23,59,59,999),new Date<=t})).filter((function(e){switch(l){default:case"all":return!0;case"practice":return e.Type.includes("Probe")||e.Type.includes("\xdcben");case"else":return!(e.Type.includes("Probe")||e.Type.includes("\xdcben"))}})).filter((function(e){var t=new Date(e.Date),n=new Date;switch(a){default:case"all":return!0;case"one":return t.getTime()-n.getTime()<6048e5;case"two":return t.getTime()-n.getTime()<12096e5;case"four":return t.getTime()-n.getTime()<24192e5;case"eight":return t.getTime()-n.getTime()<48384e5}})).map((function(e){return(0,p.jsxs)("tr",{children:[b?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)(f,{children:h(e.Usergroup_ID)}),(0,p.jsx)(f,{children:(0,p.jsx)(i.Z,{dateprops:e})}),(0,p.jsx)(f,{children:(0,p.jsx)(u.default,{states:s,attendence:e.Attendence,onClick:o,event_id:e.Event_ID,cancelled:e.Type.includes("Abgesagt")})})]},e.Location+e.Event_ID)}))})]})}},8934:function(e,t,n){var r=n(184),s=function(e){switch(e){default:return"";case 0:return"Sonntag";case 1:return"Montag";case 2:return"Dienstag";case 3:return"Mittwoch";case 4:return"Donnerstag";case 5:return"Freitag";case 6:return"Samstag"}},a=function(e){switch(e){default:return"";case 0:return"Januar";case 1:return"Februar";case 2:return"M\xe4rz";case 3:return"April";case 4:return"Mai";case 5:return"Juni";case 6:return"Juli";case 7:return"August";case 8:return"September";case 9:return"Oktober";case 10:return"November";case 11:return"Dezember"}};t.Z=function(e){var t=e.dateprops,n=new Date(t.Date),c=s(n.getDay()),i=n.getDate(),u=n.getMonth(),l=n.getFullYear();return(0,r.jsxs)("div",{children:[t.Type," ",t.Location,(0,r.jsx)("br",{}),i,". ",a(u)," ",l,(0,r.jsx)("br",{}),c]})}}}]);
//# sourceMappingURL=544.9b9bf301.chunk.js.map