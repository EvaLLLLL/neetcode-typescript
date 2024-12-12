import { topKElementsInList } from '../problems/top-k-elements-in-list'

describe('top-k-elements-in-list', () => {
  test('case 1', () => {
    const nums = [1, 2, 2, 3, 3, 3],
      k = 2
    expect(topKElementsInList(nums, k)).toEqual(expect.arrayContaining([2, 3]))
  })
  test('case 2', () => {
    const nums = [7, 7],
      k = 1
    expect(topKElementsInList(nums, k)).toEqual(expect.arrayContaining([7]))
  })
})
