// 类装饰器应用于类声明，在类被定义时执行。

// 定义一个简单的类装饰器
function logClass(target: Function) {
  console.log(`Class ${target} has been created`)
}

// 使用装饰器
@logClass
export class Person {
  name: string = 'Alice'
}

// @logClass 是装饰器语法，target 是被装饰的类的构造函数。
