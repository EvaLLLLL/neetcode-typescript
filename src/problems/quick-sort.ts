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
      ;[pairs[left], pairs[i]] = [pairs[i], pairs[left]]
      left++
    }
  }

  if (left !== e) {
    ;[pairs[left], pairs[e]] = [pairs[e], pairs[left]]
  }

  quickSortHelper(pairs, s, left - 1)
  quickSortHelper(pairs, left + 1, e)
}
