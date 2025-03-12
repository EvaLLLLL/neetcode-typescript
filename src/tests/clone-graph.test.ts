import { cloneGraph, Node } from '../problems/clone-graph'

describe('clone-graph', () => {
  test('case 1: single node', () => {
    const node = new Node(1)
    const cloned = cloneGraph(node)
    expect(cloned?.val).toBe(1)
    expect(cloned?.neighbors.length).toBe(0)
  })

  test('case 2: two connected nodes', () => {
    const node1 = new Node(1)
    const node2 = new Node(2)
    node1.neighbors = [node2]
    node2.neighbors = [node1]

    const cloned = cloneGraph(node1)
    expect(cloned?.val).toBe(1)
    expect(cloned?.neighbors.length).toBe(1)
    expect(cloned?.neighbors[0].val).toBe(2)
    expect(cloned?.neighbors[0].neighbors[0].val).toBe(1)
    expect(cloned).not.toBe(node1) // Should be a new object
  })

  test('case 3: cycle of 4 nodes', () => {
    const node1 = new Node(1)
    const node2 = new Node(2)
    const node3 = new Node(3)
    const node4 = new Node(4)

    node1.neighbors = [node2, node4]
    node2.neighbors = [node1, node3]
    node3.neighbors = [node2, node4]
    node4.neighbors = [node1, node3]

    const cloned = cloneGraph(node1)
    expect(cloned?.val).toBe(1)
    expect(cloned?.neighbors.length).toBe(2)
    expect(cloned?.neighbors[0].val).toBe(2)
    expect(cloned?.neighbors[1].val).toBe(4)
    expect(cloned?.neighbors[0].neighbors[1].val).toBe(3)
    expect(cloned).not.toBe(node1)
  })

  test('case 4: null input', () => {
    expect(cloneGraph(null)).toBeNull()
  })
})
