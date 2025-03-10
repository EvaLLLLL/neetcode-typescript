import { shortestPathInBinaryMatrix } from '../problems/shortest-path-in-binary-matrix'

describe('shortest-path-in-binary-matrix', () => {
  test('case 1', () => {
    const grid = [
      [0, 1],
      [1, 0]
    ]
    expect(shortestPathInBinaryMatrix(grid)).toBe(2)
  })

  test('case 2', () => {
    const grid = [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0]
    ]
    expect(shortestPathInBinaryMatrix(grid)).toBe(4)
  })

  test('case 3', () => {
    const grid = [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 0]
    ]
    expect(shortestPathInBinaryMatrix(grid)).toBe(-1)
  })

  test('case 4', () => {
    const grid = [
      [0, 0, 0],
      [1, 1, 1],
      [1, 1, 0]
    ]
    expect(shortestPathInBinaryMatrix(grid)).toBe(-1)
  })

  test('case 5', () => {
    const grid = [
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 0]
    ]
    expect(shortestPathInBinaryMatrix(grid)).toBe(-1)
  })
})
