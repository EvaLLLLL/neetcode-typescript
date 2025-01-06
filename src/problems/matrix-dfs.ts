export function matrixDfs(grid: number[][]): number {
  const visit = new Set<string>()
  return dfs(grid, 0, 0, visit)
}

function dfs(
  grid: number[][],
  r: number,
  c: number,
  visit: Set<string>
): number {
  const ROWS = grid.length
  const COLS = grid[0].length

  if (
    r < 0 ||
    c < 0 ||
    r === ROWS ||
    c === COLS ||
    visit.has(`${r}${c}`) ||
    grid[r][c] === 1
  )
    return 0

  if (r === ROWS - 1 && c === COLS - 1) return 1

  visit.add(`${r}${c}`)

  let count = 0
  count += dfs(grid, r + 1, c, visit)
  count += dfs(grid, r - 1, c, visit)
  count += dfs(grid, r, c + 1, visit)
  count += dfs(grid, r, c - 1, visit)

  visit.delete(`${r}${c}`)

  return count
}
