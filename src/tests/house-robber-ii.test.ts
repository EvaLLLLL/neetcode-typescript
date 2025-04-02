import { houseRobberIi } from '../problems/house-robber-ii'

describe('house-robber-ii', () => {
  test('case 1: basic circular house arrangement', () => {
    const nums = [2, 3, 2]
    expect(houseRobberIi(nums)).toBe(3)
  })

  test('case 2: larger circular house arrangement', () => {
    const nums = [1, 2, 3, 1]
    expect(houseRobberIi(nums)).toBe(4)
  })

  test('case 3: optimal path requires skipping multiple houses', () => {
    const nums = [1, 3, 1, 3, 100]
    expect(houseRobberIi(nums)).toBe(103)
  })

  test('case 4: single house', () => {
    const nums = [1]
    expect(houseRobberIi(nums)).toBe(1)
  })

  test('case 5: two houses', () => {
    const nums = [5, 1]
    expect(houseRobberIi(nums)).toBe(5)
  })

  test('case 6: complex arrangement', () => {
    const nums = [2, 7, 9, 3, 1]
    expect(houseRobberIi(nums)).toBe(11)
  })
})
