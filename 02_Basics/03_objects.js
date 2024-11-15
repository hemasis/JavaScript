//  singleton
// factory

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Lucky",
    "full name": "Hemasis Padhi",
    [mySym]: "mykey1",
    age: 20,
    location: "Bangalore",
    email: "lucky@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof  JsUser[mySym])

JsUser.email = "lucky@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "hemasisp@outlook.com"
// console.log(JsUser);


JsUser.greeeting = function(){
    console.log("Hello, JsUser");
}

console.log(JsUser.greeting);