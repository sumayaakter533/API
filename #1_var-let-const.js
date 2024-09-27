// var : no reason to use this
// let : allow it to be reassigned
// const : do not allow it to be reassigned

const money = 24;
// money =50; // TypeError: Assignment to constant variable.

const rich = money+24;
console.log(rich);  

let count = 0;
// const count = 0; // TypeError: Assignment to constant variable.
count = count + 10;
console.log(count);

// Array.
const numbers = [1, 2, 3, 4, 5, 6, 7]
numbers[2] = 8;
numbers.push(9);
console.log(numbers);

// NOTE: const doesn't allow reassigning of elements but we can modify  the elements, also push/pop the elements.

// Object.
const student ={
    name: 'John',
    age: 25,
}
console.log(student);

student.name = 'Sumaya';
student.age = 23;

console.log(student);

// loop.
// const sum = 0; // TypeError: Assignment to constant variable.
let sum = 0;
for (let i = 0; i < 10; i++) {
    const num = i;
    sum = sum + num;    
}
console.log(sum);

// NOTE difference between const sum and const i:
// LINK https://chatgpt.com/share/66f4171c-9bdc-8012-9649-ecc90fa3bf20
