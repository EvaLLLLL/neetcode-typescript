export class _Node {
  val: number
  next: _Node | null
  random: _Node | null
  constructor(val?: number, next?: _Node | null, random?: _Node | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}

export function copyLinkedListWithRandomPointer(
  head: _Node | null
): _Node | null {
  if (!head) return null

  const copied = new Map<_Node, _Node>()

  const copy = (node: _Node | null): _Node | null => {
    if (!node) return null

    if (copied.has(node)) {
      return copied.get(node) || null
    }

    const newNode = new _Node(node.val)
    copied.set(node, newNode)

    newNode.next = copy(node.next)
    newNode.random = copy(node.random)

    return newNode
  }

  return copy(head)
}
