"use strict";(globalThis.webpackChunkspz_planner=globalThis.webpackChunkspz_planner||[]).push([[807],{8506:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var r=n(5043),i=n(2439),a=n(5464);const s=a.Ay.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .iosInstruction {
        color: red;
        font-size: 1.5em;

        svg {
            animation: none;
            stroke: ${e=>{let{theme:t}=e;return t.primaryLight}};
            color: ${e=>{let{theme:t}=e;return t.primaryLight}};
            height: 1.5em;
            width: 1.5em;
        }
    }

    table {
        padding-top: 4pt;
        padding-bottom: 24pt;
        border-collapse: collapse;
        cursor: default;
    }
    img {
        height: 30pt;
    }

    .event_header {
        margin-top: 2vh;
        margin-bottom: 1vh;
        font-weight: bold;
        text-align: center;
    }

    svg {
        height: 50pt;
        width: 50pt;
    }

    .Plusone_icon {
        height: 25pt;
        width: 25pt;
    }

    th {
        padding-top: 2.5vh;
    }

    .CanceledEvent {
        font-style: italic;
        color: ${e=>{let{theme:t}=e;return t.lightred}};
    }
`,l=a.Ay.p`
    font-size: smaller;
    font-weight: bold;
    border-radius: 5px;
    padding: 15px;

    svg {
        height: 5em;
        width: 5em;
        stroke: red;
        animation: blink 1s linear infinite;
    }

    @media (min-width: ${e=>{let{theme:t}=e;return t.medium}}) {
        display: none;
    }

    @keyframes blink {
        0%{stroke: ${e=>{let{theme:t}=e;return t.primaryLight}};}
        50%{stroke: red;}
        100%{stroke: ${e=>{let{theme:t}=e;return t.primaryLight}};}
    }
`,d=a.Ay.div`
    font-size: smaller;
    padding-inline-start: 1.5em;
    padding-inline-end: 1.5em;

    max-width: 450px;

    li {
        padding: 1em 0 1em 0;
    }

    .Previous {
        display: none;
    }
`,c=a.Ay.textarea`
    transition-property: transform, opacity, max-height;
    transition-duration: 0.75s;
    transition-timing-function: ease;
    
    transform: ${e=>{let{open:t}=e;return t?"translateX(0)":"translateX(-100%)"}};
    opacity: ${e=>{let{open:t}=e;return t?"1":"0"}};
    max-height: ${e=>{let{open:t}=e;return t?"160px":"0"}};

`,h=a.Ay.div`
    width: 100vw;
    max-width: 400px;
`,o=a.Ay.div`
    width: 100vw;
    height: 25vh;
    max-width: 400px;
    max-height: 50px;
    display: flex;
    justify-content: center;
`;var g=n(397),u=n(5394),m=n(1462),p=n(208),x=n(6838),v=n(6720),j=n(262);const b=a.Ay.div`
    background: ${e=>{let{theme:t}=e;return t.primaryLight}};
    color: ${e=>{let{theme:t}=e;return t.primaryDark}};
    padding: 7px;
    border-radius: 7px;

    width: 95%;
    max-width: 10cm;
    height: 80vh;
    position: relative;

    #chat {
        max-height: 80%;
        overflow-y: scroll;
        scroll-behavior: smooth;
        display: flex;
        flex-direction: column;
    }

    #chatheader {
        height: 1cm;
        max-height: 5%;
        position: relative;
    }

    .IconWrapper {
        max-height: 100%;
        width: 20px;
        height: 20px;
        right: 0;
        top: 0;
        position: absolute;
    }

    form {
        max-height: 10%;
        width: calc(100% - 14px);
        position: absolute;
        
        bottom: 7px;

        textarea {
            height: 100%;
            width: 75%;
            resize: none;
        }

        button {
            position: absolute;
            margin: 1px;

            background: ${e=>{let{theme:t}=e;return t.primaryDark}};
            color: ${e=>{let{theme:t}=e;return t.primaryLight}};

            width: 24%;
            right: 0;
        }
    }
`,f=a.Ay.div`
    padding-bottom: 5px;

    width: 90%;

    .content {
        border: 1px black solid;
        border-radius: 5px;
        padding: 5px;
    }
    .tags {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: x-small;
    }
`,w=(0,a.Ay)(f)`
    align-self: end;
`;var k=n(3441),S=n(8342),z=n(579);const y=e=>{let{name:t,timestamp:n,content:r}=e,i=new Date(n);return(0,z.jsxs)(f,{children:[(0,z.jsx)("div",{className:"content",children:r}),(0,z.jsxs)("div",{className:"tags",children:[(0,z.jsx)("div",{children:t}),(0,z.jsxs)("div",{children:[i.getDate(),". ",["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"][i.getMonth()]," ",i.getHours(),":",i.getMinutes()," Uhr"]})]})]})},N=e=>{let{timestamp:t,content:n}=e,r=new Date(t);return(0,z.jsxs)(w,{children:[(0,z.jsx)("div",{className:"content",children:n}),(0,z.jsxs)("div",{className:"tags",children:[(0,z.jsx)("div",{children:"Ich"}),(0,z.jsxs)("div",{children:[r.getDate(),". ",["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"][r.getMonth()]," ",r.getHours(),":",r.getMinutes()," Uhr"]})]})]})},A=e=>{let{hideEventInfo:t,eventInfoData:n,fullname:i}=e;const[a,s]=(0,S.useStateWithCallbackLazy)(Array(0)),l=(0,r.useCallback)((()=>{let e=localStorage.getItem("api_token");fetch(`/api/eventinfo.php?api_token=${e}&event_id=${n.Event_ID}`).then((e=>{200===e.status&&e.json().then((e=>{s(e,(e=>{JSON.stringify(e)!==JSON.stringify(a)&&document.getElementById("chat").scrollTo({top:1e4,left:0,behaviour:"smooth"})}))}))}))}),[a,s,n]);return(0,r.useEffect)((()=>{let e=localStorage.getItem("api_token");fetch(`/api/eventinfo.php?api_token=${e}&event_id=${n.Event_ID}`).then((e=>{200===e.status&&e.json().then((e=>{s(e,(()=>{document.getElementById("chat").scrollTo({top:1e4,left:0,behaviour:"smooth"})}))}))}))}),[s,n]),(0,r.useEffect)((()=>{const e=setInterval((()=>{l()}),5e3);return()=>clearInterval(e)}),[l]),(0,z.jsxs)(b,{children:[(0,z.jsxs)("div",{id:"chatheader",children:[null===n||void 0===n?void 0:n.Type," ",null===n||void 0===n?void 0:n.Location,(0,z.jsx)(k.Vx.Provider,{value:{className:"IconWrapper"},children:(0,z.jsx)(v.OZi,{onClick:t,size:"100%"})})]}),(0,z.jsx)("div",{id:"chat",children:a.map((e=>e.Fullname!==i?(0,z.jsx)(y,{content:e.Content,name:e.Fullname,timestamp:e.Timestamp},e.Timestamp):(0,z.jsx)(N,{content:e.Content,timestamp:e.Timestamp},e.Timestamp)))}),(0,z.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=document.getElementById("chatinput");if(""===t.value)return;let r=new Date,d={Fullname:i,Timestamp:`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()} ${r.toLocaleTimeString("de-DE")}`,Content:t.value},c=localStorage.getItem("api_token");fetch(`/api/eventinfo.php?api_token=${c}&event_id=${n.Event_ID}`,{method:"POST",body:JSON.stringify({Timestamp:`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()} ${r.toLocaleTimeString("de-DE")}`,Content:t.value})}).then((e=>{201===e.status&&(t.value="",s([...a,d]),l())}),(e=>{alert(`Netzwerkfehler ${e}`)}))},children:[(0,z.jsx)("textarea",{id:"chatinput"}),(0,z.jsx)(j.default,{children:"Senden"})]})]})};var _=n(461),D=n(6058);const F=e=>{let{versions:t,theme:n}=e;const[i,a]=(0,r.useState)(new Array(0)),s=(0,r.useCallback)((()=>{let e=t,r=[];for(let t in e)r.push([t,e[t]]);r.sort(((e,t)=>{if(""===e[0])return-1;if(""===t[0])return 1;let n=e[0].split("."),r=t[0].split("."),i=parseInt(n[0].substring(1)),a=parseInt(r[0].substring(1));if(i!==a)return i-a;let s=parseInt(n[1]),l=parseInt(r[1]);return s!==l?s-l:parseInt(n[2])-parseInt(r[2])}));let i=[];for(let t of r){let e,r=t[0].split("."),a=x.r.split("."),s=parseInt(r[0].substring(1)),l=parseInt(a[0].substring(1)),d=parseInt(r[1]),c=parseInt(a[1]),h=parseInt(r[2]),o=parseInt(a[2]);e=s===l?d===c&&(h===o||isNaN(h)&&isNaN(o))?n.greenRGB:d===c?n.yellowRGB:d+1===c?n.redRGB:n.darkredRGB:isNaN(s)?n.blueRGB:n.redRGB,i.push({label:t[0],data:[t[1]],backgroundColor:e})}a(i)}),[n,t]);(0,r.useEffect)((()=>{s()}),[s]),_.t1.register(_.PP,_.kc,_.E8,_.hE,_.m_,_.s$);const l={labels:[""],datasets:i};return(0,z.jsx)(h,{children:(0,z.jsx)(D.yP,{options:{plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},data:l})})},E=a.Ay.div`
    display: flex;
    flex-direction: column;

    max-height: 50vh;
    overflow-y: auto;

    td, th {
        padding: 0.5rem;
    }
