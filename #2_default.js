// NOTE default --> if value is not provided, take this as a default value
// TODO default parameters
// function add(num1, num2) {
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result;
// }

// console.log(add(2, 3)); // 5
// console.log(add(2)); // NaN


function sum(num1=0, num2=0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

console.log(sum(2, 3)); // 5
console.log(sum(2)); // NaN

function fullName(first, last='') {
    const fullName = first + ' ' + last;
    console.log(first, last, fullName);
    return fullName
}

fullName('sumaya')

// default array: empty array
function friends(numbs = []) {
    
}

// default object: empty object
function person(human = {}) { 
    
}