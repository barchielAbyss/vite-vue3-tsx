// Factory

// 基础工厂
export interface IStore {
  set(key: string, value: any): void
  get(key: string): any
}

class UserInfo {
  public name: string
  constructor(name: string, public store: IStore) {
    this.name = name
  }
  set() {
    this.store.set('userInfo', JSON.stringify(this))
  }
  get() {
    this.store.get('userInfo')
  }
}

class Store implements IStore {
  private store: { [key: string]: any } = {}
  set(key: string, value: any) {
    this.store[key] = value
  }
  get(key: string) {
    return JSON.parse(this.store[key])
  }
}

const mongodb = {
  insert(key: string, value: any) {
    console.log('mongodb insert', key, value)
  },
  find(key: string) {
    console.log('mongodb insert', key)
  },
}

class SeversStore implements IStore {
  async set(key: string, value: any) {
    await mongodb.insert(key, value)
  }
  get(key: string) {
    return mongodb.find(key)
  }
}

export const createUserInfo = (name: string): UserInfo => {
  const store = new Store()
  const userInfo = new UserInfo(name, store)
  return userInfo
}

export const createServerStore = (name: string): IStore => {
  const store = new SeversStore()
  const userInfo = new UserInfo(name, store)
  return userInfo
}
