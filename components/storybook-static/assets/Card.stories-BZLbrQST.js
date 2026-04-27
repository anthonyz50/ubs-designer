import{j as a}from"./iframe-DL6Dh11c.js";import{C as Z}from"./Card-DepI2d5K.js";import{B as h}from"./Button-CdYtj1qR.js";import{T as m}from"./Typography-C5tzE6ym.js";import"./preload-helper-C1FmrZbK.js";const sa={title:"Components/Card",component:Z,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","pastel1","pastel2","gray"],description:"Background variant from UBS colour palette"},padding:{control:"select",options:["none","small","medium","large"],description:"Internal padding"},hoverable:{control:"boolean",description:"Interactive hover effect"}},args:{variant:"default",padding:"medium",children:"Card content goes here."}},e={args:{variant:"default",children:"Default card on white (#FFFFFF) background."}},n={args:{variant:"pastel1",children:"Pastel I card on #ECEBE4 background."}},s={args:{variant:"pastel2",children:"Pastel II card on #F5F0E1 background."}},t={name:"Gray",args:{variant:"gray",children:"Gray card on Gray I (#CCCABC) background."}},o={args:{header:a.jsx(m,{variant:"subheadline3",children:"Portfolio Overview"}),children:"Your portfolio has grown 12.4% this quarter, outperforming the benchmark by 2.1 percentage points."}},d={args:{header:a.jsx(m,{variant:"subheadline3",children:"Action Required"}),footer:a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx(h,{variant:"primary",size:"small",children:"Approve"}),a.jsx(h,{variant:"outline",size:"small",children:"Decline"})]}),children:"Your annual review documents are ready for signature. Please review and approve by 31 March 2025."}},i={args:{hoverable:!0,header:a.jsx(m,{variant:"subheadline3",children:"Interactive Card"}),children:"Hover over this card to see the effect. Suitable for clickable cards in dashboards."}},c={args:{padding:"none",variant:"pastel1",children:"No padding"}},l={args:{padding:"small",variant:"pastel1",children:"Small padding"}},p={args:{padding:"medium",variant:"pastel1",children:"Medium padding"}},g={args:{padding:"large",variant:"pastel1",children:"Large padding"}},u={render:()=>a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16},children:["default","pastel1","pastel2","gray"].map(r=>a.jsxs(Z,{variant:r,header:a.jsx(m,{variant:"subheadline3",children:r}),children:["Card with ",r," background variant."]},r))})};var v,y,f;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: 'Default card on white (#FFFFFF) background.'
  }
}`,...(f=(y=e.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,C,P;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'pastel1',
    children: 'Pastel I card on #ECEBE4 background.'
  }
}`,...(P=(C=n.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var S,F,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'pastel2',
    children: 'Pastel II card on #F5F0E1 background.'
  }
}`,...(k=(F=s.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var x,T,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Gray',
  args: {
    variant: 'gray',
    children: 'Gray card on Gray I (#CCCABC) background.'
  }
}`,...(w=(T=t.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var B,I,j;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    header: <Typography variant="subheadline3">Portfolio Overview</Typography>,
    children: 'Your portfolio has grown 12.4% this quarter, outperforming the benchmark by 2.1 percentage points.'
  }
}`,...(j=(I=o.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var A,E,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    header: <Typography variant="subheadline3">Action Required</Typography>,
    footer: <div style={{
      display: 'flex',
      gap: 8
    }}>
        <Button variant="primary" size="small">Approve</Button>
        <Button variant="outline" size="small">Decline</Button>
      </div>,
    children: 'Your annual review documents are ready for signature. Please review and approve by 31 March 2025.'
  }
}`,...(G=(E=d.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var H,D,M;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    hoverable: true,
    header: <Typography variant="subheadline3">Interactive Card</Typography>,
    children: 'Hover over this card to see the effect. Suitable for clickable cards in dashboards.'
  }
}`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var q,z,L;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    padding: 'none',
    variant: 'pastel1',
    children: 'No padding'
  }
}`,...(L=(z=c.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var N,V,W;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    padding: 'small',
    variant: 'pastel1',
    children: 'Small padding'
  }
}`,...(W=(V=l.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var Y,O,R;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    padding: 'medium',
    variant: 'pastel1',
    children: 'Medium padding'
  }
}`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var _,U,J;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    padding: 'large',
    variant: 'pastel1',
    children: 'Large padding'
  }
}`,...(J=(U=g.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 16
  }}>
      {(['default', 'pastel1', 'pastel2', 'gray'] as const).map(v => <Card key={v} variant={v} header={<Typography variant="subheadline3">{v}</Typography>}>
          Card with {v} background variant.
        </Card>)}
    </div>
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ta=["Default","Pastel1","Pastel2","GrayVariant","WithHeader","WithHeaderAndFooter","Hoverable","PaddingNone","PaddingSmall","PaddingMedium","PaddingLarge","AllVariants"];export{u as AllVariants,e as Default,t as GrayVariant,i as Hoverable,g as PaddingLarge,p as PaddingMedium,c as PaddingNone,l as PaddingSmall,n as Pastel1,s as Pastel2,o as WithHeader,d as WithHeaderAndFooter,ta as __namedExportsOrder,sa as default};
