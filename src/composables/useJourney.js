import { ref, onMounted, onUnmounted, nextTick } from "vue";

export function useJourney() {
  const opened = ref(false);
  const progress = ref(0);
  const active = ref("home");
  const motionPaused = ref(false);
  let observer;
  let frame;
  const tracked = [
    "home",
    "dedication",
    "message",
    "promises",
    "dreams",
    "surprise",
  ];
  function measure() {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    progress.value =
      distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
    let current = "home";
    for (const id of tracked) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.38)
        current = id;
    }
    active.value = current;
  }
  function onScroll() {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(measure);
  }
  async function reveal() {
    opened.value = true;
    await nextTick();
    if ("IntersectionObserver" in window) {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.08 },
      );
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => observer.observe(el));
    } else
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));
    measure();
  }
  async function navigate(id, updateUrl = true) {
    if (!opened.value && id !== "home") await reveal();
    await nextTick();
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
    if (updateUrl)
      window.history.replaceState(window.history.state, "", `#${id}`);
  }
  function onHash() {
    const id = window.location.hash.slice(1);
    if (tracked.includes(id)) navigate(id, false);
  }
  onMounted(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onHash);
    onHash();
    measure();
  });
  onUnmounted(() => {
    observer?.disconnect();
    cancelAnimationFrame(frame);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    window.removeEventListener("hashchange", onHash);
  });
  return { opened, progress, active, reveal, navigate, motionPaused };
}
