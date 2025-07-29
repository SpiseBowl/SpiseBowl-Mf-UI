import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{E as e}from"./ErrorBoundary-CWzSB2Z_.js";const n={title:"helpers/ErrorBoundary",component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
### 🛡️ ErrorBoundary
A reusable wrapper that catches runtime errors in its child components and displays a fallback UI.

#### 📦 Import
\`\`\`js
import { ErrorBoundary } from "SpiseBowlMfUI/helpers";
\`\`\`

#### 🛠️ Props
- **children** \`ReactNode\` – Components to wrap inside the error boundary.
- Automatically shows stack trace on localhost, with retry functionality.

> Useful for wrapping around isolated UI sections that might break without affecting the whole app.
        `}}}},t=()=>{throw new Error("Intentional error from ProblemChild")},r={args:{children:o.jsx(t,{})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <ProblemChild />
  }
}`,...r.parameters?.docs?.source}}};const i=["Default"];export{r as Default,i as __namedExportsOrder,n as default};
