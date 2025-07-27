import{importShared as t}from"./__federation_fn_import-DU6Trtru.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{AdminLayout as n}from"./__federation_expose_Layouts-Z_OEE749.js";await t("react");const s={title:"Layouts/AdminLayout",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
### 📘 AdminLayout
Use this layout for all admin pages. It includes header, sidebar, and main content area.

#### 📦 Import
\`\`\`js
import { AdminLayout } from "SpiseBowlMfUI/layouts";
\`\`\`

#### 🛠️ Props
- **version** \`string\` – Version of the application (e.g., "1.0.0")
- **openLogoutDialog** \`function\` – Function to open the logout confirmation dialog
- **children** \`ReactNode\` – Main content to be displayed in the layout

      `}}}},o={args:{version:"1.0.0",openLogoutDialog:()=>alert("Logout Dialog Triggered"),children:e.jsxs("div",{children:[e.jsx("h2",{children:"Main Content Area"}),e.jsx("p",{children:"This is where your page content goes."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    version: "1.0.0",
    openLogoutDialog: () => alert("Logout Dialog Triggered"),
    children: <div>
        <h2>Main Content Area</h2>
        <p>This is where your page content goes.</p>
      </div>
  }
}`,...o.parameters?.docs?.source}}};const d=["Default"];export{o as Default,d as __namedExportsOrder,s as default};
