import { pacificAtlanticWaterFlow } from '../problems/pacific-atlantic-water-flow'

describe('pacific-atlantic-water-flow', () => {
  test('case 1: basic water flow scenario', () => {
    const heights = [
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4]
    ]
    const result = pacificAtlanticWaterFlow(heights)
    const expectedCells = [
      [0, 4],
      [1, 3],
      [1, 4],
      [2, 2],
      [3, 0],
      [3, 1],
      [4, 0]
    ]
    expect(result).toEqual(
      expect.arrayContaining(
        expectedCells.map((cell) => expect.arrayContaining(cell))
      )
    )
    expect(result.length).toBe(expectedCells.length)
  })

  test('case 2: single cell island', () => {
    const heights = [[1]]
    const result = pacificAtlanticWaterFlow(heights)
    expect(result).toEqual([[0, 0]])
  })
})
