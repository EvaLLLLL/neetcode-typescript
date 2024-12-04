export default function longestConsecutiveSequence(nums: number[]): number {
  const set = new Set(nums)

  function isStart(n: number) {
    return !set.has(n - 1)
  }

  let result = 0

  for (let num of nums) {
    if (isStart(num)) {
      let i = 1
      while (set.has(num + i)) {
        i++
      }

      if (i > result) {
        result = i
      }
    }
  }

  return result
}
