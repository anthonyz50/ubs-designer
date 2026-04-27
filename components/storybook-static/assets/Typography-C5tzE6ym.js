import{r as i,R as v}from"./iframe-DL6Dh11c.js";const b="_typography_7my68_7",_="_keyline_7my68_20",T="_infoline_7my68_29",g="_subheadline1_7my68_36",x="_subheadline2_7my68_42",N="_subheadline3_7my68_48",q="_subheadline4_7my68_54",I="_leadText1_7my68_61",k="_leadText2_7my68_67",w="_quotes_7my68_74",C="_subtitles_7my68_82",S="_copyText_7my68_91",R="_pageNumbers_7my68_99",B="_senderInfo_7my68_106",E="_smallCopyText_7my68_113",U="_environmentalInfo_7my68_121",A="_captions_7my68_130",W="_footnote_7my68_139",s={typography:b,keyline:_,infoline:T,subheadline1:g,subheadline2:x,subheadline3:N,subheadline4:q,leadText1:I,leadText2:k,quotes:w,subtitles:C,copyText:S,pageNumbers:R,senderInfo:B,smallCopyText:E,environmentalInfo:U,captions:A,footnote:W},F={keyline:"h1",infoline:"p",subheadline1:"h2",subheadline2:"h3",subheadline3:"h4",subheadline4:"h5",leadText1:"p",leadText2:"p",quotes:"blockquote",subtitles:"h6",copyText:"p",pageNumbers:"span",senderInfo:"span",smallCopyText:"p",environmentalInfo:"small",captions:"figcaption",footnote:"small"};function O(e){if(e!==void 0)return e==="light"?300:e==="roman"?400:e==="bold"?700:e}function r(e){return typeof e=="number"?!0:typeof e=="string"?/\d/.test(e):Array.isArray(e)?e.some(r):!1}function j(e){if(!e)return!1;const n=e.toLowerCase().replace(/\s/g,"");return n==="#e60000"||n==="#d83b31"||n==="#fe6f5d"||n==="red"||n==="#bd000c"}const u=i.forwardRef(({variant:e="copyText",as:n,colour:a,weight:m,children:t,className:p,style:d,...y},c)=>{i.useEffect(()=>{typeof window<"u"&&j(a)&&r(t)&&console.warn(`[UBS Typography] Red must NOT be used for numbers. This violates UBS brand guidelines. Variant: "${e}", colour: "${a}".`)},[a,t,e]);const h=n??F[e],l=O(m),f=[s.typography,s[e],p??""].filter(Boolean).join(" "),o={...d,...a?{color:a}:{},...l?{fontWeight:l}:{}};return v.createElement(h,{ref:c,className:f,style:Object.keys(o).length>0?o:void 0,...y},t)});u.displayName="Typography";u.__docgenInfo={description:`UBS Design System Typography component.

Implements the complete UBS 16-level type hierarchy with brand enforcement:
- Font: Frutiger (fallback Arial)
- Weights: light (300), roman (400), bold (700)
- Red is never applied to numbers (dev warning)
- No text shadows, no justified or right-aligned text
- WCAG 2.2 AA contrast compliant

@example
\`\`\`tsx
<Typography variant="keyline">Welcome to UBS</Typography>
<Typography variant="copyText" weight="bold">Important notice</Typography>
<Typography variant="quotes" as="p" colour="#404040">
  "Excellence in everything we do."
</Typography>
\`\`\``,methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'keyline'
| 'infoline'
| 'subheadline1'
| 'subheadline2'
| 'subheadline3'
| 'subheadline4'
| 'leadText1'
| 'leadText2'
| 'quotes'
| 'subtitles'
| 'copyText'
| 'pageNumbers'
| 'senderInfo'
| 'smallCopyText'
| 'environmentalInfo'
| 'captions'
| 'footnote'`,elements:[{name:"literal",value:"'keyline'"},{name:"literal",value:"'infoline'"},{name:"literal",value:"'subheadline1'"},{name:"literal",value:"'subheadline2'"},{name:"literal",value:"'subheadline3'"},{name:"literal",value:"'subheadline4'"},{name:"literal",value:"'leadText1'"},{name:"literal",value:"'leadText2'"},{name:"literal",value:"'quotes'"},{name:"literal",value:"'subtitles'"},{name:"literal",value:"'copyText'"},{name:"literal",value:"'pageNumbers'"},{name:"literal",value:"'senderInfo'"},{name:"literal",value:"'smallCopyText'"},{name:"literal",value:"'environmentalInfo'"},{name:"literal",value:"'captions'"},{name:"literal",value:"'footnote'"}]},description:"Typography variant from the UBS type hierarchy. @default 'copyText'",defaultValue:{value:"'copyText'",computed:!1}},as:{required:!1,tsType:{name:"union",raw:`| 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
| 'p' | 'span' | 'div' | 'label' | 'figcaption' | 'blockquote' | 'cite'
| 'small' | 'strong' | 'em'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'p'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"},{name:"literal",value:"'label'"},{name:"literal",value:"'figcaption'"},{name:"literal",value:"'blockquote'"},{name:"literal",value:"'cite'"},{name:"literal",value:"'small'"},{name:"literal",value:"'strong'"},{name:"literal",value:"'em'"}]},description:"Polymorphic element to render as. Defaults based on variant."},colour:{required:!1,tsType:{name:"string"},description:"Text colour. Must be a valid CSS colour value. UBS Red must NOT be used for numbers."},weight:{required:!1,tsType:{name:"union",raw:"300 | 400 | 700 | 'light' | 'roman' | 'bold'",elements:[{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"700"},{name:"literal",value:"'light'"},{name:"literal",value:"'roman'"},{name:"literal",value:"'bold'"}]},description:"Font weight: 300 (light), 400 (roman), 700 (bold). Overrides the variant default."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content."}}};export{u as T};
