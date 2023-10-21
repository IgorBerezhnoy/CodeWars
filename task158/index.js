function oneTwoThree(n) {
    let arrRes = ['0', '0'];
    let count = 9;
    for (let i = 0; i < n; i++) {
        count--;
        if (i === 0) {
            arrRes = ['', ''];
        }
        if (count === 0) {
            count = 9;
            arrRes[0] += '9';
        }
        arrRes[1] += 1;
    }
    if (n > 9) {
        if (n % 9 !== 0) {
            arrRes[0] += n % 9;
        }

    } else {
        arrRes[0] = n.toString();
    }
    return arrRes;
}

console.log(oneTwoThree(1));
console.log(oneTwoThree(2));
console.log(oneTwoThree(3));
console.log(oneTwoThree(4));
console.log(oneTwoThree(19));
console.log(oneTwoThree(45));
console.log(oneTwoThree(90));

//
// Test;
// failed;
// for input(n = 90):
// expected ['99999999990', '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'];
// to;
// deeply;
// equal ['9999999999', '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'];