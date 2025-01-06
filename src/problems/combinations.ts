export function combinations(n: number, k: number): number[][] {
  let res: number[][] = []
  let curr: number[] = []

  function helper(i: number) {
    if (curr.length === k) {
      res.push([...curr])
      return
    }

    if (i > n) return

    for (let j = i; j <= n; j++) {
      curr.push(j)
      helper(j + 1)
      curr.pop()
    }
  }

  helper(1)

  return res
}
