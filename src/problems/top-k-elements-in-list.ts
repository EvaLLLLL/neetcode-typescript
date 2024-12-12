export function topKElementsInList(nums: number[], k: number): number[] {
  const countMap = new Map<number, number>()
  const freq: number[][] = [[]]

  nums.forEach((num) => countMap.set(num, (countMap.get(num) || 0) + 1))

  Array.from(countMap.entries()).forEach(([num, count]) => {
    if (freq[count]) {
      freq[count].push(num)
    } else {
      freq[count] = [num]
    }
  })

  const result: number[] = []

  for (let i = freq.length - 1; i > 0; i--) {
    if (!freq[i]) continue

    const nums = Array.from(freq[i])

    for (let n of nums) {
      result.push(n)
    }

    if (result.length === k) {
      return result
    }
  }

  return result
}
