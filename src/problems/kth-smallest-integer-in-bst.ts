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
