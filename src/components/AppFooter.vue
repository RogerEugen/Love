<script setup>
import AppIcon from "./AppIcon.vue";
const year = new Date().getFullYear();
</script>

<template>
  <footer class="app-footer container">
    <a class="footer-brand" href="#home"
      >Rogers <span>×</span> Marystella<AppIcon name="heart" :size="16"
    /></a>
    <p>Built with Vue.js, caffeine &amp; love.</p>
    <span>© {{ year }} · Rogers Eugen × Marystella Samweli</span>
  </footer>
</template>
