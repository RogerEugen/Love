# For Marystella, with love

A personal digital love letter from **Rogers Eugen** to **Marystella Samweli**. Built with Vue 3, the Composition API, JavaScript, Vue Router, and CSS. All artwork and icons are local SVGs; no external fonts, photo services, backend, or paid services are required.

## Run locally

Use Node.js **22.18+ (22.x)** or **24.12+**, as required by the existing Vue/Vite starter.

```bash
cd /home/rogers/Desktop/Love
npm ci
npm run dev
```

Open the local URL Vite prints. It selects another port if 5173 is already busy.

```bash
npm run build
npm run preview
```

The production output is `dist/`.

## The experience

- A full-screen opening and animated “Open My Heart” reveal.
- A dedication, personal letter, encouragement, six unfolding promises, relationship values, and a dreams timeline.
- 24 randomized surprise messages, with no immediate repeats.
- A developer love note, appreciation cards, a calm message for hard days, and an interactive heart with particles and a counter.
- A closing letter, signature, and dynamic year.
- Responsive sticky navigation, mobile menu, section links, reading progress, back to top, subtle pointer parallax, and scroll reveals.
- Keyboard controls, live announcements for messages, reduced-motion support, and a manual animation pause button.

Progress, counters, and opened promises last for the current page visit. Refreshing returns to the opening. Direct links such as `/#message`, `/#promises`, and `/#surprise` open the journey at that section.

## Personalize

| What                                         | Where                                     |
| -------------------------------------------- | ----------------------------------------- |
| Intro and main hero                          | `src/components/HeroSection.vue`          |
| Dedication and reasons                       | `src/components/DedicationSection.vue`    |
| Main personal letter                         | `src/components/LoveLetter.vue`           |
| Encouragement                                | `src/components/EncouragementSection.vue` |
| Surprise messages and promises               | `src/data/messages.js`                    |
| Hopes for the future                         | `src/components/DreamsTimeline.vue`       |
| Final letter and signature                   | `src/components/FinalLetter.vue`          |
| Colors, type, spacing, breakpoints, motion   | `src/assets/main.css`                     |
| Original landscape and sealed letter artwork | `src/components/RomanticArtwork.vue`      |
| Page title and social description            | `index.html`                              |

To enable music, add **`src/assets/music/love-song.mp3`**, then restart the dev server or rebuild. The button detects the file automatically. Without a track it is disabled and says “soundtrack coming soon.” Audio only starts after a click.

## Deploy on Vercel

1. Push this project to your Git repository and import it into Vercel.
2. Use the **Vite** framework preset, **`npm run build`** as the build command, and **`dist`** as the output directory.
3. Select **Node.js 24.x** (24.12 or newer).
4. Deploy. No environment variables are needed.

`vercel.json` includes the build settings and a history fallback for Vue Router. There is no server or database to host. The page includes `noindex, nofollow` for its personal nature; this discourages indexing but does not make a deployed URL private.

## Verification

`npm run build` succeeds. All 15 content/music components rendered without Vue warnings. A Vue custom-renderer check verified the opening reveal, all six promise toggles, 50 surprise clicks without consecutive repeats, 12 heart clicks, and the mobile menu's expanded state. Those state checks bypass CSS transitions and do not replace browser testing.

A real-browser responsive pass remains unverified at 360, 390, 768, 1024, and 1440px: the available Chromium process could not start under this workspace's sandbox. The layouts include mobile/tablet breakpoints, flexible grids, wrapping code, and reduced-motion CSS.
