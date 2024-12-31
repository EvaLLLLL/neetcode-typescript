export function numberOfOneBits(n: number) {
  let count = 0

  while (n) {
    if ((n & 1) === 1) count += 1
    n >>= 1
  }

  return count
}
