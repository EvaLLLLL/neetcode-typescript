import { levelOrderTraversalOfBinaryTree } from '../problems/level-order-traversal-of-binary-tree'
import { TreeNode } from '../types/tree-node'

describe('level-order-traversal-of-binary-tree', () => {
  test('case 1', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), new TreeNode(7))
    )
    const result = levelOrderTraversalOfBinaryTree(root)
    expect(result).toEqual([[1], [2, 3], [4, 5, 6, 7]])
  })

  //   test('case 2: single node', () => {
  //     const root = new TreeNode(1)
  //     const result = levelOrderTraversalOfBinaryTree(root)
  //     expect(result).toEqual([[1]])
  //   })

  //   test('case 3: empty tree', () => {
  //     const result = levelOrderTraversalOfBinaryTree(null)
  //     expect(result).toEqual([])
  //   })

  //   test('case 4: unbalanced tree', () => {
  //     const root = new TreeNode(
  //       1,
  //       new TreeNode(2, new TreeNode(4, new TreeNode(8))),
  //       new TreeNode(3)
  //     )
  //     const result = levelOrderTraversalOfBinaryTree(root)
  //     expect(result).toEqual([[1], [2, 3], [4], [8]])
  //   })
})
