<script setup>
import { ref, onUnmounted } from "vue";
import AppIcon from "./AppIcon.vue";
const count = ref(0);
const particles = ref([]);
const timers = new Set();
const messages = [
  "A little love, delivered.",
  "Another little reminder: you matter.",
  "Sending a little warmth your way.",
  "The heart has excellent uptime.",
  "A tiny hug, in website form.",
  "Still cheering for you, Marystella.",
];
function sendLove() {
  count.value++;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const batch = count.value;
  const next = Array.from({ length: 10 }, (_, i) => ({
    id: `${batch}-${i}`,
    batch,
    x: `${Math.cos((i / 10) * Math.PI * 2) * (65 + Math.random() * 55)}px`,
    y: `${Math.sin((i / 10) * Math.PI * 2) * 85 - 70}px`,
    rotation: `${Math.random() * 80 - 40}deg`,
  }));
  particles.value = [...particles.value.slice(-30), ...next];
  const timer = setTimeout(() => {
    particles.value = particles.value.filter((p) => p.batch !== batch);
    timers.delete(timer);
  }, 1200);
  timers.add(timer);
}
onUnmounted(() => timers.forEach(clearTimeout));
</script>

<template>
  <section class="section heart-section container" data-reveal>
    <span class="eyebrow">NO LOGIC NEEDED FOR THIS PART</span>
    <h2>A little love goes a long way.</h2>
    <p>Click the heart. Consider it a tiny hug.</p>
    <div class="heart-stage">
      <div class="heart-ring"></div>
      <button
        class="heart-button"
        aria-label="Send a little love"
        @click="sendLove"
      >
        <AppIcon :key="count" name="heart" :size="76" /></button
      ><span
        v-for="particle in particles"
        :key="particle.id"
        class="heart-particle"
        :style="{
          '--x': particle.x,
          '--y': particle.y,
          '--rotation': particle.rotation,
        }"
        aria-hidden="true"
        ><AppIcon name="heart" :size="17"
      /></span>
    </div>
    <div class="heart-status" aria-live="polite" aria-atomic="true">
      <strong>Love sent: {{ count }} <span aria-hidden="true">♡</span></strong>
      <p>
        {{
          count
            ? messages[(count - 1) % messages.length]
            : "A small click. A very real feeling."
        }}
      </p>
    </div>
  </section>
</template>
