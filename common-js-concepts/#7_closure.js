function kitchen() {
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer);
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

const secondServer = kitchen();
console.log(secondServer);
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());

console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

// NOTE when you declare a function inside another function, then declared function can access all the properties(variables) of the parent function.

// ANCHOR search more about closure of functions.