export function permutations(nums: number[]): number[][] {
  if (nums.length === 0) return [[]]

  let perms = permutations(nums.slice(1))
  let res: number[][] = []

  for (let p of perms) {
    for (let i = 0; i <= p.length; i++) {
      const pCopy = [...p]
      pCopy.splice(i, 0, nums[0])
      res.push(pCopy)
    }
  }

  return res
}
