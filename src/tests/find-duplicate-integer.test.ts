import { findDuplicateInteger } from '../problems/find-duplicate-integer'

describe('find-duplicate-integer', () => {
  test('finds duplicate in small array [1,3,4,2,2]', () => {
    expect(findDuplicateInteger([1, 3, 4, 2, 2])).toBe(2)
  })

  test('finds duplicate in array with duplicate at start [3,1,3,4,2]', () => {
    expect(findDuplicateInteger([3, 1, 3, 4, 2])).toBe(3)
  })

  test('finds duplicate in array with duplicate at end [1,2,3,4,4]', () => {
    expect(findDuplicateInteger([1, 2, 3, 4, 4])).toBe(4)
  })

  test('finds duplicate in array with multiple duplicates [2,2,2,2,2]', () => {
    expect(findDuplicateInteger([2, 2, 2, 2, 2])).toBe(2)
  })

  test('finds duplicate in large array', () => {
    const arr = Array.from({ length: 10001 }, (_, i) => i + 1)
    arr[10000] = 5000 // Add duplicate
    expect(findDuplicateInteger(arr)).toBe(5000)
  })

  test('handles minimum constraints [1,1]', () => {
    expect(findDuplicateInteger([1, 1])).toBe(1)
  })
})
