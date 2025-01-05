export function combinationTargetSum(
  nums: number[],
  target: number
): number[][] {
  nums.sort((a, b) => a - b)

  let res: number[][] = []
  let cur: number[] = []

  function dfs(i: number) {
    const total = cur.reduce((a, b) => a + b, 0)
    if (total === target) {
      res.push([...cur])
      return
    }

    for (let j = i; j < nums.length; j++) {
      if (total + nums[j] > target) return

      cur.push(nums[j])
      dfs(j)
      cur.pop()
    }
  }

  dfs(0)

  return res
}
