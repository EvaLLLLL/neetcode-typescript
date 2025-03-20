import { MinPriorityQueue } from '@datastructures-js/priority-queue'

export function kClosestPointsToOrigin(points: number[][], k: number) {
  const minHP = new MinPriorityQueue<[number, number]>(
    ([x, y]) => x ** 2 + y ** 2
  )

  for (let [x, y] of points) {
    minHP.enqueue([x, y])
  }

  let res: [number, number][] = []
  for (let i = 0; i < k; i++) {
    res.push(minHP.dequeue()!)
  }

  return res
}
