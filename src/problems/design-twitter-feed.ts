import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

export class Twitter {
  _time: number
  _tweetMap: Map<number, [number, number][]>
  _followMap: Map<number, Set<number>>

  constructor() {
    this._time = 0
    this._tweetMap = new Map<number, [number, number][]>() // userId -> [time, tweetId]
    this._followMap = new Map<number, Set<number>>() // userId -> [...followeeId]
  }

  postTweet(userId: number, tweetId: number) {
    if (!this._tweetMap.has(userId)) {
      this._tweetMap.set(userId, [])
    }
    this._tweetMap.get(userId)!.push([this._time, tweetId])
    this._time++
  }

  getNewsFeed(userId: number): number[] {
    const res: number[] = []
    const maxHeap = new MaxPriorityQueue<number[]>((v) => v[0])

    if (!this._followMap.has(userId)) {
      this._followMap.get(userId)!.add(userId)
    }

    for (const followeeId of this._followMap.get(userId)!) {
      if (this._tweetMap.has(followeeId)) {
        const tweets = this._tweetMap.get(followeeId)!
        const index = tweets.length - 1
        const [time, tweetId] = tweets[index]
        maxHeap.enqueue([time, tweetId, followeeId, index - 1])
      }
    }

    while (!maxHeap.isEmpty && res.length < 10) {
      const [_, tweetId, followeeId, nextIndex] = maxHeap.dequeue()!
      res.push(tweetId)

      if (nextIndex >= 0) {
        const [olderTime, olderTweetId] =
          this._tweetMap.get(followeeId)![nextIndex]
        maxHeap.enqueue([olderTime, olderTweetId, followeeId, nextIndex - 1])
      }
    }

    return res
  }

  follow(followerId: number, followeeId: number) {
    if (!this._followMap.has(followerId)) {
      this._followMap.set(followerId, new Set<number>())
    }
    this._followMap.get(followerId)!.add(followeeId)
  }

  unfollow(followerId: number, followeeId: number) {
    if (this._followMap.has(followerId)) {
      this._followMap.get(followerId)!.delete(followeeId)
    }
  }
}
