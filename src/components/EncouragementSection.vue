<script setup>
import AppIcon from "./AppIcon.vue";
import SectionHeading from "./SectionHeading.vue";
const quotes = [
  "Bad days do not mean a bad life.",
  "You are allowed to rest without giving up.",
  "Your future deserves the version of you that kept going.",
];
</script>

<template>
  <section class="section encouragement dark-section">
    <div class="ambient-orb orb-one"></div>
    <div class="ambient-orb orb-two"></div>
    <div class="container">
      <SectionHeading
        eyebrow="03 / A REMINDER, ON THE DAYS YOU NEED IT"
        title="Please, Never Give Up On Yourself."
        description="Your story is still being written, Marystella."
      />
      <div class="encouragement-copy" data-reveal>
        <p>
          Your dreams, your education, your career, the life you imagine for
          yourself: they still matter, even in a difficult season. A setback is
          not a verdict on your future.
        </p>
        <p>
          You do not have to have it all figured out. Start small. Ask for help.
          Rest when you need to. Then, when you are ready, try again. Confidence
          can grow slowly; progress can be quiet.
        </p>
        <p>
          I hope you keep believing in yourself, especially while you are still
          becoming. This is about <em>your life and your possibilities.</em> You
          deserve to pursue them, wherever your path leads.
        </p>
      </div>
      <div class="grid grid-three quote-grid">
        <figure
          v-for="(quote, i) in quotes"
          :key="quote"
          class="quote-card"
          data-reveal
          :style="{ '--delay': `${i * 100}ms` }"
        >
          <AppIcon :name="['sun', 'seed', 'sparkle'][i]" :size="26" />
          <blockquote>{{ quote }}</blockquote>
          <figcaption>A LITTLE REMINDER FOR YOU</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
