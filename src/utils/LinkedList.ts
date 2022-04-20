/**
 * 链表逻辑结构
 * 1. SinglyLinkedList 单向链表
 * 2. DoublyLinked 双向链表
 */

export class SinglyLinkedList {
  val: number
  next: SinglyLinkedList | null
  constructor(val: number) {
    this.val = val
    this.next = null
  }
}

export class DoublyLinked {
  val: number
  next: DoublyLinked | null
  prev: DoublyLinked | null
  constructor(val: number) {
    this.val = val
    this.next = null
    this.prev = null
  }
}
