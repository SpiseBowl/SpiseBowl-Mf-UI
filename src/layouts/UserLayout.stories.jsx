import { UserLayout } from ".";

export default {
  title: "Layouts/UserLayout",
  component: UserLayout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
### 📘 UserLayout
Use this layout for all user pages. It includes header, sidebar, and main content area.

#### 📦 Import
\`\`\`js
import { UserLayout } from "SpiseBowlMfUI/layouts";
\`\`\`

#### 🛠️ Props
- **version** \`string\` – Version of the application (e.g., "1.0.0")
- **children** \`ReactNode\` – Main content to be displayed in the layout

      `,
      },
    },
  },
};

export const Default = {
  args: {
    version: "1.0.0",
    children: (
      <div>
        <h2>Main Content Area</h2>
        <p>This is where your page content goes.</p>
      </div>
    ),
  },
};
