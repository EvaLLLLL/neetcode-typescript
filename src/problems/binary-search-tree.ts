export class _TreeNode {
  key: number
  val: number
  left: _TreeNode | null
  right: _TreeNode | null
  constructor(
    key: number,
    val: number,
    left: _TreeNode | null = null,
    right: _TreeNode | null = null
  ) {
    this.key = key
    this.val = val
    this.left = left
    this.right = right
  }
}

export class TreeMap {
  root: _TreeNode | null
  constructor() {
    this.root = null
  }

  insert(key: number, val: number) {
    let newNode = new _TreeNode(key, val)
    if (!this.root) {
      this.root = newNode
      return
    }

    let curr = this.root
    while (true) {
      if (key < curr.key) {
        if (!curr.left) {
          curr.left = newNode
          return
        }
        curr = curr.left
      } else if (key > curr.key) {
        if (!curr.right) {
          curr.right = newNode
          return
        }
        curr = curr.right
      } else {
        curr.val = val
        return
      }
    }
  }

  get(key: number): number {
    let curr: _TreeNode | null = this.root
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
    let minNode = this.findMin(this.root)

    return minNode ? minNode.val : -1
  }

  getMax(): number {
    let curr: _TreeNode | null = this.root

    while (curr && curr.right) {
      curr = curr.right
    }

    return curr ? curr.val : -1
  }

  remove(key: number) {
    this.root = this.removeHelper(this.root, key)
  }

  removeHelper(node: _TreeNode | null, key: number): _TreeNode | null {
    if (!node) {
      return null
    }

    if (key > node.key) {
      node.right = this.removeHelper(node.right, key)
    } else if (key < node.key) {
      node.left = this.removeHelper(node.left, key)
    } else {
      if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      } else {
        const minNode = this.findMin(node.right)!
        node.key = minNode.key
        node.val = minNode.val
        node.right = this.removeHelper(node.right, minNode.key)
      }
    }

    return node
  }

  findMin(node: _TreeNode | null): _TreeNode | null {
    while (node && node.left) {
      node = node.left
    }
    return node
  }

  getInorderKeys(): number[] {
    let res: number[] = []

    function inorderKeys(node: _TreeNode | null, arr: number[]) {
      if (!node) return

      inorderKeys(node.left, arr)
      arr.push(node.key)
      inorderKeys(node.right, arr)
    }

    inorderKeys(this.root, res)
    return res
  }
}
