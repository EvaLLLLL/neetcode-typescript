export function longestSubstringWithoutDuplicates(s: string): number {
  let max = 0
  let start = 0
  let charSet = new Set<string>()

  for (let i = 0; i < s.length; i++) {
    while (charSet.has(s[i])) {
      charSet.delete(s[start])
      start++
    }

    charSet.add(s[i])
    max = Math.max(max, i - start + 1)
  }

  return max
}
