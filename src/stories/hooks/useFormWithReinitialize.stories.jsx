import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormWithReinitialize } from "../../hooks";
import { FormInput } from "../../sharedComp/form";

export default {
  title: "Hooks/useFormWithReinitialize",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
📝 **useFormWithReinitialize Hook**

A wrapper around \`react-hook-form\` that allows you to reset the form automatically
when \`defaultValues\` change.

#### 📦 Import
\`\`\`js
import { useFormWithReinitialize } from "SpiseBowlMfUI/hooks";
\`\`\`

## ✅ Options
- **defaultValues**: initial values for the form
- **enableReinitialize**: boolean, whether to reset form when defaultValues change
- **rest**: all other options supported by useForm from react-hook-form
        `,
      },
    },
  },
};

export const Example = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useFormWithReinitialize({
    resolver: zodResolver(""),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    mode: "onChange",
    enableReinitialize: true,
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>📝 useFormWithReinitialize Playground</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="name"
          control={control}
          label="Name"
          inputType="text"
        />
        <FormInput
          name="email"
          control={control}
          label="Email"
          inputType="text"
        />
        <FormInput
          name="phone"
          control={control}
          label="Phone"
          inputType="text"
        />

        <button type="submit" disabled={isSubmitting} style={{ marginTop: 12 }}>
          Submit
        </button>
      </form>
    </div>
  );
};

Example.parameters = {
  docs: {
    source: { type: "code" },
    description: {
      story: `
📌 **Usage Example:**

\`\`\`js
const {
  control,
  handleSubmit,
  reset,
  formState: { isSubmitting }
} = useFormWithReinitialize({
  resolver: zodResolver(addressSchema),
  defaultValues: { name: "", email: "", phone: "", ... },
  mode: "onChange",
  enableReinitialize: true
});
\`\`\`
      `,
    },
  },
};
