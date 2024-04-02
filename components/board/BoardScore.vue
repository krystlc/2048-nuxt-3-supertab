<template>
  <div class="board-score-wrapper">
    <div class="board-score">
      <h5>Score</h5>
      <p>{{ score }}</p>
    </div>
    <div class="board-score">
      <h5>High Score</h5>
      <p>{{ highScore }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["score", "highScore"]);
</script>

<style scoped>
.board-score-wrapper {
  @apply grid grid-cols-2 gap-2 mx-6 mb-4 bg-neutral-900 p-2 rounded;
}
.board-score {
  @apply py-2 px-4 bg-neutral-800 rounded;
}
</style>
