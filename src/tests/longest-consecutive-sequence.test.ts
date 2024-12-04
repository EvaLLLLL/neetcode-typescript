import longestConsecutiveSequence from '../problems/longest-consecutive-sequence'

describe('longest-consecutive-sequence', () => {
  test('case 1', () => {
    const nums = [2, 20, 4, 10, 3, 4, 5]
    expect(longestConsecutiveSequence(nums)).toBe(4)
  })

  test('case 2', () => {
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
    expect(longestConsecutiveSequence(nums)).toBe(9)
  })
})
