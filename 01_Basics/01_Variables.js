const accountId = 14453
let accountEmail = "harry@gmail.accountEmail"
var accountPassword = "password123"
accountcity = "New York"
let accountState;   // it will give undefined because value is not assigned

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "212121212121"
accountcity = "Los Angeles"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);

/*
Prefer not to use var 
because of issue in block & functional scope
*/