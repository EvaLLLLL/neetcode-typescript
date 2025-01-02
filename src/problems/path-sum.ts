export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

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
