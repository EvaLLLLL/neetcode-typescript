import { binarySearch } from '../problems/binary-search'

describe('binary-search', () => {
  test('case 1: target exists in the array', () => {
    const nums = [-1, 0, 2, 4, 6, 8]
    const target = 4
    expect(binarySearch(nums, target)).toBe(3)
  })

  test('case 2: target does not exist in the array', () => {
    const nums = [-1, 0, 2, 4, 6, 8]
    const target = 3
    expect(binarySearch(nums, target)).toBe(-1)
  })

  test('case 3: target is the first element', () => {
    const nums = [-1, 0, 2, 4, 6, 8]
    const target = -1
    expect(binarySearch(nums, target)).toBe(0)
  })

  test('case 4: target is the last element', () => {
    const nums = [-1, 0, 2, 4, 6, 8]
    const target = 8
    expect(binarySearch(nums, target)).toBe(5)
  })

  test('case 5: array is empty', () => {
    const nums: number[] = []
    const target = 4
    expect(binarySearch(nums, target)).toBe(-1)
  })
})
