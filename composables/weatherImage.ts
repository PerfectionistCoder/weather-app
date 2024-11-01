export const img2Code: { name: string; codes: string[]; dn?: true }[] = [
  {
    name: 'clear',
    codes: ['1000'],
    dn: true,
  },
  {
    name: 'cloudy',
    codes: ['1003', '1006', '1009'],
  },
  {
    name: 'fog',
    codes: ['1030', '1135', '1147'],
  },
  {
    name: 'rain',
    codes: [
      '1063',
      '1072',
      '1150',
      '1153',
      '1168',
      '1171',
      '1180',
      '1183',
      '1186',
      '1189',
      '1198',
      '1240',
      '1192',
      '1195',
      '1201',
      '1243',
      '1246',
    ],
  },
  {
    name: 'snow',
    codes: [
      '1066',
      '1069',
      '1204',
      '1210',
      '1213',
      '1216',
      '1219',
      '1249',
      '1255',
      '1207',
      '1222',
      '1225',
      '1252',
      '1258',
      '1114',
      '1117',
      '1237',
      '1261',
      '1264',
      '1279',
      '1282',
    ],
  },
  {
    name: 'thunder',
    codes: ['1087'],
  },
  {
    name: 'rain_with_thunder',
    codes: ['1273', '1276'],
  },
]

export const useWeatherImage = (
  code: Ref<number | string>,
  is_day: Ref<number>
) => {
  const imgName = computed(() => {
    for (const img of img2Code) {
      if (img.codes.includes(code.value.toString()))
        return img.name + (img.dn ? (is_day.value ? '_d' : '_n') : '') + '.png'
    }
    return ''
  })

  return imgName
}
