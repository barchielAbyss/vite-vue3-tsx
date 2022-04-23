import { Trie, MapSum } from '../Tree'

const testTrie = new Trie()
const testMapSum = new MapSum()

describe('Tree', () => {
  it('Trie', () => {
    testTrie.insert('apple')
    expect(testTrie.search('apple')).toBe(true)
    expect(testTrie.search('app')).toBe(false)
    testTrie.insert('app')
    expect(testTrie.search('app')).toBe(true)
    expect(testTrie.search('appl')).toBe(false)
  })

  it('MapSum', () => {
    testMapSum.insert('apple', 3)
    expect(testMapSum.sum('ap')).toBe(3)
    testMapSum.insert('app', 2)
    expect(testMapSum.sum('ap')).toBe(5)
  })
})
