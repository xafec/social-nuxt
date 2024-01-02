<template>
  <div class="auth">
    <h1 class="auth__title">Sign Up</h1>
    <h1 class="auth__subtitle">
      Join our Community with all-time access and for free
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
        <label class="auth__label" for="email">Email</label>
        <input id="email" class="auth__input" name="email" type="text" v-model="state.email" autocomplete="true" />
        <div v-if="errors?.email">
          <span class="auth__error" v-for="error in errors?.email?._errors">{{ error }}</span>
        </div>
      </div>
      <div class="auth__form-group" label="Password" name="password">
        <label class="auth__label" for="password">Password</label>
        <input id="password" class="auth__input" name="password" type="password" v-model="state.password"
          autocomplete="true" />
        <div v-if="errors?.password">
          <span class="auth__error" v-for="error in errors?.password?._errors">{{ error }}</span>
        </div>
      </div>
      <div class="auth__form-group">
        <button class="auth__button" type="submit">
          Sign Up
        </button>
      </div>
    </form>
    <div class="auth__message">
      <p>
        Don't have an account?
        <NuxtLink to="/auth/signin">
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
  email: undefined,
  password: undefined,
});

const schema = z.object({
  username: z.string().min(4, 'Username must have at least 4 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must have at least 6 characters'),
});

type SchemaType = z.infer<typeof schema>;

const errors = ref<z.ZodFormattedError<SchemaType> | null>(null);

const onSubmit = () => {
  const valid = schema.safeParse(state.value);
  if (!valid.success) {
    errors.value = valid.error.format();
  }
  else {
    errors.value = null;
    if (typeof state.value.username === "string" && typeof state.value.email === "string" && typeof state.value.password === "string") {
      useMyAuthStore().signup(state.value.username, state.value.email, state.value.password);
    }
  }
};

useHead({
  title: "Sign Up - Nuxt.js + Tailwind",
});

definePageMeta({
  layout: "auth",
});
</script>

<style lang="scss" scoped>@import "~/assets/scss/auth.module.scss";</style>