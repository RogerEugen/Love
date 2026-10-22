<script setup>
import { ref } from "vue";
import AppIcon from "./AppIcon.vue";
import SectionHeading from "./SectionHeading.vue";
import { promises } from "../data/messages";
const expanded = ref([]);
function toggle(index) {
  expanded.value = expanded.value.includes(index)
    ? expanded.value.filter((i) => i !== index)
    : [...expanded.value, index];
}
</script>

<template>
  <section id="promises" class="section container">
    <SectionHeading
      eyebrow="04 / THE LITTLE THINGS I WANT TO PRACTICE"
      title="Our Little Promises"
      description="Not a claim of perfection. A commitment to keep trying. Tap a card to unfold it."
    />
    <div class="grid grid-three promise-grid">
      <article
        v-for="(promise, index) in promises"
        :key="promise.title"
        class="promise-card soft-card"
        :class="{ 'is-expanded': expanded.includes(index) }"
        data-reveal
        :style="{ '--delay': `${(index % 3) * 70}ms` }"
      >
        <button
          :aria-expanded="expanded.includes(index)"
          :aria-controls="`promise-${index}`"
          @click="toggle(index)"
        >
          <span class="promise-number">0{{ index + 1 }}</span
          ><AppIcon :name="promise.icon" :size="27" />
          <h3>{{ promise.title }}</h3>
          <span class="promise-hint"
            >{{
              expanded.includes(index)
                ? "Close this promise"
                : "A little more from my heart"
            }}<AppIcon
              :name="expanded.includes(index) ? 'up' : 'arrow'"
              :size="16"
          /></span>
        </button>
        <div
          v-show="expanded.includes(index)"
          :id="`promise-${index}`"
          class="promise-detail"
        >
          <p>{{ promise.detail }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
