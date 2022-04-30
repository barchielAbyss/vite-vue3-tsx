import { firstSort } from '../Sort'

describe('Sort', () => {
  it('firstSort', () => {
    expect(firstSort([10, 2, 3, 4, 5, 6, 7, 8, 9, 11])).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    expect(firstSort(['h', 'k', 'd', 'f'])).toEqual(['d', 'f', 'h', 'k'])
    expect(firstSort([])).toEqual([])
    expect(firstSort([3, 2, 1])).toEqual([1, 2, 3])
  })
})
