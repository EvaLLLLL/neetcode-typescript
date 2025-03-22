import { palindromePartitioning } from '../problems/palindrome-partitioning'

describe('palindrome-partitioning', () => {
  test('case 1 - simple palindrome', () => {
    const input = 'aab'
    const expectedOutput = [
      ['a', 'a', 'b'],
      ['aa', 'b']
    ]
    expect(palindromePartitioning(input)).toEqual(
      expect.arrayContaining(expectedOutput)
    )
  })

  test('case 2 - single character', () => {
    const input = 'a'
    const expectedOutput = [['a']]
    expect(palindromePartitioning(input)).toEqual(
      expect.arrayContaining(expectedOutput)
    )
  })

  test('case 3 - no palindromes', () => {
    const input = 'abc'
    const expectedOutput = [['a', 'b', 'c']]
    expect(palindromePartitioning(input)).toEqual(
      expect.arrayContaining(expectedOutput)
    )
  })
})
