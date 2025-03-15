class Spreadsheet {
  private grid: number[][]
  private rows: number
  private cols: number = 26

  constructor(rows: number) {
    this.rows = rows
    this.grid = Array(rows)
      .fill(0)
      .map(() => Array(26).fill(0))
  }

  setCell(cell: string, value: number): void {
    const [row, col] = this.parseCellRef(cell)
    this.grid[row][col] = value
  }

  resetCell(cell: string): void {
    const [row, col] = this.parseCellRef(cell)
    this.grid[row][col] = 0
  }

  getValue(formula: string): number {
    if (!formula.startsWith('=')) {
      return 0
    }

    const [x, y] = formula.slice(1).split('+')

    const xValue = this.isNumber(x) ? parseInt(x) : this.getCellValue(x)
    const yValue = this.isNumber(y) ? parseInt(y) : this.getCellValue(y)

    return xValue + yValue
  }

  private parseCellRef(cell: string): [number, number] {
    const col = cell.charCodeAt(0) - 'A'.charCodeAt(0)
    const row = parseInt(cell.slice(1)) - 1
    return [row, col]
  }

  private getCellValue(cell: string): number {
    const [row, col] = this.parseCellRef(cell)
    if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
      return 0
    }
    return this.grid[row][col]
  }

  private isNumber(str: string): boolean {
    return /^\d+$/.test(str)
  }
}
