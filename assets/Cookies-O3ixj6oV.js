import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BusBvLrs.js";import{M as c}from"./blocks-BL_c-4xe.js";function s(n){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Utils/Cookies"}),`
`,e.jsxs(o.h1,{id:"-cookies--cookie-utility-functions",children:["🍪 ",e.jsx(o.code,{children:"cookies"})," – Cookie Utility Functions"]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"cookies"})," object provides a simple and consistent way to manage browser cookies using plain JavaScript—no React or third-party libraries required."]}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"-functions-overview",children:"✨ Functions Overview"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"cookies"})," object includes four helpful functions:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"cookies.getCookie(name)"})})," – Gets the value of a cookie by name. Returns ",e.jsx(o.code,{children:"null"})," if it doesn't exist."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"cookies.setCookie(name, value, options)"})})," – Creates or updates a cookie. You can pass options like how long it should last, the path, or if it should be secure."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"cookies.removeCookie(name, options)"})})," – Deletes a cookie. You can also add options like the path if needed."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"cookies.parseAllCookies()"})})," – Returns all cookies as a key–value object."]}),`
`]}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"-importing",children:"📦 Importing"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { cookies } from "SpiseBowlMfUI/utility";
`})}),`
`,e.jsx(o.hr,{}),`
`,e.jsxs(o.h2,{id:"-cookiesgetcookiename",children:["🔍 ",e.jsx(o.code,{children:"cookies.getCookie(name)"})]}),`
`,e.jsx(o.p,{children:"Gets the value of a cookie by name."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`const token = cookies.getCookie("token");
console.log(token); // "abc123" or null if not found
`})}),`
`,e.jsx(o.hr,{}),`
`,e.jsxs(o.h2,{id:"-cookiessetcookiename-value-options",children:["🧪 ",e.jsx(o.code,{children:"cookies.setCookie(name, value, options)"})]}),`
`,e.jsx(o.p,{children:"Sets or updates a cookie with optional settings."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`cookies.setCookie("token", "abc123", {
  maxAgeDays: 7,
  path: "/",
  secure: true,
  sameSite: "Lax",
});
`})}),`
`,e.jsxs(o.h3,{id:"-supported-options",children:["✅ Supported ",e.jsx(o.code,{children:"options"})]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"maxAgeDays"}),", ",e.jsx(o.code,{children:"maxAgeHours"}),", ",e.jsx(o.code,{children:"maxAgeMinutes"}),", ",e.jsx(o.code,{children:"maxAge"})," (in seconds)"]}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"path"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"domain"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"secure"})}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"sameSite"})," (",e.jsx(o.code,{children:"Strict"}),", ",e.jsx(o.code,{children:"Lax"}),", ",e.jsx(o.code,{children:"None"}),")"]}),`
`]}),`
`,e.jsx(o.hr,{}),`
`,e.jsxs(o.h2,{id:"-cookiesremovecookiename-options",children:["🧹 ",e.jsx(o.code,{children:"cookies.removeCookie(name, options)"})]}),`
`,e.jsxs(o.p,{children:["Removes a cookie by setting its ",e.jsx(o.code,{children:"max-age"})," to ",e.jsx(o.code,{children:"0"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`cookies.removeCookie("token");
`})}),`
`,e.jsxs(o.p,{children:["You can pass options like ",e.jsx(o.code,{children:"path"})," to match the original cookie settings."]}),`
`,e.jsx(o.hr,{}),`
`,e.jsxs(o.h2,{id:"-cookiesparseallcookies",children:["🧾 ",e.jsx(o.code,{children:"cookies.parseAllCookies()"})]}),`
`,e.jsx(o.p,{children:"Returns all current cookies as a plain object."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`const allCookies = cookies.parseAllCookies();
console.log(allCookies);
// { token: "abc123", sessionId: "xyz456" }
`})}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"-example-workflow",children:"💡 Example Workflow"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`// Set a cookie
cookies.setCookie("mode", "dark", { maxAgeMinutes: 30 });

// Get the cookie
const mode = cookies.getCookie("mode");
console.log("Mode is:", mode); // dark

// Remove the cookie
cookies.removeCookie("mode");
`})}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"️-browser-notes",children:"⚠️ Browser Notes"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"document.cookie"})," is scoped by domain and path."]}),`
`,e.jsxs(o.li,{children:["Changes can be inspected via DevTools: ",e.jsx(o.strong,{children:"Application → Storage → Cookies"}),"."]}),`
`,e.jsx(o.li,{children:"Secure cookies will only work over HTTPS."}),`
`]}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"-source-code",children:"📚 Source Code"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`function parseAllCookies() {
  return document.cookie.split("; ").reduce((acc, cookie) => {
    const [name, ...val] = cookie.split("=");
    acc[name] = decodeURIComponent(val.join("="));
    return acc;
  }, {});
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(\`(^| )\${name}=([^;]+)\`));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value, options = {}) {
  let cookieStr = \`\${encodeURIComponent(name)}=\${encodeURIComponent(value)}\`;

  if (options.maxAgeDays !== undefined) {
    cookieStr += \`; max-age=\${options.maxAgeDays * 24 * 3600}\`;
  } else if (options.maxAgeHours !== undefined) {
    cookieStr += \`; max-age=\${options.maxAgeHours * 3600}\`;
  } else if (options.maxAgeMinutes !== undefined) {
    cookieStr += \`; max-age=\${options.maxAgeMinutes * 60}\`;
  } else if (options.maxAge !== undefined) {
    cookieStr += \`; max-age=\${options.maxAge}\`;
  }

  if (options.path) cookieStr += \`; path=\${options.path}\`;
  if (options.domain) cookieStr += \`; domain=\${options.domain}\`;
  if (options.secure) cookieStr += \`; secure\`;
  if (options.sameSite) cookieStr += \`; samesite=\${options.sameSite}\`;

  document.cookie = cookieStr;
}

function removeCookie(name, options = {}) {
  setCookie(name, "", { ...options, path: "/", maxAge: 0 });
}

export const cookies = {
  getCookie,
  setCookie,
  removeCookie,
  parseAllCookies,
};
`})})]})}function d(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{d as default};
