import { Trie, MapSum } from '../Tree'
import { arr2Tree } from '../Array2Tree'

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

  it('Array2Tree', () => {
    const arr = [
      { id: 1, name: '部门1', pid: 0 },
      { id: 2, name: '部门2', pid: 1 },
      { id: 3, name: '部门3', pid: 1 },
      { id: 4, name: '部门4', pid: 3 },
      { id: 5, name: '部门5', pid: 4 },
    ]

    const res = [
      {
        id: 1,
        name: '部门1',
        pid: 0,
        children: [
          { id: 2, name: '部门2', pid: 1, children: [] },
          {
            id: 3,
            name: '部门3',
            pid: 1,
            children: [{ id: 4, name: '部门4', pid: 3, children: [{ id: 5, name: '部门5', pid: 4, children: [] }] }],
          },
        ],
      },
    ]

    expect(arr2Tree(arr)).toEqual(res)
  })
})
