import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), icon()],
  output: "server",
  adapter: netlify(),
  site: "https://darling-trifle-c84866.netlify.app"
});