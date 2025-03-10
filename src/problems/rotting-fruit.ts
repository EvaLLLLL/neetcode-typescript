export function rottingFruit(grid: number[][]): number {
  let queue: number[][] = []
  let time = 0
  let fresh = 0
  const ROWS = grid.length
  const COLS = grid[0].length
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 1) fresh++
      if (grid[r][c] === 2) queue.push([r, c])
    }
  }

  while (fresh > 0 && queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift() as [number, number]

      for (const [dr, dc] of directions) {
        const row = r + dr
        const col = c + dc
        if (
          row < 0 ||
          col < 0 ||
          row >= ROWS ||
          col >= ROWS ||
          grid[row][col] !== 1
        ) {
          continue
        }
        grid[row][col] = 2
        queue.push([row, col])
        fresh--
      }
    }
    time++
  }

  return fresh > 0 ? -1 : time
}
