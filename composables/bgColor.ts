import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '~/tailwind.config'
const {
  theme: { colors },
} = resolveConfig(tailwindConfig)

export const useBgColor = (is_day: Ref<number>) => {
  const theme = computed(() =>
    is_day.value
      ? [colors.amber[400], colors.rose[400], colors.orange[400]]
      : [colors.purple[400], colors.blue[600], colors.sky[500]]
  )
  return theme
}
