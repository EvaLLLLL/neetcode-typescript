export function evaluateReversePolishNotation(tokens: string[]): number {
  const stack: number[] = []
  for (const c of tokens) {
    switch (c) {
      case '+':
        stack.push((stack.pop() || 0) + (stack.pop() || 0))
        break
      case '-':
        let a = stack.pop() || 0
        let b = stack.pop() || 0
        stack.push(b - a)
        break
      case '/':
        let d = stack.pop() || 0
        let e = stack.pop() || 0
        stack.push(Math.trunc(e / d))
        break
      case '*':
        stack.push((stack.pop() || 0) * (stack.pop() || 0))
        break
      default:
        stack.push(+c)
        break
    }
  }

  return stack.pop() || 0
}
