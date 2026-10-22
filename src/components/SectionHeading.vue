<script setup>
defineProps({
  eyebrow: String,
  title: String,
  description: String,
  align: { type: String, default: "center" },
});
</script>

<template>
  <header class="section-heading" :class="{ 'align-left': align === 'left' }">
    <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
    <slot />
  </header>
</template>
