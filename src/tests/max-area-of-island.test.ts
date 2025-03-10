import { maxAreaOfIsland } from '../problems/max-area-of-island'

describe('max-area-of-island', () => {
  test('should return 6 for a grid with multiple islands', () => {
    const grid = [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    ]
    expect(maxAreaOfIsland(grid)).toBe(6)
  })

  test('should return 0 for a grid with no islands', () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
    expect(maxAreaOfIsland(grid)).toBe(0)
  })

  test('should return 1 for a grid with single-cell islands', () => {
    const grid = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1]
    ]
    expect(maxAreaOfIsland(grid)).toBe(1)
  })

  test('should return 9 for a grid with one large island', () => {
    const grid = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ]
    expect(maxAreaOfIsland(grid)).toBe(9)
  })

  test('should handle islands at grid boundaries', () => {
    const grid = [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 1]
    ]
    expect(maxAreaOfIsland(grid)).toBe(3)
  })
})
