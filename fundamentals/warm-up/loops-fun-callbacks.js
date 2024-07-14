
// functions
function sum(a, b) {
    return a + b;
}

console.log(sum(4,5))


// loops
// sum of first 50 natural numbers
let sumOfNaturalNumbers = 0;
for (let i = 1; i <= 50; i++) {
    sumOfNaturalNumbers += i;
}

console.log(sumOfNaturalNumbers);

// call-backs 
// we want to calculate sum of squares
function sumWithCallBack(a, b, callback) {
    //console.log(callback)
    const first = callback(a)
    const second = callback(b)

    return first + second;
}

const sumOfSquares = sumWithCallBack(2,3, function (a) { return a*a})

console.log(sumOfSquares);

const sumOfCubes = sumWithCallBack(2,3,function(a) {return a*a*a})

console.log(sumOfCubes);


