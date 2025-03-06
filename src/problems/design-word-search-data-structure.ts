export class TrieNode {
    endOfword: boolean
    children: Map<string, TrieNode>
    constructor() {
        this.endOfword = false
        this.children = new Map<string, TrieNode>()
    }
}

export class WordDictionary {
    root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    addWord(word: string) {
        let curr = this.root

        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode())
            }

            curr = curr.children.get(c)!
        }

        curr.endOfword = true
    }

    search(word: string) {
        return this.dfs(word, 0, this.root)
    }

    dfs(word: string, j: number, root: TrieNode) {
        let curr = root

        for (let i = j; i < word.length; i++) {
            const c = word[i]

            if (c === '.') {
                for (const char of curr.children.keys()) {
                    if (this.dfs(word, i + 1, curr.children.get(char)!)) {
                        return true
                    }
                }
                return false
            } else {
                if (!curr.children.has(c)) {
                    return false
                }
                curr = curr.children.get(c)!
            }
        }

        return curr.endOfword
    }
}
