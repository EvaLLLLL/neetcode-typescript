export function validSudoku(board: string[][]): boolean {
  const rowMap = new Map<number, string[]>()
  const colMap = new Map<number, string[]>()
  const squareMap = new Map<string, string[]>()

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === '.') continue

      const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`

      if (rowMap.get(r) && rowMap.get(r)?.includes(board[r][c])) return false
      if (colMap.get(c) && colMap.get(c)?.includes(board[r][c])) return false
      if (
        squareMap.get(squareKey) &&
        squareMap.get(squareKey)?.includes(board[r][c])
      )
        return false

      rowMap.set(r, [...(rowMap.get(r) || []), board[r][c]])
      colMap.set(c, [...(colMap.get(c) || []), board[r][c]])
      squareMap.set(squareKey, [
        ...(squareMap.get(squareKey) || []),
        board[r][c]
      ])
    }
  }

  return true
}
