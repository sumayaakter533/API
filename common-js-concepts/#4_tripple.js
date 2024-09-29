// const first = '1';
// const second = true;

// if(first == second){
//     console.log('values are equal');
// }else{
//     console.log('values are not equal');
// }

// const first = '0';
// const second = false;

// if(first == second){
//     console.log('values are equal');
// }else{
//     console.log('values are not equal');
// }

// const first = '1';
// const second = true;

// if(first == second){
//     console.log('values are equal');
// }else{
//     console.log('values are not equal');
// }


// NOTE difference between double equal and triple equal
// NOTE difference between type coercion and type conversion
// NOTE avoid double equal and used triple equal
// NOTE equal comparison doesn't work with non-primitive types
// NOTE equal comparison compare values of two primitive types
// NOTE equal comparison compare references of two non-primitive types

// const first = [];
// const second = [];

// if(first == second){
//     console.log('values are equal');
// }else{
//     console.log('values are not equal');
// }

// Output: values are not equal;


const first = [];
const second = first;

if(first == second){
    console.log('values are equal');
}else{
    console.log('values are not equal');
}

// Output: values are equal;