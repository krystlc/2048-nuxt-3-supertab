<template>
  <div
    class="fixed h-screen inset-0 flex items-center justify-center bg-black/90 backdrop-blur z-20"
  >
    <div class="max-w-xs space-y-4">
      <div class="border shadow-2xl relative">
        <a
          class="block"
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
          class="group relative inline-block font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
          @click="handlePaywall"
        >
          <span class="absolute inset-0 border border-current"></span>
          <span
            class="block border border-current bg-white py-6 px-12 space-y-1 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
          >
            <span class="text-sm"
              >Tired of the ads? <span class="text-xl">🙈</span></span
            >
            <span class="block text-lg leading-tight"
              >Turn them <span class="font-black">off</span> for just 10¢</span
            >
          </span>
        </button>
      </div>
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
