import { linkedListCycleDetection } from '../problems/linked-list-cycle-detection'
import { ListNode } from '../types/list-node'

describe('linked-list-cycle-detection', () => {
  test('case 1', () => {
    const head = new ListNode(3)
    head.next = new ListNode(2)
    head.next.next = new ListNode(0)
    head.next.next.next = new ListNode(-4)
    head.next.next.next.next = head.next // Creates a cycle

    expect(linkedListCycleDetection(head)).toBe(true)
  })

  test('case 2', () => {
    const head = new ListNode(1)
    head.next = new ListNode(2)
    head.next.next = head // Creates a cycle

    expect(linkedListCycleDetection(head)).toBe(true)
  })

  test('case 3', () => {
    const head = new ListNode(1)
    expect(linkedListCycleDetection(head)).toBe(false)
  })

  test('case 4', () => {
    const head = new ListNode(1)
    head.next = new ListNode(2)
    expect(linkedListCycleDetection(head)).toBe(false)
  })
})
