// export function minCostClimbingStairs(cost: number[]): number {
//   const n = cost.length
//   const dp: number[] = Array(n + 1).fill(0)

//   for (let i = 2; i <= n; i++) {
//     dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
//   }

//   return dp[n]
// }

export function minCostClimbingStairs(cost: number[]): number {
  for (let i = cost.length - 3; i >= 0; i--) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2])
  }

  return Math.min(cost[0], cost[1])
}
