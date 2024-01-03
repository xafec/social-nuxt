<template>
  <div class="flex w-full h-full flex-col">
    <UiDefaultHeader />
    <div class="layout">
      <div class="layout__aside">
        <UiSideBar />
      </div>
      <div class="layout__main">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/variables.module.scss";

.layout {
  display: grid;
  width: 100%;
  grid-template-columns: $layout-sidebar-width $layout-max-content-width;
  margin: 0 auto;
  max-width: $layout-max-width;
  justify-content: space-between;

  &__aside {
    height: 100%;
    padding-top: $layout-offset-y;
  }

  &__main {
    height: 100%;
    padding-top: $layout-offset-y;
  }
}
</style>

<script lang="ts" setup></script>
