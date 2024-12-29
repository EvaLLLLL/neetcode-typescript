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

export function levelOrderTraversalOfBinaryTree(root: TreeNode | null) {
  let res: number[][] = []
  let queue: TreeNode[] = []

  if (root) queue.push(root)

  while (queue.length) {
    let level: number[] = []

    for (let i = queue.length; i > 0; i--) {
      const q = queue.shift()

      if (q) {
        if (q.left) queue.push(q.left)
        if (q.right) queue.push(q.right)

        level.push(q.val)
      }
    }

    if (level.length) res.push(level)
  }

  return res
}
