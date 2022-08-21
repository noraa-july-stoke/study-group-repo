/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/

// function([1,0,0,1,0,1])
// console log beep for 0 w/400ms delay, boop for 1 w/800 ms delay





function r2d2Speaks(code) {
    if (!code.length) return;
    let char = code.shift();
    if (char === 0) {
        setTimeout(()=> {
            console.log('beep');
            return r2d2Speaks(code);
        }, 400)
    } else if (char === 1) {
        setTimeout(()=> {
            console.log('boop');
            return r2d2Speaks(code);
    }, 800);
    }

}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}
