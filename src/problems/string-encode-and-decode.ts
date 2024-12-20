export function encode(strs: string[]): string {
  let result = ''

  for (let str of strs) {
    result += `${str.length}#${str}`
  }

  // {numberOfCharactors}#{str}
  return result
}

export function decode(str: string): string[] {
  let res = []
  let i = 0

  while (i < str.length) {
    let j = i

    while (str[j] !== '#') {
      j++
    }

    let length = Number(str.substring(i, j))
    i = j + 1
    j = i + length

    res.push(str.substring(i, j))

    i = j
  }

  return res
}
