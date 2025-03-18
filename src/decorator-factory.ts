// 装饰器工厂是一个返回装饰器函数的函数，允许传递参数来定制装饰器行为。
function addMetadata(metadata: string) {
  return function (target: Function) {
    // 添加元数据到原型
    target.prototype.metadata = metadata
  }
}

// 带参数的类装饰器
@addMetadata('VIP')
export class Customer {
  metadata?: string // 添加到实例上
}

function retry(times: number) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value
    descriptor.value = async function (...args: any[]) {
      for (let i = 0; i < times; i++) {
        try {
          return await originalMethod.apply(this, args)
        } catch (e) {
          console.log(`Attempt ${i + 1} failed`)
          if (i === times - 1) throw e
        }
      }
    }
  }
}

export class API {
  @retry(3)
  async fetchData() {
    if (Math.random() > 0.3) throw new Error("Network error");
    return "Success";
  }
}
