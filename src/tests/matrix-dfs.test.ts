import { matrixDfs } from '../problems/matrix-dfs'

describe('matrix-dfs', () => {
  test('case 1', () => {
    const grid = [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 1],
      [0, 1, 0, 0]
    ]
    expect(matrixDfs(grid)).toBe(2)
  })

  test('case 2', () => {
    const grid = [
      [0, 1, 0],
      [0, 0, 0],
      [0, 1, 0]
    ]
    expect(matrixDfs(grid)).toBe(1)
  })

  test('case 3', () => {
    const grid = [
      [0, 0],
      [0, 0]
    ]
    expect(matrixDfs(grid)).toBe(2)
  })

  test('case 4', () => {
    const grid = [
      [0, 1],
      [1, 0]
    ]
    expect(matrixDfs(grid)).toBe(0)
  })

  test('case 5', () => {
    const grid = [[0]]
    expect(matrixDfs(grid)).toBe(1)
  })
})
