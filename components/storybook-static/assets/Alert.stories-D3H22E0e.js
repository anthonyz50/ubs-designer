import{r as g,j as e}from"./iframe-DL6Dh11c.js";import"./preload-helper-C1FmrZbK.js";const J="_alert_1n9gp_5",K="_alertFadeIn_1n9gp_1",Q="_error_1n9gp_32",X="_icon_1n9gp_38",Z="_warning_1n9gp_42",$="_success_1n9gp_52",ee="_info_1n9gp_62",re="_content_1n9gp_81",se="_title_1n9gp_86",te="_message_1n9gp_93",ne="_dismiss_1n9gp_101",s={alert:J,alertFadeIn:K,error:Q,icon:X,warning:Z,success:$,info:ee,content:re,title:se,message:te,dismiss:ne},ae=({variant:n})=>{const r={width:20,height:20,viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":!0,className:s.icon};switch(n){case"error":return e.jsx("svg",{...r,children:e.jsx("path",{d:"M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z"})});case"warning":return e.jsx("svg",{...r,children:e.jsx("path",{d:"M1 17h18L10 1 1 17zm10-2H9v-2h2v2zm0-4H9V7h2v4z"})});case"success":return e.jsx("svg",{...r,children:e.jsx("path",{d:"M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM8 15l-5-5 1.41-1.41L8 12.17l7.59-7.59L17 6l-9 9z"})});case"info":default:return e.jsx("svg",{...r,children:e.jsx("path",{d:"M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z"})})}},t=g.forwardRef(({variant:n="info",title:r,dismissible:q=!1,onDismiss:a,children:h,className:B,...M},L)=>{const[P,O]=g.useState(!1),Y=g.useCallback(()=>{O(!0),a==null||a()},[a]);if(P)return null;const U=[s.alert,s[n],B??""].filter(Boolean).join(" ");return e.jsxs("div",{ref:L,className:U,role:"alert","aria-live":n==="error"?"assertive":"polite",...M,children:[e.jsx(ae,{variant:n}),e.jsxs("div",{className:s.content,children:[r&&e.jsx("div",{className:s.title,children:r}),h&&e.jsx("div",{className:s.message,children:h})]}),q&&e.jsx("button",{type:"button",className:s.dismiss,onClick:Y,"aria-label":"Dismiss alert",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M12.7 4.7l-1.4-1.4L8 6.6 4.7 3.3 3.3 4.7 6.6 8l-3.3 3.3 1.4 1.4L8 9.4l3.3 3.3 1.4-1.4L9.4 8l3.3-3.3z"})})})]})});t.displayName="Alert";t.__docgenInfo={description:`UBS Design System Alert component.

RAG (Red/Amber/Green) status indicator following UBS brand guidelines:
- Error: RAG Red (#BD000C) — critical problems
- Warning: RAG Amber (#E4A911) — needs attention
- Success: RAG Green (#6F7A1A) — on track
- Info: Gray IV (#7A7870) — neutral information

Meets WCAG 2.2 AA contrast requirements.
Does not rely on colour alone (uses icons + text).

@example
\`\`\`tsx
<Alert variant="error" title="Transaction Failed">
  Please check your account details and try again.
</Alert>

<Alert variant="success" dismissible onDismiss={() => setShow(false)}>
  Your transfer has been completed successfully.
</Alert>
\`\`\``,methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'error' | 'warning' | 'success' | 'info'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"}]},description:"Alert severity/type. @default 'info'",defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Optional title displayed prominently."},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the alert can be dismissed. @default false",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the alert is dismissed."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Alert message content."}}};const le={title:"Components/Alert",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["error","warning","success","info"],description:"RAG status variant"},title:{control:"text",description:"Optional alert title"},dismissible:{control:"boolean",description:"Whether the alert can be dismissed"}},args:{variant:"info",children:"This is an informational message."}},i={args:{variant:"error",title:"Transaction Failed",children:"Please check your account details and try again. If the problem persists, contact your relationship manager."}},o={args:{variant:"warning",title:"Approaching Limit",children:"You have used 85% of your daily transfer limit. Remaining: CHF 15,000."}},l={args:{variant:"success",title:"Transfer Complete",children:"Your transfer of CHF 50,000 to IBAN CH93 0076 2011 6238 5295 7 has been completed successfully."}},c={args:{variant:"info",title:"System Maintenance",children:"Scheduled maintenance will take place on Saturday, 5 April 2025, from 02:00 to 06:00 CET."}},d={args:{variant:"success",dismissible:!0,children:"This alert can be dismissed by clicking the close button."}},m={args:{variant:"warning",title:"Action Required",dismissible:!0,children:"Please update your contact details before the end of the month."}},u={args:{variant:"info",children:"A simple informational message without a title."}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(t,{variant:"error",title:"Error (RAG Red)",children:"Critical issue requiring immediate attention. RAG Red: #BD000C."}),e.jsx(t,{variant:"warning",title:"Warning (RAG Amber)",children:"Situation needs attention. RAG Amber: #E4A911."}),e.jsx(t,{variant:"success",title:"Success (RAG Green)",children:"Operation completed successfully. RAG Green: #6F7A1A."}),e.jsx(t,{variant:"info",title:"Info (Gray IV)",children:"Neutral informational message. Gray IV: #7A7870."})]})};var f,A,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Transaction Failed',
    children: 'Please check your account details and try again. If the problem persists, contact your relationship manager.'
  }
}`,...(v=(A=i.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var y,b,_;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Approaching Limit',
    children: 'You have used 85% of your daily transfer limit. Remaining: CHF 15,000.'
  }
}`,...(_=(b=o.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var x,R,w;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Transfer Complete',
    children: 'Your transfer of CHF 50,000 to IBAN CH93 0076 2011 6238 5295 7 has been completed successfully.'
  }
}`,...(w=(R=l.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var G,S,C;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'System Maintenance',
    children: 'Scheduled maintenance will take place on Saturday, 5 April 2025, from 02:00 to 06:00 CET.'
  }
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var j,I,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    dismissible: true,
    children: 'This alert can be dismissed by clicking the close button.'
  }
}`,...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var N,E,F;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Action Required',
    dismissible: true,
    children: 'Please update your contact details before the end of the month.'
  }
}`,...(F=(E=m.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var V,z,H;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'A simple informational message without a title.'
  }
}`,...(H=(z=u.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var W,k,D;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Alert variant="error" title="Error (RAG Red)">
        Critical issue requiring immediate attention. RAG Red: #BD000C.
      </Alert>
      <Alert variant="warning" title="Warning (RAG Amber)">
        Situation needs attention. RAG Amber: #E4A911.
      </Alert>
      <Alert variant="success" title="Success (RAG Green)">
        Operation completed successfully. RAG Green: #6F7A1A.
      </Alert>
      <Alert variant="info" title="Info (Gray IV)">
        Neutral informational message. Gray IV: #7A7870.
      </Alert>
    </div>
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const ce=["Error","Warning","Success","Info","Dismissible","DismissibleWithTitle","InfoWithoutTitle","AllVariants"];export{p as AllVariants,d as Dismissible,m as DismissibleWithTitle,i as Error,c as Info,u as InfoWithoutTitle,l as Success,o as Warning,ce as __namedExportsOrder,le as default};
