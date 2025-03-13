import {
  reverseALinkedListRecursion,
  reverseALinkedListIteration
} from '../problems/reverse-a-linked-list'
import { ListNode } from '../types/list-node'

describe('reverse-a-linked-list', () => {
  test('case 1', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
    const reversedHead = reverseALinkedListIteration(head)
    expect(reversedHead?.val).toBe(5)
    expect(reversedHead?.next?.val).toBe(4)
    expect(reversedHead?.next?.next?.val).toBe(3)
    expect(reversedHead?.next?.next?.next?.val).toBe(2)
    expect(reversedHead?.next?.next?.next?.next?.val).toBe(1)
    expect(reversedHead?.next?.next?.next?.next?.next).toBe(null)
  })

  test('case 2', () => {
    const head = new ListNode(1)
    const reversedHead = reverseALinkedListIteration(head)
    expect(reversedHead?.val).toBe(1)
    expect(reversedHead?.next).toBe(null)
  })

  test('case 3', () => {
    const head = null
    const reversedHead = reverseALinkedListRecursion(head)
    expect(reversedHead).toBe(null)
  })
})
