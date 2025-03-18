import { Calculator } from './method-decorator.js'
import { Person } from './class-decorator.js'
import { User } from './field-decorator.js'
import { Example } from './parameter-decorator.js'
import { API, Customer } from './decorator-factory.js'

console.log('\n========== Class Decorator ==========\n')

const person = new Person()

console.log('\n========== Method Decorator ==========\n')

const calc = new Calculator()
console.log(calc.add(2, 3))

console.log('\n========== Field Decorator ==========\n')

const user = new User()
// user.id = 456 // Cannot assign to read only property 'id' of object '#<User>'
console.log(user.id)

console.log('\n========== Parameter Decorator ==========\n')

const ex = new Example()
ex.greet('Bob')

console.log('\n========== Decorator Factory ==========\n')

const customer = new Customer()
console.log((customer as any).metadata)

const api = new API()
api.fetchData().then(console.log).catch(console.error)

