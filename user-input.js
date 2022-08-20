const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

rl.question('whats your fav num', (num) => {
    console.log(num)
    rl.close()
});



// const handleFirst = (answer) => {
//     console.log(`Hello, ${answer}!`);
//     rl.question('Where are you from? ', handleSecond);
// }

// const handleSecond = (answer) => {
//     console.log(`${answer} is a great place!`);
//         rl.question('How are you doing? ', handleThird);
// }

// const handleThird = (answer) => {
//     console.log(`Very cool ${answer}!`);
//     rl.close();
// };

// rl.question('what is your name? ', handleFirst);
