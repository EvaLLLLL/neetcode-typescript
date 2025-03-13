export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function removeNodeFromEndOfLinkedList(
  head: ListNode | null,
  n: number
): ListNode | null {
  const dummy = new ListNode(0, head)
  let left: ListNode | null = dummy
  let right = head

  while (n > 0) {
    right = right!.next
    n--
  }

  while (right) {
    left = left!.next
    right = right.next
  }

  left!.next = left!.next!.next

  return dummy.next
}
