import { combinationTargetSum } from '../problems/combination-target-sum'

describe('combination-target-sum', () => {
  test('case 1', () => {
    const nums = [2, 5, 6, 9]
    const target = 9
    const result = combinationTargetSum(nums, target)
    expect(result).toEqual(expect.arrayContaining([[2, 2, 5], [9]]))
    expect(result.length).toBe(2)
  })

  test('case 2', () => {
    const nums = [2, 3, 5]
    const target = 8
    const result = combinationTargetSum(nums, target)
    expect(result).toEqual(
      expect.arrayContaining([
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5]
      ])
    )
    expect(result.length).toBe(3)
  })

  test('case 3', () => {
    const nums = [2]
    const target = 1
    const result = combinationTargetSum(nums, target)
    expect(result).toEqual([])
  })

  test('case 4', () => {
    const nums = [1]
    const target = 1
    const result = combinationTargetSum(nums, target)
    expect(result).toEqual([[1]])
  })
})
