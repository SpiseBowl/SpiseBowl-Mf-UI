import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Button, useTheme } from "@mui/material";
import { FormInput } from "./index";

export default {
  title: "SharedComponents/FormInput",
  component: FormInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
### 🧾 FormInput
A powerful and flexible input component for React Hook Form using MUI.

Supports text, select, checkbox, radio, textarea, password, phone, file upload, and more.

#### 📦 Import

\`\`\`js
import { FormInput } from "SpiseBowlMfUI/sharedComp";
\`\`\`

#### 🛠️ Props

- \`name\` (string): Field name (required)
- \`control\` (object): RHF control object (required)
- \`label\` (string): Input label
- \`inputType\` (string): Type of input (e.g., "text", "select", "phone", etc.)
- \`options\` (array): For select/radio (format: { label, value })
- \`multiple\` (bool): Allow multiple files (file input only)
- \`rowHeight\` (number): Controls dropzone height

#### 💡 Example

\`\`\`jsx
<FormInput
  name="username"
  label="Username"
  control={control}
  inputType="text"
/>
\`\`\`
        `,
      },
    },
  },
};

// 🔧 Setup a form wrapper
const Template = (args) => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.defaultValue || "",
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box maxWidth={500}>
          <FormInput {...args} control={methods.control} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

// 📄 Stories
export const TextInput = Template.bind({});
TextInput.args = {
  name: "username",
  label: "Username",
  inputType: "text",
  defaultValue: "john_doe",
};

export const SelectInput = Template.bind({});
SelectInput.args = {
  name: "gender",
  label: "Gender",
  inputType: "select",
  options: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ],
};

export const RadioInput = Template.bind({});
RadioInput.args = {
  name: "status",
  label: "Status",
  inputType: "radio",
  options: [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ],
};

export const CheckboxInput = Template.bind({});
CheckboxInput.args = {
  name: "agree",
  label: "I agree to terms",
  inputType: "checkbox",
};

export const TextareaInput = Template.bind({});
TextareaInput.args = {
  name: "bio",
  label: "Bio",
  inputType: "textarea",
  rows: 3,
};

export const PhoneInputField = Template.bind({});
PhoneInputField.args = {
  name: "phone",
  label: "Phone Number",
  inputType: "phone",
};

export const FileInput = Template.bind({});
FileInput.args = {
  name: "resume",
  label: "Upload Resume",
  inputType: "file",
  multiple: false,
  rowHeight: 2,
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  name: "password",
  label: "Password",
  inputType: "password",
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  name: "email",
  label: "Email",
  inputType: "email",
  defaultValue: "test@example.com",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  name: "age",
  label: "Age",
  inputType: "number",
};

export const SwitchInput = Template.bind({});
SwitchInput.args = {
  name: "subscribe",
  label: "Subscribe to newsletter",
  inputType: "switch",
};
