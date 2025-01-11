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

export function subtreeOfABinaryTree(
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean {
  if (!root) return false
  if (!subRoot) return true

  if (sameTree(root, subRoot)) return true

  return (
    subtreeOfABinaryTree(root.left, subRoot) ||
    subtreeOfABinaryTree(root.right, subRoot)
  )
}

function sameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root && !subRoot) return true

  if (root && subRoot && root.val === subRoot.val) {
    return (
      sameTree(root.left, subRoot.left) && sameTree(root.right, subRoot.right)
    )
  }

  return false
}
