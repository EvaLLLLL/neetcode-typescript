export function zeroOneKnapsackDP(
  profit: number[],
  weight: number[],
  capacity: number
): number {
  const N = profit.length
  const M = capacity
  const dp = Array(M + 1).fill(0)

  // fill the first row to reduce the edge cases
  for (let c = 0; c <= M; c++) {
    if (weight[0] <= c) {
      dp[c] = profit[0]
    }
  }

  for (let i = 1; i < N; i++) {
    const curRow = new Array(M + 1).fill(0)
    for (let c = 1; c <= M; c++) {
      let skip = dp[c]
      let include = 0
      if (c - weight[i] >= 0) {
        include = profit[i] + dp[c - weight[i]]
      }
      curRow[c] = Math.max(skip, include)
    }
  }

  return dp[M]
}

export function zeroOneKnapsackDfs(
  profit: number[],
  weight: number[],
  capacity: number
): number {
  const cache = new Map<string, number>()

  const dfs = (i: number, remain: number): number => {
    if (cache.has(`${i}-${remain}`)) return cache.get(`${i}-${remain}`)!

    if (i === profit.length) return 0

    // skip item i
    let maxProfit = dfs(i + 1, remain)

    // include item i
    const newRemain = remain - weight[i]
    if (newRemain >= 0) {
      const p = profit[i] + dfs(i + 1, newRemain)
      maxProfit = Math.max(maxProfit, p)
    }

    cache.set(`${i}-${remain}`, maxProfit)
    return maxProfit
  }

  return dfs(0, capacity)
}
