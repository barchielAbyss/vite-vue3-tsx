// 简易的发布订阅模式
export class PubSub {
  events: { [key: string]: Array<(...args: Array<any>) => any> } = {}
  on(event: string, fn: (...args: Array<any>) => any) {
    this.events[event] = this.events[event] || []
    this.events[event].push(fn)
  }
  emit(event: string, ...args: Array<any>) {
    this.events[event] = this.events[event] || []
    this.events[event].forEach((fn) => fn(...args))
  }
}

// 简易的观察者模式
export class Observer {
  events: { [key: string]: Array<(...args: Array<any>) => any> } = {}
  on(event: string, fn: (...args: Array<any>) => any) {
    this.events[event] = this.events[event] || []
    this.events[event].push(fn)
  }
  emit(event: string, ...args: Array<any>) {
    this.events[event] = this.events[event] || []
    this.events[event].forEach((fn) => fn(...args))
  }
}
