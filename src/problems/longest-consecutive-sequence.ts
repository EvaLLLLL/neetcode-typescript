export default function longestConsecutiveSequence(nums: number[]): number {
  const set = new Set(nums)

  function isStart(n: number) {
    return !set.has(n - 1)
  }

  let res = 0

  for (let num of set) {
    if (isStart(num)) {
      let i = 1
      while (set.has(num + i)) {
        i++
      }

      res = Math.max(res, i)
    }
  }

  return res
}
