<template>
  <div class="flex w-full min-h-screen flex-col">
    <UiDefaultHeader />
    <div class="px-0 md:px-4 lg:px-10 w-full md:pt-4 flex justify-center">
      <div class="w-full lg:w-5xl lg:max-w-5xl">
        <UiSideBar class="float-left" />
        <slot class="float-left" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
