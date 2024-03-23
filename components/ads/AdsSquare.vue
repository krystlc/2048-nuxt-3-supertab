<template>
  <div
    class="absolute left-1/2 top-1/2 -ml-[125px] h-[300px] w-[250px] -mt-[150px] space-y-2"
  >
    <a
      class="block border shadow-2xl relative"
      href="https://www.codewars.com/dashboard"
      target="_blank"
    >
      <div class="absolute right-4 top-2 text-xs">
        <p v-if="count >= 0">Ads ends in {{ count }}</p>
        <button v-else @click="$emit('close')" class="relative z-50 bg-black">
          Close
        </button>
      </div>
      <img src="@/assets/gifs/ad2.gif" alt="Play Codewars" />
      <div class="absolute inset-x-0 bottom-0 p-4">
        <p class="text-2xl bg-black/90 border-b">Codewars</p>
        <p class="text-xs">Solve puzzles by filling out the blanks!</p>
      </div>
    </a>
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
