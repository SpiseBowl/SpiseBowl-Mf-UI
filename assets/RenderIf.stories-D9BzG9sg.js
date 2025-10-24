import{importShared as s}from"./__federation_fn_import-CH-LSGom.js";import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as t}from"./RenderIf-CbsUeuB5.js";await s("react");const a={title:"helpers/RenderIf",component:t,tags:["autodocs"],parameters:{docs:{description:{component:'\n### 🧩 RenderIf\nA utility wrapper that conditionally renders its children based on a `render` prop.\n\n#### 📦 Import\n```js\nimport { RenderIf } from "SpiseBowlMfUI/helpers";\n```\n\n#### 🛠️ Props\n- **render** `boolean` – If `true`, renders the `children`; otherwise renders `null`.\n- **children** `ReactNode` – The content to be conditionally rendered.\n\n> Useful for inline conditional rendering in JSX.\n        '}}}},e={args:{render:!0,children:n.jsx("div",{children:"This content is visible when \\`render\\` is true."})}},r={args:{render:!1,children:n.jsx("div",{children:"This content will not render."})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    render: true,
    children: <div>This content is visible when \\\`render\\\` is true.</div>
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    render: false,
    children: <div>This content will not render.</div>
  }
}`,...r.parameters?.docs?.source}}};const c=["Default","Hidden"];export{e as Default,r as Hidden,c as __namedExportsOrder,a as default};
