import { trappingRainWater } from '../problems/trapping-rain-water'

describe('trapping-rain-water', () => {
  test('case 1', () => {
    const heights = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1]
    const result = trappingRainWater(heights)
    const expected = 9
    expect(result).toBe(expected)
  })

  test('case 2', () => {
    const heights = [4, 2, 0, 3, 2, 5]
    const result = trappingRainWater(heights)
    const expected = 9
    expect(result).toBe(expected)
  })

  test('case 3', () => {
    const heights = [1, 1, 1, 1, 1]
    const result = trappingRainWater(heights)
    const expected = 0
    expect(result).toBe(expected)
  })

  test('case 4', () => {
    const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
    const result = trappingRainWater(heights)
    const expected = 6
    expect(result).toBe(expected)
  })

  test('case 5', () => {
    const heights = [4, 2, 3]
    const result = trappingRainWater(heights)
    const expected = 1
    expect(result).toBe(expected)
  })

  test('case 6', () => {
    const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
    const result = trappingRainWater(heights)
    const expected = 6
    expect(result).toBe(expected)
  })
})
