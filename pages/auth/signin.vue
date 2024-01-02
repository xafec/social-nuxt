<template>
  <div class="auth">
    <h1 class="auth__title">Sing In</h1>
    <h1 class="auth__subtitle">
      Enter your username and password
    </h1>
    <form class="auth__form" @submit.prevent="onSubmit">
      <div class="auth__form-group">
        <label class="auth__label" for="username">Username</label>
        <input id="username" class="auth__input" name="username" type="text" v-model="state.username"
          autocomplete="true" />
        <div v-if="errors?.username">
          <span class="auth__error" v-for="error in errors?.username?._errors">{{ error }}</span>
        </div>
      </div>
      <div class="auth__form-group">
        <label class="auth__label" for="password">Password</label>
        <input id="password" class="auth__input" name="password" type="password" v-model="state.password"
          autocomplete="true" />
        <div v-if="errors?.password">
          <span class="auth__error" v-for="error in errors?.password?._errors">{{ error }}</span>
        </div>
      </div>
      <div class="auth__form-group">
        <button class="auth__button" type="submit">
          Sign In
        </button>
      </div>
    </form>
    <div class="auth__message">
      <p>
        Don't have an account?
        <NuxtLink to="/auth/signup">
          <span class="auth__link">Sign Up here</span>
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { z } from "zod";

const state = ref({
  username: undefined,
  password: undefined,
})

const schema = z.object({
  username: z.string().min(4, 'Username must have at least 4 characters'),
  password: z.string().min(6, 'Password must have at least 6 characters'),
})

type SchemaType = z.infer<typeof schema>;

const errors = ref<z.ZodFormattedError<SchemaType> | null>(null);

const onSubmit = () => {
  const valid = schema.safeParse(state.value);
  if (!valid.success) {
    errors.value = valid.error.format();
  }
  else {
    errors.value = null;
    if (typeof state.value.username === "string" && typeof state.value.password === "string") {
      useMyAuthStore().signin(state.value.username, state.value.password, ipAdress(), userAgent());
    }
  }
}
useHead({
  title: "Sign In - Nuxt.js + Tailwind",
});

definePageMeta({
  layout: "auth",
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/auth.module.scss";
</style>
