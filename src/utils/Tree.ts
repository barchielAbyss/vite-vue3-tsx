export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// addTreeNode(root: TreeNode | null, val: number): TreeNode | null {}

// export function addTreeNode(root: TreeNode | null, val: number): TreeNode | null {}

// deleteTreeNode(root: TreeNode | null, val: number): TreeNode | null {}

// preorderTraversal(root: TreeNode | null): number[] {}

// inorderTraversal(root: TreeNode | null): number[] {}

// postorderTraversal(root: TreeNode | null): number[] {}

// levelOrder(root: TreeNode | null): number[][] {}

// maxDepth(root: TreeNode | null): number {}

// isSymmetric(root: TreeNode | null): boolean {}

// hasPathSum(root: TreeNode | null, sum: number): boolean {}

// lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {}

// serialize(root: TreeNode | null): string {}

// 实现一颗前缀树
export class TrieNode {
  children: Map<string, TrieNode>
  isEnd: boolean
  constructor(children?: TrieNode['children']) {
    this.children = children || new Map()
    this.isEnd = false
  }
}

export class Trie {
  children: Map<string, TrieNode>

  constructor() {
    this.children = new Map()
  }

  insert(word: string) {
    let node = new TrieNode(this.children)
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode())
      }
      node = node.children.get(char) as TrieNode
    }
    node.isEnd = true
  }

  searchPrefix(prefix: string) {
    let node = new TrieNode(this.children)
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i]
      if (!node.children.has(char)) {
        return false
      }
      node = node.children.get(char) as TrieNode
    }
    return node
  }

  search(word: string) {
    const node = this.searchPrefix(word)
    return node && node.isEnd
  }

  startsWith(prefix: string) {
    return this.searchPrefix(prefix)
  }
}

export class Trie2 {
  root: Record<string, any>
  constructor() {
    this.root = {}
  }

  insert(word: string): void {
    let cur = this.root
    for (const w of word) {
      if (!cur[w]) {
        cur[w] = {}
      }
      cur = cur[w]
    }
    cur.flag = true
  }

  search(word: string): boolean {
    let cur = this.root
    for (const w of word) {
      if (!cur[w]) return false
      cur = cur[w]
    }
    return cur.flag ? true : false
  }

  startsWith(prefix: string): boolean {
    let cur = this.root
    for (const p of prefix) {
      if (!cur[p]) return false
      cur = cur[p]
    }
    return true
  }
}

// 实现一棵字母数
class LetterTrieNode {
  val = 0
  children = Array(26)
}

export class MapSum {
  root = new LetterTrieNode()
  insert(key: string, val: number) {
    let node = this.root
    for (const s of key) {
      const sId = s.charCodeAt(0) - 'a'.charCodeAt(0)
      if (!node.children[sId]) {
        node.children[sId] = new LetterTrieNode()
      }
      node = node.children[sId]
    }
    node.val = val
  }
  getSum(node: LetterTrieNode) {
    if (!node) {
      return 0
    }
    let res = node.val
    for (const child of node.children) {
      if (child) {
        res += this.getSum(child)
      }
    }
    return res
  }
  sum(prefix: string) {
    let node = this.root
    for (const s of prefix) {
      const sId = s.charCodeAt(0) - 'a'.charCodeAt(0)
      if (!node.children[sId]) {
        return 0
      }
      node = node.children[sId]
    }

    return this.getSum(node)
  }
}
