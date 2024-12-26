export function binarySearch(nums: number[], target: number) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    // let m = Math.floor((l + r) / 2)
    let m = Math.floor(l + (r - l) / 2)

    if (target > nums[m]) {
      l = m + 1
    } else if (target < nums[m]) {
      r = m - 1
    } else {
      return m
    }
  }

  return -1
}
