import{importShared as h}from"./__federation_fn_import-CwlTE-Wn.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{F as S}from"./FormInput-CYXYM1yx.js";await h("react");const{useForm:x,FormProvider:F}=await h("react-hook-form"),{Box:B,Button:I,useTheme:V}=await h("@mui/material"),T={title:"SharedComponents/FormInput",component:S,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},n=p=>{const b=x({defaultValues:{[p.name]:p.defaultValue||""}}),g=f=>{alert(JSON.stringify(f,null,2))};return t.jsx(F,{...b,children:t.jsx("form",{onSubmit:b.handleSubmit(g),children:t.jsxs(B,{maxWidth:500,children:[t.jsx(S,{...p,control:b.control}),t.jsx(I,{type:"submit",variant:"contained",children:"Submit"})]})})})},e=n.bind({});e.args={name:"username",label:"Username",inputType:"text",defaultValue:"john_doe"};const o=n.bind({});o.args={name:"gender",label:"Gender",inputType:"select",options:[{label:"Male",value:"male"},{label:"Female",value:"female"}]};const r=n.bind({});r.args={name:"status",label:"Status",inputType:"radio",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]};const a=n.bind({});a.args={name:"agree",label:"I agree to terms",inputType:"checkbox"};const s=n.bind({});s.args={name:"bio",label:"Bio",inputType:"textarea",rows:3};const m=n.bind({});m.args={name:"phone",label:"Phone Number",inputType:"phone"};const u=n.bind({});u.args={name:"resume",label:"Upload Resume",inputType:"file",multiple:!1,rowHeight:2};const i=n.bind({});i.args={name:"password",label:"Password",inputType:"password"};const l=n.bind({});l.args={name:"email",label:"Email",inputType:"email",defaultValue:"test@example.com"};const d=n.bind({});d.args={name:"age",label:"Age",inputType:"number"};const c=n.bind({});c.args={name:"subscribe",label:"Subscribe to newsletter",inputType:"switch"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.defaultValue || ""
    }
  });
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
  };
  return <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box maxWidth={500}>
          <FormInput {...args} control={methods.control} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>;
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.defaultValue || ""
    }
  });
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
  };
  return <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box maxWidth={500}>
          <FormInput {...args} control={methods.control} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>;
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.defaultValue || ""
    }
  });
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
  };
  return <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box maxWidth={500}>
          <FormInput {...args} control={methods.control} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.defaultValue || ""
    }
  });
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
  };
  return <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box maxWidth={500}>
          <FormInput {...args} control={methods.control} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.defaultValue || ""
    }
  });
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
  };
  return <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box maxWidth={500}>
          <FormInput {...args} control={methods.control} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>;
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.defaultValue || ""
    }
  });
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
  };
  return <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box maxWidth={500}>
          <FormInput {...args} control={methods.control} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.defaultValue || ""
    }
  });
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
  };
  return <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box maxWidth={500}>
          <FormInput {...args} control={methods.control} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>;
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.defaultValue || ""
    }
  });
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
  };
  return <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box maxWidth={500}>
          <FormInput {...args} control={methods.control} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>;
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.defaultValue || ""
    }
  });
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
  };
  return <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box maxWidth={500}>
          <FormInput {...args} control={methods.control} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.defaultValue || ""
    }
  });
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
  };
  return <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box maxWidth={500}>
          <FormInput {...args} control={methods.control} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>;
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.defaultValue || ""
    }
  });
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
  };
  return <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box maxWidth={500}>
          <FormInput {...args} control={methods.control} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>;
}`,...c.parameters?.docs?.source}}};const w=["TextInput","SelectInput","RadioInput","CheckboxInput","TextareaInput","PhoneInputField","FileInput","PasswordInput","EmailInput","NumberInput","SwitchInput"];export{a as CheckboxInput,l as EmailInput,u as FileInput,d as NumberInput,i as PasswordInput,m as PhoneInputField,r as RadioInput,o as SelectInput,c as SwitchInput,e as TextInput,s as TextareaInput,w as __namedExportsOrder,T as default};
