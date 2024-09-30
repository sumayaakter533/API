function add(a, b) {
    const total = a + b;
    // console.log(a, b);

    if(b > 5){
        const sum = 25 + a + b; 
    }else {
        const sum = 5 + a + b;
        var current = sum;
    }

    // console.log(sum);
    console.log(current);
    return total;
}

// console.log(a, b); //! ReferenceError: a is not defined
// console.log(total); //! ReferenceError: total is not defined
// console.log(sum); //! ReferenceError: sum is not defined
add(5, 8); // 3