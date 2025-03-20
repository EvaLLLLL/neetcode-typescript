import { kClosestPointsToOrigin } from '../problems/k-closest-points-to-origin'

describe('k-closest-points-to-origin', () => {
  test('case 1', () => {
    const points = [
      [1, 3],
      [-2, 2],
      [5, 8],
      [0, 1]
    ]
    const k = 2
    const result = kClosestPointsToOrigin(points, k)
    expect(result).toEqual([
      [0, 1],
      [-2, 2]
    ])
  })

  test('case 2', () => {
    const points = [
      [3, 3],
      [5, -1],
      [-2, 4]
    ]
    const k = 1
    const result = kClosestPointsToOrigin(points, k)
    expect(result).toEqual([[3, 3]])
  })

  test('case 3', () => {
    const points = [
      [1, 2],
      [2, 1]
    ]
    const k = 2
    const result = kClosestPointsToOrigin(points, k)
    expect(result).toEqual([
      [1, 2],
      [2, 1]
    ])
  })
})
