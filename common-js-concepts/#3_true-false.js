/**
 *  ANCHOR Truthy values
 *  1. Non-empty strings: `Hello`, `0`, `false`.
 *  2. Non-zero numbers (+ve / -ve other than 0): `1`, `-42`, `3.14`.
 *  3. Objects: All objects, including `empty objects {}` and `arrays []`, are truthy.
 *  4. Functions: All functions are considered truthy.
 *  5. Special numbers: `Infinity` and `Infinity` are also considered truthy.
 *  6. Symbol: Any value of the `Symbol` type is truthy.
 *  7. BigInt: Any BigInt value that is not `0n` is truthy.
 *  8. true.
 **/

/**
 *  ANCHOR Falsy values
 *  1. false
 *  2. 0 (the number zero)
 *  3. -0 (negative zero)
 *  4. "" or '' (empty string)
 *  5. null
 *  6. undefined
 *  7. NaN
 **/

const x = false;
if(x){
    console.log('x is truthy');
}else{
    console.log('x is falsy');
}

// check falsy
const y = null;
if(!y){
    console.log('y is falsy');
}

// check truthy
const z = "hello";
if(z){
    console.log('z is truthy');
}

if(!!z){
    console.log('z is truthy');
}