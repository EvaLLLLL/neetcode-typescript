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

export function sameBinaryTree(p: TreeNode | null, q: TreeNode | null) {
  if (!p && !q) return true

  if (p?.val !== q?.val) return false

  if (!sameBinaryTree(p?.left || null, q?.left || null)) return false
  if (!sameBinaryTree(p?.right || null, q?.right || null)) return false

  return true
}
