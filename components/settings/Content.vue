<template>
  <div class="content">
    <div class="content__header">
      In Development
    </div>
    <div class="h-11 px-2.5 flex items-center rounded-xl cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700">
      asdad
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables.module.scss";

.content {
  @apply w-full;

  &__header {
    @apply border-b py-4 font-medium border-neutral-200 dark:border-neutral-700;
    padding-right: $layout-content-offset-x;
    padding-left: $layout-content-offset-x;
  }

  &__body {}
}
</style>