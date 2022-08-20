function r2d2(code) {

    if (!code.length) return
    let firstEle = code.shift();
    let speak = () => r2d2(code);

    if (firstEle === 0) {
        console.log('beep');
        setTimeout(speak,400);
    } else {
        console.log('boop');
        setTimeout(speak,800)
    }

};
code1 = [0,1,1,0];
r2d2(code1);
