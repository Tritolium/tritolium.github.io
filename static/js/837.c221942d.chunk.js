"use strict";(globalThis.webpackChunkspz_planner=globalThis.webpackChunkspz_planner||[]).push([[837],{9837:(e,r,t)=>{t.r(r),t.d(r,{default:()=>u});var i=t(5043),a=t(5709),n=t(6242),o=t(2439);const l=t(5464).Ay.div`
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;


        a, a:active {
            width: fit-content;
            border-radius: 5px;
            padding: 2px;
            background: ${e=>{let{theme:r}=e;return r.primaryLight}};
            color: ${e=>{let{theme:r}=e;return r.primaryDark}};
        }
    }

    nav {
        display: flex;
        flex-direction: column;    

        input[type=text] {
            margin: 2px;
            border-radius: 8px;
            border-width: 0;
            padding-left: 8px;
            max-width: calc(100% - 8px);
        }
        div {
            text-align: left;
        }
    }

    iframe {
        max-width: 215mm;
        width: 100%;
        aspect-ratio: 210/297;
    }
`;var s=t(579);const d=e=>{let{scores:r,onSelect:t}=e;const[n,o]=(0,i.useState)("");return(0,s.jsxs)(a.A,{children:[(0,s.jsx)("input",{type:"text",onChange:e=>{o(e.target.value.toLowerCase())}}),r.sort(((e,r)=>e.Title.localeCompare(r.Title))).filter((e=>e.Title.toLowerCase().includes(n))).map((e=>(0,s.jsx)(c,{onSelect:t,score:e},e.Score_ID)))]})},c=e=>{let{onSelect:r,score:t}=e;const a=(0,i.useCallback)((()=>{r(t.Score_ID)}),[r,t]);return(0,s.jsx)(n.A,{onClick:a,children:t.Title})},p=e=>{let{score:r}=e;return(0,s.jsxs)("div",{children:[null!==r&&void 0!==r&&r.Link?(0,s.jsx)("a",{href:null===r||void 0===r?void 0:r.Link,target:"_blank",rel:"noreferrer",children:"In neuem Fenster anzeigen"}):(0,s.jsx)(s.Fragment,{}),null!==r&&void 0!==r&&r.Link?(0,s.jsx)("iframe",{title:"score_view",src:r.Link}):(0,s.jsx)(s.Fragment,{})]})},u=()=>{const[e,r]=(0,i.useState)(new Array(0)),[t,a]=(0,i.useState)(-1),n=(0,i.useCallback)((async()=>{let e=await(0,o.OG)();r(void 0!==e?e:new Array(0))}),[]),c=(0,i.useCallback)((e=>{a(e)}),[]);return(0,i.useEffect)((()=>{n()}),[n]),(0,s.jsxs)(l,{children:[(0,s.jsx)(d,{scores:e,onSelect:c}),(0,s.jsx)(p,{score:e.find((e=>e.Score_ID===t))})]})}},5709:(e,r,t)=>{t.d(r,{A:()=>i});const i=t(5464).Ay.nav`
    margin: 2px;
    padding: 2px;
    white-space: nowrap;
    border: 1px solid ${e=>{let{theme:r}=e;return r.primaryLight}};
    border-radius: 10px;
    overflow-y: scroll;
    max-height: 75vh;
    min-width: fit-content;
    width: auto;
    max-width: fit-content;


    @media (max-width: ${e=>{let{theme:r}=e;return r.mobile}}) {
        white-space: normal;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: none;
    }

    ::-webkit-scrollbar-thumb {
        background: ${e=>{let{theme:r}=e;return r.primaryLight}};
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${e=>{let{theme:r}=e;return r.primaryHover}};
    }
`},6242:(e,r,t)=>{t.d(r,{A:()=>i});const i=t(5464).Ay.div`
    user-select: none;
    cursor: pointer;
    padding: 2px;
    border-radius: 5px;

    &:hover {
        background: ${e=>{let{theme:r}=e;return r.primaryHover}};
    }
`}}]);
//# sourceMappingURL=837.c221942d.chunk.js.map