// 2 parameters
const difference = (x, y) => x - y;

// multiple parameters
const multiply = (a, b, c) => a * b * c;

// single parameter - first way
const getAge = person => person.age; // implicit parameter
const student = {name: 'suma', age: 23};
const age = getAge(student);

console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([4, 6, 2, 9, 2]);
console.log(third);

const doubleIt = num => num * 2;
console.log(doubleIt(4));

// no parameter
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mul = x * y * z;

    // const result = sum + mul ;
    // return

    return {
        sum,
        mul
    }; // explicit return
};

console.log(doMath(2, 3, 4));

/*-----------------------------------------------------------------------*/

// ANCHOR difference-between-arrow-and-normal-function

function normalFunc() {
    console.log(arguments); // Outputs: [Arguments] { '0': value1, '1': value2, ... }
}

console.log(normalFunc());

const arrowFunc = () => {
    console.log(arguments); // ReferenceError: arguments is not defined
};

console.log(arrowFunc());

//LINK: More differences - https://chatgpt.com/share/66f6aba5-ad00-8012-9465-9a9e55fe6398
