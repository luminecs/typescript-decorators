import { Calculator } from './method-decorator.js'
import { Person } from './class-decorator.js'

console.log("\n========== Class Decorator ==========\n")

const person = new Person()

console.log("\n========== Method Decorator ==========\n")

const calc = new Calculator()
console.log(calc.add(2, 3))
