<template>
  <ClientOnly v-if="isFetching === false">
    <UserHeader :user="user" />
  </ClientOnly>

  <UserHeaderSkeleton v-else />
</template>

<script lang="ts" setup>
import errorToasts from "@/utils/errorToasts";
useHead({
  title: "Profile - Nuxt.js + Tailwind",
});

definePageMeta({
  middleware: "auth",
});

const user = ref<any>(null);
const route = useRoute();
const isFetching = ref(true);

onMounted(async () => {
  setTimeout(async () => {
    if (route.params.username) {
      try {
        const data = await $fetch(`/api/user/${route.params.username}`, {
          method: "GET",
        });
        user.value = data;
        isFetching.value = false;
        useHead({
          title: `${user.value.username} - Nuxt.js + Tailwind`,
        });
      } catch (error: any) {
        navigateTo("/");
        errorToasts(error);
      }
    }
  });
});
</script>

<style></style>
