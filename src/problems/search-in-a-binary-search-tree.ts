import { TreeNode } from '../types/tree-node'

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let current = root

  while (current) {
    if (current.val > val) {
      current = current.left
    } else if (current.val < val) {
      current = current.right
    } else {
      return current
    }
  }

  return null
}
