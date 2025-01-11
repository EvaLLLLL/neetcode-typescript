import { sameBinaryTree, TreeNode } from '../problems/same-binary-tree'

describe('same-binary-tree', () => {
  test('case 1', () => {
    const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    expect(sameBinaryTree(tree1, tree2)).toBe(true)
  })

  test('case 2', () => {
    const tree1 = new TreeNode(1, new TreeNode(2))
    const tree2 = new TreeNode(1, null, new TreeNode(2))
    expect(sameBinaryTree(tree1, tree2)).toBe(false)
  })

  test('case 3', () => {
    const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    const tree2 = new TreeNode(1, new TreeNode(3), new TreeNode(2))
    expect(sameBinaryTree(tree1, tree2)).toBe(false)
  })
})
