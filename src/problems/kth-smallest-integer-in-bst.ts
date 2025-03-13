import { TreeNode } from '../types/tree-node'

export function kthSmallestIntegerInBst(
  root: TreeNode | null,
  k: number
): number | null {
  let arr: number[] = []

  function inOrderTraversal(node: TreeNode | null) {
    if (!node || arr.length === k) return

    inOrderTraversal(node.left)
    arr.push(node.val)
    inOrderTraversal(node.right)
  }

  inOrderTraversal(root)
  return arr[k - 1]
}
