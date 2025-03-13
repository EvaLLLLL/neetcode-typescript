import { TreeNode } from '../types/tree-node'

export function balancedBinaryTree(root: TreeNode | null): boolean {
  const dfs = (node: TreeNode | null): [boolean, number] => {
    if (!node) return [true, 0]

    const left = dfs(node?.left)
    const right = dfs(node?.right)
    const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1

    return [balanced, 1 + Math.max(left[1], right[1])]
  }

  return dfs(root)[0]
}
