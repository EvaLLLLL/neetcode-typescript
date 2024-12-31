import { threeIntegerSum } from '../problems/three-integer-sum'

describe('three-integer-sum', () => {
  test('case 1', () => {
    const nums = [-1, 0, 1, 2, -1, -4]
    const result = threeIntegerSum(nums)
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1]
    ]
    expect(result).toEqual(expect.arrayContaining(expected))
  })

  test('case 2', () => {
    const nums = [0, 1, 1]
    const result = threeIntegerSum(nums)
    const expected: number[][] = []
    expect(result).toEqual(expect.arrayContaining(expected))
  })

  test('case 3', () => {
    const nums = [0, 0, 0]
    const result = threeIntegerSum(nums)
    const expected = [[0, 0, 0]]
    expect(result).toEqual(expect.arrayContaining(expected))
  })

  test('case 4', () => {
    const nums = [-2, 0, 1, 1, 2]
    const result = threeIntegerSum(nums)
    const expected = [
      [-2, 0, 2],
      [-2, 1, 1]
    ]
    expect(result).toEqual(expect.arrayContaining(expected))
  })

  test('case 5', () => {
    const nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
    const result = threeIntegerSum(nums)
    const expected = [
      [-4, 0, 4],
      [-4, 1, 3],
      [-3, -1, 4],
      [-3, 0, 3],
      [-3, 1, 2],
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, -1, 2],
      [-1, 0, 1]
    ]
    expect(result).toEqual(expect.arrayContaining(expected))
  })
})
