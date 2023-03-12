if (process.env.LAYER === "local") console.log("");

const localLayer = process.env.LAYER === "local";
const multipleLayers = process.env.MULTIPLE && process.env.LAYER === "remote";
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
	extends: [
		localLayer ? "test-layer" : "github:BobbieGoede/nuxt-layers-build/test-layer",
		...[multipleLayers ? "github:BobbieGoede/nuxt-layers-build/test-layer-setup" : undefined],
		// github:BobbieGoede/nuxt-basic-project
		// "github:BobbieGoede/nuxt-layers-build/test-layer-setup",
		// "github:BobbieGoede/nuxt-i18n-layer-test",
	],
});
