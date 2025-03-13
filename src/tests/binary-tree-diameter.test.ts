import { binaryTreeDiameter } from '../problems/binary-tree-diameter'
import { TreeNode } from '../types/tree-node'

describe('binary-tree-diameter', () => {
  test('case 1: diameter passes through root', () => {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)
    root.left.left = new TreeNode(4)
    root.left.right = new TreeNode(5)
    expect(binaryTreeDiameter(root)).toBe(3)
  })

  test('case 2: diameter does not pass through root', () => {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.left.left = new TreeNode(3)
    root.left.right = new TreeNode(4)
    root.left.right.right = new TreeNode(5)
    root.left.right.right.right = new TreeNode(6)
    expect(binaryTreeDiameter(root)).toBe(4)
  })

  test('case 3: single node', () => {
    const root = new TreeNode(1)
    expect(binaryTreeDiameter(root)).toBe(0)
  })

  test('case 4: linear tree', () => {
    const root = new TreeNode(1)
    root.right = new TreeNode(2)
    root.right.right = new TreeNode(3)
    root.right.right.right = new TreeNode(4)
    expect(binaryTreeDiameter(root)).toBe(3)
  })

  test('case 5: balanced tree', () => {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)
    root.left.left = new TreeNode(4)
    root.left.right = new TreeNode(5)
    root.right.left = new TreeNode(6)
    root.right.right = new TreeNode(7)
    expect(binaryTreeDiameter(root)).toBe(4)
  })
})
