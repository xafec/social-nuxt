<template>
  <div class="sidebar">
    <div class="sidebar__main">
      <NuxtLink v-for="link in links" :key="link.name" :to="link.link" class="sidebar-item">
        <UIcon :name="link.icon" class="sidebar-item__icon" dynamic />
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
let links: any[] = [
  {
    name: "Профиль",
    link: "/u/",
    icon: "i-heroicons-user-circle-solid",
    action: "navigate"
  },
  {
    name: "Новости",
    link: "/",
    icon: "i-heroicons-newspaper-solid",
    action: "navigate"
  },
  {
    name: "Настройки",
    link: "/",
    icon: "i-heroicons-cog-6-tooth-solid",
    action: "navigate"
  },
  {
    name: "Выход",
    link: "/auth/signout",
    icon: "i-heroicons-arrow-left-end-on-rectangle-16-solid",
    action: "signout"
  }
];
</script>

<style lang="scss" scoped>
.sidebar {
  @apply h-full grid grid-cols-[1fr_auto];

  &__main {
    @apply px-2.5;

    .sidebar-item {
      @apply h-11 dark:text-neutral-100 font-medium text-neutral-700 px-2.5 flex items-center rounded-xl cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800;

      &__icon {
        @apply text-2xl mr-3;
      }

      &:not(:last-child) {
        @apply mb-1;
      }
    }

  }
}
</style>
