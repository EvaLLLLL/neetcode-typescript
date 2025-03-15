export function unique3DifitEvenNumbers(digits: number[]): number {
  const freq = new Array(10).fill(0)
  for (const d of digits) {
    freq[d]++
  }

  let count = 0
  for (let last = 0; last <= 9; last += 2) {
    if (freq[last] === 0) continue

    for (let first = 0; first <= 9; first++) {
      if (freq[first] === 0) continue
      if (first === last && freq[first] < 2) continue

      for (let mid = 0; mid <= 9; mid++) {
        if (freq[mid] === 0) continue
        if (mid === first && freq[first] < 2) continue
        if (mid === last && freq[last] < 2) continue
        if (mid === first && mid === last && freq[mid] < 3) continue

        if (first === 0) continue

        count++
      }
    }
  }

  return count
}
