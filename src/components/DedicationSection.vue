<script setup>
import AppIcon from "./AppIcon.vue";
import SectionHeading from "./SectionHeading.vue";
const reasons = [
  {
    icon: "heart",
    title: "Because you matter.",
    text: "Not just on special occasions. On the ordinary, unremarkable Tuesdays, too.",
  },
  {
    icon: "seed",
    title: "Because I believe in us.",
    text: "In the possibility of something kind, honest, and worth nurturing, one day at a time.",
  },
  {
    icon: "flower",
    title: "Because small things matter.",
    text: "A thoughtful message. A little time. Something made just for you. Love lives here, too.",
  },
  {
    icon: "sun",
    title: "Because you deserve encouragement.",
    text: "A reminder that your dreams are worth pursuing and your effort is worth seeing.",
  },
];
</script>

<template>
  <section id="dedication" class="section container">
    <div class="dedication-card" data-reveal>
      <span class="card-corner corner-top"></span
      ><span class="card-corner corner-bottom"></span>
      <span class="eyebrow">01 / THE REASON BEHIND EVERY LINE</span>
      <AppIcon class="dedication-heart" name="heart" :size="34" />
      <h2>Dedicated to<br /><em>Marystella Samweli.</em></h2>
      <p>
        This simple project is dedicated to the woman who gives ordinary days a
        different meaning.
      </p>
      <p>
        I may write thousands of lines of code, but sometimes finding the right
        words for you is harder than debugging the most complicated system.
      </p>
      <p>So I created this little place instead.</p>
      <span class="handwritten">With all my heart, Rogers Eugen</span>
      <span class="dedication-bottom">NO BIG OCCASION NEEDED. JUST YOU.</span>
    </div>
    <div class="reasons-block">
      <SectionHeading
        eyebrow="A FEW SIMPLE REASONS"
        title="Why I made this."
        description="Some things don’t need a business plan. Just a feeling."
      />
      <div class="grid grid-four">
        <article
          v-for="(reason, index) in reasons"
          :key="reason.title"
          class="reason-card soft-card"
          data-reveal
          :style="{ '--delay': `${index * 70}ms` }"
        >
          <span class="icon-tile"
            ><AppIcon :name="reason.icon" :size="23"
          /></span>
          <h3>{{ reason.title }}</h3>
          <p>{{ reason.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
