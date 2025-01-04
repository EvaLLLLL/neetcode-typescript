import { buyAndSellCrypto } from '../problems/buy-and-sell-crypto'

describe('buy-and-sell-crypto', () => {
  test('case 1', () => {
    const prices = [10, 1, 5, 6, 7, 1]
    expect(buyAndSellCrypto(prices)).toBe(6)
  })

  test('case 2', () => {
    const prices = [7, 1, 5, 3, 6, 4]
    expect(buyAndSellCrypto(prices)).toBe(5)
  })

  test('case 3', () => {
    const prices = [7, 6, 4, 3, 1]
    expect(buyAndSellCrypto(prices)).toBe(0)
  })

  test('case 4', () => {
    const prices = [1, 2, 3, 4, 5]
    expect(buyAndSellCrypto(prices)).toBe(4)
  })

  test('case 5', () => {
    const prices = [2, 4, 1]
    expect(buyAndSellCrypto(prices)).toBe(2)
  })
})
