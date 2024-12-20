import { removeElement } from '../problems/remove-element'

describe('remove-element', () => {
  test('case 1', () => {
    const nums = [3, 2, 2, 3]
    const val = 3
    const result = removeElement(nums, val)
    expect(result).toBe(2)
    expect(nums.slice(0, result)).toEqual([2, 2])
  })
})
