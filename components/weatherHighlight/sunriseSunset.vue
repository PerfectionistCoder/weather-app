<template>
  <HighlightSemicircle>
    <svg
      v-for="i in 2"
      :key="i"
      viewBox="0 0 100 100"
      :style="`rotate: ${isDay ? deg : -90}deg`"
      class="first:blur-sm"
    >
      <defs>
        <linearGradient id="dash">
          <stop offset="50%" stop-color="currentColor" :class="glowColor" />
          <stop offset="50%" stop-color="currentColor" :class="`${dimColor}`" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        :r="r"
        fill="none"
        stroke="url('#dash')"
        stroke-width="0.05rem"
        stroke-dasharray="2.5 2"
      />
    </svg>
    <div
      v-if="isDay"
      class="overflow-hidden"
      :style="{
        width: `${sizePercent}%`,
        height: `${sizePercent}%`,
        'mask-image': `linear-gradient(90deg,black ${progress * 100}%,transparent ${progress * 100}%)`,
      }"
    >
      <div class="flex items-center justify-center">
        <span
          class="absolute -mt-32 size-32 rounded-full bg-current blur-[32px]"
          :class="glowColor"
        ></span>
      </div>
    </div>
    <div
      v-if="isDay"
      :style="{
        height: `${sizePercent}%`,
        rotate: `${deg}deg`,
      }"
    >
      <div class="flex items-center justify-center">
        <Icon
          name="tabler:sun-filled"
          class="absolute text-[1.5rem]"
          :class="glowColor"
        ></Icon>
      </div>
    </div>
  </HighlightSemicircle>
  <FooterLabel>
    <div class="relative flex items-center justify-center">
      <div
        :class="`absolute flex justify-between`"
        :style="{ width: `calc(${sizePercent}%)` }"
      >
        <div
          v-for="i in 2"
          :key="i"
          :class="`flex items-center justify-center`"
        >
          <div
            class="absolute h-1 w-3 rounded-sm bg-current shadow-[0_0_0.5rem] shadow-current"
            :class="glowColor"
          ></div>
        </div>
      </div>
      <span class="separator h-[1px]"></span>
    </div>
    <div class="h-full"></div>
    <div class="flex w-full justify-between">
      <div
        v-for="(value, key) in icons"
        :key="key"
        class="flex flex-col gap-0.5 first:items-start last:items-end"
      >
        <Icon :class="`-mb-1 text-[1.5rem] ${dimColor}`" :name="`wi:${value}`">
        </Icon>
        <div
          class="font-bold capitalize font-dimension-[0.6rem]"
          :class="glowColor"
        >
          {{ value }}
        </div>
        <div class="font-bold font-dimension-[0.7rem]">
          {{
            new Date(bound[key]).toLocaleTimeString(locale, {
              hour: '2-digit',
              minute: '2-digit',
            })
          }}
        </div>
      </div>
    </div>
  </FooterLabel>
</template>

<script lang="ts" setup>
const { data } = storeToRefs(useDataStore())
const { locale } = storeToRefs(useLocaleStore())
const { timestamp } = storeToRefs(useNowStore())
// const timestamp = ref(new Date().setHours(9))

const parseTime = (str: string) => {
  const [hr, min, dayPeriod] = str
    .split(':')
    .join(' ')
    .split(' ')
    .map((e) => Number(e) || e) as [number, number, string]
  return new Date(timestamp.value).setHours(
    (dayPeriod.toLowerCase() == 'pm' ? 12 : 0) + hr,
    min
  )
}

const icons = {
  min: 'sunrise',
  max: 'sunset',
} as const
const bound = computed(() => ({
  min: parseTime(data.value.forecast.forecastday[0].astro[icons.min]),
  max: parseTime(data.value.forecast.forecastday[0].astro[icons.max]),
}))
const isDay = computed(
  () => bound.value.min < timestamp.value && timestamp.value < bound.value.max
)

const sizePercent = 80
const r = 50 * (sizePercent / 100)

const glowColor = 'text-yellow-400'
const dimColor = 'text-[color-mix(in_srgb,white,transparent_70%)]'

const progress = computed(
  () =>
    (timestamp.value - bound.value.min) / (bound.value.max - bound.value.min)
)
const tan = computed(() => {
  const x = progress.value
  const y = Math.sqrt(0.25 - Math.pow(x - 0.5, 2))
  return Math.atan(-y / Math.abs(0.5 - x)) * (180 / Math.PI)
})
const deg = ref(progress.value < 0.5 ? -(90 + tan.value) : 90 + tan.value)
</script>

<style></style>
