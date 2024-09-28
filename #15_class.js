const products = [
    { id: 1, name: 'Product 1', price: 1200 },
    { id: 2, name: 'Product 2', price: 2000 },
    { id: 3, name: 'Product 3', price: 4500 }
];

// class
class Product{
    country = 'Bangladesh';
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    
    // method
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product(1, 'le leno lenovo', 2000);
// console.log(lenovo);
// lenovo.speak('javascript class');

class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }

    lecture(){        
        console.log('Sir is teaching mathematics');
    }
}

const janker = new Teacher('Janker Mahbub', 'Programming Language')
const suma = new Teacher('Sumaya Akter', 'English')
console.log(janker);
console.log(suma);