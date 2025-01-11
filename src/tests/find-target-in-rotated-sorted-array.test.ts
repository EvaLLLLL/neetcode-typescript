import { findTargetInRotatedSortedArray } from '../problems/find-target-in-rotated-sorted-array'

describe('find-target-in-rotated-sorted-array', () => {
  test('case 1', () => {
    const nums = [3, 4, 5, 6, 1, 2]
    const target = 1
    const result = findTargetInRotatedSortedArray(nums, target)
    expect(result).toBe(4)
  })

  test('case 2', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2]
    const target = 0
    const result = findTargetInRotatedSortedArray(nums, target)
    expect(result).toBe(4)
  })

  test('case 3', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2]
    const target = 3
    const result = findTargetInRotatedSortedArray(nums, target)
    expect(result).toBe(-1)
  })

  test('case 4', () => {
    const nums = [1]
    const target = 0
    const result = findTargetInRotatedSortedArray(nums, target)
    expect(result).toBe(-1)
  })

  test('case 5', () => {
    const nums = [3, 1]
    const target = 1
    const result = findTargetInRotatedSortedArray(nums, target)
    expect(result).toBe(1)
  })
})
