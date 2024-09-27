const max = Math.max(32, 12, 54, 65, 23);
console.log(max);

const numbers = [22, 33, 44, 55, 66, 77, 88, 99];
// console.log(...numbers);

const arrayMax = Math.max(...numbers);
console.log(arrayMax);

// use spread operator to copy
const friends1 = [24, 45, 65, 12];
const friends2 = friends1;

friends2.push(77);

console.log(friends1);
console.log(friends2);

// copy elements using spread operator (...)
const friends3 = [...friends1];
friends3.push(88);
console.log(friends3);

// add extra elements while copying

const friends4 = [1, 2, ...friends1, 100, 200];
console.log(friends4);
