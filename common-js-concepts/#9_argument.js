function sum (a, b, c) {
    console.log(arguments); // array like objects
    console.log(typeof arguments); // array like objects
    // arguments.push(45); //! you can't push elements in arguments as it ia not a array but array like objects

    const args = [...arguments];
    console.log(args); // convert the arguments to array args

    const result = a+b+c;
    return result;
}
const total = sum(2, 5, 6, 12, 26, 33); 
console.log(total);
console.log(sum.length); 
//NOTE kono ekta function er por .length pawa gele sei function a koto gulo parameter ache seta show kore. 