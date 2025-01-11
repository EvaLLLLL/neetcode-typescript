import { longestRepeatingSubstringWithReplacement } from '../problems/longest-repeating-substring-with-replacement'

describe('longest-repeating-substring-with-replacement', () => {
  test('case 1', () => {
    const s = 'AABABBA'
    const k = 1
    const result = longestRepeatingSubstringWithReplacement(s, k)
    expect(result).toBe(4)
  })

  test('case 2', () => {
    const s = 'ABAB'
    const k = 2
    const result = longestRepeatingSubstringWithReplacement(s, k)
    expect(result).toBe(4)
  })

  test('case 3', () => {
    const s = 'AABABBA'
    const k = 2
    const result = longestRepeatingSubstringWithReplacement(s, k)
    expect(result).toBe(5)
  })
})
