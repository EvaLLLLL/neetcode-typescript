import {
  binaryTreeRightSideView,
  TreeNode
} from '../problems/binary-tree-right-side-view'

describe('binary-tree-right-side-view', () => {
  test('case 1', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(5)),
      new TreeNode(3, null, new TreeNode(4))
    )
    const result = binaryTreeRightSideView(root)
    expect(result).toEqual([1, 3, 4])
  })

  test('case 2: single node', () => {
    const root = new TreeNode(1)
    const result = binaryTreeRightSideView(root)
    expect(result).toEqual([1])
  })

  test('case 3: empty tree', () => {
    const result = binaryTreeRightSideView(null)
    expect(result).toEqual([])
  })

  test('case 4: unbalanced tree', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, new TreeNode(8))),
      new TreeNode(3)
    )
    const result = binaryTreeRightSideView(root)
    expect(result).toEqual([1, 3, 4, 8])
  })
})
