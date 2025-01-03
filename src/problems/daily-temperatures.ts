export function dailyTemperatures(temperatures: number[]): number[] {
  let output: number[] = Array(temperatures.length).fill(0)
  let stack: [number, number][] = []

  for (let i = 0; i < temperatures.length; i++) {
    const t = temperatures[i]
    while (stack.length && t > stack[stack.length - 1][0]) {
      const popped = stack.pop()
      if (popped) {
        const [_, stackIdx] = popped
        output[stackIdx] = i - stackIdx
      }
    }
    stack.push([t, i])
  }

  return output
}
