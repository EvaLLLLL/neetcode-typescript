import { removeNodeFromEndOfLinkedList } from '../problems/remove-node-from-end-of-linked-list'
import { ListNode } from '../types/list-node'

describe('remove-node-from-end-of-linked-list', () => {
  test('removes 2nd node from end of list [1,2,3,4,5]', () => {
    const head = new ListNode(1)
    head.next = new ListNode(2)
    head.next.next = new ListNode(3)
    head.next.next.next = new ListNode(4)
    head.next.next.next.next = new ListNode(5)

    const result = removeNodeFromEndOfLinkedList(head, 2)

    // Should be [1,2,3,5]
    expect(result?.val).toBe(1)
    expect(result?.next?.val).toBe(2)
    expect(result?.next?.next?.val).toBe(3)
    expect(result?.next?.next?.next?.val).toBe(5)
    expect(result?.next?.next?.next?.next).toBeNull()
  })

  test('removes only node from list [1]', () => {
    const head = new ListNode(1)
    const result = removeNodeFromEndOfLinkedList(head, 1)
    expect(result).toBeNull()
  })

  test('removes first node from list [1,2]', () => {
    const head = new ListNode(1)
    head.next = new ListNode(2)

    const result = removeNodeFromEndOfLinkedList(head, 2)

    expect(result?.val).toBe(2)
    expect(result?.next).toBeNull()
  })
})
