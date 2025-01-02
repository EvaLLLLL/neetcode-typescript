import { evaluateReversePolishNotation } from '../problems/evaluate-reverse-polish-notation'

describe('evaluate-reverse-polish-notation', () => {
  test('case 1', () => {
    const tokens = ['2', '1', '+', '3', '*']
    const result = evaluateReversePolishNotation(tokens)
    const expected = 9
    expect(result).toBe(expected)
  })

  test('case 2', () => {
    const tokens = ['2', '1', '+', '3', '*']
    const result = evaluateReversePolishNotation(tokens)
    const expected = 9
    expect(result).toBe(expected)
  })

  test('case 3', () => {
    const tokens = ['3', '4', '+', '2', '*', '7', '/']
    const result = evaluateReversePolishNotation(tokens)
    const expected = 2
    expect(result).toBe(expected)
  })

  test('case 4', () => {
    const tokens = ['4', '13', '5', '/', '+']
    const result = evaluateReversePolishNotation(tokens)
    const expected = 6
    expect(result).toBe(expected)
  })
})
