<template>
  <div class="flex items-end justify-between gap-2">
    <div class="data-font">{{ index }}</div>
    <div
      class="glass-title w-3/5 text-right capitalize font-dimension-[0.75rem]"
    >
      {{ label }}
    </div>
  </div>
  <div class="mb-1 mt-2">
    <div class="scale relative flex h-0.5 w-full items-center rounded">
      <span
        class="absolute size-1 rounded-full border-2 bg-current shadow-[0_0_0.2rem_0.1rem] shadow-current"
        :style="{ left: `${progress * 100}%` }"
      ></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = storeToRefs(useDataStore())
const { airQualityIndex } = storeToRefs(useLocaleStore())

const index = computed(() =>
  airQualityIndex.value == 'us-epa-index'
    ? data.value.current.air_quality['us-epa-index']
    : data.value.current.air_quality['gb-defra-index']
)
const usLabels = [
  { w: 'good' },
  { w: 'moderate' },
  { w: 'unhealthy for sensitive group' },
  { w: 'unhealthy' },
  { w: 'very unhealthy' },
  { w: 'hazardous' },
].map((e, i) => ({ ...e, d: ++i }))
const gbLabels = [
  {
    d: 0,
    w: 'low',
  },
  {
    d: 4,
    w: 'moderate',
  },
  {
    d: 7,
    w: 'high',
  },
  {
    d: 10,
    w: 'very high',
  },
]
const labels = computed(() =>
  airQualityIndex.value == 'us-epa-index' ? usLabels : gbLabels
)
const { progress, label } = useProgressWithLabel(labels, index, 1)
</script>

<style scoped>
.scale {
  background: linear-gradient(
    90deg,
    theme(colors.lime.500),
    theme(colors.yellow.500),
    theme(colors.orange.500),
    theme(colors.red.500),
    theme(colors.violet.500)
  );
}
</style>
