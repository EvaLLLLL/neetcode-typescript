export function subsetsIi(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)

  let res: number[][] = []
  let curr: number[] = []

  function backtract(i: number) {
    if (i == nums.length) {
      res.push([...curr])
      return
    }

    curr.push(nums[i])
    backtract(i + 1)
    curr.pop()

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i += 1
    }
    backtract(i + 1)
  }

  backtract(0)
  return res
}
