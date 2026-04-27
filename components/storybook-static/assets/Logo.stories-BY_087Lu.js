import{r as de,j as e}from"./iframe-DL6Dh11c.js";import"./preload-helper-C1FmrZbK.js";const me="_logo_q7uom_5",ue="_tab_q7uom_12",pe="_tabBackground_q7uom_16",x={logo:me,tab:ue,tabBackground:pe},ge={A0:400,A1:320,A2:240,A3:180,A4:140,A5:110,A6:80,A7:60,A8:48},fe={black:"#000000",white:"#FFFFFF",gray:"#7A7870"},ye=({fill:a})=>e.jsxs("g",{fill:a,children:[e.jsx("path",{d:"M4 2C4 0.9 4.9 0 6 0C7.1 0 8 0.9 8 2C8 2.74 7.6 3.39 7 3.73V8H5V3.73C4.4 3.39 4 2.74 4 2ZM5.5 8.5H6.5V10H5.5V8.5ZM5 10.5H7V12H5V10.5Z"}),e.jsx("path",{d:"M11 2C11 0.9 11.9 0 13 0C14.1 0 15 0.9 15 2C15 2.74 14.6 3.39 14 3.73V8H12V3.73C11.4 3.39 11 2.74 11 2ZM12.5 8.5H13.5V10H12.5V8.5ZM12 10.5H14V12H12V10.5Z"}),e.jsx("path",{d:"M18 2C18 0.9 18.9 0 20 0C21.1 0 22 0.9 22 2C22 2.74 21.6 3.39 21 3.73V8H19V3.73C18.4 3.39 18 2.74 18 2ZM19.5 8.5H20.5V10H19.5V8.5ZM19 10.5H21V12H19V10.5Z"})]}),be=({fill:a,x:r})=>e.jsx("text",{x:r,y:"10",fill:a,fontFamily:"'Frutiger', Arial, sans-serif",fontWeight:"700",fontSize:"14",letterSpacing:"0.1em",dominantBaseline:"central",textAnchor:"start",children:"UBS"}),o=de.forwardRef(({size:a=120,variant:r="full",colour:v="black",tab:A=!1,className:se,...le},te)=>{const w=typeof a=="string"?ge[a.toUpperCase()]??120:a,S=fe[v];let l,s;switch(r){case"symbol":l=26,s=12;break;case"wordmark":l=34,s=20;break;case"full":default:l=60,s=20;break}const t=s/3,h=l+t*2,k=s+t*2,ne=k/h,ie=Math.round(w*ne),ce=[x.logo,A?x.tab:"",se??""].filter(Boolean).join(" ");return e.jsxs("svg",{ref:te,className:ce,width:w,height:ie,viewBox:`0 0 ${h} ${k}`,xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"UBS Logo",...le,children:[A&&e.jsx("rect",{x:"0",y:"0",width:h,height:k,fill:v==="white"?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.85)",className:x.tabBackground}),e.jsxs("g",{transform:`translate(${t}, ${t})`,children:[(r==="full"||r==="symbol")&&e.jsx("g",{transform:r==="full"?`translate(0, ${(s-12)/2})`:void 0,children:e.jsx(ye,{fill:S})}),(r==="full"||r==="wordmark")&&e.jsx(be,{fill:S,x:r==="full"?28:0})]})]})});o.displayName="Logo";o.__docgenInfo={description:`UBS Design System Logo component.

Renders the UBS logo as an SVG following brand guidelines:
- Three keys symbol + "UBS" wordmark (full variant)
- Symbol only or wordmark only variants
- Clear space: minimum 1/3 of the symbol height (k) on all sides
- Available in black, white, or gray
- Optional tab variant for use over photographs

@example
\`\`\`tsx
<Logo variant="full" colour="black" size={120} />
<Logo variant="symbol" colour="white" size="A4" tab />
\`\`\``,methods:[],displayName:"Logo",props:{size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Size of the logo in pixels (width).
Can also accept an ISO format string like 'A4' for proportional sizing.
@default 120`,defaultValue:{value:"120",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'full' | 'symbol' | 'wordmark'",elements:[{name:"literal",value:"'full'"},{name:"literal",value:"'symbol'"},{name:"literal",value:"'wordmark'"}]},description:"Logo variant: full (keys + wordmark), symbol (keys only), wordmark (text only). @default 'full'",defaultValue:{value:"'full'",computed:!1}},colour:{required:!1,tsType:{name:"union",raw:"'black' | 'white' | 'gray'",elements:[{name:"literal",value:"'black'"},{name:"literal",value:"'white'"},{name:"literal",value:"'gray'"}]},description:"Colour scheme. @default 'black'",defaultValue:{value:"'black'",computed:!1}},tab:{required:!1,tsType:{name:"boolean"},description:`Tab variant: adds a semi-transparent background tab for use over images.
@default false`,defaultValue:{value:"false",computed:!1}}}};const xe={title:"Brand/Logo",component:o,tags:["autodocs"],argTypes:{variant:{control:"select",options:["full","symbol","wordmark"],description:"Logo variant: full (keys + wordmark), symbol (keys only), wordmark (text only)"},colour:{control:"select",options:["black","white","gray"],description:"Logo colour scheme"},size:{control:"text",description:"Width in pixels or ISO format string (A0–A8)"},tab:{control:"boolean",description:"Tab variant: adds semi-transparent background for use over images"}},args:{variant:"full",colour:"black",size:120}},n={args:{variant:"full",size:160}},i={args:{variant:"symbol",size:80}},c={args:{variant:"wordmark",size:120}},d={args:{colour:"black",size:160}},m={args:{colour:"white",size:160},parameters:{backgrounds:{default:"Black"}}},u={args:{colour:"gray",size:160}},p={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,alignItems:"flex-start"},children:["A0","A1","A2","A3","A4","A5","A6","A7","A8"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{width:32,fontFamily:"Arial, sans-serif",fontSize:14,color:"#7A7870"},children:a}),e.jsx(o,{variant:"full",colour:"black",size:a})]},a))})},g={args:{variant:"full",colour:"black",tab:!0,size:160}},f={args:{variant:"full",colour:"white",tab:!0,size:160},parameters:{backgrounds:{default:"Black"}}},y={render:()=>e.jsx("div",{style:{width:400,height:250,background:"linear-gradient(135deg, #2E476B 0%, #469A6C 100%)",display:"flex",alignItems:"flex-end",justifyContent:"flex-end",padding:16,borderRadius:4},children:e.jsx(o,{variant:"full",colour:"white",tab:!0,size:140})})},b={render:()=>e.jsxs("div",{style:{display:"flex",gap:32,flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(o,{variant:"full",colour:"black",size:140}),e.jsx("p",{style:{fontFamily:"Arial",fontSize:12,color:"#7A7870",marginTop:8},children:"Full"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(o,{variant:"symbol",colour:"black",size:60}),e.jsx("p",{style:{fontFamily:"Arial",fontSize:12,color:"#7A7870",marginTop:8},children:"Symbol"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(o,{variant:"wordmark",colour:"black",size:100}),e.jsx("p",{style:{fontFamily:"Arial",fontSize:12,color:"#7A7870",marginTop:8},children:"Wordmark"})]})]})};var z,j,B;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'full',
    size: 160
  }
}`,...(B=(j=n.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var V,C,T;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'symbol',
    size: 80
  }
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var F,H,I;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'wordmark',
    size: 120
  }
}`,...(I=(H=c.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var L,W,_;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    colour: 'black',
    size: 160
  }
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var M,O,Z;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    colour: 'white',
    size: 160
  },
  parameters: {
    backgrounds: {
      default: 'Black'
    }
  }
}`,...(Z=(O=m.parameters)==null?void 0:O.docs)==null?void 0:Z.source}}};var U,q,R;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    colour: 'gray',
    size: 160
  }
}`,...(R=(q=u.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var E,$,N;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    alignItems: 'flex-start'
  }}>
      {['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'].map(format => <div key={format} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          <span style={{
        width: 32,
        fontFamily: 'Arial, sans-serif',
        fontSize: 14,
        color: '#7A7870'
      }}>
            {format}
          </span>
          <Logo variant="full" colour="black" size={format} />
        </div>)}
    </div>
}`,...(N=($=p.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var D,G,K;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'full',
    colour: 'black',
    tab: true,
    size: 160
  }
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var P,J,Q;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'full',
    colour: 'white',
    tab: true,
    size: 160
  },
  parameters: {
    backgrounds: {
      default: 'Black'
    }
  }
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,ee;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400,
    height: 250,
    background: 'linear-gradient(135deg, #2E476B 0%, #469A6C 100%)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 16,
    borderRadius: 4
  }}>
      <Logo variant="full" colour="white" tab size={140} />
    </div>
}`,...(ee=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,re,oe;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Logo variant="full" colour="black" size={140} />
        <p style={{
        fontFamily: 'Arial',
        fontSize: 12,
        color: '#7A7870',
        marginTop: 8
      }}>Full</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Logo variant="symbol" colour="black" size={60} />
        <p style={{
        fontFamily: 'Arial',
        fontSize: 12,
        color: '#7A7870',
        marginTop: 8
      }}>Symbol</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Logo variant="wordmark" colour="black" size={100} />
        <p style={{
        fontFamily: 'Arial',
        fontSize: 12,
        color: '#7A7870',
        marginTop: 8
      }}>Wordmark</p>
      </div>
    </div>
}`,...(oe=(re=b.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const ve=["Full","Symbol","Wordmark","Black","White","Gray","ISOSizes","TabBlack","TabWhite","TabOverImage","AllVariants"];export{b as AllVariants,d as Black,n as Full,u as Gray,p as ISOSizes,i as Symbol,g as TabBlack,y as TabOverImage,f as TabWhite,m as White,c as Wordmark,ve as __namedExportsOrder,xe as default};
