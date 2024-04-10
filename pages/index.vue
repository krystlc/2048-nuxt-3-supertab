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
    </main>
    <aside>
      <AdsBanner1 v-if="!hasAccess" />
    </aside>
  </div>
</template>

<script setup lang="ts">
import { hasAccess } from "~/composables/supertab";

const maxMoves = process.env.NODE_ENV === "development" ? 0 : 12;

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
