import { TreeNode } from '../types/tree-node'

export function binaryTreeDiameter(root: TreeNode): number {
  let res = 0

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)

    res = Math.max(res, left + right)

    return 1 + Math.max(left, right)
  }

  dfs(root)
  return res
}
