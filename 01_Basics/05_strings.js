const name = "lucky"
const repocount = 10

// console.log(name + repocount + "Value");

// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('harry')

console.log(gameName[0]);
console.log(gameName.__proto__);

// different string function and there are so many string function in js. You can check it on MDN docs
console.log("Word length is: "+gameName.length);
console.log("Uppercase: "+gameName.toUpperCase()); // Converts the letters to uppercase
console.log("Lowercase: "+gameName.toLowerCase()); // Converts the letters to lowercase
console.log("The letter at index "+gameName.charAt(2)); // returns the letter at the specified index
console.log(gameName.indexOf('t')); // returns the index number of the word specified

let newString = gameName.substring(0, 4) // it will return first 4 characters of the word ... 0 is for starting index and 4 is for ending index. Here we can't use -ve sign for start or end index
console.log(newString);

let anotherString = gameName.slice(-5, 2) // it will return the word from the last 5th index to 2nd index. Here '-' means from the last index
console.log(anotherString);

const newStringOne = " harry  "
console.log(newStringOne);
console.log(newStringOne.trim()); // it will remove the extra spaces from the string

const url = "https://harry.com/harry%20coder"

console.log(url.replace('%20', '-'))

url.includes(url.replace('%20', '-'))

console.log(url.includes('hitesh'))