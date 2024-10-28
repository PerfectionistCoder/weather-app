<template>
  <div class="flex items-end justify-between">
    <div>
      <span class="data-font">{{
        localeDistance(data.current, 'vis')
      }}</span>
      <span class="unit-font">{{ distanceSymbol }}</span>
    </div>
    <div class="mb-1 flex w-1/2 flex-col items-end gap-1.5">
      <div class="glass-title capitalize font-dimension-[0.75rem]">
        {{ label }}
      </div>
      <div class="glass-title relative w-full">
        <div class="absolute flex h-full w-full items-end">
          <div
            class="relative flex items-end justify-center"
            :style="{
              left: `${progress * 100}%`,
            }"
          >
            <span
              class="glass-title absolute h-1.5 w-0.5 rounded-sm bg-current shadow-[0_0_0.2rem_0.1rem] shadow-current"
            ></span>
          </div>
        </div>
        <div class="flex justify-between">
          <span
            v-for="i in 9"
            :key="i"
            class="glass-subtle [&:is(:first-child,:last-child)]:glass-title h-1 w-[1px] bg-current"
          ></span>
        </div>
        <div class="h-[1px] w-full justify-between bg-current"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = storeToRefs(useDataStore())
const { distanceSymbol } = storeToRefs(useLocaleStore())
const {localeDistance} = useLocaleStore()

const distance = computed(() => data.value.current.vis_km)
const labels = [
  {
    d: 0,
    w: 'very low',
  },
  {
    d: 1,
    w: 'low',
  },
  {
    d: 3,
    w: 'moderate',
  },
  {
    d: 10,
    w: 'clear',
  },
  {
    d: 20,
    w: 'very clear',
  },
]
const { progress, label } = useProgressWithLabel(labels, distance)
</script>

<style></style>
