const name = "lucky"
const repocount = 10

// console.log(name + repocount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('harry')

console.log(gameName[0]);
console.log(gameName.__proto__);

// different string function and there are so many string function in js. You can check it on MDN docs
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

let newString = gameName.substring(0, 4)
console.log(newString);

let anotherString = gameName.slice(-5, 2)
console.log(anotherString);

const newStringOne = " harry  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harry.com/harry%20coder"

console.log(url.replace('%20', '-'))

url.includes(url.replace('%20', '-'))

console.log(url.includes('hitesh'))