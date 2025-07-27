import React from "react";
import FilterWrapper from "./index";

export default {
  title: "SharedComponents/FilterWrapper",
  component: FilterWrapper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
### 🧩 FilterWrapper
A reusable MUI-based filter button that shows a popover when clicked.

#### 📦 Import
\`\`\`js
import { FilterWrapper } from "SpiseBowlMfUI/sharedComp";
\`\`\`

#### 🛠️ Props
- **btnName** \`string\` – Button label (e.g., "Filter", "Sort", etc.)
- **children** \`ReactNode\` – Content inside the popover (e.g., filter inputs)

        `,
      },
    },
  },
};

export const Default = {
  args: {
    btnName: "Filter",
    children: (
      <div>
        This is where you can put your filter inputs or any other content.
      </div>
    ),
  },
};