`,I=e=>{var t,n,r,i,a,s,l,d,c,h,o;let{users:g}=e;return g?(0,z.jsxs)(E,{children:[(0,z.jsxs)("table",{children:[(0,z.jsx)("thead",{children:(0,z.jsxs)("tr",{children:[(0,z.jsx)("th",{}),(0,z.jsx)("th",{children:"Nutzer"}),(0,z.jsx)("th",{children:"Aufrufe"})]})}),(0,z.jsxs)("tbody",{children:[(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:"Heute"}),(0,z.jsx)("td",{children:null===g||void 0===g||null===(t=g.Today)||void 0===t?void 0:t.Daily}),(0,z.jsx)("td",{children:null===g||void 0===g||null===(n=g.Today)||void 0===n?void 0:n.Calls})]}),(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:"Gestern"}),(0,z.jsx)("td",{children:null===g||void 0===g||null===(r=g.Yesterday)||void 0===r?void 0:r.Daily}),(0,z.jsx)("td",{children:null===g||void 0===g||null===(i=g.Yesterday)||void 0===i?void 0:i.Calls})]}),(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:"7 Tage"}),(0,z.jsx)("td",{children:null===g||void 0===g||null===(a=g.Seven)||void 0===a?void 0:a.Daily}),(0,z.jsx)("td",{children:null===g||void 0===g||null===(s=g.Seven)||void 0===s?void 0:s.Calls})]}),(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:"30 Tage"}),(0,z.jsx)("td",{children:null===g||void 0===g||null===(l=g.Thirty)||void 0===l?void 0:l.Daily}),(0,z.jsx)("td",{children:null===g||void 0===g||null===(d=g.Thirty)||void 0===d?void 0:d.Calls})]})]})]}),null!==g&&void 0!==g&&null!==(c=g.Today)&&void 0!==c&&c.Users?(0,z.jsxs)("table",{children:[(0,z.jsx)("thead",{children:(0,z.jsxs)("tr",{children:[(0,z.jsx)("th",{children:"Zeitstempel"}),(0,z.jsx)("th",{children:"Nutzer"})]})}),(0,z.jsx)("tbody",{children:null===g||void 0===g||null===(h=g.Today)||void 0===h||null===(o=h.Users)||void 0===o?void 0:o.map(((e,t)=>(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:e.Timestamp.split(" ")[1]}),(0,z.jsx)("td",{children:e.Fullname})]},t)))})]}):(0,z.jsx)(z.Fragment,{})]}):(0,z.jsx)(z.Fragment,{})},T=e=>{let{displays:t,theme:n}=e;const[i,a]=(0,r.useState)(new Array(0)),s=(0,r.useCallback)((()=>{let e=0,r=0,i=0,s=0;for(let n in t)n.includes("fullscreen")?e+=t[n]:n.includes("standalone")?r+=t[n]:n.includes("browser")?i+=t[n]:s+=t[n];let l=[{data:[s],backgroundColor:n.blueRGB,label:"none"},{data:[i],backgroundColor:n.redRGB,label:"browser"},{data:[r],backgroundColor:n.greenRGB,label:"standalone"},{data:[e],backgroundColor:n.lightgreenRGB,label:"fullscreen"}];a(l)}),[n,t]);(0,r.useEffect)((()=>{s()}),[t,s]),_.t1.register(_.PP,_.kc,_.E8,_.hE,_.m_,_.s$);const l={labels:[""],datasets:i};return(0,z.jsx)(o,{children:(0,z.jsx)(D.yP,{options:{indexAxis:"y",maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1,stacked:!0},y:{display:!1,stacked:!0}}},data:l})})},C=e=>{let{theme:t,auth_level:n}=e;const[a,s]=(0,r.useState)({}),l=(0,r.useCallback)((async()=>{fetch(`${i.Hc}/api/eval.php?api_token=${localStorage.getItem("api_token")}&statistics`).then((e=>e.json())).then((e=>{s(e)}))}),[]);return(0,r.useEffect)((()=>{l()}),[l]),(0,r.useEffect)((()=>{const e=setInterval((()=>{l()}),6e4);return()=>clearInterval(e)}),[l]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(I,{users:a.Users,theme:t}),n>2?(0,z.jsx)(F,{versions:a.Versions,theme:t}):(0,z.jsx)(z.Fragment,{}),n>2?(0,z.jsx)(T,{displays:a.Displays,theme:t}):(0,z.jsx)(z.Fragment,{})]})};var B=n(3156),$=n(9455);const P=a.Ay.div`
    position: relative;
    cursor: help;
`,R=a.Ay.p`
    color: ${e=>{let{theme:t}=e;return t.primaryDark}};
    background: ${e=>{let{theme:t}=e;return t.primaryLight}};

    position: absolute;
    right: 0;

    cursor: default;

    padding: 5px;
    border: 1px ${e=>{let{theme:t}=e;return t.primaryDark}} solid;
    border-radius: 5px;
    white-space: nowrap;
    z-index: 5;
