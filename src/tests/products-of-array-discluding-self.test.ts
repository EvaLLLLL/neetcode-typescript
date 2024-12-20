import { productsOfArrayDiscludingSelf } from '../problems/products-of-array-discluding-self'

describe('products-of-array-discluding-self', () => {
  test('case 1', () => {
    const input = [1, 2, 3, 4]
    const output = productsOfArrayDiscludingSelf(input)
    expect(output).toEqual([24, 12, 8, 6])
  })

  test('case 2', () => {
    const input = [5, 6, 7, 8]
    const output = productsOfArrayDiscludingSelf(input)
    expect(output).toEqual([336, 280, 240, 210])
  })

  test('case 3', () => {
    const input = [2, 3, 4, 5]
    const output = productsOfArrayDiscludingSelf(input)
    expect(output).toEqual([60, 40, 30, 24])
  })

  test('case 4', () => {
    const input = [1, 0, 3, 4]
    const output = productsOfArrayDiscludingSelf(input)
    expect(output).toEqual([0, 12, 0, 0])
  })

  test('case 5', () => {
    const input = [0, 0, 0, 0]
    const output = productsOfArrayDiscludingSelf(input)
    expect(output).toEqual([0, 0, 0, 0])
  })

  test('case 5', () => {
    const input = [1, 2, 4, 6]
    const output = productsOfArrayDiscludingSelf(input)
    expect(output).toEqual([48, 24, 12, 8])
  })
})
