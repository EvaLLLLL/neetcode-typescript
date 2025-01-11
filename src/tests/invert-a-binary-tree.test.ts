import { invertABinaryTree, TreeNode } from '../problems/invert-a-binary-tree'

describe('invert-a-binary-tree', () => {
  test('case 1', () => {
    const root = new TreeNode(4)
    root.left = new TreeNode(2)
    root.right = new TreeNode(7)
    root.left.left = new TreeNode(1)
    root.left.right = new TreeNode(3)
    root.right.left = new TreeNode(6)
    root.right.right = new TreeNode(9)

    const invertedRoot = invertABinaryTree(root)

    expect(invertedRoot?.val).toBe(4)
    expect(invertedRoot?.left?.val).toBe(7)
    expect(invertedRoot?.right?.val).toBe(2)
    expect(invertedRoot?.left?.left?.val).toBe(9)
    expect(invertedRoot?.left?.right?.val).toBe(6)
    expect(invertedRoot?.right?.left?.val).toBe(3)
    expect(invertedRoot?.right?.right?.val).toBe(1)
  })

  test('case 2', () => {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)

    const invertedRoot = invertABinaryTree(root)

    expect(invertedRoot?.val).toBe(1)
    expect(invertedRoot?.left).toBeNull()
    expect(invertedRoot?.right?.val).toBe(2)
  })

  test('case 3', () => {
    const root = null

    const invertedRoot = invertABinaryTree(root)

    expect(invertedRoot).toBeNull()
  })
})
