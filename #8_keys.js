const glass = {
    name: 'glass',
    color: 'white', 
    price: 100, 
    isCleaned:true
};
// console.log(glass);

const keys = Object.keys(glass);
const values = Object.values(glass);
// console.log(keys, values);

// spread operator
// console.log(...keys);
// console.log(...values);

const pair = Object.entries(glass);
// console.log(pair);
// ANCHOR Output: array of arrays / two dimensional arrays
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'white' ],
//     [ 'price', 100 ],
//     [ 'isCleaned', true ]
// ]

// NOTE : Javascript object key and properties differences

// ANCHOR delete a object property
// delete glass.isCleaned;
// console.log(glass);

// NOTE : It doesn't delete the property from the object but hide it
const {isCleaned, ...removeIsCleanedFromGlass} = glass;
// console.log(removeIsCleanedFromGlass);
// console.log(glass);

// ANCHOR freeze object
// Object.freeze(glass);
glass.price = 200;
delete glass.color;
// console.log(glass);

// ANCHOR seal object

Object.seal(glass);
glass.price = 2000;
console.log(glass);