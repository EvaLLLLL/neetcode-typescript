import { removeDuplicatesFromSortedArrayIi } from '../problems/remove-duplicates-from-sorted-array-ii'

describe('remove-duplicates-from-sorted-array-ii', () => {
  test('case 1', () => {
    const nums = [1, 1, 1, 2, 2, 3]
    removeDuplicatesFromSortedArrayIi(nums)
    expect(nums.slice(0, 5)).toEqual([1, 1, 2, 2, 3])
  })

  test('case 2', () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
    removeDuplicatesFromSortedArrayIi(nums)
    expect(nums.slice(0, 7)).toEqual([0, 0, 1, 1, 2, 3, 3])
  })

  test('case 3', () => {
    const nums = [1, 1, 1, 1, 1, 1]
    removeDuplicatesFromSortedArrayIi(nums)
    expect(nums.slice(0, 2)).toEqual([1, 1])
  })

  test('case 4', () => {
    const nums = [1, 2, 2, 2, 3, 3, 3, 4]
    removeDuplicatesFromSortedArrayIi(nums)
    expect(nums.slice(0, 6)).toEqual([1, 2, 2, 3, 3, 4])
  })

  test('case 5', () => {
    const nums: number[] = []
    removeDuplicatesFromSortedArrayIi(nums)
    expect(nums).toEqual([])
  })
})
