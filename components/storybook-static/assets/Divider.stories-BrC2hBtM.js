import{r as te,j as e}from"./iframe-DL6Dh11c.js";import"./preload-helper-C1FmrZbK.js";const ce="_divider_1c0wo_3",le="_horizontal_1c0wo_13",de="_vertical_1c0wo_20",v={divider:ce,horizontal:le,vertical:de},g=te.forwardRef(({orientation:r="horizontal",colour:y,thickness:h,spacing:f,className:re,style:ne,...oe},ae)=>{const ie=[v.divider,v[r],re].filter(Boolean).join(" "),se={...y?{backgroundColor:y}:{},...h!=null?{"--divider-thickness":`${h}px`}:{},...f!=null?{"--divider-spacing":`${f}px`}:{},...ne};return e.jsx("hr",{ref:ae,className:ie,style:se,role:"separator","aria-orientation":r,...oe})});g.displayName="Divider";g.__docgenInfo={description:`Divider — horizontal or vertical separator.

Uses UBS Gray I as the default colour. Renders as a semantic \`<hr>\` element
with appropriate ARIA attributes for vertical orientation.`,methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Direction of the divider. Defaults to `'horizontal'`.",defaultValue:{value:"'horizontal'",computed:!1}},colour:{required:!1,tsType:{name:"string"},description:"Line colour. Defaults to Gray I (#CCCABC)."},thickness:{required:!1,tsType:{name:"number"},description:"Line thickness in pixels. Defaults to `1`."},spacing:{required:!1,tsType:{name:"number"},description:"Spacing (margin) on both sides in pixels. Defaults to `16`."}},composes:["HTMLAttributes"]};const ue={title:"Components/Divider",component:g,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Divider direction"},colour:{control:"color",description:"Line colour (defaults to Gray I #CCCABC)"},thickness:{control:{type:"number",min:1,max:8},description:"Line thickness in pixels"},spacing:{control:{type:"number",min:0,max:64},description:"Margin on both sides in pixels"}},args:{orientation:"horizontal"}},n={args:{orientation:"horizontal"},decorators:[r=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Arial",fontSize:14,color:"#000"},children:"Content above the divider"}),e.jsx(r,{}),e.jsx("p",{style:{fontFamily:"Arial",fontSize:14,color:"#000"},children:"Content below the divider"})]})]},o={args:{orientation:"vertical"},decorators:[r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",height:80},children:[e.jsx("span",{style:{fontFamily:"Arial",fontSize:14},children:"Left"}),e.jsx(r,{}),e.jsx("span",{style:{fontFamily:"Arial",fontSize:14},children:"Right"})]})]},a={name:"Default (Gray I)",args:{orientation:"horizontal"}},i={args:{orientation:"horizontal",colour:"#5A5D5C"}},s={args:{orientation:"horizontal",colour:"#E60000"}},t={args:{orientation:"horizontal",colour:"#000000"}},c={args:{thickness:1}},l={args:{thickness:2}},d={args:{thickness:4}},p={args:{spacing:0},decorators:[r=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Arial",fontSize:14,background:"#ECEBE4",padding:8},children:"Above"}),e.jsx(r,{}),e.jsx("p",{style:{fontFamily:"Arial",fontSize:14,background:"#ECEBE4",padding:8},children:"Below"})]})]},m={args:{spacing:32},decorators:[r=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Arial",fontSize:14,background:"#ECEBE4",padding:8},children:"Above"}),e.jsx(r,{}),e.jsx("p",{style:{fontFamily:"Arial",fontSize:14,background:"#ECEBE4",padding:8},children:"Below"})]})]},u={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[1,2,3,4].map(r=>e.jsxs("div",{children:[e.jsxs("span",{style:{fontFamily:"Arial",fontSize:12,color:"#7A7870"},children:[r,"px"]}),e.jsx(g,{thickness:r,spacing:4})]},r))})};var S,x,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  decorators: [Story => <div>
        <p style={{
      fontFamily: 'Arial',
      fontSize: 14,
      color: '#000'
    }}>Content above the divider</p>
        <Story />
        <p style={{
      fontFamily: 'Arial',
      fontSize: 14,
      color: '#000'
    }}>Content below the divider</p>
      </div>]
}`,...(z=(x=n.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var A,k,E;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  decorators: [Story => <div style={{
    display: 'flex',
    alignItems: 'center',
    height: 80
  }}>
        <span style={{
      fontFamily: 'Arial',
      fontSize: 14
    }}>Left</span>
        <Story />
        <span style={{
      fontFamily: 'Arial',
      fontSize: 14
    }}>Right</span>
      </div>]
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var C,b,j;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Default (Gray I)',
  args: {
    orientation: 'horizontal'
  }
}`,...(j=(b=a.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var D,B,F;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    colour: '#5A5D5C'
  }
}`,...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var _,w,T;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    colour: '#E60000'
  }
}`,...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var G,I,L;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    colour: '#000000'
  }
}`,...(L=(I=t.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var R,N,q;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    thickness: 1
  }
}`,...(q=(N=c.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var M,U,H;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    thickness: 2
  }
}`,...(H=(U=l.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var V,$,O;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    thickness: 4
  }
}`,...(O=($=d.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var J,K,P;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    spacing: 0
  },
  decorators: [Story => <div>
        <p style={{
      fontFamily: 'Arial',
      fontSize: 14,
      background: '#ECEBE4',
      padding: 8
    }}>Above</p>
        <Story />
        <p style={{
      fontFamily: 'Arial',
      fontSize: 14,
      background: '#ECEBE4',
      padding: 8
    }}>Below</p>
      </div>]
}`,...(P=(K=p.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,W,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    spacing: 32
  },
  decorators: [Story => <div>
        <p style={{
      fontFamily: 'Arial',
      fontSize: 14,
      background: '#ECEBE4',
      padding: 8
    }}>Above</p>
        <Story />
        <p style={{
      fontFamily: 'Arial',
      fontSize: 14,
      background: '#ECEBE4',
      padding: 8
    }}>Below</p>
      </div>]
}`,...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {[1, 2, 3, 4].map(t => <div key={t}>
          <span style={{
        fontFamily: 'Arial',
        fontSize: 12,
        color: '#7A7870'
      }}>{t}px</span>
          <Divider thickness={t} spacing={4} />
        </div>)}
    </div>
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ge=["Horizontal","Vertical","DefaultColour","DarkGray","UBSRed","Black","Thin","Medium","Thick","NoSpacing","LargeSpacing","ThicknessGallery"];export{t as Black,i as DarkGray,a as DefaultColour,n as Horizontal,m as LargeSpacing,l as Medium,p as NoSpacing,d as Thick,u as ThicknessGallery,c as Thin,s as UBSRed,o as Vertical,ge as __namedExportsOrder,ue as default};
