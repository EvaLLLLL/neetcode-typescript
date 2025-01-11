export function longestRepeatingSubstringWithReplacement(s: string, k: number) {
  let count = new Map<string, number>()
  let left = 0,
    res = 0,
    maxF = 0

  for (let right = 0; right < s.length; right++) {
    count.set(s[right], (count.get(s[right]) || 0) + 1)

    maxF = Math.max(maxF, count.get(s[right]) || 0)

    while (right - left + 1 - maxF > k) {
      count.set(s[left], (count.get(s[left]) || 0) - 1)
      left++
    }

    res = Math.max(res, right - left + 1)
  }

  return res
}
