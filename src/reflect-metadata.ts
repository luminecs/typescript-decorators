import 'reflect-metadata'

function metadata(key: string, value: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata(key, value, target, propertyKey)
  }
}

export class Product {
  @metadata('type', 'premium')
  price: number = 100
}

