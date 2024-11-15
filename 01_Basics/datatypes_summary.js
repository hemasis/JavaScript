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
