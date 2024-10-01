<template>
  <div class="container mx-auto max-w-md space-y-4 py-4">
    <aside>
      <AdsBanner1 v-if="!hasAccess" />
    </aside>
    <main class="sm:py-4 relative">
      <ClientOnly>
        <BoardView
          :max-moves="maxMoves"
          :pause="showSquareAd && !hasAccess"
          @max-moves="handleMaxMoves"
        />
        <AdsSquare v-if="showSquareAd && !hasAccess" @close="handleAdClose" />
      </ClientOnly>

      <section class="prose prose-invert prose-p:text-sm py-8">
        <h2>How to Play 2048</h2>
        <p>
          2048 is a fun puzzle game where the objective is to slide numbered
          tiles on a grid to combine them and create a tile with the number
          2048. Here's how to play:
        </p>

        <h3>For Mobile Users:</h3>
        <p>
          Swipe in any direction (up, down, left, or right) on your screen to
          move the tiles. When two tiles with the same number touch, they merge
          into one!
        </p>

        <h3>For Desktop Users:</h3>
        <p>
          Use your arrow keys (up, down, left, or right) to move the tiles on
          the grid. Just press the arrow key in the direction you want the tiles
          to move.
        </p>

        <h3>Objective:</h3>
        <p>
          The game ends when you can no longer make a move (i.e., when the grid
          is full and no adjacent tiles have the same value). Your goal is to
          reach the 2048 tile, but don't stop there! You can continue playing to
          achieve even higher scores.
        </p>
      </section>
    </main>
    <aside>
      <AdsBanner1 v-if="!hasAccess" />
    </aside>
  </div>
</template>

<script setup lang="ts">
import { hasAccess } from "~/composables/supertab";

const maxMoves = process.env.NODE_ENV === "development" ? 2 : 48;

useHead({
  title: "2048: Cyber Fusion Edition",
  meta: [
    {
      content: "2048: Cyber Fusion Edition",
    },
    {
      hid: "og-image",
      property: "og:image",
      content: "https://enzo.games/splash.png",
    },
  ],
  script: [
    {
      src: "https://onpage-widget.supertab.co/v2/widget.js",
      defer: true,
    },
    {
      src: "https://js.supertab.co/v1/tab.js",
      type: "module",
    },
    {
      src: "./supertab.js",
    },
  ],
});

const showSquareAd = ref(false);
function handleAdClose() {
  showSquareAd.value = false;
}
function handleMaxMoves() {
  showSquareAd.value = true;
}
</script>
