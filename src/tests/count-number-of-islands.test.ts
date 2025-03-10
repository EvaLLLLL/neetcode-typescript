import { countNumberOfIslands } from '../problems/count-number-of-islands'

describe('count-number-of-islands', () => {
  test('should return 1 for a single island', () => {
    const grid = [
      ['1', '1', '1'],
      ['1', '1', '1'],
      ['1', '1', '1']
    ]
    expect(countNumberOfIslands(grid)).toBe(1)
  })

  test('should return 3 for multiple islands', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1']
    ]
    expect(countNumberOfIslands(grid)).toBe(3)
  })

  test('should return 0 for all water', () => {
    const grid = [
      ['0', '0', '0'],
      ['0', '0', '0'],
      ['0', '0', '0']
    ]
    expect(countNumberOfIslands(grid)).toBe(0)
  })

  test('should handle single cell islands', () => {
    const grid = [
      ['1', '0', '1'],
      ['0', '1', '0'],
      ['1', '0', '1']
    ]
    expect(countNumberOfIslands(grid)).toBe(5)
  })
})
