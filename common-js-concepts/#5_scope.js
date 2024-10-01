// ANCHOR function scope
// everything between a function's curly braces is knowns as functional scope elements.
function add(a, b) {
    const total = a + b;
    // console.log(a, b);

    // ANCHOR block scope
    // everything between different js element's curly braces is knowns as block scope elements.
    if(b < 5){
        // if block element
        const sum = 25 + a + b; 
    }else {
        const sum = 5 + a + b;
        var current = sum;
        // NOTE var doesn't follow the block scope characteristics. when we name a variable with var inside a block scope, it doesn't follow the block scope and take the variable at the top level. it is called hoisting. that's we should avoid using var to name a variable.
    }

    // console.log(sum); //! ReferenceError: sum is not defined
    console.log(current);
    return current;
}

// console.log(a, b); //! ReferenceError: a is not defined
// console.log(total); //! ReferenceError: total is not defined
// console.log(sum); //! ReferenceError: sum is not defined
add(5, 8); // 3