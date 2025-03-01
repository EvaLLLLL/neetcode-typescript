import { minCostClimbingStairs } from '../problems/min-cost-climbing-stairs'

describe('min-cost-climbing-stairs', () => {
  test('case 1', () => {
    const cost = [1, 2, 1, 2, 1, 1, 1]
    expect(minCostClimbingStairs(cost)).toBe(4)
  })

  test('case 2', () => {
    const cost = [10, 15, 20]
    expect(minCostClimbingStairs(cost)).toBe(15)
  })

  test('case 3', () => {
    const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
    expect(minCostClimbingStairs(cost)).toBe(6)
  })

  test('case 4', () => {
    const cost = [0, 0, 0, 0]
    expect(minCostClimbingStairs(cost)).toBe(0)
  })

  test('case 5', () => {
    const cost = [10, 15]
    expect(minCostClimbingStairs(cost)).toBe(10)
  })
})
