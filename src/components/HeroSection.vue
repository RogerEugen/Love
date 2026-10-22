<script setup>
import AppIcon from "./AppIcon.vue";
import RomanticArtwork from "./RomanticArtwork.vue";
defineProps({ opened: Boolean });
defineEmits(["open", "journey"]);
</script>

<template>
  <section id="home" class="hero container">
    <div class="hero-copy">
      <span class="hero-label"
        ><span class="tiny-line"></span> ONE WEBSITE. ONE SPECIAL PERSON.</span
      >
      <Transition name="hero-text" mode="out-in">
        <div :key="opened">
          <h1 v-if="!opened">
            A little corner of<br class="desktop-break" />
            the internet,<br /><em>just for you.</em>
          </h1>
          <h1 v-else>
            Hey Marystella,<br />I made something<br /><em>for you.</em>
          </h1>
          <p v-if="!opened" class="hero-description">
            For Marystella Samweli. A little collection of feelings,<br
              class="desktop-break"
            />
            quiet promises, and reminders you can come back to.<br
              class="desktop-break"
            />
            Made by someone who’s really glad you exist.
          </p>
          <p v-else class="hero-description">
            I spend my days building systems and solving problems.<br
              class="desktop-break"
            />
            This one is different. No client. No deadline. No assignment.<br
              class="desktop-break"
            />
            Just a developer, his heart, and you.
          </p>
        </div>
      </Transition>
      <button
        class="button button-primary hero-cta"
        @click="opened ? $emit('journey') : $emit('open')"
      >
        <AppIcon :name="opened ? 'arrow' : 'heart'" :size="18" />{{
          opened ? "Start the Journey" : "Open My Heart"
        }}<AppIcon name="arrow" :size="17" />
      </button>
      <div class="hero-meta">
        <span class="vue-dot"></span> Built with Vue.js + Love
        <span class="meta-divider"></span><span>100% for you</span>
      </div>
      <p class="hero-byline">
        Made with love, code, and a little bit of madness by Rogers.
      </p>
    </div>
    <RomanticArtwork />
    <div class="hero-bottom">
      <span>A LITTLE TIME. A LITTLE CODE. A LOT OF HEART.</span
      ><button @click="opened ? $emit('journey') : $emit('open')">
        {{
          opened
            ? "There’s more, keep going"
            : "Your little journey starts here"
        }}<AppIcon name="down" :size="16" /></button
      ><span class="hero-bottom-heart"
        ><AppIcon name="heart" :size="15" /> FROM ROGERS, WITH LOVE</span
      >
    </div>
  </section>
</template>
