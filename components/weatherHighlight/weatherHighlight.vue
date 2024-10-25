<template>
  <CustomPanel class="col-span-2">
    <template #default>
      <div class="ml-1 text-xs font-medium">Today's Highlight</div>
      <div
        class="mt-3 grid grid-cols-3 grid-rows-[repeat(2,auto)] gap-3 gap-x-3 gap-y-2"
      >
        <div
          v-for="(col, i) in row1"
          :key="col.name"
          class="glassmorphism flex flex-col rounded-[0.75rem] p-4 pb-2"
          :class="[6 / i >= 3 ? 'size-[200px]' : 'h-20']"
        >
          <div
            class="glass-title flex items-center text-sm font-medium capitalize tracking-wider"
          >
            <Icon :name="col.icon" class="text-[1.5em]"></Icon>
            <span class="ml-2">{{ col.name }}</span>
          </div>
          <div class="flex h-full flex-col overflow-hidden">
            <component :is="col.component"></component>
          </div>
        </div>
      </div>
    </template>
  </CustomPanel>
</template>

<script lang="ts" setup>
import SunriseSunset from './sunriseSunset.vue'
import UVIndex from './UVIndex.vue'
import WindStatus from './windStatus.vue'

const row1 = markRaw([
  {
    name: 'wind status',
    icon: 'tabler:wind',
    component: WindStatus,
  },
  {
    name: 'UV index',
    icon: 'tabler:sun-low',
    component: UVIndex,
  },
  {
    name: 'sunrise & sunset',
    icon: 'tabler:sunset-2',
    component: SunriseSunset,
  },
])
</script>

<style scoped lang="postcss">
* {
  &:deep(.data-font) {
    @apply font-bold font-dimension-[1.5rem];
  }
  &:deep(.unit-font) {
    @apply glass-subtle ml-1 text-[0.75rem];
  }
}
</style>
