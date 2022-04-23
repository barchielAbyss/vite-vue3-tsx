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

// 反转字母大小写
export const reverseCase = (str: string): string => {
  if (!str) {
    return ''
  }
  let result = ''
  for (const s of str) {
    const sId = s.charCodeAt(0)
    if (sId >= 65 && sId <= 90) {
      result += String.fromCharCode(sId + 32)
    } else if (sId >= 97 && sId <= 122) {
      result += String.fromCharCode(sId - 32)
    } else {
      result += s
    }
  }

  return result
}
