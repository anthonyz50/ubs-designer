import{j as e}from"./iframe-DL6Dh11c.js";import{u as l,M as d}from"./blocks-BK4AFjsL.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bah2vay8.js";const t=({fg:s,bg:n,fgName:r,bgName:i,ratio:a,pass:c})=>e.jsxs("tr",{style:{borderBottom:"1px solid #ECEBE4"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[e.jsx("span",{style:{width:16,height:16,borderRadius:2,backgroundColor:s,border:s==="#FFFFFF"?"1px solid #ccc":"none"}}),r]})}),e.jsx("td",{style:{padding:"8px 12px"},children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[e.jsx("span",{style:{width:16,height:16,borderRadius:2,backgroundColor:n,border:n==="#FFFFFF"?"1px solid #ccc":"none"}}),i]})}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace"},children:a}),e.jsx("td",{style:{padding:"8px 12px"},children:c?e.jsx("span",{style:{color:"#6F7A1A",fontWeight:700},children:"✓ Pass"}):e.jsx("span",{style:{color:"#BD000C",fontWeight:700},children:"✗ Fail"})})]}),h=()=>{const s=[{fg:"#000000",bg:"#FFFFFF",label:"Black on White"},{fg:"#E60000",bg:"#FFFFFF",label:"UBS Red on White"},{fg:"#FFFFFF",bg:"#000000",label:"White on Black"},{fg:"#FFFFFF",bg:"#E60000",label:"White on UBS Red"},{fg:"#000000",bg:"#ECEBE4",label:"Black on Pastel I"},{fg:"#5A5D5C",bg:"#FFFFFF",label:"Gray V on White"}];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12},children:s.map(({fg:n,bg:r,label:i})=>e.jsxs("div",{style:{backgroundColor:r,color:n,padding:16,borderRadius:4,fontFamily:"Arial, sans-serif",fontSize:14,border:"1px solid #CCCABC"},children:[e.jsx("div",{style:{fontWeight:700,marginBottom:4},children:i}),e.jsx("div",{children:"Sample text Aa Bb 123"})]},i))})};function o(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Foundation/Accessibility"}),`
`,e.jsx(n.h1,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The UBS Design System complies with ",e.jsx(n.strong,{children:"WCAG 2.2 Level AA"}),". Every component is built with accessibility as a first-class concern. This page documents the guidelines, contrast requirements, and rules that all UBS digital products must follow."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"standard",children:"Standard"}),`
`,e.jsxs(n.p,{children:["All UBS digital and print communications must meet ",e.jsx(n.strong,{children:"WCAG 2.2 Level AA"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"contrast-requirements",children:"Contrast Requirements"}),`
`,e.jsx(n.h3,{id:"minimum-ratios",children:"Minimum Ratios"}),`
`,e.jsxs(n.p,{children:[`| Content Type | Minimum Ratio | Applies To |
|-------------|---------------|------------|
| Standard text | `,e.jsx(n.strong,{children:"4.5:1"}),` | Text smaller than 25px (or 18.7px bold) |
| Large text | `,e.jsx(n.strong,{children:"3:1"}),` | Text 25px+ (or 18.7px+ bold) |
| Icons & graphics | `,e.jsx(n.strong,{children:"3:1"})," | Against background or adjacent colours |"]}),`
`,e.jsx(n.h3,{id:"ubs-colour-contrast-matrix",children:"UBS Colour Contrast Matrix"}),`
`,`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"Arial, sans-serif",fontSize:14},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #CCCABC"},children:[e.jsx("th",{style:{textAlign:"left",padding:"8px 12px"},children:"Foreground"}),e.jsx("th",{style:{textAlign:"left",padding:"8px 12px"},children:"Background"}),e.jsx("th",{style:{textAlign:"left",padding:"8px 12px"},children:"Ratio"}),e.jsx("th",{style:{textAlign:"left",padding:"8px 12px"},children:"AA Normal"})]})}),e.jsxs("tbody",{children:[e.jsx(t,{fg:"#000000",bg:"#FFFFFF",fgName:"Black",bgName:"White",ratio:"21:1",pass:!0}),e.jsx(t,{fg:"#E60000",bg:"#FFFFFF",fgName:"UBS Red",bgName:"White",ratio:"4.6:1",pass:!0}),e.jsx(t,{fg:"#FFFFFF",bg:"#E60000",fgName:"White",bgName:"UBS Red",ratio:"4.6:1",pass:!0}),e.jsx(t,{fg:"#000000",bg:"#ECEBE4",fgName:"Black",bgName:"Pastel I",ratio:"14.8:1",pass:!0}),e.jsx(t,{fg:"#000000",bg:"#F5F0E1",fgName:"Black",bgName:"Pastel II",ratio:"15.3:1",pass:!0}),e.jsx(t,{fg:"#5A5D5C",bg:"#FFFFFF",fgName:"Gray V",bgName:"White",ratio:"6.0:1",pass:!0}),e.jsx(t,{fg:"#7A7870",bg:"#FFFFFF",fgName:"Gray IV",bgName:"White",ratio:"4.5:1",pass:!0}),e.jsx(t,{fg:"#BD000C",bg:"#FFFFFF",fgName:"RAG Red",bgName:"White",ratio:"6.4:1",pass:!0}),e.jsx(t,{fg:"#6F7A1A",bg:"#FFFFFF",fgName:"RAG Green",bgName:"White",ratio:"5.1:1",pass:!0}),e.jsx(t,{fg:"#E4A911",bg:"#FFFFFF",fgName:"RAG Amber",bgName:"White",ratio:"2.4:1",pass:!1}),e.jsx(t,{fg:"#E4A911",bg:"#000000",fgName:"RAG Amber",bgName:"Black",ratio:"8.7:1",pass:!0})]})]})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," RAG Amber (#E4A911) fails contrast against white backgrounds for normal text. The Alert component uses a darker background tint to ensure compliance."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"interactive-contrast-demo",children:"Interactive Contrast Demo"}),`
`,`
`,e.jsx(h,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility-rules",children:"Accessibility Rules"}),`
`,e.jsx(n.h3,{id:"general",children:"General"}),`
`,e.jsxs(n.p,{children:[`| Rule | Requirement |
|------|-------------|
| `,e.jsx(n.strong,{children:"Colour independence"}),` | Colour alone must never convey meaning. Use icons, text, or patterns. |
| `,e.jsx(n.strong,{children:"Alternative text"}),` | All non-decorative images must have meaningful alt text. |
| `,e.jsx(n.strong,{children:"Heading structure"}),` | Documents must use a logical heading hierarchy (h1 → h2 → h3). |
| `,e.jsx(n.strong,{children:"Document title"})," | All documents must have a meaningful ",e.jsx(n.code,{children:"<title>"}),`. |
| `,e.jsx(n.strong,{children:"Language"})," | Documents must declare their language (",e.jsx(n.code,{children:"lang"}),` attribute). |
| `,e.jsx(n.strong,{children:"Focus indicators"}),` | All interactive elements must show visible focus (2px minimum). |
| `,e.jsx(n.strong,{children:"Touch targets"})," | Minimum 44px touch target size (WCAG 2.5.8). |"]}),`
`,e.jsx(n.h3,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.p,{children:[`| Rule | Requirement |
|------|-------------|
| `,e.jsx(n.strong,{children:"Minimum size"}),` | 14px (10.5pt) absolute minimum across all text |
| `,e.jsx(n.strong,{children:"Recommended body"}),` | 16px (12pt) for body text |
| `,e.jsx(n.strong,{children:"Line height"}),` | 22px (17pt) for 16px body text |
| `,e.jsx(n.strong,{children:"Zoom support"}),` | Content must work at 400% zoom without loss of functionality |
| `,e.jsx(n.strong,{children:"No text in images"})," | Avoid placing text within images. If necessary, 4.5:1 contrast minimum. |"]}),`
`,e.jsx(n.h3,{id:"data-visualisation",children:"Data Visualisation"}),`
`,e.jsxs(n.p,{children:[`| Rule | Requirement |
|------|-------------|
| `,e.jsx(n.strong,{children:"Chart gaps"}),` | 2px minimum gap between segments on screen when contrast < 3:1 |
| `,e.jsx(n.strong,{children:"Always 2D"}),` | No 3D charts, ever |
| `,e.jsx(n.strong,{children:"Line types"}),` | Use different line types for monochrome sequences |
| `,e.jsx(n.strong,{children:"Colour + shape"})," | Never rely on colour alone in charts |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"testing-tools",children:"Testing Tools"}),`
`,e.jsx(n.p,{children:"UBS recommends these tools for accessibility verification:"}),`
`,e.jsxs(n.p,{children:[`| Tool | Type | Link |
|------|------|------|
| `,e.jsx(n.strong,{children:"Colour Contrast Analyser"}),` | Desktop app | Paciello Group (TPGi) |
| `,e.jsx(n.strong,{children:"contrastchecker.com"})," | Online | ",e.jsx(n.a,{href:"https://contrastchecker.com",rel:"nofollow",children:"contrastchecker.com"}),` |
| `,e.jsx(n.strong,{children:"axe DevTools"})," | Browser extension | ",e.jsx(n.a,{href:"https://www.deque.com/axe/",rel:"nofollow",children:"deque.com/axe"})," |"]}),`
`,e.jsxs(n.p,{children:["The Storybook ",e.jsx(n.code,{children:"@storybook/addon-a11y"}),' addon runs axe-core checks on every story. Check the "Accessibility" panel for each component.']}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"component-compliance",children:"Component Compliance"}),`
`,e.jsx(n.p,{children:"Every component in this library includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Semantic HTML elements with appropriate ARIA roles"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-label"})," / ",e.jsx(n.code,{children:"aria-labelledby"})," for non-text content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-live"})," regions for dynamic content (alerts, toasts)"]}),`
`,e.jsx(n.li,{children:"Focus management for interactive components"}),`
`,e.jsx(n.li,{children:"Keyboard navigation support"}),`
`,e.jsx(n.li,{children:"Sufficient colour contrast for all states"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"prefers-reduced-motion"})," support for animations"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"reporting-issues",children:"Reporting Issues"}),`
`,e.jsxs(n.p,{children:["If you find an accessibility issue in any component, please raise it as a ",e.jsx(n.strong,{children:"P1 (critical)"})," issue. Accessibility compliance is non-negotiable for UBS brand standards."]})]})}function u(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{t as ContrastCheck,h as ContrastDemo,u as default};
