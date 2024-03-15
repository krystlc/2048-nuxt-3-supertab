<template>
  <div class="border shadow-2xl shadow-lime-200">
    <div class="absolute right-4 top-2 text-xs">
      <p v-if="count >= 0">Ads ends in {{ count }}</p>
      <button v-else @click="$emit('close')">Close</button>
    </div>
    <img src="@/assets/gifs/ad2.gif" />
    <div class="absolute inset-x-0 bottom-8 text-center space-y-2">
      <p>Tired of the ads?</p>
      <button
        class="bg-white rounded-full py-2 px-6 inline-block text-2xl text-indigo-600"
        @click="$emit('ad-free')"
      >
        Play ad free now!
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

defineEmits(["close", "ad-free"]);
</script>
