import { twoIntegerSum } from '../problems/two-integer-sum'

describe('two-integer-sum', () => {
  test('case 1', () => {
    const nums = [3, 4, 5, 6]
    const result = twoIntegerSum(nums, 7)
    expect(result).toEqual(expect.arrayContaining([0, 1]))
  })

  test('case 2', () => {
    const nums = [4, 5, 6]
    const result = twoIntegerSum(nums, 10)
    expect(result).toEqual(expect.arrayContaining([0, 2]))
  })

  test('case 2', () => {
    const nums = [5,3,1,1,1,3,73,1]
    const result = twoIntegerSum(nums, 2)
    expect(result).toEqual(expect.arrayContaining([2, 3]))
  })
})
