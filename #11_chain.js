// data access
const data = [{id:1, name: 'John', address: 'Bangladesh'}]
console.log(data[0].address);

const products = {
    count: 500,
    data: [
        {id: 1, name: 'Product 1', price: 100},
        {id: 2, name: 'Product 2', price: 200}
    ]
}

console.log(products.data[1].price);

const user = {
    id: 1,
    name: 'John Doe',
    address: {
        street:{
            number: 123,
            streetName: 'Main St'
        },
        city: 'New York',
        country: 'USA'
    }
}

const user2 = {
    id: 2,
    name: 'Jane Doe',
    address: {       
        number: 456,
        streetName: 'Second St'        
    }
}

console.log(user.address.street.streetName);
console.log(user2.address.street.streetName); // TypeError: Cannot read properties of undefined (reading 'streetName')

// optional chaining
console.log(user2.address.street?.streetName);

