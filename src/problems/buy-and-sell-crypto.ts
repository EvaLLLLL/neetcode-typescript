export function buyAndSellCrypto(prices: number[]): number {
  let l = 0,
    r = 1,
    res = 0

  while (r < prices.length) {
    if (prices[l] >= prices[r]) {
      l = r
    } else {
      res = Math.max(prices[r] - prices[l], res)
    }
    r++
  }

  return res
}
