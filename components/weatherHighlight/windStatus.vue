<template>
  <div class="flex h-full items-center justify-center *:size-[100px]">
    <div class="relative flex items-center justify-center">
      <div
        class="glass-subtle *:font-dimension-[0.75rem] absolute flex size-[105%] items-center justify-center *:absolute *:font-bold"
      >
        <span class="top-0">N</span>
        <span class="right-0">E</span>
        <span class="bottom-0">S</span>
        <span class="left-0">W</span>
      </div>
      <div
        v-for="n in divider"
        :key="n"
        class="glass-subtle absolute flex w-full items-center justify-between *:h-[1px] *:w-1 *:rounded-sm *:bg-current"
        :class="{ hidden: ((n * 180) / divider) % 90 == 0 }"
        :style="{ rotate: (n * 180) / divider + 'deg' }"
      >
        <span></span>
        <span></span>
      </div>
      <div
        class="flex h-[3px] w-[80%] justify-between text-neutral-50 *:h-full *:w-[25%]"
        :style="{ rotate: data.current.wind_degree + 90 + 'deg' }"
      >
        <div class="flex items-center">
          <span
            style="clip-path: polygon(0% 50%, 100% 0%, 100% 100%, 0% 50%)"
            class="-mr-[1px] h-2 w-3 bg-current"
          ></span>
          <span
            class="h-full w-full bg-[linear-gradient(90deg,currentColor,transparent)]"
          ></span>
        </div>
        <div class="flex items-center">
          <span
            class="h-full w-full rounded-full bg-[linear-gradient(270deg,currentColor,transparent)]"
          ></span>
        </div>
      </div>
      <div class="absolute text-center">
        <div class="font-dimension-[1.25rem] glass-title -ml-1 font-bold">
          {{ data.current.wind_degree }}
          <span class="absolute">&deg;</span>
        </div>
        <div class="font-dimension-[0.75rem] glass-subtle">
          {{ data.current.wind_dir }}
        </div>
      </div>
    </div>
  </div>
  <div class="data-font text-center">
    <span>{{ 25 }}</span>
    <span class="unit-font">{{ speedSymbol }}</span>
  </div>
</template>

<script lang="ts" setup>
const { data } = storeToRefs(useDataStore())
const { speedSymbol } = storeToRefs(useLocaleStore())

const divider = 12
</script>

<style></style>
