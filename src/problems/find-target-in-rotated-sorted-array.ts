export function findTargetInRotatedSortedArray(nums: number[], target: number) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const m = Math.floor((l + r) / 2)
    if (nums[m] === target) return m

    if (nums[m] >= nums[l]) {
      if (target > nums[m] || target < nums[l]) {
        l = m + 1
      } else {
        r = m - 1
      }
    } else {
      if (target > nums[r] || target < nums[m]) {
        r = m - 1
      } else {
        l = m + 1
      }
    }
  }

  return -1
}
