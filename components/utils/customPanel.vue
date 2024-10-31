<template>
  <div class="relative">
    <div
      class="absolute flex h-full w-full items-center justify-center overflow-hidden *:opacity-20 *:transition-all *:duration-500"
    >
      <slot name="bg" />
    </div>
    <div
      class="glassmorphism relative left-0 top-0 h-full w-full rounded-[1.5rem] p-4 flex flex-col"
    >
      <div class="ml-1 text-xs font-medium capitalize">
        <slot name="title" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
