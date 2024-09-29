// NOTE 8 ways to get undefined

/**
 *  1. variable that is not initialized will give undefined.
 *  2. function with no return value.
 *  3. function that is not passed will be undefined.
 *  4. if return has nothing on right side will be undefined.
 *  5. property that doesn't exists on an object will be undefined.
 *  6. accessing array elements outside of the index range.
 *  7. deleting an element inside an array will be undefined.
 *  8. set a value directly on right side will be undefined.
 **/

let first;
console.log(first); // undefined

function second(a, b) {
    const total = a + b;
}
const result = second(1, 2);
console.log(result); // undefined

function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

third(1, 2, 3); // 1 2 3 undefined

function fourth(a, b) {
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}

console.log(fourth(1, 2)); // 3
console.log(fourth(1, -2)); // undefined

const fifth = {id: 1, name: 'foo', age: 36}
console.log(fifth.age, fifth.address); // 36 undefined

const sixth = [4, 5, 2, 7, 6];
console.log(sixth[1], sixth[3], sixth[6]); // 5 7 undefined

delete sixth[1]; // you should note use it. Instead use split().
console.log(sixth[1]); // undefined
console.log(sixth); // [ 4, <1 empty item>, 2, 7, 6 ]

const eighth = undefined; // you should note use it. Instead use null.
console.log(eighth);

const ninth = null;
console.log(typeof ninth); // null
