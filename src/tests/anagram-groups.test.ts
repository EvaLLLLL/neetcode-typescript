import { anagramGroups } from '../problems/anagram-groups'

describe('anagram-groups', () => {
  test('case 1', () => {
    const strs = ['act', 'pots', 'tops', 'cat', 'stop', 'hat']
    const output = [['hat'], ['act', 'cat'], ['stop', 'pots', 'tops']]
    expect(anagramGroups(strs)).toEqual(
      expect.arrayContaining(
        output.map((group) => expect.arrayContaining(group))
      )
    )
  })
  test('case 2', () => {
    const strs = ['x']
    const output = [['x']]
    expect(anagramGroups(strs)).toEqual(
      expect.arrayContaining(
        output.map((group) => expect.arrayContaining(group))
      )
    )
  })
  test('case 3', () => {
    const strs = ['']
    const output = [['']]
    expect(anagramGroups(strs)).toEqual(
      expect.arrayContaining(
        output.map((group) => expect.arrayContaining(group))
      )
    )
  })
})
