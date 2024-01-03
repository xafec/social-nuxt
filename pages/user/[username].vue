<template>
  <ClientOnly v-if="isFetching === false">
    <UserHeader :user="user" />
  </ClientOnly>

  <UserHeaderSkeleton v-else />
</template>

<script lang="ts" setup>
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
    const { data, error } = await useFetch(
      `/api/user/${route.params.username}`
    );

    if (data.value && !error.value) {
      user.value = data.value;
      isFetching.value = false;
      useHead({
        title: `${user.value.username} - Nuxt.js + Tailwind`,
      })
    } else {
      isFetching.value = true;
      navigateTo("/");
      useToast().add({
        id: "user-not-found",
        title: "Пользователь не найден",
        icon: "i-heroicons-x-circle-solid",
        color: "red",
      });
    }
  });
});
</script>

<style></style>
