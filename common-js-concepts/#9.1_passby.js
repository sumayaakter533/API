let num1 = 5;
let num2 = 8;

function multiply(a, b) {
    a = 10;
    const result = a * b;
    return result;
}
console.log(num1); // 5
const output = multiply(num1, num2);
console.log(num1); // 10
console.log(output); // Output: 40


let student1 = {name: 'suma', partner: 'rafa'};
let student2 = {name: 'jarin', partner: 'raja'};

function makeMovie(couple1, couple2) {
    couple1.name = 'sumaya';
    couple2.partner = 'maya';
}

console.log(student1, student2);
// Output: { name: 'suma', partner: 'rafa' } { name: 'jarin', partner: 'raja' }

makeMovie(student1, student2);

console.log(student1, student2);
 // Output: { name: 'sumaya', partner: 'rafa' } { name: 'jarin', partner: 'maya' }

// NOTE: kono function er vitore primitive data type er value change/ modify korle outer scope a sei variable er data k modify kore na. kintu non-primitive er khetre value change/ modify kore.

// NOTE: primitive types are pass by value
// NOTE: non-primitive types are pass by reference