export function longestCommonPrefixOfKStringsAfterRemoval(
  words: string[],
  k: number
): number[] {
  const n = words.length
  const answer: number[] = new Array(n).fill(0)
  const prefixCache: Map<string, number> = new Map()

  for (let i = 0; i < n; i++) {
    const remainWords = words.filter((_, idx) => idx !== i)
    const combinations = getCombinations(remainWords, k)
    let maxPrefixLen = 0

    for (const combo of combinations) {
      const comboKey = combo.sort().join(',')
      let prefixLen: number

      if (prefixCache.has(comboKey)) {
        prefixLen = prefixCache.get(comboKey)!
      } else {
        prefixLen = getLongestCommonPrefix(combo)
        prefixCache.set(comboKey, prefixLen)
      }

      maxPrefixLen = Math.max(maxPrefixLen, prefixLen)
    }

    answer[i] = maxPrefixLen
  }

  return answer
}

function getCombinations(arr: string[], k: number): string[][] {
  const result: string[][] = []

  function backtrack(start: number, curr: string[]) {
    if (curr.length === k) {
      result.push([...curr])
      return
    }

    for (let i = start; i < arr.length; i++) {
      curr.push(arr[i])
      backtrack(i + 1, curr)
      curr.pop()
    }
  }

  backtrack(0, [])
  return result
}

function getLongestCommonPrefix(strings: string[]): number {
  if (!strings.length) return 0

  let prefixLen = 0
  const firstStr = strings[0]

  for (let i = 0; i < firstStr.length; i++) {
    const char = firstStr[i]
    if (strings.every((str) => str[i] === char)) {
      prefixLen++
    } else {
      break
    }
  }

  return prefixLen
}
