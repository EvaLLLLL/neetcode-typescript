import { minimumWindowWithCharacters } from '../problems/minimum-window-with-characters'

describe('minimum-window-with-characters', () => {
  test('case 1', () => {
    const s = 'OUZODYXAZV'
    const t = 'XYZ'
    const result = minimumWindowWithCharacters(s, t)
    expect(result).toBe('YXAZ')
  })

  test('case 2', () => {
    const s = 'ADOBECODEBANC'
    const t = 'ABC'
    const result = minimumWindowWithCharacters(s, t)
    expect(result).toBe('BANC')
  })

  test('case 3', () => {
    const s = 'a'
    const t = 'a'
    const result = minimumWindowWithCharacters(s, t)
    expect(result).toBe('a')
  })

  test('case 4', () => {
    const s = 'a'
    const t = 'aa'
    const result = minimumWindowWithCharacters(s, t)
    expect(result).toBe('')
  })

  test('case 5', () => {
    const s = 'abc'
    const t = 'cba'
    const result = minimumWindowWithCharacters(s, t)
    expect(result).toBe('abc')
  })

  test('case 6', () => {
    const s = 'aaaaaaaaaaaabbbbbcdd'
    const t = 'abcdd'
    const result = minimumWindowWithCharacters(s, t)
    expect(result).toBe('abbbbbcdd')
  })
})
