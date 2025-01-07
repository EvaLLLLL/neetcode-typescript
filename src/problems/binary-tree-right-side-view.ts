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

export function binaryTreeRightSideView(root: TreeNode | null) {
  let res: number[] = []
  let queue: (TreeNode | null)[] = []

  if (root) queue.push(root)

  while (queue.length) {
    let rightSide = null
    let qlen = queue.length

    for (let i = 0; i < qlen; i++) {
      let node = queue.shift()

      if (node) {
        rightSide = node
        queue.push(node.left)
        queue.push(node.right)
      }
    }

    if (rightSide) {
      res.push(rightSide.val)
    }
  }

  return res
}
