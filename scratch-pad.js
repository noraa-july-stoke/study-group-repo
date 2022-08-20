// const dynamicDivide = (divisor) => {
//     return function (num) {
//         return num / divisor;
//     }
// }


function dynamicAdder(adder) {
    return function(num) {
        return adder+num;
    }
}

const addTwo = dynamicAdder(2); // returns a function
console.log(addTwo(5)); // 7

const addTen = dynamicAdder(10); // returns a function
console.log(addTen(5)); // 15

const addNinety = dynamicAdder(90); // returns a function
console.log(addNinety(5)); // 95
