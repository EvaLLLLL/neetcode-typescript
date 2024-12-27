import { guessNumberHigherOrLower } from '../problems/guess-number-higher-or-lower'

describe('guess-number-higher-or-lower', () => {
  test('case 1: pick is in the middle', () => {
    const n = 10
    const pick = 6
    expect(guessNumberHigherOrLower(n, pick)).toBe(6)
  })

  test('case 2: pick is the first number', () => {
    const n = 10
    const pick = 1
    expect(guessNumberHigherOrLower(n, pick)).toBe(1)
  })

  test('case 3: pick is the last number', () => {
    const n = 10
    const pick = 10
    expect(guessNumberHigherOrLower(n, pick)).toBe(10)
  })

  test('case 4: pick is somewhere in the first half', () => {
    const n = 10
    const pick = 3
    expect(guessNumberHigherOrLower(n, pick)).toBe(3)
  })

  test('case 5: pick is somewhere in the second half', () => {
    const n = 10
    const pick = 8
    expect(guessNumberHigherOrLower(n, pick)).toBe(8)
  })
})
