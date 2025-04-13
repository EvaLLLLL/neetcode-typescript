import { decodeWays } from '../problems/decode-ways'

describe('decode-ways', () => {
  test('single digit valid case', () => {
    expect(decodeWays('1')).toBe(1)
  })

  test('two digit valid case', () => {
    expect(decodeWays('12')).toBe(2)
  })

  test('multiple digit valid case', () => {
    expect(decodeWays('226')).toBe(3)
  })

  test('zero in middle', () => {
    expect(decodeWays('1012')).toBe(1)
  })

  test('leading zero', () => {
    expect(decodeWays('01')).toBe(0)
  })

  test('invalid two-digit number', () => {
    expect(decodeWays('27')).toBe(1)
  })

  test('empty string', () => {
    expect(decodeWays('')).toBe(0)
  })
})
