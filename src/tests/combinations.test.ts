import { combinations } from '../problems/combinations'

describe('combinations', () => {
  test('case 1', () => {
    const n = 4
    const k = 2
    const result = combinations(n, k)
    expect(result).toEqual(
      expect.arrayContaining([
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4]
      ])
    )
  })

  test('case 2', () => {
    const n = 5
    const k = 3
    const result = combinations(n, k)
    expect(result).toEqual(
      expect.arrayContaining([
        [1, 2, 3],
        [1, 2, 4],
        [1, 2, 5],
        [1, 3, 4],
        [1, 3, 5],
        [1, 4, 5],
        [2, 3, 4],
        [2, 3, 5],
        [2, 4, 5],
        [3, 4, 5]
      ])
    )
  })

  test('case 3', () => {
    const n = 3
    const k = 1
    const result = combinations(n, k)
    expect(result).toEqual(expect.arrayContaining([[1], [2], [3]]))
  })

  test('case 4', () => {
    const n = 3
    const k = 3
    const result = combinations(n, k)
    expect(result).toEqual(expect.arrayContaining([[1, 2, 3]]))
  })

  test('case 5', () => {
    const n = 2
    const k = 2
    const result = combinations(n, k)
    expect(result).toEqual(expect.arrayContaining([[1, 2]]))
  })
})
