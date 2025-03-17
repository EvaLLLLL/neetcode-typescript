import { lowestCommonAncestorInBinarySearchTree } from '../problems/lowest-common-ancestor-in-binary-search-tree'
import { TreeNode } from '../types/tree-node'

describe('lowest-common-ancestor-in-binary-search-tree', () => {
  test('case 1: nodes in the same subtree', () => {
    const root = new TreeNode(6)
    root.left = new TreeNode(2)
    root.right = new TreeNode(8)
    root.left.left = new TreeNode(0)
    root.left.right = new TreeNode(4)
    root.right.left = new TreeNode(7)
    root.right.right = new TreeNode(9)
    root.left.right.left = new TreeNode(3)
    root.left.right.right = new TreeNode(5)

    const p = root.left // node with value 2
    const q = root.left.right // node with value 4

    const lca = lowestCommonAncestorInBinarySearchTree(root, p, q)
    expect(lca).toBe(p)
  })

  test('case 2: nodes in different subtrees', () => {
    const root = new TreeNode(6)
    root.left = new TreeNode(2)
    root.right = new TreeNode(8)
    root.left.left = new TreeNode(0)
    root.left.right = new TreeNode(4)
    root.right.left = new TreeNode(7)
    root.right.right = new TreeNode(9)
    root.left.right.left = new TreeNode(3)
    root.left.right.right = new TreeNode(5)

    const p = root.left // node with value 2
    const q = root.right // node with value 8

    const lca = lowestCommonAncestorInBinarySearchTree(root, p, q)
    expect(lca).toBe(root)
  })

  test('case 3: one node is the ancestor of another', () => {
    const root = new TreeNode(6)
    root.left = new TreeNode(2)
    root.right = new TreeNode(8)
    root.left.left = new TreeNode(0)
    root.left.right = new TreeNode(4)

    const p = root.left // node with value 2
    const q = root.left.right // node with value 4

    const lca = lowestCommonAncestorInBinarySearchTree(root, p, q)
    expect(lca).toBe(p)
  })
})
