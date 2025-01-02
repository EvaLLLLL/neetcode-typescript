import { pathSum, TreeNode } from '../problems/path-sum'

describe('path-sum', () => {
  test('case 1', () => {
    const root = new TreeNode(
      5,
      new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
      new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
    )
    const targetSum = 22
    expect(pathSum(root, targetSum)).toBe(true)
  })

  test('case 2', () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    const targetSum = 5
    expect(pathSum(root, targetSum)).toBe(false)
  })

  test('case 3', () => {
    const root = new TreeNode(1, new TreeNode(2))
    const targetSum = 1
    expect(pathSum(root, targetSum)).toBe(false)
  })

  test('case 4', () => {
    const root = null
    const targetSum = 0
    expect(pathSum(root, targetSum)).toBe(false)
  })
})
