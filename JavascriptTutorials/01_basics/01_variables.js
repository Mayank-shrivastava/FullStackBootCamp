const accountId = 12324234
let accountEmail = "mayank@gmail.com"
var accountPassword = "1234354"
accountCity = "Orai"

// accountId = 2 // not allowed to change const variables
accountEmail = "hc@hc.com"
accountPassword = "2343243"
accountCity = "Bengaluru" // not a good way to declare variable
console.log(accountId);

let accountState // assigned with [undefined] value

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])