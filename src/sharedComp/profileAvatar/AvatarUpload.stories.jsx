import AvatarUpload from "./index";

export default {
  title: "SharedComponents/AvatarUpload",
  component: AvatarUpload,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
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
        `,
      },
    },
  },
};

export const Default = {
  args: {
    avatar: "https://i.pravatar.cc/150?img=8",
    viewOnly: false,
  },
};

export const ViewOnly = {
  args: {
    avatar: "https://i.pravatar.cc/150?img=12",
    viewOnly: true,
  },
};
