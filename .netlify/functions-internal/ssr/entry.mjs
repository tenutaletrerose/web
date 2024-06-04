import { renderers } from "./renderers.mjs";
import { manifest } from "./manifest_BucE21mC.mjs";
import * as serverEntrypointModule from "@astrojs/netlify/ssr-function.js";
import { onRequest } from "./_noop-middleware.mjs";

const _page0 = () => import("./chunks/generic_BvSlJfyO.mjs");
const _page1 = () => import("./chunks/dove-siamo_qoXkOnRd.mjs");
const _page2 = () => import("./chunks/le-stanze_C228I-10.mjs");
const _page3 = () => import("./chunks/index_BTbCCpHq.mjs");
const pageMap = new Map([
  ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/dove-siamo.astro", _page1],
  ["src/pages/le-stanze.astro", _page2],
  ["src/pages/index.astro", _page3],
]);

const _manifest = Object.assign(manifest, {
  pageMap,
  renderers,
  middleware: onRequest,
});
const _args = {
  middlewareSecret: "89355439-8190-4dba-b0b9-ba6c34e6e2d3",
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = "start";
if (_start in serverEntrypointModule) {
  serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
