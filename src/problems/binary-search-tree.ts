export class TreeNode {
  key: number
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(
    key: number,
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.key = key
    this.val = val
    this.left = left
    this.right = right
  }
}

export class TreeMap {
  root: TreeNode | null
  constructor() {
    this.root = null
  }

  insert(key: number, val: number) {
    this.insertHelper(this.root, key, val)
    console.log(this.root)
  }

  insertHelper(root: TreeNode | null, key: number, val: number) {
    if (!root) {
      root = new TreeNode(key, val)
      return root
    }
    if (root.key > key) {
      root.left = this.insertHelper(root.left, key, val)
    }
    if (root.key < key) {
      root.right = this.insertHelper(root.right, key, val)
    }
    return root
  }

  get(key: number): number {
    let curr: TreeNode | null = this.root
    while (curr) {
      if (key > curr.key) {
        curr = curr.right
      } else if (key < curr.key) {
        curr = curr.left
      } else {
        return curr.val
      }
    }

    return -1
  }

  getMin(): number {
    let curr: TreeNode | null = this.root

    while (curr && curr.left) {
      curr = curr.left
    }

    return curr ? curr.val : -1
  }

  getMax(): number {
    let curr: TreeNode | null = this.root

    while (curr && curr.right) {
      curr = curr.right
    }

    return curr ? curr.val : -1
  }

  remove(key: number) {
    if (!this.root) return

    function minValueNode(node: TreeNode): TreeNode {
      let curr = node
      while (node && node.left) {
        curr = node.left
      }
      return curr
    }

    function helper(node: TreeNode | null, key: number): TreeNode | null {
      if (!node) return null

      if (key > node.val) {
        node = helper(node.right, key)
      } else if (key < node.val) {
        node = helper(node.left, key)
      } else {
        if (!node.left) {
          node = node.right
        } else if (!node.right) {
          node = node.left
        } else {
          const minNode = minValueNode(node)
          node.key = minNode.key
          node.val = minNode.val
          node.right = helper(node, minNode.key)
        }
      }

      return node
    }

    helper(this.root, key)
  }

  getInorderKeys(): number[] {
    let res: number[] = []

    function inorderKeys(node: TreeNode | null, arr: number[]) {
      if (!node) return

      inorderKeys(node.left, arr)
      arr.push(node.key)
      inorderKeys(node.right, arr)
    }

    inorderKeys(this.root, res)
    return res
  }
}
