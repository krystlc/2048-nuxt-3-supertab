<template>
  <div
    class="absolute left-1/2 top-1/2 -ml-[125px] h-[300px] w-[250px] -mt-[150px] space-y-2"
  >
    <a
      class="block border shadow-2xl shadow-lime-200 relative"
      href="https://www.codewars.com/dashboard"
      target="_blank"
    >
      <div class="absolute right-4 top-2 text-xs z-30">
        <p v-if="count >= 0">Ads ends in {{ count }}</p>
        <button v-else @click="$emit('close')">Close</button>
      </div>
      <img src="@/assets/gifs/ad2.gif" alt="Play Codewars" />
      <div class="absolute inset-x-0 bottom-0 p-4">
        <p class="text-2xl bg-black/90 border-b">Codewars</p>
        <p class="text-xs">Solve puzzles by filling out the blanks!</p>
      </div>
    </a>
    <div class="relative z-20">
      <button
        class="bg-black rounded py-3 w-full flex flex-col items-center text-indigo-400 border border-indigo-500 hover:bg-indigo-900 transition-colors"
        @click="handlePaywall"
      >
        <span>Tired of the ads?</span>
        <span class="text-lg uppercase text-indigo-200 tracking-widest"
          >Play ad free now!</span
        >
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
