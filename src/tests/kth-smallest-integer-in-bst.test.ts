import {
  kthSmallestIntegerInBst,
  TreeNode
} from '../problems/kth-smallest-integer-in-bst'

describe('kth-smallest-integer-in-bst', () => {
  test('case 1', () => {
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3))
    const k = 1
    expect(kthSmallestIntegerInBst(root, k)).toBe(1)
  })

  test('case 2', () => {
    const root = new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
      new TreeNode(6)
    )
    const k = 3
    expect(kthSmallestIntegerInBst(root, k)).toBe(3)
  })

  test('case 3', () => {
    const root = new TreeNode(
      3,
      new TreeNode(1, null, new TreeNode(2)),
      new TreeNode(4)
    )
    const k = 2
    expect(kthSmallestIntegerInBst(root, k)).toBe(2)
  })
})
