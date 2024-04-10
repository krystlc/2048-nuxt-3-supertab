<template>
  <header
    class="flex items-center gap-4 p-4 sticky top-0 left-0 bg-black z-20 border-b border-orange-900"
  >
    <ClientOnly>
      <button @click="showNav = true" class="sm:hidden">
        <MenuIcon class="text-3xl !mb-0" filled />
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
import MenuIcon from "@/assets/svgs/menu.svg";
const showNav = ref(false);

const router = useRouter();
router.beforeEach(() => {
  showNav.value = false;
});
</script>
