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

export function deleteNode(
  root: TreeNode | null,
  key: number
): TreeNode | null {
  if (!root) return null

  if (key > root.val) {
    root.right = deleteNode(root.right, key)
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key)
  }

  if (key === root.val) {
    if (!root.left) return root.right
    if (!root.right) return root.left

    let minNode = minValueNode(root.right)
    root.val = minNode.val
    root.right = deleteNode(root.right, minNode.val)
  }

  return root
}

function minValueNode(root: TreeNode): TreeNode {
  let current = root
  while (current && current.left) {
    current = current.left
  }
  return current
}
