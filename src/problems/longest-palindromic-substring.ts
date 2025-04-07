export function longestPalindromicSubstring(s: string): string {
  let res = ''

  for (let i = 0; i < s.length; i++) {
    // odd length
    let l = i
    let r = i
    let oddS = helper(s, l, r)
    if (oddS.length > res.length) res = oddS

    // even length
    l = i
    r = i + 1
    let evenS = helper(s, l, r)
    if (evenS.length > res.length) res = evenS
  }

  return res
}

function helper(s: string, l: number, r: number) {
  let res = ''
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    if (r - l + 1 > res.length) {
      res = s.substring(l, r + 1)
    }

    l--
    r++
  }

  return res
}
