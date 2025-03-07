import { encode, decode } from '../problems/string-encode-and-decode'

describe('string-encode-and-decode', () => {
  test('case 1', () => {
    const input = ['hello', 'world']
    const encoded = encode(input)
    const decoded = decode(encoded)
    expect(decoded).toEqual(input)
  })

  test('case 2', () => {
    const input = ['foo', 'bar', 'baz']
    const encoded = encode(input)
    const decoded = decode(encoded)
    expect(decoded).toEqual(input)
  })

  test('case 3', () => {
    const input = ['', 'a', 'bc']
    const encoded = encode(input)
    const decoded = decode(encoded)
    expect(decoded).toEqual(input)
  })

  test('case 4', () => {
    const input = ['we', 'say', ':', 'yes', '!@#$%^&*()']
    const encoded = encode(input)
    const decoded = decode(encoded)
    expect(decoded).toEqual(input)
  })

  test('case 5', () => {
    const input = ['1,23', '45,6', '7,8,9']
    const encoded = encode(input)
    const decoded = decode(encoded)
    expect(decoded).toEqual(input)
  })
})
