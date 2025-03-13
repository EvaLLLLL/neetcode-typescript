import { Pair } from '../types/pair'

export function quickSort(pairs: Pair[]) {
  quickSortHelper(pairs, 0, pairs.length - 1)
  return pairs
}

export function quickSortHelper(pairs: Pair[], s: number, e: number) {
  if (e - s < 1) return

  let left = s
  const pivot = pairs[e]

  for (let i = s; i < e; i++) {
    if (pairs[i].key < pivot.key) {
      let temp = pairs[left]
      pairs[left] = pairs[i]
      pairs[i] = temp
      left++
    }
  }

  if (left !== e) {
    let temp = pairs[left]
    pairs[left] = pivot
    pairs[e] = temp
  }

  quickSortHelper(pairs, s, left - 1)
  quickSortHelper(pairs, left + 1, e)
}
