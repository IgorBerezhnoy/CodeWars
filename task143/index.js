const hotpo = (n) => {
    debugger
    let count = 0;
    if (n === 1) {
        return count;
    }
    for (let i = 0; n !== 1; i++) {

        if (n % 2 === 0) {
            n = n / 2;
            count++;
        } else {
            n = 3 * n + 1;
            count++;
        }
    }
    return count;
};
console.log(hotpo(1));
console.log(hotpo(5));
console.log(hotpo(6));
console.log(hotpo(23));
