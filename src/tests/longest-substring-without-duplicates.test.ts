import { longestSubstringWithoutDuplicates } from '../problems/longest-substring-without-duplicates'

describe('longest-substring-without-duplicates', () => {
  test('case 1', () => {
    const s = 'zxyzxyz'
    const result = longestSubstringWithoutDuplicates(s)
    expect(result).toBe(3)
  })

  test('case 2', () => {
    const s = 'abcabcbb'
    const result = longestSubstringWithoutDuplicates(s)
    expect(result).toBe(3)
  })

  test('case 3', () => {
    const s = 'bbbbb'
    const result = longestSubstringWithoutDuplicates(s)
    expect(result).toBe(1)
  })

  test('case 4', () => {
    const s = 'pwwkew'
    const result = longestSubstringWithoutDuplicates(s)
    expect(result).toBe(3)
  })

  test('case 5', () => {
    const s = ''
    const result = longestSubstringWithoutDuplicates(s)
    expect(result).toBe(0)
  })
})
