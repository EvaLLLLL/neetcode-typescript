export function carFleet(
  target: number,
  position: number[],
  speed: number[]
): number {
  const pairs = position
    .map((p, i) => [p, speed[i]])
    .sort((a, b) => b[0] - a[0])

  let stack: number[] = []

  for (let [p, s] of pairs) {
    stack.push((target - p) / s)

    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop()
    }
  }

  return stack.length
}
