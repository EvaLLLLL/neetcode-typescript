import { MinPriorityQueue } from '@datastructures-js/priority-queue'

export class KthLargest {
  k: number
  minHeap: MinPriorityQueue<number>
  constructor(k: number, nums: number[]) {
    this.k = k
    this.minHeap = MinPriorityQueue.fromArray(nums)

    while (this.minHeap.size() > k) {
      this.minHeap.dequeue()
    }
  }

  add(val: number): number | null {
    this.minHeap.enqueue(val)
    if (this.minHeap.size() > this.k) {
      this.minHeap.dequeue()
    }
    return this.minHeap.front()
  }
}
