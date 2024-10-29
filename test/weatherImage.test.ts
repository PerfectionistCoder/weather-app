import { beforeAll, describe, expect, test } from 'vitest'
import { useWeatherImage, img2Code } from '../composables/weatherImage'
import fs from 'fs'
import path from 'path'

const conditions = await import('../test-weather.json')

const codes = Object.values(conditions.default).map(({ code }) => [code])

describe('Test weather condition is mapped to an image', () => {
  test.each(codes)('code %s', (code) => {
    const d_img = useWeatherImage(toRef(code), toRef(1)).value
    expect(d_img).toBeTruthy()

    const n_img = useWeatherImage(toRef(code), toRef(0)).value
    expect(n_img).toBeTruthy()
  })
})

describe('Check duplicate code', () => {
  test.each(codes)('code %s', (code) => {
    let found = 0
    for (const image of img2Code) {
      found += image.codes.reduce(
        (arr, c) => (c == code.toString() ? ++arr : arr),
        0
      )
    }
    expect(found).toBe(1)
  })
})

describe('Check image exist', () => {
  let files!: string[]
  beforeAll(() => {
    files = fs.readdirSync(path.resolve('./public/images'))
  })
  test.each(img2Code.map(({ name, dn }) => [name, dn]))(
    'image %s',
    (image, dn) => {
      if (dn) {
        expect(files.includes(image + '_d.png')).toBeTruthy()
        expect(files.includes(image + '_n.png')).toBeTruthy()
      } else {
        expect(files.includes(image + '.png')).toBeTruthy()
      }
    }
  )
})

test('Check duplicate image', () => {
  const imgs = [] as string[]
  img2Code.forEach(({ name }) => {
    expect(imgs.includes(name), `Image ${name} has duplicate entry`).toBeFalsy()
    imgs.push(name)
  })
})
