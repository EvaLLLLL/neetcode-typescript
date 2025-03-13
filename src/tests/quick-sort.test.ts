import { quickSort } from '../problems/quick-sort'
import { Pair } from '../types/pair'

describe('quick-sort', () => {
  test('case 1', () => {
    const pairs = [new Pair(3, 'cat'), new Pair(2, 'dog'), new Pair(3, 'bird')]
    const sortedPairs = quickSort(pairs)
    expect(sortedPairs).toEqual([
      new Pair(2, 'dog'),
      new Pair(3, 'bird'),
      new Pair(3, 'cat')
    ])
  })

  test('case 2', () => {
    const pairs = [
      new Pair(5, 'apple'),
      new Pair(9, 'banana'),
      new Pair(9, 'cherry'),
      new Pair(1, 'date'),
      new Pair(9, 'elderberry')
    ]
    const sortedPairs = quickSort(pairs)
    expect(sortedPairs).toEqual([
      new Pair(1, 'date'),
      new Pair(5, 'apple'),
      new Pair(9, 'elderberry'),
      new Pair(9, 'cherry'),
      new Pair(9, 'banana')
    ])
  })
})
