import{r as he,j as e}from"./iframe-DL6Dh11c.js";import"./preload-helper-C1FmrZbK.js";const Ae="_indicator_1cspq_3",we="_sm_1cspq_15",je="_arrow_1cspq_19",Se="_md_1cspq_24",Pe="_lg_1cspq_33",Ee="_positive_1cspq_44",Te="_negative_1cspq_48",_e="_neutral_1cspq_52",be="_arrowDown_1cspq_71",t={indicator:Ae,sm:we,arrow:je,md:Se,lg:Pe,positive:Ee,negative:Te,neutral:_e,arrowDown:be},w="#498100",j="#C81219";function ze(r){return r==="apac"?{positive:j,negative:w}:{positive:w,negative:j}}const Ce=()=>e.jsx("svg",{viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M6 1.5L10.5 8.5H1.5L6 1.5Z"})}),a=he.forwardRef(({value:r,region:ne="emea",size:oe="md",decimals:ie=2,showArrow:le=!0,showSign:de=!0,asPercentage:h=!1,className:ce,style:pe,...ge},ue)=>{const n=ze(ne),o=r>0,s=r<0,me=r===0,xe=o?"positive":s?"negative":"neutral";o?n.positive:s&&n.negative;const A=Math.abs(r).toFixed(ie),ve=`${o&&de?"+":s?"−":""}${A}${h?"%":""}`,ye=[t.indicator,t[oe],t[xe],ce].filter(Boolean).join(" "),fe={"--trading-positive":n.positive,"--trading-negative":n.negative,...pe};return e.jsxs("span",{ref:ue,className:ye,style:fe,"aria-label":`${o?"positive":s?"negative":"neutral"} ${A}${h?" percent":""}`,...ge,children:[le&&!me&&e.jsx("span",{className:`${t.arrow} ${s?t.arrowDown:""}`,children:e.jsx(Ce,{})}),e.jsx("span",{children:ve})]})});a.displayName="TradingIndicator";a.__docgenInfo={description:`TradingIndicator — displays a value with directional colour coding.

Strictly follows UBS regional trading colour rules:
- EMEA/US: green (#498100) positive, red (#C81219) negative
- APAC: red (#C81219) positive, green (#498100) negative (REVERSED)`,methods:[],displayName:"TradingIndicator",props:{value:{required:!0,tsType:{name:"number"},description:"Numeric value to display. Sign determines colour direction."},region:{required:!1,tsType:{name:"union",raw:"'emea' | 'us' | 'apac'",elements:[{name:"literal",value:"'emea'"},{name:"literal",value:"'us'"},{name:"literal",value:"'apac'"}]},description:"Region determines colour mapping. APAC reverses green/red. Defaults to `'emea'`.",defaultValue:{value:"'emea'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Display size. Defaults to `'md'`.",defaultValue:{value:"'md'",computed:!1}},decimals:{required:!1,tsType:{name:"number"},description:"Number of decimal places. Defaults to `2`.",defaultValue:{value:"2",computed:!1}},showArrow:{required:!1,tsType:{name:"boolean"},description:"Whether to show the arrow indicator. Defaults to `true`.",defaultValue:{value:"true",computed:!1}},showSign:{required:!1,tsType:{name:"boolean"},description:"Whether to show a + prefix for positive values. Defaults to `true`.",defaultValue:{value:"true",computed:!1}},asPercentage:{required:!1,tsType:{name:"boolean"},description:"Whether to show as percentage. Defaults to `false`.",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const qe={title:"Data Display/TradingIndicator",component:a,tags:["autodocs"],argTypes:{value:{control:{type:"number",step:.01},description:"Numeric value. Sign determines colour direction."},region:{control:"select",options:["emea","us","apac"],description:"Region determines colour mapping. APAC reverses green/red."},size:{control:"select",options:["sm","md","lg"],description:"Display size"},decimals:{control:{type:"number",min:0,max:6},description:"Number of decimal places"},showArrow:{control:"boolean",description:"Show directional arrow"},showSign:{control:"boolean",description:"Show + prefix for positive values"},asPercentage:{control:"boolean",description:"Show as percentage"}},args:{value:1.25,region:"emea",size:"md",decimals:2,showArrow:!0,showSign:!0,asPercentage:!1}},i={args:{value:2.34}},l={args:{value:-1.56}},d={args:{value:0}},c={args:{value:3.72,asPercentage:!0}},p={args:{value:-.45,asPercentage:!0}},g={args:{value:1.25,size:"sm"}},u={name:"Medium",args:{value:1.25,size:"md"}},m={args:{value:1.25,size:"lg"}},x={name:"EMEA vs APAC Regional Reversal",render:()=>e.jsxs("div",{style:{fontFamily:"Arial, sans-serif",fontSize:14},children:[e.jsxs("p",{style:{marginBottom:16,color:"#404040"},children:[e.jsx("strong",{children:"UBS mandatory rule:"})," In APAC markets, red = positive and green = negative (the opposite of EMEA/US)."]}),e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #CCCABC"},children:[e.jsx("th",{style:{textAlign:"left",padding:"8px 16px"},children:"Value"}),e.jsx("th",{style:{textAlign:"left",padding:"8px 16px"},children:"EMEA"}),e.jsx("th",{style:{textAlign:"left",padding:"8px 16px"},children:"APAC"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #ECEBE4"},children:[e.jsx("td",{style:{padding:"8px 16px"},children:"+2.34%"}),e.jsx("td",{style:{padding:"8px 16px"},children:e.jsx(a,{value:2.34,region:"emea",asPercentage:!0})}),e.jsx("td",{style:{padding:"8px 16px"},children:e.jsx(a,{value:2.34,region:"apac",asPercentage:!0})})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #ECEBE4"},children:[e.jsx("td",{style:{padding:"8px 16px"},children:"-1.56%"}),e.jsx("td",{style:{padding:"8px 16px"},children:e.jsx(a,{value:-1.56,region:"emea",asPercentage:!0})}),e.jsx("td",{style:{padding:"8px 16px"},children:e.jsx(a,{value:-1.56,region:"apac",asPercentage:!0})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px 16px"},children:"0.00%"}),e.jsx("td",{style:{padding:"8px 16px"},children:e.jsx(a,{value:0,region:"emea",asPercentage:!0})}),e.jsx("td",{style:{padding:"8px 16px"},children:e.jsx(a,{value:0,region:"apac",asPercentage:!0})})]})]})]})]})},v={args:{value:1.25,showArrow:!1}},y={args:{value:1.25,showSign:!1}},f={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{value:1.25,size:"sm",asPercentage:!0}),e.jsx("p",{style:{fontFamily:"Arial",fontSize:11,color:"#7A7870",marginTop:4},children:"sm"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{value:1.25,size:"md",asPercentage:!0}),e.jsx("p",{style:{fontFamily:"Arial",fontSize:11,color:"#7A7870",marginTop:4},children:"md"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{value:1.25,size:"lg",asPercentage:!0}),e.jsx("p",{style:{fontFamily:"Arial",fontSize:11,color:"#7A7870",marginTop:4},children:"lg"})]})]})};var S,P,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 2.34
  }
}`,...(E=(P=i.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var T,_,b;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: -1.56
  }
}`,...(b=(_=l.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var z,C,N;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...(N=(C=d.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var I,B,D;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: 3.72,
    asPercentage: true
  }
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var q,M,R;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    value: -0.45,
    asPercentage: true
  }
}`,...(R=(M=p.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var V,F,$;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 1.25,
    size: 'sm'
  }
}`,...($=(F=g.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var U,L,G;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Medium',
  args: {
    value: 1.25,
    size: 'md'
  }
}`,...(G=(L=u.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var W,k,H;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: 1.25,
    size: 'lg'
  }
}`,...(H=(k=m.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var O,Z,J;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'EMEA vs APAC Regional Reversal',
  render: () => <div style={{
    fontFamily: 'Arial, sans-serif',
    fontSize: 14
  }}>
      <p style={{
      marginBottom: 16,
      color: '#404040'
    }}>
        <strong>UBS mandatory rule:</strong> In APAC markets, red = positive and green = negative (the opposite of EMEA/US).
      </p>
      <table style={{
      borderCollapse: 'collapse',
      width: '100%'
    }}>
        <thead>
          <tr style={{
          borderBottom: '2px solid #CCCABC'
        }}>
            <th style={{
            textAlign: 'left',
            padding: '8px 16px'
          }}>Value</th>
            <th style={{
            textAlign: 'left',
            padding: '8px 16px'
          }}>EMEA</th>
            <th style={{
            textAlign: 'left',
            padding: '8px 16px'
          }}>APAC</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{
          borderBottom: '1px solid #ECEBE4'
        }}>
            <td style={{
            padding: '8px 16px'
          }}>+2.34%</td>
            <td style={{
            padding: '8px 16px'
          }}>
              <TradingIndicator value={2.34} region="emea" asPercentage />
            </td>
            <td style={{
            padding: '8px 16px'
          }}>
              <TradingIndicator value={2.34} region="apac" asPercentage />
            </td>
          </tr>
          <tr style={{
          borderBottom: '1px solid #ECEBE4'
        }}>
            <td style={{
            padding: '8px 16px'
          }}>-1.56%</td>
            <td style={{
            padding: '8px 16px'
          }}>
              <TradingIndicator value={-1.56} region="emea" asPercentage />
            </td>
            <td style={{
            padding: '8px 16px'
          }}>
              <TradingIndicator value={-1.56} region="apac" asPercentage />
            </td>
          </tr>
          <tr>
            <td style={{
            padding: '8px 16px'
          }}>0.00%</td>
            <td style={{
            padding: '8px 16px'
          }}>
              <TradingIndicator value={0} region="emea" asPercentage />
            </td>
            <td style={{
            padding: '8px 16px'
          }}>
              <TradingIndicator value={0} region="apac" asPercentage />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
}`,...(J=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    value: 1.25,
    showArrow: false
  }
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,ae;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    value: 1.25,
    showSign: false
  }
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <TradingIndicator value={1.25} size="sm" asPercentage />
        <p style={{
        fontFamily: 'Arial',
        fontSize: 11,
        color: '#7A7870',
        marginTop: 4
      }}>sm</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <TradingIndicator value={1.25} size="md" asPercentage />
        <p style={{
        fontFamily: 'Arial',
        fontSize: 11,
        color: '#7A7870',
        marginTop: 4
      }}>md</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <TradingIndicator value={1.25} size="lg" asPercentage />
        <p style={{
        fontFamily: 'Arial',
        fontSize: 11,
        color: '#7A7870',
        marginTop: 4
      }}>lg</p>
      </div>
    </div>
}`,...(te=(se=f.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};const Me=["Positive","Negative","Neutral","PositivePercentage","NegativePercentage","Small","MediumSize","Large","EMEAvsAPAC","NoArrow","NoSign","AllSizes"];export{f as AllSizes,x as EMEAvsAPAC,m as Large,u as MediumSize,l as Negative,p as NegativePercentage,d as Neutral,v as NoArrow,y as NoSign,i as Positive,c as PositivePercentage,g as Small,Me as __namedExportsOrder,qe as default};
