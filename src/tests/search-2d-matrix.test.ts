import { search2dMatrix } from '../problems/search-2d-matrix'

describe('search-2d-matrix', () => {
  test('case 1: target exists in the matrix', () => {
    const matrix = [
      [1, 2, 4, 8],
      [10, 11, 12, 13],
      [14, 20, 30, 40]
    ]
    const target = 10
    expect(search2dMatrix(matrix, target)).toBe(true)
  })

  test('case 2: target does not exist in the matrix', () => {
    const matrix = [
      [1, 2, 4, 8],
      [10, 11, 12, 13],
      [14, 20, 30, 40]
    ]
    const target = 15
    expect(search2dMatrix(matrix, target)).toBe(false)
  })

  test('case 3: target is the first element', () => {
    const matrix = [
      [1, 2, 4, 8],
      [10, 11, 12, 13],
      [14, 20, 30, 40]
    ]
    const target = 1
    expect(search2dMatrix(matrix, target)).toBe(true)
  })

  test('case 4: target is the last element', () => {
    const matrix = [
      [1, 2, 4, 8],
      [10, 11, 12, 13],
      [14, 20, 30, 40]
    ]
    const target = 40
    expect(search2dMatrix(matrix, target)).toBe(true)
  })

  test('case 5: matrix is empty', () => {
    const matrix: number[][] = []
    const target = 10
    expect(search2dMatrix(matrix, target)).toBe(false)
  })

  test('case 6: target is not in a single row matrix', () => {
    const matrix = [[1, 3, 5, 7]]
    const target = 2
    expect(search2dMatrix(matrix, target)).toBe(false)
  })

  test('case 7: target is in a single row matrix', () => {
    const matrix = [[1, 3, 5, 7]]
    const target = 5
    expect(search2dMatrix(matrix, target)).toBe(true)
  })

  test('case 8: target is not in a single element matrix', () => {
    const matrix = [[1]]
    const target = 0
    expect(search2dMatrix(matrix, target)).toBe(false)
  })
})
