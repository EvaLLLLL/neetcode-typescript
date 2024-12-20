import {
  removeDuplicatesFromSortedArray,
  removeDuplicatesFromSortedArray2
} from '../problems/remove-duplicates-from-sorted-array'

describe('remove-duplicates-from-sorted-array', () => {
  test('case 1', () => {
    const nums1 = [1, 1, 2]
    removeDuplicatesFromSortedArray(nums1)
    expect(nums1.slice(0, 2)).toEqual([1, 2])

    const nums2 = [1, 1, 2]
    removeDuplicatesFromSortedArray2(nums2)
    expect(nums2.slice(0, 2)).toEqual([1, 2])
  })
  test('case 2', () => {
    const nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    removeDuplicatesFromSortedArray(nums1)
    expect(nums1.slice(0, 5)).toEqual([0, 1, 2, 3, 4])

    const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    removeDuplicatesFromSortedArray2(nums2)
    expect(nums2.slice(0, 5)).toEqual([0, 1, 2, 3, 4])
  })
})
