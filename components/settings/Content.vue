<template>
  <div class="settings-wrapper">
    <div class="settings">
      <div class="settings__item">
        asdad
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables.module.scss";

.settings-wrapper {
  @apply flex flex-col w-full rounded-b-xl overflow-hidden bg-white dark:bg-neutral-800;

  @media (max-width: 640px) {
    @apply rounded-none;
  }

  .settings {
    @apply w-full p-2;

    &__item {
      @apply px-2.5 flex items-center rounded-xl cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700;
    }
  }
}
</style>