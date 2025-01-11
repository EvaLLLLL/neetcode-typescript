export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

export function invertABinaryTree(root: TreeNode | null) {
  if (!root) return root

  const tmp = root.left
  root.left = root.right
  root.right = tmp

  invertABinaryTree(root.left)
  invertABinaryTree(root.right)

  return root
}