`,L=e=>{let{text:t}=e;return(0,z.jsx)(R,{children:void 0!==t?t:(0,z.jsx)(z.Fragment,{})})},G=e=>{let{code:t}=e;const n={0:(0,z.jsx)($.yAK,{}),1:(0,z.jsx)($.ViI,{}),2:(0,z.jsx)($.b1P,{}),3:(0,z.jsx)($.Rc4,{}),4:(0,z.jsx)($.Aqz,{}),5:(0,z.jsx)($.Rxl,{}),6:(0,z.jsx)($.lkd,{}),7:(0,z.jsx)($.lkd,{}),8:(0,z.jsx)($.qEy,{}),9:(0,z.jsx)($.qEy,{}),10:(0,z.jsx)($.DeX,{}),11:(0,z.jsx)($.DeX,{}),12:(0,z.jsx)($.DeX,{}),13:(0,z.jsx)($.b1l,{}),14:(0,z.jsx)($.b8l,{}),15:(0,z.jsx)($.l9T,{}),16:(0,z.jsx)($.vQE,{}),17:(0,z.jsx)($.b1l,{}),18:(0,z.jsx)($.Oe4,{}),19:(0,z.jsx)($.oeW,{}),20:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.T8e,{}),(0,z.jsx)($.aOC,{})]}),21:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.T8e,{}),(0,z.jsx)($.vQE,{})]}),22:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.T8e,{}),(0,z.jsx)($.Kh_,{})]}),23:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.T8e,{}),(0,z.jsx)($.OQT,{})]}),24:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.T8e,{}),(0,z.jsx)($.vQE,{}),(0,z.jsx)(g.xgS,{})]}),25:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.T8e,{}),(0,z.jsx)($.aOC,{})]}),26:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.T8e,{}),(0,z.jsx)($.Kh_,{})]}),27:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.T8e,{}),(0,z.jsx)($.LeC,{})]}),28:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.T8e,{}),(0,z.jsx)($.DeX,{})]}),29:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.T8e,{}),(0,z.jsx)($.m7c,{})]}),30:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.qEy,{}),(0,z.jsx)($.iHN,{})]}),31:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.qEy,{}),(0,z.jsx)($.gpE,{})]}),32:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.qEy,{}),(0,z.jsx)($.Vfe,{})]}),33:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.qEy,{}),(0,z.jsx)($.iHN,{}),(0,z.jsx)($.SpH,{})]}),34:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.qEy,{}),(0,z.jsx)($.gpE,{}),(0,z.jsx)($.SpH,{})]}),35:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.qEy,{}),(0,z.jsx)($.Vfe,{}),(0,z.jsx)($.SpH,{})]}),36:"Leichtes/m\xe4\xdfiges Schneefegen",37:"Starkes Schneefegen",38:"Leichtes/m\xe4\xdfiges Schneetreiben",39:"Starkes Schneetreiben",40:"Nebel in der Ferne",41:"Nebelschwaden",42:(0,z.jsx)($.feo,{}),43:(0,z.jsx)($.DeX,{}),44:(0,z.jsx)($.feo,{}),45:(0,z.jsx)($.DeX,{}),46:(0,z.jsx)($.feo,{}),47:(0,z.jsx)($.DeX,{}),48:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.feo,{}),(0,z.jsx)(g.xgS,{})]}),49:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.DeX,{}),(0,z.jsx)(g.xgS,{})]}),50:(0,z.jsx)($.aOC,{}),51:(0,z.jsx)($.aOC,{}),52:(0,z.jsx)($.aOC,{}),53:(0,z.jsx)($.aOC,{}),54:(0,z.jsx)($.aOC,{}),55:(0,z.jsx)($.aOC,{}),56:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.aOC,{}),(0,z.jsx)(g.xgS,{})]}),57:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.aOC,{}),(0,z.jsx)(g.xgS,{})]}),58:(0,z.jsx)($.vQE,{}),59:(0,z.jsx)($.vQE,{}),60:(0,z.jsx)($.tfb,{}),61:(0,z.jsx)($.vQE,{}),62:(0,z.jsx)($.tfb,{}),63:(0,z.jsx)($.vQE,{}),64:(0,z.jsx)($.tfb,{}),65:(0,z.jsx)($.vQE,{}),66:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.vQE,{}),(0,z.jsx)(g.xgS,{})]}),67:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.vQE,{}),(0,z.jsx)(g.xgS,{})]}),68:(0,z.jsx)($.OQT,{}),69:(0,z.jsx)($.OQT,{}),70:(0,z.jsx)($.Kh_,{}),71:(0,z.jsx)($.Kh_,{}),72:(0,z.jsx)($.Kh_,{}),73:(0,z.jsx)($.Kh_,{}),74:(0,z.jsx)($.Kh_,{}),75:(0,z.jsx)($.Kh_,{}),76:"Eisnadeln",77:(0,z.jsx)($.OQT,{}),78:(0,z.jsx)(g.xgS,{}),79:(0,z.jsx)(g.xgS,{}),80:(0,z.jsx)($.aOC,{}),81:(0,z.jsx)($.aOC,{}),82:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.aOC,{}),(0,z.jsx)(u.tr_,{})]}),83:(0,z.jsx)($.OQT,{}),84:(0,z.jsx)($.OQT,{}),85:(0,z.jsx)($.Kh_,{}),86:(0,z.jsx)($.Kh_,{}),87:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.Kh_,{}),(0,z.jsx)($.LeC,{})]}),88:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.Kh_,{}),(0,z.jsx)($.LeC,{})]}),89:(0,z.jsx)($.LeC,{}),90:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.LeC,{}),(0,z.jsx)(u.tr_,{})]}),91:"Leichter Regen, letzte Stunde Gewitter h\xf6rbar",92:"Starker Regen, letzte Stunde Gewitter h\xf6rbar",93:"Leichter Schnee/Regen-Hagel, letzte Stunde Gewitter h\xf6rbar",94:"Starker Schnee/Regen-Hagel, letzte Stunde Gewitter h\xf6rbar",95:(0,z.jsx)($.m7c,{}),96:(0,z.jsx)($.m7c,{}),97:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.m7c,{}),(0,z.jsx)(u.tr_,{})]}),98:"Gewitter mit Sandsturm",99:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($.m7c,{}),(0,z.jsx)(u.tr_,{})]})},i={0:"Klar",1:"Heiter",2:"Bew\xf6lkt",3:"Bedeckt",4:"Sicht durch Rauch reduziert",5:"Dunst",6:"Schwebender Staub, windstill",7:"Staub/Sand, von Wind angehoben",8:"Staubteufel",9:"Staub-/Sandsturm",10:"Feuchter Dunst/schwacher Nebel",11:"Nebelschwaden am Boden",12:"Durchgehender Bodennebel",13:"Wetterleuchten",14:"Niederschlag sichtbar, erreicht nicht den Boden",15:"Niederschlag in der Ferne, erreicht Boden",16:"Niederschlag in der N\xe4he, erreicht Boden",17:"Gewitter h\xf6rbar, kein Niederschlag",18:"Markante Windb\xf6en",19:"Tornado, Wasserhose, Windhose",20:"Nach Spr\xfchregen",21:"Nach Regen",22:"Nach Schnee",23:"Nach Schneeregen",24:"Nach gefrierendem Regen",25:"Nach Regenschauern",26:"Nach Schneeschauern",27:"Nach Hagelschauern",28:"Nach Nebel",29:"Nach Gewitter",30:"Leichter/m\xe4\xdfiger Sandsturm, nachlassend",31:"Leichter/m\xe4\xdfiger Sandsturm",32:"Leichter/m\xe4\xdfiger Sandsturm, zunehmend",33:"Schwerer Sandsturm, nachlassend",34:"Schwerer Sandsturm",35:"Schwerer Sandsturm, zunehmend",36:"Leichtes/m\xe4\xdfiges Schneefegen",37:"Starkes Schneefegen",38:"Leichtes/m\xe4\xdfiges Schneetreiben",39:"Starkes Schneetreiben",40:"Nebel in der Ferne",41:"Nebelschwaden",42:"Nebel, Himmel sichtbar, abnehmend",43:"Nebel, Himmel verdeckt, abnehmend",44:"Nebel, Himmel sichtbar, gleichbleibend",45:"Nebel, Himmel verdeckt, gleichbleibend",46:"Nebel, Himmel sichtbar, zunehmend",47:"Nebel, Himmel verdeckt, zunehmend",48:"Raueis mit Nebel, Himmel sichtbar",49:"Raueis mit Nebel, Himmel verdeckt",50:"Leichter Spr\xfchregen, unterbrochen",51:"Leichter Spr\xfchregen, anhaltend",52:"M\xe4\xdfiger Spr\xfchregen, unterbrochen",53:"M\xe4\xdfiger Spr\xfchregen, anhaltend",54:"Starker Spr\xfchregen, unterbrochen",55:"Starker Spr\xfchregen, anhaltend",56:"Gefrierender Spr\xfchregen, leicht",57:"Gefrierender Spr\xfchregen, m\xe4\xdfig/stark",58:"Leichter Regen und Spr\xfchregen",59:"M\xe4\xdfiger Regen und Spr\xfchregen",60:"Leichter Regen, unterbrochen",61:"Leichter Regen, anhaltend",62:"M\xe4\xdfiger Regen, unterbrochen",63:"M\xe4\xdfiger Regen, anhaltend",64:"Starker Regen, unterbrochen",65:"Starker Regen, anhaltend",66:"Gefrierender leichter Regen",67:"Gefrierender m\xe4\xdfiger/starker Regen",68:"Leichter Schneeregen",69:"M\xe4\xdfiger/Starker Schneeregen",70:"Leichter Schneefall, unterbrochen",71:"Leichter Schneefall, anhaltend",72:"M\xe4\xdfiger Schneefall, unterbrochen",73:"M\xe4\xdfiger Schneefall, anhaltend",74:"Starker Schneefall, unterbrochen",75:"Starker Schneefall, anhaltend",76:"Eisnadeln",77:"Schneegriesel",78:"Schneekristalle",79:"Eisk\xf6rner",80:"Leichte Regenschauer",81:"Starke Regenschauer",82:"Sintflutartige Regenschauer",83:"Leichte Schneeregenschauer",84:"Starke Schneeregenschauer",85:"Leichte Schneeschauer",86:"Starke Schneeschauer",87:"Leichte Graupelschauer",88:"Starke Graupelschauer",89:"Leichte Hagelschauer ohne Gewitter",90:"Starke Hagelschauer ohne Gewitter",91:"Leichter Regen, letzte Stunde Gewitter h\xf6rbar",92:"Starker Regen, letzte Stunde Gewitter h\xf6rbar",93:"Leichter Schnee/Regen-Hagel, letzte Stunde Gewitter h\xf6rbar",94:"Starker Schnee/Regen-Hagel, letzte Stunde Gewitter h\xf6rbar",95:"Leichtes/M\xe4\xdfiges Gewitter mit Regen/Schnee",96:"Leichtes/M\xe4\xdfiges Gewitter mit Hagel",97:"Schweres Gewitter mit Regen/Schnee",98:"Gewitter mit Sandsturm",99:"Schweres Gewitter mit Hagel"},[a,s]=(0,r.useState)(!1),l=()=>{s(!a)};return void 0!==n[t]?(0,z.jsxs)(P,{onClick:l,title:i[t],children:[a?(0,z.jsx)(L,{text:i[t],onClick:l}):(0,z.jsx)(z.Fragment,{}),n[t]]}):(0,z.jsx)(z.Fragment,{})},O=a.Ay.div`
    display: grid;

    border-top: 1px solid #ccc;

    justify-items: center;
    margin: 5px;
    padding: 2px;

    align-items: center;

    .event_type {
        justify-self: start;
        grid-column-start: 1;
        grid-row-start: 1;
        padding: 5px;
    }

    .event_location {
        grid-column-start: 2;
        grid-row-start: 1;
        padding: 5px;
    }

    .AttendenceInput {
        grid-column-start: 3;
        grid-row-start: 2;
        grid-row-end: 5;
        justify-self: end;
    }

    .event_date {
        justify-self: start;
        grid-column-start: 1;
        grid-row-start: 2;
        padding: 5px;
    }

    .event_begin {
        grid-column-start: 2;
        grid-row-start: 2;
        padding: 5px;
    }

    .departure {
        grid-column-start: 1;
        grid-row-start: 3;
        justify-self: start;
        padding: 5px;
    }

    .event_departure {
        grid-column-start: 2;
        grid-row-start: 3;
        padding: 5px;
    }

    .leave_dep {
        grid-column-start: 1;
        grid-row-start: 4;
        justify-self: start;
        padding: 5px;
    }

    .event_leave_dep {
        grid-column-start: 2;
        grid-row-start: 4;
        padding: 5px;
    }

    .clothing {
        grid-column-start: 1;
        grid-row-start: 5;
        justify-self: start;
        padding: 5px;
    }

    .event_clothing {
        grid-column-start: 2;
        grid-row-start: 5;
    }

    .plusone_input {
        grid-column-start: 3;
        grid-row-start: 5;
        justify-self: end;
    }

    .weather {
        grid-column-start: 1;
        grid-row-start: 6;
        justify-self: start;
        padding: 5px;
    }

    .weather_temp {
        grid-column-start: 2;
        grid-row-start: 6;
    }

    .weather_icon {
        grid-column-start: 3;
        grid-row-start: 6;
        justify-self: end;
    }

    .event_diagram {
        justify-self: start;
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 7;
    }

    .plusone_icon {
        grid-column-start: 1;
        grid-row-start: 8;
        justify-self: start;
        padding: 5px;
    }

    .plusone {
        grid-column-start: 2;
        grid-row-start: 8;
    }

    .fallback {
        background-image: linear-gradient(to right, transparent, grey);
        padding: 5px;
        margin: 5px;
        width: 100%;
        min-width: min(100px, 25vw);
        min-height: 28px;
        animation: blink 4s linear infinite;

        @keyframes blink {
            0% {opacity: 0.5;}
            50% {opacity: 1;}
            100% {opacity: 0.5;}
        }
    }

    .fallback_icon {
        animation: blink_icon 1s linear infinite;
        

        @keyframes blink_icon {
            0% {fill: white; transform: rotate(0deg);}
            50% {fill: grey;}
            100% {fill: white; transform: rotate(360deg);}
        }

        @keyframes rotate_icon {
            0% {transform: rotate(0deg);}
            100% {transform: rotate(360deg);}
        }
    }
