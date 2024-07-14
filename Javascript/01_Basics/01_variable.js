// let, const, var in js
const accountId = 124343
let accountEmail = "mayank@google.com"
var accountPassword = "12343"
let accountState;
accountCity = "Orai"

accountEmail = "hc@hc.com"
accountPassword = "12323434"
accountCity = "gurgaon"

console.log(accountId)

/*
 Prefer not to use var 
 because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword,
     accountCity, accountState])