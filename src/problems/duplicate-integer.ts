export function duplicateInteger(nums: number[]) {
  const set = new Set()

  for (let num of nums) {
    if (set.has(num)) return true

    set.add(num)
  }

  return false
}
