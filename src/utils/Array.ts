// 二进制位移求值 O(n log n)
export const fullArray = <T>(array: Array<T>): { array: Array<Array<T>>; total: number } => {
  let total = 0
  const resList: Array<Array<T>> = []
  const len = Math.pow(2, array.length) - 1

  for (let i = 1; i <= len; i++) {
    let k = 0
    const t: Array<T> = []
    for (let s = i; s > 0; k++) {
      if (s & 1) {
        t.push(array[k])
      }
      s = s >> 1
    }

    if (t.length) {
      total++
      resList.push(t)
    }
  }

  return { array: resList, total }
}
