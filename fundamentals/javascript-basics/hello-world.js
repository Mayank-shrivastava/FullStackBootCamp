// call backs

function sum(a , b) {
    return a + b
}

function displayResult(data) {
    console.log("Sum of two numbers is ", data)
}

function displayResultInSomeOtherFormat(data) {
    console.log("Result is ", data)
}
// Now the problem is that use single 
//functions and print the sum of two numbers

// concept of callbacks
// which means function calling a function
function callBackSum(a, b, fnToCall) {
    let sum = a + b;
    fnToCall(sum)
}

const ans = callBackSum(3,5,displayResult);


