// [1,1,1,2,2,3]
export function removeDuplicatesFromSortedArrayIi(nums: number[]) {
  let l = 2

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[l - 2]) {
      nums[l] = nums[i]
      l++
    }
  }

  return l
}
