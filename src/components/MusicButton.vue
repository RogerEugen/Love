<script setup>
import { ref, onUnmounted } from "vue";
import AppIcon from "./AppIcon.vue";
// Add the file here and restart Vite. No request is made when it is absent.
const tracks = import.meta.glob("../assets/music/love-song.mp3", {
  eager: true,
  query: "?url",
  import: "default",
});
const source = Object.values(tracks)[0];
const audio = ref(null);
const playing = ref(false);
const failed = ref(false);
async function toggle() {
  if (!audio.value) return;
  if (playing.value) audio.value.pause();
  else {
    try {
      await audio.value.play();
    } catch {
      failed.value = true;
      playing.value = false;
    }
  }
}
onUnmounted(() => audio.value?.pause());
</script>

<template>
  <div class="music-control">
    <audio
      v-if="source"
      ref="audio"
      :src="source"
      loop
      preload="none"
      @play="playing = true"
      @pause="playing = false"
      @error="
        failed = true;
        playing = false;
      "
    ></audio
    ><button
      class="music-button"
      :disabled="!source || failed"
      :aria-pressed="playing"
      :title="
        !source
          ? 'Our soundtrack is coming soon'
          : failed
            ? 'This track could not be played'
            : 'Play or pause our mood'
      "
      @click="toggle"
    >
      <span class="music-icon"
        ><AppIcon :name="playing ? 'pause' : 'music'" :size="17" /></span
      ><span
        >{{
          failed
            ? "Track unavailable"
            : playing
              ? "Pause our mood"
              : "Play our mood"
        }}<small v-if="!source">soundtrack coming soon</small></span
      ><span v-if="playing" class="music-equalizer" aria-hidden="true"
        >ııı</span
      >
    </button>
  </div>
</template>
