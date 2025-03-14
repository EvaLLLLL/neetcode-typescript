import { houseRobber } from '../problems/house-robber'

describe('house-robber', () => {
  test('case 1', () => {
    expect(houseRobber([1, 2, 3, 1])).toBe(4)
  })

  test('case 2', () => {
    expect(houseRobber([2, 7, 9, 3, 1])).toBe(12)
  })

  test('case 3', () => {
    expect(houseRobber([2, 1])).toBe(2)
  })

  test('case 4', () => {
    expect(houseRobber([1])).toBe(1)
  })

  test('case 5', () => {
    expect(houseRobber([0])).toBe(0)
  })

  test('case 6', () => {
    expect(houseRobber([1, 3, 1, 3, 100])).toBe(103)
  })
})