`;var W=n(7474),H=n(591),M=n(7059),V=n(5467);const U=e=>{let{event:t,theme:n,association_id:r,practice:i}=e;_.t1.register(_.PP,_.kc,_.E8,_.hE,_.m_,_.s$);const a={id:"horizontalLine",afterDraw:e=>{const t=e.scales.x.getPixelForValue(12),r=e.ctx;r.save(),r.strokeStyle=n.greenRGB,r.lineWidth=2,r.beginPath(),r.moveTo(t,e.chartArea.top+4),r.lineTo(t,e.chartArea.bottom-4),r.stroke(),r.restore()}},s={animation:{duration:0},indexAxis:"y",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:(0,V._m)(7,r)}},scales:{x:{stacked:!0,display:!1},y:{stacked:!0,display:!1}}},l={labels:[""],datasets:[{data:[(null===t||void 0===t?void 0:t.Consent)+(null===t||void 0===t?void 0:t.PlusOne)],backgroundColor:n.greenRGB},{data:[null===t||void 0===t?void 0:t.ProbAttending],backgroundColor:n.lightgreenRGB},{data:[null===t||void 0===t?void 0:t.Maybe],backgroundColor:n.yellowRGB},{data:[null===t||void 0===t?void 0:t.ProbMissing],backgroundColor:n.lightredRGB},{data:[null===t||void 0===t?void 0:t.Refusal],backgroundColor:n.redRGB},{data:[null===t||void 0===t?void 0:t.ProbSignout],backgroundColor:n.darkredRGB}]};return(0,z.jsx)(D.yP,{height:"30px",options:s,data:l,plugins:[i&&a]})},K=e=>{let{event:t,evaluation:n,auth_level:r,onClick:i,showEventInfo:a,practice:s,theme:l}=e,d=new Date(null===t||void 0===t?void 0:t.Date),c=null===t||void 0===t?void 0:t.Attendence;const h=()=>{a(t)};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("div",{className:"event_type",onClick:h,children:null===t||void 0===t?void 0:t.Type}),(0,z.jsx)("div",{className:"event_location",onClick:h,children:null===t||void 0===t?void 0:t.Location}),(0,z.jsx)(M.s,{event:t,attendence:c,onClick:i,theme:l}),(0,z.jsxs)("div",{className:"event_date",onClick:h,children:[d.getDate(),".",d.getMonth()+1,".",d.getFullYear()]}),(0,z.jsx)("div",{className:"event_begin",onClick:h,children:"12:34:56"!==(null===t||void 0===t?void 0:t.Begin)&&null!==(null===t||void 0===t?void 0:t.Begin)?`${null===t||void 0===t?void 0:t.Begin.slice(0,5)} Uhr`:"-"}),r>0?(0,z.jsx)("div",{className:"event_diagram",children:(0,z.jsx)(U,{className:"event_diagram",event:n,association_id:t.Association_ID,auth_level:r,practice:s,theme:l})}):(0,z.jsx)(z.Fragment,{})]})};var Z=n(2661);const Q=n.p+"static/media/racoon.4bf92332d4a00d844f00.gif",J=e=>{let{theme:t}=e;return(0,z.jsxs)(O,{children:[(0,z.jsx)("span",{className:"event_type fallback"}),(0,z.jsx)("span",{className:"event_location fallback"}),(0,z.jsx)("span",{className:"event_attendence fallback"}),(0,z.jsx)("span",{className:"event_date fallback"}),(0,z.jsx)("span",{className:"event_begin fallback"}),(0,z.jsx)("span",{className:"event_diagram fallback"}),t.pedro?(0,z.jsx)("img",{src:Q,alt:"pedro-spinner"}):(0,z.jsx)(Z.vTn,{className:"fallback_icon"})]})};var X=n(6132);const q=e=>{let{event:t,plusone:n,attendence:r,updatePlusOne:i,weather:a,evaluation:s,theme:l}=e;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("div",{className:"departure",children:"Abfahrt:"}),(0,z.jsx)("div",{className:"event_departure",children:"12:34:56"!==(null===t||void 0===t?void 0:t.Departure)&&null!==(null===t||void 0===t?void 0:t.Departure)?`${null===t||void 0===t?void 0:t.Departure.slice(0,5)} Uhr`:"-"}),(0,z.jsx)("div",{className:"leave_dep",children:"R\xfcckfahrt:"}),(0,z.jsx)("div",{className:"event_leave_dep",children:"12:34:56"!==(null===t||void 0===t?void 0:t.Leave_dep)&&null!==(null===t||void 0===t?void 0:t.Leave_dep)?`${null===t||void 0===t?void 0:t.Leave_dep.slice(0,5)} Uhr`:"-"}),0!==parseInt(null===t||void 0===t?void 0:t.Clothing)?(0,z.jsx)("div",{className:"clothing",children:"Bekleidung:"}):(0,z.jsx)(z.Fragment,{}),0!==parseInt(null===t||void 0===t?void 0:t.Clothing)?(0,z.jsx)("div",{className:"event_clothing",children:(0,z.jsx)(W.rX,{clothing:parseInt(null===t||void 0===t?void 0:t.Clothing)})}):(0,z.jsx)(z.Fragment,{}),null!==t&&void 0!==t&&t.Ev_PlusOne?(0,z.jsx)(H.A,{className:"plusone_input",plusOne:n,active:1===r,onClick:i,theme:l}):(0,z.jsx)(z.Fragment,{}),a?(0,z.jsx)("div",{className:"weather",children:"Wetter:"}):(0,z.jsx)(z.Fragment,{}),a?(0,z.jsx)("div",{className:"weather_temp",children:`${a.Temperature}\xb0C`}):(0,z.jsx)(z.Fragment,{}),a?(0,z.jsx)("div",{className:"weather_icon",children:(0,z.jsx)(G,{code:a.Weathercode})}):(0,z.jsx)(z.Fragment,{}),null!==t&&void 0!==t&&t.Ev_PlusOne&&(null===s||void 0===s?void 0:s.PlusOne)>0?(0,z.jsx)("div",{className:"plusone_icon",children:(0,z.jsx)(B.waN,{className:"Plusone_icon"})}):(0,z.jsx)(z.Fragment,{}),null!==t&&void 0!==t&&t.Ev_PlusOne&&(null===s||void 0===s?void 0:s.PlusOne)>0?(0,z.jsxs)("div",{className:"plusone",children:["+",null===s||void 0===s?void 0:s.PlusOne]}):(0,z.jsx)(z.Fragment,{})]})},Y=e=>{let{nextEventID:t,auth_level:n,showEventInfo:a,practice:s=!1,theme:l}=e,d="";const[c,h]=(0,r.useState)(),[o,g]=(0,r.useState)(),[u,m]=(0,r.useState)(),[p,x]=(0,r.useState)(),[v,j]=(0,r.useState)(),b=(0,r.useCallback)((async()=>{let e=new Date(null===c||void 0===c?void 0:c.Date),t=new Date;t.setDate(t.getDate()+6),void 0!==c&&e<t&&(0,i.Zq)(c).then((e=>{g(e)}))}),[c]),f=(0,r.useCallback)((async()=>{fetch(`${i.Hc}/api/v0/attendence/${t}?api_token=${localStorage.getItem("api_token")}`).then((e=>e.json())).then((e=>{x(e.Event.Attendence),j(e.Event.PlusOne),m(e.Attendence)}))}),[t]);return(0,r.useEffect)((()=>{fetch(`${i.Hc}/api/v0/attendence/${t}?api_token=${localStorage.getItem("api_token")}`).then((e=>e.json())).then((e=>{h(e.Event),x(e.Event.Attendence),j(e.Event.PlusOne),m(e.Attendence)}))}),[t]),(0,r.useEffect)((()=>{void 0!==c&&(f(),b())}),[c,f,b]),(0,r.useEffect)((()=>{const e=setInterval((()=>{f(),b()}),6e4);return()=>clearInterval(e)}),[f,b]),(null!==c&&void 0!==c&&c.Type.includes("Abgesagt")||(null===c||void 0===c?void 0:c.State)===X.t.CANCELED)&&(d="CanceledEvent"),(0,z.jsx)(z.Fragment,{children:void 0!==c?(0,z.jsxs)(O,{className:d,children:[(0,z.jsx)(K,{event:c,evaluation:u,auth_level:n,onClick:async(e,t)=>{await(0,i.NB)(e,t),x(t),f()},showEventInfo:a,theme:l,practice:s}),!s||c.Type.includes("Open Air")?(0,z.jsx)(q,{event:c,plusone:v,attendence:p,updatePlusOne:async()=>{await(0,i.NB)(null===c||void 0===c?void 0:c.Event_ID,p,!v),j(!v),f()},weather:o,evaluation:u,theme:l}):(0,z.jsx)(z.Fragment,{})]}):(0,z.jsx)(J,{theme:l})})},ee=JSON.parse('{"v0":{"11":[{"patch":0,"entries":[{"page":"Startseite","changes":["F\xfcr die Termine auf der Startseite k\xf6nnen weitere Informationen hinterlegt werden. Einfach auf den Termin tippen, um das Fenster zu \xf6ffnen.","Au\xdferdem werden die Termine jetzt in drei Kategorien eingeteilt und angezeigt: Proben, Auftritte und sonstige Termine."]},{"page":"Allgemein","changes":["Benachrichtigungen k\xf6nnen an- & abgeschaltet werden, entweder \xfcber die Glocke, oder \xfcber die Einstellungen. Dort ist auch die Unterscheidung zwischen \xdcben und Auftritt m\xf6glich."]}]}],"12":[{"patch":5,"entries":[{"page":"Startseite","changes":["Die \xc4nderungen werden jetzt am Ende der Startseite angezeigt"]}]},{"patch":4,"entries":[{"page":"Allgemein","changes":["Die Fehlermeldungen sammeln mehr Informationen, um Fehler besser nachvollziehen zu k\xf6nnen."]}]},{"patch":3,"entries":[{"page":"Allgemein","changes":["Um eine bessere Nutzbarkeit zu garantieren, aktualisiert sich die App jetzt automatisch, wenn eine neue Version verf\xfcgbar ist.","Zudem werden Fehlermeldungen jetzt abgefangen, damit sich die App nicht mehr im Login aufh\xe4ngt."]}]},{"patch":2,"entries":[{"page":"Allgemein","changes":["Fehler in der Farbanzeige bei Firefox behoben."]}]},{"patch":1,"entries":[{"page":"Abwesenheiten","changes":["F\xfcr das bessere Verst\xe4ndnis wurde die Bezeichnung \\"Abwesenheiten\\" in \\"Urlaub\\" ge\xe4ndert. Die Funktionalit\xe4t bleibt gleich."]},{"page":"Startseite, Anwesenheiten","changes":["Die App wartet auf die R\xfcckmeldung vom Server, ob eine Zusage/Absage gespeichert wurde. Um dies zu verdeutlichen, wird w\xe4hrend der Wartezeit ein Ladebalken angezeigt."]}]},{"patch":0,"entries":[{"page":"Startseite/Anwesenheiten","changes":["Auf der Startseite und unter Anwesenheiten k\xf6nnen jetzt f\xfcr freigeschaltete Termine Partner mit angegeben werden. Das soll die Planung f\xfcr Busse etc. erleichtern."]},{"page":"Startseite","changes":["Am Ende der Startseite wird eine kleine Nutzungsstatistik angezeigt."]},{"page":"Benachrichtigungen","changes":["Benachrichtigungen k\xf6nnen jetzt auch f\xfcr die neue Terminkategorie \\"Sonstige Termine\\" aktiviert/deaktiviert werden. Siehe Einstellungen."]},{"page":"Termine","changes":["Die Termine k\xf6nnen jetzt auch nach Kategorien gefiltert werden. Vorher passierte dies nur \xfcber den Titel \xdcben/Probe."]},{"page":"Allgemein","changes":["Dar\xfcber hinaus wurden einge Dinge im Hintergrund angepasst, damit die App in Zukunft noch besser funktioniert.","Kleine Aussicht f\xfcr die Zukunft: Passw\xf6rter werden demn\xe4chst notwendig, damit z.B. Bildergalerien nur f\xfcr Mitglieder sichtbar sind. Wer die App bereits installiert hat, wird davon wenig mitbekommen, da ein Login nicht jedes Mal notwendig ist.","Einige neue Funktionen werden daher auch nur f\xfcr installierte Apps verf\xfcgbar sein."]}]}],"13":[{"patch":5,"entries":[{"page":"Anwesenheiten","changes":["Fehler behoben, wodurch die Anwesenheiten bei installierten Apps unter Safari nicht korrekt angezeigt wurden"]}]},{"patch":4,"entries":[{"page":"Urlaub","changes":["Fehler behoben, wodurch Abwesenheiten von 00.00.0000 eingegeben werden konnten"]}]},{"patch":3,"entries":[{"page":"Termine","changes":["Fehler behoben, wodurch abgelehnte Termine weiterhin angezeigt wurden"]}]},{"patch":2,"entries":[{"page":"Startseite","changes":["Die Anzeige der Zusagen im Diagramm wurde gefixt. Zusagen mit Partnern wurden nicht als Zusage angezeigt"]}]},{"patch":1,"entries":[{"page":"Login","changes":["Wenn Rechte ver\xe4ndert werden, \xe4ndert sich Access-Token. Ung\xfcltige \\"alte\\" Access-Token werden abgefangen und der Nutzer wird aufgefordert, sich neu einzuloggen."]}]},{"patch":0,"entries":[{"page":"Startseite","changes":["Ladeanimation bei Terminen hinzugef\xfcgt","Die Zusage ist jetzt nur noch f\xfcr anstehende Termine m\xf6glich. Sobald der Termin begonnen hat, ist das Feld deaktiviert.","Der Balken unter den Terminen zeigt in hellen Farbt\xf6nen die erwarteten R\xfcckmeldungen an. Das System wird noch getestet, die Vorhersage liegt aber recht nah am tats\xe4chlichen Ergebnis."]},{"page":"Login","changes":["Der Nutzer wird jetzt informiert, wenn er noch kein Passwort gesetzt hat."]},{"page":"Allgemein","changes":["Die App wurde f\xfcr bessere Offline-Nutzbarkeit optimiert. Es wird weiterhin eine Internetverbindung ben\xf6tigt, die Verwendung ist aber bei schlechter Verbindung robuster geworden."]},{"page":"Startseite/Termine","changes":["Neues Icon f\xfcr die Bekleidung hinzugef\xfcgt"]}]}],"14":[{"patch":1,"entries":[{"page":"Verwaltung","changes":["Fehler behoben, wodurch die Verwaltung nicht mehr erreichbar war"]},{"page":"Startseite","changes":["Fehler behoben, wodurch die Wetteranzeige nicht mehr korrekt funktionierte, wenn kein Ort hinterlegt war"]},{"page":"Urlaub","changes":["Fehler behoben, wodurch der Beginn eines Urlaubs hinter dem Ende liegen konnte"]},{"page":"Login","changes":["Anzeigefehler unter Mozilla Firefox behoben"]}]},{"patch":0,"entries":[{"page":"Noten","changes":["Die Noten k\xf6nnen nur noch eingesehen werden, wenn der Nutzer ein Passwort gesetzt hat. Das Passwort kann in den Einstellungen gesetzt werden."]},{"page":"Allgemein","changes":["Die App wurde f\xfcr bessere Offline-Nutzbarkeit optimiert. Es wird weiterhin eine Internetverbindung ben\xf6tigt, die Verwendung ist aber bei schlechter Verbindung robuster geworden.","Neues Rechtesystem eingef\xfchrt. \xdcber Rollen kann jetzt festgelegt werden, welche Berechtigungen ein Nutzer hat. Die Rollen k\xf6nnen von Admins vergeben werden.","Der \xdcbergang vom alten zum neuen System ist flie\xdfend und wird nicht direkt sichtbar sein. Zuvor wurde ein Zugriffslevel pro Benutzer festgelegt, mit dem neuen System ist es m\xf6glich, einzelne Funktionen pro Verein freizugeben."]},{"page":"Startseite","changes":["Weitere Ladeanimation hinzugef\xfcgt, damit der Nutzer wei\xdf, dass die App noch arbeitet.","Das Wetter wird jetzt laufend aktualisiert, auch wenn die App eine Weile ge\xf6ffnet war","Termine k\xf6nnen jetzt auf der Startseite fixiert werden. Dadurch werden schneller R\xfcckmeldungen f\xfcr beispielsweise Anfragen erm\xf6glicht.","Die Wetteranzeige wurde \xfcberarbeitet und ist jetzt leichter verst\xe4ndlich.","Neue optionale Ladeanimation hinzugef\xfcgt"]},{"page":"Termine","changes":["F\xfcr jeden Termin kann jetzt angegeben werden, ob eine Push-Benachrichtigung gesendet werden soll."]}]}],"15":[{"patch":1,"entries":[{"page":"Allgemein","changes":["Fehler behoben, wodurch die App auf manchen Ger\xe4ten automatisch \xfcbersetzt wurde"]}]},{"patch":0,"entries":[{"page":"Startseite","changes":["F\xfcr Open-Air-Proben wird jetzt auch das Wetter angezeigt.","Die Vorraussage f\xfcr die Anzahl der Teilnehmer wurde verbessert."]},{"page":"Anwesenheiten","changes":["Unter der \xdcbersichtstabelle werden jetzt auch die vermuteten Teilnehmer angezeigt, analog zur Startseite.","Die erste Zeile in der \xdcbersichtstabelle ist jetzt fixiert, damit die Namen bzw. K\xfcrzel immer sichtbar sind.","Die Vorraussage f\xfcr die Anzahl der Teilnehmer wurde verbessert."]},{"page":"Termine","changes":["Termine, die nicht angenommen wurden, werden jetzt in der Detailansicht rot markiert."]},{"page":"Auswertung","changes":["Unter dem Reiter \\"Auswertung\\" wird eine pers\xf6nliche Auswertung angezeigt. Die Bewertungsmethode ist noch nicht final, grunds\xe4tzlich wird Anwesenheit positiv bewertet, unentschuldigtes Fehlen negativ."]},{"page":"Allgemein","changes":["Rechtesystem umgesetzt bei Anwesenheiten, Auswertung, Mitglieder und Rollenverwaltung","Wenn der Nutzer kein Passwort gesetzt hat, wird er sofort zu den Einstellungen weitergeleitet","Auf dem Server wird eine eindeutige ID f\xfcr das Ger\xe4t gespeichert, um auf Dauer mehrfache Anmeldungen zu verhindern."]},{"page":"Urlaub/Abmeldung","changes":["Abmeldungen k\xf6nnen f\xfcr einzelne Wochentage sowie z.B. nur in geraden/ungeraden Wochen vorgenommen werden. Praktisch f\xfcr beispielsweise Wechselschicht oder Gardetraining, ohne sich gleichzeitig von den Auftritten abzumelden."]},{"page":"Hilfe/Datenschutz","changes":["Zus\xe4tzlich zur Hilfe wird angegeben, welche Daten gespeichert werden und wie sie genutzt werden."]}]}],"16":[{"patch":1,"entries":[{"page":"Startseite, Anwesenheiten","changes":["Abmeldungen sind nur bis zu einer bestimmten Zeit vor jedem Termin m\xf6glich. Anmeldungen sind bis zum Beginn des Termins m\xf6glich."]},{"page":"Allgemein","changes":["Animation f\xfcr aktuelles Wetter sowie Konfetti in der Karnevalssession hinzugef\xfcgt"]}]},{"patch":0,"entries":[{"page":"Anwesenheiten","changes":["In der Anwesenheits\xfcbersicht wird die Prognose pro Person angezeigt, um auch die Stimmen besser einsch\xe4tzen zu k\xf6nnen","Die erste Nutzergruppe in der \xdcbersicht wird automatisch ausgew\xe4hlt","Bei der Eingabe der Anwesenheit werden abgesagte Termine nicht mehr angezeigt","Anfragen werden gelb angezeigt, um sie besser von angenommenen Terminen unterscheiden zu k\xf6nnen","Striche zwischen den Terminen zeigen an, ob die Termine am selben Tag oder in der selben Woche stattfinden"]},{"page":"Startseite","changes":["F\xfcr Proben wird eine Linie bei 13 Personen gezogen, um auf einen Blick zu sehen, ob die Probe stattfinden kann.","Die Eingabe der Anwesenheit wurde angepasst, um die Bedienung zu erleichtern.","Abgesagte Termine werden auf der Startseite rot markiert."]},{"page":"Einstellungen","changes":["Infotext hinzugef\xfcgt, um zu erkl\xe4ren, warum ein Passwort notwendig ist und nicht direkt die Startseite angezeigt wird."]},{"page":"Login","changes":["Die Anzeige, dass kein Passwort gesetzt ist, wurde entfernt, da direkt zu den Einstellungen weitergeleitet wird.","Der Anzeigemodus (Dark/Light/forced) f\xfcr das Ger\xe4t wird gespeichert, um die Anzeige zu optimieren."]},{"page":"Allgemein","changes":["API Endpunkte vereinheitlicht. Erm\xf6glicht eine bessere Wartung sowie verbesserte Offline-F\xe4higkeit."]},{"page":"Termine","changes":["Status hinzugef\xfcgt, um anzuzeigen, ob ein Termin eine Anfrage ist, angenommen, abgelehnt oder abgesagt wurde."]}]}],"17":[{"patch":0,"entries":[{"page":"Anwesenheiten","changes":["Eingabe der Anwesenheit an die Startseite angepasst, um die Bedienung zu erleichtern"]}]}]}}'),te=e=>{var t;let{read:n,version:i}=e;const[a,s]=(0,r.useState)(!1);let l=i.split(".")[0],c=i.split(".")[1];return(0,z.jsxs)(d,{id:"changelog",children:[n||a?(0,z.jsx)(z.Fragment,{}):null===(t=ee[l][c])||void 0===t?void 0:t.map(((e,t)=>(0,z.jsx)(ne,{change:e,majmin:l+"."+c},t))),n||a?(0,z.jsx)(z.Fragment,{}):(0,z.jsx)(j.default,{onClick:()=>{s(!0),localStorage.setItem("changelogRead",i)},children:"\xc4nderungen verbergen"})]})},ne=e=>{var t;let{change:n,majmin:r}=e;return(0,z.jsxs)("div",{className:"Current",children:[(0,z.jsxs)("h2",{children:[r,n.patch>0?"."+n.patch:""]}),(0,z.jsx)("ul",{children:null===(t=n.entries)||void 0===t?void 0:t.map(((e,t)=>(0,z.jsx)(re,{entry:e},`${n.version}_${t}`)))})]})},re=e=>{var t;let{entry:n}=e;return(0,z.jsxs)("li",{children:[(0,z.jsx)("h3",{children:n.page}),null===(t=n.changes)||void 0===t?void 0:t.map(((e,t)=>(0,z.jsxs)(r.Fragment,{children:[0!==t?(0,z.jsx)("br",{}):(0,z.jsx)(z.Fragment,{}),(0,z.jsx)("span",{children:e},t)]},t)))]})},ie=(0,r.lazy)((()=>Promise.resolve().then(n.bind(n,262)))),ae=e=>{let{fullname:t,nextPracticeIDs:n,nextEventIDs:i,nextOtherIDs:a,fixedEventIDs:s,showEventInfo:l,auth_level:d,theme:c}=e;return(0,z.jsxs)("div",{children:[(0,z.jsx)(se,{fullname:t}),n||i||a?(0,z.jsx)(z.Fragment,{}):(0,z.jsx)(Y,{nextEventID:void 0,theme:c}),(0,z.jsxs)(r.Suspense,{children:[(null===s||void 0===s?void 0:s.length)>0?(0,z.jsxs)("div",{className:"event_header",children:["Fixierte",1===s.length?"r":""," Termin",s.length>1?"e":"",":"]}):(0,z.jsx)(z.Fragment,{}),(null===s||void 0===s?void 0:s.length)>0?s.map((e=>(0,z.jsx)(Y,{nextEventID:e,auth_level:d,showEventInfo:l,theme:c},`fixedEvent_${e}`))):(0,z.jsx)(z.Fragment,{})]}),(0,z.jsxs)(r.Suspense,{children:[(null===n||void 0===n?void 0:n.length)>0?(0,z.jsxs)("div",{className:"event_header",children:["N\xe4chste Probe",n.length>1?"n":"",":"]}):(0,z.jsx)(z.Fragment,{}),(null===n||void 0===n?void 0:n.length)>0?n.map((e=>(0,z.jsx)(Y,{nextEventID:e,auth_level:d,showEventInfo:l,theme:c,practice:!0},`nextPractice_${e}`))):(0,z.jsx)(z.Fragment,{})]}),(0,z.jsxs)(r.Suspense,{children:[(null===i||void 0===i?void 0:i.length)>0?(0,z.jsxs)("div",{className:"event_header",children:["N\xe4chste",1===i.length?"r":""," Auftritt",i.length>1?"e":"",":"]}):(0,z.jsx)(z.Fragment,{}),(null===i||void 0===i?void 0:i.length)>0?i.map((e=>(0,z.jsx)(Y,{nextEventID:e,auth_level:d,showEventInfo:l,theme:c},`nextEvent_${e}`))):(0,z.jsx)(z.Fragment,{})]}),(0,z.jsxs)(r.Suspense,{children:[(null===a||void 0===a?void 0:a.length)>0?(0,z.jsxs)("div",{className:"event_header",children:["N\xe4chste",1===a.length?"r":""," Termin",a.length>1?"e":"",":"]}):(0,z.jsx)(z.Fragment,{}),(null===a||void 0===a?void 0:a.length)>0?a.map((e=>(0,z.jsx)(Y,{nextEventID:e,auth_level:d,showEventInfo:l,theme:c},`nextOther_${e}`))):(0,z.jsx)(z.Fragment,{})]})]})},se=e=>{let{fullname:t}=e;const[n,a]=(0,r.useState)(new Array(0));return(0,r.useEffect)((()=>{(async()=>{fetch(`${i.Hc}/api/v0/member?api_token=${localStorage.getItem("api_token")}`).then((e=>e.json())).then((e=>{let t=e.filter((e=>{let t=new Date(e.Birthdate),n=new Date;t.setFullYear(n.getFullYear());let r=t.getTime()-n.getTime();return-6048e5<r&&r<6048e5})).sort(((e,t)=>{let n=new Date(e.Birthdate),r=new Date(t.Birthdate);return n.getMonth()<r.getMonth()?-1:n.getMonth()>r.getMonth()?1:n.getDate()<r.getDate()?-1:n.getDate()>r.getDate()?1:0}));a(t)}))})()}),[]),(null===n||void 0===n?void 0:n.length)>0?(0,z.jsxs)("div",{children:[(0,z.jsx)("h3",{children:"Geburtstage:"}),null===n||void 0===n?void 0:n.map((e=>{let n=new Date(e.Birthdate),r=new Date,i=r.getDate()===n.getDate(),a=e.Forename+" "+e.Surname;return t===a&&i?(0,z.jsxs)("div",{children:["Herzlichen Gl\xfcckwunsch, ",t.split(" ")[0],"!"]},a):(0,z.jsxs)("div",{children:[a,": ",n.getDate(),".",n.getMonth()+1,", ",r.getFullYear()-n.getFullYear()," Jahre"]},a)}))]}):(0,z.jsx)(z.Fragment,{})},le=()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useCallback)((()=>{if(t(!e),e){let e=document.getElementById("feedbackcontent").value;(0,i.S9)(e)}document.getElementById("feedbackform").reset()}),[e]),a=(0,r.useCallback)((()=>{t(!1),document.getElementById("feedbackform").reset()}),[]);return(0,z.jsxs)("div",{children:[(0,z.jsxs)("div",{children:[(0,z.jsx)(ie,{onClick:n,children:e?"Senden":"Feedback"}),e?(0,z.jsx)(ie,{onClick:a,children:"Abbrechen"}):(0,z.jsx)(z.Fragment,{})]}),(0,z.jsx)("form",{id:"feedbackform",children:(0,z.jsx)(c,{"aria-label":"Feedback-Feld",open:e,name:"content",id:"feedbackcontent",cols:"30",rows:"10"})})]})},de=e=>{let{fullname:t,auth_level:n,theme:a}=e;const[d,c]=(0,r.useState)(),[h,o]=(0,r.useState)(),[v,j]=(0,r.useState)(),[b,f]=(0,r.useState)(),[w,k]=(0,r.useState)(!1),[S,y]=(0,r.useState)(!1),[N,_]=(0,r.useState)(!1),[D,F]=(0,r.useState)(void 0),E=(0,r.useRef)();return(0,r.useEffect)((()=>{(async()=>{fetch(`${i.Hc}/api/v0/events?fixed&api_token=${localStorage.getItem("api_token")}`).then((e=>200===e.status?e.json():[])).then((e=>{E.current=e}))})(),(async()=>{fetch(`${i.Hc}/api/v0/events?next=event&api_token=${localStorage.getItem("api_token")}`).then((e=>200===e.status?e.json():[])).then((e=>{o(e)}))})(),(async()=>{fetch(`${i.Hc}/api/v0/events?next=practice&api_token=${localStorage.getItem("api_token")}`).then((e=>200===e.status?e.json():[])).then((e=>{c(e)}))})(),(async()=>{fetch(`${i.Hc}/api/v0/events?next=other&api_token=${localStorage.getItem("api_token")}`).then((e=>200===e.status?e.json():[])).then((e=>{j(e)}))})();let e=navigator.userAgent.toLowerCase().includes("iphone");y("browser tab"===(0,i.Up)()&&window.innerWidth<parseInt(a.medium.split("px")[0])&&(p.$||e))}),[a.medium]),(0,r.useEffect)((()=>{var e;let t=null===(e=E.current)||void 0===e?void 0:e.filter((e=>(!d||!d.includes(e))&&((!h||!h.includes(e))&&(!v||!v.includes(e)))));f(t)}),[d,h,v]),(0,z.jsxs)(s,{id:"Dashboard",children:[S?(0,z.jsx)(l,{children:(0,z.jsx)(g.fQM,{onClick:()=>{!navigator.userAgent.toLowerCase().includes("iphone")&&p.$?p.$.prompt():(k(!0),y(!1))}})}):(0,z.jsx)(z.Fragment,{}),S?(0,z.jsx)(l,{children:"Diese App kann auch installiert werden, einfach auf das Icon klicken!"}):(0,z.jsx)(z.Fragment,{}),w?(0,z.jsxs)(l,{className:"iosInstruction",children:["Erst ",(0,z.jsx)(u.if7,{}),", dann ",(0,z.jsx)(m.vhA,{})]}):(0,z.jsx)(z.Fragment,{}),N?(0,z.jsx)(A,{hideEventInfo:()=>{_(!1)},eventInfoData:D,fullname:t}):(0,z.jsx)(ae,{fullname:t,nextPracticeIDs:d,nextEventIDs:h,nextOtherIDs:v,fixedEventIDs:b,showEventInfo:e=>{_(!0),F(e)},auth_level:n,theme:a}),(0,z.jsx)(C,{theme:a,auth_level:n}),(0,z.jsx)(le,{}),(0,z.jsx)(te,{read:localStorage.getItem("changelogRead")===x.r,version:x.r})]})}},4294:(e,t,n)=>{n.d(t,{Fc:()=>p,hA:()=>g,Jl:()=>u,Ug:()=>j,hf:()=>m,V9:()=>v,j_:()=>b,KB:()=>x,Ay:()=>w});var r=n(5043),i=n(423),a=n(5394);const s=n(5464).Ay.div`

    position: relative;
    height: 64px;
    width: 64px;

    :nth-child(1) {
        z-index: 3;
    }

    :nth-child(1) {
        z-index: 2;
    }

    .IconWrapper {
        position: absolute;
    }

    svg {
        height: 100%;
        width: 100%;
    }

    .LoadingSpinner {
        animation: spin 1s linear infinite;

        @keyframes spin {
            0% {transform: rotate(0deg);}
            100% {transform: rotate(360deg);}
        }
    }
