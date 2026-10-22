<script setup>
import AppIcon from "./AppIcon.vue";
import SectionHeading from "./SectionHeading.vue";
</script>

<template>
  <section id="message" class="section letter-section">
    <div class="container">
      <SectionHeading
        eyebrow="02 / WORDS I WANT YOU TO KEEP"
        title="A Message From Me to You"
        description="No perfect words. Just honest ones."
      />
      <article class="love-letter" data-reveal>
        <div class="letter-top">
          <span>A PERSONAL NOTE</span><AppIcon name="mail" :size="22" /><span
            >FROM ROGERS TO MARYSTELLA</span
          >
        </div>
        <span class="letter-greeting">Dear Marystella,</span>
        <p>
          I want you to know that I value you. I value the person you are, the
          things you care about, and the relationship we are building. Having
          you in my life is something I appreciate, even when I do not always
          find the right way to say it.
        </p>
        <p>
          I know relationships are not perfect. We will not always understand
          each other immediately. There may be misunderstandings, difficult
          conversations, and days when we need a little more patience.
        </p>
        <p>
          When that happens, I hope we can pause and talk. I do not want a
          temporary problem to erase the good we have shared before we have had
          a chance to understand it. I want to listen to your side, explain mine
          honestly, and make room for both of our feelings.
        </p>
        <blockquote>
          “I hope we keep choosing understanding, and give each other room to
          grow.”
        </blockquote>
        <p>
          That does not mean ignoring what hurts or staying silent to keep the
          peace. Your boundaries matter. Your choices matter. Whatever we build
          together should feel respectful and freely chosen by both of us.
        </p>
        <p>
          I want us to support each other’s goals, to be friends as well as
          partners, and to become better people along the way. More than
          anything, I genuinely want to see you win in life: in your education,
          your work, your dreams, and the quiet things that make you happy.
        </p>
        <p>
          I am still learning. But I want to keep showing up with honesty, care,
          and the willingness to do better.
        </p>
        <div class="letter-signature">
          <span>With love,</span
          ><strong class="handwritten">Rogers Eugen</strong
          ><AppIcon name="heart" :size="22" />
        </div>
      </article>
    </div>
  </section>
</template>
