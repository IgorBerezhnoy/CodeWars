function changeMe(moneyIn) {
    moneyIn = Number(moneyIn.slice(1)) * 100;
    let peso = '';
    for (let i = 0; 0 !== moneyIn; i++) {
        if ((moneyIn - 20) >= 0) {
            peso += '20p ';
            moneyIn -= 20;
        } else {
            peso += '10p ';
            moneyIn -= 10;
        }
    }
    return peso.trim();
}

console.log(changeMe('£1'));