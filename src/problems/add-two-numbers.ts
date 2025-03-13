import { ListNode } from '../types/list-node'

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0)
  let cur = dummy
  let carry = 0

  while (l1 || l2 || carry) {
    const val = (l1?.val || 0) + (l2?.val || 0) + carry
    cur.next = new ListNode(val % 10)
    carry = Math.floor(val / 10)

    cur = cur.next
    l1 = l1?.next ?? null
    l2 = l2?.next ?? null
  }

  return dummy.next
}

export function addTwoNumbersRecursion(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const add = (
    node1?: ListNode | null,
    node2?: ListNode | null,
    carry?: number
  ): ListNode | null => {
    if (!node1 && !node2 && !carry) return null

    const val = (node1?.val || 0) + (node2?.val || 0) + (carry || 0)
    const newCarry = Math.floor(val / 10)
    const nodeValue = val % 10

    const nextNode = add(node1?.next, node2?.next, newCarry)

    return new ListNode(nodeValue, nextNode)
  }

  return add(l1, l2, 0)
}
