<template>
  <div class="relative">
    <div
      class="absolute flex h-full w-full items-center justify-center overflow-hidden"
    >
      <slot name="bg"/>
    </div>
    <div
      class="glassmorphism relative left-0 top-0 h-full w-full rounded-[1.2rem] p-4"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
