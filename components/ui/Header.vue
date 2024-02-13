<template>
  <div class="header">
    <div class="header__layout">
      <div class="logo">
        <NuxtLink to="/">
          <span class="text-2xl font-mono">Nuxt.js</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "~/assets/scss/variables.module.scss";

.header {
  @apply w-full fixed flex flex-col z-50 justify-center bg-zinc-800;
  height: $header-height;

  &__layout {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    max-width: $layout-max-content-width;

    .logo {
      padding: 0 $layout-content-offset-x;
    }

    @media (min-width: 920px) {
      grid-template-columns: $layout-aside-left-width $layout-max-content-width;
      max-width: $layout-middle-width;
      margin: 0 auto;

      .logo {
        @apply px-5;
      }
    }

    @media (min-width: 1280px) {
      grid-template-columns: $layout-aside-left-width $layout-max-content-width $layout-aside-right-width;
      max-width: $layout-large-width;
    }
  }
}
</style>
