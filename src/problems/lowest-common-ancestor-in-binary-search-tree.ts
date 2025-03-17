import { TreeNode } from '../types/tree-node'

export function lowestCommonAncestorInBinarySearchTree(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
) {
  if (!root || !p || !q) return null

  if (Math.max(p.val, q.val) < root.val) {
    return lowestCommonAncestorInBinarySearchTree(root.left, p, q)
  } else if (Math.min(p.val, q.val) > root.val) {
    return lowestCommonAncestorInBinarySearchTree(root.right, p, q)
  } else {
    return root
  }
}
