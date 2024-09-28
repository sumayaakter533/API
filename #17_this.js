class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    read(){
        console.log(`${this.name} is reading hunting adeline`);
    }
}

const rose = new Person('rose', 21);
console.log(rose); // Output: Person { name: 'rose', age: 21 }
rose.read()

// NOTE: research more about `this` method
