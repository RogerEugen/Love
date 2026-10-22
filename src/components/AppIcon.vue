<script setup>
defineProps({
  name: { type: String, default: "heart" },
  size: { type: [Number, String], default: 20 },
});
const paths = {
  heart:
    "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  down: "M12 4v16m-6-6 6 6 6-6",
  up: "M12 20V4m-6 6 6-6 6 6",
  sparkle:
    "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Zm8-2v4m-2-2h4",
  flower:
    "M12 8C3-4-3 13 8 12c-12 7 4 17 4 4 7 12 17-4 4-4 12-7-4-17-4-4Zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
  sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5",
  message: "M21 11.5a8.5 8.5 0 0 1-8.5 8.5H3l2-5a8.5 8.5 0 1 1 16-3.5Z",
  shield: "M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6",
  seed: "M12 22V12M12 16C3 16 2 10 3 6c6-1 10 3 9 10Zm0-4C12 5 16 2 22 3c1 6-3 10-10 9Z",
  infinity: "M12 12c-4-7-10-5-10 0s6 7 10 0 10-5 10 0-6 7-10 0Z",
  check: "m5 12 4 4L19 6",
  code: "m8 5-7 7 7 7m8-14 7 7-7 7M14 3l-4 18",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  music:
    "M9 18V5l12-2v13M9 8l12-2M9 18c0 4-6 5-6 1s6-5 6-1Zm12-2c0 4-6 5-6 1s6-5 6-1Z",
  pause: "M8 5v14M16 5v14",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m6 6 12 12M6 18 18 6",
  plane: "m22 2-7 20-4-9-9-4 20-7ZM11 13 22 2",
  coffee:
    "M3 8h13v7a6.5 6.5 0 0 1-13 0V8Zm13 0h2a3 3 0 0 1 0 6h-2M5 2v2m5-2v2M2 22h17",
};
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path :d="paths[name] || paths.heart" />
  </svg>
</template>
