// sorted set
export function removeDuplicatesFromSortedArray(nums: number[]): number {
  const unique = Array.from(new Set(nums)).sort((a, b) => a - b)

  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i]
  }

  return unique.length
}

// Two Pointer
export function removeDuplicatesFromSortedArray2(nums: number[]): number {
  if (nums.length <= 1) return nums.length

  let left = 1

  for (let right = 1; right < nums.length; right++) {
    if (nums[right] != nums[right - 1]) {
      nums[left] = nums[right]
      left++
    }
  }

  return left
}
