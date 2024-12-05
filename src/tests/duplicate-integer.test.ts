import { duplicateInteger } from '../problems/duplicate-integer'

describe('duplicate-integer', () => {
  test('case 1', () => {
    const nums = [1, 2, 3, 3]
    expect(duplicateInteger(nums)).toBe(true)
  })

  test('case 2', () => {
    const nums = [1, 2, 3, 4]
    expect(duplicateInteger(nums)).toBe(false)
  })
})
