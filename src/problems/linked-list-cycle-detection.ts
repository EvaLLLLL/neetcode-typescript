import { ListNode } from '../types/list-node'

export function linkedListCycleDetection(head: ListNode | null) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next

    if (fast === slow) return true
  }

  return false
}
