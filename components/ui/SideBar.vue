<script setup></script>

<template>
  <div class="sidebar">
    <div class="sidebar-content">
      <ul class="sidebar-content-list">
        <li class="sidebar-content-item">
          <NuxtLink :to="`/user/rasofex`" class="sidebar-content-link">
            <UIcon
              name="i-ph-user-circle"
              class="sidebar-content-icon"
              dynamic
            />
            <span class="sidebar-content-text">Профиль</span>
          </NuxtLink>
        </li>
        <li class="sidebar-content-item">
          <NuxtLink :to="`/`" class="sidebar-content-link">
            <UIcon name="i-ph-house" class="sidebar-content-icon" dynamic />
            <span class="sidebar-content-text">Новости</span>
          </NuxtLink>
        </li>
        <li class="sidebar-content-item">
          <NuxtLink :to="`/`" class="sidebar-content-link">
            <UIcon name="i-ph-gear" class="sidebar-content-icon" dynamic />
            <span class="sidebar-content-text">Настройки</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar {
    @apply sticky top-16 flex flex-col w-48;
  }

  .sidebar-content {
    @apply w-full h-full pr-4;
  }

  .sidebar-content-list {
    @apply mt-2 md:mt-0 flex md:flex-col justify-evenly md:justify-start;
  }

  .sidebar-content-item {
    @apply inline-flex items-center w-full rounded-md overflow-hidden hover:bg-neutral-200 dark:hover:bg-neutral-800;
  }

  .sidebar-content-link {
    @apply px-2 py-2 flex items-center h-full w-full;
  }

  .sidebar-content-icon {
    font-size: 22px;
    line-height: 1.75rem;
  }

  .sidebar-content-text {
    @apply ml-2.5 hidden md:block text-sm;
  }
</style>
