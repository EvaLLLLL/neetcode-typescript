export function maxWaterContainer(heights: number[]): number {
  let res = 0
  let l = 0
  let r = heights.length - 1

  while (l < r) {
    res = Math.max((r - l) * Math.min(heights[l], heights[r]), res)
    if (heights[l] < heights[r]) {
      l++
    } else {
      r--
    }
  }

  return res
}
