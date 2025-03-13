import { mergeSort } from '../problems/merge-sort'
import { Pair } from '../types/pair'

describe('merge-sort', () => {
  test('case 1: sort key-value pairs with unique keys', () => {
    const pairs = [
      new Pair(5, 'apple'),
      new Pair(2, 'banana'),
      new Pair(9, 'cherry'),
      new Pair(1, 'date'),
      new Pair(9, 'elderberry')
    ]
    const sortedPairs = mergeSort(pairs)
    const expectedOutput = [
      new Pair(1, 'date'),
      new Pair(2, 'banana'),
      new Pair(5, 'apple'),
      new Pair(9, 'cherry'),
      new Pair(9, 'elderberry')
    ]
    expect(sortedPairs).toEqual(expectedOutput)
  })

  test('case 2: sort key-value pairs with duplicate keys', () => {
    const pairs = [new Pair(3, 'cat'), new Pair(2, 'dog'), new Pair(3, 'bird')]
    const sortedPairs = mergeSort(pairs)
    const expectedOutput = [
      new Pair(2, 'dog'),
      new Pair(3, 'cat'),
      new Pair(3, 'bird')
    ]
    expect(sortedPairs).toEqual(expectedOutput)
  })

  test('case 3: sort an empty list', () => {
    const pairs: Pair[] = []
    const sortedPairs = mergeSort(pairs)
    const expectedOutput: Pair[] = []
    expect(sortedPairs).toEqual(expectedOutput)
  })

  test('case 4: sort a list with one element', () => {
    const pairs = [new Pair(1, 'single')]
    const sortedPairs = mergeSort(pairs)
    const expectedOutput = [new Pair(1, 'single')]
    expect(sortedPairs).toEqual(expectedOutput)
  })
})
