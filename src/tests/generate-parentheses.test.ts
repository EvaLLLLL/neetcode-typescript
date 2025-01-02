import { generateParentheses } from '../problems/generate-parentheses'

describe('generate-parentheses', () => {
  test('case 1', () => {
    const n = 3
    const result = generateParentheses(n)
    const expected = ['((()))', '(()())', '(())()', '()(())', '()()()']
    expect(result).toEqual(expected)
  })

  test('case 2', () => {
    const n = 1
    const result = generateParentheses(n)
    const expected = ['()']
    expect(result).toEqual(expected)
  })

  test('case 3', () => {
    const n = 2
    const result = generateParentheses(n)
    const expected = ['(())', '()()']
    expect(result).toEqual(expected)
  })

  test('case 4', () => {
    const n = 0
    const result = generateParentheses(n)
    const expected = ['']
    expect(result).toEqual(expected)
  })

  test('case 5', () => {
    const n = 4
    const result = generateParentheses(n)
    const expected = [
      '(((())))',
      '((()()))',
      '((())())',
      '((()))()',
      '(()(()))',
      '(()()())',
      '(()())()',
      '(())(())',
      '(())()()',
      '()((()))',
      '()(()())',
      '()(())()',
      '()()(())',
      '()()()()'
    ]
    expect(result).toEqual(expected)
  })
})
