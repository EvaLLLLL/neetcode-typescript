import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

export function lastStoneWeight(stones: number[]): number {
  const maxPQ = MaxPriorityQueue.fromArray(stones)

  while (maxPQ.size() > 1) {
    const x = maxPQ.dequeue()!
    const y = maxPQ.dequeue()!
    maxPQ.enqueue(Math.abs(x - y))
  }

  return maxPQ.size() > 0 ? maxPQ.front()! : 0
}
