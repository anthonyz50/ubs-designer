import{j as e}from"./iframe-DL6Dh11c.js";import{u as i,M as t}from"./blocks-BK4AFjsL.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bah2vay8.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Welcome/Introduction"}),`
`,e.jsx(n.h1,{id:"ubs-design-system",children:"UBS Design System"}),`
`,e.jsx(n.p,{children:"Welcome to the UBS Design System component library. This library provides a complete set of React components that strictly enforce UBS brand guidelines, ensuring consistency and compliance across all digital products."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"The UBS Design System is built with:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"React 18"})," with TypeScript"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CSS Modules"})," for scoped, collision-free styling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vite"})," for fast builds and HMR"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"WCAG 2.2 Level AA"})," accessibility compliance"]}),`
`]}),`
`,e.jsx(n.h2,{id:"core-principles",children:"Core Principles"}),`
`,e.jsx(n.h3,{id:"brand-compliance",children:"Brand Compliance"}),`
`,e.jsx(n.p,{children:"Every component enforces UBS brand rules at the code level. UBS Red is never applied to numbers. Typography follows the 16-level UBS hierarchy. Charts are always 2D with correct colour sequences."}),`
`,e.jsx(n.h3,{id:"accessibility-first",children:"Accessibility First"}),`
`,e.jsx(n.p,{children:"All components meet WCAG 2.2 Level AA requirements. Minimum contrast ratios of 4.5:1 for standard text and 3:1 for large text are enforced. Colour alone is never used to convey meaning."}),`
`,e.jsx(n.h3,{id:"regional-awareness",children:"Regional Awareness"}),`
`,e.jsx(n.p,{children:"Trading colours respect regional conventions. In EMEA and US markets, green indicates positive and red indicates negative values. In APAC markets, this is reversed."}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @ubs/design-system
`})}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { UBSThemeProvider, UBSGlobalStyles, Button, Typography } from '../index';

function App() {
  return (
    <UBSThemeProvider>
      <UBSGlobalStyles />
      <Typography variant="subheadline1">Welcome to UBS</Typography>
      <Button variant="primary">Get Started</Button>
    </UBSThemeProvider>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"theme-provider",children:"Theme Provider"}),`
`,e.jsxs(n.p,{children:["Always wrap your application in ",e.jsx(n.code,{children:"<UBSThemeProvider>"})," to enable theme context and dark mode support:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<UBSThemeProvider defaultColourMode="system">
  <UBSGlobalStyles />
  {/* Your app */}
</UBSThemeProvider>
`})}),`
`,e.jsx(n.h2,{id:"component-categories",children:"Component Categories"}),`
`,e.jsxs(n.p,{children:[`| Category | Components |
|----------|-----------|
| `,e.jsx(n.strong,{children:"Components"}),` | Button, Card, Alert, Divider, Typography, Icon |
| `,e.jsx(n.strong,{children:"Data Display"}),` | DataViz, TradingIndicator, Badge |
| `,e.jsx(n.strong,{children:"Layout"}),` | Grid, Impulse |
| `,e.jsx(n.strong,{children:"Brand"})," | Logo |"]}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"All design decisions are codified as tokens:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Colours"}),": Corporate, secondary, pastels, RAG, trading, chart sequences"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Typography"}),": Frutiger font family, 16-level hierarchy, weight constraints"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Spacing"}),": 4px grid scale (0, 4, 8, 12, 16, 24, 32, 48, 64, 96)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Breakpoints"}),": Mobile (320px), Tablet (768px), Desktop (1024px), Wide (1440px)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"key-rules",children:"Key Rules"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"UBS Red (#E60000)"})," is for emphasis only. Never use it for numbers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Frutiger"})," is the corporate typeface. Arial is the mandatory fallback."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No 3D charts"}),", gradients, or shadows in data visualisations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Donut over pie"})," for circular charts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"2px gap"})," between chart segments on screen."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Minimum font size"})," of 14px (10.5pt) for accessibility."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No text shadows"}),", justified text, or centred text blocks."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"Explore the sidebar to see all components, their variants, and documentation."})]})}function d(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{d as default};
