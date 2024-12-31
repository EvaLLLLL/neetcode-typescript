import { reverseBits } from '../problems/reverse-bits'

describe('reverse-bits', () => {
  test('case 1', () => {
    const n = 0b00000000000000000000000000010101
    const result = 0b10101000000000000000000000000000
    expect(reverseBits(n)).toBe(result)
  })

  test('case 2', () => {
    const n = 0b11111111111111111111111111111101
    const result = 0b10111111111111111111111111111111
    expect(reverseBits(n)).toBe(result)
  })

  test('case 3', () => {
    const n = 0b00000000000000000000000000000000
    const result = 0b00000000000000000000000000000000
    expect(reverseBits(n)).toBe(result)
  })

  test('case 4', () => {
    const n = 0b00000000000000000000000000000001
    const result = 0b10000000000000000000000000000000
    expect(reverseBits(n)).toBe(result)
  })

  test('case 5', () => {
    const n = 0b10000000000000000000000000000000
    const result = 0b00000000000000000000000000000001
    expect(reverseBits(n)).toBe(result)
  })
})
