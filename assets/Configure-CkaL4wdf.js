import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DZADYc9D.js";import{M as t}from"./blocks-Cw21j_qS.js";function i(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Documentation/SpiseBowlMfUI"}),`
`,e.jsx(n.h1,{id:"spisebowlmfui--microfrontend-setup-guide",children:"SpiseBowlMfUI – Microfrontend Setup Guide"}),`
`,e.jsxs(n.p,{children:["Welcome to the ",e.jsx(n.strong,{children:"SpiseBowlMfUI"})," Microfrontend. This guide will help you integrate and configure the shared UI components built using ",e.jsx(n.strong,{children:"Vite"}),", ",e.jsx(n.strong,{children:"React"}),", ",e.jsx(n.strong,{children:"MUI"}),", and ",e.jsx(n.a,{href:"https://github.com/originjs/vite-plugin-federation",rel:"nofollow",children:e.jsx(n.code,{children:"@originjs/vite-plugin-federation"})}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-navigation",children:"🧭 Navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#features",children:"Features"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#integration-in-remote-app",children:"Integration in Remote App"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#step-1-install-dependencies",children:"Step 1: Install Dependencies"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#step-2-update-viteconfigjs",children:"Step 2: Update vite.config.js"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#step-3-add-environment-variable",children:"Step 3: Add Environment Variable"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#references",children:"References"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("h2",{id:"overview",children:"🔍 Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"SpiseBowlMfUI"})," is a ",e.jsx(n.strong,{children:"Vite-powered Microfrontend"})," that exposes reusable UI modules such as layouts, forms, theme providers, etc. It is intended to be consumed by remote apps via ",e.jsx(n.strong,{children:"Module Federation"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("h2",{id:"features",children:"📦 Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built using ",e.jsx(n.strong,{children:"Vite + React 19 + MUI v7"})]}),`
`,e.jsx(n.li,{children:"Exposes shared UI components"}),`
`,e.jsxs(n.li,{children:["Optimized for ",e.jsx(n.strong,{children:"Module Federation"})]}),`
`,e.jsx(n.li,{children:"Singleton shared dependencies (React, MUI, etc.)"}),`
`,e.jsx(n.li,{children:"Easy local development with full HMR support"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("h2",{id:"integration-in-remote-app",children:"🧩 Integration in Remote App"}),`
`,e.jsxs(n.p,{children:["To consume ",e.jsx(n.code,{children:"SpiseBowlMfUI"})," from a host or remote app:"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("h3",{id:"step-1-install-dependencies",children:"✅ Step 1: Install Dependencies"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @originjs/vite-plugin-federation --save-dev
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("h3",{id:"step-2-update-viteconfigjs",children:"✅ Step 2: Update vite.config.js"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// vite.config.js

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "/",
    plugins: [
      react(),
      federation({
        name: "SpiseBowlUserFE", // name of your consuming app
        remotes: {
          SpiseBowlMfUI: \`\${env.VITE_MF_REMOTE_URL}/assets/remoteEntry.js\`,
        },
        shared: {
          react: {
            singleton: true,
            strictVersion: true,
            requiredVersion: "^19.0.0",
          },
          "react-dom": {
            singleton: true,
            strictVersion: true,
            requiredVersion: "^19.0.0",
          },
          "@mui/material": {
            singleton: true,
            strictVersion: true,
            requiredVersion: "^7.0.0",
          },
          "@emotion/react": {
            singleton: true,
            strictVersion: true,
            requiredVersion: "^11.14.0",
          },
          "@emotion/styled": {
            singleton: true,
            strictVersion: true,
            requiredVersion: "^11.14.0",
          },
          "react-router-dom": {
            singleton: true,
            strictVersion: true,
          },
          "prop-types": {
            singleton: true,
            strictVersion: true,
          },
          "react-hook-form": {
            singleton: true,
            strictVersion: true,
            requiredVersion: "^7.56.0",
          },
          "@hookform/resolvers": {
            singleton: true,
            strictVersion: true,
          },
          zod: {
            singleton: true,
            strictVersion: true,
          },
        },
      }),

      // Optional: Local development full reload support
      {
        name: "vite-plugin-reload-endpoint",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === "/__fullReload") {
              server.hot.send({ type: "full-reload" });
              res.end("Full reload triggered");
            } else {
              next();
            }
          });
        },
      },
    ],

    server: {
      hmr: true,
      cors: true,
      proxy: {
        "/remoteEntry.js": env.VITE_MF_REMOTE_URL,
      },
    },

    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("h3",{id:"step-3-add-environment-variable",children:e.jsx(n.p,{children:"✅ Step 3: Add Environment Variable"})}),`
`,e.jsxs(n.p,{children:["In your ",e.jsx(n.code,{children:".env"})," file:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`// Remote URL
VITE_MF_REMOTE_URL=https://spise-bowl-mf-ui.vercel.app

// Local URL
VITE_MF_REMOTE_URL=http://localhost:5000
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Replace the port with the actual one used by your ",e.jsx(n.code,{children:"SpiseBowlMfUI"})," remote during local development."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("h3",{id:"example-usage",children:"🧩 Example Usage"}),`
`,e.jsxs(n.p,{children:["Use components from ",e.jsx(n.code,{children:"SpiseBowlMfUI"})," like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const Header = await import("SpiseBowlMfUI/Header");

// Or with React.lazy
const Header = React.lazy(() => import("SpiseBowlMfUI/Header"));
`})}),`
`,e.jsx(n.p,{children:"Use inside a Suspense boundary:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Suspense fallback={<div>Loading...</div>}>
  <Header />
</Suspense>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("h3",{id:"references",children:"📚 References"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/originjs/vite-plugin-federation",rel:"nofollow",children:"Vite Plugin Federation Docs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://micro-frontends.org/",rel:"nofollow",children:"Microfrontend Architecture"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://vitejs.dev",rel:"nofollow",children:"Vite Documentation"})}),`
`]}),`
`,e.jsx(n.hr,{})]})}function c(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{c as default};
