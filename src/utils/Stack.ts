import { SinglyLinkedList } from './LinkedList'

// 设计循环队列
// MyCircularQueue(k): 构造器，设置队列长度为 k 。
// Front: 从队首获取元素。如果队列为空，返回 -1 。
// Rear: 获取队尾元素。如果队列为空，返回 -1 。
// enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
// deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
// isEmpty(): 检查循环队列是否为空。
// isFull(): 检查循环队列是否已满。

export class MyCircularQueue {
  size = 0
  list: Array<number> = []
  constructor(k: number) {
    this.size = k
  }

  Front(): number {
    return this.list[0] ?? -1
  }

  Rear(): number {
    return this.list[this.list.length - 1] ?? -1
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false
    }
    this.list.push(value)
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false
    }
    this.list.shift()
    return true
  }

  isEmpty(): boolean {
    return this.list.length === 0
  }

  isFull(): boolean {
    return this.list.length === this.size
  }
}

class MinLinkedList extends SinglyLinkedList {
  min: number
  next: MinLinkedList | null
  constructor(val: number, min: number) {
    super(val)
    this.min = min
    this.next = null
  }
}

// 最小栈
export class MinStack {
  head: MinLinkedList | null
  size = 0

  constructor() {
    this.head = null
  }

  push(val: number): void {
    this.size++
    const prevMin = this.head?.min ?? Infinity
    const min = val < prevMin ? val : prevMin

    const newNode: MinLinkedList = new MinLinkedList(val, min)
    if (this.head) {
      newNode.next = this.head
    }

    this.head = newNode
  }

  pop(): void {
    const node = this.head
    if (node) {
      this.head = node.next
      this.size--
    }
  }

  top(): number {
    return this.head ? this.head.val : Infinity
  }

  getMin(): number {
    return this.head?.min ?? Infinity
  }
}
