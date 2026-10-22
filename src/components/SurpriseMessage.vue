<script setup>
import { ref } from "vue";
import SectionHeading from "./SectionHeading.vue";
import AppIcon from "./AppIcon.vue";
import { surpriseMessages } from "../data/messages";
const index = ref(-1);
const count = ref(0);
function surprise() {
  const choices = surpriseMessages
    .map((_, i) => i)
    .filter((i) => i !== index.value);
  index.value = choices[Math.floor(Math.random() * choices.length)];
  count.value++;
}
</script>

<template>
  <section id="surprise" class="section surprise-section">
    <div class="container">
      <SectionHeading
        eyebrow="06 / A LITTLE SOMETHING, JUST BECAUSE"
        title="A pocket full of good words."
        description="For the smile you need, the courage you forgot, or absolutely no reason at all."
      />
      <div class="surprise-box" data-reveal>
        <AppIcon name="sparkle" class="surprise-sparkle" :size="33" />
        <div class="surprise-message" aria-live="polite" aria-atomic="true">
          <Transition name="message" mode="out-in"
            ><p :key="count">
              {{
                index < 0
                  ? "There’s a little message waiting for you…"
                  : surpriseMessages[index]
              }}
            </p></Transition
          >
        </div>
        <button class="button button-primary" @click="surprise">
          <AppIcon name="heart" :size="18" />Tap for a Surprise
          <AppIcon name="sparkle" :size="17" /></button
        ><span class="surprise-caption">{{
          count
            ? `${count} little ${count === 1 ? "reminder" : "reminders"} unwrapped. There’s always another.`
            : "One tap. A little warmth. Repeat whenever you need."
        }}</span>
      </div>
    </div>
  </section>
</template>