`;var l=n(3441),d=n(3156),c=n(2661),h=n(579);const o=e=>{switch(e.attendence){default:case-1:return(0,h.jsx)(g,{callback:e.callback,theme:e.theme});case 0:return(0,h.jsx)(m,{callback:e.callback,theme:e.theme});case 1:return(0,h.jsx)(u,{callback:e.callback,theme:e.theme});case 2:return(0,h.jsx)(p,{callback:e.callback,theme:e.theme})}},g=e=>{let{callback:t,size:n,theme:r,overlay:a,className:s}=e,d=[r.green,r.red,r.darkred];return(0,h.jsx)("div",{className:`ButtonWrapper ${s}`,children:(0,h.jsxs)(l.Vx.Provider,{value:{color:r.blue,className:"IconWrapper Attendence_none"},children:[(0,h.jsx)(i.Edw,{size:"100%",onClick:t}),(0,h.jsx)(f,{callback:t,fill:d[a]})]})})},u=e=>{let{callback:t,theme:n,className:r}=e;return(0,h.jsx)("div",{className:`ButtonWrapper ${r}`,children:(0,h.jsxs)(l.Vx.Provider,{value:{color:n.green,className:"IconWrapper "},children:[(0,h.jsx)(a.G3G,{size:"100%",onClick:t}),(0,h.jsx)(f,{callback:t})]})})},m=e=>{let{callback:t,theme:n,className:r}=e;return(0,h.jsx)("div",{className:`ButtonWrapper ${r}`,children:(0,h.jsxs)(l.Vx.Provider,{value:{color:n.red,className:"IconWrapper"},children:[(0,h.jsx)(i.cW1,{size:"100%",onClick:t}),(0,h.jsx)(f,{callback:t})]})})},p=e=>{let{callback:t,theme:n,className:r}=e;return(0,h.jsx)("div",{className:`ButtonWrapper ${r}`,children:(0,h.jsxs)(l.Vx.Provider,{value:{color:n.yellow,className:"IconWrapper"},children:[(0,h.jsx)(i.Edw,{size:"100%",onClick:t}),(0,h.jsx)(f,{callback:t})]})})},x=e=>{let{callback:t}=e;return(0,h.jsx)("div",{className:"ButtonWrapper",children:(0,h.jsxs)(l.Vx.Provider,{value:{color:"#904c77",className:"IconWrapper"},children:[(0,h.jsx)(i.wMi,{size:"100%",onClick:t}),(0,h.jsx)(f,{callback:t})]})})},v=e=>{let{callback:t}=e;return(0,h.jsxs)(l.Vx.Provider,{value:{color:"#7d7abc",className:"IconWrapper"},children:[(0,h.jsx)(i.Edw,{size:"100%",onClick:t}),(0,h.jsx)(f,{callback:t})]})},j=e=>{let{callback:t}=e;return(0,h.jsxs)(l.Vx.Provider,{value:{color:"#00bd00",className:"IconWrapper"},children:[(0,h.jsx)(i.cW1,{size:"100%",onClick:t}),(0,h.jsx)(f,{callback:t})]})},b=e=>{let{callback:t,theme:n,className:r=""}=e;return(0,h.jsxs)(l.Vx.Provider,{value:{color:"white",className:`IconWrapper ${r}`},children:[(0,h.jsx)(d.waN,{size:"50%",onClick:t}),(0,h.jsx)(f,{callback:t,fill:n.greenRGB,r:"40.625%"})]})},f=e=>{let{callback:t,fill:n="white",r:r="35%"}=e;return(0,h.jsx)("svg",{size:"100%",className:"IconWrapper",children:(0,h.jsx)("circle",{cx:"50%",cy:"50%",r:r,fill:n,onClick:t})})},w=e=>{const[t,n]=(0,r.useState)(e.attendence),[i,a]=(0,r.useState)(!1),l=(0,r.useCallback)((async()=>{var r;let i=new Date,s=void 0!==e.event?new Date(null===(r=e.event)||void 0===r?void 0:r.Date):void 0;if(s&&e.event.Begin){var l;if(s.setHours(e.event.Begin.split(":")[0]),s.setMinutes(e.event.Begin.split(":")[1]),i.getTime()>s.getTime())return void alert("Du kannst deine Zusage nicht mehr \xe4ndern, da der Termin bereits begonnen hat. Solltest du vergessen haben abzusagen, schick bitte eine WhatsApp.");if("event"===(null===(l=e.event)||void 0===l?void 0:l.Category)&&i.getTime()>s.getTime()-54e5)return void alert("Du kannst deine Zusage nicht mehr \xe4ndern, da der Termin in weniger als 1,5 Stunden beginnt. Schick bitte eine WhatsApp zum An- oder Abmelden.")}let d=(t+1)%e.states;a(!0),await e.onClick(e.event_id,d),a(!1),n(d)}),[e,t]);return(0,r.useEffect)((()=>{n(e.attendence)}),[e.attendence]),(0,h.jsxs)(s,{className:"Terminzusage",children:[e.cancelled?(0,h.jsx)(o,{attendence:0,theme:e.theme}):(0,h.jsx)(o,{callback:l,attendence:t,theme:e.theme}),i?(0,h.jsx)(c.vTn,{className:"LoadingSpinner"}):null]})}},591:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(3441),i=n(3156);const a=n(5464).Ay.div.attrs((e=>({className:e.className})))`
    position: relative;
    height: 64px;
    width: 64px;

    :nth-child(1) {
        z-index: 3;
    }

    :nth-child(1) {
        z-index: 2;
    }

    .IconWrapper {
        position: absolute;
        max-width: 64px;
    }

    .UserIcon {
        top: 25%;
        left: 25%;
        height: 50%;
        width: 50%;
    }

    svg {
        top: 0;
        height: 100%;
        width: 100%;
    }
