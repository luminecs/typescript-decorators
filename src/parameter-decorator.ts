// 参数装饰器修饰方法参数，接收三个参数：
// target: 类的原型（实例方法）或构造函数（静态方法）
// propertyKey: 方法名称
// parameterIndex: 参数索引

function logParameter(
  target: any,
  propertyKey: string,
  parameterIndex: number,
) {
  console.log(`Parameter at index ${parameterIndex} in method ${propertyKey}`)
}

export class Example {
  greet(@logParameter name: string) {
    console.log(`Hello ${name}`)
  }
}
