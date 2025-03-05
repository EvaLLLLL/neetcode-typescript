export function permutationsIi(nums: number[]): number[][] {
  let cur: number[] = []
  let res: number[][] = []
  let map = new Map<number, number>()

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  function dfs() {
    if (cur.length === nums.length) {
      res.push([...cur])
      return
    }

    for (const [num] of map) {
      if ((map.get(num) || 0) > 0) {
        cur.push(num)
        map.set(num, (map.get(num) || 0) - 1)

        dfs()

        map.set(num, (map.get(num) || 0) + 1)
        cur.pop()
      }
    }
  }

  dfs()
  return res
}
