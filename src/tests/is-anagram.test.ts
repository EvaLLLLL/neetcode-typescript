import { isAnagram } from '../problems/is-anagram'

describe('is-anagram', () => {
  test('case 1', () => {
    const s = 'racecar'
    const t = 'carrace'
    expect(isAnagram(s, t)).toBe(true)
  })

  test('case 2', () => {
    const s = 'jar'
    const t = 'jam'
    expect(isAnagram(s, t)).toBe(false)
  })
})
