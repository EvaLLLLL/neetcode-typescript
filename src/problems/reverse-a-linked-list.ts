import { ListNode } from '../types/list-node'

// Iteration
export function reverseALinkedListIteration(head: ListNode | null) {
  if (!head) return null

  let prev = null
  let curr: ListNode | null = head

  while (curr) {
    let temp: ListNode | null = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  return prev
}

export function reverseALinkedListRecursion(head: ListNode | null) {
  if (!head) return null

  let newHead = head
  if (head.next) {
    newHead = reverseALinkedListRecursion(head.next) as ListNode
    head.next.next = head
  }
  head.next = null

  return newHead
}