`;var s=n(579);const l=e=>{let{callback:t,active:n,theme:r}=e;return(0,s.jsx)("svg",{className:"IconWrapper",children:(0,s.jsx)("circle",{cx:"50%",cy:"50%",r:"40.625%",fill:n?r.greenRGB:r.blue,onClick:t})})},d=e=>{let{active:t,plusOne:n,onClick:d,theme:c,className:h}=e;return(0,s.jsx)(a,{className:h,children:(0,s.jsxs)(r.Vx.Provider,{value:{color:"white",className:"IconWrapper UserIcon"},children:[n&&t?(0,s.jsx)(i.waN,{onClick:d,size:"50%"}):(0,s.jsx)(i.x$1,{size:"50%",onClick:d}),(0,s.jsx)(l,{callback:d,active:t,theme:c})]})})}},5467:(e,t,n)=>{n.d(t,{_m:()=>r,sx:()=>i});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=JSON.parse(localStorage.getItem("permissions")||"{}");var r;if(null===t){for(let i in n)if(n[i].includes(e))return!0}else if(null!==(r=n[t])&&void 0!==r&&r.includes(e))return!0;return!1},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;for(let n of e)if(r(n,t))return!0;return!1}}}]);
//# sourceMappingURL=807.330f1cc7.chunk.js.map