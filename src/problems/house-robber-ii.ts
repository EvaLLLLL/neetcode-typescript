export function houseRobberIi(nums: number[]): number {
  if (nums.length <= 1) return nums[0]

  const helper = (arr: number[]) => {
    let rob1 = 0
    let rob2 = 0

    // [rob1, rob2, n, n + 1, ...]
    for (let n of arr) {
      let tmp = Math.max(rob1 + n, rob2)
      rob1 = rob2
      rob2 = tmp
    }

    return rob2
  }

  return Math.max(helper(nums.slice(1)), helper(nums.slice(0, -1)))
}
