class TrieNode {
    word: boolean
    children: Map<string, TrieNode>
    constructor() {
        this.word = false
        this.children = new Map<string, TrieNode>()
    }
}

class Trie {
    root: TrieNode
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string) {
        let curr = this.root

        for (let c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode())
            }
            curr = curr.children.get(c)!
        }

        curr.word = true
    }

    search(word: string): boolean {
        let curr = this.root

        for (let c of word) {
            if (!curr.children.get(c)) {
                return false
            }
            curr = curr.children.get(c)!
        }
        return curr.word
    }

    startsWith(prefix: string): boolean {
        let curr = this.root

        for (let c of prefix) {
            if (!curr.children.get(c)) {
                return false
            }
            curr = curr.children.get(c)!
        }

        return true
    }
}
