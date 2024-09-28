// ANCHOR foreach - does not return anything
const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.forEach(n => console.log(n));
const result = numbers.forEach(n => console.log(n*n));
// const result = numbers.forEach(n => n*n);

// console.log(result); // * undefined


// ANCHOR filter - selects elements based on a condition and returns an array with the elements that fulfill the condition. if no elements fulfill the condition then returns an empty array.
const players = [65, 87, 78, 56, 77, 60]
const selected = players.filter(p => p>70);

console.log(selected); // Output: [ 87, 78, 77 ]

const selected2 = players.filter(p => p%2 == 0);
console.log(selected2); // Output: [ 78, 56, 60 ]


const friends = ['suma', 'jarin', 'lumina', 'olivia'];
const oddFriends = friends.filter(f => f.length > 4);
console.log(oddFriends); // Output: [ 'jarin', 'lumina', 'olivia' ];


// ANCHOR find - finds the first element in the array that satisfies the provided testing function. returns the found element or undefined if no element is found.
const numbers2 = [1, 2, 3, 4, 5, 6];
const firstEven = numbers2.find(n => n%2 == 0);
console.log(firstEven); // Output: 2


// ANCHOR reduce - takes in an accumulator (initial value or the result of the previous call) and the current element. returns the accumulator after processing each element in the array.

const numbers4 = [4, 5, 6, 1, 4];
const total = numbers4.reduce((sum, current) => sum + current, 0)
console.log(total); // Output: 20

const total2 = numbers4.reduce((sum, current) => sum + current * 2, 0)
console.log(total2); // Output: 40