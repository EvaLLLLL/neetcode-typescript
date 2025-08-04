export function decodeWays(s: string): number {
  // dp[i] = dp[i + 1] + dp[i + 2]
  const dp = Array(s.length).fill(0)

  for (let i = 0; i < s.length - 2; i++) {
    if (s[i].startsWith('0')) {
      dp[i] = 0
    } else {
      dp[i] = dp[i + 1] + dp[i + 2]
    }
  }

  return dp[dp.length - 1]
}
