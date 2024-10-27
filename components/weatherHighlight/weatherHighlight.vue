<template>
  <CustomPanel class="col-span-2">
    <template #default>
      <div class="ml-1 text-xs font-medium">Today's Highlight</div>
      <div
        class="mt-3 grid grid-cols-3 grid-rows-[repeat(2,auto)] gap-3 gap-x-4 gap-y-3"
      >
        <div
          v-for="(col, i) in rows"
          :key="col.name"
          class="glassmorphism flex flex-col rounded-[0.75rem] p-4 pb-2.5 w-[200px]"
          :class="[6 / i >= 3 ? 'h-[200px]' : '']"
        >
          <div
            class="glass-title flex w-full items-center text-xs font-medium capitalize tracking-wider"
          >
            <Icon :name="`tabler:${col.icon}`" class="text-[1.25em]"></Icon>
            <span class="ml-2">{{ col.name }}</span>
          </div>
          <div
            class="flex h-full w-full flex-col"
            :class="{ 'overflow-hidden': 6 / i >= 3 }"
          >
            <div v-if="6 / i < 3" class="h-full min-h-2"></div>
            <component :is="col.component"></component>
          </div>
        </div>
      </div>
    </template>
  </CustomPanel>
</template>

<script lang="ts" setup>
import AirPollution from './airPollution.vue'
import Humidity from './humidity.vue'
import SunriseSunset from './sunriseSunset.vue'
import UVIndex from './UVIndex.vue'
import Visibility from './visibility.vue'
import WindStatus from './windStatus.vue'

const rows = markRaw([
  {
    name: 'wind status',
    icon: 'wind',
    component: WindStatus,
  },
  {
    name: 'UV index',
    icon: 'sun-low',
    component: UVIndex,
  },
  {
    name: 'sunrise & sunset',
    icon: 'sunset-2',
    component: SunriseSunset,
  },
  {
    name: 'humidity',
    icon: 'droplet-half-filled',
    component: Humidity,
  },
  {
    name: 'visibility',
    icon: 'eye',
    component: Visibility,
  },
  {
    name: 'air pollution',
    icon: 'atom',
    component: AirPollution,
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
