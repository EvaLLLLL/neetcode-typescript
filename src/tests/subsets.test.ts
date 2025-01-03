import { subsets } from '../problems/subsets'

describe('subsets', () => {
  test('case 1', () => {
    const nums = [1, 2, 3]
    const result = subsets(nums)
    const expected = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
    expect(result).toEqual(expect.arrayContaining(expected))
  })

  test('case 2', () => {
    const nums = [0]
    const result = subsets(nums)
    const expected = [[], [0]]
    expect(result).toEqual(expect.arrayContaining(expected))
  })

  test('case 3', () => {
    const nums: number[] = []
    const result = subsets(nums)
    const expected = [[]]
    expect(result).toEqual(expect.arrayContaining(expected))
  })

  test('case 4', () => {
    const nums = [1, 2]
    const result = subsets(nums)
    const expected = [[], [1], [2], [1, 2]]
    expect(result).toEqual(expect.arrayContaining(expected))
  })
})
