<script setup>
import SectionHeading from "./SectionHeading.vue";
import AppIcon from "./AppIcon.vue";
const dreams = [
  {
    title: "Cheering for each other.",
    text: "Graduations, milestones, first steps. Celebrating the work behind every achievement.",
    icon: "sparkle",
  },
  {
    title: "Building lives we’re proud of.",
    text: "Growing our careers, supporting our dreams, and becoming better people along the way.",
    icon: "seed",
  },
  {
    title: "A little more of the world.",
    text: "Travelling together, taking the scenic route, and finding joy in the unfamiliar.",
    icon: "plane",
  },
  {
    title: "Memories that feel like home.",
    text: "Laughing about old worries. Making new memories. Creating a peaceful life, in our own way.",
    icon: "heart",
  },
];
</script>

<template>
  <section id="dreams" class="section dreams-section container">
    <SectionHeading
      eyebrow="05 / A FEW MAYBES I SMILE ABOUT"
      title="Things I Hope We Experience"
      description="Hopes, not expectations. Possibilities we can choose together, if they feel right for us both."
    />
    <div class="dreams-timeline">
      <article
        v-for="(dream, i) in dreams"
        :key="dream.title"
        class="dream-item"
        data-reveal
      >
        <div class="timeline-marker">
          <AppIcon :name="dream.icon" :size="23" />
        </div>
        <span class="dream-index">CHAPTER 0{{ i + 1 }}</span>
        <h3>{{ dream.title }}</h3>
        <p>{{ dream.text }}</p>
      </article>
    </div>
    <p class="dreams-footnote">
      <AppIcon name="infinity" :size="22" /> No perfect timeline. Just room for
      good things.
    </p>
  </section>
</template>
