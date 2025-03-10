export function matrixBfs(grid: number[][]): number {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  const ROWS = grid.length
  const COLS = grid[0].length
  let queue: Array<[number, number]> = []
  let visited = new Set<string>()
  let length = 0

  queue.push([0, 0])

  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift() as [number, number]

      if (r === ROWS - 1 && c === COLS - 1) return length

      if (
        r < 0 ||
        c < 0 ||
        r >= ROWS ||
        c >= COLS ||
        grid[r][c] === 1 ||
        visited.has(`${r}-${c}`)
      ) {
        continue
      }

      visited.add(`${r}-${c}`)
      for (const [dr, dc] of directions) {
        queue.push([r + dr, c + dc])
      }
    }
    length++
  }

  return -1
}
