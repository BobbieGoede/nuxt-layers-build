if (process.env.LAYER === "local") console.log("");

const local = process.env.LAYER === "local";
const multiple = process.env.MULTIPLE;
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
	extends: [
		local ? "test-layer" : "github:BobbieGoede/nuxt-layers-build/test-layer",
		...[
			multiple
				? local
					? "test-layer-setup"
					: "github:BobbieGoede/nuxt-layers-build/test-layer-setup"
				: undefined,
		],
		// github:BobbieGoede/nuxt-basic-project
		// "github:BobbieGoede/nuxt-layers-build/test-layer-setup",
		// "github:BobbieGoede/nuxt-i18n-layer-test",
	],
});
