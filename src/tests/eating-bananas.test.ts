import { eatingBananas } from '../problems/eating-bananas'

describe('eating-bananas', () => {
  test('should return minimum eating rate to eat all bananas within given hours', () => {
    expect(eatingBananas([1, 4, 3, 2], 9)).toBe(2)
    expect(eatingBananas([25, 10, 23, 4], 4)).toBe(25)
    expect(eatingBananas([3, 6, 7, 11], 8)).toBe(4)
    expect(eatingBananas([30, 11, 23, 4, 20], 6)).toBe(23)
  })

  test('edge cases', () => {
    // Single pile
    expect(eatingBananas([10], 5)).toBe(2)
    expect(eatingBananas([100], 10)).toBe(10)

    // All same numbers
    expect(eatingBananas([3, 3, 3], 3)).toBe(3)
    expect(eatingBananas([5, 5, 5, 5], 4)).toBe(5)

    // Large numbers
    expect(eatingBananas([30, 11, 23, 4, 20], 5)).toBe(30)
    expect(eatingBananas([1000, 1000, 1000], 3)).toBe(1000)
  })

  test('minimum hours required', () => {
    // When hours equals number of piles
    expect(eatingBananas([2, 3, 4], 3)).toBe(4)
    expect(eatingBananas([10, 20, 30], 3)).toBe(30)
  })

  test('longer hours than needed', () => {
    expect(eatingBananas([5, 5], 10)).toBe(1)
    expect(eatingBananas([7, 8, 9], 15)).toBe(2)
  })
})
