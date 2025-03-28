import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

export function taskScheduling(tasks: string[], n: number): number {
  let count = new Array(26).fill(0)
  for (let task of tasks) {
    count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++
  }

  let maxHeap = new MaxPriorityQueue<number>()
  for (let i = 0; i < 26; i++) {
    if (count[i] > 0) maxHeap.push(count[i])
  }

  let time = 0
  let queue: [number, number][] = []
  while (maxHeap.size() > 0 || queue.length > 0) {
    time++

    if (maxHeap.size() > 0) {
      let cnt = maxHeap.pop()! - 1
      if (cnt > 0) {
        queue.push([cnt, time + n])
      }
    }

    if (queue.length && queue[0][1] === time) {
      maxHeap.push(queue.shift()![0])
    }
  }

  return time
}
