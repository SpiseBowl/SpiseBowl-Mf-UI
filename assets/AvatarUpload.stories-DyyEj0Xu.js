import{A as e}from"./index-CnZHuYlt.js";const o={title:"SharedComponents/AvatarUpload",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
### 📷 AvatarUpload
Avatar allows users to upload and crop a profile picture using react-easy-crop.

#### 📦 Import
\`\`\`js
import { AvatarUpload } from "SpiseBowlMfUI/sharedComp";
\`\`\`

### Features
- Clickable Avatar with edit icon
- Image file input
- Cropping modal with zoom slider
- Returns base64 cropped image via onSave callback
- 'viewOnly' mode for display without editing

### Props
- \`avatar\` (string): Initial avatar image URL
- \`onSave\` (function): Callback with cropped image
- \`viewOnly\` (boolean): If true, disables editing
        `}}}},a={args:{avatar:"https://i.pravatar.cc/150?img=8",viewOnly:!1}},r={args:{avatar:"https://i.pravatar.cc/150?img=12",viewOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    avatar: "https://i.pravatar.cc/150?img=8",
    viewOnly: false
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    avatar: "https://i.pravatar.cc/150?img=12",
    viewOnly: true
  }
}`,...r.parameters?.docs?.source}}};const s=["Default","ViewOnly"];export{a as Default,r as ViewOnly,s as __namedExportsOrder,o as default};
