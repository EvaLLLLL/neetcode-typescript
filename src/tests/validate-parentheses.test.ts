import { validateParentheses } from '../problems/validate-parentheses'

describe('validate-parentheses', () => {
  test('valid case with all types of brackets', () => {
    const s = '(){}[]'
    expect(validateParentheses(s)).toBe(true)
  })

  test('valid case with nested brackets', () => {
    const s = '({[]})'
    expect(validateParentheses(s)).toBe(true)
  })

  test('invalid case with incorrect order', () => {
    const s = '(]'
    expect(validateParentheses(s)).toBe(false)
  })

  test('invalid case with no matching open bracket', () => {
    const s = '([)]'
    expect(validateParentheses(s)).toBe(false)
  })

  test('invalid case with extra closing bracket', () => {
    const s = '(()'
    expect(validateParentheses(s)).toBe(false)
  })

  test('valid case with empty string', () => {
    const s = ''
    expect(validateParentheses(s)).toBe(true)
  })
})
