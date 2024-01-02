<template>
  <div class="flex flex-col max-w-full md:rounded-2xl rounded-b-2xl overflow-hidden border border-neutral-700">
    <div class="flex flex-col w-full flex-1">
      <div class="w-full overflow-hidden">
        <div class="aspect-[7/3] md:aspect-[6/2] lg:aspect-[3.5/1] w-full h-full bg-neutral-200 dark:bg-neutral-700">
          <img v-if="user.bannerUrl" alt="banner" class="object-cover w-full h-full" :src="user.bannerUrl" />
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center pb-5 md:px-5 md:h-28 dark:bg-neutral-800 bg-white">
        <div
          class="w-32 h-32 -mt-[4rem] md:w-36 md:h-36 md:-mt-[4.5rem] lg:w-40 lg:h-40 lg:-mt-[5rem] rounded-full overflow-hidden border-2 dark:border-neutral-700 border-neutral-200 bg-white dark:bg-neutral-800">
          <img v-if="user.avatarUrl" alt="Logo" class="rounded-full object-cover" :src="user.avatarUrl" />
          <div v-else class="rounded-full flex h-full items-center justify-center">
            <span class="text-5xl font-bold">{{ user.name ? user.name[0] : "" }}{{ user.username[0] }}</span>
          </div>
        </div>
        <div class="flex flex-row md:pl-5 flex-1">
          <div>
            <h1 class="flex text-2xl font-bold mt-2 md:mt-3.5 justify-center md:justify-start">
              {{ user.name ? user.name + "&nbsp;" : "" }}
              <span class="text-blue-500">{{ user.username }}</span>
            </h1>
            <div class="text-gray-500 justify-self-center md:justify-self-start dark:text-gray-300">
              <p class="line-clamp-1">{{ user.bio }}</p>
            </div>
          </div>
        </div>
      </div>
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

<style></style>
