import { TreeNode } from '../types/tree-node'

export function invertABinaryTree(root: TreeNode | null) {
  if (!root) return root

  const tmp = root.left
  root.left = root.right
  root.right = tmp

  invertABinaryTree(root.left)
  invertABinaryTree(root.right)

  return root
}
