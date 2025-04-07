export function palindromicSubstrings(s: string): number {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    // odd length
    count += countPali(s, i, i)

    // even length
    count += countPali(s, i, i + 1)
  }

  return count
}

function countPali(s: string, l: number, r: number) {
  let count = 0

  while (l >= 0 && r < s.length && s[l] === s[r]) {
    count++
    l--
    r++
  }

  return count
}
