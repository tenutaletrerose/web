import "@astrojs/internal-helpers/path";
import "cookie";
import "kleur/colors";
import "./chunks/astro_Cb7GMhTx.mjs";
import "clsx";
import { compile } from "path-to-regexp";

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose"));
    else if (proc.argv.includes("--silent"));
    else;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [
          key,
          value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F"),
        ];
      }
      return [key, value];
    }),
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments
    .map((segment) => {
      return (
        "/" +
        segment
          .map((part) => {
            if (part.spread) {
              return `:${part.content.slice(3)}(.*)?`;
            } else if (part.dynamic) {
              return `:${part.content}`;
            } else {
              return part.content
                .normalize()
                .replace(/\?/g, "%3F")
                .replace(/#/g, "%23")
                .replace(/%5B/g, "[")
                .replace(/%5D/g, "]")
                .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }
          })
          .join("")
      );
    })
    .join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(
      rawRouteData.segments,
      rawRouteData._meta.trailingSlash,
    ),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute
      ? deserializeRouteData(rawRouteData.redirectRoute)
      : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData),
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
  };
}

const manifest = deserializeManifest({
  adapterName: "@astrojs/netlify",
  routes: [
    {
      file: "dove-siamo/index.html",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/dove-siamo",
        isIndex: false,
        type: "page",
        pattern: "^\\/dove-siamo\\/?$",
        segments: [[{ content: "dove-siamo", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/dove-siamo.astro",
        pathname: "/dove-siamo",
        prerender: true,
        fallbackRoutes: [],
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "le-stanze/index.html",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/le-stanze",
        isIndex: false,
        type: "page",
        pattern: "^\\/le-stanze\\/?$",
        segments: [[{ content: "le-stanze", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/le-stanze.astro",
        pathname: "/le-stanze",
        prerender: true,
        fallbackRoutes: [],
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "index.html",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/",
        isIndex: true,
        type: "page",
        pattern: "^\\/$",
        segments: [],
        params: [],
        component: "src/pages/index.astro",
        pathname: "/",
        prerender: true,
        fallbackRoutes: [],
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: "endpoint",
        isIndex: false,
        route: "/_image",
        pattern: "^\\/_image$",
        segments: [[{ content: "_image", dynamic: false, spread: false }]],
        params: [],
        component: "node_modules/astro/dist/assets/endpoint/generic.js",
        pathname: "/_image",
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: "ignore" },
      },
    },
  ],
  site: "https://darling-trifle-c84866.netlify.app",
  base: "/",
  trailingSlash: "ignore",
  compressHTML: true,
  componentMetadata: [
    [
      "C:/dev/tltr-astro/src/pages/dove-siamo.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "C:/dev/tltr-astro/src/pages/index.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "C:/dev/tltr-astro/src/pages/le-stanze.astro",
      { propagation: "none", containsHead: true },
    ],
  ],
  renderers: [],
  clientDirectives: [
    [
      "idle",
      '(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();',
    ],
    [
      "load",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
    ],
    [
      "media",
      '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();',
    ],
    [
      "only",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
    ],
    [
      "visible",
      '(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event("astro:visible"));})();',
    ],
  ],
  entryModules: {
    "\u0000@astrojs-ssr-virtual-entry": "entry.mjs",
    "\u0000@astro-renderers": "renderers.mjs",
    "\u0000noop-middleware": "_noop-middleware.mjs",
    "\u0000@astrojs-manifest": "manifest_BucE21mC.mjs",
    "\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":
      "chunks/generic_BvSlJfyO.mjs",
    "\u0000@astro-page:src/pages/dove-siamo@_@astro":
      "chunks/dove-siamo_qoXkOnRd.mjs",
    "\u0000@astro-page:src/pages/le-stanze@_@astro":
      "chunks/le-stanze_C228I-10.mjs",
    "\u0000@astro-page:src/pages/index@_@astro": "chunks/index_BTbCCpHq.mjs",
    "/astro/hoisted.js?q=0": "_astro/hoisted.yaU4mD1D.js",
    "@astrojs/preact/client.js": "_astro/client.3JKsRPMq.js",
    "/astro/hoisted.js?q=1": "_astro/hoisted.CjZK31ub.js",
    "C:/dev/tltr-astro/node_modules/@preact/signals/dist/signals.module.js":
      "_astro/signals.module.BTeT1nGY.js",
    "astro:scripts/before-hydration.js": "",
  },
  inlinedScripts: [],
  assets: [
    "/_astro/2.DGs7-Ps1.jpg",
    "/_astro/4.QbDS1uXN.jpg",
    "/_astro/1.CrPqoJo6.jpg",
    "/_astro/3.Bm5UlJSJ.jpg",
    "/_astro/logo-bottom-min.l_i09TCY.svg",
    "/_astro/montserrat-vietnamese-400-normal.BWKK40rE.woff2",
    "/_astro/montserrat-cyrillic-ext-400-normal.vOaqz9CW.woff2",
    "/_astro/montserrat-cyrillic-400-normal.9OhHGxkQ.woff2",
    "/_astro/montserrat-latin-ext-400-normal.omNc5MGi.woff2",
    "/_astro/montserrat-latin-400-normal.BfmCfwfZ.woff2",
    "/_astro/montserrat-vietnamese-400-normal.DoB8ClNE.woff",
    "/_astro/montserrat-cyrillic-ext-400-normal.4z3sNOWE.woff",
    "/_astro/montserrat-cyrillic-400-normal.95VoEncJ.woff",
    "/_astro/montserrat-latin-ext-400-normal.DE2qOTV3.woff",
    "/_astro/montserrat-latin-400-normal.BhTl8mZv.woff",
    "/_astro/logonavbar2.CY4cyyKU.svg",
    "/_astro/dove-siamo.jJuXmzmo.css",
    "/favicon.svg",
    "/_astro/client.3JKsRPMq.js",
    "/_astro/client.Bq2ZrNcO.js",
    "/_astro/hoisted.CjZK31ub.js",
    "/_astro/hoisted.yaU4mD1D.js",
    "/_astro/signals.module.BTeT1nGY.js",
    "/dove-siamo/index.html",
    "/le-stanze/index.html",
    "/index.html",
  ],
  buildFormat: "directory",
  checkOrigin: false,
  rewritingEnabled: false,
});

export { manifest };
