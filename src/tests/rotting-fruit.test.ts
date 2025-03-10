import { rottingFruit } from '../problems/rotting-fruit'

describe('rotting-fruit', () => {
  test('case 1', () => {
    const grid = [
      [1, 1, 0],
      [0, 1, 1],
      [0, 1, 2]
    ]
    expect(rottingFruit(grid)).toBe(4)
  })

  test('case 2', () => {
    const grid = [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1]
    ]
    expect(rottingFruit(grid)).toBe(-1)
  })

  test('case 3', () => {
    const grid = [[0, 2]]
    expect(rottingFruit(grid)).toBe(0)
  })

  test('case 4', () => {
    const grid = [[1], [2]]
    expect(rottingFruit(grid)).toBe(1)
  })

  test('case 5', () => {
    const grid = [
      [2, 2],
      [1, 1],
      [0, 0],
      [2, 0]
    ]
    expect(rottingFruit(grid)).toBe(1)
  })
})
