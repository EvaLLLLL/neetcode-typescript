import { kthLargestElementInAnArray } from '../problems/kth-largest-element-in-an-array'

describe('kth-largest-element-in-an-array', () => {
  test('case 1', () => {
    const nums = [2, 3, 1, 5, 4]
    const k = 2
    expect(kthLargestElementInAnArray(nums, k)).toBe(4)
  })

  test('case 2', () => {
    const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
    const k = 4
    expect(kthLargestElementInAnArray(nums, k)).toBe(4)
  })

  test('case 3', () => {
    const nums = [3, 2, 1, 5, 6, 4]
    const k = 2
    expect(kthLargestElementInAnArray(nums, k)).toBe(5)
  })

  test('case 4', () => {
    const nums = [1]
    const k = 1
    expect(kthLargestElementInAnArray(nums, k)).toBe(1)
  })

  test('case 5', () => {
    const nums = [2, 1]
    const k = 2
    expect(kthLargestElementInAnArray(nums, k)).toBe(1)
  })
})
