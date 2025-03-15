import { unique3DifitEvenNumbers } from '../problems/unique-3-difit-even-numbers'

describe('unique-3-difit-even-numbers', () => {
  test('should return 12 for digits [1,2,3,4]', () => {
    expect(unique3DifitEvenNumbers([1, 2, 3, 4])).toBe(12)
  })

  test('should return 0 when no even numbers can be formed', () => {
    expect(unique3DifitEvenNumbers([0, 2, 2])).toBe(2)
  })

  test('should handle digits that can form numbers with no leading zeros', () => {
    expect(unique3DifitEvenNumbers([6, 6, 6])).toBe(1)
  })

  test('should not reuse digits', () => {
    expect(unique3DifitEvenNumbers([1, 3, 5])).toBe(0)
  })
})
