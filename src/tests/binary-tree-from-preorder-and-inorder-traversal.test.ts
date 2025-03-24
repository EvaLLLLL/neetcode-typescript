import { buildTree } from '../problems/binary-tree-from-preorder-and-inorder-traversal'

describe('binary-tree-from-preorder-and-inorder-traversal', () => {
  test('case 1: simple tree', () => {
    const preorder = [3, 9, 20, 15, 7]
    const inorder = [9, 3, 15, 20, 7]
    const root = buildTree(preorder, inorder)

    expect(root?.val).toBe(3)
    expect(root?.left?.val).toBe(9)
    expect(root?.right?.val).toBe(20)
    expect(root?.right?.left?.val).toBe(15)
    expect(root?.right?.right?.val).toBe(7)
  })

  test('case 2: single node tree', () => {
    const preorder = [1]
    const inorder = [1]
    const root = buildTree(preorder, inorder)

    expect(root?.val).toBe(1)
    expect(root?.left).toBeNull()
    expect(root?.right).toBeNull()
  })

  test('case 3: left-skewed tree', () => {
    const preorder = [1, 2, 3]
    const inorder = [3, 2, 1]
    const root = buildTree(preorder, inorder)

    expect(root?.val).toBe(1)
    expect(root?.left?.val).toBe(2)
    expect(root?.left?.left?.val).toBe(3)
    expect(root?.right).toBeNull()
  })

  test('case 4: right-skewed tree', () => {
    const preorder = [1, 2, 3]
    const inorder = [1, 2, 3]
    const root = buildTree(preorder, inorder)

    expect(root?.val).toBe(1)
    expect(root?.right?.val).toBe(2)
    expect(root?.right?.right?.val).toBe(3)
    expect(root?.left).toBeNull()
  })
})
