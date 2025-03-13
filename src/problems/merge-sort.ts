import { Pair } from '../types/pair'

export function mergeSort(pairs: Pair[]) {
  mergeSortHelper(pairs, 0, pairs.length - 1)
  return pairs
}

function mergeSortHelper(pairs: Pair[], s: number, e: number) {
  if (e - s + 1 <= 1) return

  let m = Math.floor((s + e) / 2)

  mergeSortHelper(pairs, s, m)
  mergeSortHelper(pairs, m + 1, e)

  merge(pairs, s, m, e)
}

function merge(pairs: Pair[], s: number, m: number, e: number) {
  const left = pairs.slice(s, m + 1)
  const right = pairs.slice(m + 1, e + 1)

  let i = 0,
    j = 0,
    k = s

  while (i < left.length && j < right.length) {
    if (left[i].key <= right[j].key) {
      pairs[k] = left[i]
      i++
    } else {
      pairs[k] = right[j]
      j++
    }
    k++
  }

  while (i < left.length) {
    pairs[k] = left[i]
    i++
    k++
  }

  while (j < right.length) {
    pairs[k] = right[j]
    j++
    k++
  }
}
