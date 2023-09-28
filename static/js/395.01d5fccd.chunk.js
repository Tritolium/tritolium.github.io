"use strict";(self.webpackChunkspz_planner=self.webpackChunkspz_planner||[]).push([[395],{1755:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r,i,a,s,c=t(4165),l=t(5861),o=t(885),d=t(2791),u=t(7918),f=t(168),h=t(7924),v=h.ZP.div(r||(r=(0,f.Z)(["\n\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    .iosInstruction {\n        color: red;\n        font-size: 1.5em;\n\n        svg {\n            animation: none;\n            stroke: ",";\n            color: ",";\n            height: 1.5em;\n            width: 1.5em;\n        }\n    }\n\n    table {\n        padding-top: 4pt;\n        padding-bottom: 24pt;\n        border-collapse: collapse;\n        cursor: default;\n    }\n    img {\n        height: 30pt;\n    }\n\n    .event_header {\n        margin-top: 2vh;\n        border-top: 1px solid white;\n    }\n\n    svg {\n        height: 50pt;\n        width: 50pt;\n    }\n\n    th {\n        padding-top: 2.5vh;\n    }\n\n    canvas {\n        max-heigth: 30px;\n    }\n"])),(function(e){return e.theme.primaryLight}),(function(e){return e.theme.primaryLight})),p=h.ZP.p(i||(i=(0,f.Z)(["\n    font-size: smaller;\n    font-weight: bold;\n    border-radius: 5px;\n    padding: 15px;\n\n    svg {\n        height: 5em;\n        width: 5em;\n        stroke: red;\n        animation: blink 1s linear infinite;\n    }\n\n    @media (min-width: ",") {\n        display: none;\n    }\n\n    @keyframes blink {\n        0%{stroke: ",";}\n        50%{stroke: red;}\n        100%{stroke: ",";}\n    }\n"])),(function(e){return e.theme.medium}),(function(e){return e.theme.primaryLight}),(function(e){return e.theme.primaryLight})),g=h.ZP.div(a||(a=(0,f.Z)(["\n    font-size: smaller;\n    padding-inline-start: 1.5em;\n    padding-inline-end: 1.5em;\n\n    li {\n        padding: 1em 0 1em 0;\n    }\n"]))),x=h.ZP.textarea(s||(s=(0,f.Z)(["\n    transition-property: transform, opacity, max-height;\n    transition-duration: 0.75s;\n    transition-timing-function: ease;\n    \n    transform: ",";\n    opacity: ",";\n    max-height: ",";\n\n"])),(function(e){return e.open?"translateX(0)":"translateX(-100%)"}),(function(e){return e.open?"1":"0"}),(function(e){return e.open?"160px":"0"})),m=t(178),b=t(1578),j=t(1607),w=t(7526),A=t(9126),y=t(9879),k=t(152),D=t(3077),S=t(5089),Z=t(184),T=(0,d.lazy)((function(){return Promise.resolve().then(t.bind(t,7763))})),I=(0,d.lazy)((function(){return Promise.all([t.e(373),t.e(730)]).then(t.bind(t,7730))})),L=(0,d.lazy)((function(){return Promise.all([t.e(585),t.e(477)]).then(t.bind(t,8477))})),F=function(e){var n=e.fullname,t=(0,d.useState)(new Array(0)),r=(0,o.Z)(t,2),i=r[0],a=r[1],s=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,u.Ni)().then((function(e){var n=e.filter((function(e){var n=new Date(e.Birthday),t=new Date;n.setFullYear(t.getFullYear());var r=n.getTime()-t.getTime();return-6048e5<r&&r<6048e5})).sort((function(e,n){var t=new Date(e.Birthday),r=new Date(n.Birthday);return t.getMonth()<r.getMonth()?-1:t.getMonth()>r.getMonth()?1:t.getDate()<r.getDate()?-1:t.getDate()>r.getDate()?1:0}));a(n)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if((0,d.useEffect)((function(){s()}),[]),i.length>0)return(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h3",{children:"Geburtstage:"}),null===i||void 0===i?void 0:i.map((function(e){var t=new Date(e.Birthday),r=new Date,i=r.getDate()===t.getDate();return n===e.Fullname&&i?(0,Z.jsxs)("div",{children:["Herzlichen Gl\xfcckwunsch, ",n.split(" ")[0],"!"]}):(0,Z.jsxs)("div",{children:[e.Fullname,": ",t.getDate(),".",t.getMonth()+1,", ",r.getFullYear()-t.getFullYear()," Jahre"]},e.Fullname)}))]})},E=function(e){var n=e.read,t=(0,d.useState)(!1),r=(0,o.Z)(t,2),i=r[0],a=r[1];return(0,Z.jsxs)(g,{id:"changelog",children:[n||i?(0,Z.jsx)(Z.Fragment,{}):(0,Z.jsx)(T,{onClick:function(){a(!0),localStorage.setItem("changelogRead",S.i)},children:"\xc4nderungen verbergen"}),n||i?(0,Z.jsx)(Z.Fragment,{}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("h2",{children:["Neu in ",S.i,":"]}),(0,Z.jsxs)("ul",{children:[(0,Z.jsxs)("li",{children:[(0,Z.jsx)("i",{children:"Benachrichtigungen:"}),' Mit der Glocke oben rechts k\xf6nnen Benachrichtigungen aktiviert werden. Vorraussetzung ist, dass die App "installiert" ist.']}),(0,Z.jsxs)("li",{children:[(0,Z.jsx)("i",{children:"Passw\xf6rter:"})," Der Zugang kann jetzt mit einem Passwort versehen werden. Unter Einstellung setzen oder ver\xe4ndern."]}),(0,Z.jsxs)("li",{children:[(0,Z.jsx)("i",{children:"Startseite:"})," Das Layout der Startseite wurde angepasst und erweitert."]})]})]})]})},P=function(e){var n=e.clothing;return(0,Z.jsx)(d.Suspense,{children:0!==parseInt(n)?(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:"Bekleidung:"}),(0,Z.jsx)("td",{children:(0,Z.jsx)(m.Bk,{clothing:parseInt(n)})})]}):(0,Z.jsx)(Z.Fragment,{})})},X=function(e){var n=e.nextPractice,t=e.auth_level,r=(0,d.useState)(),i=(0,o.Z)(r,2),a=i[0],s=i[1],f=new Date(null===n||void 0===n?void 0:n.Date),h=null===n||void 0===n?void 0:n.Attendence,v=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(n,t){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r={})[""+n]=t,e.next=4,(0,u.IZ)(r,!1);case 4:p();case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=(0,d.useCallback)((0,l.Z)((0,c.Z)().mark((function e(){var t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.B$)(null===n||void 0===n?void 0:n.Event_ID,null===n||void 0===n?void 0:n.Usergroup_ID);case 2:return t=e.sent,s(t),e.abrupt("return");case 5:case"end":return e.stop()}}),e)}))),[n]);return(0,d.useEffect)((function(){void 0!==n&&p()}),[n,p]),(0,d.useEffect)((function(){var e=setInterval((function(){p()}),6e4);return function(){return clearInterval(e)}}),[p]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("tr",{className:"event_header",children:[(0,Z.jsx)("td",{children:null===n||void 0===n?void 0:n.Type}),(0,Z.jsx)("td",{children:null===n||void 0===n?void 0:n.Location}),(0,Z.jsx)("td",{rowSpan:2,children:(0,Z.jsx)(I,{event_id:null===n||void 0===n?void 0:n.Event_ID,states:3,attendence:h,onClick:v,cancelled:null===n||void 0===n?void 0:n.Type.includes("Abgesagt")})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsxs)("td",{children:[f.getDate(),".",f.getMonth()+1,".",f.getFullYear()]}),(0,Z.jsxs)("td",{children:[null===n||void 0===n?void 0:n.Begin.slice(0,5)," Uhr"]})]}),(0,Z.jsx)("tr",{children:t>1?(0,Z.jsx)("td",{colSpan:3,children:(0,Z.jsx)(M,{event:a,auth_level:t})}):(0,Z.jsx)(Z.Fragment,{})})]})},J=function(e){var n=e.nextEvent,t=e.auth_level,r=(0,d.useState)(),i=(0,o.Z)(r,2),a=i[0],s=i[1],f=(0,d.useState)(),h=(0,o.Z)(f,2),v=h[0],p=h[1],g=null===n||void 0===n?void 0:n.Attendence,x=new Date(null===n||void 0===n?void 0:n.Date),m=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(n,t){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r={})[""+n]=t,e.next=4,(0,u.IZ)(r,!1);case 4:b();case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),b=(0,d.useCallback)((0,l.Z)((0,c.Z)().mark((function e(){var t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.B$)(null===n||void 0===n?void 0:n.Event_ID,null===n||void 0===n?void 0:n.Usergroup_ID);case 2:return t=e.sent,p(t),e.abrupt("return");case 5:case"end":return e.stop()}}),e)}))),[n]);return(0,d.useEffect)((function(){var e=new Date(null===n||void 0===n?void 0:n.Date),t=new Date;t.setDate(t.getDate()+6),void 0!==n&&e<t&&(0,u.p)(n).then((function(e){s(e)})),void 0!==n&&b()}),[n,b]),(0,d.useEffect)((function(){var e=setInterval((function(){b()}),6e4);return function(){return clearInterval(e)}}),[b]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("tr",{className:"event_header",children:[(0,Z.jsx)("td",{children:null===n||void 0===n?void 0:n.Type}),(0,Z.jsx)("td",{children:null===n||void 0===n?void 0:n.Location})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsxs)("td",{children:[x.getDate(),".",x.getMonth()+1,".",x.getFullYear()]}),(0,Z.jsx)("td",{children:"12:34:56"!==(null===n||void 0===n?void 0:n.Begin)?"".concat(null===n||void 0===n?void 0:n.Begin.slice(0,5)," Uhr"):"-"}),(0,Z.jsx)("td",{rowSpan:3,children:(0,Z.jsx)(d.Suspense,{children:(0,Z.jsx)(I,{event_id:null===n||void 0===n?void 0:n.Event_ID,states:3,attendence:g,onClick:m})})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:"Hin:"}),(0,Z.jsx)("td",{children:"12:34:56"!==(null===n||void 0===n?void 0:n.Departure)?"".concat(null===n||void 0===n?void 0:n.Departure.slice(0,5)," Uhr"):"-"})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:"Zur\xfcck:"}),(0,Z.jsx)("td",{children:"12:34:56"!==(null===n||void 0===n?void 0:n.Leave_dep)?"".concat(null===n||void 0===n?void 0:n.Leave_dep.slice(0,5)," Uhr"):"-"})]}),(0,Z.jsx)(P,{clothing:null===n||void 0===n?void 0:n.Clothing}),a?(0,Z.jsx)(d.Suspense,{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:"Wetter:"}),(0,Z.jsx)("td",{children:"".concat(a.Temperature,"\xb0C")}),(0,Z.jsx)("td",{children:(0,Z.jsx)(L,{code:a.Weathercode})})]})}):(0,Z.jsx)(Z.Fragment,{}),(0,Z.jsx)("tr",{children:t>0?(0,Z.jsx)("td",{colSpan:3,children:(0,Z.jsx)(M,{event:v,auth_level:t})}):(0,Z.jsx)(Z.Fragment,{})})]})},C=function(){var e=(0,d.useState)(!1),n=(0,o.Z)(e,2),t=n[0],r=n[1],i=(0,d.useCallback)((function(){if(r(!t),t){var e=document.getElementById("feedbackcontent").value;(0,u.S3)(e)}document.getElementById("feedbackform").reset()}),[t]),a=(0,d.useCallback)((function(){r(!1),document.getElementById("feedbackform").reset()}),[]);return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{children:[(0,Z.jsx)(T,{onClick:i,children:t?"Senden":"Feedback"}),t?(0,Z.jsx)(T,{onClick:a,children:"Abbrechen"}):(0,Z.jsx)(Z.Fragment,{})]}),(0,Z.jsx)("form",{id:"feedbackform",children:(0,Z.jsx)(x,{"aria-label":"Feedback-Feld",open:t,name:"content",id:"feedbackcontent",cols:"30",rows:"10"})})]})},M=function(e){var n=e.event,t=e.auth_level;k.kL.register(k.uw,k.f$,k.ZL,k.Dx,k.u,k.De);var r={animation:{duration:0},indexAxis:"y",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:t>1}},scales:{x:{stacked:!0,display:!1},y:{stacked:!0,display:!1}}},i={labels:[""],datasets:[{data:[null===n||void 0===n?void 0:n.Consent],backgroundColor:j.rS.greenRGB},{data:[null===n||void 0===n?void 0:n.Missing],backgroundColor:j.rS.blueRGB},{data:[null===n||void 0===n?void 0:n.Maybe],backgroundColor:j.rS.yellowRGB},{data:[null===n||void 0===n?void 0:n.Refusal],backgroundColor:j.rS.redRGB}]};return(0,Z.jsx)(D.$Q,{height:"30px",options:r,data:i})},B=function(){var e=(0,d.useState)(new Array(0)),n=(0,o.Z)(e,2),t=n[0],r=n[1],i=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(){var n,t,i,a,s,l,o,d,f,h,v,p,g,x,m,b;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("api_token"),e.next=3,fetch("".concat(u.ho,"/api/eval.php?api_token=").concat(n,"&version"));case 3:return t=e.sent,e.next=6,t.json();case 6:for(s in i=e.sent,a=[],i)a.push([s,i[s]]);for(o in a.sort((function(e,n){if(""===e[0])return-1;if(""===n[0])return 1;var t=e[0].split("."),r=n[0].split("."),i=parseInt(t[0].substring(1)),a=parseInt(r[0].substring(1));if(i!==a)return i-a;var s=parseInt(t[1]),c=parseInt(r[1]);return s!==c?s-c:parseInt(t[2])-parseInt(r[2])})),l=[],a)d=a[o][0].split("."),f=S.i.split("."),h=parseInt(d[0].substring(1)),v=parseInt(f[0].substring(1)),p=parseInt(d[1]),g=parseInt(f[1]),x=parseInt(d[2]),m=parseInt(f[2]),b=void 0,b=h===v?p===g&&(x===m||isNaN(x)&&isNaN(m))?j.rS.greenRGB:p===g?j.rS.yellowRGB:j.rS.redRGB:isNaN(h)?j.rS.blueRGB:j.rS.redRGB,l.push({label:a[o][0],data:[a[o][1]],backgroundColor:b});r(l);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){i()}),[]),k.kL.register(k.uw,k.f$,k.ZL,k.Dx,k.u,k.De);var a={labels:[""],datasets:t};return(0,Z.jsx)(D.$Q,{options:{plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},data:a})},z=function(e){var n=e.fullname,t=e.auth_level,r=(0,d.useState)(new Array(0)),i=(0,o.Z)(r,2),a=i[0],s=i[1],f=(0,d.useState)(new Array(0)),h=(0,o.Z)(f,2),g=h[0],x=h[1],m=(0,d.useState)(!1),k=(0,o.Z)(m,2),D=k[0],T=k[1],I=(0,d.useState)(!1),L=(0,o.Z)(I,2),P=L[0],M=L[1],z=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(){var n,t,r,i,a,l;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Q7)();case 2:n=e.sent,t=n.filter((function(e,n){return e.Date<n.Date?1:e.Date===n.Date?e.Begin<n.Begin:-1})),r=t.filter((function(e){return!(e.Type.toLowerCase().includes("probe")||e.Type.toLowerCase().includes("\xfcben"))}))[0],i=t.filter((function(e){return!(e.Type.toLowerCase().includes("probe")||e.Type.toLowerCase().includes("\xfcben"))})).filter((function(e){var n=new Date(r.Date),t=new Date(e.Date);return t.getTime()===n.getTime()||(t.setDate(t.getDate()-1),t.getTime()===n.getTime()||(t.setDate(t.getDate()-1),t.getTime()===n.getTime()))})),a=t.filter((function(e){return e.Type.toLowerCase().includes("probe")||e.Type.toLowerCase().includes("\xfcben")}))[0],l=t.filter((function(e){return e.Type.toLowerCase().includes("probe")||e.Type.toLowerCase().includes("\xfcben")})).filter((function(e){var n=new Date(a.Date),t=new Date(e.Date);return t.getTime()===n.getTime()||(t.setDate(t.getDate()-1),t.getTime()===n.getTime()||(t.setDate(t.getDate()-1),t.getTime()===n.getTime()))})),s(i),x(l);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){z();var e=(0,u.Ij)();M("browser tab"===(0,u.ol)()&&window.innerWidth<parseInt(j.rS.medium.split("px")[0])&&(y.J||!("Mac OS"!==e&&"iOS"!==e)))}),[]),(0,Z.jsxs)(v,{children:[P?(0,Z.jsx)(p,{children:(0,Z.jsx)(b.bS7,{onClick:function(){var e=(0,u.Ij)();"Mac OS"!==e&&"iOS"!==e?y.J.prompt():(T(!0),M(!1))}})}):(0,Z.jsx)(Z.Fragment,{}),P?(0,Z.jsx)(p,{children:"Diese App kann auch installiert werden, einfach auf das Icon klicken!"}):(0,Z.jsx)(Z.Fragment,{}),D?(0,Z.jsxs)(p,{className:"iosInstruction",children:["Erst ",(0,Z.jsx)(w.Hs8,{}),", dann ",(0,Z.jsx)(A.b5v,{})]}):(0,Z.jsx)(Z.Fragment,{}),(0,Z.jsx)(E,{read:localStorage.getItem("changelogRead")===S.i}),(0,Z.jsx)(F,{fullname:n}),(0,Z.jsx)("table",{children:(0,Z.jsxs)("tbody",{children:[(0,Z.jsxs)(d.Suspense,{children:[g.length>0?(0,Z.jsx)("tr",{children:(0,Z.jsxs)("th",{colSpan:3,children:["N\xe4chste Probe",g.length>1?"n":"",":"]})}):(0,Z.jsx)(Z.Fragment,{}),g.length>0?g.map((function(e){return(0,Z.jsx)(X,{nextPractice:e,auth_level:t},"nextPractice_".concat(e.Event_ID))})):(0,Z.jsx)(Z.Fragment,{})]}),(0,Z.jsxs)(d.Suspense,{children:[a.length>0?(0,Z.jsx)("tr",{children:(0,Z.jsxs)("th",{colSpan:3,children:["N\xe4chste",1===a.length?"r":""," Termin",a.length>1?"e":"",":"]})}):(0,Z.jsx)(Z.Fragment,{}),a.length>0?a.map((function(e){return(0,Z.jsx)(J,{nextEvent:e,auth_level:t},"nextEvent_".concat(e.Event_ID))})):(0,Z.jsx)(Z.Fragment,{})]}),t>2?(0,Z.jsx)("tr",{children:(0,Z.jsx)("td",{colSpan:3,children:(0,Z.jsx)(B,{})})}):(0,Z.jsx)(Z.Fragment,{})]})}),(0,Z.jsx)(C,{})]})}},178:function(e,n,t){t.d(n,{Bk:function(){return u},vN:function(){return f},Ip:function(){return d}});var r=t.p+"static/media/polo.712b26af13af64644991.png",i=t.p+"static/media/polod.105b441f9c3ea18617b0.png",a=t.p+"static/media/shirt.fbcc2ca982466cf1415e.png",s=t.p+"static/media/suit.f2947921472d3fcaf13d.png",c=t.p+"static/media/cow.d8758b23c18f146ca6dd.png",l=t.p+"static/media/pants.0c00db6e187282389039.png",o=t(184),d=7,u=function(e){var n,t=e.clothing;switch(parseInt(t)){case 1:n=r;break;case 2:n=i;break;case 3:n=a;break;case 4:n=s;break;case 5:n=c;break;case 6:n=l}return n?(0,o.jsx)("img",{src:n,alt:"Uniform"}):(0,o.jsx)(o.Fragment,{})},f=function(e){var n,t=e.clothing,d=e.onClick;switch(parseInt(t)){case 0:n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHJAAAByQFhD1RcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAcVQTFRF////AKqqGrPMK7/VJrPQIbXWJrfVJbnTJLfVJLbTJrjUJbjTJLbUJbbTJbfTJrfSJbfTJrfUJLjUJrfTJbfTJLfTJbfTJbfTJbfSJbfTJbfTJbfTJbfTJbfTJbfTJrfTJ7jTKLjUKbjUK7nULbrVLrrVL7rVMLvVMbvVNLzWN73XOb3XO77XPL/YPb/YPr/YP7/YQ8HZRMHZRcHZSsPaS8PbTMTbTcTbT8XbUMXcUcXcUsbcVMfcWMjdWcjeWsneW8neXMneXcneXcreXsrfX8rfYMrfYcvfY8zgZ83gac3has7ha87hbs/icNDicdDic9HjddHjddLjdtLje9TkfNTlfdTlftTlgNXlhdfmidjni9nojNnojdnokdvpldzql93qnt/sn9/soeDsouDspuLtqeLuquPuq+PurOTur+XvseXvsubvuOjxvuryv+rywerywevzw+vzx+z0x+30y+70ze71z+/10fD20vD21PH21/L32PL32vP42/P43PP43fT44/b55Pb55Pb65vf66fj76vj77Pn77fn77/r88Pr88vv89Pv99fz99/z9+P3++f3++v3++/7+/P7+/f7//v//////L+Q+dAAAAB50Uk5TAAMKDBsfPExOYmRocHSKjqSwtr7Ay9XY5ery+Pn+bfME6gAAAvZJREFUWMOtV+dfE0EQvRDSKykEkrBEEsWo2AsWLNgVLICKYgMLFuyoUVA0VkBQiLm/1+Ru97ybLXf5Je9bZt+b7M3OzM5KEgd2tz8YjiaSyUQ0HPS77VJNaPZFUsiAVMTXbFXdFIh3IAY64oEmC3Kbtw1x0ea1meldrUiIVpdQ7oghU8QcfL2zHVlAu5On96SRJaQ97OiFkGWEGLG0taAa0EJ7YP1/bsfR4avnDm3rYuyB+n6KsnZouiyrWHx0OguXQRycMH65iSVZj58XYCQNZ+GA59f7SYZ4sQWcpj4fYP4Mrcg0Pm8EGaXLX6A/siqz8L7bSNOy2gbyf/sCkfwqTN19/kXzMAnqgpylF2zgGRE8zCu/L/7Av1c3G4leXP+gfvcQ/RixbCIexkF1q/0hADbwGLOnM5rpJDZ9BNSA4iAOrEXM3q2zfVNNy51Galzpf6B/Zf+q5NessPSALlftkz6wgR7MHdQb32IjSAXkqziIwCz/rlAL+t2uL6n6UgZwI5X+n4IOzlS/oXxAb7qFN/AOclN2yU2Xat/L4uRBveEYDot8meK6Jb959zhBCvNDjlrzS0FT/XlSGcs76cWgFDbTj5K2Il9irIalqIn+mlZK46zlqJQQ629q+hvM9YSUFOrHiLw0wiYkxQ52kc70ZwDxHIg+IVPA+qV+HiUhDOIw0fdxKVHhMd5T9eVTfEpYmEhvVAcPBJSgMJUXVQf7BRQ/q5gINuCLLSNw4GaUs4Y16iE+Eegr5Uw3lP94qoSwV+AgwmhpOmydleXfE6JM8zGaquEjDg90i/RKU6Xaeg2IMy8WAzqFDgLMq02nHplZKd5Zx9Xjq426XDXcV45xNstb93Kud4J+XEvXOXrteqcGDIzb2MErjgMXf8QxFKM8w9bHREOWgivYwRRTbxiy6DGvivxXdS7Zx9KnnWaDZgV75yr6+UHmBjxWRl3UdXz0bJ6pDzV+2K573K//wdGAJ0/9j676n30NeHjW//RtwOO7tuf/PxInRcIOjW3pAAAAAElFTkSuQmCC";break;case 1:n=r;break;case 2:n=i;break;case 3:n=a;break;case 4:n=s;break;case 5:n=c;break;case 6:n=l}return n?(0,o.jsx)("img",{src:n,alt:"Uniform",onClick:d}):(0,o.jsx)(o.Fragment,{})}},7762:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(181);function i(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,r.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){l=!0,s=e},f:function(){try{c||null==t.return||t.return()}finally{if(l)throw s}}}}}}]);
//# sourceMappingURL=395.01d5fccd.chunk.js.map