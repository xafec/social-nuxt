<template>
  <div class="settings">
    <dir class="settings__content">
      <SettingsContent />
    </dir>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables.module.scss";

.settings {
  @apply flex flex-col w-full rounded-xl overflow-hidden bg-white dark:bg-neutral-800;

  @media (max-width: 640px) {
    @apply rounded-none;
  }

  &__content {
    @apply p-0 m-0;
  }
}
</style>