import { TreeNode } from '../types/tree-node'

export function sameBinaryTree(p: TreeNode | null, q: TreeNode | null) {
  if (!p && !q) return true

  if (p?.val !== q?.val) return false

  if (!sameBinaryTree(p?.left || null, q?.left || null)) return false
  if (!sameBinaryTree(p?.right || null, q?.right || null)) return false

  return true
}
