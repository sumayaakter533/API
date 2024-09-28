const products = [
    { id: 1, name: 'Product 1', price: 1200 },
    { id: 2, name: 'Product 2', price: 2000 },
    { id: 3, name: 'Product 3', price: 4500 }
];

// map()
const names = products.map(product => product.name);
console.log(names);

const prices = products.map(product => product.price);
console.log(prices);

// foreach()
products.forEach(product => console.log(product.id));

// filter()
const expenses = products.filter(product => product.price >= 2000);
console.log(expenses);

// find()
const affordable = products.find(product => product.price < 2000);
console.log(affordable);

// reduce()
const total = products.reduce((accumulator, current) => accumulator + current.price, 0);
console.log(total);

