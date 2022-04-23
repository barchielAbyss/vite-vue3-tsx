// 千分位拆分
export const thousandSeparator = (num: number): string => {
  let str = num.toString()
  const len = str.length
  if (len <= 3) {
    return str
  }

  for (let i = len - 3; i > 0; i -= 3) {
    str = str.slice(0, i) + ',' + str.slice(i)
  }

  return str
}
