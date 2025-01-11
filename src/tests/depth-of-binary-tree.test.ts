import { depthOfBinaryTree, TreeNode } from '../problems/depth-of-binary-tree'

describe('depth-of-binary-tree', () => {
  test('case 1', () => {
    const tree = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4)),
      new TreeNode(3)
    )
    expect(depthOfBinaryTree(tree)).toBe(3)
  })

  test('case 2', () => {
    const tree = new TreeNode(
      1,
      new TreeNode(2),
      new TreeNode(3, new TreeNode(4, new TreeNode(5)))
    )
    expect(depthOfBinaryTree(tree)).toBe(4)
  })

  test('case 3', () => {
    const tree = new TreeNode(1)
    expect(depthOfBinaryTree(tree)).toBe(1)
  })

  test('case 4', () => {
    const tree = null
    expect(depthOfBinaryTree(tree)).toBe(0)
  })
})
