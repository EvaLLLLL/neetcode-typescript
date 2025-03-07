import { reorderLinkedList, ListNode } from '../problems/reorder-linked-list'

describe('reorder-linked-list', () => {
  test('case 1: list of length 4', () => {
    const node4 = new ListNode(4)
    const node3 = new ListNode(3, node4)
    const node2 = new ListNode(2, node3)
    const node1 = new ListNode(1, node2)

    reorderLinkedList(node1)

    // Should reorder to: 1->4->2->3
    expect(node1.val).toBe(1)
    expect(node1.next?.val).toBe(4)
    expect(node1.next?.next?.val).toBe(2)
    expect(node1.next?.next?.next?.val).toBe(3)
    expect(node1.next?.next?.next?.next).toBeNull()
  })

  test('case 2: list of length 5', () => {
    const node5 = new ListNode(5)
    const node4 = new ListNode(4, node5)
    const node3 = new ListNode(3, node4)
    const node2 = new ListNode(2, node3)
    const node1 = new ListNode(1, node2)

    reorderLinkedList(node1)

    // Should reorder to: 1->5->2->4->3
    expect(node1.val).toBe(1)
    expect(node1.next?.val).toBe(5)
    expect(node1.next?.next?.val).toBe(2)
    expect(node1.next?.next?.next?.val).toBe(4)
    expect(node1.next?.next?.next?.next?.val).toBe(3)
    expect(node1.next?.next?.next?.next?.next).toBeNull()
  })

  test('case 3: single node', () => {
    const node1 = new ListNode(1)
    reorderLinkedList(node1)
    expect(node1.val).toBe(1)
    expect(node1.next).toBeNull()
  })
})
