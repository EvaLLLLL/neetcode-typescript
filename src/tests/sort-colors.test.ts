import { sortColors } from '../problems/sort-colors'

describe('sort-colors', () => {
  test('case 1: sort array with mixed colors', () => {
    const nums = [2, 0, 2, 1, 1, 0]
    sortColors(nums)
    expect(nums).toEqual([0, 0, 1, 1, 2, 2])
  })

  test('case 2: sort array with fewer colors', () => {
    const nums = [2, 0, 1]
    sortColors(nums)
    expect(nums).toEqual([0, 1, 2])
  })

  test('case 3: sort already sorted array', () => {
    const nums = [0, 1, 2]
    sortColors(nums)
    expect(nums).toEqual([0, 1, 2])
  })

  test('case 4: sort array with one color', () => {
    const nums = [1, 1, 1]
    sortColors(nums)
    expect(nums).toEqual([1, 1, 1])
  })

  test('case 5: sort empty array', () => {
    const nums: number[] = []
    sortColors(nums)
    expect(nums).toEqual([])
  })
})
