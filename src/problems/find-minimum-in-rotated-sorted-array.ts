export function findMinimumInRotatedSortedArray(nums: number[]) {
  let l = 0
  let r = nums.length - 1
  let res = nums[0]

  while (l <= r) {
    if (nums[l] <= nums[r]) {
      res = Math.min(res, nums[l])
      break
    }

    const m = Math.floor((l + r) / 2)
    res = Math.min(res, nums[m])

    if (nums[m] >= nums[r]) {
      l = m + 1
    } else {
      r = m - 1
    }
  }

  return res
}
