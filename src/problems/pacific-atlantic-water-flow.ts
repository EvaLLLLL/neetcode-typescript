export function pacificAtlanticWaterFlow(heights: number[][]): number[][] {
  const ROWS = heights.length
  const COLS = heights[0].length

  let pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false))
  let alt = Array.from({ length: ROWS }, () => Array(COLS).fill(false))

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]

  const dfs = (r: number, c: number, ocean: boolean[][]) => {
    ocean[r][c] = true

    for (let [dr, dc] of directions) {
      const row = r + dr
      const col = c + dc

      if (
        row >= 0 &&
        col >= 0 &&
        row < ROWS &&
        col < COLS &&
        !ocean[row][col] &&
        heights[row][col] >= heights[r][c]
      ) {
        dfs(row, col, ocean)
      }
    }
  }

  for (let c = 0; c < COLS; c++) {
    // dfs 1st row -> can flow into pacific
    dfs(0, c, pac)
    // dfs last row -> can flow into altlantic
    dfs(ROWS - 1, c, alt)
  }
  for (let r = 0; r < ROWS; r++) {
    // dfs 1st col -> can flow into pacific
    dfs(r, 0, pac)
    // dfs last col -> can flow into altlantic
    dfs(r, COLS - 1, alt)
  }

  // both can flow into pac and alt
  let res: number[][] = []
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (pac[r][c] && alt[r][c]) {
        res.push([r, c])
      }
    }
  }

  return res
}
