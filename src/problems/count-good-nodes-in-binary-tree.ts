import { TreeNode } from '../types/tree-node'

export function countGoodNodesInBinaryTree(root: TreeNode | null) {
  if (!root) return 0

  let queue: [TreeNode, number][] = []
  let count = 0

  queue.push([root, -Infinity])

  while (queue.length) {
    let [node, maxVal] = queue.shift()!

    if (node.val >= maxVal) count++
    if (node.left) queue.push([node.left, Math.max(maxVal, node.val)])
    if (node.right) queue.push([node.right, Math.max(maxVal, node.val)])
  }

  return count
}
