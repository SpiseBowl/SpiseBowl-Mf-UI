function parseAllCookies() {
  return document.cookie.split("; ").reduce((acc, cookie) => {
    const [name, ...val] = cookie.split("=");
    acc[name] = decodeURIComponent(val.join("="));
    return acc;
  }, {});
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value, options = {}) {
  let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (options.maxAgeDays !== undefined) {
    cookieStr += `; max-age=${options.maxAgeDays * 24 * 3600}`;
  } else if (options.maxAgeHours !== undefined) {
    cookieStr += `; max-age=${options.maxAgeHours * 3600}`;
  } else if (options.maxAgeMinutes !== undefined) {
    cookieStr += `; max-age=${options.maxAgeMinutes * 60}`;
  } else if (options.maxAge !== undefined) {
    cookieStr += `; max-age=${options.maxAge}`;
  }

  if (options.path) cookieStr += `; path=${options.path}`;
  if (options.domain) cookieStr += `; domain=${options.domain}`;
  if (options.secure) cookieStr += `; secure`;
  if (options.sameSite) cookieStr += `; samesite=${options.sameSite}`;

  document.cookie = cookieStr;
}

function removeCookie(name, options = {}) {
  setCookie(name, "", { ...options, path: "/", maxAge: 0 });
}

export const cookies = { getCookie, setCookie, removeCookie, parseAllCookies };
