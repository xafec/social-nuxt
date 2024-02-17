<template>
  <div class="navbar">
    <div class="navbar__title">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "",
  }
})
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables.module.scss";

.navbar {
  @apply w-full rounded-t-xl overflow-hidden bg-white dark:bg-neutral-800;

  &__title {
    @apply border-b py-4 font-medium border-neutral-200 dark:border-neutral-700;
    padding-right: $layout-content-offset-x;
    padding-left: $layout-content-offset-x;
  }
}
</style>