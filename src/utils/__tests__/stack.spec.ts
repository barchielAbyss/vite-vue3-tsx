import { MinStack, MyCircularQueue } from '@/utils/Stack'

const stack = new MinStack()
const circularQueue = new MyCircularQueue(8)

describe('Stack-Test', () => {
  it('MinStack', () => {
    stack.push(1)
    stack.push(1)
    stack.push(3)
    expect(stack.top()).toBe(3)

    stack.pop()
    expect(stack.getMin()).toBe(1)

    stack.pop()
    expect(stack.getMin()).toBe(1)

    stack.pop()
    stack.push(3)
    expect(stack.top()).toBe(3)

    expect(stack.getMin()).toBe(3)

    stack.push(-4)
    expect(stack.top()).toBe(-4)
    expect(stack.getMin()).toBe(-4)

    stack.pop()
    expect(stack.getMin()).toBe(3)
  })

  it('MyCircularQueue', () => {
    expect(circularQueue.enQueue(3)).toBe(true)
    expect(circularQueue.enQueue(9)).toBe(true)
    expect(circularQueue.enQueue(5)).toBe(true)
    expect(circularQueue.enQueue(0)).toBe(true)

    expect(circularQueue.deQueue()).toBe(true)
    expect(circularQueue.deQueue()).toBe(true)

    expect(circularQueue.isEmpty()).toBe(false)

    expect(circularQueue.Rear()).toBe(0)

    expect(circularQueue.deQueue()).toBe(true)
  })
})
