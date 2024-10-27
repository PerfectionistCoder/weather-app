export const useGetImage = (code: Ref<number | string>, is_day: any) => {
  const img2Code: { name: string; codes: string[]; dn?: true }[] = [
    {
      name: 'clear',
      codes: ['1000'],
      dn: true,
    },
    {
      name: 'cloud',
      codes: ['1003', '1006'],
      dn: true,
    },
    {
      name: 'overcast',
      codes: ['1009'],
    },
    {
      name: 'mist',
      codes: ['1030'],
      dn: true,
    },
    {
      name: 'rain',
      codes: ['1063'],
      dn: true,
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
      ],
      dn: true,
    },
    {
      name: 'heavy_snow',
      codes: ['1207', '1222', '1225', '1252', '1258'],
      dn: true,
    },
    {
      name: 'drizzle',
      codes: ['1072', '1150', '1153', '1168'],
      dn: true,
    },
    {
      name: 'thunder',
      codes: ['1087'],
      dn: true,
    },
    {
      name: 'blowing_snow',
      codes: ['1114'],
    },
    {
      name: 'blizzard',
      codes: ['1117'],
    },
    {
      name: 'fog',
      codes: ['1135', '1147'],
    },
    {
      name: 'heavy_drizzle',
      codes: ['1171'],
      dn: true,
    },
    {
      name: 'rain',
      codes: ['1180', '1183', '1186', '1189', '1201', '1240'],
      dn: true,
    },
    {
      name: 'heavy_rain',
      codes: ['1192', '1195', '1243', '1246'],
    },
    {
      name: 'ice_pellets',
      codes: ['1237', '1261', '1264'],
    },
    {
      name: 'rain_with_thunder',
      codes: ['1273'],
    },
    {
      name: 'heavy_rain_with_thunder',
      codes: ['1276'],
    },
    {
      name: 'snow_with_thunder',
      codes: ['1279'],
    },
    {
      name: 'heavy_snow_with_thunder',
      codes: ['1282'],
    },
  ]
  const imgName = computed(() => {
    for (const img of img2Code) {
      if (img.codes.includes(code.value.toString()))
        return img.name + (img.dn ? (is_day ? '_d' : '_n') : '')
    }
    return ''
  })

  return { imgName }
}
