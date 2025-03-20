import { TreeNode } from '../types/tree-node'

export function validBinarySearchTree(root: TreeNode | null): boolean {
  const valid = (
    node: TreeNode | null,
    left: number,
    right: number
  ): boolean => {
    if (!node) return true

    if (!(left < node.val && node.val < right)) return false

    return (
      valid(node.left, left, node.val) && valid(node.right, node.val, right)
    )
  }

  return valid(root, -Infinity, Infinity)
}
