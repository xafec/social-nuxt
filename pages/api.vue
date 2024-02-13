<template>
  <div>
    Молодец)))))))))))))))))))))
  </div>
</template>

<script lang="ts" setup>
onMounted(() => {
  useHead({
    title: "Гений)))))))))))))))))))))))))))))))))",
  });

  useToast().add({
    title: "Достижение получено!",
    description: "Шаловливые ручки",
    avatar: { src: "https://pluspng.com/img-png/xbox-logo-png-xbox-logo-png-image-purepng-free-transparent-cc0-png-image-library-800x800.png" },
    color: "green",
    id: "success",
    timeout: 8000,
  });
})
</script>

<style></style>