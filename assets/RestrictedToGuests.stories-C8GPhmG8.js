import{importShared as s}from"./__federation_fn_import-c50mtfZI.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{RestrictedToGuests as r}from"./__federation_expose_Hoc-DLo0BGAb.js";await s("react");const n=()=>t.jsx("div",{children:"Only visible to unauthenticated users"}),o=r(n),p={title:"HOC/RestrictedToGuests",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
### 🔐 RestrictedToGuests
A Higher-Order Component (HOC) that **redirects authenticated users** away from guest-only pages.

#### 📦 Import
\`\`\`js
import { RestrictedToGuests } from "SpiseBowlMfUI/hoc";
\`\`\`

#### 🛠️ Usage
Wrap your guest-only components (e.g., Login, Register) like this:
\`\`\`jsx
const Login = () => { ... }
export default RestrictedToGuests(Login);
\`\`\`

#### 🔁 Behavior
- If \`auth_token\` is found in cookies, the user is redirected to \`/\`.
- If not, the wrapped component renders normally.
        `}}}},e={render:()=>t.jsx(o,{})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <WrappedComponent />
}`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,p as default};
