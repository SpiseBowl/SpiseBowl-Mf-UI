import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    federation({
      name: "SpiseBowlMfUI",
      filename: "remoteEntry.js",
      exposes: {
        "./sharedComp": "./src/sharedComp",
        "./user": "./src/user",
        "./admin": "./src/admin",
        "./helpers": "./src/helpers",
        "./theme": "./src/theme",
        "./layouts": "./src/layouts",
        "./assets": "./src/assets",
        "./hooks": "./src/hooks",
        "./hoc": "./src/hoc",
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
        "react-router-dom": { singleton: true, strictVersion: true },
        "prop-types": { singleton: true, strictVersion: true },
        "react-hook-form": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^7.56.0",
        },
        "@hookform/resolvers": { singleton: true, strictVersion: true },
        zod: { singleton: true, strictVersion: true },
      },
    }),
    {
      name: "vite-plugin-notify-host-on-rebuild",
      apply(config, { command }) {
        return Boolean(command === "build" && config.build?.watch);
      },
      async buildEnd(error) {
        if (!error) {
          try {
            await fetch("http://localhost:5000/__fullReload");
          } catch (e) {
            // noop
          }
        }
      },
    },
  ],
  preview: {
    port: 5000,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  server: {
    // strictPort: true,
    port: 5000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  optimizeDeps: {
    // exclude: ["react", "react-dom"],
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    // rollupOptions: {
    //   external: ["react", "react-dom"],
    // },
  },
});
