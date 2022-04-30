// 实现一个类，我们要尽量做到，高内聚 和 低耦合，如何去做，应该使用以下的原则规范

// 开闭原则 OCP
// 开闭原则：对扩展开放，对修改关闭 (老代码不要改动)
// 对扩展开放：允许新增一些类型，但是不允许修改现有代码
// 对修改关闭：不允许修改现有代码，但是允许增加新的类型
// demo:
export abstract class Sort {
  constructor(public name: string) {}
  abstract sort<T>(arr: Array<T>): Array<T>
}

export class firstSort extends Sort {
  sort<T>(arr: T[]): T[] {
    return arr
  }
}

export abstract class BubbleSort extends Sort {
  sort<T>(arr: T[]): T[] {
    return arr.sort()
  }
  abstract filter<T>(arr: Array<T>): Array<T>
}

export class MyArray extends BubbleSort {
  filter<T>(arr: T[]): T[] {
    return arr
  }
}

// 单一职责 SRP
// 单一职责：一个类只负责一个功能，不允许有多个功能（职责拆分）
// 一个类尽可能单一，不要太复杂，如果一个类代码超过100行方法超过10个，那么就要拆分成多个类
// 类似的场景：数据库分表
// demo:
export class User {
  public userId: string
  public userName: string
  constructor(public user: User) {
    this.userId = user.userId
    this.userName = user.userName
  }
  set() {
    console.log('set')
  }
  get() {
    console.log('get')
  }
}

export abstract class UserInfo extends User {
  public userAge: number
  public userSex: string
  public userAddress: string
  constructor(user: UserInfo) {
    super(user)
    this.userAge = user.userAge
    this.userSex = user.userSex
    this.userAddress = user.userAddress
  }
  setAge(): number {
    console.log('setAge')
    return this.userAge
  }
  getAge() {
    console.log('getAge')
  }
  setSex() {
    console.log('setSex')
  }
  getSex() {
    console.log('getSex')
  }
  setAddress() {
    console.log('setAddress')
  }
  getAddress() {
    console.log('getAddress')
  }
  abstract clear(): void
}

// 里氏替换原则 LSP
// 里氏替换原则：子类可以替换父类，但是不能替换接口（接口统一）
// 优点：提高代码可扩展性 复用性
// 缺点：类的耦合性 （父级定义了，子级如果需要定义也要去实现）
// 扩展：多态是实现里氏替换原则的基础
// demo:
export abstract class AbstractDrink {
  abstract getPrice(): number // 父类规则 返回的文字定义是价格
}

export class Coffee extends AbstractDrink {
  getPrice(): number {
    return 10 // 子类实现的定义必须是价格
  }
}

export class Tea extends AbstractDrink {
  getPrice(): number {
    return 20 // 子类实现的定义必须是价格
  }
}

class Customer {
  getDrink(drink: AbstractDrink) {
    return drink.getPrice()
  }
}

const customer = new Customer()
console.log(customer.getDrink(new Coffee()))
console.log(customer.getDrink(new Tea()))

// 依赖倒置原则 DIP
// 依赖倒置原则：一个类不应该依赖于其他类，而应该依赖于抽象
// 只关心接口，不关心具体实现
// demo:
interface Tree {
  type: string
  height: number
}

class BTree implements Tree {
  type = 'B'
  height = 100
}

class CTree implements Tree {
  type = 'C'
  height = 200
}

class Player {
  constructor(public tree: Tree) {}
  getTreeHeight() {
    return this.tree.height
  }
}

const playerUseBTree = new Player(new BTree())
playerUseBTree.getTreeHeight()
const playerUseCTree = new Player(new CTree())
playerUseCTree.getTreeHeight()

// 接口隔离原则 ISP
// 接口隔离原则：一个类应该只依赖接口，而不依赖实现细节 （拆分）
// demo:

// 错误的示范 一个类 包含各种类型的接口 get Company, get User
// class UserConfig {
//   getUser(): void {}
//   setUser(): void {}
//   getCompany(): void {}
//   setCompany(): void {}
// }

class UserConfig {
  get(): void {
    console.log('getUser')
  }
  set(): void {
    console.log('setUser')
  }
}

class CompanyConfig {
  get(): void {
    console.log('getCompany')
  }
  set(): void {
    console.log('setCompany')
  }
}

// 迪米特法则 DIT
// 迪米特法则：一个类应该只依赖其他类的接口，而不依赖实现细节
// 降低类之间的耦合 类定义要尽量实现内聚 少用 public 尽量使用 private、 protected
// demo:

// 最小单元
class UserPlayer {
  run() {
    console.log('user run')
  }
}

class UserManager {
  private users: Array<UserPlayer>
  constructor(user?: UserPlayer) {
    this.users = user ? [user] : []
  }
  addUser(user: UserPlayer) {
    this.users.push(user)
  }
  run() {
    this.users.forEach((user) => user.run())
  }
}

class CompanyManager {
  private managers: Array<UserManager>
  constructor(manager?: UserManager) {
    this.managers = manager ? [manager] : []
  }
  addManager(manager: UserManager) {
    this.managers.push(manager)
  }
  run() {
    this.managers.forEach((manager) => manager.run())
  }
}

class CityManager {
  private managers: Array<CompanyManager>
  constructor(manager?: CompanyManager) {
    this.managers = manager ? [manager] : []
  }
  addManager(manager: CompanyManager) {
    this.managers.push(manager)
  }
  run() {
    this.managers.forEach((manager) => manager.run())
  }
}

const city = new CityManager()
city.addManager(new CompanyManager())
city.run()
