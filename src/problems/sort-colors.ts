export function sortColors(nums: number[]) {
  let counts = [0, 0, 0]
  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]] += 1
  }

  let k = 0
  for (let i = 0; i < counts.length; i++) {
    for (let j = counts[i]; j > 0; j--) {
      nums[k] = i
      k++
    }
  }
}
