const numbers = [0, 2, 4, 6, 8, 10, 12]
const doubled = [];

for (const num of numbers) {
    const doubleValue = num * 2;
    doubled.push(doubleValue);
}

// console.log(doubled);

// map => loops through each element of the array and do the operation that you passed in th call back function and hold the result form each operation in an array and finally return your the array.


function doubleIt(num) {
    console.log('num now', num);
    // console.log(('num now', num));
    return num * 2;
}

const result = numbers.map(doubleIt);
console.log(result);

const double2 = n => n*2 // arrow function
// const output = numbers.map(double2);
const output = numbers.map(n => n*2);
console.log(output);
