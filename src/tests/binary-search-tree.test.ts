import { TreeMap } from '../problems/binary-search-tree'

describe('binary-search-tree', () => {
  let treeMap: TreeMap

  beforeEach(() => {
    treeMap = new TreeMap()
  })

  test('insert and get', () => {
    treeMap.insert(1, 2)
    expect(treeMap.get(1)).toBe(2)
  })

  test('get non-existent key', () => {
    expect(treeMap.get(99)).toBe(-1)
  })

  test('getMin and getMax', () => {
    treeMap.insert(1, 2)
    treeMap.insert(4, 0)
    expect(treeMap.getMin()).toBe(2)
    expect(treeMap.getMax()).toBe(0)
  })

  test('getInorderKeys', () => {
    treeMap.insert(1, 2)
    treeMap.insert(4, 2)
    treeMap.insert(3, 7)
    treeMap.insert(2, 1)
    expect(treeMap.getInorderKeys()).toEqual([1, 2, 3, 4])
  })

  test('remove key', () => {
    treeMap.insert(1, 2)
    treeMap.insert(4, 2)
    treeMap.insert(3, 7)
    treeMap.insert(2, 1)
    treeMap.remove(1)
    expect(treeMap.getInorderKeys()).toEqual([2, 3, 4])
  })
})
