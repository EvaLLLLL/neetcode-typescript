export function houseRobber(nums: number[]): number {
  let rob1 = 0
  let rob2 = 0

  // [rob1, rob2, n, n+1, ...]
  for (let num of nums) {
    let temp = Math.max(num + rob1, rob2)
    rob1 = rob2
    rob2 = temp
  }

  return rob2
}
