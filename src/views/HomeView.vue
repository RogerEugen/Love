<script setup>
import { ref, onUnmounted } from "vue";
import AppNavbar from "../components/AppNavbar.vue";
import HeroSection from "../components/HeroSection.vue";
import DedicationSection from "../components/DedicationSection.vue";
import LoveLetter from "../components/LoveLetter.vue";
import EncouragementSection from "../components/EncouragementSection.vue";
import PromiseCards from "../components/PromiseCards.vue";
import RelationshipValues from "../components/RelationshipValues.vue";
import DreamsTimeline from "../components/DreamsTimeline.vue";
import SurpriseMessage from "../components/SurpriseMessage.vue";
import DeveloperLove from "../components/DeveloperLove.vue";
import AppreciationSection from "../components/AppreciationSection.vue";
import HardDaysSection from "../components/HardDaysSection.vue";
import HeartInteraction from "../components/HeartInteraction.vue";
import FinalLetter from "../components/FinalLetter.vue";
import AppFooter from "../components/AppFooter.vue";
import MusicButton from "../components/MusicButton.vue";
import AppIcon from "../components/AppIcon.vue";
import { useJourney } from "../composables/useJourney";

const { opened, progress, active, reveal, navigate, motionPaused } =
  useJourney();
const burst = ref(false);
let burstTimer;
let pointerFrame;
function parallax(event) {
  if (
    !window.matchMedia(
      "(hover: hover) and (prefers-reduced-motion: no-preference)",
    ).matches ||
    motionPaused.value
  )
    return;
  cancelAnimationFrame(pointerFrame);
  pointerFrame = requestAnimationFrame(() => {
    document.documentElement.style.setProperty(
      "--pointer-x",
      `${(event.clientX / window.innerWidth - 0.5) * 10}px`,
    );
    document.documentElement.style.setProperty(
      "--pointer-y",
      `${(event.clientY / window.innerHeight - 0.5) * 8}px`,
    );
  });
}
async function openHeart() {
  await reveal();
  burst.value = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  burstTimer = setTimeout(() => {
    burst.value = false;
  }, 1800);
}
onUnmounted(() => {
  clearTimeout(burstTimer);
  cancelAnimationFrame(pointerFrame);
});
</script>

<template>
  <div
    class="love-app"
    :class="{ 'motion-paused': motionPaused }"
    @pointermove="parallax"
  >
    <a class="skip-link" href="#main">Skip to main content</a>
    <div
      class="scroll-progress"
      :style="{ transform: `scaleX(${progress})` }"
      aria-hidden="true"
    ></div>
    <AppNavbar :active="active" @navigate="navigate" />
    <main id="main" tabindex="-1">
      <HeroSection
        :opened="opened"
        @open="openHeart"
        @journey="navigate('dedication')"
      />
      <Transition name="journey"
        ><div v-if="opened" class="journey-content">
          <div class="chapter-divider">
            <span></span><AppIcon name="heart" :size="17" /><span></span>
            <p>A LITTLE JOURNEY THROUGH MY HEART</p>
          </div>
          <DedicationSection />
          <LoveLetter />
          <EncouragementSection />
          <PromiseCards />
          <RelationshipValues />
          <DreamsTimeline />
          <SurpriseMessage />
          <DeveloperLove />
          <AppreciationSection />
          <HardDaysSection />
          <HeartInteraction />
          <FinalLetter />
          <AppFooter /></div
      ></Transition>
    </main>
    <MusicButton />
    <div class="floating-controls">
      <button
        class="icon-button motion-toggle"
        :aria-pressed="motionPaused"
        :aria-label="
          motionPaused
            ? 'Resume decorative animations'
            : 'Pause decorative animations'
        "
        :title="motionPaused ? 'Resume animations' : 'Pause animations'"
        @click="motionPaused = !motionPaused"
      >
        <AppIcon
          :name="motionPaused ? 'sparkle' : 'pause'"
          :size="16"
        /></button
      ><Transition name="fade"
        ><button
          v-if="progress > 0.06"
          class="icon-button back-top"
          aria-label="Back to top"
          @click="navigate('home')"
        >
          <AppIcon name="up" :size="19" /></button
      ></Transition>
    </div>
    <div v-if="burst" class="opening-burst" aria-hidden="true">
      <span
        v-for="i in 16"
        :key="i"
        :style="{ '--i': i, '--drift': `${Math.sin(i) * 100}px` }"
        ><AppIcon
          :name="i % 3 === 0 ? 'sparkle' : 'heart'"
          :size="16 + (i % 4) * 4"
      /></span>
    </div>
  </div>
</template>
