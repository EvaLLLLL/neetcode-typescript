export function generateParentheses(n: number): string[] {
  let res: string[] = []
  let stack: string[] = []

  function backtrack(openNum: number = 0, closeNum: number = 0) {
    if (openNum === closeNum && openNum === n) {
      res.push(stack.join(''))
      return
    }

    if (openNum < n) {
      stack.push('(')
      backtrack(openNum + 1, closeNum)
      stack.pop()
    }

    if (closeNum < openNum) {
      stack.push(')')
      backtrack(openNum, closeNum + 1)
      stack.pop()
    }
  }

  backtrack()

  return res
}
