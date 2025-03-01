import { findMinimumInRotatedSortedArray } from '../problems/find-minimum-in-rotated-sorted-array'

describe('find-minimum-in-rotated-sorted-array', () => {
  test('should find minimum in rotated sorted array', () => {
    expect(findMinimumInRotatedSortedArray([3, 4, 5, 6, 1, 2])).toBe(1)
    expect(findMinimumInRotatedSortedArray([4, 5, 0, 1, 2, 3])).toBe(0)
    expect(findMinimumInRotatedSortedArray([4, 5, 6, 7])).toBe(4)
  })

  test('edge cases', () => {
    // Single element array
    expect(findMinimumInRotatedSortedArray([1])).toBe(1)

    // Two element array
    expect(findMinimumInRotatedSortedArray([2, 1])).toBe(1)
    expect(findMinimumInRotatedSortedArray([1, 2])).toBe(1)

    // Array rotated n times (back to original)
    expect(findMinimumInRotatedSortedArray([1, 2, 3, 4, 5])).toBe(1)

    // Array rotated n-1 times
    expect(findMinimumInRotatedSortedArray([2, 3, 4, 5, 1])).toBe(1)
  })
})
