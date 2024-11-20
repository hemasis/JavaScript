// # Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34567893456789842n



// # Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "superman", "batman"]  // Array
let myObj = {  // elements inside the curly braces are objects
    name: "harry",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof myFunction); // it will return function type





// ********************************************************************

// STACK (Primtiive), HEAP (Non Primitive)

// if we keep inside the stack, it will be copied to another variable
// if we keep inside the heap, it will be referenced to another variable
let myYoutubename = "motorbeam"
let anothername = myYoutubename
anothername = "fasbeam"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "harry@gmail.com"

console.log(userOne.email);

