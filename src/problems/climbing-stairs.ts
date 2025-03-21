export function climbingStairs(n: number) {
  let dp: number[] = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
