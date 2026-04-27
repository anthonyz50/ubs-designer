import{j as e}from"./iframe-DL6Dh11c.js";import{u as r,M as a}from"./blocks-BK4AFjsL.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bah2vay8.js";const t=({title:s,tokens:n})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("h3",{style:{fontFamily:"Arial, sans-serif",fontSize:16,marginBottom:12},children:s}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontFamily:"Arial, sans-serif",fontSize:14},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #CCCABC"},children:[e.jsx("th",{style:{textAlign:"left",padding:"8px 12px"},children:"Token"}),e.jsx("th",{style:{textAlign:"left",padding:"8px 12px"},children:"Value"}),e.jsx("th",{style:{textAlign:"left",padding:"8px 12px"},children:"Preview"})]})}),e.jsx("tbody",{children:n.map((d,l)=>e.jsxs("tr",{style:{borderBottom:"1px solid #ECEBE4"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"monospace",fontSize:13},children:d.name}),e.jsx("td",{style:{padding:"8px 12px"},children:d.value}),e.jsx("td",{style:{padding:"8px 12px"},children:d.preview})]},l))})]})]}),i=({size:s})=>e.jsx("div",{style:{width:s,height:12,backgroundColor:"#E60000",borderRadius:2}});function o(s){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Foundation/Tokens"}),`
`,e.jsx(n.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"All design decisions in the UBS Design System are captured as typed tokens. These tokens are the single source of truth for spacing, breakpoints, z-index, layout, transitions, and more."}),`
`,`
`,`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"spacing-scale-4px-grid",children:"Spacing Scale (4px Grid)"}),`
`,e.jsx(n.p,{children:"All spacing values follow a 4px base grid."}),`
`,e.jsx(t,{title:"Named Spacing Tokens",tokens:[{name:"spacing.none",value:"0px",preview:e.jsx(i,{size:0})},{name:"spacing.4xs",value:"4px",preview:e.jsx(i,{size:4})},{name:"spacing.3xs",value:"8px",preview:e.jsx(i,{size:8})},{name:"spacing.2xs",value:"12px",preview:e.jsx(i,{size:12})},{name:"spacing.xs",value:"16px",preview:e.jsx(i,{size:16})},{name:"spacing.sm",value:"24px",preview:e.jsx(i,{size:24})},{name:"spacing.md",value:"32px",preview:e.jsx(i,{size:32})},{name:"spacing.lg",value:"48px",preview:e.jsx(i,{size:48})},{name:"spacing.xl",value:"64px",preview:e.jsx(i,{size:64})},{name:"spacing.2xl",value:"96px",preview:e.jsx(i,{size:96})}]}),`
`,e.jsxs(n.p,{children:["Numeric spacing scale: ",e.jsx(n.code,{children:"[0, 4, 8, 12, 16, 24, 32, 48, 64, 96]"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(n.p,{children:"The UBS responsive system uses four breakpoints aligned to ISO-standard device categories."}),`
`,e.jsxs(n.p,{children:[`| Token | Width | Usage |
|-------|-------|-------|
| `,e.jsx(n.code,{children:"breakpoints.mobile"}),` | 320px | Small phones and narrow viewports |
| `,e.jsx(n.code,{children:"breakpoints.tablet"}),` | 768px | Tablets and medium viewports |
| `,e.jsx(n.code,{children:"breakpoints.desktop"}),` | 1024px | Desktop and laptop screens |
| `,e.jsx(n.code,{children:"breakpoints.wide"})," | 1440px | Wide monitors and large displays |"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Media queries"})," (for JS usage):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`mediaQueries.mobile   // '(min-width: 320px)'
mediaQueries.tablet   // '(min-width: 768px)'
mediaQueries.desktop  // '(min-width: 1024px)'
mediaQueries.wide     // '(min-width: 1440px)'
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Description |
|-------|-------|-------------|
| `,e.jsx(n.code,{children:"layout.maxWidth"}),` | 1440px | Maximum content width |
| `,e.jsx(n.code,{children:"layout.columns.mobile"}),` | 4 | Grid columns on mobile |
| `,e.jsx(n.code,{children:"layout.columns.tablet"}),` | 8 | Grid columns on tablet |
| `,e.jsx(n.code,{children:"layout.columns.desktop"}),` | 12 | Grid columns on desktop |
| `,e.jsx(n.code,{children:"layout.columns.wide"}),` | 12 | Grid columns on wide |
| `,e.jsx(n.code,{children:"layout.gutter.mobile"}),` | 16px | Side padding on mobile |
| `,e.jsx(n.code,{children:"layout.gutter.tablet"}),` | 24px | Side padding on tablet |
| `,e.jsx(n.code,{children:"layout.gutter.desktop"}),` | 32px | Side padding on desktop |
| `,e.jsx(n.code,{children:"layout.gutter.wide"}),` | 48px | Side padding on wide |
| `,e.jsx(n.code,{children:"layout.columnGap.mobile"}),` | 16px | Column gap on mobile |
| `,e.jsx(n.code,{children:"layout.columnGap.tablet"}),` | 24px | Column gap on tablet |
| `,e.jsx(n.code,{children:"layout.columnGap.desktop"}),` | 24px | Column gap on desktop |
| `,e.jsx(n.code,{children:"layout.columnGap.wide"})," | 32px | Column gap on wide |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"border-radius",children:"Border Radius"}),`
`,e.jsxs(n.p,{children:[`| Token | Value |
|-------|-------|
| `,e.jsx(n.code,{children:"borderRadius.none"}),` | 0px |
| `,e.jsx(n.code,{children:"borderRadius.sm"}),` | 2px |
| `,e.jsx(n.code,{children:"borderRadius.md"}),` | 4px |
| `,e.jsx(n.code,{children:"borderRadius.lg"}),` | 8px |
| `,e.jsx(n.code,{children:"borderRadius.xl"}),` | 12px |
| `,e.jsx(n.code,{children:"borderRadius.full"})," | 9999px |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"z-index-scale",children:"Z-Index Scale"}),`
`,e.jsx(n.p,{children:"Layered z-index values for consistent stacking."}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Usage |
|-------|-------|-------|
| `,e.jsx(n.code,{children:"zIndex.base"}),` | 0 | Default stacking level |
| `,e.jsx(n.code,{children:"zIndex.dropdown"}),` | 100 | Dropdowns and select menus |
| `,e.jsx(n.code,{children:"zIndex.sticky"}),` | 200 | Sticky headers and navigation |
| `,e.jsx(n.code,{children:"zIndex.overlay"}),` | 300 | Overlay backgrounds |
| `,e.jsx(n.code,{children:"zIndex.modal"}),` | 400 | Modal dialogs |
| `,e.jsx(n.code,{children:"zIndex.popover"}),` | 500 | Popovers and tooltips |
| `,e.jsx(n.code,{children:"zIndex.toast"}),` | 600 | Toast notifications |
| `,e.jsx(n.code,{children:"zIndex.tooltip"})," | 700 | Top-level tooltips |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"transitions",children:"Transitions"}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Usage |
|-------|-------|-------|
| `,e.jsx(n.code,{children:"duration.fast"}),` | 100ms | Micro-interactions (hover, focus) |
| `,e.jsx(n.code,{children:"duration.normal"}),` | 200ms | Standard transitions |
| `,e.jsx(n.code,{children:"duration.slow"}),` | 300ms | Complex animations |
| `,e.jsx(n.code,{children:"duration.slower"})," | 500ms | Full-page transitions |"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Easing curves:"})}),`
`,e.jsxs(n.p,{children:[`| Name | Value | Usage |
|------|-------|-------|
| `,e.jsx(n.code,{children:"easing.default"})," | ",e.jsx(n.code,{children:"cubic-bezier(0.4, 0, 0.2, 1)"}),` | Standard UBS easing |
| `,e.jsx(n.code,{children:"easing.easeOut"})," | ",e.jsx(n.code,{children:"cubic-bezier(0, 0, 0.2, 1)"}),` | Enter / appear |
| `,e.jsx(n.code,{children:"easing.easeIn"})," | ",e.jsx(n.code,{children:"cubic-bezier(0.4, 0, 1, 1)"}),` | Exit / disappear |
| `,e.jsx(n.code,{children:"easing.impulse"})," | ",e.jsx(n.code,{children:"cubic-bezier(0.22, 1, 0.36, 1)"})," | Spring-like impulse |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility-tokens",children:"Accessibility Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Description |
|-------|-------|-------------|
| `,e.jsx(n.code,{children:"accessibility.contrast.normalText"}),` | 4.5:1 | Minimum contrast for text < 25px |
| `,e.jsx(n.code,{children:"accessibility.contrast.largeText"}),` | 3:1 | Minimum contrast for text ≥ 25px |
| `,e.jsx(n.code,{children:"accessibility.contrast.graphics"}),` | 3:1 | Minimum contrast for UI components |
| `,e.jsx(n.code,{children:"accessibility.largeTextThreshold"}),` | 25px | Threshold for "large text" |
| `,e.jsx(n.code,{children:"accessibility.largeTextBoldThreshold"}),` | 18.7px | Threshold for bold "large text" |
| `,e.jsx(n.code,{children:"accessibility.minTouchTarget"}),` | 44px | Minimum touch target (WCAG 2.5.8) |
| `,e.jsx(n.code,{children:"accessibility.minFontSize"}),` | 14px | Absolute minimum font size |
| `,e.jsx(n.code,{children:"accessibility.focusIndicatorWidth"})," | 2px | Focus ring minimum width |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"Import tokens directly:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { spacing, breakpoints, zIndex, transitions } from '../index';

// Use in styled components or inline styles
const style = {
  padding: spacing.md,        // 32
  zIndex: zIndex.modal,       // 400
  transition: \`all \${transitions.duration.normal} \${transitions.easing.default}\`,
};
`})}),`
`,e.jsx(n.p,{children:"Or use CSS custom properties (injected by UBSThemeProvider):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.myComponent {
  padding: var(--ubs-spacing-md);
  z-index: var(--ubs-z-modal);
  transition: all var(--ubs-duration-normal) var(--ubs-easing-default);
}
`})})]})}function u(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{i as SpacingBar,t as TokenTable,u as default};
