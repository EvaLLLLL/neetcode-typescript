import { palindromicSubstrings } from '../problems/palindromic-substrings'

describe('palindromic-substrings', () => {
  test('case 1: empty string returns 0', () => {
    expect(palindromicSubstrings('')).toBe(0)
  })

  test('case 2: single character returns 1', () => {
    expect(palindromicSubstrings('a')).toBe(1)
  })

  test('case 3: two identical characters', () => {
    expect(palindromicSubstrings('aa')).toBe(3) // a, a, aa
  })

  test('case 4: string with multiple palindromes', () => {
    expect(palindromicSubstrings('abc')).toBe(3) // a, b, c
  })

  test('case 5: string with overlapping palindromes', () => {
    expect(palindromicSubstrings('aaa')).toBe(6) // a, a, a, aa, aa, aaa
  })

  test('case 6: complex string', () => {
    expect(palindromicSubstrings('racecar')).toBe(10)
    // r,a,c,e,c,a,r,aca,cec,racecar
  })
})
