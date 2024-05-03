<template>
  <div class="board-score-wrapper">
    <div class="board-score">
      <h5>Attempts</h5>
      <p>{{ attempts }}</p>
    </div>
    <div class="board-score bg-orange-900">
      <h5>Score</h5>
      <p>{{ score }}</p>
    </div>
    <div class="board-score bg-orange-900">
      <h5>High Score</h5>
      <p>{{ highScore }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["score", "highScore", "attempts"]);
</script>

<style scoped>
.board-score-wrapper {
  @apply grid grid-cols-3 gap-2 mb-4 bg-orange-950 p-2 rounded;
}
.board-score {
  @apply py-2 px-4 rounded;
}
h5 {
  @apply text-xs;
}
</style>
