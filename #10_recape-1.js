/**
 *  1. var let const
 *  2. default parameters
 *  3. template string
 *  4. arrow function
 *  5. destructuring and spread operator
 *  6. object.keys and object.values  
 * 
 **/

const a = 56;
const numbers = [5, 6, 2, 8]
const person = {
    name: 'sakib khan'
}

// template string
const msg = `Hi, ${person.name} has a ${a} access to ${numbers[2]}`;
console.log(msg);

// arrow function
const square = x => x*x
const sum = (a, b) => a + b

// destructuring function & spread operator
const {} = {x:2, y:4, z:5, name: 'suma', age: 23}
const [] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']