export function kthLargestElementInAnArray(nums: number[], k: number) {
  let idx = nums.length - k

  function quickSelect(s: number, e: number) {
    let p = s
    let pivot = nums[e]

    for (let i = s; i < e; i++) {
      if (nums[i] <= pivot) {
        ;[nums[p], nums[i]] = [nums[i], nums[p]]
        p += 1
      }
    }
    ;[nums[p], nums[e]] = [nums[e], nums[p]]

    if (p > idx) {
      return quickSelect(s, p - 1)
    } else if (p < idx) {
      return quickSelect(p + 1, e)
    } else {
      return nums[p]
    }
  }

  return quickSelect(0, nums.length - 1)
}
