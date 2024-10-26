export const useProgressWithLabel = <
  T extends number,
  L extends { d: number; w: string }[],
>(
  _labels: L | Ref<L>,
  index: Ref<T>,
  start = 0
) => {
  const __labels = computed(() => (_labels as Ref)?.value ?? _labels)
  const labels = computed(() => [
    ...__labels.value,
    {
      d: Infinity,
      w: '',
    },
  ])

  const progress = computed(() => {
    const max = __labels.value.at(-1)!.d
    return Math.min(index.value - start, max) / max
  })

  return {
    progress,
    label: computed(() => {
      let i = 0
      while (labels.value[i + 1].d <= index.value) {
        i++
      }
      return labels.value[i].w
    }),
  }
}
