export function anagramGroups(strs: string[]): string[][] {
  const map = new Map<string, string[]>()

  for (let str of strs) {
    const sorted = str.split('').sort().join()
    if (!map.has(sorted)) {
      map.set(sorted, [str])
    } else {
      map.set(sorted, [...(map.get(sorted) || []), str])
    }
  }

  return Array.from(map.values())
}
