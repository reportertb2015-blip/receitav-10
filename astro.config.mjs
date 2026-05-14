// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://receitagratis.com", // Atualizado para o seu domínio
	output: "server", // ADICIONE ISSO: Ativa o SSR para que o Cloudflare Workers funcione corretamente
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		mode: "directory", // Recomendado para Cloudflare Pages
		platformProxy: {
			enabled: true,
		},
	}),
});
