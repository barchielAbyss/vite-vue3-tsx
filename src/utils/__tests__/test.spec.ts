import { getArrayDiff } from '../test'

describe('/utils/index.ts', () => {
  it('getArrayDiff', () => {
    const array = [1, 2, 3, 4, 5]
    const otherArr = [1, 2, 3, 4, 5, 6]

    expect(JSON.stringify(getArrayDiff(array, otherArr))).toBe(JSON.stringify([]))
  })
})
