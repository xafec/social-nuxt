<template>
  <div class="flex w-full h-full flex-col">
    <UiHeader />
    <div class="layout">
      <div class="aside aside__left">
        <UiSideBar />
      </div>
      <div class="view">
        <slot />
      </div>
      <div class="aside aside__right"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/variables.module.scss";

.layout {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  margin: 0 auto;
  padding-top: $header-height;
  max-width: $layout-max-content-width;
  justify-content: space-between;

  @media (min-width: 920px) {
    grid-template-columns: $layout-aside-left-width $layout-max-content-width;
    max-width: $layout-middle-width;
  }

  @media (min-width: 1280px) {
    grid-template-columns: $layout-aside-left-width $layout-max-content-width $layout-aside-right-width;
    max-width: $layout-large-width;
  }

  .aside {
    position: sticky;
    top: $header-height;
    height: calc(100vh - $header-height);

    &__left {
      display: none;
      padding-top: $layout-offset-y;

      @media (min-width: 920px) {
        display: block;
      }
    }

    &__right {
      display: none;
      padding-top: $layout-offset-y;

      @media (min-width: 1280px) {
        display: block;
      }
    }
  }

  .view {
    height: 100%;
    padding-top: $layout-offset-y;

    @media (max-width: 660px) {
      @apply pt-0;
    }
  }
}
</style>

<script lang="ts" setup></script>
