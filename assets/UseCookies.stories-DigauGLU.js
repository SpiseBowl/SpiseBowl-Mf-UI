import{importShared as k}from"./__federation_fn_import-MqhboSMQ.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useCookies as u}from"./__federation_expose_Hooks-D8QJCENo.js";const l=await k("react"),{useEffect:d,useState:m}=l,x={title:"Hooks/useCookies",tags:["autodocs"],parameters:{docs:{description:{component:'\n🔐 **useCookies Hook**\nA custom React hook to manage cookies easily. Provides utility functions to get, set, and remove cookies.\n\n#### 📦 Import\n```js\nimport { useCookies } from "SpiseBowlMfUI/hooks";\n```\n\n## ✅ Returns\n- `getCookie(name: string)` → Gets the cookie value.\n- `setCookie(name: string, value: string, options?)` → Sets a cookie with optional config.\n- `removeCookie(name: string)` → Deletes the cookie.\n- `cookies: Record<string, string>` → All cookies as key-value pairs.\n        '}}}},o=()=>{const{getCookie:s,setCookie:t,removeCookie:i,cookies:r}=u(),[n,a]=m("");return d(()=>{t("example_token","123456",{maxAgeMinutes:10})},[t]),e.jsxs("div",{style:{padding:20},children:[e.jsx("h3",{children:"🍪 Cookie Playground"}),e.jsxs("div",{style:{marginBottom:12},children:[e.jsx("input",{type:"text",placeholder:"Set Cookie Value",value:n,onChange:c=>a(c.target.value)}),e.jsx("button",{onClick:()=>t("demo_cookie",n),children:"Set"}),e.jsx("button",{onClick:()=>alert(s("demo_cookie")||"Not Found"),children:"Get"}),e.jsx("button",{onClick:()=>i("demo_cookie"),children:"Remove"})]}),e.jsxs("pre",{style:{background:"#f6f8fa",padding:12},children:[e.jsx("strong",{children:"All Cookies:"}),`
`+JSON.stringify(r,null,2)]})]})};o.parameters={docs:{source:{type:"code"},description:{story:`
📌 **Usage Example:**

\`\`\`js
const { getCookie, setCookie, removeCookie, cookies } = useCookies();

useEffect(() => {
  setCookie("auth_token", "abc123", { maxAgeMinutes: 30 });
}, []);
\`\`\`

This example sets a cookie on mount, and provides UI to get/set/remove a demo cookie.
      `}}};o.__docgenInfo={description:"",methods:[],displayName:"Example"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    getCookie,
    setCookie,
    removeCookie,
    cookies
  } = useCookies();
  const [input, setInput] = useState("");
  useEffect(() => {
    setCookie("example_token", "123456", {
      maxAgeMinutes: 10
    });
  }, [setCookie]);
  return <div style={{
    padding: 20
  }}>
      <h3>🍪 Cookie Playground</h3>

      <div style={{
      marginBottom: 12
    }}>
        <input type="text" placeholder="Set Cookie Value" value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={() => setCookie("demo_cookie", input)}>Set</button>
        <button onClick={() => alert(getCookie("demo_cookie") || "Not Found")}>
          Get
        </button>
        <button onClick={() => removeCookie("demo_cookie")}>Remove</button>
      </div>

      <pre style={{
      background: "#f6f8fa",
      padding: 12
    }}>
        <strong>All Cookies:</strong>
        {"\\n" + JSON.stringify(cookies, null, 2)}
      </pre>
    </div>;
}`,...o.parameters?.docs?.source}}};const h=["Example"];export{o as Example,h as __namedExportsOrder,x as default};
