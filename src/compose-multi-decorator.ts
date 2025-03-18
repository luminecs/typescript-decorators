// 多个装饰器组合
// 装饰器可以叠加使用，从下往上依次执行。
function firstDecorator(target: Function) {
  console.log("First decorator executed");
}

function secondDecorator(target: Function) {
  console.log("Second decorator executed");
}

@firstDecorator
@secondDecorator
class Test {}

// 输出:
// Second decorator executed
// First decorator executed
