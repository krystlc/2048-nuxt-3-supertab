<template>
  <div
    class="fixed h-screen inset-0 flex flex-col items-center justify-center gap-4"
  >
    <div class="border shadow-2xl relative">
      <a
        class="block max-w-xs"
        href="https://www.codewars.com/dashboard"
        target="_blank"
      >
        <div class="absolute right-4 top-2 text-xs">
          <p v-if="count >= 0">Ads ends in {{ count }}</p>
        </div>
        <img src="@/assets/gifs/ad2.gif" alt="Play Codewars" />
        <div class="absolute inset-x-0 bottom-0 p-4">
          <p class="text-2xl bg-black/90 border-b">Codewars</p>
          <p class="text-xs">Solve puzzles by filling out the blanks!</p>
        </div>
      </a>
      <button
        v-if="count < 0"
        @click="$emit('close')"
        class="bg-black absolute right-2 top-2"
      >
        Close
      </button>
    </div>
    <div class="relative z-20">
      <button
        class="bg-yellow-300 text-black py-2 px-6 w-full flex justify-between items-center hover:bg-black hover:text-yellow-300"
        @click="handlePaywall"
      >
        <div class="text-left leading-none">
          <div class="text-xs">Tired of the ads?</div>
          <div class="uppercase tracking-widest font-semibold">
            Play ad free!
          </div>
        </div>
        <span class="text-xl">→</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const count = ref(30);

const interval = setInterval(() => count.value--, 1000);

watch(count, (value) => {
  if (value < 0) clearInterval(interval);
});

onBeforeUnmount(() => clearInterval(interval));

defineEmits(["close"]);
</script>
