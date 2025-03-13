import { TreeNode } from '../types/tree-node'

export function pathSum(root: TreeNode | null, targetSum: number): boolean {
  function dfs(node: TreeNode | null, sum: number = 0): boolean {
    if (!node) return false

    sum += node.val

    if (!node.left && !node.right) {
      return sum === targetSum
    }

    return dfs(node.left, sum) || dfs(node.right, sum)
  }

  return dfs(root, 0)
}
