<template>
  <div class="sidebar">
    <div class="sidebar__main">
      <div v-for="link in links" :key="link.name" class="sidebar-item">
        <NuxtLink :to="link.link" class="sidebar-content-link" @click="handleLinkClick(link)">
          <UIcon :name="link.icon" class="sidebar-content-icon" dynamic />
          <span class="sidebar-content-text">{{ link.name }}</span>
        </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
let username = "";
if (process.client) {
  username = useMyAuthStore().username
}

const links = [
  {
    name: "Профиль",
    link: "/user/" + username,
    icon: "i-heroicons-user-circle-solid",
    action: "navigate"
  },
  {
    name: "Новости",
    link: "/",
    icon: "i-heroicons-home-solid",
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
    link: "/",
    icon: "i-heroicons-arrow-left-end-on-rectangle-16-solid",
    action: "signout"
  }
]

function handleLinkClick(link: any) {
  if (link.action === "signout") {
    useMyAuthStore().signout();
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  @apply md:sticky md:top-16 flex md:flex-col md:w-48 w-full bottom-0 absolute z-10;
}

.sidebar-content {
  @apply w-full h-16 md:h-full md:pr-4 flex md:block justify-center md:justify-start border-t md:border-none rounded-t-3xl md:rounded-none;
}

.sidebar-content-list {
  @apply md:mt-0 w-full flex md:flex-col justify-evenly md:justify-start items-center md:items-start;
}

.sidebar-content-item {
  @apply inline-flex items-center md:w-full rounded-md overflow-hidden hover:bg-neutral-200 dark:hover:bg-neutral-800;
}

.sidebar-content-link {
  @apply px-2 py-2 flex items-center h-full w-full;
}

.sidebar-content-icon {
  @apply md:text-[22px] leading-[1.75rem] text-3xl;
}

.sidebar-content-text {
  @apply ml-2.5 hidden md:block text-sm;
}
</style>
