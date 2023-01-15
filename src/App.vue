<script setup>
import HomeVue from './pages/Home.vue';
</script>

<template>
  <HomeVue />
</template>

<style>
/* @import url("./assets/Raleway.ttf"); */
@tailwind base;
@tailwind components;
@tailwind utilities;


@font-face {
  font-family: "Raleway";
  src: url("./assets/Raleway.ttf");
}

@layer {
  html {
    font-family: "Raleway";
    scroll-behavior: smooth;
  }
}
</style>
