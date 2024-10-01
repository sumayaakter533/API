// NOTE kono function er parameter hisebe onno ekta function er nam thakle, function k function er vitor call kora jay. aita k call back function bole. 

function greeting(greetingHandler, name) {
    // console.log(greetingHandler);
    // console.log(greetingHandler());
    greetingHandler(name);
}


// greeting('suma'); // suma
// const name = 'suma'; // suma
// greeting(name);

// const number = 23;
// const number = [23, 54, 65];
// greeting(number);

// const laptop = {
//     name: 'MacBook Pro',
//     memory: 16,
//     model: 'Retina',
//     year: 2021
// }
// greeting(laptop);

function greetingHandler(name) {
    console.log('Good morning', name);
}
// greeting(greetingHandler) // [Function: greetingHandler]
greeting(greetingHandler, 'suma')


function greetEvening(name) {
    console.log('Good evening', name);
}

greeting(greetEvening, 'suma')


function greetNight(name) {
    console.log('Good night', name);
}

greeting(greetNight, 'suma')