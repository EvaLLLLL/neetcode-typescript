export function combinationTargetSumIi(
  candidates: number[],
  target: number
): number[][] {
  let cur: number[] = []
  let res: number[][] = []

  candidates.some((a, b) => a - b)

  function backtrack(i: number, t: number) {
    if (t === 0) {
      res.push([...cur])
    } else if (t < 0 || i >= candidates.length) {
      return
    } else {
      cur.push(candidates[i])
      backtrack(i + 1, t - candidates[i])

      cur.pop()

      while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
        i++
      }
      backtrack(i + 1, t)
    }
  }

  backtrack(0, target)

  return res
}
