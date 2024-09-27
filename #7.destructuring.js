const actor ={
    name: 'Lee Min Hoo',
    age: 30,
    gender: 'Male',
    profession: 'Actor',
    phone: '01880765830',
    movies: ['The Matrix', 'Inception', 'Interstellar']
}

// const name= actor.name;
// const age = actor.age;
// const phone = actor.phone;

// console.log(name, age, phone);

// NOTE - use property name as a variable that contains the property value
const {name}=actor
// const {age}=actor
const {gender}=actor
const {profession}=actor
// const {phone}=actor
const {movies}=actor


const {phone, age} = actor
console.log(phone);
console.log(age);

const {age:boyos} = actor
console.log(boyos);

console.log(`
    ${name}
    ${age}
    ${gender}
    ${profession}
    ${phone}
    ${movies}
    `);

    console.log(name);
    console.log(age);
    console.log(age);
    console.log(age);
    console.log(gender);

    // array destructuring
    const numbers = [34, 54];
    const [first, second] = numbers;

    console.log(first, second);

    // const [x,y] = [12, 44]

    // Advanced
    function doubleThem(a,b) {  
        return [a*2, b*2]
    }

    const [_1st, _2nd] = doubleThem(4,8);
    console.log(_1st, _2nd);


