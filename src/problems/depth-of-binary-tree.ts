import { TreeNode } from '../types/tree-node'

export function depthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0

  return (
    1 + Math.max(depthOfBinaryTree(root.left), depthOfBinaryTree(root.right))
  )
}
