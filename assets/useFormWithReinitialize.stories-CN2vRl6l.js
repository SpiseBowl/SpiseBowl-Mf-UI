import{importShared as p}from"./__federation_fn_import-MqhboSMQ.js";import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{useFormWithReinitialize as b}from"./__federation_expose_Hooks-BkSvENsK.js";import{F as d}from"./FormInput-L7Y-K3bZ.js";const{validateFieldsNatively:y,toNestErrors:g}=await p("@hookform/resolvers"),{appendErrors:v}=await p("react-hook-form");function S(n,l){for(var t={};n.length;){var e=n[0],c=e.code,r=e.message,o=e.path.join(".");if(!t[o])if("unionErrors"in e){var i=e.unionErrors[0].errors[0];t[o]={message:i.message,type:i.code}}else t[o]={message:r,type:c};if("unionErrors"in e&&e.unionErrors.forEach(function(h){return h.errors.forEach(function(f){return n.push(f)})}),l){var a=t[o].types,m=a&&a[e.code];t[o]=v(o,l,t,c,m?[].concat(m,e.message):e.message)}n.shift()}return t}function x(n,l,t){return t===void 0&&(t={}),function(e,c,r){try{return Promise.resolve(function(o,i){try{var a=Promise.resolve(n[t.mode==="sync"?"parse":"parseAsync"](e,l)).then(function(m){return r.shouldUseNativeValidation&&y({},r),{errors:{},values:t.raw?Object.assign({},e):m}})}catch(m){return i(m)}return a&&a.then?a.then(void 0,i):a}(0,function(o){if(function(i){return Array.isArray(i?.errors)}(o))return{values:{},errors:g(S(o.errors,!r.shouldUseNativeValidation&&r.criteriaMode==="all"),r)};throw o}))}catch(o){return Promise.reject(o)}}}const E=await p("react"),{useEffect:w}=E,N={title:"Hooks/useFormWithReinitialize",tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},u=()=>{const{control:n,handleSubmit:l,reset:t,formState:{isSubmitting:e}}=b({resolver:x(""),defaultValues:{name:"",email:"",phone:""},mode:"onChange",enableReinitialize:!0}),c=r=>{alert(JSON.stringify(r,null,2))};return s.jsxs("div",{style:{padding:20},children:[s.jsx("h3",{children:"📝 useFormWithReinitialize Playground"}),s.jsxs("form",{onSubmit:l(c),children:[s.jsx(d,{name:"name",control:n,label:"Name",inputType:"text"}),s.jsx(d,{name:"email",control:n,label:"Email",inputType:"text"}),s.jsx(d,{name:"phone",control:n,label:"Phone",inputType:"text"}),s.jsx("button",{type:"submit",disabled:e,style:{marginTop:12},children:"Submit"})]})]})};u.parameters={docs:{source:{type:"code"},description:{story:`
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
      `}}};u.__docgenInfo={description:"",methods:[],displayName:"Example"};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {
      isSubmitting
    }
  } = useFormWithReinitialize({
    resolver: zodResolver(""),
    defaultValues: {
      name: "",
      email: "",
      phone: ""
    },
    mode: "onChange",
    enableReinitialize: true
  });
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
  };
  return <div style={{
    padding: 20
  }}>
      <h3>📝 useFormWithReinitialize Playground</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput name="name" control={control} label="Name" inputType="text" />
        <FormInput name="email" control={control} label="Email" inputType="text" />
        <FormInput name="phone" control={control} label="Phone" inputType="text" />

        <button type="submit" disabled={isSubmitting} style={{
        marginTop: 12
      }}>
          Submit
        </button>
      </form>
    </div>;
}`,...u.parameters?.docs?.source}}};const W=["Example"];export{u as Example,W as __namedExportsOrder,N as default};
