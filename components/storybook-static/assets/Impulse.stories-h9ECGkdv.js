import{r as G,j as e}from"./iframe-DL6Dh11c.js";import{T as a}from"./Typography-C5tzE6ym.js";import"./preload-helper-C1FmrZbK.js";const C="_impulse_udj4a_6",K="_line_udj4a_12",V="_content_udj4a_30",d={impulse:C,line:K,content:V},$={A0:8,A1:7,A2:6,A3:5,A4:4,A5:3,A6:3,A7:2,A8:2},H={A0:24,A1:20,A2:18,A3:16,A4:14,A5:12,A6:10,A7:8,A8:6},m=G.forwardRef(({format:t="A4",children:r,className:b,style:D,...E},M)=>{const U=$[t],q=H[t],L={"--impulse-line-width":`${U}px`,"--impulse-spacing":`${q}px`,...D},Q=[d.impulse,b??""].filter(Boolean).join(" ");return e.jsxs("div",{ref:M,className:Q,style:L,...E,children:[e.jsx("span",{className:d.line,"aria-hidden":"true"}),e.jsx("div",{className:d.content,children:r})]})});m.displayName="Impulse";m.__docgenInfo={description:`UBS Design System Impulse component.

The distinctive UBS red vertical line placed next to text to create
visual emphasis and brand recognition.

Brand rules enforced:
- Always uses UBS Red (#E60000)
- Line must not extend beyond the baseline of the second line of text
- Must not be centred with a keyline
- Width and spacing are proportional to the ISO format

@example
\`\`\`tsx
<Impulse format="A4">
  <Typography variant="leadText1">
    Breaking through complexity to deliver clarity.
  </Typography>
</Impulse>
\`\`\``,methods:[],displayName:"Impulse",props:{format:{required:!1,tsType:{name:"union",raw:"'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8'",elements:[{name:"literal",value:"'A0'"},{name:"literal",value:"'A1'"},{name:"literal",value:"'A2'"},{name:"literal",value:"'A3'"},{name:"literal",value:"'A4'"},{name:"literal",value:"'A5'"},{name:"literal",value:"'A6'"},{name:"literal",value:"'A7'"},{name:"literal",value:"'A8'"}]},description:`ISO format to determine line width and spacing.
Larger formats produce a thicker impulse line.
@default 'A4'`,defaultValue:{value:"'A4'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content displayed next to the impulse line."}}};const X={title:"Layout/Impulse",component:m,tags:["autodocs"],argTypes:{format:{control:"select",options:["A0","A1","A2","A3","A4","A5","A6","A7","A8"],description:"ISO format determines line width and spacing"}},args:{format:"A4"}},s={args:{children:e.jsx(a,{variant:"leadText1",children:"Breaking through complexity to deliver clarity."})}},n={args:{format:"A0",children:e.jsx(a,{variant:"keyline",children:"A0 — largest impulse line"})}},o={args:{format:"A4",children:e.jsx(a,{variant:"leadText1",children:"A4 — standard document format"})}},i={args:{format:"A8",children:e.jsx(a,{variant:"copyText",children:"A8 — smallest impulse line"})}},l={render:()=>{const t=["A0","A1","A2","A3","A4","A5","A6","A7","A8"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:t.map(r=>e.jsxs("div",{children:[e.jsxs(a,{variant:"captions",colour:"#7A7870",style:{marginBottom:4},children:["Format ",r]}),e.jsx(m,{format:r,children:e.jsx(a,{variant:"leadText2",children:"The UBS impulse line scales with the ISO format."})})]},r))})}},c={args:{format:"A3",children:e.jsxs("div",{children:[e.jsx(a,{variant:"keyline",children:"Global Outlook"}),e.jsx(a,{variant:"infoline",children:"Wealth Management Insights, Q1 2025"})]})}},p={args:{format:"A4",children:e.jsx(a,{variant:"quotes",children:'"In a world of uncertainty, the value of trusted advice has never been greater."'})}};var u,A,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <Typography variant="leadText1">
        Breaking through complexity to deliver clarity.
      </Typography>
  }
}`,...(h=(A=s.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var y,g,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    format: 'A0',
    children: <Typography variant="keyline">A0 — largest impulse line</Typography>
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,x,T;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    format: 'A4',
    children: <Typography variant="leadText1">A4 — standard document format</Typography>
  }
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var I,j,S;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    format: 'A8',
    children: <Typography variant="copyText">A8 — smallest impulse line</Typography>
  }
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var _,F,k;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const formats: ImpulseFormat[] = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        {formats.map(f => <div key={f}>
            <Typography variant="captions" colour="#7A7870" style={{
          marginBottom: 4
        }}>
              Format {f}
            </Typography>
            <Impulse format={f}>
              <Typography variant="leadText2">
                The UBS impulse line scales with the ISO format.
              </Typography>
            </Impulse>
          </div>)}
      </div>;
  }
}`,...(k=(F=l.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var w,B,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    format: 'A3',
    children: <div>
        <Typography variant="keyline">Global Outlook</Typography>
        <Typography variant="infoline">Wealth Management Insights, Q1 2025</Typography>
      </div>
  }
}`,...(N=(B=c.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var O,R,W;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    format: 'A4',
    children: <Typography variant="quotes">
        "In a world of uncertainty, the value of trusted advice has never been greater."
      </Typography>
  }
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const Y=["Default","FormatA0","FormatA4","FormatA8","AllFormats","WithKeyline","WithQuote"];export{l as AllFormats,s as Default,n as FormatA0,o as FormatA4,i as FormatA8,c as WithKeyline,p as WithQuote,Y as __namedExportsOrder,X as default};
