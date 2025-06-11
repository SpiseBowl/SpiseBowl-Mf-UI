import { Typography } from "@mui/material";
import { FilterWrapper } from "./sharedComp";
import AvatarUpload from "./sharedComp/profileAvatar";
const Demo = () => {
  return (
    <>
      <Typography variant="h1">
        This is Micro Fronted Module For E-Commerce
      </Typography>
      <Typography variant="caption">
        It is have Admin, User, Shared Components and helper function and hooks{" "}
      </Typography>
      <AvatarUpload
        avatar="/static/images/avatar/1.jpg"
        editable={true}
        alt="User Avatar"
        onSave={(imgUrl) => {
          console.log("Saved avatar:", imgUrl);
        }}
      />

      <FilterWrapper />
    </>
  );
};

export default Demo;
