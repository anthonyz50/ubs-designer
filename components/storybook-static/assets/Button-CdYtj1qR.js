import{r as h,j as n}from"./iframe-DL6Dh11c.js";const y="_button_1nqd0_3",b="_small_1nqd0_34",q="_medium_1nqd0_40",v="_large_1nqd0_46",g="_primary_1nqd0_55",x="_secondary_1nqd0_72",w="_outline_1nqd0_89",B="_ghost_1nqd0_107",N="_fullWidth_1nqd0_128",R="_loading_1nqd0_134",k="_spinner_1nqd0_139",j="_spinnerIcon_1nqd0_145",S="_spin_1nqd0_139",W="_icon_1nqd0_162",V="_label_1nqd0_169",e={button:y,small:b,medium:q,large:v,primary:g,secondary:x,outline:w,ghost:B,fullWidth:N,loading:R,spinner:k,spinnerIcon:j,spin:S,icon:W,label:V},i=h.forwardRef(({variant:o="primary",size:r="medium",loading:a=!1,fullWidth:d=!1,disabled:u=!1,icon:t,children:s,className:c,type:m="button",...p},f)=>{const l=u||a,_=[e.button,e[o],e[r],d?e.fullWidth:"",a?e.loading:"",c??""].filter(Boolean).join(" ");return n.jsxs("button",{ref:f,type:m,className:_,disabled:l,"aria-disabled":l,"aria-busy":a,...p,children:[a&&n.jsx("span",{className:e.spinner,"aria-hidden":"true",children:n.jsx("svg",{className:e.spinnerIcon,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"50.265",strokeDashoffset:"25.133"})})}),t&&!a&&n.jsx("span",{className:e.icon,children:t}),s&&n.jsx("span",{className:e.label,children:s})]})});i.displayName="Button";i.__docgenInfo={description:`UBS Design System Button component.

Implements all UBS brand rules:
- Primary variant uses UBS Red (#E60000) with white text
- Secondary variant uses UBS Black with white text
- WCAG 2.2 AA compliant contrast ratios (4.5:1 minimum)
- Uses Frutiger font family (fallback Arial)
- No text shadows

@example
\`\`\`tsx
<Button variant="primary" size="medium" onClick={handleClick}>
  Submit
</Button>

<Button variant="outline" loading>
  Processing...
</Button>
\`\`\``,methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"Visual variant of the button. @default 'primary'",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the button. @default 'medium'",defaultValue:{value:"'medium'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the button is in a loading state. Shows spinner and disables interaction.",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the button should take up the full width of its container.",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon element rendered before the children."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button content."},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};export{i as B};
