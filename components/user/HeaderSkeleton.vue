<template>
  <div
    class="flex flex-col max-w-full rounded-2xl overflow-hidden border border-neutral-700"
  >
    <div class="flex flex-col w-full flex-1">
      <div class="w-full overflow-hidden">
        <div
          class="aspect-[7/3] md:aspect-[6/2] lg:aspect-[3.5/1] object-cover w-full h-full bg-neutral-200 dark:bg-neutral-700 animate-pulse"
        ></div>
      </div>
      <div
        class="flex flex-col md:flex-row items-center pb-5 md:px-5 md:h-28 dark:bg-neutral-800 bg-white"
      >
        <div
          class="relative w-32 h-32 -mt-[4rem] md:w-36 md:h-36 md:-mt-[4.5rem] lg:w-40 lg:h-40 lg:-mt-[5rem] rounded-full overflow-hidden border-2 dark:border-neutral-700 border-neutral-300 shadow-lg"
        >
          <div
            class="absolute top-0 rounded-full object-cover dark:bg-neutral-700 w-full h-full bg-neutral-200 z-10"
          ></div>
          <div
            class="absolute top-0 rounded-full object-cover dark:bg-neutral-800 w-full h-full bg-neutral-200 animate-pulse z-20"
          ></div>
        </div>
        <div class="flex flex-row md:pl-5 flex-1">
          <div>
            <div
              class="flex text-2xl font-bold mt-2 md:mt-3.5 justify-center md:justify-start mb-2"
            >
              <div
                class="w-16 h-7 bg-neutral-200 dark:bg-neutral-700 animate-pulse rounded-lg"
              ></div>
              <div
                class="w-24 h-7 bg-neutral-200 dark:bg-neutral-700 animate-pulse ml-2 rounded-lg"
              ></div>
            </div>
            <div
              class="text-neutral-500 justify-self-center md:justify-self-start dark:text-neutral-300"
            >
              <div
                class="w-64 h-4 bg-neutral-200 dark:bg-neutral-700 animate-pulse rounded-lg"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
