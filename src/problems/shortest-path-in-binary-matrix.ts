export function shortestPathInBinaryMatrix(grid: number[][]): number {
  const N = grid.length

  if (grid[0][0] === 1 || grid[N - 1][N - 1] === 1) return -1

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ]
  const queue: [number, number, number][] = []
  const visited = new Set<string>()

  queue.push([0, 0, 1])

  while (queue.length) {
    const [r, c, l] = queue.shift() as [number, number, number]

    if (r === N - 1 && c === N - 1) return l

    if (
      r < 0 ||
      c < 0 ||
      r >= N ||
      c >= N ||
      grid[r][c] === 1 ||
      visited.has(`${r}-${c}`)
    )
      continue

    visited.add(`${r}-${c}`)
    for (const [dr, dc] of directions) {
      queue.push([r + dr, c + dc, l + 1])
    }
  }

  return -1
}
