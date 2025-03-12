import { islandsAndTreasure } from '../problems/islands-and-treasure'

describe('islands-and-treasure', () => {
  test('case 1', () => {
    const grid = [
      [2147483647, -1, 0, 2147483647],
      [2147483647, 2147483647, 2147483647, -1],
      [2147483647, -1, 2147483647, -1],
      [0, -1, 2147483647, 2147483647]
    ]
    const expected = [
      [3, -1, 0, 1],
      [2, 2, 1, -1],
      [1, -1, 2, -1],
      [0, -1, 3, 4]
    ]
    islandsAndTreasure(grid)
    expect(grid).toEqual(expected)
  })

  test('case 2', () => {
    const grid = [
      [-1, -1, -1],
      [-1, 0, -1],
      [-1, -1, -1]
    ]
    const expected = [
      [-1, -1, -1],
      [-1, 0, -1],
      [-1, -1, -1]
    ]
    islandsAndTreasure(grid)
    expect(grid).toEqual(expected)
  })

  test('case 3', () => {
    const grid = [
      [2147483647, 2147483647, 2147483647],
      [2147483647, 0, 2147483647],
      [2147483647, 2147483647, 2147483647]
    ]
    const expected = [
      [2, 1, 2],
      [1, 0, 1],
      [2, 1, 2]
    ]
    islandsAndTreasure(grid)
    expect(grid).toEqual(expected)
  })
})
