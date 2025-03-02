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

export function permute(nums: number[]): number[][] {
  const res: number[][] = []

  const backtrack = (nums: number[], idx: number) => {
    if (idx === nums.length) {
      res.push([...nums])
      return
    }

    for (let i = idx; i < nums.length; i++) {
      ;[nums[idx], nums[i]] = [nums[i], nums[idx]]
      backtrack(nums, idx + 1)
      ;[nums[idx], nums[i]] = [nums[i], nums[idx]]
    }
  }

  backtrack(nums, 0)
  return res
}

export function permutations2(nums: number[]): number[][] {
  let res: number[][] = []
  let cur: number[] = []

  function backtrack(pick: boolean[]) {
    if (cur.length === nums.length) {
      res.push([...cur])
      return
    }

    for (let num of nums) {
      if (!pick[num]) {
        cur.push(num)
        pick[num] = true

        backtrack(pick)

        cur.pop()
        pick[num] = false
      }
    }
  }

  backtrack([])
  return res
}
