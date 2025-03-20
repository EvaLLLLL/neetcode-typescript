import { countGoodNodesInBinaryTree } from '../problems/count-good-nodes-in-binary-tree'
import { TreeNode } from '../types/tree-node'

describe('count-good-nodes-in-binary-tree', () => {
  test('case 1', () => {
    const root = new TreeNode(
      3,
      new TreeNode(1),
      new TreeNode(4, new TreeNode(1), new TreeNode(5))
    )
    expect(countGoodNodesInBinaryTree(root)).toBe(3)
  })

  test('case 2', () => {
    const root = new TreeNode(1)
    expect(countGoodNodesInBinaryTree(root)).toBe(1)
  })

  test('case 3', () => {
    const root = new TreeNode(
      3,
      new TreeNode(3, new TreeNode(2), new TreeNode(4)),
      new TreeNode(4)
    )
    expect(countGoodNodesInBinaryTree(root)).toBe(4)
  })

  test('case 4', () => {
    const root = new TreeNode(
      5,
      new TreeNode(4, new TreeNode(3)),
      new TreeNode(8, new TreeNode(7), new TreeNode(9))
    )
    expect(countGoodNodesInBinaryTree(root)).toBe(3)
  })
})
