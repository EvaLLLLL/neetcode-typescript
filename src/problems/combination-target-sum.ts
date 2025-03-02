export function combinationTargetSum(
  nums: number[],
  target: number
): number[][] {
  let cur: number[] = []
  let res: number[][] = []

  function backtrack(i: number, t: number) {
    if (t === 0) {
      res.push([...cur])
    } else if (t < 0 || i >= nums.length) {
      return
    } else {
      cur.push(nums[i])
      backtrack(i, t - nums[i])

      cur.pop()
      backtrack(i + 1, t)
    }
  }

  backtrack(0, target)

  return res
}
