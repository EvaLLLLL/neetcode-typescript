// Brute Force Time: O(n^2); Space: O(1)
export function trappingRainWaterBruteForce(heights: number[]): number {
  let sum = 0

  for (let i = 0; i < heights.length; i++) {
    let leftMax = heights[i]
    let rightMax = heights[i]

    for (let j = 0; j < i; j++) {
      leftMax = Math.max(heights[j], leftMax)
    }

    for (let j = i + 1; j < heights.length; j++) {
      rightMax = Math.max(heights[j], rightMax)
    }

    let h = Math.min(leftMax, rightMax) - heights[i]
    sum += h > 0 ? h : 0
  }

  return sum
}

// Two pointer Time: O(n); Space: O(1)
export function trappingRainWater(heights: number[]): number {
  let sum = 0
  let l = 0
  let r = heights.length - 1
  let maxL = heights[l]
  let maxR = heights[r]

  while (l < r) {
    if (maxL <= maxR) {
      sum += maxL - heights[l] > 0 ? maxL - heights[l] : 0
      l++
      maxL = Math.max(maxL, heights[l])
    } else {
      sum += maxR - heights[r] > 0 ? maxR - heights[r] : 0
      r--
      maxR = Math.max(maxR, heights[r])
    }
  }

  return sum
}
