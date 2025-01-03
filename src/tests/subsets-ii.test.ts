import { subsetsIi } from '../problems/subsets-ii'

describe('subsets-ii', () => {
  test('case 1', () => {
    const nums = [1, 2, 1]
    const result = subsetsIi(nums)
    const expected = [[1, 1, 2], [1, 1], [1, 2], [1], [2], []]
    expect(result).toEqual(expect.arrayContaining(expected))
  })

  test('case 2', () => {
    const nums = [1, 2, 2]
    const result = subsetsIi(nums)
    const expected = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
    expect(result).toEqual(expect.arrayContaining(expected))
  })

  test('case 3', () => {
    const nums = [0]
    const result = subsetsIi(nums)
    const expected = [[], [0]]
    expect(result).toEqual(expect.arrayContaining(expected))
  })

  test('case 4', () => {
    const nums = [4, 4, 4, 1, 4]
    const result = subsetsIi(nums)
    const expected = [
      [],
      [1],
      [1, 4],
      [1, 4, 4],
      [1, 4, 4, 4],
      [1, 4, 4, 4, 4],
      [4],
      [4, 4],
      [4, 4, 4],
      [4, 4, 4, 4]
    ]
    expect(result).toEqual(expect.arrayContaining(expected))
  })
})
