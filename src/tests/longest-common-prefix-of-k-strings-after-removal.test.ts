import { longestCommonPrefixOfKStringsAfterRemoval } from '../problems/longest-common-prefix-of-k-strings-after-removal'

describe('longest-common-prefix-of-k-strings-after-removal', () => {
  test('case 1', () => {
    const words = ['jump', 'run', 'run', 'jump', 'run']
    const k = 2
    expect(longestCommonPrefixOfKStringsAfterRemoval(words, k)).toEqual([
      3, 4, 4, 3, 4
    ])
  })

  test('case 2', () => {
    const words = ['dog', 'racer', 'car']
    const k = 2
    expect(longestCommonPrefixOfKStringsAfterRemoval(words, k)).toEqual([
      0, 0, 0
    ])
  })
})
