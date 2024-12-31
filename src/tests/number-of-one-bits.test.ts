import { numberOfOneBits } from '../problems/number-of-one-bits'

describe('number-of-one-bits', () => {
  test('case 1', () => {
    const n = 0b00000000000000000000000000001011
    expect(numberOfOneBits(n)).toBe(3)
  })
  test('case 2', () => {
    const n = 0b1111111111111111111111111111101
    expect(numberOfOneBits(n)).toBe(30)
  })
})
