<template>
  <div class="artwork" aria-hidden="true">
    <div class="art-orbit"></div>
    <span class="art-spark spark-one">✧</span
    ><span class="art-spark spark-two">✦</span
    ><span class="art-spark spark-three">✧</span>
    <span class="art-caption-top">some things are worth creating.</span>
    <div class="landscape-frame">
      <svg
        class="landscape"
        viewBox="0 0 460 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sky" x2="0.4" y2="1">
            <stop stop-color="#d8c1ca" />
            <stop offset=".52" stop-color="#f3d8ca" />
            <stop offset="1" stop-color="#efd9b8" />
          </linearGradient>
          <linearGradient id="lake" x2="0" y2="1">
            <stop stop-color="#dcc1b1" />
            <stop offset="1" stop-color="#afa9b1" />
          </linearGradient>
          <linearGradient id="mountain" x2="0" y2="1">
            <stop stop-color="#9c8c9c" />
            <stop offset="1" stop-color="#c1a7ad" />
          </linearGradient>
          <radialGradient id="sun-glow">
            <stop stop-color="#fff5db" stop-opacity=".8" />
            <stop offset="1" stop-color="#fff5db" stop-opacity="0" />
          </radialGradient>
          <filter id="paper">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".7"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope=".1" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" mode="soft-light" />
          </filter>
        </defs>
        <g filter="url(#paper)">
          <path fill="url(#sky)" d="M0 0h460v600H0z" />
          <circle cx="288" cy="182" r="120" fill="url(#sun-glow)" />
          <circle cx="288" cy="182" r="39" fill="#fff0d8" />
          <path
            d="M-30 340 63 230l44 34 71-97 111 140 56-62 132 109v135H0Z"
            fill="#b9a7b5"
          />
          <path
            d="m104 272 74-105 111 140-83-42-27-45-23 26-17-7Z"
            fill="#e8d4d0"
          />
          <path
            d="m-20 375 117-97 59 46 83-43 117 99 65-67 80 75v100H0Z"
            fill="url(#mountain)"
          />
          <path
            d="m0 397 68-31 81 25 72-16 82 24 71-28 86 26v203H0Z"
            fill="url(#lake)"
          />
          <path d="M0 377q80 6 132 55l-82 17 65 25L0 502Z" fill="#737c77" />
          <path d="M460 360q-40 15-94 61l30 20-65 20 129 34Z" fill="#7f827c" />
          <path d="M0 472q85 6 160 66l-56 62H0Z" fill="#5c6c66" />
          <path d="M460 492q-108-2-184 108h184Z" fill="#6a746d" />
          <g fill="none" stroke="#f4dfd1" stroke-linecap="round" opacity=".6">
            <path
              d="M230 420h73m-99 18h104m-63 21h83m-142 23h106m-70 20h35m-41 26h76"
            />
          </g>
          <g fill="#52655e">
            <path
              d="m27 403 13-86 16 86Zm14-30 15-71 13 71Zm354 45 12-91 17 91Zm29-22 11-92 17 92Z"
            />
          </g>
          <g fill="none" stroke="#71656c" opacity=".65">
            <path d="m94 150 7-3 7 3m14 13 5-3 5 3" />
          </g>
        </g>
      </svg>
      <div class="landscape-tint"></div>
      <span class="landscape-text"
        >a little world<br /><i>just for you.</i></span
      >
    </div>
    <div class="floating-love">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"
        />
      </svg>
    </div>
    <div class="little-letter">
      <div class="letter-sheet">
        <span>To my favorite person,</span><strong>Marystella</strong>
        <div class="letter-lines"></div>
        <span class="letter-sign">with love, Rogers</span>
      </div>
      <div class="envelope-flap"></div>
      <div class="wax-seal">R <span>♥</span> M</div>
    </div>
    <span class="art-caption-bottom"
      >a small project. a heart full of feelings.</span
    >
  </div>
</template>
