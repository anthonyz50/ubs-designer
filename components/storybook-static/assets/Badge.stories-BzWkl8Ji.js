import{r as le,j as e}from"./iframe-DL6Dh11c.js";import"./preload-helper-C1FmrZbK.js";const ce="_badge_1kkst_3",ue="_sm_1kkst_17",me="_md_1kkst_23",pe="_red_1kkst_36",ge="_success_1kkst_41",fe="_warning_1kkst_46",ve="_dot_1kkst_53",r={badge:ce,sm:ue,md:me,default:"_default_1kkst_31",red:pe,success:ge,warning:fe,dot:ve},a=le.forwardRef(({variant:s="default",size:re="md",dot:y=!1,children:ne,className:te,...ie},oe)=>{const de=[r.badge,r[s],r[re],y?r.dot:void 0,te].filter(Boolean).join(" ");return e.jsx("span",{ref:oe,className:de,role:"status",...ie,children:y?null:ne})});a.displayName="Badge";a.__docgenInfo={description:`Badge — small status/label indicator.

Adheres to UBS brand colour tokens and WCAG 2.2 AA contrast requirements.`,methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'red' | 'success' | 'warning'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'red'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"Colour variant. Defaults to `'default'` (gray).",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"Size of the badge. Defaults to `'md'`.",defaultValue:{value:"'md'",computed:!1}},dot:{required:!1,tsType:{name:"boolean"},description:"When true renders a dot-only indicator with no text.",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Badge label content. Ignored when `dot` is true."}},composes:["HTMLAttributes"]};const he={title:"Data Display/Badge",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","red","success","warning"],description:"Colour variant mapped to UBS colour tokens"},size:{control:"select",options:["sm","md"],description:"Badge size"},dot:{control:"boolean",description:"Dot-only indicator with no text"}},args:{variant:"default",size:"md",children:"Badge"}},n={args:{variant:"default",children:"Default"}},t={args:{variant:"red",children:"Urgent"}},i={args:{variant:"success",children:"Active"}},o={args:{variant:"warning",children:"Pending"}},d={args:{size:"sm",children:"Small"}},l={name:"Medium",args:{size:"md",children:"Medium"}},c={args:{dot:!0,variant:"default"}},u={args:{dot:!0,variant:"red"}},m={args:{dot:!0,variant:"success"}},p={args:{dot:!0,variant:"warning"}},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"red",children:"Urgent"}),e.jsx(a,{variant:"success",children:"Active"}),e.jsx(a,{variant:"warning",children:"Pending"})]})},f={render:()=>e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["default","red","success","warning"].map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx(a,{variant:s,dot:!0}),e.jsx("span",{style:{fontFamily:"Arial",fontSize:14,color:"#404040"},children:s})]},s))})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{fontFamily:"Arial",fontSize:14},children:"Portfolio Status"}),e.jsx(a,{variant:"success",children:"Active"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{fontFamily:"Arial",fontSize:14},children:"Notifications"}),e.jsx(a,{variant:"red",children:"3"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{fontFamily:"Arial",fontSize:14},children:"KYC Review"}),e.jsx(a,{variant:"warning",children:"Due"})]})]})};var x,h,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: 'Default'
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var _,D,w;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'red',
    children: 'Urgent'
  }
}`,...(w=(D=t.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,j,A;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Active'
  }
}`,...(A=(j=i.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var k,z,I;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Pending'
  }
}`,...(I=(z=o.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var b,R,F;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small'
  }
}`,...(F=(R=d.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var W,C,M;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Medium',
  args: {
    size: 'md',
    children: 'Medium'
  }
}`,...(M=(C=l.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var N,P,T;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    dot: true,
    variant: 'default'
  }
}`,...(T=(P=c.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var U,q,V;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    dot: true,
    variant: 'red'
  }
}`,...(V=(q=u.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var E,K,Y;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    dot: true,
    variant: 'success'
  }
}`,...(Y=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var G,H,L;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    dot: true,
    variant: 'warning'
  }
}`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var O,J,Q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="red">Urgent</Badge>
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
    </div>
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      {(['default', 'red', 'success', 'warning'] as const).map(v => <div key={v} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }}>
          <Badge variant={v} dot />
          <span style={{
        fontFamily: 'Arial',
        fontSize: 14,
        color: '#404040'
      }}>{v}</span>
        </div>)}
    </div>
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,se;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
        <span style={{
        fontFamily: 'Arial',
        fontSize: 14
      }}>Portfolio Status</span>
        <Badge variant="success">Active</Badge>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
        <span style={{
        fontFamily: 'Arial',
        fontSize: 14
      }}>Notifications</span>
        <Badge variant="red">3</Badge>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
        <span style={{
        fontFamily: 'Arial',
        fontSize: 14
      }}>KYC Review</span>
        <Badge variant="warning">Due</Badge>
      </div>
    </div>
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const Se=["Default","Red","Success","Warning","Small","MediumSize","DotDefault","DotRed","DotSuccess","DotWarning","AllVariants","AllDots","InContext"];export{f as AllDots,g as AllVariants,n as Default,c as DotDefault,u as DotRed,m as DotSuccess,p as DotWarning,v as InContext,l as MediumSize,t as Red,d as Small,i as Success,o as Warning,Se as __namedExportsOrder,he as default};
