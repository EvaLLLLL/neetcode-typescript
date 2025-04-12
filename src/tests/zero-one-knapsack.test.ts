import { zeroOneKnapsack } from '../problems/zero-one-knapsack'

describe('zero-one-knapsack', () => {
  test('case 1: basic example', () => {
    const profit = [60, 100, 120]
    const weight = [10, 20, 30]
    const capacity = 50
    expect(zeroOneKnapsack(profit, weight, capacity)).toBe(220)
  })

  test('case 2: cannot exceed capacity', () => {
    const profit = [1, 2, 3]
    const weight = [4, 5, 6]
    const capacity = 3
    expect(zeroOneKnapsack(profit, weight, capacity)).toBe(0)
  })

  test('case 3: exact capacity', () => {
    const profit = [10, 20]
    const weight = [5, 5]
    const capacity = 10
    expect(zeroOneKnapsack(profit, weight, capacity)).toBe(30)
  })

  test('case 4: larger example', () => {
    const profit = [1, 6, 10, 16]
    const weight = [1, 2, 3, 5]
    const capacity = 7
    expect(zeroOneKnapsack(profit, weight, capacity)).toBe(22)
  })

  test('case 5: single item', () => {
    const profit = [10]
    const weight = [5]
    const capacity = 5
    expect(zeroOneKnapsack(profit, weight, capacity)).toBe(10)
  })
})
