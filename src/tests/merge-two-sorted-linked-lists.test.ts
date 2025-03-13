import { mergeTwoSortedLinkedLists } from '../problems/merge-two-sorted-linked-lists'
import { ListNode } from '../types/list-node'

describe('merge-two-sorted-linked-lists', () => {
  test('case 1: merge two non-empty lists', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
    const list2 = new ListNode(1, new ListNode(3, new ListNode(5)))
    const result = mergeTwoSortedLinkedLists(list1, list2)
    const expectedValues = [1, 1, 2, 3, 4, 5]

    let currentResult = result
    for (const value of expectedValues) {
      expect(currentResult).not.toBeNull()
      expect(currentResult!.val).toBe(value)
      currentResult = currentResult!.next
    }
    expect(currentResult).toBeNull()
  })

  test('case 2: merge with one empty list', () => {
    const list1 = null
    const list2 = new ListNode(1, new ListNode(3, new ListNode(5)))
    const result = mergeTwoSortedLinkedLists(list1, list2)
    const expectedValues = [1, 3, 5]

    let currentResult = result
    for (const value of expectedValues) {
      expect(currentResult).not.toBeNull()
      expect(currentResult!.val).toBe(value)
      currentResult = currentResult!.next
    }
    expect(currentResult).toBeNull()
  })

  test('case 3: merge two empty lists', () => {
    const list1 = null
    const list2 = null
    const result = mergeTwoSortedLinkedLists(list1, list2)
    expect(result).toBeNull()
  })

  test('case 4: merge lists with different lengths', () => {
    const list1 = new ListNode(1, new ListNode(2))
    const list2 = new ListNode(
      1,
      new ListNode(3, new ListNode(4, new ListNode(5)))
    )
    const result = mergeTwoSortedLinkedLists(list1, list2)
    const expectedValues = [1, 1, 2, 3, 4, 5]

    let currentResult = result
    for (const value of expectedValues) {
      expect(currentResult).not.toBeNull()
      expect(currentResult!.val).toBe(value)
      currentResult = currentResult!.next
    }
    expect(currentResult).toBeNull()
  })
})
