export { renderers } from "../renderers.mjs";

const page = () => import("./prerender_Ch18S_w6.mjs").then((n) => n.l);

export { page };
