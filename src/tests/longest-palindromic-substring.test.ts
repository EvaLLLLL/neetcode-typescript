import { longestPalindromicSubstring } from '../problems/longest-palindromic-substring'
describe('longest-palindromic-substring', () => {
  test('case 1', () => {
    expect(longestPalindromicSubstring('babad')).toEqual('bab')
  })

  test('case 2', () => {
    expect(longestPalindromicSubstring('cbbd')).toEqual('bb')
  })

  test('case 3', () => {
    expect(longestPalindromicSubstring('a')).toEqual('a')
  })

  test('case 4', () => {
    expect(longestPalindromicSubstring('ac')).toEqual('a')
  })

  test('case 5', () => {
    expect(longestPalindromicSubstring('bb')).toEqual('bb')
  })

  test('case 6', () => {
    expect(longestPalindromicSubstring('racecar')).toEqual('racecar')
  })

  test('case 7', () => {
    expect(longestPalindromicSubstring('bananas')).toEqual('anana')
  })

  test('case 8', () => {
    expect(longestPalindromicSubstring('noon')).toEqual('noon')
  })

  test('case 9', () => {
    expect(longestPalindromicSubstring('level')).toEqual('level')
  })

  test('case 10', () => {
    expect(longestPalindromicSubstring('algorithm')).toEqual('a')
  })

  test('case 11', () => {
    expect(longestPalindromicSubstring('')).toEqual('')
  })

  test('case 12', () => {
    expect(longestPalindromicSubstring('aba')).toEqual('aba')
  })

  test('case 13', () => {
    expect(longestPalindromicSubstring('ccc')).toEqual('ccc')
  })
})
