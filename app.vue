<template>
	<div>
		<nav>
			<NuxtLink v-for="link in links" :key="link.path" :to="link.path">{{ link.label }}</NuxtLink>
		</nav>
		<NuxtPage />
	</div>
</template>

<script lang="ts" setup>
const links = [
	{ path: "/", label: "Home" },
	{ path: "/page-regular", label: "Regular page" },
	{ path: "/basic-page", label: "Basic page" },
	{ path: "/page-setup", label: "Page setup" },
];
</script>

<style>
html {
	font-family: sans-serif;
}
nav {
	display: flex;
	gap: 0.5rem;
}

nav a {
	padding: 0.5em;
}
</style>
