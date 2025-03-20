export class DoublelyLinkedListNode {
  key: number
  val: number
  prev: DoublelyLinkedListNode | null
  next: DoublelyLinkedListNode | null
  constructor(
    key?: number,
    val?: number,
    next?: DoublelyLinkedListNode | null,
    prev?: DoublelyLinkedListNode | null
  ) {
    this.key = key === undefined ? 0 : key
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.prev = prev === undefined ? null : prev
  }
}

export class LRUCache {
  private cache: Map<number, DoublelyLinkedListNode>
  private capacity: number
  private left: DoublelyLinkedListNode
  private right: DoublelyLinkedListNode
  constructor(_capacity: number) {
    this.cache = new Map<number, DoublelyLinkedListNode>()
    this.capacity = _capacity

    this.left = new DoublelyLinkedListNode()
    this.right = new DoublelyLinkedListNode()
    this.left.next = this.right
    this.right.prev = this.left
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!
      this.remove(node)
      this.insert(node)
      return node.val
    }
    return -1
  }

  put(key: number, value: number) {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key)!)
    }
    const newNode = new DoublelyLinkedListNode(key, value)
    this.cache.set(key, newNode)
    this.insert(newNode)

    if (this.cache.size > this.capacity) {
      const lru = this.left.next
      if (lru) {
        this.remove(lru)
        this.cache.delete(lru.key)
      }
    }
  }

  private remove(node: DoublelyLinkedListNode | null) {
    if (!node) return
    const prev = node.prev
    const next = node.next
    if (prev) prev.next = next
    if (next) next.prev = prev
  }

  private insert(node: DoublelyLinkedListNode) {
    const prev = this.right.prev
    if (prev) prev.next = node
    node.prev = prev
    node.next = this.right
    this.right.prev = node
  }
}
