/* 解决计算精度错误问题 0.1 + 0.2 !== 0.3 */
export const stripNum = (num: number, precision = 100) => {
  if (!precision) {
    return 0
  }
  return Number(parseFloat(num.toPrecision(precision)))
}

export const preciseNumbers = (value: number, digits = 12) => {
  const size = Math.pow(10, digits)
  return stripNum(Math.round(stripNum(Math.abs(value) * size)) / size)
}
