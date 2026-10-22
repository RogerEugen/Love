<script setup>
import AppIcon from "./AppIcon.vue";
</script>

<template>
  <section class="section container developer-section">
    <div class="developer-copy" data-reveal>
      <span class="eyebrow">A DEVELOPER’S LOVE LANGUAGE</span>
      <h2>Love, but make it<br /><em>developer mode.</em></h2>
      <p>
        Some people write poems.<br />I apparently create an entire Vue project.
      </p>
      <p>Different syntax. Same feeling.</p>
      <span class="developer-tag"
        ><AppIcon name="code" :size="17" /> A small project with a very
        important user.</span
      >
    </div>
    <div class="code-editor" data-reveal>
      <div class="editor-title">
        <div class="editor-dots"><i></i><i></i><i></i></div>
        <span>my-heart.js</span><AppIcon name="heart" :size="15" />
      </div>
      <div class="code-body">
        <pre><code><span class="code-comment">// Some things don’t need debugging.</span>
<span class="code-purple">const</span> myHeart = {
  name: <span class="code-green">"Marystella"</span>,
  status: <span class="code-green">"Very Important Person"</span>,
  appreciation: <span class="code-orange">Infinity</span>,
  support: <span class="code-orange">true</span>,
  futureDreams: [
    <span class="code-green">"Growth"</span>, <span class="code-green">"Peace"</span>,
    <span class="code-green">"Success"</span>, <span class="code-green">"Memories"</span>
  ]
}

<span class="code-purple">function</span> <span class="code-yellow">chooseYou</span>() {
  <span class="code-purple">return</span> <span class="code-green">"Again and again ❤️"</span>
}<span class="code-cursor">▍</span></code></pre>
      </div>
      <div class="editor-status">
        <span><span class="status-dot"></span> No bugs. Just feelings.</span
        ><span>JavaScript ♡</span>
      </div>
    </div>
  </section>
</template>
