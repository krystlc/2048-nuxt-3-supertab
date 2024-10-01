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
        <p class="text-sm mb-4 text-center">
          This game site relies on players like you for support. To hide ads,
          use the "Put it on my Tab" button to pay us 10¢.
        </p>
        <div ref="btnRef"></div>
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

const btnRef = ref();
onMounted(() => {
  window.supertab.createPurchaseButton({
    containerElement: btnRef.value,
    clientId: "client.f2caab29-cc9d-4cdc-aeba-e3034cfdb1f5",
    merchantName: "2048: Cyber Fusion Edition",
    merchantLogoUrl: "https://enzo.games/favicon.ico",
    offeringId: "offering.727d608f-5222-4f24-84cd-48b0f6ad12f4", // optional
    onPurchaseCompleted: () => {
      //insert your code to grant user access
      console.log("Purchase completed!");
      hasAccess.value = true;
    },
    onPriorEntitlement: () => {
      console.log("Prior entitlement granted");
      hasAccess.value = true;
    },
    onPurchaseCanceled: () => {
      //insert your code to handle when purchase is not completed
      console.log("Purchase canceled!");
      hasAccess.value = false;
    },
    onError: () => {
      //insert your code to handle an unexpected error
      console.log("Purchase error!");
      hasAccess.value = false;
    },
    uiConfig: { colors: { text: "#000000ff", background: "#ffffffff" } },
  });
});

onBeforeUnmount(() => clearInterval(interval));

defineEmits(["close"]);
</script>
