import { TreeNode } from '../types/tree-node'

export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (!preorder.length || !inorder.length) return null

  const root = new TreeNode(preorder[0])
  const mid = inorder.indexOf(preorder[0])
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

  return root
}
