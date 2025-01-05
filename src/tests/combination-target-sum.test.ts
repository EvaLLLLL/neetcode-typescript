import { combinationTargetSum } from '../problems/combination-target-sum'

describe('combination-target-sum', () => {
  test('case 1', () => {
    const nums = [2, 5, 6, 9]
    const target = 9
    const result = combinationTargetSum(nums, target)
    expect(result).toEqual(expect.arrayContaining([[2, 2, 5], [9]]))
  })

  test('case 2', () => {
    const nums = [2, 3, 7]
    const target = 7
    const result = combinationTargetSum(nums, target)
    expect(result).toEqual(expect.arrayContaining([[2, 2, 3], [7]]))
  })

  test('case 3', () => {
    const nums = [2, 4, 6]
    const target = 8
    const result = combinationTargetSum(nums, target)
    expect(result).toEqual(
      expect.arrayContaining([
        [2, 2, 2, 2],
        [2, 2, 4],
        [4, 4]
      ])
    )
  })

  test('case 4', () => {
    const nums = [1]
    const target = 2
    const result = combinationTargetSum(nums, target)
    expect(result).toEqual(expect.arrayContaining([[1, 1]]))
  })

  test('case 5', () => {
    const nums = [3, 4, 5]
    const target = 8
    const result = combinationTargetSum(nums, target)
    expect(result).toEqual(
      expect.arrayContaining([
        [3, 5],
        [4, 4]
      ])
    )
  })
})
