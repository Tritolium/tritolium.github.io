"use strict";(self.webpackChunkspz_planner=self.webpackChunkspz_planner||[]).push([[395],{1755:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r,i,a,s,l=t(4165),o=t(5861),c=t(885),d=t(2791),u=t(7918),f=t(168),h=t(7924),g=h.ZP.div(r||(r=(0,f.Z)(["\n\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    .iosInstruction {\n        color: red;\n        font-size: 1.5em;\n\n        svg {\n            animation: none;\n            stroke: ",";\n            color: ",";\n            height: 1.5em;\n            width: 1.5em;\n        }\n    }\n\n    table {\n        padding-top: 4pt;\n        padding-bottom: 24pt;\n        border-collapse: collapse;\n        cursor: default;\n    }\n    img {\n        height: 30pt;\n    }\n\n    .event_header {\n        margin-top: 2vh;\n        border-top: 1px solid white;\n    }\n\n    svg {\n        height: 50pt;\n        width: 50pt;\n    }\n\n    th {\n        padding-top: 2.5vh;\n    }\n\n    canvas {\n        max-heigth: 30px;\n    }\n"])),(function(e){return e.theme.primaryLight}),(function(e){return e.theme.primaryLight})),v=h.ZP.p(i||(i=(0,f.Z)(["\n    font-size: smaller;\n    font-weight: bold;\n    border-radius: 5px;\n    padding: 15px;\n\n    svg {\n        height: 5em;\n        width: 5em;\n        stroke: red;\n        animation: blink 1s linear infinite;\n    }\n\n    @media (min-width: ",") {\n        display: none;\n    }\n\n    @keyframes blink {\n        0%{stroke: ",";}\n        50%{stroke: red;}\n        100%{stroke: ",";}\n    }\n"])),(function(e){return e.theme.medium}),(function(e){return e.theme.primaryLight}),(function(e){return e.theme.primaryLight})),p=h.ZP.ul(a||(a=(0,f.Z)(["\n    font-size: smaller;\n    padding-inline-start: 1.5em;\n    padding-inline-end: 1.5em;\n\n    li {\n        padding: 1em 0 1em 0;\n    }\n"]))),x=h.ZP.textarea(s||(s=(0,f.Z)(["\n    transition-property: transform, opacity, max-height;\n    transition-duration: 0.75s;\n    transition-timing-function: ease;\n    \n    transform: ",";\n    opacity: ",";\n    max-height: ",";\n\n"])),(function(e){return e.open?"translateX(0)":"translateX(-100%)"}),(function(e){return e.open?"1":"0"}),(function(e){return e.open?"160px":"0"})),j=t(178),m=t(1578),b=t(1607),A=t(7526),w=t(9126),y=t(9879),D=t(152),k=t(3077),S=t(5089),T=t(184),I=(0,d.lazy)((function(){return Promise.resolve().then(t.bind(t,7763))})),L=(0,d.lazy)((function(){return Promise.all([t.e(373),t.e(730)]).then(t.bind(t,7730))})),Z=(0,d.lazy)((function(){return Promise.all([t.e(585),t.e(477)]).then(t.bind(t,8477))})),F=function(e){var n=e.fullname,t=(0,d.useState)(new Array(0)),r=(0,c.Z)(t,2),i=r[0],a=r[1],s=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,u.Ni)().then((function(e){var n=e.filter((function(e){var n=new Date(e.Birthday),t=new Date;n.setFullYear(t.getFullYear());var r=n.getTime()-t.getTime();return-6048e5<r&&r<6048e5})).sort((function(e,n){var t=new Date(e.Birthday),r=new Date(n.Birthday);return t.getMonth()<r.getMonth()?-1:t.getMonth()>r.getMonth()?1:t.getDate()<r.getDate()?-1:t.getDate()>r.getDate()?1:0}));a(n)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if((0,d.useEffect)((function(){s()}),[]),i.length>0)return(0,T.jsxs)("div",{children:[(0,T.jsx)("h3",{children:"Geburtstage:"}),null===i||void 0===i?void 0:i.map((function(e){var t=new Date(e.Birthday),r=new Date,i=r.getDate()===t.getDate();return n===e.Fullname&&i?(0,T.jsxs)("div",{children:["Herzlichen Gl\xfcckwunsch, ",n.split(" ")[0],"!"]}):(0,T.jsxs)("div",{children:[e.Fullname,": ",t.getDate(),".",t.getMonth()+1,", ",r.getFullYear()-t.getFullYear()," Jahre"]},e.Fullname)}))]})},P=function(e){var n=e.read,t=(0,d.useState)(!1),r=(0,c.Z)(t,2),i=r[0],a=r[1];return(0,T.jsxs)(p,{children:[n||i?(0,T.jsx)(T.Fragment,{}):(0,T.jsx)(I,{onClick:function(){a(!0),localStorage.setItem("changelogRead",S.i)},children:"\xc4nderungen verbergen"}),n||i?(0,T.jsx)(T.Fragment,{}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("h2",{children:["Neu in ",S.i,":"]}),(0,T.jsxs)("li",{children:[(0,T.jsx)("i",{children:"Benachrichtigungen:"}),' Mit der Glocke oben rechts k\xf6nnen Benachrichtigungen aktiviert werden. Vorraussetzung ist, dass die App "installiert" ist.']}),(0,T.jsxs)("li",{children:[(0,T.jsx)("i",{children:"Passw\xf6rter:"})," Der Zugang kann jetzt mit einem Passwort versehen werden. Unter Einstellung setzen oder ver\xe4ndern."]}),(0,T.jsxs)("li",{children:[(0,T.jsx)("i",{children:"Startseite:"})," Das Layout der Startseite wurde angepasst und erweitert."]})]})]})},E=function(e){var n=e.clothing;return(0,T.jsx)(d.Suspense,{children:0!==parseInt(n)?(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:"Bekleidung:"}),(0,T.jsx)("td",{children:(0,T.jsx)(j.Bk,{clothing:parseInt(n)})})]}):(0,T.jsx)(T.Fragment,{})})},X=function(e){var n=e.nextPractice,t=e.auth_level,r=(0,d.useState)(),i=(0,c.Z)(r,2),a=i[0],s=i[1],l=new Date(null===n||void 0===n?void 0:n.Date),o=null===n||void 0===n?void 0:n.Attendence;(0,d.useEffect)((function(){void 0!==n&&(0,u.B$)(null===n||void 0===n?void 0:n.Event_ID,null===n||void 0===n?void 0:n.Usergroup_ID).then((function(e){s(e)}))}),[n]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("tr",{className:"event_header",children:[(0,T.jsx)("td",{children:null===n||void 0===n?void 0:n.Type}),(0,T.jsx)("td",{children:null===n||void 0===n?void 0:n.Location}),(0,T.jsx)("td",{rowSpan:2,children:(0,T.jsx)(L,{event_id:null===n||void 0===n?void 0:n.Event_ID,states:3,attendence:o,onClick:function(e,n){var t={};t[""+e]=n,(0,u.IZ)(t,!1)},cancelled:null===n||void 0===n?void 0:n.Type.includes("Abgesagt")})})]}),(0,T.jsxs)("tr",{children:[(0,T.jsxs)("td",{children:[l.getDate(),".",l.getMonth()+1,".",l.getFullYear()]}),(0,T.jsxs)("td",{children:[null===n||void 0===n?void 0:n.Begin.slice(0,5)," Uhr"]})]}),(0,T.jsx)("tr",{children:t>1?(0,T.jsx)("td",{colSpan:3,children:(0,T.jsx)(B,{event:a,auth_level:t})}):(0,T.jsx)(T.Fragment,{})})]})},J=function(e){var n=e.nextEvent,t=e.auth_level,r=(0,d.useState)(),i=(0,c.Z)(r,2),a=i[0],s=i[1],l=(0,d.useState)(),o=(0,c.Z)(l,2),f=o[0],h=o[1],g=null===n||void 0===n?void 0:n.Attendence,v=new Date(null===n||void 0===n?void 0:n.Date);(0,d.useEffect)((function(){var e=new Date(null===n||void 0===n?void 0:n.Date),t=new Date;t.setDate(t.getDate()+6),void 0!==n&&e<t&&(0,u.p)(n).then((function(e){s(e)})),void 0!==n&&(0,u.B$)(null===n||void 0===n?void 0:n.Event_ID,null===n||void 0===n?void 0:n.Usergroup_ID).then((function(e){h(e)}))}),[n]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("tr",{className:"event_header",children:[(0,T.jsx)("td",{children:null===n||void 0===n?void 0:n.Type}),(0,T.jsx)("td",{children:null===n||void 0===n?void 0:n.Location})]}),(0,T.jsxs)("tr",{children:[(0,T.jsxs)("td",{children:[v.getDate(),".",v.getMonth()+1,".",v.getFullYear()]}),(0,T.jsx)("td",{children:"12:34:56"!==(null===n||void 0===n?void 0:n.Begin)?"".concat(null===n||void 0===n?void 0:n.Begin.slice(0,5)," Uhr"):"-"}),(0,T.jsx)("td",{rowSpan:3,children:(0,T.jsx)(d.Suspense,{children:(0,T.jsx)(L,{event_id:null===n||void 0===n?void 0:n.Event_ID,states:3,attendence:g,onClick:function(e,n){var t={};t[""+e]=n,(0,u.IZ)(t,!1)}})})})]}),(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:"Hin:"}),(0,T.jsx)("td",{children:"12:34:56"!==(null===n||void 0===n?void 0:n.Departure)?"".concat(null===n||void 0===n?void 0:n.Departure.slice(0,5)," Uhr"):"-"})]}),(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:"Zur\xfcck:"}),(0,T.jsx)("td",{children:"12:34:56"!==(null===n||void 0===n?void 0:n.Leave_dep)?"".concat(null===n||void 0===n?void 0:n.Leave_dep.slice(0,5)," Uhr"):"-"})]}),(0,T.jsx)(E,{clothing:null===n||void 0===n?void 0:n.Clothing}),a?(0,T.jsx)(d.Suspense,{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:"Wetter:"}),(0,T.jsx)("td",{children:"".concat(a.Temperature,"\xb0C")}),(0,T.jsx)("td",{children:(0,T.jsx)(Z,{code:a.Weathercode})})]})}):(0,T.jsx)(T.Fragment,{}),(0,T.jsx)("tr",{children:t>0?(0,T.jsx)("td",{colSpan:3,children:(0,T.jsx)(B,{event:f,auth_level:t})}):(0,T.jsx)(T.Fragment,{})})]})},M=function(){var e=(0,d.useState)(!1),n=(0,c.Z)(e,2),t=n[0],r=n[1],i=(0,d.useCallback)((function(){if(r(!t),t){var e=document.getElementById("feedbackcontent").value;(0,u.S3)(e)}document.getElementById("feedbackform").reset()}),[t]),a=(0,d.useCallback)((function(){r(!1),document.getElementById("feedbackform").reset()}),[]);return(0,T.jsxs)("div",{children:[(0,T.jsxs)("div",{children:[(0,T.jsx)(I,{onClick:i,children:t?"Senden":"Feedback"}),t?(0,T.jsx)(I,{onClick:a,children:"Abbrechen"}):(0,T.jsx)(T.Fragment,{})]}),(0,T.jsx)("form",{id:"feedbackform",children:(0,T.jsx)(x,{open:t,name:"content",id:"feedbackcontent",cols:"30",rows:"10"})})]})},B=function(e){var n=e.event,t=e.auth_level;D.kL.register(D.uw,D.f$,D.ZL,D.Dx,D.u,D.De);var r={animation:{duration:0},indexAxis:"y",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:t>1}},scales:{x:{stacked:!0,display:!1},y:{stacked:!0,display:!1}}},i={labels:[""],datasets:[{data:[null===n||void 0===n?void 0:n.Consent],backgroundColor:b.rS.greenRGB},{data:[null===n||void 0===n?void 0:n.Missing],backgroundColor:b.rS.blueRGB},{data:[null===n||void 0===n?void 0:n.Maybe],backgroundColor:b.rS.yellowRGB},{data:[null===n||void 0===n?void 0:n.Refusal],backgroundColor:b.rS.redRGB}]};return(0,T.jsx)(k.$Q,{height:"30px",options:r,data:i})},C=function(){var e=(0,d.useState)(new Array(0)),n=(0,c.Z)(e,2),t=n[0],r=n[1],i=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(){var n,t,i,a,s,o,c,d,f,h,g,v,p,x,j,m;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("api_token"),e.next=3,fetch("".concat(u.ho,"/api/eval.php?api_token=").concat(n,"&version"));case 3:return t=e.sent,e.next=6,t.json();case 6:for(s in i=e.sent,a=[],i)a.push([s,i[s]]);for(c in a.sort((function(e,n){if(""===e[0])return-1;if(""===n[0])return 1;var t=e[0].split("."),r=n[0].split("."),i=parseInt(t[0].substring(1)),a=parseInt(r[0].substring(1));if(i!==a)return i-a;var s=parseInt(t[1]),l=parseInt(r[1]);return s!==l?s-l:parseInt(t[2])-parseInt(r[2])})),o=[],a)d=a[c][0].split("."),f=S.i.split("."),h=parseInt(d[0].substring(1)),g=parseInt(f[0].substring(1)),v=parseInt(d[1]),p=parseInt(f[1]),x=parseInt(d[2]),j=parseInt(f[2]),m=void 0,m=h===g?v===p&&(x===j||isNaN(x)&&isNaN(j))?b.rS.greenRGB:v===p?b.rS.yellowRGB:b.rS.redRGB:isNaN(h)?b.rS.blueRGB:b.rS.redRGB,o.push({label:a[c][0],data:[a[c][1]],backgroundColor:m});r(o);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){i()}),[]),D.kL.register(D.uw,D.f$,D.ZL,D.Dx,D.u,D.De);var a={labels:[""],datasets:t};return(0,T.jsx)(k.$Q,{options:{plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},data:a})},z=function(e){var n=e.fullname,t=e.auth_level,r=(0,d.useState)(new Array(0)),i=(0,c.Z)(r,2),a=i[0],s=i[1],f=(0,d.useState)(new Array(0)),h=(0,c.Z)(f,2),p=h[0],x=h[1],j=(0,d.useState)(!1),D=(0,c.Z)(j,2),k=D[0],I=D[1],L=(0,d.useState)(!1),Z=(0,c.Z)(L,2),E=Z[0],B=Z[1],z=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(){var n,t,r,i,a,o;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Q7)();case 2:n=e.sent,t=n.filter((function(e,n){return e.Date<n.Date?1:e.Date===n.Date?e.Begin<n.Begin:-1})),r=t.filter((function(e){return!(e.Type.toLowerCase().includes("probe")||e.Type.toLowerCase().includes("\xfcben"))}))[0],i=t.filter((function(e){return!(e.Type.toLowerCase().includes("probe")||e.Type.toLowerCase().includes("\xfcben"))})).filter((function(e){var n=new Date(r.Date),t=new Date(e.Date);return t.getTime()===n.getTime()||(t.setDate(t.getDate()-1),t.getTime()===n.getTime()||(t.setDate(t.getDate()-1),t.getTime()===n.getTime()))})),a=t.filter((function(e){return e.Type.toLowerCase().includes("probe")||e.Type.toLowerCase().includes("\xfcben")}))[0],o=t.filter((function(e){return e.Type.toLowerCase().includes("probe")||e.Type.toLowerCase().includes("\xfcben")})).filter((function(e){var n=new Date(a.Date),t=new Date(e.Date);return t.getTime()===n.getTime()||(t.setDate(t.getDate()-1),t.getTime()===n.getTime()||(t.setDate(t.getDate()-1),t.getTime()===n.getTime()))})),s(i),x(o);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){z();var e=(0,u.Ij)();B("browser tab"===(0,u.ol)()&&window.innerWidth<parseInt(b.rS.medium.split("px")[0])&&(y.J||!("Mac OS"!==e&&"iOS"!==e)))}),[]),(0,T.jsxs)(g,{children:[E?(0,T.jsx)(v,{children:(0,T.jsx)(m.bS7,{onClick:function(){var e=(0,u.Ij)();"Mac OS"!==e&&"iOS"!==e?y.J.prompt():(I(!0),B(!1))}})}):(0,T.jsx)(T.Fragment,{}),E?(0,T.jsx)(v,{children:"Diese App kann auch installiert werden, einfach auf das Icon klicken!"}):(0,T.jsx)(T.Fragment,{}),k?(0,T.jsxs)(v,{className:"iosInstruction",children:["Erst ",(0,T.jsx)(A.Hs8,{}),", dann ",(0,T.jsx)(w.b5v,{})]}):(0,T.jsx)(T.Fragment,{}),(0,T.jsx)(P,{read:localStorage.getItem("changelogRead")===S.i}),(0,T.jsx)(F,{fullname:n}),(0,T.jsx)("table",{children:(0,T.jsxs)("tbody",{children:[(0,T.jsxs)(d.Suspense,{children:[p.length>0?(0,T.jsx)("tr",{children:(0,T.jsxs)("th",{colSpan:3,children:["N\xe4chste Probe",p.length>1?"n":"",":"]})}):(0,T.jsx)(T.Fragment,{}),p.length>0?p.map((function(e){return(0,T.jsx)(X,{nextPractice:e,auth_level:t},"nextPractice_".concat(e.Event_ID))})):(0,T.jsx)(T.Fragment,{})]}),(0,T.jsxs)(d.Suspense,{children:[a.length>0?(0,T.jsx)("tr",{children:(0,T.jsxs)("th",{colSpan:3,children:["N\xe4chste",1===a.length?"r":""," Termin",a.length>1?"e":"",":"]})}):(0,T.jsx)(T.Fragment,{}),a.length>0?a.map((function(e){return(0,T.jsx)(J,{nextEvent:e,auth_level:t},"nextEvent_".concat(e.Event_ID))})):(0,T.jsx)(T.Fragment,{})]}),(0,T.jsx)("tr",{children:(0,T.jsx)("td",{colSpan:3,children:(0,T.jsx)(C,{})})})]})}),(0,T.jsx)(M,{})]})}},178:function(e,n,t){t.d(n,{Bk:function(){return u},vN:function(){return f},Ip:function(){return d}});var r=t.p+"static/media/polo.712b26af13af64644991.png",i=t.p+"static/media/polod.105b441f9c3ea18617b0.png",a=t.p+"static/media/shirt.fbcc2ca982466cf1415e.png",s=t.p+"static/media/suit.f2947921472d3fcaf13d.png",l=t.p+"static/media/cow.d8758b23c18f146ca6dd.png",o=t.p+"static/media/pants.0c00db6e187282389039.png",c=t(184),d=7,u=function(e){var n,t=e.clothing;switch(parseInt(t)){case 1:n=r;break;case 2:n=i;break;case 3:n=a;break;case 4:n=s;break;case 5:n=l;break;case 6:n=o}return n?(0,c.jsx)("img",{src:n,alt:"Uniform"}):(0,c.jsx)(c.Fragment,{})},f=function(e){var n,t=e.clothing,d=e.onClick;switch(parseInt(t)){case 0:n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHJAAAByQFhD1RcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAcVQTFRF////AKqqGrPMK7/VJrPQIbXWJrfVJbnTJLfVJLbTJrjUJbjTJLbUJbbTJbfTJrfSJbfTJrfUJLjUJrfTJbfTJLfTJbfTJbfTJbfSJbfTJbfTJbfTJbfTJbfTJbfTJrfTJ7jTKLjUKbjUK7nULbrVLrrVL7rVMLvVMbvVNLzWN73XOb3XO77XPL/YPb/YPr/YP7/YQ8HZRMHZRcHZSsPaS8PbTMTbTcTbT8XbUMXcUcXcUsbcVMfcWMjdWcjeWsneW8neXMneXcneXcreXsrfX8rfYMrfYcvfY8zgZ83gac3has7ha87hbs/icNDicdDic9HjddHjddLjdtLje9TkfNTlfdTlftTlgNXlhdfmidjni9nojNnojdnokdvpldzql93qnt/sn9/soeDsouDspuLtqeLuquPuq+PurOTur+XvseXvsubvuOjxvuryv+rywerywevzw+vzx+z0x+30y+70ze71z+/10fD20vD21PH21/L32PL32vP42/P43PP43fT44/b55Pb55Pb65vf66fj76vj77Pn77fn77/r88Pr88vv89Pv99fz99/z9+P3++f3++v3++/7+/P7+/f7//v//////L+Q+dAAAAB50Uk5TAAMKDBsfPExOYmRocHSKjqSwtr7Ay9XY5ery+Pn+bfME6gAAAvZJREFUWMOtV+dfE0EQvRDSKykEkrBEEsWo2AsWLNgVLICKYgMLFuyoUVA0VkBQiLm/1+Ru97ybLXf5Je9bZt+b7M3OzM5KEgd2tz8YjiaSyUQ0HPS77VJNaPZFUsiAVMTXbFXdFIh3IAY64oEmC3Kbtw1x0ea1meldrUiIVpdQ7oghU8QcfL2zHVlAu5On96SRJaQ97OiFkGWEGLG0taAa0EJ7YP1/bsfR4avnDm3rYuyB+n6KsnZouiyrWHx0OguXQRycMH65iSVZj58XYCQNZ+GA59f7SYZ4sQWcpj4fYP4Mrcg0Pm8EGaXLX6A/siqz8L7bSNOy2gbyf/sCkfwqTN19/kXzMAnqgpylF2zgGRE8zCu/L/7Av1c3G4leXP+gfvcQ/RixbCIexkF1q/0hADbwGLOnM5rpJDZ9BNSA4iAOrEXM3q2zfVNNy51Galzpf6B/Zf+q5NessPSALlftkz6wgR7MHdQb32IjSAXkqziIwCz/rlAL+t2uL6n6UgZwI5X+n4IOzlS/oXxAb7qFN/AOclN2yU2Xat/L4uRBveEYDot8meK6Jb959zhBCvNDjlrzS0FT/XlSGcs76cWgFDbTj5K2Il9irIalqIn+mlZK46zlqJQQ629q+hvM9YSUFOrHiLw0wiYkxQ52kc70ZwDxHIg+IVPA+qV+HiUhDOIw0fdxKVHhMd5T9eVTfEpYmEhvVAcPBJSgMJUXVQf7BRQ/q5gINuCLLSNw4GaUs4Y16iE+Eegr5Uw3lP94qoSwV+AgwmhpOmydleXfE6JM8zGaquEjDg90i/RKU6Xaeg2IMy8WAzqFDgLMq02nHplZKd5Zx9Xjq426XDXcV45xNstb93Kud4J+XEvXOXrteqcGDIzb2MErjgMXf8QxFKM8w9bHREOWgivYwRRTbxiy6DGvivxXdS7Zx9KnnWaDZgV75yr6+UHmBjxWRl3UdXz0bJ6pDzV+2K573K//wdGAJ0/9j676n30NeHjW//RtwOO7tuf/PxInRcIOjW3pAAAAAElFTkSuQmCC";break;case 1:n=r;break;case 2:n=i;break;case 3:n=a;break;case 4:n=s;break;case 5:n=l;break;case 6:n=o}return n?(0,c.jsx)("img",{src:n,alt:"Uniform",onClick:d}):(0,c.jsx)(c.Fragment,{})}},7762:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(181);function i(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,r.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,o=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){o=!0,s=e},f:function(){try{l||null==t.return||t.return()}finally{if(o)throw s}}}}}}]);
//# sourceMappingURL=395.9b276996.chunk.js.map