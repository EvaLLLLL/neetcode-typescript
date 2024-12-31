import { maxWaterContainer } from '../problems/max-water-container'

describe('max-water-container', () => {
  test('case 1', () => {
    const heights = [1, 7, 2, 5, 4, 7, 3, 6]
    const result = maxWaterContainer(heights)
    const expected = 36
    expect(result).toBe(expected)
  })

  test('case 2', () => {
    const heights = [1, 1]
    const result = maxWaterContainer(heights)
    const expected = 1
    expect(result).toBe(expected)
  })

  test('case 3', () => {
    const heights = [4, 3, 2, 1, 4]
    const result = maxWaterContainer(heights)
    const expected = 16
    expect(result).toBe(expected)
  })

  test('case 4', () => {
    const heights = [1, 2, 1]
    const result = maxWaterContainer(heights)
    const expected = 2
    expect(result).toBe(expected)
  })
})
