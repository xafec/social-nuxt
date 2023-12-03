<template>
  <div class="w-full">
    <h1 class="text-3xl font-bold mb-6 text-black text-center dark:text-white">
      Login
    </h1>
    <h1
      class="text-sm font-semibold mb-6 text-zinc-500 text-center dark:text-zinc-400"
    >
      Enter your username and password
    </h1>
    <form class="space-y-4">
      <div>
        <label
          class="block text-sm font-medium text-zinc-700 dark:text-white"
          for="username"
          >Username</label
        >
        <input
          id="username"
          class="mt-1 p-2 w-full border border-zinc-500 rounded-md focus:border-zinc-200 focus:outline-none transition-colors duration-300 dark:bg-zinc-800 dark:text-white"
          name="username"
          type="text"
          v-model="username"
        />
      </div>
      <div>
        <label
          class="block text-sm font-medium text-zinc-700 dark:text-white"
          for="password"
          >Password</label
        >
        <input
          id="password"
          class="mt-1 p-2 w-full border border-zinc-500 rounded-md focus:border-zinc-200 focus:outline-none transition-colors duration-300 dark:bg-zinc-800 dark:text-white"
          name="password"
          type="password"
          v-model="password"
        />
      </div>
      <div>
        <button
          class="w-full bg-black text-white p-2 rounded-md hover:bg-zinc-800 focus:bg-black outline-none transition-colors duration-300 dark:bg-zinc-800 dark:hover:bg-zinc-100 dark:hover:text-black font-bold"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
    <div
      class="mt-4 text-sm text-zinc-600 text-center dark:text-zinc-400 font-semibold"
    >
      <p>
        Don't have an account?
        <span
          class="text-black hover:underline cursor-pointer dark:text-white font-semibold"
          @click="$router.push({ name: 'signup' })"
          >Sign Up here</span
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const username = ref("");
  const password = ref("");
  useHead({
    title: "Login Page - Nuxt.js + Tailwind",
  });

  definePageMeta({
    layout: "auth",
  });
</script>

<style></style>
