const DIGIT_TO_CHAR: { [key: string]: string } = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
}

export function combinationsOfAPhoneNumber(digits: string): string[] {
  if (!digits) return []

  const res: string[] = []

  const dfs = (i: number, cur: string) => {
    if (cur.length === digits.length) {
      res.push(cur)
      return
    }

    for (let c of DIGIT_TO_CHAR[digits[i]]) {
      dfs(i + 1, cur + c)
    }
  }

  dfs(0, '')

  return res
}
