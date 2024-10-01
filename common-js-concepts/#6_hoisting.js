print5(); // Output: 5
// print10(); //! ReferenceError: Cannot access 'print10' before initialization

// print15(); //! ReferenceError: print15 is not defined
console.log(print15); // undefined

for (var i = 0; i < 5; i++) {
    console.log(i);    
}
console.log('outside', i); // hoisting

// for (let i = 0; i < 5; i++) {
//     console.log(i);    
// }

// console.log('outside', i);

function print5(){
    console.log(5);
}

// const print10 = function print10(){
//     console.log(10);
// }
// print10(); // Output: 10

var print15 = function print15(){
    console.log(15);
}
// print15(); // Output: 15