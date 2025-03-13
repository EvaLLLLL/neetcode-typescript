import { subtreeOfABinaryTree } from '../problems/subtree-of-a-binary-tree'
import { TreeNode } from '../types/tree-node'

describe('subtree-of-a-binary-tree', () => {
  test('case 1', () => {
    const root = new TreeNode(
      3,
      new TreeNode(4, new TreeNode(1), new TreeNode(2)),
      new TreeNode(5)
    )
    const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2))
    expect(subtreeOfABinaryTree(root, subRoot)).toBe(true)
  })

  test('case 2', () => {
    const root = new TreeNode(
      3,
      new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
      new TreeNode(5)
    )
    const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2))
    expect(subtreeOfABinaryTree(root, subRoot)).toBe(false)
  })

  test('case 3', () => {
    const root = new TreeNode(1)
    const subRoot = new TreeNode(1)
    expect(subtreeOfABinaryTree(root, subRoot)).toBe(true)
  })

  test('case 4', () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    const subRoot = new TreeNode(4)
    expect(subtreeOfABinaryTree(root, subRoot)).toBe(false)
  })
})
