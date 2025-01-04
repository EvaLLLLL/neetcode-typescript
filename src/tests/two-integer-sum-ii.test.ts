import { twoIntegerSumIi } from '../problems/two-integer-sum-ii'

describe('two-integer-sum-ii', () => {
  test('case 1', () => {
    const numbers = [1, 2, 3, 4]
    const target = 3
    expect(twoIntegerSumIi(numbers, target)).toEqual([1, 2])
  })

  test('case 2', () => {
    const numbers = [2, 7, 11, 15]
    const target = 9
    expect(twoIntegerSumIi(numbers, target)).toEqual([1, 2])
  })

  test('case 3', () => {
    const numbers = [1, 3, 4, 5, 7, 10, 11]
    const target = 9
    expect(twoIntegerSumIi(numbers, target)).toEqual([3, 4])
  })

  test('case 4', () => {
    const numbers = [1, 2, 3, 4, 4, 9, 56, 90]
    const target = 8
    expect(twoIntegerSumIi(numbers, target)).toEqual([4, 5])
  })

  test('case 5', () => {
    const numbers = [5, 25, 75]
    const target = 100
    expect(twoIntegerSumIi(numbers, target)).toEqual([2, 3])
  })
})
