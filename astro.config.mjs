import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), icon(), sitemap()],
  output: "server",
  adapter: netlify(),
  site: "https://darling-trifle-c84866.netlify.app",
  
});