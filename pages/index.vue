<template>
  <div class="container mx-auto max-w-md">
    <header class="text-center space-y-4 px-2 py-2 sm:pt-12">
      <AppBI />
      <AdsBanner1 v-if="!hasAccess" />
    </header>
    <main class="sm:py-4 relative">
      <ClientOnly>
        <BoardView
          :max-moves="12"
          :pause="showSquareAd && !hasAccess"
          @max-moves="handleMaxMoves"
        />
        <AdsSquare
          v-if="showSquareAd && !hasAccess"
          class="absolute left-1/2 top-1/2 -ml-40 w-80 h-80 -mt-40"
          @close="handleAdClose"
          @ad-free="handlePaywall"
        />
      </ClientOnly>
    </main>
    <footer class="text-center space-y-4 px-2 pb-8">
      <AdsBanner1 v-if="!hasAccess" />
      <nav class="text-sm space-x-4">
        <button @click="handlePaywall" class="underline underline-offset-4">
          Donate
        </button>
        <a href="/terms" class="link">Terms & Conditions</a>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "2048: Cyber Fusion Edition",
  meta: [
    {
      content: "2048: Cyber Fusion Edition",
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

const hasAccess = ref(false);
onMounted(() => {
  useEventListener(window, "accessStatus", (ev) => {
    hasAccess.value = (ev as any).detail.access;
  });
});

declare global {
  interface Window {
    widget: {
      showPaywall: () => void;
    };
  }
}

const showSquareAd = ref(false);
function handleAdClose() {
  showSquareAd.value = false;
}
function handleMaxMoves() {
  showSquareAd.value = true;
}

function handlePaywall() {
  if (process.client) {
    window.widget.showPaywall();
  }
}
</script>
