import { ListNode } from '../types/list-node'

export function linkedListCycleIi(head: ListNode | null): ListNode | null {
  if (!head || !head?.next) return null

  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast && fast.next) {
    slow = slow!.next
    fast = fast!.next.next

    if (slow === fast) {
      let slow: ListNode | null = head
      while (slow !== fast) {
        slow = slow!.next
        fast = fast!.next
      }
      return slow
    }
  }

  return null
}
