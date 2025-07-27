import ErrorBoundary from "./ErrorBoundary";

export default {
  title: "helpers/ErrorBoundary",
  component: ErrorBoundary,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
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
        `,
      },
    },
  },
};

// A test component that intentionally throws an error
const ProblemChild = () => {
  throw new Error("Intentional error from ProblemChild");
};

export const Default = {
  args: {
    children: <ProblemChild />,
  },
};
