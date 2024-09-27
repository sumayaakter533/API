// function declaration
function add(a, b) {
    return a+b;
}

const sum = add(5, 10);
console.log(sum);


// function expression: anonymous function
const addNum = function(a, b){
    return a+b;
}

console.log(addNum(5,30));

// arrow function
const addArrow = (a,b) => a+b;
console.log(addArrow(10,20));

// NOTE Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a clear way compared to regular JavaScript functions.

