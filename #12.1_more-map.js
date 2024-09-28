const numbers = [3, 5, 2, 6, 12];
const doubled = numbers.map(num => num * 2);
const fiveBonus =  numbers.map(num => num+5);
const halves = numbers.map(num => num/2);

console.log(doubled); // Output: [6, 10, 4, 12, 24]
console.log(fiveBonus); // Output: [8, 10, 7, 11, 17]
console.log(halves); // Output: [1.5, 2.5, 1, 3, 6]

const friends = ['suma', 'jarin', 'lumina', 'olivia'];
const lengths = friends.map(friend => friend.length);
console.log(lengths); // Output: [4, 5, 6, 6]

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter); // Output: ['s', 'j', 'l', 'o']

const lastLetter = friends.map(friend => friend[friend.length - 1]);
console.log(lastLetter); // Output: ['a', 'n', 'a', 'i']
