// 冒泡排序
// export const sort = <T>(arr: Array<T>): Array<T> => {}

// 快速排序
// export const firstSort = <T>(arr: Array<T>): Array<T> => {}

export const firstSort = <T>(arr: T[] = []): T[] => {
  if (arr.length <= 1) {
    return arr
  }
  const len = arr.length
  const mid = arr[Math.floor(len / 2)]
  const left: T[] = []
  const right: T[] = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === mid) {
      continue
    }
    if (arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...firstSort(left), mid, ...firstSort(right)]
}
