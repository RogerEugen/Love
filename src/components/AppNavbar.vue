<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import AppIcon from "./AppIcon.vue";
defineProps({ active: String });
const emit = defineEmits(["navigate"]);
const menuOpen = ref(false);
const scrolled = ref(false);
const links = [
  ["Home", "home"],
  ["Dedication", "dedication"],
  ["Message", "message"],
  ["Promises", "promises"],
  ["Dreams", "dreams"],
  ["Surprise", "surprise"],
];
function go(id) {
  menuOpen.value = false;
  emit("navigate", id);
}
function onScroll() {
  scrolled.value = window.scrollY > 24;
}
function onKey(event) {
  if (event.key === "Escape") menuOpen.value = false;
}
onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onKey);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKey);
});
</script>

<template>
  <header
    class="navbar"
    :class="{ 'is-scrolled': scrolled, 'menu-open': menuOpen }"
  >
    <div class="nav-inner container">
      <a
        class="wordmark"
        href="#home"
        aria-label="For Marystella, home"
        @click.prevent="go('home')"
        ><AppIcon name="heart" :size="24" /><span
          >For Marystella<span class="wordmark-dot">.</span></span
        ></a
      >
      <nav
        id="main-navigation"
        class="nav-links"
        :class="{ 'is-open': menuOpen }"
        aria-label="Main navigation"
      >
        <a
          v-for="[label, id] in links"
          :key="id"
          :href="`#${id}`"
          :class="{ active: active === id }"
          :aria-current="active === id ? 'location' : undefined"
          @click.prevent="go(id)"
          >{{ label
          }}<AppIcon v-if="id === 'surprise'" name="sparkle" :size="14"
        /></a>
      </nav>
      <span class="nav-note"
        >a little love, a little code <AppIcon name="heart" :size="13"
      /></span>
      <button
        class="icon-button mobile-toggle"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
        @click="menuOpen = !menuOpen"
      >
        <AppIcon :name="menuOpen ? 'close' : 'menu'" />
      </button>
    </div>
  </header>
</template>
