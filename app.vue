<template>
  <div>
    <NuxtLink v-for="link in links" :key="link" :to="link">{{ link }}</NuxtLink>
    <NuxtPage />
  </div>
</template>

<script setup>
const links = ['/', '/regular-page', '/page-setup'];
</script>
