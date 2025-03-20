import { validBinarySearchTree } from '../problems/valid-binary-search-tree'

describe('valid-binary-search-tree', () => {
  test('case 1 - valid BST', () => {
    const root = {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    }
    expect(validBinarySearchTree(root)).toBe(true)
  })

  test('case 2 - invalid BST', () => {
    const root = {
      val: 5,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: {
          val: 3,
          left: null,
          right: null
        },
        right: {
          val: 6,
          left: null,
          right: null
        }
      }
    }
    expect(validBinarySearchTree(root)).toBe(false)
  })
})
