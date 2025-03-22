export function palindromePartitioning(s: string): string[][] {
  const res: string[][] = []

  const backtrack = (i: number, cur: string[]) => {
    if (i >= s.length) {
      res.push([...cur])
      return
    }

    for (let j = i; j < s.length; j++) {
      const str = s.substring(i, j + 1)

      if (isPali(str)) {
        cur.push(str)
        backtrack(j + 1, cur)
        cur.pop()
      }
    }
  }

  backtrack(0, [])
  return res
}

function isPali(str: string) {
  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (str[left] !== str[right]) return false
    left++
    right--
  }

  return true
}
