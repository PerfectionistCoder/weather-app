<template>
  <HighlightSemicircle>
    <div
      class="glass-title size-[calc(100%-1.5rem+2px)] border-2 border-current shadow-[0_0_0_0.4rem_var,inset_0_0_0_0.4rem_var] shadow-[rgba(255,255,255,0.1)]"
    ></div>
    <div
      class="glass-subtle flex size-[calc(100%-3.5rem)] items-center font-bold font-dimension-[0.5rem]"
    >
      <div
        v-for="(label, i) in indexes"
        :key="i"
        class="absolute w-full [&:is(:first-child,:last-child)>div]:-translate-y-[0.5em]"
        :style="`rotate: ${(i / (indexes.length - 1)) * 180}deg`"
      >
        <div
          class="w-fit"
          :style="`rotate: ${-((i / (indexes.length - 1)) * 180)}deg`"
        >
          {{ label }}
        </div>
      </div>
    </div>
    <div
      class="size-full"
      :style="{
        'mask-image': `conic-gradient(from -90deg, rgb(0 0 0/0.1), black ${progress * 50 - progress * 5}%)`,
      }"
    >
      <div
        class="size-full"
        :style="{
          'mask-image': `conic-gradient(from ${progress * 180 - 90}deg, transparent 50%, black 50%)`,
        }"
      >
        <div
          class="mask uv-gradient size-full rounded-full border-[1.5rem] border-[transparent]"
        ></div>
      </div>
    </div>
  </HighlightSemicircle>
  <FooterLabel class="text-center">
    <div class="h-full"></div>
    <div class="data-font">
      <span>{{ data.current.uv }}</span>
    </div>
    <span class="unit-font capitalize">{{ table[5] }}</span>
  </FooterLabel>
</template>

<script lang="ts" setup>
const { data } = storeToRefs(useDataStore())

const progress = computed(() => Math.min(1, 11) / 11)
const table = [
  'low',
  'low',
  'low',
  'moderate',
  'moderate',
  'moderate',
  'high',
  'high',
  'very high',
  'very high',
  'very high',
  'extreme',
]
const indexes = ['0', '2', '5', '7', '10', '11+']
</script>

<style scoped>
.mask {
  mask:
    linear-gradient(black 0 0) padding-box,
    linear-gradient(black 0 0);
  mask-composite: exclude;
}
.uv-gradient {
  background: conic-gradient(
      from -90deg,
      theme(colors.lime.500) 0%,
      theme(colors.yellow.500) 10%,
      theme(colors.orange.500) 20%,
      theme(colors.red.500) 35%,
      theme(colors.violet.500) 50%,
      transparent 50%
    )
    border-box;
}
</style>
