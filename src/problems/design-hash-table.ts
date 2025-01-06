import { numberOfOneBits } from './number-of-one-bits'

class Node {
  key: number
  value: number
  next: Node | null
  constructor(key: number, value: number) {
    this.key = key
    this.value = value
    this.next = null
  }
}

class HashTable {}
