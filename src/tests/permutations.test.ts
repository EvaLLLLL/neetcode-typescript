import { permutations } from '../problems/permutations'

describe('permutations', () => {
  test('case 1', () => {
    const nums = [1, 2, 3]
    const expectedOutput = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ]
    expect(permutations(nums)).toEqual(expect.arrayContaining(expectedOutput))
  })

  test('case 2', () => {
    const nums = [0, 1]
    const expectedOutput = [
      [0, 1],
      [1, 0]
    ]
    expect(permutations(nums)).toEqual(expect.arrayContaining(expectedOutput))
  })

  test('case 3', () => {
    const nums = [1]
    const expectedOutput = [[1]]
    expect(permutations(nums)).toEqual(expect.arrayContaining(expectedOutput))
  })

  test('case 4', () => {
    const nums = [1, 2, 3, 4]
    const expectedOutput = [
      [1, 2, 3, 4],
      [1, 2, 4, 3],
      [1, 3, 2, 4],
      [1, 3, 4, 2],
      [1, 4, 2, 3],
      [1, 4, 3, 2],
      [2, 1, 3, 4],
      [2, 1, 4, 3],
      [2, 3, 1, 4],
      [2, 3, 4, 1],
      [2, 4, 1, 3],
      [2, 4, 3, 1],
      [3, 1, 2, 4],
      [3, 1, 4, 2],
      [3, 2, 1, 4],
      [3, 2, 4, 1],
      [3, 4, 1, 2],
      [3, 4, 2, 1],
      [4, 1, 2, 3],
      [4, 1, 3, 2],
      [4, 2, 1, 3],
      [4, 2, 3, 1],
      [4, 3, 1, 2],
      [4, 3, 2, 1]
    ]
    expect(permutations(nums)).toEqual(expect.arrayContaining(expectedOutput))
  })
})
