<template>
  <header
    class="flex items-center gap-4 p-4 sticky top-0 left-0 bg-black z-20 border-b border-orange-900"
  >
    <ClientOnly>
      <button @click="showNav = true" class="sm:hidden">
        <img src="@/assets/svgs/menu.svg" class="h-8 w-8 invert" />
      </button>
    </ClientOnly>
    <RouterLink to="/" class="text-white hidden sm:inline-block">
      <AppBI />
    </RouterLink>
    <h1 class="font-display text-2xl">2048: Cyber Fusion Edition</h1>
    <AppMobileNav v-model="showNav" />
  </header>
</template>

<script setup lang="ts">
const showNav = ref(false);

const router = useRouter();
router.beforeEach(() => {
  showNav.value = false;
});
</script>

<style scoped>
nav ul li a {
  @apply py-2 px-4 -mx-4 rounded-xl block hover:bg-slate-200;
}
nav ul li a.router-link-active {
  @apply bg-slate-100;
}
</style>
