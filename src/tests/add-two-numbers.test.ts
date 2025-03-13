import { addTwoNumbers } from '../problems/add-two-numbers'
import { ListNode } from '../types/list-node'

describe('add-two-numbers', () => {
  test('adds two numbers [1,2,3] + [4,5,6] = [5,7,9]', () => {
    const l1 = new ListNode(1)
    l1.next = new ListNode(2)
    l1.next.next = new ListNode(3)

    const l2 = new ListNode(4)
    l2.next = new ListNode(5)
    l2.next.next = new ListNode(6)

    const result = addTwoNumbers(l1, l2)

    expect(result?.val).toBe(5)
    expect(result?.next?.val).toBe(7)
    expect(result?.next?.next?.val).toBe(9)
    expect(result?.next?.next?.next).toBeNull()
  })

  test('handles carry over [9,9,9] + [9,9,9] = [8,9,9,1]', () => {
    const l1 = new ListNode(9)
    l1.next = new ListNode(9)
    l1.next.next = new ListNode(9)

    const l2 = new ListNode(9)
    l2.next = new ListNode(9)
    l2.next.next = new ListNode(9)

    const result = addTwoNumbers(l1, l2)

    expect(result?.val).toBe(8)
    expect(result?.next?.val).toBe(9)
    expect(result?.next?.next?.val).toBe(9)
    expect(result?.next?.next?.next?.val).toBe(1)
    expect(result?.next?.next?.next?.next).toBeNull()
  })

  test('handles different length lists [9,9] + [1] = [0,0,1]', () => {
    const l1 = new ListNode(9)
    l1.next = new ListNode(9)

    const l2 = new ListNode(1)

    const result = addTwoNumbers(l1, l2)

    expect(result?.val).toBe(0)
    expect(result?.next?.val).toBe(0)
    expect(result?.next?.next?.val).toBe(1)
    expect(result?.next?.next?.next).toBeNull()
  })
})
