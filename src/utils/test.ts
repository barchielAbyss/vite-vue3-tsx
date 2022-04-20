export const getArrayDiff = <T>(array: Array<T>, otherArr: Array<T>): Array<T> => {
  return array.filter((item) => !otherArr.includes(item))
}
