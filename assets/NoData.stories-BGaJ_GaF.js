import{importShared as o}from"./__federation_fn_import-DU6Trtru.js";import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{N as a}from"./NoData-BY9-L9qL.js";await o("react");const d={title:"helpers/NoData",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
### 📭 NoData
A reusable component to show a friendly "No Data Found" UI with an icon, title, and optional description.

#### 📦 Import
\`\`\`js
import { RenderIf, NoData } from "SpiseBowlMfUI/helpers";
\`\`\`

#### 🛠️ Props
- **title** \`string\` – Main heading (default: "No Data Found")
- **description** \`string\` – Optional subtitle
- **children** \`ReactNode\` – Optional extra content (e.g., a CTA button or illustration)

> Commonly used when tables, lists, or charts have no data to display.
        `}}}},t={args:{title:"No Data Found",description:"We couldn’t find anything matching your filters.",children:null}},e={args:{title:"No Orders Yet",description:"Start receiving orders to see them listed here.",children:r.jsx("button",{children:"Explore Products"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No Data Found",
    description: "We couldn’t find anything matching your filters.",
    children: null
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No Orders Yet",
    description: "Start receiving orders to see them listed here.",
    children: <button>Explore Products</button>
  }
}`,...e.parameters?.docs?.source}}};const c=["Default","WithCTA"];export{t as Default,e as WithCTA,c as __namedExportsOrder,d as default};
