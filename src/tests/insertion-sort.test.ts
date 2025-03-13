import { insertionSort } from '../problems/insertion-sort'
import { Pair } from '../types/pair'

describe('insertion-sort', () => {
  test('case 1', () => {
    const pairs: Pair[] = [
      new Pair(5, 'apple'),
      new Pair(2, 'banana'),
      new Pair(9, 'cherry')
    ]
    const expectedOutput = [
      [new Pair(5, 'apple'), new Pair(2, 'banana'), new Pair(9, 'cherry')],
      [new Pair(2, 'banana'), new Pair(5, 'apple'), new Pair(9, 'cherry')],
      [new Pair(2, 'banana'), new Pair(5, 'apple'), new Pair(9, 'cherry')]
    ]
    expect(insertionSort(pairs)).toEqual(expectedOutput)
  })

  test('case 2', () => {
    const pairs: Pair[] = [
      new Pair(3, 'cat'),
      new Pair(3, 'bird'),
      new Pair(2, 'dog')
    ]
    const expectedOutput = [
      [new Pair(3, 'cat'), new Pair(3, 'bird'), new Pair(2, 'dog')],
      [new Pair(3, 'cat'), new Pair(3, 'bird'), new Pair(2, 'dog')],
      [new Pair(2, 'dog'), new Pair(3, 'cat'), new Pair(3, 'bird')]
    ]
    expect(insertionSort(pairs)).toEqual(expectedOutput)
  })
})
