<template>
  <aside
    class="fixed inset-0 bg-black/10 backdrop-blur-sm"
    :class="modelValue ? 'flex sm:hidden' : 'hidden'"
  >
    <nav class="bg-white text-black p-8 h-full space-y-4">
      <div class="mb-8">
        <CloseIcon class="text-2xl ml-auto" />
      </div>
      <AppBI />
      <ul class="text-2xl space-y-1 font-display">
        <li>
          <NuxtLink to="/">2048</NuxtLink>
        </li>
      </ul>
      <ul>
        <li>
          <NuxtLink to="/terms" class="link">Terms & Conditions</NuxtLink>
        </li>
      </ul>
    </nav>
    <button
      @click="$emit('update:modelValue', false)"
      class="h-full flex-1"
    ></button>
  </aside>
</template>

<script lang="ts" setup>
import CloseIcon from "@/assets/svgs/close.svg";

defineProps(["modelValue"]);

defineEmits(["update:modelValue"]);
</script>

<style scoped>
nav ul li a {
  @apply py-2 px-4 -mx-4 rounded-xl block hover:bg-slate-200;
}
nav ul li a.router-link-active {
  @apply bg-slate-100;
}
</style>
