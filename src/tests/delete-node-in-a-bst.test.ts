import { deleteNode, TreeNode } from '../problems/delete-node-in-a-bst'

describe('delete-node-in-a-bst', () => {
  test('case 1', () => {
    const root = new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2), new TreeNode(4)),
      new TreeNode(6, null, new TreeNode(7))
    )
    const key = 3
    const expectedOutput = new TreeNode(
      5,
      new TreeNode(4, new TreeNode(2), null),
      new TreeNode(6, null, new TreeNode(7))
    )
    expect(deleteNode(root, key)).toEqual(expectedOutput)
  })

  test('case 2: delete root node', () => {
    const root = new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2), new TreeNode(4)),
      new TreeNode(6, null, new TreeNode(7))
    )
    const key = 5
    const expectedOutput = new TreeNode(
      6,
      new TreeNode(3, new TreeNode(2), new TreeNode(4)),
      new TreeNode(7)
    )
    expect(deleteNode(root, key)).toEqual(expectedOutput)
  })

  test('case 3: delete leaf node', () => {
    const root = new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2), new TreeNode(4)),
      new TreeNode(6, null, new TreeNode(7))
    )
    const key = 7
    const expectedOutput = new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2), new TreeNode(4)),
      new TreeNode(6)
    )
    expect(deleteNode(root, key)).toEqual(expectedOutput)
  })

  test('case 4: delete node with one child', () => {
    const root = new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2), null),
      new TreeNode(6, null, new TreeNode(7))
    )
    const key = 3
    const expectedOutput = new TreeNode(
      5,
      new TreeNode(2),
      new TreeNode(6, null, new TreeNode(7))
    )
    expect(deleteNode(root, key)).toEqual(expectedOutput)
  })

  test('case 5: delete non-existent node', () => {
    const root = new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2), new TreeNode(4)),
      new TreeNode(6, null, new TreeNode(7))
    )
    const key = 10
    const expectedOutput = root // No change expected
    expect(deleteNode(root, key)).toEqual(expectedOutput)
  })
})
