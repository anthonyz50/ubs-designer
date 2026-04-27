import{r as ae,j as r}from"./iframe-DL6Dh11c.js";import{C as t}from"./Card-DepI2d5K.js";import"./preload-helper-C1FmrZbK.js";const se="_grid_ootzu_5",ne="_gap-none_ootzu_13",oe="_gap-small_ootzu_17",te="_gap-medium_ootzu_21",ie="_gap-large_ootzu_25",h={grid:se,"gap-none":"_gap-none_ootzu_13",gapNone:ne,"gap-small":"_gap-small_ootzu_17",gapSmall:oe,"gap-medium":"_gap-medium_ootzu_21",gapMedium:te,"gap-large":"_gap-large_ootzu_25",gapLarge:ie},s=ae.forwardRef(({columns:e={mobile:1,tablet:2,desktop:3,wide:4},gap:a="medium",children:J,className:K,style:Q,...X},Z)=>{const i=typeof e=="number"?{mobile:e,tablet:e,desktop:e,wide:e}:{mobile:e.mobile??1,tablet:e.tablet??2,desktop:e.desktop??3,wide:e.wide??4},ee={"--grid-cols-mobile":i.mobile,"--grid-cols-tablet":i.tablet,"--grid-cols-desktop":i.desktop,"--grid-cols-wide":i.wide,...Q},re=[h.grid,h[`gap-${a}`],K??""].filter(Boolean).join(" ");return r.jsx("div",{ref:Z,className:re,style:ee,...X,children:J})});s.displayName="Grid";s.__docgenInfo={description:`UBS Design System Grid component.

A responsive CSS Grid layout following UBS breakpoints:
- Mobile: ≥320px
- Tablet: ≥768px
- Desktop: ≥1024px
- Wide: ≥1440px

@example
\`\`\`tsx
<Grid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="medium">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>

<Grid columns={4} gap="large">
  {items.map(item => <Card key={item.id}>{item.name}</Card>)}
</Grid>
\`\`\``,methods:[],displayName:"Grid",props:{columns:{required:!1,tsType:{name:"union",raw:"number | GridColumns",elements:[{name:"number"},{name:"GridColumns"}]},description:`Number of columns. Can be a number (applies to all breakpoints)
or a responsive object.
@default { mobile: 1, tablet: 2, desktop: 3, wide: 4 }`,defaultValue:{value:"{ mobile: 1, tablet: 2, desktop: 3, wide: 4 }",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Gap between grid items. @default 'medium'",defaultValue:{value:"'medium'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Grid content (children become grid items)."}}};const pe={title:"Layout/Grid",component:s,tags:["autodocs"],argTypes:{columns:{control:"object",description:"Number of columns (number or responsive object)"},gap:{control:"select",options:["none","small","medium","large"],description:"Gap between grid items"}},args:{gap:"medium"}},n=({label:e})=>r.jsx(t,{variant:"pastel1",padding:"small",children:r.jsx("span",{style:{fontFamily:"Arial, sans-serif",fontSize:14},children:e})}),o=Array.from({length:12},(e,a)=>`Item ${a+1}`),d={render:e=>r.jsx(s,{...e,columns:2,children:o.slice(0,6).map(a=>r.jsx(n,{label:a},a))})},l={render:e=>r.jsx(s,{...e,columns:3,children:o.slice(0,9).map(a=>r.jsx(n,{label:a},a))})},m={render:e=>r.jsx(s,{...e,columns:4,children:o.map(a=>r.jsx(n,{label:a},a))})},p={args:{columns:{mobile:1,tablet:2,desktop:3,wide:4}},render:e=>r.jsx(s,{...e,children:o.map(a=>r.jsx(n,{label:a},a))})},c={name:"Responsive 2→4",args:{columns:{mobile:1,tablet:2,desktop:3,wide:4}},render:e=>r.jsx(s,{...e,children:o.slice(0,8).map(a=>r.jsx(n,{label:a},a))})},u={render:()=>r.jsx(s,{columns:3,gap:"none",children:o.slice(0,6).map(e=>r.jsx(n,{label:e},e))})},g={render:()=>r.jsx(s,{columns:3,gap:"small",children:o.slice(0,6).map(e=>r.jsx(n,{label:e},e))})},b={render:()=>r.jsx(s,{columns:3,gap:"medium",children:o.slice(0,6).map(e=>r.jsx(n,{label:e},e))})},C={render:()=>r.jsx(s,{columns:3,gap:"large",children:o.slice(0,6).map(e=>r.jsx(n,{label:e},e))})},x={render:()=>r.jsxs(s,{columns:{mobile:1,tablet:2,desktop:3},gap:"medium",children:[r.jsx(t,{variant:"default",header:r.jsx("strong",{children:"Total Assets"}),children:"CHF 2,450,000"}),r.jsx(t,{variant:"pastel1",header:r.jsx("strong",{children:"YTD Return"}),children:"+12.4%"}),r.jsx(t,{variant:"pastel2",header:r.jsx("strong",{children:"Risk Rating"}),children:"Moderate"}),r.jsx(t,{variant:"default",header:r.jsx("strong",{children:"Cash Position"}),children:"CHF 350,000"}),r.jsx(t,{variant:"gray",header:r.jsx("strong",{children:"Next Review"}),children:"15 April 2025"}),r.jsx(t,{variant:"default",header:r.jsx("strong",{children:"Open Orders"}),children:"3 pending"})]})};var G,j,v;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <Grid {...args} columns={2}>
      {items.slice(0, 6).map(item => <DemoCard key={item} label={item} />)}
    </Grid>
}`,...(v=(j=d.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var _,f,k;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Grid {...args} columns={3}>
      {items.slice(0, 9).map(item => <DemoCard key={item} label={item} />)}
    </Grid>
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var y,w,R;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Grid {...args} columns={4}>
      {items.map(item => <DemoCard key={item} label={item} />)}
    </Grid>
}`,...(R=(w=m.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var S,T,D;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
      wide: 4
    }
  },
  render: args => <Grid {...args}>
      {items.map(item => <DemoCard key={item} label={item} />)}
    </Grid>
}`,...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var N,z,F;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Responsive 2→4',
  args: {
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
      wide: 4
    }
  },
  render: args => <Grid {...args}>
      {items.slice(0, 8).map(item => <DemoCard key={item} label={item} />)}
    </Grid>
}`,...(F=(z=c.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var A,L,M;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Grid columns={3} gap="none">
      {items.slice(0, 6).map(item => <DemoCard key={item} label={item} />)}
    </Grid>
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var I,O,H;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Grid columns={3} gap="small">
      {items.slice(0, 6).map(item => <DemoCard key={item} label={item} />)}
    </Grid>
}`,...(H=(O=g.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var q,B,E;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Grid columns={3} gap="medium">
      {items.slice(0, 6).map(item => <DemoCard key={item} label={item} />)}
    </Grid>
}`,...(E=(B=b.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var V,P,U;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Grid columns={3} gap="large">
      {items.slice(0, 6).map(item => <DemoCard key={item} label={item} />)}
    </Grid>
}`,...(U=(P=C.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var Y,$,W;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Grid columns={{
    mobile: 1,
    tablet: 2,
    desktop: 3
  }} gap="medium">
      <Card variant="default" header={<strong>Total Assets</strong>}>CHF 2,450,000</Card>
      <Card variant="pastel1" header={<strong>YTD Return</strong>}>+12.4%</Card>
      <Card variant="pastel2" header={<strong>Risk Rating</strong>}>Moderate</Card>
      <Card variant="default" header={<strong>Cash Position</strong>}>CHF 350,000</Card>
      <Card variant="gray" header={<strong>Next Review</strong>}>15 April 2025</Card>
      <Card variant="default" header={<strong>Open Orders</strong>}>3 pending</Card>
    </Grid>
}`,...(W=($=x.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};const ce=["TwoColumns","ThreeColumns","FourColumns","Responsive","ResponsiveTwoToFour","GapNone","GapSmall","GapMedium","GapLarge","DashboardLayout"];export{x as DashboardLayout,m as FourColumns,C as GapLarge,b as GapMedium,u as GapNone,g as GapSmall,p as Responsive,c as ResponsiveTwoToFour,l as ThreeColumns,d as TwoColumns,ce as __namedExportsOrder,pe as default};
