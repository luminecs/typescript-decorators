// 方法装饰器可以修饰类中的方法，接收三个参数：
// target: 类的原型（对于实例方法）或构造函数（对于静态方法）
// propertyKey: 方法的名称
// descriptor: 方法的属性描述符

function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value // 原始方法
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments: ${args}`)
    return originalMethod.apply(this, args) // 调用原始方法
  }
}

export class Calculator {
  @logMethod
  add(a: number, b: number) {
    return a + b
  }
}
