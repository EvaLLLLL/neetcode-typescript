import { GraphNode } from '../types/graph-node'

export function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (!node) return null

  const oldToNew = new Map<number, GraphNode>()

  const dfsClone = (n: GraphNode) => {
    if (oldToNew.has(n.val)) {
      return oldToNew.get(n.val)!
    }

    const copy = new GraphNode(n.val)
    oldToNew.set(copy.val, copy)

    for (let nei of n.neighbors) {
      copy.neighbors.push(dfsClone(nei))
    }

    return copy
  }

  return dfsClone(node)
}
