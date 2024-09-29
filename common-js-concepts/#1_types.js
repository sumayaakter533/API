// JavaScript is a dynamic type programming language.

// Primitive data type
const number = 13;
const string = 'Sumaya Akter';
const boolean = true;

// Non-primitive data type
const array = [1, 2, 3, 4, 5, 6, 7];
const object = {id: 1, class: 12};

// Type checking
console.log('Number:', typeof number); // Output: Number
console.log('String:', typeof string); // Output: String
console.log('Boolean:', typeof boolean); // Output: Boolean
console.log('Array:', typeof array); // Output: Object
console.log('Object:', typeof object); // Output: Object

// Re-assign value to variables
let x = 5;
let y = x;
console.log(x, y); // Output: 5, 5

y = 10;
console.log(x, y); // Output: 5, 10

let p = {job: 'web developer'};
let q = p;
q = {job: 'backend developer'};
console.log(p, q); // Output: { job: 'web developer' } { job: 'backend developer' }

// NOTE: Non-primitive data types hold the variable references
q = p;
q.job = 'frontend developer';
console.log(p, q); // Output: { job: 'frontend developer' } { job: 'frontend developer' }
