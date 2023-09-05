"use strict";(self.webpackChunkspz_planner=self.webpackChunkspz_planner||[]).push([[34],{1755:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var i,r,a,o=t(4165),s=t(5861),l=t(885),d=t(2791),c=t(7918),u=t(168),h=t(7924),f=h.ZP.div(i||(i=(0,u.Z)(["\n\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    .iosInstruction {\n        color: red;\n        font-size: 1.5em;\n\n        svg {\n            animation: none;\n            stroke: ",";\n            color: ",";\n            height: 1.5em;\n            width: 1.5em;\n        }\n    }\n\n    table {\n        padding-top: 4pt;\n        padding-bottom: 24pt;\n        border-collapse: collapse;\n        cursor: default;\n    }\n    img {\n        height: 30pt;\n    }\n\n    .event_header {\n        margin-top: 2vh;\n        border-top: 1px solid white;\n    }\n\n    svg {\n        height: 50pt;\n        width: 50pt;\n    }\n\n    th {\n        padding-top: 2.5vh;\n    }\n\n    canvas {\n        max-heigth: 30px;\n    }\n"])),(function(e){return e.theme.primaryLight}),(function(e){return e.theme.primaryLight})),v=h.ZP.p(r||(r=(0,u.Z)(["\n    font-size: smaller;\n    font-weight: bold;\n    border-radius: 5px;\n    padding: 15px;\n\n    svg {\n        height: 5em;\n        width: 5em;\n        stroke: red;\n        animation: blink 1s linear infinite;\n    }\n\n    @media (min-width: ",") {\n        display: none;\n    }\n\n    @keyframes blink {\n        0%{stroke: ",";}\n        50%{stroke: red;}\n        100%{stroke: ",";}\n    }\n"])),(function(e){return e.theme.medium}),(function(e){return e.theme.primaryLight}),(function(e){return e.theme.primaryLight})),g=h.ZP.textarea(a||(a=(0,u.Z)(["\n    transition-property: transform, opacity, max-height;\n    transition-duration: 0.75s;\n    transition-timing-function: ease;\n    \n    transform: ",";\n    opacity: ",";\n    max-height: ",";\n\n"])),(function(e){return e.open?"translateX(0)":"translateX(-100%)"}),(function(e){return e.open?"1":"0"}),(function(e){return e.open?"160px":"0"})),p=t(6476),x=t(1578),m=t(1607),j=t(7526),b=t(9126),D=t(4005),y=t(152),w=t(3077),k=t(184),S=(0,d.lazy)((function(){return Promise.resolve().then(t.bind(t,7763))})),T=(0,d.lazy)((function(){return Promise.all([t.e(373),t.e(730)]).then(t.bind(t,7730))})),Z=(0,d.lazy)((function(){return Promise.all([t.e(585),t.e(477)]).then(t.bind(t,8477))})),_=function(e){var n=e.fullname,t=(0,d.useState)(new Array(0)),i=(0,l.Z)(t,2),r=i[0],a=i[1],u=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,c.Ni)().then((function(e){var n=e.filter((function(e){var n=new Date(e.Birthday),t=new Date;n.setFullYear(t.getFullYear());var i=n.getTime()-t.getTime();return-6048e5<i&&i<6048e5})).sort((function(e,n){var t=new Date(e.Birthday),i=new Date(n.Birthday);return t.getMonth()<i.getMonth()?-1:t.getMonth()>i.getMonth()?1:t.getDate()<i.getDate()?-1:t.getDate()>i.getDate()?1:0}));a(n)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if((0,d.useEffect)((function(){u()}),[]),r.length>0)return(0,k.jsxs)("div",{children:[(0,k.jsx)("h3",{children:"Geburtstage:"}),null===r||void 0===r?void 0:r.map((function(e){var t=new Date(e.Birthday),i=new Date,r=i.getDate()===t.getDate();return n===e.Fullname&&r?(0,k.jsxs)("div",{children:["Herzlichen Gl\xfcckwunsch, ",n.split(" ")[0],"!"]}):(0,k.jsxs)("div",{children:[e.Fullname,": ",t.getDate(),".",t.getMonth()+1,", ",i.getFullYear()-t.getFullYear()," Jahre"]},e.Fullname)}))]})},F=function(e){var n=e.clothing;return(0,k.jsx)(d.Suspense,{children:0!==parseInt(n)?(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"Bekleidung:"}),(0,k.jsx)("td",{children:(0,k.jsx)(p.B,{clothing:parseInt(n)})})]}):(0,k.jsx)(k.Fragment,{})})},I=function(e){var n=e.nextPractice,t=e.auth_level,i=(0,d.useState)(),r=(0,l.Z)(i,2),a=r[0],o=r[1],s=new Date(null===n||void 0===n?void 0:n.Date),u=null===n||void 0===n?void 0:n.Attendence;(0,d.useEffect)((function(){void 0!==n&&(0,c.B$)(null===n||void 0===n?void 0:n.Event_ID,null===n||void 0===n?void 0:n.Usergroup_ID).then((function(e){o(e)}))}),[n]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("tr",{className:"event_header",children:[(0,k.jsx)("td",{children:null===n||void 0===n?void 0:n.Type}),(0,k.jsx)("td",{children:null===n||void 0===n?void 0:n.Location}),(0,k.jsx)("td",{rowSpan:2,children:(0,k.jsx)(T,{event_id:null===n||void 0===n?void 0:n.Event_ID,states:3,attendence:u,onClick:function(e,n){var t={};t[""+e]=n,(0,c.IZ)(t,!1)},cancelled:null===n||void 0===n?void 0:n.Type.includes("Abgesagt")})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsxs)("td",{children:[s.getDate(),".",s.getMonth()+1,".",s.getFullYear()]}),(0,k.jsxs)("td",{children:[null===n||void 0===n?void 0:n.Begin.slice(0,5)," Uhr"]})]}),(0,k.jsx)("tr",{children:t>1?(0,k.jsx)("td",{colSpan:3,children:(0,k.jsx)(C,{event:a,auth_level:t})}):(0,k.jsx)(k.Fragment,{})})]})},E=function(e){var n=e.nextEvent,t=e.auth_level,i=(0,d.useState)(),r=(0,l.Z)(i,2),a=r[0],o=r[1],s=(0,d.useState)(),u=(0,l.Z)(s,2),h=u[0],f=u[1],v=null===n||void 0===n?void 0:n.Attendence,g=new Date(null===n||void 0===n?void 0:n.Date);(0,d.useEffect)((function(){var e=new Date(null===n||void 0===n?void 0:n.Date),t=new Date;t.setDate(t.getDate()+6),void 0!==n&&e<t&&(0,c.p)(n).then((function(e){o(e)})),void 0!==n&&(0,c.B$)(null===n||void 0===n?void 0:n.Event_ID,null===n||void 0===n?void 0:n.Usergroup_ID).then((function(e){f(e)}))}),[n]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("tr",{className:"event_header",children:[(0,k.jsx)("td",{children:null===n||void 0===n?void 0:n.Type}),(0,k.jsx)("td",{children:null===n||void 0===n?void 0:n.Location})]}),(0,k.jsxs)("tr",{children:[(0,k.jsxs)("td",{children:[g.getDate(),".",g.getMonth()+1,".",g.getFullYear()]}),(0,k.jsx)("td",{children:"12:34:56"!==(null===n||void 0===n?void 0:n.Begin)?"".concat(null===n||void 0===n?void 0:n.Begin.slice(0,5)," Uhr"):"-"}),(0,k.jsx)("td",{rowSpan:3,children:(0,k.jsx)(d.Suspense,{children:(0,k.jsx)(T,{event_id:null===n||void 0===n?void 0:n.Event_ID,states:3,attendence:v,onClick:function(e,n){var t={};t[""+e]=n,(0,c.IZ)(t,!1)}})})})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"Hin:"}),(0,k.jsx)("td",{children:"12:34:56"!==(null===n||void 0===n?void 0:n.Departure)?"".concat(null===n||void 0===n?void 0:n.Departure.slice(0,5)," Uhr"):"-"})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"Zur\xfcck:"}),(0,k.jsx)("td",{children:"12:34:56"!==(null===n||void 0===n?void 0:n.Leave_dep)?"".concat(null===n||void 0===n?void 0:n.Leave_dep.slice(0,5)," Uhr"):"-"})]}),(0,k.jsx)(F,{clothing:null===n||void 0===n?void 0:n.Clothing}),a?(0,k.jsx)(d.Suspense,{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:"Wetter:"}),(0,k.jsx)("td",{children:"".concat(a.Temperature,"\xb0C")}),(0,k.jsx)("td",{children:(0,k.jsx)(Z,{code:a.Weathercode})})]})}):(0,k.jsx)(k.Fragment,{}),(0,k.jsx)("tr",{children:t>0?(0,k.jsx)("td",{colSpan:3,children:(0,k.jsx)(C,{event:h,auth_level:t})}):(0,k.jsx)(k.Fragment,{})})]})},B=function(){var e=(0,d.useState)(!1),n=(0,l.Z)(e,2),t=n[0],i=n[1],r=(0,d.useCallback)((function(){if(i(!t),t){var e=document.getElementById("feedbackcontent").value;(0,c.S3)(e)}document.getElementById("feedbackform").reset()}),[t]),a=(0,d.useCallback)((function(){i(!1),document.getElementById("feedbackform").reset()}),[]);return(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{children:[(0,k.jsx)(S,{onClick:r,children:t?"Senden":"Feedback"}),t?(0,k.jsx)(S,{onClick:a,children:"Abbrechen"}):(0,k.jsx)(k.Fragment,{})]}),(0,k.jsx)("form",{id:"feedbackform",children:(0,k.jsx)(g,{open:t,name:"content",id:"feedbackcontent",cols:"30",rows:"10"})})]})},C=function(e){var n=e.event,t=e.auth_level;y.kL.register(y.uw,y.f$,y.ZL,y.Dx,y.u,y.De);var i={animation:{duration:0},indexAxis:"y",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:t>1}},scales:{x:{stacked:!0,display:!1},y:{stacked:!0,display:!1}}},r={labels:[""],datasets:[{data:[null===n||void 0===n?void 0:n.Consent],backgroundColor:"rgb(0, 186, 0)"},{data:[null===n||void 0===n?void 0:n.Missing],backgroundColor:"rgb(37, 183, 211)"},{data:[null===n||void 0===n?void 0:n.Maybe],backgroundColor:"rgb(255, 161, 31)"},{data:[null===n||void 0===n?void 0:n.Refusal],backgroundColor:"rgb(255, 0, 0)"}]};return(0,k.jsx)(w.$Q,{height:"30px",options:i,data:r})},P=function(e){var n=e.fullname,t=e.auth_level,i=(0,d.useState)(new Array(0)),r=(0,l.Z)(i,2),a=r[0],u=r[1],h=(0,d.useState)(new Array(0)),g=(0,l.Z)(h,2),p=g[0],y=g[1],w=(0,d.useState)(!1),S=(0,l.Z)(w,2),T=S[0],Z=S[1],F=(0,d.useState)(!1),C=(0,l.Z)(F,2),P=C[0],A=C[1],M=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var n,t,i,r,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Q7)();case 2:n=e.sent,t=n.filter((function(e,n){return e.Date<n.Date?1:e.Date===n.Date?e.Begin<n.Begin:-1})),i=t.filter((function(e){return!(e.Type.includes("Probe")||e.Type.includes("\xdcben"))}))[0],r=t.filter((function(e){return!(e.Type.includes("Probe")||e.Type.includes("\xdcben"))})).filter((function(e){var n=new Date(i.Date),t=new Date(e.Date);return t.getTime()===n.getTime()||(t.setDate(t.getDate()-1),t.getTime()===n.getTime()||(t.setDate(t.getDate()-1),t.getTime()===n.getTime()))})),a=t.filter((function(e){return e.Type.includes("Probe")||e.Type.includes("\xdcben")}))[0],s=t.filter((function(e){return e.Type.includes("Probe")||e.Type.includes("\xdcben")})).filter((function(e){var n=new Date(a.Date),t=new Date(e.Date);return t.getTime()===n.getTime()||(t.setDate(t.getDate()-1),t.getTime()===n.getTime()||(t.setDate(t.getDate()-1),t.getTime()===n.getTime()))})),u(r),y(s);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){M();var e=(0,c.Ij)();A("browser tab"===(0,c.ol)()&&window.innerWidth<parseInt(m.r.medium.split("px")[0])&&(D.J||!("Mac OS"!==e&&"iOS"!==e)))}),[]),(0,k.jsxs)(f,{children:[(0,k.jsx)(v,{children:'Info: die gesamten R\xfcckmeldungen sind im Men\xfc auf der linken Seite unter "Anwesenheiten" zu finden'}),(0,k.jsx)(v,{children:"Auf dieser Seite ist das explizite speichern nicht mehr notwendig"}),P?(0,k.jsx)(v,{children:(0,k.jsx)(x.bS7,{onClick:function(){var e=(0,c.Ij)();"Mac OS"!==e&&"iOS"!==e?D.J.prompt():(Z(!0),A(!1))}})}):(0,k.jsx)(k.Fragment,{}),P?(0,k.jsx)(v,{children:"Diese App kann auch installiert werden, einfach auf das Icon klicken!"}):(0,k.jsx)(k.Fragment,{}),T?(0,k.jsxs)(v,{className:"iosInstruction",children:["Erst ",(0,k.jsx)(j.Hs8,{}),", dann ",(0,k.jsx)(b.b5v,{})]}):(0,k.jsx)(k.Fragment,{}),(0,k.jsx)(_,{fullname:n}),(0,k.jsx)("table",{children:(0,k.jsxs)("tbody",{children:[(0,k.jsxs)(d.Suspense,{children:[p.length>0?(0,k.jsx)("tr",{children:(0,k.jsxs)("th",{colSpan:3,children:["N\xe4chste Probe",p.length>1?"n":"",":"]})}):(0,k.jsx)(k.Fragment,{}),p.length>0?p.map((function(e){return(0,k.jsx)(I,{nextPractice:e,auth_level:t},"nextPractice_".concat(e.Event_ID))})):(0,k.jsx)(k.Fragment,{})]}),(0,k.jsxs)(d.Suspense,{children:[a.length>0?(0,k.jsx)("tr",{children:(0,k.jsxs)("th",{colSpan:3,children:["N\xe4chste",1===a.length?"r":""," Termin",a.length>1?"e":"",":"]})}):(0,k.jsx)(k.Fragment,{}),a.length>0?a.map((function(e){return(0,k.jsx)(E,{nextEvent:e,auth_level:t},"nextEvent_".concat(e.Event_ID))})):(0,k.jsx)(k.Fragment,{})]})]})}),(0,k.jsx)(B,{})]})}},6476:function(e,n,t){t.d(n,{B:function(){return d}});var i=t(1200),r=t(5902),a=t(6130),o=t(8641),s=t(9620),l=t(184),d=function(e){var n,t=e.clothing;switch(parseInt(t)){case 1:n=i;break;case 2:n=r;break;case 3:n=a;break;case 4:n=o;break;case 5:n=s}return n?(0,l.jsx)("img",{src:n,alt:"Uniform"}):(0,l.jsx)(l.Fragment,{})}},9620:function(e,n,t){e.exports=t.p+"static/media/cow.d8758b23c18f146ca6dd.png"},1200:function(e,n,t){e.exports=t.p+"static/media/polo.712b26af13af64644991.png"},5902:function(e,n,t){e.exports=t.p+"static/media/polod.105b441f9c3ea18617b0.png"},6130:function(e,n,t){e.exports=t.p+"static/media/shirt.fbcc2ca982466cf1415e.png"},8641:function(e,n,t){e.exports=t.p+"static/media/suit.f2947921472d3fcaf13d.png"},7762:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(181);function r(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,i.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==t.return||t.return()}finally{if(l)throw o}}}}}}]);
//# sourceMappingURL=34.f496a133.chunk.js.map