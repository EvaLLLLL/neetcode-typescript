export function validateParentheses(s: string): boolean {
  const stack: string[] = []
  const closeToOpen: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (let c of s) {
    if (closeToOpen[c]) {
      if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
        stack.pop()
      }
    } else {
      stack.push(c)
    }
  }

  return stack.length === 0
}
