export class ListNode {
  val: number
  next: ListNode | null
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

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
