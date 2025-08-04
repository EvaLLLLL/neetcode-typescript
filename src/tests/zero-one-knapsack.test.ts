import {
  zeroOneKnapsackDP,
  zeroOneKnapsackDfs
} from '../problems/zero-one-knapsack'

describe('zero-one-knapsack', () => {
  test('case 1: basic example', () => {
    const profit = [4, 4, 7, 1]
    const weight = [5, 2, 3, 1]
    const capacity = 8
    expect(zeroOneKnapsackDP(profit, weight, capacity)).toBe(12)
    expect(zeroOneKnapsackDfs(profit, weight, capacity)).toBe(12)
  })

  test('case 2: cannot exceed capacity', () => {
    const profit = [1, 2, 3]
    const weight = [4, 5, 6]
    const capacity = 3
    expect(zeroOneKnapsackDP(profit, weight, capacity)).toBe(0)
    expect(zeroOneKnapsackDfs(profit, weight, capacity)).toBe(0)
  })

  test('case 3: exact capacity', () => {
    const profit = [10, 20]
    const weight = [5, 5]
    const capacity = 10
    expect(zeroOneKnapsackDP(profit, weight, capacity)).toBe(30)
    expect(zeroOneKnapsackDfs(profit, weight, capacity)).toBe(30)
  })

  test('case 4: larger example', () => {
    const profit = [1, 6, 10, 16]
    const weight = [1, 2, 3, 5]
    const capacity = 7
    expect(zeroOneKnapsackDP(profit, weight, capacity)).toBe(22)
    expect(zeroOneKnapsackDfs(profit, weight, capacity)).toBe(22)
  })

  test('case 5: single item', () => {
    const profit = [10]
    const weight = [5]
    const capacity = 5
    expect(zeroOneKnapsackDP(profit, weight, capacity)).toBe(10)
    expect(zeroOneKnapsackDfs(profit, weight, capacity)).toBe(10)
  })
})
