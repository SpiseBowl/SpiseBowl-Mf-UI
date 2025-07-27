import React from "react";
import RenderIf from "./RenderIf";

export default {
  title: "helpers/RenderIf",
  component: RenderIf,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
### 🧩 RenderIf
A utility wrapper that conditionally renders its children based on a \`render\` prop.

#### 📦 Import
\`\`\`js
import { RenderIf } from "SpiseBowlMfUI/helpers";
\`\`\`

#### 🛠️ Props
- **render** \`boolean\` – If \`true\`, renders the \`children\`; otherwise renders \`null\`.
- **children** \`ReactNode\` – The content to be conditionally rendered.

> Useful for inline conditional rendering in JSX.
        `,
      },
    },
  },
};

export const Default = {
  args: {
    render: true,
    children: <div>This content is visible when \`render\` is true.</div>,
  },
};

export const Hidden = {
  args: {
    render: false,
    children: <div>This content will not render.</div>,
  },
};
