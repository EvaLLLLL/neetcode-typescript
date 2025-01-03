import { carFleet } from '../problems/car-fleet'

describe('car-fleet', () => {
  test('case 1', () => {
    const target = 10
    const position = [1, 4]
    const speed = [3, 2]
    const result = carFleet(target, position, speed)
    const expected = 1
    expect(result).toBe(expected)
  })

  test('case 2', () => {
    const target = 10
    const position = [4, 1, 0, 7]
    const speed = [2, 2, 1, 1]
    const result = carFleet(target, position, speed)
    const expected = 3
    expect(result).toBe(expected)
  })
})
