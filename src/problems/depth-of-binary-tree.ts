export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(
    val = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val
    this.left = left
    this.right = right
  }
}

export function depthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0

  return (
    1 + Math.max(depthOfBinaryTree(root.left), depthOfBinaryTree(root.right))
  )
}
