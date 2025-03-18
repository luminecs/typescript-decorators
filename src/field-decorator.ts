// 属性装饰器用于修饰类的属性，接收两个参数：
//
// target: 类的原型（实例属性）或构造函数（静态属性）
// propertyKey: 属性名称
function readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false, // 设置属性为只读
  })
}

export class User {
  @readonly
  id?: number
}
