import {
  copyLinkedListWithRandomPointer,
  _Node
} from '../problems/copy-linked-list-with-random-pointer'

describe('copy-linked-list-with-random-pointer', () => {
  test('copies list with random pointers [[7,null],[13,0],[11,4],[10,2],[1,0]]', () => {
    // Create original list: 7 -> 13 -> 11 -> 10 -> 1
    const node0 = new _Node(7)
    const node1 = new _Node(13)
    const node2 = new _Node(11)
    const node3 = new _Node(10)
    const node4 = new _Node(1)

    // Set next pointers
    node0.next = node1
    node1.next = node2
    node2.next = node3
    node3.next = node4

    // Set random pointers
    node0.random = null
    node1.random = node0
    node2.random = node4
    node3.random = node2
    node4.random = node0

    const copiedHead = copyLinkedListWithRandomPointer(node0)

    // Verify structure and values
    expect(copiedHead?.val).toBe(7)
    expect(copiedHead?.next?.val).toBe(13)
    expect(copiedHead?.next?.next?.val).toBe(11)
    expect(copiedHead?.next?.next?.next?.val).toBe(10)
    expect(copiedHead?.next?.next?.next?.next?.val).toBe(1)

    // Verify random pointers
    expect(copiedHead?.random).toBeNull()
    expect(copiedHead?.next?.random?.val).toBe(7)
    expect(copiedHead?.next?.next?.random?.val).toBe(1)
    expect(copiedHead?.next?.next?.next?.random?.val).toBe(11)
    expect(copiedHead?.next?.next?.next?.next?.random?.val).toBe(7)

    // Verify copied list is separate from original
    expect(copiedHead).not.toBe(node0)
    expect(copiedHead?.next).not.toBe(node1)
    expect(copiedHead?.next?.next).not.toBe(node2)
    expect(copiedHead?.next?.next?.next).not.toBe(node3)
    expect(copiedHead?.next?.next?.next?.next).not.toBe(node4)
  })

  test('copies list with cyclic random pointers [[1,1],[2,1]]', () => {
    const node0 = new _Node(1)
    const node1 = new _Node(2)

    node0.next = node1
    node0.random = node1
    node1.random = node1

    const copiedHead = copyLinkedListWithRandomPointer(node0)

    expect(copiedHead?.val).toBe(1)
    expect(copiedHead?.next?.val).toBe(2)
    expect(copiedHead?.random?.val).toBe(2)
    expect(copiedHead?.next?.random?.val).toBe(2)

    expect(copiedHead).not.toBe(node0)
    expect(copiedHead?.next).not.toBe(node1)
  })

  test('copies single node list with self-referencing random pointer [[3,0]]', () => {
    const node = new _Node(3)
    node.random = node

    const copiedHead = copyLinkedListWithRandomPointer(node)

    expect(copiedHead?.val).toBe(3)
    expect(copiedHead?.random?.val).toBe(3)
    expect(copiedHead?.random).toBe(copiedHead)
    expect(copiedHead).not.toBe(node)
  })

  test('handles empty list', () => {
    expect(copyLinkedListWithRandomPointer(null)).toBeNull()
  })
})
