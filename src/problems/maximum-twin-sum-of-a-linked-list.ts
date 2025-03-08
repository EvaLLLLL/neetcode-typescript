export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function maximumTwinSumOfALinkedList(head: ListNode | null) {
  let slow = head
  let fast = head
  let pre: ListNode | null = null

  while (fast && fast.next) {
    fast = fast!.next!.next

    let tmp = slow!.next
    slow!.next = pre
    pre = slow
    slow = tmp
  }

  let res = 0
  while (slow) {
    res = Math.max(res, (pre?.val ?? 0) + (slow?.val ?? 0))
    slow = slow.next
    pre = pre!.next
  }

  return res
}
