let score = "33abc"
// let score = undefined

// console.log(typeof score);
// console.log(typeof(score));

/*let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);  // it will return NaN i.e. Not a Number(NaN)
*/
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

/*let isloggedIn = 1

let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);
*/

// 1 => true; 0 => false
// "" => false
// "harry" => true

/*let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
*/

// *******************************  Operations  *******************************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**4);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "harry"

let str3 = str1 + str2  // concatenation
console.log(str3);

console.log("1" + 2);
console.log(1 + "2"); //
console.log("1" + 2 + 2); // it will return 122 instead of adding it will concatenate
console.log(1 + 2 + "2");

console.log((3 + 4) * 5 % 3);

console.log(+true); // it will return 1
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; // pre-increment
gameCounter++; // post-increment
console.log(gameCounter);