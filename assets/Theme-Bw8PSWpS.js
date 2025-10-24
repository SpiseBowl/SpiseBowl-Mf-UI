import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DZADYc9D.js";import{M as i}from"./blocks-Cw21j_qS.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Theme/Theme"}),`
`,e.jsx(n.h1,{id:"-theme-system-mui--context",children:"🎨 Theme System (MUI + Context)"}),`
`,e.jsxs(n.p,{children:["Your app uses a custom MUI theme system with a ",e.jsx(n.code,{children:"ThemeContext"}),", ",e.jsx(n.code,{children:"ThemeProviderWrapper"}),", and utility functions to support both ",e.jsx(n.strong,{children:"light"})," and ",e.jsx(n.strong,{children:"dark"})," modes using a shared color palette."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-exported-items",children:"✳️ Exported Items"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"COLORS"})," — Central color tokens used across the theme"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTheme(mode)"})," — Returns a full MUI theme object based on ",e.jsx(n.code,{children:'"light"'})," or ",e.jsx(n.code,{children:'"dark"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ThemeContext"})," — React Context for accessing theme mode and toggle function"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ThemeProviderWrapper"})," — Provides the theme and context to your app"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"-colors",children:["🎨 ",e.jsx(n.code,{children:"COLORS"})]}),`
`,e.jsx(n.p,{children:"A consistent token-based color system used in both light and dark themes."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import COLORS from "./colors";

console.log(COLORS.PRIMARY); // "#FF6B35"
`})}),`
`,e.jsx(n.p,{children:"Some available colors:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:"| Token               | Example   |\n| ------------------- | --------- |\n| `PRIMARY`           | `#FF6B35` |\n| `SECONDARY`         | `#354aff` |\n| `ERROR`             | `#E63946` |\n| `LIGHT_BG`          | `#f7f7f7` |\n| `DARK_TEXT_PRIMARY` | `#E0E0E0` |\n"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"️-getthememode",children:["⚙️ ",e.jsx(n.code,{children:"getTheme(mode)"})]}),`
`,e.jsx(n.p,{children:"Returns a full responsive Material UI theme customized for light or dark mode."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { getTheme } from "./theme";

const theme = getTheme("light");
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Uses responsive font sizes"}),`
`,e.jsxs(n.li,{children:["Supports all standard MUI palette keys: ",e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"secondary"}),", ",e.jsx(n.code,{children:"error"}),", ",e.jsx(n.code,{children:"success"}),", etc."]}),`
`,e.jsx(n.li,{children:"Typography and spacing are customized"}),`
`,e.jsxs(n.li,{children:["Overrides many MUI components (e.g. ",e.jsx(n.code,{children:"MuiButton"}),", ",e.jsx(n.code,{children:"MuiCard"}),", ",e.jsx(n.code,{children:"MuiTextField"}),")"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"-themecontext",children:["🧠 ",e.jsx(n.code,{children:"ThemeContext"})]}),`
`,e.jsx(n.p,{children:"React context with two values:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const { mode, toggleTheme } = useContext(ThemeContext);
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mode"}),": ",e.jsx(n.code,{children:'"light"'})," or ",e.jsx(n.code,{children:'"dark"'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toggleTheme"}),": Function to switch between modes"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"-themeproviderwrapper",children:["🧥 ",e.jsx(n.code,{children:"ThemeProviderWrapper"})]}),`
`,e.jsx(n.p,{children:"Wraps your app and provides the theme context and styling."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ThemeProviderWrapper } from "./ThemeProviderWrapper";

<ThemeProviderWrapper>
  <App />
</ThemeProviderWrapper>;
`})}),`
`,e.jsxs(n.p,{children:["It supports an optional ",e.jsx(n.code,{children:"mode"})," prop and reads ",e.jsx(n.code,{children:'"user_theme"'})," from cookies if not provided."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<ThemeProviderWrapper mode="light">
  <App />
</ThemeProviderWrapper>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-theme-switch-example",children:"💡 Theme Switch Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProviderWrapper";
import { Button } from "@mui/material";

const ThemeToggleButton = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme}>
      Switch to {mode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-cookie-integration",children:"📦 Cookie Integration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Reads the cookie ",e.jsx(n.code,{children:"user_theme"})," (light/dark) on load."]}),`
`,e.jsx(n.li,{children:"Stores theme preference using cookie helpers."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-related-files",children:"📚 Related Files"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"/theme/colors.js"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"/theme/theme.js"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"/theme/ThemeProviderWrapper.js"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"/utility/cookies.js"})}),`
`]}),`
`,e.jsx(n.hr,{})]})}function h(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{h as default};
