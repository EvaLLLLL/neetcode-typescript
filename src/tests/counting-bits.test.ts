import { countingBits } from '../problems/counting-bits'

describe('counting-bits', () => {
  test('case 1', () => {
    const n = 4
    expect(countingBits(n)).toEqual([0, 1, 1, 2, 1])
  })

  test('case 2', () => {
    const n = 2
    expect(countingBits(n)).toEqual([0, 1, 1])
  })

  test('case 3', () => {
    const n = 5
    expect(countingBits(n)).toEqual([0, 1, 1, 2, 1, 2])
  })

  test('case 4', () => {
    const n = 0
    expect(countingBits(n)).toEqual([0])
  })

  test('case 5', () => {
    const n = 1
    expect(countingBits(n)).toEqual([0, 1])
  })
})
