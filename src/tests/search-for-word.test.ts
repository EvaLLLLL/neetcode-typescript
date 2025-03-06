import { searchForWord } from '../problems/search-for-word'

describe('search-for-word', () => {
  test('case 1: word exists in grid', () => {
    const board = [
      ['A', 'B', 'C', 'D'],
      ['S', 'A', 'A', 'T'],
      ['A', 'C', 'A', 'E']
    ]
    const word = 'CAT'
    expect(searchForWord(board, word)).toBe(true)
  })

  test('case 2: word does not exist in grid', () => {
    const board = [
      ['A', 'B', 'C', 'D'],
      ['S', 'A', 'A', 'T'],
      ['A', 'C', 'A', 'E']
    ]
    const word = 'DOG'
    expect(searchForWord(board, word)).toBe(false)
  })

  test('case 3: single character word exists', () => {
    const board = [
      ['A', 'B', 'C'],
      ['D', 'E', 'F']
    ]
    const word = 'E'
    expect(searchForWord(board, word)).toBe(true)
  })

  test('case 4: word longer than grid dimensions', () => {
    const board = [
      ['A', 'B'],
      ['C', 'D']
    ]
    const word = 'ABCDEF'
    expect(searchForWord(board, word)).toBe(false)
  })
})
