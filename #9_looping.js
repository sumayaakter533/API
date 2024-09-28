// NOTE : for fo use on array or string not in object
// NOTE : for in use on object

const numbers = [2,5,6,23]
for (const number of numbers) {
    // console.log(number);
}

const name = 'rayhana akter sumaya';
for(const char of name) {
    // console.log(char);
}

const glass = {
    name: 'glass',
    color: 'white', 
    price: 100, 
    isCleaned:true
};

for (const key in glass) {
    const value = glass[key];
    console.log(key, value);
}

// ANCHOR optional
const keys = Object.keys(glass);
// console.log(keys);

for (const key of keys) {
    const value = glass[key];
    console.log(key,value);
}
