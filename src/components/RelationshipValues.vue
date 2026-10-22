<script setup>
import SectionHeading from "./SectionHeading.vue";
import AppIcon from "./AppIcon.vue";
const values = [
  [
    "message",
    "Communication",
    "Honest conversations, even when finding the words takes a little time.",
  ],
  [
    "shield",
    "Respect",
    "Two whole people, with feelings, boundaries, and dreams that matter equally.",
  ],
  [
    "heart",
    "Trust",
    "Built in small, consistent actions. Nurtured with honesty and care.",
  ],
  [
    "sun",
    "Patience",
    "Room to breathe, to learn, and to understand each other at a human pace.",
  ],
  [
    "seed",
    "Growth",
    "Encouraging who we are becoming, without asking either of us to disappear.",
  ],
  [
    "flower",
    "Friendship",
    "The comfort of being ourselves. The little laughs. Being on the same team.",
  ],
];
</script>

<template>
  <section class="section values-section">
    <div class="container">
      <SectionHeading
        eyebrow="THE FOUNDATIONS, NOT JUST THE FEELINGS"
        title="Something beautiful. Something grounded."
        description="The kind of love I hope we keep making room for."
      />
      <div class="grid grid-three">
        <article
          v-for="[icon, title, text] in values"
          :key="title"
          class="value-card"
          data-reveal
        >
          <AppIcon :name="icon" :size="25" />
          <div>
            <h3>{{ title }}</h3>
            <p>{{ text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
