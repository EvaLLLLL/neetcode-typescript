import {
  maximumTwinSumOfALinkedList,
  ListNode
} from '../problems/maximum-twin-sum-of-a-linked-list'

describe('maximum-twin-sum-of-a-linked-list', () => {
  test('case 1: [5,4,2,1]', () => {
    const head = new ListNode(5)
    head.next = new ListNode(4)
    head.next.next = new ListNode(2)
    head.next.next.next = new ListNode(1)
    expect(maximumTwinSumOfALinkedList(head)).toBe(6)
  })

  test('case 2: [4,2,2,3]', () => {
    const head = new ListNode(4)
    head.next = new ListNode(2)
    head.next.next = new ListNode(2)
    head.next.next.next = new ListNode(3)
    expect(maximumTwinSumOfALinkedList(head)).toBe(7)
  })

  test('case 3: [1,100000]', () => {
    const head = new ListNode(1)
    head.next = new ListNode(100000)
    expect(maximumTwinSumOfALinkedList(head)).toBe(100001)
  })
})
