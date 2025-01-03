import { dailyTemperatures } from '../problems/daily-temperatures'

describe('daily-temperatures', () => {
  test('case 1', () => {
    const temperatures = [30, 38, 30, 36, 35, 40, 28]
    const result = dailyTemperatures(temperatures)
    const expected = [1, 4, 1, 2, 1, 0, 0]
    expect(result).toEqual(expected)
  })

  test('case 2', () => {
    const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
    const result = dailyTemperatures(temperatures)
    const expected = [1, 1, 4, 2, 1, 1, 0, 0]
    expect(result).toEqual(expected)
  })

  test('case 3', () => {
    const temperatures = [30, 40, 50, 60]
    const result = dailyTemperatures(temperatures)
    const expected = [1, 1, 1, 0]
    expect(result).toEqual(expected)
  })

  test('case 4', () => {
    const temperatures = [30, 20, 10]
    const result = dailyTemperatures(temperatures)
    const expected = [0, 0, 0]
    expect(result).toEqual(expected)
  })
})
