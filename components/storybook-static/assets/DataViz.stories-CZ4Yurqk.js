import{r as Ge,j as e}from"./iframe-DL6Dh11c.js";import"./preload-helper-C1FmrZbK.js";const Ue="_container_1jqmp_5",Je="_chart_1jqmp_13",Ye="_donutWrapper_1jqmp_20",Ze="_donutSvg_1jqmp_27",Ke="_donutCenter_1jqmp_33",Xe="_barWrapper_1jqmp_44",et="_barGroup_1jqmp_51",tt="_bar_1jqmp_44",at="_barLabel_1jqmp_63",nt="_barDimmed_1jqmp_74",rt="_lineWrapper_1jqmp_80",ot="_lineSvg_1jqmp_85",it="_insight_1jqmp_92",st="_insightArrow_1jqmp_101",lt="_insightText_1jqmp_114",ct="_legend_1jqmp_122",ht="_legendItem_1jqmp_129",dt="_legendSwatch_1jqmp_137",ut="_axisLabel_1jqmp_146",mt="_gridLine_1jqmp_153",i={container:Ue,chart:Je,donutWrapper:Ye,donutSvg:Ze,donutCenter:Ke,barWrapper:Xe,barGroup:et,bar:tt,barLabel:at,barDimmed:nt,lineWrapper:rt,lineSvg:ot,insight:it,insightArrow:st,insightText:lt,legend:ct,legendItem:ht,legendSwatch:dt,axisLabel:ut,gridLine:mt},O=["#AF8626","#00759E","#879420","#4B2D58","#9F8865","#2E476B","#469A6C","#AD3E4A","#8489BD","#0C7EC6","#654D16","#804C95","#45999C","#4972AC","#CC707A","#295B40","#545A9C","#785E4A","#07476F","#620004"],P=["#8E8D83","#7A7870","#5A5D5C","#404040","#000000"],pt="#2E476B";function gt(t,o,l){const r=l.map(c=>c.colour);switch(t){case"monochrome":return Array.from({length:o},(c,n)=>{if(r[n])return r[n];const m=1-n*.15;return yt(pt,Math.max(.2,m))});case"polychrome":return Array.from({length:o},(c,n)=>r[n]?r[n]:P[n%P.length]);case"multichrome":case"complex":return Array.from({length:o},(c,n)=>r[n]?r[n]:O[n%O.length]);default:return O.slice(0,o)}}function yt(t,o){const l=parseInt(t.slice(1,3),16),r=parseInt(t.slice(3,5),16),c=parseInt(t.slice(5,7),16),n=m=>Math.round(m*o+255*(1-o));return`#${n(l).toString(16).padStart(2,"0")}${n(r).toString(16).padStart(2,"0")}${n(c).toString(16).padStart(2,"0")}`}function xt({data:t,colours:o,highlightIndex:l,width:r,height:c,centerContent:n}){const m=t.reduce((p,y)=>p+y.value,0);if(m===0)return null;const g=Math.min(r,c),h=g/2,x=g/2,s=g*.45,u=g*.28,f=t.length>1?.03:0;let a=0;const d=t.map((p,y)=>{const b=p.value/m,H=b*Math.PI*2-f;if(H<=0)return a+=b*Math.PI*2,null;const j=a+f/2,S=j+H,Ne=h+s*Math.cos(j),Te=x+s*Math.sin(j),Ee=h+s*Math.cos(S),He=x+s*Math.sin(S),Oe=h+u*Math.cos(S),Ve=x+u*Math.sin(S),ke=h+u*Math.cos(j),Re=x+u*Math.sin(j),k=H>Math.PI?1:0,Pe=[`M ${Ne} ${Te}`,`A ${s} ${s} 0 ${k} 1 ${Ee} ${He}`,`L ${Oe} ${Ve}`,`A ${u} ${u} 0 ${k} 0 ${ke} ${Re}`,"Z"].join(" ");a+=b*Math.PI*2;const R=l===y,Qe=l!=null&&l!==y;return e.jsx("path",{d:Pe,fill:o[y],opacity:Qe?.4:1,stroke:R?"#000000":"none",strokeWidth:R?2:0,children:e.jsx("title",{children:`${p.label}: ${p.value}`})},y)});return e.jsxs("div",{className:i.donutWrapper,style:{width:g,height:g},children:[e.jsx("svg",{className:i.donutSvg,viewBox:`0 0 ${g} ${g}`,role:"img","aria-label":"Donut chart",children:d}),n&&e.jsx("div",{className:i.donutCenter,children:n})]})}function vt({data:t,colours:o,highlightIndex:l,width:r,height:c}){const n=Math.max(...t.map(s=>s.value),1),m=t.length,h=(m-1)*2,x=Math.max(1,(r-h)/m);return e.jsx("div",{className:i.barWrapper,style:{width:r,height:c},children:t.map((s,u)=>{const f=s.value/n*c*.85,a=l!=null&&l!==u;return e.jsxs("div",{className:i.barGroup,style:{width:x},children:[e.jsx("div",{className:`${i.bar} ${a?i.barDimmed:""}`,style:{height:f,backgroundColor:o[u],width:"100%"},role:"img","aria-label":`${s.label}: ${s.value}`}),e.jsx("span",{className:i.barLabel,children:s.label})]},u)})})}function ft({data:t,colours:o,highlightIndex:l,width:r,height:c}){if(t.length===0)return null;const n=Math.max(...t.map(a=>a.value),1),m=Math.min(...t.map(a=>a.value),0),g=n-m||1,h={top:10,right:10,bottom:30,left:10},x=r-h.left-h.right,s=c-h.top-h.bottom,u=t.map((a,d)=>{const p=h.left+d/Math.max(t.length-1,1)*x,y=h.top+s-(a.value-m)/g*s;return{x:p,y,...a}}),f=u.map((a,d)=>`${d===0?"M":"L"} ${a.x} ${a.y}`).join(" ");return e.jsx("div",{className:i.lineWrapper,style:{width:r,height:c},children:e.jsxs("svg",{className:i.lineSvg,viewBox:`0 0 ${r} ${c}`,role:"img","aria-label":"Line chart",children:[[0,.25,.5,.75,1].map(a=>{const d=h.top+s*(1-a);return e.jsx("line",{x1:h.left,y1:d,x2:r-h.right,y2:d,className:i.gridLine},a)}),e.jsx("path",{d:f,fill:"none",stroke:o[0],strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round"}),u.map((a,d)=>{const p=l===d,y=l!=null&&l!==d;return e.jsx("circle",{cx:a.x,cy:a.y,r:p?5:3,fill:o[d%o.length],opacity:y?.4:1,stroke:p?"#000000":"#FFFFFF",strokeWidth:p?2:1,children:e.jsx("title",{children:`${a.label}: ${a.value}`})},d)}),u.map((a,d)=>e.jsx("text",{x:a.x,y:c-5,textAnchor:"middle",className:i.axisLabel,fontSize:11,children:a.label},d))]})})}function bt({text:t}){return e.jsxs("div",{className:i.insight,children:[e.jsx("span",{className:i.insightArrow,children:e.jsx("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M8 2L14 8L8 14M14 8H2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("span",{className:i.insightText,children:t})]})}function wt({data:t,colours:o}){return e.jsx("div",{className:i.legend,children:t.map((l,r)=>e.jsxs("div",{className:i.legendItem,children:[e.jsx("span",{className:i.legendSwatch,style:{backgroundColor:o[r]}}),e.jsx("span",{children:l.label})]},r))})}const w=Ge.forwardRef(({type:t="donut",data:o,highlightIndex:l,colourSequence:r="multichrome",region:c="emea",insight:n,width:m,height:g,showLegend:h=!0,centerContent:x,className:s,...u},f)=>{const a=m??300,d=g??(t==="donut"?300:200),p=gt(r,o.length,o),y=[i.container,s].filter(Boolean).join(" "),b={data:o,colours:p,highlightIndex:l,width:a,height:d,centerContent:x};return e.jsxs("div",{ref:f,className:y,"data-chart-type":t,"data-region":c,...u,children:[e.jsxs("div",{className:i.chart,children:[t==="donut"&&e.jsx(xt,{...b}),t==="bar"&&e.jsx(vt,{...b}),t==="line"&&e.jsx(ft,{...b})]}),h&&e.jsx(wt,{data:o,colours:p}),n&&e.jsx(bt,{text:n})]})});w.displayName="DataViz";w.__docgenInfo={description:`DataViz — UBS chart wrapper.

Enforces all UBS data visualisation rules:
- 2D only (no 3D, gradients, or shadows)
- 2px gaps between chart segments
- Donut preferred (no pie chart option)
- Correct colour sequence order
- Regional trading colour support`,methods:[],displayName:"DataViz",props:{type:{required:!1,tsType:{name:"union",raw:"'donut' | 'bar' | 'line'",elements:[{name:"literal",value:"'donut'"},{name:"literal",value:"'bar'"},{name:"literal",value:"'line'"}]},description:"Chart type. Defaults to `'donut'`.",defaultValue:{value:"'donut'",computed:!1}},data:{required:!0,tsType:{name:"Array",elements:[{name:"ChartDataPoint"}],raw:"ChartDataPoint[]"},description:"Chart data points."},highlightIndex:{required:!1,tsType:{name:"number"},description:"Index of a data point to visually highlight."},colourSequence:{required:!1,tsType:{name:"union",raw:"'monochrome' | 'polychrome' | 'multichrome' | 'complex'",elements:[{name:"literal",value:"'monochrome'"},{name:"literal",value:"'polychrome'"},{name:"literal",value:"'multichrome'"},{name:"literal",value:"'complex'"}]},description:"Colour sequence mode. Defaults to `'multichrome'`.",defaultValue:{value:"'multichrome'",computed:!1}},region:{required:!1,tsType:{name:"union",raw:"'emea' | 'apac' | 'us'",elements:[{name:"literal",value:"'emea'"},{name:"literal",value:"'apac'"},{name:"literal",value:"'us'"}]},description:"Region for trading colour direction. Defaults to `'emea'`.",defaultValue:{value:"'emea'",computed:!1}},insight:{required:!1,tsType:{name:"string"},description:"Optional insight text shown with a red arrow."},width:{required:!1,tsType:{name:"number"},description:"Chart width in pixels. Defaults to `300`."},height:{required:!1,tsType:{name:"number"},description:"Chart height in pixels. Defaults to `300` for donut, `200` for bar/line."},showLegend:{required:!1,tsType:{name:"boolean"},description:"Show legend. Defaults to `true`.",defaultValue:{value:"true",computed:!1}},centerContent:{required:!1,tsType:{name:"ReactNode"},description:"Content rendered in the donut centre."}},composes:["HTMLAttributes"]};const v=[{label:"Equities",value:45},{label:"Fixed Income",value:25},{label:"Alternatives",value:15},{label:"Cash",value:10},{label:"Real Estate",value:5}],E=[{label:"Q1",value:82},{label:"Q2",value:96},{label:"Q3",value:110},{label:"Q4",value:105}],V=[{label:"Jan",value:100},{label:"Feb",value:105},{label:"Mar",value:98},{label:"Apr",value:112},{label:"May",value:108},{label:"Jun",value:120}],_t={title:"Data Display/DataViz",component:w,tags:["autodocs"],argTypes:{type:{control:"select",options:["donut","bar","line"],description:"Chart type. No pie chart (UBS prefers donut)."},colourSequence:{control:"select",options:["monochrome","polychrome","multichrome","complex"],description:"Colour sequence mode"},region:{control:"select",options:["emea","apac","us"],description:"Trading region for colour direction"},highlightIndex:{control:{type:"number",min:-1,max:10},description:"Index of data point to highlight"},showLegend:{control:"boolean",description:"Show legend"},insight:{control:"text",description:"Insight text shown with red arrow"},width:{control:{type:"number",min:100,max:800},description:"Chart width in pixels"},height:{control:{type:"number",min:100,max:600},description:"Chart height in pixels"}},args:{type:"donut",colourSequence:"multichrome",showLegend:!0,data:v}},_={args:{type:"donut",data:v,width:300,height:300}},D={args:{type:"donut",data:v,highlightIndex:0,width:300,height:300}},C={args:{type:"donut",data:v,width:300,height:300,centerContent:e.jsxs("div",{style:{textAlign:"center",fontFamily:"Arial, sans-serif"},children:[e.jsx("div",{style:{fontSize:24,fontWeight:700},children:"100%"}),e.jsx("div",{style:{fontSize:12,color:"#7A7870"},children:"Allocated"})]})}},q={args:{type:"bar",data:E,width:400,height:200}},A={args:{type:"bar",data:E,highlightIndex:2,width:400,height:200}},L={args:{type:"bar",data:E,highlightIndex:2,insight:"Q3 showed 15% growth, outpacing the sector average.",width:400,height:200}},M={args:{type:"line",data:V,width:500,height:200}},B={args:{type:"line",data:V,highlightIndex:5,insight:"June reached a 6-month high of 120 basis points.",width:500,height:200}},I={args:{type:"donut",data:v,colourSequence:"monochrome",width:300,height:300}},W={args:{type:"donut",data:v,colourSequence:"polychrome",width:300,height:300}},$={args:{type:"donut",data:v,colourSequence:"multichrome",width:300,height:300}},z={args:{type:"bar",data:[{label:"A",value:45},{label:"B",value:30},{label:"C",value:25},{label:"D",value:55},{label:"E",value:40},{label:"F",value:35},{label:"G",value:50},{label:"H",value:20}],colourSequence:"complex",width:500,height:200}},F={args:{type:"donut",data:v,highlightIndex:0,insight:"Equities allocation increased by 5% following the Q4 rebalancing.",width:300,height:300}},N={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"Arial",fontSize:16,marginBottom:16},children:"Donut Chart"}),e.jsx(w,{type:"donut",data:v,colourSequence:"multichrome",width:280,height:280})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"Arial",fontSize:16,marginBottom:16},children:"Bar Chart"}),e.jsx(w,{type:"bar",data:E,colourSequence:"multichrome",width:400,height:200})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"Arial",fontSize:16,marginBottom:16},children:"Line Chart"}),e.jsx(w,{type:"line",data:V,colourSequence:"multichrome",width:500,height:200})]})]})},T={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:24},children:["monochrome","polychrome","multichrome","complex"].map(t=>e.jsxs("div",{children:[e.jsx("h4",{style:{fontFamily:"Arial",fontSize:14,marginBottom:8,textTransform:"capitalize"},children:t}),e.jsx(w,{type:"donut",data:v,colourSequence:t,width:200,height:200})]},t))})};var Q,G,U;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    type: 'donut',
    data: portfolioData,
    width: 300,
    height: 300
  }
}`,...(U=(G=_.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var J,Y,Z;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    type: 'donut',
    data: portfolioData,
    highlightIndex: 0,
    width: 300,
    height: 300
  }
}`,...(Z=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var K,X,ee;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    type: 'donut',
    data: portfolioData,
    width: 300,
    height: 300,
    centerContent: <div style={{
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
        <div style={{
        fontSize: 24,
        fontWeight: 700
      }}>100%</div>
        <div style={{
        fontSize: 12,
        color: '#7A7870'
      }}>Allocated</div>
      </div>
  }
}`,...(ee=(X=C.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var te,ae,ne;q.parameters={...q.parameters,docs:{...(te=q.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    data: quarterlyData,
    width: 400,
    height: 200
  }
}`,...(ne=(ae=q.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,oe,ie;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    data: quarterlyData,
    highlightIndex: 2,
    width: 400,
    height: 200
  }
}`,...(ie=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var se,le,ce;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    data: quarterlyData,
    highlightIndex: 2,
    insight: 'Q3 showed 15% growth, outpacing the sector average.',
    width: 400,
    height: 200
  }
}`,...(ce=(le=L.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var he,de,ue;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    type: 'line',
    data: monthlyData,
    width: 500,
    height: 200
  }
}`,...(ue=(de=M.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ge;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    type: 'line',
    data: monthlyData,
    highlightIndex: 5,
    insight: 'June reached a 6-month high of 120 basis points.',
    width: 500,
    height: 200
  }
}`,...(ge=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ye,xe,ve;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    type: 'donut',
    data: portfolioData,
    colourSequence: 'monochrome',
    width: 300,
    height: 300
  }
}`,...(ve=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var fe,be,we;W.parameters={...W.parameters,docs:{...(fe=W.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    type: 'donut',
    data: portfolioData,
    colourSequence: 'polychrome',
    width: 300,
    height: 300
  }
}`,...(we=(be=W.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var je,Se,_e;$.parameters={...$.parameters,docs:{...(je=$.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    type: 'donut',
    data: portfolioData,
    colourSequence: 'multichrome',
    width: 300,
    height: 300
  }
}`,...(_e=(Se=$.parameters)==null?void 0:Se.docs)==null?void 0:_e.source}}};var De,Ce,qe;z.parameters={...z.parameters,docs:{...(De=z.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    data: [{
      label: 'A',
      value: 45
    }, {
      label: 'B',
      value: 30
    }, {
      label: 'C',
      value: 25
    }, {
      label: 'D',
      value: 55
    }, {
      label: 'E',
      value: 40
    }, {
      label: 'F',
      value: 35
    }, {
      label: 'G',
      value: 50
    }, {
      label: 'H',
      value: 20
    }],
    colourSequence: 'complex',
    width: 500,
    height: 200
  }
}`,...(qe=(Ce=z.parameters)==null?void 0:Ce.docs)==null?void 0:qe.source}}};var Ae,Le,Me;F.parameters={...F.parameters,docs:{...(Ae=F.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    type: 'donut',
    data: portfolioData,
    highlightIndex: 0,
    insight: 'Equities allocation increased by 5% following the Q4 rebalancing.',
    width: 300,
    height: 300
  }
}`,...(Me=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Be,Ie,We;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <div>
        <h3 style={{
        fontFamily: 'Arial',
        fontSize: 16,
        marginBottom: 16
      }}>Donut Chart</h3>
        <DataViz type="donut" data={portfolioData} colourSequence="multichrome" width={280} height={280} />
      </div>
      <div>
        <h3 style={{
        fontFamily: 'Arial',
        fontSize: 16,
        marginBottom: 16
      }}>Bar Chart</h3>
        <DataViz type="bar" data={quarterlyData} colourSequence="multichrome" width={400} height={200} />
      </div>
      <div>
        <h3 style={{
        fontFamily: 'Arial',
        fontSize: 16,
        marginBottom: 16
      }}>Line Chart</h3>
        <DataViz type="line" data={monthlyData} colourSequence="multichrome" width={500} height={200} />
      </div>
    </div>
}`,...(We=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:We.source}}};var $e,ze,Fe;T.parameters={...T.parameters,docs:{...($e=T.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 24
  }}>
      {(['monochrome', 'polychrome', 'multichrome', 'complex'] as const).map(seq => <div key={seq}>
          <h4 style={{
        fontFamily: 'Arial',
        fontSize: 14,
        marginBottom: 8,
        textTransform: 'capitalize'
      }}>
            {seq}
          </h4>
          <DataViz type="donut" data={portfolioData} colourSequence={seq} width={200} height={200} />
        </div>)}
    </div>
}`,...(Fe=(ze=T.parameters)==null?void 0:ze.docs)==null?void 0:Fe.source}}};const Dt=["Donut","DonutWithHighlight","DonutWithCenterContent","Bar","BarWithHighlight","BarWithInsight","Line","LineWithHighlight","Monochrome","Polychrome","Multichrome","Complex","WithInsight","AllChartTypes","ColourSequenceComparison"];export{N as AllChartTypes,q as Bar,A as BarWithHighlight,L as BarWithInsight,T as ColourSequenceComparison,z as Complex,_ as Donut,C as DonutWithCenterContent,D as DonutWithHighlight,M as Line,B as LineWithHighlight,I as Monochrome,$ as Multichrome,W as Polychrome,F as WithInsight,Dt as __namedExportsOrder,_t as default};
