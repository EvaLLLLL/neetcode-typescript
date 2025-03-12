class Graph {
  adjList: Map<number, Set<number>>
  constructor() {
    this.adjList = new Map<number, Set<number>>()
  }

  addEdge(src: number, dst: number) {
    if (!(src in this.adjList)) {
      this.adjList.set(src, new Set<number>())
    }
    if (!(dst in this.adjList)) {
      this.adjList.set(dst, new Set<number>())
    }

    this.adjList.set(src, this.adjList.get(src)!.add(dst))
  }

  removeEdge(src: number, dst: number): boolean {
    if (!this.adjList.has(src)) return false
    if (!this.adjList.get(src)?.has(dst)) return false
    this.adjList.get(src)!.delete(dst)
    return true
  }

  hasPath(src: number, dst: number): boolean {
    const visited = new Set<number>()
    return this._dfs(src, dst, visited)
  }

  _dfs(src: number, dst: number, visited: Set<number>): boolean {
    if (src === dst) {
      return true
    }

    visited.add(src)

    for (let n of this.adjList.get(src) || []) {
      if (!visited.has(n)) {
        if (this._dfs(n, dst, visited)) {
          return true
        }
      }
    }

    return false
  }
}
