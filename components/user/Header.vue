<template>
  <div class="profile">
    <div class="profile-cover">
      <div class="profile-cover__image">
        <img v-if="user.bannerUrl" alt="cover" :src="user.bannerUrl" />
      </div>
    </div>
    <div class="profile-info">
      <div class="profile-info__header">
        <div class="profile-info__avatar">
          <img v-if="user.avatarUrl" alt="Logo" :src="user.avatarUrl" />
        </div>
        <div class="profile-info__actions">
          <button v-if="useMyAuthStore().username !== user.username" class="button button__primary button__size-m">
            Написать
          </button>
          <UPopover :popper="{ placement: 'bottom-end' }" :ui="{ rounded: 'rounded-xl' }"
            v-if="useMyAuthStore().username !== user.username">
            <button class="h-9 button button__secondary button__size-m ml-2 button__icon">
              <UIcon name="i-heroicons-ellipsis-horizontal-20-solid" class="w-5 h-5" />
            </button>
            <template #panel>
              <div class="popover">
                <div class="popover__item">
                  <UIcon name="i-heroicons-flag-solid" class="popover__item__icon" />
                  Пожаловаться
                </div>
              </div>
            </template>
          </UPopover>
        </div>
      </div>
      <h1 class="profile-info__name">
        <span class="text-blue-500">{{ user.username }}</span>
        {{ user.name ? user.name : "" }}
      </h1>
      <div class="profile-info__description">
        {{ user.description ? user.description : "" }}
      </div>
      <!-- <div class="profile-info__stats">
        <div class="profile-info__stat">
          {{ user.followers.length }} подписчиков 
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables.module.scss";
@import "~/assets/scss/button.module.scss";

.profile {
  @apply flex flex-col w-full md:rounded-xl rounded-b-xl overflow-hidden bg-white dark:bg-neutral-800;

  .profile-cover {
    @apply overflow-hidden aspect-[640/200] bg-neutral-200 dark:bg-neutral-700;

    &__image {
      @apply max-w-none h-full;

      img {
        --cover-offset-y: 39%;
        @apply object-cover w-full h-full;
        object-position: 0 var(--cover-offset-y, 50%);
      }
    }
  }

  .profile-info {
    padding: 0 $layout-content-offset-x;

    &__header {
      @apply flex gap-2 items-end mb-3
    }

    &__avatar {
      @apply w-24 h-24 -mt-9 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_0_3px] dark:shadow-neutral-800 shadow-white;
    }

    &__actions {
      @apply flex mt-2 ml-auto;
    }

    &__name {
      @apply font-bold mb-2;
      font-size: 22px;
      line-height: 30px;
    }

    &__description {
      @apply mb-6;
    }
  }
}

.popover {
  @apply p-1.5 w-[200px];

  &__item {
    @apply p-1.5 cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-800 rounded-md inline-flex items-center w-full;

    &__icon {
      @apply text-xl mr-2;
    }

    &:not(:last-child) {
      @apply mb-1;
    }
  }
}
</style>

