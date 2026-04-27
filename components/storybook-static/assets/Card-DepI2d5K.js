import{r as v,j as a}from"./iframe-DL6Dh11c.js";const h="_card_1mi5m_4",y="_pastel1_1mi5m_23",b="_pastel2_1mi5m_29",C="_gray_1mi5m_35",N="_padding-none_1mi5m_43",R="_padding-small_1mi5m_47",x="_header_1mi5m_47",w="_body_1mi5m_48",B="_footer_1mi5m_49",F="_padding-medium_1mi5m_53",j="_padding-large_1mi5m_59",I="_interactive_1mi5m_93",T="_hoverable_1mi5m_103",e={card:h,default:"_default_1mi5m_17",pastel1:y,pastel2:b,gray:C,"padding-none":"_padding-none_1mi5m_43",paddingNone:N,"padding-small":"_padding-small_1mi5m_47",paddingSmall:R,header:x,body:w,footer:B,"padding-medium":"_padding-medium_1mi5m_53",paddingMedium:F,"padding-large":"_padding-large_1mi5m_59",paddingLarge:j,interactive:I,hoverable:T},l=v.forwardRef(({variant:o="default",padding:s="medium",hoverable:d=!1,header:t,footer:i,children:m,className:c,onClick:r,role:p,tabIndex:u,..._},g)=>{const n=d||!!r,f=[e.card,e[o],e[`padding-${s}`],d?e.hoverable:"",n?e.interactive:"",c??""].filter(Boolean).join(" ");return a.jsxs("div",{ref:g,className:f,onClick:r,role:p??(n?"button":void 0),tabIndex:u??(n?0:void 0),..._,children:[t&&a.jsx("div",{className:e.header,children:t}),a.jsx("div",{className:e.body,children:m}),i&&a.jsx("div",{className:e.footer,children:i})]})});l.displayName="Card";l.__docgenInfo={description:`UBS Design System Card component.

A container component following UBS brand guidelines:
- Default: white background (#FFFFFF)
- Pastel I: #ECEBE4 background
- Pastel II: #F5F0E1 background
- Gray: Gray I (#CCCABC) background
- No box shadows (clean, flat design per UBS brand)
- Optional header, body, and footer slots
- Hoverable state for interactive cards

@example
\`\`\`tsx
<Card variant="default" padding="medium" hoverable>
  <p>Card content here</p>
</Card>

<Card
  variant="pastel1"
  header={<h3>Title</h3>}
  footer={<Button variant="primary">Action</Button>}
>
  <p>Card body</p>
</Card>
\`\`\``,methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'pastel1' | 'pastel2' | 'gray'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pastel1'"},{name:"literal",value:"'pastel2'"},{name:"literal",value:"'gray'"}]},description:"Background variant. @default 'default'",defaultValue:{value:"'default'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Padding size. @default 'medium'",defaultValue:{value:"'medium'",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether the card shows a hover effect. @default false",defaultValue:{value:"false",computed:!1}},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional header slot content."},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional footer slot content."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Card body content."}}};export{l as C};
