import { permutationString } from '../problems/permutation-string'

describe('permutation-string', () => {
  test('case 1', () => {
    const s1 = 'abc'
    const s2 = 'lecabee'
    expect(permutationString(s1, s2)).toBe(true)
  })

  test('case 2', () => {
    const s1 = 'ab'
    const s2 = 'eidbaooo'
    expect(permutationString(s1, s2)).toBe(true)
  })

  test('case 3', () => {
    const s1 = 'ab'
    const s2 = 'eidboaoo'
    expect(permutationString(s1, s2)).toBe(false)
  })

  test('case 4', () => {
    const s1 = 'hello'
    const s2 = 'ooolleohlh'
    expect(permutationString(s1, s2)).toBe(true)
  })

  test('case 5', () => {
    const s1 = 'adc'
    const s2 = 'dcda'
    expect(permutationString(s1, s2)).toBe(true)
  })
})
