<script setup>
import SectionHeading from "./SectionHeading.vue";
import AppIcon from "./AppIcon.vue";
const things = [
  ["Your smile", "The kind of brightness that doesn’t need a reason."],
  ["Your effort", "Even the work that no one else gets to see."],
  ["Your strength", "And the courage it takes to be soft, too."],
  ["Your presence", "Sometimes, just knowing you’re there is enough."],
  ["Your ambition", "The things you’re working toward, in your own way."],
  ["The way you care", "The thoughtfulness in small, ordinary moments."],
  ["The way you keep going", "Even when the next step isn’t easy."],
  ["Our little conversations", "Simple words that make a day feel warmer."],
];
</script>

<template>
  <section class="section appreciation-section">
    <div class="container">
      <SectionHeading
        eyebrow="NOTICED. VALUED. APPRECIATED."
        title="The small things aren’t small."
        description="A few things about you that deserve a little more appreciation."
      />
      <div class="grid grid-four">
        <article
          v-for="([title, text], i) in things"
          :key="title"
          class="appreciation-card"
          data-reveal
          :style="{ '--delay': `${(i % 4) * 60}ms` }"
        >
          <AppIcon
            :name="['flower', 'sun', 'seed', 'heart'][i % 4]"
            :size="23"
          />
          <h3>{{ title }}</h3>
          <p>{{ text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
