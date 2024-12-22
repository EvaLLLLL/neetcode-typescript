export class ListNode {
  val: number
  next: ListNode | null

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

export function mergeTwoSortedLinkedLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode()
  let current = dummyHead

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }

  if (list1) {
    current.next = list1
  } else {
    current.next = list2
  }

  return dummyHead.next
}

export function mergeTwoSortedLinkedListsRecursion(
  list1: ListNode | null,
  list2: ListNode | null
) {
  if (!list1) return list2
  if (!list2) return list2

  if (list1.val < list2.val) {
    list1.next = mergeTwoSortedLinkedListsRecursion(list1.next, list2)
    return list1
  }
  list2.next = mergeTwoSortedLinkedListsRecursion(list2.next, list1)
  return list2
}
