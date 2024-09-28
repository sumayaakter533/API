class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
    console.log(`${this.name} is moving.`);
    }
}

class Bus extends Vehicle{
    constructor(name, price, seats, ticketPrice){
        super(name, price);
        this.seats = seats;
        this.ticketPrice = ticketPrice;
    }
}

class Truck extends Vehicle{
    constructor(name, price, cargoCapacity, fuelConsumption){
        super(name, price);
        this.cargoCapacity = cargoCapacity;
        this.fuelConsumption = fuelConsumption;
    }
}

// FIXME: Prototypal inheritance
// FIXME: Syntactic sugar - class 