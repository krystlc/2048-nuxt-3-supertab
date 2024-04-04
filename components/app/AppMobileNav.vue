<template>
  <aside
    class="fixed inset-0 bg-black/10 backdrop-blur-sm"
    :class="modelValue ? 'flex sm:hidden' : 'hidden'"
  >
    <nav class="bg-white text-black p-8 h-full space-y-4">
      <AppBI />
      <ul class="text-4xl font-display space-y-1">
        <li class="">
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
defineProps(["modelValue"]);

defineEmits(["update:modelValue"]);
</script>
