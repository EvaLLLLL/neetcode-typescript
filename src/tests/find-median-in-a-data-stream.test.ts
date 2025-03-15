import { MedianFinder } from '../problems/find-median-in-a-data-stream'

describe('find-median-in-a-data-stream', () => {
  it('should handle empty stream', () => {
    const medianFinder = new MedianFinder()
    expect(medianFinder.findMedian()).toBe(0)
  })

  it('should find median with odd number of elements', () => {
    const medianFinder = new MedianFinder()
    medianFinder.addNum(2)
    expect(medianFinder.findMedian()).toBe(2)

    medianFinder.addNum(3)
    medianFinder.addNum(4)
    expect(medianFinder.findMedian()).toBe(3)
  })

  it('should find median with even number of elements', () => {
    const medianFinder = new MedianFinder()
    medianFinder.addNum(2)
    medianFinder.addNum(3)
    expect(medianFinder.findMedian()).toBe(2.5)

    medianFinder.addNum(4)
    medianFinder.addNum(5)
    expect(medianFinder.findMedian()).toBe(3.5)
  })

  it('should handle negative numbers', () => {
    const medianFinder = new MedianFinder()
    medianFinder.addNum(-1)
    medianFinder.addNum(-2)
    medianFinder.addNum(-3)
    expect(medianFinder.findMedian()).toBe(-2)
  })

  it('should handle duplicate numbers', () => {
    const medianFinder = new MedianFinder()
    medianFinder.addNum(1)
    medianFinder.addNum(1)
    medianFinder.addNum(1)
    expect(medianFinder.findMedian()).toBe(1)
  })
})
