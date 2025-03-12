export class Node {
  val: number
  neighbors: Node[]

  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
  }
}

export function cloneGraph(node: Node | null): Node | null {
  if (!node) return null

  const oldToNew = new Map<number, Node>()

  const dfsClone = (n: Node) => {
    if (oldToNew.has(n.val)) {
      return oldToNew.get(n.val)!
    }

    const copy = new Node(n.val)
    oldToNew.set(copy.val, copy)

    for (let nei of n.neighbors) {
      copy.neighbors.push(dfsClone(nei))
    }

    return copy
  }

  return dfsClone(node)
}
